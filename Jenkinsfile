
pipeline {
    agent {
        docker {image 'docker'}
        docker {image 'alpine/helm'}
    }
    stages{
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
