package androidx.core.performance.play.services;

import android.content.Context;
import android.util.Log;
import androidx.core.performance.play.services.PlayServicesDevicePerformance;
import as.l;
import bt.g;
import com.google.android.gms.tasks.Task;
import java.io.File;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import w2.f;
import ys.h;
import ys.i;
import z2.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PlayServicesDevicePerformance {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3323a;

    /* renamed from: b  reason: collision with root package name */
    private final f f3324b;

    /* renamed from: c  reason: collision with root package name */
    private final String f3325c;

    /* renamed from: d  reason: collision with root package name */
    private final x1.b f3326d;

    /* renamed from: e  reason: collision with root package name */
    private final d.a f3327e;

    /* renamed from: f  reason: collision with root package name */
    private final Lazy f3328f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Context f3329d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Context context) {
            super(0);
            this.f3329d = context;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final File invoke() {
            return y2.a.a(this.f3329d, "media_performance_class");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f3330d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PlayServicesDevicePerformance f3331e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f3332d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ PlayServicesDevicePerformance f3333e;

            /* renamed from: androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0034a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f3334d;

                /* renamed from: e  reason: collision with root package name */
                int f3335e;

                public C0034a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f3334d = obj;
                    this.f3335e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, PlayServicesDevicePerformance playServicesDevicePerformance) {
                this.f3332d = flowCollector;
                this.f3333e = playServicesDevicePerformance;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof androidx.core.performance.play.services.PlayServicesDevicePerformance.b.a.C0034a
                    if (r0 == 0) goto L13
                    r0 = r6
                    androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a r0 = (androidx.core.performance.play.services.PlayServicesDevicePerformance.b.a.C0034a) r0
                    int r1 = r0.f3335e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f3335e = r1
                    goto L18
                L13:
                    androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a r0 = new androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f3334d
                    java.lang.Object r1 = gs.b.f()
                    int r2 = r0.f3335e
                    r3 = 1
                    if (r2 == 0) goto L31
                    if (r2 != r3) goto L29
                    kotlin.c.b(r6)
                    goto L4b
                L29:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L31:
                    kotlin.c.b(r6)
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f3332d
                    z2.d r5 = (z2.d) r5
                    androidx.core.performance.play.services.PlayServicesDevicePerformance r2 = r4.f3333e
                    z2.d$a r2 = androidx.core.performance.play.services.PlayServicesDevicePerformance.d(r2)
                    java.lang.Object r5 = r5.b(r2)
                    r0.f3335e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L4b
                    return r1
                L4b:
                    kotlin.Unit r5 = kotlin.Unit.f32556a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: androidx.core.performance.play.services.PlayServicesDevicePerformance.b.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public b(Flow flow, PlayServicesDevicePerformance playServicesDevicePerformance) {
            this.f3330d = flow;
            this.f3331e = playServicesDevicePerformance;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f3330d.collect(new a(flowCollector, this.f3331e), continuation);
            if (collect == gs.b.f()) {
                return collect;
            }
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class c extends Lambda implements Function0 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f3338d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ PlayServicesDevicePerformance f3339e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(PlayServicesDevicePerformance playServicesDevicePerformance, Continuation continuation) {
                super(2, continuation);
                this.f3339e = playServicesDevicePerformance;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f3339e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                int i10;
                Object f10 = gs.b.f();
                int i11 = this.f3338d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow i12 = this.f3339e.i();
                    this.f3338d = 1;
                    obj = g.s(i12, this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                Integer num = (Integer) obj;
                String str = this.f3339e.f3325c;
                Log.v(str, "Stored mpc is " + num);
                String str2 = this.f3339e.f3325c;
                Log.v(str2, "Default mpc is " + this.f3339e.f3326d.b());
                if (num != null) {
                    i10 = num.intValue();
                } else {
                    i10 = 0;
                }
                int max = Math.max(i10, this.f3339e.f3326d.b());
                String str3 = this.f3339e.f3325c;
                Log.v(str3, "Mpc value used " + max);
                return kotlin.coroutines.jvm.internal.b.e(max);
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Integer invoke() {
            Object b10;
            b10 = h.b(null, new a(PlayServicesDevicePerformance.this, null), 1, null);
            return (Integer) b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f3340d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f3341e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f3343o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(int i10, Continuation continuation) {
            super(2, continuation);
            this.f3343o = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(this.f3343o, continuation);
            dVar.f3341e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f3340d == 0) {
                kotlin.c.b(obj);
                ((z2.a) this.f3341e).i(PlayServicesDevicePerformance.this.f3327e, kotlin.coroutines.jvm.internal.b.e(this.f3343o));
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(z2.a aVar, Continuation continuation) {
            return ((d) create(aVar, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends Lambda implements Function1 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f3345d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f3346e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ PlayServicesDevicePerformance f3347i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Integer f3348o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: androidx.core.performance.play.services.PlayServicesDevicePerformance$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0035a extends k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f3349d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ PlayServicesDevicePerformance f3350e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ int f3351i;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0035a(PlayServicesDevicePerformance playServicesDevicePerformance, int i10, Continuation continuation) {
                    super(2, continuation);
                    this.f3350e = playServicesDevicePerformance;
                    this.f3351i = i10;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0035a(this.f3350e, this.f3351i, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = gs.b.f();
                    int i10 = this.f3349d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        PlayServicesDevicePerformance playServicesDevicePerformance = this.f3350e;
                        int i11 = this.f3351i;
                        this.f3349d = 1;
                        if (playServicesDevicePerformance.j(i11, this) == f10) {
                            return f10;
                        }
                    }
                    String str = this.f3350e.f3325c;
                    Log.v(str, "Saved mediaPerformanceClass " + this.f3351i);
                    return Unit.f32556a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0035a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(PlayServicesDevicePerformance playServicesDevicePerformance, Integer num, Continuation continuation) {
                super(2, continuation);
                this.f3347i = playServicesDevicePerformance;
                this.f3348o = num;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(this.f3347i, this.f3348o, continuation);
                aVar.f3346e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f3345d == 0) {
                    kotlin.c.b(obj);
                    CoroutineScope coroutineScope = (CoroutineScope) this.f3346e;
                    String str = this.f3347i.f3325c;
                    Log.v(str, "Got mediaPerformanceClass " + this.f3348o);
                    Integer result = this.f3348o;
                    Intrinsics.checkNotNullExpressionValue(result, "result");
                    i.d(coroutineScope, null, null, new C0035a(this.f3347i, Math.max(result.intValue(), this.f3347i.f3326d.b()), null), 3, null);
                    return Unit.f32556a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        e() {
            super(1);
        }

        public final void a(Integer num) {
            h.b(null, new a(PlayServicesDevicePerformance.this, num, null), 1, null);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Integer) obj);
            return Unit.f32556a;
        }
    }

    public PlayServicesDevicePerformance(Context context, rf.b client, f performanceStore) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(performanceStore, "performanceStore");
        this.f3323a = context;
        this.f3324b = performanceStore;
        this.f3325c = "PlayServicesDevicePerformance";
        this.f3326d = new x1.b();
        this.f3327e = z2.f.d("mpc_value");
        this.f3328f = l.b(new c());
        Log.v("PlayServicesDevicePerformance", "Getting mediaPerformanceClass from com.google.android.gms.deviceperformance.DevicePerformanceClient");
        k(client);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow i() {
        return new b(this.f3324b.getData(), this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object j(int i10, Continuation continuation) {
        Object a10 = z2.g.a(this.f3324b, new d(i10, null), continuation);
        if (a10 == gs.b.f()) {
            return a10;
        }
        return Unit.f32556a;
    }

    private final void k(rf.b bVar) {
        Task a10 = bVar.a();
        final e eVar = new e();
        a10.g(new zg.g() { // from class: y1.a
            @Override // zg.g
            public final void onSuccess(Object obj) {
                PlayServicesDevicePerformance.l(Function1.this, obj);
            }
        }).e(new zg.f() { // from class: y1.b
            @Override // zg.f
            public final void onFailure(Exception exc) {
                PlayServicesDevicePerformance.m(PlayServicesDevicePerformance.this, exc);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(Function1 tmp0, Object obj) {
        Intrinsics.checkNotNullParameter(tmp0, "$tmp0");
        tmp0.invoke(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(PlayServicesDevicePerformance this$0, Exception e10) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(e10, "e");
        if (e10 instanceof ff.b) {
            Log.e(this$0.f3325c, "Error saving mediaPerformanceClass", e10);
        } else if (e10 instanceof IllegalStateException) {
            Log.e(this$0.f3325c, "Error saving mediaPerformanceClass", e10);
        }
    }

    public int h() {
        return ((Number) this.f3328f.getValue()).intValue();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PlayServicesDevicePerformance(Context context) {
        this(context, rf.a.f47111a.a(context), z2.c.b(z2.c.f56632a, null, null, null, new a(context), 7, null));
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
