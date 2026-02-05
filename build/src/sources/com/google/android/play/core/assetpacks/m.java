package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends wh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15899e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15900i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15901o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15902p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ xg.k f15903q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15904r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, xg.k kVar, int i10, String str, String str2, int i11, xg.k kVar2) {
        super(kVar);
        this.f15899e = i10;
        this.f15900i = str;
        this.f15901o = str2;
        this.f15902p = i11;
        this.f15903q = kVar2;
        this.f15904r = xVar;
    }

    @Override // wh.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15904r.f16083a;
            Bundle l10 = x.l(this.f15899e, this.f15900i, this.f15901o, this.f15902p);
            h10 = x.h();
            ((wh.b0) this.f15904r.f16086d.e()).J0(str, l10, h10, new q(this.f15904r, this.f15903q));
        } catch (RemoteException e10) {
            x.f16081g.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", this.f15900i, this.f15901o, Integer.valueOf(this.f15902p), Integer.valueOf(this.f15899e));
            this.f15903q.d(new RuntimeException(e10));
        }
    }
}
