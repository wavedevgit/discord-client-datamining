package com.google.android.gms.internal.play_billing;

import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z3 implements ListIterator {

    /* renamed from: d  reason: collision with root package name */
    final ListIterator f14393d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f14394e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b4 f14395i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z3(b4 b4Var, int i10) {
        e2 e2Var;
        this.f14394e = i10;
        this.f14395i = b4Var;
        e2Var = b4Var.f14156d;
        this.f14393d = e2Var.listIterator(i10);
    }

    @Override // java.util.ListIterator
    public final /* synthetic */ void add(Object obj) {
        String str = (String) obj;
        throw new UnsupportedOperationException();
    }

    @Override // java.util.ListIterator, java.util.Iterator
    public final boolean hasNext() {
        return this.f14393d.hasNext();
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        return this.f14393d.hasPrevious();
    }

    @Override // java.util.ListIterator, java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        return (String) this.f14393d.next();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f14393d.nextIndex();
    }

    @Override // java.util.ListIterator
    public final /* bridge */ /* synthetic */ Object previous() {
        return (String) this.f14393d.previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f14393d.previousIndex();
    }

    @Override // java.util.ListIterator, java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.ListIterator
    public final /* synthetic */ void set(Object obj) {
        String str = (String) obj;
        throw new UnsupportedOperationException();
    }
}
