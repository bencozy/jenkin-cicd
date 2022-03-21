
pipeline {
    agent {
        docker {image 'docker'}
    }
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                sh 'whoami'
                // sh "docker ps -a"
                // sh "docker build -t bendevet/product:v5 -f Dockerfile ./"
            }
        }
    }  
}
