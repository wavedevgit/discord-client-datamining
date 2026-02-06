package r8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f48678d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f48679e;

    /* renamed from: i  reason: collision with root package name */
    private final s8.c f48680i;

    /* renamed from: o  reason: collision with root package name */
    private int f48681o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f48682p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f48683q = false;

    public g(InputStream inputStream, byte[] bArr, s8.c cVar) {
        this.f48678d = (InputStream) o8.j.g(inputStream);
        this.f48679e = (byte[]) o8.j.g(bArr);
        this.f48680i = (s8.c) o8.j.g(cVar);
    }

    private boolean a() {
        if (this.f48682p < this.f48681o) {
            return true;
        }
        int read = this.f48678d.read(this.f48679e);
        if (read <= 0) {
            return false;
        }
        this.f48681o = read;
        this.f48682p = 0;
        return true;
    }

    private void g() {
        if (!this.f48683q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f48682p <= this.f48681o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        g();
        return (this.f48681o - this.f48682p) + this.f48678d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48683q) {
            this.f48683q = true;
            this.f48680i.release(this.f48679e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f48683q) {
            p8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        o8.j.i(this.f48682p <= this.f48681o);
        g();
        if (a()) {
            byte[] bArr = this.f48679e;
            int i10 = this.f48682p;
            this.f48682p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f48682p <= this.f48681o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        g();
        int i10 = this.f48681o;
        int i11 = this.f48682p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f48682p = (int) (i11 + j10);
            return j10;
        }
        this.f48682p = i10;
        return j11 + this.f48678d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        o8.j.i(this.f48682p <= this.f48681o);
        g();
        if (a()) {
            int min = Math.min(this.f48681o - this.f48682p, i11);
            System.arraycopy(this.f48679e, this.f48682p, bArr, i10, min);
            this.f48682p += min;
            return min;
        }
        return -1;
    }
}
