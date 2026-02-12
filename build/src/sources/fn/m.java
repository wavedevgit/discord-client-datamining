package fn;

import at.v;
import bt.j0;
import en.q;
import en.t;
import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final en.k f23925a;

    /* renamed from: b  reason: collision with root package name */
    private final d f23926b;

    /* renamed from: c  reason: collision with root package name */
    private Object f23927c;

    /* renamed from: d  reason: collision with root package name */
    private final v f23928d;

    /* renamed from: e  reason: collision with root package name */
    private final j f23929e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23930d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f23931e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f23931e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((at.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f23930d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((at.k) this.f23931e).k();
                Throwable e10 = at.k.e(k10);
                if (e10 == null) {
                    Object f10 = at.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f23927c, f10)) {
                            mVar.f23927c = f10;
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
            return ((a) create(at.k.b(obj), continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23933d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f23934e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f23934e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f23933d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f23934e, m.this.f23927c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, en.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        en.k b10 = protoWorkflow.b();
        this.f23925a = b10;
        d dVar = new d();
        this.f23926b = dVar;
        this.f23927c = props.getValue();
        this.f23928d = bt.g.E(bt.g.n(props, new b(null)), scope);
        this.f23929e = new j(l.b(b10, null, 1, null), b10, this.f23927c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f23929e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        gt.e eVar = new gt.e(continuation);
        try {
            if (!this.f23928d.j()) {
                eVar.a(this.f23928d.l(), new a(null));
            }
            this.f23929e.p(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final en.g g() {
        return new en.g(this.f23929e.m(this.f23925a, this.f23927c), this.f23929e.o(this.f23925a));
    }
}
