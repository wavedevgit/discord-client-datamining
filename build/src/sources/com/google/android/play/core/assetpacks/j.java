package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15783e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15784i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15785o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15786p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ yg.k f15787q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15788r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, yg.k kVar, int i10, String str, String str2, int i11, yg.k kVar2) {
        super(kVar);
        this.f15783e = i10;
        this.f15784i = str;
        this.f15785o = str2;
        this.f15786p = i11;
        this.f15787q = kVar2;
        this.f15788r = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15788r.f16063a;
            Bundle l10 = x.l(this.f15783e, this.f15784i, this.f15785o, this.f15786p);
            h10 = x.h();
            ((xh.b0) this.f15788r.f16066d.e()).E(str, l10, h10, new t(this.f15788r, this.f15787q));
        } catch (RemoteException e10) {
            x.f16061g.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
