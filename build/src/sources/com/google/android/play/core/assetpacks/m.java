package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16908e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16909i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16910o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16911p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f16912q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16913r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, wg.k kVar, int i10, String str, String str2, int i11, wg.k kVar2) {
        super(kVar);
        this.f16908e = i10;
        this.f16909i = str;
        this.f16910o = str2;
        this.f16911p = i11;
        this.f16912q = kVar2;
        this.f16913r = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        String str;
        Bundle h10;
        try {
            str = this.f16913r.f17092a;
            Bundle l10 = x.l(this.f16908e, this.f16909i, this.f16910o, this.f16911p);
            h10 = x.h();
            ((th.b0) this.f16913r.f17095d.e()).r(str, l10, h10, new q(this.f16913r, this.f16912q));
        } catch (RemoteException e10) {
            String str2 = this.f16909i;
            k0Var = x.f17090g;
            k0Var.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", str2, this.f16910o, Integer.valueOf(this.f16911p), Integer.valueOf(this.f16908e));
            this.f16912q.d(new RuntimeException(e10));
        }
    }
}
