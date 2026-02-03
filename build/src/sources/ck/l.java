package ck;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l extends i {

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f8280c;

    /* renamed from: d  reason: collision with root package name */
    private final int f8281d;

    /* renamed from: e  reason: collision with root package name */
    private final int f8282e;

    /* renamed from: f  reason: collision with root package name */
    private final int f8283f;

    /* renamed from: g  reason: collision with root package name */
    private final int f8284g;

    public l(byte[] bArr, int i10, int i11, int i12, int i13, int i14, int i15, boolean z10) {
        super(i14, i15);
        if (i12 + i14 <= i10 && i13 + i15 <= i11) {
            this.f8280c = bArr;
            this.f8281d = i10;
            this.f8282e = i11;
            this.f8283f = i12;
            this.f8284g = i13;
            if (z10) {
                h(i14, i15);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Crop rectangle does not fit within image data.");
    }

    private void h(int i10, int i11) {
        byte[] bArr = this.f8280c;
        int i12 = (this.f8284g * this.f8281d) + this.f8283f;
        int i13 = 0;
        while (i13 < i11) {
            int i14 = (i10 / 2) + i12;
            int i15 = (i12 + i10) - 1;
            int i16 = i12;
            while (i16 < i14) {
                byte b10 = bArr[i16];
                bArr[i16] = bArr[i15];
                bArr[i15] = b10;
                i16++;
                i15--;
            }
            i13++;
            i12 += this.f8281d;
        }
    }

    @Override // ck.i
    public byte[] b() {
        int d10 = d();
        int a10 = a();
        int i10 = this.f8281d;
        if (d10 == i10 && a10 == this.f8282e) {
            return this.f8280c;
        }
        int i11 = d10 * a10;
        byte[] bArr = new byte[i11];
        int i12 = (this.f8284g * i10) + this.f8283f;
        if (d10 == i10) {
            System.arraycopy(this.f8280c, i12, bArr, 0, i11);
            return bArr;
        }
        for (int i13 = 0; i13 < a10; i13++) {
            System.arraycopy(this.f8280c, i12, bArr, i13 * d10, d10);
            i12 += this.f8281d;
        }
        return bArr;
    }

    @Override // ck.i
    public byte[] c(int i10, byte[] bArr) {
        if (i10 >= 0 && i10 < a()) {
            int d10 = d();
            if (bArr == null || bArr.length < d10) {
                bArr = new byte[d10];
            }
            System.arraycopy(this.f8280c, ((i10 + this.f8284g) * this.f8281d) + this.f8283f, bArr, 0, d10);
            return bArr;
        }
        throw new IllegalArgumentException("Requested row is outside the image: " + i10);
    }
}
