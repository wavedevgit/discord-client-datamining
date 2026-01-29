package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f4930a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f4931b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f4932c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f4933d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f4934e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f4935a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f4936b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f4937c;

        public a(e.f fVar) {
            this.f4937c = fVar;
        }

        public b a() {
            if (this.f4936b == null) {
                synchronized (f4933d) {
                    try {
                        if (f4934e == null) {
                            f4934e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f4936b = f4934e;
            }
            return new b(this.f4935a, this.f4936b, this.f4937c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f4930a = executor;
        this.f4931b = executor2;
        this.f4932c = fVar;
    }

    public Executor a() {
        return this.f4931b;
    }

    public e.f b() {
        return this.f4932c;
    }

    public Executor c() {
        return this.f4930a;
    }
}
