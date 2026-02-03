package com.facebook.drawee.generic;

import java.util.Arrays;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private EnumC0137a f9762a = EnumC0137a.BITMAP_ONLY;

    /* renamed from: b  reason: collision with root package name */
    private boolean f9763b = false;

    /* renamed from: c  reason: collision with root package name */
    private float[] f9764c = null;

    /* renamed from: d  reason: collision with root package name */
    private int f9765d = 0;

    /* renamed from: e  reason: collision with root package name */
    private float f9766e = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private int f9767f = 0;

    /* renamed from: g  reason: collision with root package name */
    private float f9768g = 0.0f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f9769h = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f9770i = false;

    /* renamed from: j  reason: collision with root package name */
    private boolean f9771j = false;

    /* renamed from: com.facebook.drawee.generic.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0137a {
        OVERLAY_COLOR,
        BITMAP_ONLY
    }

    public static a a() {
        return new a().v(true);
    }

    public static a b(float f10, float f11, float f12, float f13) {
        return new a().q(f10, f11, f12, f13);
    }

    public static a c(float f10) {
        return new a().r(f10);
    }

    private float[] g() {
        if (this.f9764c == null) {
            this.f9764c = new float[8];
        }
        return this.f9764c;
    }

    public int d() {
        return this.f9767f;
    }

    public float e() {
        return this.f9766e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f9763b != aVar.f9763b || this.f9765d != aVar.f9765d || Float.compare(aVar.f9766e, this.f9766e) != 0 || this.f9767f != aVar.f9767f || Float.compare(aVar.f9768g, this.f9768g) != 0 || this.f9762a != aVar.f9762a || this.f9769h != aVar.f9769h || this.f9770i != aVar.f9770i) {
            return false;
        }
        return Arrays.equals(this.f9764c, aVar.f9764c);
    }

    public float[] f() {
        return this.f9764c;
    }

    public int h() {
        return this.f9765d;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        EnumC0137a enumC0137a = this.f9762a;
        int i13 = 0;
        if (enumC0137a != null) {
            i10 = enumC0137a.hashCode();
        } else {
            i10 = 0;
        }
        int i14 = ((i10 * 31) + (this.f9763b ? 1 : 0)) * 31;
        float[] fArr = this.f9764c;
        if (fArr != null) {
            i11 = Arrays.hashCode(fArr);
        } else {
            i11 = 0;
        }
        int i15 = (((i14 + i11) * 31) + this.f9765d) * 31;
        float f10 = this.f9766e;
        if (f10 != 0.0f) {
            i12 = Float.floatToIntBits(f10);
        } else {
            i12 = 0;
        }
        int i16 = (((i15 + i12) * 31) + this.f9767f) * 31;
        float f11 = this.f9768g;
        if (f11 != 0.0f) {
            i13 = Float.floatToIntBits(f11);
        }
        return ((((i16 + i13) * 31) + (this.f9769h ? 1 : 0)) * 31) + (this.f9770i ? 1 : 0);
    }

    public float i() {
        return this.f9768g;
    }

    public boolean j() {
        return this.f9770i;
    }

    public boolean k() {
        return this.f9771j;
    }

    public boolean l() {
        return this.f9763b;
    }

    public EnumC0137a m() {
        return this.f9762a;
    }

    public boolean n() {
        return this.f9769h;
    }

    public a o(int i10) {
        this.f9767f = i10;
        return this;
    }

    public a p(float f10) {
        boolean z10;
        if (f10 >= 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.c(z10, "the border width cannot be < 0");
        this.f9766e = f10;
        return this;
    }

    public a q(float f10, float f11, float f12, float f13) {
        float[] g10 = g();
        g10[1] = f10;
        g10[0] = f10;
        g10[3] = f11;
        g10[2] = f11;
        g10[5] = f12;
        g10[4] = f12;
        g10[7] = f13;
        g10[6] = f13;
        return this;
    }

    public a r(float f10) {
        Arrays.fill(g(), f10);
        return this;
    }

    public a s(int i10) {
        this.f9765d = i10;
        this.f9762a = EnumC0137a.OVERLAY_COLOR;
        return this;
    }

    public a t(float f10) {
        boolean z10;
        if (f10 >= 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.c(z10, "the padding cannot be < 0");
        this.f9768g = f10;
        return this;
    }

    public a u(boolean z10) {
        this.f9770i = z10;
        return this;
    }

    public a v(boolean z10) {
        this.f9763b = z10;
        return this;
    }

    public a w(EnumC0137a enumC0137a) {
        this.f9762a = enumC0137a;
        return this;
    }
}
