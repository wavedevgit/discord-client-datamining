package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f15791e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ xg.k f15792i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15793o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, xg.k kVar, Map map, xg.k kVar2) {
        super(kVar);
        this.f15791e = map;
        this.f15792i = kVar2;
        this.f15793o = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        wh.k0 k0Var;
        wh.v0 v0Var;
        String str;
        try {
            v0Var = this.f15793o.f16086d;
            str = this.f15793o.f16083a;
            ((wh.b0) v0Var.e()).V0(str, x.o(this.f15791e), new r(this.f15793o, this.f15792i));
        } catch (RemoteException e10) {
            k0Var = x.f16081g;
            k0Var.c(e10, "syncPacks", new Object[0]);
            this.f15792i.d(new RuntimeException(e10));
        }
    }
}
