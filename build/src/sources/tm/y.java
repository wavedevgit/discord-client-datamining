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
        final /* synthetic */ h f49774d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f49775e;

        public a(h hVar, Function1 function1) {
            this.f49774d = hVar;
            this.f49775e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f49774d, (r) this.f49775e.invoke(obj), continuation);
            if (m10 == or.b.f()) {
                return m10;
            }
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f49776c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f49777d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f49776c = rVar;
            this.f49777d = cancellableContinuation;
        }

        @Override // tm.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f49777d.a()) {
                return;
            }
            this.f49776c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f49777d;
            Result.a aVar = Result.f33295e;
            cancellableContinuation.resumeWith(Result.b(Unit.f33298a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f49776c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == or.b.f()) {
            return collect;
        }
        return Unit.f33298a;
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
        return Unit.f33298a;
    }
}
