package n2;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.Handler;
import android.os.Looper;
import android.os.ResultReceiver;
import android.util.Log;
import androidx.credentials.playservices.CredentialProviderPlayServicesImpl;
import androidx.credentials.playservices.HiddenActivity;
import g2.c0;
import g2.d0;
import g2.f0;
import g2.h0;
import g2.j;
import h2.m;
import h2.n;
import h2.p;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import m2.a;
import m2.b;
import n2.b;
import o2.k;
import zg.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends m2.b {

    /* renamed from: l  reason: collision with root package name */
    public static final a f38447l = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private final Context f38448g;

    /* renamed from: h  reason: collision with root package name */
    public j f38449h;

    /* renamed from: i  reason: collision with root package name */
    public Executor f38450i;

    /* renamed from: j  reason: collision with root package name */
    private CancellationSignal f38451j;

    /* renamed from: k  reason: collision with root package name */
    private final i f38452k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: n2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0527b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0527b f38453d = new C0527b();

        C0527b() {
            super(2);
        }

        public final void a(CancellationSignal cancellationSignal, Function0 f10) {
            Intrinsics.checkNotNullParameter(f10, "f");
            b.a aVar = m2.b.f36876f;
            m2.b.e(cancellationSignal, f10);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((CancellationSignal) obj, (Function0) obj2);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends Lambda implements Function1 {
        c() {
            super(1);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void c(b bVar, m mVar) {
            bVar.o().a(mVar);
        }

        public final void b(final m e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            Executor p10 = b.this.p();
            final b bVar = b.this;
            p10.execute(new Runnable() { // from class: n2.c
                @Override // java.lang.Runnable
                public final void run() {
                    b.c.c(b.this, e10);
                }
            });
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            b((m) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d0 f38456e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(d0 d0Var) {
            super(0);
            this.f38456e = d0Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, d0 d0Var) {
            bVar.o().onResult(d0Var);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1207invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1207invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final d0 d0Var = this.f38456e;
            p10.execute(new Runnable() { // from class: n2.d
                @Override // java.lang.Runnable
                public final void run() {
                    b.d.b(b.this, d0Var);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f38458e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Ref.ObjectRef objectRef) {
            super(0);
            this.f38458e = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, Ref.ObjectRef objectRef) {
            bVar.o().a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1208invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1208invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final Ref.ObjectRef objectRef = this.f38458e;
            p10.execute(new Runnable() { // from class: n2.e
                @Override // java.lang.Runnable
                public final void run() {
                    b.e.b(b.this, objectRef);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ m f38460e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(m mVar) {
            super(0);
            this.f38460e = mVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, m mVar) {
            bVar.o().a(mVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1209invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1209invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final m mVar = this.f38460e;
            p10.execute(new Runnable() { // from class: n2.f
                @Override // java.lang.Runnable
                public final void run() {
                    b.f.b(b.this, mVar);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ p f38462e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(p pVar) {
            super(0);
            this.f38462e = pVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, p pVar) {
            bVar.o().a(pVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1210invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1210invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final p pVar = this.f38462e;
            p10.execute(new Runnable() { // from class: n2.g
                @Override // java.lang.Runnable
                public final void run() {
                    b.g.b(b.this, pVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class h extends Lambda implements Function0 {
        h() {
            super(0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar) {
            bVar.o().a(new p("Failed to launch the selector UI. Hint: ensure the `context` parameter is an Activity-based context."));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1211invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1211invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            p10.execute(new Runnable() { // from class: n2.h
                @Override // java.lang.Runnable
                public final void run() {
                    b.h.b(b.this);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class i extends ResultReceiver {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
            a(Object obj) {
                super(2, obj, a.C0493a.class, "getCredentialExceptionTypeToException", "getCredentialExceptionTypeToException$credentials_play_services_auth_release(Ljava/lang/String;Ljava/lang/String;)Landroidx/credentials/exceptions/GetCredentialException;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final m invoke(String str, String str2) {
                return ((a.C0493a) this.receiver).c(str, str2);
            }
        }

        i(Handler handler) {
            super(handler);
        }

        @Override // android.os.ResultReceiver
        public void onReceiveResult(int i10, Bundle resultData) {
            Intrinsics.checkNotNullParameter(resultData, "resultData");
            if (b.this.f(resultData, new a(m2.a.f36872b), b.this.p(), b.this.o(), b.this.f38451j)) {
                return;
            }
            b.this.q(resultData.getInt("ACTIVITY_REQUEST_CODE"), i10, (Intent) resultData.getParcelable("RESULT_DATA"));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f38448g = context;
        this.f38452k = new i(new Handler(Looper.getMainLooper()));
    }

    private final zg.a n(ve.i iVar) {
        a.C0771a c0771a = new a.C0771a();
        String f10 = iVar.f();
        Intrinsics.checkNotNullExpressionValue(f10, "getId(...)");
        a.C0771a e10 = c0771a.e(f10);
        String e11 = iVar.e();
        Intrinsics.checkNotNull(e11);
        a.C0771a f11 = e10.f(e11);
        if (iVar.b() != null) {
            f11.b(iVar.b());
        }
        if (iVar.d() != null) {
            f11.d(iVar.d());
        }
        if (iVar.c() != null) {
            f11.c(iVar.c());
        }
        if (iVar.i() != null) {
            f11.g(iVar.i());
        }
        if (iVar.j() != null) {
            f11.h(iVar.j());
        }
        return f11.a();
    }

    public ve.a l(c0 request) {
        Intrinsics.checkNotNullParameter(request, "request");
        return n2.a.f38446a.a(request, this.f38448g);
    }

    public d0 m(ve.i response) {
        g2.h hVar;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.h() != null) {
            String f10 = response.f();
            Intrinsics.checkNotNullExpressionValue(f10, "getId(...)");
            String h10 = response.h();
            Intrinsics.checkNotNull(h10);
            hVar = new f0(f10, h10);
        } else if (response.e() != null) {
            hVar = n(response);
        } else if (response.l() != null) {
            hVar = new h0(k.f41470a.N(response));
        } else {
            Log.w("BeginSignIn", "Credential returned but no google Id or password or passkey found");
            hVar = null;
        }
        if (hVar != null) {
            return new d0(hVar);
        }
        throw new p("When attempting to convert get response, null credential found");
    }

    public final j o() {
        j jVar = this.f38449h;
        if (jVar != null) {
            return jVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("callback");
        return null;
    }

    public final Executor p() {
        Executor executor = this.f38450i;
        if (executor != null) {
            return executor;
        }
        Intrinsics.throwUninitializedPropertyAccessException("executor");
        return null;
    }

    /* JADX WARN: Type inference failed for: r5v10, types: [T, h2.k] */
    /* JADX WARN: Type inference failed for: r5v3, types: [T, h2.p] */
    /* JADX WARN: Type inference failed for: r5v8, types: [T, h2.n] */
    public final void q(int i10, int i11, Intent intent) {
        a.C0493a c0493a = m2.a.f36872b;
        if (i10 != c0493a.b()) {
            Log.w("BeginSignIn", "Returned request code " + c0493a.b() + " which  does not match what was given " + i10);
        } else if (!m2.b.h(i11, C0527b.f38453d, new c(), this.f38451j)) {
            try {
                ve.i e10 = ve.e.c(this.f38448g).e(intent);
                Intrinsics.checkNotNullExpressionValue(e10, "getSignInCredentialFromIntent(...)");
                m2.b.e(this.f38451j, new d(m(e10)));
            } catch (ef.b e11) {
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                objectRef.element = new p(e11.getMessage());
                if (e11.b() == 16) {
                    objectRef.element = new h2.k(e11.getMessage());
                } else if (m2.a.f36872b.d().contains(Integer.valueOf(e11.b()))) {
                    objectRef.element = new n(e11.getMessage());
                }
                m2.b.e(this.f38451j, new e(objectRef));
            } catch (m e12) {
                m2.b.e(this.f38451j, new f(e12));
            } catch (Throwable th2) {
                m2.b.e(this.f38451j, new g(new p(th2.getMessage())));
            }
        }
    }

    public void r(c0 request, j callback, Executor executor, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f38451j = cancellationSignal;
        s(callback);
        t(executor);
        if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            return;
        }
        ve.a l10 = l(request);
        Intent intent = new Intent(this.f38448g, HiddenActivity.class);
        intent.putExtra("REQUEST_TYPE", l10);
        c(this.f38452k, intent, "BEGIN_SIGN_IN");
        try {
            this.f38448g.startActivity(intent);
        } catch (Exception unused) {
            m2.b.e(cancellationSignal, new h());
        }
    }

    public final void s(j jVar) {
        Intrinsics.checkNotNullParameter(jVar, "<set-?>");
        this.f38449h = jVar;
    }

    public final void t(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "<set-?>");
        this.f38450i = executor;
    }
}
