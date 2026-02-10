package qo;

import android.content.Context;
import cn.o;
import ko.c4;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import rr.h;
import ss.g;
import vn.f0;
import vn.i0;
import vn.t0;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\n\b\u0086\b\u0018\u0000 &2\n\u0012\u0006\u0012\u0004\u0018\u00010\u00020\u0001:\u0003\u0012#!B#\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJ\u0019\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\u000e\u0010\u000fJ\u001b\u0010\u0012\u001a\u00020\u00112\n\u0010\u0010\u001a\u0006\u0012\u0002\b\u00030\u0001H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u0017\u0010\u0015\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u0010\u0010\u0018\u001a\u00020\u0017HÖ\u0001¢\u0006\u0004\b\u0018\u0010\u0019J\u0010\u0010\u001b\u001a\u00020\u001aHÖ\u0001¢\u0006\u0004\b\u001b\u0010\u001cJ\u001a\u0010\u001f\u001a\u00020\u00112\b\u0010\u001e\u001a\u0004\u0018\u00010\u001dHÖ\u0003¢\u0006\u0004\b\u001f\u0010 R\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\"R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u0014\u0010\b\u001a\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000e\u0010%¨\u0006'"}, d2 = {"Lqo/a;", "Lcn/o;", "Lqo/d;", "Landroid/content/Context;", "context", "Lvn/f0;", "governmentIdFeed", "Lko/c4$e;", "side", "<init>", "(Landroid/content/Context;Lvn/f0;Lko/c4$e;)V", "Lvn/t0;", "it", "Lqo/a$c;", "d", "(Lvn/t0;)Lqo/a$c;", "otherWorker", "", "a", "(Lcn/o;)Z", "Lkotlinx/coroutines/flow/Flow;", "run", "()Lkotlinx/coroutines/flow/Flow;", "", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "", "other", "equals", "(Ljava/lang/Object;)Z", "b", "Landroid/content/Context;", "c", "Lvn/f0;", "Lko/c4$e;", "e", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements o<qo.d> {

    /* renamed from: e  reason: collision with root package name */
    public static final C0627a f46631e = new C0627a(null);

    /* renamed from: b  reason: collision with root package name */
    private final Context f46632b;

    /* renamed from: c  reason: collision with root package name */
    private final f0 f46633c;

    /* renamed from: d  reason: collision with root package name */
    private final c4.e f46634d;

    /* renamed from: qo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0627a {
        public /* synthetic */ C0627a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0627a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        a a(c4.e eVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final qo.d f46635a;

        /* renamed from: b  reason: collision with root package name */
        private final long f46636b;

        public c(qo.d hint, long j10) {
            Intrinsics.checkNotNullParameter(hint, "hint");
            this.f46635a = hint;
            this.f46636b = j10;
        }

        public final qo.d a() {
            return this.f46635a;
        }

        public final long b() {
            return this.f46636b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f46635a, cVar.f46635a) && this.f46636b == cVar.f46636b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f46635a.hashCode() * 31) + Long.hashCode(this.f46636b);
        }

        public String toString() {
            qo.d dVar = this.f46635a;
            long j10 = this.f46636b;
            return "HintEvent(hint=" + dVar + ", minDurationMs=" + j10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46637d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f46638e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f46639i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: qo.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0628a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f46640d;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: qo.a$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0629a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f46641d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f46642e;

                /* renamed from: o  reason: collision with root package name */
                int f46644o;

                C0629a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f46642e = obj;
                    this.f46644o |= Integer.MIN_VALUE;
                    return C0628a.this.emit(null, this);
                }
            }

            C0628a(FlowCollector flowCollector) {
                this.f46640d = flowCollector;
            }

            /* JADX WARN: Code restructure failed: missing block: B:21:0x0052, code lost:
                if (r9.emit(r2, r0) == r1) goto L21;
             */
            /* JADX WARN: Code restructure failed: missing block: B:27:0x006c, code lost:
                if (ps.i0.a(r8, r0) != r1) goto L11;
             */
            /* JADX WARN: Code restructure failed: missing block: B:28:0x006e, code lost:
                return r1;
             */
            /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
            /* JADX WARN: Removed duplicated region for block: B:16:0x003d  */
            /* JADX WARN: Removed duplicated region for block: B:24:0x0057  */
            /* JADX WARN: Removed duplicated region for block: B:25:0x005c  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(qo.a.c r8, kotlin.coroutines.Continuation r9) {
                /*
                    r7 = this;
                    boolean r0 = r9 instanceof qo.a.d.C0628a.C0629a
                    if (r0 == 0) goto L13
                    r0 = r9
                    qo.a$d$a$a r0 = (qo.a.d.C0628a.C0629a) r0
                    int r1 = r0.f46644o
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f46644o = r1
                    goto L18
                L13:
                    qo.a$d$a$a r0 = new qo.a$d$a$a
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f46642e
                    java.lang.Object r1 = xr.b.f()
                    int r2 = r0.f46644o
                    r3 = 0
                    r4 = 2
                    r5 = 1
                    if (r2 == 0) goto L3d
                    if (r2 == r5) goto L35
                    if (r2 != r4) goto L2d
                    kotlin.c.b(r9)
                    goto L6f
                L2d:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L35:
                    java.lang.Object r8 = r0.f46641d
                    qo.a$c r8 = (qo.a.c) r8
                    kotlin.c.b(r9)
                    goto L55
                L3d:
                    kotlin.c.b(r9)
                    kotlinx.coroutines.flow.FlowCollector r9 = r7.f46640d
                    if (r8 == 0) goto L49
                    qo.d r2 = r8.a()
                    goto L4a
                L49:
                    r2 = r3
                L4a:
                    r0.f46641d = r8
                    r0.f46644o = r5
                    java.lang.Object r9 = r9.emit(r2, r0)
                    if (r9 != r1) goto L55
                    goto L6e
                L55:
                    if (r8 == 0) goto L5c
                    long r8 = r8.b()
                    goto L5e
                L5c:
                    r8 = 0
                L5e:
                    r5 = 33
                    long r8 = kotlin.ranges.d.e(r8, r5)
                    r0.f46641d = r3
                    r0.f46644o = r4
                    java.lang.Object r8 = ps.i0.a(r8, r0)
                    if (r8 != r1) goto L6f
                L6e:
                    return r1
                L6f:
                    kotlin.Unit r8 = kotlin.Unit.f31765a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: qo.a.d.C0628a.emit(qo.a$c, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Flow flow, Continuation continuation) {
            super(2, continuation);
            this.f46639i = flow;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(this.f46639i, continuation);
            dVar.f46638e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f46637d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow j10 = g.j(this.f46639i);
                C0628a c0628a = new C0628a((FlowCollector) this.f46638e);
                this.f46637d = 1;
                if (j10.collect(c0628a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((d) create(flowCollector, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46645d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f46646e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: qo.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0630a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f46648d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ a f46649e;

            C0630a(FlowCollector flowCollector, a aVar) {
                this.f46648d = flowCollector;
                this.f46649e = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public final Object emit(Object obj, Continuation continuation) {
                Object j10 = ((Result) obj).j();
                FlowCollector flowCollector = this.f46648d;
                a aVar = this.f46649e;
                if (Result.e(j10) == null) {
                    Object emit = flowCollector.emit(aVar.d((t0) j10), continuation);
                    if (emit == xr.b.f()) {
                        return emit;
                    }
                } else {
                    Object emit2 = flowCollector.emit(null, continuation);
                    if (emit2 == xr.b.f()) {
                        return emit2;
                    }
                }
                return Unit.f31765a;
            }
        }

        e(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            e eVar = new e(continuation);
            eVar.f46646e = obj;
            return eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f46645d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                f0 f0Var = a.this.f46633c;
                C0630a c0630a = new C0630a((FlowCollector) this.f46646e, a.this);
                this.f46645d = 1;
                if (f0Var.collect(c0630a, this) == f10) {
                    return f10;
                }
            }
            throw new h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((e) create(flowCollector, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public a(Context context, f0 governmentIdFeed, c4.e side) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        Intrinsics.checkNotNullParameter(side, "side");
        this.f46632b = context;
        this.f46633c = governmentIdFeed;
        this.f46634d = side;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final c d(t0 t0Var) {
        boolean z10;
        if (t0Var instanceof t0.b) {
            return new c(qo.e.f46653d, 1000L);
        }
        i0 a10 = t0Var.a();
        if (a10 != null) {
            boolean z11 = true;
            if (a10.c() >= 0.2d && a10.a() >= 0.2d) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (a10.c() <= 0.3d || a10.a() <= 0.5d) {
                z11 = false;
            }
            if ((a10.b() < 0.34d && !z11) || (a10.b() < 0.45d && z10)) {
                return new c(f.f46654d, 1000L);
            }
            return null;
        }
        return null;
    }

    @Override // cn.o
    public boolean a(o otherWorker) {
        Intrinsics.checkNotNullParameter(otherWorker, "otherWorker");
        if ((otherWorker instanceof a) && ((a) otherWorker).f46634d == this.f46634d) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f46632b, aVar.f46632b) && Intrinsics.areEqual(this.f46633c, aVar.f46633c) && this.f46634d == aVar.f46634d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f46632b.hashCode() * 31) + this.f46633c.hashCode()) * 31) + this.f46634d.hashCode();
    }

    @Override // cn.o
    public Flow run() {
        return g.l(g.v(new d(g.v(new e(null)), null)));
    }

    public String toString() {
        Context context = this.f46632b;
        f0 f0Var = this.f46633c;
        c4.e eVar = this.f46634d;
        return "GovernmentIdHintWorker(context=" + context + ", governmentIdFeed=" + f0Var + ", side=" + eVar + ")";
    }
}
