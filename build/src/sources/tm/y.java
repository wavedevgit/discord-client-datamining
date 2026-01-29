package tm;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import tm.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h f49758d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f49759e;

        public a(h hVar, Function1 function1) {
            this.f49758d = hVar;
            this.f49759e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f49758d, (r) this.f49759e.invoke(obj), continuation);
            if (m10 == or.b.f()) {
                return m10;
            }
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f49760c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f49761d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f49760c = rVar;
            this.f49761d = cancellableContinuation;
        }

        @Override // tm.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f49761d.a()) {
                return;
            }
            this.f49760c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f49761d;
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(Unit.f33282a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f49760c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == or.b.f()) {
            return collect;
        }
        return Unit.f33282a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(or.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == or.b.f()) {
            return B;
        }
        return Unit.f33282a;
    }
}
