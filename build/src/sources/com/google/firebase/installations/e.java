package com.google.firebase.installations;

import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f16353a;

    /* renamed from: b  reason: collision with root package name */
    private final k f16354b;

    public e(i iVar, k kVar) {
        this.f16353a = iVar;
        this.f16354b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        this.f16354b.d(exc);
        return true;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(hj.d dVar) {
        if (dVar.k() && !this.f16353a.f(dVar)) {
            this.f16354b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }
}
