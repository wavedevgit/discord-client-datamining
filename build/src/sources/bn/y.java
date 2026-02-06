package bn;

import bn.r;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h f6949d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f6950e;

        public a(h hVar, Function1 function1) {
            this.f6949d = hVar;
            this.f6950e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f6949d, (r) this.f6950e.invoke(obj), continuation);
            if (m10 == wr.b.f()) {
                return m10;
            }
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f6951c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f6952d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f6951c = rVar;
            this.f6952d = cancellableContinuation;
        }

        @Override // bn.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f6952d.a()) {
                return;
            }
            this.f6951c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f6952d;
            Result.a aVar = Result.f32005e;
            cancellableContinuation.resumeWith(Result.b(Unit.f32008a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f6951c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == wr.b.f()) {
            return collect;
        }
        return Unit.f32008a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(wr.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == wr.b.f()) {
            return B;
        }
        return Unit.f32008a;
    }
}
