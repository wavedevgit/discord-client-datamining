package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import hs.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.c0;
import ks.j0;
import ks.l0;
import no.a2;
import no.o2;
import op.a;
import org.jetbrains.annotations.NotNull;
import vo.f0;
import wm.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f19637y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f19638c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f19639d;

    /* renamed from: e  reason: collision with root package name */
    private no.q f19640e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f19641f;

    /* renamed from: g  reason: collision with root package name */
    private n f19642g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f19643h;

    /* renamed from: i  reason: collision with root package name */
    private final pp.c f19644i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f19645j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f19646k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f19647l;

    /* renamed from: m  reason: collision with root package name */
    private final lp.e f19648m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f19649n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f19650o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f19651p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f19652q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f19653r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f19654s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f19655t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f19656u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f19657v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f19658w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f19659x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19660d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0251a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f19662d;

            C0251a(m mVar) {
                this.f19662d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f19662d.f(true);
                }
                return Unit.f33074a;
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
            Object f10 = pr.b.f();
            int i10 = this.f19660d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                ks.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0251a c0251a = new C0251a(m.this);
                this.f19660d = 1;
                if (eventFlow.collect(c0251a, this) == f10) {
                    return f10;
                }
            }
            throw new jr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
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
        int f19663d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f19665i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f19665i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f19665i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f19663d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0552a c0552a = new a.C0552a(this.f19665i);
                this.f19663d = 1;
                if (h10.emit(c0552a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19666d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f19667e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19669d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f19670e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f19671i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f19670e = mVar;
                this.f19671i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f19670e, this.f19671i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f19669d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f19670e.f19643h;
                    n.b bVar = this.f19671i;
                    this.f19669d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f19667e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f19666d == 0) {
                kotlin.c.b(obj);
                hs.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f19667e, null), 3, null);
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19638c = application;
        this.f19639d = savedStateHandle;
        this.f19643h = c0.b(0, 0, null, 7, null);
        this.f19644i = new pp.c(application);
        this.f19645j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f19646k = savedStateHandle.c("inquiry_id", null);
        this.f19647l = savedStateHandle.c("session_token", null);
        this.f19648m = new lp.e(savedStateHandle);
        this.f19649n = c0.b(0, 0, null, 7, null);
        this.f19650o = l0.a(new mo.c(false, false, true));
        this.f19651p = c0.b(0, 0, null, 7, null);
        this.f19652q = vo.c0.b();
        this.f19653r = vo.k.h();
        this.f19654s = vo.k.f();
        this.f19655t = vo.k.d();
        this.f19656u = vo.w.b();
        this.f19657v = vo.q.b();
        this.f19658w = zo.i.b();
        this.f19659x = vo.d.b();
        hs.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f19652q.e(bVar);
        this.f19653r.e(bVar);
        this.f19654s.e(bVar);
        this.f19655t.e(bVar);
        this.f19656u.e(bVar);
        this.f19657v.e(bVar);
        this.f19658w.e(bVar);
        this.f19659x.e(bVar);
    }

    public final void A() {
        vn.g c10;
        no.q qVar = this.f19640e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f19642g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f19641f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return wm.a.a(nVar, a10, mutableStateFlow, e10, a2.f42121a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f19639d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        no.q qVar = this.f19640e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        hs.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(no.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f19640e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f19641f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f19641f = l0.a(props);
        }
        this.f19642g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f19649n;
    }

    public final f0 i() {
        return this.f19659x;
    }

    public final lp.e j() {
        return this.f19648m;
    }

    public final f0 k() {
        return this.f19657v;
    }

    public final f0 l() {
        return this.f19655t;
    }

    public final MutableSharedFlow m() {
        return this.f19651p;
    }

    public final j0 n() {
        return this.f19645j;
    }

    public final MutableLiveData o() {
        return this.f19646k;
    }

    public final f0 p() {
        return this.f19658w;
    }

    public final f0 q() {
        return this.f19653r;
    }

    public final f0 r() {
        return this.f19656u;
    }

    public final f0 s() {
        return this.f19652q;
    }

    public final ks.a0 t() {
        return this.f19643h;
    }

    public final MutableStateFlow u() {
        return this.f19650o;
    }

    public final pp.c v() {
        return this.f19644i;
    }

    public final f0 w() {
        return this.f19654s;
    }

    public final MutableLiveData x() {
        return this.f19647l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        no.q qVar = this.f19640e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
