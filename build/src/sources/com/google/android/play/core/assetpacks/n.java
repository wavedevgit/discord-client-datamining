package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f16036e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ x f16037i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(x xVar, zg.k kVar, zg.k kVar2) {
        super(kVar);
        this.f16036e = kVar2;
        this.f16037i = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f16037i.f16203a;
            h10 = x.h();
            ((yh.b0) this.f16037i.f16207e.e()).u(str, h10, new s(this.f16037i, this.f16036e));
        } catch (RemoteException e10) {
            x.f16201g.c(e10, "keepAlive", new Object[0]);
        }
    }
}
