package vv;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.concurrent.CompletableFuture;
import vv.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g extends e.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f53031a;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: vv.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class C0706a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f53032a;

            public C0706a(CompletableFuture completableFuture) {
                this.f53032a = completableFuture;
            }

            @Override // vv.f
            public void a(d dVar, z zVar) {
                if (zVar.g()) {
                    this.f53032a.complete(zVar.a());
                } else {
                    this.f53032a.completeExceptionally(new o(zVar));
                }
            }

            @Override // vv.f
            public void b(d dVar, Throwable th2) {
                this.f53032a.completeExceptionally(th2);
            }
        }

        a(Type type) {
            this.f53031a = type;
        }

        @Override // vv.e
        public Type a() {
            return this.f53031a;
        }

        @Override // vv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.E0(new C0706a(bVar));
            return bVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends CompletableFuture {

        /* renamed from: d  reason: collision with root package name */
        private final d f53034d;

        b(d dVar) {
            this.f53034d = dVar;
        }

        @Override // java.util.concurrent.CompletableFuture, java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            if (z10) {
                this.f53034d.cancel();
            }
            return super.cancel(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f53035a;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f53036a;

            public a(CompletableFuture completableFuture) {
                this.f53036a = completableFuture;
            }

            @Override // vv.f
            public void a(d dVar, z zVar) {
                this.f53036a.complete(zVar);
            }

            @Override // vv.f
            public void b(d dVar, Throwable th2) {
                this.f53036a.completeExceptionally(th2);
            }
        }

        c(Type type) {
            this.f53035a = type;
        }

        @Override // vv.e
        public Type a() {
            return this.f53035a;
        }

        @Override // vv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.E0(new a(bVar));
            return bVar;
        }
    }

    @Override // vv.e.a
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
