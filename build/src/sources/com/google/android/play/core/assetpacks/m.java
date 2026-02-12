package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16769e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16770i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16771o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16772p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f16773q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16774r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, zg.k kVar, int i10, String str, String str2, int i11, zg.k kVar2) {
        super(kVar);
        this.f16769e = i10;
        this.f16770i = str;
        this.f16771o = str2;
        this.f16772p = i11;
        this.f16773q = kVar2;
        this.f16774r = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16774r.f16956d;
            str = this.f16774r.f16953a;
            Bundle l10 = x.l(this.f16769e, this.f16770i, this.f16771o, this.f16772p);
            h10 = x.h();
            ((ai.b0) v0Var.e()).H0(str, l10, h10, new q(this.f16774r, this.f16773q));
        } catch (RemoteException e10) {
            String str2 = this.f16770i;
            k0Var = x.f16951g;
            k0Var.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", str2, this.f16771o, Integer.valueOf(this.f16772p), Integer.valueOf(this.f16769e));
            this.f16773q.d(new RuntimeException(e10));
        }
    }
}
