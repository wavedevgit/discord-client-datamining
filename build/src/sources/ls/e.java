package ls;

import hs.e0;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements q {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineContext f37548d;

    /* renamed from: e  reason: collision with root package name */
    public final int f37549e;

    /* renamed from: i  reason: collision with root package name */
    public final js.a f37550i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37551d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f37552e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f37553i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f37554o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f37553i = flowCollector;
            this.f37554o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f37553i, this.f37554o, continuation);
            aVar.f37552e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f37551d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f37553i;
                js.v m10 = this.f37554o.m((CoroutineScope) this.f37552e);
                this.f37551d = 1;
                if (ks.g.o(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37555d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f37556e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f37556e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f37555d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f37555d = 1;
                if (eVar.e((ProducerScope) this.f37556e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, js.a aVar) {
        this.f37548d = coroutineContext;
        this.f37549e = i10;
        this.f37550i = aVar;
    }

    static /* synthetic */ Object c(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    protected String a() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return c(this, flowCollector, continuation);
    }

    protected abstract Object e(ProducerScope producerScope, Continuation continuation);

    protected abstract e f(CoroutineContext coroutineContext, int i10, js.a aVar);

    @Override // ls.q
    public Flow g(CoroutineContext coroutineContext, int i10, js.a aVar) {
        CoroutineContext Z0 = coroutineContext.Z0(this.f37548d);
        if (aVar == js.a.f32204d) {
            int i11 = this.f37549e;
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
            aVar = this.f37550i;
        }
        if (Intrinsics.areEqual(Z0, this.f37548d) && i10 == this.f37549e && aVar == this.f37550i) {
            return this;
        }
        return f(Z0, i10, aVar);
    }

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f37549e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public js.v m(CoroutineScope coroutineScope) {
        return js.s.d(coroutineScope, this.f37548d, l(), this.f37550i, hs.c0.f27909i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String a10 = a();
        if (a10 != null) {
            arrayList.add(a10);
        }
        if (this.f37548d != kotlin.coroutines.e.f33148d) {
            arrayList.add("context=" + this.f37548d);
        }
        if (this.f37549e != -3) {
            arrayList.add("capacity=" + this.f37549e);
        }
        if (this.f37550i != js.a.f32204d) {
            arrayList.add("onBufferOverflow=" + this.f37550i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
