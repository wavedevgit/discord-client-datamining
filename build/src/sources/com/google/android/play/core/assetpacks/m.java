package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16537e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16538i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16539o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16540p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f16541q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16542r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, wg.k kVar, int i10, String str, String str2, int i11, wg.k kVar2) {
        super(kVar);
        this.f16537e = i10;
        this.f16538i = str;
        this.f16539o = str2;
        this.f16540p = i11;
        this.f16541q = kVar2;
        this.f16542r = xVar;
    }

    @Override // th.l0
    protected final void a() {
        th.k0 k0Var;
        th.v0 v0Var;
        String str;
        Bundle h10;
        try {
            v0Var = this.f16542r.f16724d;
            str = this.f16542r.f16721a;
            Bundle l10 = x.l(this.f16537e, this.f16538i, this.f16539o, this.f16540p);
            h10 = x.h();
            ((th.b0) v0Var.e()).r(str, l10, h10, new q(this.f16542r, this.f16541q));
        } catch (RemoteException e10) {
            String str2 = this.f16538i;
            k0Var = x.f16719g;
            k0Var.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", str2, this.f16539o, Integer.valueOf(this.f16540p), Integer.valueOf(this.f16537e));
            this.f16541q.d(new RuntimeException(e10));
        }
    }
}
