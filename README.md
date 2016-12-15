# Práctica Angular Master Keepcoding

### Green Path: Detalles de un producto

Documentos Modificados:

- app/components/product/**product.component.html**
- app/components/product/**product.component.ts**
- app/components/products-collection/**products-collection.component.html**
- app/components/products-collection/**products-collection.component.ts**

### Blue Path: Apañando la fecha de publicación

Documentos modificados:

- app/components/product-detail/**product-detail.component.html**
- app/pipes/**publication-date.pipe.ts**
- app/**app.module.ts**

### Pink Path: Ordenando los productos

Documentos modificados:

- app/services/**product.service.ts**

### Red Path: Filtrando productos

A parte de realizar en el servicio el filtrado que se pedia, he modificado también la vista para que los se inicie el filtro en el momento de una modificición en los campos del formulario con los eventos (change) y (keyup), eliminando de esta forma el botón que ya esta pasado de moda :)

Documentos modificados:

- app/services/**product.service.ts**
- app/components/**product-filter.component.ts**
- app/components/**product-filter.component.html**

### Yellow Path: Reseteando productos

Documentos modificados:

- app/components/products-collection/**products-collection.component.html**
- app/components/services/**sold-products-resolve.service.ts**
- app/services/**product.service.ts**

### Purple Path: Mejorando el formato de los precios

Documentos modificados:

- app/components/product/**product.component.html**
- app/components/product-detail/**product-detail.component.html**

## Optional Paths

### Broken White Path (AKA Blanco Roto): Likes

He utilizado localStorage para persistir que productos ha marcado como favoritos el usuario. 
He modificado la vista del detalle del producto para poner un botón de "favorito". Este botón lanza una funció que llama al servicio de productos (es su deber tratar los datos de los productos y no del componente) para guardar en localStorage un identificador único que identificará al producto.

Documentos modificados: 

- app/components/product-detail/**product-detail.component.html**
- app/components/product-detail/**product-detail.component.css**
- app/components/product-detail/**product-detail.component.ts**
- app/services/**product.service.ts**

### Red Wine Path (AKA Vino Tinto): Filtro y ordenación avanzada

Para este path he creado 3 pipes. Uno para filtrar por precio mínimo y máximo, otro para filtrar por estado (en venta), y el último para ordenar por precio o alfabéticamente de mayor a menor o viceversa.
Para lanzar estos pipes también he modificado el formulario de filtrado, aunque en los controles que he creado nuevos no voy a servidor, sinó al pipe.

Documentos modificados:

- app/**app.module.ts**
- app/components/products-collection/**products-collection.component.html**
- app/pipes/**order-products.pipe.ts**
- app/pipes/**price-range.pipe.ts**
- app/pipes/**state-product.pipe.ts**
- app/components/product-filter/**product-filter.component.html**
- app/components/product-filter/**product-filter.component.ts**
- app/models/**product-filter.ts**

### Brick Red Path (AKA Teja): Productos por vendedor

En este path he copiado el componente <product></product> con el bucle for y me lo he llevado al componente de user. En ese componente se llama al servidor para buscar los productos por usuario y los muestra por pantalla.

- app/components/user-profile/**user-profile.component.html**
- app/components/user-profile/**user-profile.component.ts**
- app/services/**product.service.ts**
- app/models/**product-filter.ts**