package g2;

import android.content.Context;
import android.credentials.CreateCredentialException;
import android.credentials.CreateCredentialRequest;
import android.credentials.CreateCredentialResponse;
import android.credentials.Credential;
import android.credentials.CredentialManager;
import android.credentials.GetCredentialException;
import android.credentials.GetCredentialRequest;
import android.credentials.GetCredentialResponse;
import android.os.Build;
import android.os.Bundle;
import android.os.CancellationSignal;
import android.os.OutcomeReceiver;
import android.util.Log;
import g2.c;
import g2.h;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements m {

    /* renamed from: b  reason: collision with root package name */
    private static final a f25626b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final CredentialManager f25627a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ j f25628d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(j jVar) {
            super(0);
            this.f25628d = jVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1170invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1170invoke() {
            this.f25628d.a(new h2.j("Your device doesn't support credential manager"));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements OutcomeReceiver {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ j f25629a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g2.b f25630b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ v f25631c;

        c(j jVar, g2.b bVar, v vVar) {
            this.f25629a = jVar;
            this.f25630b = bVar;
            this.f25631c = vVar;
        }

        public void a(CreateCredentialException error) {
            Intrinsics.checkNotNullParameter(error, "error");
            Log.i("CredManProvService", "CreateCredentialResponse error returned from framework");
            this.f25629a.a(this.f25631c.d(error));
        }

        public void b(CreateCredentialResponse response) {
            Intrinsics.checkNotNullParameter(response, "response");
            Log.i("CredManProvService", "Create Result returned from framework: ");
            j jVar = this.f25629a;
            c.a aVar = g2.c.f25579c;
            String e10 = this.f25630b.e();
            Bundle data = response.getData();
            Intrinsics.checkNotNullExpressionValue(data, "response.data");
            jVar.onResult(aVar.a(e10, data));
        }

        public /* bridge */ /* synthetic */ void onError(Throwable th2) {
            a(w.a(th2));
        }

        public /* bridge */ /* synthetic */ void onResult(Object obj) {
            b(x.a(obj));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ j f25632d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(j jVar) {
            super(0);
            this.f25632d = jVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1171invoke();
            return Unit.f33298a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1171invoke() {
            this.f25632d.a(new h2.q("Your device doesn't support credential manager"));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements OutcomeReceiver {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ j f25633a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ v f25634b;

        e(j jVar, v vVar) {
            this.f25633a = jVar;
            this.f25634b = vVar;
        }

        public void a(GetCredentialException error) {
            Intrinsics.checkNotNullParameter(error, "error");
            Log.i("CredManProvService", "GetCredentialResponse error returned from framework");
            this.f25633a.a(this.f25634b.e(error));
        }

        public void b(GetCredentialResponse response) {
            Intrinsics.checkNotNullParameter(response, "response");
            Log.i("CredManProvService", "GetCredentialResponse returned from framework");
            this.f25633a.onResult(this.f25634b.c(response));
        }

        public /* bridge */ /* synthetic */ void onError(Throwable th2) {
            a(y.a(th2));
        }

        public /* bridge */ /* synthetic */ void onResult(Object obj) {
            b(z.a(obj));
        }
    }

    public v(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f25627a = u.a(context.getSystemService("credential"));
    }

    private final CreateCredentialRequest a(g2.b bVar, Context context) {
        t.a();
        CreateCredentialRequest.Builder alwaysSendAppInfoToProvider = s.a(bVar.e(), k2.a.a(bVar, context), bVar.a()).setIsSystemProviderRequired(bVar.f()).setAlwaysSendAppInfoToProvider(true);
        Intrinsics.checkNotNullExpressionValue(alwaysSendAppInfoToProvider, "Builder(\n               …ndAppInfoToProvider(true)");
        g(bVar, alwaysSendAppInfoToProvider);
        CreateCredentialRequest build = alwaysSendAppInfoToProvider.build();
        Intrinsics.checkNotNullExpressionValue(build, "createCredentialRequestBuilder.build()");
        return build;
    }

    private final GetCredentialRequest b(c0 c0Var) {
        q.a();
        GetCredentialRequest.Builder a10 = o.a(c0.f25582f.a(c0Var));
        for (l lVar : c0Var.a()) {
            r.a();
            a10.addCredentialOption(p.a(lVar.d(), lVar.c(), lVar.b()).setIsSystemProviderRequired(lVar.e()).setAllowedProviders(lVar.a()).build());
        }
        h(c0Var, a10);
        GetCredentialRequest build = a10.build();
        Intrinsics.checkNotNullExpressionValue(build, "builder.build()");
        return build;
    }

    private final boolean f(Function0 function0) {
        if (this.f25627a == null) {
            function0.invoke();
            return true;
        }
        return false;
    }

    private final void g(g2.b bVar, CreateCredentialRequest.Builder builder) {
        if (bVar.d() != null) {
            builder.setOrigin(bVar.d());
        }
    }

    private final void h(c0 c0Var, GetCredentialRequest.Builder builder) {
        if (c0Var.b() != null) {
            builder.setOrigin(c0Var.b());
        }
    }

    public final d0 c(GetCredentialResponse response) {
        Intrinsics.checkNotNullParameter(response, "response");
        Credential credential = response.getCredential();
        Intrinsics.checkNotNullExpressionValue(credential, "response.credential");
        h.a aVar = h.f25602c;
        String type = credential.getType();
        Intrinsics.checkNotNullExpressionValue(type, "credential.type");
        Bundle data = credential.getData();
        Intrinsics.checkNotNullExpressionValue(data, "credential.data");
        return new d0(aVar.b(type, data));
    }

    public final h2.e d(CreateCredentialException error) {
        Intrinsics.checkNotNullParameter(error, "error");
        String type = error.getType();
        Intrinsics.checkNotNullExpressionValue(type, "error.type");
        return k2.a.b(type, error.getMessage());
    }

    public final h2.m e(GetCredentialException error) {
        Intrinsics.checkNotNullParameter(error, "error");
        String type = error.getType();
        Intrinsics.checkNotNullExpressionValue(type, "error.type");
        return k2.a.c(type, error.getMessage());
    }

    @Override // g2.m
    public boolean isAvailableOnDevice() {
        if (Build.VERSION.SDK_INT >= 34 && this.f25627a != null) {
            return true;
        }
        return false;
    }

    @Override // g2.m
    public void onCreateCredential(Context context, g2.b request, CancellationSignal cancellationSignal, Executor executor, j callback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        if (f(new b(callback))) {
            return;
        }
        c cVar = new c(callback, request, this);
        CredentialManager credentialManager = this.f25627a;
        Intrinsics.checkNotNull(credentialManager);
        credentialManager.createCredential(context, a(request, context), cancellationSignal, executor, cVar);
    }

    @Override // g2.m
    public void onGetCredential(Context context, c0 request, CancellationSignal cancellationSignal, Executor executor, j callback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        if (f(new d(callback))) {
            return;
        }
        e eVar = new e(callback, this);
        CredentialManager credentialManager = this.f25627a;
        Intrinsics.checkNotNull(credentialManager);
        credentialManager.getCredential(context, b(request), cancellationSignal, executor, eVar);
    }
}
