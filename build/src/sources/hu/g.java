package hu;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PushbackInputStream;
import java.io.Reader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g extends Reader {

    /* renamed from: d  reason: collision with root package name */
    private final PushbackInputStream f27722d;

    /* renamed from: e  reason: collision with root package name */
    private BufferedReader f27723e = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(InputStream inputStream) {
        this.f27722d = new PushbackInputStream(inputStream, 3);
    }

    private void a() {
        if (this.f27723e != null) {
            return;
        }
        byte[] bArr = new byte[3];
        int read = this.f27722d.read(bArr, 0, 3);
        if ((read != 3 || bArr[0] != -17 || bArr[1] != -69 || bArr[2] != -65) && read > 0) {
            this.f27722d.unread(bArr, 0, read);
        }
        this.f27723e = new BufferedReader(new InputStreamReader(this.f27722d, "UTF-8"));
    }

    @Override // java.io.Reader, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        BufferedReader bufferedReader = this.f27723e;
        if (bufferedReader == null) {
            this.f27722d.close();
        } else {
            bufferedReader.close();
        }
    }

    public String h() {
        a();
        return this.f27723e.readLine();
    }

    @Override // java.io.Reader
    public int read(char[] cArr, int i10, int i11) {
        a();
        return this.f27723e.read(cArr, i10, i11);
    }

    @Override // java.io.Reader
    public boolean ready() {
        a();
        return this.f27723e.ready();
    }
}
