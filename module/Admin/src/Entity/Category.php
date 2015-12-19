<?php
/**
 * ED Zend Framework 2 Admin Module
 *  
 * @author madhukar.jadala <madhukar.jadala@gmail.com>
*/

namespace Admin\Entity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\Criteria;

// children - are the transaltions
// parent - is the original system

/**
 * Category
 *
 * @ORM\Table(name="certification_categories")
 * @ORM\Entity
 */
class Category
{
    /**
     * @ORM\OneToMany(targetEntity="Admin\Entity\Category", mappedBy="parent", cascade="remove")
     * @ORM\OrderBy({"name" = "ASC"})
     */
    protected $children;

    /**
     * @ORM\ManyToOne(targetEntity="Admin\Entity\Category", inversedBy="children")
     * @ORM\JoinColumn(name="category_parent_id", referencedColumnName="id")
     */
    protected $parent;
    
    /**
     * @var string
     *
     * @ORM\Column(name="category_name", type="string", length=100, nullable=false)
     */
    protected $name;
   
    /**
     * @var string
     *
     * @ORM\Column(name="category_order", type="integer", length=10, nullable=true)
     */
    protected $order;
    
    /**
     * @var string
     *
     * @ORM\Column(name="category_status_id", type="integer", nullable=false, length=10)
     */
    protected $status;
    
    /**
     * @var DateTime
     *
     * @ORM\Column(name="createddatetime", type="datetime", nullable=true)
     */
    protected $created;  
    
     /**
     * @var DateTime
     *
     * @ORM\Column(name="updateddatetime", type="datetime", nullable=true)
     */
    protected $modified;  
    
    /**
     * @var CsnUser\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="CsnUser\Entity\User")
     * @ORM\JoinColumn(name="createdby", referencedColumnName="id")
     * @Annotation\Exclude()
     */
    protected $createdBy;

    /**
     * @var CsnUser\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="CsnUser\Entity\User")
     * @ORM\JoinColumn(name="updatedby", referencedColumnName="id")
     * @Annotation\Exclude()   * 
     */
    protected $modifiedBy;
    
    /**
     * @var Exam[]
     *
     * @ORM\OneToMany(targetEntity="Admin\Entity\Exam", mappedBy="category", cascade="remove", fetch="EXTRA_LAZY")
     */
    protected $exams;
    
    /**
     * @var integer
     *
     * @ORM\Column(name="category_id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    public function __construct()
    {
        $this->children = new ArrayCollection; 
        $this->projects = new ArrayCollection();        
        $this->exams = new ArrayCollection;
        $this->created = new \DateTime();
    }
    
    /**
     * Get exams
     *
     * @return Exam[]
     */
    public function getExams()
    {
        return $this->exams;
    }
    
    /**
     * Get projects
     *
     * @return array
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * Add project
     *
     * @return Collection
     */
    public function addProject(\Engineer\Entity\Project $project)
    {
        return $this->projects[] = $project;
    }

    public function removeProject(\Engineer\Entity\Project $project)
    {
        $this->projects->removeElement($project);
    }

    /**
     * Get Name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set Name
     *
     * @param  string  $name
     * @return MasterSystem
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }
    
    /**
     * Get prefix
     *
     * @return string
     */
    public function getPrefix()
    {
        return $this->prefix;
    }

    /**
     * Set prefix
     *
     * @param  string  $prefix
     * @return MasterSystem
     */
    public function setPrefix($prefix)
    {
        $this->prefix = $prefix;
        return $this;
    }

    /**
     * Get Desc
     *
     * @return string
     */
    public function getDesc()
    {
        return $this->desc;
    }

    /**
     * Set Desc
     *
     * @param  string  $desc
     * @return MasterSystem
     */
    public function setDesc($desc)
    {
        $this->desc = $desc;
        return $this;
    }

    /**
     * Get Created
     *
     * @return DateTime
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Set Created
     *
     * @param  DateTime $created
     * @return Article
     */
    public function setCreated($created)
    {
        $this->created = $created;

        return $this;
    }
    
