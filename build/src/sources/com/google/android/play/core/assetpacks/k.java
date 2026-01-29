package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16850e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16851i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f16852o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16853p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f16854q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, wg.k kVar, int i10, String str, wg.k kVar2, int i11) {
        super(kVar);
        this.f16850e = i10;
        this.f16851i = str;
        this.f16852o = kVar2;
        this.f16853p = i11;
        this.f16854q = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f16854q.f17095d;
            str = this.f16854q.f17092a;
            A = x.A(this.f16850e, this.f16851i);
            h10 = x.h();
            ((th.b0) v0Var.e()).F0(str, A, h10, new u(this.f16854q, this.f16852o, this.f16850e, this.f16851i, this.f16853p));
        } catch (RemoteException e10) {
            k0Var = x.f17090g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
