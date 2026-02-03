package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends gi.r0 {

    /* renamed from: c  reason: collision with root package name */
    private final gi.t0 f15795c = new gi.t0("OnRequestIntegrityTokenCallback");

    /* renamed from: d  reason: collision with root package name */
    private final wg.k f15796d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ k f15797e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, wg.k kVar2) {
        this.f15797e = kVar;
        this.f15796d = kVar2;
    }

    @Override // gi.s0
    public final void d(Bundle bundle) {
        x0 x0Var;
        String str;
        this.f15797e.f15809f.v(this.f15796d);
        this.f15795c.c("onRequestIntegrityToken", new Object[0]);
        x0Var = this.f15797e.f15808e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f15796d.d(a10);
            return;
        }
        String string = bundle.getString("token");
        if (string == null) {
            this.f15796d.d(new a(-100, null));
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f15797e.f15805b;
        i iVar = new i(this, str, j10);
        wg.k kVar = this.f15796d;
        d dVar = new d();
        dVar.b(string);
        dVar.a(iVar);
        kVar.e(dVar.c());
    }
}
