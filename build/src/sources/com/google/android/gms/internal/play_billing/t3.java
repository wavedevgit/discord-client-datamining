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
    private final int f14483d;

    /* renamed from: e  reason: collision with root package name */
    private List f14484e = Collections.EMPTY_LIST;

    /* renamed from: i  reason: collision with root package name */
    private Map f14485i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14486o;

    /* renamed from: p  reason: collision with root package name */
    private volatile r3 f14487p;

    /* renamed from: q  reason: collision with root package name */
    private Map f14488q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t3(int i10, s3 s3Var) {
        this.f14483d = i10;
        Map map = Collections.EMPTY_MAP;
        this.f14485i = map;
        this.f14488q = map;
    }

    private final int k(Comparable comparable) {
        int size = this.f14484e.size();
        int i10 = size - 1;
        int i11 = 0;
        if (i10 >= 0) {
            int compareTo = comparable.compareTo(((n3) this.f14484e.get(i10)).a());
            if (compareTo > 0) {
                return -(size + 1);
            }
            if (compareTo == 0) {
                return i10;
            }
        }
        while (i11 <= i10) {
            int i12 = (i11 + i10) / 2;
            int compareTo2 = comparable.compareTo(((n3) this.f14484e.get(i12)).a());
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
        Object value = ((n3) this.f14484e.remove(i10)).getValue();
        if (!this.f14485i.isEmpty()) {
            Iterator it = m().entrySet().iterator();
            List list = this.f14484e;
            Map.Entry entry = (Map.Entry) it.next();
            list.add(new n3(this, (Comparable) entry.getKey(), entry.getValue()));
            it.remove();
        }
        return value;
    }

    private final SortedMap m() {
        n();
        if (this.f14485i.isEmpty() && !(this.f14485i instanceof TreeMap)) {
            TreeMap treeMap = new TreeMap();
            this.f14485i = treeMap;
            this.f14488q = treeMap.descendingMap();
        }
        return (SortedMap) this.f14485i;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void n() {
        if (!this.f14486o) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    public void a() {
        Map unmodifiableMap;
        Map unmodifiableMap2;
        if (!this.f14486o) {
            if (this.f14485i.isEmpty()) {
                unmodifiableMap = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap = Collections.unmodifiableMap(this.f14485i);
            }
            this.f14485i = unmodifiableMap;
            if (this.f14488q.isEmpty()) {
                unmodifiableMap2 = Collections.EMPTY_MAP;
            } else {
                unmodifiableMap2 = Collections.unmodifiableMap(this.f14488q);
            }
            this.f14488q = unmodifiableMap2;
            this.f14486o = true;
        }
    }

    public final int b() {
        return this.f14484e.size();
    }

    public final Iterable c() {
        if (this.f14485i.isEmpty()) {
            return m3.a();
        }
        return this.f14485i.entrySet();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        n();
        if (!this.f14484e.isEmpty()) {
            this.f14484e.clear();
        }
        if (!this.f14485i.isEmpty()) {
            this.f14485i.clear();
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        Comparable comparable = (Comparable) obj;
        if (k(comparable) < 0 && !this.f14485i.containsKey(comparable)) {
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
            return ((n3) this.f14484e.get(k10)).setValue(obj);
        }
        n();
        if (this.f14484e.isEmpty() && !(this.f14484e instanceof ArrayList)) {
            this.f14484e = new ArrayList(this.f14483d);
        }
        int i10 = -(k10 + 1);
        if (i10 >= this.f14483d) {
            return m().put(comparable, obj);
        }
        int size = this.f14484e.size();
        int i11 = this.f14483d;
        if (size == i11) {
            n3 n3Var = (n3) this.f14484e.remove(i11 - 1);
            m().put(n3Var.a(), n3Var.getValue());
        }
        this.f14484e.add(i10, new n3(this, comparable, obj));
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        if (this.f14487p == null) {
            this.f14487p = new r3(this, null);
        }
        return this.f14487p;
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
            return this.f14485i.equals(t3Var.f14485i);
        }
        return entrySet().equals(t3Var.entrySet());
    }

    public final Map.Entry g(int i10) {
        return (Map.Entry) this.f14484e.get(i10);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object get(Object obj) {
        Comparable comparable = (Comparable) obj;
        int k10 = k(comparable);
        if (k10 >= 0) {
            return ((n3) this.f14484e.get(k10)).getValue();
        }
        return this.f14485i.get(comparable);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int hashCode() {
        int b10 = b();
        int i10 = 0;
        for (int i11 = 0; i11 < b10; i11++) {
            i10 += ((n3) this.f14484e.get(i11)).hashCode();
        }
        if (this.f14485i.size() > 0) {
            return i10 + this.f14485i.hashCode();
        }
        return i10;
    }

    public final boolean j() {
        return this.f14486o;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object remove(Object obj) {
        n();
        Comparable comparable = (Comparable) obj;
        int k10 = k(comparable);
        if (k10 >= 0) {
            return l(k10);
        }
        if (this.f14485i.isEmpty()) {
            return null;
        }
        return this.f14485i.remove(comparable);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        return this.f14484e.size() + this.f14485i.size();
    }
}
