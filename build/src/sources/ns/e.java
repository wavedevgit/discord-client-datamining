package ns;

import java.util.ArrayList;
import js.e0;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.channels.ProducerScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements q {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineContext f41948d;

    /* renamed from: e  reason: collision with root package name */
    public final int f41949e;

    /* renamed from: i  reason: collision with root package name */
    public final ls.a f41950i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41951d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f41952e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f41953i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f41954o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f41953i = flowCollector;
            this.f41954o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f41953i, this.f41954o, continuation);
            aVar.f41952e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f41951d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f41953i;
                ls.v m10 = this.f41954o.m((CoroutineScope) this.f41952e);
                this.f41951d = 1;
                if (ms.g.p(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41955d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f41956e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f41956e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f41955d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f41955d = 1;
                if (eVar.f((ProducerScope) this.f41956e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        this.f41948d = coroutineContext;
        this.f41949e = i10;
        this.f41950i = aVar;
    }

    static /* synthetic */ Object c(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    protected String a() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return c(this, flowCollector, continuation);
    }

    @Override // ns.q
    public Flow e(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        CoroutineContext V0 = coroutineContext.V0(this.f41948d);
        if (aVar == ls.a.f37142d) {
            int i11 = this.f41949e;
            if (i11 != -3) {
                if (i10 != -3) {
                    if (i11 != -2) {
                        if (i10 != -2) {
                            i10 += i11;
                            if (i10 < 0) {
                                i10 = Integer.MAX_VALUE;
                            }
                        }
                    }
                }
                i10 = i11;
            }
            aVar = this.f41950i;
        }
        if (Intrinsics.areEqual(V0, this.f41948d) && i10 == this.f41949e && aVar == this.f41950i) {
            return this;
        }
        return g(V0, i10, aVar);
    }

    protected abstract Object f(ProducerScope producerScope, Continuation continuation);

    protected abstract e g(CoroutineContext coroutineContext, int i10, ls.a aVar);

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f41949e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public ls.v m(CoroutineScope coroutineScope) {
        return ls.s.e(coroutineScope, this.f41948d, l(), this.f41950i, js.c0.f31949i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String a10 = a();
        if (a10 != null) {
            arrayList.add(a10);
        }
        if (this.f41948d != kotlin.coroutines.e.f32538d) {
            arrayList.add("context=" + this.f41948d);
        }
        if (this.f41949e != -3) {
            arrayList.add("capacity=" + this.f41949e);
        }
        if (this.f41950i != ls.a.f37142d) {
            arrayList.add("onBufferOverflow=" + this.f41950i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
