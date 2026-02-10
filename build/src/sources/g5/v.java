package g5;

import android.view.View;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import ys.g0;
import ys.m0;
import ys.v0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final View f24900d;

    /* renamed from: e  reason: collision with root package name */
    private t f24901e;

    /* renamed from: i  reason: collision with root package name */
    private Job f24902i;

    /* renamed from: o  reason: collision with root package name */
    private u f24903o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f24904p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24905d;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f24905d == 0) {
                kotlin.c.b(obj);
                v.this.c(null);
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public v(View view) {
        this.f24900d = view;
    }

    public final synchronized void a() {
        Job d10;
        try {
            Job job = this.f24902i;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = ys.i.d(v0.f55829d, m0.c().P1(), null, new a(null), 2, null);
            this.f24902i = d10;
            this.f24901e = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized t b(g0 g0Var) {
        t tVar = this.f24901e;
        if (tVar != null && k5.k.r() && this.f24904p) {
            this.f24904p = false;
            tVar.a(g0Var);
            return tVar;
        }
        Job job = this.f24902i;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f24902i = null;
        t tVar2 = new t(this.f24900d, g0Var);
        this.f24901e = tVar2;
        return tVar2;
    }

    public final void c(u uVar) {
        u uVar2 = this.f24903o;
        if (uVar2 != null) {
            uVar2.a();
        }
        this.f24903o = uVar;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
        u uVar = this.f24903o;
        if (uVar == null) {
            return;
        }
        this.f24904p = true;
        uVar.b();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        u uVar = this.f24903o;
        if (uVar != null) {
            uVar.a();
        }
    }
}
