package com.google.firebase.installations;

import wg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f17011a;

    /* renamed from: b  reason: collision with root package name */
    private final k f17012b;

    public e(i iVar, k kVar) {
        this.f17011a = iVar;
        this.f17012b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        this.f17012b.d(exc);
        return true;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(dj.d dVar) {
        if (dVar.k() && !this.f17011a.f(dVar)) {
            this.f17012b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }
}
