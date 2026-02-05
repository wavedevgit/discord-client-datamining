package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ xg.k f15916e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ x f15917i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(x xVar, xg.k kVar, xg.k kVar2) {
        super(kVar);
        this.f15916e = kVar2;
        this.f15917i = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15917i.f16083a;
            h10 = x.h();
            ((wh.b0) this.f15917i.f16087e.e()).D0(str, h10, new s(this.f15917i, this.f15916e));
        } catch (RemoteException e10) {
            x.f16081g.c(e10, "keepAlive", new Object[0]);
        }
    }
}
