package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16791e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f16792i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16793o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, wg.k kVar, List list, wg.k kVar2) {
        super(kVar);
        this.f16791e = list;
        this.f16792i = kVar2;
        this.f16793o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f16791e);
        try {
            str = this.f16793o.f17092a;
            h10 = x.h();
            ((th.b0) this.f16793o.f17095d.e()).z(str, w10, h10, new p(this.f16793o, this.f16792i));
        } catch (RemoteException e10) {
            List list = this.f16791e;
            k0Var = x.f17090g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
