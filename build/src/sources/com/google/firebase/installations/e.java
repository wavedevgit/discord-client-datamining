package com.google.firebase.installations;

import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f17242a;

    /* renamed from: b  reason: collision with root package name */
    private final k f17243b;

    public e(i iVar, k kVar) {
        this.f17242a = iVar;
        this.f17243b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(kj.d dVar) {
        if (dVar.k() && !this.f17242a.f(dVar)) {
            this.f17243b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(Exception exc) {
        this.f17243b.d(exc);
        return true;
    }
}
