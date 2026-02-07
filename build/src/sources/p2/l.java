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
    private final Context f43658g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f43660e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Executor f43661i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g2.j f43662o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: p2.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0577a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Executor f43663d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ g2.j f43664e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d0 f43665i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0577a(Executor executor, g2.j jVar, d0 d0Var) {
                super(0);
                this.f43663d = executor;
                this.f43664e = jVar;
                this.f43665i = d0Var;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final void b(g2.j jVar, d0 d0Var) {
                jVar.onResult(d0Var);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1224invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1224invoke() {
                Executor executor = this.f43663d;
                final g2.j jVar = this.f43664e;
                final d0 d0Var = this.f43665i;
                executor.execute(new Runnable() { // from class: p2.k
                    @Override // java.lang.Runnable
                    public final void run() {
                        l.a.C0577a.b(g2.j.this, d0Var);
                    }
                });
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Executor f43666d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ g2.j f43667e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Exception f43668i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Executor executor, g2.j jVar, Exception exc) {
                super(0);
                this.f43666d = executor;
                this.f43667e = jVar;
                this.f43668i = exc;
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
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1225invoke() {
                Executor executor = this.f43666d;
                final g2.j jVar = this.f43667e;
                final Exception exc = this.f43668i;
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
            this.f43660e = cancellationSignal;
            this.f43661i = executor;
            this.f43662o = jVar;
        }

        public final void a(af.c cVar) {
            try {
                l lVar = l.this;
                Intrinsics.checkNotNull(cVar);
                d0 m10 = lVar.m(cVar);
                b.a aVar = m2.b.f36876f;
                m2.b.e(this.f43660e, new C0577a(this.f43661i, this.f43662o, m10));
            } catch (Exception e10) {
                b.a aVar2 = m2.b.f36876f;
                m2.b.e(this.f43660e, new b(this.f43661i, this.f43662o, e10));
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((af.c) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f43669d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g2.j f43670e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f43671i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Executor executor, g2.j jVar, Ref.ObjectRef objectRef) {
            super(0);
            this.f43669d = executor;
            this.f43670e = jVar;
            this.f43671i = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(g2.j jVar, Ref.ObjectRef objectRef) {
            jVar.a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1226invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1226invoke() {
            Executor executor = this.f43669d;
            final g2.j jVar = this.f43670e;
            final Ref.ObjectRef objectRef = this.f43671i;
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
        this.f43658g = context;
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
        if (e10 instanceof ef.b) {
            ef.b bVar = (ef.b) e10;
            if (bVar.b() == 40201) {
                objectRef.element = new p("The restore credential internal service had a failure, failure: " + e10.getMessage());
            } else {
                objectRef.element = new p("The restore credential service failed with unsupported status code, failure: " + e10.getMessage() + ", status code: " + bVar.b());
            }
        }
        m2.b.e(cancellationSignal, new b(executor, jVar, objectRef));
    }

    public af.a l(c0 request) {
        Intrinsics.checkNotNullParameter(request, "request");
        for (g2.l lVar : request.a()) {
        }
        Intrinsics.throwUninitializedPropertyAccessException("credentialOption");
        throw null;
    }

    public d0 m(af.c response) {
        Intrinsics.checkNotNullParameter(response, "response");
        return new d0(g2.h.f23846c.b("androidx.credentials.TYPE_RESTORE_CREDENTIAL", response.b()));
    }

    public void n(c0 request, final g2.j callback, final Executor executor, final CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            return;
        }
        Task l10 = af.e.a(this.f43658g).l(l(request));
        final a aVar = new a(cancellationSignal, executor, callback);
        l10.g(new yg.g() { // from class: p2.i
            @Override // yg.g
            public final void onSuccess(Object obj) {
                l.o(Function1.this, obj);
            }
        }).e(new yg.f() { // from class: p2.j
            @Override // yg.f
            public final void onFailure(Exception exc) {
                l.p(cancellationSignal, executor, callback, exc);
            }
        });
    }
}
