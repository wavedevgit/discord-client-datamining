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
    private static int f10957q;

    /* renamed from: d  reason: collision with root package name */
    protected boolean f10960d = false;

    /* renamed from: e  reason: collision with root package name */
    protected final s8.d f10961e;

    /* renamed from: i  reason: collision with root package name */
    protected final c f10962i;

    /* renamed from: o  reason: collision with root package name */
    protected final Throwable f10963o;

    /* renamed from: p  reason: collision with root package name */
    private static Class f10956p = CloseableReference.class;

    /* renamed from: r  reason: collision with root package name */
    private static final s8.c f10958r = new a();

    /* renamed from: s  reason: collision with root package name */
    private static final c f10959s = new b();

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
            Class cls = CloseableReference.f10956p;
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
        this.f10961e = (s8.d) j.g(dVar);
        dVar.b();
        this.f10962i = cVar;
        this.f10963o = th2;
    }

    public static CloseableReference E(CloseableReference closeableReference) {
        if (closeableReference != null) {
            return closeableReference.B();
        }
        return null;
    }

    public static List F(Collection collection) {
        if (collection == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList(collection.size());
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            arrayList.add(E((CloseableReference) it.next()));
        }
        return arrayList;
    }

    public static boolean I0(CloseableReference closeableReference) {
        if (closeableReference != null && closeableReference.F0()) {
            return true;
        }
        return false;
    }

    public static CloseableReference J0(Closeable closeable) {
        return U0(closeable, f10958r);
    }

    public static void N(CloseableReference closeableReference) {
        if (closeableReference != null) {
            closeableReference.close();
        }
    }

    public static CloseableReference R0(Closeable closeable, c cVar) {
        Throwable th2 = null;
        if (closeable == null) {
            return null;
        }
        s8.c cVar2 = f10958r;
        if (cVar.a()) {
            th2 = new Throwable();
        }
        return Y0(closeable, cVar2, cVar, th2);
    }

    public static CloseableReference U0(Object obj, s8.c cVar) {
        return X0(obj, cVar, f10959s);
    }

    public static void V(Iterable iterable) {
        if (iterable != null) {
            Iterator it = iterable.iterator();
            while (it.hasNext()) {
                N((CloseableReference) it.next());
            }
        }
    }

    public static CloseableReference X0(Object obj, s8.c cVar, c cVar2) {
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
            int i10 = f10957q;
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

    public synchronized CloseableReference B() {
        if (F0()) {
            return clone();
        }
        return null;
    }

    public synchronized Object D0() {
        j.i(!this.f10960d);
        return j.g(this.f10961e.f());
    }

    public int E0() {
        if (F0()) {
            return System.identityHashCode(this.f10961e.f());
        }
        return 0;
    }

    public synchronized boolean F0() {
        return !this.f10960d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                if (this.f10960d) {
                    return;
                }
                this.f10960d = true;
                this.f10961e.d();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // 
    /* renamed from: l */
    public abstract CloseableReference clone();

    /* JADX INFO: Access modifiers changed from: protected */
    public CloseableReference(Object obj, s8.c cVar, c cVar2, Throwable th2, boolean z10) {
        this.f10961e = new s8.d(obj, cVar, z10);
        this.f10962i = cVar2;
        this.f10963o = th2;
    }
}
