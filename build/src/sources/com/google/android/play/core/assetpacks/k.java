package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16710e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16711i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ zg.k f16712o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16713p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f16714q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, zg.k kVar, int i10, String str, zg.k kVar2, int i11) {
        super(kVar);
        this.f16710e = i10;
        this.f16711i = str;
        this.f16712o = kVar2;
        this.f16713p = i11;
        this.f16714q = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f16714q.f16955d;
            str = this.f16714q.f16952a;
            A = x.A(this.f16710e, this.f16711i);
            h10 = x.h();
            ((ai.b0) v0Var.e()).r(str, A, h10, new u(this.f16714q, this.f16712o, this.f16710e, this.f16711i, this.f16713p));
        } catch (RemoteException e10) {
            k0Var = x.f16950g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
