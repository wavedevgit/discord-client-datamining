package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15762e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ yg.k f15763i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15764o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, yg.k kVar, List list, yg.k kVar2) {
        super(kVar);
        this.f15762e = list;
        this.f15763i = kVar2;
        this.f15764o = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        xh.k0 k0Var;
        xh.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f15762e);
        try {
            v0Var = this.f15764o.f16066d;
            str = this.f15764o.f16063a;
            h10 = x.h();
            ((xh.b0) v0Var.e()).M0(str, w10, h10, new p(this.f15764o, this.f15763i));
        } catch (RemoteException e10) {
            List list = this.f15762e;
            k0Var = x.f16061g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
