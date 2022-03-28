        
        
        library identifier: "pipeline-library@v1.5",
        retriever: modernSCM(
            [
                $class: "GitSCMSource",
                remote: "https://github.com/redhat-cop/pipeline-library.git"
            ]
)

        // The name you want to give your Spring Boot application
        // Each resource related to your app will be given this name
        appName = "product-app"
        
        // path of the template to use
        def templatePath = 'nodejs-postgresql-example'
        // name of the template that will be created
        def templateName = 'nodejs-postgresql-example'
        // NOTE, the "pipeline" directive/closure from the declarative pipeline syntax needs to include, or be nested outside,
        // and "openshift" directive/closure from the OpenShift Client Plugin for Jenkins.  Otherwise, the declarative pipeline engine
        // will not be fully engaged.
        pipeline {
            agent {
              node {
                // spin up a node.js slave pod to run this build on
                label 'nodejs'
              }
            }
            options {
                // set a timeout of 20 minutes for this pipeline
                timeout(time: 20, unit: 'MINUTES')
            }
            stages {
                stage('preamble') {
                    steps {
                        script {
                            openshift.withCluster() {
                                openshift.withProject() {
                                    echo "Using project: ${openshift.project()}"
                                }
                            }
                        }
                    }
                }
                 stage('cleanup') {
                     steps {
                         script {
                             openshift.withCluster() {
                                 openshift.withProject() {
                                     // delete everything with this template label
                                     openshift.selector("all", [ template : templateName ]).delete()
                                     // delete any secrets with this template label
                                     if (openshift.selector("secrets", templateName).exists()) {
                                         openshift.selector("secrets", templateName).delete()
                                     }
                                 }
                             }
                         } // script
                     } // steps
                 } // stage
        //          stage("Docker Build") {
        //              steps {
        //                 // This uploads your application's source code and performs a binary build in OpenShift
        //                 // This is a step defined in the shared library (see the top for the URL)
        //                 // (Or you could invoke this step using 'oc' commands!)
        //                 binaryBuild(buildConfigName: appName, buildFromPath: ".")
        //             }

        // }
        stage('Docker Build in dev') {
   steps {
       script {
           openshift.withCluster() {
               openshift.withProject("default") {
                   // bc = build configuration ...
                   def build = openshift.selector('bc', 'product-app').startBuild("--from-dir .")
                   build.logs('-f')
               }
           }
       }
   }
}
            } // stages
        } // pipeline