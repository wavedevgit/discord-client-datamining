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
        String str;
        b2 b2Var;
        o3 o3Var;
        ArrayList w10 = x.w(this.f16410e);
        try {
            str = this.f16413p.f16721a;
            Bundle o10 = x.o(this.f16411i);
            x xVar = this.f16413p;
            wg.k kVar = this.f16412o;
            b2Var = xVar.f16722b;
            o3Var = xVar.f16723c;
            ((th.b0) this.f16413p.f16724d.e()).m0(str, w10, o10, new w(xVar, kVar, b2Var, o3Var));
        } catch (RemoteException e10) {
            x.f16719g.c(e10, "startDownload(%s)", this.f16410e);
            this.f16412o.d(new RuntimeException(e10));
        }
    }
}
