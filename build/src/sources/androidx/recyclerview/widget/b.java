package androidx.recyclerview.widget;

import androidx.recyclerview.widget.e;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f4974a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f4975b;

    /* renamed from: c  reason: collision with root package name */
    private final e.f f4976c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final Object f4977d = new Object();

        /* renamed from: e  reason: collision with root package name */
        private static Executor f4978e;

        /* renamed from: a  reason: collision with root package name */
        private Executor f4979a;

        /* renamed from: b  reason: collision with root package name */
        private Executor f4980b;

        /* renamed from: c  reason: collision with root package name */
        private final e.f f4981c;

        public a(e.f fVar) {
            this.f4981c = fVar;
        }

        public b a() {
            if (this.f4980b == null) {
                synchronized (f4977d) {
                    try {
                        if (f4978e == null) {
                            f4978e = Executors.newFixedThreadPool(2);
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
                this.f4980b = f4978e;
            }
            return new b(this.f4979a, this.f4980b, this.f4981c);
        }
    }

    b(Executor executor, Executor executor2, e.f fVar) {
        this.f4974a = executor;
        this.f4975b = executor2;
        this.f4976c = fVar;
    }

    public Executor a() {
        return this.f4975b;
    }

    public e.f b() {
        return this.f4976c;
    }

    public Executor c() {
        return this.f4974a;
    }
}
