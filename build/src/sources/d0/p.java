package d0;

import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements ListenableFuture {

    /* renamed from: d  reason: collision with root package name */
    List f20171d;

    /* renamed from: e  reason: collision with root package name */
    List f20172e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f20173i;

    /* renamed from: o  reason: collision with root package name */
    private final AtomicInteger f20174o;

    /* renamed from: p  reason: collision with root package name */
    private final ListenableFuture f20175p = androidx.concurrent.futures.c.a(new a());

    /* renamed from: q  reason: collision with root package name */
    c.a f20176q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements c.InterfaceC0029c {
        a() {
        }

        @Override // androidx.concurrent.futures.c.InterfaceC0029c
        public Object a(c.a aVar) {
            boolean z10;
            if (p.this.f20176q == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The result can only set once!");
            p.this.f20176q = aVar;
            return "ListFuture[" + this + "]";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            p pVar = p.this;
            pVar.f20172e = null;
            pVar.f20171d = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f20179d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f20180e;

        c(int i10, ListenableFuture listenableFuture) {
            this.f20179d = i10;
            this.f20180e = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            p.this.f(this.f20179d, this.f20180e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(List list, boolean z10, Executor executor) {
        this.f20171d = (List) b2.e.g(list);
        this.f20172e = new ArrayList(list.size());
        this.f20173i = z10;
        this.f20174o = new AtomicInteger(list.size());
        e(executor);
    }

    private void b() {
        List<ListenableFuture> list = this.f20171d;
        if (list != null && !isDone()) {
            for (ListenableFuture listenableFuture : list) {
                while (!listenableFuture.isDone()) {
                    try {
                        listenableFuture.get();
                    } catch (Error e10) {
                        throw e10;
                    } catch (InterruptedException e11) {
                        throw e11;
                    } catch (Throwable unused) {
                        if (this.f20173i) {
                            return;
                        }
                    }
                }
            }
        }
    }

    private void e(Executor executor) {
        a(new b(), c0.a.a());
        if (this.f20171d.isEmpty()) {
            this.f20176q.c(new ArrayList(this.f20172e));
            return;
        }
        for (int i10 = 0; i10 < this.f20171d.size(); i10++) {
            this.f20172e.add(null);
        }
        List list = this.f20171d;
        for (int i11 = 0; i11 < list.size(); i11++) {
            ListenableFuture listenableFuture = (ListenableFuture) list.get(i11);
            listenableFuture.a(new c(i11, listenableFuture), executor);
        }
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public void a(Runnable runnable, Executor executor) {
        this.f20175p.a(runnable, executor);
    }

    @Override // java.util.concurrent.Future
    /* renamed from: c */
    public List get() {
        b();
        return (List) this.f20175p.get();
    }

    @Override // java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        List<ListenableFuture> list = this.f20171d;
        if (list != null) {
            for (ListenableFuture listenableFuture : list) {
                listenableFuture.cancel(z10);
            }
        }
        return this.f20175p.cancel(z10);
    }

    @Override // java.util.concurrent.Future
    /* renamed from: d */
    public List get(long j10, TimeUnit timeUnit) {
        return (List) this.f20175p.get(j10, timeUnit);
    }

    void f(int i10, Future future) {
        c.a aVar;
        ArrayList arrayList;
        List list = this.f20172e;
        if (!isDone() && list != null) {
            boolean z10 = true;
            try {
                try {
                    try {
                        try {
                            try {
                                b2.e.j(future.isDone(), "Tried to set value from future which is not done");
                                list.set(i10, n.m(future));
                                int decrementAndGet = this.f20174o.decrementAndGet();
                                if (decrementAndGet < 0) {
                                    z10 = false;
                                }
                                b2.e.j(z10, "Less than 0 remaining futures");
                                if (decrementAndGet == 0) {
                                    List list2 = this.f20172e;
                                    if (list2 != null) {
                                        this.f20176q.c(new ArrayList(list2));
                                        return;
                                    } else {
                                        b2.e.i(isDone());
                                        return;
                                    }
                                }
                                return;
                            } catch (ExecutionException e10) {
                                if (this.f20173i) {
                                    this.f20176q.f(e10.getCause());
                                }
                                int decrementAndGet2 = this.f20174o.decrementAndGet();
                                if (decrementAndGet2 < 0) {
                                    z10 = false;
                                }
                                b2.e.j(z10, "Less than 0 remaining futures");
                                if (decrementAndGet2 == 0) {
                                    List list3 = this.f20172e;
                                    if (list3 != null) {
                                        aVar = this.f20176q;
                                        arrayList = new ArrayList(list3);
                                        aVar.c(arrayList);
                                        return;
                                    }
                                    b2.e.i(isDone());
                                    return;
                                }
                                return;
                            }
                        } catch (CancellationException unused) {
                            if (this.f20173i) {
                                cancel(false);
                            }
                            int decrementAndGet3 = this.f20174o.decrementAndGet();
                            if (decrementAndGet3 < 0) {
                                z10 = false;
                            }
                            b2.e.j(z10, "Less than 0 remaining futures");
                            if (decrementAndGet3 == 0) {
                                List list4 = this.f20172e;
                                if (list4 != null) {
                                    aVar = this.f20176q;
                                    arrayList = new ArrayList(list4);
                                    aVar.c(arrayList);
                                    return;
                                }
                                b2.e.i(isDone());
                                return;
                            }
                            return;
                        }
                    } catch (Error e11) {
                        this.f20176q.f(e11);
                        int decrementAndGet4 = this.f20174o.decrementAndGet();
                        if (decrementAndGet4 < 0) {
                            z10 = false;
                        }
                        b2.e.j(z10, "Less than 0 remaining futures");
                        if (decrementAndGet4 == 0) {
                            List list5 = this.f20172e;
                            if (list5 != null) {
                                aVar = this.f20176q;
                                arrayList = new ArrayList(list5);
                                aVar.c(arrayList);
                                return;
                            }
                            b2.e.i(isDone());
                            return;
                        }
                        return;
                    }
                } catch (RuntimeException e12) {
                    if (this.f20173i) {
                        this.f20176q.f(e12);
                    }
                    int decrementAndGet5 = this.f20174o.decrementAndGet();
                    if (decrementAndGet5 < 0) {
                        z10 = false;
                    }
                    b2.e.j(z10, "Less than 0 remaining futures");
                    if (decrementAndGet5 == 0) {
                        List list6 = this.f20172e;
                        if (list6 != null) {
                            aVar = this.f20176q;
                            arrayList = new ArrayList(list6);
                            aVar.c(arrayList);
                            return;
                        }
                        b2.e.i(isDone());
                        return;
                    }
                    return;
                }
            } catch (Throwable th2) {
                int decrementAndGet6 = this.f20174o.decrementAndGet();
                if (decrementAndGet6 < 0) {
                    z10 = false;
                }
                b2.e.j(z10, "Less than 0 remaining futures");
                if (decrementAndGet6 == 0) {
                    List list7 = this.f20172e;
                    if (list7 != null) {
                        this.f20176q.c(new ArrayList(list7));
                    } else {
                        b2.e.i(isDone());
                    }
                }
                throw th2;
            }
        }
        b2.e.j(this.f20173i, "Future was done before all dependencies completed");
    }

    @Override // java.util.concurrent.Future
    public boolean isCancelled() {
        return this.f20175p.isCancelled();
    }

    @Override // java.util.concurrent.Future
    public boolean isDone() {
        return this.f20175p.isDone();
    }
}
