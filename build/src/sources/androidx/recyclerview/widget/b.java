package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5055a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5056b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f5057c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f5058d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f5059e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f5060a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f5061b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f5062c;

        public a(e.f fVar) {
            this.f5062c = fVar;
        }

        public b a() {
            if (this.f5061b == null) {
                synchronized (f5058d) {
                    try {
                        if (f5059e == null) {
                            f5059e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f5061b = f5059e;
            }
            return new b(this.f5060a, this.f5061b, this.f5062c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f5055a = executor;
        this.f5056b = executor2;
        this.f5057c = fVar;
    }

    public Executor a() {
        return this.f5056b;
    }

    public e.f b() {
        return this.f5057c;
    }

    public Executor c() {
        return this.f5055a;
    }
}
