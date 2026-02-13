package s8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f48436d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f48437e;

    /* renamed from: i  reason: collision with root package name */
    private final t8.c f48438i;

    /* renamed from: o  reason: collision with root package name */
    private int f48439o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f48440p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f48441q = false;

    public g(InputStream inputStream, byte[] bArr, t8.c cVar) {
        this.f48436d = (InputStream) p8.j.g(inputStream);
        this.f48437e = (byte[]) p8.j.g(bArr);
        this.f48438i = (t8.c) p8.j.g(cVar);
    }

    private boolean a() {
        if (this.f48440p < this.f48439o) {
            return true;
        }
        int read = this.f48436d.read(this.f48437e);
        if (read <= 0) {
            return false;
        }
        this.f48439o = read;
        this.f48440p = 0;
        return true;
    }

    private void h() {
        if (!this.f48441q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f48440p <= this.f48439o) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        h();
        return (this.f48439o - this.f48440p) + this.f48436d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f48441q) {
            this.f48441q = true;
            this.f48438i.release(this.f48437e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f48441q) {
            q8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        p8.j.i(this.f48440p <= this.f48439o);
        h();
        if (a()) {
            byte[] bArr = this.f48437e;
            int i10 = this.f48440p;
            this.f48440p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f48440p <= this.f48439o) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        h();
        int i10 = this.f48439o;
        int i11 = this.f48440p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f48440p = (int) (i11 + j10);
            return j10;
        }
        this.f48440p = i10;
        return j11 + this.f48436d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        p8.j.i(this.f48440p <= this.f48439o);
        h();
        if (a()) {
            int min = Math.min(this.f48439o - this.f48440p, i11);
            System.arraycopy(this.f48437e, this.f48440p, bArr, i10, min);
            this.f48440p += min;
            return min;
        }
        return -1;
    }
}
