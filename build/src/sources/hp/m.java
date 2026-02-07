package hp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import bn.o;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\r\u0011B!\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\u0015\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00020\nH\u0016¢\u0006\u0004\b\u000b\u0010\fR\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\r\u0010\u000eR\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010¨\u0006\u0012"}, d2 = {"Lhp/m;", "Lbn/o;", "Lhp/m$b;", "Landroidx/activity/result/ActivityResultLauncher;", "Ld/e;", "resolvableApiLauncher", "Landroid/content/Context;", "context", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Landroid/content/Context;)V", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "c", "Landroid/content/Context;", "a", "permissions_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements bn.o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f26398b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f26399c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        m create();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f26400a = new a();

            private a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -588562023;
            }

            public String toString() {
                return "Denied";
            }
        }

        /* renamed from: hp.m$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0365b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0365b f26401a = new C0365b();

            private C0365b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0365b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 726963865;
            }

            public String toString() {
                return "NotSupported";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final c f26402a = new c();

            private c() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -190170683;
            }

            public String toString() {
                return "Success";
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f26403d;

        /* renamed from: e  reason: collision with root package name */
        Object f26404e;

        /* renamed from: i  reason: collision with root package name */
        int f26405i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f26406o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f26408d;

            a(FlowCollector flowCollector) {
                this.f26408d = flowCollector;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(d.a aVar, Continuation continuation) {
                if (aVar != null && aVar.b() == -1) {
                    Object emit = this.f26408d.emit(b.c.f26402a, continuation);
                    if (emit == wr.b.f()) {
                        return emit;
                    }
                    return Unit.f32056a;
                }
                Object emit2 = this.f26408d.emit(b.a.f26400a, continuation);
                if (emit2 == wr.b.f()) {
                    return emit2;
                }
                return Unit.f32056a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f26409d;

            b(CancellableContinuation cancellableContinuation) {
                this.f26409d = cancellableContinuation;
            }

            public final void a(ug.e eVar) {
                this.f26409d.resumeWith(Result.b(Result.a(Result.b(eVar))));
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((ug.e) obj);
                return Unit.f32056a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: hp.m$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0366c implements yg.f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f26410a;

            C0366c(CancellableContinuation cancellableContinuation) {
                this.f26410a = cancellableContinuation;
            }

            @Override // yg.f
            public final void onFailure(Exception exception) {
                Intrinsics.checkNotNullParameter(exception, "exception");
                CancellableContinuation cancellableContinuation = this.f26410a;
                Result.a aVar = Result.f32053e;
                cancellableContinuation.resumeWith(Result.b(Result.a(Result.b(kotlin.c.a(exception)))));
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f26406o = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:27:0x00ef, code lost:
            if (r1.emit(r13, r12) == r0) goto L31;
         */
        /* JADX WARN: Code restructure failed: missing block: B:34:0x010b, code lost:
            if (r1.emit(r13, r12) == r0) goto L31;
         */
        /* JADX WARN: Code restructure failed: missing block: B:44:0x015b, code lost:
            if (r1.emit(r13, r12) != r0) goto L10;
         */
        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v0, types: [int] */
        /* JADX WARN: Type inference failed for: r1v1, types: [kotlinx.coroutines.flow.FlowCollector] */
        /* JADX WARN: Type inference failed for: r1v13 */
        /* JADX WARN: Type inference failed for: r1v22 */
        /* JADX WARN: Type inference failed for: r1v23 */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r13) {
            /*
                Method dump skipped, instructions count: 353
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: hp.m.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements yg.g {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ Function1 f26411a;

        d(Function1 function) {
            Intrinsics.checkNotNullParameter(function, "function");
            this.f26411a = function;
        }

        @Override // yg.g
        public final /* synthetic */ void onSuccess(Object obj) {
            this.f26411a.invoke(obj);
        }
    }

    public m(ActivityResultLauncher resolvableApiLauncher, Context context) {
        Intrinsics.checkNotNullParameter(resolvableApiLauncher, "resolvableApiLauncher");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f26398b = resolvableApiLauncher;
        this.f26399c = context;
    }

    @Override // bn.o
    public boolean a(bn.o oVar) {
        return o.b.a(this, oVar);
    }

    @Override // bn.o
    public Flow run() {
        return rs.g.v(new c(null));
    }
}
