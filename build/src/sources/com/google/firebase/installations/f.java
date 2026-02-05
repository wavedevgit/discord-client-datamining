package com.google.firebase.installations;

import xg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements h {

    /* renamed from: a  reason: collision with root package name */
    final k f16375a;

    public f(k kVar) {
        this.f16375a = kVar;
    }

    @Override // com.google.firebase.installations.h
    public boolean a(Exception exc) {
        return false;
    }

    @Override // com.google.firebase.installations.h
    public boolean b(gj.d dVar) {
        if (!dVar.l() && !dVar.k() && !dVar.i()) {
            return false;
        }
        this.f16375a.e(dVar.d());
        return true;
    }
}
