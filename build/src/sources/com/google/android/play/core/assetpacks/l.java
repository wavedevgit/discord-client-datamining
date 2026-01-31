package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16877e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ wg.k f16878i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16879o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, wg.k kVar, int i10, wg.k kVar2) {
        super(kVar);
        this.f16877e = i10;
        this.f16878i = kVar2;
        this.f16879o = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        String str;
        Bundle i10;
        Bundle h10;
        try {
            str = this.f16879o.f17092a;
            i10 = x.i(this.f16877e);
            h10 = x.h();
            ((th.b0) this.f16879o.f17095d.e()).M0(str, i10, h10, new v(this.f16879o, this.f16878i));
        } catch (RemoteException e10) {
            k0Var = x.f17090g;
            k0Var.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
