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
        final /* synthetic */ h f23033d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f23034e;

        public a(h hVar, Function1 function1) {
            this.f23033d = hVar;
            this.f23034e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f23033d, (r) this.f23034e.invoke(obj), continuation);
            if (m10 == gs.b.f()) {
                return m10;
            }
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f23035c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f23036d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f23035c = rVar;
            this.f23036d = cancellableContinuation;
        }

        @Override // en.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f23036d.a()) {
                return;
            }
            this.f23035c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f23036d;
            Result.a aVar = Result.f32553e;
            cancellableContinuation.resumeWith(Result.b(Unit.f32556a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f23035c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == gs.b.f()) {
            return collect;
        }
        return Unit.f32556a;
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
        return Unit.f32556a;
    }
}
