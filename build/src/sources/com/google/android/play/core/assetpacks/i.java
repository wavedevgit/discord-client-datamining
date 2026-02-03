package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f15397e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f15398i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15399o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, wg.k kVar, Map map, wg.k kVar2) {
        super(kVar);
        this.f15397e = map;
        this.f15398i = kVar2;
        this.f15399o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        try {
            v0Var = this.f15399o.f15692d;
            str = this.f15399o.f15689a;
            ((th.b0) v0Var.e()).s(str, x.o(this.f15397e), new r(this.f15399o, this.f15398i));
        } catch (RemoteException e10) {
            k0Var = x.f15687g;
            k0Var.c(e10, "syncPacks", new Object[0]);
            this.f15398i.d(new RuntimeException(e10));
        }
    }
}
