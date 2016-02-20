const config = {
  app: [
    {
      when: function(name){ return name; },
      type: 'input',
      name: 'name',
      message: 'Would you like to name your app?',
      default: 'prototype'
    },
    {
      when: function(description){ return description; },
      type: 'input',
      name: 'description',
      message: 'What is the description of the app?',
      default: 'A new prototype'
    },
    {
      when: function(maintainer){ return maintainer; },
      type: 'input',
      name: 'maintainer',
      message: 'What is the name of the maintainer?',
      default: 'webdev'
    },
    {
      when: function(email){ return email; },
      type: 'input',
      name: 'email',
      message: 'What is the email of the maintainer?',
      default: 'webdev@code.life'
    },
    {
      type: "list",
      name: "app",
      message: "What type of app would you like to create?",
      choices: [
        "angular-es6",
        "angular-typescript",
        "react"
      ]
    },
    {
      type: 'confirm',
      name: 'eslint',
      message: 'Would you like to use ESLint?',
      default: true
    }
  ]
}

export default config;