import React from 'react';
import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className="HotAccessories">
      <div><img src = {musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt = "Cover"/></div>

      <div>
        {
            music && music.map((item,index)=>(
                <HotItemCard key = {item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            )

            )
        }
        {
            smartDevice && smartDevice.map((item,index)=>(
                <HotItemCard key = {item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            )

            )
        }
        {
            home && home.map((item,index)=>(
                <HotItemCard key = {item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            )

            )
        }
        {
            lifeStyle && lifeStyle.map((item,index)=>(
                <HotItemCard key = {item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            )

            )
        }
        {
            mobileAccessories && mobileAccessories.map((item,index)=>(
                <HotItemCard key = {item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            )

            )
        }

        <HotItemCard image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAODQ8OEhEODhAQEBIOEBAODhMOGB0WIhQdHx8YKDQkGSYxJxUTITEtKCkyLjAwGB8zPTQ4NzQyMysBCgoKDg0OGxAQGjcgICUvKy0tLi0tListLS0tLTUrLS0tLS0uLS0tLSsrKy0tLS0tLS0tLS02LS4tLSstLS0tLf/AABEIAG8BFwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCBAYDB//EADUQAAICAgAEBAMGBAcAAAAAAAACAQMEEQUSEyEGFDFBUWGBFSIjkZPRMlRxsQcWNVJydPD/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBQQG/8QAKhEBAQABAgQEBgMBAAAAAAAAAAERAiEDBBIxEzJBoSJCUVNhgTNxsVL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKfi/iGnFtrpdMh7LUZ1THpe9uVZiJnS/1gSZ7JbibsuFcfoyXalOqlqLDtVkVWY9vJPo2niNx7bgthlp/5uolrFroz7ela9TtTiXWp1FnTRtY1JJvMrfou8bIiytbIV1hl5tWrNbx/WJ7wLOlJvGlwLj2NnI9mK8stdk1ttZWeaNfH277gt02TclzcPDiHiaim9sbp5VliIjtGPj238qtvl3yx29JJFu2Mtng/HMbMh/L2bauYixGVq7a279mVtTHpPt7Fum4SXd68X4nViUtkZDctaSkM2pnXM0LHp82gTTm4hbiZOKcTpxaHyb35aq15paO/afTWvXe4/Ml22Wb7srOI0rT5l3haun1OZ/uxCa3/YavhuKmm9UzFXieLcWx60mMirrzqh8jHtoqtn2hWaNTv2+Jen0LdsvbiXiKrHu8u1eVZZ0ltmMbHsv1W0tETPJHbujfkMXuZmcNrhPF6MtJehpnkaUdWVq7EePWGVu6ySwzvhW0+LKX1NePxBladK64V7VzHx3EamPmJMluHQBQCQAGDzMROo3Ou0encLMWqjgPG/Mc9Vq9O+qZh65+Hxj4nLh8Tq2vd9fM8r4UmrTc6b6rk6vjSAAAAAAAAAAAAAAAA4rxFORHF8Tyq0tZ5PI7Xu9acvNXvusTPw9jXC+Zz43yp4BN+RxS+3N6VV+FTFCU08zK1Vkw3U5m1zRPLqO3bUjtpuPVbvqn4a3hVeIT53yj4UV/aeX2yK7ns5ubv3VojXp7GdPljWvz3C08ccSsx+HMszHmMmExlmpXmOo/Z5VY23aOeY9Z7QMTVqkWbTKn8PZmPRxOmnEi+KcvDWlotx76I8xQsyk/iLG9pDR2/wBpve5z+mMdsftccP8A9bzf+lif3sMTtWtfytDhGp8Q5/J6RiUxZr06n4et/PWxo8tXiY+Fb+PKVswHreNq+RhK0T6Ss30xJvhzOpz4lxpcbxvh+W+JkYWUlnluFY+RYlzb5cmeWfLd/fliZ384gmqyzqvdvTMXpnZv+PIn7IwZ78kW4k2fDp8s738i7eLMs6P47hcf4iTHkU5dczZeJ0des2dRda+myaM+JDV/HWHEXy14rbOFXju32Zj80ZFllXbqZGtcqzuf66L8qXzRn4BibK8nNsZetmZEzdUqysUvXHJyd+8zGu8++4M6/LJF0+a2vPwsnEvLY3I+B0eVdQ1V83dPfxhtb18tD+1/p18kac3fxDicM0LhpKw08s9Re8e3ucLq4mdtL0tHB5SyZ4nsw+0uK/ySfqL+5OvifRrwOT+57H2lxX+ST9Rf3HXxPoeByf3PZP2lxX+RT9Rf3F18X/k8Dk/uezn+NZOWuRTc9C0370vI0PLx8JiJ7+uvqcNd1zXLY9LluHy94WrRNfVp/Po+g4rPKJNi8ryqyy73ptd4Puj83rkmqzT2epWUgAAAAAAAAAAAAAAalnDqWvTJZN21o1aNtuyNMTMa9J/hj2EuM4SyXGUNw6mb1ypT8Za5qh4ZonpzO5iYjtPeN947CbHfuq38HYEs79O5Ztsax+nl5dazY07adK8RH5CXGy2ZuW+vBseJx55GmcTm6EvZa8rLRqZ+9P3p123Oxn1T0w2cjErslJddzU8WVzuYlXiJjfb5M0fUn5X0wruIeGMPIunItSzqsipLV5GRTtF3qJitoifWSzbcu+Gzwrg2NiRK41S1807eY2zvPf8Aiae7es+slttmKzJM5e+bh13p07V5l50fW5X7yMrJ6fCVWfoJbLmFk1TFTmYiXVPTavNXajI67ldpPaY3HeDNme7UuOyGwqpq6DIrVcnT5GjmWU1rXf17C/EknT2VeF4SwabEtSpparvV1Lrrkr/4q7TC/SDWalkxhaRh1xdORC/itUtUttu9ay0rGvT1dvzGb2XEzlhicOppe6ypOVshoe3UtpniNb1PaJ+Oo7k9OkxvlVp4OwV1ypkLqdxC5maqx9IfUFlwXd0BFAAADB96nXedTqPTuS3ZdOM7uf4Fwi2bWzM2I6zTMIm4aK1+Wv8A35nLRw7nq1d3ocxzOnonC4Xl/wBdGdnnAAAAAAAAAAAAAAAAAEAoAAgAAIJKAAAQCiAAEgAAACAgFSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="/>
      </div>
    </div>
  );
}

export default HotAccessories;
