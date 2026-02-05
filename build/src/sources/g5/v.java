package g5;

import android.view.View;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import ms.g0;
import ms.m0;
import ms.v0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v implements View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final View f23822d;

    /* renamed from: e  reason: collision with root package name */
    private t f23823e;

    /* renamed from: i  reason: collision with root package name */
    private Job f23824i;

    /* renamed from: o  reason: collision with root package name */
    private u f23825o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f23826p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23827d;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f23827d == 0) {
                kotlin.c.b(obj);
                v.this.c(null);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public v(View view) {
        this.f23822d = view;
    }

    public final synchronized void a() {
        Job d10;
        try {
            Job job = this.f23824i;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = ms.i.d(v0.f38956d, m0.c().f2(), null, new a(null), 2, null);
            this.f23824i = d10;
            this.f23823e = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized t b(g0 g0Var) {
        t tVar = this.f23823e;
        if (tVar != null && k5.k.r() && this.f23826p) {
            this.f23826p = false;
            tVar.a(g0Var);
            return tVar;
        }
        Job job = this.f23824i;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f23824i = null;
        t tVar2 = new t(this.f23822d, g0Var);
        this.f23823e = tVar2;
        return tVar2;
    }

    public final void c(u uVar) {
        u uVar2 = this.f23825o;
        if (uVar2 != null) {
            uVar2.a();
        }
        this.f23825o = uVar;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
        u uVar = this.f23825o;
        if (uVar == null) {
            return;
        }
        this.f23826p = true;
        uVar.b();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        u uVar = this.f23825o;
        if (uVar != null) {
            uVar.a();
        }
    }
}
