package com.google.android.gms.internal.fido;

import java.util.AbstractMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 extends e1 {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ k1 f14025o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1(k1 k1Var) {
        this.f14025o = k1Var;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        v1 v1Var;
        e1 e1Var;
        v1Var = this.f14025o.f14035i.f14045i;
        Object obj = v1Var.f14134p.get(i10);
        e1Var = this.f14025o.f14035i.f14046o;
        return new AbstractMap.SimpleImmutableEntry(obj, e1Var.get(i10));
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14025o.f14035i.size();
    }
}
