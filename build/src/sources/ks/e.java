package ks;

import gs.e0;
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
    public final CoroutineContext f36466d;

    /* renamed from: e  reason: collision with root package name */
    public final int f36467e;

    /* renamed from: i  reason: collision with root package name */
    public final is.a f36468i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36469d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f36470e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f36471i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ e f36472o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, e eVar, Continuation continuation) {
            super(2, continuation);
            this.f36471i = flowCollector;
            this.f36472o = eVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f36471i, this.f36472o, continuation);
            aVar.f36470e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f36469d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                FlowCollector flowCollector = this.f36471i;
                is.v m10 = this.f36472o.m((CoroutineScope) this.f36470e);
                this.f36469d = 1;
                if (js.g.o(flowCollector, m10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36473d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f36474e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f36474e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f36473d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e eVar = e.this;
                this.f36473d = 1;
                if (eVar.f((ProducerScope) this.f36474e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((b) create(producerScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public e(CoroutineContext coroutineContext, int i10, is.a aVar) {
        this.f36466d = coroutineContext;
        this.f36467e = i10;
        this.f36468i = aVar;
    }

    static /* synthetic */ Object d(e eVar, FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, eVar, null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33298a;
    }

    @Override // ks.q
    public Flow a(CoroutineContext coroutineContext, int i10, is.a aVar) {
        CoroutineContext U0 = coroutineContext.U0(this.f36466d);
        if (aVar == is.a.f31141d) {
            int i11 = this.f36467e;
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
            aVar = this.f36468i;
        }
        if (Intrinsics.areEqual(U0, this.f36466d) && i10 == this.f36467e && aVar == this.f36468i) {
            return this;
        }
        return g(U0, i10, aVar);
    }

    protected String c() {
        return null;
    }

    @Override // kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return d(this, flowCollector, continuation);
    }

    protected abstract Object f(ProducerScope producerScope, Continuation continuation);

    protected abstract e g(CoroutineContext coroutineContext, int i10, is.a aVar);

    public Flow j() {
        return null;
    }

    public final Function2 k() {
        return new b(null);
    }

    public final int l() {
        int i10 = this.f36467e;
        if (i10 == -3) {
            return -2;
        }
        return i10;
    }

    public is.v m(CoroutineScope coroutineScope) {
        return is.s.d(coroutineScope, this.f36466d, l(), this.f36468i, gs.c0.f27162i, null, k(), 16, null);
    }

    public String toString() {
        ArrayList arrayList = new ArrayList(4);
        String c10 = c();
        if (c10 != null) {
            arrayList.add(c10);
        }
        if (this.f36466d != kotlin.coroutines.e.f33372d) {
            arrayList.add("context=" + this.f36466d);
        }
        if (this.f36467e != -3) {
            arrayList.add("capacity=" + this.f36467e);
        }
        if (this.f36468i != is.a.f31141d) {
            arrayList.add("onBufferOverflow=" + this.f36468i);
        }
        return e0.a(this) + '[' + CollectionsKt.x0(arrayList, ", ", null, null, 0, null, null, 62, null) + ']';
    }
}
