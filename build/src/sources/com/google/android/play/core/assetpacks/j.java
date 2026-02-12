package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16673e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16674i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16675o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16676p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f16677q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16678r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, zg.k kVar, int i10, String str, String str2, int i11, zg.k kVar2) {
        super(kVar);
        this.f16673e = i10;
        this.f16674i = str;
        this.f16675o = str2;
        this.f16676p = i11;
        this.f16677q = kVar2;
        this.f16678r = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16678r.f16956d;
            str = this.f16678r.f16953a;
            Bundle l10 = x.l(this.f16673e, this.f16674i, this.f16675o, this.f16676p);
            h10 = x.h();
            ((ai.b0) v0Var.e()).x(str, l10, h10, new t(this.f16678r, this.f16677q));
        } catch (RemoteException e10) {
            k0Var = x.f16951g;
            k0Var.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
