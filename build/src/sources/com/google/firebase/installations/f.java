package com.google.firebase.installations;

import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements h {

    /* renamed from: a  reason: collision with root package name */
    final k f17245a;

    public f(k kVar) {
        this.f17245a = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(kj.d dVar) {
        if (!dVar.l() && !dVar.k() && !dVar.i()) {
            return false;
        }
        this.f17245a.e(dVar.d());
        return true;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(Exception exc) {
        return false;
    }
}
