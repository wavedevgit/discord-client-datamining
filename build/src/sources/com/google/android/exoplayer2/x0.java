package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f14541a;

    /* renamed from: b  reason: collision with root package name */
    public final long f14542b;

    /* renamed from: c  reason: collision with root package name */
    public final long f14543c;

    /* renamed from: d  reason: collision with root package name */
    public final long f14544d;

    /* renamed from: e  reason: collision with root package name */
    public final long f14545e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f14546f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f14547g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f14548h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f14549i;

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
        this.f14541a = bVar;
        this.f14542b = j10;
        this.f14543c = j11;
        this.f14544d = j12;
        this.f14545e = j13;
        this.f14546f = z10;
        this.f14547g = z11;
        this.f14548h = z12;
        this.f14549i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f14543c) {
            return this;
        }
        return new x0(this.f14541a, this.f14542b, j10, this.f14544d, this.f14545e, this.f14546f, this.f14547g, this.f14548h, this.f14549i);
    }

    public x0 b(long j10) {
        if (j10 == this.f14542b) {
            return this;
        }
        return new x0(this.f14541a, j10, this.f14543c, this.f14544d, this.f14545e, this.f14546f, this.f14547g, this.f14548h, this.f14549i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f14542b == x0Var.f14542b && this.f14543c == x0Var.f14543c && this.f14544d == x0Var.f14544d && this.f14545e == x0Var.f14545e && this.f14546f == x0Var.f14546f && this.f14547g == x0Var.f14547g && this.f14548h == x0Var.f14548h && this.f14549i == x0Var.f14549i && ne.w0.c(this.f14541a, x0Var.f14541a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f14541a.hashCode()) * 31) + ((int) this.f14542b)) * 31) + ((int) this.f14543c)) * 31) + ((int) this.f14544d)) * 31) + ((int) this.f14545e)) * 31) + (this.f14546f ? 1 : 0)) * 31) + (this.f14547g ? 1 : 0)) * 31) + (this.f14548h ? 1 : 0)) * 31) + (this.f14549i ? 1 : 0);
    }
}
