package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16781e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f16782i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f16783o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f16784p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, wg.k kVar, List list, Map map, wg.k kVar2) {
        super(kVar);
        this.f16781e = list;
        this.f16782i = map;
        this.f16783o = kVar2;
        this.f16784p = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f16781e);
        try {
            str = this.f16784p.f17092a;
            Bundle o10 = x.o(this.f16782i);
            x xVar = this.f16784p;
            wg.k kVar = this.f16783o;
            b2Var = xVar.f17093b;
            o3Var = xVar.f17094c;
            ((th.b0) x.t(this.f16784p).e()).m0(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            List list = this.f16781e;
            k0Var = x.f17090g;
            k0Var.c(e10, "startDownload(%s)", list);
            this.f16783o.d(new RuntimeException(e10));
        }
    }
}
