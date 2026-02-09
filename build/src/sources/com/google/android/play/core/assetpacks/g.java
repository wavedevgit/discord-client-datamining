package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15752e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f15753i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ yg.k f15754o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f15755p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, yg.k kVar, List list, Map map, yg.k kVar2) {
        super(kVar);
        this.f15752e = list;
        this.f15753i = map;
        this.f15754o = kVar2;
        this.f15755p = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        xh.k0 k0Var;
        xh.v0 v0Var;
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f15752e);
        try {
            v0Var = this.f15755p.f16066d;
            str = this.f15755p.f16063a;
            Bundle o10 = x.o(this.f15753i);
            x xVar = this.f15755p;
            yg.k kVar = this.f15754o;
            b2Var = xVar.f16064b;
            o3Var = xVar.f16065c;
            ((xh.b0) v0Var.e()).F(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            List list = this.f15752e;
            k0Var = x.f16061g;
            k0Var.c(e10, "startDownload(%s)", list);
            this.f15754o.d(new RuntimeException(e10));
        }
    }
}
