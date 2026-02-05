package o8;

import java.io.FilterOutputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends FilterOutputStream {

    /* renamed from: d  reason: collision with root package name */
    private long f42325d;

    public c(OutputStream outputStream) {
        super(outputStream);
        this.f42325d = 0L;
    }

    public long a() {
        return this.f42325d;
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ((FilterOutputStream) this).out.close();
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr, int i10, int i11) {
        ((FilterOutputStream) this).out.write(bArr, i10, i11);
        this.f42325d += i11;
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(int i10) {
        ((FilterOutputStream) this).out.write(i10);
        this.f42325d++;
    }
}
