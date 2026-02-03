package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f16676e;

    /* renamed from: f  reason: collision with root package name */
    final String f16677f;

    /* renamed from: g  reason: collision with root package name */
    final int f16678g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f16679h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, wg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f16679h = xVar;
        this.f16676e = i10;
        this.f16677f = str;
        this.f16678g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void g(Bundle bundle) {
        th.v0 v0Var;
        th.k0 k0Var;
        v0Var = this.f16679h.f16724d;
        v0Var.u(this.f16574c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16719g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f16678g;
        if (i11 > 0) {
            this.f16679h.k(this.f16676e, this.f16677f, i11 - 1);
        }
    }
}
