package qs;

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
    private final Iterable f48041o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48042d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f48043e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ z f48044i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, z zVar, Continuation continuation) {
            super(2, continuation);
            this.f48043e = flow;
            this.f48044i = zVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f48043e, this.f48044i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f48042d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f48043e;
                z zVar = this.f48044i;
                this.f48042d = 1;
                if (flow.collect(zVar, this) == f10) {
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

    public /* synthetic */ j(Iterable iterable, CoroutineContext coroutineContext, int i10, os.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(iterable, (i11 & 2) != 0 ? kotlin.coroutines.e.f32062d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? os.a.f44350d : aVar);
    }

    @Override // qs.e
    protected Object e(ProducerScope producerScope, Continuation continuation) {
        z zVar = new z(producerScope);
        for (Flow flow : this.f48041o) {
            ms.i.d(producerScope, null, null, new a(flow, zVar, null), 3, null);
        }
        return Unit.f31988a;
    }

    @Override // qs.e
    protected e g(CoroutineContext coroutineContext, int i10, os.a aVar) {
        return new j(this.f48041o, coroutineContext, i10, aVar);
    }

    @Override // qs.e
    public os.v m(CoroutineScope coroutineScope) {
        return os.s.b(coroutineScope, this.f48008d, this.f48009e, k());
    }

    public j(Iterable iterable, CoroutineContext coroutineContext, int i10, os.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f48041o = iterable;
    }
}
