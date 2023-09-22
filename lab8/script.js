        const url = 'products.json';
        let productsData = [];
        let table = document.getElementById('products'); 
        document.getElementById('fetch-btn').addEventListener('click', () => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    productsData = data;
                    display(productsData);
                })
                .catch(error => console.error('Error fetching products.json:', error));
        });
        function display(data) 
        {
            var row;
            var count = 0;
            table.innerHTML = '';
            data.forEach(product => {
                if(count == 0)
                {
                    row = table.createTHead().insertRow();
                    var headerNameCell = row.insertCell(0);
                    var headerPriceCell = row.insertCell(1);
                    var headerDescriptionCell = row.insertCell(2);
                    var headerImageCell = row.insertCell(3);
                    headerNameCell.innerHTML = "Product Name";
                    headerPriceCell.innerHTML = "Price";
                    headerDescriptionCell.innerHTML = "Description";
                    headerImageCell.innerHTML = "Image";
                    count = count + 1;
                }
                row = table.insertRow();
                var nameCell = row.insertCell(0);
                var priceCell = row.insertCell(1);
                var descriptionCell = row.insertCell(2);
                var imageCell = row.insertCell(3);
                nameCell.innerHTML = product.name;
                priceCell.innerHTML = product.price;
                descriptionCell.innerHTML = product.description;
                var img = document.createElement('img');
                img.src = product.image_url;
                imageCell.appendChild(img);
            });
        }
        document.getElementById('search').addEventListener('input', () => {
            search();
        });
        function search() 
        {
            const keyword = document.getElementById('search').value.toLowerCase().trim();
            var row;
            var count = 0;
            if(keyword !== '')
            {
                table.innerHTML = ''; 
                const filteredList = productsData.filter(product => product.name.toLowerCase().includes(keyword));
                filteredList.forEach(product => {
                    if(count == 0)
                    {
                        row = table.createTHead().insertRow();
                        var headerNameCell = row.insertCell(0);
                        var headerPriceCell = row.insertCell(1);
                        var headerDescriptionCell = row.insertCell(2);
                        var headerImageCell = row.insertCell(3);
                        headerNameCell.innerHTML = "Product Name";
                        headerPriceCell.innerHTML = "Price";
                        headerDescriptionCell.innerHTML = "Description";
                        headerImageCell.innerHTML = "Image";
                        count = count + 1;
                    }
                    row = table.insertRow();
                    var nameCell = row.insertCell(0);
                    var priceCell = row.insertCell(1);
                    var descriptionCell = row.insertCell(2);
                    var imageCell = row.insertCell(3);
                    nameCell.innerHTML = product.name;
                    priceCell.innerHTML = product.price;
                    descriptionCell.innerHTML = product.description;
                    var img = document.createElement('img');
                    img.src = product.image_url;
                    imageCell.appendChild(img);
                });
            }
            else if(keyword === '')
            {
                display(productsData);
            }
        }
        document.getElementById('filter').addEventListener('change', () => {
            const sortBy = document.getElementById('filter').value;
            sort(sortBy);
        function sort()
        {
            productsData.sort((a, b) => {
                if (sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'price') {
                    return a.price - b.price;
                }
            });
            display(productsData);
        }
        });