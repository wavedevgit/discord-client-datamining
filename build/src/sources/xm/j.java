package xm;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import java.util.concurrent.CancellationException;
import js.b0;
import js.c0;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.z;
import wm.r;
import wm.s;
import wm.t;
import wm.u;
import wm.v;
import wm.w;
import xm.e;
import xm.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements CoroutineScope, f.b, t.c {

    /* renamed from: d  reason: collision with root package name */
    private final k f53450d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f53451e;

    /* renamed from: i  reason: collision with root package name */
    private final t.c f53452i;

    /* renamed from: o  reason: collision with root package name */
    private final t f53453o;

    /* renamed from: p  reason: collision with root package name */
    private final CoroutineContext f53454p;

    /* renamed from: q  reason: collision with root package name */
    private final long f53455q;

    /* renamed from: r  reason: collision with root package name */
    private final h f53456r;

    /* renamed from: s  reason: collision with root package name */
    private final xm.a f53457s;

    /* renamed from: t  reason: collision with root package name */
    private Object f53458t;

    /* renamed from: u  reason: collision with root package name */
    private final ls.g f53459u;

    /* renamed from: v  reason: collision with root package name */
    private Object f53460v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f53461d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final v invoke(Object obj) {
            return new v(obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Map f53462d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Map map) {
            super(0);
            this.f53462d = map;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Map invoke() {
            return this.f53462d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class c extends FunctionReferenceImpl implements Function1 {
        c(Object obj) {
            super(1, obj, j.class, "applyAction", "applyAction(Lcom/squareup/workflow1/WorkflowAction;)Ljava/lang/Object;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Object invoke(r p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ((j) this.receiver).c(p02);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53463d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f53464e;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f53464e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f53463d == 0) {
                kotlin.c.b(obj);
                return j.this.c((r) this.f53464e);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(r rVar, Continuation continuation) {
            return ((d) create(rVar, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public j(k id2, wm.k workflow, Object obj, wm.m mVar, CoroutineContext baseContext, Function1 emitOutputToParent, t.c cVar, t interceptor, xm.d dVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(baseContext, "baseContext");
        Intrinsics.checkNotNullParameter(emitOutputToParent, "emitOutputToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f53450d = id2;
        this.f53451e = emitOutputToParent;
        this.f53452i = cVar;
        this.f53453o = interceptor;
        this.f53454p = baseContext.V0(z.a((Job) baseContext.l(Job.f35473h))).V0(new b0(id2.toString()));
        this.f53455q = dVar == null ? 0L : dVar.a();
        this.f53456r = new h(mVar == null ? null : mVar.a(), getCoroutineContext(), new c(this), this, interceptor, dVar);
        this.f53457s = new xm.a();
        this.f53458t = obj;
        this.f53459u = ls.j.b(Integer.MAX_VALUE, null, null, 6, null);
        interceptor.c(this, this);
        this.f53460v = u.a(interceptor, workflow, this).d(obj, mVar != null ? mVar.b() : null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object c(r rVar) {
        Pair h10 = w.h(rVar, this.f53458t, this.f53460v);
        Object a10 = h10.a();
        v vVar = (v) h10.b();
        this.f53460v = a10;
        if (vVar == null) {
            return null;
        }
        return this.f53451e.invoke(vVar.a());
    }

    public static /* synthetic */ void e(j jVar, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        jVar.d(cancellationException);
    }

    private final g f(String str, Function2 function2) {
        Job d10;
        d10 = js.i.d(kotlinx.coroutines.i.j(this, new b0("sideEffect[" + str + "] for " + this.f53450d)), null, c0.f31948e, function2, 1, null);
        return new g(str, d10);
    }

    private final Object m(wm.k kVar, Object obj) {
        e eVar;
        e eVar2;
        e eVar3;
        e eVar4;
        e eVar5;
        p(kVar, obj);
        f fVar = new f(this.f53456r, this, this.f53459u);
        Object f10 = u.a(this.f53453o, kVar, this).f(obj, this.f53460v, w.a(fVar, kVar));
        fVar.f();
        this.f53456r.c();
        eVar = this.f53457s.f53399b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((g) b10).c().start();
        }
        xm.a aVar = this.f53457s;
        eVar2 = aVar.f53398a;
        for (e.a b11 = eVar2.b(); b11 != null; b11 = b11.a()) {
            Job.a.a(((g) b11).c(), null, 1, null);
        }
        eVar3 = aVar.f53398a;
        eVar4 = aVar.f53399b;
        aVar.f53398a = eVar4;
        aVar.f53399b = eVar3;
        eVar5 = aVar.f53399b;
        eVar5.a();
        return f10;
    }

    private final void p(wm.k kVar, Object obj) {
        if (!Intrinsics.areEqual(obj, this.f53458t)) {
            this.f53460v = u.a(this.f53453o, kVar, this).e(this.f53458t, obj, this.f53460v);
        }
        this.f53458t = obj;
    }

    @Override // xm.f.b
    public void a(String key, Function2 sideEffect) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        eVar = this.f53457s.f53399b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (Intrinsics.areEqual(key, ((g) b10).d())) {
                throw new IllegalArgumentException(("Expected side effect keys to be unique: \"" + key + '\"').toString());
            }
        }
        xm.a aVar = this.f53457s;
        eVar2 = aVar.f53398a;
        e.a b11 = eVar2.b();
        g gVar = null;
        e.a aVar2 = null;
        while (true) {
            if (b11 == null) {
                break;
            } else if (Intrinsics.areEqual(key, ((g) b11).d())) {
                if (aVar2 == null) {
                    eVar2.e(b11.a());
                } else {
                    aVar2.b(b11.a());
                }
                if (Intrinsics.areEqual(eVar2.c(), b11)) {
                    eVar2.f(aVar2);
                }
                b11.b(null);
                gVar = b11;
            } else {
                aVar2 = b11;
                b11 = b11.a();
            }
        }
        if (gVar == null) {
            gVar = f(key, sideEffect);
        }
        eVar3 = aVar.f53399b;
        eVar3.d(gVar);
    }

    public final void d(CancellationException cancellationException) {
        z.c(getCoroutineContext(), cancellationException);
    }

    public final k g() {
        return this.f53450d;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f53454p;
    }

    public s h() {
        return this.f53450d.a();
    }

    public t.c i() {
        return this.f53452i;
    }

    public String j() {
        return this.f53450d.b();
    }

    public long k() {
        return this.f53455q;
    }

    public final Object l(wm.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return m(workflow, obj);
    }

    public final wm.m n(wm.k workflow) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return new wm.m(u.a(this.f53453o, workflow, this).g(this.f53460v), new b(this.f53456r.f()));
    }

    public final void o(rs.d selector) {
        Intrinsics.checkNotNullParameter(selector, "selector");
        this.f53456r.g(selector);
        selector.a(this.f53459u.j(), new d(null));
    }

    public String toString() {
        String str;
        if (i() == null) {
            str = null;
        } else {
            str = "WorkflowInstance(…)";
        }
        return "WorkflowInstance(identifier=" + h() + ", renderKey=" + j() + ", instanceId=" + k() + ", parent=" + ((Object) str) + ')';
    }

    public /* synthetic */ j(k kVar, wm.k kVar2, Object obj, wm.m mVar, CoroutineContext coroutineContext, Function1 function1, t.c cVar, t tVar, xm.d dVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        xm.d dVar2;
        j jVar;
        k kVar3;
        wm.k kVar4;
        Object obj2;
        wm.m mVar2;
        CoroutineContext coroutineContext2;
        a aVar = (i10 & 32) != 0 ? a.f53461d : function1;
        t.c cVar2 = (i10 & 64) != 0 ? null : cVar;
        wm.e eVar = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? wm.e.f52534a : tVar;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            dVar2 = null;
            kVar3 = kVar;
            kVar4 = kVar2;
            obj2 = obj;
            mVar2 = mVar;
            coroutineContext2 = coroutineContext;
            jVar = this;
        } else {
            dVar2 = dVar;
            jVar = this;
            kVar3 = kVar;
            kVar4 = kVar2;
            obj2 = obj;
            mVar2 = mVar;
            coroutineContext2 = coroutineContext;
        }
        new j(kVar3, kVar4, obj2, mVar2, coroutineContext2, aVar, cVar2, eVar, dVar2);
    }
}
