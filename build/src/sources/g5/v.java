package g5;

import android.view.View;
import js.g0;
import js.m0;
import js.v0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final View f25123d;

    /* renamed from: e  reason: collision with root package name */
    private t f25124e;

    /* renamed from: i  reason: collision with root package name */
    private Job f25125i;

    /* renamed from: o  reason: collision with root package name */
    private u f25126o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f25127p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25128d;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f25128d == 0) {
                kotlin.c.b(obj);
                v.this.c(null);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public v(View view) {
        this.f25123d = view;
    }

    public final synchronized void a() {
        Job d10;
        try {
            Job job = this.f25125i;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = js.i.d(v0.f31994d, m0.c().f2(), null, new a(null), 2, null);
            this.f25125i = d10;
            this.f25124e = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized t b(g0 g0Var) {
        t tVar = this.f25124e;
        if (tVar != null && k5.k.r() && this.f25127p) {
            this.f25127p = false;
            tVar.a(g0Var);
            return tVar;
        }
        Job job = this.f25125i;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f25125i = null;
        t tVar2 = new t(this.f25123d, g0Var);
        this.f25124e = tVar2;
        return tVar2;
    }

    public final void c(u uVar) {
        u uVar2 = this.f25126o;
        if (uVar2 != null) {
            uVar2.a();
        }
        this.f25126o = uVar;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
        u uVar = this.f25126o;
        if (uVar == null) {
            return;
        }
        this.f25127p = true;
        uVar.b();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        u uVar = this.f25126o;
        if (uVar != null) {
            uVar.a();
        }
    }
}
