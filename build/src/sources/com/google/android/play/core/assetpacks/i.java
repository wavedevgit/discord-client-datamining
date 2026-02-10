package com.google.android.play.core.assetpacks;

import android.os.RemoteException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class i extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Map f15911e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f15912i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15913o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(x xVar, zg.k kVar, Map map, zg.k kVar2) {
        super(kVar);
        this.f15911e = map;
        this.f15912i = kVar2;
        this.f15913o = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        String str;
        try {
            str = this.f15913o.f16203a;
            ((yh.b0) this.f15913o.f16206d.e()).w(str, x.o(this.f15911e), new r(this.f15913o, this.f15912i));
        } catch (RemoteException e10) {
            x.f16201g.c(e10, "syncPacks", new Object[0]);
            this.f15912i.d(new RuntimeException(e10));
        }
    }
}
