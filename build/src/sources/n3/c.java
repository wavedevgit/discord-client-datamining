package n3;

import android.os.Binder;
import android.os.Handler;
import android.os.Looper;
import android.os.Process;
import android.util.Log;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.FutureTask;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class c {

    /* renamed from: p  reason: collision with root package name */
    private static Handler f37789p;

    /* renamed from: e  reason: collision with root package name */
    private volatile e f37791e = e.PENDING;

    /* renamed from: i  reason: collision with root package name */
    final AtomicBoolean f37792i = new AtomicBoolean();

    /* renamed from: o  reason: collision with root package name */
    final AtomicBoolean f37793o = new AtomicBoolean();

    /* renamed from: d  reason: collision with root package name */
    private final FutureTask f37790d = new b(new a());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Callable {
        a() {
        }

        @Override // java.util.concurrent.Callable
        public Object call() {
            c.this.f37793o.set(true);
            Object obj = null;
            try {
                Process.setThreadPriority(10);
                obj = c.this.b();
                Binder.flushPendingCommands();
                return obj;
            } finally {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends FutureTask {
        b(Callable callable) {
            super(callable);
        }

        @Override // java.util.concurrent.FutureTask
        protected void done() {
            try {
                c.this.j(get());
            } catch (InterruptedException e10) {
                Log.w("AsyncTask", e10);
            } catch (CancellationException unused) {
                c.this.j(null);
            } catch (ExecutionException e11) {
                throw new RuntimeException("An error occurred while executing doInBackground()", e11.getCause());
            } catch (Throwable th2) {
                throw new RuntimeException("An error occurred while executing doInBackground()", th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n3.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0547c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f37796d;

        RunnableC0547c(Object obj) {
            this.f37796d = obj;
        }

        @Override // java.lang.Runnable
        public void run() {
            c.this.d(this.f37796d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37798a;

        static {
            int[] iArr = new int[e.values().length];
            f37798a = iArr;
            try {
                iArr[e.RUNNING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37798a[e.FINISHED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum e {
        PENDING,
        RUNNING,
        FINISHED
    }

    private static Handler e() {
        Handler handler;
        synchronized (c.class) {
            try {
                if (f37789p == null) {
                    f37789p = new Handler(Looper.getMainLooper());
                }
                handler = f37789p;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final boolean a(boolean z10) {
        this.f37792i.set(true);
        return this.f37790d.cancel(z10);
    }

    protected abstract Object b();

    public final void c(Executor executor) {
        if (this.f37791e != e.PENDING) {
            int i10 = d.f37798a[this.f37791e.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    throw new IllegalStateException("We should never reach this state");
                }
                throw new IllegalStateException("Cannot execute task: the task has already been executed (a task can be executed only once)");
            }
            throw new IllegalStateException("Cannot execute task: the task is already running.");
        }
        this.f37791e = e.RUNNING;
        executor.execute(this.f37790d);
    }

    void d(Object obj) {
        if (f()) {
            g(obj);
        } else {
            h(obj);
        }
        this.f37791e = e.FINISHED;
    }

    public final boolean f() {
        return this.f37792i.get();
    }

    protected abstract void g(Object obj);

    protected abstract void h(Object obj);

    void i(Object obj) {
        e().post(new RunnableC0547c(obj));
    }

    void j(Object obj) {
        if (!this.f37793o.get()) {
            i(obj);
        }
    }
}
