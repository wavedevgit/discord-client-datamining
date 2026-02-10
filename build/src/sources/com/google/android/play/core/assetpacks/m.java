package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends ai.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16768e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16769i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16770o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16771p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f16772q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16773r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, zg.k kVar, int i10, String str, String str2, int i11, zg.k kVar2) {
        super(kVar);
        this.f16768e = i10;
        this.f16769i = str;
        this.f16770o = str2;
        this.f16771p = i11;
        this.f16772q = kVar2;
        this.f16773r = xVar;
    }

    @Override // ai.l0
    protected final void a() {
        ai.k0 k0Var;
        ai.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16773r.f16955d;
            str = this.f16773r.f16952a;
            Bundle l10 = x.l(this.f16768e, this.f16769i, this.f16770o, this.f16771p);
            h10 = x.h();
            ((ai.b0) v0Var.e()).H0(str, l10, h10, new q(this.f16773r, this.f16772q));
        } catch (RemoteException e10) {
            String str2 = this.f16769i;
            k0Var = x.f16950g;
            k0Var.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", str2, this.f16770o, Integer.valueOf(this.f16771p), Integer.valueOf(this.f16768e));
            this.f16772q.d(new RuntimeException(e10));
        }
    }
}
