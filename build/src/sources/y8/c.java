package y8;

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
        final /* synthetic */ Throwable f54059a;

        a(Throwable th2) {
            this.f54059a = th2;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return c.b(this.f54059a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: y8.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class ExecutorC0762c implements Executor {
        ExecutorC0762c() {
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
        public Object f54063a;

        private d() {
            this.f54063a = null;
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
        dataSource.c(new b(dVar, countDownLatch, dVar2), new ExecutorC0762c());
        if (j10 < 0) {
            countDownLatch.await();
        } else if (!countDownLatch.await(j10, timeUnit)) {
            throw new TimeoutException();
        }
        Object obj = dVar2.f54063a;
        if (obj == null) {
            return dVar.f54063a;
        }
        throw ((Throwable) obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ d f54060a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CountDownLatch f54061b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ d f54062c;

        b(d dVar, CountDownLatch countDownLatch, d dVar2) {
            this.f54060a = dVar;
            this.f54061b = countDownLatch;
            this.f54062c = dVar2;
        }

        @Override // y8.e
        public void onCancellation(DataSource dataSource) {
            this.f54061b.countDown();
        }

        @Override // y8.e
        public void onFailure(DataSource dataSource) {
            try {
                this.f54062c.f54063a = dataSource.b();
            } finally {
                this.f54061b.countDown();
            }
        }

        @Override // y8.e
        public void onNewResult(DataSource dataSource) {
            if (!dataSource.isFinished()) {
                return;
            }
            try {
                this.f54060a.f54063a = dataSource.getResult();
            } finally {
                this.f54061b.countDown();
            }
        }

        @Override // y8.e
        public void onProgressUpdate(DataSource dataSource) {
        }
    }
}
