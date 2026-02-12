package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f16786e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ x f16787i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(x xVar, zg.k kVar, zg.k kVar2) {
        super(kVar);
        this.f16786e = kVar2;
        this.f16787i = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16787i.f16957e;
            str = this.f16787i.f16953a;
            h10 = x.h();
            ((ai.b0) v0Var.e()).J(str, h10, new s(this.f16787i, this.f16786e));
        } catch (RemoteException e10) {
            k0Var = x.f16951g;
            k0Var.c(e10, "keepAlive", new Object[0]);
        }
    }
}
