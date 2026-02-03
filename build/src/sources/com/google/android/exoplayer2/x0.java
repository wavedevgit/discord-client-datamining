package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f14170a;

    /* renamed from: b  reason: collision with root package name */
    public final long f14171b;

    /* renamed from: c  reason: collision with root package name */
    public final long f14172c;

    /* renamed from: d  reason: collision with root package name */
    public final long f14173d;

    /* renamed from: e  reason: collision with root package name */
    public final long f14174e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f14175f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f14176g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f14177h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f14178i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x0(r.b bVar, long j10, long j11, long j12, long j13, boolean z10, boolean z11, boolean z12, boolean z13) {
        boolean z14;
        boolean z15;
        boolean z16 = true;
        if (z13 && !z11) {
            z14 = false;
        } else {
            z14 = true;
        }
        ne.a.a(z14);
        if (z12 && !z11) {
            z15 = false;
        } else {
            z15 = true;
        }
        ne.a.a(z15);
        if (z10 && (z11 || z12 || z13)) {
            z16 = false;
        }
        ne.a.a(z16);
        this.f14170a = bVar;
        this.f14171b = j10;
        this.f14172c = j11;
        this.f14173d = j12;
        this.f14174e = j13;
        this.f14175f = z10;
        this.f14176g = z11;
        this.f14177h = z12;
        this.f14178i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f14172c) {
            return this;
        }
        return new x0(this.f14170a, this.f14171b, j10, this.f14173d, this.f14174e, this.f14175f, this.f14176g, this.f14177h, this.f14178i);
    }

    public x0 b(long j10) {
        if (j10 == this.f14171b) {
            return this;
        }
        return new x0(this.f14170a, j10, this.f14172c, this.f14173d, this.f14174e, this.f14175f, this.f14176g, this.f14177h, this.f14178i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f14171b == x0Var.f14171b && this.f14172c == x0Var.f14172c && this.f14173d == x0Var.f14173d && this.f14174e == x0Var.f14174e && this.f14175f == x0Var.f14175f && this.f14176g == x0Var.f14176g && this.f14177h == x0Var.f14177h && this.f14178i == x0Var.f14178i && ne.w0.c(this.f14170a, x0Var.f14170a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f14170a.hashCode()) * 31) + ((int) this.f14171b)) * 31) + ((int) this.f14172c)) * 31) + ((int) this.f14173d)) * 31) + ((int) this.f14174e)) * 31) + (this.f14175f ? 1 : 0)) * 31) + (this.f14176g ? 1 : 0)) * 31) + (this.f14177h ? 1 : 0)) * 31) + (this.f14178i ? 1 : 0);
    }
}
