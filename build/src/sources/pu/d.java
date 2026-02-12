package pu;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.RejectedExecutionException;
import java.util.logging.Level;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final e f43209a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43210b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f43211c;

    /* renamed from: d  reason: collision with root package name */
    private a f43212d;

    /* renamed from: e  reason: collision with root package name */
    private final List f43213e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f43214f;

    public d(e taskRunner, String name) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f43209a = taskRunner;
        this.f43210b = name;
        this.f43213e = new ArrayList();
    }

    public static /* synthetic */ void j(d dVar, a aVar, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = 0;
        }
        dVar.i(aVar, j10);
    }

    public final void a() {
        if (mu.e.f36664h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this.f43209a) {
            try {
                if (b()) {
                    this.f43209a.h(this);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean b() {
        a aVar = this.f43212d;
        if (aVar != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a()) {
                this.f43214f = true;
            }
        }
        boolean z10 = false;
        for (int size = this.f43213e.size() - 1; -1 < size; size--) {
            if (((a) this.f43213e.get(size)).a()) {
                a aVar2 = (a) this.f43213e.get(size);
                if (e.f43215h.a().isLoggable(Level.FINE)) {
                    b.a(aVar2, this, "canceled");
                }
                this.f43213e.remove(size);
                z10 = true;
            }
        }
        return z10;
    }

    public final a c() {
        return this.f43212d;
    }

    public final boolean d() {
        return this.f43214f;
    }

    public final List e() {
        return this.f43213e;
    }

    public final String f() {
        return this.f43210b;
    }

    public final boolean g() {
        return this.f43211c;
    }

    public final e h() {
        return this.f43209a;
    }

    public final void i(a task, long j10) {
        Intrinsics.checkNotNullParameter(task, "task");
        synchronized (this.f43209a) {
            if (this.f43211c) {
                if (task.a()) {
                    if (e.f43215h.a().isLoggable(Level.FINE)) {
                        b.a(task, this, "schedule canceled (queue is shutdown)");
                    }
                    return;
                }
                if (e.f43215h.a().isLoggable(Level.FINE)) {
                    b.a(task, this, "schedule failed (queue is shutdown)");
                }
                throw new RejectedExecutionException();
            }
            if (k(task, j10, false)) {
                this.f43209a.h(this);
            }
            Unit unit = Unit.f31988a;
        }
    }

    public final boolean k(a task, long j10, boolean z10) {
        String str;
        Intrinsics.checkNotNullParameter(task, "task");
        task.e(this);
        long c10 = this.f43209a.g().c();
        long j11 = c10 + j10;
        int indexOf = this.f43213e.indexOf(task);
        if (indexOf != -1) {
            if (task.c() <= j11) {
                if (e.f43215h.a().isLoggable(Level.FINE)) {
                    b.a(task, this, "already scheduled");
                }
                return false;
            }
            this.f43213e.remove(indexOf);
        }
        task.g(j11);
        if (e.f43215h.a().isLoggable(Level.FINE)) {
            if (z10) {
                str = "run again after " + b.b(j11 - c10);
            } else {
                str = "scheduled after " + b.b(j11 - c10);
            }
            b.a(task, this, str);
        }
        Iterator it = this.f43213e.iterator();
        int i10 = 0;
        while (true) {
            if (it.hasNext()) {
                if (((a) it.next()).c() - c10 > j10) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 == -1) {
            i10 = this.f43213e.size();
        }
        this.f43213e.add(i10, task);
        if (i10 != 0) {
            return false;
        }
        return true;
    }

    public final void l(a aVar) {
        this.f43212d = aVar;
    }

    public final void m(boolean z10) {
        this.f43214f = z10;
    }

    public final void n() {
        if (mu.e.f36664h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this.f43209a) {
            try {
                this.f43211c = true;
                if (b()) {
                    this.f43209a.h(this);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public String toString() {
        return this.f43210b;
    }
}
