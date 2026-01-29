package r8;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    final h f48066d;

    /* renamed from: e  reason: collision with root package name */
    int f48067e;

    /* renamed from: i  reason: collision with root package name */
    int f48068i;

    public j(h hVar) {
        o8.j.b(Boolean.valueOf(!hVar.isClosed()));
        this.f48066d = (h) o8.j.g(hVar);
        this.f48067e = 0;
        this.f48068i = 0;
    }

    @Override // java.io.InputStream
    public int available() {
        return this.f48066d.size() - this.f48067e;
    }

    @Override // java.io.InputStream
    public void mark(int i10) {
        this.f48068i = this.f48067e;
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
        h hVar = this.f48066d;
        int i10 = this.f48067e;
        this.f48067e = i10 + 1;
        return hVar.w(i10) & 255;
    }

    @Override // java.io.InputStream
    public void reset() {
        this.f48067e = this.f48068i;
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        boolean z10;
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        int min = Math.min((int) j10, available());
        this.f48067e += min;
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
            this.f48066d.o(this.f48067e, bArr, i10, min);
            this.f48067e += min;
            return min;
        }
        throw new ArrayIndexOutOfBoundsException("length=" + bArr.length + "; regionStart=" + i10 + "; regionLength=" + i11);
    }
}
