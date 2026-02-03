package jv;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Objects;
import java.util.concurrent.Executor;
import jv.e;
import jv.i;
import okhttp3.Request;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f32447a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f32448a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f32449b;

        a(Type type, Executor executor) {
            this.f32448a = type;
            this.f32449b = executor;
        }

        @Override // jv.e
        public Type a() {
            return this.f32448a;
        }

        @Override // jv.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f32449b;
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
        final Executor f32451d;

        /* renamed from: e  reason: collision with root package name */
        final d f32452e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f32453a;

            a(f fVar) {
                this.f32453a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f32452e.x()) {
                    fVar.b(b.this, new IOException("Canceled"));
                } else {
                    fVar.a(b.this, zVar);
                }
            }

            @Override // jv.f
            public void a(d dVar, final z zVar) {
                Executor executor = b.this.f32451d;
                final f fVar = this.f32453a;
                executor.execute(new Runnable() { // from class: jv.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }

            @Override // jv.f
            public void b(d dVar, final Throwable th2) {
                Executor executor = b.this.f32451d;
                final f fVar = this.f32453a;
                executor.execute(new Runnable() { // from class: jv.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.b(i.b.this, th2);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f32451d = executor;
            this.f32452e = dVar;
        }

        @Override // jv.d
        public void E0(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f32452e.E0(new a(fVar));
        }

        @Override // jv.d
        public void cancel() {
            this.f32452e.cancel();
        }

        @Override // jv.d
        public Request h() {
            return this.f32452e.h();
        }

        @Override // jv.d
        public boolean x() {
            return this.f32452e.x();
        }

        @Override // jv.d
        public d clone() {
            return new b(this.f32451d, this.f32452e.mo1193clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f32447a = executor;
    }

    @Override // jv.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f32447a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
