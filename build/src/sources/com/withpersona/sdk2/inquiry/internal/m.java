package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import js.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.c0;
import ms.j0;
import ms.l0;
import org.jetbrains.annotations.NotNull;
import po.a2;
import po.o2;
import qp.a;
import xo.f0;
import ym.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f18619y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f18620c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f18621d;

    /* renamed from: e  reason: collision with root package name */
    private po.q f18622e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f18623f;

    /* renamed from: g  reason: collision with root package name */
    private n f18624g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f18625h;

    /* renamed from: i  reason: collision with root package name */
    private final rp.c f18626i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f18627j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f18628k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f18629l;

    /* renamed from: m  reason: collision with root package name */
    private final np.e f18630m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f18631n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f18632o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f18633p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f18634q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f18635r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f18636s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f18637t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f18638u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f18639v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f18640w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f18641x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18642d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0232a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f18644d;

            C0232a(m mVar) {
                this.f18644d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f18644d.f(true);
                }
                return Unit.f32464a;
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
            Object f10 = rr.b.f();
            int i10 = this.f18642d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                ms.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0232a c0232a = new C0232a(m.this);
                this.f18642d = 1;
                if (eventFlow.collect(c0232a, this) == f10) {
                    return f10;
                }
            }
            throw new lr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
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
        int f18645d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f18647i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f18647i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f18647i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f18645d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0580a c0580a = new a.C0580a(this.f18647i);
                this.f18645d = 1;
                if (h10.emit(c0580a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18648d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f18649e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f18651d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f18652e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f18653i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f18652e = mVar;
                this.f18653i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f18652e, this.f18653i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f18651d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f18652e.f18625h;
                    n.b bVar = this.f18653i;
                    this.f18651d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32464a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f18649e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f18648d == 0) {
                kotlin.c.b(obj);
                js.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f18649e, null), 3, null);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f18620c = application;
        this.f18621d = savedStateHandle;
        this.f18625h = c0.b(0, 0, null, 7, null);
        this.f18626i = new rp.c(application);
        this.f18627j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f18628k = savedStateHandle.c("inquiry_id", null);
        this.f18629l = savedStateHandle.c("session_token", null);
        this.f18630m = new np.e(savedStateHandle);
        this.f18631n = c0.b(0, 0, null, 7, null);
        this.f18632o = l0.a(new oo.c(false, false, true));
        this.f18633p = c0.b(0, 0, null, 7, null);
        this.f18634q = xo.c0.b();
        this.f18635r = xo.k.h();
        this.f18636s = xo.k.f();
        this.f18637t = xo.k.d();
        this.f18638u = xo.w.b();
        this.f18639v = xo.q.b();
        this.f18640w = bp.i.b();
        this.f18641x = xo.d.b();
        js.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f18634q.e(bVar);
        this.f18635r.e(bVar);
        this.f18636s.e(bVar);
        this.f18637t.e(bVar);
        this.f18638u.e(bVar);
        this.f18639v.e(bVar);
        this.f18640w.e(bVar);
        this.f18641x.e(bVar);
    }

    public final void A() {
        xn.g c10;
        po.q qVar = this.f18622e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f18624g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f18623f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return ym.a.a(nVar, a10, mutableStateFlow, e10, a2.f46413a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f18621d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        po.q qVar = this.f18622e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        js.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(po.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f18622e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f18623f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f18623f = l0.a(props);
        }
        this.f18624g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f18631n;
    }

    public final f0 i() {
        return this.f18641x;
    }

    public final np.e j() {
        return this.f18630m;
    }

    public final f0 k() {
        return this.f18639v;
    }

    public final f0 l() {
        return this.f18637t;
    }

    public final MutableSharedFlow m() {
        return this.f18633p;
    }

    public final j0 n() {
        return this.f18627j;
    }

    public final MutableLiveData o() {
        return this.f18628k;
    }

    public final f0 p() {
        return this.f18640w;
    }

    public final f0 q() {
        return this.f18635r;
    }

    public final f0 r() {
        return this.f18638u;
    }

    public final f0 s() {
        return this.f18634q;
    }

    public final ms.a0 t() {
        return this.f18625h;
    }

    public final MutableStateFlow u() {
        return this.f18632o;
    }

    public final rp.c v() {
        return this.f18626i;
    }

    public final f0 w() {
        return this.f18636s;
    }

    public final MutableLiveData x() {
        return this.f18629l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        po.q qVar = this.f18622e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
