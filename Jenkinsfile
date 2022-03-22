
pipeline {
    agent {
        docker {image 'node'}
    }
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                sh "docker build -t bendevet/product:v5 -f Dockerfile ./"
            }
        }
    }  
}
