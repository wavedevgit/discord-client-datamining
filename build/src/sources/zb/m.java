package zb;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private final Executor f56093d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final Runnable f56094d;

        a(Runnable runnable) {
            this.f56094d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f56094d.run();
            } catch (Exception e10) {
                dc.a.d("Executor", "Background execution failure.", e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(Executor executor) {
        this.f56093d = executor;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f56093d.execute(new a(runnable));
    }
}
