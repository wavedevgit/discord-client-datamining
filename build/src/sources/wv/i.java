package wv;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Objects;
import java.util.concurrent.Executor;
import okhttp3.Request;
import wv.e;
import wv.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f54113a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f54114a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f54115b;

        a(Type type, Executor executor) {
            this.f54114a = type;
            this.f54115b = executor;
        }

        @Override // wv.e
        public Type a() {
            return this.f54114a;
        }

        @Override // wv.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f54115b;
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
        final Executor f54117d;

        /* renamed from: e  reason: collision with root package name */
        final d f54118e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f54119a;

            a(f fVar) {
                this.f54119a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f54118e.C()) {
                    fVar.a(b.this, new IOException("Canceled"));
                } else {
                    fVar.b(b.this, zVar);
                }
            }

            @Override // wv.f
            public void a(d dVar, final Throwable th2) {
                Executor executor = b.this.f54117d;
                final f fVar = this.f54119a;
                executor.execute(new Runnable() { // from class: wv.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.a(i.b.this, th2);
                    }
                });
            }

            @Override // wv.f
            public void b(d dVar, final z zVar) {
                Executor executor = b.this.f54117d;
                final f fVar = this.f54119a;
                executor.execute(new Runnable() { // from class: wv.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f54117d = executor;
            this.f54118e = dVar;
        }

        @Override // wv.d
        public boolean C() {
            return this.f54118e.C();
        }

        @Override // wv.d
        public void C0(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f54118e.C0(new a(fVar));
        }

        @Override // wv.d
        public void cancel() {
            this.f54118e.cancel();
        }

        @Override // wv.d
        public Request g() {
            return this.f54118e.g();
        }

        @Override // wv.d
        public d clone() {
            return new b(this.f54117d, this.f54118e.mo1234clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f54113a = executor;
    }

    @Override // wv.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f54113a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
