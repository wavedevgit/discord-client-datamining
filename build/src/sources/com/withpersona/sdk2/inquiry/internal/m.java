package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import cp.f0;
import dn.e0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import org.jetbrains.annotations.NotNull;
import os.m0;
import rs.c0;
import rs.j0;
import rs.l0;
import uo.a2;
import uo.o2;
import vp.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f19005y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f19006c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f19007d;

    /* renamed from: e  reason: collision with root package name */
    private uo.q f19008e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f19009f;

    /* renamed from: g  reason: collision with root package name */
    private n f19010g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f19011h;

    /* renamed from: i  reason: collision with root package name */
    private final wp.c f19012i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f19013j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f19014k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f19015l;

    /* renamed from: m  reason: collision with root package name */
    private final sp.e f19016m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f19017n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f19018o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f19019p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f19020q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f19021r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f19022s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f19023t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f19024u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f19025v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f19026w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f19027x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19028d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0242a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f19030d;

            C0242a(m mVar) {
                this.f19030d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f19030d.f(true);
                }
                return Unit.f32056a;
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
            Object f10 = wr.b.f();
            int i10 = this.f19028d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                rs.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0242a c0242a = new C0242a(m.this);
                this.f19028d = 1;
                if (eventFlow.collect(c0242a, this) == f10) {
                    return f10;
                }
            }
            throw new qr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
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
        int f19031d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f19033i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f19033i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f19033i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f19031d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0699a c0699a = new a.C0699a(this.f19033i);
                this.f19031d = 1;
                if (h10.emit(c0699a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19034d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f19035e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19037d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f19038e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f19039i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f19038e = mVar;
                this.f19039i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f19038e, this.f19039i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f19037d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f19038e.f19011h;
                    n.b bVar = this.f19039i;
                    this.f19037d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f19035e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f19034d == 0) {
                kotlin.c.b(obj);
                os.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f19035e, null), 3, null);
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19006c = application;
        this.f19007d = savedStateHandle;
        this.f19011h = c0.b(0, 0, null, 7, null);
        this.f19012i = new wp.c(application);
        this.f19013j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f19014k = savedStateHandle.c("inquiry_id", null);
        this.f19015l = savedStateHandle.c("session_token", null);
        this.f19016m = new sp.e(savedStateHandle);
        this.f19017n = c0.b(0, 0, null, 7, null);
        this.f19018o = l0.a(new to.c(false, false, true));
        this.f19019p = c0.b(0, 0, null, 7, null);
        this.f19020q = cp.c0.b();
        this.f19021r = cp.k.h();
        this.f19022s = cp.k.f();
        this.f19023t = cp.k.d();
        this.f19024u = cp.w.b();
        this.f19025v = cp.q.b();
        this.f19026w = gp.i.b();
        this.f19027x = cp.d.b();
        os.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f19020q.e(bVar);
        this.f19021r.e(bVar);
        this.f19022s.e(bVar);
        this.f19023t.e(bVar);
        this.f19024u.e(bVar);
        this.f19025v.e(bVar);
        this.f19026w.e(bVar);
        this.f19027x.e(bVar);
    }

    public final void A() {
        co.g c10;
        uo.q qVar = this.f19008e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f19010g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f19009f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return dn.a.a(nVar, a10, mutableStateFlow, e10, a2.f51923a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f19007d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        uo.q qVar = this.f19008e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        os.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(uo.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f19008e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f19009f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f19009f = l0.a(props);
        }
        this.f19010g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f19017n;
    }

    public final f0 i() {
        return this.f19027x;
    }

    public final sp.e j() {
        return this.f19016m;
    }

    public final f0 k() {
        return this.f19025v;
    }

    public final f0 l() {
        return this.f19023t;
    }

    public final MutableSharedFlow m() {
        return this.f19019p;
    }

    public final j0 n() {
        return this.f19013j;
    }

    public final MutableLiveData o() {
        return this.f19014k;
    }

    public final f0 p() {
        return this.f19026w;
    }

    public final f0 q() {
        return this.f19021r;
    }

    public final f0 r() {
        return this.f19024u;
    }

    public final f0 s() {
        return this.f19020q;
    }

    public final rs.a0 t() {
        return this.f19011h;
    }

    public final MutableStateFlow u() {
        return this.f19018o;
    }

    public final wp.c v() {
        return this.f19012i;
    }

    public final f0 w() {
        return this.f19022s;
    }

    public final MutableLiveData x() {
        return this.f19015l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        uo.q qVar = this.f19008e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
