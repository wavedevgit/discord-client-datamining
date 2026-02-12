package zg;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m0 extends Task {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56452a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final i0 f56453b = new i0();

    /* renamed from: c  reason: collision with root package name */
    private boolean f56454c;

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f56455d;

    /* renamed from: e  reason: collision with root package name */
    private Object f56456e;

    /* renamed from: f  reason: collision with root package name */
    private Exception f56457f;

    private final void A() {
        synchronized (this.f56452a) {
            try {
                if (!this.f56454c) {
                    return;
                }
                this.f56453b.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void x() {
        hf.q.o(this.f56454c, "Task is not yet complete");
    }

    private final void y() {
        if (!this.f56455d) {
            return;
        }
        throw new CancellationException("Task is already canceled.");
    }

    private final void z() {
        if (!this.f56454c) {
            return;
        }
        throw d.a(this);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task a(Executor executor, e eVar) {
        this.f56453b.a(new y(executor, eVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task addOnCompleteListener(OnCompleteListener onCompleteListener) {
        this.f56453b.a(new a0(l.f56449a, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task b(e eVar) {
        a(l.f56449a, eVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task c(Executor executor, OnCompleteListener onCompleteListener) {
        this.f56453b.a(new a0(executor, onCompleteListener));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task d(Executor executor, f fVar) {
        this.f56453b.a(new c0(executor, fVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task e(f fVar) {
        d(l.f56449a, fVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task f(Executor executor, g gVar) {
        this.f56453b.a(new e0(executor, gVar));
        A();
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task g(g gVar) {
        f(l.f56449a, gVar);
        return this;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task h(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f56453b.a(new u(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task i(Executor executor, c cVar) {
        m0 m0Var = new m0();
        this.f56453b.a(new w(executor, cVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task j(c cVar) {
        return i(l.f56449a, cVar);
    }

    @Override // com.google.android.gms.tasks.Task
    public final Exception k() {
        Exception exc;
        synchronized (this.f56452a) {
            exc = this.f56457f;
        }
        return exc;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Object l() {
        Object obj;
        synchronized (this.f56452a) {
            try {
                x();
                y();
                Exception exc = this.f56457f;
                if (exc == null) {
                    obj = this.f56456e;
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
        synchronized (this.f56452a) {
            try {
                x();
                y();
                if (!cls.isInstance(this.f56457f)) {
                    Exception exc = this.f56457f;
                    if (exc == null) {
                        obj = this.f56456e;
                    } else {
                        throw new i(exc);
                    }
                } else {
                    throw ((Throwable) cls.cast(this.f56457f));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return obj;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean n() {
        return this.f56455d;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean o() {
        boolean z10;
        synchronized (this.f56452a) {
            z10 = this.f56454c;
        }
        return z10;
    }

    @Override // com.google.android.gms.tasks.Task
    public final boolean p() {
        boolean z10;
        synchronized (this.f56452a) {
            try {
                z10 = false;
                if (this.f56454c && !this.f56455d && this.f56457f == null) {
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
        this.f56453b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    @Override // com.google.android.gms.tasks.Task
    public final Task r(j jVar) {
        Executor executor = l.f56449a;
        m0 m0Var = new m0();
        this.f56453b.a(new g0(executor, jVar, m0Var));
        A();
        return m0Var;
    }

    public final void s(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f56452a) {
            z();
            this.f56454c = true;
            this.f56457f = exc;
        }
        this.f56453b.b(this);
    }

    public final void t(Object obj) {
        synchronized (this.f56452a) {
            z();
            this.f56454c = true;
            this.f56456e = obj;
        }
        this.f56453b.b(this);
    }

    public final boolean u() {
        synchronized (this.f56452a) {
            try {
                if (this.f56454c) {
                    return false;
                }
                this.f56454c = true;
                this.f56455d = true;
                this.f56453b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean v(Exception exc) {
        hf.q.m(exc, "Exception must not be null");
        synchronized (this.f56452a) {
            try {
                if (this.f56454c) {
                    return false;
                }
                this.f56454c = true;
                this.f56457f = exc;
                this.f56453b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean w(Object obj) {
        synchronized (this.f56452a) {
            try {
                if (this.f56454c) {
                    return false;
                }
                this.f56454c = true;
                this.f56456e = obj;
                this.f56453b.b(this);
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
