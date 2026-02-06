package com.google.android.gms.internal.fido;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v1 extends m1 {

    /* renamed from: q  reason: collision with root package name */
    static final v1 f14096q;

    /* renamed from: p  reason: collision with root package name */
    final transient e1 f14097p;

    static {
        int i10 = e1.f13950i;
        f14096q = new v1(t1.f14078q, q1.f14052d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public v1(e1 e1Var, Comparator comparator) {
        super(comparator);
        this.f14097p = e1Var;
    }

    @Override // java.util.NavigableSet
    /* renamed from: A */
    public final c2 descendingIterator() {
        return this.f14097p.g().listIterator(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int B(Object obj, boolean z10) {
        obj.getClass();
        int binarySearch = Collections.binarySearch(this.f14097p, obj, this.f14020i);
        if (binarySearch >= 0) {
            if (z10) {
                return binarySearch + 1;
            }
            return binarySearch;
        }
        return ~binarySearch;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int C(Object obj, boolean z10) {
        obj.getClass();
        int binarySearch = Collections.binarySearch(this.f14097p, obj, this.f14020i);
        if (binarySearch >= 0) {
            if (z10) {
                return binarySearch;
            }
            return binarySearch + 1;
        }
        return ~binarySearch;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final v1 D(int i10, int i11) {
        if (i10 == 0) {
            if (i11 != this.f14097p.size()) {
                i10 = 0;
            } else {
                return this;
            }
        }
        if (i10 < i11) {
            e1 e1Var = this.f14097p;
            return new v1(e1Var.subList(i10, i11), this.f14020i);
        }
        return m1.x(this.f14020i);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        return this.f14097p.b(objArr, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f14097p.c();
    }

    @Override // java.util.NavigableSet
    public final Object ceiling(Object obj) {
        e1 e1Var = this.f14097p;
        int C = C(obj, true);
        if (C == e1Var.size()) {
            return null;
        }
        return this.f14097p.get(C);
    }

    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (obj != null) {
            try {
                if (Collections.binarySearch(this.f14097p, obj, this.f14020i) >= 0) {
                    return true;
                }
            } catch (ClassCastException unused) {
            }
        }
        return false;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean containsAll(Collection collection) {
        if (collection instanceof p1) {
            collection = ((p1) collection).zza();
        }
        if (b2.a(this.f14020i, collection) && collection.size() > 1) {
            d2 listIterator = this.f14097p.listIterator(0);
            Iterator it = collection.iterator();
            if (!listIterator.hasNext()) {
                return false;
            }
            Object next = it.next();
            E next2 = listIterator.next();
            while (true) {
                try {
                    int compare = this.f14020i.compare(next2, next);
                    if (compare < 0) {
                        if (!listIterator.hasNext()) {
                            return false;
                        }
                        next2 = listIterator.next();
                    } else if (compare != 0) {
                        break;
                    } else if (!it.hasNext()) {
                        return true;
                    } else {
                        next = it.next();
                    }
                } catch (ClassCastException | NullPointerException unused) {
                }
            }
        } else {
            return super.containsAll(collection);
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int d() {
        return this.f14097p.d();
    }

    @Override // com.google.android.gms.internal.fido.h1, com.google.android.gms.internal.fido.z0
    public final c2 e() {
        return this.f14097p.listIterator(0);
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x0038 A[Catch: ClassCastException | NoSuchElementException -> 0x004c, TryCatch #0 {ClassCastException | NoSuchElementException -> 0x004c, blocks: (B:17:0x002c, B:18:0x0032, B:20:0x0038, B:22:0x0042), top: B:29:0x002c }] */
    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean equals(java.lang.Object r7) {
        /*
            r6 = this;
            r0 = 1
            if (r7 != r6) goto L4
            return r0
        L4:
            boolean r1 = r7 instanceof java.util.Set
            r2 = 0
            if (r1 != 0) goto La
            return r2
        La:
            java.util.Set r7 = (java.util.Set) r7
            com.google.android.gms.internal.fido.e1 r1 = r6.f14097p
            int r1 = r1.size()
            int r3 = r7.size()
            if (r1 == r3) goto L19
            return r2
        L19:
            boolean r1 = r6.isEmpty()
            if (r1 == 0) goto L20
            return r0
        L20:
            java.util.Comparator r1 = r6.f14020i
            boolean r1 = com.google.android.gms.internal.fido.b2.a(r1, r7)
            if (r1 == 0) goto L4d
            java.util.Iterator r7 = r7.iterator()
            com.google.android.gms.internal.fido.e1 r1 = r6.f14097p     // Catch: java.lang.Throwable -> L4c
            com.google.android.gms.internal.fido.d2 r1 = r1.listIterator(r2)     // Catch: java.lang.Throwable -> L4c
        L32:
            boolean r3 = r1.hasNext()     // Catch: java.lang.Throwable -> L4c
            if (r3 == 0) goto L4b
            java.lang.Object r3 = r1.next()     // Catch: java.lang.Throwable -> L4c
            java.lang.Object r4 = r7.next()     // Catch: java.lang.Throwable -> L4c
            if (r4 == 0) goto L4a
            java.util.Comparator r5 = r6.f14020i     // Catch: java.lang.Throwable -> L4c
            int r3 = r5.compare(r3, r4)     // Catch: java.lang.Throwable -> L4c
            if (r3 == 0) goto L32
        L4a:
            return r2
        L4b:
            return r0
        L4c:
            return r2
        L4d:
            boolean r7 = r6.containsAll(r7)
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.fido.v1.equals(java.lang.Object):boolean");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final Object[] f() {
        return this.f14097p.f();
    }

    @Override // com.google.android.gms.internal.fido.m1, java.util.SortedSet
    public final Object first() {
        if (!isEmpty()) {
            return this.f14097p.get(0);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.NavigableSet
    public final Object floor(Object obj) {
        int B = B(obj, true) - 1;
        if (B == -1) {
            return null;
        }
        return this.f14097p.get(B);
    }

    @Override // java.util.NavigableSet
    public final Object higher(Object obj) {
        e1 e1Var = this.f14097p;
        int C = C(obj, false);
        if (C == e1Var.size()) {
            return null;
        }
        return this.f14097p.get(C);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set, java.util.NavigableSet
    public final /* synthetic */ Iterator iterator() {
        return this.f14097p.listIterator(0);
    }

    @Override // com.google.android.gms.internal.fido.h1
    public final e1 j() {
        return this.f14097p;
    }

    @Override // com.google.android.gms.internal.fido.m1, java.util.SortedSet
    public final Object last() {
        if (!isEmpty()) {
            e1 e1Var = this.f14097p;
            return e1Var.get(e1Var.size() - 1);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.NavigableSet
    public final Object lower(Object obj) {
        int B = B(obj, false) - 1;
        if (B == -1) {
            return null;
        }
        return this.f14097p.get(B);
    }

    @Override // com.google.android.gms.internal.fido.m1
    final m1 r() {
        Comparator reverseOrder = Collections.reverseOrder(this.f14020i);
        if (isEmpty()) {
            return m1.x(reverseOrder);
        }
        return new v1(this.f14097p.g(), reverseOrder);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f14097p.size();
    }

    @Override // com.google.android.gms.internal.fido.m1
    final m1 t(Object obj, boolean z10) {
        return D(0, B(obj, z10));
    }

    @Override // com.google.android.gms.internal.fido.m1
    final m1 v(Object obj, boolean z10, Object obj2, boolean z11) {
        return w(obj, z10).t(obj2, z11);
    }

    @Override // com.google.android.gms.internal.fido.m1
    final m1 w(Object obj, boolean z10) {
        return D(C(obj, z10), this.f14097p.size());
    }
}
