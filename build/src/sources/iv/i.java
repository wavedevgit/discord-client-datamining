package iv;

import iv.e;
import iv.i;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Objects;
import java.util.concurrent.Executor;
import okhttp3.Request;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f31350a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f31351a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f31352b;

        a(Type type, Executor executor) {
            this.f31351a = type;
            this.f31352b = executor;
        }

        @Override // iv.e
        public Type a() {
            return this.f31351a;
        }

        @Override // iv.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f31352b;
            if (executor == null) {
                return dVar;
            }
            return new b(executor, dVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements d {

        /* renamed from: d  reason: collision with root package name */
        final Executor f31354d;

        /* renamed from: e  reason: collision with root package name */
        final d f31355e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f31356a;

            a(f fVar) {
                this.f31356a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f31355e.x()) {
                    fVar.a(b.this, new IOException("Canceled"));
                } else {
                    fVar.b(b.this, zVar);
                }
            }

            @Override // iv.f
            public void a(d dVar, final Throwable th2) {
                Executor executor = b.this.f31354d;
                final f fVar = this.f31356a;
                executor.execute(new Runnable() { // from class: iv.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.a(i.b.this, th2);
                    }
                });
            }

            @Override // iv.f
            public void b(d dVar, final z zVar) {
                Executor executor = b.this.f31354d;
                final f fVar = this.f31356a;
                executor.execute(new Runnable() { // from class: iv.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f31354d = executor;
            this.f31355e = dVar;
        }

        @Override // iv.d
        public void M0(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f31355e.M0(new a(fVar));
        }

        @Override // iv.d
        public void cancel() {
            this.f31355e.cancel();
        }

        @Override // iv.d
        public Request h() {
            return this.f31355e.h();
        }

        @Override // iv.d
        public boolean x() {
            return this.f31355e.x();
        }

        @Override // iv.d
        /* renamed from: clone */
        public d m1190clone() {
            return new b(this.f31354d, this.f31355e.clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f31350a = executor;
    }

    @Override // iv.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f31350a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
