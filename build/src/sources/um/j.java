package um;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import gs.b0;
import gs.c0;
import java.util.Map;
import java.util.concurrent.CancellationException;
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
import tm.r;
import tm.s;
import tm.t;
import tm.u;
import tm.v;
import tm.w;
import um.e;
import um.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements CoroutineScope, f.b, t.c {

    /* renamed from: d  reason: collision with root package name */
    private final k f50455d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f50456e;

    /* renamed from: i  reason: collision with root package name */
    private final t.c f50457i;

    /* renamed from: o  reason: collision with root package name */
    private final t f50458o;

    /* renamed from: p  reason: collision with root package name */
    private final CoroutineContext f50459p;

    /* renamed from: q  reason: collision with root package name */
    private final long f50460q;

    /* renamed from: r  reason: collision with root package name */
    private final h f50461r;

    /* renamed from: s  reason: collision with root package name */
    private final um.a f50462s;

    /* renamed from: t  reason: collision with root package name */
    private Object f50463t;

    /* renamed from: u  reason: collision with root package name */
    private final is.g f50464u;

    /* renamed from: v  reason: collision with root package name */
    private Object f50465v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f50466d = new a();

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
        final /* synthetic */ Map f50467d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Map map) {
            super(0);
            this.f50467d = map;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Map invoke() {
            return this.f50467d;
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
        int f50468d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50469e;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f50469e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f50468d == 0) {
                kotlin.c.b(obj);
                return j.this.c((r) this.f50469e);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(r rVar, Continuation continuation) {
            return ((d) create(rVar, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public j(k id2, tm.k workflow, Object obj, tm.m mVar, CoroutineContext baseContext, Function1 emitOutputToParent, t.c cVar, t interceptor, um.d dVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(baseContext, "baseContext");
        Intrinsics.checkNotNullParameter(emitOutputToParent, "emitOutputToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f50455d = id2;
        this.f50456e = emitOutputToParent;
        this.f50457i = cVar;
        this.f50458o = interceptor;
        this.f50459p = baseContext.U0(z.a((Job) baseContext.l(Job.f36307j))).U0(new b0(id2.toString()));
        this.f50460q = dVar == null ? 0L : dVar.a();
        this.f50461r = new h(mVar == null ? null : mVar.a(), getCoroutineContext(), new c(this), this, interceptor, dVar);
        this.f50462s = new um.a();
        this.f50463t = obj;
        this.f50464u = is.j.b(Integer.MAX_VALUE, null, null, 6, null);
        interceptor.b(this, this);
        this.f50465v = u.a(interceptor, workflow, this).d(obj, mVar != null ? mVar.b() : null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object c(r rVar) {
        Pair h10 = w.h(rVar, this.f50463t, this.f50465v);
        Object a10 = h10.a();
        v vVar = (v) h10.b();
        this.f50465v = a10;
        if (vVar == null) {
            return null;
        }
        return this.f50456e.invoke(vVar.a());
    }

    public static /* synthetic */ void e(j jVar, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        jVar.d(cancellationException);
    }

    private final g f(String str, Function2 function2) {
        Job d10;
        d10 = gs.i.d(kotlinx.coroutines.i.j(this, new b0("sideEffect[" + str + "] for " + this.f50455d)), null, c0.f27161e, function2, 1, null);
        return new g(str, d10);
    }

    private final Object m(tm.k kVar, Object obj) {
        e eVar;
        e eVar2;
        e eVar3;
        e eVar4;
        e eVar5;
        p(kVar, obj);
        f fVar = new f(this.f50461r, this, this.f50464u);
        Object f10 = u.a(this.f50458o, kVar, this).f(obj, this.f50465v, w.a(fVar, kVar));
        fVar.f();
        this.f50461r.c();
        eVar = this.f50462s.f50404b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((g) b10).c().start();
        }
        um.a aVar = this.f50462s;
        eVar2 = aVar.f50403a;
        for (e.a b11 = eVar2.b(); b11 != null; b11 = b11.a()) {
            Job.a.a(((g) b11).c(), null, 1, null);
        }
        eVar3 = aVar.f50403a;
        eVar4 = aVar.f50404b;
        aVar.f50403a = eVar4;
        aVar.f50404b = eVar3;
        eVar5 = aVar.f50404b;
        eVar5.a();
        return f10;
    }

    private final void p(tm.k kVar, Object obj) {
        if (!Intrinsics.areEqual(obj, this.f50463t)) {
            this.f50465v = u.a(this.f50458o, kVar, this).e(this.f50463t, obj, this.f50465v);
        }
        this.f50463t = obj;
    }

    @Override // um.f.b
    public void a(String key, Function2 sideEffect) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        eVar = this.f50462s.f50404b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (Intrinsics.areEqual(key, ((g) b10).d())) {
                throw new IllegalArgumentException(("Expected side effect keys to be unique: \"" + key + '\"').toString());
            }
        }
        um.a aVar = this.f50462s;
        eVar2 = aVar.f50403a;
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
        eVar3 = aVar.f50404b;
        eVar3.d(gVar);
    }

    public final void d(CancellationException cancellationException) {
        z.c(getCoroutineContext(), cancellationException);
    }

    public final k g() {
        return this.f50455d;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f50459p;
    }

    public s h() {
        return this.f50455d.a();
    }

    public t.c i() {
        return this.f50457i;
    }

    public String j() {
        return this.f50455d.b();
    }

    public long k() {
        return this.f50460q;
    }

    public final Object l(tm.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return m(workflow, obj);
    }

    public final tm.m n(tm.k workflow) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return new tm.m(u.a(this.f50458o, workflow, this).g(this.f50465v), new b(this.f50461r.f()));
    }

    public final void o(os.d selector) {
        Intrinsics.checkNotNullParameter(selector, "selector");
        this.f50461r.g(selector);
        selector.a(this.f50464u.j(), new d(null));
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

    public /* synthetic */ j(k kVar, tm.k kVar2, Object obj, tm.m mVar, CoroutineContext coroutineContext, Function1 function1, t.c cVar, t tVar, um.d dVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        um.d dVar2;
        j jVar;
        k kVar3;
        tm.k kVar4;
        Object obj2;
        tm.m mVar2;
        CoroutineContext coroutineContext2;
        a aVar = (i10 & 32) != 0 ? a.f50466d : function1;
        t.c cVar2 = (i10 & 64) != 0 ? null : cVar;
        tm.e eVar = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? tm.e.f49714a : tVar;
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
