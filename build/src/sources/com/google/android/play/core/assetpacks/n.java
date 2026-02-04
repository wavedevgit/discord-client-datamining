package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ wg.k f15522e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ x f15523i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(x xVar, wg.k kVar, wg.k kVar2) {
        super(kVar);
        this.f15522e = kVar2;
        this.f15523i = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15523i.f15689a;
            h10 = x.h();
            ((th.b0) this.f15523i.f15693e.e()).A0(str, h10, new s(this.f15523i, this.f15522e));
        } catch (RemoteException e10) {
            x.f15687g.c(e10, "keepAlive", new Object[0]);
        }
    }
}
