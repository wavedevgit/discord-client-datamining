package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16420e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f16421i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16422o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, wg.k kVar, List list, wg.k kVar2) {
        super(kVar);
        this.f16420e = list;
        this.f16421i = kVar2;
        this.f16422o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f16420e);
        try {
            v0Var = this.f16422o.f16724d;
            str = this.f16422o.f16721a;
            h10 = x.h();
            ((th.b0) v0Var.e()).z(str, w10, h10, new p(this.f16422o, this.f16421i));
        } catch (RemoteException e10) {
            List list = this.f16420e;
            k0Var = x.f16719g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
