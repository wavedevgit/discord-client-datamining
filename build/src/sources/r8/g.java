package r8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f48278d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f48279e;

    /* renamed from: i  reason: collision with root package name */
    private final s8.c f48280i;

    /* renamed from: o  reason: collision with root package name */
    private int f48281o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f48282p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f48283q = false;

    public g(InputStream inputStream, byte[] bArr, s8.c cVar) {
        this.f48278d = (InputStream) o8.j.g(inputStream);
        this.f48279e = (byte[]) o8.j.g(bArr);
        this.f48280i = (s8.c) o8.j.g(cVar);
    }

    private boolean a() {
        if (this.f48282p < this.f48281o) {
            return true;
        }
        int read = this.f48278d.read(this.f48279e);
        if (read <= 0) {
            return false;
        }
        this.f48281o = read;
        this.f48282p = 0;
        return true;
    }

    private void h() {
        if (!this.f48283q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f48282p <= this.f48281o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        h();
        return (this.f48281o - this.f48282p) + this.f48278d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48283q) {
            this.f48283q = true;
            this.f48280i.release(this.f48279e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f48283q) {
            p8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        o8.j.i(this.f48282p <= this.f48281o);
        h();
        if (a()) {
            byte[] bArr = this.f48279e;
            int i10 = this.f48282p;
            this.f48282p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f48282p <= this.f48281o) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        h();
        int i10 = this.f48281o;
        int i11 = this.f48282p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f48282p = (int) (i11 + j10);
            return j10;
        }
        this.f48282p = i10;
        return j11 + this.f48278d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        o8.j.i(this.f48282p <= this.f48281o);
        h();
        if (a()) {
            int min = Math.min(this.f48281o - this.f48282p, i11);
            System.arraycopy(this.f48279e, this.f48282p, bArr, i10, min);
            this.f48282p += min;
            return min;
        }
        return -1;
    }
}
