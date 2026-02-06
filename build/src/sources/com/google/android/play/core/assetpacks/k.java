package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15821e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15822i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ yg.k f15823o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15824p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f15825q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, yg.k kVar, int i10, String str, yg.k kVar2, int i11) {
        super(kVar);
        this.f15821e = i10;
        this.f15822i = str;
        this.f15823o = kVar2;
        this.f15824p = i11;
        this.f15825q = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        xh.k0 k0Var;
        xh.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f15825q.f16066d;
            str = this.f15825q.f16063a;
            A = x.A(this.f15821e, this.f15822i);
            h10 = x.h();
            ((xh.b0) v0Var.e()).b0(str, A, h10, new u(this.f15825q, this.f15823o, this.f15821e, this.f15822i, this.f15824p));
        } catch (RemoteException e10) {
            k0Var = x.f16061g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
