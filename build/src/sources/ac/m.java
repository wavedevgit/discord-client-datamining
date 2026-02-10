package ac;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class m implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private final Executor f609d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final Runnable f610d;

        a(Runnable runnable) {
            this.f610d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f610d.run();
            } catch (Exception e10) {
                ec.a.d("Executor", "Background execution failure.", e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(Executor executor) {
        this.f609d = executor;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f609d.execute(new a(runnable));
    }
}
