package com.budiyev.android.codescanner;

import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f8540a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8541b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8542c;

    /* renamed from: d  reason: collision with root package name */
    private final int f8543d;

    public l(int i10, int i11, int i12, int i13) {
        this.f8540a = i10;
        this.f8541b = i11;
        this.f8542c = i12;
        this.f8543d = i13;
    }

    public l a(int i10, int i11, int i12, int i13) {
        int i14 = this.f8540a;
        int i15 = this.f8541b;
        int i16 = this.f8542c;
        int i17 = this.f8543d;
        if (i14 >= i10 && i15 >= i11 && i16 <= i12 && i17 <= i13) {
            return this;
        }
        return new l(Math.max(i14, i10), Math.max(i15, i11), Math.min(i16, i12), Math.min(i17, i13));
    }

    public l b(l lVar) {
        int i10 = this.f8540a;
        int i11 = this.f8541b;
        int i12 = this.f8542c;
        int i13 = this.f8543d;
        int h10 = h();
        int d10 = d();
        int i14 = lVar.f8540a;
        int i15 = lVar.f8541b;
        int i16 = lVar.f8542c;
        int i17 = lVar.f8543d;
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
        return this.f8543d;
    }

    public int d() {
        return this.f8543d - this.f8541b;
    }

    public int e() {
        return this.f8540a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f8540a == lVar.f8540a && this.f8541b == lVar.f8541b && this.f8542c == lVar.f8542c && this.f8543d == lVar.f8543d) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f8542c;
    }

    public int g() {
        return this.f8541b;
    }

    public int h() {
        return this.f8542c - this.f8540a;
    }

    public int hashCode() {
        return (((((this.f8540a * 31) + this.f8541b) * 31) + this.f8542c) * 31) + this.f8543d;
    }

    public boolean i(int i10, int i11) {
        if (this.f8540a < i10 && this.f8541b < i11 && this.f8542c > i10 && this.f8543d > i11) {
            return true;
        }
        return false;
    }

    public l j(float f10, float f11, float f12) {
        Matrix matrix = new Matrix();
        float[] fArr = {this.f8540a, this.f8541b, this.f8542c, this.f8543d};
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
        return "[(" + this.f8540a + "; " + this.f8541b + ") - (" + this.f8542c + "; " + this.f8543d + ")]";
    }
}
