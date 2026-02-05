package an;

import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import os.v;
import ps.j0;
import zm.q;
import zm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final zm.k f833a;

    /* renamed from: b  reason: collision with root package name */
    private final d f834b;

    /* renamed from: c  reason: collision with root package name */
    private Object f835c;

    /* renamed from: d  reason: collision with root package name */
    private final v f836d;

    /* renamed from: e  reason: collision with root package name */
    private final j f837e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f838d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f839e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f839e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((os.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f838d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((os.k) this.f839e).k();
                Throwable e10 = os.k.e(k10);
                if (e10 == null) {
                    Object f10 = os.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f835c, f10)) {
                            mVar.f835c = f10;
                            return null;
                        }
                        return null;
                    }
                    return null;
                }
                throw e10;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        public final Object j(Object obj, Continuation continuation) {
            return ((a) create(os.k.b(obj), continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f841d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f842e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f842e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f841d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f842e, m.this.f835c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, zm.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        zm.k b10 = protoWorkflow.b();
        this.f833a = b10;
        d dVar = new d();
        this.f834b = dVar;
        this.f835c = props.getValue();
        this.f836d = ps.g.E(ps.g.n(props, new b(null)), scope);
        this.f837e = new j(l.b(b10, null, 1, null), b10, this.f835c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f837e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        us.e eVar = new us.e(continuation);
        try {
            if (!this.f836d.b()) {
                eVar.a(this.f836d.l(), new a(null));
            }
            this.f837e.p(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final zm.g g() {
        return new zm.g(this.f837e.l(this.f833a, this.f835c), this.f837e.o(this.f833a));
    }
}
