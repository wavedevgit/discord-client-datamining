package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f17018i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f17019o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f17020p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f17021q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f17022r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, zg.k kVar, int i10, c.d dVar, long j10, long j11, zg.k kVar2) {
        super(j0Var, kVar);
        this.f17018i = dVar;
        this.f17019o = j10;
        this.f17020p = j11;
        this.f17021q = kVar2;
        this.f17022r = j0Var;
    }

    @Override // ni.u0
    protected final void b() {
        ni.t0 t0Var;
        if (j0.j(this.f17022r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f17022r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f17022r;
                ((ni.l0) j0Var.f17067f.e()).Q0(j0.a(j0Var, this.f17018i, this.f17019o, this.f17020p, 0), new g0(this.f17022r, this.f17021q, this.f17019o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f17022r;
                c.d dVar = this.f17018i;
                t0Var = j0Var2.f17062a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f17018i.c(), Long.valueOf(this.f17019o));
                this.f17021q.d(new b(-100, e10));
            }
        }
    }
}
