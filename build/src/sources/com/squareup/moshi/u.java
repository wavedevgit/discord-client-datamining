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
    private static final Comparator f17586t = new a();

    /* renamed from: d  reason: collision with root package name */
    final Comparator f17587d;

    /* renamed from: e  reason: collision with root package name */
    g[] f17588e;

    /* renamed from: i  reason: collision with root package name */
    final g f17589i;

    /* renamed from: o  reason: collision with root package name */
    int f17590o;

    /* renamed from: p  reason: collision with root package name */
    int f17591p;

    /* renamed from: q  reason: collision with root package name */
    int f17592q;

    /* renamed from: r  reason: collision with root package name */
    private d f17593r;

    /* renamed from: s  reason: collision with root package name */
    private e f17594s;

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
        private g f17595a;

        /* renamed from: b  reason: collision with root package name */
        private int f17596b;

        /* renamed from: c  reason: collision with root package name */
        private int f17597c;

        /* renamed from: d  reason: collision with root package name */
        private int f17598d;

        b() {
        }

        void a(g gVar) {
            gVar.f17610i = null;
            gVar.f17608d = null;
            gVar.f17609e = null;
            gVar.f17616t = 1;
            int i10 = this.f17596b;
            if (i10 > 0) {
                int i11 = this.f17598d;
                if ((i11 & 1) == 0) {
                    this.f17598d = i11 + 1;
                    this.f17596b = i10 - 1;
                    this.f17597c++;
                }
            }
            gVar.f17608d = this.f17595a;
            this.f17595a = gVar;
            int i12 = this.f17598d;
            int i13 = i12 + 1;
            this.f17598d = i13;
            int i14 = this.f17596b;
            if (i14 > 0 && (i13 & 1) == 0) {
                this.f17598d = i12 + 2;
                this.f17596b = i14 - 1;
                this.f17597c++;
            }
            int i15 = 4;
            while (true) {
                int i16 = i15 - 1;
                if ((this.f17598d & i16) == i16) {
                    int i17 = this.f17597c;
                    if (i17 == 0) {
                        g gVar2 = this.f17595a;
                        g gVar3 = gVar2.f17608d;
                        g gVar4 = gVar3.f17608d;
                        gVar3.f17608d = gVar4.f17608d;
                        this.f17595a = gVar3;
                        gVar3.f17609e = gVar4;
                        gVar3.f17610i = gVar2;
                        gVar3.f17616t = gVar2.f17616t + 1;
                        gVar4.f17608d = gVar3;
                        gVar2.f17608d = gVar3;
                    } else if (i17 == 1) {
                        g gVar5 = this.f17595a;
                        g gVar6 = gVar5.f17608d;
                        this.f17595a = gVar6;
                        gVar6.f17610i = gVar5;
                        gVar6.f17616t = gVar5.f17616t + 1;
                        gVar5.f17608d = gVar6;
                        this.f17597c = 0;
                    } else if (i17 == 2) {
                        this.f17597c = 0;
                    }
                    i15 *= 2;
                } else {
                    return;
                }
            }
        }

        void b(int i10) {
            this.f17596b = ((Integer.highestOneBit(i10) * 2) - 1) - i10;
            this.f17598d = 0;
            this.f17597c = 0;
            this.f17595a = null;
        }

        g c() {
            g gVar = this.f17595a;
            if (gVar.f17608d == null) {
                return gVar;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private g f17599a;

        c() {
        }

        public g a() {
            g gVar = this.f17599a;
            if (gVar == null) {
                return null;
            }
            g gVar2 = gVar.f17608d;
            gVar.f17608d = null;
            g gVar3 = gVar.f17610i;
            while (true) {
                g gVar4 = gVar2;
                gVar2 = gVar3;
                if (gVar2 != null) {
                    gVar2.f17608d = gVar4;
                    gVar3 = gVar2.f17609e;
                } else {
                    this.f17599a = gVar4;
                    return gVar;
                }
            }
        }

        void b(g gVar) {
            g gVar2 = null;
            while (gVar != null) {
                gVar.f17608d = gVar2;
                gVar2 = gVar;
                gVar = gVar.f17609e;
            }
            this.f17599a = gVar2;
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
            return u.this.f17590o;
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
                return a().f17613q;
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
            return u.this.f17590o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public abstract class f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        g f17604d;

        /* renamed from: e  reason: collision with root package name */
        g f17605e = null;

        /* renamed from: i  reason: collision with root package name */
        int f17606i;

        f() {
            this.f17604d = u.this.f17589i.f17611o;
            this.f17606i = u.this.f17591p;
        }

        final g a() {
            g gVar = this.f17604d;
            u uVar = u.this;
            if (gVar != uVar.f17589i) {
                if (uVar.f17591p == this.f17606i) {
                    this.f17604d = gVar.f17611o;
                    this.f17605e = gVar;
                    return gVar;
                }
                throw new ConcurrentModificationException();
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public final boolean hasNext() {
            if (this.f17604d != u.this.f17589i) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public final void remove() {
            g gVar = this.f17605e;
            if (gVar != null) {
                u.this.h(gVar, true);
                this.f17605e = null;
                this.f17606i = u.this.f17591p;
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
        g[] b10 = b(this.f17588e);
        this.f17588e = b10;
        this.f17592q = (b10.length / 2) + (b10.length / 4);
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
                    } else if ((a10.f17614r & length) == 0) {
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
                    } else if ((a11.f17614r & length) == 0) {
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
            g gVar2 = gVar.f17609e;
            g gVar3 = gVar.f17610i;
            int i14 = 0;
            if (gVar2 != null) {
                i10 = gVar2.f17616t;
            } else {
                i10 = 0;
            }
            if (gVar3 != null) {
                i11 = gVar3.f17616t;
            } else {
                i11 = 0;
            }
            int i15 = i10 - i11;
            if (i15 == -2) {
                g gVar4 = gVar3.f17609e;
                g gVar5 = gVar3.f17610i;
                if (gVar5 != null) {
                    i13 = gVar5.f17616t;
                } else {
                    i13 = 0;
                }
                if (gVar4 != null) {
                    i14 = gVar4.f17616t;
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
                g gVar6 = gVar2.f17609e;
                g gVar7 = gVar2.f17610i;
                if (gVar7 != null) {
                    i12 = gVar7.f17616t;
                } else {
                    i12 = 0;
                }
                if (gVar6 != null) {
                    i14 = gVar6.f17616t;
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
                gVar.f17616t = i10 + 1;
                if (z10) {
                    return;
                }
            } else {
                gVar.f17616t = Math.max(i10, i11) + 1;
                if (!z10) {
                    return;
                }
            }
            gVar = gVar.f17608d;
        }
    }

    private void j(g gVar, g gVar2) {
        g gVar3 = gVar.f17608d;
        gVar.f17608d = null;
        if (gVar2 != null) {
            gVar2.f17608d = gVar3;
        }
        if (gVar3 != null) {
            if (gVar3.f17609e == gVar) {
                gVar3.f17609e = gVar2;
                return;
            } else {
                gVar3.f17610i = gVar2;
                return;
            }
        }
        int i10 = gVar.f17614r;
        g[] gVarArr = this.f17588e;
        gVarArr[i10 & (gVarArr.length - 1)] = gVar2;
    }

    private void k(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f17609e;
        g gVar3 = gVar.f17610i;
        g gVar4 = gVar3.f17609e;
        g gVar5 = gVar3.f17610i;
        gVar.f17610i = gVar4;
        if (gVar4 != null) {
            gVar4.f17608d = gVar;
        }
        j(gVar, gVar3);
        gVar3.f17609e = gVar;
        gVar.f17608d = gVar3;
        int i12 = 0;
        if (gVar2 != null) {
            i10 = gVar2.f17616t;
        } else {
            i10 = 0;
        }
        if (gVar4 != null) {
            i11 = gVar4.f17616t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f17616t = max;
        if (gVar5 != null) {
            i12 = gVar5.f17616t;
        }
        gVar3.f17616t = Math.max(max, i12) + 1;
    }

    private void l(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f17609e;
        g gVar3 = gVar.f17610i;
        g gVar4 = gVar2.f17609e;
        g gVar5 = gVar2.f17610i;
        gVar.f17609e = gVar5;
        if (gVar5 != null) {
            gVar5.f17608d = gVar;
        }
        j(gVar, gVar2);
        gVar2.f17610i = gVar;
        gVar.f17608d = gVar2;
        int i12 = 0;
        if (gVar3 != null) {
            i10 = gVar3.f17616t;
        } else {
            i10 = 0;
        }
        if (gVar5 != null) {
            i11 = gVar5.f17616t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f17616t = max;
        if (gVar4 != null) {
            i12 = gVar4.f17616t;
        }
        gVar2.f17616t = Math.max(max, i12) + 1;
    }

    private static int m(int i10) {
        int i11 = i10 ^ ((i10 >>> 20) ^ (i10 >>> 12));
        return (i11 >>> 4) ^ ((i11 >>> 7) ^ i11);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        Arrays.fill(this.f17588e, (Object) null);
        this.f17590o = 0;
        this.f17591p++;
        g gVar = this.f17589i;
        g gVar2 = gVar.f17611o;
        while (gVar2 != gVar) {
            g gVar3 = gVar2.f17611o;
            gVar2.f17612p = null;
            gVar2.f17611o = null;
            gVar2 = gVar3;
        }
        gVar.f17612p = gVar;
        gVar.f17611o = gVar;
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
        Comparator comparator = this.f17587d;
        g[] gVarArr = this.f17588e;
        int m10 = m(obj.hashCode());
        int length = (gVarArr.length - 1) & m10;
        g gVar3 = gVarArr[length];
        if (gVar3 != null) {
            if (comparator == f17586t) {
                comparable = (Comparable) obj;
            } else {
                comparable = null;
            }
            while (true) {
                if (comparable != null) {
                    i10 = comparable.compareTo(gVar3.f17613q);
                } else {
                    i10 = comparator.compare(obj, gVar3.f17613q);
                }
                if (i10 == 0) {
                    return gVar3;
                }
                if (i10 < 0) {
                    gVar2 = gVar3.f17609e;
                } else {
                    gVar2 = gVar3.f17610i;
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
        g gVar4 = this.f17589i;
        if (gVar3 == null) {
            if (comparator != f17586t || (obj instanceof Comparable)) {
                gVar = new g(gVar3, obj, m10, gVar4, gVar4.f17612p);
                gVarArr[length] = gVar;
            } else {
                throw new ClassCastException(obj.getClass().getName() + " is not Comparable");
            }
        } else {
            g gVar5 = gVar3;
            gVar = new g(gVar5, obj, m10, gVar4, gVar4.f17612p);
            if (i11 < 0) {
                gVar5.f17609e = gVar;
            } else {
                gVar5.f17610i = gVar;
            }
            g(gVar5, true);
        }
        int i12 = this.f17590o;
        this.f17590o = i12 + 1;
        if (i12 > this.f17592q) {
            a();
        }
        this.f17591p++;
        return gVar;
    }

    g e(Map.Entry entry) {
        g f10 = f(entry.getKey());
        if (f10 != null && c(f10.f17615s, entry.getValue())) {
            return f10;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        d dVar = this.f17593r;
        if (dVar != null) {
            return dVar;
        }
        d dVar2 = new d();
        this.f17593r = dVar2;
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
            return f10.f17615s;
        }
        return null;
    }

    void h(g gVar, boolean z10) {
        g a10;
        int i10;
        if (z10) {
            g gVar2 = gVar.f17612p;
            gVar2.f17611o = gVar.f17611o;
            gVar.f17611o.f17612p = gVar2;
            gVar.f17612p = null;
            gVar.f17611o = null;
        }
        g gVar3 = gVar.f17609e;
        g gVar4 = gVar.f17610i;
        g gVar5 = gVar.f17608d;
        int i11 = 0;
        if (gVar3 != null && gVar4 != null) {
            if (gVar3.f17616t > gVar4.f17616t) {
                a10 = gVar3.b();
            } else {
                a10 = gVar4.a();
            }
            h(a10, false);
            g gVar6 = gVar.f17609e;
            if (gVar6 != null) {
                i10 = gVar6.f17616t;
                a10.f17609e = gVar6;
                gVar6.f17608d = a10;
                gVar.f17609e = null;
            } else {
                i10 = 0;
            }
            g gVar7 = gVar.f17610i;
            if (gVar7 != null) {
                i11 = gVar7.f17616t;
                a10.f17610i = gVar7;
                gVar7.f17608d = a10;
                gVar.f17610i = null;
            }
            a10.f17616t = Math.max(i10, i11) + 1;
            j(gVar, a10);
            return;
        }
        if (gVar3 != null) {
            j(gVar, gVar3);
            gVar.f17609e = null;
        } else if (gVar4 != null) {
            j(gVar, gVar4);
            gVar.f17610i = null;
        } else {
            j(gVar, null);
        }
        g(gVar5, false);
        this.f17590o--;
        this.f17591p++;
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
        e eVar = this.f17594s;
        if (eVar != null) {
            return eVar;
        }
        e eVar2 = new e();
        this.f17594s = eVar2;
        return eVar2;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object put(Object obj, Object obj2) {
        if (obj != null) {
            g d10 = d(obj, true);
            Object obj3 = d10.f17615s;
            d10.f17615s = obj2;
            return obj3;
        }
        throw new NullPointerException("key == null");
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        g i10 = i(obj);
        if (i10 != null) {
            return i10.f17615s;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f17590o;
    }

    u(Comparator comparator) {
        this.f17590o = 0;
        this.f17591p = 0;
        this.f17587d = comparator == null ? f17586t : comparator;
        this.f17589i = new g();
        g[] gVarArr = new g[16];
        this.f17588e = gVarArr;
        this.f17592q = (gVarArr.length / 2) + (gVarArr.length / 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        g f17608d;

        /* renamed from: e  reason: collision with root package name */
        g f17609e;

        /* renamed from: i  reason: collision with root package name */
        g f17610i;

        /* renamed from: o  reason: collision with root package name */
        g f17611o;

        /* renamed from: p  reason: collision with root package name */
        g f17612p;

        /* renamed from: q  reason: collision with root package name */
        final Object f17613q;

        /* renamed from: r  reason: collision with root package name */
        final int f17614r;

        /* renamed from: s  reason: collision with root package name */
        Object f17615s;

        /* renamed from: t  reason: collision with root package name */
        int f17616t;

        g() {
            this.f17613q = null;
            this.f17614r = -1;
            this.f17612p = this;
            this.f17611o = this;
        }

        public g a() {
            g gVar = this;
            for (g gVar2 = this.f17609e; gVar2 != null; gVar2 = gVar2.f17609e) {
                gVar = gVar2;
            }
            return gVar;
        }

        public g b() {
            g gVar = this;
            for (g gVar2 = this.f17610i; gVar2 != null; gVar2 = gVar2.f17610i) {
                gVar = gVar2;
            }
            return gVar;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                Object obj2 = this.f17613q;
                if (obj2 != null ? obj2.equals(entry.getKey()) : entry.getKey() == null) {
                    Object obj3 = this.f17615s;
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
            return this.f17613q;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f17615s;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f17613q;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            Object obj2 = this.f17615s;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            Object obj2 = this.f17615s;
            this.f17615s = obj;
            return obj2;
        }

        public String toString() {
            return this.f17613q + "=" + this.f17615s;
        }

        g(g gVar, Object obj, int i10, g gVar2, g gVar3) {
            this.f17608d = gVar;
            this.f17613q = obj;
            this.f17614r = i10;
            this.f17616t = 1;
            this.f17611o = gVar2;
            this.f17612p = gVar3;
            gVar3.f17611o = this;
            gVar2.f17612p = this;
        }
    }
}
