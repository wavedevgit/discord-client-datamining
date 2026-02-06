package ss;

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
import os.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements q {

    /* renamed from: d  reason: collision with root package name */
    public final CoroutineContext f50032d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50033e;

    /* renamed from: i  reason: collision with root package name */
    public final qs.a f50034i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50035d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f50036e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50037i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f50038o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f50037i = flowCollector;
            this.f50038o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50037i, this.f50038o, continuation);
            aVar.f50036e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f50035d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f50037i;
                qs.v m10 = this.f50038o.m((CoroutineScope) this.f50036e);
                this.f50035d = 1;
                if (rs.g.p(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50039d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50040e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f50040e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f50039d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f50039d = 1;
                if (eVar.e((ProducerScope) this.f50040e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        this.f50032d = coroutineContext;
        this.f50033e = i10;
        this.f50034i = aVar;
    }

    static /* synthetic */ Object c(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32008a;
    }

    protected String a() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return c(this, flowCollector, continuation);
    }

    protected abstract Object e(ProducerScope producerScope, Continuation continuation);

    @Override // ss.q
    public Flow f(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        CoroutineContext Y0 = coroutineContext.Y0(this.f50032d);
        if (aVar == qs.a.f48066d) {
            int i11 = this.f50033e;
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
            aVar = this.f50034i;
        }
        if (Intrinsics.areEqual(Y0, this.f50032d) && i10 == this.f50033e && aVar == this.f50034i) {
            return this;
        }
        return h(Y0, i10, aVar);
    }

    protected abstract e h(CoroutineContext coroutineContext, int i10, qs.a aVar);

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f50033e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public qs.v m(CoroutineScope coroutineScope) {
        return qs.s.e(coroutineScope, this.f50032d, l(), this.f50034i, os.c0.f43493i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String a10 = a();
        if (a10 != null) {
            arrayList.add(a10);
        }
        if (this.f50032d != kotlin.coroutines.e.f32082d) {
            arrayList.add("context=" + this.f50032d);
        }
        if (this.f50033e != -3) {
            arrayList.add("capacity=" + this.f50033e);
        }
        if (this.f50034i != qs.a.f48066d) {
            arrayList.add("onBufferOverflow=" + this.f50034i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
