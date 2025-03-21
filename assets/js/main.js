
// Memanggil file data.json menggunakan fetch API
fetch('../../json/data-service.json')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            // Hapus loading indicator setelah delay dan data berhasil dimuat
            const loadingServiceGrid = document.getElementById('loadingServiceGrid');
            if (loadingServiceGrid) {
                loadingServiceGrid.remove();
            }
        
            const serviceGrid = document.getElementById('serviceGrid');
            let htmlContent = '';
            // Loop untuk setiap item di data JSON
            data.forEach(item => {
                htmlContent += `
                <div class="group rounded px-8 py-12 shadow hover:bg-primary">
                    <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div class="hidden group-hover:block">
                        <img src="${item.icon_white}" alt="${item.alt}" />
                    </div>
                    <div class="block group-hover:hidden">
                        <img src="${item.icon_black}" alt="${item.alt}" />
                    </div>
                    </div>
                    <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        ${item.title}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        ${item.description}
                    </p>
                    </div>
                </div>
                `;
            });
            serviceGrid.innerHTML = htmlContent;

        }, 2000);
    })
    .catch(error => {
    console.error('Error fetching data: ', error);
    document.getElementById('serviceGrid').innerHTML = 'Terjadi kesalahan saat memuat data.';
    });

fetch('../../json/data-portfolio.json')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            // Hapus loading indicator setelah delay dan data berhasil dimuat
            const loadingPortfolioGrid = document.getElementById('loadingPortfolioGrid');
            if (loadingPortfolioGrid) {
                loadingPortfolioGrid.remove();
            }
            const portfolioGrid = document.getElementById('portfolioGrid');
            let html = '';
            data.forEach(item => {
                html += `
                <a href="${item.link}" target="_blank" class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                    <img src="${item.image}" class="w-full shadow" alt="${item.alt}" />
                </a>
                `;
            });
            portfolioGrid.innerHTML = html;
        }, 2000);
    
    })
    .catch(error => {
    console.error('Error fetching portfolio data:', error);
    document.getElementById('portfolioGrid').innerHTML = 'Terjadi kesalahan saat memuat data.';
    });

fetch('../../json/data-article.json')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            // Hapus loading indicator setelah delay dan data berhasil dimuat
            const loadingArticleGrid = document.getElementById('loadingArticleGrid');
            if (loadingArticleGrid) {
                loadingArticleGrid.remove();
            }

            const articleGrid = document.getElementById('articleGrid');
            let html = '';
            data.forEach(item => {
                html += `
                <a href="${item.link}" ${item.target ? 'target="' + item.target + '"' : ''} class="shadow">
                    <div style="background-image: url(${item.bgImage})" class="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                    <span class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span class="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">${item.buttonText}</span>
                    </div>
                    <div class="bg-white py-6 px-5 xl:py-8">
                    <span class="block font-body text-lg font-semibold text-black">${item.title}</span>
                    <span class="block pt-2 font-body text-grey-20">${item.description}</span>
                    </div>
                </a>
                `;
            });
            articleGrid.innerHTML = html;
        }, 2000); 
      
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
      document.getElementById('articleGrid').innerHTML = 'Terjadi kesalahan saat memuat data.';
    });