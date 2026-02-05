package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15782e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ xg.k f15783i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15784o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, xg.k kVar, List list, xg.k kVar2) {
        super(kVar);
        this.f15782e = list;
        this.f15783i = kVar2;
        this.f15784o = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        wh.k0 k0Var;
        wh.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f15782e);
        try {
            v0Var = this.f15784o.f16086d;
            str = this.f15784o.f16083a;
            h10 = x.h();
            ((wh.b0) v0Var.e()).Q(str, w10, h10, new p(this.f15784o, this.f15783i));
        } catch (RemoteException e10) {
            List list = this.f15782e;
            k0Var = x.f16081g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
