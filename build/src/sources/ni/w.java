package ni;

import java.util.Collection;
import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends ni.b {

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Iterator f40907i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ mi.n f40908o;

        a(Iterator it, mi.n nVar) {
            this.f40907i = it;
            this.f40908o = nVar;
        }

        @Override // ni.b
        protected Object a() {
            while (this.f40907i.hasNext()) {
                Object next = this.f40907i.next();
                if (this.f40908o.apply(next)) {
                    return next;
                }
            }
            return b();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends t0 {

        /* renamed from: d  reason: collision with root package name */
        boolean f40909d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f40910e;

        b(Object obj) {
            this.f40910e = obj;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return !this.f40909d;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (!this.f40909d) {
                this.f40909d = true;
                return this.f40910e;
            }
            throw new NoSuchElementException();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements Iterator {
        INSTANCE;

        @Override // java.util.Iterator
        public boolean hasNext() {
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            h.c(false);
        }
    }

    public static boolean a(Collection collection, Iterator it) {
        mi.m.j(collection);
        mi.m.j(it);
        boolean z10 = false;
        while (it.hasNext()) {
            z10 |= collection.add(it.next());
        }
        return z10;
    }

    public static boolean b(Iterator it, mi.n nVar) {
        if (l(it, nVar) != -1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(Iterator it) {
        mi.m.j(it);
        while (it.hasNext()) {
            it.next();
            it.remove();
        }
    }

    public static boolean d(Iterator it, Object obj) {
        if (obj == null) {
            while (it.hasNext()) {
                if (it.next() == null) {
                    return true;
                }
            }
            return false;
        }
        while (it.hasNext()) {
            if (obj.equals(it.next())) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:4:0x0006  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean e(java.util.Iterator r3, java.util.Iterator r4) {
        /*
        L0:
            boolean r0 = r3.hasNext()
            if (r0 == 0) goto L1d
            boolean r0 = r4.hasNext()
            r1 = 0
            if (r0 != 0) goto Le
            return r1
        Le:
            java.lang.Object r0 = r3.next()
            java.lang.Object r2 = r4.next()
            boolean r0 = mi.j.a(r0, r2)
            if (r0 != 0) goto L0
            return r1
        L1d:
            boolean r3 = r4.hasNext()
            r3 = r3 ^ 1
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: ni.w.e(java.util.Iterator, java.util.Iterator):boolean");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Iterator f() {
        return c.INSTANCE;
    }

    public static t0 g(Iterator it, mi.n nVar) {
        mi.m.j(it);
        mi.m.j(nVar);
        return new a(it, nVar);
    }

    public static Object h(Iterator it, mi.n nVar) {
        mi.m.j(it);
        mi.m.j(nVar);
        while (it.hasNext()) {
            Object next = it.next();
            if (nVar.apply(next)) {
                return next;
            }
        }
        throw new NoSuchElementException();
    }

    public static Object i(Iterator it) {
        Object next;
        do {
            next = it.next();
        } while (it.hasNext());
        return next;
    }

    public static Object j(Iterator it, Object obj) {
        if (it.hasNext()) {
            return i(it);
        }
        return obj;
    }

    public static Object k(Iterator it, Object obj) {
        if (it.hasNext()) {
            return it.next();
        }
        return obj;
    }

    public static int l(Iterator it, mi.n nVar) {
        mi.m.k(nVar, "predicate");
        int i10 = 0;
        while (it.hasNext()) {
            if (nVar.apply(it.next())) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object m(Iterator it) {
        if (it.hasNext()) {
            Object next = it.next();
            it.remove();
            return next;
        }
        return null;
    }

    public static boolean n(Iterator it, Collection collection) {
        mi.m.j(collection);
        boolean z10 = false;
        while (it.hasNext()) {
            if (collection.contains(it.next())) {
                it.remove();
                z10 = true;
            }
        }
        return z10;
    }

    public static boolean o(Iterator it, mi.n nVar) {
        mi.m.j(nVar);
        boolean z10 = false;
        while (it.hasNext()) {
            if (nVar.apply(it.next())) {
                it.remove();
                z10 = true;
            }
        }
        return z10;
    }

    public static t0 p(Object obj) {
        return new b(obj);
    }
}
