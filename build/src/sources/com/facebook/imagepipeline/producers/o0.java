package com.facebook.imagepipeline.producers;

import android.util.Pair;
import com.facebook.imagepipeline.common.Priority;
import java.io.Closeable;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class o0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    final Map f11892a;

    /* renamed from: b  reason: collision with root package name */
    private final w0 f11893b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f11894c;

    /* renamed from: d  reason: collision with root package name */
    private final String f11895d;

    /* renamed from: e  reason: collision with root package name */
    private final String f11896e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f11897a;

        /* renamed from: b  reason: collision with root package name */
        private final CopyOnWriteArraySet f11898b = o8.l.a();

        /* renamed from: c  reason: collision with root package name */
        private Closeable f11899c;

        /* renamed from: d  reason: collision with root package name */
        private float f11900d;

        /* renamed from: e  reason: collision with root package name */
        private int f11901e;

        /* renamed from: f  reason: collision with root package name */
        private e f11902f;

        /* renamed from: g  reason: collision with root package name */
        private b f11903g;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.facebook.imagepipeline.producers.o0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class C0160a extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ Pair f11905a;

            C0160a(Pair pair) {
                this.f11905a = pair;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                e.c(a.this.r());
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                boolean remove;
                List list;
                e eVar;
                List list2;
                List list3;
                synchronized (a.this) {
                    try {
                        remove = a.this.f11898b.remove(this.f11905a);
                        list = null;
                        if (remove) {
                            if (a.this.f11898b.isEmpty()) {
                                eVar = a.this.f11902f;
                                list2 = null;
                            } else {
                                List s10 = a.this.s();
                                list2 = a.this.t();
                                list3 = a.this.r();
                                eVar = null;
                                list = s10;
                            }
                        } else {
                            eVar = null;
                            list2 = null;
                        }
                        list3 = list2;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                e.d(list);
                e.e(list2);
                e.c(list3);
                if (eVar != null) {
                    if (o0.this.f11894c && !eVar.C0()) {
                        e.e(eVar.k(Priority.f11459e));
                    } else {
                        eVar.f();
                    }
                }
                if (remove) {
                    ((Consumer) this.f11905a.first).a();
                }
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void c() {
                e.e(a.this.t());
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void d() {
                e.d(a.this.s());
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class b extends c {
            @Override // com.facebook.imagepipeline.producers.c
            protected void f() {
                try {
                    if (ya.b.d()) {
                        ya.b.a("MultiplexProducer#onCancellation");
                    }
                    a.this.m(this);
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                } catch (Throwable th2) {
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                    throw th2;
                }
            }

            @Override // com.facebook.imagepipeline.producers.c
            protected void g(Throwable th2) {
                try {
                    if (ya.b.d()) {
                        ya.b.a("MultiplexProducer#onFailure");
                    }
                    a.this.n(this, th2);
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                } catch (Throwable th3) {
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                    throw th3;
                }
            }

            @Override // com.facebook.imagepipeline.producers.c
            protected void i(float f10) {
                try {
                    if (ya.b.d()) {
                        ya.b.a("MultiplexProducer#onProgressUpdate");
                    }
                    a.this.p(this, f10);
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                } catch (Throwable th2) {
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                    throw th2;
                }
            }

            /* JADX INFO: Access modifiers changed from: protected */
            @Override // com.facebook.imagepipeline.producers.c
            /* renamed from: o */
            public void h(Closeable closeable, int i10) {
                try {
                    if (ya.b.d()) {
                        ya.b.a("MultiplexProducer#onNewResult");
                    }
                    a.this.o(this, closeable, i10);
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                } catch (Throwable th2) {
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                    throw th2;
                }
            }

            private b() {
            }
        }

        public a(Object obj) {
            this.f11897a = obj;
        }

        private void g(Pair pair, ProducerContext producerContext) {
            producerContext.h(new C0160a(pair));
        }

        private void i(Closeable closeable) {
            if (closeable != null) {
                try {
                    closeable.close();
                } catch (IOException e10) {
                    throw new RuntimeException(e10);
                }
            }
        }

        private synchronized boolean j() {
            Iterator it = this.f11898b.iterator();
            while (it.hasNext()) {
                if (((ProducerContext) ((Pair) it.next()).second).L()) {
                    return true;
                }
            }
            return false;
        }

        private synchronized boolean k() {
            Iterator it = this.f11898b.iterator();
            while (it.hasNext()) {
                if (!((ProducerContext) ((Pair) it.next()).second).C0()) {
                    return false;
                }
            }
            return true;
        }

        private synchronized Priority l() {
            Priority priority;
            priority = Priority.f11459e;
            Iterator it = this.f11898b.iterator();
            while (it.hasNext()) {
                priority = Priority.d(priority, ((ProducerContext) ((Pair) it.next()).second).N());
            }
            return priority;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(w8.e eVar) {
            boolean z10;
            synchronized (this) {
                try {
                    boolean z11 = false;
                    if (this.f11902f == null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    o8.j.b(Boolean.valueOf(z10));
                    if (this.f11903g == null) {
                        z11 = true;
                    }
                    o8.j.b(Boolean.valueOf(z11));
                    if (this.f11898b.isEmpty()) {
                        o0.this.k(this.f11897a, this);
                        return;
                    }
                    ProducerContext producerContext = (ProducerContext) ((Pair) this.f11898b.iterator().next()).second;
                    e eVar2 = new e(producerContext.V(), producerContext.getId(), producerContext.F(), producerContext.a(), producerContext.E0(), k(), j(), l(), producerContext.l());
                    this.f11902f = eVar2;
                    eVar2.A0(producerContext.getExtras());
                    if (eVar.d()) {
                        this.f11902f.B("started_as_prefetch", Boolean.valueOf(eVar.a()));
                    }
                    b bVar = new b();
                    this.f11903g = bVar;
                    o0.this.f11893b.b(bVar, this.f11902f);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public synchronized List r() {
            e eVar = this.f11902f;
            if (eVar == null) {
                return null;
            }
            return eVar.i(j());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public synchronized List s() {
            e eVar = this.f11902f;
            if (eVar == null) {
                return null;
            }
            return eVar.j(k());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public synchronized List t() {
            e eVar = this.f11902f;
            if (eVar == null) {
                return null;
            }
            return eVar.k(l());
        }

        public boolean h(Consumer consumer, ProducerContext producerContext) {
            Pair create = Pair.create(consumer, producerContext);
            synchronized (this) {
                try {
                    if (o0.this.i(this.f11897a) != this) {
                        return false;
                    }
                    this.f11898b.add(create);
                    List s10 = s();
                    List t10 = t();
                    List r10 = r();
                    Closeable closeable = this.f11899c;
                    float f10 = this.f11900d;
                    int i10 = this.f11901e;
                    e.d(s10);
                    e.e(t10);
                    e.c(r10);
                    synchronized (create) {
                        try {
                            synchronized (this) {
                                if (closeable != this.f11899c) {
                                    closeable = null;
                                } else if (closeable != null) {
                                    closeable = o0.this.g(closeable);
                                }
                            }
                            if (closeable != null) {
                                if (f10 > 0.0f) {
                                    consumer.c(f10);
                                }
                                consumer.b(closeable, i10);
                                i(closeable);
                            }
                        } finally {
                        }
                    }
                    g(create, producerContext);
                    return true;
                } finally {
                }
            }
        }

        public void m(b bVar) {
            synchronized (this) {
                try {
                    if (this.f11903g != bVar) {
                        return;
                    }
                    this.f11903g = null;
                    this.f11902f = null;
                    i(this.f11899c);
                    this.f11899c = null;
                    q(w8.e.UNSET);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public void n(b bVar, Throwable th2) {
            synchronized (this) {
                try {
                    if (this.f11903g != bVar) {
                        return;
                    }
                    Iterator it = this.f11898b.iterator();
                    this.f11898b.clear();
                    o0.this.k(this.f11897a, this);
                    i(this.f11899c);
                    this.f11899c = null;
                    while (it.hasNext()) {
                        Pair pair = (Pair) it.next();
                        synchronized (pair) {
                            try {
                                ((ProducerContext) pair.second).F().k((ProducerContext) pair.second, o0.this.f11895d, th2, null);
                                e eVar = this.f11902f;
                                if (eVar != null) {
                                    ((ProducerContext) pair.second).A0(eVar.getExtras());
                                }
                                ((Consumer) pair.first).onFailure(th2);
                            } finally {
                            }
                        }
                    }
                } finally {
                }
            }
        }

        public void o(b bVar, Closeable closeable, int i10) {
            synchronized (this) {
                try {
                    if (this.f11903g != bVar) {
                        return;
                    }
                    i(this.f11899c);
                    this.f11899c = null;
                    Iterator it = this.f11898b.iterator();
                    int size = this.f11898b.size();
                    if (c.e(i10)) {
                        this.f11899c = o0.this.g(closeable);
                        this.f11901e = i10;
                    } else {
                        this.f11898b.clear();
                        o0.this.k(this.f11897a, this);
                    }
                    while (it.hasNext()) {
                        Pair pair = (Pair) it.next();
                        synchronized (pair) {
                            try {
                                if (c.d(i10)) {
                                    ((ProducerContext) pair.second).F().j((ProducerContext) pair.second, o0.this.f11895d, null);
                                    e eVar = this.f11902f;
                                    if (eVar != null) {
                                        ((ProducerContext) pair.second).A0(eVar.getExtras());
                                    }
                                    ((ProducerContext) pair.second).B(o0.this.f11896e, Integer.valueOf(size));
                                }
                                ((Consumer) pair.first).b(closeable, i10);
                            } finally {
                            }
                        }
                    }
                } finally {
                }
            }
        }

        public void p(b bVar, float f10) {
            synchronized (this) {
                try {
                    if (this.f11903g != bVar) {
                        return;
                    }
                    this.f11900d = f10;
                    Iterator it = this.f11898b.iterator();
                    while (it.hasNext()) {
                        Pair pair = (Pair) it.next();
                        synchronized (pair) {
                            ((Consumer) pair.first).c(f10);
                        }
                    }
                } finally {
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public o0(w0 w0Var, String str, String str2) {
        this(w0Var, str, str2, false);
    }

    private synchronized a h(Object obj) {
        a aVar;
        aVar = new a(obj);
        this.f11892a.put(obj, aVar);
        return aVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        a i10;
        boolean z10;
        try {
            if (ya.b.d()) {
                ya.b.a("MultiplexProducer#produceResults");
            }
            producerContext.F().d(producerContext, this.f11895d);
            Object j10 = j(producerContext);
            do {
                synchronized (this) {
                    i10 = i(j10);
                    if (i10 == null) {
                        i10 = h(j10);
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                }
            } while (!i10.h(consumer, producerContext));
            if (z10) {
                i10.q(w8.e.e(producerContext.C0()));
            }
            if (ya.b.d()) {
                ya.b.b();
            }
        } catch (Throwable th2) {
            if (ya.b.d()) {
                ya.b.b();
            }
            throw th2;
        }
    }

    protected abstract Closeable g(Closeable closeable);

    protected synchronized a i(Object obj) {
        return (a) this.f11892a.get(obj);
    }

    protected abstract Object j(ProducerContext producerContext);

    protected synchronized void k(Object obj, a aVar) {
        if (this.f11892a.get(obj) == aVar) {
            this.f11892a.remove(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public o0(w0 w0Var, String str, String str2, boolean z10) {
        this.f11893b = w0Var;
        this.f11892a = new HashMap();
        this.f11894c = z10;
        this.f11895d = str;
        this.f11896e = str2;
    }
}
