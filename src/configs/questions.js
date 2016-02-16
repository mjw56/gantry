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
    ],
    tools: {
      angular: [
        {
          type: "list",
          name: "moduleBundler",
          message: "Which module bundler would you like to use?",
          choices: [
            "Browserify",
            "SystemJS",
            "Webpack"
          ]
        },
        {
          type: "list",
          name: "transpiler",
          message: "Which transpiler would you like to use?",
          choices: [
            "Babel",
            "TypeScript"
          ]
        },
        {
          type: 'confirm',
          name: 'eslint',
          message: 'Would you like to use ESLint?',
          default: true
        }
      ],
      angular2: [
        {
          type: "list",
          name: "moduleBundler",
          message: "Which module bundler would you like to use?",
          choices: [
            "Browserify",
            "SystemJS",
            "Webpack"
          ]
        },
        {
          type: "list",
          name: "transpiler",
          message: "Which transpiler would you like to use?",
          choices: [
            "Babel",
            "TypeScript"
          ]
        },
        {
          type: 'confirm',
          name: 'eslint',
          message: 'Would you like to use ESLint?',
          default: true
        }
      ],
      react: [
        {
          type: "list",
          name: "moduleBundler",
          message: "Which module bundler would you like to use?",
          choices: [
            "Browserify",
            "SystemJS",
            "Webpack"
          ]
        },
        {
          type: "list",
          name: "transpiler",
          message: "Which transpiler would you like to use?",
          choices: [
            "Babel",
            "TypeScript"
          ]
        },
        {
          type: 'confirm',
          name: 'eslint',
          message: 'Would you like to use ESLint?',
          default: true
        }
      ]
    },
    libraries: [
      {
        type: 'confirm',
        name: 'immutable',
        message: 'Would you like to use ImmutableJS?',
        default: false
      },
      {
        type: 'confirm',
        name: 'redux',
        message: 'Would you like to use Redux?',
        default: false
      },
      {
        type: 'confirm',
        name: 'rxjs',
        message: 'Would you like to use RxJS?',
        default: false
      }
    ]
}

export default config;