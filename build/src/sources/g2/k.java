package g2;

import android.content.Context;
import android.os.CancellationSignal;
import androidx.credentials.CredentialManager;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements CredentialManager {

    /* renamed from: c  reason: collision with root package name */
    public static final a f23855c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final Context f23856b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public k(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f23856b = context;
    }

    @Override // androidx.credentials.CredentialManager
    public void b(Context context, c0 request, CancellationSignal cancellationSignal, Executor executor, j callback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        m d10 = n.d(new n(context), request, false, 2, null);
        if (d10 == null) {
            callback.a(new h2.o("getCredentialAsync no provider dependencies found - please ensure the desired provider dependencies are added"));
        } else {
            d10.onGetCredential(context, request, cancellationSignal, executor, callback);
        }
    }

    @Override // androidx.credentials.CredentialManager
    public void e(Context context, b request, CancellationSignal cancellationSignal, Executor executor, j callback) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        m d10 = n.d(new n(this.f23856b), request, false, 2, null);
        if (d10 == null) {
            callback.a(new h2.h("createCredentialAsync no provider dependencies found - please ensure the desired provider dependencies are added"));
        } else {
            d10.onCreateCredential(context, request, cancellationSignal, executor, callback);
        }
    }
}
