package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16672e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16673i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16674o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16675p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f16676q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16677r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, zg.k kVar, int i10, String str, String str2, int i11, zg.k kVar2) {
        super(kVar);
        this.f16672e = i10;
        this.f16673i = str;
        this.f16674o = str2;
        this.f16675p = i11;
        this.f16676q = kVar2;
        this.f16677r = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16677r.f16955d;
            str = this.f16677r.f16952a;
            Bundle l10 = x.l(this.f16672e, this.f16673i, this.f16674o, this.f16675p);
            h10 = x.h();
            ((ai.b0) v0Var.e()).x(str, l10, h10, new t(this.f16677r, this.f16676q));
        } catch (RemoteException e10) {
            k0Var = x.f16950g;
            k0Var.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
