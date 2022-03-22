
pipeline {
    agent {
        docker {image 'docker'}
    }
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                // sh "docker build -t bendevet/product:v5 -f Dockerfile ./"

                docker.withRegistry('https://registry.example.com', 'credentials-id') {

                   def customImage = docker.build("bendevet/product:v5")
                   /* Push the container to the custom Registry */
                   customImage.push()
                  }
            }
        }
    }  
}
