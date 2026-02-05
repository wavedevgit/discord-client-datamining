package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15772e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f15773i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ xg.k f15774o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f15775p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, xg.k kVar, List list, Map map, xg.k kVar2) {
        super(kVar);
        this.f15772e = list;
        this.f15773i = map;
        this.f15774o = kVar2;
        this.f15775p = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f15772e);
        try {
            str = this.f15775p.f16083a;
            Bundle o10 = x.o(this.f15773i);
            x xVar = this.f15775p;
            xg.k kVar = this.f15774o;
            b2Var = xVar.f16084b;
            o3Var = xVar.f16085c;
            ((wh.b0) this.f15775p.f16086d.e()).L0(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            x.f16081g.c(e10, "startDownload(%s)", this.f15772e);
            this.f15774o.d(new RuntimeException(e10));
        }
    }
}
