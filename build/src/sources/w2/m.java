package w2;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CancellationException;
import js.l0;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableStateFlow;
import kotlinx.coroutines.sync.Mutex;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m implements w2.f {

    /* renamed from: k  reason: collision with root package name */
    public static final a f52086k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final Set f52087l = new LinkedHashSet();

    /* renamed from: m  reason: collision with root package name */
    private static final Object f52088m = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final Function0 f52089a;

    /* renamed from: b  reason: collision with root package name */
    private final w2.k f52090b;

    /* renamed from: c  reason: collision with root package name */
    private final w2.b f52091c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineScope f52092d;

    /* renamed from: e  reason: collision with root package name */
    private final Flow f52093e;

    /* renamed from: f  reason: collision with root package name */
    private final String f52094f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f52095g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableStateFlow f52096h;

    /* renamed from: i  reason: collision with root package name */
    private List f52097i;

    /* renamed from: j  reason: collision with root package name */
    private final w2.l f52098j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return m.f52087l;
        }

        public final Object b() {
            return m.f52088m;
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final w2.n f52099a;

            public a(w2.n nVar) {
                super(null);
                this.f52099a = nVar;
            }

            public w2.n a() {
                return this.f52099a;
            }
        }

        /* renamed from: w2.m$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0712b extends b {

            /* renamed from: a  reason: collision with root package name */
            private final Function2 f52100a;

            /* renamed from: b  reason: collision with root package name */
            private final CompletableDeferred f52101b;

            /* renamed from: c  reason: collision with root package name */
            private final w2.n f52102c;

            /* renamed from: d  reason: collision with root package name */
            private final CoroutineContext f52103d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0712b(Function2 transform, CompletableDeferred ack, w2.n nVar, CoroutineContext callerContext) {
                super(null);
                Intrinsics.checkNotNullParameter(transform, "transform");
                Intrinsics.checkNotNullParameter(ack, "ack");
                Intrinsics.checkNotNullParameter(callerContext, "callerContext");
                this.f52100a = transform;
                this.f52101b = ack;
                this.f52102c = nVar;
                this.f52103d = callerContext;
            }

            public final CompletableDeferred a() {
                return this.f52101b;
            }

            public final CoroutineContext b() {
                return this.f52103d;
            }

            public w2.n c() {
                return this.f52102c;
            }

            public final Function2 d() {
                return this.f52100a;
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends OutputStream {

        /* renamed from: d  reason: collision with root package name */
        private final FileOutputStream f52104d;

        public c(FileOutputStream fileOutputStream) {
            Intrinsics.checkNotNullParameter(fileOutputStream, "fileOutputStream");
            this.f52104d = fileOutputStream;
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
            this.f52104d.flush();
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            this.f52104d.write(i10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] b10) {
            Intrinsics.checkNotNullParameter(b10, "b");
            this.f52104d.write(b10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bytes, int i10, int i11) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            this.f52104d.write(bytes, i10, i11);
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class d extends Lambda implements Function1 {
        d() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f33298a;
        }

        public final void invoke(Throwable th2) {
            if (th2 != null) {
                m.this.f52096h.setValue(new w2.h(th2));
            }
            a aVar = m.f52086k;
            Object b10 = aVar.b();
            m mVar = m.this;
            synchronized (b10) {
                aVar.a().remove(mVar.q().getAbsolutePath());
                Unit unit = Unit.f33298a;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class e extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final e f52106d = new e();

        e() {
            super(2);
        }

        public final void a(b msg, Throwable th2) {
            Intrinsics.checkNotNullParameter(msg, "msg");
            if (msg instanceof b.C0712b) {
                CompletableDeferred a10 = ((b.C0712b) msg).a();
                if (th2 == null) {
                    th2 = new CancellationException("DataStore scope was cancelled before updateData could complete");
                }
                a10.I0(th2);
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((b) obj, (Throwable) obj2);
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52107d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f52108e;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            f fVar = new f(continuation);
            fVar.f52108e = obj;
            return fVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0030, code lost:
            if (r4.f52109i.r((w2.m.b.a) r5, r4) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:18:0x0041, code lost:
            if (r4.f52109i.s((w2.m.b.C0712b) r5, r4) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:19:0x0043, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r5) {
            /*
                r4 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r4.f52107d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L1b
                if (r1 == r3) goto L17
                if (r1 != r2) goto Lf
                goto L17
            Lf:
                java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r5.<init>(r0)
                throw r5
            L17:
                kotlin.c.b(r5)
                goto L44
            L1b:
                kotlin.c.b(r5)
                java.lang.Object r5 = r4.f52108e
                w2.m$b r5 = (w2.m.b) r5
                boolean r1 = r5 instanceof w2.m.b.a
                if (r1 == 0) goto L33
                w2.m r1 = w2.m.this
                w2.m$b$a r5 = (w2.m.b.a) r5
                r4.f52107d = r3
                java.lang.Object r5 = w2.m.h(r1, r5, r4)
                if (r5 != r0) goto L44
                goto L43
            L33:
                boolean r1 = r5 instanceof w2.m.b.C0712b
                if (r1 == 0) goto L44
                w2.m r1 = w2.m.this
                w2.m$b$b r5 = (w2.m.b.C0712b) r5
                r4.f52107d = r2
                java.lang.Object r5 = w2.m.i(r1, r5, r4)
                if (r5 != r0) goto L44
            L43:
                return r0
            L44:
                kotlin.Unit r5 = kotlin.Unit.f33298a
                return r5
            */
            throw new UnsupportedOperationException("Method not decompiled: w2.m.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(b bVar, Continuation continuation) {
            return ((f) create(bVar, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52110d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f52111e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f52113d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f52114e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ w2.n f52115i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(w2.n nVar, Continuation continuation) {
                super(2, continuation);
                this.f52115i = nVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(this.f52115i, continuation);
                aVar.f52114e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f52113d == 0) {
                    kotlin.c.b(obj);
                    w2.n nVar = (w2.n) this.f52114e;
                    w2.n nVar2 = this.f52115i;
                    boolean z10 = false;
                    if (!(nVar2 instanceof w2.c) && !(nVar2 instanceof w2.h) && nVar == nVar2) {
                        z10 = true;
                    }
                    return kotlin.coroutines.jvm.internal.b.a(z10);
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(w2.n nVar, Continuation continuation) {
                return ((a) create(nVar, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements Flow {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow f52116d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ FlowCollector f52117d;

                /* renamed from: w2.m$g$b$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class C0713a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f52118d;

                    /* renamed from: e  reason: collision with root package name */
                    int f52119e;

                    public C0713a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f52118d = obj;
                        this.f52119e |= Integer.MIN_VALUE;
                        return a.this.emit(null, this);
                    }
                }

                public a(FlowCollector flowCollector) {
                    this.f52117d = flowCollector;
                }

                /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                @Override // kotlinx.coroutines.flow.FlowCollector
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
                    /*
                        r4 = this;
                        boolean r0 = r6 instanceof w2.m.g.b.a.C0713a
                        if (r0 == 0) goto L13
                        r0 = r6
                        w2.m$g$b$a$a r0 = (w2.m.g.b.a.C0713a) r0
                        int r1 = r0.f52119e
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f52119e = r1
                        goto L18
                    L13:
                        w2.m$g$b$a$a r0 = new w2.m$g$b$a$a
                        r0.<init>(r6)
                    L18:
                        java.lang.Object r6 = r0.f52118d
                        java.lang.Object r1 = or.b.f()
                        int r2 = r0.f52119e
                        r3 = 1
                        if (r2 == 0) goto L31
                        if (r2 != r3) goto L29
                        kotlin.c.b(r6)
                        goto L53
                    L29:
                        java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                        java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                        r5.<init>(r6)
                        throw r5
                    L31:
                        kotlin.c.b(r6)
                        kotlinx.coroutines.flow.FlowCollector r6 = r4.f52117d
                        w2.n r5 = (w2.n) r5
                        boolean r2 = r5 instanceof w2.j
                        if (r2 != 0) goto L6f
                        boolean r2 = r5 instanceof w2.h
                        if (r2 != 0) goto L68
                        boolean r2 = r5 instanceof w2.c
                        if (r2 == 0) goto L56
                        w2.c r5 = (w2.c) r5
                        java.lang.Object r5 = r5.b()
                        r0.f52119e = r3
                        java.lang.Object r5 = r6.emit(r5, r0)
                        if (r5 != r1) goto L53
                        return r1
                    L53:
                        kotlin.Unit r5 = kotlin.Unit.f33298a
                        return r5
                    L56:
                        boolean r5 = r5 instanceof w2.o
                        if (r5 == 0) goto L62
                        java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                        java.lang.String r6 = "This is a bug in DataStore. Please file a bug at: https://issuetracker.google.com/issues/new?component=907884&template=1466542"
                        r5.<init>(r6)
                        throw r5
                    L62:
                        ir.p r5 = new ir.p
                        r5.<init>()
                        throw r5
                    L68:
                        w2.h r5 = (w2.h) r5
                        java.lang.Throwable r5 = r5.a()
                        throw r5
                    L6f:
                        w2.j r5 = (w2.j) r5
                        java.lang.Throwable r5 = r5.a()
                        throw r5
                    */
                    throw new UnsupportedOperationException("Method not decompiled: w2.m.g.b.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            public b(Flow flow) {
                this.f52116d = flow;
            }

            @Override // kotlinx.coroutines.flow.Flow
            public Object collect(FlowCollector flowCollector, Continuation continuation) {
                Object collect = this.f52116d.collect(new a(flowCollector), continuation);
                if (collect == or.b.f()) {
                    return collect;
                }
                return Unit.f33298a;
            }
        }

        g(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            g gVar = new g(continuation);
            gVar.f52111e = obj;
            return gVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f52110d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = (FlowCollector) this.f52111e;
                w2.n nVar = (w2.n) m.this.f52096h.getValue();
                if (!(nVar instanceof w2.c)) {
                    m.this.f52098j.e(new b.a(nVar));
                }
                b bVar = new b(js.g.n(m.this.f52096h, new a(nVar, null)));
                this.f52110d = 1;
                if (js.g.p(flowCollector, bVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((g) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class h extends Lambda implements Function0 {
        h() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final File invoke() {
            File file = (File) m.this.f52089a.invoke();
            String it = file.getAbsolutePath();
            a aVar = m.f52086k;
            synchronized (aVar.b()) {
                if (!aVar.a().contains(it)) {
                    Set a10 = aVar.a();
                    Intrinsics.checkNotNullExpressionValue(it, "it");
                    a10.add(it);
                } else {
                    throw new IllegalStateException(("There are multiple DataStores active for the same file: " + file + ". You should either maintain your DataStore as a singleton or confirm that there is no two DataStore's active on the same file (by confirming that the scope is cancelled).").toString());
                }
            }
            return file;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52122d;

        /* renamed from: e  reason: collision with root package name */
        Object f52123e;

        /* renamed from: i  reason: collision with root package name */
        Object f52124i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f52125o;

        /* renamed from: q  reason: collision with root package name */
        int f52127q;

        i(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52125o = obj;
            this.f52127q |= Integer.MIN_VALUE;
            return m.this.s(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52128d;

        /* renamed from: e  reason: collision with root package name */
        Object f52129e;

        /* renamed from: i  reason: collision with root package name */
        Object f52130i;

        /* renamed from: o  reason: collision with root package name */
        Object f52131o;

        /* renamed from: p  reason: collision with root package name */
        Object f52132p;

        /* renamed from: q  reason: collision with root package name */
        Object f52133q;

        /* renamed from: r  reason: collision with root package name */
        /* synthetic */ Object f52134r;

        /* renamed from: t  reason: collision with root package name */
        int f52136t;

        j(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52134r = obj;
            this.f52136t |= Integer.MIN_VALUE;
            return m.this.t(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class k implements w2.i {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Mutex f52137a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f52138b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f52139c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ m f52140d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f52141d;

            /* renamed from: e  reason: collision with root package name */
            Object f52142e;

            /* renamed from: i  reason: collision with root package name */
            Object f52143i;

            /* renamed from: o  reason: collision with root package name */
            Object f52144o;

            /* renamed from: p  reason: collision with root package name */
            Object f52145p;

            /* renamed from: q  reason: collision with root package name */
            /* synthetic */ Object f52146q;

            /* renamed from: s  reason: collision with root package name */
            int f52148s;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f52146q = obj;
                this.f52148s |= Integer.MIN_VALUE;
                return k.this.a(null, this);
            }
        }

        k(Mutex mutex, Ref.BooleanRef booleanRef, Ref.ObjectRef objectRef, m mVar) {
            this.f52137a = mutex;
            this.f52138b = booleanRef;
            this.f52139c = objectRef;
            this.f52140d = mVar;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0026  */
        /* JADX WARN: Removed duplicated region for block: B:26:0x0076  */
        /* JADX WARN: Removed duplicated region for block: B:32:0x009a A[Catch: all -> 0x00d7, TRY_LEAVE, TryCatch #1 {all -> 0x00d7, blocks: (B:30:0x0096, B:32:0x009a, B:49:0x00da, B:50:0x00e1), top: B:55:0x0096 }] */
        /* JADX WARN: Removed duplicated region for block: B:38:0x00ba A[Catch: all -> 0x0056, TRY_LEAVE, TryCatch #0 {all -> 0x0056, blocks: (B:21:0x0052, B:36:0x00b2, B:38:0x00ba), top: B:53:0x0052 }] */
        /* JADX WARN: Removed duplicated region for block: B:43:0x00d0  */
        /* JADX WARN: Removed duplicated region for block: B:49:0x00da A[Catch: all -> 0x00d7, TRY_ENTER, TryCatch #1 {all -> 0x00d7, blocks: (B:30:0x0096, B:32:0x009a, B:49:0x00da, B:50:0x00e1), top: B:55:0x0096 }] */
        @Override // w2.i
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.Object a(kotlin.jvm.functions.Function2 r10, kotlin.coroutines.Continuation r11) {
            /*
                Method dump skipped, instructions count: 230
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: w2.m.k.a(kotlin.jvm.functions.Function2, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52149d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f52150e;

        /* renamed from: o  reason: collision with root package name */
        int f52152o;

        l(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52150e = obj;
            this.f52152o |= Integer.MIN_VALUE;
            return m.this.u(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: w2.m$m  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0714m extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52153d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f52154e;

        /* renamed from: o  reason: collision with root package name */
        int f52156o;

        C0714m(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52154e = obj;
            this.f52156o |= Integer.MIN_VALUE;
            return m.this.v(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class n extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52157d;

        /* renamed from: e  reason: collision with root package name */
        Object f52158e;

        /* renamed from: i  reason: collision with root package name */
        Object f52159i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f52160o;

        /* renamed from: q  reason: collision with root package name */
        int f52162q;

        n(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52160o = obj;
            this.f52162q |= Integer.MIN_VALUE;
            return m.this.w(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class o extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52163d;

        /* renamed from: e  reason: collision with root package name */
        Object f52164e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f52165i;

        /* renamed from: p  reason: collision with root package name */
        int f52167p;

        o(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52165i = obj;
            this.f52167p |= Integer.MIN_VALUE;
            return m.this.x(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class p extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52168d;

        /* renamed from: e  reason: collision with root package name */
        Object f52169e;

        /* renamed from: i  reason: collision with root package name */
        Object f52170i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f52171o;

        /* renamed from: q  reason: collision with root package name */
        int f52173q;

        p(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52171o = obj;
            this.f52173q |= Integer.MIN_VALUE;
            return m.this.y(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class q extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f52174d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f52175e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Object f52176i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        q(Function2 function2, Object obj, Continuation continuation) {
            super(2, continuation);
            this.f52175e = function2;
            this.f52176i = obj;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new q(this.f52175e, this.f52176i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f52174d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            Function2 function2 = this.f52175e;
            Object obj2 = this.f52176i;
            this.f52174d = 1;
            Object invoke = function2.invoke(obj2, this);
            if (invoke == f10) {
                return f10;
            }
            return invoke;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((q) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class r extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f52177d;

        /* renamed from: e  reason: collision with root package name */
        Object f52178e;

        /* renamed from: i  reason: collision with root package name */
        Object f52179i;

        /* renamed from: o  reason: collision with root package name */
        Object f52180o;

        /* renamed from: p  reason: collision with root package name */
        Object f52181p;

        /* renamed from: q  reason: collision with root package name */
        /* synthetic */ Object f52182q;

        /* renamed from: s  reason: collision with root package name */
        int f52184s;

        r(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f52182q = obj;
            this.f52184s |= Integer.MIN_VALUE;
            return m.this.z(null, this);
        }
    }

    public m(Function0 produceFile, w2.k serializer, List initTasksList, w2.b corruptionHandler, CoroutineScope scope) {
        Intrinsics.checkNotNullParameter(produceFile, "produceFile");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        Intrinsics.checkNotNullParameter(initTasksList, "initTasksList");
        Intrinsics.checkNotNullParameter(corruptionHandler, "corruptionHandler");
        Intrinsics.checkNotNullParameter(scope, "scope");
        this.f52089a = produceFile;
        this.f52090b = serializer;
        this.f52091c = corruptionHandler;
        this.f52092d = scope;
        this.f52093e = js.g.v(new g(null));
        this.f52094f = ".tmp";
        this.f52095g = ir.l.b(new h());
        this.f52096h = l0.a(w2.o.f52185a);
        this.f52097i = CollectionsKt.h1(initTasksList);
        this.f52098j = new w2.l(scope, new d(), e.f52106d, new f(null));
    }

    private final void p(File file) {
        File parentFile = file.getCanonicalFile().getParentFile();
        if (parentFile != null) {
            parentFile.mkdirs();
            if (parentFile.isDirectory()) {
                return;
            }
            throw new IOException(Intrinsics.stringPlus("Unable to create parent directories of ", file));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final File q() {
        return (File) this.f52095g.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object r(b.a aVar, Continuation continuation) {
        w2.n nVar = (w2.n) this.f52096h.getValue();
        if (!(nVar instanceof w2.c)) {
            if (nVar instanceof w2.j) {
                if (nVar == aVar.a()) {
                    Object v10 = v(continuation);
                    if (v10 == or.b.f()) {
                        return v10;
                    }
                    return Unit.f33298a;
                }
            } else if (Intrinsics.areEqual(nVar, w2.o.f52185a)) {
                Object v11 = v(continuation);
                if (v11 == or.b.f()) {
                    return v11;
                }
                return Unit.f33298a;
            } else if (nVar instanceof w2.h) {
                throw new IllegalStateException("Can't read in final state.");
            }
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't wrap try/catch for region: R(8:1|(2:3|(5:5|6|7|(6:(1:(1:(2:12|13))(3:15|16|17))|26|27|21|22|23)(5:28|29|30|(6:32|(1:34)|20|21|22|23)(3:35|(1:37)(1:53)|(2:39|(2:41|(1:43)(1:44))(2:45|46))(2:47|(2:49|50)(2:51|52)))|25)|18))|58|6|7|(0)(0)|18|(1:(0))) */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0034, code lost:
        r10 = th;
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x00b6, code lost:
        if (r9 != r1) goto L20;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0051  */
    /* JADX WARN: Type inference failed for: r9v20, types: [kotlinx.coroutines.CompletableDeferred] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object s(w2.m.b.C0712b r9, kotlin.coroutines.Continuation r10) {
        /*
            Method dump skipped, instructions count: 230
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.s(w2.m$b$b, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0027  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x00c9  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00cd  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00df  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x0116  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0127  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object t(kotlin.coroutines.Continuation r14) {
        /*
            Method dump skipped, instructions count: 321
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.t(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object u(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof w2.m.l
            if (r0 == 0) goto L13
            r0 = r5
            w2.m$l r0 = (w2.m.l) r0
            int r1 = r0.f52152o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52152o = r1
            goto L18
        L13:
            w2.m$l r0 = new w2.m$l
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f52150e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f52152o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f52149d
            w2.m r0 = (w2.m) r0
            kotlin.c.b(r5)     // Catch: java.lang.Throwable -> L2d
            goto L45
        L2d:
            r5 = move-exception
            goto L4a
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L37:
            kotlin.c.b(r5)
            r0.f52149d = r4     // Catch: java.lang.Throwable -> L48
            r0.f52152o = r3     // Catch: java.lang.Throwable -> L48
            java.lang.Object r5 = r4.t(r0)     // Catch: java.lang.Throwable -> L48
            if (r5 != r1) goto L45
            return r1
        L45:
            kotlin.Unit r5 = kotlin.Unit.f33298a
            return r5
        L48:
            r5 = move-exception
            r0 = r4
        L4a:
            kotlinx.coroutines.flow.MutableStateFlow r0 = r0.f52096h
            w2.j r1 = new w2.j
            r1.<init>(r5)
            r0.setValue(r1)
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.u(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object v(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof w2.m.C0714m
            if (r0 == 0) goto L13
            r0 = r5
            w2.m$m r0 = (w2.m.C0714m) r0
            int r1 = r0.f52156o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52156o = r1
            goto L18
        L13:
            w2.m$m r0 = new w2.m$m
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f52154e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f52156o
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r0 = r0.f52153d
            w2.m r0 = (w2.m) r0
            kotlin.c.b(r5)     // Catch: java.lang.Throwable -> L2d
            goto L51
        L2d:
            r5 = move-exception
            goto L47
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L37:
            kotlin.c.b(r5)
            r0.f52153d = r4     // Catch: java.lang.Throwable -> L45
            r0.f52156o = r3     // Catch: java.lang.Throwable -> L45
            java.lang.Object r5 = r4.t(r0)     // Catch: java.lang.Throwable -> L45
            if (r5 != r1) goto L51
            return r1
        L45:
            r5 = move-exception
            r0 = r4
        L47:
            kotlinx.coroutines.flow.MutableStateFlow r0 = r0.f52096h
            w2.j r1 = new w2.j
            r1.<init>(r5)
            r0.setValue(r1)
        L51:
            kotlin.Unit r5 = kotlin.Unit.f33298a
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.v(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003f  */
    /* JADX WARN: Type inference failed for: r0v12 */
    /* JADX WARN: Type inference failed for: r0v13 */
    /* JADX WARN: Type inference failed for: r0v2, types: [kotlin.coroutines.Continuation, w2.m$n] */
    /* JADX WARN: Type inference failed for: r0v3, types: [w2.m] */
    /* JADX WARN: Type inference failed for: r0v4 */
    /* JADX WARN: Type inference failed for: r2v4, types: [java.io.Closeable] */
    /* JADX WARN: Type inference failed for: r6v9, types: [w2.k] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object w(kotlin.coroutines.Continuation r6) {
        /*
            r5 = this;
            boolean r0 = r6 instanceof w2.m.n
            if (r0 == 0) goto L13
            r0 = r6
            w2.m$n r0 = (w2.m.n) r0
            int r1 = r0.f52162q
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52162q = r1
            goto L18
        L13:
            w2.m$n r0 = new w2.m$n
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f52160o
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f52162q
            r3 = 1
            if (r2 == 0) goto L3f
            if (r2 != r3) goto L37
            java.lang.Object r1 = r0.f52159i
            java.lang.Throwable r1 = (java.lang.Throwable) r1
            java.lang.Object r2 = r0.f52158e
            java.io.Closeable r2 = (java.io.Closeable) r2
            java.lang.Object r0 = r0.f52157d
            w2.m r0 = (w2.m) r0
            kotlin.c.b(r6)     // Catch: java.lang.Throwable -> L35
            goto L5f
        L35:
            r6 = move-exception
            goto L67
        L37:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r0)
            throw r6
        L3f:
            kotlin.c.b(r6)
            java.io.FileInputStream r2 = new java.io.FileInputStream     // Catch: java.io.FileNotFoundException -> L6d
            java.io.File r6 = r5.q()     // Catch: java.io.FileNotFoundException -> L6d
            r2.<init>(r6)     // Catch: java.io.FileNotFoundException -> L6d
            w2.k r6 = r5.f52090b     // Catch: java.lang.Throwable -> L65
            r0.f52157d = r5     // Catch: java.lang.Throwable -> L65
            r0.f52158e = r2     // Catch: java.lang.Throwable -> L65
            r4 = 0
            r0.f52159i = r4     // Catch: java.lang.Throwable -> L65
            r0.f52162q = r3     // Catch: java.lang.Throwable -> L65
            java.lang.Object r6 = r6.c(r2, r0)     // Catch: java.lang.Throwable -> L65
            if (r6 != r1) goto L5d
            return r1
        L5d:
            r0 = r5
            r1 = r4
        L5f:
            tr.c.a(r2, r1)     // Catch: java.io.FileNotFoundException -> L63
            return r6
        L63:
            r6 = move-exception
            goto L6f
        L65:
            r6 = move-exception
            r0 = r5
        L67:
            throw r6     // Catch: java.lang.Throwable -> L68
        L68:
            r1 = move-exception
            tr.c.a(r2, r6)     // Catch: java.io.FileNotFoundException -> L63
            throw r1     // Catch: java.io.FileNotFoundException -> L63
        L6d:
            r6 = move-exception
            r0 = r5
        L6f:
            java.io.File r1 = r0.q()
            boolean r1 = r1.exists()
            if (r1 != 0) goto L80
            w2.k r6 = r0.f52090b
            java.lang.Object r6 = r6.a()
            return r6
        L80:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.w(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0055  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x0075  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0085 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:40:0x0086 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object x(kotlin.coroutines.Continuation r8) {
        /*
            r7 = this;
            boolean r0 = r8 instanceof w2.m.o
            if (r0 == 0) goto L13
            r0 = r8
            w2.m$o r0 = (w2.m.o) r0
            int r1 = r0.f52167p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52167p = r1
            goto L18
        L13:
            w2.m$o r0 = new w2.m$o
            r0.<init>(r8)
        L18:
            java.lang.Object r8 = r0.f52165i
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f52167p
            r3 = 3
            r4 = 2
            r5 = 1
            if (r2 == 0) goto L55
            if (r2 == r5) goto L4b
            if (r2 == r4) goto L3f
            if (r2 != r3) goto L37
            java.lang.Object r1 = r0.f52164e
            java.lang.Object r0 = r0.f52163d
            w2.a r0 = (w2.a) r0
            kotlin.c.b(r8)     // Catch: java.io.IOException -> L35
            return r1
        L35:
            r8 = move-exception
            goto L89
        L37:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r0)
            throw r8
        L3f:
            java.lang.Object r2 = r0.f52164e
            w2.a r2 = (w2.a) r2
            java.lang.Object r4 = r0.f52163d
            w2.m r4 = (w2.m) r4
            kotlin.c.b(r8)
            goto L79
        L4b:
            java.lang.Object r2 = r0.f52163d
            w2.m r2 = (w2.m) r2
            kotlin.c.b(r8)     // Catch: w2.a -> L53
            return r8
        L53:
            r8 = move-exception
            goto L66
        L55:
            kotlin.c.b(r8)
            r0.f52163d = r7     // Catch: w2.a -> L64
            r0.f52167p = r5     // Catch: w2.a -> L64
            java.lang.Object r8 = r7.w(r0)     // Catch: w2.a -> L64
            if (r8 != r1) goto L63
            goto L85
        L63:
            return r8
        L64:
            r8 = move-exception
            r2 = r7
        L66:
            w2.b r5 = r2.f52091c
            r0.f52163d = r2
            r0.f52164e = r8
            r0.f52167p = r4
            java.lang.Object r4 = r5.a(r8, r0)
            if (r4 != r1) goto L75
            goto L85
        L75:
            r6 = r2
            r2 = r8
            r8 = r4
            r4 = r6
        L79:
            r0.f52163d = r2     // Catch: java.io.IOException -> L87
            r0.f52164e = r8     // Catch: java.io.IOException -> L87
            r0.f52167p = r3     // Catch: java.io.IOException -> L87
            java.lang.Object r0 = r4.z(r8, r0)     // Catch: java.io.IOException -> L87
            if (r0 != r1) goto L86
        L85:
            return r1
        L86:
            return r8
        L87:
            r8 = move-exception
            r0 = r2
        L89:
            ir.e.a(r0, r8)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.x(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0049  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x007c A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:23:0x007d  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0094  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0099  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object y(kotlin.jvm.functions.Function2 r8, kotlin.coroutines.CoroutineContext r9, kotlin.coroutines.Continuation r10) {
        /*
            r7 = this;
            boolean r0 = r10 instanceof w2.m.p
            if (r0 == 0) goto L13
            r0 = r10
            w2.m$p r0 = (w2.m.p) r0
            int r1 = r0.f52173q
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52173q = r1
            goto L18
        L13:
            w2.m$p r0 = new w2.m$p
            r0.<init>(r10)
        L18:
            java.lang.Object r10 = r0.f52171o
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f52173q
            r3 = 0
            r4 = 2
            r5 = 1
            if (r2 == 0) goto L49
            if (r2 == r5) goto L3b
            if (r2 != r4) goto L33
            java.lang.Object r8 = r0.f52169e
            java.lang.Object r9 = r0.f52168d
            w2.m r9 = (w2.m) r9
            kotlin.c.b(r10)
            goto L8e
        L33:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r9)
            throw r8
        L3b:
            java.lang.Object r8 = r0.f52170i
            java.lang.Object r9 = r0.f52169e
            w2.c r9 = (w2.c) r9
            java.lang.Object r2 = r0.f52168d
            w2.m r2 = (w2.m) r2
            kotlin.c.b(r10)
            goto L73
        L49:
            kotlin.c.b(r10)
            kotlinx.coroutines.flow.MutableStateFlow r10 = r7.f52096h
            java.lang.Object r10 = r10.getValue()
            w2.c r10 = (w2.c) r10
            r10.a()
            java.lang.Object r2 = r10.b()
            w2.m$q r6 = new w2.m$q
            r6.<init>(r8, r2, r3)
            r0.f52168d = r7
            r0.f52169e = r10
            r0.f52170i = r2
            r0.f52173q = r5
            java.lang.Object r8 = gs.g.g(r9, r6, r0)
            if (r8 != r1) goto L6f
            goto L8b
        L6f:
            r9 = r10
            r10 = r8
            r8 = r2
            r2 = r7
        L73:
            r9.a()
            boolean r9 = kotlin.jvm.internal.Intrinsics.areEqual(r8, r10)
            if (r9 == 0) goto L7d
            return r8
        L7d:
            r0.f52168d = r2
            r0.f52169e = r10
            r0.f52170i = r3
            r0.f52173q = r4
            java.lang.Object r8 = r2.z(r10, r0)
            if (r8 != r1) goto L8c
        L8b:
            return r1
        L8c:
            r8 = r10
            r9 = r2
        L8e:
            kotlinx.coroutines.flow.MutableStateFlow r9 = r9.f52096h
            w2.c r10 = new w2.c
            if (r8 == 0) goto L99
            int r0 = r8.hashCode()
            goto L9a
        L99:
            r0 = 0
        L9a:
            r10.<init>(r8, r0)
            r9.setValue(r10)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.y(kotlin.jvm.functions.Function2, kotlin.coroutines.CoroutineContext, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // w2.f
    public Object a(Function2 function2, Continuation continuation) {
        CompletableDeferred b10 = gs.q.b(null, 1, null);
        this.f52098j.e(new b.C0712b(function2, b10, (w2.n) this.f52096h.getValue(), continuation.getContext()));
        return b10.V(continuation);
    }

    @Override // w2.f
    public Flow getData() {
        return this.f52093e;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x009f  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x00a2 A[Catch: IOException -> 0x00be, TRY_ENTER, TryCatch #3 {IOException -> 0x00be, blocks: (B:25:0x0092, B:29:0x00a2, B:30:0x00bd, B:35:0x00c3), top: B:48:0x0021 }] */
    /* JADX WARN: Type inference failed for: r2v7, types: [java.io.Closeable] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object z(java.lang.Object r8, kotlin.coroutines.Continuation r9) {
        /*
            r7 = this;
            boolean r0 = r9 instanceof w2.m.r
            if (r0 == 0) goto L13
            r0 = r9
            w2.m$r r0 = (w2.m.r) r0
            int r1 = r0.f52184s
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f52184s = r1
            goto L18
        L13:
            w2.m$r r0 = new w2.m$r
            r0.<init>(r9)
        L18:
            java.lang.Object r9 = r0.f52182q
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f52184s
            r3 = 1
            if (r2 == 0) goto L48
            if (r2 != r3) goto L40
            java.lang.Object r8 = r0.f52181p
            java.io.FileOutputStream r8 = (java.io.FileOutputStream) r8
            java.lang.Object r1 = r0.f52180o
            java.lang.Throwable r1 = (java.lang.Throwable) r1
            java.lang.Object r2 = r0.f52179i
            java.io.Closeable r2 = (java.io.Closeable) r2
            java.lang.Object r3 = r0.f52178e
            java.io.File r3 = (java.io.File) r3
            java.lang.Object r0 = r0.f52177d
            w2.m r0 = (w2.m) r0
            kotlin.c.b(r9)     // Catch: java.lang.Throwable -> L3d
            goto L89
        L3d:
            r8 = move-exception
            goto Lc3
        L40:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r9)
            throw r8
        L48:
            kotlin.c.b(r9)
            java.io.File r9 = r7.q()
            r7.p(r9)
            java.io.File r9 = new java.io.File
            java.io.File r2 = r7.q()
            java.lang.String r2 = r2.getAbsolutePath()
            java.lang.String r4 = r7.f52094f
            java.lang.String r2 = kotlin.jvm.internal.Intrinsics.stringPlus(r2, r4)
            r9.<init>(r2)
            java.io.FileOutputStream r2 = new java.io.FileOutputStream     // Catch: java.io.IOException -> Lc9
            r2.<init>(r9)     // Catch: java.io.IOException -> Lc9
            w2.k r4 = r7.f52090b     // Catch: java.lang.Throwable -> Lc1
            w2.m$c r5 = new w2.m$c     // Catch: java.lang.Throwable -> Lc1
            r5.<init>(r2)     // Catch: java.lang.Throwable -> Lc1
            r0.f52177d = r7     // Catch: java.lang.Throwable -> Lc1
            r0.f52178e = r9     // Catch: java.lang.Throwable -> Lc1
            r0.f52179i = r2     // Catch: java.lang.Throwable -> Lc1
            r6 = 0
            r0.f52180o = r6     // Catch: java.lang.Throwable -> Lc1
            r0.f52181p = r2     // Catch: java.lang.Throwable -> Lc1
            r0.f52184s = r3     // Catch: java.lang.Throwable -> Lc1
            java.lang.Object r8 = r4.b(r8, r5, r0)     // Catch: java.lang.Throwable -> Lc1
            if (r8 != r1) goto L85
            return r1
        L85:
            r0 = r7
            r3 = r9
            r8 = r2
            r1 = r6
        L89:
            java.io.FileDescriptor r8 = r8.getFD()     // Catch: java.lang.Throwable -> L3d
            r8.sync()     // Catch: java.lang.Throwable -> L3d
            kotlin.Unit r8 = kotlin.Unit.f33298a     // Catch: java.lang.Throwable -> L3d
            tr.c.a(r2, r1)     // Catch: java.io.IOException -> Lbe
            java.io.File r8 = r0.q()     // Catch: java.io.IOException -> Lbe
            boolean r8 = r3.renameTo(r8)     // Catch: java.io.IOException -> Lbe
            if (r8 == 0) goto La2
            kotlin.Unit r8 = kotlin.Unit.f33298a
            return r8
        La2:
            java.io.IOException r8 = new java.io.IOException     // Catch: java.io.IOException -> Lbe
            java.lang.StringBuilder r9 = new java.lang.StringBuilder     // Catch: java.io.IOException -> Lbe
            r9.<init>()     // Catch: java.io.IOException -> Lbe
            java.lang.String r0 = "Unable to rename "
            r9.append(r0)     // Catch: java.io.IOException -> Lbe
            r9.append(r3)     // Catch: java.io.IOException -> Lbe
            java.lang.String r0 = ".This likely means that there are multiple instances of DataStore for this file. Ensure that you are only creating a single instance of datastore for this file."
            r9.append(r0)     // Catch: java.io.IOException -> Lbe
            java.lang.String r9 = r9.toString()     // Catch: java.io.IOException -> Lbe
            r8.<init>(r9)     // Catch: java.io.IOException -> Lbe
            throw r8     // Catch: java.io.IOException -> Lbe
        Lbe:
            r8 = move-exception
            r9 = r3
            goto Lca
        Lc1:
            r8 = move-exception
            r3 = r9
        Lc3:
            throw r8     // Catch: java.lang.Throwable -> Lc4
        Lc4:
            r9 = move-exception
            tr.c.a(r2, r8)     // Catch: java.io.IOException -> Lbe
            throw r9     // Catch: java.io.IOException -> Lbe
        Lc9:
            r8 = move-exception
        Lca:
            boolean r0 = r9.exists()
            if (r0 == 0) goto Ld3
            r9.delete()
        Ld3:
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: w2.m.z(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
