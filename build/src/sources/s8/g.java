package s8;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f47867d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f47868e;

    /* renamed from: i  reason: collision with root package name */
    private final t8.c f47869i;

    /* renamed from: o  reason: collision with root package name */
    private int f47870o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f47871p = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f47872q = false;

    public g(InputStream inputStream, byte[] bArr, t8.c cVar) {
        this.f47867d = (InputStream) p8.j.g(inputStream);
        this.f47868e = (byte[]) p8.j.g(bArr);
        this.f47869i = (t8.c) p8.j.g(cVar);
    }

    private boolean a() {
        if (this.f47871p < this.f47870o) {
            return true;
        }
        int read = this.f47867d.read(this.f47868e);
        if (read <= 0) {
            return false;
        }
        this.f47870o = read;
        this.f47871p = 0;
        return true;
    }

    private void h() {
        if (!this.f47872q) {
            return;
        }
        throw new IOException("stream already closed");
    }

    @Override // java.io.InputStream
    public int available() {
        boolean z10;
        if (this.f47871p <= this.f47870o) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        h();
        return (this.f47870o - this.f47871p) + this.f47867d.available();
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f47872q) {
            this.f47872q = true;
            this.f47869i.release(this.f47868e);
            super.close();
        }
    }

    protected void finalize() {
        if (!this.f47872q) {
            q8.a.m("PooledByteInputStream", "Finalized without closing");
            close();
        }
        super.finalize();
    }

    @Override // java.io.InputStream
    public int read() {
        p8.j.i(this.f47871p <= this.f47870o);
        h();
        if (a()) {
            byte[] bArr = this.f47868e;
            int i10 = this.f47871p;
            this.f47871p = i10 + 1;
            return bArr[i10] & 255;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (this.f47871p <= this.f47870o) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        h();
        int i10 = this.f47870o;
        int i11 = this.f47871p;
        long j11 = i10 - i11;
        if (j11 >= j10) {
            this.f47871p = (int) (i11 + j10);
            return j10;
        }
        this.f47871p = i10;
        return j11 + this.f47867d.skip(j10 - j11);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        p8.j.i(this.f47871p <= this.f47870o);
        h();
        if (a()) {
            int min = Math.min(this.f47870o - this.f47871p, i11);
            System.arraycopy(this.f47868e, this.f47871p, bArr, i10, min);
            this.f47871p += min;
            return min;
        }
        return -1;
    }
}
