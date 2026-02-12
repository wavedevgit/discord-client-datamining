package zg;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p implements q {

    /* renamed from: a  reason: collision with root package name */
    private final CountDownLatch f56461a = new CountDownLatch(1);

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p(o oVar) {
    }

    @Override // zg.e
    public final void a() {
        this.f56461a.countDown();
    }

    public final void b() {
        this.f56461a.await();
    }

    public final boolean c(long j10, TimeUnit timeUnit) {
        return this.f56461a.await(j10, timeUnit);
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        this.f56461a.countDown();
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        this.f56461a.countDown();
    }
}
