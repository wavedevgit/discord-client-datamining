package ro;

import android.content.Context;
import com.google.android.play.core.integrity.c;
import gs.g;
import gs.j1;
import js.l0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.time.Duration;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.i;
import kotlinx.coroutines.sync.Mutex;
import vo.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: i  reason: collision with root package name */
    public static final C0591a f48389i = new C0591a(null);

    /* renamed from: j  reason: collision with root package name */
    private static final long f48390j;

    /* renamed from: a  reason: collision with root package name */
    private final Context f48391a;

    /* renamed from: b  reason: collision with root package name */
    private final e.a f48392b;

    /* renamed from: c  reason: collision with root package name */
    private final f f48393c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f48394d;

    /* renamed from: e  reason: collision with root package name */
    private final vo.e f48395e;

    /* renamed from: f  reason: collision with root package name */
    private final Mutex f48396f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineScope f48397g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableStateFlow f48398h;

    /* renamed from: ro.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0591a {
        public /* synthetic */ C0591a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0591a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {

        /* renamed from: ro.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0592a implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0592a f48399a = new C0592a();

            private C0592a() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0592a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1174409699;
            }

            public String toString() {
                return "Error";
            }
        }

        /* renamed from: ro.a$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0593b implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0593b f48400a = new C0593b();

            private C0593b() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0593b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -384804045;
            }

            public String toString() {
                return "NotStarted";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final c f48401a = new c();

            private c() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -230105505;
            }

            public String toString() {
                return "Preparing";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements b {

            /* renamed from: a  reason: collision with root package name */
            private final c.InterfaceC0189c f48402a;

            public d(c.InterfaceC0189c integrityTokenProvider) {
                Intrinsics.checkNotNullParameter(integrityTokenProvider, "integrityTokenProvider");
                this.f48402a = integrityTokenProvider;
            }

            public final c.InterfaceC0189c a() {
                return this.f48402a;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f48403d;

        /* renamed from: e  reason: collision with root package name */
        Object f48404e;

        /* renamed from: i  reason: collision with root package name */
        int f48405i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ro.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0594a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f48407d;

            C0594a(CancellableContinuation cancellableContinuation) {
                this.f48407d = cancellableContinuation;
            }

            public final void a(c.b bVar) {
                CancellableContinuation cancellableContinuation = this.f48407d;
                Result.a aVar = Result.f33295e;
                cancellableContinuation.resumeWith(Result.b(bVar.a()));
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.b) obj);
                return Unit.f33298a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements wg.f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ a f48408a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f48409b;

            b(a aVar, CancellableContinuation cancellableContinuation) {
                this.f48408a = aVar;
                this.f48409b = cancellableContinuation;
            }

            @Override // wg.f
            public final void onFailure(Exception it) {
                Intrinsics.checkNotNullParameter(it, "it");
                vo.e eVar = this.f48408a.f48395e;
                String message = it.getMessage();
                eVar.a("integrity:request:" + message);
                this.f48409b.resumeWith(Result.b(null));
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ro.a$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0595c extends k implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            int f48410d;

            C0595c(Continuation continuation) {
                super(3, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f48410d == 0) {
                    kotlin.c.b(obj);
                    b.C0592a c0592a = b.C0592a.f48399a;
                    return Unit.f33298a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: j */
            public final Object invoke(FlowCollector flowCollector, Throwable th2, Continuation continuation) {
                return new C0595c(continuation).invokeSuspend(Unit.f33298a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements Flow {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow f48411d;

            /* renamed from: ro.a$c$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0596a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f48412d;

                /* renamed from: ro.a$c$d$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0597a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f48413d;

                    /* renamed from: e  reason: collision with root package name */
                    int f48414e;

                    public C0597a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f48413d = obj;
                        this.f48414e |= Integer.MIN_VALUE;
                        return C0596a.this.emit(null, this);
                    }
                }

                public C0596a(FlowCollector flowCollector) {
                    this.f48412d = flowCollector;
                }

                /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                @Override // kotlinx.coroutines.flow.FlowCollector
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
                    /*
                        r5 = this;
                        boolean r0 = r7 instanceof ro.a.c.d.C0596a.C0597a
                        if (r0 == 0) goto L13
                        r0 = r7
                        ro.a$c$d$a$a r0 = (ro.a.c.d.C0596a.C0597a) r0
                        int r1 = r0.f48414e
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f48414e = r1
                        goto L18
                    L13:
                        ro.a$c$d$a$a r0 = new ro.a$c$d$a$a
                        r0.<init>(r7)
                    L18:
                        java.lang.Object r7 = r0.f48413d
                        java.lang.Object r1 = or.b.f()
                        int r2 = r0.f48414e
                        r3 = 1
                        if (r2 == 0) goto L31
                        if (r2 != r3) goto L29
                        kotlin.c.b(r7)
                        goto L4a
                    L29:
                        java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                        java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                        r6.<init>(r7)
                        throw r6
                    L31:
                        kotlin.c.b(r7)
                        kotlinx.coroutines.flow.FlowCollector r7 = r5.f48412d
                        r2 = r6
                        ro.a$b r2 = (ro.a.b) r2
                        boolean r4 = r2 instanceof ro.a.b.C0592a
                        if (r4 != 0) goto L41
                        boolean r2 = r2 instanceof ro.a.b.d
                        if (r2 == 0) goto L4a
                    L41:
                        r0.f48414e = r3
                        java.lang.Object r6 = r7.emit(r6, r0)
                        if (r6 != r1) goto L4a
                        return r1
                    L4a:
                        kotlin.Unit r6 = kotlin.Unit.f33298a
                        return r6
                    */
                    throw new UnsupportedOperationException("Method not decompiled: ro.a.c.d.C0596a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            public d(Flow flow) {
                this.f48411d = flow;
            }

            @Override // kotlinx.coroutines.flow.Flow
            public Object collect(FlowCollector flowCollector, Continuation continuation) {
                Object collect = this.f48411d.collect(new C0596a(flowCollector), continuation);
                if (collect == or.b.f()) {
                    return collect;
                }
                return Unit.f33298a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e implements Flow {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow f48416d;

            /* renamed from: ro.a$c$e$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0598a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f48417d;

                /* renamed from: ro.a$c$e$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0599a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f48418d;

                    /* renamed from: e  reason: collision with root package name */
                    int f48419e;

                    public C0599a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f48418d = obj;
                        this.f48419e |= Integer.MIN_VALUE;
                        return C0598a.this.emit(null, this);
                    }
                }

                public C0598a(FlowCollector flowCollector) {
                    this.f48417d = flowCollector;
                }

                /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                @Override // kotlinx.coroutines.flow.FlowCollector
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
                    /*
                        r5 = this;
                        boolean r0 = r7 instanceof ro.a.c.e.C0598a.C0599a
                        if (r0 == 0) goto L13
                        r0 = r7
                        ro.a$c$e$a$a r0 = (ro.a.c.e.C0598a.C0599a) r0
                        int r1 = r0.f48419e
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f48419e = r1
                        goto L18
                    L13:
                        ro.a$c$e$a$a r0 = new ro.a$c$e$a$a
                        r0.<init>(r7)
                    L18:
                        java.lang.Object r7 = r0.f48418d
                        java.lang.Object r1 = or.b.f()
                        int r2 = r0.f48419e
                        r3 = 1
                        if (r2 == 0) goto L31
                        if (r2 != r3) goto L29
                        kotlin.c.b(r7)
                        goto L50
                    L29:
                        java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                        java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                        r6.<init>(r7)
                        throw r6
                    L31:
                        kotlin.c.b(r7)
                        kotlinx.coroutines.flow.FlowCollector r7 = r5.f48417d
                        ro.a$b r6 = (ro.a.b) r6
                        boolean r2 = r6 instanceof ro.a.b.d
                        r4 = 0
                        if (r2 == 0) goto L40
                        ro.a$b$d r6 = (ro.a.b.d) r6
                        goto L41
                    L40:
                        r6 = r4
                    L41:
                        if (r6 == 0) goto L47
                        com.google.android.play.core.integrity.c$c r4 = r6.a()
                    L47:
                        r0.f48419e = r3
                        java.lang.Object r6 = r7.emit(r4, r0)
                        if (r6 != r1) goto L50
                        return r1
                    L50:
                        kotlin.Unit r6 = kotlin.Unit.f33298a
                        return r6
                    */
                    throw new UnsupportedOperationException("Method not decompiled: ro.a.c.e.C0598a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            public e(Flow flow) {
                this.f48416d = flow;
            }

            @Override // kotlinx.coroutines.flow.Flow
            public Object collect(FlowCollector flowCollector, Continuation continuation) {
                Object collect = this.f48416d.collect(new C0598a(flowCollector), continuation);
                if (collect == or.b.f()) {
                    return collect;
                }
                return Unit.f33298a;
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:15:0x0060, code lost:
            if (r8 == r0) goto L18;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r7.f48405i
                r2 = 2
                r3 = 0
                r4 = 1
                if (r1 == 0) goto L27
                if (r1 == r4) goto L23
                if (r1 != r2) goto L1b
                java.lang.Object r0 = r7.f48404e
                ro.a r0 = (ro.a) r0
                java.lang.Object r0 = r7.f48403d
                com.google.android.play.core.integrity.c$c r0 = (com.google.android.play.core.integrity.c.InterfaceC0189c) r0
                kotlin.c.b(r8)
                return r8
            L1b:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r0)
                throw r8
            L23:
                kotlin.c.b(r8)
                goto L63
            L27:
                kotlin.c.b(r8)
                ro.a r8 = ro.a.this
                kotlinx.coroutines.flow.MutableStateFlow r8 = ro.a.e(r8)
                java.lang.Object r8 = r8.getValue()
                boolean r8 = r8 instanceof ro.a.b.C0593b
                if (r8 == 0) goto L39
                return r3
            L39:
                ro.a r8 = ro.a.this
                kotlinx.coroutines.flow.MutableStateFlow r8 = ro.a.e(r8)
                ro.a$c$d r1 = new ro.a$c$d
                r1.<init>(r8)
                long r5 = ro.a.b()
                kotlinx.coroutines.flow.Flow r8 = js.g.I(r1, r5)
                ro.a$c$c r1 = new ro.a$c$c
                r1.<init>(r3)
                kotlinx.coroutines.flow.Flow r8 = js.g.f(r8, r1)
                ro.a$c$e r1 = new ro.a$c$e
                r1.<init>(r8)
                r7.f48405i = r4
                java.lang.Object r8 = js.g.u(r1, r7)
                if (r8 != r0) goto L63
                goto Lb9
            L63:
                com.google.android.play.core.integrity.c$c r8 = (com.google.android.play.core.integrity.c.InterfaceC0189c) r8
                if (r8 != 0) goto L68
                return r3
            L68:
                ro.a r1 = ro.a.this
                r7.f48403d = r8
                r7.f48404e = r1
                r7.f48405i = r2
                kotlinx.coroutines.e r2 = new kotlinx.coroutines.e
                kotlin.coroutines.Continuation r3 = or.b.c(r7)
                r2.<init>(r3, r4)
                r2.H()
                com.google.android.play.core.integrity.c$d$a r3 = com.google.android.play.core.integrity.c.d.a()
                java.util.UUID r4 = java.util.UUID.randomUUID()
                java.lang.String r4 = r4.toString()
                com.google.android.play.core.integrity.c$d$a r3 = r3.b(r4)
                com.google.android.play.core.integrity.c$d r3 = r3.a()
                com.google.android.gms.tasks.Task r8 = r8.a(r3)
                ro.a$c$a r3 = new ro.a$c$a
                r3.<init>(r2)
                ro.b r4 = new ro.b
                r4.<init>(r3)
                com.google.android.gms.tasks.Task r8 = r8.g(r4)
                ro.a$c$b r3 = new ro.a$c$b
                r3.<init>(r1, r2)
                r8.e(r3)
                java.lang.Object r8 = r2.B()
                java.lang.Object r1 = or.b.f()
                if (r8 != r1) goto Lb7
                kotlin.coroutines.jvm.internal.g.c(r7)
            Lb7:
                if (r8 != r0) goto Lba
            Lb9:
                return r0
            Lba:
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: ro.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f48421d;

        /* renamed from: e  reason: collision with root package name */
        Object f48422e;

        /* renamed from: i  reason: collision with root package name */
        Object f48423i;

        /* renamed from: o  reason: collision with root package name */
        Object f48424o;

        /* renamed from: p  reason: collision with root package name */
        Object f48425p;

        /* renamed from: q  reason: collision with root package name */
        int f48426q;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ String f48428s;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ro.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0600a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f48429d;

            C0600a(CancellableContinuation cancellableContinuation) {
                this.f48429d = cancellableContinuation;
            }

            public final void a(c.InterfaceC0189c interfaceC0189c) {
                this.f48429d.resumeWith(Result.b(Result.a(Result.b(interfaceC0189c))));
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.InterfaceC0189c) obj);
                return Unit.f33298a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements wg.f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f48430a;

            b(CancellableContinuation cancellableContinuation) {
                this.f48430a = cancellableContinuation;
            }

            @Override // wg.f
            public final void onFailure(Exception it) {
                Intrinsics.checkNotNullParameter(it, "it");
                CancellableContinuation cancellableContinuation = this.f48430a;
                Result.a aVar = Result.f33295e;
                cancellableContinuation.resumeWith(Result.b(Result.a(Result.b(kotlin.c.a(it)))));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, Continuation continuation) {
            super(2, continuation);
            this.f48428s = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f48428s, continuation);
        }

        /* JADX WARN: Can't wrap try/catch for region: R(5:1|(1:(3:(1:(1:(6:11|12|13|14|15|16)(2:8|9))(8:21|22|23|24|(3:26|(2:28|29)|30)(1:31)|14|15|16))(8:35|36|37|38|39|(1:41)|(6:43|24|(0)(0)|14|15|16)|29)|19|20)(1:47))(1:60)|48|49|(3:51|52|53)(2:54|(2:56|29)(5:57|39|(0)|(0)|29))) */
        /* JADX WARN: Code restructure failed: missing block: B:28:0x008c, code lost:
            if (r14.b(null, r13) == r0) goto L29;
         */
        /* JADX WARN: Code restructure failed: missing block: B:35:0x00a6, code lost:
            r0 = move-exception;
         */
        /* JADX WARN: Code restructure failed: missing block: B:36:0x00a7, code lost:
            r0 = r14;
            r14 = r0;
         */
        /* JADX WARN: Code restructure failed: missing block: B:54:0x0183, code lost:
            if (r14.emit(r1, r13) == r0) goto L29;
         */
        /* JADX WARN: Removed duplicated region for block: B:43:0x011c A[Catch: all -> 0x00a6, TRY_LEAVE, TryCatch #2 {all -> 0x00a6, blocks: (B:41:0x00c4, B:43:0x011c, B:30:0x0090, B:32:0x00a0, B:37:0x00ac), top: B:64:0x0090 }] */
        /* JADX WARN: Removed duplicated region for block: B:46:0x0122  */
        /* JADX WARN: Removed duplicated region for block: B:49:0x0131 A[Catch: all -> 0x0045, TryCatch #1 {all -> 0x0045, blocks: (B:17:0x0040, B:47:0x0125, B:49:0x0131, B:53:0x0151), top: B:63:0x0040 }] */
        /* JADX WARN: Removed duplicated region for block: B:53:0x0151 A[Catch: all -> 0x0045, TRY_LEAVE, TryCatch #1 {all -> 0x0045, blocks: (B:17:0x0040, B:47:0x0125, B:49:0x0131, B:53:0x0151), top: B:63:0x0040 }] */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r14) {
            /*
                Method dump skipped, instructions count: 402
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: ro.a.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f48431d;

        /* renamed from: e  reason: collision with root package name */
        Object f48432e;

        /* renamed from: i  reason: collision with root package name */
        int f48433i;

        e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:15:0x0043, code lost:
            if (r7.b(null, r6) == r0) goto L22;
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
                int r1 = r6.f48433i
                r2 = 2
                r3 = 1
                r4 = 0
                if (r1 == 0) goto L2e
                if (r1 == r3) goto L21
                if (r1 != r2) goto L19
                java.lang.Object r0 = r6.f48431d
                kotlinx.coroutines.sync.Mutex r0 = (kotlinx.coroutines.sync.Mutex) r0
                kotlin.c.b(r7)     // Catch: java.lang.Throwable -> L17
                goto L5a
            L17:
                r7 = move-exception
                goto L66
            L19:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L21:
                java.lang.Object r1 = r6.f48432e
                ro.a r1 = (ro.a) r1
                java.lang.Object r3 = r6.f48431d
                kotlinx.coroutines.sync.Mutex r3 = (kotlinx.coroutines.sync.Mutex) r3
                kotlin.c.b(r7)
                r7 = r3
                goto L46
            L2e:
                kotlin.c.b(r7)
                ro.a r7 = ro.a.this
                kotlinx.coroutines.sync.Mutex r7 = ro.a.d(r7)
                ro.a r1 = ro.a.this
                r6.f48431d = r7
                r6.f48432e = r1
                r6.f48433i = r3
                java.lang.Object r3 = r7.b(r4, r6)
                if (r3 != r0) goto L46
                goto L58
            L46:
                kotlinx.coroutines.flow.MutableStateFlow r1 = ro.a.e(r1)     // Catch: java.lang.Throwable -> L62
                ro.a$b$b r3 = ro.a.b.C0593b.f48400a     // Catch: java.lang.Throwable -> L62
                r6.f48431d = r7     // Catch: java.lang.Throwable -> L62
                r6.f48432e = r4     // Catch: java.lang.Throwable -> L62
                r6.f48433i = r2     // Catch: java.lang.Throwable -> L62
                java.lang.Object r1 = r1.emit(r3, r6)     // Catch: java.lang.Throwable -> L62
                if (r1 != r0) goto L59
            L58:
                return r0
            L59:
                r0 = r7
            L5a:
                kotlin.Unit r7 = kotlin.Unit.f33298a     // Catch: java.lang.Throwable -> L17
                r0.c(r4)
                kotlin.Unit r7 = kotlin.Unit.f33298a
                return r7
            L62:
                r0 = move-exception
                r5 = r0
                r0 = r7
                r7 = r5
            L66:
                r0.c(r4)
                throw r7
            */
            throw new UnsupportedOperationException("Method not decompiled: ro.a.e.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    static {
        Duration.a aVar = Duration.f36297e;
        f48390j = kotlin.time.b.s(10, es.b.f24009p);
    }

    public a(Context applicationContext, e.a loggerFactory, f standardIntegrityManagerFactory, CoroutineDispatcher dispatcher) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(loggerFactory, "loggerFactory");
        Intrinsics.checkNotNullParameter(standardIntegrityManagerFactory, "standardIntegrityManagerFactory");
        Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
        this.f48391a = applicationContext;
        this.f48392b = loggerFactory;
        this.f48393c = standardIntegrityManagerFactory;
        this.f48394d = dispatcher;
        this.f48395e = loggerFactory.a("com.withpersona.sdk2.inquiry.integrity");
        this.f48396f = ps.f.b(false, 1, null);
        this.f48397g = i.a(dispatcher.U0(j1.b(null, 1, null)));
        this.f48398h = l0.a(b.C0593b.f48400a);
    }

    public final Object g(Continuation continuation) {
        return g.g(this.f48394d, new c(null), continuation);
    }

    public final void h(String cloudProjectNumber) {
        Intrinsics.checkNotNullParameter(cloudProjectNumber, "cloudProjectNumber");
        gs.i.d(this.f48397g, null, null, new d(cloudProjectNumber, null), 3, null);
    }

    public final Object i(Continuation continuation) {
        Object g10 = g.g(this.f48394d, new e(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33298a;
    }
}
