package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16441e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16442i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16443o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16444p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f16445q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16446r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, wg.k kVar, int i10, String str, String str2, int i11, wg.k kVar2) {
        super(kVar);
        this.f16441e = i10;
        this.f16442i = str;
        this.f16443o = str2;
        this.f16444p = i11;
        this.f16445q = kVar2;
        this.f16446r = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16446r.f16724d;
            str = this.f16446r.f16721a;
            Bundle l10 = x.l(this.f16441e, this.f16442i, this.f16443o, this.f16444p);
            h10 = x.h();
            ((th.b0) v0Var.e()).x0(str, l10, h10, new t(this.f16446r, this.f16445q));
        } catch (RemoteException e10) {
            k0Var = x.f16719g;
            k0Var.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
