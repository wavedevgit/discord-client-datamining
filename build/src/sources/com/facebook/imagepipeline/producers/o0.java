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
    final Map f10913a;

    /* renamed from: b  reason: collision with root package name */
    private final w0 f10914b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f10915c;

    /* renamed from: d  reason: collision with root package name */
    private final String f10916d;

    /* renamed from: e  reason: collision with root package name */
    private final String f10917e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f10918a;

        /* renamed from: b  reason: collision with root package name */
        private final CopyOnWriteArraySet f10919b = p8.l.a();

        /* renamed from: c  reason: collision with root package name */
        private Closeable f10920c;

        /* renamed from: d  reason: collision with root package name */
        private float f10921d;

        /* renamed from: e  reason: collision with root package name */
        private int f10922e;

        /* renamed from: f  reason: collision with root package name */
        private e f10923f;

        /* renamed from: g  reason: collision with root package name */
        private b f10924g;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.facebook.imagepipeline.producers.o0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class C0182a extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ Pair f10926a;

            C0182a(Pair pair) {
                this.f10926a = pair;
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
                        remove = a.this.f10919b.remove(this.f10926a);
                        list = null;
                        if (remove) {
                            if (a.this.f10919b.isEmpty()) {
                                eVar = a.this.f10923f;
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
                    if (o0.this.f10915c && !eVar.Q()) {
                        e.e(eVar.l(Priority.f10480e));
                    } else {
                        eVar.f();
                    }
                }
                if (remove) {
                    ((Consumer) this.f10926a.first).a();
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
                    if (za.b.d()) {
                        za.b.a("MultiplexProducer#onCancellation");
                    }
                    a.this.m(this);
                    if (za.b.d()) {
                        za.b.b();
                    }
                } catch (Throwable th2) {
                    if (za.b.d()) {
                        za.b.b();
                    }
                    throw th2;
                }
            }

            @Override // com.facebook.imagepipeline.producers.c
            protected void g(Throwable th2) {
                try {
                    if (za.b.d()) {
                        za.b.a("MultiplexProducer#onFailure");
                    }
                    a.this.n(this, th2);
                    if (za.b.d()) {
                        za.b.b();
                    }
                } catch (Throwable th3) {
                    if (za.b.d()) {
                        za.b.b();
                    }
                    throw th3;
                }
            }

            @Override // com.facebook.imagepipeline.producers.c
            protected void i(float f10) {
                try {
                    if (za.b.d()) {
                        za.b.a("MultiplexProducer#onProgressUpdate");
                    }
                    a.this.p(this, f10);
                    if (za.b.d()) {
                        za.b.b();
                    }
                } catch (Throwable th2) {
                    if (za.b.d()) {
                        za.b.b();
                    }
                    throw th2;
                }
            }

            /* JADX INFO: Access modifiers changed from: protected */
            @Override // com.facebook.imagepipeline.producers.c
            /* renamed from: o */
            public void h(Closeable closeable, int i10) {
                try {
                    if (za.b.d()) {
                        za.b.a("MultiplexProducer#onNewResult");
                    }
                    a.this.o(this, closeable, i10);
                    if (za.b.d()) {
                        za.b.b();
                    }
                } catch (Throwable th2) {
                    if (za.b.d()) {
                        za.b.b();
                    }
                    throw th2;
                }
            }

            private b() {
            }
        }

        public a(Object obj) {
            this.f10918a = obj;
        }

        private void g(Pair pair, ProducerContext producerContext) {
            producerContext.g(new C0182a(pair));
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
            Iterator it = this.f10919b.iterator();
            while (it.hasNext()) {
                if (((ProducerContext) ((Pair) it.next()).second).z()) {
                    return true;
                }
            }
            return false;
        }

        private synchronized boolean k() {
            Iterator it = this.f10919b.iterator();
            while (it.hasNext()) {
                if (!((ProducerContext) ((Pair) it.next()).second).Q()) {
                    return false;
                }
            }
            return true;
        }

        private synchronized Priority l() {
            Priority priority;
            priority = Priority.f10480e;
            Iterator it = this.f10919b.iterator();
            while (it.hasNext()) {
                priority = Priority.d(priority, ((ProducerContext) ((Pair) it.next()).second).C());
            }
            return priority;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void q(x8.e eVar) {
            boolean z10;
            synchronized (this) {
                try {
                    boolean z11 = false;
                    if (this.f10923f == null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    p8.j.b(Boolean.valueOf(z10));
                    if (this.f10924g == null) {
                        z11 = true;
                    }
                    p8.j.b(Boolean.valueOf(z11));
                    if (this.f10919b.isEmpty()) {
                        o0.this.k(this.f10918a, this);
                        return;
                    }
                    ProducerContext producerContext = (ProducerContext) ((Pair) this.f10919b.iterator().next()).second;
                    e eVar2 = new e(producerContext.I(), producerContext.getId(), producerContext.y(), producerContext.a(), producerContext.C0(), k(), j(), l(), producerContext.k());
                    this.f10923f = eVar2;
                    eVar2.J(producerContext.getExtras());
                    if (eVar.d()) {
                        this.f10923f.p("started_as_prefetch", Boolean.valueOf(eVar.a()));
                    }
                    b bVar = new b();
                    this.f10924g = bVar;
                    o0.this.f10914b.b(bVar, this.f10923f);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public synchronized List r() {
            e eVar = this.f10923f;
            if (eVar == null) {
                return null;
            }
            return eVar.i(j());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public synchronized List s() {
            e eVar = this.f10923f;
            if (eVar == null) {
                return null;
            }
            return eVar.j(k());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public synchronized List t() {
            e eVar = this.f10923f;
            if (eVar == null) {
                return null;
            }
            return eVar.l(l());
        }

        public boolean h(Consumer consumer, ProducerContext producerContext) {
            Pair create = Pair.create(consumer, producerContext);
            synchronized (this) {
                try {
                    if (o0.this.i(this.f10918a) != this) {
                        return false;
                    }
                    this.f10919b.add(create);
                    List s10 = s();
                    List t10 = t();
                    List r10 = r();
                    Closeable closeable = this.f10920c;
                    float f10 = this.f10921d;
                    int i10 = this.f10922e;
                    e.d(s10);
                    e.e(t10);
                    e.c(r10);
                    synchronized (create) {
                        try {
                            synchronized (this) {
                                if (closeable != this.f10920c) {
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
                    if (this.f10924g != bVar) {
                        return;
                    }
                    this.f10924g = null;
                    this.f10923f = null;
                    i(this.f10920c);
                    this.f10920c = null;
                    q(x8.e.UNSET);
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public void n(b bVar, Throwable th2) {
            synchronized (this) {
                try {
                    if (this.f10924g != bVar) {
                        return;
                    }
                    Iterator it = this.f10919b.iterator();
                    this.f10919b.clear();
                    o0.this.k(this.f10918a, this);
                    i(this.f10920c);
                    this.f10920c = null;
                    while (it.hasNext()) {
                        Pair pair = (Pair) it.next();
                        synchronized (pair) {
                            try {
                                ((ProducerContext) pair.second).y().k((ProducerContext) pair.second, o0.this.f10916d, th2, null);
                                e eVar = this.f10923f;
                                if (eVar != null) {
                                    ((ProducerContext) pair.second).J(eVar.getExtras());
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
                    if (this.f10924g != bVar) {
                        return;
                    }
                    i(this.f10920c);
                    this.f10920c = null;
                    Iterator it = this.f10919b.iterator();
                    int size = this.f10919b.size();
                    if (c.e(i10)) {
                        this.f10920c = o0.this.g(closeable);
                        this.f10922e = i10;
                    } else {
                        this.f10919b.clear();
                        o0.this.k(this.f10918a, this);
                    }
                    while (it.hasNext()) {
                        Pair pair = (Pair) it.next();
                        synchronized (pair) {
                            try {
                                if (c.d(i10)) {
                                    ((ProducerContext) pair.second).y().j((ProducerContext) pair.second, o0.this.f10916d, null);
                                    e eVar = this.f10923f;
                                    if (eVar != null) {
                                        ((ProducerContext) pair.second).J(eVar.getExtras());
                                    }
                                    ((ProducerContext) pair.second).p(o0.this.f10917e, Integer.valueOf(size));
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
                    if (this.f10924g != bVar) {
                        return;
                    }
                    this.f10921d = f10;
                    Iterator it = this.f10919b.iterator();
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
        this.f10913a.put(obj, aVar);
        return aVar;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        a i10;
        boolean z10;
        try {
            if (za.b.d()) {
                za.b.a("MultiplexProducer#produceResults");
            }
            producerContext.y().d(producerContext, this.f10916d);
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
                i10.q(x8.e.e(producerContext.Q()));
            }
            if (za.b.d()) {
                za.b.b();
            }
        } catch (Throwable th2) {
            if (za.b.d()) {
                za.b.b();
            }
            throw th2;
        }
    }

    protected abstract Closeable g(Closeable closeable);

    protected synchronized a i(Object obj) {
        return (a) this.f10913a.get(obj);
    }

    protected abstract Object j(ProducerContext producerContext);

    protected synchronized void k(Object obj, a aVar) {
        if (this.f10913a.get(obj) == aVar) {
            this.f10913a.remove(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public o0(w0 w0Var, String str, String str2, boolean z10) {
        this.f10914b = w0Var;
        this.f10913a = new HashMap();
        this.f10915c = z10;
        this.f10916d = str;
        this.f10917e = str2;
    }
}
