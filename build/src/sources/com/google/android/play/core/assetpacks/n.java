package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f15896e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ x f15897i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(x xVar, yg.k kVar, yg.k kVar2) {
        super(kVar);
        this.f15896e = kVar2;
        this.f15897i = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        xh.k0 k0Var;
        xh.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f15897i.f16067e;
            str = this.f15897i.f16063a;
            h10 = x.h();
            ((xh.b0) v0Var.e()).T(str, h10, new s(this.f15897i, this.f15896e));
        } catch (RemoteException e10) {
            k0Var = x.f16061g;
            k0Var.c(e10, "keepAlive", new Object[0]);
        }
    }
}
