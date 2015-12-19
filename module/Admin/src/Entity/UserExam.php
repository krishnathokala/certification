<?php
/**
 * CE Zend Framework 2 Admin Module
 *  
 * @author madhukar.jadala <madhukar.jadala@gmail.com>
*/

namespace Admin\Entity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;


/**
 * UserExam
 *
 * @ORM\Table(name="certification_user_exam")
 * @ORM\Entity
 */
class UserExam
{
        
    /**
     * @var string
     * @ORM\Column(name="questions_id", type="text", nullable=false)
     */
    protected $questionsId;
        
    /**
     * @var string
     * @ORM\Column(name="user_answers", type="text", nullable=false)
     */
    protected $userAnswers;
        
    /**
     * @var Admin\Entity\Exam
     * @ORM\ManyToOne(targetEntity="Admin\Entity\Exam")
     * @ORM\JoinColumn(name="exam_id", referencedColumnName="id")
     */
    protected $exam;    
    
    /**
     * @var CsnUser\Entity\User
     * @ORM\ManyToOne(targetEntity="CsnUser\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    protected $user;
   
     /**
     * @var CsnUser\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="CsnUser\Entity\User")
     * @ORM\JoinColumn(name="createdby", referencedColumnName="id")
     */
    protected $createdBy;

    /**
     * @var CsnUser\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="CsnUser\Entity\User")
     * @ORM\JoinColumn(name="updatedby", referencedColumnName="id")
     */
    protected $modifiedBy;
    
    /**
     * @var DateTime
     *
     * @ORM\Column(name="doc", type="datetime", nullable=true)
     */
    protected $created;  
    
     /**
     * @var DateTime
     *
     * @ORM\Column(name="dom", type="datetime", nullable=true)
     */
    protected $modified; 
    
     /**
     * @var boolean
     *
     * @ORM\Column(name="delete_flag", type="boolean", nullable=false)
    */
    protected $isDelete;
    	
    /**
     * @var Array
     * 
     * @ORM\ManyToMany(targetEntity="Admin\Entity\MasterSystem", cascade={"persist"})
     * @ORM\JoinTable(name="ed_projects_systems",
     *      joinColumns={@ORM\JoinColumn(name="project_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="system_id", referencedColumnName="id")}
     *      )
     */
    protected $systems;
    
    /**
     * @var SystemNode[]
     *
     * @ORM\OneToMany(targetEntity="Admin\Entity\SystemNode", mappedBy="project", cascade="remove")
     */
    protected $systemNodes;
    
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    public function __construct()
    {        
        $this->created = new \DateTime();
        $this->modified = new \DateTime();
        $this->systems = new ArrayCollection;
        $this->systemNodes = new ArrayCollection;
    }

    /**
     * Get Name
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
     * @return Project
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }
        
    /**
     * Set customer
     *
     * @param  Admin\Entity\Customer $customer
     * @return Project
     */
    public function setCustomer($customer)
    {
        $this->customer = $customer;
        return $this;
    }

    /**
     * Get customer
     * @return Admin\Entity\Customer
     */
    public function getCustomer()
    {
        return $this->customer;
    }
    
    /**
     * Set building
     *
     * @param  CsnUser\Entity\Building $building
     * @return Project
     */
    public function setBuilding($building)
    {
        $this->building = $building;
        return $this;
    }

    /**
     * Get building
     *
     * @return CsnUser\Entity\Building
     */
    public function getBuilding()
    {
        return $this->building;
    }
    /**
     * Set room
     *
     * @param  CsnUser\Entity\Room $room
     * @return Project
     */
    public function setRoom($room)
    {
        $this->room = $room;
        return $this;
    }

    /**
     * Get room
     *
     * @return CsnUser\Entity\Room
     */
    public function getRoom()
    {
        return $this->room;
    }
    
     /**
     * Set accountManager
     *
     * @param  CsnUser\Entity\User $accountManager
     * @return Project
     */
    public function setAccountManager($accountManager)
    {
        $this->accountManager = $accountManager;
        return $this;
    }

    /**
     * Get accountManager
     *
     * @return CsnUser\Entity\User
     */
    public function getAccountManager()
    {
        return $this->accountManager;
    }
    
    /**
     * Set createdBy
     *
     * @param  CsnUser\Entity\User $createdBy
     * @return Project
     */
    public function setCreatedBy($createdBy)
    {
        $this->createdBy = $createdBy;
        return $this;
    }

    /**
     * Get createdBy
     *
     * @return CsnUser\Entity\User
     */
    public function getCreatedBy()
    {
        return $this->createdBy;
    }
    
    /**
     * Set modifiedBy
     *
     * @param  CsnUser\Entity\User $modifiedBy
     * @return Project
     */
    public function setModifiedBy($modifiedBy)
    {
        $this->modifiedBy = $modifiedBy;
        return $this;
    }

    /**
     * Get modifiedBy
     *
     * @return CsnUser\Entity\User
     */
    public function getModifiedBy()
    {
        return $this->modifiedBy;
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
     * @return Project
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
     * @return Project
     */
    public function setModified($modified)
    {
        $this->modified = $modified;
        return $this;
    }
    
    /**
     * Set isDelete
     *
     * @param  string $isDelete
     * @return Project
     */
    public function setIsDelete($isDelete)
    {
        $this->isDelete = $isDelete;
        return $this;
    }

    /**
     * Get isDelete
     * @return string
     */
    public function getIsDelete()
    {
        return $this->isDelete;
    }
    
    /**
     * Get systemNodes
     *
     * @return SystemNode[]
     */
    public function getSystemNodes()
    {
        return $this->systemNodes;
    }
    
    /**
     * Set systems
     *
     * @param  Array $systems
     * @return Project
     */
    public function setSystems($systems)
    {
        $this->$systems = $systems;
        return $this;
    }

    /**
     * Get systems
     * @return Array
     */
    public function getSystems()
    {
        return $this->systems;
    }
    
    /**
     * Add systems
     *
     * @param  Collection $systems
     * @return Project
     */
    public function addSystems(Collection $systems)
    {
        foreach ($systems as $system) {
                $this->addSystem($systems);
        }

        return $this;
    }

    /**
     * Add system
     *
     * @param  Admin\Entity\MasterSystem $system
     * @return Project
     */
    public function addSystem(\Admin\Entity\MasterSystem $system)
    {
        $system->addProject($this); // synchronously updating inverse side
        $this->systems[] = $system;

        return $this;
    }

    /**
     * Remove systems
     *
     * @param  Collection $systems
     * @return Project
     */
    public function removeSystems(Collection $systems)
    {
        foreach ($systems as $system) {
                $this->removeSystem($system);
        }

        return $this;
    }

    /**
     * Remove system
     *
     * @param  Admin\Entity\MasterSystem $system
     * @return Project
     */
    public function removeSystem(\Admin\Entity\MasterSystem $system)
    {
        $this->systems->removeElement($system);
        $system->removeProject($this); // update the other site

        return $this;
    }
    
    /**
     * Get Id     
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }
}
