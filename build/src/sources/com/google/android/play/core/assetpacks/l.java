package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16506e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f16507i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16508o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, wg.k kVar, int i10, wg.k kVar2) {
        super(kVar);
        this.f16506e = i10;
        this.f16507i = kVar2;
        this.f16508o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle i10;
        Bundle h10;
        try {
            v0Var = this.f16508o.f16724d;
            str = this.f16508o.f16721a;
            i10 = x.i(this.f16506e);
            h10 = x.h();
            ((th.b0) v0Var.e()).M0(str, i10, h10, new v(this.f16508o, this.f16507i));
        } catch (RemoteException e10) {
            k0Var = x.f16719g;
            k0Var.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
