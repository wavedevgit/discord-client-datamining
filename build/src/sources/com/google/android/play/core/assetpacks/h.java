package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f16651e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f16652i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f16653o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, zg.k kVar, List list, zg.k kVar2) {
        super(kVar);
        this.f16651e = list;
        this.f16652i = kVar2;
        this.f16653o = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f16651e);
        try {
            v0Var = this.f16653o.f16955d;
            str = this.f16653o.f16952a;
            h10 = x.h();
            ((ai.b0) v0Var.e()).y0(str, w10, h10, new p(this.f16653o, this.f16652i));
        } catch (RemoteException e10) {
            List list = this.f16651e;
            k0Var = x.f16950g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
