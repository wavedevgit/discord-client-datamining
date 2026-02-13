package jp;

import android.content.Context;
import bt.l0;
import com.google.android.play.core.integrity.c;
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
import np.e;
import ys.g;
import ys.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: i  reason: collision with root package name */
    public static final C0425a f31795i = new C0425a(null);

    /* renamed from: j  reason: collision with root package name */
    private static final long f31796j;

    /* renamed from: a  reason: collision with root package name */
    private final Context f31797a;

    /* renamed from: b  reason: collision with root package name */
    private final e.a f31798b;

    /* renamed from: c  reason: collision with root package name */
    private final f f31799c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f31800d;

    /* renamed from: e  reason: collision with root package name */
    private final np.e f31801e;

    /* renamed from: f  reason: collision with root package name */
    private final Mutex f31802f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineScope f31803g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableStateFlow f31804h;

    /* renamed from: jp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0425a {
        public /* synthetic */ C0425a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0425a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {

        /* renamed from: jp.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0426a implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0426a f31805a = new C0426a();

            private C0426a() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0426a)) {
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

        /* renamed from: jp.a$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0427b implements b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0427b f31806a = new C0427b();

            private C0427b() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0427b)) {
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
            public static final c f31807a = new c();

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
            private final c.InterfaceC0191c f31808a;

            public d(c.InterfaceC0191c integrityTokenProvider) {
                Intrinsics.checkNotNullParameter(integrityTokenProvider, "integrityTokenProvider");
                this.f31808a = integrityTokenProvider;
            }

            public final c.InterfaceC0191c a() {
                return this.f31808a;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f31809d;

        /* renamed from: e  reason: collision with root package name */
        Object f31810e;

        /* renamed from: i  reason: collision with root package name */
        int f31811i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: jp.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0428a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f31813d;

            C0428a(CancellableContinuation cancellableContinuation) {
                this.f31813d = cancellableContinuation;
            }

            public final void a(c.b bVar) {
                CancellableContinuation cancellableContinuation = this.f31813d;
                Result.a aVar = Result.f32553e;
                cancellableContinuation.resumeWith(Result.b(bVar.a()));
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.b) obj);
                return Unit.f32556a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements zg.f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ a f31814a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f31815b;

            b(a aVar, CancellableContinuation cancellableContinuation) {
                this.f31814a = aVar;
                this.f31815b = cancellableContinuation;
            }

            @Override // zg.f
            public final void onFailure(Exception it) {
                Intrinsics.checkNotNullParameter(it, "it");
                np.e eVar = this.f31814a.f31801e;
                String message = it.getMessage();
                eVar.a("integrity:request:" + message);
                this.f31815b.resumeWith(Result.b(null));
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: jp.a$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0429c extends k implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            int f31816d;

            C0429c(Continuation continuation) {
                super(3, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f31816d == 0) {
                    kotlin.c.b(obj);
                    b.C0426a c0426a = b.C0426a.f31805a;
                    return Unit.f32556a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: j */
            public final Object invoke(FlowCollector flowCollector, Throwable th2, Continuation continuation) {
                return new C0429c(continuation).invokeSuspend(Unit.f32556a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements Flow {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow f31817d;

            /* renamed from: jp.a$c$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0430a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f31818d;

                /* renamed from: jp.a$c$d$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0431a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f31819d;

                    /* renamed from: e  reason: collision with root package name */
                    int f31820e;

                    public C0431a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f31819d = obj;
                        this.f31820e |= Integer.MIN_VALUE;
                        return C0430a.this.emit(null, this);
                    }
                }

                public C0430a(FlowCollector flowCollector) {
                    this.f31818d = flowCollector;
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
                        boolean r0 = r7 instanceof jp.a.c.d.C0430a.C0431a
                        if (r0 == 0) goto L13
                        r0 = r7
                        jp.a$c$d$a$a r0 = (jp.a.c.d.C0430a.C0431a) r0
                        int r1 = r0.f31820e
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f31820e = r1
                        goto L18
                    L13:
                        jp.a$c$d$a$a r0 = new jp.a$c$d$a$a
                        r0.<init>(r7)
                    L18:
                        java.lang.Object r7 = r0.f31819d
                        java.lang.Object r1 = gs.b.f()
                        int r2 = r0.f31820e
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
                        kotlinx.coroutines.flow.FlowCollector r7 = r5.f31818d
                        r2 = r6
                        jp.a$b r2 = (jp.a.b) r2
                        boolean r4 = r2 instanceof jp.a.b.C0426a
                        if (r4 != 0) goto L41
                        boolean r2 = r2 instanceof jp.a.b.d
                        if (r2 == 0) goto L4a
                    L41:
                        r0.f31820e = r3
                        java.lang.Object r6 = r7.emit(r6, r0)
                        if (r6 != r1) goto L4a
                        return r1
                    L4a:
                        kotlin.Unit r6 = kotlin.Unit.f32556a
                        return r6
                    */
                    throw new UnsupportedOperationException("Method not decompiled: jp.a.c.d.C0430a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            public d(Flow flow) {
                this.f31817d = flow;
            }

            @Override // kotlinx.coroutines.flow.Flow
            public Object collect(FlowCollector flowCollector, Continuation continuation) {
                Object collect = this.f31817d.collect(new C0430a(flowCollector), continuation);
                if (collect == gs.b.f()) {
                    return collect;
                }
                return Unit.f32556a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e implements Flow {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow f31822d;

            /* renamed from: jp.a$c$e$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0432a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f31823d;

                /* renamed from: jp.a$c$e$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0433a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f31824d;

                    /* renamed from: e  reason: collision with root package name */
                    int f31825e;

                    public C0433a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f31824d = obj;
                        this.f31825e |= Integer.MIN_VALUE;
                        return C0432a.this.emit(null, this);
                    }
                }

                public C0432a(FlowCollector flowCollector) {
                    this.f31823d = flowCollector;
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
                        boolean r0 = r7 instanceof jp.a.c.e.C0432a.C0433a
                        if (r0 == 0) goto L13
                        r0 = r7
                        jp.a$c$e$a$a r0 = (jp.a.c.e.C0432a.C0433a) r0
                        int r1 = r0.f31825e
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f31825e = r1
                        goto L18
                    L13:
                        jp.a$c$e$a$a r0 = new jp.a$c$e$a$a
                        r0.<init>(r7)
                    L18:
                        java.lang.Object r7 = r0.f31824d
                        java.lang.Object r1 = gs.b.f()
                        int r2 = r0.f31825e
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
                        kotlinx.coroutines.flow.FlowCollector r7 = r5.f31823d
                        jp.a$b r6 = (jp.a.b) r6
                        boolean r2 = r6 instanceof jp.a.b.d
                        r4 = 0
                        if (r2 == 0) goto L40
                        jp.a$b$d r6 = (jp.a.b.d) r6
                        goto L41
                    L40:
                        r6 = r4
                    L41:
                        if (r6 == 0) goto L47
                        com.google.android.play.core.integrity.c$c r4 = r6.a()
                    L47:
                        r0.f31825e = r3
                        java.lang.Object r6 = r7.emit(r4, r0)
                        if (r6 != r1) goto L50
                        return r1
                    L50:
                        kotlin.Unit r6 = kotlin.Unit.f32556a
                        return r6
                    */
                    throw new UnsupportedOperationException("Method not decompiled: jp.a.c.e.C0432a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            public e(Flow flow) {
                this.f31822d = flow;
            }

            @Override // kotlinx.coroutines.flow.Flow
            public Object collect(FlowCollector flowCollector, Continuation continuation) {
                Object collect = this.f31822d.collect(new C0432a(flowCollector), continuation);
                if (collect == gs.b.f()) {
                    return collect;
                }
                return Unit.f32556a;
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r7.f31811i
                r2 = 2
                r3 = 0
                r4 = 1
                if (r1 == 0) goto L27
                if (r1 == r4) goto L23
                if (r1 != r2) goto L1b
                java.lang.Object r0 = r7.f31810e
                jp.a r0 = (jp.a) r0
                java.lang.Object r0 = r7.f31809d
                com.google.android.play.core.integrity.c$c r0 = (com.google.android.play.core.integrity.c.InterfaceC0191c) r0
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
                jp.a r8 = jp.a.this
                kotlinx.coroutines.flow.MutableStateFlow r8 = jp.a.e(r8)
                java.lang.Object r8 = r8.getValue()
                boolean r8 = r8 instanceof jp.a.b.C0427b
                if (r8 == 0) goto L39
                return r3
            L39:
                jp.a r8 = jp.a.this
                kotlinx.coroutines.flow.MutableStateFlow r8 = jp.a.e(r8)
                jp.a$c$d r1 = new jp.a$c$d
                r1.<init>(r8)
                long r5 = jp.a.b()
                kotlinx.coroutines.flow.Flow r8 = bt.g.I(r1, r5)
                jp.a$c$c r1 = new jp.a$c$c
                r1.<init>(r3)
                kotlinx.coroutines.flow.Flow r8 = bt.g.f(r8, r1)
                jp.a$c$e r1 = new jp.a$c$e
                r1.<init>(r8)
                r7.f31811i = r4
                java.lang.Object r8 = bt.g.u(r1, r7)
                if (r8 != r0) goto L63
                goto Lb9
            L63:
                com.google.android.play.core.integrity.c$c r8 = (com.google.android.play.core.integrity.c.InterfaceC0191c) r8
                if (r8 != 0) goto L68
                return r3
            L68:
                jp.a r1 = jp.a.this
                r7.f31809d = r8
                r7.f31810e = r1
                r7.f31811i = r2
                kotlinx.coroutines.e r2 = new kotlinx.coroutines.e
                kotlin.coroutines.Continuation r3 = gs.b.c(r7)
                r2.<init>(r3, r4)
                r2.H()
                com.google.android.play.core.integrity.c$d$a r3 = com.google.android.play.core.integrity.c.d.a()
                java.util.UUID r4 = java.util.UUID.randomUUID()
                java.lang.String r4 = r4.toString()
                com.google.android.play.core.integrity.c$d$a r3 = r3.b(r4)
                com.google.android.play.core.integrity.c$d r3 = r3.a()
                com.google.android.gms.tasks.Task r8 = r8.a(r3)
                jp.a$c$a r3 = new jp.a$c$a
                r3.<init>(r2)
                jp.b r4 = new jp.b
                r4.<init>(r3)
                com.google.android.gms.tasks.Task r8 = r8.g(r4)
                jp.a$c$b r3 = new jp.a$c$b
                r3.<init>(r1, r2)
                r8.e(r3)
                java.lang.Object r8 = r2.B()
                java.lang.Object r1 = gs.b.f()
                if (r8 != r1) goto Lb7
                kotlin.coroutines.jvm.internal.g.c(r7)
            Lb7:
                if (r8 != r0) goto Lba
            Lb9:
                return r0
            Lba:
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: jp.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f31827d;

        /* renamed from: e  reason: collision with root package name */
        Object f31828e;

        /* renamed from: i  reason: collision with root package name */
        Object f31829i;

        /* renamed from: o  reason: collision with root package name */
        Object f31830o;

        /* renamed from: p  reason: collision with root package name */
        Object f31831p;

        /* renamed from: q  reason: collision with root package name */
        int f31832q;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ String f31834s;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: jp.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0434a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f31835d;

            C0434a(CancellableContinuation cancellableContinuation) {
                this.f31835d = cancellableContinuation;
            }

            public final void a(c.InterfaceC0191c interfaceC0191c) {
                this.f31835d.resumeWith(Result.b(Result.a(Result.b(interfaceC0191c))));
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((c.InterfaceC0191c) obj);
                return Unit.f32556a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements zg.f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f31836a;

            b(CancellableContinuation cancellableContinuation) {
                this.f31836a = cancellableContinuation;
            }

            @Override // zg.f
            public final void onFailure(Exception it) {
                Intrinsics.checkNotNullParameter(it, "it");
                CancellableContinuation cancellableContinuation = this.f31836a;
                Result.a aVar = Result.f32553e;
                cancellableContinuation.resumeWith(Result.b(Result.a(Result.b(kotlin.c.a(it)))));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(String str, Continuation continuation) {
            super(2, continuation);
            this.f31834s = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f31834s, continuation);
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
            throw new UnsupportedOperationException("Method not decompiled: jp.a.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f31837d;

        /* renamed from: e  reason: collision with root package name */
        Object f31838e;

        /* renamed from: i  reason: collision with root package name */
        int f31839i;

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
                java.lang.Object r0 = gs.b.f()
                int r1 = r6.f31839i
                r2 = 2
                r3 = 1
                r4 = 0
                if (r1 == 0) goto L2e
                if (r1 == r3) goto L21
                if (r1 != r2) goto L19
                java.lang.Object r0 = r6.f31837d
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
                java.lang.Object r1 = r6.f31838e
                jp.a r1 = (jp.a) r1
                java.lang.Object r3 = r6.f31837d
                kotlinx.coroutines.sync.Mutex r3 = (kotlinx.coroutines.sync.Mutex) r3
                kotlin.c.b(r7)
                r7 = r3
                goto L46
            L2e:
                kotlin.c.b(r7)
                jp.a r7 = jp.a.this
                kotlinx.coroutines.sync.Mutex r7 = jp.a.d(r7)
                jp.a r1 = jp.a.this
                r6.f31837d = r7
                r6.f31838e = r1
                r6.f31839i = r3
                java.lang.Object r3 = r7.b(r4, r6)
                if (r3 != r0) goto L46
                goto L58
            L46:
                kotlinx.coroutines.flow.MutableStateFlow r1 = jp.a.e(r1)     // Catch: java.lang.Throwable -> L62
                jp.a$b$b r3 = jp.a.b.C0427b.f31806a     // Catch: java.lang.Throwable -> L62
                r6.f31837d = r7     // Catch: java.lang.Throwable -> L62
                r6.f31838e = r4     // Catch: java.lang.Throwable -> L62
                r6.f31839i = r2     // Catch: java.lang.Throwable -> L62
                java.lang.Object r1 = r1.emit(r3, r6)     // Catch: java.lang.Throwable -> L62
                if (r1 != r0) goto L59
            L58:
                return r0
            L59:
                r0 = r7
            L5a:
                kotlin.Unit r7 = kotlin.Unit.f32556a     // Catch: java.lang.Throwable -> L17
                r0.c(r4)
                kotlin.Unit r7 = kotlin.Unit.f32556a
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
            throw new UnsupportedOperationException("Method not decompiled: jp.a.e.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    static {
        Duration.a aVar = Duration.f35555e;
        f31796j = kotlin.time.b.s(10, ws.b.f54536p);
    }

    public a(Context applicationContext, e.a loggerFactory, f standardIntegrityManagerFactory, CoroutineDispatcher dispatcher) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(loggerFactory, "loggerFactory");
        Intrinsics.checkNotNullParameter(standardIntegrityManagerFactory, "standardIntegrityManagerFactory");
        Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
        this.f31797a = applicationContext;
        this.f31798b = loggerFactory;
        this.f31799c = standardIntegrityManagerFactory;
        this.f31800d = dispatcher;
        this.f31801e = loggerFactory.a("com.withpersona.sdk2.inquiry.integrity");
        this.f31802f = ht.f.b(false, 1, null);
        this.f31803g = i.a(dispatcher.O0(j1.b(null, 1, null)));
        this.f31804h = l0.a(b.C0427b.f31806a);
    }

    public final Object g(Continuation continuation) {
        return g.g(this.f31800d, new c(null), continuation);
    }

    public final void h(String cloudProjectNumber) {
        Intrinsics.checkNotNullParameter(cloudProjectNumber, "cloudProjectNumber");
        ys.i.d(this.f31803g, null, null, new d(cloudProjectNumber, null), 3, null);
    }

    public final Object i(Continuation continuation) {
        Object g10 = g.g(this.f31800d, new e(null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f32556a;
    }
}
