package xm;

import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import ls.v;
import ms.j0;
import wm.q;
import wm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final wm.k f53469a;

    /* renamed from: b  reason: collision with root package name */
    private final d f53470b;

    /* renamed from: c  reason: collision with root package name */
    private Object f53471c;

    /* renamed from: d  reason: collision with root package name */
    private final v f53472d;

    /* renamed from: e  reason: collision with root package name */
    private final j f53473e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53474d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f53475e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f53475e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((ls.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f53474d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((ls.k) this.f53475e).k();
                Throwable e10 = ls.k.e(k10);
                if (e10 == null) {
                    Object f10 = ls.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f53471c, f10)) {
                            mVar.f53471c = f10;
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
            return ((a) create(ls.k.b(obj), continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53477d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f53478e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f53478e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f53477d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f53478e, m.this.f53471c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, wm.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        wm.k b10 = protoWorkflow.b();
        this.f53469a = b10;
        d dVar = new d();
        this.f53470b = dVar;
        this.f53471c = props.getValue();
        this.f53472d = ms.g.E(ms.g.n(props, new b(null)), scope);
        this.f53473e = new j(l.b(b10, null, 1, null), b10, this.f53471c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f53473e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        rs.e eVar = new rs.e(continuation);
        try {
            if (!this.f53472d.b()) {
                eVar.a(this.f53472d.k(), new a(null));
            }
            this.f53473e.o(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final wm.g g() {
        return new wm.g(this.f53473e.l(this.f53469a, this.f53471c), this.f53473e.n(this.f53469a));
    }
}
