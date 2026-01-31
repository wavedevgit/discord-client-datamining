package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16812e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16813i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16814o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16815p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f16816q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16817r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, wg.k kVar, int i10, String str, String str2, int i11, wg.k kVar2) {
        super(kVar);
        this.f16812e = i10;
        this.f16813i = str;
        this.f16814o = str2;
        this.f16815p = i11;
        this.f16816q = kVar2;
        this.f16817r = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f16817r.f17092a;
            Bundle l10 = x.l(this.f16812e, this.f16813i, this.f16814o, this.f16815p);
            h10 = x.h();
            ((th.b0) this.f16817r.f17095d.e()).x0(str, l10, h10, new t(this.f16817r, this.f16816q));
        } catch (RemoteException e10) {
            x.f17090g.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
