package um;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import um.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h f50532d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f50533e;

        public a(h hVar, Function1 function1) {
            this.f50532d = hVar;
            this.f50533e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f50532d, (r) this.f50533e.invoke(obj), continuation);
            if (m10 == pr.b.f()) {
                return m10;
            }
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f50534c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f50535d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f50534c = rVar;
            this.f50535d = cancellableContinuation;
        }

        @Override // um.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f50535d.a()) {
                return;
            }
            this.f50534c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f50535d;
            Result.a aVar = Result.f33071e;
            cancellableContinuation.resumeWith(Result.b(Unit.f33074a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f50534c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == pr.b.f()) {
            return collect;
        }
        return Unit.f33074a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == pr.b.f()) {
            return B;
        }
        return Unit.f33074a;
    }
}
