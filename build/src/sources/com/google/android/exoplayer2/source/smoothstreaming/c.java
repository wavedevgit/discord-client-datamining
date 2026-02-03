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
    private final b.a f13554d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f13555e;

    /* renamed from: i  reason: collision with root package name */
    private final u f13556i;

    /* renamed from: o  reason: collision with root package name */
    private final v f13557o;

    /* renamed from: p  reason: collision with root package name */
    private final u.a f13558p;

    /* renamed from: q  reason: collision with root package name */
    private final h f13559q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f13560r;

    /* renamed from: s  reason: collision with root package name */
    private final le.b f13561s;

    /* renamed from: t  reason: collision with root package name */
    private final w0 f13562t;

    /* renamed from: u  reason: collision with root package name */
    private final qd.h f13563u;

    /* renamed from: v  reason: collision with root package name */
    private p.a f13564v;

    /* renamed from: w  reason: collision with root package name */
    private yd.a f13565w;

    /* renamed from: x  reason: collision with root package name */
    private i[] f13566x;

    /* renamed from: y  reason: collision with root package name */
    private n0 f13567y;

    public c(yd.a aVar, b.a aVar2, c0 c0Var, qd.h hVar, g gVar, v vVar, u.a aVar3, h hVar2, y.a aVar4, le.u uVar, le.b bVar) {
        this.f13565w = aVar;
        this.f13554d = aVar2;
        this.f13555e = c0Var;
        this.f13556i = uVar;
        this.f13557o = vVar;
        this.f13558p = aVar3;
        this.f13559q = hVar2;
        this.f13560r = aVar4;
        this.f13561s = bVar;
        this.f13563u = hVar;
        this.f13562t = p(aVar, vVar);
        i[] q10 = q(0);
        this.f13566x = q10;
        this.f13567y = hVar.a(q10);
    }

    private i a(com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        int c10 = this.f13562t.c(gVar.k());
        return new i(this.f13565w.f54257f[c10].f54263a, null, null, this.f13554d.a(this.f13556i, this.f13565w, c10, gVar, this.f13555e, null), this, this.f13561s, j10, this.f13557o, this.f13558p, this.f13559q, this.f13560r);
    }

    private static w0 p(yd.a aVar, v vVar) {
        u0[] u0VarArr = new u0[aVar.f54257f.length];
        int i10 = 0;
        while (true) {
            a.b[] bVarArr = aVar.f54257f;
            if (i10 < bVarArr.length) {
                Format[] formatArr = bVarArr[i10].f54272j;
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
        return this.f13567y.b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f13567y.d();
    }

    @Override // qd.p
    public long e(long j10, t0 t0Var) {
        i[] iVarArr;
        for (i iVar : this.f13566x) {
            if (iVar.f49019d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        return this.f13567y.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.f13567y.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.f13567y.h(j10);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f13564v = aVar;
        aVar.j(this);
    }

    @Override // qd.p
    public long l(long j10) {
        for (i iVar : this.f13566x) {
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
        this.f13566x = q10;
        arrayList.toArray(q10);
        this.f13567y = this.f13563u.a(this.f13566x);
        return j10;
    }

    @Override // qd.p
    public void r() {
        this.f13556i.a();
    }

    @Override // qd.n0.a
    /* renamed from: s */
    public void i(i iVar) {
        this.f13564v.i(this);
    }

    @Override // qd.p
    public w0 t() {
        return this.f13562t;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (i iVar : this.f13566x) {
            iVar.u(j10, z10);
        }
    }

    public void v() {
        for (i iVar : this.f13566x) {
            iVar.O();
        }
        this.f13564v = null;
    }

    public void w(yd.a aVar) {
        this.f13565w = aVar;
        for (i iVar : this.f13566x) {
            ((b) iVar.D()).c(aVar);
        }
        this.f13564v.i(this);
    }
}
