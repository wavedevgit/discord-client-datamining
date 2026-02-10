package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import bt.c0;
import bt.j0;
import bt.l0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import ep.a2;
import ep.o2;
import fq.a;
import gn.e0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import mp.f0;
import org.jetbrains.annotations.NotNull;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f20025y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f20026c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f20027d;

    /* renamed from: e  reason: collision with root package name */
    private ep.q f20028e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f20029f;

    /* renamed from: g  reason: collision with root package name */
    private n f20030g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f20031h;

    /* renamed from: i  reason: collision with root package name */
    private final gq.c f20032i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f20033j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f20034k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f20035l;

    /* renamed from: m  reason: collision with root package name */
    private final cq.e f20036m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f20037n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f20038o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f20039p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f20040q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f20041r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f20042s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f20043t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f20044u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f20045v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f20046w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f20047x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20048d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0254a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f20050d;

            C0254a(m mVar) {
                this.f20050d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f20050d.f(true);
                }
                return Unit.f31987a;
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
            Object f10 = gs.b.f();
            int i10 = this.f20048d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                bt.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0254a c0254a = new C0254a(m.this);
                this.f20048d = 1;
                if (eventFlow.collect(c0254a, this) == f10) {
                    return f10;
                }
            }
            throw new as.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
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
        int f20051d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f20053i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f20053i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f20053i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f20051d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0325a c0325a = new a.C0325a(this.f20053i);
                this.f20051d = 1;
                if (h10.emit(c0325a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20054d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20055e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f20057d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f20058e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f20059i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f20058e = mVar;
                this.f20059i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f20058e, this.f20059i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = gs.b.f();
                int i10 = this.f20057d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f20058e.f20031h;
                    n.b bVar = this.f20059i;
                    this.f20057d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31987a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f20055e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f20054d == 0) {
                kotlin.c.b(obj);
                ys.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f20055e, null), 3, null);
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f20026c = application;
        this.f20027d = savedStateHandle;
        this.f20031h = c0.b(0, 0, null, 7, null);
        this.f20032i = new gq.c(application);
        this.f20033j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f20034k = savedStateHandle.c("inquiry_id", null);
        this.f20035l = savedStateHandle.c("session_token", null);
        this.f20036m = new cq.e(savedStateHandle);
        this.f20037n = c0.b(0, 0, null, 7, null);
        this.f20038o = l0.a(new dp.c(false, false, true));
        this.f20039p = c0.b(0, 0, null, 7, null);
        this.f20040q = mp.c0.b();
        this.f20041r = mp.k.h();
        this.f20042s = mp.k.f();
        this.f20043t = mp.k.d();
        this.f20044u = mp.w.b();
        this.f20045v = mp.q.b();
        this.f20046w = qp.i.b();
        this.f20047x = mp.d.b();
        ys.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f20040q.e(bVar);
        this.f20041r.e(bVar);
        this.f20042s.e(bVar);
        this.f20043t.e(bVar);
        this.f20044u.e(bVar);
        this.f20045v.e(bVar);
        this.f20046w.e(bVar);
        this.f20047x.e(bVar);
    }

    public final void A() {
        no.g c10;
        ep.q qVar = this.f20028e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f20030g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f20029f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return gn.a.a(nVar, a10, mutableStateFlow, e10, a2.f23055a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f20027d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        ep.q qVar = this.f20028e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        ys.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(ep.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f20028e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f20029f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f20029f = l0.a(props);
        }
        this.f20030g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f20037n;
    }

    public final f0 i() {
        return this.f20047x;
    }

    public final cq.e j() {
        return this.f20036m;
    }

    public final f0 k() {
        return this.f20045v;
    }

    public final f0 l() {
        return this.f20043t;
    }

    public final MutableSharedFlow m() {
        return this.f20039p;
    }

    public final j0 n() {
        return this.f20033j;
    }

    public final MutableLiveData o() {
        return this.f20034k;
    }

    public final f0 p() {
        return this.f20046w;
    }

    public final f0 q() {
        return this.f20041r;
    }

    public final f0 r() {
        return this.f20044u;
    }

    public final f0 s() {
        return this.f20040q;
    }

    public final bt.a0 t() {
        return this.f20031h;
    }

    public final MutableStateFlow u() {
        return this.f20038o;
    }

    public final gq.c v() {
        return this.f20032i;
    }

    public final f0 w() {
        return this.f20042s;
    }

    public final MutableLiveData x() {
        return this.f20035l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        ep.q qVar = this.f20028e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
