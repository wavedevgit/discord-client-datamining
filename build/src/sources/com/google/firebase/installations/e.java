package com.google.firebase.installations;

import wg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f17382a;

    /* renamed from: b  reason: collision with root package name */
    private final k f17383b;

    public e(i iVar, k kVar) {
        this.f17382a = iVar;
        this.f17383b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        this.f17383b.d(exc);
        return true;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(dj.d dVar) {
        if (dVar.k() && !this.f17382a.f(dVar)) {
            this.f17383b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }
}
