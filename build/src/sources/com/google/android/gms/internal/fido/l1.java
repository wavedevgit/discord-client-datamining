package com.google.android.gms.internal.fido;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.Map;
import java.util.NavigableMap;
import java.util.NavigableSet;
import java.util.Objects;
import java.util.Set;
import java.util.SortedMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l1 extends f1 implements NavigableMap {

    /* renamed from: q  reason: collision with root package name */
    private static final Comparator f14005q;

    /* renamed from: r  reason: collision with root package name */
    private static final l1 f14006r;

    /* renamed from: s  reason: collision with root package name */
    public static final /* synthetic */ int f14007s = 0;

    /* renamed from: i  reason: collision with root package name */
    private final transient v1 f14008i;

    /* renamed from: o  reason: collision with root package name */
    private final transient e1 f14009o;

    /* renamed from: p  reason: collision with root package name */
    private final transient l1 f14010p;

    static {
        q1 q1Var = q1.f14052d;
        f14005q = q1Var;
        v1 x10 = m1.x(q1Var);
        int i10 = e1.f13950i;
        f14006r = new l1(x10, t1.f14078q, null);
    }

    l1(v1 v1Var, e1 e1Var, l1 l1Var) {
        this.f14008i = v1Var;
        this.f14009o = e1Var;
        this.f14010p = l1Var;
    }

    public static l1 e(Map map) {
        boolean equals;
        Set set;
        Comparator comparator = f14005q;
        final s1 s1Var = (s1) comparator;
        Comparator comparator2 = ((SortedMap) map).comparator();
        int i10 = 1;
        if (comparator2 == null) {
            if (s1Var == comparator) {
                equals = true;
            } else {
                equals = false;
            }
        } else {
            equals = s1Var.equals(comparator2);
        }
        Set entrySet = map.entrySet();
        Map.Entry[] entryArr = f1.f13962e;
        if (entrySet instanceof Collection) {
            set = entrySet;
        } else {
            Iterator it = entrySet.iterator();
            ArrayList arrayList = new ArrayList();
            it.getClass();
            while (it.hasNext()) {
                arrayList.add(it.next());
            }
            set = arrayList;
        }
        Map.Entry[] entryArr2 = (Map.Entry[]) set.toArray(entryArr);
        int length = entryArr2.length;
        if (length != 0) {
            if (length != 1) {
                Object[] objArr = new Object[length];
                Object[] objArr2 = new Object[length];
                if (equals) {
                    for (int i11 = 0; i11 < length; i11++) {
                        Map.Entry entry = entryArr2[i11];
                        Objects.requireNonNull(entry);
                        Map.Entry entry2 = entry;
                        Object key = entry2.getKey();
                        Object value = entry2.getValue();
                        v0.a(key, value);
                        objArr[i11] = key;
                        objArr2[i11] = value;
                    }
                } else {
                    Arrays.sort(entryArr2, 0, length, new Comparator() { // from class: com.google.android.gms.internal.fido.i1
                        @Override // java.util.Comparator
                        public final int compare(Object obj, Object obj2) {
                            Map.Entry entry3 = (Map.Entry) obj;
                            Map.Entry entry4 = (Map.Entry) obj2;
                            int i12 = l1.f14007s;
                            Objects.requireNonNull(entry3);
                            Objects.requireNonNull(entry4);
                            return s1Var.compare(entry3.getKey(), entry4.getKey());
                        }
                    });
                    Map.Entry entry3 = entryArr2[0];
                    Objects.requireNonNull(entry3);
                    Map.Entry entry4 = entry3;
                    Object key2 = entry4.getKey();
                    objArr[0] = key2;
                    Object value2 = entry4.getValue();
                    objArr2[0] = value2;
                    v0.a(objArr[0], value2);
                    while (i10 < length) {
                        Map.Entry entry5 = entryArr2[i10 - 1];
                        Objects.requireNonNull(entry5);
                        Map.Entry entry6 = entry5;
                        Map.Entry entry7 = entryArr2[i10];
                        Objects.requireNonNull(entry7);
                        Map.Entry entry8 = entry7;
                        Object key3 = entry8.getKey();
                        Object value3 = entry8.getValue();
                        v0.a(key3, value3);
                        objArr[i10] = key3;
                        objArr2[i10] = value3;
                        if (s1Var.compare(key2, key3) != 0) {
                            i10++;
                            key2 = key3;
                        } else {
                            throw new IllegalArgumentException("Multiple entries with same key: " + String.valueOf(entry6) + " and " + String.valueOf(entry8));
                        }
                    }
                }
                return new l1(new v1(e1.i(objArr, length), s1Var), e1.i(objArr2, length), null);
            }
            Map.Entry entry9 = entryArr2[0];
            Objects.requireNonNull(entry9);
            Map.Entry entry10 = entry9;
            return new l1(new v1(e1.l(entry10.getKey()), s1Var), e1.l(entry10.getValue()), null);
        }
        return f(s1Var);
    }

    static l1 f(Comparator comparator) {
        if (q1.f14052d.equals(comparator)) {
            return f14006r;
        }
        v1 x10 = m1.x(comparator);
        int i10 = e1.f13950i;
        return new l1(x10, t1.f14078q, null);
    }

    private final l1 k(int i10, int i11) {
        if (i10 == 0) {
            if (i11 != this.f14009o.size()) {
                i10 = 0;
            } else {
                return this;
            }
        }
        if (i10 == i11) {
            return f(this.f14008i.f14020i);
        }
        return new l1(this.f14008i.D(i10, i11), this.f14009o.subList(i10, i11), null);
    }

    @Override // com.google.android.gms.internal.fido.f1
    public final z0 a() {
        return this.f14009o;
    }

    @Override // com.google.android.gms.internal.fido.f1
    final h1 b() {
        if (isEmpty()) {
            return u1.f14088t;
        }
        return new k1(this);
    }

    @Override // java.util.NavigableMap
    public final Map.Entry ceilingEntry(Object obj) {
        return tailMap(obj, true).firstEntry();
    }

    @Override // java.util.NavigableMap
    public final Object ceilingKey(Object obj) {
        return o1.a(ceilingEntry(obj));
    }

    @Override // java.util.SortedMap
    public final Comparator comparator() {
        return this.f14008i.f14020i;
    }

    @Override // java.util.NavigableMap
    public final /* synthetic */ NavigableSet descendingKeySet() {
        return this.f14008i.descendingSet();
    }

    @Override // java.util.NavigableMap
    public final /* bridge */ /* synthetic */ NavigableMap descendingMap() {
        s1 w0Var;
        l1 l1Var = this.f14010p;
        if (l1Var == null) {
            if (isEmpty()) {
                Comparator comparator = this.f14008i.f14020i;
                if (comparator instanceof s1) {
                    w0Var = (s1) comparator;
                } else {
                    w0Var = new w0(comparator);
                }
                return f(w0Var.a());
            }
            return new l1((v1) this.f14008i.descendingSet(), this.f14009o.g(), this);
        }
        return l1Var;
    }

    @Override // java.util.Map, java.util.SortedMap
    public final /* bridge */ /* synthetic */ Set entrySet() {
        return c();
    }

    @Override // java.util.NavigableMap
    public final Map.Entry firstEntry() {
        if (isEmpty()) {
            return null;
        }
        return (Map.Entry) c().j().get(0);
    }

    @Override // java.util.SortedMap
    public final Object firstKey() {
        return this.f14008i.first();
    }

    @Override // java.util.NavigableMap
    public final Map.Entry floorEntry(Object obj) {
        return headMap(obj, true).lastEntry();
    }

    @Override // java.util.NavigableMap
    public final Object floorKey(Object obj) {
        return o1.a(floorEntry(obj));
    }

    @Override // java.util.NavigableMap
    /* renamed from: g */
    public final l1 headMap(Object obj, boolean z10) {
        obj.getClass();
        return k(0, this.f14008i.B(obj, z10));
    }

    /* JADX WARN: Code restructure failed: missing block: B:6:0x000f, code lost:
        if (r4 < 0) goto L3;
     */
    @Override // com.google.android.gms.internal.fido.f1, java.util.Map
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object get(java.lang.Object r4) {
        /*
            r3 = this;
            com.google.android.gms.internal.fido.v1 r0 = r3.f14008i
            r1 = -1
            if (r4 != 0) goto L7
        L5:
            r4 = r1
            goto L12
        L7:
            com.google.android.gms.internal.fido.e1 r2 = r0.f14097p     // Catch: java.lang.ClassCastException -> L5
            java.util.Comparator r0 = r0.f14020i     // Catch: java.lang.ClassCastException -> L5
            int r4 = java.util.Collections.binarySearch(r2, r4, r0)     // Catch: java.lang.ClassCastException -> L5
            if (r4 >= 0) goto L12
            goto L5
        L12:
            if (r4 != r1) goto L16
            r4 = 0
            return r4
        L16:
            com.google.android.gms.internal.fido.e1 r0 = r3.f14009o
            java.lang.Object r4 = r0.get(r4)
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.fido.l1.get(java.lang.Object):java.lang.Object");
    }

    @Override // java.util.NavigableMap
    /* renamed from: h */
    public final l1 subMap(Object obj, boolean z10, Object obj2, boolean z11) {
        obj.getClass();
        obj2.getClass();
        if (this.f14008i.f14020i.compare(obj, obj2) <= 0) {
            return headMap(obj2, z11).tailMap(obj, z10);
        }
        throw new IllegalArgumentException(m0.a("expected fromKey <= toKey but %s > %s", obj, obj2));
    }

    @Override // java.util.NavigableMap, java.util.SortedMap
    public final /* synthetic */ SortedMap headMap(Object obj) {
        return headMap(obj, false);
    }

    @Override // java.util.NavigableMap
    public final Map.Entry higherEntry(Object obj) {
        return tailMap(obj, false).firstEntry();
    }

    @Override // java.util.NavigableMap
    public final Object higherKey(Object obj) {
        return o1.a(higherEntry(obj));
    }

    @Override // java.util.NavigableMap
    /* renamed from: i */
    public final l1 tailMap(Object obj, boolean z10) {
        obj.getClass();
        return k(this.f14008i.C(obj, z10), this.f14009o.size());
    }

    @Override // java.util.Map, java.util.SortedMap
    public final /* synthetic */ Set keySet() {
        return this.f14008i;
    }

    @Override // java.util.NavigableMap
    public final Map.Entry lastEntry() {
        if (isEmpty()) {
            return null;
        }
        return (Map.Entry) c().j().get(this.f14009o.size() - 1);
    }

    @Override // java.util.SortedMap
    public final Object lastKey() {
        return this.f14008i.last();
    }

    @Override // java.util.NavigableMap
    public final Map.Entry lowerEntry(Object obj) {
        return headMap(obj, false).lastEntry();
    }

    @Override // java.util.NavigableMap
    public final Object lowerKey(Object obj) {
        return o1.a(lowerEntry(obj));
    }

    @Override // java.util.NavigableMap
    public final /* synthetic */ NavigableSet navigableKeySet() {
        return this.f14008i;
    }

    @Override // java.util.NavigableMap
    public final Map.Entry pollFirstEntry() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.NavigableMap
    public final Map.Entry pollLastEntry() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public final int size() {
        return this.f14009o.size();
    }

    @Override // java.util.NavigableMap, java.util.SortedMap
    public final /* bridge */ /* synthetic */ SortedMap subMap(Object obj, Object obj2) {
        return subMap(obj, true, obj2, false);
    }

    @Override // java.util.NavigableMap, java.util.SortedMap
    public final /* synthetic */ SortedMap tailMap(Object obj) {
        return tailMap(obj, true);
    }

    @Override // java.util.Map, java.util.SortedMap
    public final /* synthetic */ Collection values() {
        return this.f14009o;
    }
}
