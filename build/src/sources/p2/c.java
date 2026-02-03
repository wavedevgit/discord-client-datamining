package p2;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.Handler;
import android.os.Looper;
import android.os.ResultReceiver;
import android.util.Log;
import androidx.credentials.playservices.CredentialProviderPlayServicesImpl;
import androidx.credentials.playservices.IdentityCredentialApiHiddenActivity;
import com.google.android.gms.identitycredentials.GetCredentialRequest;
import com.google.android.gms.tasks.Task;
import g2.c0;
import g2.d0;
import h2.p;
import java.util.ArrayList;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import m2.a;
import m2.b;
import p2.c;
import r2.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c extends m2.b {

    /* renamed from: l  reason: collision with root package name */
    private static final a f44849l = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private final Context f44850g;

    /* renamed from: h  reason: collision with root package name */
    public g2.j f44851h;

    /* renamed from: i  reason: collision with root package name */
    public Executor f44852i;

    /* renamed from: j  reason: collision with root package name */
    private CancellationSignal f44853j;

    /* renamed from: k  reason: collision with root package name */
    private final i f44854k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f44855d = new b();

        b() {
            super(2);
        }

        public final void a(CancellationSignal cancellationSignal, Function0 f10) {
            Intrinsics.checkNotNullParameter(f10, "f");
            b.a aVar = m2.b.f37584f;
            m2.b.e(cancellationSignal, f10);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((CancellationSignal) obj, (Function0) obj2);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: p2.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0556c extends Lambda implements Function1 {
        C0556c() {
            super(1);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void c(c cVar, h2.m mVar) {
            cVar.r().a(mVar);
        }

        public final void b(final h2.m e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            Executor s10 = c.this.s();
            final c cVar = c.this;
            s10.execute(new Runnable() { // from class: p2.d
                @Override // java.lang.Runnable
                public final void run() {
                    c.C0556c.c(c.this, e10);
                }
            });
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            b((h2.m) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(c cVar) {
            cVar.r().a(new p("No provider data returned."));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1220invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1220invoke() {
            Executor s10 = c.this.s();
            final c cVar = c.this;
            s10.execute(new Runnable() { // from class: p2.e
                @Override // java.lang.Runnable
                public final void run() {
                    c.d.b(c.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d0 f44859e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(d0 d0Var) {
            super(0);
            this.f44859e = d0Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(c cVar, d0 d0Var) {
            cVar.r().onResult(d0Var);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1221invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1221invoke() {
            Executor s10 = c.this.s();
            final c cVar = c.this;
            final d0 d0Var = this.f44859e;
            s10.execute(new Runnable() { // from class: p2.f
                @Override // java.lang.Runnable
                public final void run() {
                    c.e.b(c.this, d0Var);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h2.m f44861e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(h2.m mVar) {
            super(0);
            this.f44861e = mVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(c cVar, h2.m mVar) {
            g2.j r10 = cVar.r();
            if (mVar == null) {
                mVar = new p("Unexpected configuration error");
            }
            r10.a(mVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1222invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1222invoke() {
            Executor s10 = c.this.s();
            final c cVar = c.this;
            final h2.m mVar = this.f44861e;
            s10.execute(new Runnable() { // from class: p2.g
                @Override // java.lang.Runnable
                public final void run() {
                    c.f.b(c.this, mVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class g extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f44862d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f44863e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(CancellationSignal cancellationSignal, c cVar) {
            super(1);
            this.f44862d = cancellationSignal;
            this.f44863e = cVar;
        }

        public final void a(xf.g gVar) {
            if (CredentialProviderPlayServicesImpl.Companion.a(this.f44862d)) {
                return;
            }
            Intent intent = new Intent(this.f44863e.f44850g, IdentityCredentialApiHiddenActivity.class);
            intent.setFlags(65536);
            c cVar = this.f44863e;
            intent.putExtra("RESULT_RECEIVER", cVar.d(cVar.f44854k));
            intent.putExtra("EXTRA_GET_CREDENTIAL_INTENT", gVar.b());
            this.f44863e.f44850g.startActivity(intent);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((xf.g) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f44864d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g2.j f44865e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ h2.m f44866i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(Executor executor, g2.j jVar, h2.m mVar) {
            super(0);
            this.f44864d = executor;
            this.f44865e = jVar;
            this.f44866i = mVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(g2.j jVar, h2.m mVar) {
            jVar.a(mVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1223invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1223invoke() {
            Executor executor = this.f44864d;
            final g2.j jVar = this.f44865e;
            final h2.m mVar = this.f44866i;
            executor.execute(new Runnable() { // from class: p2.h
                @Override // java.lang.Runnable
                public final void run() {
                    c.h.b(g2.j.this, mVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class i extends ResultReceiver {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
            a(Object obj) {
                super(2, obj, a.C0477a.class, "getCredentialExceptionTypeToException", "getCredentialExceptionTypeToException$credentials_play_services_auth_release(Ljava/lang/String;Ljava/lang/String;)Landroidx/credentials/exceptions/GetCredentialException;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final h2.m invoke(String str, String str2) {
                return ((a.C0477a) this.receiver).c(str, str2);
            }
        }

        i(Handler handler) {
            super(handler);
        }

        @Override // android.os.ResultReceiver
        public void onReceiveResult(int i10, Bundle resultData) {
            Intrinsics.checkNotNullParameter(resultData, "resultData");
            if (c.this.f(resultData, new a(m2.a.f37580b), c.this.s(), c.this.r(), c.this.f44853j)) {
                return;
            }
            c.this.t(resultData.getInt("ACTIVITY_REQUEST_CODE"), i10, (Intent) resultData.getParcelable("RESULT_DATA"));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f44850g = context;
        this.f44854k = new i(new Handler(Looper.getMainLooper()));
    }

    private final h2.m q(Throwable th2) {
        if (th2 instanceof ef.b) {
            int b10 = ((ef.b) th2).b();
            if (b10 == 16) {
                return new h2.k(th2.getMessage());
            }
            if (m2.a.f37580b.d().contains(Integer.valueOf(b10))) {
                return new h2.n(th2.getMessage());
            }
            return new p("Get digital credential failed, failure: " + th2);
        }
        return new p("Get digital credential failed, failure: " + th2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(Function1 function1, Object obj) {
        function1.invoke(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(c cVar, CancellationSignal cancellationSignal, Executor executor, g2.j jVar, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        m2.b.e(cancellationSignal, new h(executor, jVar, cVar.q(e10)));
    }

    public GetCredentialRequest p(c0 request) {
        Intrinsics.checkNotNullParameter(request, "request");
        ArrayList arrayList = new ArrayList();
        for (g2.l lVar : request.a()) {
        }
        return new GetCredentialRequest(arrayList, c0.f24874f.a(request), request.b(), new ResultReceiver(null));
    }

    public final g2.j r() {
        g2.j jVar = this.f44851h;
        if (jVar != null) {
            return jVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("callback");
        return null;
    }

    public final Executor s() {
        Executor executor = this.f44852i;
        if (executor != null) {
            return executor;
        }
        Intrinsics.throwUninitializedPropertyAccessException("executor");
        return null;
    }

    public final void t(int i10, int i11, Intent intent) {
        a.C0477a c0477a = m2.a.f37580b;
        if (i10 != c0477a.b()) {
            Log.w("DigitalCredentialClient", "Returned request code " + c0477a.b() + " which  does not match what was given " + i10);
        } else if (m2.b.h(i11, b.f44855d, new C0556c(), this.f44853j)) {
        } else {
            if (intent == null) {
                m2.b.e(this.f44853j, new d());
                return;
            }
            a.c cVar = r2.a.f48347a;
            d0 b10 = cVar.b(intent);
            if (b10 != null) {
                m2.b.e(this.f44853j, new e(b10));
                return;
            }
            m2.b.e(this.f44853j, new f(cVar.a(intent)));
        }
    }

    public void u(c0 request, final g2.j callback, final Executor executor, final CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f44853j = cancellationSignal;
        x(callback);
        y(executor);
        if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            return;
        }
        Task i10 = xf.f.f53260a.a(this.f44850g).i(p(request));
        final g gVar = new g(cancellationSignal, this);
        i10.g(new wg.g() { // from class: p2.a
            @Override // wg.g
            public final void onSuccess(Object obj) {
                c.v(Function1.this, obj);
            }
        }).e(new wg.f() { // from class: p2.b
            @Override // wg.f
            public final void onFailure(Exception exc) {
                c.w(c.this, cancellationSignal, executor, callback, exc);
            }
        });
    }

    public final void x(g2.j jVar) {
        Intrinsics.checkNotNullParameter(jVar, "<set-?>");
        this.f44851h = jVar;
    }

    public final void y(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "<set-?>");
        this.f44852i = executor;
    }
}
