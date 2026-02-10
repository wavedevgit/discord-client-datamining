package gu;

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
    private final e f24813a;

    /* renamed from: b  reason: collision with root package name */
    private final String f24814b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f24815c;

    /* renamed from: d  reason: collision with root package name */
    private a f24816d;

    /* renamed from: e  reason: collision with root package name */
    private final List f24817e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f24818f;

    public d(e taskRunner, String name) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f24813a = taskRunner;
        this.f24814b = name;
        this.f24817e = new ArrayList();
    }

    public static /* synthetic */ void j(d dVar, a aVar, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = 0;
        }
        dVar.i(aVar, j10);
    }

    public final void a() {
        if (du.e.f20986h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this.f24813a) {
            try {
                if (b()) {
                    this.f24813a.h(this);
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean b() {
        a aVar = this.f24816d;
        if (aVar != null) {
            Intrinsics.checkNotNull(aVar);
            if (aVar.a()) {
                this.f24818f = true;
            }
        }
        boolean z10 = false;
        for (int size = this.f24817e.size() - 1; -1 < size; size--) {
            if (((a) this.f24817e.get(size)).a()) {
                a aVar2 = (a) this.f24817e.get(size);
                if (e.f24819h.a().isLoggable(Level.FINE)) {
                    b.a(aVar2, this, "canceled");
                }
                this.f24817e.remove(size);
                z10 = true;
            }
        }
        return z10;
    }

    public final a c() {
        return this.f24816d;
    }

    public final boolean d() {
        return this.f24818f;
    }

    public final List e() {
        return this.f24817e;
    }

    public final String f() {
        return this.f24814b;
    }

    public final boolean g() {
        return this.f24815c;
    }

    public final e h() {
        return this.f24813a;
    }

    public final void i(a task, long j10) {
        Intrinsics.checkNotNullParameter(task, "task");
        synchronized (this.f24813a) {
            if (this.f24815c) {
                if (task.a()) {
                    if (e.f24819h.a().isLoggable(Level.FINE)) {
                        b.a(task, this, "schedule canceled (queue is shutdown)");
                    }
                    return;
                }
                if (e.f24819h.a().isLoggable(Level.FINE)) {
                    b.a(task, this, "schedule failed (queue is shutdown)");
                }
                throw new RejectedExecutionException();
            }
            if (k(task, j10, false)) {
                this.f24813a.h(this);
            }
            Unit unit = Unit.f31765a;
        }
    }

    public final boolean k(a task, long j10, boolean z10) {
        String str;
        Intrinsics.checkNotNullParameter(task, "task");
        task.e(this);
        long c10 = this.f24813a.g().c();
        long j11 = c10 + j10;
        int indexOf = this.f24817e.indexOf(task);
        if (indexOf != -1) {
            if (task.c() <= j11) {
                if (e.f24819h.a().isLoggable(Level.FINE)) {
                    b.a(task, this, "already scheduled");
                }
                return false;
            }
            this.f24817e.remove(indexOf);
        }
        task.g(j11);
        if (e.f24819h.a().isLoggable(Level.FINE)) {
            if (z10) {
                str = "run again after " + b.b(j11 - c10);
            } else {
                str = "scheduled after " + b.b(j11 - c10);
            }
            b.a(task, this, str);
        }
        Iterator it = this.f24817e.iterator();
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
            i10 = this.f24817e.size();
        }
        this.f24817e.add(i10, task);
        if (i10 != 0) {
            return false;
        }
        return true;
    }

    public final void l(a aVar) {
        this.f24816d = aVar;
    }

    public final void m(boolean z10) {
        this.f24818f = z10;
    }

    public final void n() {
        if (du.e.f20986h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        synchronized (this.f24813a) {
            try {
                this.f24815c = true;
                if (b()) {
                    this.f24813a.h(this);
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public String toString() {
        return this.f24814b;
    }
}
