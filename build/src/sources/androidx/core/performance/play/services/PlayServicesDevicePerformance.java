package androidx.core.performance.play.services;

import android.content.Context;
import android.util.Log;
import androidx.core.performance.play.services.PlayServicesDevicePerformance;
import com.google.android.gms.tasks.Task;
import gs.h;
import gs.i;
import ir.l;
import java.io.File;
import js.g;
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
import z2.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PlayServicesDevicePerformance {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3169a;

    /* renamed from: b  reason: collision with root package name */
    private final f f3170b;

    /* renamed from: c  reason: collision with root package name */
    private final String f3171c;

    /* renamed from: d  reason: collision with root package name */
    private final x1.b f3172d;

    /* renamed from: e  reason: collision with root package name */
    private final d.a f3173e;

    /* renamed from: f  reason: collision with root package name */
    private final Lazy f3174f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Context f3175d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Context context) {
            super(0);
            this.f3175d = context;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final File invoke() {
            return y2.a.a(this.f3175d, "media_performance_class");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f3176d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ PlayServicesDevicePerformance f3177e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f3178d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ PlayServicesDevicePerformance f3179e;

            /* renamed from: androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0034a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f3180d;

                /* renamed from: e  reason: collision with root package name */
                int f3181e;

                public C0034a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f3180d = obj;
                    this.f3181e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, PlayServicesDevicePerformance playServicesDevicePerformance) {
                this.f3178d = flowCollector;
                this.f3179e = playServicesDevicePerformance;
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
                    int r1 = r0.f3181e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f3181e = r1
                    goto L18
                L13:
                    androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a r0 = new androidx.core.performance.play.services.PlayServicesDevicePerformance$b$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f3180d
                    java.lang.Object r1 = or.b.f()
                    int r2 = r0.f3181e
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
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f3178d
                    z2.d r5 = (z2.d) r5
                    androidx.core.performance.play.services.PlayServicesDevicePerformance r2 = r4.f3179e
                    z2.d$a r2 = androidx.core.performance.play.services.PlayServicesDevicePerformance.d(r2)
                    java.lang.Object r5 = r5.b(r2)
                    r0.f3181e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L4b
                    return r1
                L4b:
                    kotlin.Unit r5 = kotlin.Unit.f33282a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: androidx.core.performance.play.services.PlayServicesDevicePerformance.b.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public b(Flow flow, PlayServicesDevicePerformance playServicesDevicePerformance) {
            this.f3176d = flow;
            this.f3177e = playServicesDevicePerformance;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f3176d.collect(new a(flowCollector, this.f3177e), continuation);
            if (collect == or.b.f()) {
                return collect;
            }
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class c extends Lambda implements Function0 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f3184d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ PlayServicesDevicePerformance f3185e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(PlayServicesDevicePerformance playServicesDevicePerformance, Continuation continuation) {
                super(2, continuation);
                this.f3185e = playServicesDevicePerformance;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f3185e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                int i10;
                Object f10 = or.b.f();
                int i11 = this.f3184d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow i12 = this.f3185e.i();
                    this.f3184d = 1;
                    obj = g.s(i12, this);
                    if (obj == f10) {
                        return f10;
                    }
                }
                Integer num = (Integer) obj;
                String str = this.f3185e.f3171c;
                Log.v(str, "Stored mpc is " + num);
                String str2 = this.f3185e.f3171c;
                Log.v(str2, "Default mpc is " + this.f3185e.f3172d.b());
                if (num != null) {
                    i10 = num.intValue();
                } else {
                    i10 = 0;
                }
                int max = Math.max(i10, this.f3185e.f3172d.b());
                String str3 = this.f3185e.f3171c;
                Log.v(str3, "Mpc value used " + max);
                return kotlin.coroutines.jvm.internal.b.e(max);
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
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
        int f3186d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f3187e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f3189o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(int i10, Continuation continuation) {
            super(2, continuation);
            this.f3189o = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(this.f3189o, continuation);
            dVar.f3187e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f3186d == 0) {
                kotlin.c.b(obj);
                ((z2.a) this.f3187e).i(PlayServicesDevicePerformance.this.f3173e, kotlin.coroutines.jvm.internal.b.e(this.f3189o));
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(z2.a aVar, Continuation continuation) {
            return ((d) create(aVar, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends Lambda implements Function1 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f3191d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f3192e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ PlayServicesDevicePerformance f3193i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Integer f3194o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: androidx.core.performance.play.services.PlayServicesDevicePerformance$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0035a extends k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f3195d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ PlayServicesDevicePerformance f3196e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ int f3197i;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0035a(PlayServicesDevicePerformance playServicesDevicePerformance, int i10, Continuation continuation) {
                    super(2, continuation);
                    this.f3196e = playServicesDevicePerformance;
                    this.f3197i = i10;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0035a(this.f3196e, this.f3197i, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = or.b.f();
                    int i10 = this.f3195d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        PlayServicesDevicePerformance playServicesDevicePerformance = this.f3196e;
                        int i11 = this.f3197i;
                        this.f3195d = 1;
                        if (playServicesDevicePerformance.j(i11, this) == f10) {
                            return f10;
                        }
                    }
                    String str = this.f3196e.f3171c;
                    Log.v(str, "Saved mediaPerformanceClass " + this.f3197i);
                    return Unit.f33282a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0035a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(PlayServicesDevicePerformance playServicesDevicePerformance, Integer num, Continuation continuation) {
                super(2, continuation);
                this.f3193i = playServicesDevicePerformance;
                this.f3194o = num;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(this.f3193i, this.f3194o, continuation);
                aVar.f3192e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f3191d == 0) {
                    kotlin.c.b(obj);
                    CoroutineScope coroutineScope = (CoroutineScope) this.f3192e;
                    String str = this.f3193i.f3171c;
                    Log.v(str, "Got mediaPerformanceClass " + this.f3194o);
                    Integer result = this.f3194o;
                    Intrinsics.checkNotNullExpressionValue(result, "result");
                    i.d(coroutineScope, null, null, new C0035a(this.f3193i, Math.max(result.intValue(), this.f3193i.f3172d.b()), null), 3, null);
                    return Unit.f33282a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
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
            return Unit.f33282a;
        }
    }

    public PlayServicesDevicePerformance(Context context, qf.b client, f performanceStore) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(performanceStore, "performanceStore");
        this.f3169a = context;
        this.f3170b = performanceStore;
        this.f3171c = "PlayServicesDevicePerformance";
        this.f3172d = new x1.b();
        this.f3173e = z2.f.d("mpc_value");
        this.f3174f = l.b(new c());
        Log.v("PlayServicesDevicePerformance", "Getting mediaPerformanceClass from com.google.android.gms.deviceperformance.DevicePerformanceClient");
        k(client);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow i() {
        return new b(this.f3170b.getData(), this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object j(int i10, Continuation continuation) {
        Object a10 = z2.g.a(this.f3170b, new d(i10, null), continuation);
        if (a10 == or.b.f()) {
            return a10;
        }
        return Unit.f33282a;
    }

    private final void k(qf.b bVar) {
        Task a10 = bVar.a();
        final e eVar = new e();
        a10.g(new wg.g() { // from class: y1.a
            @Override // wg.g
            public final void onSuccess(Object obj) {
                PlayServicesDevicePerformance.l(Function1.this, obj);
            }
        }).e(new wg.f() { // from class: y1.b
            @Override // wg.f
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
        if (e10 instanceof ef.b) {
            Log.e(this$0.f3171c, "Error saving mediaPerformanceClass", e10);
        } else if (e10 instanceof IllegalStateException) {
            Log.e(this$0.f3171c, "Error saving mediaPerformanceClass", e10);
        }
    }

    public int h() {
        return ((Number) this.f3174f.getValue()).intValue();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public PlayServicesDevicePerformance(Context context) {
        this(context, qf.a.f47389a.a(context), z2.c.b(z2.c.f55277a, null, null, null, new a(context), 7, null));
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
