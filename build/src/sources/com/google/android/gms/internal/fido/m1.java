package com.google.android.gms.internal.fido;

import java.util.Comparator;
import java.util.NavigableSet;
import java.util.SortedSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m1 extends h1 implements NavigableSet, a2 {

    /* renamed from: i  reason: collision with root package name */
    final transient Comparator f14020i;

    /* renamed from: o  reason: collision with root package name */
    transient m1 f14021o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m1(Comparator comparator) {
        this.f14020i = comparator;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v1 x(Comparator comparator) {
        if (q1.f14052d.equals(comparator)) {
            return v1.f14096q;
        }
        int i10 = e1.f13950i;
        return new v1(t1.f14078q, comparator);
    }

    public final void addFirst(Object obj) {
        throw new UnsupportedOperationException();
    }

    public final void addLast(Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.SortedSet, com.google.android.gms.internal.fido.a2
    public final Comparator comparator() {
        return this.f14020i;
    }

    @Override // java.util.SortedSet
    public abstract Object first();

    public final Object getFirst() {
        return first();
    }

    public final Object getLast() {
        return last();
    }

    @Override // java.util.NavigableSet, java.util.SortedSet
    public final /* synthetic */ SortedSet headSet(Object obj) {
        obj.getClass();
        return t(obj, false);
    }

    @Override // java.util.SortedSet
    public abstract Object last();

    @Override // java.util.NavigableSet
    public final Object pollFirst() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.NavigableSet
    public final Object pollLast() {
        throw new UnsupportedOperationException();
    }

    abstract m1 r();

    public final Object removeFirst() {
        throw new UnsupportedOperationException();
    }

    public final Object removeLast() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.NavigableSet
    /* renamed from: s */
    public final m1 descendingSet() {
        m1 m1Var = this.f14021o;
        if (m1Var == null) {
            m1 r10 = r();
            this.f14021o = r10;
            r10.f14021o = this;
            return r10;
        }
        return m1Var;
    }

    @Override // java.util.NavigableSet, java.util.SortedSet
    public final /* bridge */ /* synthetic */ SortedSet subSet(Object obj, Object obj2) {
        return subSet(obj, true, obj2, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract m1 t(Object obj, boolean z10);

    @Override // java.util.NavigableSet, java.util.SortedSet
    public final /* synthetic */ SortedSet tailSet(Object obj) {
        obj.getClass();
        return w(obj, true);
    }

    @Override // java.util.NavigableSet
    /* renamed from: u */
    public final m1 subSet(Object obj, boolean z10, Object obj2, boolean z11) {
        boolean z12;
        obj.getClass();
        obj2.getClass();
        if (this.f14020i.compare(obj, obj2) <= 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        k0.c(z12);
        return v(obj, z10, obj2, z11);
    }

    abstract m1 v(Object obj, boolean z10, Object obj2, boolean z11);

    abstract m1 w(Object obj, boolean z10);

    @Override // java.util.NavigableSet
    public final /* synthetic */ NavigableSet headSet(Object obj, boolean z10) {
        obj.getClass();
        return t(obj, z10);
    }

    @Override // java.util.NavigableSet
    public final /* synthetic */ NavigableSet tailSet(Object obj, boolean z10) {
        obj.getClass();
        return w(obj, z10);
    }
}
