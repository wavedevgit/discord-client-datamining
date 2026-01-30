package iv;

import iv.e;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.concurrent.CompletableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g extends e.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f31343a;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: iv.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class C0409a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f31344a;

            public C0409a(CompletableFuture completableFuture) {
                this.f31344a = completableFuture;
            }

            @Override // iv.f
            public void a(d dVar, Throwable th2) {
                this.f31344a.completeExceptionally(th2);
            }

            @Override // iv.f
            public void b(d dVar, z zVar) {
                if (zVar.g()) {
                    this.f31344a.complete(zVar.a());
                } else {
                    this.f31344a.completeExceptionally(new o(zVar));
                }
            }
        }

        a(Type type) {
            this.f31343a = type;
        }

        @Override // iv.e
        public Type a() {
            return this.f31343a;
        }

        @Override // iv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.M0(new C0409a(bVar));
            return bVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends CompletableFuture {

        /* renamed from: d  reason: collision with root package name */
        private final d f31346d;

        b(d dVar) {
            this.f31346d = dVar;
        }

        @Override // java.util.concurrent.CompletableFuture, java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            if (z10) {
                this.f31346d.cancel();
            }
            return super.cancel(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f31347a;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f31348a;

            public a(CompletableFuture completableFuture) {
                this.f31348a = completableFuture;
            }

            @Override // iv.f
            public void a(d dVar, Throwable th2) {
                this.f31348a.completeExceptionally(th2);
            }

            @Override // iv.f
            public void b(d dVar, z zVar) {
                this.f31348a.complete(zVar);
            }
        }

        c(Type type) {
            this.f31347a = type;
        }

        @Override // iv.e
        public Type a() {
            return this.f31347a;
        }

        @Override // iv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.M0(new a(bVar));
            return bVar;
        }
    }

    @Override // iv.e.a
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
