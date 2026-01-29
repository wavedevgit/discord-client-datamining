package com.google.android.gms.internal.fido;

import java.util.AbstractMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 extends e1 {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ k1 f15034o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1(k1 k1Var) {
        this.f15034o = k1Var;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        v1 v1Var;
        e1 e1Var;
        v1Var = this.f15034o.f15044i.f15054i;
        Object obj = v1Var.f15143p.get(i10);
        e1Var = this.f15034o.f15044i.f15055o;
        return new AbstractMap.SimpleImmutableEntry(obj, e1Var.get(i10));
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f15034o.f15044i.size();
    }
}
