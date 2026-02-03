package com.google.android.gms.internal.fido;

import java.util.AbstractMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 extends e1 {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ k1 f14663o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1(k1 k1Var) {
        this.f14663o = k1Var;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        v1 v1Var;
        e1 e1Var;
        v1Var = this.f14663o.f14673i.f14683i;
        Object obj = v1Var.f14772p.get(i10);
        e1Var = this.f14663o.f14673i.f14684o;
        return new AbstractMap.SimpleImmutableEntry(obj, e1Var.get(i10));
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14663o.f14673i.size();
    }
}
