package com.google.android.gms.internal.play_billing;

import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z3 implements ListIterator {

    /* renamed from: d  reason: collision with root package name */
    final ListIterator f14430d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ int f14431e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ b4 f14432i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z3(b4 b4Var, int i10) {
        e2 e2Var;
        this.f14431e = i10;
        this.f14432i = b4Var;
        e2Var = b4Var.f14193d;
        this.f14430d = e2Var.listIterator(i10);
    }

    @Override // java.util.ListIterator
    public final /* synthetic */ void add(Object obj) {
        String str = (String) obj;
        throw new UnsupportedOperationException();
    }

    @Override // java.util.ListIterator, java.util.Iterator
    public final boolean hasNext() {
        return this.f14430d.hasNext();
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        return this.f14430d.hasPrevious();
    }

    @Override // java.util.ListIterator, java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        return (String) this.f14430d.next();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f14430d.nextIndex();
    }

    @Override // java.util.ListIterator
    public final /* bridge */ /* synthetic */ Object previous() {
        return (String) this.f14430d.previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f14430d.previousIndex();
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
