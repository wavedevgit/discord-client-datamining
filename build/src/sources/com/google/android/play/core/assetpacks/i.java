package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f16660e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f16661i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16662o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, zg.k kVar, Map map, zg.k kVar2) {
        super(kVar);
        this.f16660e = map;
        this.f16661i = kVar2;
        this.f16662o = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        try {
            v0Var = this.f16662o.f16955d;
            str = this.f16662o.f16952a;
            ((ai.b0) v0Var.e()).M(str, x.o(this.f16660e), new r(this.f16662o, this.f16661i));
        } catch (RemoteException e10) {
            k0Var = x.f16950g;
            k0Var.c(e10, "syncPacks", new Object[0]);
            this.f16661i.d(new RuntimeException(e10));
        }
    }
}
