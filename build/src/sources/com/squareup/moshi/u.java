package com.squareup.moshi;

import java.io.Serializable;
import java.util.AbstractMap;
import java.util.AbstractSet;
import java.util.Arrays;
import java.util.Comparator;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u extends AbstractMap implements Serializable {

    /* renamed from: t  reason: collision with root package name */
    private static final Comparator f18112t = new a();

    /* renamed from: d  reason: collision with root package name */
    final Comparator f18113d;

    /* renamed from: e  reason: collision with root package name */
    g[] f18114e;

    /* renamed from: i  reason: collision with root package name */
    final g f18115i;

    /* renamed from: o  reason: collision with root package name */
    int f18116o;

    /* renamed from: p  reason: collision with root package name */
    int f18117p;

    /* renamed from: q  reason: collision with root package name */
    int f18118q;

    /* renamed from: r  reason: collision with root package name */
    private d f18119r;

    /* renamed from: s  reason: collision with root package name */
    private e f18120s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(Comparable comparable, Comparable comparable2) {
            return comparable.compareTo(comparable2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private g f18121a;

        /* renamed from: b  reason: collision with root package name */
        private int f18122b;

        /* renamed from: c  reason: collision with root package name */
        private int f18123c;

        /* renamed from: d  reason: collision with root package name */
        private int f18124d;

        b() {
        }

        void a(g gVar) {
            gVar.f18136i = null;
            gVar.f18134d = null;
            gVar.f18135e = null;
            gVar.f18142t = 1;
            int i10 = this.f18122b;
            if (i10 > 0) {
                int i11 = this.f18124d;
                if ((i11 & 1) == 0) {
                    this.f18124d = i11 + 1;
                    this.f18122b = i10 - 1;
                    this.f18123c++;
                }
            }
            gVar.f18134d = this.f18121a;
            this.f18121a = gVar;
            int i12 = this.f18124d;
            int i13 = i12 + 1;
            this.f18124d = i13;
            int i14 = this.f18122b;
            if (i14 > 0 && (i13 & 1) == 0) {
                this.f18124d = i12 + 2;
                this.f18122b = i14 - 1;
                this.f18123c++;
            }
            int i15 = 4;
            while (true) {
                int i16 = i15 - 1;
                if ((this.f18124d & i16) == i16) {
                    int i17 = this.f18123c;
                    if (i17 == 0) {
                        g gVar2 = this.f18121a;
                        g gVar3 = gVar2.f18134d;
                        g gVar4 = gVar3.f18134d;
                        gVar3.f18134d = gVar4.f18134d;
                        this.f18121a = gVar3;
                        gVar3.f18135e = gVar4;
                        gVar3.f18136i = gVar2;
                        gVar3.f18142t = gVar2.f18142t + 1;
                        gVar4.f18134d = gVar3;
                        gVar2.f18134d = gVar3;
                    } else if (i17 == 1) {
                        g gVar5 = this.f18121a;
                        g gVar6 = gVar5.f18134d;
                        this.f18121a = gVar6;
                        gVar6.f18136i = gVar5;
                        gVar6.f18142t = gVar5.f18142t + 1;
                        gVar5.f18134d = gVar6;
                        this.f18123c = 0;
                    } else if (i17 == 2) {
                        this.f18123c = 0;
                    }
                    i15 *= 2;
                } else {
                    return;
                }
            }
        }

        void b(int i10) {
            this.f18122b = ((Integer.highestOneBit(i10) * 2) - 1) - i10;
            this.f18124d = 0;
            this.f18123c = 0;
            this.f18121a = null;
        }

        g c() {
            g gVar = this.f18121a;
            if (gVar.f18134d == null) {
                return gVar;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private g f18125a;

        c() {
        }

        public g a() {
            g gVar = this.f18125a;
            if (gVar == null) {
                return null;
            }
            g gVar2 = gVar.f18134d;
            gVar.f18134d = null;
            g gVar3 = gVar.f18136i;
            while (true) {
                g gVar4 = gVar2;
                gVar2 = gVar3;
                if (gVar2 != null) {
                    gVar2.f18134d = gVar4;
                    gVar3 = gVar2.f18135e;
                } else {
                    this.f18125a = gVar4;
                    return gVar;
                }
            }
        }

        void b(g gVar) {
            g gVar2 = null;
            while (gVar != null) {
                gVar.f18134d = gVar2;
                gVar2 = gVar;
                gVar = gVar.f18135e;
            }
            this.f18125a = gVar2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    final class d extends AbstractSet {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a extends f {
            a() {
                super();
            }

            @Override // java.util.Iterator
            /* renamed from: b */
            public Map.Entry next() {
                return a();
            }
        }

        d() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            u.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            if ((obj instanceof Map.Entry) && u.this.e((Map.Entry) obj) != null) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return new a();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            g e10;
            if (!(obj instanceof Map.Entry) || (e10 = u.this.e((Map.Entry) obj)) == null) {
                return false;
            }
            u.this.h(e10, true);
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return u.this.f18116o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    final class e extends AbstractSet {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a extends f {
            a() {
                super();
            }

            @Override // java.util.Iterator
            public Object next() {
                return a().f18139q;
            }
        }

        e() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            u.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            return u.this.containsKey(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return new a();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            if (u.this.i(obj) != null) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return u.this.f18116o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public abstract class f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        g f18130d;

        /* renamed from: e  reason: collision with root package name */
        g f18131e = null;

        /* renamed from: i  reason: collision with root package name */
        int f18132i;

        f() {
            this.f18130d = u.this.f18115i.f18137o;
            this.f18132i = u.this.f18117p;
        }

        final g a() {
            g gVar = this.f18130d;
            u uVar = u.this;
            if (gVar != uVar.f18115i) {
                if (uVar.f18117p == this.f18132i) {
                    this.f18130d = gVar.f18137o;
                    this.f18131e = gVar;
                    return gVar;
                }
                throw new ConcurrentModificationException();
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public final boolean hasNext() {
            if (this.f18130d != u.this.f18115i) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public final void remove() {
            g gVar = this.f18131e;
            if (gVar != null) {
                u.this.h(gVar, true);
                this.f18131e = null;
                this.f18132i = u.this.f18117p;
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u() {
        this(null);
    }

    private void a() {
        g[] b10 = b(this.f18114e);
        this.f18114e = b10;
        this.f18118q = (b10.length / 2) + (b10.length / 4);
    }

    static g[] b(g[] gVarArr) {
        g gVar;
        int length = gVarArr.length;
        g[] gVarArr2 = new g[length * 2];
        c cVar = new c();
        b bVar = new b();
        b bVar2 = new b();
        for (int i10 = 0; i10 < length; i10++) {
            g gVar2 = gVarArr[i10];
            if (gVar2 != null) {
                cVar.b(gVar2);
                int i11 = 0;
                int i12 = 0;
                while (true) {
                    g a10 = cVar.a();
                    if (a10 == null) {
                        break;
                    } else if ((a10.f18140r & length) == 0) {
                        i11++;
                    } else {
                        i12++;
                    }
                }
                bVar.b(i11);
                bVar2.b(i12);
                cVar.b(gVar2);
                while (true) {
                    g a11 = cVar.a();
                    if (a11 == null) {
                        break;
                    } else if ((a11.f18140r & length) == 0) {
                        bVar.a(a11);
                    } else {
                        bVar2.a(a11);
                    }
                }
                g gVar3 = null;
                if (i11 > 0) {
                    gVar = bVar.c();
                } else {
                    gVar = null;
                }
                gVarArr2[i10] = gVar;
                int i13 = i10 + length;
                if (i12 > 0) {
                    gVar3 = bVar2.c();
                }
                gVarArr2[i13] = gVar3;
            }
        }
        return gVarArr2;
    }

    private boolean c(Object obj, Object obj2) {
        if (obj != obj2) {
            if (obj == null || !obj.equals(obj2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    private void g(g gVar, boolean z10) {
        int i10;
        int i11;
        int i12;
        int i13;
        while (gVar != null) {
            g gVar2 = gVar.f18135e;
            g gVar3 = gVar.f18136i;
            int i14 = 0;
            if (gVar2 != null) {
                i10 = gVar2.f18142t;
            } else {
                i10 = 0;
            }
            if (gVar3 != null) {
                i11 = gVar3.f18142t;
            } else {
                i11 = 0;
            }
            int i15 = i10 - i11;
            if (i15 == -2) {
                g gVar4 = gVar3.f18135e;
                g gVar5 = gVar3.f18136i;
                if (gVar5 != null) {
                    i13 = gVar5.f18142t;
                } else {
                    i13 = 0;
                }
                if (gVar4 != null) {
                    i14 = gVar4.f18142t;
                }
                int i16 = i14 - i13;
                if (i16 != -1 && (i16 != 0 || z10)) {
                    l(gVar3);
                }
                k(gVar);
                if (z10) {
                    return;
                }
            } else if (i15 == 2) {
                g gVar6 = gVar2.f18135e;
                g gVar7 = gVar2.f18136i;
                if (gVar7 != null) {
                    i12 = gVar7.f18142t;
                } else {
                    i12 = 0;
                }
                if (gVar6 != null) {
                    i14 = gVar6.f18142t;
                }
                int i17 = i14 - i12;
                if (i17 != 1 && (i17 != 0 || z10)) {
                    k(gVar2);
                }
                l(gVar);
                if (z10) {
                    return;
                }
            } else if (i15 == 0) {
                gVar.f18142t = i10 + 1;
                if (z10) {
                    return;
                }
            } else {
                gVar.f18142t = Math.max(i10, i11) + 1;
                if (!z10) {
                    return;
                }
            }
            gVar = gVar.f18134d;
        }
    }

    private void j(g gVar, g gVar2) {
        g gVar3 = gVar.f18134d;
        gVar.f18134d = null;
        if (gVar2 != null) {
            gVar2.f18134d = gVar3;
        }
        if (gVar3 != null) {
            if (gVar3.f18135e == gVar) {
                gVar3.f18135e = gVar2;
                return;
            } else {
                gVar3.f18136i = gVar2;
                return;
            }
        }
        int i10 = gVar.f18140r;
        g[] gVarArr = this.f18114e;
        gVarArr[i10 & (gVarArr.length - 1)] = gVar2;
    }

    private void k(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f18135e;
        g gVar3 = gVar.f18136i;
        g gVar4 = gVar3.f18135e;
        g gVar5 = gVar3.f18136i;
        gVar.f18136i = gVar4;
        if (gVar4 != null) {
            gVar4.f18134d = gVar;
        }
        j(gVar, gVar3);
        gVar3.f18135e = gVar;
        gVar.f18134d = gVar3;
        int i12 = 0;
        if (gVar2 != null) {
            i10 = gVar2.f18142t;
        } else {
            i10 = 0;
        }
        if (gVar4 != null) {
            i11 = gVar4.f18142t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18142t = max;
        if (gVar5 != null) {
            i12 = gVar5.f18142t;
        }
        gVar3.f18142t = Math.max(max, i12) + 1;
    }

    private void l(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f18135e;
        g gVar3 = gVar.f18136i;
        g gVar4 = gVar2.f18135e;
        g gVar5 = gVar2.f18136i;
        gVar.f18135e = gVar5;
        if (gVar5 != null) {
            gVar5.f18134d = gVar;
        }
        j(gVar, gVar2);
        gVar2.f18136i = gVar;
        gVar.f18134d = gVar2;
        int i12 = 0;
        if (gVar3 != null) {
            i10 = gVar3.f18142t;
        } else {
            i10 = 0;
        }
        if (gVar5 != null) {
            i11 = gVar5.f18142t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18142t = max;
        if (gVar4 != null) {
            i12 = gVar4.f18142t;
        }
        gVar2.f18142t = Math.max(max, i12) + 1;
    }

    private static int m(int i10) {
        int i11 = i10 ^ ((i10 >>> 20) ^ (i10 >>> 12));
        return (i11 >>> 4) ^ ((i11 >>> 7) ^ i11);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        Arrays.fill(this.f18114e, (Object) null);
        this.f18116o = 0;
        this.f18117p++;
        g gVar = this.f18115i;
        g gVar2 = gVar.f18137o;
        while (gVar2 != gVar) {
            g gVar3 = gVar2.f18137o;
            gVar2.f18138p = null;
            gVar2.f18137o = null;
            gVar2 = gVar3;
        }
        gVar.f18138p = gVar;
        gVar.f18137o = gVar;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean containsKey(Object obj) {
        if (f(obj) != null) {
            return true;
        }
        return false;
    }

    g d(Object obj, boolean z10) {
        int i10;
        g gVar;
        Comparable comparable;
        g gVar2;
        Comparator comparator = this.f18113d;
        g[] gVarArr = this.f18114e;
        int m10 = m(obj.hashCode());
        int length = (gVarArr.length - 1) & m10;
        g gVar3 = gVarArr[length];
        if (gVar3 != null) {
            if (comparator == f18112t) {
                comparable = (Comparable) obj;
            } else {
                comparable = null;
            }
            while (true) {
                if (comparable != null) {
                    i10 = comparable.compareTo(gVar3.f18139q);
                } else {
                    i10 = comparator.compare(obj, gVar3.f18139q);
                }
                if (i10 == 0) {
                    return gVar3;
                }
                if (i10 < 0) {
                    gVar2 = gVar3.f18135e;
                } else {
                    gVar2 = gVar3.f18136i;
                }
                if (gVar2 == null) {
                    break;
                }
                gVar3 = gVar2;
            }
        } else {
            i10 = 0;
        }
        int i11 = i10;
        if (!z10) {
            return null;
        }
        g gVar4 = this.f18115i;
        if (gVar3 == null) {
            if (comparator != f18112t || (obj instanceof Comparable)) {
                gVar = new g(gVar3, obj, m10, gVar4, gVar4.f18138p);
                gVarArr[length] = gVar;
            } else {
                throw new ClassCastException(obj.getClass().getName() + " is not Comparable");
            }
        } else {
            g gVar5 = gVar3;
            gVar = new g(gVar5, obj, m10, gVar4, gVar4.f18138p);
            if (i11 < 0) {
                gVar5.f18135e = gVar;
            } else {
                gVar5.f18136i = gVar;
            }
            g(gVar5, true);
        }
        int i12 = this.f18116o;
        this.f18116o = i12 + 1;
        if (i12 > this.f18118q) {
            a();
        }
        this.f18117p++;
        return gVar;
    }

    g e(Map.Entry entry) {
        g f10 = f(entry.getKey());
        if (f10 != null && c(f10.f18141s, entry.getValue())) {
            return f10;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        d dVar = this.f18119r;
        if (dVar != null) {
            return dVar;
        }
        d dVar2 = new d();
        this.f18119r = dVar2;
        return dVar2;
    }

    g f(Object obj) {
        if (obj != null) {
            try {
                return d(obj, false);
            } catch (ClassCastException unused) {
            }
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object get(Object obj) {
        g f10 = f(obj);
        if (f10 != null) {
            return f10.f18141s;
        }
        return null;
    }

    void h(g gVar, boolean z10) {
        g a10;
        int i10;
        if (z10) {
            g gVar2 = gVar.f18138p;
            gVar2.f18137o = gVar.f18137o;
            gVar.f18137o.f18138p = gVar2;
            gVar.f18138p = null;
            gVar.f18137o = null;
        }
        g gVar3 = gVar.f18135e;
        g gVar4 = gVar.f18136i;
        g gVar5 = gVar.f18134d;
        int i11 = 0;
        if (gVar3 != null && gVar4 != null) {
            if (gVar3.f18142t > gVar4.f18142t) {
                a10 = gVar3.b();
            } else {
                a10 = gVar4.a();
            }
            h(a10, false);
            g gVar6 = gVar.f18135e;
            if (gVar6 != null) {
                i10 = gVar6.f18142t;
                a10.f18135e = gVar6;
                gVar6.f18134d = a10;
                gVar.f18135e = null;
            } else {
                i10 = 0;
            }
            g gVar7 = gVar.f18136i;
            if (gVar7 != null) {
                i11 = gVar7.f18142t;
                a10.f18136i = gVar7;
                gVar7.f18134d = a10;
                gVar.f18136i = null;
            }
            a10.f18142t = Math.max(i10, i11) + 1;
            j(gVar, a10);
            return;
        }
        if (gVar3 != null) {
            j(gVar, gVar3);
            gVar.f18135e = null;
        } else if (gVar4 != null) {
            j(gVar, gVar4);
            gVar.f18136i = null;
        } else {
            j(gVar, null);
        }
        g(gVar5, false);
        this.f18116o--;
        this.f18117p++;
    }

    g i(Object obj) {
        g f10 = f(obj);
        if (f10 != null) {
            h(f10, true);
        }
        return f10;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set keySet() {
        e eVar = this.f18120s;
        if (eVar != null) {
            return eVar;
        }
        e eVar2 = new e();
        this.f18120s = eVar2;
        return eVar2;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object put(Object obj, Object obj2) {
        if (obj != null) {
            g d10 = d(obj, true);
            Object obj3 = d10.f18141s;
            d10.f18141s = obj2;
            return obj3;
        }
        throw new NullPointerException("key == null");
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        g i10 = i(obj);
        if (i10 != null) {
            return i10.f18141s;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f18116o;
    }

    u(Comparator comparator) {
        this.f18116o = 0;
        this.f18117p = 0;
        this.f18113d = comparator == null ? f18112t : comparator;
        this.f18115i = new g();
        g[] gVarArr = new g[16];
        this.f18114e = gVarArr;
        this.f18118q = (gVarArr.length / 2) + (gVarArr.length / 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        g f18134d;

        /* renamed from: e  reason: collision with root package name */
        g f18135e;

        /* renamed from: i  reason: collision with root package name */
        g f18136i;

        /* renamed from: o  reason: collision with root package name */
        g f18137o;

        /* renamed from: p  reason: collision with root package name */
        g f18138p;

        /* renamed from: q  reason: collision with root package name */
        final Object f18139q;

        /* renamed from: r  reason: collision with root package name */
        final int f18140r;

        /* renamed from: s  reason: collision with root package name */
        Object f18141s;

        /* renamed from: t  reason: collision with root package name */
        int f18142t;

        g() {
            this.f18139q = null;
            this.f18140r = -1;
            this.f18138p = this;
            this.f18137o = this;
        }

        public g a() {
            g gVar = this;
            for (g gVar2 = this.f18135e; gVar2 != null; gVar2 = gVar2.f18135e) {
                gVar = gVar2;
            }
            return gVar;
        }

        public g b() {
            g gVar = this;
            for (g gVar2 = this.f18136i; gVar2 != null; gVar2 = gVar2.f18136i) {
                gVar = gVar2;
            }
            return gVar;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                Object obj2 = this.f18139q;
                if (obj2 != null ? obj2.equals(entry.getKey()) : entry.getKey() == null) {
                    Object obj3 = this.f18141s;
                    if (obj3 == null) {
                        if (entry.getValue() == null) {
                            return true;
                        }
                    } else if (obj3.equals(entry.getValue())) {
                        return true;
                    }
                }
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f18139q;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f18141s;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f18139q;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            Object obj2 = this.f18141s;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            Object obj2 = this.f18141s;
            this.f18141s = obj;
            return obj2;
        }

        public String toString() {
            return this.f18139q + "=" + this.f18141s;
        }

        g(g gVar, Object obj, int i10, g gVar2, g gVar3) {
            this.f18134d = gVar;
            this.f18139q = obj;
            this.f18140r = i10;
            this.f18142t = 1;
            this.f18137o = gVar2;
            this.f18138p = gVar3;
            gVar3.f18137o = this;
            gVar2.f18138p = this;
        }
    }
}
