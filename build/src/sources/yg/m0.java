package yg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m0 extends Task {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55387a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final i0 f55388b = new i0();

    /* renamed from: c  reason: collision with root package name */
    private boolean f55389c;

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f55390d;

    /* renamed from: e  reason: collision with root package name */
    private Object f55391e;

    /* renamed from: f  reason: collision with root package name */
    private Exception f55392f;

    private final void A() {
        synchronized (this.f55387a) {
            try {
                if (!this.f55389c) {
                    return;
                }
                this.f55388b.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void x() {
        gf.q.o(this.f55389c, "Task is not yet complete");
    }

    private final void y() {
        if (!this.f55390d) {
            return;
        }
        throw new CancellationException("Task is already canceled.");
    }

    private final void z() {
        if (!this.f55389c) {
            return;
        }
        throw d.a(this);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task a(Executor executor, e eVar) {
        this.f55388b.a(new y(executor, eVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task addOnCompleteListener(OnCompleteListener onCompleteListener) {
        this.f55388b.a(new a0(l.f55384a, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task b(e eVar) {
        a(l.f55384a, eVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task c(Executor executor, OnCompleteListener onCompleteListener) {
        this.f55388b.a(new a0(executor, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task d(Executor executor, f fVar) {
        this.f55388b.a(new c0(executor, fVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task e(f fVar) {
        d(l.f55384a, fVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task f(Executor executor, g gVar) {
        this.f55388b.a(new e0(executor, gVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task g(g gVar) {
        f(l.f55384a, gVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task h(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f55388b.a(new u(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task i(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f55388b.a(new w(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task j(c cVar) {
        return i(l.f55384a, cVar);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Exception k() {
        Exception exc;
        synchronized (this.f55387a) {
            exc = this.f55392f;
        }
        return exc;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object l() {
        Object obj;
        synchronized (this.f55387a) {
            try {
                x();
                y();
                Exception exc = this.f55392f;
                if (exc == null) {
                    obj = this.f55391e;
                } else {
                    throw new i(exc);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object m(Class cls) {
        Object obj;
        synchronized (this.f55387a) {
            try {
                x();
                y();
                if (!cls.isInstance(this.f55392f)) {
                    Exception exc = this.f55392f;
                    if (exc == null) {
                        obj = this.f55391e;
                    } else {
                        throw new i(exc);
                    }
                } else {
                    throw ((Throwable) cls.cast(this.f55392f));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean n() {
        return this.f55390d;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean o() {
        boolean z10;
        synchronized (this.f55387a) {
            z10 = this.f55389c;
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean p() {
        boolean z10;
        synchronized (this.f55387a) {
            try {
                z10 = false;
                if (this.f55389c && !this.f55390d && this.f55392f == null) {
                    z10 = true;
                }
            } finally {
            }
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task q(Executor executor, j jVar) {
        m0 m0Var = new m0();
        this.f55388b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task r(j jVar) {
        Executor executor = l.f55384a;
        m0 m0Var = new m0();
        this.f55388b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    public final void s(Exception exc) {
        gf.q.m(exc, "Exception must not be null");
        synchronized (this.f55387a) {
            z();
            this.f55389c = true;
            this.f55392f = exc;
        }
        this.f55388b.b(this);
    }

    public final void t(Object obj) {
        synchronized (this.f55387a) {
            z();
            this.f55389c = true;
            this.f55391e = obj;
        }
        this.f55388b.b(this);
    }

    public final boolean u() {
        synchronized (this.f55387a) {
            try {
                if (this.f55389c) {
                    return false;
                }
                this.f55389c = true;
                this.f55390d = true;
                this.f55388b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean v(Exception exc) {
        gf.q.m(exc, "Exception must not be null");
        synchronized (this.f55387a) {
            try {
                if (this.f55389c) {
                    return false;
                }
                this.f55389c = true;
                this.f55392f = exc;
                this.f55388b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean w(Object obj) {
        synchronized (this.f55387a) {
            try {
                if (this.f55389c) {
                    return false;
                }
                this.f55389c = true;
                this.f55391e = obj;
                this.f55388b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
