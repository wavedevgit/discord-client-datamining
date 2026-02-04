package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.RemoteException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m extends th.l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f15505e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ String f15506i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ String f15507o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ int f15508p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ wg.k f15509q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ x f15510r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(x xVar, wg.k kVar, int i10, String str, String str2, int i11, wg.k kVar2) {
        super(kVar);
        this.f15505e = i10;
        this.f15506i = str;
        this.f15507o = str2;
        this.f15508p = i11;
        this.f15509q = kVar2;
        this.f15510r = xVar;
    }

    @Override // th.l0
    protected final void a() {
        String str;
        Bundle h10;
        try {
            str = this.f15510r.f15689a;
            Bundle l10 = x.l(this.f15505e, this.f15506i, this.f15507o, this.f15508p);
            h10 = x.h();
            ((th.b0) this.f15510r.f15692d.e()).r(str, l10, h10, new q(this.f15510r, this.f15509q));
        } catch (RemoteException e10) {
            x.f15687g.b("getChunkFileDescriptor(%s, %s, %d, session=%d)", this.f15506i, this.f15507o, Integer.valueOf(this.f15508p), Integer.valueOf(this.f15505e));
            this.f15509q.d(new RuntimeException(e10));
        }
    }
}
