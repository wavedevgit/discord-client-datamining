package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ wg.k f16925e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ x f16926i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(x xVar, wg.k kVar, wg.k kVar2) {
        super(kVar);
        this.f16925e = kVar2;
        this.f16926i = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16926i.f17096e;
            str = this.f16926i.f17092a;
            h10 = x.h();
            ((th.b0) v0Var.e()).A0(str, h10, new s(this.f16926i, this.f16925e));
        } catch (RemoteException e10) {
            k0Var = x.f17090g;
            k0Var.c(e10, "keepAlive", new Object[0]);
        }
    }
}
