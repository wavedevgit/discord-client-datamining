package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f15771e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ yg.k f15772i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15773o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, yg.k kVar, Map map, yg.k kVar2) {
        super(kVar);
        this.f15771e = map;
        this.f15772i = kVar2;
        this.f15773o = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        xh.k0 k0Var;
        xh.v0 v0Var;
        String str;
        try {
            v0Var = this.f15773o.f16066d;
            str = this.f15773o.f16063a;
            ((xh.b0) v0Var.e()).i0(str, x.o(this.f15771e), new r(this.f15773o, this.f15772i));
        } catch (RemoteException e10) {
            k0Var = x.f16061g;
            k0Var.c(e10, "syncPacks", new Object[0]);
            this.f15772i.d(new RuntimeException(e10));
        }
    }
}
