package com.budiyev.android.codescanner;

import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f8400a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8401b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8402c;

    /* renamed from: d  reason: collision with root package name */
    private final int f8403d;

    public l(int i10, int i11, int i12, int i13) {
        this.f8400a = i10;
        this.f8401b = i11;
        this.f8402c = i12;
        this.f8403d = i13;
    }

    public l a(int i10, int i11, int i12, int i13) {
        int i14 = this.f8400a;
        int i15 = this.f8401b;
        int i16 = this.f8402c;
        int i17 = this.f8403d;
        if (i14 >= i10 && i15 >= i11 && i16 <= i12 && i17 <= i13) {
            return this;
        }
        return new l(Math.max(i14, i10), Math.max(i15, i11), Math.min(i16, i12), Math.min(i17, i13));
    }

    public l b(l lVar) {
        int i10 = this.f8400a;
        int i11 = this.f8401b;
        int i12 = this.f8402c;
        int i13 = this.f8403d;
        int h10 = h();
        int d10 = d();
        int i14 = lVar.f8400a;
        int i15 = lVar.f8401b;
        int i16 = lVar.f8402c;
        int i17 = lVar.f8403d;
        int h11 = lVar.h();
        int d11 = lVar.d();
        if (i10 >= i14 && i11 >= i15 && i12 <= i16 && i13 <= i17) {
            return this;
        }
        int min = Math.min(h10, h11);
        int min2 = Math.min(d10, d11);
        if (i10 < i14) {
            i12 = i14 + min;
            i10 = i14;
        } else if (i12 > i16) {
            i10 = i16 - min;
            i12 = i16;
        }
        if (i11 < i15) {
            i13 = i15 + min2;
            i11 = i15;
        } else if (i13 > i17) {
            i11 = i17 - min2;
            i13 = i17;
        }
        return new l(i10, i11, i12, i13);
    }

    public int c() {
        return this.f8403d;
    }

    public int d() {
        return this.f8403d - this.f8401b;
    }

    public int e() {
        return this.f8400a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f8400a == lVar.f8400a && this.f8401b == lVar.f8401b && this.f8402c == lVar.f8402c && this.f8403d == lVar.f8403d) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f8402c;
    }

    public int g() {
        return this.f8401b;
    }

    public int h() {
        return this.f8402c - this.f8400a;
    }

    public int hashCode() {
        return (((((this.f8400a * 31) + this.f8401b) * 31) + this.f8402c) * 31) + this.f8403d;
    }

    public boolean i(int i10, int i11) {
        if (this.f8400a < i10 && this.f8401b < i11 && this.f8402c > i10 && this.f8403d > i11) {
            return true;
        }
        return false;
    }

    public l j(float f10, float f11, float f12) {
        Matrix matrix = new Matrix();
        float[] fArr = {this.f8400a, this.f8401b, this.f8402c, this.f8403d};
        matrix.postRotate(f10, f11, f12);
        matrix.mapPoints(fArr);
        int i10 = (int) fArr[0];
        int i11 = (int) fArr[1];
        int i12 = (int) fArr[2];
        int i13 = (int) fArr[3];
        if (i10 > i12) {
            i12 = i10;
            i10 = i12;
        }
        if (i11 > i13) {
            i13 = i11;
            i11 = i13;
        }
        return new l(i10, i11, i12, i13);
    }

    public String toString() {
        return "[(" + this.f8400a + "; " + this.f8401b + ") - (" + this.f8402c + "; " + this.f8403d + ")]";
    }
}
