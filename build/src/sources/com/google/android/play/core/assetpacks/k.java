package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16711e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16712i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ zg.k f16713o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16714p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f16715q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, zg.k kVar, int i10, String str, zg.k kVar2, int i11) {
        super(kVar);
        this.f16711e = i10;
        this.f16712i = str;
        this.f16713o = kVar2;
        this.f16714p = i11;
        this.f16715q = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f16715q.f16956d;
            str = this.f16715q.f16953a;
            A = x.A(this.f16711e, this.f16712i);
            h10 = x.h();
            ((ai.b0) v0Var.e()).r(str, A, h10, new u(this.f16715q, this.f16713o, this.f16711e, this.f16712i, this.f16714p));
        } catch (RemoteException e10) {
            k0Var = x.f16951g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
