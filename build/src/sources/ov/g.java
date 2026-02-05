package ov;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.concurrent.CompletableFuture;
import ov.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g extends e.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f44586a;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: ov.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class C0563a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f44587a;

            public C0563a(CompletableFuture completableFuture) {
                this.f44587a = completableFuture;
            }

            @Override // ov.f
            public void a(d dVar, z zVar) {
                if (zVar.g()) {
                    this.f44587a.complete(zVar.a());
                } else {
                    this.f44587a.completeExceptionally(new o(zVar));
                }
            }

            @Override // ov.f
            public void b(d dVar, Throwable th2) {
                this.f44587a.completeExceptionally(th2);
            }
        }

        a(Type type) {
            this.f44586a = type;
        }

        @Override // ov.e
        public Type a() {
            return this.f44586a;
        }

        @Override // ov.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.C0(new C0563a(bVar));
            return bVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends CompletableFuture {

        /* renamed from: d  reason: collision with root package name */
        private final d f44589d;

        b(d dVar) {
            this.f44589d = dVar;
        }

        @Override // java.util.concurrent.CompletableFuture, java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            if (z10) {
                this.f44589d.cancel();
            }
            return super.cancel(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f44590a;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f44591a;

            public a(CompletableFuture completableFuture) {
                this.f44591a = completableFuture;
            }

            @Override // ov.f
            public void a(d dVar, z zVar) {
                this.f44591a.complete(zVar);
            }

            @Override // ov.f
            public void b(d dVar, Throwable th2) {
                this.f44591a.completeExceptionally(th2);
            }
        }

        c(Type type) {
            this.f44590a = type;
        }

        @Override // ov.e
        public Type a() {
            return this.f44590a;
        }

        @Override // ov.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.C0(new a(bVar));
            return bVar;
        }
    }

    @Override // ov.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        if (e.a.c(type) != CompletableFuture.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type b10 = e.a.b(0, (ParameterizedType) type);
            if (e.a.c(b10) != z.class) {
                return new a(b10);
            }
            if (b10 instanceof ParameterizedType) {
                return new c(e.a.b(0, (ParameterizedType) b10));
            }
            throw new IllegalStateException("Response must be parameterized as Response<Foo> or Response<? extends Foo>");
        }
        throw new IllegalStateException("CompletableFuture return type must be parameterized as CompletableFuture<Foo> or CompletableFuture<? extends Foo>");
    }
}
