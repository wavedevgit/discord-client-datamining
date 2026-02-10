package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16737e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f16738i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16739o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, zg.k kVar, int i10, zg.k kVar2) {
        super(kVar);
        this.f16737e = i10;
        this.f16738i = kVar2;
        this.f16739o = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle i10;
        Bundle h10;
        try {
            v0Var = this.f16739o.f16955d;
            str = this.f16739o.f16952a;
            i10 = x.i(this.f16737e);
            h10 = x.h();
            ((ai.b0) v0Var.e()).j(str, i10, h10, new v(this.f16739o, this.f16738i));
        } catch (RemoteException e10) {
            k0Var = x.f16950g;
            k0Var.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
