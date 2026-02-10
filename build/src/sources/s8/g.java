package s8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f49551d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f49552e;

    /* renamed from: i  reason: collision with root package name */
    private final t8.c f49553i;

    /* renamed from: o  reason: collision with root package name */
    private int f49554o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f49555p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f49556q = false;

    public g(InputStream inputStream, byte[] bArr, t8.c cVar) {
        this.f49551d = (InputStream) p8.j.g(inputStream);
        this.f49552e = (byte[]) p8.j.g(bArr);
        this.f49553i = (t8.c) p8.j.g(cVar);
    }

    private boolean a() {
        if (this.f49555p < this.f49554o) {
            return true;
        }
        int read = this.f49551d.read(this.f49552e);
        if (read <= 0) {
            return false;
        }
        this.f49554o = read;
        this.f49555p = 0;
        return true;
    }

    private void g() {
        if (!this.f49556q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f49555p <= this.f49554o) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        g();
        return (this.f49554o - this.f49555p) + this.f49551d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f49556q) {
            this.f49556q = true;
            this.f49553i.release(this.f49552e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f49556q) {
            q8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        p8.j.i(this.f49555p <= this.f49554o);
        g();
        if (a()) {
            byte[] bArr = this.f49552e;
            int i10 = this.f49555p;
            this.f49555p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f49555p <= this.f49554o) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        g();
        int i10 = this.f49554o;
        int i11 = this.f49555p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f49555p = (int) (i11 + j10);
            return j10;
        }
        this.f49555p = i10;
        return j11 + this.f49551d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        p8.j.i(this.f49555p <= this.f49554o);
        g();
        if (a()) {
            int min = Math.min(this.f49554o - this.f49555p, i11);
            System.arraycopy(this.f49552e, this.f49555p, bArr, i10, min);
            this.f49555p += min;
            return min;
        }
        return -1;
    }
}
