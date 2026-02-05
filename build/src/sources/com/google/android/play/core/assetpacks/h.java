package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15782e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ xg.k f15783i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15784o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, xg.k kVar, List list, xg.k kVar2) {
        super(kVar);
        this.f15782e = list;
        this.f15783i = kVar2;
        this.f15784o = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f15782e);
        try {
            str = this.f15784o.f16083a;
            h10 = x.h();
            ((wh.b0) this.f15784o.f16086d.e()).Q(str, w10, h10, new p(this.f15784o, this.f15783i));
        } catch (RemoteException e10) {
            x.f16081g.c(e10, "cancelDownloads(%s)", this.f15782e);
        }
    }
}
