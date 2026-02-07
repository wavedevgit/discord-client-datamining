package r8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f48726d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f48727e;

    /* renamed from: i  reason: collision with root package name */
    private final s8.c f48728i;

    /* renamed from: o  reason: collision with root package name */
    private int f48729o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f48730p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f48731q = false;

    public g(InputStream inputStream, byte[] bArr, s8.c cVar) {
        this.f48726d = (InputStream) o8.j.g(inputStream);
        this.f48727e = (byte[]) o8.j.g(bArr);
        this.f48728i = (s8.c) o8.j.g(cVar);
    }

    private boolean a() {
        if (this.f48730p < this.f48729o) {
            return true;
        }
        int read = this.f48726d.read(this.f48727e);
        if (read <= 0) {
            return false;
        }
        this.f48729o = read;
        this.f48730p = 0;
        return true;
    }

    private void g() {
        if (!this.f48731q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f48730p <= this.f48729o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        g();
        return (this.f48729o - this.f48730p) + this.f48726d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48731q) {
            this.f48731q = true;
            this.f48728i.release(this.f48727e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f48731q) {
            p8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        o8.j.i(this.f48730p <= this.f48729o);
        g();
        if (a()) {
            byte[] bArr = this.f48727e;
            int i10 = this.f48730p;
            this.f48730p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f48730p <= this.f48729o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        g();
        int i10 = this.f48729o;
        int i11 = this.f48730p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f48730p = (int) (i11 + j10);
            return j10;
        }
        this.f48730p = i10;
        return j11 + this.f48726d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        o8.j.i(this.f48730p <= this.f48729o);
        g();
        if (a()) {
            int min = Math.min(this.f48729o - this.f48730p, i11);
            System.arraycopy(this.f48727e, this.f48730p, bArr, i10, min);
            this.f48730p += min;
            return min;
        }
        return -1;
    }
}
