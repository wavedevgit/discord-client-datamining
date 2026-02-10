package androidx.concurrent.futures;

import com.google.common.util.concurrent.ListenableFuture;
import java.lang.ref.WeakReference;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        Object f2362a;

        /* renamed from: b  reason: collision with root package name */
        d f2363b;

        /* renamed from: c  reason: collision with root package name */
        private androidx.concurrent.futures.d f2364c = androidx.concurrent.futures.d.w();

        /* renamed from: d  reason: collision with root package name */
        private boolean f2365d;

        a() {
        }

        private void e() {
            this.f2362a = null;
            this.f2363b = null;
            this.f2364c = null;
        }

        public void a(Runnable runnable, Executor executor) {
            androidx.concurrent.futures.d dVar = this.f2364c;
            if (dVar != null) {
                dVar.a(runnable, executor);
            }
        }

        void b() {
            this.f2362a = null;
            this.f2363b = null;
            this.f2364c.s(null);
        }

        public boolean c(Object obj) {
            boolean z10 = true;
            this.f2365d = true;
            d dVar = this.f2363b;
            z10 = (dVar == null || !dVar.c(obj)) ? false : false;
            if (z10) {
                e();
            }
            return z10;
        }

        public boolean d() {
            boolean z10 = true;
            this.f2365d = true;
            d dVar = this.f2363b;
            z10 = (dVar == null || !dVar.b(true)) ? false : false;
            if (z10) {
                e();
            }
            return z10;
        }

        public boolean f(Throwable th2) {
            boolean z10 = true;
            this.f2365d = true;
            d dVar = this.f2363b;
            z10 = (dVar == null || !dVar.d(th2)) ? false : false;
            if (z10) {
                e();
            }
            return z10;
        }

        protected void finalize() {
            androidx.concurrent.futures.d dVar;
            d dVar2 = this.f2363b;
            if (dVar2 != null && !dVar2.isDone()) {
                dVar2.d(new b("The completer object was garbage collected - this future would otherwise never complete. The tag was: " + this.f2362a));
            }
            if (!this.f2365d && (dVar = this.f2364c) != null) {
                dVar.s(null);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Throwable {
        b(String str) {
            super(str);
        }

        @Override // java.lang.Throwable
        public synchronized Throwable fillInStackTrace() {
            return this;
        }
    }

    /* renamed from: androidx.concurrent.futures.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0026c {
        Object a(a aVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d implements ListenableFuture {

        /* renamed from: d  reason: collision with root package name */
        final WeakReference f2366d;

        /* renamed from: e  reason: collision with root package name */
        private final androidx.concurrent.futures.a f2367e = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a extends androidx.concurrent.futures.a {
            a() {
            }

            @Override // androidx.concurrent.futures.a
            protected String o() {
                a aVar = (a) d.this.f2366d.get();
                if (aVar == null) {
                    return "Completer object has been garbage collected, future will fail soon";
                }
                return "tag=[" + aVar.f2362a + "]";
            }
        }

        d(a aVar) {
            this.f2366d = new WeakReference(aVar);
        }

        @Override // com.google.common.util.concurrent.ListenableFuture
        public void a(Runnable runnable, Executor executor) {
            this.f2367e.a(runnable, executor);
        }

        boolean b(boolean z10) {
            return this.f2367e.cancel(z10);
        }

        boolean c(Object obj) {
            return this.f2367e.s(obj);
        }

        @Override // java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            a aVar = (a) this.f2366d.get();
            boolean cancel = this.f2367e.cancel(z10);
            if (cancel && aVar != null) {
                aVar.b();
            }
            return cancel;
        }

        boolean d(Throwable th2) {
            return this.f2367e.t(th2);
        }

        @Override // java.util.concurrent.Future
        public Object get() {
            return this.f2367e.get();
        }

        @Override // java.util.concurrent.Future
        public boolean isCancelled() {
            return this.f2367e.isCancelled();
        }

        @Override // java.util.concurrent.Future
        public boolean isDone() {
            return this.f2367e.isDone();
        }

        public String toString() {
            return this.f2367e.toString();
        }

        @Override // java.util.concurrent.Future
        public Object get(long j10, TimeUnit timeUnit) {
            return this.f2367e.get(j10, timeUnit);
        }
    }

    public static ListenableFuture a(InterfaceC0026c interfaceC0026c) {
        a aVar = new a();
        d dVar = new d(aVar);
        aVar.f2363b = dVar;
        aVar.f2362a = interfaceC0026c.getClass();
        try {
            Object a10 = interfaceC0026c.a(aVar);
            if (a10 != null) {
                aVar.f2362a = a10;
                return dVar;
            }
            return dVar;
        } catch (Exception e10) {
            dVar.d(e10);
            return dVar;
        }
    }
}
