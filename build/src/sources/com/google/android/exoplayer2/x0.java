package com.google.android.exoplayer2;

import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f14202a;

    /* renamed from: b  reason: collision with root package name */
    public final long f14203b;

    /* renamed from: c  reason: collision with root package name */
    public final long f14204c;

    /* renamed from: d  reason: collision with root package name */
    public final long f14205d;

    /* renamed from: e  reason: collision with root package name */
    public final long f14206e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f14207f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f14208g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f14209h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f14210i;

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
        this.f14202a = bVar;
        this.f14203b = j10;
        this.f14204c = j11;
        this.f14205d = j12;
        this.f14206e = j13;
        this.f14207f = z10;
        this.f14208g = z11;
        this.f14209h = z12;
        this.f14210i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f14204c) {
            return this;
        }
        return new x0(this.f14202a, this.f14203b, j10, this.f14205d, this.f14206e, this.f14207f, this.f14208g, this.f14209h, this.f14210i);
    }

    public x0 b(long j10) {
        if (j10 == this.f14203b) {
            return this;
        }
        return new x0(this.f14202a, j10, this.f14204c, this.f14205d, this.f14206e, this.f14207f, this.f14208g, this.f14209h, this.f14210i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f14203b == x0Var.f14203b && this.f14204c == x0Var.f14204c && this.f14205d == x0Var.f14205d && this.f14206e == x0Var.f14206e && this.f14207f == x0Var.f14207f && this.f14208g == x0Var.f14208g && this.f14209h == x0Var.f14209h && this.f14210i == x0Var.f14210i && oe.w0.c(this.f14202a, x0Var.f14202a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f14202a.hashCode()) * 31) + ((int) this.f14203b)) * 31) + ((int) this.f14204c)) * 31) + ((int) this.f14205d)) * 31) + ((int) this.f14206e)) * 31) + (this.f14207f ? 1 : 0)) * 31) + (this.f14208g ? 1 : 0)) * 31) + (this.f14209h ? 1 : 0)) * 31) + (this.f14210i ? 1 : 0);
    }
}
