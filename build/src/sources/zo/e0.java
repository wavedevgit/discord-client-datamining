package zo;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002\u0013\u000eB)\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\u001b\u0010\u000e\u001a\u00020\r2\n\u0010\f\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u0015\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00020\u0010H\u0016¢\u0006\u0004\b\u0011\u0010\u0012R\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lzo/e0;", "Ltm/o;", "Lzo/e0$b;", "Landroidx/activity/result/ActivityResultLauncher;", "", "requestPermissionsLauncher", "Landroid/content/Context;", "context", "Lzo/d0;", "permission", "<init>", "(Landroidx/activity/result/ActivityResultLauncher;Landroid/content/Context;Lzo/d0;)V", "otherWorker", "", "a", "(Ltm/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "b", "Landroidx/activity/result/ActivityResultLauncher;", "c", "Landroid/content/Context;", "d", "Lzo/d0;", "permissions_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements tm.o<b> {

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f55900b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f55901c;

    /* renamed from: d  reason: collision with root package name */
    private final d0 f55902d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Context f55903a;

        /* renamed from: b  reason: collision with root package name */
        private final ActivityResultLauncher f55904b;

        public a(Context context, ActivityResultLauncher requestPermissionsLauncher) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(requestPermissionsLauncher, "requestPermissionsLauncher");
            this.f55903a = context;
            this.f55904b = requestPermissionsLauncher;
        }

        public final e0 a(d0 permission) {
            Intrinsics.checkNotNullParameter(permission, "permission");
            return new e0(this.f55904b, this.f55903a, permission);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f55905a = new a();

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
                return 1697964102;
            }

            public String toString() {
                return "Denied";
            }
        }

        /* renamed from: zo.e0$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0787b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0787b f55906a = new C0787b();

            private C0787b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0787b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1972662456;
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
        int f55907d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f55908e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f55910d;

            a(FlowCollector flowCollector) {
                this.f55910d = flowCollector;
            }

            public final Object a(boolean z10, Continuation continuation) {
                if (z10) {
                    Object emit = this.f55910d.emit(b.C0787b.f55906a, continuation);
                    if (emit == or.b.f()) {
                        return emit;
                    }
                    return Unit.f33282a;
                }
                Object emit2 = this.f55910d.emit(b.a.f55905a, continuation);
                if (emit2 == or.b.f()) {
                    return emit2;
                }
                return Unit.f33282a;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
                return a(((Boolean) obj).booleanValue(), continuation);
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            c cVar = new c(continuation);
            cVar.f55908e = obj;
            return cVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:17:0x005d, code lost:
            if (r7.emit(r1, r6) == r0) goto L21;
         */
        /* JADX WARN: Code restructure failed: missing block: B:22:0x0086, code lost:
            if (r1.collect(r3, r6) == r0) goto L21;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r6.f55907d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L1e
                if (r1 == r3) goto L1a
                if (r1 == r2) goto L16
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L16:
                kotlin.c.b(r7)
                goto L89
            L1a:
                kotlin.c.b(r7)
                goto L60
            L1e:
                kotlin.c.b(r7)
                java.lang.Object r7 = r6.f55908e
                kotlinx.coroutines.flow.FlowCollector r7 = (kotlinx.coroutines.flow.FlowCollector) r7
                zo.e0 r1 = zo.e0.this
                androidx.activity.result.ActivityResultLauncher r1 = zo.e0.d(r1)
                androidx.activity.result.contract.ActivityResultContract r1 = r1.a()
                zo.e0 r4 = zo.e0.this
                android.content.Context r4 = zo.e0.b(r4)
                zo.e0 r5 = zo.e0.this
                zo.d0 r5 = zo.e0.c(r5)
                java.lang.String r5 = zo.k1.b(r5)
                androidx.activity.result.contract.ActivityResultContract$a r1 = r1.getSynchronousResult(r4, r5)
                if (r1 == 0) goto L4a
                java.lang.Object r1 = r1.a()
                goto L4b
            L4a:
                r1 = 0
            L4b:
                java.lang.Boolean r4 = kotlin.coroutines.jvm.internal.b.a(r3)
                boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r4)
                if (r1 == 0) goto L63
                zo.e0$b$b r1 = zo.e0.b.C0787b.f55906a
                r6.f55907d = r3
                java.lang.Object r7 = r7.emit(r1, r6)
                if (r7 != r0) goto L60
                goto L88
            L60:
                kotlin.Unit r7 = kotlin.Unit.f33282a
                return r7
            L63:
                zo.e0 r1 = zo.e0.this
                androidx.activity.result.ActivityResultLauncher r1 = zo.e0.d(r1)
                zo.e0 r3 = zo.e0.this
                zo.d0 r3 = zo.e0.c(r3)
                java.lang.String r3 = zo.k1.b(r3)
                r1.b(r3)
                uo.z r1 = new uo.z
                r1.<init>()
                zo.e0$c$a r3 = new zo.e0$c$a
                r3.<init>(r7)
                r6.f55907d = r2
                java.lang.Object r7 = r1.collect(r3, r6)
                if (r7 != r0) goto L89
            L88:
                return r0
            L89:
                ir.h r7 = new ir.h
                r7.<init>()
                throw r7
            */
            throw new UnsupportedOperationException("Method not decompiled: zo.e0.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((c) create(flowCollector, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public e0(ActivityResultLauncher requestPermissionsLauncher, Context context, d0 permission) {
        Intrinsics.checkNotNullParameter(requestPermissionsLauncher, "requestPermissionsLauncher");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(permission, "permission");
        this.f55900b = requestPermissionsLauncher;
        this.f55901c = context;
        this.f55902d = permission;
    }

    @Override // tm.o
    public boolean a(tm.o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof e0) && ((e0) otherWorker).f55902d == this.f55902d) {
            return true;
        }
        return false;
    }

    @Override // tm.o
    public Flow run() {
        return js.g.v(new c(null));
    }
}
