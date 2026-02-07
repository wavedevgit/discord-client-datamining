package com.google.android.exoplayer2.source.smoothstreaming;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.smoothstreaming.b;
import com.google.android.exoplayer2.upstream.i;
import java.util.ArrayList;
import lc.t0;
import le.c0;
import le.g;
import le.u;
import qd.h;
import qd.m0;
import qd.n0;
import qd.p;
import qd.u0;
import qd.w0;
import qd.y;
import rc.u;
import rc.v;
import yd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c implements p, n0.a {

    /* renamed from: d  reason: collision with root package name */
    private final b.a f12868d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f12869e;

    /* renamed from: i  reason: collision with root package name */
    private final u f12870i;

    /* renamed from: o  reason: collision with root package name */
    private final v f12871o;

    /* renamed from: p  reason: collision with root package name */
    private final u.a f12872p;

    /* renamed from: q  reason: collision with root package name */
    private final i f12873q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f12874r;

    /* renamed from: s  reason: collision with root package name */
    private final le.b f12875s;

    /* renamed from: t  reason: collision with root package name */
    private final w0 f12876t;

    /* renamed from: u  reason: collision with root package name */
    private final h f12877u;

    /* renamed from: v  reason: collision with root package name */
    private p.a f12878v;

    /* renamed from: w  reason: collision with root package name */
    private yd.a f12879w;

    /* renamed from: x  reason: collision with root package name */
    private sd.i[] f12880x;

    /* renamed from: y  reason: collision with root package name */
    private n0 f12881y;

    public c(yd.a aVar, b.a aVar2, c0 c0Var, h hVar, g gVar, v vVar, u.a aVar3, i iVar, y.a aVar4, le.u uVar, le.b bVar) {
        this.f12879w = aVar;
        this.f12868d = aVar2;
        this.f12869e = c0Var;
        this.f12870i = uVar;
        this.f12871o = vVar;
        this.f12872p = aVar3;
        this.f12873q = iVar;
        this.f12874r = aVar4;
        this.f12875s = bVar;
        this.f12877u = hVar;
        this.f12876t = p(aVar, vVar);
        sd.i[] q10 = q(0);
        this.f12880x = q10;
        this.f12881y = hVar.a(q10);
    }

    private sd.i a(com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        int c10 = this.f12876t.c(gVar.k());
        return new sd.i(this.f12879w.f55300f[c10].f55306a, null, null, this.f12868d.a(this.f12870i, this.f12879w, c10, gVar, this.f12869e, null), this, this.f12875s, j10, this.f12871o, this.f12872p, this.f12873q, this.f12874r);
    }

    private static w0 p(yd.a aVar, v vVar) {
        u0[] u0VarArr = new u0[aVar.f55300f.length];
        int i10 = 0;
        while (true) {
            a.b[] bVarArr = aVar.f55300f;
            if (i10 < bVarArr.length) {
                Format[] formatArr = bVarArr[i10].f55315j;
                Format[] formatArr2 = new Format[formatArr.length];
                for (int i11 = 0; i11 < formatArr.length; i11++) {
                    Format format = formatArr[i11];
                    formatArr2[i11] = format.c(vVar.b(format));
                }
                u0VarArr[i10] = new u0(Integer.toString(i10), formatArr2);
                i10++;
            } else {
                return new w0(u0VarArr);
            }
        }
    }

    private static sd.i[] q(int i10) {
        return new sd.i[i10];
    }

    @Override // qd.p, qd.n0
    public long b() {
        return this.f12881y.b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f12881y.d();
    }

    @Override // qd.p
    public long e(long j10, t0 t0Var) {
        sd.i[] iVarArr;
        for (sd.i iVar : this.f12880x) {
            if (iVar.f49944d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        return this.f12881y.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.f12881y.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.f12881y.h(j10);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f12878v = aVar;
        aVar.j(this);
    }

    @Override // qd.p
    public long l(long j10) {
        for (sd.i iVar : this.f12880x) {
            iVar.R(j10);
        }
        return j10;
    }

    @Override // qd.p
    public long m() {
        return -9223372036854775807L;
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar;
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if (m0Var != null) {
                sd.i iVar = (sd.i) m0Var;
                if (gVarArr[i10] != null && zArr[i10]) {
                    ((b) iVar.D()).b(gVarArr[i10]);
                    arrayList.add(iVar);
                } else {
                    iVar.O();
                    m0VarArr[i10] = null;
                }
            }
            if (m0VarArr[i10] == null && (gVar = gVarArr[i10]) != null) {
                sd.i a10 = a(gVar, j10);
                arrayList.add(a10);
                m0VarArr[i10] = a10;
                zArr2[i10] = true;
            }
        }
        sd.i[] q10 = q(arrayList.size());
        this.f12880x = q10;
        arrayList.toArray(q10);
        this.f12881y = this.f12877u.a(this.f12880x);
        return j10;
    }

    @Override // qd.p
    public void r() {
        this.f12870i.a();
    }

    @Override // qd.n0.a
    /* renamed from: s */
    public void i(sd.i iVar) {
        this.f12878v.i(this);
    }

    @Override // qd.p
    public w0 t() {
        return this.f12876t;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (sd.i iVar : this.f12880x) {
            iVar.u(j10, z10);
        }
    }

    public void v() {
        for (sd.i iVar : this.f12880x) {
            iVar.O();
        }
        this.f12878v = null;
    }

    public void w(yd.a aVar) {
        this.f12879w = aVar;
        for (sd.i iVar : this.f12880x) {
            ((b) iVar.D()).c(aVar);
        }
        this.f12878v.i(this);
    }
}
