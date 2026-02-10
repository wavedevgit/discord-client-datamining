package com.google.android.exoplayer2.source.smoothstreaming;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.smoothstreaming.b;
import com.google.android.exoplayer2.upstream.i;
import java.util.ArrayList;
import mc.t0;
import me.c0;
import me.g;
import me.u;
import rd.h;
import rd.m0;
import rd.n0;
import rd.p;
import rd.u0;
import rd.w0;
import rd.y;
import sc.u;
import sc.v;
import zd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c implements p, n0.a {

    /* renamed from: d  reason: collision with root package name */
    private final b.a f13008d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f13009e;

    /* renamed from: i  reason: collision with root package name */
    private final u f13010i;

    /* renamed from: o  reason: collision with root package name */
    private final v f13011o;

    /* renamed from: p  reason: collision with root package name */
    private final u.a f13012p;

    /* renamed from: q  reason: collision with root package name */
    private final i f13013q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f13014r;

    /* renamed from: s  reason: collision with root package name */
    private final me.b f13015s;

    /* renamed from: t  reason: collision with root package name */
    private final w0 f13016t;

    /* renamed from: u  reason: collision with root package name */
    private final h f13017u;

    /* renamed from: v  reason: collision with root package name */
    private p.a f13018v;

    /* renamed from: w  reason: collision with root package name */
    private zd.a f13019w;

    /* renamed from: x  reason: collision with root package name */
    private td.i[] f13020x;

    /* renamed from: y  reason: collision with root package name */
    private n0 f13021y;

    public c(zd.a aVar, b.a aVar2, c0 c0Var, h hVar, g gVar, v vVar, u.a aVar3, i iVar, y.a aVar4, me.u uVar, me.b bVar) {
        this.f13019w = aVar;
        this.f13008d = aVar2;
        this.f13009e = c0Var;
        this.f13010i = uVar;
        this.f13011o = vVar;
        this.f13012p = aVar3;
        this.f13013q = iVar;
        this.f13014r = aVar4;
        this.f13015s = bVar;
        this.f13017u = hVar;
        this.f13016t = n(aVar, vVar);
        td.i[] o10 = o(0);
        this.f13020x = o10;
        this.f13021y = hVar.a(o10);
    }

    private td.i a(com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        int c10 = this.f13016t.c(gVar.l());
        return new td.i(this.f13019w.f56325f[c10].f56331a, null, null, this.f13008d.a(this.f13010i, this.f13019w, c10, gVar, this.f13009e, null), this, this.f13015s, j10, this.f13011o, this.f13012p, this.f13013q, this.f13014r);
    }

    private static w0 n(zd.a aVar, v vVar) {
        u0[] u0VarArr = new u0[aVar.f56325f.length];
        int i10 = 0;
        while (true) {
            a.b[] bVarArr = aVar.f56325f;
            if (i10 < bVarArr.length) {
                Format[] formatArr = bVarArr[i10].f56340j;
                Format[] formatArr2 = new Format[formatArr.length];
                for (int i11 = 0; i11 < formatArr.length; i11++) {
                    Format format = formatArr[i11];
                    formatArr2[i11] = format.c(vVar.a(format));
                }
                u0VarArr[i10] = new u0(Integer.toString(i10), formatArr2);
                i10++;
            } else {
                return new w0(u0VarArr);
            }
        }
    }

    private static td.i[] o(int i10) {
        return new td.i[i10];
    }

    @Override // rd.p, rd.n0
    public long b() {
        return this.f13021y.b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f13021y.d();
    }

    @Override // rd.p
    public long e(long j10, t0 t0Var) {
        td.i[] iVarArr;
        for (td.i iVar : this.f13020x) {
            if (iVar.f50785d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        return this.f13021y.f(j10);
    }

    @Override // rd.p, rd.n0
    public long g() {
        return this.f13021y.g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        this.f13021y.h(j10);
    }

    @Override // rd.p
    public long l(long j10) {
        for (td.i iVar : this.f13020x) {
            iVar.R(j10);
        }
        return j10;
    }

    @Override // rd.p
    public long m() {
        return -9223372036854775807L;
    }

    @Override // rd.p
    public void p() {
        this.f13010i.a();
    }

    @Override // rd.n0.a
    /* renamed from: q */
    public void i(td.i iVar) {
        this.f13018v.i(this);
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar;
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if (m0Var != null) {
                td.i iVar = (td.i) m0Var;
                if (gVarArr[i10] != null && zArr[i10]) {
                    ((b) iVar.D()).b(gVarArr[i10]);
                    arrayList.add(iVar);
                } else {
                    iVar.O();
                    m0VarArr[i10] = null;
                }
            }
            if (m0VarArr[i10] == null && (gVar = gVarArr[i10]) != null) {
                td.i a10 = a(gVar, j10);
                arrayList.add(a10);
                m0VarArr[i10] = a10;
                zArr2[i10] = true;
            }
        }
        td.i[] o10 = o(arrayList.size());
        this.f13020x = o10;
        arrayList.toArray(o10);
        this.f13021y = this.f13017u.a(this.f13020x);
        return j10;
    }

    @Override // rd.p
    public w0 s() {
        return this.f13016t;
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        for (td.i iVar : this.f13020x) {
            iVar.t(j10, z10);
        }
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f13018v = aVar;
        aVar.j(this);
    }

    public void v() {
        for (td.i iVar : this.f13020x) {
            iVar.O();
        }
        this.f13018v = null;
    }

    public void w(zd.a aVar) {
        this.f13019w = aVar;
        for (td.i iVar : this.f13020x) {
            ((b) iVar.D()).d(aVar);
        }
        this.f13018v.i(this);
    }
}
