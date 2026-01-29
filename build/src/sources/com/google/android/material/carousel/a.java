package com.google.android.material.carousel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: a  reason: collision with root package name */
    final int f15780a;

    /* renamed from: b  reason: collision with root package name */
    float f15781b;

    /* renamed from: c  reason: collision with root package name */
    int f15782c;

    /* renamed from: d  reason: collision with root package name */
    int f15783d;

    /* renamed from: e  reason: collision with root package name */
    float f15784e;

    /* renamed from: f  reason: collision with root package name */
    float f15785f;

    /* renamed from: g  reason: collision with root package name */
    final int f15786g;

    /* renamed from: h  reason: collision with root package name */
    final float f15787h;

    a(int i10, float f10, float f11, float f12, int i11, float f13, int i12, float f14, int i13, float f15) {
        this.f15780a = i10;
        this.f15781b = u1.a.a(f10, f11, f12);
        this.f15782c = i11;
        this.f15784e = f13;
        this.f15783d = i12;
        this.f15785f = f14;
        this.f15786g = i13;
        d(f15, f11, f12, f14);
        this.f15787h = b(f14);
    }

    private float a(float f10, int i10, float f11, int i11, int i12) {
        if (i10 <= 0) {
            f11 = 0.0f;
        }
        float f12 = i11 / 2.0f;
        return (f10 - ((i10 + f12) * f11)) / (i12 + f12);
    }

    private float b(float f10) {
        if (!g()) {
            return Float.MAX_VALUE;
        }
        return Math.abs(f10 - this.f15785f) * this.f15780a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a c(float f10, float f11, float f12, float f13, int[] iArr, float f14, int[] iArr2, float f15, int[] iArr3) {
        a aVar = null;
        int i10 = 1;
        for (int i11 : iArr3) {
            int length = iArr2.length;
            int i12 = 0;
            while (i12 < length) {
                int i13 = iArr2[i12];
                int length2 = iArr.length;
                int i14 = 0;
                while (i14 < length2) {
                    int i15 = length;
                    int i16 = i12;
                    int i17 = i10;
                    int i18 = length2;
                    int i19 = i14;
                    a aVar2 = new a(i17, f11, f12, f13, iArr[i14], f14, i13, f15, i11, f10);
                    if (aVar == null || aVar2.f15787h < aVar.f15787h) {
                        if (aVar2.f15787h == 0.0f) {
                            return aVar2;
                        }
                        aVar = aVar2;
                    }
                    int i20 = i17 + 1;
                    i14 = i19 + 1;
                    i12 = i16;
                    i10 = i20;
                    length = i15;
                    length2 = i18;
                }
                i12++;
                i10 = i10;
                length = length;
            }
        }
        return aVar;
    }

    private void d(float f10, float f11, float f12, float f13) {
        float f14;
        float f15 = f10 - f();
        int i10 = this.f15782c;
        if (i10 > 0 && f15 > 0.0f) {
            float f16 = this.f15781b;
            this.f15781b = f16 + Math.min(f15 / i10, f12 - f16);
        } else if (i10 > 0 && f15 < 0.0f) {
            float f17 = this.f15781b;
            this.f15781b = f17 + Math.max(f15 / i10, f11 - f17);
        }
        int i11 = this.f15782c;
        if (i11 > 0) {
            f14 = this.f15781b;
        } else {
            f14 = 0.0f;
        }
        this.f15781b = f14;
        float a10 = a(f10, i11, f14, this.f15783d, this.f15786g);
        this.f15785f = a10;
        float f18 = (this.f15781b + a10) / 2.0f;
        this.f15784e = f18;
        int i12 = this.f15783d;
        if (i12 > 0 && a10 != f13) {
            float f19 = (f13 - a10) * this.f15786g;
            float min = Math.min(Math.abs(f19), f18 * 0.1f * i12);
            if (f19 > 0.0f) {
                this.f15784e -= min / this.f15783d;
                this.f15785f += min / this.f15786g;
                return;
            }
            this.f15784e += min / this.f15783d;
            this.f15785f -= min / this.f15786g;
        }
    }

    private float f() {
        return (this.f15785f * this.f15786g) + (this.f15784e * this.f15783d) + (this.f15781b * this.f15782c);
    }

    private boolean g() {
        int i10 = this.f15786g;
        if (i10 > 0 && this.f15782c > 0 && this.f15783d > 0) {
            float f10 = this.f15785f;
            float f11 = this.f15784e;
            if (f10 <= f11 || f11 <= this.f15781b) {
                return false;
            }
            return true;
        } else if (i10 > 0 && this.f15782c > 0 && this.f15785f <= this.f15781b) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f15782c + this.f15783d + this.f15786g;
    }

    public String toString() {
        return "Arrangement [priority=" + this.f15780a + ", smallCount=" + this.f15782c + ", smallSize=" + this.f15781b + ", mediumCount=" + this.f15783d + ", mediumSize=" + this.f15784e + ", largeCount=" + this.f15786g + ", largeSize=" + this.f15785f + ", cost=" + this.f15787h + "]";
    }
}
