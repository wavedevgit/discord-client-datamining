package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends yh.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f16019e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f16020i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f16021o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f16022p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ zg.k f16023q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f16024r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, zg.k kVar, int i10, String str, String str2, int i11, zg.k kVar2) {
        super(kVar);
        this.f16019e = i10;
        this.f16020i = str;
        this.f16021o = str2;
        this.f16022p = i11;
        this.f16023q = kVar2;
        this.f16024r = xVar;
    }

    @Override // yh.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f16024r.f16203a;
            Bundle l10 = x.l(this.f16019e, this.f16020i, this.f16021o, this.f16022p);
            h10 = x.h();
            ((yh.b0) this.f16024r.f16206d.e()).y(str, l10, h10, new q(this.f16024r, this.f16023q));
        } catch (RemoteException e10) {
            x.f16201g.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", this.f16020i, this.f16021o, Integer.valueOf(this.f16022p), Integer.valueOf(this.f16019e));
            this.f16023q.d(new RuntimeException(e10));
        }
    }
}
