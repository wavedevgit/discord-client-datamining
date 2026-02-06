package com.facebook.common.references;

import android.graphics.Bitmap;
import java.io.Closeable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class CloseableReference implements Cloneable, Closeable {

    /* renamed from: q  reason: collision with root package name */
    private static int f9838q;

    /* renamed from: d  reason: collision with root package name */
    protected boolean f9841d = false;

    /* renamed from: e  reason: collision with root package name */
    protected final s8.d f9842e;

    /* renamed from: i  reason: collision with root package name */
    protected final c f9843i;

    /* renamed from: o  reason: collision with root package name */
    protected final Throwable f9844o;

    /* renamed from: p  reason: collision with root package name */
    private static Class f9837p = CloseableReference.class;

    /* renamed from: r  reason: collision with root package name */
    private static final s8.c f9839r = new a();

    /* renamed from: s  reason: collision with root package name */
    private static final c f9840s = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements s8.c {
        a() {
        }

        @Override // s8.c
        /* renamed from: a */
        public void release(Closeable closeable) {
            try {
                o8.b.a(closeable, true);
            } catch (IOException unused) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b implements c {
        b() {
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public boolean a() {
            return false;
        }

        @Override // com.facebook.common.references.CloseableReference.c
        public void b(s8.d dVar, Throwable th2) {
            String name;
            Object f10 = dVar.f();
            Class cls = CloseableReference.f9837p;
            Integer valueOf = Integer.valueOf(System.identityHashCode(this));
            Integer valueOf2 = Integer.valueOf(System.identityHashCode(dVar));
            if (f10 == null) {
                name = null;
            } else {
                name = f10.getClass().getName();
            }
            p8.a.H(cls, "Finalized without closing: %x %x (type = %s)", valueOf, valueOf2, name);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        boolean a();

        void b(s8.d dVar, Throwable th2);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public CloseableReference(s8.d dVar, c cVar, Throwable th2) {
        this.f9842e = (s8.d) j.g(dVar);
        dVar.b();
        this.f9843i = cVar;
        this.f9844o = th2;
    }

    public static void I(Iterable iterable) {
        if (iterable != null) {
            Iterator it = iterable.iterator();
            while (it.hasNext()) {
                z((CloseableReference) it.next());
            }
        }
    }

    public static boolean I0(CloseableReference closeableReference) {
        if (closeableReference != null && closeableReference.F0()) {
            return true;
        }
        return false;
    }

    public static CloseableReference K0(Closeable closeable) {
        return O0(closeable, f9839r);
    }

    public static CloseableReference L0(Closeable closeable, c cVar) {
        Throwable th2 = null;
        if (closeable == null) {
            return null;
        }
        s8.c cVar2 = f9839r;
        if (cVar.a()) {
            th2 = new Throwable();
        }
        return Y0(closeable, cVar2, cVar, th2);
    }

    public static CloseableReference O0(Object obj, s8.c cVar) {
        return V0(obj, cVar, f9840s);
    }

    public static CloseableReference V0(Object obj, s8.c cVar, c cVar2) {
        Throwable th2 = null;
        if (obj == null) {
            return null;
        }
        if (cVar2.a()) {
            th2 = new Throwable();
        }
        return Y0(obj, cVar, cVar2, th2);
    }

    public static CloseableReference Y0(Object obj, s8.c cVar, c cVar2, Throwable th2) {
        if (obj == null) {
            return null;
        }
        if ((obj instanceof Bitmap) || (obj instanceof s8.a)) {
            int i10 = f9838q;
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

    public synchronized boolean F0() {
        return !this.f9841d;
    }

    public synchronized Object J() {
        j.i(!this.f9841d);
        return j.g(this.f9842e.f());
    }

    public int Y() {
        if (F0()) {
            return System.identityHashCode(this.f9842e.f());
        }
        return 0;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                if (this.f9841d) {
                    return;
                }
                this.f9841d = true;
                this.f9842e.d();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // 
    /* renamed from: k */
    public abstract CloseableReference clone();

    public synchronized CloseableReference m() {
        if (F0()) {
            return clone();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public CloseableReference(Object obj, s8.c cVar, c cVar2, Throwable th2, boolean z10) {
        this.f9842e = new s8.d(obj, cVar, z10);
        this.f9843i = cVar2;
        this.f9844o = th2;
    }
}
