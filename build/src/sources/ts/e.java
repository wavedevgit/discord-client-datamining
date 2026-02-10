package ts;

import java.util.ArrayList;
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
import ps.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements q {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineContext f50924d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50925e;

    /* renamed from: i  reason: collision with root package name */
    public final rs.a f50926i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50927d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f50928e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50929i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f50930o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f50929i = flowCollector;
            this.f50930o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50929i, this.f50930o, continuation);
            aVar.f50928e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f50927d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f50929i;
                rs.v m10 = this.f50930o.m((CoroutineScope) this.f50928e);
                this.f50927d = 1;
                if (ss.g.p(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50931d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50932e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f50932e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f50931d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f50931d = 1;
                if (eVar.e((ProducerScope) this.f50932e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, rs.a aVar) {
        this.f50924d = coroutineContext;
        this.f50925e = i10;
        this.f50926i = aVar;
    }

    static /* synthetic */ Object c(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    protected String a() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return c(this, flowCollector, continuation);
    }

    protected abstract Object e(ProducerScope producerScope, Continuation continuation);

    protected abstract e f(CoroutineContext coroutineContext, int i10, rs.a aVar);

    @Override // ts.q
    public Flow h(CoroutineContext coroutineContext, int i10, rs.a aVar) {
        CoroutineContext V0 = coroutineContext.V0(this.f50924d);
        if (aVar == rs.a.f49232d) {
            int i11 = this.f50925e;
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
            aVar = this.f50926i;
        }
        if (Intrinsics.areEqual(V0, this.f50924d) && i10 == this.f50925e && aVar == this.f50926i) {
            return this;
        }
        return f(V0, i10, aVar);
    }

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f50925e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public rs.v m(CoroutineScope coroutineScope) {
        return rs.s.e(coroutineScope, this.f50924d, l(), this.f50926i, ps.c0.f44498i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String a10 = a();
        if (a10 != null) {
            arrayList.add(a10);
        }
        if (this.f50924d != kotlin.coroutines.e.f31839d) {
            arrayList.add("context=" + this.f50924d);
        }
        if (this.f50925e != -3) {
            arrayList.add("capacity=" + this.f50925e);
        }
        if (this.f50926i != rs.a.f49232d) {
            arrayList.add("onBufferOverflow=" + this.f50926i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
