package com.google.android.exoplayer2.source.dash;

import com.google.android.exoplayer2.Format;
import lc.x;
import ne.w0;
import qd.m0;
import ud.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final Format f13849d;

    /* renamed from: i  reason: collision with root package name */
    private long[] f13851i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f13852o;

    /* renamed from: p  reason: collision with root package name */
    private f f13853p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13854q;

    /* renamed from: r  reason: collision with root package name */
    private int f13855r;

    /* renamed from: e  reason: collision with root package name */
    private final id.c f13850e = new id.c();

    /* renamed from: s  reason: collision with root package name */
    private long f13856s = -9223372036854775807L;

    public d(f fVar, Format format, boolean z10) {
        this.f13849d = format;
        this.f13853p = fVar;
        this.f13851i = fVar.f50195b;
        e(fVar, z10);
    }

    @Override // qd.m0
    public void a() {
    }

    public String b() {
        return this.f13853p.a();
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        boolean z10;
        int i11 = this.f13855r;
        if (i11 == this.f13851i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !this.f13852o) {
            fVar.s(4);
            return -4;
        } else if ((i10 & 2) == 0 && this.f13854q) {
            if (z10) {
                return -3;
            }
            if ((i10 & 1) == 0) {
                this.f13855r = i11 + 1;
            }
            if ((i10 & 4) == 0) {
                byte[] a10 = this.f13850e.a(this.f13853p.f50194a[i11]);
                fVar.u(a10.length);
                fVar.f47092i.put(a10);
            }
            fVar.f47094p = this.f13851i[i11];
            fVar.s(1);
            return -4;
        } else {
            xVar.f37126b = this.f13849d;
            this.f13854q = true;
            return -5;
        }
    }

    public void d(long j10) {
        int e10 = w0.e(this.f13851i, j10, true, false);
        this.f13855r = e10;
        this.f13856s = (this.f13852o && e10 == this.f13851i.length) ? -9223372036854775807L : -9223372036854775807L;
    }

    public void e(f fVar, boolean z10) {
        long j10;
        int i10 = this.f13855r;
        if (i10 == 0) {
            j10 = -9223372036854775807L;
        } else {
            j10 = this.f13851i[i10 - 1];
        }
        this.f13852o = z10;
        this.f13853p = fVar;
        long[] jArr = fVar.f50195b;
        this.f13851i = jArr;
        long j11 = this.f13856s;
        if (j11 != -9223372036854775807L) {
            d(j11);
        } else if (j10 != -9223372036854775807L) {
            this.f13855r = w0.e(jArr, j10, false, false);
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        return true;
    }

    @Override // qd.m0
    public int q(long j10) {
        int max = Math.max(this.f13855r, w0.e(this.f13851i, j10, true, false));
        int i10 = max - this.f13855r;
        this.f13855r = max;
        return i10;
    }
}
