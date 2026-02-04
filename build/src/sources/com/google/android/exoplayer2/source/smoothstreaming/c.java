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
    private final b.a f12522d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f12523e;

    /* renamed from: i  reason: collision with root package name */
    private final u f12524i;

    /* renamed from: o  reason: collision with root package name */
    private final v f12525o;

    /* renamed from: p  reason: collision with root package name */
    private final u.a f12526p;

    /* renamed from: q  reason: collision with root package name */
    private final h f12527q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f12528r;

    /* renamed from: s  reason: collision with root package name */
    private final le.b f12529s;

    /* renamed from: t  reason: collision with root package name */
    private final w0 f12530t;

    /* renamed from: u  reason: collision with root package name */
    private final qd.h f12531u;

    /* renamed from: v  reason: collision with root package name */
    private p.a f12532v;

    /* renamed from: w  reason: collision with root package name */
    private yd.a f12533w;

    /* renamed from: x  reason: collision with root package name */
    private i[] f12534x;

    /* renamed from: y  reason: collision with root package name */
    private n0 f12535y;

    public c(yd.a aVar, b.a aVar2, c0 c0Var, qd.h hVar, g gVar, v vVar, u.a aVar3, h hVar2, y.a aVar4, le.u uVar, le.b bVar) {
        this.f12533w = aVar;
        this.f12522d = aVar2;
        this.f12523e = c0Var;
        this.f12524i = uVar;
        this.f12525o = vVar;
        this.f12526p = aVar3;
        this.f12527q = hVar2;
        this.f12528r = aVar4;
        this.f12529s = bVar;
        this.f12531u = hVar;
        this.f12530t = p(aVar, vVar);
        i[] q10 = q(0);
        this.f12534x = q10;
        this.f12535y = hVar.a(q10);
    }

    private i a(com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        int c10 = this.f12530t.c(gVar.k());
        return new i(this.f12533w.f54012f[c10].f54018a, null, null, this.f12522d.a(this.f12524i, this.f12533w, c10, gVar, this.f12523e, null), this, this.f12529s, j10, this.f12525o, this.f12526p, this.f12527q, this.f12528r);
    }

    private static w0 p(yd.a aVar, v vVar) {
        u0[] u0VarArr = new u0[aVar.f54012f.length];
        int i10 = 0;
        while (true) {
            a.b[] bVarArr = aVar.f54012f;
            if (i10 < bVarArr.length) {
                Format[] formatArr = bVarArr[i10].f54027j;
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
        return this.f12535y.b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f12535y.d();
    }

    @Override // qd.p
    public long e(long j10, t0 t0Var) {
        i[] iVarArr;
        for (i iVar : this.f12534x) {
            if (iVar.f49426d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        return this.f12535y.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.f12535y.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.f12535y.h(j10);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f12532v = aVar;
        aVar.j(this);
    }

    @Override // qd.p
    public long l(long j10) {
        for (i iVar : this.f12534x) {
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
        this.f12534x = q10;
        arrayList.toArray(q10);
        this.f12535y = this.f12531u.a(this.f12534x);
        return j10;
    }

    @Override // qd.p
    public void r() {
        this.f12524i.a();
    }

    @Override // qd.n0.a
    /* renamed from: s */
    public void i(i iVar) {
        this.f12532v.i(this);
    }

    @Override // qd.p
    public w0 t() {
        return this.f12530t;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (i iVar : this.f12534x) {
            iVar.u(j10, z10);
        }
    }

    public void v() {
        for (i iVar : this.f12534x) {
            iVar.O();
        }
        this.f12532v = null;
    }

    public void w(yd.a aVar) {
        this.f12533w = aVar;
        for (i iVar : this.f12534x) {
            ((b) iVar.D()).c(aVar);
        }
        this.f12532v.i(this);
    }
}
