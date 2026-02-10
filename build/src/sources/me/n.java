package me;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f37002d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f37003e;

    /* renamed from: q  reason: collision with root package name */
    private long f37007q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37005o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37006p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f37004i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f37002d = dataSource;
        this.f37003e = aVar;
    }

    private void a() {
        if (!this.f37005o) {
            this.f37002d.b(this.f37003e);
            this.f37005o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f37006p) {
            this.f37002d.close();
            this.f37006p = true;
        }
    }

    public void g() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f37004i) == -1) {
            return -1;
        }
        return this.f37004i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        oe.a.g(!this.f37006p);
        a();
        int read = this.f37002d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f37007q += read;
        return read;
    }
}
