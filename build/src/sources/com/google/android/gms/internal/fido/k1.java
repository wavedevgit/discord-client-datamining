package com.google.android.gms.internal.fido;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k1 extends g1 {

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l1 f13998i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k1(l1 l1Var) {
        this.f13998i = l1Var;
    }

    @Override // com.google.android.gms.internal.fido.h1, com.google.android.gms.internal.fido.z0
    public final c2 e() {
        return j().listIterator(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return j().listIterator(0);
    }

    @Override // com.google.android.gms.internal.fido.h1
    final e1 l() {
        return new j1(this);
    }

    @Override // com.google.android.gms.internal.fido.g1
    final f1 r() {
        return this.f13998i;
    }
}
