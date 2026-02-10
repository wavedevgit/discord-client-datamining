package p2;

import android.content.Context;
import android.os.CancellationSignal;
import androidx.credentials.playservices.CredentialProviderPlayServicesImpl;
import com.google.android.gms.tasks.Task;
import g2.c0;
import g2.d0;
import h2.p;
import h2.r;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import m2.b;
import p2.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l extends m2.b {

    /* renamed from: g  reason: collision with root package name */
    private final Context f42913g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f42915e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Executor f42916i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g2.j f42917o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: p2.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0608a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Executor f42918d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ g2.j f42919e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d0 f42920i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0608a(Executor executor, g2.j jVar, d0 d0Var) {
                super(0);
                this.f42918d = executor;
                this.f42919e = jVar;
                this.f42920i = d0Var;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final void b(g2.j jVar, d0 d0Var) {
                jVar.onResult(d0Var);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1224invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1224invoke() {
                Executor executor = this.f42918d;
                final g2.j jVar = this.f42919e;
                final d0 d0Var = this.f42920i;
                executor.execute(new Runnable() { // from class: p2.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        l.a.C0608a.b(g2.j.this, d0Var);
                    }
                });
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Executor f42921d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ g2.j f42922e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Exception f42923i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Executor executor, g2.j jVar, Exception exc) {
                super(0);
                this.f42921d = executor;
                this.f42922e = jVar;
                this.f42923i = exc;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final void b(g2.j jVar, Exception exc) {
                h2.m pVar;
                if (exc instanceof r) {
                    pVar = (h2.m) exc;
                } else {
                    pVar = new p(exc.getMessage());
                }
                jVar.a(pVar);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1225invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1225invoke() {
                Executor executor = this.f42921d;
                final g2.j jVar = this.f42922e;
                final Exception exc = this.f42923i;
                executor.execute(new Runnable() { // from class: p2.m
                    @Override // java.lang.Runnable
                    public final void run() {
                        l.a.b.b(g2.j.this, exc);
                    }
                });
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(CancellationSignal cancellationSignal, Executor executor, g2.j jVar) {
            super(1);
            this.f42915e = cancellationSignal;
            this.f42916i = executor;
            this.f42917o = jVar;
        }

        public final void a(bf.c cVar) {
            try {
                l lVar = l.this;
                Intrinsics.checkNotNull(cVar);
                d0 m10 = lVar.m(cVar);
                b.a aVar = m2.b.f36735f;
                m2.b.e(this.f42915e, new C0608a(this.f42916i, this.f42917o, m10));
            } catch (Exception e10) {
                b.a aVar2 = m2.b.f36735f;
                m2.b.e(this.f42915e, new b(this.f42916i, this.f42917o, e10));
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((bf.c) obj);
            return Unit.f31765a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f42924d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g2.j f42925e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f42926i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Executor executor, g2.j jVar, Ref.ObjectRef objectRef) {
            super(0);
            this.f42924d = executor;
            this.f42925e = jVar;
            this.f42926i = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(g2.j jVar, Ref.ObjectRef objectRef) {
            jVar.a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1226invoke();
            return Unit.f31765a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1226invoke() {
            Executor executor = this.f42924d;
            final g2.j jVar = this.f42925e;
            final Ref.ObjectRef objectRef = this.f42926i;
            executor.execute(new Runnable() { // from class: p2.n
                @Override // java.lang.Runnable
                public final void run() {
                    l.b.b(g2.j.this, objectRef);
                }
            });
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f42913g = context;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(Function1 function1, Object obj) {
        function1.invoke(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Type inference failed for: r1v0, types: [T, h2.p] */
    /* JADX WARN: Type inference failed for: r1v4, types: [T, h2.p] */
    /* JADX WARN: Type inference failed for: r2v3, types: [T, h2.p] */
    public static final void p(CancellationSignal cancellationSignal, Executor executor, g2.j jVar, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new p("Get restore credential failed for unknown reason, failure: " + e10.getMessage());
        if (e10 instanceof ff.b) {
            ff.b bVar = (ff.b) e10;
            if (bVar.b() == 40201) {
                objectRef.element = new p("The restore credential internal service had a failure, failure: " + e10.getMessage());
            } else {
                objectRef.element = new p("The restore credential service failed with unsupported status code, failure: " + e10.getMessage() + ", status code: " + bVar.b());
            }
        }
        m2.b.e(cancellationSignal, new b(executor, jVar, objectRef));
    }

    public bf.a l(c0 request) {
        Intrinsics.checkNotNullParameter(request, "request");
        for (g2.l lVar : request.a()) {
        }
        Intrinsics.throwUninitializedPropertyAccessException("credentialOption");
        throw null;
    }

    public d0 m(bf.c response) {
        Intrinsics.checkNotNullParameter(response, "response");
        return new d0(g2.h.f23371c.b("androidx.credentials.TYPE_RESTORE_CREDENTIAL", response.b()));
    }

    public void n(c0 request, final g2.j callback, final Executor executor, final CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            return;
        }
        Task b10 = bf.e.a(this.f42913g).b(l(request));
        final a aVar = new a(cancellationSignal, executor, callback);
        b10.g(new zg.g() { // from class: p2.i
            @Override // zg.g
            public final void onSuccess(Object obj) {
                l.o(Function1.this, obj);
            }
        }).e(new zg.f() { // from class: p2.j
            @Override // zg.f
            public final void onFailure(Exception exc) {
                l.p(cancellationSignal, executor, callback, exc);
            }
        });
    }
}
