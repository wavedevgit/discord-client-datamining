package com.facebook.common.references;

import android.graphics.Bitmap;
import java.io.Closeable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class CloseableReference implements Cloneable, Closeable {

    /* renamed from: q  reason: collision with root package name */
    private static int f9978q;

    /* renamed from: d  reason: collision with root package name */
    protected boolean f9981d = false;

    /* renamed from: e  reason: collision with root package name */
    protected final t8.d f9982e;

    /* renamed from: i  reason: collision with root package name */
    protected final c f9983i;

    /* renamed from: o  reason: collision with root package name */
    protected final Throwable f9984o;

    /* renamed from: p  reason: collision with root package name */
    private static Class f9977p = CloseableReference.class;

    /* renamed from: r  reason: collision with root package name */
    private static final t8.c f9979r = new a();

    /* renamed from: s  reason: collision with root package name */
    private static final c f9980s = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements t8.c {
        a() {
        }

        @Override // t8.c
        /* renamed from: a */
        public void release(Closeable closeable) {
            try {
                p8.b.a(closeable, true);
            } catch (IOException unused) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b implements c {
        b() {
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public void a(t8.d dVar, Throwable th2) {
            String name;
            Object f10 = dVar.f();
            Class cls = CloseableReference.f9977p;
            Integer valueOf = Integer.valueOf(System.identityHashCode(this));
            Integer valueOf2 = Integer.valueOf(System.identityHashCode(dVar));
            if (f10 == null) {
                name = null;
            } else {
                name = f10.getClass().getName();
            }
            q8.a.H(cls, "Finalized without closing: %x %x (type = %s)", valueOf, valueOf2, name);
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public boolean b() {
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(t8.d dVar, Throwable th2);

        boolean b();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public CloseableReference(t8.d dVar, c cVar, Throwable th2) {
        this.f9982e = (t8.d) j.g(dVar);
        dVar.b();
        this.f9983i = cVar;
        this.f9984o = th2;
    }

    public static boolean G0(CloseableReference closeableReference) {
        if (closeableReference != null && closeableReference.D0()) {
            return true;
        }
        return false;
    }

    public static CloseableReference H0(Closeable closeable) {
        return R0(closeable, f9979r);
    }

    public static void I(Iterable iterable) {
        if (iterable != null) {
            Iterator it = iterable.iterator();
            while (it.hasNext()) {
                z((CloseableReference) it.next());
            }
        }
    }

    public static CloseableReference O0(Closeable closeable, c cVar) {
        Throwable th2 = null;
        if (closeable == null) {
            return null;
        }
        t8.c cVar2 = f9979r;
        if (cVar.b()) {
            th2 = new Throwable();
        }
        return W0(closeable, cVar2, cVar, th2);
    }

    public static CloseableReference R0(Object obj, t8.c cVar) {
        return V0(obj, cVar, f9980s);
    }

    public static CloseableReference V0(Object obj, t8.c cVar, c cVar2) {
        Throwable th2 = null;
        if (obj == null) {
            return null;
        }
        if (cVar2.b()) {
            th2 = new Throwable();
        }
        return W0(obj, cVar, cVar2, th2);
    }

    public static CloseableReference W0(Object obj, t8.c cVar, c cVar2, Throwable th2) {
        if (obj == null) {
            return null;
        }
        if ((obj instanceof Bitmap) || (obj instanceof t8.a)) {
            int i10 = f9978q;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return new com.facebook.common.references.c(obj);
                    }
                } else {
                    return new d(obj, cVar, cVar2, th2);
                }
            } else {
                return new com.facebook.common.references.b(obj, cVar, cVar2, th2);
            }
        }
        return new com.facebook.common.references.a(obj, cVar, cVar2, th2);
    }

    public static CloseableReference n(CloseableReference closeableReference) {
        if (closeableReference != null) {
            return closeableReference.m();
        }
        return null;
    }

    public static List y(Collection collection) {
        if (collection == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList(collection.size());
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            arrayList.add(n((CloseableReference) it.next()));
        }
        return arrayList;
    }

    public static void z(CloseableReference closeableReference) {
        if (closeableReference != null) {
            closeableReference.close();
        }
    }

    public synchronized boolean D0() {
        return !this.f9981d;
    }

    public synchronized Object J() {
        j.i(!this.f9981d);
        return j.g(this.f9982e.f());
    }

    public int Z() {
        if (D0()) {
            return System.identityHashCode(this.f9982e.f());
        }
        return 0;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                if (this.f9981d) {
                    return;
                }
                this.f9981d = true;
                this.f9982e.d();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // 
    /* renamed from: k */
    public abstract CloseableReference clone();

    public synchronized CloseableReference m() {
        if (D0()) {
            return clone();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public CloseableReference(Object obj, t8.c cVar, c cVar2, Throwable th2, boolean z10) {
        this.f9982e = new t8.d(obj, cVar, z10);
        this.f9983i = cVar2;
        this.f9984o = th2;
    }
}
