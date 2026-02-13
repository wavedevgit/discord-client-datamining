package ct;

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
import ys.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements q {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineContext f21031d;

    /* renamed from: e  reason: collision with root package name */
    public final int f21032e;

    /* renamed from: i  reason: collision with root package name */
    public final at.a f21033i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21034d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f21035e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f21036i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f21037o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f21036i = flowCollector;
            this.f21037o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f21036i, this.f21037o, continuation);
            aVar.f21035e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f21034d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f21036i;
                at.v m10 = this.f21037o.m((CoroutineScope) this.f21035e);
                this.f21034d = 1;
                if (bt.g.o(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21038d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f21039e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f21039e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f21038d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f21038d = 1;
                if (eVar.e((ProducerScope) this.f21039e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, at.a aVar) {
        this.f21031d = coroutineContext;
        this.f21032e = i10;
        this.f21033i = aVar;
    }

    static /* synthetic */ Object c(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f32556a;
    }

    protected String a() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return c(this, flowCollector, continuation);
    }

    protected abstract Object e(ProducerScope producerScope, Continuation continuation);

    protected abstract e f(CoroutineContext coroutineContext, int i10, at.a aVar);

    @Override // ct.q
    public Flow g(CoroutineContext coroutineContext, int i10, at.a aVar) {
        CoroutineContext O0 = coroutineContext.O0(this.f21031d);
        if (aVar == at.a.f6104d) {
            int i11 = this.f21032e;
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
            aVar = this.f21033i;
        }
        if (Intrinsics.areEqual(O0, this.f21031d) && i10 == this.f21032e && aVar == this.f21033i) {
            return this;
        }
        return f(O0, i10, aVar);
    }

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f21032e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public at.v m(CoroutineScope coroutineScope) {
        return at.s.d(coroutineScope, this.f21031d, l(), this.f21033i, ys.c0.f56353i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String a10 = a();
        if (a10 != null) {
            arrayList.add(a10);
        }
        if (this.f21031d != kotlin.coroutines.e.f32630d) {
            arrayList.add("context=" + this.f21031d);
        }
        if (this.f21032e != -3) {
            arrayList.add("capacity=" + this.f21032e);
        }
        if (this.f21033i != at.a.f6104d) {
            arrayList.add("onBufferOverflow=" + this.f21033i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
