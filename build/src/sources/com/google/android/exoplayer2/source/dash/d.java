package com.google.android.exoplayer2.source.dash;

import com.google.android.exoplayer2.Format;
import lc.x;
import ne.w0;
import qd.m0;
import ud.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final Format f13478d;

    /* renamed from: i  reason: collision with root package name */
    private long[] f13480i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f13481o;

    /* renamed from: p  reason: collision with root package name */
    private f f13482p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13483q;

    /* renamed from: r  reason: collision with root package name */
    private int f13484r;

    /* renamed from: e  reason: collision with root package name */
    private final id.c f13479e = new id.c();

    /* renamed from: s  reason: collision with root package name */
    private long f13485s = -9223372036854775807L;

    public d(f fVar, Format format, boolean z10) {
        this.f13478d = format;
        this.f13482p = fVar;
        this.f13480i = fVar.f50251b;
        e(fVar, z10);
    }

    @Override // qd.m0
    public void a() {
    }

    public String b() {
        return this.f13482p.a();
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        boolean z10;
        int i11 = this.f13484r;
        if (i11 == this.f13480i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !this.f13481o) {
            fVar.s(4);
            return -4;
        } else if ((i10 & 2) == 0 && this.f13483q) {
            if (z10) {
                return -3;
            }
            if ((i10 & 1) == 0) {
                this.f13484r = i11 + 1;
            }
            if ((i10 & 4) == 0) {
                byte[] a10 = this.f13479e.a(this.f13482p.f50250a[i11]);
                fVar.u(a10.length);
                fVar.f47347i.put(a10);
            }
            fVar.f47349p = this.f13480i[i11];
            fVar.s(1);
            return -4;
        } else {
            xVar.f37240b = this.f13478d;
            this.f13483q = true;
            return -5;
        }
    }

    public void d(long j10) {
        int e10 = w0.e(this.f13480i, j10, true, false);
        this.f13484r = e10;
        this.f13485s = (this.f13481o && e10 == this.f13480i.length) ? -9223372036854775807L : -9223372036854775807L;
    }

    public void e(f fVar, boolean z10) {
        long j10;
        int i10 = this.f13484r;
        if (i10 == 0) {
            j10 = -9223372036854775807L;
        } else {
            j10 = this.f13480i[i10 - 1];
        }
        this.f13481o = z10;
        this.f13482p = fVar;
        long[] jArr = fVar.f50251b;
        this.f13480i = jArr;
        long j11 = this.f13485s;
        if (j11 != -9223372036854775807L) {
            d(j11);
        } else if (j10 != -9223372036854775807L) {
            this.f13484r = w0.e(jArr, j10, false, false);
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        return true;
    }

    @Override // qd.m0
    public int q(long j10) {
        int max = Math.max(this.f13484r, w0.e(this.f13480i, j10, true, false));
        int i10 = max - this.f13484r;
        this.f13484r = max;
        return i10;
    }
}
