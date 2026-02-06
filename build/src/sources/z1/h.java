package z1;

import android.os.Handler;
import android.os.Process;
import androidx.core.util.Consumer;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private String f55863a;

        /* renamed from: b  reason: collision with root package name */
        private int f55864b;

        /* renamed from: z1.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        private static class C0761a extends Thread {

            /* renamed from: d  reason: collision with root package name */
            private final int f55865d;

            C0761a(Runnable runnable, String str, int i10) {
                super(runnable, str);
                this.f55865d = i10;
            }

            @Override // java.lang.Thread, java.lang.Runnable
            public void run() {
                Process.setThreadPriority(this.f55865d);
                super.run();
            }
        }

        a(String str, int i10) {
            this.f55863a = str;
            this.f55864b = i10;
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            return new C0761a(runnable, this.f55863a, this.f55864b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements Executor {

        /* renamed from: d  reason: collision with root package name */
        private final Handler f55866d;

        b(Handler handler) {
            this.f55866d = (Handler) b2.e.g(handler);
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            if (this.f55866d.post((Runnable) b2.e.g(runnable))) {
                return;
            }
            throw new RejectedExecutionException(this.f55866d + " is shutting down");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private Callable f55867d;

        /* renamed from: e  reason: collision with root package name */
        private Consumer f55868e;

        /* renamed from: i  reason: collision with root package name */
        private Handler f55869i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Consumer f55870d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f55871e;

            a(Consumer consumer, Object obj) {
                this.f55870d = consumer;
                this.f55871e = obj;
            }

            @Override // java.lang.Runnable
            public void run() {
                this.f55870d.accept(this.f55871e);
            }
        }

        c(Handler handler, Callable callable, Consumer consumer) {
            this.f55867d = callable;
            this.f55868e = consumer;
            this.f55869i = handler;
        }

        @Override // java.lang.Runnable
        public void run() {
            Object obj;
            try {
                obj = this.f55867d.call();
            } catch (Exception unused) {
                obj = null;
            }
            this.f55869i.post(new a(this.f55868e, obj));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ThreadPoolExecutor a(String str, int i10, int i11) {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(0, 1, i11, TimeUnit.MILLISECONDS, new LinkedBlockingDeque(), new a(str, i10));
        threadPoolExecutor.allowCoreThreadTimeOut(true);
        return threadPoolExecutor;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor b(Handler handler) {
        return new b(handler);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(Executor executor, Callable callable, Consumer consumer) {
        executor.execute(new c(z1.b.a(), callable, consumer));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object d(ExecutorService executorService, Callable callable, int i10) {
        try {
            return executorService.submit(callable).get(i10, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            throw e10;
        } catch (ExecutionException e11) {
            throw new RuntimeException(e11);
        } catch (TimeoutException unused) {
            throw new InterruptedException("timeout");
        }
    }
}
