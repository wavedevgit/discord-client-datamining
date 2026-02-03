package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16479e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16480i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ wg.k f16481o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16482p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ x f16483q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(x xVar, wg.k kVar, int i10, String str, wg.k kVar2, int i11) {
        super(kVar);
        this.f16479e = i10;
        this.f16480i = str;
        this.f16481o = kVar2;
        this.f16482p = i11;
        this.f16483q = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        Bundle A;
        Bundle h10;
        try {
            str = this.f16483q.f16721a;
            A = x.A(this.f16479e, this.f16480i);
            h10 = x.h();
            ((th.b0) this.f16483q.f16724d.e()).F0(str, A, h10, new u(this.f16483q, this.f16481o, this.f16479e, this.f16480i, this.f16482p));
        } catch (RemoteException e10) {
            x.f16719g.c(e10, "notifyModuleCompleted", new Object[0]);
        }
    }
}
