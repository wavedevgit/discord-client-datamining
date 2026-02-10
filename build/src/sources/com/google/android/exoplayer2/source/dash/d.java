package com.google.android.exoplayer2.source.dash;

import com.google.android.exoplayer2.Format;
import mc.x;
import oe.w0;
import rd.m0;
import vd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final Format f13509d;

    /* renamed from: i  reason: collision with root package name */
    private long[] f13511i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f13512o;

    /* renamed from: p  reason: collision with root package name */
    private f f13513p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13514q;

    /* renamed from: r  reason: collision with root package name */
    private int f13515r;

    /* renamed from: e  reason: collision with root package name */
    private final jd.c f13510e = new jd.c();

    /* renamed from: s  reason: collision with root package name */
    private long f13516s = -9223372036854775807L;

    public d(f fVar, Format format, boolean z10) {
        this.f13509d = format;
        this.f13513p = fVar;
        this.f13511i = fVar.f51498b;
        e(fVar, z10);
    }

    @Override // rd.m0
    public void a() {
    }

    public String b() {
        return this.f13513p.a();
    }

    @Override // rd.m0
    public int c(x xVar, rc.f fVar, int i10) {
        boolean z10;
        int i11 = this.f13515r;
        if (i11 == this.f13511i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !this.f13512o) {
            fVar.s(4);
            return -4;
        } else if ((i10 & 2) == 0 && this.f13514q) {
            if (z10) {
                return -3;
            }
            if ((i10 & 1) == 0) {
                this.f13515r = i11 + 1;
            }
            if ((i10 & 4) == 0) {
                byte[] a10 = this.f13510e.a(this.f13513p.f51497a[i11]);
                fVar.u(a10.length);
                fVar.f46229i.put(a10);
            }
            fVar.f46231p = this.f13511i[i11];
            fVar.s(1);
            return -4;
        } else {
            xVar.f36282b = this.f13509d;
            this.f13514q = true;
            return -5;
        }
    }

    public void d(long j10) {
        int e10 = w0.e(this.f13511i, j10, true, false);
        this.f13515r = e10;
        this.f13516s = (this.f13512o && e10 == this.f13511i.length) ? -9223372036854775807L : -9223372036854775807L;
    }

    public void e(f fVar, boolean z10) {
        long j10;
        int i10 = this.f13515r;
        if (i10 == 0) {
            j10 = -9223372036854775807L;
        } else {
            j10 = this.f13511i[i10 - 1];
        }
        this.f13512o = z10;
        this.f13513p = fVar;
        long[] jArr = fVar.f51498b;
        this.f13511i = jArr;
        long j11 = this.f13516s;
        if (j11 != -9223372036854775807L) {
            d(j11);
        } else if (j10 != -9223372036854775807L) {
            this.f13515r = w0.e(jArr, j10, false, false);
        }
    }

    @Override // rd.m0
    public boolean isReady() {
        return true;
    }

    @Override // rd.m0
    public int j(long j10) {
        int max = Math.max(this.f13515r, w0.e(this.f13511i, j10, true, false));
        int i10 = max - this.f13515r;
        this.f13515r = max;
        return i10;
    }
}
