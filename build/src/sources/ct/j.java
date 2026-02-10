package ct;

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
    private final Iterable f21063o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21064d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f21065e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z f21066i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, z zVar, Continuation continuation) {
            super(2, continuation);
            this.f21065e = flow;
            this.f21066i = zVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f21065e, this.f21066i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f21064d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f21065e;
                z zVar = this.f21066i;
                this.f21064d = 1;
                if (flow.collect(zVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public /* synthetic */ j(Iterable iterable, CoroutineContext coroutineContext, int i10, at.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(iterable, (i11 & 2) != 0 ? kotlin.coroutines.e.f32061d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? at.a.f6104d : aVar);
    }

    @Override // ct.e
    protected Object e(ProducerScope producerScope, Continuation continuation) {
        z zVar = new z(producerScope);
        for (Flow flow : this.f21063o) {
            ys.i.d(producerScope, null, null, new a(flow, zVar, null), 3, null);
        }
        return Unit.f31987a;
    }

    @Override // ct.e
    protected e f(CoroutineContext coroutineContext, int i10, at.a aVar) {
        return new j(this.f21063o, coroutineContext, i10, aVar);
    }

    @Override // ct.e
    public at.v m(CoroutineScope coroutineScope) {
        return at.s.c(coroutineScope, this.f21030d, this.f21031e, k());
    }

    public j(Iterable iterable, CoroutineContext coroutineContext, int i10, at.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f21063o = iterable;
    }
}
