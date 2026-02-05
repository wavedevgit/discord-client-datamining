package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f13523a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13524b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13525c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13526d;

    /* renamed from: e  reason: collision with root package name */
    public final long f13527e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f13528f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13529g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f13530h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f13531i;

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
        this.f13523a = bVar;
        this.f13524b = j10;
        this.f13525c = j11;
        this.f13526d = j12;
        this.f13527e = j13;
        this.f13528f = z10;
        this.f13529g = z11;
        this.f13530h = z12;
        this.f13531i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f13525c) {
            return this;
        }
        return new x0(this.f13523a, this.f13524b, j10, this.f13526d, this.f13527e, this.f13528f, this.f13529g, this.f13530h, this.f13531i);
    }

    public x0 b(long j10) {
        if (j10 == this.f13524b) {
            return this;
        }
        return new x0(this.f13523a, j10, this.f13525c, this.f13526d, this.f13527e, this.f13528f, this.f13529g, this.f13530h, this.f13531i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f13524b == x0Var.f13524b && this.f13525c == x0Var.f13525c && this.f13526d == x0Var.f13526d && this.f13527e == x0Var.f13527e && this.f13528f == x0Var.f13528f && this.f13529g == x0Var.f13529g && this.f13530h == x0Var.f13530h && this.f13531i == x0Var.f13531i && ne.w0.c(this.f13523a, x0Var.f13523a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f13523a.hashCode()) * 31) + ((int) this.f13524b)) * 31) + ((int) this.f13525c)) * 31) + ((int) this.f13526d)) * 31) + ((int) this.f13527e)) * 31) + (this.f13528f ? 1 : 0)) * 31) + (this.f13529g ? 1 : 0)) * 31) + (this.f13530h ? 1 : 0)) * 31) + (this.f13531i ? 1 : 0);
    }
}
