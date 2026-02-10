package wv;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.concurrent.CompletableFuture;
import wv.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g extends e.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f54106a;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: wv.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class C0759a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f54107a;

            public C0759a(CompletableFuture completableFuture) {
                this.f54107a = completableFuture;
            }

            @Override // wv.f
            public void a(d dVar, Throwable th2) {
                this.f54107a.completeExceptionally(th2);
            }

            @Override // wv.f
            public void b(d dVar, z zVar) {
                if (zVar.g()) {
                    this.f54107a.complete(zVar.a());
                } else {
                    this.f54107a.completeExceptionally(new o(zVar));
                }
            }
        }

        a(Type type) {
            this.f54106a = type;
        }

        @Override // wv.e
        public Type a() {
            return this.f54106a;
        }

        @Override // wv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.C0(new C0759a(bVar));
            return bVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends CompletableFuture {

        /* renamed from: d  reason: collision with root package name */
        private final d f54109d;

        b(d dVar) {
            this.f54109d = dVar;
        }

        @Override // java.util.concurrent.CompletableFuture, java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            if (z10) {
                this.f54109d.cancel();
            }
            return super.cancel(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f54110a;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f54111a;

            public a(CompletableFuture completableFuture) {
                this.f54111a = completableFuture;
            }

            @Override // wv.f
            public void a(d dVar, Throwable th2) {
                this.f54111a.completeExceptionally(th2);
            }

            @Override // wv.f
            public void b(d dVar, z zVar) {
                this.f54111a.complete(zVar);
            }
        }

        c(Type type) {
            this.f54110a = type;
        }

        @Override // wv.e
        public Type a() {
            return this.f54110a;
        }

        @Override // wv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.C0(new a(bVar));
            return bVar;
        }
    }

    @Override // wv.e.a
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
