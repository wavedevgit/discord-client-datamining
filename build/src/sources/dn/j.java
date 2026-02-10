package dn;

import cn.r;
import cn.s;
import cn.t;
import cn.u;
import cn.v;
import cn.w;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dn.e;
import dn.f;
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
import ps.b0;
import ps.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements CoroutineScope, f.b, t.c {

    /* renamed from: d  reason: collision with root package name */
    private final k f20889d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f20890e;

    /* renamed from: i  reason: collision with root package name */
    private final t.c f20891i;

    /* renamed from: o  reason: collision with root package name */
    private final t f20892o;

    /* renamed from: p  reason: collision with root package name */
    private final CoroutineContext f20893p;

    /* renamed from: q  reason: collision with root package name */
    private final long f20894q;

    /* renamed from: r  reason: collision with root package name */
    private final h f20895r;

    /* renamed from: s  reason: collision with root package name */
    private final dn.a f20896s;

    /* renamed from: t  reason: collision with root package name */
    private Object f20897t;

    /* renamed from: u  reason: collision with root package name */
    private final rs.g f20898u;

    /* renamed from: v  reason: collision with root package name */
    private Object f20899v;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f20900d = new a();

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
        final /* synthetic */ Map f20901d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Map map) {
            super(0);
            this.f20901d = map;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Map invoke() {
            return this.f20901d;
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
        int f20902d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20903e;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f20903e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f20902d == 0) {
                kotlin.c.b(obj);
                return j.this.c((r) this.f20903e);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(r rVar, Continuation continuation) {
            return ((d) create(rVar, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public j(k id2, cn.k workflow, Object obj, cn.m mVar, CoroutineContext baseContext, Function1 emitOutputToParent, t.c cVar, t interceptor, dn.d dVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(baseContext, "baseContext");
        Intrinsics.checkNotNullParameter(emitOutputToParent, "emitOutputToParent");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f20889d = id2;
        this.f20890e = emitOutputToParent;
        this.f20891i = cVar;
        this.f20892o = interceptor;
        this.f20893p = baseContext.V0(z.a((Job) baseContext.m(Job.f34774h))).V0(new b0(id2.toString()));
        this.f20894q = dVar == null ? 0L : dVar.a();
        this.f20895r = new h(mVar == null ? null : mVar.a(), getCoroutineContext(), new c(this), this, interceptor, dVar);
        this.f20896s = new dn.a();
        this.f20897t = obj;
        this.f20898u = rs.j.b(Integer.MAX_VALUE, null, null, 6, null);
        interceptor.d(this, this);
        this.f20899v = u.a(interceptor, workflow, this).d(obj, mVar != null ? mVar.b() : null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object c(r rVar) {
        Pair h10 = w.h(rVar, this.f20897t, this.f20899v);
        Object a10 = h10.a();
        v vVar = (v) h10.b();
        this.f20899v = a10;
        if (vVar == null) {
            return null;
        }
        return this.f20890e.invoke(vVar.a());
    }

    public static /* synthetic */ void e(j jVar, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        jVar.d(cancellationException);
    }

    private final g f(String str, Function2 function2) {
        Job d10;
        d10 = ps.i.d(kotlinx.coroutines.i.j(this, new b0("sideEffect[" + str + "] for " + this.f20889d)), null, c0.f44497e, function2, 1, null);
        return new g(str, d10);
    }

    private final Object n(cn.k kVar, Object obj) {
        e eVar;
        e eVar2;
        e eVar3;
        e eVar4;
        e eVar5;
        q(kVar, obj);
        f fVar = new f(this.f20895r, this, this.f20898u);
        Object f10 = u.a(this.f20892o, kVar, this).f(obj, this.f20899v, w.a(fVar, kVar));
        fVar.f();
        this.f20895r.c();
        eVar = this.f20896s.f20838b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            ((g) b10).c().start();
        }
        dn.a aVar = this.f20896s;
        eVar2 = aVar.f20837a;
        for (e.a b11 = eVar2.b(); b11 != null; b11 = b11.a()) {
            Job.a.a(((g) b11).c(), null, 1, null);
        }
        eVar3 = aVar.f20837a;
        eVar4 = aVar.f20838b;
        aVar.f20837a = eVar4;
        aVar.f20838b = eVar3;
        eVar5 = aVar.f20838b;
        eVar5.a();
        return f10;
    }

    private final void q(cn.k kVar, Object obj) {
        if (!Intrinsics.areEqual(obj, this.f20897t)) {
            this.f20899v = u.a(this.f20892o, kVar, this).e(this.f20897t, obj, this.f20899v);
        }
        this.f20897t = obj;
    }

    @Override // dn.f.b
    public void a(String key, Function2 sideEffect) {
        e eVar;
        e eVar2;
        e eVar3;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        eVar = this.f20896s.f20838b;
        for (e.a b10 = eVar.b(); b10 != null; b10 = b10.a()) {
            if (Intrinsics.areEqual(key, ((g) b10).d())) {
                throw new IllegalArgumentException(("Expected side effect keys to be unique: \"" + key + '\"').toString());
            }
        }
        dn.a aVar = this.f20896s;
        eVar2 = aVar.f20837a;
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
        eVar3 = aVar.f20838b;
        eVar3.d(gVar);
    }

    public final void d(CancellationException cancellationException) {
        z.c(getCoroutineContext(), cancellationException);
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f20893p;
    }

    public final k h() {
        return this.f20889d;
    }

    public s i() {
        return this.f20889d.a();
    }

    public t.c j() {
        return this.f20891i;
    }

    public String k() {
        return this.f20889d.b();
    }

    public long l() {
        return this.f20894q;
    }

    public final Object m(cn.k workflow, Object obj) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return n(workflow, obj);
    }

    public final cn.m o(cn.k workflow) {
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        return new cn.m(u.a(this.f20892o, workflow, this).g(this.f20899v), new b(this.f20895r.f()));
    }

    public final void p(xs.d selector) {
        Intrinsics.checkNotNullParameter(selector, "selector");
        this.f20895r.g(selector);
        selector.f(this.f20898u.j(), new d(null));
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

    public /* synthetic */ j(k kVar, cn.k kVar2, Object obj, cn.m mVar, CoroutineContext coroutineContext, Function1 function1, t.c cVar, t tVar, dn.d dVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        dn.d dVar2;
        j jVar;
        k kVar3;
        cn.k kVar4;
        Object obj2;
        cn.m mVar2;
        CoroutineContext coroutineContext2;
        a aVar = (i10 & 32) != 0 ? a.f20900d : function1;
        t.c cVar2 = (i10 & 64) != 0 ? null : cVar;
        cn.e eVar = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? cn.e.f7730a : tVar;
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
