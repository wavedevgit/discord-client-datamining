package com.google.android.exoplayer2.source.smoothstreaming;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.smoothstreaming.b;
import com.google.android.exoplayer2.upstream.h;
import java.util.ArrayList;
import lc.t0;
import le.c0;
import le.g;
import le.u;
import qd.m0;
import qd.n0;
import qd.p;
import qd.u0;
import qd.w0;
import qd.y;
import rc.u;
import rc.v;
import sd.i;
import yd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c implements p, n0.a {

    /* renamed from: d  reason: collision with root package name */
    private final b.a f13925d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f13926e;

    /* renamed from: i  reason: collision with root package name */
    private final u f13927i;

    /* renamed from: o  reason: collision with root package name */
    private final v f13928o;

    /* renamed from: p  reason: collision with root package name */
    private final u.a f13929p;

    /* renamed from: q  reason: collision with root package name */
    private final h f13930q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f13931r;

    /* renamed from: s  reason: collision with root package name */
    private final le.b f13932s;

    /* renamed from: t  reason: collision with root package name */
    private final w0 f13933t;

    /* renamed from: u  reason: collision with root package name */
    private final qd.h f13934u;

    /* renamed from: v  reason: collision with root package name */
    private p.a f13935v;

    /* renamed from: w  reason: collision with root package name */
    private yd.a f13936w;

    /* renamed from: x  reason: collision with root package name */
    private i[] f13937x;

    /* renamed from: y  reason: collision with root package name */
    private n0 f13938y;

    public c(yd.a aVar, b.a aVar2, c0 c0Var, qd.h hVar, g gVar, v vVar, u.a aVar3, h hVar2, y.a aVar4, le.u uVar, le.b bVar) {
        this.f13936w = aVar;
        this.f13925d = aVar2;
        this.f13926e = c0Var;
        this.f13927i = uVar;
        this.f13928o = vVar;
        this.f13929p = aVar3;
        this.f13930q = hVar2;
        this.f13931r = aVar4;
        this.f13932s = bVar;
        this.f13934u = hVar;
        this.f13933t = p(aVar, vVar);
        i[] q10 = q(0);
        this.f13937x = q10;
        this.f13938y = hVar.a(q10);
    }

    private i a(com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        int c10 = this.f13933t.c(gVar.k());
        return new i(this.f13936w.f54282f[c10].f54288a, null, null, this.f13925d.a(this.f13927i, this.f13936w, c10, gVar, this.f13926e, null), this, this.f13932s, j10, this.f13928o, this.f13929p, this.f13930q, this.f13931r);
    }

    private static w0 p(yd.a aVar, v vVar) {
        u0[] u0VarArr = new u0[aVar.f54282f.length];
        int i10 = 0;
        while (true) {
            a.b[] bVarArr = aVar.f54282f;
            if (i10 < bVarArr.length) {
                Format[] formatArr = bVarArr[i10].f54297j;
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

    private static i[] q(int i10) {
        return new i[i10];
    }

    @Override // qd.p, qd.n0
    public long b() {
        return this.f13938y.b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f13938y.d();
    }

    @Override // qd.p
    public long e(long j10, t0 t0Var) {
        i[] iVarArr;
        for (i iVar : this.f13937x) {
            if (iVar.f48965d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        return this.f13938y.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.f13938y.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.f13938y.h(j10);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f13935v = aVar;
        aVar.j(this);
    }

    @Override // qd.p
    public long l(long j10) {
        for (i iVar : this.f13937x) {
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
                i iVar = (i) m0Var;
                if (gVarArr[i10] != null && zArr[i10]) {
                    ((b) iVar.D()).b(gVarArr[i10]);
                    arrayList.add(iVar);
                } else {
                    iVar.O();
                    m0VarArr[i10] = null;
                }
            }
            if (m0VarArr[i10] == null && (gVar = gVarArr[i10]) != null) {
                i a10 = a(gVar, j10);
                arrayList.add(a10);
                m0VarArr[i10] = a10;
                zArr2[i10] = true;
            }
        }
        i[] q10 = q(arrayList.size());
        this.f13937x = q10;
        arrayList.toArray(q10);
        this.f13938y = this.f13934u.a(this.f13937x);
        return j10;
    }

    @Override // qd.p
    public void r() {
        this.f13927i.a();
    }

    @Override // qd.n0.a
    /* renamed from: s */
    public void i(i iVar) {
        this.f13935v.i(this);
    }

    @Override // qd.p
    public w0 t() {
        return this.f13933t;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (i iVar : this.f13937x) {
            iVar.u(j10, z10);
        }
    }

    public void v() {
        for (i iVar : this.f13937x) {
            iVar.O();
        }
        this.f13935v = null;
    }

    public void w(yd.a aVar) {
        this.f13936w = aVar;
        for (i iVar : this.f13937x) {
            ((b) iVar.D()).c(aVar);
        }
        this.f13935v.i(this);
    }
}
