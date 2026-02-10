package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f16907e;

    /* renamed from: f  reason: collision with root package name */
    final String f16908f;

    /* renamed from: g  reason: collision with root package name */
    final int f16909g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f16910h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, zg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f16910h = xVar;
        this.f16907e = i10;
        this.f16908f = str;
        this.f16909g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, ai.d0
    public final void g(Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16910h.f16955d;
        v0Var.u(this.f16805c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16950g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f16909g;
        if (i11 > 0) {
            this.f16910h.k(this.f16907e, this.f16908f, i11 - 1);
        }
    }
}
