package m4;

import java.util.ArrayList;
import java.util.List;
import k4.m;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import m4.b;
import n4.h;
import o4.n;
import p4.u;
import rs.g;
import ss.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f36901a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f36902d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final CharSequence invoke(n4.c it) {
            Intrinsics.checkNotNullParameter(it, "it");
            String simpleName = it.getClass().getSimpleName();
            Intrinsics.checkNotNullExpressionValue(simpleName, "it.javaClass.simpleName");
            return simpleName;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow[] f36903d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow[] f36904d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(Flow[] flowArr) {
                super(0);
                this.f36904d = flowArr;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public final Object[] invoke() {
                return new m4.b[this.f36904d.length];
            }
        }

        /* renamed from: m4.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0498b extends k implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            int f36905d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f36906e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f36907i;

            public C0498b(Continuation continuation) {
                super(3, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                m4.b bVar;
                Object f10 = wr.b.f();
                int i10 = this.f36905d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    FlowCollector flowCollector = (FlowCollector) this.f36906e;
                    m4.b[] bVarArr = (m4.b[]) ((Object[]) this.f36907i);
                    int length = bVarArr.length;
                    int i11 = 0;
                    while (true) {
                        if (i11 < length) {
                            bVar = bVarArr[i11];
                            if (!Intrinsics.areEqual(bVar, b.a.f36895a)) {
                                break;
                            }
                            i11++;
                        } else {
                            bVar = null;
                            break;
                        }
                    }
                    if (bVar == null) {
                        bVar = b.a.f36895a;
                    }
                    this.f36905d = 1;
                    if (flowCollector.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: j */
            public final Object invoke(FlowCollector flowCollector, Object[] objArr, Continuation continuation) {
                C0498b c0498b = new C0498b(continuation);
                c0498b.f36906e = flowCollector;
                c0498b.f36907i = objArr;
                return c0498b.invokeSuspend(Unit.f32056a);
            }
        }

        public b(Flow[] flowArr) {
            this.f36903d = flowArr;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Flow[] flowArr = this.f36903d;
            Object a10 = l.a(flowCollector, flowArr, new a(flowArr), new C0498b(null), continuation);
            if (a10 == wr.b.f()) {
                return a10;
            }
            return Unit.f32056a;
        }
    }

    public e(List controllers) {
        Intrinsics.checkNotNullParameter(controllers, "controllers");
        this.f36901a = controllers;
    }

    public final boolean a(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        ArrayList arrayList = new ArrayList();
        for (Object obj : this.f36901a) {
            if (((n4.c) obj).e(workSpec)) {
                arrayList.add(obj);
            }
        }
        if (!arrayList.isEmpty()) {
            m e10 = m.e();
            String a10 = f.a();
            e10.a(a10, "Work " + workSpec.f43733a + " constrained by " + CollectionsKt.x0(arrayList, null, null, null, 0, null, a.f36902d, 31, null));
        }
        return arrayList.isEmpty();
    }

    public final Flow b(u spec) {
        Intrinsics.checkNotNullParameter(spec, "spec");
        ArrayList<n4.c> arrayList = new ArrayList();
        for (Object obj : this.f36901a) {
            if (((n4.c) obj).c(spec)) {
                arrayList.add(obj);
            }
        }
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (n4.c cVar : arrayList) {
            arrayList2.add(cVar.f());
        }
        return g.l(new b((Flow[]) CollectionsKt.h1(arrayList2).toArray(new Flow[0])));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public e(n trackers) {
        this(CollectionsKt.o(new n4.a(trackers.a()), new n4.b(trackers.b()), new h(trackers.d()), new n4.d(trackers.c()), new n4.g(trackers.c()), new n4.f(trackers.c()), new n4.e(trackers.c())));
        Intrinsics.checkNotNullParameter(trackers, "trackers");
    }
}
