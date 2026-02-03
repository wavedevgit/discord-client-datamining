package lv;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Objects;
import java.util.concurrent.Executor;
import lv.e;
import lv.i;
import okhttp3.Request;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f37385a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f37386a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Executor f37387b;

        a(Type type, Executor executor) {
            this.f37386a = type;
            this.f37387b = executor;
        }

        @Override // lv.e
        public Type a() {
            return this.f37386a;
        }

        @Override // lv.e
        /* renamed from: c */
        public d b(d dVar) {
            Executor executor = this.f37387b;
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
        final Executor f37389d;

        /* renamed from: e  reason: collision with root package name */
        final d f37390e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ f f37391a;

            a(f fVar) {
                this.f37391a = fVar;
            }

            public static /* synthetic */ void d(a aVar, f fVar, z zVar) {
                if (b.this.f37390e.x()) {
                    fVar.b(b.this, new IOException("Canceled"));
                } else {
                    fVar.a(b.this, zVar);
                }
            }

            @Override // lv.f
            public void a(d dVar, final z zVar) {
                Executor executor = b.this.f37389d;
                final f fVar = this.f37391a;
                executor.execute(new Runnable() { // from class: lv.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.b.a.d(i.b.a.this, fVar, zVar);
                    }
                });
            }

            @Override // lv.f
            public void b(d dVar, final Throwable th2) {
                Executor executor = b.this.f37389d;
                final f fVar = this.f37391a;
                executor.execute(new Runnable() { // from class: lv.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        fVar.b(i.b.this, th2);
                    }
                });
            }
        }

        b(Executor executor, d dVar) {
            this.f37389d = executor;
            this.f37390e = dVar;
        }

        @Override // lv.d
        public void I0(f fVar) {
            Objects.requireNonNull(fVar, "callback == null");
            this.f37390e.I0(new a(fVar));
        }

        @Override // lv.d
        public void cancel() {
            this.f37390e.cancel();
        }

        @Override // lv.d
        public Request h() {
            return this.f37390e.h();
        }

        @Override // lv.d
        public boolean x() {
            return this.f37390e.x();
        }

        @Override // lv.d
        public d clone() {
            return new b(this.f37389d, this.f37390e.mo1203clone());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(Executor executor) {
        this.f37385a = executor;
    }

    @Override // lv.e.a
    public e a(Type type, Annotation[] annotationArr, a0 a0Var) {
        Executor executor = null;
        if (e.a.c(type) != d.class) {
            return null;
        }
        if (type instanceof ParameterizedType) {
            Type g10 = e0.g(0, (ParameterizedType) type);
            if (!e0.l(annotationArr, c0.class)) {
                executor = this.f37385a;
            }
            return new a(g10, executor);
        }
        throw new IllegalArgumentException("Call return type must be parameterized as Call<Foo> or Call<? extends Foo>");
    }
}
