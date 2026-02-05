package ov;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Objects;
import java.util.concurrent.Executor;
import okhttp3.Request;
import ov.e;
import ov.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f44593a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f44594a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f44595b;

        a(Type type, Executor executor) {
            this.f44594a = type;
            this.f44595b = executor;
        }

        @Override // ov.e
        public Type a() {
            return this.f44594a;
        }

        @Override // ov.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f44595b;
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
        final Executor f44597d;

        /* renamed from: e  reason: collision with root package name */
        final d f44598e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f44599a;

            a(f fVar) {
                this.f44599a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f44598e.y()) {
                    fVar.b(b.this, new IOException("Canceled"));
                } else {
                    fVar.a(b.this, zVar);
                }
            }

            @Override // ov.f
            public void a(d dVar, final z zVar) {
                Executor executor = b.this.f44597d;
                final f fVar = this.f44599a;
                executor.execute(new Runnable() { // from class: ov.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }

            @Override // ov.f
            public void b(d dVar, final Throwable th2) {
                Executor executor = b.this.f44597d;
                final f fVar = this.f44599a;
                executor.execute(new Runnable() { // from class: ov.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.b(i.b.this, th2);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f44597d = executor;
            this.f44598e = dVar;
        }

        @Override // ov.d
        public void C0(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f44598e.C0(new a(fVar));
        }

        @Override // ov.d
        public void cancel() {
            this.f44598e.cancel();
        }

        @Override // ov.d
        public Request h() {
            return this.f44598e.h();
        }

        @Override // ov.d
        public boolean y() {
            return this.f44598e.y();
        }

        @Override // ov.d
        public d clone() {
            return new b(this.f44597d, this.f44598e.mo1221clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f44593a = executor;
    }

    @Override // ov.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f44593a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
