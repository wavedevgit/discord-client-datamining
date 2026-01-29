package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import gs.m0;
import js.c0;
import js.j0;
import js.l0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import mo.a2;
import mo.o2;
import np.a;
import org.jetbrains.annotations.NotNull;
import uo.f0;
import vm.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f20004y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f20005c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f20006d;

    /* renamed from: e  reason: collision with root package name */
    private mo.q f20007e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f20008f;

    /* renamed from: g  reason: collision with root package name */
    private n f20009g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f20010h;

    /* renamed from: i  reason: collision with root package name */
    private final op.c f20011i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f20012j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f20013k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f20014l;

    /* renamed from: m  reason: collision with root package name */
    private final kp.e f20015m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f20016n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f20017o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f20018p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f20019q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f20020r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f20021s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f20022t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f20023u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f20024v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f20025w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f20026x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20027d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0246a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f20029d;

            C0246a(m mVar) {
                this.f20029d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f20029d.f(true);
                }
                return Unit.f33282a;
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f20027d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                js.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0246a c0246a = new C0246a(m.this);
                this.f20027d = 1;
                if (eventFlow.collect(c0246a, this) == f10) {
                    return f10;
                }
            }
            throw new ir.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20030d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f20032i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f20032i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f20032i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f20030d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0522a c0522a = new a.C0522a(this.f20032i);
                this.f20030d = 1;
                if (h10.emit(c0522a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20033d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20034e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f20036d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f20037e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f20038i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f20037e = mVar;
                this.f20038i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f20037e, this.f20038i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f20036d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f20037e.f20010h;
                    n.b bVar = this.f20038i;
                    this.f20036d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33282a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f20034e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f20033d == 0) {
                kotlin.c.b(obj);
                gs.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f20034e, null), 3, null);
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f20005c = application;
        this.f20006d = savedStateHandle;
        this.f20010h = c0.b(0, 0, null, 7, null);
        this.f20011i = new op.c(application);
        this.f20012j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f20013k = savedStateHandle.c("inquiry_id", null);
        this.f20014l = savedStateHandle.c("session_token", null);
        this.f20015m = new kp.e(savedStateHandle);
        this.f20016n = c0.b(0, 0, null, 7, null);
        this.f20017o = l0.a(new lo.c(false, false, true));
        this.f20018p = c0.b(0, 0, null, 7, null);
        this.f20019q = uo.c0.b();
        this.f20020r = uo.k.h();
        this.f20021s = uo.k.f();
        this.f20022t = uo.k.d();
        this.f20023u = uo.w.b();
        this.f20024v = uo.q.b();
        this.f20025w = yo.i.b();
        this.f20026x = uo.d.b();
        gs.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f20019q.e(bVar);
        this.f20020r.e(bVar);
        this.f20021s.e(bVar);
        this.f20022t.e(bVar);
        this.f20023u.e(bVar);
        this.f20024v.e(bVar);
        this.f20025w.e(bVar);
        this.f20026x.e(bVar);
    }

    public final void A() {
        un.g c10;
        mo.q qVar = this.f20007e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f20009g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f20008f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return vm.a.a(nVar, a10, mutableStateFlow, e10, a2.f39362a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f20006d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        mo.q qVar = this.f20007e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        gs.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(mo.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f20007e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f20008f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f20008f = l0.a(props);
        }
        this.f20009g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f20016n;
    }

    public final f0 i() {
        return this.f20026x;
    }

    public final kp.e j() {
        return this.f20015m;
    }

    public final f0 k() {
        return this.f20024v;
    }

    public final f0 l() {
        return this.f20022t;
    }

    public final MutableSharedFlow m() {
        return this.f20018p;
    }

    public final j0 n() {
        return this.f20012j;
    }

    public final MutableLiveData o() {
        return this.f20013k;
    }

    public final f0 p() {
        return this.f20025w;
    }

    public final f0 q() {
        return this.f20020r;
    }

    public final f0 r() {
        return this.f20023u;
    }

    public final f0 s() {
        return this.f20019q;
    }

    public final js.a0 t() {
        return this.f20010h;
    }

    public final MutableStateFlow u() {
        return this.f20017o;
    }

    public final op.c v() {
        return this.f20011i;
    }

    public final f0 w() {
        return this.f20021s;
    }

    public final MutableLiveData x() {
        return this.f20014l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        mo.q qVar = this.f20007e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
