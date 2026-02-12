package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f16661e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f16662i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16663o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, zg.k kVar, Map map, zg.k kVar2) {
        super(kVar);
        this.f16661e = map;
        this.f16662i = kVar2;
        this.f16663o = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        try {
            v0Var = this.f16663o.f16956d;
            str = this.f16663o.f16953a;
            ((ai.b0) v0Var.e()).M(str, x.o(this.f16661e), new r(this.f16663o, this.f16662i));
        } catch (RemoteException e10) {
            k0Var = x.f16951g;
            k0Var.c(e10, "syncPacks", new Object[0]);
            this.f16662i.d(new RuntimeException(e10));
        }
    }
}
