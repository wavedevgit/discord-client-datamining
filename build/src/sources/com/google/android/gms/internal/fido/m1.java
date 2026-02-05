package com.google.android.gms.internal.fido;

import java.util.Comparator;
import java.util.NavigableSet;
import java.util.SortedSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m1 extends h1 implements NavigableSet, a2 {

    /* renamed from: i  reason: collision with root package name */
    final transient Comparator f14057i;

    /* renamed from: o  reason: collision with root package name */
    transient m1 f14058o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m1(Comparator comparator) {
        this.f14057i = comparator;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v1 w(Comparator comparator) {
        if (q1.f14089d.equals(comparator)) {
            return v1.f14133q;
        }
        int i10 = e1.f13987i;
        return new v1(t1.f14115q, comparator);
    }

    public final void addFirst(Object obj) {
        throw new UnsupportedOperationException();
    }

    public final void addLast(Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.SortedSet, com.google.android.gms.internal.fido.a2
    public final Comparator comparator() {
        return this.f14057i;
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
        return s(obj, false);
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

    abstract m1 q();

    @Override // java.util.NavigableSet
    /* renamed from: r */
    public final m1 descendingSet() {
        m1 m1Var = this.f14058o;
        if (m1Var == null) {
            m1 q10 = q();
            this.f14058o = q10;
            q10.f14058o = this;
            return q10;
        }
        return m1Var;
    }

    public final Object removeFirst() {
        throw new UnsupportedOperationException();
    }

    public final Object removeLast() {
        throw new UnsupportedOperationException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract m1 s(Object obj, boolean z10);

    @Override // java.util.NavigableSet, java.util.SortedSet
    public final /* bridge */ /* synthetic */ SortedSet subSet(Object obj, Object obj2) {
        return subSet(obj, true, obj2, false);
    }

    @Override // java.util.NavigableSet
    /* renamed from: t */
    public final m1 subSet(Object obj, boolean z10, Object obj2, boolean z11) {
        boolean z12;
        obj.getClass();
        obj2.getClass();
        if (this.f14057i.compare(obj, obj2) <= 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        k0.c(z12);
        return u(obj, z10, obj2, z11);
    }

    @Override // java.util.NavigableSet, java.util.SortedSet
    public final /* synthetic */ SortedSet tailSet(Object obj) {
        obj.getClass();
        return v(obj, true);
    }

    abstract m1 u(Object obj, boolean z10, Object obj2, boolean z11);

    abstract m1 v(Object obj, boolean z10);

    @Override // java.util.NavigableSet
    public final /* synthetic */ NavigableSet headSet(Object obj, boolean z10) {
        obj.getClass();
        return s(obj, z10);
    }

    @Override // java.util.NavigableSet
    public final /* synthetic */ NavigableSet tailSet(Object obj, boolean z10) {
        obj.getClass();
        return v(obj, z10);
    }
}
