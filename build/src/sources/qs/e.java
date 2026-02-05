package qs;

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
import ms.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements q {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineContext f48008d;

    /* renamed from: e  reason: collision with root package name */
    public final int f48009e;

    /* renamed from: i  reason: collision with root package name */
    public final os.a f48010i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48011d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f48012e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f48013i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f48014o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f48013i = flowCollector;
            this.f48014o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f48013i, this.f48014o, continuation);
            aVar.f48012e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f48011d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f48013i;
                os.v m10 = this.f48014o.m((CoroutineScope) this.f48012e);
                this.f48011d = 1;
                if (ps.g.p(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48015d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f48016e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f48016e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f48015d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f48015d = 1;
                if (eVar.e((ProducerScope) this.f48016e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, os.a aVar) {
        this.f48008d = coroutineContext;
        this.f48009e = i10;
        this.f48010i = aVar;
    }

    static /* synthetic */ Object c(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == ur.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    protected String a() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return c(this, flowCollector, continuation);
    }

    protected abstract Object e(ProducerScope producerScope, Continuation continuation);

    @Override // qs.q
    public Flow f(CoroutineContext coroutineContext, int i10, os.a aVar) {
        CoroutineContext V0 = coroutineContext.V0(this.f48008d);
        if (aVar == os.a.f44350d) {
            int i11 = this.f48009e;
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
            aVar = this.f48010i;
        }
        if (Intrinsics.areEqual(V0, this.f48008d) && i10 == this.f48009e && aVar == this.f48010i) {
            return this;
        }
        return g(V0, i10, aVar);
    }

    protected abstract e g(CoroutineContext coroutineContext, int i10, os.a aVar);

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f48009e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public os.v m(CoroutineScope coroutineScope) {
        return os.s.e(coroutineScope, this.f48008d, l(), this.f48010i, ms.c0.f38911i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String a10 = a();
        if (a10 != null) {
            arrayList.add(a10);
        }
        if (this.f48008d != kotlin.coroutines.e.f32062d) {
            arrayList.add("context=" + this.f48008d);
        }
        if (this.f48009e != -3) {
            arrayList.add("capacity=" + this.f48009e);
        }
        if (this.f48010i != os.a.f44350d) {
            arrayList.add("onBufferOverflow=" + this.f48010i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
