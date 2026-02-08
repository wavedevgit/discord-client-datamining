package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15848e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ yg.k f15849i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15850o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, yg.k kVar, int i10, yg.k kVar2) {
        super(kVar);
        this.f15848e = i10;
        this.f15849i = kVar2;
        this.f15850o = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        String str;
        Bundle i10;
        Bundle h10;
        try {
            str = this.f15850o.f16063a;
            i10 = x.i(this.f15848e);
            h10 = x.h();
            ((xh.b0) this.f15850o.f16066d.e()).W(str, i10, h10, new v(this.f15850o, this.f15849i));
        } catch (RemoteException e10) {
            x.f16061g.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
