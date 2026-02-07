package ss;

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
    private final Iterable f50113o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50114d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f50115e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z f50116i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, z zVar, Continuation continuation) {
            super(2, continuation);
            this.f50115e = flow;
            this.f50116i = zVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f50115e, this.f50116i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f50114d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f50115e;
                z zVar = this.f50116i;
                this.f50114d = 1;
                if (flow.collect(zVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public /* synthetic */ j(Iterable iterable, CoroutineContext coroutineContext, int i10, qs.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(iterable, (i11 & 2) != 0 ? kotlin.coroutines.e.f32130d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? qs.a.f48114d : aVar);
    }

    @Override // ss.e
    protected Object e(ProducerScope producerScope, Continuation continuation) {
        z zVar = new z(producerScope);
        for (Flow flow : this.f50113o) {
            os.i.d(producerScope, null, null, new a(flow, zVar, null), 3, null);
        }
        return Unit.f32056a;
    }

    @Override // ss.e
    protected e h(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return new j(this.f50113o, coroutineContext, i10, aVar);
    }

    @Override // ss.e
    public qs.v m(CoroutineScope coroutineScope) {
        return qs.s.b(coroutineScope, this.f50080d, this.f50081e, k());
    }

    public j(Iterable iterable, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f50113o = iterable;
    }
}
