package z2;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements w2.f {

    /* renamed from: a  reason: collision with root package name */
    private final w2.f f55421a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55422d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f55423e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f55424i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function2 function2, Continuation continuation) {
            super(2, continuation);
            this.f55424i = function2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f55424i, continuation);
            aVar.f55423e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f55422d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f55424i;
                this.f55422d = 1;
                obj = function2.invoke((d) this.f55423e, this);
                if (obj == f10) {
                    return f10;
                }
            }
            d dVar = (d) obj;
            ((z2.a) dVar).f();
            return dVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(d dVar, Continuation continuation) {
            return ((a) create(dVar, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public b(w2.f delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f55421a = delegate;
    }

    @Override // w2.f
    public Object a(Function2 function2, Continuation continuation) {
        return this.f55421a.a(new a(function2, null), continuation);
    }

    @Override // w2.f
    public Flow getData() {
        return this.f55421a.getData();
    }
}
