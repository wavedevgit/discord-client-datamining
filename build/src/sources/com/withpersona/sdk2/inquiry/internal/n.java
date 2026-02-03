package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.StaticInquiryTemplate;
import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import com.withpersona.sdk2.inquiry.internal.a;
import com.withpersona.sdk2.inquiry.internal.a0;
import com.withpersona.sdk2.inquiry.internal.c;
import com.withpersona.sdk2.inquiry.internal.f;
import com.withpersona.sdk2.inquiry.internal.l;
import com.withpersona.sdk2.inquiry.internal.n;
import com.withpersona.sdk2.inquiry.internal.network.a;
import com.withpersona.sdk2.inquiry.internal.network.b;
import com.withpersona.sdk2.inquiry.internal.network.d;
import com.withpersona.sdk2.inquiry.internal.network.h;
import com.withpersona.sdk2.inquiry.internal.network.i;
import com.withpersona.sdk2.inquiry.internal.q;
import com.withpersona.sdk2.inquiry.internal.s;
import com.withpersona.sdk2.inquiry.internal.u;
import com.withpersona.sdk2.inquiry.internal.w;
import com.withpersona.sdk2.inquiry.internal.x;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPositionKt;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import eo.c4;
import eo.g3;
import fp.c;
import hp.a1;
import hp.d2;
import hp.e2;
import hp.m1;
import hp.x5;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import js.i0;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kq.v4;
import okio.ByteString;
import oo.b;
import org.jetbrains.annotations.NotNull;
import po.b2;
import po.j2;
import po.l2;
import qp.a;
import wm.k;
import wm.r;
import yn.r2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends wm.k {

    /* renamed from: s  reason: collision with root package name */
    public static final a f18654s = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f18655a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f18656b;

    /* renamed from: c  reason: collision with root package name */
    private final a.InterfaceC0225a f18657c;

    /* renamed from: d  reason: collision with root package name */
    private final q.b f18658d;

    /* renamed from: e  reason: collision with root package name */
    private final u.a f18659e;

    /* renamed from: f  reason: collision with root package name */
    private final x.a f18660f;

    /* renamed from: g  reason: collision with root package name */
    private final a0.a f18661g;

    /* renamed from: h  reason: collision with root package name */
    private final f.a f18662h;

    /* renamed from: i  reason: collision with root package name */
    private final g3 f18663i;

    /* renamed from: j  reason: collision with root package name */
    private final x5 f18664j;

    /* renamed from: k  reason: collision with root package name */
    private final v4 f18665k;

    /* renamed from: l  reason: collision with root package name */
    private final r2 f18666l;

    /* renamed from: m  reason: collision with root package name */
    private final fp.c f18667m;

    /* renamed from: n  reason: collision with root package name */
    private final qp.e f18668n;

    /* renamed from: o  reason: collision with root package name */
    private final up.b f18669o;

    /* renamed from: p  reason: collision with root package name */
    private final qp.c f18670p;

    /* renamed from: q  reason: collision with root package name */
    private final l2 f18671q;

    /* renamed from: r  reason: collision with root package name */
    private final s.a f18672r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {
            public a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final StepStyle f18712a;

            /* renamed from: b  reason: collision with root package name */
            private final boolean f18713b;

            /* renamed from: c  reason: collision with root package name */
            private final Function0 f18714c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(StepStyle stepStyle, boolean z10, Function0 onBack) {
                super(null);
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                this.f18712a = stepStyle;
                this.f18713b = z10;
                this.f18714c = onBack;
            }

            public final Function0 a() {
                return this.f18714c;
            }

            public final StepStyle b() {
                return this.f18712a;
            }

            public final boolean c() {
                return this.f18713b;
            }
        }

        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class e {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f18715a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f18716b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f18717c;

        static {
            int[] iArr = new int[NextStep.Selfie.CaptureMethod.values().length];
            try {
                iArr[NextStep.Selfie.CaptureMethod.ONLY_CENTER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[NextStep.Selfie.CaptureMethod.PROFILE_AND_CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[NextStep.Selfie.CaptureMethod.CONFIGURABLE_POSES.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f18715a = iArr;
            int[] iArr2 = new int[b2.values().length];
            try {
                iArr2[b2.f46419d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[b2.f46420e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f18716b = iArr2;
            int[] iArr3 = new int[NextStep.Document.StartPage.values().length];
            try {
                iArr3[NextStep.Document.StartPage.PROMPT.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr3[NextStep.Document.StartPage.REVIEW.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            f18717c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18718d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f18720i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f18721o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ k.a f18722d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ n f18723e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ l f18724i;

            a(k.a aVar, n nVar, l lVar) {
                this.f18722d = aVar;
                this.f18723e = nVar;
                this.f18724i = lVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(qp.a aVar, Continuation continuation) {
                if (aVar instanceof a.C0580a) {
                    n.n0(this.f18722d, this.f18723e, this.f18724i, ((a.C0580a) aVar).a());
                    return Unit.f32464a;
                }
                throw new lr.p();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f18720i = aVar;
            this.f18721o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f18720i, this.f18721o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f18718d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = n.this.f18668n.c();
                a aVar = new a(this.f18720i, n.this, this.f18721o);
                this.f18718d = 1;
                if (c10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18725d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f18726e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f18727i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f18728o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, n nVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f18726e = aVar;
            this.f18727i = nVar;
            this.f18728o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f18726e, this.f18727i, this.f18728o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f18725d == 0) {
                kotlin.c.b(obj);
                n.n0(this.f18726e, this.f18727i, this.f18728o, true);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18729d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f18730e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f18731i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l.a f18732o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, n nVar, l.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f18730e = aVar;
            this.f18731i = nVar;
            this.f18732o = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(l.a aVar, r.c cVar) {
            cVar.d(new b.C0234b(aVar.b(), aVar.n(), aVar.m(), aVar.l()));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f18730e, this.f18731i, this.f18732o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f18729d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f18730e.c();
                n nVar = this.f18731i;
                final l.a aVar = this.f18732o;
                d10 = wm.z.d(nVar, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.o
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = n.h.k(l.a.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18733d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f18734e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f18735i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, n nVar, Continuation continuation) {
            super(2, continuation);
            this.f18734e = aVar;
            this.f18735i = nVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(r.c cVar) {
            l.j jVar;
            Object c10 = cVar.c();
            if (c10 instanceof l.j) {
                jVar = (l.j) c10;
            } else {
                jVar = null;
            }
            l.j jVar2 = jVar;
            if (jVar2 == null) {
                return Unit.f32464a;
            }
            cVar.e(l.j.k(jVar2, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 229375, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f18734e, this.f18735i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            Object f10 = rr.b.f();
            int i10 = this.f18733d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f18733d = 1;
                if (i0.a(2000L, this) == f10) {
                    return f10;
                }
            }
            wm.h c10 = this.f18734e.c();
            d10 = wm.z.d(this.f18735i, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = n.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public n(Context applicationContext, c.a createInquiryWorker, a.InterfaceC0225a inquirySessionWorker, q.b pollingWorker, u.a transitionBackWorker, x.a transitionWorkerFactory, a0.a updateInquirySessionWorkerFactory, f.a exchangeOneTimeCodeWorkerFactory, g3 governmentIdWorkflow, x5 selfieWorkflow, v4 uiWorkflow, r2 documentWorkflow, fp.c sandboxFlags, qp.e externalInquiryController, up.b navigationStateManager, qp.c externalEventLogger, l2 uiStepSavedStateHelper, s.a restoreUiStepStateWorkerFactory) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(createInquiryWorker, "createInquiryWorker");
        Intrinsics.checkNotNullParameter(inquirySessionWorker, "inquirySessionWorker");
        Intrinsics.checkNotNullParameter(pollingWorker, "pollingWorker");
        Intrinsics.checkNotNullParameter(transitionBackWorker, "transitionBackWorker");
        Intrinsics.checkNotNullParameter(transitionWorkerFactory, "transitionWorkerFactory");
        Intrinsics.checkNotNullParameter(updateInquirySessionWorkerFactory, "updateInquirySessionWorkerFactory");
        Intrinsics.checkNotNullParameter(exchangeOneTimeCodeWorkerFactory, "exchangeOneTimeCodeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdWorkflow, "governmentIdWorkflow");
        Intrinsics.checkNotNullParameter(selfieWorkflow, "selfieWorkflow");
        Intrinsics.checkNotNullParameter(uiWorkflow, "uiWorkflow");
        Intrinsics.checkNotNullParameter(documentWorkflow, "documentWorkflow");
        Intrinsics.checkNotNullParameter(sandboxFlags, "sandboxFlags");
        Intrinsics.checkNotNullParameter(externalInquiryController, "externalInquiryController");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        Intrinsics.checkNotNullParameter(uiStepSavedStateHelper, "uiStepSavedStateHelper");
        Intrinsics.checkNotNullParameter(restoreUiStepStateWorkerFactory, "restoreUiStepStateWorkerFactory");
        this.f18655a = applicationContext;
        this.f18656b = createInquiryWorker;
        this.f18657c = inquirySessionWorker;
        this.f18658d = pollingWorker;
        this.f18659e = transitionBackWorker;
        this.f18660f = transitionWorkerFactory;
        this.f18661g = updateInquirySessionWorkerFactory;
        this.f18662h = exchangeOneTimeCodeWorkerFactory;
        this.f18663i = governmentIdWorkflow;
        this.f18664j = selfieWorkflow;
        this.f18665k = uiWorkflow;
        this.f18666l = documentWorkflow;
        this.f18667m = sandboxFlags;
        this.f18668n = externalInquiryController;
        this.f18669o = navigationStateManager;
        this.f18670p = externalEventLogger;
        this.f18671q = uiStepSavedStateHelper;
        this.f18672r = restoreUiStepStateWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.d.k(dVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, null, 1019, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(n nVar, k.a aVar) {
        wm.r d10;
        nVar.f18667m.f();
        wm.h c10 = aVar.c();
        d10 = wm.z.d(nVar, null, new Function1() { // from class: po.t1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B1;
                B1 = com.withpersona.sdk2.inquiry.internal.n.B1((r.c) obj);
                return B1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final Object B0(c cVar, final l.e eVar, k.a aVar, Function0 function0) {
        up.b.d(this.f18669o, false, false, false, 4, null);
        wm.w.l(aVar, this.f18662h.a(eVar.j()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.f.class), "", new Function1() { // from class: po.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r C0;
                C0 = com.withpersona.sdk2.inquiry.internal.n.C0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, (com.withpersona.sdk2.inquiry.internal.network.d) obj);
                return C0;
            }
        });
        return new d.b(eVar.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r C0(final n nVar, final l.e eVar, final com.withpersona.sdk2.inquiry.internal.network.d it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit D0;
                    D0 = com.withpersona.sdk2.inquiry.internal.n.D0(com.withpersona.sdk2.inquiry.internal.network.d.this, (r.c) obj);
                    return D0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.a) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E0;
                    E0 = com.withpersona.sdk2.inquiry.internal.n.E0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, it, (r.c) obj);
                    return E0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final c.b C1(n nVar) {
        return nVar.f18667m.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        d.b bVar = (d.b) dVar;
        if (bVar.b() == null) {
            action.e(new l.c(bVar.a()));
        } else {
            action.e(new l.i(bVar.b(), new w.a(null, 1, null), bVar.a(), null, true, tp.g.f50218o.a()));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(n nVar, k.a aVar, boolean z10) {
        wm.r d10;
        nVar.f18667m.e(z10);
        wm.h c10 = aVar.c();
        d10 = wm.z.d(nVar, null, new Function1() { // from class: po.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E1;
                E1 = com.withpersona.sdk2.inquiry.internal.n.E1((r.c) obj);
                return E1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(n nVar, l.e eVar, com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, eVar.l(), ((d.a) dVar).a(), null, 4, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f32464a;
    }

    private final Object F0(c cVar, final l.f fVar, k.a aVar) {
        List list;
        NextStep.GovernmentId.AssetConfig assetConfig;
        String e10 = fVar.e();
        g3 g3Var = this.f18663i;
        String l10 = fVar.l();
        String r10 = fVar.r();
        ArrayList arrayList = new ArrayList();
        Iterator it = fVar.v().iterator();
        while (true) {
            String str = "US";
            if (!it.hasNext()) {
                break;
            }
            Id id2 = (Id) it.next();
            String r11 = fVar.r();
            if (r11 != null) {
                str = r11;
            }
            c4 o10 = eo.z.o(id2, str, fVar.G());
            if (o10 != null) {
                arrayList.add(o10);
            }
        }
        String b10 = fVar.b();
        String str2 = "US";
        String e11 = fVar.e();
        String z10 = fVar.z();
        boolean p10 = fVar.p();
        boolean q10 = fVar.q();
        List u10 = fVar.u();
        StepStyles.GovernmentIdStepStyle styles = fVar.getStyles();
        int A = fVar.A();
        String w10 = fVar.w();
        String y10 = fVar.y();
        NextStep.GovernmentId.Localizations D = fVar.D();
        String r12 = fVar.r();
        if (r12 != null) {
            str2 = r12;
        }
        List C = fVar.C();
        if (C != null) {
            list = CollectionsKt.V0(C);
        } else {
            list = null;
        }
        g3.a.C0293a f10 = vo.a.f(D, str2, list);
        long G = fVar.G();
        Integer theme = cVar.getTheme();
        boolean J = fVar.J();
        List t10 = fVar.t();
        List<NextStep.GovernmentId.VideoCaptureMethod> M = fVar.M();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(M, 10));
        for (NextStep.GovernmentId.VideoCaptureMethod videoCaptureMethod : M) {
            arrayList2.add(vn.a.valueOf(videoCaptureMethod.toString()));
        }
        VideoCaptureConfig videoCaptureConfig = new VideoCaptureConfig(0L, t10, arrayList2, fVar.O(), fVar.n(), 1, null);
        NextStep.GovernmentId.AssetConfig m10 = fVar.m();
        if (m10 == null) {
            assetConfig = new NextStep.GovernmentId.AssetConfig(null, null, null, null, null, 31, null);
        } else {
            assetConfig = m10;
        }
        return aVar.b(g3Var, new g3.a(l10, r10, arrayList, b10, e11, z10, p10, q10, u10, styles, f10, A, w10, y10, G, J, theme, videoCaptureConfig, assetConfig, !Intrinsics.areEqual(fVar.f(), w.c.f18984d), fVar.o(), fVar.I(), fVar.H(), fVar.s()), e10, new Function1() { // from class: po.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r G0;
                G0 = com.withpersona.sdk2.inquiry.internal.n.G0(com.withpersona.sdk2.inquiry.internal.n.this, fVar, (g3.b) obj);
                return G0;
            }
        });
    }

    private final wp.k F1(Object obj, l lVar) {
        wp.j jVar;
        if (lVar.d()) {
            jVar = wp.j.f52633e;
        } else {
            jVar = wp.j.f52632d;
        }
        return new wp.k(obj, jVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r G0(final n nVar, final l.f fVar, final g3.b it) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        wm.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, g3.b.C0294b.f21979a)) {
            d13 = wm.z.d(nVar, null, new Function1() { // from class: po.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = com.withpersona.sdk2.inquiry.internal.n.H0(l.f.this, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            return d13;
        } else if (it instanceof g3.b.c) {
            d12 = wm.z.d(nVar, null, new Function1() { // from class: po.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = com.withpersona.sdk2.inquiry.internal.n.I0(com.withpersona.sdk2.inquiry.internal.n.this, it, fVar, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, g3.b.d.f21981a)) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit J0;
                    J0 = com.withpersona.sdk2.inquiry.internal.n.J0(l.f.this, (r.c) obj);
                    return J0;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, g3.b.a.f21978a)) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.q0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K0;
                    K0 = com.withpersona.sdk2.inquiry.internal.n.K0(l.f.this, (r.c) obj);
                    return K0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(l.f fVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = fVar.b();
        String l10 = fVar.l();
        StepStyles.GovernmentIdStepStyle styles = fVar.getStyles();
        NextStep.CancelDialog c10 = fVar.c();
        String str4 = null;
        if (c10 != null) {
            str = c10.getTitle();
        } else {
            str = null;
        }
        NextStep.CancelDialog c11 = fVar.c();
        if (c11 != null) {
            str2 = c11.getPrompt();
        } else {
            str2 = null;
        }
        NextStep.CancelDialog c12 = fVar.c();
        if (c12 != null) {
            str3 = c12.getBtnResume();
        } else {
            str3 = null;
        }
        NextStep.CancelDialog c13 = fVar.c();
        if (c13 != null) {
            str4 = c13.getBtnSubmit();
        }
        action.d(new b.a(b10, l10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(n nVar, g3.b bVar, l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.b.c cVar = (g3.b.c) bVar;
        if (nVar.k0(cVar.a())) {
            action.e(nVar.i1(fVar));
        } else {
            x1(nVar, action, fVar.l(), cVar.a(), null, 4, null);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.k(fVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.k(fVar, null, null, w.c.f18984d, null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f32464a;
    }

    private final Object L0(c cVar, final vo.d dVar, k.a aVar, StepStyle stepStyle, Function0 function0) {
        up.b.d(this.f18669o, false, false, false, 4, null);
        wm.w.l(aVar, this.f18656b.a(dVar), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.c.class), "", new Function1() { // from class: po.z1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r M0;
                M0 = com.withpersona.sdk2.inquiry.internal.n.M0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (com.withpersona.sdk2.inquiry.internal.network.a) obj);
                return M0;
            }
        });
        return new d.b(stepStyle, true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r M0(final n nVar, final vo.d dVar, final com.withpersona.sdk2.inquiry.internal.network.a it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = com.withpersona.sdk2.inquiry.internal.n.N0(com.withpersona.sdk2.inquiry.internal.network.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.C0236a) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.m0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = com.withpersona.sdk2.inquiry.internal.n.O0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, it, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b bVar = (a.b) aVar;
        if (mp.h.e(bVar.b())) {
            action.d(new b.d(bVar.b(), bVar.a()));
        } else {
            action.e(new l.c(bVar.b()));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(n nVar, vo.d dVar, com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.C0236a c0236a = (a.C0236a) aVar;
        nVar.w1(action, dVar.g(), c0236a.a(), c0236a.b());
        return Unit.f32464a;
    }

    private final Object P0(c cVar, l.g gVar, k.a aVar, Function0 function0) {
        return L0(cVar, new vo.d(null, null, gVar.j(), gVar.k(), cVar.a(), null, null, null, null, null, null, 2019, null), aVar, gVar.getStyles(), function0);
    }

    private final Object Q0(c cVar, final l.h hVar, k.a aVar, Function0 function0) {
        boolean z10;
        String str;
        String str2;
        List e10;
        List list;
        String str3;
        String str4;
        String e11 = hVar.e();
        x5 x5Var = this.f18664j;
        String l10 = hVar.l();
        String b10 = hVar.b();
        String t10 = hVar.t();
        String e12 = hVar.e();
        boolean o10 = hVar.o();
        boolean p10 = hVar.p();
        String s10 = hVar.s();
        boolean z11 = hVar.z();
        boolean C = hVar.C();
        NextStep.Selfie.Localizations u10 = hVar.u();
        if (hVar.A() == NextStep.Selfie.CaptureMethod.ONLY_CENTER) {
            z10 = true;
        } else {
            z10 = false;
        }
        x5.b.a g10 = vo.a.g(u10, z10);
        d2 a10 = e2.a(hVar.A());
        List v10 = hVar.v();
        if (v10 == null || v10.isEmpty()) {
            str = l10;
            str2 = b10;
            int i10 = e.f18715a[hVar.A().ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    throw new lr.p();
                }
                e10 = CollectionsKt.o(a1.b.f27138d, a1.b.f27139e, a1.b.f27140i);
            } else {
                e10 = CollectionsKt.e(a1.b.f27138d);
            }
        } else {
            List<NextStep.Selfie.SelfiePose> v11 = hVar.v();
            str = l10;
            str2 = b10;
            e10 = new ArrayList(CollectionsKt.w(v11, 10));
            for (NextStep.Selfie.SelfiePose selfiePose : v11) {
                e10.add(m1.c(selfiePose));
            }
        }
        String cameraPermissionsTitle = hVar.u().getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = hVar.u().getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = hVar.u().getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = hVar.u().getPromptPage().getCameraPermissionsCancelButtonText();
        String microphonePermissionsTitle = hVar.u().getPromptPage().getMicrophonePermissionsTitle();
        String microphonePermissionsPrompt = hVar.u().getPromptPage().getMicrophonePermissionsPrompt();
        String microphonePermissionsBtnContinueMobile = hVar.u().getPromptPage().getMicrophonePermissionsBtnContinueMobile();
        String microphonePermissionsBtnCancel = hVar.u().getPromptPage().getMicrophonePermissionsBtnCancel();
        StepStyles.SelfieStepStyle styles = hVar.getStyles();
        NextStep.Selfie.AssetConfig m10 = hVar.m();
        if (m10 == null) {
            list = e10;
            m10 = new NextStep.Selfie.AssetConfig(null, null, 3, null);
            str3 = str;
            str4 = cameraPermissionsTitle;
        } else {
            list = e10;
            str3 = str;
            str4 = cameraPermissionsTitle;
        }
        PendingPageTextPosition w10 = hVar.w();
        List r10 = hVar.r();
        List<NextStep.Selfie.VideoCaptureMethod> G = hVar.G();
        String str5 = str3;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(G, 10));
        for (NextStep.Selfie.VideoCaptureMethod videoCaptureMethod : G) {
            arrayList.add(vn.a.valueOf(videoCaptureMethod.toString()));
        }
        return new wo.d(aVar.b(x5Var, new x5.b(str5, str2, t10, e12, o10, p10, s10, z11, C, g10, a10, list, str4, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, microphonePermissionsTitle, microphonePermissionsPrompt, microphonePermissionsBtnContinueMobile, microphonePermissionsBtnCancel, styles, new com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig(0L, r10, arrayList, hVar.H(), hVar.n(), 1, null), m10, w10, hVar.y(), hVar.q()), e11, new Function1() { // from class: po.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r R0;
                R0 = com.withpersona.sdk2.inquiry.internal.n.R0(com.withpersona.sdk2.inquiry.internal.n.this, hVar, (x5.c) obj);
                return R0;
            }
        }), !Intrinsics.areEqual(hVar.f(), w.c.f18984d), hVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r R0(final n nVar, final l.h hVar, final x5.c it) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        wm.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, x5.c.b.f27906a)) {
            d13 = wm.z.d(nVar, null, new Function1() { // from class: po.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = com.withpersona.sdk2.inquiry.internal.n.S0(l.h.this, (r.c) obj);
                    return S0;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, x5.c.d.f27908a)) {
            d12 = wm.z.d(nVar, null, new Function1() { // from class: po.c1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = com.withpersona.sdk2.inquiry.internal.n.T0(l.h.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, x5.c.a.f27905a)) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = com.withpersona.sdk2.inquiry.internal.n.U0(l.h.this, (r.c) obj);
                    return U0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof x5.c.C0359c) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = com.withpersona.sdk2.inquiry.internal.n.V0(com.withpersona.sdk2.inquiry.internal.n.this, it, hVar, (r.c) obj);
                    return V0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(l.h hVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = hVar.b();
        String l10 = hVar.l();
        StepStyles.SelfieStepStyle styles = hVar.getStyles();
        NextStep.CancelDialog c10 = hVar.c();
        String str4 = null;
        if (c10 != null) {
            str = c10.getTitle();
        } else {
            str = null;
        }
        NextStep.CancelDialog c11 = hVar.c();
        if (c11 != null) {
            str2 = c11.getPrompt();
        } else {
            str2 = null;
        }
        NextStep.CancelDialog c12 = hVar.c();
        if (c12 != null) {
            str3 = c12.getBtnResume();
        } else {
            str3 = null;
        }
        NextStep.CancelDialog c13 = hVar.c();
        if (c13 != null) {
            str4 = c13.getBtnSubmit();
        }
        action.d(new b.a(b10, l10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.k(hVar, null, null, new w.a(null, 1, null), null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.k(hVar, null, null, w.c.f18984d, null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(n nVar, x5.c cVar, l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5.c.C0359c c0359c = (x5.c.C0359c) cVar;
        if (nVar.k0(c0359c.a())) {
            action.e(nVar.i1(hVar));
        } else {
            x1(nVar, action, hVar.l(), c0359c.a(), null, 4, null);
        }
        return Unit.f32464a;
    }

    private final Object W0(c cVar, l.i iVar, k.a aVar, Function0 function0) {
        up.b.d(this.f18669o, false, false, false, 4, null);
        return new d.b(iVar.getStyles(), iVar.m(), function0);
    }

    /* JADX WARN: Removed duplicated region for block: B:66:0x0145  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0173  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object X0(com.withpersona.sdk2.inquiry.internal.n.c r27, final com.withpersona.sdk2.inquiry.internal.l.j r28, wm.k.a r29, kotlin.jvm.functions.Function0 r30) {
        /*
            Method dump skipped, instructions count: 399
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.n.X0(com.withpersona.sdk2.inquiry.internal.n$c, com.withpersona.sdk2.inquiry.internal.l$j, wm.k$a, kotlin.jvm.functions.Function0):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r Y0(final n nVar, final l.j jVar, final v4.c it) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        wm.r d13;
        wm.r d14;
        wm.r d15;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, v4.c.b.f36019a)) {
            d15 = wm.z.d(nVar, null, new Function1() { // from class: po.f1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z0;
                    Z0 = com.withpersona.sdk2.inquiry.internal.n.Z0(l.j.this, (r.c) obj);
                    return Z0;
                }
            }, 1, null);
            return d15;
        } else if (it instanceof v4.c.d) {
            d14 = wm.z.d(nVar, null, new Function1() { // from class: po.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a12;
                    a12 = com.withpersona.sdk2.inquiry.internal.n.a1(com.withpersona.sdk2.inquiry.internal.n.this, it, jVar, (r.c) obj);
                    return a12;
                }
            }, 1, null);
            return d14;
        } else if (it instanceof v4.c.f) {
            d13 = wm.z.d(nVar, null, new Function1() { // from class: po.i1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = com.withpersona.sdk2.inquiry.internal.n.b1(l.j.this, it, (r.c) obj);
                    return b12;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, v4.c.e.f36023a)) {
            d12 = wm.z.d(nVar, null, new Function1() { // from class: po.j1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c12;
                    c12 = com.withpersona.sdk2.inquiry.internal.n.c1(l.j.this, (r.c) obj);
                    return c12;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v4.c.a) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.k1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d16;
                    d16 = com.withpersona.sdk2.inquiry.internal.n.d1(l.j.this, (r.c) obj);
                    return d16;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof v4.c.C0456c) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.l1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = com.withpersona.sdk2.inquiry.internal.n.e1(l.j.this, (r.c) obj);
                    return e12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(l.j jVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = jVar.b();
        String l10 = jVar.l();
        StepStyles.UiStepStyle styles = jVar.getStyles();
        NextStep.CancelDialog c10 = jVar.c();
        String str4 = null;
        if (c10 != null) {
            str = c10.getTitle();
        } else {
            str = null;
        }
        NextStep.CancelDialog c11 = jVar.c();
        if (c11 != null) {
            str2 = c11.getPrompt();
        } else {
            str2 = null;
        }
        NextStep.CancelDialog c12 = jVar.c();
        if (c12 != null) {
            str3 = c12.getBtnResume();
        } else {
            str3 = null;
        }
        NextStep.CancelDialog c13 = jVar.c();
        if (c13 != null) {
            str4 = c13.getBtnSubmit();
        }
        action.d(new b.a(b10, l10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(n nVar, v4.c cVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.d dVar = (v4.c.d) cVar;
        if (nVar.k0(dVar.a())) {
            action.e(nVar.i1(jVar));
        } else {
            nVar.w1(action, jVar.l(), dVar.a(), dVar.b());
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(l.j jVar, v4.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.f fVar = (v4.c.f) cVar;
        action.e(l.j.k(jVar, null, null, new w.b(new x.c(fVar.b(), fVar.a(), fVar.c())), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.k(jVar, null, null, new w.d(null), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.k(jVar, null, null, w.c.f18984d, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new b.C0234b(jVar.b(), jVar.r(), jVar.p(), jVar.l()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r f1(final n nVar, final l.j jVar, final s.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, s.b.a.f18967a)) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = com.withpersona.sdk2.inquiry.internal.n.g1(com.withpersona.sdk2.inquiry.internal.n.this, jVar, (r.c) obj);
                    return g12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof s.b.C0239b) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.q1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h12;
                    h12 = com.withpersona.sdk2.inquiry.internal.n.h1(s.b.this, (r.c) obj);
                    return h12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(n nVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof l.j)) {
            return Unit.f32464a;
        }
        action.e(nVar.i1(jVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(s.b bVar, r.c action) {
        l.j jVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof l.j) {
            jVar = (l.j) c10;
        } else {
            jVar = null;
        }
        l.j jVar2 = jVar;
        if (jVar2 == null) {
            return Unit.f32464a;
        }
        action.e(l.j.k(jVar2, null, null, null, null, null, null, null, null, ((s.b.C0239b) bVar).a(), false, false, false, null, null, null, null, null, false, 130815, null));
        return Unit.f32464a;
    }

    private final l.i i1(j2 j2Var) {
        return new l.i(j2Var.l(), null, j2Var.b(), j2Var.getStyles(), true, j2Var.a(), 2, null);
    }

    private final void j1(c cVar, final l lVar, k.a aVar) {
        final String l10 = lVar.l();
        String b10 = lVar.b();
        String e10 = lVar.e();
        final w f10 = lVar.f();
        if (f10 instanceof w.b) {
            if (l10 != null && b10 != null) {
                wm.w.l(aVar, this.f18660f.a(l10, b10, lVar.a(), ((w.b) f10).a()), Reflection.typeOf(x.class), "", new Function1() { // from class: po.v1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r u12;
                        u12 = com.withpersona.sdk2.inquiry.internal.n.u1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, l10, (x.b) obj);
                        return u12;
                    }
                });
            }
        } else if (f10 instanceof w.d) {
            if (l10 != null && b10 != null) {
                wm.w.l(aVar, this.f18661g.a(l10, b10, lVar.a()), Reflection.typeOf(a0.class), "", new Function1() { // from class: po.w1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r m12;
                        m12 = com.withpersona.sdk2.inquiry.internal.n.m1(com.withpersona.sdk2.inquiry.internal.n.this, l10, f10, (com.withpersona.sdk2.inquiry.internal.network.i) obj);
                        return m12;
                    }
                });
            }
        } else if (f10 instanceof w.a) {
            if (l10 != null && b10 != null) {
                wm.w.l(aVar, this.f18658d.a(l10, b10, ((w.a) f10).a(), lVar.a()), Reflection.typeOf(q.class), "", new Function1() { // from class: po.x1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r p12;
                        p12 = com.withpersona.sdk2.inquiry.internal.n.p1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, l10, (q.c) obj);
                        return p12;
                    }
                });
            }
        } else if (Intrinsics.areEqual(f10, w.c.f18984d)) {
            if (l10 != null && b10 != null && e10 != null) {
                wm.w.l(aVar, this.f18659e.a(l10, b10, e10, lVar.a()), Reflection.typeOf(u.class), "", new Function1() { // from class: po.y1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r r12;
                        r12 = com.withpersona.sdk2.inquiry.internal.n.r1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, l10, (com.withpersona.sdk2.inquiry.internal.network.h) obj);
                        return r12;
                    }
                });
            }
        } else if (f10 == null) {
        } else {
            throw new lr.p();
        }
    }

    private final boolean k0(InternalErrorInfo internalErrorInfo) {
        if (internalErrorInfo instanceof InternalErrorInfo.NetworkErrorInfo) {
            InternalErrorInfo.NetworkErrorInfo networkErrorInfo = (InternalErrorInfo.NetworkErrorInfo) internalErrorInfo;
            if ((networkErrorInfo.getResponseError() instanceof ErrorResponse.Error.InconsistentTransitionError) || (networkErrorInfo.getResponseError() instanceof ErrorResponse.Error.TransitionFromTerminalStateError)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static final wm.r k1(final n nVar, final l lVar, final String str, final InternalErrorInfo internalErrorInfo) {
        wm.r d10;
        d10 = wm.z.d(nVar, null, new Function1() { // from class: po.u1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l12;
                l12 = com.withpersona.sdk2.inquiry.internal.n.l1(InternalErrorInfo.this, lVar, nVar, str, (r.c) obj);
                return l12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(InternalErrorInfo internalErrorInfo, l lVar, n nVar, String str, r.c action) {
        l.j jVar;
        Collection<UiComponentError> values;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (internalErrorInfo instanceof InternalErrorInfo.NetworkErrorInfo) {
            InternalErrorInfo.NetworkErrorInfo networkErrorInfo = (InternalErrorInfo.NetworkErrorInfo) internalErrorInfo;
            ErrorResponse.Error responseError = networkErrorInfo.getResponseError();
            l.j jVar2 = null;
            r5 = null;
            List list = null;
            if (responseError instanceof ErrorResponse.Error.InvalidFieldValueError) {
                Object c10 = action.c();
                if (c10 instanceof l.j) {
                    jVar = (l.j) c10;
                } else {
                    jVar = null;
                }
                if (jVar == null) {
                    return Unit.f32464a;
                }
                Map<String, UiComponentError> details = ((ErrorResponse.Error.InvalidFieldValueError) responseError).getDetails();
                if (details != null && (values = details.values()) != null) {
                    list = CollectionsKt.h1(values);
                }
                action.e(l.j.k(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, list, null, null, false, 245755, null));
            } else if (responseError instanceof ErrorResponse.Error.InconsistentTransitionError) {
                if (lVar instanceof j2) {
                    action.e(nVar.i1((j2) lVar));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            } else if (!(responseError instanceof ErrorResponse.Error.FieldNotFoundError) && !(responseError instanceof ErrorResponse.Error.InactiveTemplateError) && !(responseError instanceof ErrorResponse.Error.InvalidConfigError) && !(responseError instanceof ErrorResponse.Error.RateLimitExceededError) && !(responseError instanceof ErrorResponse.Error.TransitionFromTerminalStateError) && !(responseError instanceof ErrorResponse.Error.UnauthenticatedError) && !(responseError instanceof ErrorResponse.Error.UnknownError) && responseError != null) {
                throw new lr.p();
            } else {
                if (networkErrorInfo.isRecoverable()) {
                    Object c11 = action.c();
                    if (c11 instanceof l.j) {
                        jVar2 = (l.j) c11;
                    }
                    l.j jVar3 = jVar2;
                    if (jVar3 == null) {
                        return Unit.f32464a;
                    }
                    action.e(l.j.k(jVar3, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, networkErrorInfo, null, false, 229371, null));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            }
        } else if (!(internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode)) {
            throw new lr.p();
        } else {
            x1(nVar, action, str, internalErrorInfo, null, 4, null);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, n nVar, l lVar) {
        n0(aVar, nVar, lVar, false);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r m1(final n nVar, final String str, final w wVar, final com.withpersona.sdk2.inquiry.internal.network.i it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof i.a) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n12;
                    n12 = com.withpersona.sdk2.inquiry.internal.n.n1(com.withpersona.sdk2.inquiry.internal.n.this, str, it, (r.c) obj);
                    return n12;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, i.b.f18938a)) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = com.withpersona.sdk2.inquiry.internal.n.o1(com.withpersona.sdk2.inquiry.internal.w.this, (r.c) obj);
                    return o12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n0(k.a aVar, n nVar, final l lVar, final boolean z10) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(nVar, null, new Function1() { // from class: po.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o02;
                o02 = com.withpersona.sdk2.inquiry.internal.n.o0(com.withpersona.sdk2.inquiry.internal.l.this, z10, (r.c) obj);
                return o02;
            }
        }, 1, null);
        c10.d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(n nVar, String str, com.withpersona.sdk2.inquiry.internal.network.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, str, ((i.a) iVar).a(), null, 4, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(l lVar, boolean z10, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = lVar.b();
        String l10 = lVar.l();
        StepStyle styles = lVar.getStyles();
        NextStep.CancelDialog c10 = lVar.c();
        String str4 = null;
        if (c10 != null) {
            str = c10.getTitle();
        } else {
            str = null;
        }
        NextStep.CancelDialog c11 = lVar.c();
        if (c11 != null) {
            str2 = c11.getPrompt();
        } else {
            str2 = null;
        }
        NextStep.CancelDialog c12 = lVar.c();
        if (c12 != null) {
            str3 = c12.getBtnResume();
        } else {
            str3 = null;
        }
        NextStep.CancelDialog c13 = lVar.c();
        if (c13 != null) {
            str4 = c13.getBtnSubmit();
        }
        action.d(new b.a(b10, l10, styles, str, str2, str3, str4, z10));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(w wVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        w.d dVar = (w.d) wVar;
        if (dVar.a() != null) {
            action.e(dVar.a());
        } else {
            action.e(((l) action.c()).i(new w.a(null, 1, null)));
        }
        return Unit.f32464a;
    }

    private final Object p0(l.a aVar, k.a aVar2) {
        aVar2.a("complete", new h(aVar2, this, aVar, null));
        return new d.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r p1(n nVar, l lVar, String str, final q.c it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof q.c.b) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.o1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit q12;
                    q12 = com.withpersona.sdk2.inquiry.internal.n.q1(q.c.this, (r.c) obj);
                    return q12;
                }
            }, 1, null);
            return d10;
        } else if (it instanceof q.c.a) {
            return k1(nVar, lVar, str, ((q.c.a) it).a());
        } else {
            throw new lr.p();
        }
    }

    private final Object q0(c cVar, l.b bVar, k.a aVar, Function0 function0) {
        return L0(cVar, new vo.d(bVar.o(), bVar.p(), bVar.b(), bVar.l(), cVar.a(), bVar.k(), bVar.j(), bVar.n(), null, bVar.m(), bVar.q(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null), aVar, bVar.getStyles(), function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(q.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((q.c.b) cVar).a());
        return Unit.f32464a;
    }

    private final Object r0(c cVar, final l.c cVar2, k.a aVar, Function0 function0) {
        up.b.d(this.f18669o, false, false, false, 4, null);
        wm.w.l(aVar, this.f18657c.a(cVar2.b()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.a.class), "", new Function1() { // from class: po.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r s02;
                s02 = com.withpersona.sdk2.inquiry.internal.n.s0(com.withpersona.sdk2.inquiry.internal.n.this, cVar2, (com.withpersona.sdk2.inquiry.internal.network.b) obj);
                return s02;
            }
        });
        return new d.b(cVar2.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r r1(final n nVar, final l lVar, final String str, final com.withpersona.sdk2.inquiry.internal.network.h it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof h.b) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s12;
                    s12 = com.withpersona.sdk2.inquiry.internal.n.s1(com.withpersona.sdk2.inquiry.internal.network.h.this, (r.c) obj);
                    return s12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof h.a) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t12;
                    t12 = com.withpersona.sdk2.inquiry.internal.n.t1(com.withpersona.sdk2.inquiry.internal.n.this, it, lVar, str, (r.c) obj);
                    return t12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r s0(final n nVar, final l.c cVar, final com.withpersona.sdk2.inquiry.internal.network.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof b.C0237b) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t02;
                    t02 = com.withpersona.sdk2.inquiry.internal.n.t0(l.c.this, it, nVar, (r.c) obj);
                    return t02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.a) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.u0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit u02;
                    u02 = com.withpersona.sdk2.inquiry.internal.n.u0(com.withpersona.sdk2.inquiry.internal.n.this, cVar, it, (r.c) obj);
                    return u02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(com.withpersona.sdk2.inquiry.internal.network.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h.b bVar = (h.b) hVar;
        bVar.a().g(true);
        action.e(bVar.a());
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, n nVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        b.C0237b c0237b = (b.C0237b) bVar;
        action.e(new l.i(c0237b.b(), null, cVar.b(), null, true, c0237b.a(), 2, null));
        nVar.f18670p.b(new b.C0551b(cVar.b(), com.withpersona.sdk2.inquiry.internal.h.f18512b.a(c0237b.b())));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(n nVar, com.withpersona.sdk2.inquiry.internal.network.h hVar, l lVar, String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h.a aVar = (h.a) hVar;
        if (nVar.k0(aVar.a()) && (lVar instanceof j2)) {
            action.e(nVar.i1((j2) lVar));
        } else {
            x1(nVar, action, str, aVar.a(), null, 4, null);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(n nVar, l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, cVar.l(), ((b.a) bVar).a(), null, 4, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r u1(n nVar, l lVar, String str, final x.b it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof x.b.a) {
            return k1(nVar, lVar, str, ((x.b.a) it).a());
        }
        if (it instanceof x.b.C0241b) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit v12;
                    v12 = com.withpersona.sdk2.inquiry.internal.n.v1(x.b.this, (r.c) obj);
                    return v12;
                }
            }, 1, null);
            return d10;
        }
        throw new lr.p();
    }

    private final Object v0(final l.d dVar, k.a aVar) {
        r2.e eVar;
        boolean z10;
        boolean z11;
        String str;
        String str2;
        String documentId = dVar.n().getConfig().getDocumentId();
        int i10 = e.f18717c[dVar.n().getConfig().getStartPage().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (documentId != null) {
                    eVar = new r2.e.b(documentId);
                } else {
                    eVar = r2.e.a.f54966d;
                }
            } else {
                throw new lr.p();
            }
        } else {
            eVar = r2.e.a.f54966d;
        }
        r2.e eVar2 = eVar;
        String e10 = dVar.e();
        r2 r2Var = this.f18666l;
        String l10 = dVar.l();
        String b10 = dVar.b();
        String e11 = dVar.e();
        String o10 = dVar.o();
        String title = dVar.n().getConfig().getLocalizations().getPromptPage().getTitle();
        String prompt = dVar.n().getConfig().getLocalizations().getPromptPage().getPrompt();
        String disclaimer = dVar.n().getConfig().getLocalizations().getPromptPage().getDisclaimer();
        String btnSubmit = dVar.n().getConfig().getLocalizations().getPromptPage().getBtnSubmit();
        String title2 = dVar.n().getConfig().getLocalizations().getPendingPage().getTitle();
        String description = dVar.n().getConfig().getLocalizations().getPendingPage().getDescription();
        String fieldKeyDocument = dVar.n().getConfig().getFieldKeyDocument();
        String kind = dVar.n().getConfig().getKind();
        int documentFileLimit = dVar.n().getConfig().getDocumentFileLimit();
        Boolean backStepEnabled = dVar.n().getConfig().getBackStepEnabled();
        if (backStepEnabled != null) {
            z10 = backStepEnabled.booleanValue();
        } else {
            z10 = false;
        }
        Boolean cancelButtonEnabled = dVar.n().getConfig().getCancelButtonEnabled();
        if (cancelButtonEnabled != null) {
            z11 = cancelButtonEnabled.booleanValue();
        } else {
            z11 = true;
        }
        String cameraPermissionsTitle = dVar.n().getConfig().getLocalizations().getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = dVar.n().getConfig().getLocalizations().getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = dVar.n().getConfig().getLocalizations().getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = dVar.n().getConfig().getLocalizations().getPromptPage().getCameraPermissionsCancelButtonText();
        StepStyles.DocumentStepStyle styles = dVar.getStyles();
        yn.l p10 = dVar.p();
        NextStep.Document.AssetConfig m10 = dVar.m();
        if (m10 == null) {
            str = l10;
            str2 = b10;
            m10 = new NextStep.Document.AssetConfig(null, null, 3, null);
        } else {
            str = l10;
            str2 = b10;
        }
        PendingPageTextPosition pendingPageTextVerticalPosition = dVar.n().getConfig().getPendingPageTextVerticalPosition();
        if (pendingPageTextVerticalPosition == null) {
            pendingPageTextVerticalPosition = PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
        return new wo.d(aVar.b(r2Var, new r2.b(str, str2, e11, o10, title, prompt, disclaimer, btnSubmit, title2, description, fieldKeyDocument, kind, documentId, eVar2, p10, documentFileLimit, z10, z11, cameraPermissionsTitle, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, styles, m10, pendingPageTextVerticalPosition), e10, new Function1() { // from class: po.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r w02;
                w02 = com.withpersona.sdk2.inquiry.internal.n.w0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (r2.c) obj);
                return w02;
            }
        }), !Intrinsics.areEqual(dVar.f(), w.c.f18984d), dVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((l) action.c()).i(new w.d(((x.b.C0241b) bVar).a())));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r w0(final n nVar, final l.d dVar, final r2.c it) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        wm.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, r2.c.b.f54934a)) {
            d13 = wm.z.d(nVar, null, new Function1() { // from class: po.v0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x02;
                    x02 = com.withpersona.sdk2.inquiry.internal.n.x0(l.d.this, (r.c) obj);
                    return x02;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, r2.c.a.f54933a)) {
            d12 = wm.z.d(nVar, null, new Function1() { // from class: po.x0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y02;
                    y02 = com.withpersona.sdk2.inquiry.internal.n.y0(l.d.this, (r.c) obj);
                    return y02;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof r2.c.C0760c) {
            d11 = wm.z.d(nVar, null, new Function1() { // from class: po.y0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit z02;
                    z02 = com.withpersona.sdk2.inquiry.internal.n.z0(com.withpersona.sdk2.inquiry.internal.n.this, it, dVar, (r.c) obj);
                    return z02;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, r2.c.d.f54936a)) {
            d10 = wm.z.d(nVar, null, new Function1() { // from class: po.z0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = com.withpersona.sdk2.inquiry.internal.n.A0(l.d.this, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    private final void w1(r.c cVar, String str, InternalErrorInfo internalErrorInfo, String str2) {
        if (str2 == null) {
            str2 = po.r.b(internalErrorInfo);
        }
        cVar.d(new b.c(str2, po.r.a(internalErrorInfo), internalErrorInfo, str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(l.d dVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = dVar.b();
        String l10 = dVar.l();
        StepStyles.DocumentStepStyle styles = dVar.getStyles();
        NextStep.CancelDialog c10 = dVar.c();
        String str4 = null;
        if (c10 != null) {
            str = c10.getTitle();
        } else {
            str = null;
        }
        NextStep.CancelDialog c11 = dVar.c();
        if (c11 != null) {
            str2 = c11.getPrompt();
        } else {
            str2 = null;
        }
        NextStep.CancelDialog c12 = dVar.c();
        if (c12 != null) {
            str3 = c12.getBtnResume();
        } else {
            str3 = null;
        }
        NextStep.CancelDialog c13 = dVar.c();
        if (c13 != null) {
            str4 = c13.getBtnSubmit();
        }
        action.d(new b.a(b10, l10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f32464a;
    }

    static /* synthetic */ void x1(n nVar, r.c cVar, String str, InternalErrorInfo internalErrorInfo, String str2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str2 = null;
        }
        nVar.w1(cVar, str, internalErrorInfo, str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.d.k(dVar, null, null, w.c.f18984d, null, null, null, null, null, null, null, 1019, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(n nVar, r2.c cVar, l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        r2.c.C0760c c0760c = (r2.c.C0760c) cVar;
        if (nVar.k0(c0760c.a())) {
            action.e(nVar.i1(dVar));
        } else {
            x1(nVar, action, dVar.l(), c0760c.a(), null, 4, null);
        }
        return Unit.f32464a;
    }

    private final fp.i z1(Object obj, final k.a aVar) {
        return new fp.i(obj, new Function0() { // from class: po.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit A1;
                A1 = com.withpersona.sdk2.inquiry.internal.n.A1(com.withpersona.sdk2.inquiry.internal.n.this, aVar);
                return A1;
            }
        }, new Function0() { // from class: po.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                c.b C1;
                C1 = com.withpersona.sdk2.inquiry.internal.n.C1(com.withpersona.sdk2.inquiry.internal.n.this);
                return C1;
            }
        }, this.f18667m.b(), new Function1() { // from class: po.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit D1;
                D1 = com.withpersona.sdk2.inquiry.internal.n.D1(com.withpersona.sdk2.inquiry.internal.n.this, aVar, ((Boolean) obj2).booleanValue());
                return D1;
            }
        });
    }

    @Override // wm.k
    /* renamed from: j0 */
    public l d(c props, wm.i iVar) {
        l lVar;
        Parcelable readParcelable;
        Intrinsics.checkNotNullParameter(props, "props");
        if (iVar != null) {
            ByteString b10 = iVar.b();
            if (b10.G() <= 0) {
                b10 = null;
            }
            if (b10 == null) {
                readParcelable = null;
            } else {
                Parcel obtain = Parcel.obtain();
                Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
                byte[] L = b10.L();
                obtain.unmarshall(L, 0, L.length);
                obtain.setDataPosition(0);
                readParcelable = obtain.readParcelable(wm.i.class.getClassLoader());
                Intrinsics.checkNotNull(readParcelable);
                Intrinsics.checkNotNullExpressionValue(readParcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            lVar = (l) readParcelable;
        } else {
            lVar = null;
        }
        if (lVar != null) {
            if (lVar instanceof l.j) {
                return l.j.k((l.j) lVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, true, 131071, null);
            }
            return lVar;
        } else if (props instanceof c.C0235c) {
            c.C0235c c0235c = (c.C0235c) props;
            return new l.b(c0235c.g(), c0235c.h(), c0235c.b(), c0235c.c(), c0235c.e(), c0235c.d(), c0235c.i(), c0235c.f());
        } else if (props instanceof c.b) {
            return new l.e(((c.b) props).b());
        } else {
            if (props instanceof c.a) {
                c.a aVar = (c.a) props;
                if (mp.h.e(aVar.b()) && aVar.c() != null) {
                    return new l.g(aVar.b(), aVar.c());
                }
                String c10 = aVar.c();
                if (c10 != null && c10.length() != 0) {
                    return new l.i(aVar.c(), new w.a(null, 1, null), aVar.b(), null, true, tp.g.f50218o.a());
                }
                return new l.c(aVar.b());
            }
            throw new lr.p();
        }
    }

    @Override // wm.k
    /* renamed from: l0 */
    public Object f(c renderProps, final l renderState, final k.a context) {
        Object p02;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        j1(renderProps, renderState, context);
        this.f18669o.e(Intrinsics.areEqual(renderState.f(), w.c.f18984d));
        Function0 function0 = new Function0() { // from class: po.a0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m02;
                m02 = com.withpersona.sdk2.inquiry.internal.n.m0(k.a.this, this, renderState);
                return m02;
            }
        };
        context.a("controllerRequestCollector", new f(context, renderState, null));
        if (renderProps.isCancelled()) {
            context.a("cancel_inquiry", new g(context, this, renderState, null));
        }
        if (renderState instanceof l.b) {
            p02 = q0(renderProps, (l.b) renderState, context, function0);
        } else if (renderState instanceof l.g) {
            p02 = P0(renderProps, (l.g) renderState, context, function0);
        } else if (renderState instanceof l.c) {
            p02 = r0(renderProps, (l.c) renderState, context, function0);
        } else if (renderState instanceof l.e) {
            p02 = B0(renderProps, (l.e) renderState, context, function0);
        } else if (renderState instanceof l.i) {
            p02 = W0(renderProps, (l.i) renderState, context, function0);
        } else if (renderState instanceof l.f) {
            p02 = F0(renderProps, (l.f) renderState, context);
        } else if (renderState instanceof l.h) {
            p02 = Q0(renderProps, (l.h) renderState, context, function0);
        } else if (renderState instanceof l.j) {
            p02 = X0(renderProps, (l.j) renderState, context, function0);
        } else if (renderState instanceof l.d) {
            p02 = v0((l.d) renderState, context);
        } else if (renderState instanceof l.a) {
            p02 = p0((l.a) renderState, context);
        } else {
            throw new lr.p();
        }
        wp.k F1 = F1(p02, renderState);
        if (this.f18667m.c()) {
            return z1(F1, context);
        }
        return F1;
    }

    @Override // wm.k
    /* renamed from: y1 */
    public wm.i g(l state) {
        Intrinsics.checkNotNullParameter(state, "state");
        if (state instanceof l.j) {
            l.j jVar = (l.j) state;
            this.f18671q.e(jVar.l(), jVar.b(), jVar.u(), jVar.getComponents());
            return ym.s.a(l.j.k(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 261887, null));
        }
        return ym.s.a(state);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        po.f a();

        Integer getTheme();

        boolean isCancelled();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f18697a;

            /* renamed from: b  reason: collision with root package name */
            private final po.f f18698b;

            /* renamed from: c  reason: collision with root package name */
            private final Integer f18699c;

            /* renamed from: d  reason: collision with root package name */
            private final boolean f18700d;

            public b(String oneTimeLinkCode, po.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f18697a = oneTimeLinkCode;
                this.f18698b = environment;
                this.f18699c = num;
                this.f18700d = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public po.f a() {
                return this.f18698b;
            }

            public final String b() {
                return this.f18697a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof b) {
                    b bVar = (b) obj;
                    return Intrinsics.areEqual(this.f18697a, bVar.f18697a) && this.f18698b == bVar.f18698b && Intrinsics.areEqual(this.f18699c, bVar.f18699c) && this.f18700d == bVar.f18700d;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f18699c;
            }

            public int hashCode() {
                int hashCode = ((this.f18697a.hashCode() * 31) + this.f18698b.hashCode()) * 31;
                Integer num = this.f18699c;
                return ((hashCode + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.f18700d);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f18700d;
            }

            public String toString() {
                String str = this.f18697a;
                po.f fVar = this.f18698b;
                Integer num = this.f18699c;
                boolean z10 = this.f18700d;
                return "OneTimeCodeProps(oneTimeLinkCode=" + str + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ b(String str, po.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, fVar, num, (i10 & 8) != 0 ? false : z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f18691a;

            /* renamed from: b  reason: collision with root package name */
            private final String f18692b;

            /* renamed from: c  reason: collision with root package name */
            private final String f18693c;

            /* renamed from: d  reason: collision with root package name */
            private final po.f f18694d;

            /* renamed from: e  reason: collision with root package name */
            private final Integer f18695e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f18696f;

            public a(String inquiryId, String str, String str2, po.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f18691a = inquiryId;
                this.f18692b = str;
                this.f18693c = str2;
                this.f18694d = environment;
                this.f18695e = num;
                this.f18696f = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public po.f a() {
                return this.f18694d;
            }

            public final String b() {
                return this.f18691a;
            }

            public final String c() {
                return this.f18692b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f18691a, aVar.f18691a) && Intrinsics.areEqual(this.f18692b, aVar.f18692b) && Intrinsics.areEqual(this.f18693c, aVar.f18693c) && this.f18694d == aVar.f18694d && Intrinsics.areEqual(this.f18695e, aVar.f18695e) && this.f18696f == aVar.f18696f;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f18695e;
            }

            public int hashCode() {
                int hashCode = this.f18691a.hashCode() * 31;
                String str = this.f18692b;
                int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
                String str2 = this.f18693c;
                int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.f18694d.hashCode()) * 31;
                Integer num = this.f18695e;
                return ((hashCode3 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f18696f);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f18696f;
            }

            public String toString() {
                String str = this.f18691a;
                String str2 = this.f18692b;
                String str3 = this.f18693c;
                po.f fVar = this.f18694d;
                Integer num = this.f18695e;
                boolean z10 = this.f18696f;
                return "InquiryProps(inquiryId=" + str + ", sessionToken=" + str2 + ", environmentId=" + str3 + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ a(String str, String str2, String str3, po.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, fVar, num, (i10 & 32) != 0 ? false : z10);
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0235c implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f18701a;

            /* renamed from: b  reason: collision with root package name */
            private final String f18702b;

            /* renamed from: c  reason: collision with root package name */
            private final String f18703c;

            /* renamed from: d  reason: collision with root package name */
            private final String f18704d;

            /* renamed from: e  reason: collision with root package name */
            private final String f18705e;

            /* renamed from: f  reason: collision with root package name */
            private final Map f18706f;

            /* renamed from: g  reason: collision with root package name */
            private final String f18707g;

            /* renamed from: h  reason: collision with root package name */
            private final StaticInquiryTemplate f18708h;

            /* renamed from: i  reason: collision with root package name */
            private final po.f f18709i;

            /* renamed from: j  reason: collision with root package name */
            private final Integer f18710j;

            /* renamed from: k  reason: collision with root package name */
            private final boolean f18711k;

            public C0235c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, po.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f18701a = str;
                this.f18702b = str2;
                this.f18703c = str3;
                this.f18704d = str4;
                this.f18705e = str5;
                this.f18706f = map;
                this.f18707g = str6;
                this.f18708h = staticInquiryTemplate;
                this.f18709i = environment;
                this.f18710j = num;
                this.f18711k = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public po.f a() {
                return this.f18709i;
            }

            public final String b() {
                return this.f18703c;
            }

            public final String c() {
                return this.f18705e;
            }

            public final Map d() {
                return this.f18706f;
            }

            public final String e() {
                return this.f18704d;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0235c) {
                    C0235c c0235c = (C0235c) obj;
                    return Intrinsics.areEqual(this.f18701a, c0235c.f18701a) && Intrinsics.areEqual(this.f18702b, c0235c.f18702b) && Intrinsics.areEqual(this.f18703c, c0235c.f18703c) && Intrinsics.areEqual(this.f18704d, c0235c.f18704d) && Intrinsics.areEqual(this.f18705e, c0235c.f18705e) && Intrinsics.areEqual(this.f18706f, c0235c.f18706f) && Intrinsics.areEqual(this.f18707g, c0235c.f18707g) && Intrinsics.areEqual(this.f18708h, c0235c.f18708h) && this.f18709i == c0235c.f18709i && Intrinsics.areEqual(this.f18710j, c0235c.f18710j) && this.f18711k == c0235c.f18711k;
                }
                return false;
            }

            public final StaticInquiryTemplate f() {
                return this.f18708h;
            }

            public final String g() {
                return this.f18701a;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f18710j;
            }

            public final String h() {
                return this.f18702b;
            }

            public int hashCode() {
                String str = this.f18701a;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f18702b;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                String str3 = this.f18703c;
                int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f18704d;
                int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f18705e;
                int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
                Map map = this.f18706f;
                int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
                String str6 = this.f18707g;
                int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
                StaticInquiryTemplate staticInquiryTemplate = this.f18708h;
                int hashCode8 = (((hashCode7 + (staticInquiryTemplate == null ? 0 : staticInquiryTemplate.hashCode())) * 31) + this.f18709i.hashCode()) * 31;
                Integer num = this.f18710j;
                return ((hashCode8 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f18711k);
            }

            public final String i() {
                return this.f18707g;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f18711k;
            }

            public String toString() {
                String str = this.f18701a;
                String str2 = this.f18702b;
                String str3 = this.f18703c;
                String str4 = this.f18704d;
                String str5 = this.f18705e;
                Map map = this.f18706f;
                String str6 = this.f18707g;
                StaticInquiryTemplate staticInquiryTemplate = this.f18708h;
                po.f fVar = this.f18709i;
                Integer num = this.f18710j;
                boolean z10 = this.f18711k;
                return "TemplateProps(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", referenceId=" + str4 + ", environmentId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ C0235c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, po.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, str4, str5, map, str6, staticInquiryTemplate, fVar, num, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0234b implements b {
            @NotNull
            public static final Parcelable.Creator<C0234b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f18681d;

            /* renamed from: e  reason: collision with root package name */
            private final String f18682e;

            /* renamed from: i  reason: collision with root package name */
            private final Map f18683i;

            /* renamed from: o  reason: collision with root package name */
            private final String f18684o;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0234b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    String readString = parcel.readString();
                    String readString2 = parcel.readString();
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0234b.class.getClassLoader()));
                    }
                    return new C0234b(readString, readString2, linkedHashMap, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0234b[] newArray(int i10) {
                    return new C0234b[i10];
                }
            }

            public C0234b(String inquiryId, String inquiryStatus, Map fields, String str) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
                Intrinsics.checkNotNullParameter(fields, "fields");
                this.f18681d = inquiryId;
                this.f18682e = inquiryStatus;
                this.f18683i = fields;
                this.f18684o = str;
            }

            public final Map a() {
                return this.f18683i;
            }

            public final String b() {
                return this.f18681d;
            }

            public final String c() {
                return this.f18682e;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0234b) {
                    C0234b c0234b = (C0234b) obj;
                    return Intrinsics.areEqual(this.f18681d, c0234b.f18681d) && Intrinsics.areEqual(this.f18682e, c0234b.f18682e) && Intrinsics.areEqual(this.f18683i, c0234b.f18683i) && Intrinsics.areEqual(this.f18684o, c0234b.f18684o);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = ((((this.f18681d.hashCode() * 31) + this.f18682e.hashCode()) * 31) + this.f18683i.hashCode()) * 31;
                String str = this.f18684o;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String l() {
                return this.f18684o;
            }

            public String toString() {
                String str = this.f18681d;
                String str2 = this.f18682e;
                Map map = this.f18683i;
                String str3 = this.f18684o;
                return "Complete(inquiryId=" + str + ", inquiryStatus=" + str2 + ", fields=" + map + ", sessionToken=" + str3 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f18681d);
                dest.writeString(this.f18682e);
                Map map = this.f18683i;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
                dest.writeString(this.f18684o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements b {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f18685d;

            /* renamed from: e  reason: collision with root package name */
            private final jq.d f18686e;

            /* renamed from: i  reason: collision with root package name */
            private final InternalErrorInfo f18687i;

            /* renamed from: o  reason: collision with root package name */
            private final String f18688o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c(parcel.readString(), (jq.d) parcel.readParcelable(c.class.getClassLoader()), (InternalErrorInfo) parcel.readParcelable(c.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(String str, jq.d errorCode, InternalErrorInfo cause, String str2) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f18685d = str;
                this.f18686e = errorCode;
                this.f18687i = cause;
                this.f18688o = str2;
            }

            public final InternalErrorInfo a() {
                return this.f18687i;
            }

            public final String b() {
                return this.f18685d;
            }

            public final jq.d c() {
                return this.f18686e;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof c) {
                    c cVar = (c) obj;
                    return Intrinsics.areEqual(this.f18685d, cVar.f18685d) && this.f18686e == cVar.f18686e && Intrinsics.areEqual(this.f18687i, cVar.f18687i) && Intrinsics.areEqual(this.f18688o, cVar.f18688o);
                }
                return false;
            }

            public int hashCode() {
                String str = this.f18685d;
                int hashCode = (((((str == null ? 0 : str.hashCode()) * 31) + this.f18686e.hashCode()) * 31) + this.f18687i.hashCode()) * 31;
                String str2 = this.f18688o;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String l() {
                return this.f18688o;
            }

            public String toString() {
                String str = this.f18685d;
                jq.d dVar = this.f18686e;
                InternalErrorInfo internalErrorInfo = this.f18687i;
                String str2 = this.f18688o;
                return "Error(debugMessage=" + str + ", errorCode=" + dVar + ", cause=" + internalErrorInfo + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f18685d);
                dest.writeParcelable(this.f18686e, i10);
                dest.writeParcelable(this.f18687i, i10);
                dest.writeString(this.f18688o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements b {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f18689d;

            /* renamed from: e  reason: collision with root package name */
            private final String f18690e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new d(parcel.readString(), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public d(String inquiryId, String str) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                this.f18689d = inquiryId;
                this.f18690e = str;
            }

            public final String a() {
                return this.f18689d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof d) {
                    d dVar = (d) obj;
                    return Intrinsics.areEqual(this.f18689d, dVar.f18689d) && Intrinsics.areEqual(this.f18690e, dVar.f18690e);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = this.f18689d.hashCode() * 31;
                String str = this.f18690e;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String l() {
                return this.f18690e;
            }

            public String toString() {
                String str = this.f18689d;
                String str2 = this.f18690e;
                return "ReinitializeWithFallbackMode(inquiryId=" + str + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f18689d);
                dest.writeString(this.f18690e);
            }
        }

        String l();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0233a();

            /* renamed from: d  reason: collision with root package name */
            private final String f18673d;

            /* renamed from: e  reason: collision with root package name */
            private final String f18674e;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyle f18675i;

            /* renamed from: o  reason: collision with root package name */
            private final String f18676o;

            /* renamed from: p  reason: collision with root package name */
            private final String f18677p;

            /* renamed from: q  reason: collision with root package name */
            private final String f18678q;

            /* renamed from: r  reason: collision with root package name */
            private final String f18679r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f18680s;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0233a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new a(parcel.readString(), parcel.readString(), (StepStyle) parcel.readParcelable(a.class.getClassLoader()), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readInt() != 0);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            public a(String str, String str2, StepStyle stepStyle, String str3, String str4, String str5, String str6, boolean z10) {
                this.f18673d = str;
                this.f18674e = str2;
                this.f18675i = stepStyle;
                this.f18676o = str3;
                this.f18677p = str4;
                this.f18678q = str5;
                this.f18679r = str6;
                this.f18680s = z10;
            }

            public final String a() {
                return this.f18679r;
            }

            public final boolean b() {
                return this.f18680s;
            }

            public final String c() {
                return this.f18673d;
            }

            public final String d() {
                return this.f18677p;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String e() {
                return this.f18678q;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f18673d, aVar.f18673d) && Intrinsics.areEqual(this.f18674e, aVar.f18674e) && Intrinsics.areEqual(this.f18675i, aVar.f18675i) && Intrinsics.areEqual(this.f18676o, aVar.f18676o) && Intrinsics.areEqual(this.f18677p, aVar.f18677p) && Intrinsics.areEqual(this.f18678q, aVar.f18678q) && Intrinsics.areEqual(this.f18679r, aVar.f18679r) && this.f18680s == aVar.f18680s;
                }
                return false;
            }

            public final StepStyle f() {
                return this.f18675i;
            }

            public final String g() {
                return this.f18676o;
            }

            public int hashCode() {
                String str = this.f18673d;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f18674e;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                StepStyle stepStyle = this.f18675i;
                int hashCode3 = (hashCode2 + (stepStyle == null ? 0 : stepStyle.hashCode())) * 31;
                String str3 = this.f18676o;
                int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f18677p;
                int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f18678q;
                int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
                String str6 = this.f18679r;
                return ((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + Boolean.hashCode(this.f18680s);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String l() {
                return this.f18674e;
            }

            public String toString() {
                String str = this.f18673d;
                String str2 = this.f18674e;
                StepStyle stepStyle = this.f18675i;
                String str3 = this.f18676o;
                String str4 = this.f18677p;
                String str5 = this.f18678q;
                String str6 = this.f18679r;
                boolean z10 = this.f18680s;
                return "Cancel(inquiryId=" + str + ", sessionToken=" + str2 + ", styles=" + stepStyle + ", title=" + str3 + ", message=" + str4 + ", resumeButtonText=" + str5 + ", cancelButtonText=" + str6 + ", force=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f18673d);
                dest.writeString(this.f18674e);
                dest.writeParcelable(this.f18675i, i10);
                dest.writeString(this.f18676o);
                dest.writeString(this.f18677p);
                dest.writeString(this.f18678q);
                dest.writeString(this.f18679r);
                dest.writeInt(this.f18680s ? 1 : 0);
            }

            public /* synthetic */ a(String str, String str2, StepStyle stepStyle, String str3, String str4, String str5, String str6, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, stepStyle, str3, str4, str5, str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z10);
            }
        }
    }
}
