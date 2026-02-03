package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f4943a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f4944b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f4945c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f4946d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f4947e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f4948a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f4949b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f4950c;

        public a(e.f fVar) {
            this.f4950c = fVar;
        }

        public b a() {
            if (this.f4949b == null) {
                synchronized (f4946d) {
                    try {
                        if (f4947e == null) {
                            f4947e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f4949b = f4947e;
            }
            return new b(this.f4948a, this.f4949b, this.f4950c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f4943a = executor;
        this.f4944b = executor2;
        this.f4945c = fVar;
    }

    public Executor a() {
        return this.f4944b;
    }

    public e.f b() {
        return this.f4945c;
    }

    public Executor c() {
        return this.f4943a;
    }
}
