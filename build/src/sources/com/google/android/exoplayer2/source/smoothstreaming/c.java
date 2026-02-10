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
    private final b.a f13585d;

    /* renamed from: e  reason: collision with root package name */
    private final c0 f13586e;

    /* renamed from: i  reason: collision with root package name */
    private final u f13587i;

    /* renamed from: o  reason: collision with root package name */
    private final v f13588o;

    /* renamed from: p  reason: collision with root package name */
    private final u.a f13589p;

    /* renamed from: q  reason: collision with root package name */
    private final i f13590q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f13591r;

    /* renamed from: s  reason: collision with root package name */
    private final me.b f13592s;

    /* renamed from: t  reason: collision with root package name */
    private final w0 f13593t;

    /* renamed from: u  reason: collision with root package name */
    private final h f13594u;

    /* renamed from: v  reason: collision with root package name */
    private p.a f13595v;

    /* renamed from: w  reason: collision with root package name */
    private zd.a f13596w;

    /* renamed from: x  reason: collision with root package name */
    private td.i[] f13597x;

    /* renamed from: y  reason: collision with root package name */
    private n0 f13598y;

    public c(zd.a aVar, b.a aVar2, c0 c0Var, h hVar, g gVar, v vVar, u.a aVar3, i iVar, y.a aVar4, me.u uVar, me.b bVar) {
        this.f13596w = aVar;
        this.f13585d = aVar2;
        this.f13586e = c0Var;
        this.f13587i = uVar;
        this.f13588o = vVar;
        this.f13589p = aVar3;
        this.f13590q = iVar;
        this.f13591r = aVar4;
        this.f13592s = bVar;
        this.f13594u = hVar;
        this.f13593t = n(aVar, vVar);
        td.i[] o10 = o(0);
        this.f13597x = o10;
        this.f13598y = hVar.a(o10);
    }

    private td.i a(com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        int c10 = this.f13593t.c(gVar.l());
        return new td.i(this.f13596w.f56364f[c10].f56370a, null, null, this.f13585d.a(this.f13587i, this.f13596w, c10, gVar, this.f13586e, null), this, this.f13592s, j10, this.f13588o, this.f13589p, this.f13590q, this.f13591r);
    }

    private static w0 n(zd.a aVar, v vVar) {
        u0[] u0VarArr = new u0[aVar.f56364f.length];
        int i10 = 0;
        while (true) {
            a.b[] bVarArr = aVar.f56364f;
            if (i10 < bVarArr.length) {
                Format[] formatArr = bVarArr[i10].f56379j;
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
        return this.f13598y.b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f13598y.d();
    }

    @Override // rd.p
    public long e(long j10, t0 t0Var) {
        td.i[] iVarArr;
        for (td.i iVar : this.f13597x) {
            if (iVar.f48717d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        return this.f13598y.f(j10);
    }

    @Override // rd.p, rd.n0
    public long g() {
        return this.f13598y.g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        this.f13598y.h(j10);
    }

    @Override // rd.p
    public long l(long j10) {
        for (td.i iVar : this.f13597x) {
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
        this.f13587i.a();
    }

    @Override // rd.n0.a
    /* renamed from: q */
    public void i(td.i iVar) {
        this.f13595v.i(this);
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
        this.f13597x = o10;
        arrayList.toArray(o10);
        this.f13598y = this.f13594u.a(this.f13597x);
        return j10;
    }

    @Override // rd.p
    public w0 s() {
        return this.f13593t;
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        for (td.i iVar : this.f13597x) {
            iVar.t(j10, z10);
        }
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f13595v = aVar;
        aVar.j(this);
    }

    public void v() {
        for (td.i iVar : this.f13597x) {
            iVar.O();
        }
        this.f13595v = null;
    }

    public void w(zd.a aVar) {
        this.f13596w = aVar;
        for (td.i iVar : this.f13597x) {
            ((b) iVar.D()).d(aVar);
        }
        this.f13595v.i(this);
    }
}
