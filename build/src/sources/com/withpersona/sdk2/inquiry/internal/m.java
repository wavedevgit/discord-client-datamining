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
    public static final b f20026y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f20027c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f20028d;

    /* renamed from: e  reason: collision with root package name */
    private ep.q f20029e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f20030f;

    /* renamed from: g  reason: collision with root package name */
    private n f20031g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f20032h;

    /* renamed from: i  reason: collision with root package name */
    private final gq.c f20033i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f20034j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f20035k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f20036l;

    /* renamed from: m  reason: collision with root package name */
    private final cq.e f20037m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f20038n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f20039o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f20040p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f20041q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f20042r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f20043s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f20044t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f20045u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f20046v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f20047w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f20048x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20049d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0254a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f20051d;

            C0254a(m mVar) {
                this.f20051d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f20051d.f(true);
                }
                return Unit.f32556a;
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
            int i10 = this.f20049d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                bt.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0254a c0254a = new C0254a(m.this);
                this.f20049d = 1;
                if (eventFlow.collect(c0254a, this) == f10) {
                    return f10;
                }
            }
            throw new as.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
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
        int f20052d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f20054i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f20054i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f20054i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f20052d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0325a c0325a = new a.C0325a(this.f20054i);
                this.f20052d = 1;
                if (h10.emit(c0325a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20055d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20056e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f20058d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f20059e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f20060i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f20059e = mVar;
                this.f20060i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f20059e, this.f20060i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = gs.b.f();
                int i10 = this.f20058d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f20059e.f20032h;
                    n.b bVar = this.f20060i;
                    this.f20058d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32556a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f20056e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f20055d == 0) {
                kotlin.c.b(obj);
                ys.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f20056e, null), 3, null);
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f20027c = application;
        this.f20028d = savedStateHandle;
        this.f20032h = c0.b(0, 0, null, 7, null);
        this.f20033i = new gq.c(application);
        this.f20034j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f20035k = savedStateHandle.c("inquiry_id", null);
        this.f20036l = savedStateHandle.c("session_token", null);
        this.f20037m = new cq.e(savedStateHandle);
        this.f20038n = c0.b(0, 0, null, 7, null);
        this.f20039o = l0.a(new dp.c(false, false, true));
        this.f20040p = c0.b(0, 0, null, 7, null);
        this.f20041q = mp.c0.b();
        this.f20042r = mp.k.h();
        this.f20043s = mp.k.f();
        this.f20044t = mp.k.d();
        this.f20045u = mp.w.b();
        this.f20046v = mp.q.b();
        this.f20047w = qp.i.b();
        this.f20048x = mp.d.b();
        ys.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f20041q.e(bVar);
        this.f20042r.e(bVar);
        this.f20043s.e(bVar);
        this.f20044t.e(bVar);
        this.f20045u.e(bVar);
        this.f20046v.e(bVar);
        this.f20047w.e(bVar);
        this.f20048x.e(bVar);
    }

    public final void A() {
        no.g c10;
        ep.q qVar = this.f20029e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f20031g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f20030f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return gn.a.a(nVar, a10, mutableStateFlow, e10, a2.f23056a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f20028d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        ep.q qVar = this.f20029e;
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
        this.f20029e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f20030f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f20030f = l0.a(props);
        }
        this.f20031g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f20038n;
    }

    public final f0 i() {
        return this.f20048x;
    }

    public final cq.e j() {
        return this.f20037m;
    }

    public final f0 k() {
        return this.f20046v;
    }

    public final f0 l() {
        return this.f20044t;
    }

    public final MutableSharedFlow m() {
        return this.f20040p;
    }

    public final j0 n() {
        return this.f20034j;
    }

    public final MutableLiveData o() {
        return this.f20035k;
    }

    public final f0 p() {
        return this.f20047w;
    }

    public final f0 q() {
        return this.f20042r;
    }

    public final f0 r() {
        return this.f20045u;
    }

    public final f0 s() {
        return this.f20041q;
    }

    public final bt.a0 t() {
        return this.f20032h;
    }

    public final MutableStateFlow u() {
        return this.f20039o;
    }

    public final gq.c v() {
        return this.f20033i;
    }

    public final f0 w() {
        return this.f20043s;
    }

    public final MutableLiveData x() {
        return this.f20036l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        ep.q qVar = this.f20029e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
