package com.withpersona.sdk2.inquiry.internal;

import android.app.Application;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.o0;
import com.withpersona.sdk2.inquiry.InquiryActivityBroadcastManager;
import com.withpersona.sdk2.inquiry.InquiryActivityEvent;
import com.withpersona.sdk2.inquiry.internal.n;
import dp.f0;
import en.e0;
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
import ps.m0;
import ss.c0;
import ss.j0;
import ss.l0;
import vo.a2;
import vo.o2;
import wp.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends androidx.lifecycle.a {

    /* renamed from: y  reason: collision with root package name */
    public static final b f19145y = new b(null);

    /* renamed from: c  reason: collision with root package name */
    private final Application f19146c;

    /* renamed from: d  reason: collision with root package name */
    private final androidx.lifecycle.b0 f19147d;

    /* renamed from: e  reason: collision with root package name */
    private vo.q f19148e;

    /* renamed from: f  reason: collision with root package name */
    private MutableStateFlow f19149f;

    /* renamed from: g  reason: collision with root package name */
    private n f19150g;

    /* renamed from: h  reason: collision with root package name */
    private final MutableSharedFlow f19151h;

    /* renamed from: i  reason: collision with root package name */
    private final xp.c f19152i;

    /* renamed from: j  reason: collision with root package name */
    private final j0 f19153j;

    /* renamed from: k  reason: collision with root package name */
    private MutableLiveData f19154k;

    /* renamed from: l  reason: collision with root package name */
    private MutableLiveData f19155l;

    /* renamed from: m  reason: collision with root package name */
    private final tp.e f19156m;

    /* renamed from: n  reason: collision with root package name */
    private final MutableSharedFlow f19157n;

    /* renamed from: o  reason: collision with root package name */
    private final MutableStateFlow f19158o;

    /* renamed from: p  reason: collision with root package name */
    private final MutableSharedFlow f19159p;

    /* renamed from: q  reason: collision with root package name */
    private final f0 f19160q;

    /* renamed from: r  reason: collision with root package name */
    private final f0 f19161r;

    /* renamed from: s  reason: collision with root package name */
    private final f0 f19162s;

    /* renamed from: t  reason: collision with root package name */
    private final f0 f19163t;

    /* renamed from: u  reason: collision with root package name */
    private final f0 f19164u;

    /* renamed from: v  reason: collision with root package name */
    private final f0 f19165v;

    /* renamed from: w  reason: collision with root package name */
    private final f0 f19166w;

    /* renamed from: x  reason: collision with root package name */
    private final f0 f19167x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19168d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.m$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0269a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m f19170d;

            C0269a(m mVar) {
                this.f19170d = mVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(InquiryActivityEvent inquiryActivityEvent, Continuation continuation) {
                if (inquiryActivityEvent instanceof InquiryActivityEvent.CancelInquiry) {
                    this.f19170d.f(true);
                }
                return Unit.f31765a;
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
            Object f10 = xr.b.f();
            int i10 = this.f19168d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                ss.a0 eventFlow = InquiryActivityBroadcastManager.INSTANCE.getEventFlow();
                C0269a c0269a = new C0269a(m.this);
                this.f19168d = 1;
                if (eventFlow.collect(c0269a, this) == f10) {
                    return f10;
                }
            }
            throw new rr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
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
        int f19171d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f19173i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(boolean z10, Continuation continuation) {
            super(2, continuation);
            this.f19173i = z10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f19173i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f19171d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                MutableSharedFlow h10 = m.this.h();
                a.C0752a c0752a = new a.C0752a(this.f19173i);
                this.f19171d = 1;
                if (h10.emit(c0752a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19174d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f19175e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19177d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ m f19178e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ n.b f19179i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(m mVar, n.b bVar, Continuation continuation) {
                super(2, continuation);
                this.f19178e = mVar;
                this.f19179i = bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f19178e, this.f19179i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f19177d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    MutableSharedFlow mutableSharedFlow = this.f19178e.f19151h;
                    n.b bVar = this.f19179i;
                    this.f19177d = 1;
                    if (mutableSharedFlow.emit(bVar, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            d dVar = new d(continuation);
            dVar.f19175e = obj;
            return dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f19174d == 0) {
                kotlin.c.b(obj);
                ps.i.d(o0.a(m.this), null, null, new a(m.this, (n.b) this.f19175e, null), 3, null);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(n.b bVar, Continuation continuation) {
            return ((d) create(bVar, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(@NotNull Application application, @NotNull androidx.lifecycle.b0 savedStateHandle) {
        super(application);
        Intrinsics.checkNotNullParameter(application, "application");
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f19146c = application;
        this.f19147d = savedStateHandle;
        this.f19151h = c0.b(0, 0, null, 7, null);
        this.f19152i = new xp.c(application);
        this.f19153j = savedStateHandle.e("force_fallback_mode", Boolean.FALSE);
        this.f19154k = savedStateHandle.c("inquiry_id", null);
        this.f19155l = savedStateHandle.c("session_token", null);
        this.f19156m = new tp.e(savedStateHandle);
        this.f19157n = c0.b(0, 0, null, 7, null);
        this.f19158o = l0.a(new uo.c(false, false, true));
        this.f19159p = c0.b(0, 0, null, 7, null);
        this.f19160q = dp.c0.b();
        this.f19161r = dp.k.h();
        this.f19162s = dp.k.f();
        this.f19163t = dp.k.d();
        this.f19164u = dp.w.b();
        this.f19165v = dp.q.b();
        this.f19166w = hp.i.b();
        this.f19167x = dp.d.b();
        ps.i.d(o0.a(this), m0.a(), null, new a(null), 2, null);
    }

    private final void B(d.b bVar) {
        this.f19160q.e(bVar);
        this.f19161r.e(bVar);
        this.f19162s.e(bVar);
        this.f19163t.e(bVar);
        this.f19164u.e(bVar);
        this.f19165v.e(bVar);
        this.f19166w.e(bVar);
        this.f19167x.e(bVar);
    }

    public final void A() {
        eo.g c10;
        vo.q qVar = this.f19148e;
        if (qVar != null && (c10 = qVar.c()) != null) {
            c10.a();
        }
    }

    public final j0 C(o2 workflowStateViewModel) {
        n nVar;
        MutableStateFlow mutableStateFlow;
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        n nVar2 = this.f19150g;
        if (nVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("workflow");
            nVar = null;
        } else {
            nVar = nVar2;
        }
        CoroutineScope a10 = o0.a(this);
        androidx.lifecycle.b0 e10 = workflowStateViewModel.e();
        MutableStateFlow mutableStateFlow2 = this.f19149f;
        if (mutableStateFlow2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("props");
            mutableStateFlow = null;
        } else {
            mutableStateFlow = mutableStateFlow2;
        }
        return en.a.a(nVar, a10, mutableStateFlow, e10, a2.f52783a.a(), new d(null));
    }

    public final void D(boolean z10) {
        this.f19147d.h("force_fallback_mode", Boolean.valueOf(z10));
    }

    public final e0 E() {
        vo.q qVar = this.f19148e;
        if (qVar != null) {
            return qVar.a();
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public final void f(boolean z10) {
        ps.i.d(o0.a(this), m0.a(), null, new c(z10, null), 2, null);
    }

    public final void g(vo.q component, n.c props, o2 workflowStateViewModel, boolean z10) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(workflowStateViewModel, "workflowStateViewModel");
        this.f19148e = component;
        if (z10) {
            workflowStateViewModel.f();
        }
        MutableStateFlow mutableStateFlow = this.f19149f;
        if (mutableStateFlow != null) {
            if (mutableStateFlow == null) {
                Intrinsics.throwUninitializedPropertyAccessException("props");
                mutableStateFlow = null;
            }
            mutableStateFlow.setValue(props);
        } else {
            this.f19149f = l0.a(props);
        }
        this.f19150g = component.b();
    }

    public final MutableSharedFlow h() {
        return this.f19157n;
    }

    public final f0 i() {
        return this.f19167x;
    }

    public final tp.e j() {
        return this.f19156m;
    }

    public final f0 k() {
        return this.f19165v;
    }

    public final f0 l() {
        return this.f19163t;
    }

    public final MutableSharedFlow m() {
        return this.f19159p;
    }

    public final j0 n() {
        return this.f19153j;
    }

    public final MutableLiveData o() {
        return this.f19154k;
    }

    public final f0 p() {
        return this.f19166w;
    }

    public final f0 q() {
        return this.f19161r;
    }

    public final f0 r() {
        return this.f19164u;
    }

    public final f0 s() {
        return this.f19160q;
    }

    public final ss.a0 t() {
        return this.f19151h;
    }

    public final MutableStateFlow u() {
        return this.f19158o;
    }

    public final xp.c v() {
        return this.f19152i;
    }

    public final f0 w() {
        return this.f19162s;
    }

    public final MutableLiveData x() {
        return this.f19155l;
    }

    public final void y(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        B(activityResultCaller);
    }

    public final void z() {
        v4.h e10;
        vo.q qVar = this.f19148e;
        if (qVar != null && (e10 = qVar.e()) != null) {
            e10.shutdown();
        }
    }
}
