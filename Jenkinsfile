
pipeline {
    // agent {
    //     docker {image 'docker'}
    // }
     agent{
                  docker {image 'alpine/helm'}
                  
                 }
    stages{
        stage("helm"){
            steps{
                script{
                    alpine/helm
                }
                // script{
                //    docker.withRegistry('https://registry.hub.docker.com', 'docker-credential') {
                //    def customImage = docker.build("bendevet/product:v5")
                //    /* Push the container to the custom Registry */
                //    customImage.push()
                //   }
                // }
            }
        }
        stage("build"){
            steps{
                script{
                    alpine/helm
                }
                // script{
                //    docker.withRegistry('https://registry.hub.docker.com', 'docker-credential') {
                //    def customImage = docker.build("bendevet/product:v5")
                //    /* Push the container to the custom Registry */
                //    customImage.push()
                //   }
                // }
            }
        }
    }  
}
