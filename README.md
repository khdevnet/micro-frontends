# Micro frontends
All microfrontends from projects folder can be deployed seperate.

## Start Project
```
npm install -g @angular/cli concurrently
npm start

```

## Solution Structure

```
.
├── projects                                 # Contains seperate projects
├──── cars                                   # Contains Car catalog microfrontend
├──── trucks                                 # Contains Trucks catalog microfrontend
├──── welcome-feature                        # Contains Angular element feature
├── src                                      # Contains core project which aggregate all projects
```

## Development servers
```
ng serve 
ng serve trucks
ng serve cars
ng serve welcome-feature
```

## Resources
* [combining-multiple-angular-applications](https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527)
* [using-angular-elements-why-and-how-part](https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457)
* [angular-sub-apps-setup](https://github.com/hql287/angular-sub-apps-setup)