package com.google.android.gms.internal.play_billing;

import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;
import java.util.TreeMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t3 extends AbstractMap {

    /* renamed from: d  reason: collision with root package name */
    private final int f15389d;

    /* renamed from: e  reason: collision with root package name */
    private List f15390e = Collections.EMPTY_LIST;

    /* renamed from: i  reason: collision with root package name */
    private Map f15391i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15392o;

    /* renamed from: p  reason: collision with root package name */
    private volatile r3 f15393p;

    /* renamed from: q  reason: collision with root package name */
    private Map f15394q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t3(int i10, s3 s3Var) {
        this.f15389d = i10;
        Map map = Collections.EMPTY_MAP;
        this.f15391i = map;
        this.f15394q = map;
    }

    private final int k(Comparable comparable) {
        int size = this.f15390e.size();
        int i10 = size - 1;
        int i11 = 0;
        if (i10 >= 0) {
            int compareTo = comparable.compareTo(((n3) this.f15390e.get(i10)).a());
            if (compareTo > 0) {
                return -(size + 1);
            }
            if (compareTo == 0) {
                return i10;
            }
        }
        while (i11 <= i10) {
            int i12 = (i11 + i10) / 2;
            int compareTo2 = comparable.compareTo(((n3) this.f15390e.get(i12)).a());
            if (compareTo2 < 0) {
                i10 = i12 - 1;
            } else if (compareTo2 > 0) {
                i11 = i12 + 1;
            } else {
                return i12;
            }
        }
        return -(i11 + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object l(int i10) {
        n();
        Object value = ((n3) this.f15390e.remove(i10)).getValue();
        if (!this.f15391i.isEmpty()) {
            Iterator it = m().entrySet().iterator();
            List list = this.f15390e;
            Map.Entry entry = (Map.Entry) it.next();
            list.add(new n3(this, (Comparable) entry.getKey(), entry.getValue()));
            it.remove();
        }
        return value;
    }

    private final SortedMap m() {
        n();
        if (this.f15391i.isEmpty() && !(this.f15391i instanceof TreeMap)) {
            TreeMap treeMap = new TreeMap();
            this.f15391i = treeMap;
            this.f15394q = treeMap.descendingMap();
        }
        return (SortedMap) this.f15391i;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void n() {
        if (!this.f15392o) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    public void a() {
        Map unmodifiableMap;
        Map unmodifiableMap2;
        if (!this.f15392o) {
            if (this.f15391i.isEmpty()) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(this.f15391i);
            }
            this.f15391i = unmodifiableMap;
            if (this.f15394q.isEmpty()) {
                unmodifiableMap2 = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap2 = Collections.unmodifiableMap(this.f15394q);
            }
            this.f15394q = unmodifiableMap2;
            this.f15392o = true;
        }
    }

    public final int b() {
        return this.f15390e.size();
    }

    public final Iterable c() {
        if (this.f15391i.isEmpty()) {
            return m3.a();
        }
        return this.f15391i.entrySet();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        n();
        if (!this.f15390e.isEmpty()) {
            this.f15390e.clear();
        }
        if (!this.f15391i.isEmpty()) {
            this.f15391i.clear();
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        Comparable comparable = (Comparable) obj;
        if (k(comparable) < 0 && !this.f15391i.containsKey(comparable)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    /* renamed from: e */
    public final Object put(Comparable comparable, Object obj) {
        n();
        int k10 = k(comparable);
        if (k10 >= 0) {
            return ((n3) this.f15390e.get(k10)).setValue(obj);
        }
        n();
        if (this.f15390e.isEmpty() && !(this.f15390e instanceof ArrayList)) {
            this.f15390e = new ArrayList(this.f15389d);
        }
        int i10 = -(k10 + 1);
        if (i10 >= this.f15389d) {
            return m().put(comparable, obj);
        }
        int size = this.f15390e.size();
        int i11 = this.f15389d;
        if (size == i11) {
            n3 n3Var = (n3) this.f15390e.remove(i11 - 1);
            m().put(n3Var.a(), n3Var.getValue());
        }
        this.f15390e.add(i10, new n3(this, comparable, obj));
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        if (this.f15393p == null) {
            this.f15393p = new r3(this, null);
        }
        return this.f15393p;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof t3)) {
            return super.equals(obj);
        }
        t3 t3Var = (t3) obj;
        int size = size();
        if (size != t3Var.size()) {
            return false;
        }
        int b10 = b();
        if (b10 == t3Var.b()) {
            for (int i10 = 0; i10 < b10; i10++) {
                if (!g(i10).equals(t3Var.g(i10))) {
                    return false;
                }
            }
            if (b10 == size) {
                return true;
            }
            return this.f15391i.equals(t3Var.f15391i);
        }
        return entrySet().equals(t3Var.entrySet());
    }

    public final Map.Entry g(int i10) {
        return (Map.Entry) this.f15390e.get(i10);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object get(Object obj) {
        Comparable comparable = (Comparable) obj;
        int k10 = k(comparable);
        if (k10 >= 0) {
            return ((n3) this.f15390e.get(k10)).getValue();
        }
        return this.f15391i.get(comparable);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int hashCode() {
        int b10 = b();
        int i10 = 0;
        for (int i11 = 0; i11 < b10; i11++) {
            i10 += ((n3) this.f15390e.get(i11)).hashCode();
        }
        if (this.f15391i.size() > 0) {
            return i10 + this.f15391i.hashCode();
        }
        return i10;
    }

    public final boolean j() {
        return this.f15392o;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object remove(Object obj) {
        n();
        Comparable comparable = (Comparable) obj;
        int k10 = k(comparable);
        if (k10 >= 0) {
            return l(k10);
        }
        if (this.f15391i.isEmpty()) {
            return null;
        }
        return this.f15391i.remove(comparable);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        return this.f15390e.size() + this.f15391i.size();
    }
}
