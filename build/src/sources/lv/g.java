package lv;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.concurrent.CompletableFuture;
import lv.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g extends e.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f37378a;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: lv.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class C0475a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f37379a;

            public C0475a(CompletableFuture completableFuture) {
                this.f37379a = completableFuture;
            }

            @Override // lv.f
            public void a(d dVar, z zVar) {
                if (zVar.g()) {
                    this.f37379a.complete(zVar.a());
                } else {
                    this.f37379a.completeExceptionally(new o(zVar));
                }
            }

            @Override // lv.f
            public void b(d dVar, Throwable th2) {
                this.f37379a.completeExceptionally(th2);
            }
        }

        a(Type type) {
            this.f37378a = type;
        }

        @Override // lv.e
        public Type a() {
            return this.f37378a;
        }

        @Override // lv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.I0(new C0475a(bVar));
            return bVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends CompletableFuture {

        /* renamed from: d  reason: collision with root package name */
        private final d f37381d;

        b(d dVar) {
            this.f37381d = dVar;
        }

        @Override // java.util.concurrent.CompletableFuture, java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            if (z10) {
                this.f37381d.cancel();
            }
            return super.cancel(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c implements e {

        /* renamed from: a  reason: collision with root package name */
        private final Type f37382a;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            private final CompletableFuture f37383a;

            public a(CompletableFuture completableFuture) {
                this.f37383a = completableFuture;
            }

            @Override // lv.f
            public void a(d dVar, z zVar) {
                this.f37383a.complete(zVar);
            }

            @Override // lv.f
            public void b(d dVar, Throwable th2) {
                this.f37383a.completeExceptionally(th2);
            }
        }

        c(Type type) {
            this.f37382a = type;
        }

        @Override // lv.e
        public Type a() {
            return this.f37382a;
        }

        @Override // lv.e
        /* renamed from: c */
        public CompletableFuture b(d dVar) {
            b bVar = new b(dVar);
            dVar.I0(new a(bVar));
            return bVar;
        }
    }

    @Override // lv.e.a
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
