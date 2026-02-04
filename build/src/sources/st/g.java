package st;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PushbackInputStream;
import java.io.Reader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g extends Reader {

    /* renamed from: d  reason: collision with root package name */
    private final PushbackInputStream f49648d;

    /* renamed from: e  reason: collision with root package name */
    private BufferedReader f49649e = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(InputStream inputStream) {
        this.f49648d = new PushbackInputStream(inputStream, 3);
    }

    private void a() {
        if (this.f49649e != null) {
            return;
        }
        byte[] bArr = new byte[3];
        int read = this.f49648d.read(bArr, 0, 3);
        if ((read != 3 || bArr[0] != -17 || bArr[1] != -69 || bArr[2] != -65) && read > 0) {
            this.f49648d.unread(bArr, 0, read);
        }
        this.f49649e = new BufferedReader(new InputStreamReader(this.f49648d, "UTF-8"));
    }

    @Override // java.io.Reader, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        BufferedReader bufferedReader = this.f49649e;
        if (bufferedReader == null) {
            this.f49648d.close();
        } else {
            bufferedReader.close();
        }
    }

    public String h() {
        a();
        return this.f49649e.readLine();
    }

    @Override // java.io.Reader
    public int read(char[] cArr, int i10, int i11) {
        a();
        return this.f49649e.read(cArr, i10, i11);
    }

    @Override // java.io.Reader
    public boolean ready() {
        a();
        return this.f49649e.ready();
    }
}
