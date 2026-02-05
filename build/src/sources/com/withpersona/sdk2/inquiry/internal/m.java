package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import ap.f0;
import bn.e0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.m0;
import org.jetbrains.annotations.NotNull;
import ps.c0;
import ps.j0;
import ps.l0;
import so.a2;
import so.o2;
import tp.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f19025y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f19026c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f19027d;

    /* renamed from: e  reason: collision with root package name */
    private so.q f19028e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f19029f;

    /* renamed from: g  reason: collision with root package name */
    private n f19030g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f19031h;

    /* renamed from: i  reason: collision with root package name */
    private final up.c f19032i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f19033j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f19034k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f19035l;

    /* renamed from: m  reason: collision with root package name */
    private final qp.e f19036m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f19037n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f19038o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f19039p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f19040q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f19041r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f19042s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f19043t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f19044u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f19045v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f19046w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f19047x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19048d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0250a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f19050d;

            C0250a(m mVar) {
                this.f19050d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f19050d.f(true);
                }
                return Unit.f31988a;
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
            Object f10 = ur.b.f();
            int i10 = this.f19048d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                ps.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0250a c0250a = new C0250a(m.this);
                this.f19048d = 1;
                if (eventFlow.collect(c0250a, this) == f10) {
                    return f10;
                }
            }
            throw new or.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
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
        int f19051d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f19053i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f19053i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f19053i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f19051d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0653a c0653a = new a.C0653a(this.f19053i);
                this.f19051d = 1;
                if (h10.emit(c0653a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19054d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f19055e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19057d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f19058e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f19059i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f19058e = mVar;
                this.f19059i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f19058e, this.f19059i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f19057d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f19058e.f19031h;
                    n.b bVar = this.f19059i;
                    this.f19057d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f19055e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f19054d == 0) {
                kotlin.c.b(obj);
                ms.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f19055e, null), 3, null);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19026c = application;
        this.f19027d = savedStateHandle;
        this.f19031h = c0.b(0, 0, null, 7, null);
        this.f19032i = new up.c(application);
        this.f19033j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f19034k = savedStateHandle.c("inquiry_id", null);
        this.f19035l = savedStateHandle.c("session_token", null);
        this.f19036m = new qp.e(savedStateHandle);
        this.f19037n = c0.b(0, 0, null, 7, null);
        this.f19038o = l0.a(new ro.c(false, false, true));
        this.f19039p = c0.b(0, 0, null, 7, null);
        this.f19040q = ap.c0.b();
        this.f19041r = ap.k.h();
        this.f19042s = ap.k.f();
        this.f19043t = ap.k.d();
        this.f19044u = ap.w.b();
        this.f19045v = ap.q.b();
        this.f19046w = ep.i.b();
        this.f19047x = ap.d.b();
        ms.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f19040q.e(bVar);
        this.f19041r.e(bVar);
        this.f19042s.e(bVar);
        this.f19043t.e(bVar);
        this.f19044u.e(bVar);
        this.f19045v.e(bVar);
        this.f19046w.e(bVar);
        this.f19047x.e(bVar);
    }

    public final void A() {
        ao.g c10;
        so.q qVar = this.f19028e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f19030g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f19029f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return bn.a.a(nVar, a10, mutableStateFlow, e10, a2.f50029a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f19027d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        so.q qVar = this.f19028e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        ms.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(so.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f19028e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f19029f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f19029f = l0.a(props);
        }
        this.f19030g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f19037n;
    }

    public final f0 i() {
        return this.f19047x;
    }

    public final qp.e j() {
        return this.f19036m;
    }

    public final f0 k() {
        return this.f19045v;
    }

    public final f0 l() {
        return this.f19043t;
    }

    public final MutableSharedFlow m() {
        return this.f19039p;
    }

    public final j0 n() {
        return this.f19033j;
    }

    public final MutableLiveData o() {
        return this.f19034k;
    }

    public final f0 p() {
        return this.f19046w;
    }

    public final f0 q() {
        return this.f19041r;
    }

    public final f0 r() {
        return this.f19044u;
    }

    public final f0 s() {
        return this.f19040q;
    }

    public final ps.a0 t() {
        return this.f19031h;
    }

    public final MutableStateFlow u() {
        return this.f19038o;
    }

    public final up.c v() {
        return this.f19032i;
    }

    public final f0 w() {
        return this.f19042s;
    }

    public final MutableLiveData x() {
        return this.f19035l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        so.q qVar = this.f19028e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
