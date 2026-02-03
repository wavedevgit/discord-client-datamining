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
    private static final Comparator f18604t = new a();

    /* renamed from: d  reason: collision with root package name */
    final Comparator f18605d;

    /* renamed from: e  reason: collision with root package name */
    g[] f18606e;

    /* renamed from: i  reason: collision with root package name */
    final g f18607i;

    /* renamed from: o  reason: collision with root package name */
    int f18608o;

    /* renamed from: p  reason: collision with root package name */
    int f18609p;

    /* renamed from: q  reason: collision with root package name */
    int f18610q;

    /* renamed from: r  reason: collision with root package name */
    private d f18611r;

    /* renamed from: s  reason: collision with root package name */
    private e f18612s;

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
        private g f18613a;

        /* renamed from: b  reason: collision with root package name */
        private int f18614b;

        /* renamed from: c  reason: collision with root package name */
        private int f18615c;

        /* renamed from: d  reason: collision with root package name */
        private int f18616d;

        b() {
        }

        void a(g gVar) {
            gVar.f18628i = null;
            gVar.f18626d = null;
            gVar.f18627e = null;
            gVar.f18634t = 1;
            int i10 = this.f18614b;
            if (i10 > 0) {
                int i11 = this.f18616d;
                if ((i11 & 1) == 0) {
                    this.f18616d = i11 + 1;
                    this.f18614b = i10 - 1;
                    this.f18615c++;
                }
            }
            gVar.f18626d = this.f18613a;
            this.f18613a = gVar;
            int i12 = this.f18616d;
            int i13 = i12 + 1;
            this.f18616d = i13;
            int i14 = this.f18614b;
            if (i14 > 0 && (i13 & 1) == 0) {
                this.f18616d = i12 + 2;
                this.f18614b = i14 - 1;
                this.f18615c++;
            }
            int i15 = 4;
            while (true) {
                int i16 = i15 - 1;
                if ((this.f18616d & i16) == i16) {
                    int i17 = this.f18615c;
                    if (i17 == 0) {
                        g gVar2 = this.f18613a;
                        g gVar3 = gVar2.f18626d;
                        g gVar4 = gVar3.f18626d;
                        gVar3.f18626d = gVar4.f18626d;
                        this.f18613a = gVar3;
                        gVar3.f18627e = gVar4;
                        gVar3.f18628i = gVar2;
                        gVar3.f18634t = gVar2.f18634t + 1;
                        gVar4.f18626d = gVar3;
                        gVar2.f18626d = gVar3;
                    } else if (i17 == 1) {
                        g gVar5 = this.f18613a;
                        g gVar6 = gVar5.f18626d;
                        this.f18613a = gVar6;
                        gVar6.f18628i = gVar5;
                        gVar6.f18634t = gVar5.f18634t + 1;
                        gVar5.f18626d = gVar6;
                        this.f18615c = 0;
                    } else if (i17 == 2) {
                        this.f18615c = 0;
                    }
                    i15 *= 2;
                } else {
                    return;
                }
            }
        }

        void b(int i10) {
            this.f18614b = ((Integer.highestOneBit(i10) * 2) - 1) - i10;
            this.f18616d = 0;
            this.f18615c = 0;
            this.f18613a = null;
        }

        g c() {
            g gVar = this.f18613a;
            if (gVar.f18626d == null) {
                return gVar;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private g f18617a;

        c() {
        }

        public g a() {
            g gVar = this.f18617a;
            if (gVar == null) {
                return null;
            }
            g gVar2 = gVar.f18626d;
            gVar.f18626d = null;
            g gVar3 = gVar.f18628i;
            while (true) {
                g gVar4 = gVar2;
                gVar2 = gVar3;
                if (gVar2 != null) {
                    gVar2.f18626d = gVar4;
                    gVar3 = gVar2.f18627e;
                } else {
                    this.f18617a = gVar4;
                    return gVar;
                }
            }
        }

        void b(g gVar) {
            g gVar2 = null;
            while (gVar != null) {
                gVar.f18626d = gVar2;
                gVar2 = gVar;
                gVar = gVar.f18627e;
            }
            this.f18617a = gVar2;
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
            return u.this.f18608o;
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
                return a().f18631q;
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
            return u.this.f18608o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public abstract class f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        g f18622d;

        /* renamed from: e  reason: collision with root package name */
        g f18623e = null;

        /* renamed from: i  reason: collision with root package name */
        int f18624i;

        f() {
            this.f18622d = u.this.f18607i.f18629o;
            this.f18624i = u.this.f18609p;
        }

        final g a() {
            g gVar = this.f18622d;
            u uVar = u.this;
            if (gVar != uVar.f18607i) {
                if (uVar.f18609p == this.f18624i) {
                    this.f18622d = gVar.f18629o;
                    this.f18623e = gVar;
                    return gVar;
                }
                throw new ConcurrentModificationException();
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public final boolean hasNext() {
            if (this.f18622d != u.this.f18607i) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public final void remove() {
            g gVar = this.f18623e;
            if (gVar != null) {
                u.this.h(gVar, true);
                this.f18623e = null;
                this.f18624i = u.this.f18609p;
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
        g[] b10 = b(this.f18606e);
        this.f18606e = b10;
        this.f18610q = (b10.length / 2) + (b10.length / 4);
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
                    } else if ((a10.f18632r & length) == 0) {
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
                    } else if ((a11.f18632r & length) == 0) {
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
            g gVar2 = gVar.f18627e;
            g gVar3 = gVar.f18628i;
            int i14 = 0;
            if (gVar2 != null) {
                i10 = gVar2.f18634t;
            } else {
                i10 = 0;
            }
            if (gVar3 != null) {
                i11 = gVar3.f18634t;
            } else {
                i11 = 0;
            }
            int i15 = i10 - i11;
            if (i15 == -2) {
                g gVar4 = gVar3.f18627e;
                g gVar5 = gVar3.f18628i;
                if (gVar5 != null) {
                    i13 = gVar5.f18634t;
                } else {
                    i13 = 0;
                }
                if (gVar4 != null) {
                    i14 = gVar4.f18634t;
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
                g gVar6 = gVar2.f18627e;
                g gVar7 = gVar2.f18628i;
                if (gVar7 != null) {
                    i12 = gVar7.f18634t;
                } else {
                    i12 = 0;
                }
                if (gVar6 != null) {
                    i14 = gVar6.f18634t;
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
                gVar.f18634t = i10 + 1;
                if (z10) {
                    return;
                }
            } else {
                gVar.f18634t = Math.max(i10, i11) + 1;
                if (!z10) {
                    return;
                }
            }
            gVar = gVar.f18626d;
        }
    }

    private void j(g gVar, g gVar2) {
        g gVar3 = gVar.f18626d;
        gVar.f18626d = null;
        if (gVar2 != null) {
            gVar2.f18626d = gVar3;
        }
        if (gVar3 != null) {
            if (gVar3.f18627e == gVar) {
                gVar3.f18627e = gVar2;
                return;
            } else {
                gVar3.f18628i = gVar2;
                return;
            }
        }
        int i10 = gVar.f18632r;
        g[] gVarArr = this.f18606e;
        gVarArr[i10 & (gVarArr.length - 1)] = gVar2;
    }

    private void k(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f18627e;
        g gVar3 = gVar.f18628i;
        g gVar4 = gVar3.f18627e;
        g gVar5 = gVar3.f18628i;
        gVar.f18628i = gVar4;
        if (gVar4 != null) {
            gVar4.f18626d = gVar;
        }
        j(gVar, gVar3);
        gVar3.f18627e = gVar;
        gVar.f18626d = gVar3;
        int i12 = 0;
        if (gVar2 != null) {
            i10 = gVar2.f18634t;
        } else {
            i10 = 0;
        }
        if (gVar4 != null) {
            i11 = gVar4.f18634t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18634t = max;
        if (gVar5 != null) {
            i12 = gVar5.f18634t;
        }
        gVar3.f18634t = Math.max(max, i12) + 1;
    }

    private void l(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f18627e;
        g gVar3 = gVar.f18628i;
        g gVar4 = gVar2.f18627e;
        g gVar5 = gVar2.f18628i;
        gVar.f18627e = gVar5;
        if (gVar5 != null) {
            gVar5.f18626d = gVar;
        }
        j(gVar, gVar2);
        gVar2.f18628i = gVar;
        gVar.f18626d = gVar2;
        int i12 = 0;
        if (gVar3 != null) {
            i10 = gVar3.f18634t;
        } else {
            i10 = 0;
        }
        if (gVar5 != null) {
            i11 = gVar5.f18634t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18634t = max;
        if (gVar4 != null) {
            i12 = gVar4.f18634t;
        }
        gVar2.f18634t = Math.max(max, i12) + 1;
    }

    private static int m(int i10) {
        int i11 = i10 ^ ((i10 >>> 20) ^ (i10 >>> 12));
        return (i11 >>> 4) ^ ((i11 >>> 7) ^ i11);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        Arrays.fill(this.f18606e, (Object) null);
        this.f18608o = 0;
        this.f18609p++;
        g gVar = this.f18607i;
        g gVar2 = gVar.f18629o;
        while (gVar2 != gVar) {
            g gVar3 = gVar2.f18629o;
            gVar2.f18630p = null;
            gVar2.f18629o = null;
            gVar2 = gVar3;
        }
        gVar.f18630p = gVar;
        gVar.f18629o = gVar;
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
        Comparator comparator = this.f18605d;
        g[] gVarArr = this.f18606e;
        int m10 = m(obj.hashCode());
        int length = (gVarArr.length - 1) & m10;
        g gVar3 = gVarArr[length];
        if (gVar3 != null) {
            if (comparator == f18604t) {
                comparable = (Comparable) obj;
            } else {
                comparable = null;
            }
            while (true) {
                if (comparable != null) {
                    i10 = comparable.compareTo(gVar3.f18631q);
                } else {
                    i10 = comparator.compare(obj, gVar3.f18631q);
                }
                if (i10 == 0) {
                    return gVar3;
                }
                if (i10 < 0) {
                    gVar2 = gVar3.f18627e;
                } else {
                    gVar2 = gVar3.f18628i;
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
        g gVar4 = this.f18607i;
        if (gVar3 == null) {
            if (comparator != f18604t || (obj instanceof Comparable)) {
                gVar = new g(gVar3, obj, m10, gVar4, gVar4.f18630p);
                gVarArr[length] = gVar;
            } else {
                throw new ClassCastException(obj.getClass().getName() + " is not Comparable");
            }
        } else {
            g gVar5 = gVar3;
            gVar = new g(gVar5, obj, m10, gVar4, gVar4.f18630p);
            if (i11 < 0) {
                gVar5.f18627e = gVar;
            } else {
                gVar5.f18628i = gVar;
            }
            g(gVar5, true);
        }
        int i12 = this.f18608o;
        this.f18608o = i12 + 1;
        if (i12 > this.f18610q) {
            a();
        }
        this.f18609p++;
        return gVar;
    }

    g e(Map.Entry entry) {
        g f10 = f(entry.getKey());
        if (f10 != null && c(f10.f18633s, entry.getValue())) {
            return f10;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        d dVar = this.f18611r;
        if (dVar != null) {
            return dVar;
        }
        d dVar2 = new d();
        this.f18611r = dVar2;
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
            return f10.f18633s;
        }
        return null;
    }

    void h(g gVar, boolean z10) {
        g a10;
        int i10;
        if (z10) {
            g gVar2 = gVar.f18630p;
            gVar2.f18629o = gVar.f18629o;
            gVar.f18629o.f18630p = gVar2;
            gVar.f18630p = null;
            gVar.f18629o = null;
        }
        g gVar3 = gVar.f18627e;
        g gVar4 = gVar.f18628i;
        g gVar5 = gVar.f18626d;
        int i11 = 0;
        if (gVar3 != null && gVar4 != null) {
            if (gVar3.f18634t > gVar4.f18634t) {
                a10 = gVar3.b();
            } else {
                a10 = gVar4.a();
            }
            h(a10, false);
            g gVar6 = gVar.f18627e;
            if (gVar6 != null) {
                i10 = gVar6.f18634t;
                a10.f18627e = gVar6;
                gVar6.f18626d = a10;
                gVar.f18627e = null;
            } else {
                i10 = 0;
            }
            g gVar7 = gVar.f18628i;
            if (gVar7 != null) {
                i11 = gVar7.f18634t;
                a10.f18628i = gVar7;
                gVar7.f18626d = a10;
                gVar.f18628i = null;
            }
            a10.f18634t = Math.max(i10, i11) + 1;
            j(gVar, a10);
            return;
        }
        if (gVar3 != null) {
            j(gVar, gVar3);
            gVar.f18627e = null;
        } else if (gVar4 != null) {
            j(gVar, gVar4);
            gVar.f18628i = null;
        } else {
            j(gVar, null);
        }
        g(gVar5, false);
        this.f18608o--;
        this.f18609p++;
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
        e eVar = this.f18612s;
        if (eVar != null) {
            return eVar;
        }
        e eVar2 = new e();
        this.f18612s = eVar2;
        return eVar2;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object put(Object obj, Object obj2) {
        if (obj != null) {
            g d10 = d(obj, true);
            Object obj3 = d10.f18633s;
            d10.f18633s = obj2;
            return obj3;
        }
        throw new NullPointerException("key == null");
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        g i10 = i(obj);
        if (i10 != null) {
            return i10.f18633s;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f18608o;
    }

    u(Comparator comparator) {
        this.f18608o = 0;
        this.f18609p = 0;
        this.f18605d = comparator == null ? f18604t : comparator;
        this.f18607i = new g();
        g[] gVarArr = new g[16];
        this.f18606e = gVarArr;
        this.f18610q = (gVarArr.length / 2) + (gVarArr.length / 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        g f18626d;

        /* renamed from: e  reason: collision with root package name */
        g f18627e;

        /* renamed from: i  reason: collision with root package name */
        g f18628i;

        /* renamed from: o  reason: collision with root package name */
        g f18629o;

        /* renamed from: p  reason: collision with root package name */
        g f18630p;

        /* renamed from: q  reason: collision with root package name */
        final Object f18631q;

        /* renamed from: r  reason: collision with root package name */
        final int f18632r;

        /* renamed from: s  reason: collision with root package name */
        Object f18633s;

        /* renamed from: t  reason: collision with root package name */
        int f18634t;

        g() {
            this.f18631q = null;
            this.f18632r = -1;
            this.f18630p = this;
            this.f18629o = this;
        }

        public g a() {
            g gVar = this;
            for (g gVar2 = this.f18627e; gVar2 != null; gVar2 = gVar2.f18627e) {
                gVar = gVar2;
            }
            return gVar;
        }

        public g b() {
            g gVar = this;
            for (g gVar2 = this.f18628i; gVar2 != null; gVar2 = gVar2.f18628i) {
                gVar = gVar2;
            }
            return gVar;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                Object obj2 = this.f18631q;
                if (obj2 != null ? obj2.equals(entry.getKey()) : entry.getKey() == null) {
                    Object obj3 = this.f18633s;
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
            return this.f18631q;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f18633s;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f18631q;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            Object obj2 = this.f18633s;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            Object obj2 = this.f18633s;
            this.f18633s = obj;
            return obj2;
        }

        public String toString() {
            return this.f18631q + "=" + this.f18633s;
        }

        g(g gVar, Object obj, int i10, g gVar2, g gVar3) {
            this.f18626d = gVar;
            this.f18631q = obj;
            this.f18632r = i10;
            this.f18634t = 1;
            this.f18629o = gVar2;
            this.f18630p = gVar3;
            gVar3.f18629o = this;
            gVar2.f18630p = this;
        }
    }
}
