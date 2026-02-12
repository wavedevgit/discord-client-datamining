package com.google.firebase.installations;

import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f17243a;

    /* renamed from: b  reason: collision with root package name */
    private final k f17244b;

    public e(i iVar, k kVar) {
        this.f17243a = iVar;
        this.f17244b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(kj.d dVar) {
        if (dVar.k() && !this.f17243a.f(dVar)) {
            this.f17244b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(Exception exc) {
        this.f17244b.d(exc);
        return true;
    }
}
