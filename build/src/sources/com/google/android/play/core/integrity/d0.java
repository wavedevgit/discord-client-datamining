package com.google.android.play.core.integrity;

import android.os.RemoteException;
import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c.d f16786i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ long f16787o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ long f16788p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f16789q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ j0 f16790r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d0(j0 j0Var, wg.k kVar, int i10, c.d dVar, long j10, long j11, wg.k kVar2) {
        super(j0Var, kVar);
        this.f16786i = dVar;
        this.f16787o = j10;
        this.f16788p = j11;
        this.f16789q = kVar2;
        this.f16790r = j0Var;
    }

    @Override // gi.u0
    protected final void b() {
        gi.t0 t0Var;
        if (j0.j(this.f16790r)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f16790r, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f16790r;
                ((gi.l0) j0Var.f16835f.e()).N0(j0.a(j0Var, this.f16786i, this.f16787o, this.f16788p, 0), new g0(this.f16790r, this.f16789q, this.f16787o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f16790r;
                c.d dVar = this.f16786i;
                t0Var = j0Var2.f16830a;
                t0Var.b(e10, "requestExpressIntegrityToken(%s, %s, %s)", dVar.b(), this.f16786i.c(), Long.valueOf(this.f16787o));
                this.f16789q.d(new b(-100, e10));
            }
        }
    }
}
