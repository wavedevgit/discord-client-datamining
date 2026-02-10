package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15923e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15924i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15925o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15926p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f15927q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15928r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, zg.k kVar, int i10, String str, String str2, int i11, zg.k kVar2) {
        super(kVar);
        this.f15923e = i10;
        this.f15924i = str;
        this.f15925o = str2;
        this.f15926p = i11;
        this.f15927q = kVar2;
        this.f15928r = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        yh.k0 k0Var;
        yh.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f15928r.f16206d;
            str = this.f15928r.f16203a;
            Bundle l10 = x.l(this.f15923e, this.f15924i, this.f15925o, this.f15926p);
            h10 = x.h();
            ((yh.b0) v0Var.e()).t(str, l10, h10, new t(this.f15928r, this.f15927q));
        } catch (RemoteException e10) {
            k0Var = x.f16201g;
            k0Var.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
