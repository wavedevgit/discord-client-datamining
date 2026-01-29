package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.channels.ProducerScope;
import kotlinx.coroutines.flow.Flow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends e {

    /* renamed from: o  reason: collision with root package name */
    private final Iterable f36483o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36484d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f36485e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z f36486i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, z zVar, Continuation continuation) {
            super(2, continuation);
            this.f36485e = flow;
            this.f36486i = zVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f36485e, this.f36486i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f36484d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f36485e;
                z zVar = this.f36486i;
                this.f36484d = 1;
                if (flow.collect(zVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public /* synthetic */ j(Iterable iterable, CoroutineContext coroutineContext, int i10, is.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(iterable, (i11 & 2) != 0 ? kotlin.coroutines.e.f33356d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? is.a.f31125d : aVar);
    }

    @Override // ks.e
    protected Object f(ProducerScope producerScope, Continuation continuation) {
        z zVar = new z(producerScope);
        for (Flow flow : this.f36483o) {
            gs.i.d(producerScope, null, null, new a(flow, zVar, null), 3, null);
        }
        return Unit.f33282a;
    }

    @Override // ks.e
    protected e g(CoroutineContext coroutineContext, int i10, is.a aVar) {
        return new j(this.f36483o, coroutineContext, i10, aVar);
    }

    @Override // ks.e
    public is.v m(CoroutineScope coroutineScope) {
        return is.s.c(coroutineScope, this.f36450d, this.f36451e, k());
    }

    public j(Iterable iterable, CoroutineContext coroutineContext, int i10, is.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f36483o = iterable;
    }
}
