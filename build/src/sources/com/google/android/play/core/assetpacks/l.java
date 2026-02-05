package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15868e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ xg.k f15869i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15870o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, xg.k kVar, int i10, xg.k kVar2) {
        super(kVar);
        this.f15868e = i10;
        this.f15869i = kVar2;
        this.f15870o = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        wh.k0 k0Var;
        wh.v0 v0Var;
        String str;
        Bundle i10;
        Bundle h10;
        try {
            v0Var = this.f15870o.f16086d;
            str = this.f15870o.f16083a;
            i10 = x.i(this.f15868e);
            h10 = x.h();
            ((wh.b0) v0Var.e()).c0(str, i10, h10, new v(this.f15870o, this.f15869i));
        } catch (RemoteException e10) {
            k0Var = x.f16081g;
            k0Var.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
