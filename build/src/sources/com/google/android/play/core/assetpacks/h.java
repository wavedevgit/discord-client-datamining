package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ List f15902e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ zg.k f15903i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ x f15904o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(x xVar, zg.k kVar, List list, zg.k kVar2) {
        super(kVar);
        this.f15902e = list;
        this.f15903i = kVar2;
        this.f15904o = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        yh.k0 k0Var;
        yh.v0 v0Var;
        String str;
        Bundle h10;
        ArrayList w10 = x.w(this.f15902e);
        try {
            v0Var = this.f15904o.f16206d;
            str = this.f15904o.f16203a;
            h10 = x.h();
            ((yh.b0) v0Var.e()).t0(str, w10, h10, new p(this.f15904o, this.f15903i));
        } catch (RemoteException e10) {
            List list = this.f15902e;
            k0Var = x.f16201g;
            k0Var.c(e10, "cancelDownloads(%s)", list);
        }
    }
}
