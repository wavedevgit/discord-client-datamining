package m2;

import android.content.Context;
import android.os.Bundle;
import android.os.CancellationSignal;
import androidx.credentials.playservices.CredentialProviderPlayServicesImpl;
import g2.j;
import h2.i;
import h2.k;
import h2.p;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import m2.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b extends m2.a {

    /* renamed from: f  reason: collision with root package name */
    public static final a f36876f = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private final Context f36877e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: m2.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0494a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function1 f36878d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36879e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0494a(Function1 function1, Ref.ObjectRef objectRef) {
                super(0);
                this.f36878d = function1;
                this.f36879e = objectRef;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1204invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1204invoke() {
                this.f36878d.invoke(this.f36879e.element);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: m2.b$a$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0495b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function1 f36880d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36881e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0495b(Function1 function1, Ref.ObjectRef objectRef) {
                super(0);
                this.f36880d = function1;
                this.f36881e = objectRef;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1205invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1205invoke() {
                this.f36880d.invoke(this.f36881e.element);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        protected final void a(CancellationSignal cancellationSignal, Function0 onResultOrException) {
            Intrinsics.checkNotNullParameter(onResultOrException, "onResultOrException");
            if (CredentialProviderPlayServicesImpl.Companion.a(cancellationSignal)) {
                return;
            }
            onResultOrException.invoke();
        }

        public final String b() {
            return "activity is cancelled by the user.";
        }

        public final String c(int i10) {
            return "activity with result code: " + i10 + " indicating not RESULT_OK";
        }

        /* JADX WARN: Type inference failed for: r1v0, types: [T, h2.i] */
        /* JADX WARN: Type inference failed for: r4v4, types: [T, h2.c] */
        protected final boolean d(int i10, Function2 cancelOnError, Function1 onError, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(cancelOnError, "cancelOnError");
            Intrinsics.checkNotNullParameter(onError, "onError");
            if (i10 != -1) {
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                objectRef.element = new i(c(i10));
                if (i10 == 0) {
                    objectRef.element = new h2.c(b());
                }
                cancelOnError.invoke(cancellationSignal, new C0494a(onError, objectRef));
                return true;
            }
            return false;
        }

        /* JADX WARN: Type inference failed for: r1v0, types: [T, h2.p] */
        /* JADX WARN: Type inference failed for: r4v4, types: [T, h2.k] */
        protected final boolean e(int i10, Function2 cancelOnError, Function1 onError, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(cancelOnError, "cancelOnError");
            Intrinsics.checkNotNullParameter(onError, "onError");
            if (i10 != -1) {
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                objectRef.element = new p(c(i10));
                if (i10 == 0) {
                    objectRef.element = new k(b());
                }
                cancelOnError.invoke(cancellationSignal, new C0495b(onError, objectRef));
                return true;
            }
            return false;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: m2.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0496b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Executor f36882d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ j f36883e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Object f36884i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0496b(Executor executor, j jVar, Object obj) {
            super(0);
            this.f36882d = executor;
            this.f36883e = jVar;
            this.f36884i = obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(j jVar, Object obj) {
            jVar.a(obj);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1206invoke();
            return Unit.f32056a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1206invoke() {
            Executor executor = this.f36882d;
            final j jVar = this.f36883e;
            final Object obj = this.f36884i;
            executor.execute(new Runnable() { // from class: m2.c
                @Override // java.lang.Runnable
                public final void run() {
                    b.C0496b.b(j.this, obj);
                }
            });
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f36877e = context;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static final void e(CancellationSignal cancellationSignal, Function0 function0) {
        f36876f.a(cancellationSignal, function0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static final boolean g(int i10, Function2 function2, Function1 function1, CancellationSignal cancellationSignal) {
        return f36876f.d(i10, function2, function1, cancellationSignal);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static final boolean h(int i10, Function2 function2, Function1 function1, CancellationSignal cancellationSignal) {
        return f36876f.e(i10, function2, function1, cancellationSignal);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean f(Bundle resultData, Function2 conversionFn, Executor executor, j callback, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(resultData, "resultData");
        Intrinsics.checkNotNullParameter(conversionFn, "conversionFn");
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(callback, "callback");
        if (!resultData.getBoolean("FAILURE_RESPONSE")) {
            return false;
        }
        e(cancellationSignal, new C0496b(executor, callback, conversionFn.invoke(resultData.getString("EXCEPTION_TYPE"), resultData.getString("EXCEPTION_MESSAGE"))));
        return true;
    }
}
