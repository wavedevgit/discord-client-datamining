package com.google.android.material.carousel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: a  reason: collision with root package name */
    final int f14377a;

    /* renamed from: b  reason: collision with root package name */
    float f14378b;

    /* renamed from: c  reason: collision with root package name */
    int f14379c;

    /* renamed from: d  reason: collision with root package name */
    int f14380d;

    /* renamed from: e  reason: collision with root package name */
    float f14381e;

    /* renamed from: f  reason: collision with root package name */
    float f14382f;

    /* renamed from: g  reason: collision with root package name */
    final int f14383g;

    /* renamed from: h  reason: collision with root package name */
    final float f14384h;

    a(int i10, float f10, float f11, float f12, int i11, float f13, int i12, float f14, int i13, float f15) {
        this.f14377a = i10;
        this.f14378b = u1.a.a(f10, f11, f12);
        this.f14379c = i11;
        this.f14381e = f13;
        this.f14380d = i12;
        this.f14382f = f14;
        this.f14383g = i13;
        d(f15, f11, f12, f14);
        this.f14384h = b(f14);
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
        return Math.abs(f10 - this.f14382f) * this.f14377a;
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
                    if (aVar == null || aVar2.f14384h < aVar.f14384h) {
                        if (aVar2.f14384h == 0.0f) {
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
        int i10 = this.f14379c;
        if (i10 > 0 && f15 > 0.0f) {
            float f16 = this.f14378b;
            this.f14378b = f16 + Math.min(f15 / i10, f12 - f16);
        } else if (i10 > 0 && f15 < 0.0f) {
            float f17 = this.f14378b;
            this.f14378b = f17 + Math.max(f15 / i10, f11 - f17);
        }
        int i11 = this.f14379c;
        if (i11 > 0) {
            f14 = this.f14378b;
        } else {
            f14 = 0.0f;
        }
        this.f14378b = f14;
        float a10 = a(f10, i11, f14, this.f14380d, this.f14383g);
        this.f14382f = a10;
        float f18 = (this.f14378b + a10) / 2.0f;
        this.f14381e = f18;
        int i12 = this.f14380d;
        if (i12 > 0 && a10 != f13) {
            float f19 = (f13 - a10) * this.f14383g;
            float min = Math.min(Math.abs(f19), f18 * 0.1f * i12);
            if (f19 > 0.0f) {
                this.f14381e -= min / this.f14380d;
                this.f14382f += min / this.f14383g;
                return;
            }
            this.f14381e += min / this.f14380d;
            this.f14382f -= min / this.f14383g;
        }
    }

    private float f() {
        return (this.f14382f * this.f14383g) + (this.f14381e * this.f14380d) + (this.f14378b * this.f14379c);
    }

    private boolean g() {
        int i10 = this.f14383g;
        if (i10 > 0 && this.f14379c > 0 && this.f14380d > 0) {
            float f10 = this.f14382f;
            float f11 = this.f14381e;
            if (f10 <= f11 || f11 <= this.f14378b) {
                return false;
            }
            return true;
        } else if (i10 > 0 && this.f14379c > 0 && this.f14382f <= this.f14378b) {
            return false;
        } else {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f14379c + this.f14380d + this.f14383g;
    }

    public String toString() {
        return "Arrangement [priority=" + this.f14377a + ", smallCount=" + this.f14379c + ", smallSize=" + this.f14378b + ", mediumCount=" + this.f14380d + ", mediumSize=" + this.f14381e + ", largeCount=" + this.f14383g + ", largeSize=" + this.f14382f + ", cost=" + this.f14384h + "]";
    }
}
