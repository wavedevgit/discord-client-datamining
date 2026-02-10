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
    private static final Comparator f18861t = new a();

    /* renamed from: d  reason: collision with root package name */
    final Comparator f18862d;

    /* renamed from: e  reason: collision with root package name */
    g[] f18863e;

    /* renamed from: i  reason: collision with root package name */
    final g f18864i;

    /* renamed from: o  reason: collision with root package name */
    int f18865o;

    /* renamed from: p  reason: collision with root package name */
    int f18866p;

    /* renamed from: q  reason: collision with root package name */
    int f18867q;

    /* renamed from: r  reason: collision with root package name */
    private d f18868r;

    /* renamed from: s  reason: collision with root package name */
    private e f18869s;

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
        private g f18870a;

        /* renamed from: b  reason: collision with root package name */
        private int f18871b;

        /* renamed from: c  reason: collision with root package name */
        private int f18872c;

        /* renamed from: d  reason: collision with root package name */
        private int f18873d;

        b() {
        }

        void a(g gVar) {
            gVar.f18885i = null;
            gVar.f18883d = null;
            gVar.f18884e = null;
            gVar.f18891t = 1;
            int i10 = this.f18871b;
            if (i10 > 0) {
                int i11 = this.f18873d;
                if ((i11 & 1) == 0) {
                    this.f18873d = i11 + 1;
                    this.f18871b = i10 - 1;
                    this.f18872c++;
                }
            }
            gVar.f18883d = this.f18870a;
            this.f18870a = gVar;
            int i12 = this.f18873d;
            int i13 = i12 + 1;
            this.f18873d = i13;
            int i14 = this.f18871b;
            if (i14 > 0 && (i13 & 1) == 0) {
                this.f18873d = i12 + 2;
                this.f18871b = i14 - 1;
                this.f18872c++;
            }
            int i15 = 4;
            while (true) {
                int i16 = i15 - 1;
                if ((this.f18873d & i16) == i16) {
                    int i17 = this.f18872c;
                    if (i17 == 0) {
                        g gVar2 = this.f18870a;
                        g gVar3 = gVar2.f18883d;
                        g gVar4 = gVar3.f18883d;
                        gVar3.f18883d = gVar4.f18883d;
                        this.f18870a = gVar3;
                        gVar3.f18884e = gVar4;
                        gVar3.f18885i = gVar2;
                        gVar3.f18891t = gVar2.f18891t + 1;
                        gVar4.f18883d = gVar3;
                        gVar2.f18883d = gVar3;
                    } else if (i17 == 1) {
                        g gVar5 = this.f18870a;
                        g gVar6 = gVar5.f18883d;
                        this.f18870a = gVar6;
                        gVar6.f18885i = gVar5;
                        gVar6.f18891t = gVar5.f18891t + 1;
                        gVar5.f18883d = gVar6;
                        this.f18872c = 0;
                    } else if (i17 == 2) {
                        this.f18872c = 0;
                    }
                    i15 *= 2;
                } else {
                    return;
                }
            }
        }

        void b(int i10) {
            this.f18871b = ((Integer.highestOneBit(i10) * 2) - 1) - i10;
            this.f18873d = 0;
            this.f18872c = 0;
            this.f18870a = null;
        }

        g c() {
            g gVar = this.f18870a;
            if (gVar.f18883d == null) {
                return gVar;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private g f18874a;

        c() {
        }

        public g a() {
            g gVar = this.f18874a;
            if (gVar == null) {
                return null;
            }
            g gVar2 = gVar.f18883d;
            gVar.f18883d = null;
            g gVar3 = gVar.f18885i;
            while (true) {
                g gVar4 = gVar2;
                gVar2 = gVar3;
                if (gVar2 != null) {
                    gVar2.f18883d = gVar4;
                    gVar3 = gVar2.f18884e;
                } else {
                    this.f18874a = gVar4;
                    return gVar;
                }
            }
        }

        void b(g gVar) {
            g gVar2 = null;
            while (gVar != null) {
                gVar.f18883d = gVar2;
                gVar2 = gVar;
                gVar = gVar.f18884e;
            }
            this.f18874a = gVar2;
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
            return u.this.f18865o;
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
                return a().f18888q;
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
            return u.this.f18865o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public abstract class f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        g f18879d;

        /* renamed from: e  reason: collision with root package name */
        g f18880e = null;

        /* renamed from: i  reason: collision with root package name */
        int f18881i;

        f() {
            this.f18879d = u.this.f18864i.f18886o;
            this.f18881i = u.this.f18866p;
        }

        final g a() {
            g gVar = this.f18879d;
            u uVar = u.this;
            if (gVar != uVar.f18864i) {
                if (uVar.f18866p == this.f18881i) {
                    this.f18879d = gVar.f18886o;
                    this.f18880e = gVar;
                    return gVar;
                }
                throw new ConcurrentModificationException();
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public final boolean hasNext() {
            if (this.f18879d != u.this.f18864i) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public final void remove() {
            g gVar = this.f18880e;
            if (gVar != null) {
                u.this.h(gVar, true);
                this.f18880e = null;
                this.f18881i = u.this.f18866p;
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
        g[] b10 = b(this.f18863e);
        this.f18863e = b10;
        this.f18867q = (b10.length / 2) + (b10.length / 4);
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
                    } else if ((a10.f18889r & length) == 0) {
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
                    } else if ((a11.f18889r & length) == 0) {
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
            g gVar2 = gVar.f18884e;
            g gVar3 = gVar.f18885i;
            int i14 = 0;
            if (gVar2 != null) {
                i10 = gVar2.f18891t;
            } else {
                i10 = 0;
            }
            if (gVar3 != null) {
                i11 = gVar3.f18891t;
            } else {
                i11 = 0;
            }
            int i15 = i10 - i11;
            if (i15 == -2) {
                g gVar4 = gVar3.f18884e;
                g gVar5 = gVar3.f18885i;
                if (gVar5 != null) {
                    i13 = gVar5.f18891t;
                } else {
                    i13 = 0;
                }
                if (gVar4 != null) {
                    i14 = gVar4.f18891t;
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
                g gVar6 = gVar2.f18884e;
                g gVar7 = gVar2.f18885i;
                if (gVar7 != null) {
                    i12 = gVar7.f18891t;
                } else {
                    i12 = 0;
                }
                if (gVar6 != null) {
                    i14 = gVar6.f18891t;
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
                gVar.f18891t = i10 + 1;
                if (z10) {
                    return;
                }
            } else {
                gVar.f18891t = Math.max(i10, i11) + 1;
                if (!z10) {
                    return;
                }
            }
            gVar = gVar.f18883d;
        }
    }

    private void j(g gVar, g gVar2) {
        g gVar3 = gVar.f18883d;
        gVar.f18883d = null;
        if (gVar2 != null) {
            gVar2.f18883d = gVar3;
        }
        if (gVar3 != null) {
            if (gVar3.f18884e == gVar) {
                gVar3.f18884e = gVar2;
                return;
            } else {
                gVar3.f18885i = gVar2;
                return;
            }
        }
        int i10 = gVar.f18889r;
        g[] gVarArr = this.f18863e;
        gVarArr[i10 & (gVarArr.length - 1)] = gVar2;
    }

    private void k(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f18884e;
        g gVar3 = gVar.f18885i;
        g gVar4 = gVar3.f18884e;
        g gVar5 = gVar3.f18885i;
        gVar.f18885i = gVar4;
        if (gVar4 != null) {
            gVar4.f18883d = gVar;
        }
        j(gVar, gVar3);
        gVar3.f18884e = gVar;
        gVar.f18883d = gVar3;
        int i12 = 0;
        if (gVar2 != null) {
            i10 = gVar2.f18891t;
        } else {
            i10 = 0;
        }
        if (gVar4 != null) {
            i11 = gVar4.f18891t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18891t = max;
        if (gVar5 != null) {
            i12 = gVar5.f18891t;
        }
        gVar3.f18891t = Math.max(max, i12) + 1;
    }

    private void l(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f18884e;
        g gVar3 = gVar.f18885i;
        g gVar4 = gVar2.f18884e;
        g gVar5 = gVar2.f18885i;
        gVar.f18884e = gVar5;
        if (gVar5 != null) {
            gVar5.f18883d = gVar;
        }
        j(gVar, gVar2);
        gVar2.f18885i = gVar;
        gVar.f18883d = gVar2;
        int i12 = 0;
        if (gVar3 != null) {
            i10 = gVar3.f18891t;
        } else {
            i10 = 0;
        }
        if (gVar5 != null) {
            i11 = gVar5.f18891t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18891t = max;
        if (gVar4 != null) {
            i12 = gVar4.f18891t;
        }
        gVar2.f18891t = Math.max(max, i12) + 1;
    }

    private static int m(int i10) {
        int i11 = i10 ^ ((i10 >>> 20) ^ (i10 >>> 12));
        return (i11 >>> 4) ^ ((i11 >>> 7) ^ i11);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        Arrays.fill(this.f18863e, (Object) null);
        this.f18865o = 0;
        this.f18866p++;
        g gVar = this.f18864i;
        g gVar2 = gVar.f18886o;
        while (gVar2 != gVar) {
            g gVar3 = gVar2.f18886o;
            gVar2.f18887p = null;
            gVar2.f18886o = null;
            gVar2 = gVar3;
        }
        gVar.f18887p = gVar;
        gVar.f18886o = gVar;
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
        Comparator comparator = this.f18862d;
        g[] gVarArr = this.f18863e;
        int m10 = m(obj.hashCode());
        int length = (gVarArr.length - 1) & m10;
        g gVar3 = gVarArr[length];
        if (gVar3 != null) {
            if (comparator == f18861t) {
                comparable = (Comparable) obj;
            } else {
                comparable = null;
            }
            while (true) {
                if (comparable != null) {
                    i10 = comparable.compareTo(gVar3.f18888q);
                } else {
                    i10 = comparator.compare(obj, gVar3.f18888q);
                }
                if (i10 == 0) {
                    return gVar3;
                }
                if (i10 < 0) {
                    gVar2 = gVar3.f18884e;
                } else {
                    gVar2 = gVar3.f18885i;
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
        g gVar4 = this.f18864i;
        if (gVar3 == null) {
            if (comparator != f18861t || (obj instanceof Comparable)) {
                gVar = new g(gVar3, obj, m10, gVar4, gVar4.f18887p);
                gVarArr[length] = gVar;
            } else {
                throw new ClassCastException(obj.getClass().getName() + " is not Comparable");
            }
        } else {
            g gVar5 = gVar3;
            gVar = new g(gVar5, obj, m10, gVar4, gVar4.f18887p);
            if (i11 < 0) {
                gVar5.f18884e = gVar;
            } else {
                gVar5.f18885i = gVar;
            }
            g(gVar5, true);
        }
        int i12 = this.f18865o;
        this.f18865o = i12 + 1;
        if (i12 > this.f18867q) {
            a();
        }
        this.f18866p++;
        return gVar;
    }

    g e(Map.Entry entry) {
        g f10 = f(entry.getKey());
        if (f10 != null && c(f10.f18890s, entry.getValue())) {
            return f10;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        d dVar = this.f18868r;
        if (dVar != null) {
            return dVar;
        }
        d dVar2 = new d();
        this.f18868r = dVar2;
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
            return f10.f18890s;
        }
        return null;
    }

    void h(g gVar, boolean z10) {
        g a10;
        int i10;
        if (z10) {
            g gVar2 = gVar.f18887p;
            gVar2.f18886o = gVar.f18886o;
            gVar.f18886o.f18887p = gVar2;
            gVar.f18887p = null;
            gVar.f18886o = null;
        }
        g gVar3 = gVar.f18884e;
        g gVar4 = gVar.f18885i;
        g gVar5 = gVar.f18883d;
        int i11 = 0;
        if (gVar3 != null && gVar4 != null) {
            if (gVar3.f18891t > gVar4.f18891t) {
                a10 = gVar3.b();
            } else {
                a10 = gVar4.a();
            }
            h(a10, false);
            g gVar6 = gVar.f18884e;
            if (gVar6 != null) {
                i10 = gVar6.f18891t;
                a10.f18884e = gVar6;
                gVar6.f18883d = a10;
                gVar.f18884e = null;
            } else {
                i10 = 0;
            }
            g gVar7 = gVar.f18885i;
            if (gVar7 != null) {
                i11 = gVar7.f18891t;
                a10.f18885i = gVar7;
                gVar7.f18883d = a10;
                gVar.f18885i = null;
            }
            a10.f18891t = Math.max(i10, i11) + 1;
            j(gVar, a10);
            return;
        }
        if (gVar3 != null) {
            j(gVar, gVar3);
            gVar.f18884e = null;
        } else if (gVar4 != null) {
            j(gVar, gVar4);
            gVar.f18885i = null;
        } else {
            j(gVar, null);
        }
        g(gVar5, false);
        this.f18865o--;
        this.f18866p++;
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
        e eVar = this.f18869s;
        if (eVar != null) {
            return eVar;
        }
        e eVar2 = new e();
        this.f18869s = eVar2;
        return eVar2;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object put(Object obj, Object obj2) {
        if (obj != null) {
            g d10 = d(obj, true);
            Object obj3 = d10.f18890s;
            d10.f18890s = obj2;
            return obj3;
        }
        throw new NullPointerException("key == null");
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        g i10 = i(obj);
        if (i10 != null) {
            return i10.f18890s;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f18865o;
    }

    u(Comparator comparator) {
        this.f18865o = 0;
        this.f18866p = 0;
        this.f18862d = comparator == null ? f18861t : comparator;
        this.f18864i = new g();
        g[] gVarArr = new g[16];
        this.f18863e = gVarArr;
        this.f18867q = (gVarArr.length / 2) + (gVarArr.length / 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        g f18883d;

        /* renamed from: e  reason: collision with root package name */
        g f18884e;

        /* renamed from: i  reason: collision with root package name */
        g f18885i;

        /* renamed from: o  reason: collision with root package name */
        g f18886o;

        /* renamed from: p  reason: collision with root package name */
        g f18887p;

        /* renamed from: q  reason: collision with root package name */
        final Object f18888q;

        /* renamed from: r  reason: collision with root package name */
        final int f18889r;

        /* renamed from: s  reason: collision with root package name */
        Object f18890s;

        /* renamed from: t  reason: collision with root package name */
        int f18891t;

        g() {
            this.f18888q = null;
            this.f18889r = -1;
            this.f18887p = this;
            this.f18886o = this;
        }

        public g a() {
            g gVar = this;
            for (g gVar2 = this.f18884e; gVar2 != null; gVar2 = gVar2.f18884e) {
                gVar = gVar2;
            }
            return gVar;
        }

        public g b() {
            g gVar = this;
            for (g gVar2 = this.f18885i; gVar2 != null; gVar2 = gVar2.f18885i) {
                gVar = gVar2;
            }
            return gVar;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                Object obj2 = this.f18888q;
                if (obj2 != null ? obj2.equals(entry.getKey()) : entry.getKey() == null) {
                    Object obj3 = this.f18890s;
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
            return this.f18888q;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f18890s;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f18888q;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            Object obj2 = this.f18890s;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            Object obj2 = this.f18890s;
            this.f18890s = obj;
            return obj2;
        }

        public String toString() {
            return this.f18888q + "=" + this.f18890s;
        }

        g(g gVar, Object obj, int i10, g gVar2, g gVar3) {
            this.f18883d = gVar;
            this.f18888q = obj;
            this.f18889r = i10;
            this.f18891t = 1;
            this.f18886o = gVar2;
            this.f18887p = gVar3;
            gVar3.f18886o = this;
            gVar2.f18887p = this;
        }
    }
}
