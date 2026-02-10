package en;

import en.r;
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
        final /* synthetic */ h f23032d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f23033e;

        public a(h hVar, Function1 function1) {
            this.f23032d = hVar;
            this.f23033e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f23032d, (r) this.f23033e.invoke(obj), continuation);
            if (m10 == gs.b.f()) {
                return m10;
            }
            return Unit.f31987a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f23034c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f23035d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f23034c = rVar;
            this.f23035d = cancellableContinuation;
        }

        @Override // en.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f23035d.a()) {
                return;
            }
            this.f23034c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f23035d;
            Result.a aVar = Result.f31984e;
            cancellableContinuation.resumeWith(Result.b(Unit.f31987a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f23034c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == gs.b.f()) {
            return collect;
        }
        return Unit.f31987a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == gs.b.f()) {
            return B;
        }
        return Unit.f31987a;
    }
}