    /**
     * Get Modified
     *
     * @return DateTime
     */
    public function getModified()
    {
        return $this->modified;
    }

    /**
     * Set Modified
     *
     * @param  DateTime $created
     * @return MasterSystem
     */
    public function setModified($modified)
    {
        $this->modified = $modified;
        return $this;
    }

    /**
     * Get children
     *
     * @return Array
     */
    public function getChildren()
    {
        //$criteria = Criteria::create();
        //$criteria->where(Criteria::expr()->contains('name', $name));
        
        //return $this->children->matching($criteria);
        return $this->children;
    }


    /**
     * Add Child
     *
     * @param  Admin\Entity\MasterSystem $child
     * @return MasterSystem
     */
    public function addChild(\Admin\Entity\MasterSystem $child)
    {
        $child->setParent($this); // synchronously updating inverse side
        $this->children[] = $child;
        return $this;
    }

    /**
     * Remove Child
     *
     * @param  \Admin\Entity\MasterSystem $child
     * @return MasterSystem
     */
    public function removeChild(\Admin\Entity\MasterSystem $child)
    {
        $this->children->removeElement($child);
        $child->removeParent($this); // update the other site

        return $this;
    }

    /**
     * Get parent
     *
     * @return \Admin\Entity\MasterSystem
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set parent
     *
     * @param  \Admin\Entity\MasterSystem $parent
     * @return Article
     */
    public function setParent($parent) //can be null in this case
    {
        //public function setParent(\CsnCms\Entity\Article $parent) doesn't work with null parent
        $this->parent = $parent;
        //if ($parent) $parent->addChild($this); // Max nested functions update the inverse site
        return $this;
    }

    /**
     * Remove parent
     *
     * @return Article
     */
    public function removeParent(\Admin\Entity\MasterSystem $parent)
    {
        $this->parent = null;
        // $this->parent->removeElement($parent);
        // $parent->removeChild($this); // update othe site
        return $this;
    }
    
    /**
     * Set level
     *
     * @param  string $level
     * @return MasterSystem
     */
    public function setLevel($level)
    {
        $this->level = $level;
        return $this;
    }

    /**
     * Get level
     * @return string
     */
    public function getLevel()
    {
        return $this->level;
    }
    
    /**
     * Set hasNode
     *
     * @param  string $hasNode
     * @return MasterSystem
     */
    public function setHasNode($hasNode)
    {
        $this->hasNode = $hasNode;
        return $this;
    }

    /**
     * Get hasNode
     * @return string
     */
    public function getHasNode()
    {
        return $this->hasNode;
    }
    
    /**
     * Set displayType
     *
     * @param  string $displayType
     * @return MasterSystem
     */
    public function setDisplayType($displayType)
    {
        $this->displayType = $displayType;
        return $this;
    }

    /**
     * Get displayType
     * @return string
     */
    public function getDisplayType()
    {
        return $this->displayType;
    }
    
    /**
     * Set excludeInCalculation
     *
     * @param  string $excludeInCalculation
     * @return MasterSystem
     */
    public function setExcludeInCalculation($excludeInCalculation)
    {
        $this->excludeInCalculation = $excludeInCalculation;
        return $this;
    }

    /**
     * Get excludeInCalculationalculation
     * @return string
     */
    public function getExcludeInCalculation()
    {
        return $this->excludeInCalculation;
    }
    
    /**
     * Set uom
     *
     * @param  string $uom
     * @return MasterSystem
     */
    public function setUom($uom)
    {
        $this->uom = $uom;
        return $this;
    }

    /**
     * Get uom
     * @return string
     */
    public function getUom()
    {
        return $this->uom;
    }
    
    /**
     * Set complexity
     *
     * @param  string $complexity
     * @return MasterSystem
     */
    public function setComplexity($complexity)
    {
        $this->complexity = $complexity;
        return $this;
    }

    /**
     * Get complexity
     * @return string
     */
    public function getComplexity()
    {
        return $this->complexity;
    }

    /**
     * Get Id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }
}
