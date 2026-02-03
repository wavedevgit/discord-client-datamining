package androidx.credentials.playservices;

import android.content.Context;
import android.os.CancellationSignal;
import android.util.Log;
import androidx.credentials.playservices.CredentialProviderPlayServicesImpl;
import com.google.android.gms.common.f;
import g2.c0;
import g2.g0;
import g2.j;
import g2.l;
import g2.m;
import h2.o;
import java.util.concurrent.Executor;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0007\u0018\u0000 /2\u00020\u0001:\u00010B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\b\u001a\u00020\u00062\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\b\u0010\tJE\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\n2\b\u0010\r\u001a\u0004\u0018\u00010\f2\u0006\u0010\u000f\u001a\u00020\u000e2\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\u00120\u0010H\u0016¢\u0006\u0004\b\u0015\u0010\u0016JE\u0010\u001a\u001a\u00020\u00142\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\u00172\b\u0010\r\u001a\u0004\u0018\u00010\f2\u0006\u0010\u000f\u001a\u00020\u000e2\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00190\u0010H\u0016¢\u0006\u0004\b\u001a\u0010\u001bJ\u000f\u0010\u001d\u001a\u00020\u001cH\u0016¢\u0006\u0004\b\u001d\u0010\u001eJ\u0015\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\u001d\u0010\u001fJ?\u0010#\u001a\u00020\u00142\u0006\u0010\u000b\u001a\u00020 2\b\u0010\r\u001a\u0004\u0018\u00010\f2\u0006\u0010\u000f\u001a\u00020\u000e2\u0014\u0010\u0013\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010!\u0012\u0004\u0012\u00020\"0\u0010H\u0016¢\u0006\u0004\b#\u0010$R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010%R(\u0010'\u001a\u00020&8\u0006@\u0006X\u0087\u000e¢\u0006\u0018\n\u0004\b'\u0010(\u0012\u0004\b-\u0010.\u001a\u0004\b)\u0010*\"\u0004\b+\u0010,¨\u00061"}, d2 = {"Landroidx/credentials/playservices/CredentialProviderPlayServicesImpl;", "Lg2/m;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "", "minApkVersion", "isGooglePlayServicesAvailable", "(Landroid/content/Context;I)I", "Lg2/c0;", "request", "Landroid/os/CancellationSignal;", "cancellationSignal", "Ljava/util/concurrent/Executor;", "executor", "Lg2/j;", "Lg2/d0;", "Lh2/m;", "callback", "", "onGetCredential", "(Landroid/content/Context;Lg2/c0;Landroid/os/CancellationSignal;Ljava/util/concurrent/Executor;Lg2/j;)V", "Lg2/b;", "Lg2/c;", "Lh2/e;", "onCreateCredential", "(Landroid/content/Context;Lg2/b;Landroid/os/CancellationSignal;Ljava/util/concurrent/Executor;Lg2/j;)V", "", "isAvailableOnDevice", "()Z", "(I)Z", "Lg2/a;", "Ljava/lang/Void;", "Lh2/a;", "onClearCredential", "(Lg2/a;Landroid/os/CancellationSignal;Ljava/util/concurrent/Executor;Lg2/j;)V", "Landroid/content/Context;", "Lcom/google/android/gms/common/f;", "googleApiAvailability", "Lcom/google/android/gms/common/f;", "getGoogleApiAvailability", "()Lcom/google/android/gms/common/f;", "setGoogleApiAvailability", "(Lcom/google/android/gms/common/f;)V", "getGoogleApiAvailability$annotations", "()V", "Companion", "a", "credentials-play-services-auth_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CredentialProviderPlayServicesImpl implements m {
    @NotNull
    public static final a Companion = new a(null);
    public static final int MIN_GMS_APK_VERSION = 230815045;
    public static final int MIN_GMS_APK_VERSION_DIGITAL_CRED = 243100000;
    public static final int MIN_GMS_APK_VERSION_RESTORE_CRED = 242200000;
    @NotNull
    private static final String TAG = "PlayServicesImpl";
    @NotNull
    private final Context context;
    @NotNull
    private f googleApiAvailability;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean a(CancellationSignal cancellationSignal) {
            if (cancellationSignal != null) {
                if (cancellationSignal.isCanceled()) {
                    Log.i(CredentialProviderPlayServicesImpl.TAG, "the flow has been canceled");
                    return true;
                }
                return false;
            }
            Log.i(CredentialProviderPlayServicesImpl.TAG, "No cancellationSignal found");
            return false;
        }

        public final void b(CancellationSignal cancellationSignal, Function0 callback) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            if (!a(cancellationSignal)) {
                callback.invoke();
            }
        }

        public final boolean c(c0 request) {
            Intrinsics.checkNotNullParameter(request, "request");
            for (l lVar : request.a()) {
            }
            return false;
        }

        public final boolean d(c0 request) {
            Intrinsics.checkNotNullParameter(request, "request");
            for (l lVar : request.a()) {
            }
            return false;
        }

        public final boolean e(c0 request) {
            Intrinsics.checkNotNullParameter(request, "request");
            for (l lVar : request.a()) {
            }
            return false;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f3508d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ j f3509e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f3510i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Executor executor, j jVar, Ref.ObjectRef objectRef) {
            super(0);
            this.f3508d = executor;
            this.f3509e = jVar;
            this.f3510i = objectRef;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(j jVar, Ref.ObjectRef objectRef) {
            jVar.a(objectRef.element);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m8invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m8invoke() {
            Executor executor = this.f3508d;
            final j jVar = this.f3509e;
            final Ref.ObjectRef objectRef = this.f3510i;
            executor.execute(new Runnable() { // from class: androidx.credentials.playservices.a
                @Override // java.lang.Runnable
                public final void run() {
                    CredentialProviderPlayServicesImpl.b.b(j.this, objectRef);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Exception f3511d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Executor f3512e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ j f3513i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Exception exc, Executor executor, j jVar) {
            super(0);
            this.f3511d = exc;
            this.f3512e = executor;
            this.f3513i = jVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(j jVar, Exception exc) {
            jVar.a(new h2.b(exc.getMessage()));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m9invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m9invoke() {
            Log.w(CredentialProviderPlayServicesImpl.TAG, "During clear credential sign out failed with " + this.f3511d);
            Executor executor = this.f3512e;
            final j jVar = this.f3513i;
            final Exception exc = this.f3511d;
            executor.execute(new Runnable() { // from class: androidx.credentials.playservices.b
                @Override // java.lang.Runnable
                public final void run() {
                    CredentialProviderPlayServicesImpl.c.b(j.this, exc);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f3514d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ j f3515e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Executor executor, j jVar) {
            super(0);
            this.f3514d = executor;
            this.f3515e = jVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(j jVar) {
            jVar.a(new o("this device requires a Google Play Services update for the given feature to be supported"));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m10invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m10invoke() {
            Executor executor = this.f3514d;
            final j jVar = this.f3515e;
            executor.execute(new Runnable() { // from class: androidx.credentials.playservices.c
                @Override // java.lang.Runnable
                public final void run() {
                    CredentialProviderPlayServicesImpl.d.b(j.this);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class e extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f3516d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ j f3517e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Executor executor, j jVar) {
            super(0);
            this.f3516d = executor;
            this.f3517e = jVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(j jVar) {
            jVar.a(new o("getCredentialAsync no provider dependencies found - please ensure the desired provider dependencies are added"));
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m11invoke();
            return Unit.f32464a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m11invoke() {
            Executor executor = this.f3516d;
            final j jVar = this.f3517e;
            executor.execute(new Runnable() { // from class: androidx.credentials.playservices.d
                @Override // java.lang.Runnable
                public final void run() {
                    CredentialProviderPlayServicesImpl.e.b(j.this);
                }
            });
        }
    }

    public CredentialProviderPlayServicesImpl(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.context = context;
        f m10 = f.m();
        Intrinsics.checkNotNullExpressionValue(m10, "getInstance(...)");
        this.googleApiAvailability = m10;
    }

    public static /* synthetic */ void getGoogleApiAvailability$annotations() {
    }

    private final int isGooglePlayServicesAvailable(Context context, int i10) {
        return this.googleApiAvailability.h(context, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Type inference failed for: r1v1, types: [T, h2.b] */
    /* JADX WARN: Type inference failed for: r6v4, types: [T, h2.b] */
    public static final void onClearCredential$lambda$1(CancellationSignal cancellationSignal, Executor executor, j jVar, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        Log.w(TAG, "Clearing restore credential failed", e10);
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = new h2.b("Clear restore credential failed for unknown reason.");
        if ((e10 instanceof ef.b) && ((ef.b) e10).b() == 40201) {
            objectRef.element = new h2.b("The restore credential internal service had a failure.");
        }
        Companion.b(cancellationSignal, new b(executor, jVar, objectRef));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void onClearCredential$lambda$4(CredentialProviderPlayServicesImpl credentialProviderPlayServicesImpl, CancellationSignal cancellationSignal, Executor executor, j jVar, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        Companion.b(cancellationSignal, new c(e10, executor, jVar));
    }

    @NotNull
    public final f getGoogleApiAvailability() {
        return this.googleApiAvailability;
    }

    @Override // g2.m
    public boolean isAvailableOnDevice() {
        return isAvailableOnDevice(MIN_GMS_APK_VERSION);
    }

    public void onClearCredential(@NotNull g2.a request, CancellationSignal cancellationSignal, @NotNull Executor executor, @NotNull j callback) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        if (Companion.a(cancellationSignal)) {
            return;
        }
        throw null;
    }

    @Override // g2.m
    public void onCreateCredential(@NotNull Context context, @NotNull g2.b request, CancellationSignal cancellationSignal, @NotNull Executor executor, @NotNull j callback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        if (Companion.a(cancellationSignal)) {
            return;
        }
        if (request instanceof g2.f) {
            o2.b.f42256l.a(context).u((g2.f) request, callback, executor, cancellationSignal);
            return;
        }
        throw new UnsupportedOperationException("Create Credential request is unsupported, not password or publickeycredential");
    }

    @Override // g2.m
    public /* bridge */ /* synthetic */ void onGetCredential(@NotNull Context context, @NotNull g0 g0Var, CancellationSignal cancellationSignal, @NotNull Executor executor, @NotNull j jVar) {
        super.onGetCredential(context, g0Var, cancellationSignal, executor, jVar);
    }

    @Override // g2.m
    public /* bridge */ /* synthetic */ void onPrepareCredential(@NotNull c0 c0Var, CancellationSignal cancellationSignal, @NotNull Executor executor, @NotNull j jVar) {
        super.onPrepareCredential(c0Var, cancellationSignal, executor, jVar);
    }

    public final void setGoogleApiAvailability(@NotNull f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.googleApiAvailability = fVar;
    }

    public final boolean isAvailableOnDevice(int i10) {
        int isGooglePlayServicesAvailable = isGooglePlayServicesAvailable(this.context, i10);
        boolean z10 = isGooglePlayServicesAvailable == 0;
        if (!z10) {
            com.google.android.gms.common.b bVar = new com.google.android.gms.common.b(isGooglePlayServicesAvailable);
            Log.w(TAG, "Connection with Google Play Services was not successful. Connection result is: " + bVar);
        }
        return z10;
    }

    @Override // g2.m
    public void onGetCredential(@NotNull Context context, @NotNull c0 request, CancellationSignal cancellationSignal, @NotNull Executor executor, @NotNull j callback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        a aVar = Companion;
        if (aVar.a(cancellationSignal)) {
            return;
        }
        if (aVar.c(request)) {
            if (!isAvailableOnDevice(MIN_GMS_APK_VERSION_DIGITAL_CRED)) {
                aVar.b(cancellationSignal, new d(executor, callback));
            } else {
                new p2.c(context).u(request, callback, executor, cancellationSignal);
            }
        } else if (aVar.d(request)) {
            if (!isAvailableOnDevice(MIN_GMS_APK_VERSION_RESTORE_CRED)) {
                aVar.b(cancellationSignal, new e(executor, callback));
            } else {
                new p2.l(context).n(request, callback, executor, cancellationSignal);
            }
        } else if (aVar.e(request)) {
            new q2.a(context).r(request, callback, executor, cancellationSignal);
        } else {
            new n2.b(context).r(request, callback, executor, cancellationSignal);
        }
    }
}
