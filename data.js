const data = {
	menu: [
		{
			tipe: 'Makanan Berat',
			anchor: 'berat',
			warna: '#617000',
			daftar: [
				{ nama: 'Nasi Goreng Hongkong', harga: 10.5, gambar: 'Nasgor-1.jpg', laris: false },
				{ nama: 'Nasi Goreng Ikan Asin', harga: 20, gambar: 'Nasgor-2.jpg', laris: true },
				{ nama: 'Nasi Goreng Merah', harga: 15, gambar: 'Mie-1.jpg', laris: false },
				{ nama: 'Nasi Goreng Teri Pete', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Goreng Jawa', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Goreng Seafood', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Ayam Asam Manis', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Ayam Lada Hitam', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Ayam Telur Asin', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Ayam Barbeque', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Ayam Rica-Rica', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Mie Ayam Original', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Mie Ayam Komplit', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Mie Ayam Jamur', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Mie Ayam Pedas', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Mie Ayam Tomyam', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Bakmi Goreng', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Bakmi Jawa Goreng', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Bakmi Jawa Kuah', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Bakmi Rica', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Bakmi Seafood', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Tamie Capcay', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Capcay', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Nasi Fuyunghai', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Tomyam', harga: 20, gambar: 'Mie-2.jpg', laris: false },
				{ nama: 'Capcay', harga: 20, gambar: 'Mie-2.jpg', laris: false },
			],
		},
		{
			tipe: 'Makanan Ringan',
			anchor: 'ringan',
			warna: '#70004e',
			daftar: [
				{ nama: 'Pisang Goreng', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Tahu Petis', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Tahu Crispy', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Tempoe Mendoan', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Singkong Goreng', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Pisang Aren', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Pisang Coklat Keju', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Roti Bakar Double Coklat', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Roti Bakar Double Keju', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Roti Bakar Ayam BBQ', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Sosis', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Kentang', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Nugget', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Pisang Coklat Keju', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Cireng Bumbu Rujak', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Siomay', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Gyoza', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Hakau', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Kulit Tahu Lumpia', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Wonton Goreng', harga: 20, gambar: 'pentol-1.jpg', laris: false },
			],
		},
		{
			tipe: 'Minuman Panas',
			anchor: 'panas',
			warna: '#700000',
			daftar: [
				{ nama: 'Kopi Klasik', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Kopi Tubruk', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Kopi Susu', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Kopi Vietnam Drip', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Kopi French Press', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Teh Panas', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Lemon Tea', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Lychee Tea', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Milktea', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Teh Jahe', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Jahe Panas', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Kopi Jahe', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Teh Jahe', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Susu Jahe', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Hot Chocolate', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Hot Matcha', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Hot Strawberry', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Hot Taro', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Hot Tiramisu', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Susu Panas', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Jeruk Nipis Panas', harga: 15, gambar: 'kopi-1.jpg', laris: false },
			],
		},
		{
			tipe: 'Minuman Dingin',
			anchor: 'dingin',
			warna: '#005b70',
			daftar: [
				{ nama: 'Susu Soda', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Lemon Squash', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Lychee Squash', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Strawberry Squash', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Orange Squash', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Es Teh', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Lemon Tea', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Lychee Tea', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Milktea', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Teh Jahe', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Americano', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Cafe Latte', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Hazelnut Latte', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Caramel Latte', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Chocolate Milkshake', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Matcha Milkshake', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Strawberry Milkshake', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Taro Milkshake', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Tiramisu Milkshake', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Ice Cream Chocolate', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Ice Cream Strawberry', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Ice Cream Vanilla', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Mix Ice Cream', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Es Susu', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Sinom Kencur', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Es Jeruk Nipis', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
				{ nama: 'Air Mineral', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
			],
		},
	],
};

let htm = '';
for (let i in data.menu) {
	let x = data.menu[i];
	htm += '<section id="' + x.anchor + '" class="w-100" style="padding-top: 3.5rem">';
	htm += '<h4 class="text-white text-center py-2 sticky-top" style="background-color: ' + x.warna + ' ;top: 3.5rem">' + x.tipe + '</h4><div class="row mx-auto">';
	htm += '<div class="px-3"><table class="table table-striped table-responsive w-100"><tbody>';
	for (let j in x.daftar) {
		let y = x.daftar[j];
		htm += '<tr>';
		htm += '<td>' + y.nama + '</td>';
		htm += '<td>' + y.harga + '</td>';
		htm += '</tr>';
		// htm += '<div class="col-sm-4 col-6 p-1">';
		// htm += '<div class="card bg-warning-subtle">';
		// htm += '<img src="img/' + y.gambar + '" class="card-img-top p-1" alt="' + y.nama + '" />';
		// htm += '<div class="card-body">';
		// htm += '<h5 class="card-title">' + y.nama + '</h5>';
		// htm += '<p><span class="badge text-bg-primary float-start">' + y.harga + ' K</span>';
		// if (y.laris) htm += ' <span class="badge text-bg-success float-end me-1">Terlaris</span>';
		// htm += '</p>';
		// htm += '</div></div></div>';
	}
	htm += '</div></tbody></table>';
	htm += '</section>';
}
document.getElementById('daftar-menu').innerHTML = htm;
