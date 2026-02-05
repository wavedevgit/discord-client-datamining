package com.google.android.play.core.integrity;

import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c0 extends i0 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ long f16142i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ xg.k f16143o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ j0 f16144p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c0(j0 j0Var, xg.k kVar, int i10, long j10, xg.k kVar2) {
        super(j0Var, kVar);
        this.f16142i = j10;
        this.f16143o = kVar2;
        this.f16144p = j0Var;
    }

    @Override // ji.u0
    protected final void b() {
        ji.t0 t0Var;
        if (j0.j(this.f16144p)) {
            super.a(new b(-2, null));
        } else if (j0.i(this.f16144p, 0)) {
            super.a(new b(-14, null));
        } else {
            try {
                j0 j0Var = this.f16144p;
                ((ji.l0) j0Var.f16197f.e()).K(j0.b(j0Var, this.f16142i, 0), new h0(this.f16144p, this.f16143o));
            } catch (RemoteException e10) {
                j0 j0Var2 = this.f16144p;
                long j10 = this.f16142i;
                t0Var = j0Var2.f16192a;
                t0Var.b(e10, "warmUpIntegrityToken(%s)", Long.valueOf(j10));
                this.f16143o.d(new b(-100, e10));
            }
        }
    }
}
