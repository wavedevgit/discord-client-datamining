package com.google.firebase.installations;

import wg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements h {

    /* renamed from: a  reason: collision with root package name */
    final k f15981a;

    public f(k kVar) {
        this.f15981a = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        return false;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(dj.d dVar) {
        if (!dVar.l() && !dVar.k() && !dVar.i()) {
            return false;
        }
        this.f15981a.e(dVar.d());
        return true;
    }
}
