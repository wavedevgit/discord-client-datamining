package o2;

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
import i2.b0;
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
import o2.b;
import org.json.JSONException;
import wf.q;
import wf.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends m2.b {

    /* renamed from: l  reason: collision with root package name */
    public static final a f41433l = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private final Context f41434g;

    /* renamed from: h  reason: collision with root package name */
    private g2.j f41435h;

    /* renamed from: i  reason: collision with root package name */
    private Executor f41436i;

    /* renamed from: j  reason: collision with root package name */
    private CancellationSignal f41437j;

    /* renamed from: k  reason: collision with root package name */
    private final k f41438k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b a(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new b(context);
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: o2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0554b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0554b f41439d = new C0554b();

        C0554b() {
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
        public static final void c(b bVar, h2.e eVar) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(eVar);
        }

        public final void b(final h2.e e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            executor.execute(new Runnable() { // from class: o2.c
                @Override // java.lang.Runnable
                public final void run() {
                    b.c.c(b.this, e10);
                }
            });
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            b((h2.e) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h2.e f41442e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(h2.e eVar) {
            super(0);
            this.f41442e = eVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, h2.e eVar) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(eVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1213invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1213invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            final h2.e eVar = this.f41442e;
            executor.execute(new Runnable() { // from class: o2.d
                @Override // java.lang.Runnable
                public final void run() {
                    b.d.b(b.this, eVar);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g2.c f41444e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(g2.c cVar) {
            super(0);
            this.f41444e = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, g2.c cVar) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.onResult(cVar);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1214invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1214invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            final g2.c cVar = this.f41444e;
            executor.execute(new Runnable() { // from class: o2.e
                @Override // java.lang.Runnable
                public final void run() {
                    b.e.b(b.this, cVar);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ JSONException f41446e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(JSONException jSONException) {
            super(0);
            this.f41446e = jSONException;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, JSONException jSONException) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(new j2.a(new i2.f(), jSONException.getMessage()));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1215invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1215invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            final JSONException jSONException = this.f41446e;
            executor.execute(new Runnable() { // from class: o2.f
                @Override // java.lang.Runnable
                public final void run() {
                    b.f.b(b.this, jSONException);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f41448e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(Throwable th2) {
            super(0);
            this.f41448e = th2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, Throwable th2) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(new j2.a(new b0(), th2.getMessage()));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1216invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1216invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            final Throwable th2 = this.f41448e;
            executor.execute(new Runnable() { // from class: o2.g
                @Override // java.lang.Runnable
                public final void run() {
                    b.g.b(b.this, th2);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class h extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ JSONException f41450e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(JSONException jSONException) {
            super(0);
            this.f41450e = jSONException;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, JSONException jSONException) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(bVar.j(jSONException));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1217invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1217invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            final JSONException jSONException = this.f41450e;
            executor.execute(new Runnable() { // from class: o2.h
                @Override // java.lang.Runnable
                public final void run() {
                    b.h.b(b.this, jSONException);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class i extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Throwable f41452e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(Throwable th2) {
            super(0);
            this.f41452e = th2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar, Throwable th2) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(new h2.i(th2.getMessage()));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1218invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1218invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            final Throwable th2 = this.f41452e;
            executor.execute(new Runnable() { // from class: o2.i
                @Override // java.lang.Runnable
                public final void run() {
                    b.i.b(b.this, th2);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class j extends Lambda implements Function0 {
        j() {
            super(0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(b bVar) {
            g2.j jVar = bVar.f41435h;
            if (jVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            }
            jVar.a(new h2.i("Failed to launch the selector UI. Hint: ensure the `context` parameter is an Activity-based context."));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1219invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1219invoke() {
            Executor executor = b.this.f41436i;
            if (executor == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            }
            final b bVar = b.this;
            executor.execute(new Runnable() { // from class: o2.j
                @Override // java.lang.Runnable
                public final void run() {
                    b.j.b(b.this);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class k extends ResultReceiver {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
            a(Object obj) {
                super(2, obj, a.C0493a.class, "createCredentialExceptionTypeToException", "createCredentialExceptionTypeToException$credentials_play_services_auth_release(Ljava/lang/String;Ljava/lang/String;)Landroidx/credentials/exceptions/CreateCredentialException;", 0);
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: a */
            public final h2.e invoke(String str, String str2) {
                return ((a.C0493a) this.receiver).a(str, str2);
            }
        }

        k(Handler handler) {
            super(handler);
        }

        @Override // android.os.ResultReceiver
        public void onReceiveResult(int i10, Bundle resultData) {
            Executor executor;
            g2.j jVar;
            Intrinsics.checkNotNullParameter(resultData, "resultData");
            b bVar = b.this;
            a aVar = new a(m2.a.f36872b);
            Executor executor2 = b.this.f41436i;
            if (executor2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("executor");
                executor = null;
            } else {
                executor = executor2;
            }
            g2.j jVar2 = b.this.f41435h;
            if (jVar2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("callback");
                jVar = null;
            } else {
                jVar = jVar2;
            }
            if (bVar.f(resultData, aVar, executor, jVar, b.this.f41437j)) {
                return;
            }
            b.this.s(resultData.getInt("ACTIVITY_REQUEST_CODE"), i10, (Intent) resultData.getParcelable("RESULT_DATA"));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f41434g = context;
        this.f41438k = new k(new Handler(Looper.getMainLooper()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final j2.a j(JSONException jSONException) {
        String message = jSONException.getMessage();
        if (message != null && message.length() > 0) {
            return new j2.a(new i2.f(), message);
        }
        return new j2.a(new i2.f(), "Unknown error");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(b bVar) {
        g2.j jVar = bVar.f41435h;
        if (jVar == null) {
            Intrinsics.throwUninitializedPropertyAccessException("callback");
            jVar = null;
        }
        jVar.a(new j2.a(new b0(), "Upon handling create public key credential response, fido module giving null bytes indicating internal error"));
    }

    public r q(g2.f request) {
        Intrinsics.checkNotNullParameter(request, "request");
        return o2.k.f41470a.d(request, this.f41434g);
    }

    public g2.c r(q response) {
        Intrinsics.checkNotNullParameter(response, "response");
        try {
            String j10 = response.j();
            Intrinsics.checkNotNullExpressionValue(j10, "toJson(...)");
            return new g2.g(j10);
        } catch (Throwable th2) {
            throw new h2.i("The PublicKeyCredential response json had an unexpected exception when parsing: " + th2.getMessage());
        }
    }

    public final void s(int i10, int i11, Intent intent) {
        a.C0493a c0493a;
        byte[] bArr;
        if (i10 != m2.a.f36872b.b()) {
            Log.w("CreatePublicKey", "Returned request code " + c0493a.b() + " does not match what was given " + i10);
        } else if (!m2.b.g(i11, C0554b.f41439d, new c(), this.f41437j)) {
            Executor executor = null;
            if (intent != null) {
                bArr = intent.getByteArrayExtra("FIDO2_CREDENTIAL_EXTRA");
            } else {
                bArr = null;
            }
            if (bArr == null) {
                if (!CredentialProviderPlayServicesImpl.Companion.a(this.f41437j)) {
                    Executor executor2 = this.f41436i;
                    if (executor2 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("executor");
                    } else {
                        executor = executor2;
                    }
                    executor.execute(new Runnable() { // from class: o2.a
                        @Override // java.lang.Runnable
                        public final void run() {
                            b.t(b.this);
                        }
                    });
                    return;
                }
                return;
            }
            q b10 = q.b(bArr);
            Intrinsics.checkNotNullExpressionValue(b10, "deserializeFromBytes(...)");
            h2.e M = o2.k.f41470a.M(b10);
            if (M != null) {
                m2.b.e(this.f41437j, new d(M));
                return;
            }
            try {
                m2.b.e(this.f41437j, new e(r(b10)));
            } catch (JSONException e10) {
                m2.b.e(this.f41437j, new f(e10));
            } catch (Throwable th2) {
                m2.b.e(this.f41437j, new g(th2));
            }
        }
    }

    public void u(g2.f request, g2.j callback, Executor executor, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f41437j = cancellationSignal;
        this.f41435h = callback;
        this.f41436i = executor;
        try {
            r q10 = q(request);
            if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
                return;
            }
            Intent intent = new Intent(this.f41434g, HiddenActivity.class);
            intent.putExtra("REQUEST_TYPE", q10);
            c(this.f41438k, intent, "CREATE_PUBLIC_KEY_CREDENTIAL");
            try {
                this.f41434g.startActivity(intent);
            } catch (Exception unused) {
                m2.b.e(cancellationSignal, new j());
            }
        } catch (JSONException e10) {
            m2.b.e(cancellationSignal, new h(e10));
        } catch (Throwable th2) {
            m2.b.e(cancellationSignal, new i(th2));
        }
    }
}
