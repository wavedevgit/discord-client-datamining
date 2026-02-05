package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15841e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15842i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ xg.k f15843o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15844p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f15845q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, xg.k kVar, int i10, String str, xg.k kVar2, int i11) {
        super(kVar);
        this.f15841e = i10;
        this.f15842i = str;
        this.f15843o = kVar2;
        this.f15844p = i11;
        this.f15845q = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        wh.k0 k0Var;
        wh.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f15845q.f16086d;
            str = this.f15845q.f16083a;
            A = x.A(this.f15841e, this.f15842i);
            h10 = x.h();
            ((wh.b0) v0Var.e()).h0(str, A, h10, new u(this.f15845q, this.f15843o, this.f15841e, this.f15842i, this.f15844p));
        } catch (RemoteException e10) {
            k0Var = x.f16081g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
