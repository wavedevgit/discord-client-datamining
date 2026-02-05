package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15409e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15410i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15411o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15412p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f15413q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15414r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(x xVar, wg.k kVar, int i10, String str, String str2, int i11, wg.k kVar2) {
        super(kVar);
        this.f15409e = i10;
        this.f15410i = str;
        this.f15411o = str2;
        this.f15412p = i11;
        this.f15413q = kVar2;
        this.f15414r = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15414r.f15689a;
            Bundle l10 = x.l(this.f15409e, this.f15410i, this.f15411o, this.f15412p);
            h10 = x.h();
            ((th.b0) this.f15414r.f15692d.e()).x0(str, l10, h10, new t(this.f15414r, this.f15413q));
        } catch (RemoteException e10) {
            x.f15687g.c(e10, "notifyChunkTransferred", new Object[0]);
        }
    }
}
