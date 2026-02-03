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
import xg.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends m2.b {

    /* renamed from: l  reason: collision with root package name */
    public static final a f39545l = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private final Context f39546g;

    /* renamed from: h  reason: collision with root package name */
    public j f39547h;

    /* renamed from: i  reason: collision with root package name */
    public Executor f39548i;

    /* renamed from: j  reason: collision with root package name */
    private CancellationSignal f39549j;

    /* renamed from: k  reason: collision with root package name */
    private final i f39550k;

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
    public static final class C0514b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0514b f39551d = new C0514b();

        C0514b() {
            super(2);
        }

        public final void a(CancellationSignal cancellationSignal, Function0 f10) {
            Intrinsics.checkNotNullParameter(f10, "f");
            b.a aVar = m2.b.f37787f;
            m2.b.e(cancellationSignal, f10);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((CancellationSignal) obj, (Function0) obj2);
            return Unit.f33074a;
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
            return Unit.f33074a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d0 f39554e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(d0 d0Var) {
            super(0);
            this.f39554e = d0Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, d0 d0Var) {
            bVar.o().onResult(d0Var);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1208invoke();
            return Unit.f33074a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1208invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final d0 d0Var = this.f39554e;
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
        final /* synthetic */ Ref.ObjectRef f39556e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Ref.ObjectRef objectRef) {
            super(0);
            this.f39556e = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, Ref.ObjectRef objectRef) {
            bVar.o().a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1209invoke();
            return Unit.f33074a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1209invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final Ref.ObjectRef objectRef = this.f39556e;
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
        final /* synthetic */ m f39558e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(m mVar) {
            super(0);
            this.f39558e = mVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, m mVar) {
            bVar.o().a(mVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1210invoke();
            return Unit.f33074a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1210invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final m mVar = this.f39558e;
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
        final /* synthetic */ p f39560e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(p pVar) {
            super(0);
            this.f39560e = pVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, p pVar) {
            bVar.o().a(pVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1211invoke();
            return Unit.f33074a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1211invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final p pVar = this.f39560e;
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
            m1212invoke();
            return Unit.f33074a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1212invoke() {
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
                super(2, obj, a.C0498a.class, "getCredentialExceptionTypeToException", "getCredentialExceptionTypeToException$credentials_play_services_auth_release(Ljava/lang/String;Ljava/lang/String;)Landroidx/credentials/exceptions/GetCredentialException;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final m invoke(String str, String str2) {
                return ((a.C0498a) this.receiver).c(str, str2);
            }
        }

        i(Handler handler) {
            super(handler);
        }

        @Override // android.os.ResultReceiver
        public void onReceiveResult(int i10, Bundle resultData) {
            Intrinsics.checkNotNullParameter(resultData, "resultData");
            if (b.this.f(resultData, new a(m2.a.f37783b), b.this.p(), b.this.o(), b.this.f39549j)) {
                return;
            }
            b.this.q(resultData.getInt("ACTIVITY_REQUEST_CODE"), i10, (Intent) resultData.getParcelable("RESULT_DATA"));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f39546g = context;
        this.f39550k = new i(new Handler(Looper.getMainLooper()));
    }

    private final xg.a n(ve.i iVar) {
        a.C0741a c0741a = new a.C0741a();
        String f10 = iVar.f();
        Intrinsics.checkNotNullExpressionValue(f10, "getId(...)");
        a.C0741a e10 = c0741a.e(f10);
        String e11 = iVar.e();
        Intrinsics.checkNotNull(e11);
        a.C0741a f11 = e10.f(e11);
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
        return n2.a.f39544a.a(request, this.f39546g);
    }

    public d0 m(ve.i response) {
        g2.h hVar;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.g() != null) {
            String f10 = response.f();
            Intrinsics.checkNotNullExpressionValue(f10, "getId(...)");
            String g10 = response.g();
            Intrinsics.checkNotNull(g10);
            hVar = new f0(f10, g10);
        } else if (response.e() != null) {
            hVar = n(response);
        } else if (response.k() != null) {
            hVar = new h0(k.f42493a.N(response));
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
        j jVar = this.f39547h;
        if (jVar != null) {
            return jVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("callback");
        return null;
    }

    public final Executor p() {
        Executor executor = this.f39548i;
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
        a.C0498a c0498a = m2.a.f37783b;
        if (i10 != c0498a.b()) {
            Log.w("BeginSignIn", "Returned request code " + c0498a.b() + " which  does not match what was given " + i10);
        } else if (!m2.b.h(i11, C0514b.f39551d, new c(), this.f39549j)) {
            try {
                ve.i e10 = ve.e.c(this.f39546g).e(intent);
                Intrinsics.checkNotNullExpressionValue(e10, "getSignInCredentialFromIntent(...)");
                m2.b.e(this.f39549j, new d(m(e10)));
            } catch (ef.b e11) {
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                objectRef.element = new p(e11.getMessage());
                if (e11.b() == 16) {
                    objectRef.element = new h2.k(e11.getMessage());
                } else if (m2.a.f37783b.d().contains(Integer.valueOf(e11.b()))) {
                    objectRef.element = new n(e11.getMessage());
                }
                m2.b.e(this.f39549j, new e(objectRef));
            } catch (m e12) {
                m2.b.e(this.f39549j, new f(e12));
            } catch (Throwable th2) {
                m2.b.e(this.f39549j, new g(new p(th2.getMessage())));
            }
        }
    }

    public void r(c0 request, j callback, Executor executor, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f39549j = cancellationSignal;
        s(callback);
        t(executor);
        if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            return;
        }
        ve.a l10 = l(request);
        Intent intent = new Intent(this.f39546g, HiddenActivity.class);
        intent.putExtra("REQUEST_TYPE", l10);
        c(this.f39550k, intent, "BEGIN_SIGN_IN");
        try {
            this.f39546g.startActivity(intent);
        } catch (Exception unused) {
            m2.b.e(cancellationSignal, new h());
        }
    }

    public final void s(j jVar) {
        Intrinsics.checkNotNullParameter(jVar, "<set-?>");
        this.f39547h = jVar;
    }

    public final void t(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "<set-?>");
        this.f39548i = executor;
    }
}
