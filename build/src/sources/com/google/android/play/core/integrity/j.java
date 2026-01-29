package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends gi.r0 {

    /* renamed from: c  reason: collision with root package name */
    private final gi.t0 f17198c = new gi.t0("OnRequestIntegrityTokenCallback");

    /* renamed from: d  reason: collision with root package name */
    private final wg.k f17199d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ k f17200e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, wg.k kVar2) {
        this.f17200e = kVar;
        this.f17199d = kVar2;
    }

    @Override // gi.s0
    public final void d(Bundle bundle) {
        x0 x0Var;
        String str;
        this.f17200e.f17212f.v(this.f17199d);
        this.f17198c.c("onRequestIntegrityToken", new Object[0]);
        x0Var = this.f17200e.f17211e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f17199d.d(a10);
            return;
        }
        String string = bundle.getString("token");
        if (string == null) {
            this.f17199d.d(new a(-100, null));
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f17200e.f17208b;
        i iVar = new i(this, str, j10);
        wg.k kVar = this.f17199d;
        d dVar = new d();
        dVar.b(string);
        dVar.a(iVar);
        kVar.e(dVar.c());
    }
}
