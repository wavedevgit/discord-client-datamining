package g5;

import android.view.View;
import gs.g0;
import gs.m0;
import gs.v0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final View f25831d;

    /* renamed from: e  reason: collision with root package name */
    private t f25832e;

    /* renamed from: i  reason: collision with root package name */
    private Job f25833i;

    /* renamed from: o  reason: collision with root package name */
    private u f25834o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f25835p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25836d;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f25836d == 0) {
                kotlin.c.b(obj);
                v.this.c(null);
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public v(View view) {
        this.f25831d = view;
    }

    public final synchronized void a() {
        Job d10;
        try {
            Job job = this.f25833i;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = gs.i.d(v0.f27191d, m0.c().f2(), null, new a(null), 2, null);
            this.f25833i = d10;
            this.f25832e = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized t b(g0 g0Var) {
        t tVar = this.f25832e;
        if (tVar != null && k5.k.r() && this.f25835p) {
            this.f25835p = false;
            tVar.a(g0Var);
            return tVar;
        }
        Job job = this.f25833i;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f25833i = null;
        t tVar2 = new t(this.f25831d, g0Var);
        this.f25832e = tVar2;
        return tVar2;
    }

    public final void c(u uVar) {
        u uVar2 = this.f25834o;
        if (uVar2 != null) {
            uVar2.a();
        }
        this.f25834o = uVar;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
        u uVar = this.f25834o;
        if (uVar == null) {
            return;
        }
        this.f25835p = true;
        uVar.b();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        u uVar = this.f25834o;
        if (uVar != null) {
            uVar.a();
        }
    }
}
