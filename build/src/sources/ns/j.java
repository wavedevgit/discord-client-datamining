package ns;

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
    private final Iterable f41981o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41982d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f41983e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z f41984i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, z zVar, Continuation continuation) {
            super(2, continuation);
            this.f41983e = flow;
            this.f41984i = zVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f41983e, this.f41984i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f41982d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f41983e;
                z zVar = this.f41984i;
                this.f41982d = 1;
                if (flow.collect(zVar, this) == f10) {
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

    public /* synthetic */ j(Iterable iterable, CoroutineContext coroutineContext, int i10, ls.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(iterable, (i11 & 2) != 0 ? kotlin.coroutines.e.f32538d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? ls.a.f37142d : aVar);
    }

    @Override // ns.e
    protected Object f(ProducerScope producerScope, Continuation continuation) {
        z zVar = new z(producerScope);
        for (Flow flow : this.f41981o) {
            js.i.d(producerScope, null, null, new a(flow, zVar, null), 3, null);
        }
        return Unit.f32464a;
    }

    @Override // ns.e
    protected e g(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        return new j(this.f41981o, coroutineContext, i10, aVar);
    }

    @Override // ns.e
    public ls.v m(CoroutineScope coroutineScope) {
        return ls.s.b(coroutineScope, this.f41948d, this.f41949e, k());
    }

    public j(Iterable iterable, CoroutineContext coroutineContext, int i10, ls.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f41981o = iterable;
    }
}
