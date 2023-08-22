const data = {
	menu: [
		{
			tipe: 'Makanan Berat',
			anchor: 'berat',
			warna: '#617000',
			daftar: [
				{ nama: 'Nasi Goreng Original', harga: 10.5, gambar: 'Nasgor-1.jpg', laris: false },
				{ nama: 'Nasi Goreng Pedas', harga: 20, gambar: 'Nasgor-2.jpg', laris: true },
				{ nama: 'Mie Goreng Original', harga: 15, gambar: 'Mie-1.jpg', laris: false },
				{ nama: 'Mie Goreng Pedas', harga: 20, gambar: 'Mie-2.jpg', laris: false },
			],
		},
		{
			tipe: 'Makanan Ringan',
			anchor: 'ringan',
			warna: '#70004e',
			daftar: [
				{ nama: 'Dimsum', harga: 15, gambar: 'dimsum-1.jpg', laris: true },
				{ nama: 'Dimsum', harga: 15, gambar: 'dimsum-2.jpg', laris: false },
				{ nama: 'Pentol', harga: 20, gambar: 'pentol-1.jpg', laris: false },
				{ nama: 'Roti Bakar', harga: 20, gambar: 'roti-1.jpg', laris: false },
			],
		},
		{
			tipe: 'Minuman Panas',
			anchor: 'panas',
			warna: '#700000',
			daftar: [
				{ nama: 'Kopi', harga: 15, gambar: 'kopi-1.jpg', laris: false },
				{ nama: 'Kopi', harga: 20, gambar: 'kopi-2.jpg', laris: false },
				{ nama: 'Teh', harga: 20, gambar: 'teh-panas-1.jpg', laris: false },
				{ nama: 'Teh Panas', harga: 15, gambar: 'teh-panas-1.jpg', laris: false },
			],
		},
		{
			tipe: 'Minuman Dingin',
			anchor: 'dingin',
			warna: '#005b70',
			daftar: [
				{ nama: 'Es Teh', harga: 15, gambar: 'es-teh-1.jpg', laris: false },
				{ nama: 'Es Teh', harga: 20, gambar: 'es-teh-2.jpg', laris: false },
				{ nama: 'Milkshake', harga: 20, gambar: 'milkshake-1.jpg', laris: false },
				{ nama: 'Milkshake', harga: 15, gambar: 'milkshake-2.jpg', laris: false },
			],
		},
	],
};

let htm = '';
for (let i in data.menu) {
	let x = data.menu[i];
	htm += '<section id="' + x.anchor + '" class="w-100" style="padding-top: 3.5rem">';
	htm += '<h4 class="text-white text-center py-2 sticky-top" style="background-color: ' + x.warna + ' ;top: 3.5rem">' + x.tipe + '</h4><div class="row mx-auto">';
	htm += '<div class="px-3"><table class="table-responsive table-striped w-100"><tbody>';
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
