package fw;

import fw.e;
import fw.i;
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
    private final Executor f24438a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f24439a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f24440b;

        a(Type type, Executor executor) {
            this.f24439a = type;
            this.f24440b = executor;
        }

        @Override // fw.e
        public Type a() {
            return this.f24439a;
        }

        @Override // fw.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f24440b;
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
        final Executor f24442d;

        /* renamed from: e  reason: collision with root package name */
        final d f24443e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f24444a;

            a(f fVar) {
                this.f24444a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f24443e.C()) {
                    fVar.a(b.this, new IOException("Canceled"));
                } else {
                    fVar.b(b.this, zVar);
                }
            }

            @Override // fw.f
            public void a(d dVar, final Throwable th2) {
                Executor executor = b.this.f24442d;
                final f fVar = this.f24444a;
                executor.execute(new Runnable() { // from class: fw.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.a(i.b.this, th2);
                    }
                });
            }

            @Override // fw.f
            public void b(d dVar, final z zVar) {
                Executor executor = b.this.f24442d;
                final f fVar = this.f24444a;
                executor.execute(new Runnable() { // from class: fw.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f24442d = executor;
            this.f24443e = dVar;
        }

        @Override // fw.d
        public boolean C() {
            return this.f24443e.C();
        }

        @Override // fw.d
        public void P1(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f24443e.P1(new a(fVar));
        }

        @Override // fw.d
        public void cancel() {
            this.f24443e.cancel();
        }

        @Override // fw.d
        public Request i() {
            return this.f24443e.i();
        }

        @Override // fw.d
        /* renamed from: clone */
        public d m1171clone() {
            return new b(this.f24442d, this.f24443e.clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f24438a = executor;
    }

    @Override // fw.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f24438a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
