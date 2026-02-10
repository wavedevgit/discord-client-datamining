package com.google.android.exoplayer2.source.dash;

import com.google.android.exoplayer2.Format;
import mc.x;
import oe.w0;
import rd.m0;
import vd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final Format f12932d;

    /* renamed from: i  reason: collision with root package name */
    private long[] f12934i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f12935o;

    /* renamed from: p  reason: collision with root package name */
    private f f12936p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f12937q;

    /* renamed from: r  reason: collision with root package name */
    private int f12938r;

    /* renamed from: e  reason: collision with root package name */
    private final jd.c f12933e = new jd.c();

    /* renamed from: s  reason: collision with root package name */
    private long f12939s = -9223372036854775807L;

    public d(f fVar, Format format, boolean z10) {
        this.f12932d = format;
        this.f12936p = fVar;
        this.f12934i = fVar.f52256b;
        e(fVar, z10);
    }

    @Override // rd.m0
    public void a() {
    }

    public String b() {
        return this.f12936p.a();
    }

    @Override // rd.m0
    public int c(x xVar, rc.f fVar, int i10) {
        boolean z10;
        int i11 = this.f12938r;
        if (i11 == this.f12934i.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 && !this.f12935o) {
            fVar.s(4);
            return -4;
        } else if ((i10 & 2) == 0 && this.f12937q) {
            if (z10) {
                return -3;
            }
            if ((i10 & 1) == 0) {
                this.f12938r = i11 + 1;
            }
            if ((i10 & 4) == 0) {
                byte[] a10 = this.f12933e.a(this.f12936p.f52255a[i11]);
                fVar.u(a10.length);
                fVar.f47775i.put(a10);
            }
            fVar.f47777p = this.f12934i[i11];
            fVar.s(1);
            return -4;
        } else {
            xVar.f36907b = this.f12932d;
            this.f12937q = true;
            return -5;
        }
    }

    public void d(long j10) {
        int e10 = w0.e(this.f12934i, j10, true, false);
        this.f12938r = e10;
        this.f12939s = (this.f12935o && e10 == this.f12934i.length) ? -9223372036854775807L : -9223372036854775807L;
    }

    public void e(f fVar, boolean z10) {
        long j10;
        int i10 = this.f12938r;
        if (i10 == 0) {
            j10 = -9223372036854775807L;
        } else {
            j10 = this.f12934i[i10 - 1];
        }
        this.f12935o = z10;
        this.f12936p = fVar;
        long[] jArr = fVar.f52256b;
        this.f12934i = jArr;
        long j11 = this.f12939s;
        if (j11 != -9223372036854775807L) {
            d(j11);
        } else if (j10 != -9223372036854775807L) {
            this.f12938r = w0.e(jArr, j10, false, false);
        }
    }

    @Override // rd.m0
    public boolean isReady() {
        return true;
    }

    @Override // rd.m0
    public int j(long j10) {
        int max = Math.max(this.f12938r, w0.e(this.f12934i, j10, true, false));
        int i10 = max - this.f12938r;
        this.f12938r = max;
        return i10;
    }
}
