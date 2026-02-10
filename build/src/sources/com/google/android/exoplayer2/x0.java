package com.google.android.exoplayer2;

import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f14201a;

    /* renamed from: b  reason: collision with root package name */
    public final long f14202b;

    /* renamed from: c  reason: collision with root package name */
    public final long f14203c;

    /* renamed from: d  reason: collision with root package name */
    public final long f14204d;

    /* renamed from: e  reason: collision with root package name */
    public final long f14205e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f14206f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f14207g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f14208h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f14209i;

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
        oe.a.a(z14);
        if (z12 && !z11) {
            z15 = false;
        } else {
            z15 = true;
        }
        oe.a.a(z15);
        if (z10 && (z11 || z12 || z13)) {
            z16 = false;
        }
        oe.a.a(z16);
        this.f14201a = bVar;
        this.f14202b = j10;
        this.f14203c = j11;
        this.f14204d = j12;
        this.f14205e = j13;
        this.f14206f = z10;
        this.f14207g = z11;
        this.f14208h = z12;
        this.f14209i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f14203c) {
            return this;
        }
        return new x0(this.f14201a, this.f14202b, j10, this.f14204d, this.f14205e, this.f14206f, this.f14207g, this.f14208h, this.f14209i);
    }

    public x0 b(long j10) {
        if (j10 == this.f14202b) {
            return this;
        }
        return new x0(this.f14201a, j10, this.f14203c, this.f14204d, this.f14205e, this.f14206f, this.f14207g, this.f14208h, this.f14209i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f14202b == x0Var.f14202b && this.f14203c == x0Var.f14203c && this.f14204d == x0Var.f14204d && this.f14205e == x0Var.f14205e && this.f14206f == x0Var.f14206f && this.f14207g == x0Var.f14207g && this.f14208h == x0Var.f14208h && this.f14209i == x0Var.f14209i && oe.w0.c(this.f14201a, x0Var.f14201a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f14201a.hashCode()) * 31) + ((int) this.f14202b)) * 31) + ((int) this.f14203c)) * 31) + ((int) this.f14204d)) * 31) + ((int) this.f14205e)) * 31) + (this.f14206f ? 1 : 0)) * 31) + (this.f14207g ? 1 : 0)) * 31) + (this.f14208h ? 1 : 0)) * 31) + (this.f14209i ? 1 : 0);
    }
}
