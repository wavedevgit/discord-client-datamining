package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15474e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f15475i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15476o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, wg.k kVar, int i10, wg.k kVar2) {
        super(kVar);
        this.f15474e = i10;
        this.f15475i = kVar2;
        this.f15476o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        Bundle i10;
        Bundle h10;
        try {
            str = this.f15476o.f15689a;
            i10 = x.i(this.f15474e);
            h10 = x.h();
            ((th.b0) this.f15476o.f15692d.e()).M0(str, i10, h10, new v(this.f15476o, this.f15475i));
        } catch (RemoteException e10) {
            x.f15687g.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
