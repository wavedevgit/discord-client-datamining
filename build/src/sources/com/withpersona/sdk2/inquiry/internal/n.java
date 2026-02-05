package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import bo.r2;
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
import ho.c4;
import ho.g3;
import ip.c;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
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
import kp.a1;
import kp.d2;
import kp.e2;
import kp.m1;
import kp.x5;
import ms.i0;
import nq.v4;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import ro.b;
import so.b2;
import so.j2;
import so.l2;
import tp.a;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends zm.k {

    /* renamed from: s  reason: collision with root package name */
    public static final a f19060s = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f19061a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f19062b;

    /* renamed from: c  reason: collision with root package name */
    private final a.InterfaceC0243a f19063c;

    /* renamed from: d  reason: collision with root package name */
    private final q.b f19064d;

    /* renamed from: e  reason: collision with root package name */
    private final u.a f19065e;

    /* renamed from: f  reason: collision with root package name */
    private final x.a f19066f;

    /* renamed from: g  reason: collision with root package name */
    private final a0.a f19067g;

    /* renamed from: h  reason: collision with root package name */
    private final f.a f19068h;

    /* renamed from: i  reason: collision with root package name */
    private final g3 f19069i;

    /* renamed from: j  reason: collision with root package name */
    private final x5 f19070j;

    /* renamed from: k  reason: collision with root package name */
    private final v4 f19071k;

    /* renamed from: l  reason: collision with root package name */
    private final r2 f19072l;

    /* renamed from: m  reason: collision with root package name */
    private final ip.c f19073m;

    /* renamed from: n  reason: collision with root package name */
    private final tp.e f19074n;

    /* renamed from: o  reason: collision with root package name */
    private final xp.b f19075o;

    /* renamed from: p  reason: collision with root package name */
    private final tp.c f19076p;

    /* renamed from: q  reason: collision with root package name */
    private final l2 f19077q;

    /* renamed from: r  reason: collision with root package name */
    private final s.a f19078r;

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
            private final StepStyle f19118a;

            /* renamed from: b  reason: collision with root package name */
            private final boolean f19119b;

            /* renamed from: c  reason: collision with root package name */
            private final Function0 f19120c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(StepStyle stepStyle, boolean z10, Function0 onBack) {
                super(null);
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                this.f19118a = stepStyle;
                this.f19119b = z10;
                this.f19120c = onBack;
            }

            public final Function0 a() {
                return this.f19120c;
            }

            public final StepStyle b() {
                return this.f19118a;
            }

            public final boolean c() {
                return this.f19119b;
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
        public static final /* synthetic */ int[] f19121a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f19122b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f19123c;

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
            f19121a = iArr;
            int[] iArr2 = new int[b2.values().length];
            try {
                iArr2[b2.f50035d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[b2.f50036e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f19122b = iArr2;
            int[] iArr3 = new int[NextStep.Document.StartPage.values().length];
            try {
                iArr3[NextStep.Document.StartPage.PROMPT.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr3[NextStep.Document.StartPage.REVIEW.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            f19123c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19124d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f19126i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f19127o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ k.a f19128d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ n f19129e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ l f19130i;

            a(k.a aVar, n nVar, l lVar) {
                this.f19128d = aVar;
                this.f19129e = nVar;
                this.f19130i = lVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(tp.a aVar, Continuation continuation) {
                if (aVar instanceof a.C0653a) {
                    n.n0(this.f19128d, this.f19129e, this.f19130i, ((a.C0653a) aVar).a());
                    return Unit.f31988a;
                }
                throw new or.p();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f19126i = aVar;
            this.f19127o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f19126i, this.f19127o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f19124d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = n.this.f19074n.c();
                a aVar = new a(this.f19126i, n.this, this.f19127o);
                this.f19124d = 1;
                if (c10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19131d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19132e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19133i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f19134o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, n nVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f19132e = aVar;
            this.f19133i = nVar;
            this.f19134o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f19132e, this.f19133i, this.f19134o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f19131d == 0) {
                kotlin.c.b(obj);
                n.n0(this.f19132e, this.f19133i, this.f19134o, true);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19135d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19136e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19137i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l.a f19138o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, n nVar, l.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f19136e = aVar;
            this.f19137i = nVar;
            this.f19138o = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(l.a aVar, r.c cVar) {
            cVar.d(new b.C0252b(aVar.b(), aVar.o(), aVar.n(), aVar.k()));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f19136e, this.f19137i, this.f19138o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f19135d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f19136e.c();
                n nVar = this.f19137i;
                final l.a aVar = this.f19138o;
                d10 = zm.z.d(nVar, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.o
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = n.h.k(l.a.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19139d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19140e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19141i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, n nVar, Continuation continuation) {
            super(2, continuation);
            this.f19140e = aVar;
            this.f19141i = nVar;
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
                return Unit.f31988a;
            }
            cVar.e(l.j.l(jVar2, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 229375, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f19140e, this.f19141i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            Object f10 = ur.b.f();
            int i10 = this.f19139d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f19139d = 1;
                if (i0.a(2000L, this) == f10) {
                    return f10;
                }
            }
            zm.h c10 = this.f19140e.c();
            d10 = zm.z.d(this.f19141i, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = n.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public n(Context applicationContext, c.a createInquiryWorker, a.InterfaceC0243a inquirySessionWorker, q.b pollingWorker, u.a transitionBackWorker, x.a transitionWorkerFactory, a0.a updateInquirySessionWorkerFactory, f.a exchangeOneTimeCodeWorkerFactory, g3 governmentIdWorkflow, x5 selfieWorkflow, v4 uiWorkflow, r2 documentWorkflow, ip.c sandboxFlags, tp.e externalInquiryController, xp.b navigationStateManager, tp.c externalEventLogger, l2 uiStepSavedStateHelper, s.a restoreUiStepStateWorkerFactory) {
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
        this.f19061a = applicationContext;
        this.f19062b = createInquiryWorker;
        this.f19063c = inquirySessionWorker;
        this.f19064d = pollingWorker;
        this.f19065e = transitionBackWorker;
        this.f19066f = transitionWorkerFactory;
        this.f19067g = updateInquirySessionWorkerFactory;
        this.f19068h = exchangeOneTimeCodeWorkerFactory;
        this.f19069i = governmentIdWorkflow;
        this.f19070j = selfieWorkflow;
        this.f19071k = uiWorkflow;
        this.f19072l = documentWorkflow;
        this.f19073m = sandboxFlags;
        this.f19074n = externalInquiryController;
        this.f19075o = navigationStateManager;
        this.f19076p = externalEventLogger;
        this.f19077q = uiStepSavedStateHelper;
        this.f19078r = restoreUiStepStateWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.d.l(dVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, null, 1019, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(n nVar, k.a aVar) {
        zm.r d10;
        nVar.f19073m.f();
        zm.h c10 = aVar.c();
        d10 = zm.z.d(nVar, null, new Function1() { // from class: so.t1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B1;
                B1 = com.withpersona.sdk2.inquiry.internal.n.B1((r.c) obj);
                return B1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final Object B0(c cVar, final l.e eVar, k.a aVar, Function0 function0) {
        xp.b.d(this.f19075o, false, false, false, 4, null);
        zm.w.l(aVar, this.f19068h.a(eVar.j()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.f.class), "", new Function1() { // from class: so.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r C0;
                C0 = com.withpersona.sdk2.inquiry.internal.n.C0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, (com.withpersona.sdk2.inquiry.internal.network.d) obj);
                return C0;
            }
        });
        return new d.b(eVar.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r C0(final n nVar, final l.e eVar, final com.withpersona.sdk2.inquiry.internal.network.d it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit D0;
                    D0 = com.withpersona.sdk2.inquiry.internal.n.D0(com.withpersona.sdk2.inquiry.internal.network.d.this, (r.c) obj);
                    return D0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.a) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E0;
                    E0 = com.withpersona.sdk2.inquiry.internal.n.E0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, it, (r.c) obj);
                    return E0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final c.b C1(n nVar) {
        return nVar.f19073m.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        d.b bVar = (d.b) dVar;
        if (bVar.b() == null) {
            action.e(new l.c(bVar.a()));
        } else {
            action.e(new l.i(bVar.b(), new w.a(null, 1, null), bVar.a(), null, true, wp.g.f53236o.a()));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(n nVar, k.a aVar, boolean z10) {
        zm.r d10;
        nVar.f19073m.e(z10);
        zm.h c10 = aVar.c();
        d10 = zm.z.d(nVar, null, new Function1() { // from class: so.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E1;
                E1 = com.withpersona.sdk2.inquiry.internal.n.E1((r.c) obj);
                return E1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(n nVar, l.e eVar, com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, eVar.k(), ((d.a) dVar).a(), null, 4, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f31988a;
    }

    private final Object F0(c cVar, final l.f fVar, k.a aVar) {
        List list;
        NextStep.GovernmentId.AssetConfig assetConfig;
        String e10 = fVar.e();
        g3 g3Var = this.f19069i;
        String k10 = fVar.k();
        String s10 = fVar.s();
        ArrayList arrayList = new ArrayList();
        Iterator it = fVar.w().iterator();
        while (true) {
            String str = "US";
            if (!it.hasNext()) {
                break;
            }
            Id id2 = (Id) it.next();
            String s11 = fVar.s();
            if (s11 != null) {
                str = s11;
            }
            c4 o10 = ho.z.o(id2, str, fVar.G());
            if (o10 != null) {
                arrayList.add(o10);
            }
        }
        String b10 = fVar.b();
        String str2 = "US";
        String e11 = fVar.e();
        String A = fVar.A();
        boolean q10 = fVar.q();
        boolean r10 = fVar.r();
        List v10 = fVar.v();
        StepStyles.GovernmentIdStepStyle styles = fVar.getStyles();
        int B = fVar.B();
        String x10 = fVar.x();
        String z10 = fVar.z();
        NextStep.GovernmentId.Localizations D = fVar.D();
        String s12 = fVar.s();
        if (s12 != null) {
            str2 = s12;
        }
        List C = fVar.C();
        if (C != null) {
            list = CollectionsKt.V0(C);
        } else {
            list = null;
        }
        g3.a.C0361a i10 = yo.a.i(D, str2, list);
        long G = fVar.G();
        Integer theme = cVar.getTheme();
        boolean J = fVar.J();
        List u10 = fVar.u();
        List<NextStep.GovernmentId.VideoCaptureMethod> M = fVar.M();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(M, 10));
        for (NextStep.GovernmentId.VideoCaptureMethod videoCaptureMethod : M) {
            arrayList2.add(yn.a.valueOf(videoCaptureMethod.toString()));
        }
        VideoCaptureConfig videoCaptureConfig = new VideoCaptureConfig(0L, u10, arrayList2, fVar.O(), fVar.o(), 1, null);
        NextStep.GovernmentId.AssetConfig n10 = fVar.n();
        if (n10 == null) {
            assetConfig = new NextStep.GovernmentId.AssetConfig(null, null, null, null, null, 31, null);
        } else {
            assetConfig = n10;
        }
        return aVar.b(g3Var, new g3.a(k10, s10, arrayList, b10, e11, A, q10, r10, v10, styles, i10, B, x10, z10, G, J, theme, videoCaptureConfig, assetConfig, !Intrinsics.areEqual(fVar.f(), w.c.f19390d), fVar.p(), fVar.I(), fVar.H(), fVar.t()), e10, new Function1() { // from class: so.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r G0;
                G0 = com.withpersona.sdk2.inquiry.internal.n.G0(com.withpersona.sdk2.inquiry.internal.n.this, fVar, (g3.b) obj);
                return G0;
            }
        });
    }

    private final zp.k F1(Object obj, l lVar) {
        zp.j jVar;
        if (lVar.d()) {
            jVar = zp.j.f56159e;
        } else {
            jVar = zp.j.f56158d;
        }
        return new zp.k(obj, jVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r G0(final n nVar, final l.f fVar, final g3.b it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        zm.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, g3.b.C0362b.f26291a)) {
            d13 = zm.z.d(nVar, null, new Function1() { // from class: so.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = com.withpersona.sdk2.inquiry.internal.n.H0(l.f.this, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            return d13;
        } else if (it instanceof g3.b.c) {
            d12 = zm.z.d(nVar, null, new Function1() { // from class: so.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = com.withpersona.sdk2.inquiry.internal.n.I0(com.withpersona.sdk2.inquiry.internal.n.this, it, fVar, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, g3.b.d.f26293a)) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit J0;
                    J0 = com.withpersona.sdk2.inquiry.internal.n.J0(l.f.this, (r.c) obj);
                    return J0;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, g3.b.a.f26290a)) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.q0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K0;
                    K0 = com.withpersona.sdk2.inquiry.internal.n.K0(l.f.this, (r.c) obj);
                    return K0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(l.f fVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = fVar.b();
        String k10 = fVar.k();
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
        action.d(new b.a(b10, k10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(n nVar, g3.b bVar, l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.b.c cVar = (g3.b.c) bVar;
        if (nVar.k0(cVar.a())) {
            action.e(nVar.i1(fVar));
        } else {
            x1(nVar, action, fVar.k(), cVar.a(), null, 4, null);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.l(fVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.l(fVar, null, null, w.c.f19390d, null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f31988a;
    }

    private final Object L0(c cVar, final yo.d dVar, k.a aVar, StepStyle stepStyle, Function0 function0) {
        xp.b.d(this.f19075o, false, false, false, 4, null);
        zm.w.l(aVar, this.f19062b.a(dVar), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.c.class), "", new Function1() { // from class: so.z1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r M0;
                M0 = com.withpersona.sdk2.inquiry.internal.n.M0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (com.withpersona.sdk2.inquiry.internal.network.a) obj);
                return M0;
            }
        });
        return new d.b(stepStyle, true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r M0(final n nVar, final yo.d dVar, final com.withpersona.sdk2.inquiry.internal.network.a it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = com.withpersona.sdk2.inquiry.internal.n.N0(com.withpersona.sdk2.inquiry.internal.network.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.C0254a) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.m0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = com.withpersona.sdk2.inquiry.internal.n.O0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, it, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b bVar = (a.b) aVar;
        if (pp.h.e(bVar.b())) {
            action.d(new b.d(bVar.b(), bVar.a()));
        } else {
            action.e(new l.c(bVar.b()));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(n nVar, yo.d dVar, com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.C0254a c0254a = (a.C0254a) aVar;
        nVar.w1(action, dVar.g(), c0254a.a(), c0254a.b());
        return Unit.f31988a;
    }

    private final Object P0(c cVar, l.g gVar, k.a aVar, Function0 function0) {
        return L0(cVar, new yo.d(null, null, gVar.j(), gVar.l(), cVar.a(), null, null, null, null, null, null, 2019, null), aVar, gVar.getStyles(), function0);
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
        x5 x5Var = this.f19070j;
        String k10 = hVar.k();
        String b10 = hVar.b();
        String u10 = hVar.u();
        String e12 = hVar.e();
        boolean p10 = hVar.p();
        boolean q10 = hVar.q();
        String t10 = hVar.t();
        boolean A = hVar.A();
        boolean C = hVar.C();
        NextStep.Selfie.Localizations v10 = hVar.v();
        if (hVar.B() == NextStep.Selfie.CaptureMethod.ONLY_CENTER) {
            z10 = true;
        } else {
            z10 = false;
        }
        x5.b.a j10 = yo.a.j(v10, z10);
        d2 a10 = e2.a(hVar.B());
        List w10 = hVar.w();
        if (w10 == null || w10.isEmpty()) {
            str = k10;
            str2 = b10;
            int i10 = e.f19121a[hVar.B().ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    throw new or.p();
                }
                e10 = CollectionsKt.o(a1.b.f35131d, a1.b.f35132e, a1.b.f35133i);
            } else {
                e10 = CollectionsKt.e(a1.b.f35131d);
            }
        } else {
            List<NextStep.Selfie.SelfiePose> w11 = hVar.w();
            str = k10;
            str2 = b10;
            e10 = new ArrayList(CollectionsKt.w(w11, 10));
            for (NextStep.Selfie.SelfiePose selfiePose : w11) {
                e10.add(m1.c(selfiePose));
            }
        }
        String cameraPermissionsTitle = hVar.v().getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = hVar.v().getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = hVar.v().getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = hVar.v().getPromptPage().getCameraPermissionsCancelButtonText();
        String microphonePermissionsTitle = hVar.v().getPromptPage().getMicrophonePermissionsTitle();
        String microphonePermissionsPrompt = hVar.v().getPromptPage().getMicrophonePermissionsPrompt();
        String microphonePermissionsBtnContinueMobile = hVar.v().getPromptPage().getMicrophonePermissionsBtnContinueMobile();
        String microphonePermissionsBtnCancel = hVar.v().getPromptPage().getMicrophonePermissionsBtnCancel();
        StepStyles.SelfieStepStyle styles = hVar.getStyles();
        NextStep.Selfie.AssetConfig n10 = hVar.n();
        if (n10 == null) {
            list = e10;
            n10 = new NextStep.Selfie.AssetConfig(null, null, 3, null);
            str3 = str;
            str4 = cameraPermissionsTitle;
        } else {
            list = e10;
            str3 = str;
            str4 = cameraPermissionsTitle;
        }
        PendingPageTextPosition x10 = hVar.x();
        List s10 = hVar.s();
        List<NextStep.Selfie.VideoCaptureMethod> G = hVar.G();
        String str5 = str3;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(G, 10));
        for (NextStep.Selfie.VideoCaptureMethod videoCaptureMethod : G) {
            arrayList.add(yn.a.valueOf(videoCaptureMethod.toString()));
        }
        return new zo.d(aVar.b(x5Var, new x5.b(str5, str2, u10, e12, p10, q10, t10, A, C, j10, a10, list, str4, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, microphonePermissionsTitle, microphonePermissionsPrompt, microphonePermissionsBtnContinueMobile, microphonePermissionsBtnCancel, styles, new com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig(0L, s10, arrayList, hVar.H(), hVar.o(), 1, null), n10, x10, hVar.z(), hVar.r()), e11, new Function1() { // from class: so.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r R0;
                R0 = com.withpersona.sdk2.inquiry.internal.n.R0(com.withpersona.sdk2.inquiry.internal.n.this, hVar, (x5.c) obj);
                return R0;
            }
        }), !Intrinsics.areEqual(hVar.f(), w.c.f19390d), hVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r R0(final n nVar, final l.h hVar, final x5.c it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        zm.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, x5.c.b.f35899a)) {
            d13 = zm.z.d(nVar, null, new Function1() { // from class: so.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = com.withpersona.sdk2.inquiry.internal.n.S0(l.h.this, (r.c) obj);
                    return S0;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, x5.c.d.f35901a)) {
            d12 = zm.z.d(nVar, null, new Function1() { // from class: so.c1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = com.withpersona.sdk2.inquiry.internal.n.T0(l.h.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, x5.c.a.f35898a)) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = com.withpersona.sdk2.inquiry.internal.n.U0(l.h.this, (r.c) obj);
                    return U0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof x5.c.C0461c) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = com.withpersona.sdk2.inquiry.internal.n.V0(com.withpersona.sdk2.inquiry.internal.n.this, it, hVar, (r.c) obj);
                    return V0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(l.h hVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = hVar.b();
        String k10 = hVar.k();
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
        action.d(new b.a(b10, k10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.l(hVar, null, null, new w.a(null, 1, null), null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.l(hVar, null, null, w.c.f19390d, null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(n nVar, x5.c cVar, l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5.c.C0461c c0461c = (x5.c.C0461c) cVar;
        if (nVar.k0(c0461c.a())) {
            action.e(nVar.i1(hVar));
        } else {
            x1(nVar, action, hVar.k(), c0461c.a(), null, 4, null);
        }
        return Unit.f31988a;
    }

    private final Object W0(c cVar, l.i iVar, k.a aVar, Function0 function0) {
        xp.b.d(this.f19075o, false, false, false, 4, null);
        return new d.b(iVar.getStyles(), iVar.n(), function0);
    }

    /* JADX WARN: Removed duplicated region for block: B:66:0x0145  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0173  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object X0(com.withpersona.sdk2.inquiry.internal.n.c r27, final com.withpersona.sdk2.inquiry.internal.l.j r28, zm.k.a r29, kotlin.jvm.functions.Function0 r30) {
        /*
            Method dump skipped, instructions count: 399
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.n.X0(com.withpersona.sdk2.inquiry.internal.n$c, com.withpersona.sdk2.inquiry.internal.l$j, zm.k$a, kotlin.jvm.functions.Function0):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r Y0(final n nVar, final l.j jVar, final v4.c it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        zm.r d13;
        zm.r d14;
        zm.r d15;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, v4.c.b.f41824a)) {
            d15 = zm.z.d(nVar, null, new Function1() { // from class: so.f1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z0;
                    Z0 = com.withpersona.sdk2.inquiry.internal.n.Z0(l.j.this, (r.c) obj);
                    return Z0;
                }
            }, 1, null);
            return d15;
        } else if (it instanceof v4.c.d) {
            d14 = zm.z.d(nVar, null, new Function1() { // from class: so.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a12;
                    a12 = com.withpersona.sdk2.inquiry.internal.n.a1(com.withpersona.sdk2.inquiry.internal.n.this, it, jVar, (r.c) obj);
                    return a12;
                }
            }, 1, null);
            return d14;
        } else if (it instanceof v4.c.f) {
            d13 = zm.z.d(nVar, null, new Function1() { // from class: so.i1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = com.withpersona.sdk2.inquiry.internal.n.b1(l.j.this, it, (r.c) obj);
                    return b12;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, v4.c.e.f41828a)) {
            d12 = zm.z.d(nVar, null, new Function1() { // from class: so.j1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c12;
                    c12 = com.withpersona.sdk2.inquiry.internal.n.c1(l.j.this, (r.c) obj);
                    return c12;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v4.c.a) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.k1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d16;
                    d16 = com.withpersona.sdk2.inquiry.internal.n.d1(l.j.this, (r.c) obj);
                    return d16;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof v4.c.C0539c) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.l1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = com.withpersona.sdk2.inquiry.internal.n.e1(l.j.this, (r.c) obj);
                    return e12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(l.j jVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = jVar.b();
        String k10 = jVar.k();
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
        action.d(new b.a(b10, k10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(n nVar, v4.c cVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.d dVar = (v4.c.d) cVar;
        if (nVar.k0(dVar.a())) {
            action.e(nVar.i1(jVar));
        } else {
            nVar.w1(action, jVar.k(), dVar.a(), dVar.b());
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(l.j jVar, v4.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.f fVar = (v4.c.f) cVar;
        action.e(l.j.l(jVar, null, null, new w.b(new x.c(fVar.b(), fVar.a(), fVar.c())), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.l(jVar, null, null, new w.d(null), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.l(jVar, null, null, w.c.f19390d, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new b.C0252b(jVar.b(), jVar.s(), jVar.q(), jVar.k()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r f1(final n nVar, final l.j jVar, final s.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, s.b.a.f19373a)) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = com.withpersona.sdk2.inquiry.internal.n.g1(com.withpersona.sdk2.inquiry.internal.n.this, jVar, (r.c) obj);
                    return g12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof s.b.C0257b) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.q1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h12;
                    h12 = com.withpersona.sdk2.inquiry.internal.n.h1(s.b.this, (r.c) obj);
                    return h12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(n nVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof l.j)) {
            return Unit.f31988a;
        }
        action.e(nVar.i1(jVar));
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        action.e(l.j.l(jVar2, null, null, null, null, null, null, null, null, ((s.b.C0257b) bVar).a(), false, false, false, null, null, null, null, null, false, 130815, null));
        return Unit.f31988a;
    }

    private final l.i i1(j2 j2Var) {
        return new l.i(j2Var.k(), null, j2Var.b(), j2Var.getStyles(), true, j2Var.a(), 2, null);
    }

    private final void j1(c cVar, final l lVar, k.a aVar) {
        final String k10 = lVar.k();
        String b10 = lVar.b();
        String e10 = lVar.e();
        final w f10 = lVar.f();
        if (f10 instanceof w.b) {
            if (k10 != null && b10 != null) {
                zm.w.l(aVar, this.f19066f.a(k10, b10, lVar.a(), ((w.b) f10).a()), Reflection.typeOf(x.class), "", new Function1() { // from class: so.v1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r u12;
                        u12 = com.withpersona.sdk2.inquiry.internal.n.u1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (x.b) obj);
                        return u12;
                    }
                });
            }
        } else if (f10 instanceof w.d) {
            if (k10 != null && b10 != null) {
                zm.w.l(aVar, this.f19067g.a(k10, b10, lVar.a()), Reflection.typeOf(a0.class), "", new Function1() { // from class: so.w1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r m12;
                        m12 = com.withpersona.sdk2.inquiry.internal.n.m1(com.withpersona.sdk2.inquiry.internal.n.this, k10, f10, (com.withpersona.sdk2.inquiry.internal.network.i) obj);
                        return m12;
                    }
                });
            }
        } else if (f10 instanceof w.a) {
            if (k10 != null && b10 != null) {
                zm.w.l(aVar, this.f19064d.a(k10, b10, ((w.a) f10).a(), lVar.a()), Reflection.typeOf(q.class), "", new Function1() { // from class: so.x1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r p12;
                        p12 = com.withpersona.sdk2.inquiry.internal.n.p1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (q.c) obj);
                        return p12;
                    }
                });
            }
        } else if (Intrinsics.areEqual(f10, w.c.f19390d)) {
            if (k10 != null && b10 != null && e10 != null) {
                zm.w.l(aVar, this.f19065e.a(k10, b10, e10, lVar.a()), Reflection.typeOf(u.class), "", new Function1() { // from class: so.y1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r r12;
                        r12 = com.withpersona.sdk2.inquiry.internal.n.r1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (com.withpersona.sdk2.inquiry.internal.network.h) obj);
                        return r12;
                    }
                });
            }
        } else if (f10 == null) {
        } else {
            throw new or.p();
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

    private static final zm.r k1(final n nVar, final l lVar, final String str, final InternalErrorInfo internalErrorInfo) {
        zm.r d10;
        d10 = zm.z.d(nVar, null, new Function1() { // from class: so.u1
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
                    return Unit.f31988a;
                }
                Map<String, UiComponentError> details = ((ErrorResponse.Error.InvalidFieldValueError) responseError).getDetails();
                if (details != null && (values = details.values()) != null) {
                    list = CollectionsKt.h1(values);
                }
                action.e(l.j.l(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, list, null, null, false, 245755, null));
            } else if (responseError instanceof ErrorResponse.Error.InconsistentTransitionError) {
                if (lVar instanceof j2) {
                    action.e(nVar.i1((j2) lVar));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            } else if (!(responseError instanceof ErrorResponse.Error.FieldNotFoundError) && !(responseError instanceof ErrorResponse.Error.InactiveTemplateError) && !(responseError instanceof ErrorResponse.Error.InvalidConfigError) && !(responseError instanceof ErrorResponse.Error.RateLimitExceededError) && !(responseError instanceof ErrorResponse.Error.TransitionFromTerminalStateError) && !(responseError instanceof ErrorResponse.Error.UnauthenticatedError) && !(responseError instanceof ErrorResponse.Error.UnknownError) && responseError != null) {
                throw new or.p();
            } else {
                if (networkErrorInfo.isRecoverable()) {
                    Object c11 = action.c();
                    if (c11 instanceof l.j) {
                        jVar2 = (l.j) c11;
                    }
                    l.j jVar3 = jVar2;
                    if (jVar3 == null) {
                        return Unit.f31988a;
                    }
                    action.e(l.j.l(jVar3, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, networkErrorInfo, null, false, 229371, null));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            }
        } else if (!(internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode)) {
            throw new or.p();
        } else {
            x1(nVar, action, str, internalErrorInfo, null, 4, null);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, n nVar, l lVar) {
        n0(aVar, nVar, lVar, false);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r m1(final n nVar, final String str, final w wVar, final com.withpersona.sdk2.inquiry.internal.network.i it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof i.a) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n12;
                    n12 = com.withpersona.sdk2.inquiry.internal.n.n1(com.withpersona.sdk2.inquiry.internal.n.this, str, it, (r.c) obj);
                    return n12;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, i.b.f19344a)) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = com.withpersona.sdk2.inquiry.internal.n.o1(com.withpersona.sdk2.inquiry.internal.w.this, (r.c) obj);
                    return o12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n0(k.a aVar, n nVar, final l lVar, final boolean z10) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(nVar, null, new Function1() { // from class: so.l0
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(l lVar, boolean z10, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = lVar.b();
        String k10 = lVar.k();
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
        action.d(new b.a(b10, k10, styles, str, str2, str3, str4, z10));
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    private final Object p0(l.a aVar, k.a aVar2) {
        aVar2.a("complete", new h(aVar2, this, aVar, null));
        return new d.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r p1(n nVar, l lVar, String str, final q.c it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof q.c.b) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.o1
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
            throw new or.p();
        }
    }

    private final Object q0(c cVar, l.b bVar, k.a aVar, Function0 function0) {
        return L0(cVar, new yo.d(bVar.p(), bVar.q(), bVar.b(), bVar.k(), cVar.a(), bVar.l(), bVar.j(), bVar.o(), null, bVar.n(), bVar.r(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null), aVar, bVar.getStyles(), function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(q.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((q.c.b) cVar).a());
        return Unit.f31988a;
    }

    private final Object r0(c cVar, final l.c cVar2, k.a aVar, Function0 function0) {
        xp.b.d(this.f19075o, false, false, false, 4, null);
        zm.w.l(aVar, this.f19063c.a(cVar2.b()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.a.class), "", new Function1() { // from class: so.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r s02;
                s02 = com.withpersona.sdk2.inquiry.internal.n.s0(com.withpersona.sdk2.inquiry.internal.n.this, cVar2, (com.withpersona.sdk2.inquiry.internal.network.b) obj);
                return s02;
            }
        });
        return new d.b(cVar2.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r r1(final n nVar, final l lVar, final String str, final com.withpersona.sdk2.inquiry.internal.network.h it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof h.b) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s12;
                    s12 = com.withpersona.sdk2.inquiry.internal.n.s1(com.withpersona.sdk2.inquiry.internal.network.h.this, (r.c) obj);
                    return s12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof h.a) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t12;
                    t12 = com.withpersona.sdk2.inquiry.internal.n.t1(com.withpersona.sdk2.inquiry.internal.n.this, it, lVar, str, (r.c) obj);
                    return t12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r s0(final n nVar, final l.c cVar, final com.withpersona.sdk2.inquiry.internal.network.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof b.C0255b) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t02;
                    t02 = com.withpersona.sdk2.inquiry.internal.n.t0(l.c.this, it, nVar, (r.c) obj);
                    return t02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.a) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.u0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit u02;
                    u02 = com.withpersona.sdk2.inquiry.internal.n.u0(com.withpersona.sdk2.inquiry.internal.n.this, cVar, it, (r.c) obj);
                    return u02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(com.withpersona.sdk2.inquiry.internal.network.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h.b bVar = (h.b) hVar;
        bVar.a().g(true);
        action.e(bVar.a());
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, n nVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        b.C0255b c0255b = (b.C0255b) bVar;
        action.e(new l.i(c0255b.b(), null, cVar.b(), null, true, c0255b.a(), 2, null));
        nVar.f19076p.b(new b.C0627b(cVar.b(), com.withpersona.sdk2.inquiry.internal.h.f18918b.a(c0255b.b())));
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(n nVar, l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, cVar.k(), ((b.a) bVar).a(), null, 4, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r u1(n nVar, l lVar, String str, final x.b it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof x.b.a) {
            return k1(nVar, lVar, str, ((x.b.a) it).a());
        }
        if (it instanceof x.b.C0259b) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit v12;
                    v12 = com.withpersona.sdk2.inquiry.internal.n.v1(x.b.this, (r.c) obj);
                    return v12;
                }
            }, 1, null);
            return d10;
        }
        throw new or.p();
    }

    private final Object v0(final l.d dVar, k.a aVar) {
        r2.e eVar;
        boolean z10;
        boolean z11;
        String str;
        String str2;
        String documentId = dVar.o().getConfig().getDocumentId();
        int i10 = e.f19123c[dVar.o().getConfig().getStartPage().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (documentId != null) {
                    eVar = new r2.e.b(documentId);
                } else {
                    eVar = r2.e.a.f6908d;
                }
            } else {
                throw new or.p();
            }
        } else {
            eVar = r2.e.a.f6908d;
        }
        r2.e eVar2 = eVar;
        String e10 = dVar.e();
        r2 r2Var = this.f19072l;
        String k10 = dVar.k();
        String b10 = dVar.b();
        String e11 = dVar.e();
        String p10 = dVar.p();
        String title = dVar.o().getConfig().getLocalizations().getPromptPage().getTitle();
        String prompt = dVar.o().getConfig().getLocalizations().getPromptPage().getPrompt();
        String disclaimer = dVar.o().getConfig().getLocalizations().getPromptPage().getDisclaimer();
        String btnSubmit = dVar.o().getConfig().getLocalizations().getPromptPage().getBtnSubmit();
        String title2 = dVar.o().getConfig().getLocalizations().getPendingPage().getTitle();
        String description = dVar.o().getConfig().getLocalizations().getPendingPage().getDescription();
        String fieldKeyDocument = dVar.o().getConfig().getFieldKeyDocument();
        String kind = dVar.o().getConfig().getKind();
        int documentFileLimit = dVar.o().getConfig().getDocumentFileLimit();
        Boolean backStepEnabled = dVar.o().getConfig().getBackStepEnabled();
        if (backStepEnabled != null) {
            z10 = backStepEnabled.booleanValue();
        } else {
            z10 = false;
        }
        Boolean cancelButtonEnabled = dVar.o().getConfig().getCancelButtonEnabled();
        if (cancelButtonEnabled != null) {
            z11 = cancelButtonEnabled.booleanValue();
        } else {
            z11 = true;
        }
        String cameraPermissionsTitle = dVar.o().getConfig().getLocalizations().getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = dVar.o().getConfig().getLocalizations().getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = dVar.o().getConfig().getLocalizations().getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = dVar.o().getConfig().getLocalizations().getPromptPage().getCameraPermissionsCancelButtonText();
        StepStyles.DocumentStepStyle styles = dVar.getStyles();
        bo.l q10 = dVar.q();
        NextStep.Document.AssetConfig n10 = dVar.n();
        if (n10 == null) {
            str = k10;
            str2 = b10;
            n10 = new NextStep.Document.AssetConfig(null, null, 3, null);
        } else {
            str = k10;
            str2 = b10;
        }
        PendingPageTextPosition pendingPageTextVerticalPosition = dVar.o().getConfig().getPendingPageTextVerticalPosition();
        if (pendingPageTextVerticalPosition == null) {
            pendingPageTextVerticalPosition = PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
        return new zo.d(aVar.b(r2Var, new r2.b(str, str2, e11, p10, title, prompt, disclaimer, btnSubmit, title2, description, fieldKeyDocument, kind, documentId, eVar2, q10, documentFileLimit, z10, z11, cameraPermissionsTitle, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, styles, n10, pendingPageTextVerticalPosition), e10, new Function1() { // from class: so.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r w02;
                w02 = com.withpersona.sdk2.inquiry.internal.n.w0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (r2.c) obj);
                return w02;
            }
        }), !Intrinsics.areEqual(dVar.f(), w.c.f19390d), dVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((l) action.c()).i(new w.d(((x.b.C0259b) bVar).a())));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r w0(final n nVar, final l.d dVar, final r2.c it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        zm.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, r2.c.b.f6876a)) {
            d13 = zm.z.d(nVar, null, new Function1() { // from class: so.v0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x02;
                    x02 = com.withpersona.sdk2.inquiry.internal.n.x0(l.d.this, (r.c) obj);
                    return x02;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, r2.c.a.f6875a)) {
            d12 = zm.z.d(nVar, null, new Function1() { // from class: so.x0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y02;
                    y02 = com.withpersona.sdk2.inquiry.internal.n.y0(l.d.this, (r.c) obj);
                    return y02;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof r2.c.C0117c) {
            d11 = zm.z.d(nVar, null, new Function1() { // from class: so.y0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit z02;
                    z02 = com.withpersona.sdk2.inquiry.internal.n.z0(com.withpersona.sdk2.inquiry.internal.n.this, it, dVar, (r.c) obj);
                    return z02;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, r2.c.d.f6878a)) {
            d10 = zm.z.d(nVar, null, new Function1() { // from class: so.z0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = com.withpersona.sdk2.inquiry.internal.n.A0(l.d.this, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    private final void w1(r.c cVar, String str, InternalErrorInfo internalErrorInfo, String str2) {
        if (str2 == null) {
            str2 = so.r.b(internalErrorInfo);
        }
        cVar.d(new b.c(str2, so.r.a(internalErrorInfo), internalErrorInfo, str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(l.d dVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = dVar.b();
        String k10 = dVar.k();
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
        action.d(new b.a(b10, k10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31988a;
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
        action.e(l.d.l(dVar, null, null, w.c.f19390d, null, null, null, null, null, null, null, 1019, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(n nVar, r2.c cVar, l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        r2.c.C0117c c0117c = (r2.c.C0117c) cVar;
        if (nVar.k0(c0117c.a())) {
            action.e(nVar.i1(dVar));
        } else {
            x1(nVar, action, dVar.k(), c0117c.a(), null, 4, null);
        }
        return Unit.f31988a;
    }

    private final ip.i z1(Object obj, final k.a aVar) {
        return new ip.i(obj, new Function0() { // from class: so.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit A1;
                A1 = com.withpersona.sdk2.inquiry.internal.n.A1(com.withpersona.sdk2.inquiry.internal.n.this, aVar);
                return A1;
            }
        }, new Function0() { // from class: so.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                c.b C1;
                C1 = com.withpersona.sdk2.inquiry.internal.n.C1(com.withpersona.sdk2.inquiry.internal.n.this);
                return C1;
            }
        }, this.f19073m.b(), new Function1() { // from class: so.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit D1;
                D1 = com.withpersona.sdk2.inquiry.internal.n.D1(com.withpersona.sdk2.inquiry.internal.n.this, aVar, ((Boolean) obj2).booleanValue());
                return D1;
            }
        });
    }

    @Override // zm.k
    /* renamed from: j0 */
    public l d(c props, zm.i iVar) {
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
                readParcelable = obtain.readParcelable(zm.i.class.getClassLoader());
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
                return l.j.l((l.j) lVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, true, 131071, null);
            }
            return lVar;
        } else if (props instanceof c.C0253c) {
            c.C0253c c0253c = (c.C0253c) props;
            return new l.b(c0253c.g(), c0253c.h(), c0253c.b(), c0253c.c(), c0253c.e(), c0253c.d(), c0253c.i(), c0253c.f());
        } else if (props instanceof c.b) {
            return new l.e(((c.b) props).b());
        } else {
            if (props instanceof c.a) {
                c.a aVar = (c.a) props;
                if (pp.h.e(aVar.b()) && aVar.c() != null) {
                    return new l.g(aVar.b(), aVar.c());
                }
                String c10 = aVar.c();
                if (c10 != null && c10.length() != 0) {
                    return new l.i(aVar.c(), new w.a(null, 1, null), aVar.b(), null, true, wp.g.f53236o.a());
                }
                return new l.c(aVar.b());
            }
            throw new or.p();
        }
    }

    @Override // zm.k
    /* renamed from: l0 */
    public Object f(c renderProps, final l renderState, final k.a context) {
        Object p02;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        j1(renderProps, renderState, context);
        this.f19075o.e(Intrinsics.areEqual(renderState.f(), w.c.f19390d));
        Function0 function0 = new Function0() { // from class: so.a0
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
            throw new or.p();
        }
        zp.k F1 = F1(p02, renderState);
        if (this.f19073m.c()) {
            return z1(F1, context);
        }
        return F1;
    }

    @Override // zm.k
    /* renamed from: y1 */
    public zm.i g(l state) {
        Intrinsics.checkNotNullParameter(state, "state");
        if (state instanceof l.j) {
            l.j jVar = (l.j) state;
            this.f19077q.e(jVar.k(), jVar.b(), jVar.v(), jVar.getComponents());
            return bn.s.a(l.j.l(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 261887, null));
        }
        return bn.s.a(state);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        so.f a();

        Integer getTheme();

        boolean isCancelled();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19103a;

            /* renamed from: b  reason: collision with root package name */
            private final so.f f19104b;

            /* renamed from: c  reason: collision with root package name */
            private final Integer f19105c;

            /* renamed from: d  reason: collision with root package name */
            private final boolean f19106d;

            public b(String oneTimeLinkCode, so.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19103a = oneTimeLinkCode;
                this.f19104b = environment;
                this.f19105c = num;
                this.f19106d = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public so.f a() {
                return this.f19104b;
            }

            public final String b() {
                return this.f19103a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof b) {
                    b bVar = (b) obj;
                    return Intrinsics.areEqual(this.f19103a, bVar.f19103a) && this.f19104b == bVar.f19104b && Intrinsics.areEqual(this.f19105c, bVar.f19105c) && this.f19106d == bVar.f19106d;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19105c;
            }

            public int hashCode() {
                int hashCode = ((this.f19103a.hashCode() * 31) + this.f19104b.hashCode()) * 31;
                Integer num = this.f19105c;
                return ((hashCode + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.f19106d);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19106d;
            }

            public String toString() {
                String str = this.f19103a;
                so.f fVar = this.f19104b;
                Integer num = this.f19105c;
                boolean z10 = this.f19106d;
                return "OneTimeCodeProps(oneTimeLinkCode=" + str + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ b(String str, so.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, fVar, num, (i10 & 8) != 0 ? false : z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19097a;

            /* renamed from: b  reason: collision with root package name */
            private final String f19098b;

            /* renamed from: c  reason: collision with root package name */
            private final String f19099c;

            /* renamed from: d  reason: collision with root package name */
            private final so.f f19100d;

            /* renamed from: e  reason: collision with root package name */
            private final Integer f19101e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f19102f;

            public a(String inquiryId, String str, String str2, so.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19097a = inquiryId;
                this.f19098b = str;
                this.f19099c = str2;
                this.f19100d = environment;
                this.f19101e = num;
                this.f19102f = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public so.f a() {
                return this.f19100d;
            }

            public final String b() {
                return this.f19097a;
            }

            public final String c() {
                return this.f19098b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f19097a, aVar.f19097a) && Intrinsics.areEqual(this.f19098b, aVar.f19098b) && Intrinsics.areEqual(this.f19099c, aVar.f19099c) && this.f19100d == aVar.f19100d && Intrinsics.areEqual(this.f19101e, aVar.f19101e) && this.f19102f == aVar.f19102f;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19101e;
            }

            public int hashCode() {
                int hashCode = this.f19097a.hashCode() * 31;
                String str = this.f19098b;
                int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
                String str2 = this.f19099c;
                int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.f19100d.hashCode()) * 31;
                Integer num = this.f19101e;
                return ((hashCode3 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19102f);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19102f;
            }

            public String toString() {
                String str = this.f19097a;
                String str2 = this.f19098b;
                String str3 = this.f19099c;
                so.f fVar = this.f19100d;
                Integer num = this.f19101e;
                boolean z10 = this.f19102f;
                return "InquiryProps(inquiryId=" + str + ", sessionToken=" + str2 + ", environmentId=" + str3 + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ a(String str, String str2, String str3, so.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, fVar, num, (i10 & 32) != 0 ? false : z10);
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0253c implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19107a;

            /* renamed from: b  reason: collision with root package name */
            private final String f19108b;

            /* renamed from: c  reason: collision with root package name */
            private final String f19109c;

            /* renamed from: d  reason: collision with root package name */
            private final String f19110d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19111e;

            /* renamed from: f  reason: collision with root package name */
            private final Map f19112f;

            /* renamed from: g  reason: collision with root package name */
            private final String f19113g;

            /* renamed from: h  reason: collision with root package name */
            private final StaticInquiryTemplate f19114h;

            /* renamed from: i  reason: collision with root package name */
            private final so.f f19115i;

            /* renamed from: j  reason: collision with root package name */
            private final Integer f19116j;

            /* renamed from: k  reason: collision with root package name */
            private final boolean f19117k;

            public C0253c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, so.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19107a = str;
                this.f19108b = str2;
                this.f19109c = str3;
                this.f19110d = str4;
                this.f19111e = str5;
                this.f19112f = map;
                this.f19113g = str6;
                this.f19114h = staticInquiryTemplate;
                this.f19115i = environment;
                this.f19116j = num;
                this.f19117k = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public so.f a() {
                return this.f19115i;
            }

            public final String b() {
                return this.f19109c;
            }

            public final String c() {
                return this.f19111e;
            }

            public final Map d() {
                return this.f19112f;
            }

            public final String e() {
                return this.f19110d;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0253c) {
                    C0253c c0253c = (C0253c) obj;
                    return Intrinsics.areEqual(this.f19107a, c0253c.f19107a) && Intrinsics.areEqual(this.f19108b, c0253c.f19108b) && Intrinsics.areEqual(this.f19109c, c0253c.f19109c) && Intrinsics.areEqual(this.f19110d, c0253c.f19110d) && Intrinsics.areEqual(this.f19111e, c0253c.f19111e) && Intrinsics.areEqual(this.f19112f, c0253c.f19112f) && Intrinsics.areEqual(this.f19113g, c0253c.f19113g) && Intrinsics.areEqual(this.f19114h, c0253c.f19114h) && this.f19115i == c0253c.f19115i && Intrinsics.areEqual(this.f19116j, c0253c.f19116j) && this.f19117k == c0253c.f19117k;
                }
                return false;
            }

            public final StaticInquiryTemplate f() {
                return this.f19114h;
            }

            public final String g() {
                return this.f19107a;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19116j;
            }

            public final String h() {
                return this.f19108b;
            }

            public int hashCode() {
                String str = this.f19107a;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f19108b;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                String str3 = this.f19109c;
                int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f19110d;
                int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f19111e;
                int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
                Map map = this.f19112f;
                int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
                String str6 = this.f19113g;
                int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
                StaticInquiryTemplate staticInquiryTemplate = this.f19114h;
                int hashCode8 = (((hashCode7 + (staticInquiryTemplate == null ? 0 : staticInquiryTemplate.hashCode())) * 31) + this.f19115i.hashCode()) * 31;
                Integer num = this.f19116j;
                return ((hashCode8 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19117k);
            }

            public final String i() {
                return this.f19113g;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19117k;
            }

            public String toString() {
                String str = this.f19107a;
                String str2 = this.f19108b;
                String str3 = this.f19109c;
                String str4 = this.f19110d;
                String str5 = this.f19111e;
                Map map = this.f19112f;
                String str6 = this.f19113g;
                StaticInquiryTemplate staticInquiryTemplate = this.f19114h;
                so.f fVar = this.f19115i;
                Integer num = this.f19116j;
                boolean z10 = this.f19117k;
                return "TemplateProps(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", referenceId=" + str4 + ", environmentId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ C0253c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, so.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, str4, str5, map, str6, staticInquiryTemplate, fVar, num, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0252b implements b {
            @NotNull
            public static final Parcelable.Creator<C0252b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19087d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19088e;

            /* renamed from: i  reason: collision with root package name */
            private final Map f19089i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19090o;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0252b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    String readString = parcel.readString();
                    String readString2 = parcel.readString();
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0252b.class.getClassLoader()));
                    }
                    return new C0252b(readString, readString2, linkedHashMap, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0252b[] newArray(int i10) {
                    return new C0252b[i10];
                }
            }

            public C0252b(String inquiryId, String inquiryStatus, Map fields, String str) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
                Intrinsics.checkNotNullParameter(fields, "fields");
                this.f19087d = inquiryId;
                this.f19088e = inquiryStatus;
                this.f19089i = fields;
                this.f19090o = str;
            }

            public final Map a() {
                return this.f19089i;
            }

            public final String b() {
                return this.f19087d;
            }

            public final String c() {
                return this.f19088e;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0252b) {
                    C0252b c0252b = (C0252b) obj;
                    return Intrinsics.areEqual(this.f19087d, c0252b.f19087d) && Intrinsics.areEqual(this.f19088e, c0252b.f19088e) && Intrinsics.areEqual(this.f19089i, c0252b.f19089i) && Intrinsics.areEqual(this.f19090o, c0252b.f19090o);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = ((((this.f19087d.hashCode() * 31) + this.f19088e.hashCode()) * 31) + this.f19089i.hashCode()) * 31;
                String str = this.f19090o;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19090o;
            }

            public String toString() {
                String str = this.f19087d;
                String str2 = this.f19088e;
                Map map = this.f19089i;
                String str3 = this.f19090o;
                return "Complete(inquiryId=" + str + ", inquiryStatus=" + str2 + ", fields=" + map + ", sessionToken=" + str3 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19087d);
                dest.writeString(this.f19088e);
                Map map = this.f19089i;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
                dest.writeString(this.f19090o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements b {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19091d;

            /* renamed from: e  reason: collision with root package name */
            private final mq.d f19092e;

            /* renamed from: i  reason: collision with root package name */
            private final InternalErrorInfo f19093i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19094o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c(parcel.readString(), (mq.d) parcel.readParcelable(c.class.getClassLoader()), (InternalErrorInfo) parcel.readParcelable(c.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(String str, mq.d errorCode, InternalErrorInfo cause, String str2) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19091d = str;
                this.f19092e = errorCode;
                this.f19093i = cause;
                this.f19094o = str2;
            }

            public final InternalErrorInfo a() {
                return this.f19093i;
            }

            public final String b() {
                return this.f19091d;
            }

            public final mq.d c() {
                return this.f19092e;
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
                    return Intrinsics.areEqual(this.f19091d, cVar.f19091d) && this.f19092e == cVar.f19092e && Intrinsics.areEqual(this.f19093i, cVar.f19093i) && Intrinsics.areEqual(this.f19094o, cVar.f19094o);
                }
                return false;
            }

            public int hashCode() {
                String str = this.f19091d;
                int hashCode = (((((str == null ? 0 : str.hashCode()) * 31) + this.f19092e.hashCode()) * 31) + this.f19093i.hashCode()) * 31;
                String str2 = this.f19094o;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19094o;
            }

            public String toString() {
                String str = this.f19091d;
                mq.d dVar = this.f19092e;
                InternalErrorInfo internalErrorInfo = this.f19093i;
                String str2 = this.f19094o;
                return "Error(debugMessage=" + str + ", errorCode=" + dVar + ", cause=" + internalErrorInfo + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19091d);
                dest.writeParcelable(this.f19092e, i10);
                dest.writeParcelable(this.f19093i, i10);
                dest.writeString(this.f19094o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements b {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19095d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19096e;

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
                this.f19095d = inquiryId;
                this.f19096e = str;
            }

            public final String a() {
                return this.f19095d;
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
                    return Intrinsics.areEqual(this.f19095d, dVar.f19095d) && Intrinsics.areEqual(this.f19096e, dVar.f19096e);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = this.f19095d.hashCode() * 31;
                String str = this.f19096e;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19096e;
            }

            public String toString() {
                String str = this.f19095d;
                String str2 = this.f19096e;
                return "ReinitializeWithFallbackMode(inquiryId=" + str + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19095d);
                dest.writeString(this.f19096e);
            }
        }

        String k();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0251a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19079d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19080e;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyle f19081i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19082o;

            /* renamed from: p  reason: collision with root package name */
            private final String f19083p;

            /* renamed from: q  reason: collision with root package name */
            private final String f19084q;

            /* renamed from: r  reason: collision with root package name */
            private final String f19085r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f19086s;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0251a implements Parcelable.Creator {
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
                this.f19079d = str;
                this.f19080e = str2;
                this.f19081i = stepStyle;
                this.f19082o = str3;
                this.f19083p = str4;
                this.f19084q = str5;
                this.f19085r = str6;
                this.f19086s = z10;
            }

            public final String a() {
                return this.f19085r;
            }

            public final boolean b() {
                return this.f19086s;
            }

            public final String c() {
                return this.f19079d;
            }

            public final String d() {
                return this.f19083p;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String e() {
                return this.f19084q;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f19079d, aVar.f19079d) && Intrinsics.areEqual(this.f19080e, aVar.f19080e) && Intrinsics.areEqual(this.f19081i, aVar.f19081i) && Intrinsics.areEqual(this.f19082o, aVar.f19082o) && Intrinsics.areEqual(this.f19083p, aVar.f19083p) && Intrinsics.areEqual(this.f19084q, aVar.f19084q) && Intrinsics.areEqual(this.f19085r, aVar.f19085r) && this.f19086s == aVar.f19086s;
                }
                return false;
            }

            public final StepStyle f() {
                return this.f19081i;
            }

            public final String g() {
                return this.f19082o;
            }

            public int hashCode() {
                String str = this.f19079d;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f19080e;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                StepStyle stepStyle = this.f19081i;
                int hashCode3 = (hashCode2 + (stepStyle == null ? 0 : stepStyle.hashCode())) * 31;
                String str3 = this.f19082o;
                int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f19083p;
                int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f19084q;
                int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
                String str6 = this.f19085r;
                return ((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19086s);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19080e;
            }

            public String toString() {
                String str = this.f19079d;
                String str2 = this.f19080e;
                StepStyle stepStyle = this.f19081i;
                String str3 = this.f19082o;
                String str4 = this.f19083p;
                String str5 = this.f19084q;
                String str6 = this.f19085r;
                boolean z10 = this.f19086s;
                return "Cancel(inquiryId=" + str + ", sessionToken=" + str2 + ", styles=" + stepStyle + ", title=" + str3 + ", message=" + str4 + ", resumeButtonText=" + str5 + ", cancelButtonText=" + str6 + ", force=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19079d);
                dest.writeString(this.f19080e);
                dest.writeParcelable(this.f19081i, i10);
                dest.writeString(this.f19082o);
                dest.writeString(this.f19083p);
                dest.writeString(this.f19084q);
                dest.writeString(this.f19085r);
                dest.writeInt(this.f19086s ? 1 : 0);
            }

            public /* synthetic */ a(String str, String str2, StepStyle stepStyle, String str3, String str4, String str5, String str6, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, stepStyle, str3, str4, str5, str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z10);
            }
        }
    }
}
