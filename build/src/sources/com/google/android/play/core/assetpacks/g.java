package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15892e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f15893i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ zg.k f15894o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f15895p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, zg.k kVar, List list, Map map, zg.k kVar2) {
        super(kVar);
        this.f15892e = list;
        this.f15893i = map;
        this.f15894o = kVar2;
        this.f15895p = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f15892e);
        try {
            str = this.f15895p.f16203a;
            Bundle o10 = x.o(this.f15893i);
            x xVar = this.f15895p;
            zg.k kVar = this.f15894o;
            b2Var = xVar.f16204b;
            o3Var = xVar.f16205c;
            ((yh.b0) this.f15895p.f16206d.e()).A(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            x.f16201g.c(e10, "startDownload(%s)", this.f15892e);
            this.f15894o.d(new RuntimeException(e10));
        }
    }
}
