package fn;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import en.r;
import en.s;
import en.t;
import en.u;
import en.v;
import en.w;
import fn.e;
import fn.f;
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
import ys.b0;
import ys.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements CoroutineScope, f.b, t.c {

    /* renamed from: d  reason: collision with root package name */
    private final k f23905d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f23906e;

    /* renamed from: i  reason: collision with root package name */
    private final t.c f23907i;

    /* renamed from: o  reason: collision with root package name */
    private final t f23908o;

    /* renamed from: p  reason: collision with root package name */
    private final CoroutineContext f23909p;

    /* renamed from: q  reason: collision with root package name */
    private final long f23910q;

    /* renamed from: r  reason: collision with root package name */
    private final h f23911r;

    /* renamed from: s  reason: collision with root package name */
    private final fn.a f23912s;

    /* renamed from: t  reason: collision with root package name */
    private Object f23913t;

    /* renamed from: u  reason: collision with root package name */
    private final at.g f23914u;

    /* renamed from: v  reason: collision with root package name */
    private Object f23915v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f23916d = new a();

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
        final /* synthetic */ Map f23917d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Map map) {
            super(0);
            this.f23917d = map;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Map invoke() {
            return this.f23917d;
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
        int f23918d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f23919e;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f23919e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f23918d == 0) {
                kotlin.c.b(obj);
                return j.this.c((r) this.f23919e);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(r rVar, Continuation continuation) {
            return ((d) create(rVar, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public j(k id2, en.k workflow, Object obj, en.m mVar, CoroutineContext baseContext, Function1 emitOutputToParent, t.c cVar, t interceptor, fn.d dVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(baseContext, "baseContext");
        Intrinsics.checkNotNullParameter(emitOutputToParent, "emitOutputToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f23905d = id2;
        this.f23906e = emitOutputToParent;
        this.f23907i = cVar;
        this.f23908o = interceptor;
        this.f23909p = baseContext.O0(z.a((Job) baseContext.m(Job.f34996k))).O0(new b0(id2.toString()));
        this.f23910q = dVar == null ? 0L : dVar.a();
        this.f23911r = new h(mVar == null ? null : mVar.a(), getCoroutineContext(), new c(this), this, interceptor, dVar);
        this.f23912s = new fn.a();
        this.f23913t = obj;
        this.f23914u = at.j.b(Integer.MAX_VALUE, null, null, 6, null);
        interceptor.d(this, this);
        this.f23915v = u.a(interceptor, workflow, this).d(obj, mVar != null ? mVar.b() : null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object c(r rVar) {
        Pair h10 = w.h(rVar, this.f23913t, this.f23915v);
        Object a10 = h10.a();
        v vVar = (v) h10.b();
        this.f23915v = a10;
        if (vVar == null) {
            return null;
        }
        return this.f23906e.invoke(vVar.a());
    }

    public static /* synthetic */ void e(j jVar, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        jVar.d(cancellationException);
    }

    private final g f(String str, Function2 function2) {
        Job d10;
        d10 = ys.i.d(kotlinx.coroutines.i.j(this, new b0("sideEffect[" + str + "] for " + this.f23905d)), null, c0.f55783e, function2, 1, null);
        return new g(str, d10);
    }

    private final Object n(en.k kVar, Object obj) {
        e eVar;
        e eVar2;
        e eVar3;
        e eVar4;
        e eVar5;
        q(kVar, obj);
        f fVar = new f(this.f23911r, this, this.f23914u);
        Object f10 = u.a(this.f23908o, kVar, this).f(obj, this.f23915v, w.a(fVar, kVar));
        fVar.f();
        this.f23911r.c();
        eVar = this.f23912s.f23854b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((g) b10).c().start();
        }
        fn.a aVar = this.f23912s;
        eVar2 = aVar.f23853a;
        for (e.a b11 = eVar2.b(); b11 != null; b11 = b11.a()) {
            Job.a.a(((g) b11).c(), null, 1, null);
        }
        eVar3 = aVar.f23853a;
        eVar4 = aVar.f23854b;
        aVar.f23853a = eVar4;
        aVar.f23854b = eVar3;
        eVar5 = aVar.f23854b;
        eVar5.a();
        return f10;
    }

    private final void q(en.k kVar, Object obj) {
        if (!Intrinsics.areEqual(obj, this.f23913t)) {
            this.f23915v = u.a(this.f23908o, kVar, this).e(this.f23913t, obj, this.f23915v);
        }
        this.f23913t = obj;
    }

    @Override // fn.f.b
    public void a(String key, Function2 sideEffect) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        eVar = this.f23912s.f23854b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (Intrinsics.areEqual(key, ((g) b10).d())) {
                throw new IllegalArgumentException(("Expected side effect keys to be unique: \"" + key + '\"').toString());
            }
        }
        fn.a aVar = this.f23912s;
        eVar2 = aVar.f23853a;
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
        eVar3 = aVar.f23854b;
        eVar3.d(gVar);
    }

    public final void d(CancellationException cancellationException) {
        z.c(getCoroutineContext(), cancellationException);
    }

    public final k g() {
        return this.f23905d;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f23909p;
    }

    public s i() {
        return this.f23905d.a();
    }

    public t.c j() {
        return this.f23907i;
    }

    public String k() {
        return this.f23905d.b();
    }

    public long l() {
        return this.f23910q;
    }

    public final Object m(en.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return n(workflow, obj);
    }

    public final en.m o(en.k workflow) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return new en.m(u.a(this.f23908o, workflow, this).g(this.f23915v), new b(this.f23911r.f()));
    }

    public final void p(gt.d selector) {
        Intrinsics.checkNotNullParameter(selector, "selector");
        this.f23911r.g(selector);
        selector.a(this.f23914u.k(), new d(null));
    }

    public String toString() {
        String str;
        if (j() == null) {
            str = null;
        } else {
            str = "WorkflowInstance(…)";
        }
        return "WorkflowInstance(identifier=" + i() + ", renderKey=" + k() + ", instanceId=" + l() + ", parent=" + ((Object) str) + ')';
    }

    public /* synthetic */ j(k kVar, en.k kVar2, Object obj, en.m mVar, CoroutineContext coroutineContext, Function1 function1, t.c cVar, t tVar, fn.d dVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        fn.d dVar2;
        j jVar;
        k kVar3;
        en.k kVar4;
        Object obj2;
        en.m mVar2;
        CoroutineContext coroutineContext2;
        a aVar = (i10 & 32) != 0 ? a.f23916d : function1;
        t.c cVar2 = (i10 & 64) != 0 ? null : cVar;
        en.e eVar = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? en.e.f22972a : tVar;
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
