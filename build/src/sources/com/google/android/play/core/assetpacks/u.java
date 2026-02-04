package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u extends o {

    /* renamed from: e  reason: collision with root package name */
    final int f15644e;

    /* renamed from: f  reason: collision with root package name */
    final String f15645f;

    /* renamed from: g  reason: collision with root package name */
    final int f15646g;

    /* renamed from: h  reason: collision with root package name */
    final /* synthetic */ x f15647h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(x xVar, wg.k kVar, int i10, String str, int i11) {
        super(xVar, kVar);
        this.f15647h = xVar;
        this.f15644e = i10;
        this.f15645f = str;
        this.f15646g = i11;
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void g(Bundle bundle) {
        this.f15647h.f15692d.u(this.f15542c);
        x.f15687g.b("onError(%d), retrying notifyModuleCompleted...", Integer.valueOf(bundle.getInt("error_code")));
        int i10 = this.f15646g;
        if (i10 > 0) {
            this.f15647h.k(this.f15644e, this.f15645f, i10 - 1);
        }
    }
}
