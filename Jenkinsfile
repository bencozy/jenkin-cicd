
pipeline {
    agent {
        docker {image 'node'}
    }
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                sh 'echo "hi there!"'
                // sh "docker ps -a"
                // sh "docker build -t bendevet/product:v5 -f Dockerfile ./"
            }
        }
    }  
}
