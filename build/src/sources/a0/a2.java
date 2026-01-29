package a0;

import a0.u1;
import androidx.core.util.Consumer;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a2 {

    /* renamed from: b  reason: collision with root package name */
    public static final z1 f8b = z1.b();

    /* renamed from: c  reason: collision with root package name */
    private static final a2 f9c = new a2();

    /* renamed from: a  reason: collision with root package name */
    private final s1 f10a = s1.h(f8b);

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements u1.a {

        /* renamed from: a  reason: collision with root package name */
        private final Consumer f11a;

        a(Consumer consumer) {
            this.f11a = consumer;
        }

        @Override // a0.u1.a
        public void a(Object obj) {
            this.f11a.accept(obj);
        }

        @Override // a0.u1.a
        public void onError(Throwable th2) {
            x.y0.d("ObserverToConsumerAdapter", "Unexpected error in Observable", th2);
        }
    }

    public static a2 b() {
        return f9c;
    }

    public z1 a() {
        try {
            return (z1) this.f10a.c().get();
        } catch (InterruptedException | ExecutionException e10) {
            throw new AssertionError("Unexpected error in QuirkSettings StateObservable", e10);
        }
    }

    public void c(Executor executor, Consumer consumer) {
        this.f10a.a(executor, new a(consumer));
    }

    public void d(z1 z1Var) {
        this.f10a.g(z1Var);
    }
}
