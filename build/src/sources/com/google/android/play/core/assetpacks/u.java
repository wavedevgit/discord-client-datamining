package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f17047e;

    /* renamed from: f  reason: collision with root package name */
    final String f17048f;

    /* renamed from: g  reason: collision with root package name */
    final int f17049g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f17050h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, wg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f17050h = xVar;
        this.f17047e = i10;
        this.f17048f = str;
        this.f17049g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void g(Bundle bundle) {
        th.k0 k0Var;
        this.f17050h.f17095d.u(this.f16945c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f17090g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f17049g;
        if (i11 > 0) {
            this.f17050h.k(this.f17047e, this.f17048f, i11 - 1);
        }
    }
}
