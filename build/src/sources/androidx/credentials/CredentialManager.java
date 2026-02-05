package androidx.credentials;

import android.content.Context;
import android.os.CancellationSignal;
import g2.c0;
import g2.d0;
import g2.i;
import g2.j;
import g2.k;
import h2.m;
import java.util.concurrent.Executor;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CancellableContinuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface CredentialManager {

    /* renamed from: a  reason: collision with root package name */
    public static final a f3612a = a.f3613a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f3613a = new a();

        private a() {
        }

        public final CredentialManager a(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new k(context);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f3614d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(CancellationSignal cancellationSignal) {
            super(1);
            this.f3614d = cancellationSignal;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31988a;
        }

        public final void invoke(Throwable th2) {
            this.f3614d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements j {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f3615a;

        c(CancellableContinuation cancellableContinuation) {
            this.f3615a = cancellableContinuation;
        }

        @Override // g2.j
        /* renamed from: b */
        public void a(h2.e e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            if (this.f3615a.a()) {
                CancellableContinuation cancellableContinuation = this.f3615a;
                Result.a aVar = Result.f31985e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(e10)));
            }
        }

        @Override // g2.j
        /* renamed from: c */
        public void onResult(g2.c result) {
            Intrinsics.checkNotNullParameter(result, "result");
            if (this.f3615a.a()) {
                this.f3615a.resumeWith(Result.b(result));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellationSignal f3616d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(CancellationSignal cancellationSignal) {
            super(1);
            this.f3616d = cancellationSignal;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31988a;
        }

        public final void invoke(Throwable th2) {
            this.f3616d.cancel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements j {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f3617a;

        e(CancellableContinuation cancellableContinuation) {
            this.f3617a = cancellableContinuation;
        }

        @Override // g2.j
        /* renamed from: b */
        public void a(m e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            if (this.f3617a.a()) {
                CancellableContinuation cancellableContinuation = this.f3617a;
                Result.a aVar = Result.f31985e;
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(e10)));
            }
        }

        @Override // g2.j
        /* renamed from: c */
        public void onResult(d0 result) {
            Intrinsics.checkNotNullParameter(result, "result");
            if (this.f3617a.a()) {
                this.f3617a.resumeWith(Result.b(result));
            }
        }
    }

    static /* synthetic */ Object d(CredentialManager credentialManager, Context context, g2.b bVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        CancellationSignal cancellationSignal = new CancellationSignal();
        eVar.c(new b(cancellationSignal));
        credentialManager.e(context, bVar, cancellationSignal, new i(), new c(eVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            g.c(continuation);
        }
        return B;
    }

    static /* synthetic */ Object f(CredentialManager credentialManager, Context context, c0 c0Var, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        CancellationSignal cancellationSignal = new CancellationSignal();
        eVar.c(new d(cancellationSignal));
        credentialManager.b(context, c0Var, cancellationSignal, new i(), new e(eVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            g.c(continuation);
        }
        return B;
    }

    default Object a(Context context, c0 c0Var, Continuation continuation) {
        return f(this, context, c0Var, continuation);
    }

    void b(Context context, c0 c0Var, CancellationSignal cancellationSignal, Executor executor, j jVar);

    default Object c(Context context, g2.b bVar, Continuation continuation) {
        return d(this, context, bVar, continuation);
    }

    void e(Context context, g2.b bVar, CancellationSignal cancellationSignal, Executor executor, j jVar);
}
