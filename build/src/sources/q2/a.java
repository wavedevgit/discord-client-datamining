package q2;

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
import h2.k;
import h2.m;
import h2.n;
import h2.p;
import h2.q;
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
import q2.a;
import zg.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends m2.b {

    /* renamed from: l  reason: collision with root package name */
    public static final C0596a f46388l = new C0596a(null);

    /* renamed from: g  reason: collision with root package name */
    private final Context f46389g;

    /* renamed from: h  reason: collision with root package name */
    public g2.j f46390h;

    /* renamed from: i  reason: collision with root package name */
    public Executor f46391i;

    /* renamed from: j  reason: collision with root package name */
    private CancellationSignal f46392j;

    /* renamed from: k  reason: collision with root package name */
    private final j f46393k;

    /* renamed from: q2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0596a {
        public /* synthetic */ C0596a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0596a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f46394d = new b();

        b() {
            super(2);
        }

        public final void a(CancellationSignal cancellationSignal, Function0 f10) {
            Intrinsics.checkNotNullParameter(f10, "f");
            b.a aVar = m2.b.f36828f;
            m2.b.e(cancellationSignal, f10);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((CancellationSignal) obj, (Function0) obj2);
            return Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends Lambda implements Function1 {
        c() {
            super(1);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void c(a aVar, m mVar) {
            aVar.o().a(mVar);
        }

        public final void b(final m e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            Executor p10 = a.this.p();
            final a aVar = a.this;
            p10.execute(new Runnable() { // from class: q2.b
                @Override // java.lang.Runnable
                public final void run() {
                    a.c.c(a.this, e10);
                }
            });
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            b((m) obj);
            return Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d0 f46397e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(d0 d0Var) {
            super(0);
            this.f46397e = d0Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(a aVar, d0 d0Var) {
            aVar.o().onResult(d0Var);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1227invoke();
            return Unit.f32008a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1227invoke() {
            Executor p10 = a.this.p();
            final a aVar = a.this;
            final d0 d0Var = this.f46397e;
            p10.execute(new Runnable() { // from class: q2.c
                @Override // java.lang.Runnable
                public final void run() {
                    a.d.b(a.this, d0Var);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f46399e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Ref.ObjectRef objectRef) {
            super(0);
            this.f46399e = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(a aVar, Ref.ObjectRef objectRef) {
            aVar.o().a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1228invoke();
            return Unit.f32008a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1228invoke() {
            Executor p10 = a.this.p();
            final a aVar = a.this;
            final Ref.ObjectRef objectRef = this.f46399e;
            p10.execute(new Runnable() { // from class: q2.d
                @Override // java.lang.Runnable
                public final void run() {
                    a.e.b(a.this, objectRef);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ m f46401e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(m mVar) {
            super(0);
            this.f46401e = mVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(a aVar, m mVar) {
            aVar.o().a(mVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1229invoke();
            return Unit.f32008a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1229invoke() {
            Executor p10 = a.this.p();
            final a aVar = a.this;
            final m mVar = this.f46401e;
            p10.execute(new Runnable() { // from class: q2.e
                @Override // java.lang.Runnable
                public final void run() {
                    a.f.b(a.this, mVar);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ p f46403e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(p pVar) {
            super(0);
            this.f46403e = pVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(a aVar, p pVar) {
            aVar.o().a(pVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1230invoke();
            return Unit.f32008a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1230invoke() {
            Executor p10 = a.this.p();
            final a aVar = a.this;
            final p pVar = this.f46403e;
            p10.execute(new Runnable() { // from class: q2.f
                @Override // java.lang.Runnable
                public final void run() {
                    a.g.b(a.this, pVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class h extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Exception f46405e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(Exception exc) {
            super(0);
            this.f46405e = exc;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(a aVar, Exception exc) {
            aVar.o().a(exc);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1231invoke();
            return Unit.f32008a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1231invoke() {
            Executor p10 = a.this.p();
            final a aVar = a.this;
            final Exception exc = this.f46405e;
            p10.execute(new Runnable() { // from class: q2.g
                @Override // java.lang.Runnable
                public final void run() {
                    a.h.b(a.this, exc);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class i extends Lambda implements Function0 {
        i() {
            super(0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(a aVar) {
            aVar.o().a(new p("Failed to launch the selector UI. Hint: ensure the `context` parameter is an Activity-based context."));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1232invoke();
            return Unit.f32008a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1232invoke() {
            Executor p10 = a.this.p();
            final a aVar = a.this;
            p10.execute(new Runnable() { // from class: q2.h
                @Override // java.lang.Runnable
                public final void run() {
                    a.i.b(a.this);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class j extends ResultReceiver {

        /* renamed from: q2.a$j$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class C0597a extends FunctionReferenceImpl implements Function2 {
            C0597a(Object obj) {
                super(2, obj, a.C0493a.class, "getCredentialExceptionTypeToException", "getCredentialExceptionTypeToException$credentials_play_services_auth_release(Ljava/lang/String;Ljava/lang/String;)Landroidx/credentials/exceptions/GetCredentialException;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final m invoke(String str, String str2) {
                return ((a.C0493a) this.receiver).c(str, str2);
            }
        }

        j(Handler handler) {
            super(handler);
        }

        @Override // android.os.ResultReceiver
        public void onReceiveResult(int i10, Bundle resultData) {
            Intrinsics.checkNotNullParameter(resultData, "resultData");
            if (a.this.f(resultData, new C0597a(m2.a.f36824b), a.this.p(), a.this.o(), a.this.f46392j)) {
                return;
            }
            a.this.q(resultData.getInt("ACTIVITY_REQUEST_CODE"), i10, (Intent) resultData.getParcelable("RESULT_DATA"));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f46389g = context;
        this.f46393k = new j(new Handler(Looper.getMainLooper()));
    }

    public ve.d l(c0 request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (request.a().size() != 1) {
            throw new q("GetSignInWithGoogleOption cannot be combined with other options.");
        }
        Object obj = request.a().get(0);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.google.android.libraries.identity.googleid.GetSignInWithGoogleOption");
        android.support.v4.media.session.b.a(obj);
        ve.d.b();
        throw null;
    }

    protected d0 m(ve.i response) {
        zg.a aVar;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.e() != null) {
            aVar = n(response);
        } else {
            Log.w("GetSignInIntent", "Credential returned but no google Id found");
            aVar = null;
        }
        if (aVar != null) {
            return new d0(aVar);
        }
        throw new p("When attempting to convert get response, null credential found");
    }

    public final zg.a n(ve.i response) {
        Intrinsics.checkNotNullParameter(response, "response");
        a.C0771a c0771a = new a.C0771a();
        String f10 = response.f();
        Intrinsics.checkNotNullExpressionValue(f10, "getId(...)");
        a.C0771a e10 = c0771a.e(f10);
        try {
            String e11 = response.e();
            Intrinsics.checkNotNull(e11);
            e10.f(e11);
            if (response.b() != null) {
                e10.b(response.b());
            }
            if (response.d() != null) {
                e10.d(response.d());
            }
            if (response.c() != null) {
                e10.c(response.c());
            }
            if (response.i() != null) {
                e10.g(response.i());
            }
            if (response.j() != null) {
                e10.h(response.j());
            }
            return e10.a();
        } catch (Exception unused) {
            throw new p("When attempting to convert get response, null Google ID Token found");
        }
    }

    public final g2.j o() {
        g2.j jVar = this.f46390h;
        if (jVar != null) {
            return jVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("callback");
        return null;
    }

    public final Executor p() {
        Executor executor = this.f46391i;
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
        a.C0493a c0493a = m2.a.f36824b;
        if (i10 != c0493a.b()) {
            Log.w("GetSignInIntent", "Returned request code " + c0493a.b() + " which  does not match what was given " + i10);
        } else if (!m2.b.h(i11, b.f46394d, new c(), this.f46392j)) {
            try {
                ve.i e10 = ve.e.c(this.f46389g).e(intent);
                Intrinsics.checkNotNullExpressionValue(e10, "getSignInCredentialFromIntent(...)");
                m2.b.e(this.f46392j, new d(m(e10)));
            } catch (ef.b e11) {
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                objectRef.element = new p(e11.getMessage());
                if (e11.b() == 16) {
                    objectRef.element = new k(e11.getMessage());
                } else if (m2.a.f36824b.d().contains(Integer.valueOf(e11.b()))) {
                    objectRef.element = new n(e11.getMessage());
                }
                m2.b.e(this.f46392j, new e(objectRef));
            } catch (m e12) {
                m2.b.e(this.f46392j, new f(e12));
            } catch (Throwable th2) {
                m2.b.e(this.f46392j, new g(new p(th2.getMessage())));
            }
        }
    }

    public void r(c0 request, g2.j callback, Executor executor, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f46392j = cancellationSignal;
        s(callback);
        t(executor);
        if (!CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
            try {
                ve.d l10 = l(request);
                Intent intent = new Intent(this.f46389g, HiddenActivity.class);
                intent.putExtra("REQUEST_TYPE", l10);
                c(this.f46393k, intent, "SIGN_IN_INTENT");
                this.f46389g.startActivity(intent);
            } catch (Exception e10) {
                if (e10 instanceof q) {
                    m2.b.e(cancellationSignal, new h(e10));
                } else {
                    m2.b.e(cancellationSignal, new i());
                }
            }
        }
    }

    public final void s(g2.j jVar) {
        Intrinsics.checkNotNullParameter(jVar, "<set-?>");
        this.f46390h = jVar;
    }

    public final void t(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "<set-?>");
        this.f46391i = executor;
    }
}
