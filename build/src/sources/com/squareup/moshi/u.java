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
    private static final Comparator f17972t = new a();

    /* renamed from: d  reason: collision with root package name */
    final Comparator f17973d;

    /* renamed from: e  reason: collision with root package name */
    g[] f17974e;

    /* renamed from: i  reason: collision with root package name */
    final g f17975i;

    /* renamed from: o  reason: collision with root package name */
    int f17976o;

    /* renamed from: p  reason: collision with root package name */
    int f17977p;

    /* renamed from: q  reason: collision with root package name */
    int f17978q;

    /* renamed from: r  reason: collision with root package name */
    private d f17979r;

    /* renamed from: s  reason: collision with root package name */
    private e f17980s;

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
        private g f17981a;

        /* renamed from: b  reason: collision with root package name */
        private int f17982b;

        /* renamed from: c  reason: collision with root package name */
        private int f17983c;

        /* renamed from: d  reason: collision with root package name */
        private int f17984d;

        b() {
        }

        void a(g gVar) {
            gVar.f17996i = null;
            gVar.f17994d = null;
            gVar.f17995e = null;
            gVar.f18002t = 1;
            int i10 = this.f17982b;
            if (i10 > 0) {
                int i11 = this.f17984d;
                if ((i11 & 1) == 0) {
                    this.f17984d = i11 + 1;
                    this.f17982b = i10 - 1;
                    this.f17983c++;
                }
            }
            gVar.f17994d = this.f17981a;
            this.f17981a = gVar;
            int i12 = this.f17984d;
            int i13 = i12 + 1;
            this.f17984d = i13;
            int i14 = this.f17982b;
            if (i14 > 0 && (i13 & 1) == 0) {
                this.f17984d = i12 + 2;
                this.f17982b = i14 - 1;
                this.f17983c++;
            }
            int i15 = 4;
            while (true) {
                int i16 = i15 - 1;
                if ((this.f17984d & i16) == i16) {
                    int i17 = this.f17983c;
                    if (i17 == 0) {
                        g gVar2 = this.f17981a;
                        g gVar3 = gVar2.f17994d;
                        g gVar4 = gVar3.f17994d;
                        gVar3.f17994d = gVar4.f17994d;
                        this.f17981a = gVar3;
                        gVar3.f17995e = gVar4;
                        gVar3.f17996i = gVar2;
                        gVar3.f18002t = gVar2.f18002t + 1;
                        gVar4.f17994d = gVar3;
                        gVar2.f17994d = gVar3;
                    } else if (i17 == 1) {
                        g gVar5 = this.f17981a;
                        g gVar6 = gVar5.f17994d;
                        this.f17981a = gVar6;
                        gVar6.f17996i = gVar5;
                        gVar6.f18002t = gVar5.f18002t + 1;
                        gVar5.f17994d = gVar6;
                        this.f17983c = 0;
                    } else if (i17 == 2) {
                        this.f17983c = 0;
                    }
                    i15 *= 2;
                } else {
                    return;
                }
            }
        }

        void b(int i10) {
            this.f17982b = ((Integer.highestOneBit(i10) * 2) - 1) - i10;
            this.f17984d = 0;
            this.f17983c = 0;
            this.f17981a = null;
        }

        g c() {
            g gVar = this.f17981a;
            if (gVar.f17994d == null) {
                return gVar;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private g f17985a;

        c() {
        }

        public g a() {
            g gVar = this.f17985a;
            if (gVar == null) {
                return null;
            }
            g gVar2 = gVar.f17994d;
            gVar.f17994d = null;
            g gVar3 = gVar.f17996i;
            while (true) {
                g gVar4 = gVar2;
                gVar2 = gVar3;
                if (gVar2 != null) {
                    gVar2.f17994d = gVar4;
                    gVar3 = gVar2.f17995e;
                } else {
                    this.f17985a = gVar4;
                    return gVar;
                }
            }
        }

        void b(g gVar) {
            g gVar2 = null;
            while (gVar != null) {
                gVar.f17994d = gVar2;
                gVar2 = gVar;
                gVar = gVar.f17995e;
            }
            this.f17985a = gVar2;
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
            return u.this.f17976o;
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
                return a().f17999q;
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
            return u.this.f17976o;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public abstract class f implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        g f17990d;

        /* renamed from: e  reason: collision with root package name */
        g f17991e = null;

        /* renamed from: i  reason: collision with root package name */
        int f17992i;

        f() {
            this.f17990d = u.this.f17975i.f17997o;
            this.f17992i = u.this.f17977p;
        }

        final g a() {
            g gVar = this.f17990d;
            u uVar = u.this;
            if (gVar != uVar.f17975i) {
                if (uVar.f17977p == this.f17992i) {
                    this.f17990d = gVar.f17997o;
                    this.f17991e = gVar;
                    return gVar;
                }
                throw new ConcurrentModificationException();
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public final boolean hasNext() {
            if (this.f17990d != u.this.f17975i) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public final void remove() {
            g gVar = this.f17991e;
            if (gVar != null) {
                u.this.h(gVar, true);
                this.f17991e = null;
                this.f17992i = u.this.f17977p;
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
        g[] b10 = b(this.f17974e);
        this.f17974e = b10;
        this.f17978q = (b10.length / 2) + (b10.length / 4);
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
                    } else if ((a10.f18000r & length) == 0) {
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
                    } else if ((a11.f18000r & length) == 0) {
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
            g gVar2 = gVar.f17995e;
            g gVar3 = gVar.f17996i;
            int i14 = 0;
            if (gVar2 != null) {
                i10 = gVar2.f18002t;
            } else {
                i10 = 0;
            }
            if (gVar3 != null) {
                i11 = gVar3.f18002t;
            } else {
                i11 = 0;
            }
            int i15 = i10 - i11;
            if (i15 == -2) {
                g gVar4 = gVar3.f17995e;
                g gVar5 = gVar3.f17996i;
                if (gVar5 != null) {
                    i13 = gVar5.f18002t;
                } else {
                    i13 = 0;
                }
                if (gVar4 != null) {
                    i14 = gVar4.f18002t;
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
                g gVar6 = gVar2.f17995e;
                g gVar7 = gVar2.f17996i;
                if (gVar7 != null) {
                    i12 = gVar7.f18002t;
                } else {
                    i12 = 0;
                }
                if (gVar6 != null) {
                    i14 = gVar6.f18002t;
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
                gVar.f18002t = i10 + 1;
                if (z10) {
                    return;
                }
            } else {
                gVar.f18002t = Math.max(i10, i11) + 1;
                if (!z10) {
                    return;
                }
            }
            gVar = gVar.f17994d;
        }
    }

    private void j(g gVar, g gVar2) {
        g gVar3 = gVar.f17994d;
        gVar.f17994d = null;
        if (gVar2 != null) {
            gVar2.f17994d = gVar3;
        }
        if (gVar3 != null) {
            if (gVar3.f17995e == gVar) {
                gVar3.f17995e = gVar2;
                return;
            } else {
                gVar3.f17996i = gVar2;
                return;
            }
        }
        int i10 = gVar.f18000r;
        g[] gVarArr = this.f17974e;
        gVarArr[i10 & (gVarArr.length - 1)] = gVar2;
    }

    private void k(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f17995e;
        g gVar3 = gVar.f17996i;
        g gVar4 = gVar3.f17995e;
        g gVar5 = gVar3.f17996i;
        gVar.f17996i = gVar4;
        if (gVar4 != null) {
            gVar4.f17994d = gVar;
        }
        j(gVar, gVar3);
        gVar3.f17995e = gVar;
        gVar.f17994d = gVar3;
        int i12 = 0;
        if (gVar2 != null) {
            i10 = gVar2.f18002t;
        } else {
            i10 = 0;
        }
        if (gVar4 != null) {
            i11 = gVar4.f18002t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18002t = max;
        if (gVar5 != null) {
            i12 = gVar5.f18002t;
        }
        gVar3.f18002t = Math.max(max, i12) + 1;
    }

    private void l(g gVar) {
        int i10;
        int i11;
        g gVar2 = gVar.f17995e;
        g gVar3 = gVar.f17996i;
        g gVar4 = gVar2.f17995e;
        g gVar5 = gVar2.f17996i;
        gVar.f17995e = gVar5;
        if (gVar5 != null) {
            gVar5.f17994d = gVar;
        }
        j(gVar, gVar2);
        gVar2.f17996i = gVar;
        gVar.f17994d = gVar2;
        int i12 = 0;
        if (gVar3 != null) {
            i10 = gVar3.f18002t;
        } else {
            i10 = 0;
        }
        if (gVar5 != null) {
            i11 = gVar5.f18002t;
        } else {
            i11 = 0;
        }
        int max = Math.max(i10, i11) + 1;
        gVar.f18002t = max;
        if (gVar4 != null) {
            i12 = gVar4.f18002t;
        }
        gVar2.f18002t = Math.max(max, i12) + 1;
    }

    private static int m(int i10) {
        int i11 = i10 ^ ((i10 >>> 20) ^ (i10 >>> 12));
        return (i11 >>> 4) ^ ((i11 >>> 7) ^ i11);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        Arrays.fill(this.f17974e, (Object) null);
        this.f17976o = 0;
        this.f17977p++;
        g gVar = this.f17975i;
        g gVar2 = gVar.f17997o;
        while (gVar2 != gVar) {
            g gVar3 = gVar2.f17997o;
            gVar2.f17998p = null;
            gVar2.f17997o = null;
            gVar2 = gVar3;
        }
        gVar.f17998p = gVar;
        gVar.f17997o = gVar;
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
        Comparator comparator = this.f17973d;
        g[] gVarArr = this.f17974e;
        int m10 = m(obj.hashCode());
        int length = (gVarArr.length - 1) & m10;
        g gVar3 = gVarArr[length];
        if (gVar3 != null) {
            if (comparator == f17972t) {
                comparable = (Comparable) obj;
            } else {
                comparable = null;
            }
            while (true) {
                if (comparable != null) {
                    i10 = comparable.compareTo(gVar3.f17999q);
                } else {
                    i10 = comparator.compare(obj, gVar3.f17999q);
                }
                if (i10 == 0) {
                    return gVar3;
                }
                if (i10 < 0) {
                    gVar2 = gVar3.f17995e;
                } else {
                    gVar2 = gVar3.f17996i;
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
        g gVar4 = this.f17975i;
        if (gVar3 == null) {
            if (comparator != f17972t || (obj instanceof Comparable)) {
                gVar = new g(gVar3, obj, m10, gVar4, gVar4.f17998p);
                gVarArr[length] = gVar;
            } else {
                throw new ClassCastException(obj.getClass().getName() + " is not Comparable");
            }
        } else {
            g gVar5 = gVar3;
            gVar = new g(gVar5, obj, m10, gVar4, gVar4.f17998p);
            if (i11 < 0) {
                gVar5.f17995e = gVar;
            } else {
                gVar5.f17996i = gVar;
            }
            g(gVar5, true);
        }
        int i12 = this.f17976o;
        this.f17976o = i12 + 1;
        if (i12 > this.f17978q) {
            a();
        }
        this.f17977p++;
        return gVar;
    }

    g e(Map.Entry entry) {
        g f10 = f(entry.getKey());
        if (f10 != null && c(f10.f18001s, entry.getValue())) {
            return f10;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        d dVar = this.f17979r;
        if (dVar != null) {
            return dVar;
        }
        d dVar2 = new d();
        this.f17979r = dVar2;
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
            return f10.f18001s;
        }
        return null;
    }

    void h(g gVar, boolean z10) {
        g a10;
        int i10;
        if (z10) {
            g gVar2 = gVar.f17998p;
            gVar2.f17997o = gVar.f17997o;
            gVar.f17997o.f17998p = gVar2;
            gVar.f17998p = null;
            gVar.f17997o = null;
        }
        g gVar3 = gVar.f17995e;
        g gVar4 = gVar.f17996i;
        g gVar5 = gVar.f17994d;
        int i11 = 0;
        if (gVar3 != null && gVar4 != null) {
            if (gVar3.f18002t > gVar4.f18002t) {
                a10 = gVar3.b();
            } else {
                a10 = gVar4.a();
            }
            h(a10, false);
            g gVar6 = gVar.f17995e;
            if (gVar6 != null) {
                i10 = gVar6.f18002t;
                a10.f17995e = gVar6;
                gVar6.f17994d = a10;
                gVar.f17995e = null;
            } else {
                i10 = 0;
            }
            g gVar7 = gVar.f17996i;
            if (gVar7 != null) {
                i11 = gVar7.f18002t;
                a10.f17996i = gVar7;
                gVar7.f17994d = a10;
                gVar.f17996i = null;
            }
            a10.f18002t = Math.max(i10, i11) + 1;
            j(gVar, a10);
            return;
        }
        if (gVar3 != null) {
            j(gVar, gVar3);
            gVar.f17995e = null;
        } else if (gVar4 != null) {
            j(gVar, gVar4);
            gVar.f17996i = null;
        } else {
            j(gVar, null);
        }
        g(gVar5, false);
        this.f17976o--;
        this.f17977p++;
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
        e eVar = this.f17980s;
        if (eVar != null) {
            return eVar;
        }
        e eVar2 = new e();
        this.f17980s = eVar2;
        return eVar2;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object put(Object obj, Object obj2) {
        if (obj != null) {
            g d10 = d(obj, true);
            Object obj3 = d10.f18001s;
            d10.f18001s = obj2;
            return obj3;
        }
        throw new NullPointerException("key == null");
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        g i10 = i(obj);
        if (i10 != null) {
            return i10.f18001s;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        return this.f17976o;
    }

    u(Comparator comparator) {
        this.f17976o = 0;
        this.f17977p = 0;
        this.f17973d = comparator == null ? f17972t : comparator;
        this.f17975i = new g();
        g[] gVarArr = new g[16];
        this.f17974e = gVarArr;
        this.f17978q = (gVarArr.length / 2) + (gVarArr.length / 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements Map.Entry {

        /* renamed from: d  reason: collision with root package name */
        g f17994d;

        /* renamed from: e  reason: collision with root package name */
        g f17995e;

        /* renamed from: i  reason: collision with root package name */
        g f17996i;

        /* renamed from: o  reason: collision with root package name */
        g f17997o;

        /* renamed from: p  reason: collision with root package name */
        g f17998p;

        /* renamed from: q  reason: collision with root package name */
        final Object f17999q;

        /* renamed from: r  reason: collision with root package name */
        final int f18000r;

        /* renamed from: s  reason: collision with root package name */
        Object f18001s;

        /* renamed from: t  reason: collision with root package name */
        int f18002t;

        g() {
            this.f17999q = null;
            this.f18000r = -1;
            this.f17998p = this;
            this.f17997o = this;
        }

        public g a() {
            g gVar = this;
            for (g gVar2 = this.f17995e; gVar2 != null; gVar2 = gVar2.f17995e) {
                gVar = gVar2;
            }
            return gVar;
        }

        public g b() {
            g gVar = this;
            for (g gVar2 = this.f17996i; gVar2 != null; gVar2 = gVar2.f17996i) {
                gVar = gVar2;
            }
            return gVar;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                Object obj2 = this.f17999q;
                if (obj2 != null ? obj2.equals(entry.getKey()) : entry.getKey() == null) {
                    Object obj3 = this.f18001s;
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
            return this.f17999q;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f18001s;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f17999q;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            Object obj2 = this.f18001s;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            return hashCode ^ i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            Object obj2 = this.f18001s;
            this.f18001s = obj;
            return obj2;
        }

        public String toString() {
            return this.f17999q + "=" + this.f18001s;
        }

        g(g gVar, Object obj, int i10, g gVar2, g gVar3) {
            this.f17994d = gVar;
            this.f17999q = obj;
            this.f18000r = i10;
            this.f18002t = 1;
            this.f17997o = gVar2;
            this.f17998p = gVar3;
            gVar3.f17997o = this;
            gVar2.f17998p = this;
        }
    }
}
