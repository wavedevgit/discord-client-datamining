package com.google.android.play.core.integrity;

import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ long f15748i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f15749o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ j0 f15750p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c0(j0 j0Var, wg.k kVar, int i10, long j10, wg.k kVar2) {
        super(j0Var, kVar);
        this.f15748i = j10;
        this.f15749o = kVar2;
        this.f15750p = j0Var;
    }

    @Override // gi.u0
    protected final void b() {
        gi.t0 t0Var;
        if (j0.j(this.f15750p)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f15750p, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f15750p;
                ((gi.l0) j0Var.f15803f.e()).E0(j0.b(j0Var, this.f15748i, 0), new h0(this.f15750p, this.f15749o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f15750p;
                long j10 = this.f15748i;
                t0Var = j0Var2.f15798a;
                t0Var.b(e10, "warmUpIntegrityToken(%s)", Long.valueOf(j10));
                this.f15749o.d(new b(-100, e10));
            }
        }
    }
}
