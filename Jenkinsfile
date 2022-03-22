
pipeline {
    agent {
        docker {image 'docker'}
    }
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                // sh "docker build -t bendevet/product:v5 -f Dockerfile ./"

                script{
 docker.withRegistry('https://registry.hub.docker.com', 'docker-credential') {

                   def customImage = docker.build("bendevet/product:v5")
                   /* Push the container to the custom Registry */
                   customImage.push()
                  }
                }

               
            }
        }
    }  
}
