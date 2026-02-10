package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5081a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5082b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f5083c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f5084d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f5085e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f5086a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f5087b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f5088c;

        public a(e.f fVar) {
            this.f5088c = fVar;
        }

        public b a() {
            if (this.f5087b == null) {
                synchronized (f5084d) {
                    try {
                        if (f5085e == null) {
                            f5085e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f5087b = f5085e;
            }
            return new b(this.f5086a, this.f5087b, this.f5088c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f5081a = executor;
        this.f5082b = executor2;
        this.f5083c = fVar;
    }

    public Executor a() {
        return this.f5082b;
    }

    public e.f b() {
        return this.f5083c;
    }

    public Executor c() {
        return this.f5081a;
    }
}
