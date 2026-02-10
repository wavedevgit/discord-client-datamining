package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15961e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15962i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ zg.k f15963o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15964p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f15965q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, zg.k kVar, int i10, String str, zg.k kVar2, int i11) {
        super(kVar);
        this.f15961e = i10;
        this.f15962i = str;
        this.f15963o = kVar2;
        this.f15964p = i11;
        this.f15965q = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        yh.k0 k0Var;
        yh.v0 v0Var;
        String str;
        Bundle A;
        Bundle h10;
        try {
            v0Var = this.f15965q.f16206d;
            str = this.f15965q.f16203a;
            A = x.A(this.f15961e, this.f15962i);
            h10 = x.h();
            ((yh.b0) v0Var.e()).N0(str, A, h10, new u(this.f15965q, this.f15963o, this.f15961e, this.f15962i, this.f15964p));
        } catch (RemoteException e10) {
            k0Var = x.f16201g;
            k0Var.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
