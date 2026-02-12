package com.google.android.exoplayer2.source.dash;

import com.google.android.exoplayer2.Format;
import mc.x;
import oe.w0;
import rd.m0;
import vd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final Format f13510d;

    /* renamed from: i  reason: collision with root package name */
    private long[] f13512i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f13513o;

    /* renamed from: p  reason: collision with root package name */
    private f f13514p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13515q;

    /* renamed from: r  reason: collision with root package name */
    private int f13516r;

    /* renamed from: e  reason: collision with root package name */
    private final jd.c f13511e = new jd.c();

    /* renamed from: s  reason: collision with root package name */
    private long f13517s = -9223372036854775807L;

    public d(f fVar, Format format, boolean z10) {
        this.f13510d = format;
        this.f13514p = fVar;
        this.f13512i = fVar.f51499b;
        e(fVar, z10);
    }

    @Override // rd.m0
    public void a() {
    }

    public String b() {
        return this.f13514p.a();
    }

    @Override // rd.m0
    public int c(x xVar, rc.f fVar, int i10) {
        boolean z10;
        int i11 = this.f13516r;
        if (i11 == this.f13512i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !this.f13513o) {
            fVar.s(4);
            return -4;
        } else if ((i10 & 2) == 0 && this.f13515q) {
            if (z10) {
                return -3;
            }
            if ((i10 & 1) == 0) {
                this.f13516r = i11 + 1;
            }
            if ((i10 & 4) == 0) {
                byte[] a10 = this.f13511e.a(this.f13514p.f51498a[i11]);
                fVar.u(a10.length);
                fVar.f46230i.put(a10);
            }
            fVar.f46232p = this.f13512i[i11];
            fVar.s(1);
            return -4;
        } else {
            xVar.f36283b = this.f13510d;
            this.f13515q = true;
            return -5;
        }
    }

    public void d(long j10) {
        int e10 = w0.e(this.f13512i, j10, true, false);
        this.f13516r = e10;
        this.f13517s = (this.f13513o && e10 == this.f13512i.length) ? -9223372036854775807L : -9223372036854775807L;
    }

    public void e(f fVar, boolean z10) {
        long j10;
        int i10 = this.f13516r;
        if (i10 == 0) {
            j10 = -9223372036854775807L;
        } else {
            j10 = this.f13512i[i10 - 1];
        }
        this.f13513o = z10;
        this.f13514p = fVar;
        long[] jArr = fVar.f51499b;
        this.f13512i = jArr;
        long j11 = this.f13517s;
        if (j11 != -9223372036854775807L) {
            d(j11);
        } else if (j10 != -9223372036854775807L) {
            this.f13516r = w0.e(jArr, j10, false, false);
        }
    }

    @Override // rd.m0
    public boolean isReady() {
        return true;
    }

    @Override // rd.m0
    public int j(long j10) {
        int max = Math.max(this.f13516r, w0.e(this.f13512i, j10, true, false));
        int i10 = max - this.f13516r;
        this.f13516r = max;
        return i10;
    }
}
