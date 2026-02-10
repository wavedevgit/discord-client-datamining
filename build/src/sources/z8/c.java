package z8;

import com.facebook.common.internal.Supplier;
import com.facebook.datasource.DataSource;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Throwable f56166a;

        a(Throwable th2) {
            this.f56166a = th2;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return c.b(this.f56166a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: z8.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class ExecutorC0793c implements Executor {
        ExecutorC0793c() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            runnable.run();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public Object f56170a;

        private d() {
            this.f56170a = null;
        }
    }

    public static Supplier a(Throwable th2) {
        return new a(th2);
    }

    public static DataSource b(Throwable th2) {
        i v10 = i.v();
        v10.n(th2);
        return v10;
    }

    public static Object c(DataSource dataSource) {
        return d(dataSource, -1L, TimeUnit.MILLISECONDS);
    }

    public static Object d(DataSource dataSource, long j10, TimeUnit timeUnit) {
        CountDownLatch countDownLatch = new CountDownLatch(1);
        d dVar = new d();
        d dVar2 = new d();
        dataSource.c(new b(dVar, countDownLatch, dVar2), new ExecutorC0793c());
        if (j10 < 0) {
            countDownLatch.await();
        } else if (!countDownLatch.await(j10, timeUnit)) {
            throw new TimeoutException();
        }
        Object obj = dVar2.f56170a;
        if (obj == null) {
            return dVar.f56170a;
        }
        throw ((Throwable) obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ d f56167a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CountDownLatch f56168b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ d f56169c;

        b(d dVar, CountDownLatch countDownLatch, d dVar2) {
            this.f56167a = dVar;
            this.f56168b = countDownLatch;
            this.f56169c = dVar2;
        }

        @Override // z8.e
        public void onCancellation(DataSource dataSource) {
            this.f56168b.countDown();
        }

        @Override // z8.e
        public void onFailure(DataSource dataSource) {
            try {
                this.f56169c.f56170a = dataSource.b();
            } finally {
                this.f56168b.countDown();
            }
        }

        @Override // z8.e
        public void onNewResult(DataSource dataSource) {
            if (!dataSource.isFinished()) {
                return;
            }
            try {
                this.f56167a.f56170a = dataSource.getResult();
            } finally {
                this.f56168b.countDown();
            }
        }

        @Override // z8.e
        public void onProgressUpdate(DataSource dataSource) {
        }
    }
}
