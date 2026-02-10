package com.google.firebase.installations;

import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f16493a;

    /* renamed from: b  reason: collision with root package name */
    private final k f16494b;

    public e(i iVar, k kVar) {
        this.f16493a = iVar;
        this.f16494b = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        this.f16494b.d(exc);
        return true;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(ij.d dVar) {
        if (dVar.k() && !this.f16493a.f(dVar)) {
            this.f16494b.c(g.a().b(dVar.b()).d(dVar.c()).c(dVar.h()).a());
            return true;
        }
        return false;
    }
}
