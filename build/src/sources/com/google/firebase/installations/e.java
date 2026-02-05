package com.google.firebase.installations;

import xg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f16373a;

    /* renamed from: b  reason: collision with root package name */
    private final k f16374b;

    public e(i iVar, k kVar) {
        this.f16373a = iVar;
        this.f16374b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        this.f16374b.d(exc);
        return true;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(gj.d dVar) {
        if (dVar.k() && !this.f16373a.f(dVar)) {
            this.f16374b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }
}
