<?php

return array(
    'controllers' => array(
        'invokables' => array(
            'Admin\Controller\Exam' => 'Admin\Controller\ExamController',
            'Admin\Controller\Index' => 'Admin\Controller\IndexController',
            'Admin\Controller\Question' => 'Admin\Controller\QuestionController',
            'Admin\Controller\Home' => 'Admin\Controller\HomeController',
            'Admin\Controller\Users' => 'Admin\Controller\UsersController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'admin' => array(
                'type' => 'Literal',
                'options' => array(
                    'route' => '/admin',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Admin\Controller',
                        'controller' => 'Index',
                        'action' => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'default' => array(
                        'type' => 'Segment',
                        'options' => array(
                            'route' => '/[:controller[/:action[/:id]]]',
                            //'route'    => '/[:controller[/:action[/:name[/:id]]]]',
                            'constraints' => array(
                                'controller' => '[a-zA-Z][a-zA-Z0-9_-]*',
                                'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                            ),
                            'defaults' => array(
                            ),
                        ),
                    ),
                ),
            ),
        ),
    ),
    'view_manager' => array(
        //'base_path'=>SITE_PATH.'/public/',
        'display_exceptions' => true,
        'display_not_found_reason' => true,
        'display_exceptions' => true,
        'doctype' => 'HTML5',
        'template_map' => array(
        //'layout/admin'           => __DIR__ . '/../view/layout/admin.phtml',
        //'layout/layout'           => __DIR__ . '/../view/layout/layout.phtml',
        ),
        'template_path_stack' => array(
            'admin' => __DIR__ . '/../view'
        ),
        'display_exceptions' => true,
    ),
    /*'doctrine' => array(
        'driver' => array(
            'admin_entities' => array(
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => array(__DIR__ . '/../src/Admin/Entity')
            ),
            'orm_default' => array(
                'drivers' => array(
                    'Admin\Entity' => 'admin_entities'
                )
            )
        )
    ),*/
    'service_manager' => array(
        'factories' => array(
        )
    )
);
