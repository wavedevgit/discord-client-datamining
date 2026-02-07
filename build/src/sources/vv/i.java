package vv;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Objects;
import java.util.concurrent.Executor;
import okhttp3.Request;
import vv.e;
import vv.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53086a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f53087a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f53088b;

        a(Type type, Executor executor) {
            this.f53087a = type;
            this.f53088b = executor;
        }

        @Override // vv.e
        public Type a() {
            return this.f53087a;
        }

        @Override // vv.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f53088b;
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
        final Executor f53090d;

        /* renamed from: e  reason: collision with root package name */
        final d f53091e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f53092a;

            a(f fVar) {
                this.f53092a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f53091e.C()) {
                    fVar.b(b.this, new IOException("Canceled"));
                } else {
                    fVar.a(b.this, zVar);
                }
            }

            @Override // vv.f
            public void a(d dVar, final z zVar) {
                Executor executor = b.this.f53090d;
                final f fVar = this.f53092a;
                executor.execute(new Runnable() { // from class: vv.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }

            @Override // vv.f
            public void b(d dVar, final Throwable th2) {
                Executor executor = b.this.f53090d;
                final f fVar = this.f53092a;
                executor.execute(new Runnable() { // from class: vv.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.b(i.b.this, th2);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f53090d = executor;
            this.f53091e = dVar;
        }

        @Override // vv.d
        public boolean C() {
            return this.f53091e.C();
        }

        @Override // vv.d
        public void E0(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f53091e.E0(new a(fVar));
        }

        @Override // vv.d
        public void cancel() {
            this.f53091e.cancel();
        }

        @Override // vv.d
        public Request g() {
            return this.f53091e.g();
        }

        @Override // vv.d
        public d clone() {
            return new b(this.f53090d, this.f53091e.mo1234clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f53086a = executor;
    }

    @Override // vv.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f53086a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
