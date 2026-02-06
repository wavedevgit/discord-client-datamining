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
        final /* synthetic */ Throwable f55054a;

        a(Throwable th2) {
            this.f55054a = th2;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return c.b(this.f55054a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: y8.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class ExecutorC0742c implements Executor {
        ExecutorC0742c() {
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
        public Object f55058a;

        private d() {
            this.f55058a = null;
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
        dataSource.c(new b(dVar, countDownLatch, dVar2), new ExecutorC0742c());
        if (j10 < 0) {
            countDownLatch.await();
        } else if (!countDownLatch.await(j10, timeUnit)) {
            throw new TimeoutException();
        }
        Object obj = dVar2.f55058a;
        if (obj == null) {
            return dVar.f55058a;
        }
        throw ((Throwable) obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ d f55055a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CountDownLatch f55056b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ d f55057c;

        b(d dVar, CountDownLatch countDownLatch, d dVar2) {
            this.f55055a = dVar;
            this.f55056b = countDownLatch;
            this.f55057c = dVar2;
        }

        @Override // y8.e
        public void onCancellation(DataSource dataSource) {
            this.f55056b.countDown();
        }

        @Override // y8.e
        public void onFailure(DataSource dataSource) {
            try {
                this.f55057c.f55058a = dataSource.b();
            } finally {
                this.f55056b.countDown();
            }
        }

        @Override // y8.e
        public void onNewResult(DataSource dataSource) {
            if (!dataSource.isFinished()) {
                return;
            }
            try {
                this.f55055a.f55058a = dataSource.getResult();
            } finally {
                this.f55056b.countDown();
            }
        }

        @Override // y8.e
        public void onProgressUpdate(DataSource dataSource) {
        }
    }
}
