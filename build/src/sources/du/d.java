package du;

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
    private final e f21251a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21252b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21253c;

    /* renamed from: d  reason: collision with root package name */
    private a f21254d;

    /* renamed from: e  reason: collision with root package name */
    private final List f21255e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f21256f;

    public d(e taskRunner, String name) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21251a = taskRunner;
        this.f21252b = name;
        this.f21255e = new ArrayList();
    }

    public static /* synthetic */ void j(d dVar, a aVar, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = 0;
        }
        dVar.i(aVar, j10);
    }

    public final void a() {
        if (au.e.f6000h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this.f21251a) {
            try {
                if (b()) {
                    this.f21251a.h(this);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean b() {
        a aVar = this.f21254d;
        if (aVar != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a()) {
                this.f21256f = true;
            }
        }
        boolean z10 = false;
        for (int size = this.f21255e.size() - 1; -1 < size; size--) {
            if (((a) this.f21255e.get(size)).a()) {
                a aVar2 = (a) this.f21255e.get(size);
                if (e.f21257h.a().isLoggable(Level.FINE)) {
                    b.a(aVar2, this, "canceled");
                }
                this.f21255e.remove(size);
                z10 = true;
            }
        }
        return z10;
    }

    public final a c() {
        return this.f21254d;
    }

    public final boolean d() {
        return this.f21256f;
    }

    public final List e() {
        return this.f21255e;
    }

    public final String f() {
        return this.f21252b;
    }

    public final boolean g() {
        return this.f21253c;
    }

    public final e h() {
        return this.f21251a;
    }

    public final void i(a task, long j10) {
        Intrinsics.checkNotNullParameter(task, "task");
        synchronized (this.f21251a) {
            if (this.f21253c) {
                if (task.a()) {
                    if (e.f21257h.a().isLoggable(Level.FINE)) {
                        b.a(task, this, "schedule canceled (queue is shutdown)");
                    }
                    return;
                }
                if (e.f21257h.a().isLoggable(Level.FINE)) {
                    b.a(task, this, "schedule failed (queue is shutdown)");
                }
                throw new RejectedExecutionException();
            }
            if (k(task, j10, false)) {
                this.f21251a.h(this);
            }
            Unit unit = Unit.f31988a;
        }
    }

    public final boolean k(a task, long j10, boolean z10) {
        String str;
        Intrinsics.checkNotNullParameter(task, "task");
        task.e(this);
        long c10 = this.f21251a.g().c();
        long j11 = c10 + j10;
        int indexOf = this.f21255e.indexOf(task);
        if (indexOf != -1) {
            if (task.c() <= j11) {
                if (e.f21257h.a().isLoggable(Level.FINE)) {
                    b.a(task, this, "already scheduled");
                }
                return false;
            }
            this.f21255e.remove(indexOf);
        }
        task.g(j11);
        if (e.f21257h.a().isLoggable(Level.FINE)) {
            if (z10) {
                str = "run again after " + b.b(j11 - c10);
            } else {
                str = "scheduled after " + b.b(j11 - c10);
            }
            b.a(task, this, str);
        }
        Iterator it = this.f21255e.iterator();
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
            i10 = this.f21255e.size();
        }
        this.f21255e.add(i10, task);
        if (i10 != 0) {
            return false;
        }
        return true;
    }

    public final void l(a aVar) {
        this.f21254d = aVar;
    }

    public final void m(boolean z10) {
        this.f21256f = z10;
    }

    public final void n() {
        if (au.e.f6000h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this.f21251a) {
            try {
                this.f21253c = true;
                if (b()) {
                    this.f21251a.h(this);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public String toString() {
        return this.f21252b;
    }
}
