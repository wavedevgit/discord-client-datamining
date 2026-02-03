package com.budiyev.android.codescanner;

import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f8116a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8117b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8118c;

    /* renamed from: d  reason: collision with root package name */
    private final int f8119d;

    public l(int i10, int i11, int i12, int i13) {
        this.f8116a = i10;
        this.f8117b = i11;
        this.f8118c = i12;
        this.f8119d = i13;
    }

    public l a(int i10, int i11, int i12, int i13) {
        int i14 = this.f8116a;
        int i15 = this.f8117b;
        int i16 = this.f8118c;
        int i17 = this.f8119d;
        if (i14 >= i10 && i15 >= i11 && i16 <= i12 && i17 <= i13) {
            return this;
        }
        return new l(Math.max(i14, i10), Math.max(i15, i11), Math.min(i16, i12), Math.min(i17, i13));
    }

    public l b(l lVar) {
        int i10 = this.f8116a;
        int i11 = this.f8117b;
        int i12 = this.f8118c;
        int i13 = this.f8119d;
        int h10 = h();
        int d10 = d();
        int i14 = lVar.f8116a;
        int i15 = lVar.f8117b;
        int i16 = lVar.f8118c;
        int i17 = lVar.f8119d;
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
        return this.f8119d;
    }

    public int d() {
        return this.f8119d - this.f8117b;
    }

    public int e() {
        return this.f8116a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f8116a == lVar.f8116a && this.f8117b == lVar.f8117b && this.f8118c == lVar.f8118c && this.f8119d == lVar.f8119d) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f8118c;
    }

    public int g() {
        return this.f8117b;
    }

    public int h() {
        return this.f8118c - this.f8116a;
    }

    public int hashCode() {
        return (((((this.f8116a * 31) + this.f8117b) * 31) + this.f8118c) * 31) + this.f8119d;
    }

    public boolean i(int i10, int i11) {
        if (this.f8116a < i10 && this.f8117b < i11 && this.f8118c > i10 && this.f8119d > i11) {
            return true;
        }
        return false;
    }

    public l j(float f10, float f11, float f12) {
        Matrix matrix = new Matrix();
        float[] fArr = {this.f8116a, this.f8117b, this.f8118c, this.f8119d};
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
        return "[(" + this.f8116a + "; " + this.f8117b + ") - (" + this.f8118c + "; " + this.f8119d + ")]";
    }
}
