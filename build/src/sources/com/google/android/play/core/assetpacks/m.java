package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends xh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15879e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15880i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15881o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15882p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ yg.k f15883q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15884r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, yg.k kVar, int i10, String str, String str2, int i11, yg.k kVar2) {
        super(kVar);
        this.f15879e = i10;
        this.f15880i = str;
        this.f15881o = str2;
        this.f15882p = i11;
        this.f15883q = kVar2;
        this.f15884r = xVar;
    }

    @Override // xh.l0
    protected final void a() {
        xh.k0 k0Var;
        xh.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f15884r.f16066d;
            str = this.f15884r.f16063a;
            Bundle l10 = x.l(this.f15879e, this.f15880i, this.f15881o, this.f15882p);
            h10 = x.h();
            ((xh.b0) v0Var.e()).s0(str, l10, h10, new q(this.f15884r, this.f15883q));
        } catch (RemoteException e10) {
            String str2 = this.f15880i;
            k0Var = x.f16061g;
            k0Var.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", str2, this.f15881o, Integer.valueOf(this.f15882p), Integer.valueOf(this.f15879e));
            this.f15883q.d(new RuntimeException(e10));
        }
    }
}
