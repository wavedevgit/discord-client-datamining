package com.facebook.drawee.generic;

import java.util.Arrays;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private EnumC0151a f11165a = EnumC0151a.BITMAP_ONLY;

    /* renamed from: b  reason: collision with root package name */
    private boolean f11166b = false;

    /* renamed from: c  reason: collision with root package name */
    private float[] f11167c = null;

    /* renamed from: d  reason: collision with root package name */
    private int f11168d = 0;

    /* renamed from: e  reason: collision with root package name */
    private float f11169e = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private int f11170f = 0;

    /* renamed from: g  reason: collision with root package name */
    private float f11171g = 0.0f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f11172h = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f11173i = false;

    /* renamed from: j  reason: collision with root package name */
    private boolean f11174j = false;

    /* renamed from: com.facebook.drawee.generic.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0151a {
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
        if (this.f11167c == null) {
            this.f11167c = new float[8];
        }
        return this.f11167c;
    }

    public int d() {
        return this.f11170f;
    }

    public float e() {
        return this.f11169e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f11166b != aVar.f11166b || this.f11168d != aVar.f11168d || Float.compare(aVar.f11169e, this.f11169e) != 0 || this.f11170f != aVar.f11170f || Float.compare(aVar.f11171g, this.f11171g) != 0 || this.f11165a != aVar.f11165a || this.f11172h != aVar.f11172h || this.f11173i != aVar.f11173i) {
            return false;
        }
        return Arrays.equals(this.f11167c, aVar.f11167c);
    }

    public float[] f() {
        return this.f11167c;
    }

    public int h() {
        return this.f11168d;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        EnumC0151a enumC0151a = this.f11165a;
        int i13 = 0;
        if (enumC0151a != null) {
            i10 = enumC0151a.hashCode();
        } else {
            i10 = 0;
        }
        int i14 = ((i10 * 31) + (this.f11166b ? 1 : 0)) * 31;
        float[] fArr = this.f11167c;
        if (fArr != null) {
            i11 = Arrays.hashCode(fArr);
        } else {
            i11 = 0;
        }
        int i15 = (((i14 + i11) * 31) + this.f11168d) * 31;
        float f10 = this.f11169e;
        if (f10 != 0.0f) {
            i12 = Float.floatToIntBits(f10);
        } else {
            i12 = 0;
        }
        int i16 = (((i15 + i12) * 31) + this.f11170f) * 31;
        float f11 = this.f11171g;
        if (f11 != 0.0f) {
            i13 = Float.floatToIntBits(f11);
        }
        return ((((i16 + i13) * 31) + (this.f11172h ? 1 : 0)) * 31) + (this.f11173i ? 1 : 0);
    }

    public float i() {
        return this.f11171g;
    }

    public boolean j() {
        return this.f11173i;
    }

    public boolean k() {
        return this.f11174j;
    }

    public boolean l() {
        return this.f11166b;
    }

    public EnumC0151a m() {
        return this.f11165a;
    }

    public boolean n() {
        return this.f11172h;
    }

    public a o(int i10) {
        this.f11170f = i10;
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
        this.f11169e = f10;
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
        this.f11168d = i10;
        this.f11165a = EnumC0151a.OVERLAY_COLOR;
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
        this.f11171g = f10;
        return this;
    }

    public a u(boolean z10) {
        this.f11173i = z10;
        return this;
    }

    public a v(boolean z10) {
        this.f11166b = z10;
        return this;
    }

    public a w(EnumC0151a enumC0151a) {
        this.f11165a = enumC0151a;
        return this;
    }
}
