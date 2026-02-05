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
import ps.g;
import qs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f37271a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f37272d = new a();

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
        final /* synthetic */ Flow[] f37273d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow[] f37274d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(Flow[] flowArr) {
                super(0);
                this.f37274d = flowArr;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public final Object[] invoke() {
                return new m4.b[this.f37274d.length];
            }
        }

        /* renamed from: m4.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0494b extends k implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            int f37275d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f37276e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f37277i;

            public C0494b(Continuation continuation) {
                super(3, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                m4.b bVar;
                Object f10 = ur.b.f();
                int i10 = this.f37275d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    FlowCollector flowCollector = (FlowCollector) this.f37276e;
                    m4.b[] bVarArr = (m4.b[]) ((Object[]) this.f37277i);
                    int length = bVarArr.length;
                    int i11 = 0;
                    while (true) {
                        if (i11 < length) {
                            bVar = bVarArr[i11];
                            if (!Intrinsics.areEqual(bVar, b.a.f37265a)) {
                                break;
                            }
                            i11++;
                        } else {
                            bVar = null;
                            break;
                        }
                    }
                    if (bVar == null) {
                        bVar = b.a.f37265a;
                    }
                    this.f37275d = 1;
                    if (flowCollector.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: j */
            public final Object invoke(FlowCollector flowCollector, Object[] objArr, Continuation continuation) {
                C0494b c0494b = new C0494b(continuation);
                c0494b.f37276e = flowCollector;
                c0494b.f37277i = objArr;
                return c0494b.invokeSuspend(Unit.f31988a);
            }
        }

        public b(Flow[] flowArr) {
            this.f37273d = flowArr;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Flow[] flowArr = this.f37273d;
            Object a10 = l.a(flowCollector, flowArr, new a(flowArr), new C0494b(null), continuation);
            if (a10 == ur.b.f()) {
                return a10;
            }
            return Unit.f31988a;
        }
    }

    public e(List controllers) {
        Intrinsics.checkNotNullParameter(controllers, "controllers");
        this.f37271a = controllers;
    }

    public final boolean a(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        ArrayList arrayList = new ArrayList();
        for (Object obj : this.f37271a) {
            if (((n4.c) obj).e(workSpec)) {
                arrayList.add(obj);
            }
        }
        if (!arrayList.isEmpty()) {
            m e10 = m.e();
            String a10 = f.a();
            e10.a(a10, "Work " + workSpec.f44888a + " constrained by " + CollectionsKt.x0(arrayList, null, null, null, 0, null, a.f37272d, 31, null));
        }
        return arrayList.isEmpty();
    }

    public final Flow b(u spec) {
        Intrinsics.checkNotNullParameter(spec, "spec");
        ArrayList<n4.c> arrayList = new ArrayList();
        for (Object obj : this.f37271a) {
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
