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
    public static final a f39682l = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private final Context f39683g;

    /* renamed from: h  reason: collision with root package name */
    public j f39684h;

    /* renamed from: i  reason: collision with root package name */
    public Executor f39685i;

    /* renamed from: j  reason: collision with root package name */
    private CancellationSignal f39686j;

    /* renamed from: k  reason: collision with root package name */
    private final i f39687k;

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
    public static final class C0505b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0505b f39688d = new C0505b();

        C0505b() {
            super(2);
        }

        public final void a(CancellationSignal cancellationSignal, Function0 f10) {
            Intrinsics.checkNotNullParameter(f10, "f");
            b.a aVar = m2.b.f37807f;
            m2.b.e(cancellationSignal, f10);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((CancellationSignal) obj, (Function0) obj2);
            return Unit.f33298a;
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
            return Unit.f33298a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d0 f39691e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(d0 d0Var) {
            super(0);
            this.f39691e = d0Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, d0 d0Var) {
            bVar.o().onResult(d0Var);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1206invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1206invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final d0 d0Var = this.f39691e;
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
        final /* synthetic */ Ref.ObjectRef f39693e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Ref.ObjectRef objectRef) {
            super(0);
            this.f39693e = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, Ref.ObjectRef objectRef) {
            bVar.o().a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1207invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1207invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final Ref.ObjectRef objectRef = this.f39693e;
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
        final /* synthetic */ m f39695e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(m mVar) {
            super(0);
            this.f39695e = mVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, m mVar) {
            bVar.o().a(mVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1208invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1208invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final m mVar = this.f39695e;
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
        final /* synthetic */ p f39697e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(p pVar) {
            super(0);
            this.f39697e = pVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, p pVar) {
            bVar.o().a(pVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1209invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1209invoke() {
            Executor p10 = b.this.p();
            final b bVar = b.this;
            final p pVar = this.f39697e;
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
            m1210invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1210invoke() {
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
                super(2, obj, a.C0487a.class, "getCredentialExceptionTypeToException", "getCredentialExceptionTypeToException$credentials_play_services_auth_release(Ljava/lang/String;Ljava/lang/String;)Landroidx/credentials/exceptions/GetCredentialException;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final m invoke(String str, String str2) {
                return ((a.C0487a) this.receiver).c(str, str2);
            }
        }

        i(Handler handler) {
            super(handler);
        }

        @Override // android.os.ResultReceiver
        public void onReceiveResult(int i10, Bundle resultData) {
            Intrinsics.checkNotNullParameter(resultData, "resultData");
            if (b.this.f(resultData, new a(m2.a.f37803b), b.this.p(), b.this.o(), b.this.f39686j)) {
                return;
            }
            b.this.q(resultData.getInt("ACTIVITY_REQUEST_CODE"), i10, (Intent) resultData.getParcelable("RESULT_DATA"));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f39683g = context;
        this.f39687k = new i(new Handler(Looper.getMainLooper()));
    }

    private final xg.a n(ve.i iVar) {
        a.C0736a c0736a = new a.C0736a();
        String f10 = iVar.f();
        Intrinsics.checkNotNullExpressionValue(f10, "getId(...)");
        a.C0736a e10 = c0736a.e(f10);
        String e11 = iVar.e();
        Intrinsics.checkNotNull(e11);
        a.C0736a f11 = e10.f(e11);
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
        return n2.a.f39681a.a(request, this.f39683g);
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
            hVar = new h0(k.f42365a.N(response));
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
        j jVar = this.f39684h;
        if (jVar != null) {
            return jVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("callback");
        return null;
    }

    public final Executor p() {
        Executor executor = this.f39685i;
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
        a.C0487a c0487a = m2.a.f37803b;
        if (i10 != c0487a.b()) {
            Log.w("BeginSignIn", "Returned request code " + c0487a.b() + " which  does not match what was given " + i10);
        } else if (!m2.b.h(i11, C0505b.f39688d, new c(), this.f39686j)) {
            try {
                ve.i e10 = ve.e.c(this.f39683g).e(intent);
                Intrinsics.checkNotNullExpressionValue(e10, "getSignInCredentialFromIntent(...)");
                m2.b.e(this.f39686j, new d(m(e10)));
            } catch (ef.b e11) {
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                objectRef.element = new p(e11.getMessage());
                if (e11.b() == 16) {
                    objectRef.element = new h2.k(e11.getMessage());
                } else if (m2.a.f37803b.d().contains(Integer.valueOf(e11.b()))) {
                    objectRef.element = new n(e11.getMessage());
                }
                m2.b.e(this.f39686j, new e(objectRef));
            } catch (m e12) {
                m2.b.e(this.f39686j, new f(e12));
            } catch (Throwable th2) {
                m2.b.e(this.f39686j, new g(new p(th2.getMessage())));
            }
        }
    }

    public void r(c0 request, j callback, Executor executor, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f39686j = cancellationSignal;
        s(callback);
        t(executor);
        if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            return;
        }
        ve.a l10 = l(request);
        Intent intent = new Intent(this.f39683g, HiddenActivity.class);
        intent.putExtra("REQUEST_TYPE", l10);
        c(this.f39687k, intent, "BEGIN_SIGN_IN");
        try {
            this.f39683g.startActivity(intent);
        } catch (Exception unused) {
            m2.b.e(cancellationSignal, new h());
        }
    }

    public final void s(j jVar) {
        Intrinsics.checkNotNullParameter(jVar, "<set-?>");
        this.f39684h = jVar;
    }

    public final void t(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "<set-?>");
        this.f39685i = executor;
    }
}
