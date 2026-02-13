package m4;

import bt.g;
import ct.l;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f36704a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f36705d = new a();

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
        final /* synthetic */ Flow[] f36706d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Flow[] f36707d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(Flow[] flowArr) {
                super(0);
                this.f36707d = flowArr;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public final Object[] invoke() {
                return new m4.b[this.f36707d.length];
            }
        }

        /* renamed from: m4.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0512b extends k implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            int f36708d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f36709e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f36710i;

            public C0512b(Continuation continuation) {
                super(3, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                m4.b bVar;
                Object f10 = gs.b.f();
                int i10 = this.f36708d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    FlowCollector flowCollector = (FlowCollector) this.f36709e;
                    m4.b[] bVarArr = (m4.b[]) ((Object[]) this.f36710i);
                    int length = bVarArr.length;
                    int i11 = 0;
                    while (true) {
                        if (i11 < length) {
                            bVar = bVarArr[i11];
                            if (!Intrinsics.areEqual(bVar, b.a.f36698a)) {
                                break;
                            }
                            i11++;
                        } else {
                            bVar = null;
                            break;
                        }
                    }
                    if (bVar == null) {
                        bVar = b.a.f36698a;
                    }
                    this.f36708d = 1;
                    if (flowCollector.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32556a;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: j */
            public final Object invoke(FlowCollector flowCollector, Object[] objArr, Continuation continuation) {
                C0512b c0512b = new C0512b(continuation);
                c0512b.f36709e = flowCollector;
                c0512b.f36710i = objArr;
                return c0512b.invokeSuspend(Unit.f32556a);
            }
        }

        public b(Flow[] flowArr) {
            this.f36706d = flowArr;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Flow[] flowArr = this.f36706d;
            Object a10 = l.a(flowCollector, flowArr, new a(flowArr), new C0512b(null), continuation);
            if (a10 == gs.b.f()) {
                return a10;
            }
            return Unit.f32556a;
        }
    }

    public e(List controllers) {
        Intrinsics.checkNotNullParameter(controllers, "controllers");
        this.f36704a = controllers;
    }

    public final boolean a(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        ArrayList arrayList = new ArrayList();
        for (Object obj : this.f36704a) {
            if (((n4.c) obj).e(workSpec)) {
                arrayList.add(obj);
            }
        }
        if (!arrayList.isEmpty()) {
            m e10 = m.e();
            String a10 = f.a();
            e10.a(a10, "Work " + workSpec.f42015a + " constrained by " + CollectionsKt.x0(arrayList, null, null, null, 0, null, a.f36705d, 31, null));
        }
        return arrayList.isEmpty();
    }

    public final Flow b(u spec) {
        Intrinsics.checkNotNullParameter(spec, "spec");
        ArrayList<n4.c> arrayList = new ArrayList();
        for (Object obj : this.f36704a) {
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
