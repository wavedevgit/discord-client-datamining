package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f37221d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f37222e;

    /* renamed from: q  reason: collision with root package name */
    private long f37226q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37224o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37225p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f37223i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f37221d = dataSource;
        this.f37222e = aVar;
    }

    private void a() {
        if (!this.f37224o) {
            this.f37221d.b(this.f37222e);
            this.f37224o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f37225p) {
            this.f37221d.close();
            this.f37225p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f37223i) == -1) {
            return -1;
        }
        return this.f37223i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f37225p);
        a();
        int read = this.f37221d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f37226q += read;
        return read;
    }
}
