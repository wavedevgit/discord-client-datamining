package com.google.android.gms.internal.play_billing;

import java.util.AbstractList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b4 extends AbstractList implements RandomAccess, e2 {

    /* renamed from: d  reason: collision with root package name */
    private final e2 f14156d;

    public b4(e2 e2Var) {
        this.f14156d = e2Var;
    }

    @Override // com.google.android.gms.internal.play_billing.e2
    public final Object Y(int i10) {
        return this.f14156d.Y(i10);
    }

    @Override // java.util.AbstractList, java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        return ((d2) this.f14156d).get(i10);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    public final Iterator iterator() {
        return new a4(this);
    }

    @Override // com.google.android.gms.internal.play_billing.e2
    public final e2 k() {
        return this;
    }

    @Override // java.util.AbstractList, java.util.List
    public final ListIterator listIterator(int i10) {
        return new z3(this, i10);
    }

    @Override // com.google.android.gms.internal.play_billing.e2
    public final List n() {
        return this.f14156d.n();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14156d.size();
    }
}
