package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f16429e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f16430i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16431o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, wg.k kVar, Map map, wg.k kVar2) {
        super(kVar);
        this.f16429e = map;
        this.f16430i = kVar2;
        this.f16431o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        try {
            str = this.f16431o.f16721a;
            ((th.b0) this.f16431o.f16724d.e()).s(str, x.o(this.f16429e), new r(this.f16431o, this.f16430i));
        } catch (RemoteException e10) {
            x.f16719g.c(e10, "syncPacks", new Object[0]);
            this.f16430i.d(new RuntimeException(e10));
        }
    }
}
