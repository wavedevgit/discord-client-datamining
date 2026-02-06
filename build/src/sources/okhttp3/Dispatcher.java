package okhttp3;

import gu.e;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Dispatcher {

    /* renamed from: c  reason: collision with root package name */
    private Runnable f42843c;

    /* renamed from: d  reason: collision with root package name */
    private ExecutorService f42844d;

    /* renamed from: a  reason: collision with root package name */
    private int f42841a = 64;

    /* renamed from: b  reason: collision with root package name */
    private int f42842b = 5;

    /* renamed from: e  reason: collision with root package name */
    private final ArrayDeque f42845e = new ArrayDeque();

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f42846f = new ArrayDeque();

    /* renamed from: g  reason: collision with root package name */
    private final ArrayDeque f42847g = new ArrayDeque();

    private final e.a f(String str) {
        Iterator it = this.f42846f.iterator();
        while (it.hasNext()) {
            e.a aVar = (e.a) it.next();
            if (Intrinsics.areEqual(aVar.d(), str)) {
                return aVar;
            }
        }
        Iterator it2 = this.f42845e.iterator();
        while (it2.hasNext()) {
            e.a aVar2 = (e.a) it2.next();
            if (Intrinsics.areEqual(aVar2.d(), str)) {
                return aVar2;
            }
        }
        return null;
    }

    private final void g(Deque deque, Object obj) {
        Runnable runnable;
        synchronized (this) {
            if (deque.remove(obj)) {
                runnable = this.f42843c;
                Unit unit = Unit.f32008a;
            } else {
                throw new AssertionError("Call wasn't in-flight!");
            }
        }
        if (!k() && runnable != null) {
            runnable.run();
        }
    }

    private final boolean k() {
        int i10;
        boolean z10;
        if (cu.e.f20042h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        ArrayList arrayList = new ArrayList();
        synchronized (this) {
            try {
                Iterator it = this.f42845e.iterator();
                Intrinsics.checkNotNullExpressionValue(it, "readyAsyncCalls.iterator()");
                while (it.hasNext()) {
                    e.a asyncCall = (e.a) it.next();
                    if (this.f42846f.size() >= this.f42841a) {
                        break;
                    } else if (asyncCall.c().get() < this.f42842b) {
                        it.remove();
                        asyncCall.c().incrementAndGet();
                        Intrinsics.checkNotNullExpressionValue(asyncCall, "asyncCall");
                        arrayList.add(asyncCall);
                        this.f42846f.add(asyncCall);
                    }
                }
                if (n() > 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        int size = arrayList.size();
        for (i10 = 0; i10 < size; i10++) {
            ((e.a) arrayList.get(i10)).a(e());
        }
        return z10;
    }

    public final ExecutorService a() {
        return e();
    }

    public final synchronized void b() {
        try {
            Iterator it = this.f42845e.iterator();
            while (it.hasNext()) {
                ((e.a) it.next()).b().cancel();
            }
            Iterator it2 = this.f42846f.iterator();
            while (it2.hasNext()) {
                ((e.a) it2.next()).b().cancel();
            }
            Iterator it3 = this.f42847g.iterator();
            while (it3.hasNext()) {
                ((gu.e) it3.next()).cancel();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void c(e.a call) {
        e.a f10;
        Intrinsics.checkNotNullParameter(call, "call");
        synchronized (this) {
            try {
                this.f42845e.add(call);
                if (!call.b().n() && (f10 = f(call.d())) != null) {
                    call.e(f10);
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        k();
    }

    public final synchronized void d(gu.e call) {
        Intrinsics.checkNotNullParameter(call, "call");
        this.f42847g.add(call);
    }

    public final synchronized ExecutorService e() {
        ExecutorService executorService;
        try {
            if (this.f42844d == null) {
                TimeUnit timeUnit = TimeUnit.SECONDS;
                SynchronousQueue synchronousQueue = new SynchronousQueue();
                this.f42844d = new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, timeUnit, synchronousQueue, cu.e.N(cu.e.f20043i + " Dispatcher", false));
            }
            executorService = this.f42844d;
            Intrinsics.checkNotNull(executorService);
        } catch (Throwable th2) {
            throw th2;
        }
        return executorService;
    }

    public final void h(e.a call) {
        Intrinsics.checkNotNullParameter(call, "call");
        call.c().decrementAndGet();
        g(this.f42846f, call);
    }

    public final void i(gu.e call) {
        Intrinsics.checkNotNullParameter(call, "call");
        g(this.f42847g, call);
    }

    public final synchronized int j() {
        return this.f42841a;
    }

    public final synchronized List l() {
        List unmodifiableList;
        try {
            ArrayDeque<e.a> arrayDeque = this.f42845e;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(arrayDeque, 10));
            for (e.a aVar : arrayDeque) {
                arrayList.add(aVar.b());
            }
            unmodifiableList = Collections.unmodifiableList(arrayList);
            Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(readyAsyncCalls.map { it.call })");
        } catch (Throwable th2) {
            throw th2;
        }
        return unmodifiableList;
    }

    public final synchronized List m() {
        List unmodifiableList;
        try {
            ArrayDeque arrayDeque = this.f42847g;
            ArrayDeque<e.a> arrayDeque2 = this.f42846f;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(arrayDeque2, 10));
            for (e.a aVar : arrayDeque2) {
                arrayList.add(aVar.b());
            }
            unmodifiableList = Collections.unmodifiableList(CollectionsKt.L0(arrayDeque, arrayList));
            Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(running…yncCalls.map { it.call })");
        } catch (Throwable th2) {
            throw th2;
        }
        return unmodifiableList;
    }

    public final synchronized int n() {
        return this.f42846f.size() + this.f42847g.size();
    }

    public final void o(int i10) {
        if (i10 >= 1) {
            synchronized (this) {
                this.f42841a = i10;
                Unit unit = Unit.f32008a;
            }
            k();
            return;
        }
        throw new IllegalArgumentException(("max < 1: " + i10).toString());
    }

    public final void p(int i10) {
        if (i10 >= 1) {
            synchronized (this) {
                this.f42842b = i10;
                Unit unit = Unit.f32008a;
            }
            k();
            return;
        }
        throw new IllegalArgumentException(("max < 1: " + i10).toString());
    }
}
