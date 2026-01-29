package r8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f48060d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f48061e;

    /* renamed from: i  reason: collision with root package name */
    private final s8.c f48062i;

    /* renamed from: o  reason: collision with root package name */
    private int f48063o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f48064p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f48065q = false;

    public g(InputStream inputStream, byte[] bArr, s8.c cVar) {
        this.f48060d = (InputStream) o8.j.g(inputStream);
        this.f48061e = (byte[]) o8.j.g(bArr);
        this.f48062i = (s8.c) o8.j.g(cVar);
    }

    private boolean a() {
        if (this.f48064p < this.f48063o) {
            return true;
        }
        int read = this.f48060d.read(this.f48061e);
        if (read <= 0) {
            return false;
        }
        this.f48063o = read;
        this.f48064p = 0;
        return true;
    }

    private void h() {
        if (!this.f48065q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f48064p <= this.f48063o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        h();
        return (this.f48063o - this.f48064p) + this.f48060d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48065q) {
            this.f48065q = true;
            this.f48062i.release(this.f48061e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f48065q) {
            p8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        o8.j.i(this.f48064p <= this.f48063o);
        h();
        if (a()) {
            byte[] bArr = this.f48061e;
            int i10 = this.f48064p;
            this.f48064p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f48064p <= this.f48063o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        h();
        int i10 = this.f48063o;
        int i11 = this.f48064p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f48064p = (int) (i11 + j10);
            return j10;
        }
        this.f48064p = i10;
        return j11 + this.f48060d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        o8.j.i(this.f48064p <= this.f48063o);
        h();
        if (a()) {
            int min = Math.min(this.f48063o - this.f48064p, i11);
            System.arraycopy(this.f48061e, this.f48064p, bArr, i10, min);
            this.f48064p += min;
            return min;
        }
        return -1;
    }
}
