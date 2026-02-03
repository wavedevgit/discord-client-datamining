package ls;

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
    private final Iterable f37581o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37582d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f37583e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z f37584i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, z zVar, Continuation continuation) {
            super(2, continuation);
            this.f37583e = flow;
            this.f37584i = zVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f37583e, this.f37584i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f37582d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f37583e;
                z zVar = this.f37584i;
                this.f37582d = 1;
                if (flow.collect(zVar, this) == f10) {
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

    public /* synthetic */ j(Iterable iterable, CoroutineContext coroutineContext, int i10, js.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(iterable, (i11 & 2) != 0 ? kotlin.coroutines.e.f33148d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? js.a.f32204d : aVar);
    }

    @Override // ls.e
    protected Object e(ProducerScope producerScope, Continuation continuation) {
        z zVar = new z(producerScope);
        for (Flow flow : this.f37581o) {
            hs.i.d(producerScope, null, null, new a(flow, zVar, null), 3, null);
        }
        return Unit.f33074a;
    }

    @Override // ls.e
    protected e f(CoroutineContext coroutineContext, int i10, js.a aVar) {
        return new j(this.f37581o, coroutineContext, i10, aVar);
    }

    @Override // ls.e
    public js.v m(CoroutineScope coroutineScope) {
        return js.s.c(coroutineScope, this.f37548d, this.f37549e, k());
    }

    public j(Iterable iterable, CoroutineContext coroutineContext, int i10, js.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f37581o = iterable;
    }
}
