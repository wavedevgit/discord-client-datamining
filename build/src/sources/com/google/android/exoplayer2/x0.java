package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f13138a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13139b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13140c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13141d;

    /* renamed from: e  reason: collision with root package name */
    public final long f13142e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f13143f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13144g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f13145h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f13146i;

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
        this.f13138a = bVar;
        this.f13139b = j10;
        this.f13140c = j11;
        this.f13141d = j12;
        this.f13142e = j13;
        this.f13143f = z10;
        this.f13144g = z11;
        this.f13145h = z12;
        this.f13146i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f13140c) {
            return this;
        }
        return new x0(this.f13138a, this.f13139b, j10, this.f13141d, this.f13142e, this.f13143f, this.f13144g, this.f13145h, this.f13146i);
    }

    public x0 b(long j10) {
        if (j10 == this.f13139b) {
            return this;
        }
        return new x0(this.f13138a, j10, this.f13140c, this.f13141d, this.f13142e, this.f13143f, this.f13144g, this.f13145h, this.f13146i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f13139b == x0Var.f13139b && this.f13140c == x0Var.f13140c && this.f13141d == x0Var.f13141d && this.f13142e == x0Var.f13142e && this.f13143f == x0Var.f13143f && this.f13144g == x0Var.f13144g && this.f13145h == x0Var.f13145h && this.f13146i == x0Var.f13146i && ne.w0.c(this.f13138a, x0Var.f13138a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f13138a.hashCode()) * 31) + ((int) this.f13139b)) * 31) + ((int) this.f13140c)) * 31) + ((int) this.f13141d)) * 31) + ((int) this.f13142e)) * 31) + (this.f13143f ? 1 : 0)) * 31) + (this.f13144g ? 1 : 0)) * 31) + (this.f13145h ? 1 : 0)) * 31) + (this.f13146i ? 1 : 0);
    }
}
