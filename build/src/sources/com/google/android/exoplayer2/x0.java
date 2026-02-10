package com.google.android.exoplayer2;

import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 {

    /* renamed from: a  reason: collision with root package name */
    public final r.b f13624a;

    /* renamed from: b  reason: collision with root package name */
    public final long f13625b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13626c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13627d;

    /* renamed from: e  reason: collision with root package name */
    public final long f13628e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f13629f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13630g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f13631h;

    /* renamed from: i  reason: collision with root package name */
    public final boolean f13632i;

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
        this.f13624a = bVar;
        this.f13625b = j10;
        this.f13626c = j11;
        this.f13627d = j12;
        this.f13628e = j13;
        this.f13629f = z10;
        this.f13630g = z11;
        this.f13631h = z12;
        this.f13632i = z13;
    }

    public x0 a(long j10) {
        if (j10 == this.f13626c) {
            return this;
        }
        return new x0(this.f13624a, this.f13625b, j10, this.f13627d, this.f13628e, this.f13629f, this.f13630g, this.f13631h, this.f13632i);
    }

    public x0 b(long j10) {
        if (j10 == this.f13625b) {
            return this;
        }
        return new x0(this.f13624a, j10, this.f13626c, this.f13627d, this.f13628e, this.f13629f, this.f13630g, this.f13631h, this.f13632i);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x0.class == obj.getClass()) {
            x0 x0Var = (x0) obj;
            if (this.f13625b == x0Var.f13625b && this.f13626c == x0Var.f13626c && this.f13627d == x0Var.f13627d && this.f13628e == x0Var.f13628e && this.f13629f == x0Var.f13629f && this.f13630g == x0Var.f13630g && this.f13631h == x0Var.f13631h && this.f13632i == x0Var.f13632i && oe.w0.c(this.f13624a, x0Var.f13624a)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f13624a.hashCode()) * 31) + ((int) this.f13625b)) * 31) + ((int) this.f13626c)) * 31) + ((int) this.f13627d)) * 31) + ((int) this.f13628e)) * 31) + (this.f13629f ? 1 : 0)) * 31) + (this.f13630g ? 1 : 0)) * 31) + (this.f13631h ? 1 : 0)) * 31) + (this.f13632i ? 1 : 0);
    }
}
