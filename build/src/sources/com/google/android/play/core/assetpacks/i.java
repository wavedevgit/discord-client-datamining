package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f16800e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f16801i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16802o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, wg.k kVar, Map map, wg.k kVar2) {
        super(kVar);
        this.f16800e = map;
        this.f16801i = kVar2;
        this.f16802o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        String str;
        try {
            str = this.f16802o.f17092a;
            ((th.b0) x.t(this.f16802o).e()).s(str, x.o(this.f16800e), new r(this.f16802o, this.f16801i));
        } catch (RemoteException e10) {
            k0Var = x.f17090g;
            k0Var.c(e10, "syncPacks", new Object[0]);
            this.f16801i.d(new RuntimeException(e10));
        }
    }
}
