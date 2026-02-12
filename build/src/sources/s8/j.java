package s8;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    final h f47874d;

    /* renamed from: e  reason: collision with root package name */
    int f47875e;

    /* renamed from: i  reason: collision with root package name */
    int f47876i;

    public j(h hVar) {
        p8.j.b(Boolean.valueOf(!hVar.isClosed()));
        this.f47874d = (h) p8.j.g(hVar);
        this.f47875e = 0;
        this.f47876i = 0;
    }

    @Override // java.io.InputStream
    public int available() {
        return this.f47874d.size() - this.f47875e;
    }

    @Override // java.io.InputStream
    public void mark(int i10) {
        this.f47876i = this.f47875e;
    }

    @Override // java.io.InputStream
    public boolean markSupported() {
        return true;
    }

    @Override // java.io.InputStream
    public int read() {
        if (available() <= 0) {
            return -1;
        }
        h hVar = this.f47874d;
        int i10 = this.f47875e;
        this.f47875e = i10 + 1;
        return hVar.B(i10) & 255;
    }

    @Override // java.io.InputStream
    public void reset() {
        this.f47875e = this.f47876i;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.b(Boolean.valueOf(z10));
        int min = Math.min((int) j10, available());
        this.f47875e += min;
        return min;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        if (i10 >= 0 && i11 >= 0 && i10 + i11 <= bArr.length) {
            int available = available();
            if (available <= 0) {
                return -1;
            }
            if (i11 <= 0) {
                return 0;
            }
            int min = Math.min(available, i11);
            this.f47874d.q(this.f47875e, bArr, i10, min);
            this.f47875e += min;
            return min;
        }
        throw new ArrayIndexOutOfBoundsException("length=" + bArr.length + "; regionStart=" + i10 + "; regionLength=" + i11);
    }
}
