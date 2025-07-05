export async function POST(request) {
    const body = await request.json();
    const { nama, email, pesan } = body;

    if (!nama || !email || !pesan) {
        return new Response(JSON.stringify({ message: "Data tidak lengkap" }), {
            status: 400,
        });
    }

    // Simulasi penyimpanan: log ke console (di Vercel nanti bisa kirim ke database/email)
    console.log({ nama, email, pesan });

    return new Response(JSON.stringify({ message: "Pesan dikirim!" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
