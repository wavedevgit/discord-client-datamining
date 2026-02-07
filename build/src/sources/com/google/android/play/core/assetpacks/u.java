package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f16018e;

    /* renamed from: f  reason: collision with root package name */
    final String f16019f;

    /* renamed from: g  reason: collision with root package name */
    final int f16020g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f16021h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, yg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f16021h = xVar;
        this.f16018e = i10;
        this.f16019f = str;
        this.f16020g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, xh.d0
    public final void g(Bundle bundle) {
        xh.v0 v0Var;
        xh.k0 k0Var;
        v0Var = this.f16021h.f16066d;
        v0Var.u(this.f15916c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16061g;
        k0Var.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(i10));
        int i11 = this.f16020g;
        if (i11 > 0) {
            this.f16021h.k(this.f16018e, this.f16019f, i11 - 1);
        }
    }
}
