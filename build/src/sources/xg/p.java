package xg;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p implements q {

    /* renamed from: a  reason: collision with root package name */
    private final CountDownLatch f53844a = new CountDownLatch(1);

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p(o oVar) {
    }

    @Override // xg.e
    public final void a() {
        this.f53844a.countDown();
    }

    public final void b() {
        this.f53844a.await();
    }

    public final boolean c(long j10, TimeUnit timeUnit) {
        return this.f53844a.await(j10, timeUnit);
    }

    @Override // xg.f
    public final void onFailure(Exception exc) {
        this.f53844a.countDown();
    }

    @Override // xg.g
    public final void onSuccess(Object obj) {
        this.f53844a.countDown();
    }
}
