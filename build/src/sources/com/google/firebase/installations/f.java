package com.google.firebase.installations;

import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements h {

    /* renamed from: a  reason: collision with root package name */
    final k f16495a;

    public f(k kVar) {
        this.f16495a = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        return false;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(ij.d dVar) {
        if (!dVar.l() && !dVar.k() && !dVar.i()) {
            return false;
        }
        this.f16495a.e(dVar.d());
        return true;
    }
}
