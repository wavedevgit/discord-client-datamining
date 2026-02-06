package xt;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PushbackInputStream;
import java.io.Reader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g extends Reader {

    /* renamed from: d  reason: collision with root package name */
    private final PushbackInputStream f54816d;

    /* renamed from: e  reason: collision with root package name */
    private BufferedReader f54817e = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(InputStream inputStream) {
        this.f54816d = new PushbackInputStream(inputStream, 3);
    }

    private void a() {
        if (this.f54817e != null) {
            return;
        }
        byte[] bArr = new byte[3];
        int read = this.f54816d.read(bArr, 0, 3);
        if ((read != 3 || bArr[0] != -17 || bArr[1] != -69 || bArr[2] != -65) && read > 0) {
            this.f54816d.unread(bArr, 0, read);
        }
        this.f54817e = new BufferedReader(new InputStreamReader(this.f54816d, "UTF-8"));
    }

    @Override // java.io.Reader, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        BufferedReader bufferedReader = this.f54817e;
        if (bufferedReader == null) {
            this.f54816d.close();
        } else {
            bufferedReader.close();
        }
    }

    public String g() {
        a();
        return this.f54817e.readLine();
    }

    @Override // java.io.Reader
    public int read(char[] cArr, int i10, int i11) {
        a();
        return this.f54817e.read(cArr, i10, i11);
    }

    @Override // java.io.Reader
    public boolean ready() {
        a();
        return this.f54817e.ready();
    }
}
