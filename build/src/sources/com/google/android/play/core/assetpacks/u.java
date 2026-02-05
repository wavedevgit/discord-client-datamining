package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f16038e;

    /* renamed from: f  reason: collision with root package name */
    final String f16039f;

    /* renamed from: g  reason: collision with root package name */
    final int f16040g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f16041h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, xg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f16041h = xVar;
        this.f16038e = i10;
        this.f16039f = str;
        this.f16040g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, wh.d0
    public final void g(Bundle bundle) {
        wh.v0 v0Var;
        wh.k0 k0Var;
        v0Var = this.f16041h.f16086d;
        v0Var.u(this.f15936c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16081g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f16040g;
        if (i11 > 0) {
            this.f16041h.k(this.f16038e, this.f16039f, i11 - 1);
        }
    }
}
