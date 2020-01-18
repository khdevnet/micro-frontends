# Micro frontends

## Start Project
```
npm install -g @angular/cli concurrently
npm start

```

## Solution Structure

```
.
├── docs                                           # Contains documentation files
├── SW.Checkout.Client                       # It is client project, it simulate real clients, send http requests to API
├── SW.Checkout.Domain                       # Contains business logic
├── SW.Checkout.Infrastructure.EventStore    # Contains Marten EventStore contracts implementations
├── SW.Checkout.Infrastructure.RabbitMQ      # Contains RabbitMQ Message Bus contracts implementations
├── SW.Checkout.Infrastructure.ReadStorage   # Contains Read Storage contracts implementations
├── SW.Checkout.Message.Handler              # Contains Message processing console application implementations
├── SW.Checkout.Read                         # Contains Read contracts
├── SW.Checkout.StorageReplication           # Contains Database replication console application
├── SW.Checkout.WebApi                       # Contains Api contracts and enpoinds implementation
├── SW.Checkout.Core                                  # Contains common functionality of the system, contracts
```

## Development servers
```
ng serve 
ng serve trucks
ng serve cars
ng serve welcome-feature
```
