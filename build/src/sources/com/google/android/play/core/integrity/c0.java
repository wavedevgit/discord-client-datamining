package com.google.android.play.core.integrity;

import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ long f16122i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ yg.k f16123o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ j0 f16124p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c0(j0 j0Var, yg.k kVar, int i10, long j10, yg.k kVar2) {
        super(j0Var, kVar);
        this.f16122i = j10;
        this.f16123o = kVar2;
        this.f16124p = j0Var;
    }

    @Override // ki.u0
    protected final void b() {
        ki.t0 t0Var;
        if (j0.j(this.f16124p)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f16124p, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f16124p;
                ((ki.l0) j0Var.f16177f.e()).s(j0.b(j0Var, this.f16122i, 0), new h0(this.f16124p, this.f16123o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f16124p;
                long j10 = this.f16122i;
                t0Var = j0Var2.f16172a;
                t0Var.b(e10, "warmUpIntegrityToken(%s)", Long.valueOf(j10));
                this.f16123o.d(new b(-100, e10));
            }
        }
    }
}
