package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f16908e;

    /* renamed from: f  reason: collision with root package name */
    final String f16909f;

    /* renamed from: g  reason: collision with root package name */
    final int f16910g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f16911h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, zg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f16911h = xVar;
        this.f16908e = i10;
        this.f16909f = str;
        this.f16910g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, ai.d0
    public final void g(Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16911h.f16956d;
        v0Var.u(this.f16806c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16951g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f16910g;
        if (i11 > 0) {
            this.f16911h.k(this.f16908e, this.f16909f, i11 - 1);
        }
    }
}
