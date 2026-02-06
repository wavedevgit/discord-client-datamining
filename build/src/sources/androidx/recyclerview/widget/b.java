package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5384a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5385b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f5386c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f5387d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f5388e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f5389a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f5390b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f5391c;

        public a(e.f fVar) {
            this.f5391c = fVar;
        }

        public b a() {
            if (this.f5390b == null) {
                synchronized (f5387d) {
                    try {
                        if (f5388e == null) {
                            f5388e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f5390b = f5388e;
            }
            return new b(this.f5389a, this.f5390b, this.f5391c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f5384a = executor;
        this.f5385b = executor2;
        this.f5386c = fVar;
    }

    public Executor a() {
        return this.f5385b;
    }

    public e.f b() {
        return this.f5386c;
    }

    public Executor c() {
        return this.f5384a;
    }
}
