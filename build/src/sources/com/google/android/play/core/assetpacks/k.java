package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15447e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15448i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f15449o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15450p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f15451q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, wg.k kVar, int i10, String str, wg.k kVar2, int i11) {
        super(kVar);
        this.f15447e = i10;
        this.f15448i = str;
        this.f15449o = kVar2;
        this.f15450p = i11;
        this.f15451q = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f15451q.f15692d;
            str = this.f15451q.f15689a;
            A = x.A(this.f15447e, this.f15448i);
            h10 = x.h();
            ((th.b0) v0Var.e()).F0(str, A, h10, new u(this.f15451q, this.f15449o, this.f15447e, this.f15448i, this.f15450p));
        } catch (RemoteException e10) {
            k0Var = x.f15687g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
