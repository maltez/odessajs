node {
    stage('checkout') {
        git 'https://github.com/maltez/odessajs.git'
    }
    
    stage('install') {
         sh 'npm install'
    }
    
    stage('build') {
        sh "echo Hello!!!!"
        sh 'npm run build'
    }
    
    stage('test') {
        sh 'npm test'
    }
}
