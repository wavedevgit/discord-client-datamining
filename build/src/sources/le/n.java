package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f36804d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f36805e;

    /* renamed from: q  reason: collision with root package name */
    private long f36809q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36807o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36808p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f36806i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f36804d = dataSource;
        this.f36805e = aVar;
    }

    private void a() {
        if (!this.f36807o) {
            this.f36804d.b(this.f36805e);
            this.f36807o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f36808p) {
            this.f36804d.close();
            this.f36808p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f36806i) == -1) {
            return -1;
        }
        return this.f36806i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f36808p);
        a();
        int read = this.f36804d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f36809q += read;
        return read;
    }
}
