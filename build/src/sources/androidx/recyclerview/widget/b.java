package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5091a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5092b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f5093c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f5094d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f5095e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f5096a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f5097b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f5098c;

        public a(e.f fVar) {
            this.f5098c = fVar;
        }

        public b a() {
            if (this.f5097b == null) {
                synchronized (f5094d) {
                    try {
                        if (f5095e == null) {
                            f5095e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f5097b = f5095e;
            }
            return new b(this.f5096a, this.f5097b, this.f5098c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f5091a = executor;
        this.f5092b = executor2;
        this.f5093c = fVar;
    }

    public Executor a() {
        return this.f5092b;
    }

    public e.f b() {
        return this.f5093c;
    }

    public Executor c() {
        return this.f5091a;
    }
}
