package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15388e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f15389i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15390o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, wg.k kVar, List list, wg.k kVar2) {
        super(kVar);
        this.f15388e = list;
        this.f15389i = kVar2;
        this.f15390o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f15388e);
        try {
            v0Var = this.f15390o.f15692d;
            str = this.f15390o.f15689a;
            h10 = x.h();
            ((th.b0) v0Var.e()).z(str, w10, h10, new p(this.f15390o, this.f15389i));
        } catch (RemoteException e10) {
            List list = this.f15388e;
            k0Var = x.f15687g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
