package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15378e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f15379i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f15380o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f15381p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, wg.k kVar, List list, Map map, wg.k kVar2) {
        super(kVar);
        this.f15378e = list;
        this.f15379i = map;
        this.f15380o = kVar2;
        this.f15381p = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f15378e);
        try {
            str = this.f15381p.f15689a;
            Bundle o10 = x.o(this.f15379i);
            x xVar = this.f15381p;
            wg.k kVar = this.f15380o;
            b2Var = xVar.f15690b;
            o3Var = xVar.f15691c;
            ((th.b0) this.f15381p.f15692d.e()).m0(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            x.f15687g.c(e10, "startDownload(%s)", this.f15378e);
            this.f15380o.d(new RuntimeException(e10));
        }
    }
}
