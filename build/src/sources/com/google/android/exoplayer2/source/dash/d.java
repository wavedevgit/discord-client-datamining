package com.google.android.exoplayer2.source.dash;

import com.google.android.exoplayer2.Format;
import lc.x;
import ne.w0;
import qd.m0;
import ud.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final Format f12446d;

    /* renamed from: i  reason: collision with root package name */
    private long[] f12448i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f12449o;

    /* renamed from: p  reason: collision with root package name */
    private f f12450p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12451q;

    /* renamed from: r  reason: collision with root package name */
    private int f12452r;

    /* renamed from: e  reason: collision with root package name */
    private final id.c f12447e = new id.c();

    /* renamed from: s  reason: collision with root package name */
    private long f12453s = -9223372036854775807L;

    public d(f fVar, Format format, boolean z10) {
        this.f12446d = format;
        this.f12450p = fVar;
        this.f12448i = fVar.f50538b;
        e(fVar, z10);
    }

    @Override // qd.m0
    public void a() {
    }

    public String b() {
        return this.f12450p.a();
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        boolean z10;
        int i11 = this.f12452r;
        if (i11 == this.f12448i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !this.f12449o) {
            fVar.s(4);
            return -4;
        } else if ((i10 & 2) == 0 && this.f12451q) {
            if (z10) {
                return -3;
            }
            if ((i10 & 1) == 0) {
                this.f12452r = i11 + 1;
            }
            if ((i10 & 4) == 0) {
                byte[] a10 = this.f12447e.a(this.f12450p.f50537a[i11]);
                fVar.u(a10.length);
                fVar.f47497i.put(a10);
            }
            fVar.f47499p = this.f12448i[i11];
            fVar.s(1);
            return -4;
        } else {
            xVar.f36709b = this.f12446d;
            this.f12451q = true;
            return -5;
        }
    }

    public void d(long j10) {
        int e10 = w0.e(this.f12448i, j10, true, false);
        this.f12452r = e10;
        this.f12453s = (this.f12449o && e10 == this.f12448i.length) ? -9223372036854775807L : -9223372036854775807L;
    }

    public void e(f fVar, boolean z10) {
        long j10;
        int i10 = this.f12452r;
        if (i10 == 0) {
            j10 = -9223372036854775807L;
        } else {
            j10 = this.f12448i[i10 - 1];
        }
        this.f12449o = z10;
        this.f12450p = fVar;
        long[] jArr = fVar.f50538b;
        this.f12448i = jArr;
        long j11 = this.f12453s;
        if (j11 != -9223372036854775807L) {
            d(j11);
        } else if (j10 != -9223372036854775807L) {
            this.f12452r = w0.e(jArr, j10, false, false);
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        return true;
    }

    @Override // qd.m0
    public int q(long j10) {
        int max = Math.max(this.f12452r, w0.e(this.f12448i, j10, true, false));
        int i10 = max - this.f12452r;
        this.f12452r = max;
        return i10;
    }
}
