package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15988e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f15989i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15990o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(x xVar, zg.k kVar, int i10, zg.k kVar2) {
        super(kVar);
        this.f15988e = i10;
        this.f15989i = kVar2;
        this.f15990o = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        String str;
        Bundle i10;
        Bundle h10;
        try {
            str = this.f15990o.f16203a;
            i10 = x.i(this.f15988e);
            h10 = x.h();
            ((yh.b0) this.f15990o.f16206d.e()).V0(str, i10, h10, new v(this.f15990o, this.f15989i));
        } catch (RemoteException e10) {
            x.f16201g.c(e10, "notifySessionFailed", new Object[0]);
        }
    }
}
