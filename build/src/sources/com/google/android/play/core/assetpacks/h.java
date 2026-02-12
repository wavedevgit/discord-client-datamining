package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16652e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f16653i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16654o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, zg.k kVar, List list, zg.k kVar2) {
        super(kVar);
        this.f16652e = list;
        this.f16653i = kVar2;
        this.f16654o = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f16652e);
        try {
            v0Var = this.f16654o.f16956d;
            str = this.f16654o.f16953a;
            h10 = x.h();
            ((ai.b0) v0Var.e()).y0(str, w10, h10, new p(this.f16654o, this.f16653i));
        } catch (RemoteException e10) {
            List list = this.f16652e;
            k0Var = x.f16951g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
