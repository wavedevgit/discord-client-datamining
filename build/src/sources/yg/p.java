package yg;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p implements q {

    /* renamed from: a  reason: collision with root package name */
    private final CountDownLatch f55396a = new CountDownLatch(1);

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p(o oVar) {
    }

    @Override // yg.e
    public final void a() {
        this.f55396a.countDown();
    }

    public final void b() {
        this.f55396a.await();
    }

    public final boolean c(long j10, TimeUnit timeUnit) {
        return this.f55396a.await(j10, timeUnit);
    }

    @Override // yg.f
    public final void onFailure(Exception exc) {
        this.f55396a.countDown();
    }

    @Override // yg.g
    public final void onSuccess(Object obj) {
        this.f55396a.countDown();
    }
}
