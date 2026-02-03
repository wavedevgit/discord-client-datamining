package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class g extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16410e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ Map f16411i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f16412o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ x f16413p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(x xVar, wg.k kVar, List list, Map map, wg.k kVar2) {
        super(kVar);
        this.f16410e = list;
        this.f16411i = map;
        this.f16412o = kVar2;
        this.f16413p = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f16410e);
        try {
            v0Var = this.f16413p.f16724d;
            str = this.f16413p.f16721a;
            Bundle o10 = x.o(this.f16411i);
            x xVar = this.f16413p;
            wg.k kVar = this.f16412o;
            b2Var = xVar.f16722b;
            o3Var = xVar.f16723c;
            ((th.b0) v0Var.e()).m0(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            List list = this.f16410e;
            k0Var = x.f16719g;
            k0Var.c(e10, "startDownload(%s)", list);
            this.f16412o.d(new RuntimeException(e10));
        }
    }
}
