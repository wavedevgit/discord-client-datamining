package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f16268i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f16269o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f16270p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f16271q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f16272r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, zg.k kVar, int i10, c.d dVar, long j10, long j11, zg.k kVar2) {
        super(j0Var, kVar);
        this.f16268i = dVar;
        this.f16269o = j10;
        this.f16270p = j11;
        this.f16271q = kVar2;
        this.f16272r = j0Var;
    }

    @Override // li.u0
    protected final void b() {
        li.t0 t0Var;
        if (j0.j(this.f16272r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f16272r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f16272r;
                ((li.l0) j0Var.f16317f.e()).k0(j0.a(j0Var, this.f16268i, this.f16269o, this.f16270p, 0), new g0(this.f16272r, this.f16271q, this.f16269o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f16272r;
                c.d dVar = this.f16268i;
                t0Var = j0Var2.f16312a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f16268i.c(), Long.valueOf(this.f16269o));
                this.f16271q.d(new b(-100, e10));
            }
        }
    }
}
