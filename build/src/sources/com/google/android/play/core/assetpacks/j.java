package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15803e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15804i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15805o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15806p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ xg.k f15807q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15808r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, xg.k kVar, int i10, String str, String str2, int i11, xg.k kVar2) {
        super(kVar);
        this.f15803e = i10;
        this.f15804i = str;
        this.f15805o = str2;
        this.f15806p = i11;
        this.f15807q = kVar2;
        this.f15808r = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15808r.f16083a;
            Bundle l10 = x.l(this.f15803e, this.f15804i, this.f15805o, this.f15806p);
            h10 = x.h();
            ((wh.b0) this.f15808r.f16086d.e()).M0(str, l10, h10, new t(this.f15808r, this.f15807q));
        } catch (RemoteException e10) {
            x.f16081g.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
