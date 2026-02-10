package com.facebook.drawee.generic;

import java.util.Arrays;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private EnumC0150a f10763a = EnumC0150a.BITMAP_ONLY;

    /* renamed from: b  reason: collision with root package name */
    private boolean f10764b = false;

    /* renamed from: c  reason: collision with root package name */
    private float[] f10765c = null;

    /* renamed from: d  reason: collision with root package name */
    private int f10766d = 0;

    /* renamed from: e  reason: collision with root package name */
    private float f10767e = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private int f10768f = 0;

    /* renamed from: g  reason: collision with root package name */
    private float f10769g = 0.0f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f10770h = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f10771i = false;

    /* renamed from: j  reason: collision with root package name */
    private boolean f10772j = false;

    /* renamed from: com.facebook.drawee.generic.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0150a {
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
        if (this.f10765c == null) {
            this.f10765c = new float[8];
        }
        return this.f10765c;
    }

    public int d() {
        return this.f10768f;
    }

    public float e() {
        return this.f10767e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f10764b != aVar.f10764b || this.f10766d != aVar.f10766d || Float.compare(aVar.f10767e, this.f10767e) != 0 || this.f10768f != aVar.f10768f || Float.compare(aVar.f10769g, this.f10769g) != 0 || this.f10763a != aVar.f10763a || this.f10770h != aVar.f10770h || this.f10771i != aVar.f10771i) {
            return false;
        }
        return Arrays.equals(this.f10765c, aVar.f10765c);
    }

    public float[] f() {
        return this.f10765c;
    }

    public int h() {
        return this.f10766d;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        EnumC0150a enumC0150a = this.f10763a;
        int i13 = 0;
        if (enumC0150a != null) {
            i10 = enumC0150a.hashCode();
        } else {
            i10 = 0;
        }
        int i14 = ((i10 * 31) + (this.f10764b ? 1 : 0)) * 31;
        float[] fArr = this.f10765c;
        if (fArr != null) {
            i11 = Arrays.hashCode(fArr);
        } else {
            i11 = 0;
        }
        int i15 = (((i14 + i11) * 31) + this.f10766d) * 31;
        float f10 = this.f10767e;
        if (f10 != 0.0f) {
            i12 = Float.floatToIntBits(f10);
        } else {
            i12 = 0;
        }
        int i16 = (((i15 + i12) * 31) + this.f10768f) * 31;
        float f11 = this.f10769g;
        if (f11 != 0.0f) {
            i13 = Float.floatToIntBits(f11);
        }
        return ((((i16 + i13) * 31) + (this.f10770h ? 1 : 0)) * 31) + (this.f10771i ? 1 : 0);
    }

    public float i() {
        return this.f10769g;
    }

    public boolean j() {
        return this.f10771i;
    }

    public boolean k() {
        return this.f10772j;
    }

    public boolean l() {
        return this.f10764b;
    }

    public EnumC0150a m() {
        return this.f10763a;
    }

    public boolean n() {
        return this.f10770h;
    }

    public a o(int i10) {
        this.f10768f = i10;
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
        this.f10767e = f10;
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
        this.f10766d = i10;
        this.f10763a = EnumC0150a.OVERLAY_COLOR;
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
        this.f10769g = f10;
        return this;
    }

    public a u(boolean z10) {
        this.f10771i = z10;
        return this;
    }

    public a v(boolean z10) {
        this.f10764b = z10;
        return this;
    }

    public a w(EnumC0150a enumC0150a) {
        this.f10763a = enumC0150a;
        return this;
    }
}
