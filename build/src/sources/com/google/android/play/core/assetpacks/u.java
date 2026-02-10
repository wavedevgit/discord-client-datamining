package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f16158e;

    /* renamed from: f  reason: collision with root package name */
    final String f16159f;

    /* renamed from: g  reason: collision with root package name */
    final int f16160g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f16161h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, zg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f16161h = xVar;
        this.f16158e = i10;
        this.f16159f = str;
        this.f16160g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, yh.d0
    public final void g(Bundle bundle) {
        yh.v0 v0Var;
        yh.k0 k0Var;
        v0Var = this.f16161h.f16206d;
        v0Var.u(this.f16056c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16201g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f16160g;
        if (i11 > 0) {
            this.f16161h.k(this.f16158e, this.f16159f, i11 - 1);
        }
    }
}
