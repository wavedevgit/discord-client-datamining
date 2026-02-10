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
import dp.b;
import en.k;
import en.r;
import ep.b2;
import ep.j2;
import ep.l2;
import fq.a;
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
import okio.ByteString;
import oo.r2;
import org.jetbrains.annotations.NotNull;
import to.c4;
import to.g3;
import up.c;
import wp.a1;
import wp.d2;
import wp.e2;
import wp.m1;
import wp.x5;
import ys.i0;
import zq.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends en.k {

    /* renamed from: s  reason: collision with root package name */
    public static final a f20060s = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f20061a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f20062b;

    /* renamed from: c  reason: collision with root package name */
    private final a.InterfaceC0247a f20063c;

    /* renamed from: d  reason: collision with root package name */
    private final q.b f20064d;

    /* renamed from: e  reason: collision with root package name */
    private final u.a f20065e;

    /* renamed from: f  reason: collision with root package name */
    private final x.a f20066f;

    /* renamed from: g  reason: collision with root package name */
    private final a0.a f20067g;

    /* renamed from: h  reason: collision with root package name */
    private final f.a f20068h;

    /* renamed from: i  reason: collision with root package name */
    private final g3 f20069i;

    /* renamed from: j  reason: collision with root package name */
    private final x5 f20070j;

    /* renamed from: k  reason: collision with root package name */
    private final v4 f20071k;

    /* renamed from: l  reason: collision with root package name */
    private final r2 f20072l;

    /* renamed from: m  reason: collision with root package name */
    private final up.c f20073m;

    /* renamed from: n  reason: collision with root package name */
    private final fq.e f20074n;

    /* renamed from: o  reason: collision with root package name */
    private final jq.b f20075o;

    /* renamed from: p  reason: collision with root package name */
    private final fq.c f20076p;

    /* renamed from: q  reason: collision with root package name */
    private final l2 f20077q;

    /* renamed from: r  reason: collision with root package name */
    private final s.a f20078r;

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
            private final StepStyle f20118a;

            /* renamed from: b  reason: collision with root package name */
            private final boolean f20119b;

            /* renamed from: c  reason: collision with root package name */
            private final Function0 f20120c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(StepStyle stepStyle, boolean z10, Function0 onBack) {
                super(null);
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                this.f20118a = stepStyle;
                this.f20119b = z10;
                this.f20120c = onBack;
            }

            public final Function0 a() {
                return this.f20120c;
            }

            public final StepStyle b() {
                return this.f20118a;
            }

            public final boolean c() {
                return this.f20119b;
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
        public static final /* synthetic */ int[] f20121a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f20122b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f20123c;

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
            f20121a = iArr;
            int[] iArr2 = new int[b2.values().length];
            try {
                iArr2[b2.f23061d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[b2.f23062e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f20122b = iArr2;
            int[] iArr3 = new int[NextStep.Document.StartPage.values().length];
            try {
                iArr3[NextStep.Document.StartPage.PROMPT.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr3[NextStep.Document.StartPage.REVIEW.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            f20123c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20124d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f20126i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f20127o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ k.a f20128d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ n f20129e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ l f20130i;

            a(k.a aVar, n nVar, l lVar) {
                this.f20128d = aVar;
                this.f20129e = nVar;
                this.f20130i = lVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(fq.a aVar, Continuation continuation) {
                if (aVar instanceof a.C0325a) {
                    n.n0(this.f20128d, this.f20129e, this.f20130i, ((a.C0325a) aVar).a());
                    return Unit.f31987a;
                }
                throw new as.p();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f20126i = aVar;
            this.f20127o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f20126i, this.f20127o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f20124d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = n.this.f20074n.c();
                a aVar = new a(this.f20126i, n.this, this.f20127o);
                this.f20124d = 1;
                if (c10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20131d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f20132e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f20133i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f20134o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, n nVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f20132e = aVar;
            this.f20133i = nVar;
            this.f20134o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f20132e, this.f20133i, this.f20134o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f20131d == 0) {
                kotlin.c.b(obj);
                n.n0(this.f20132e, this.f20133i, this.f20134o, true);
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20135d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f20136e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f20137i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l.a f20138o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, n nVar, l.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f20136e = aVar;
            this.f20137i = nVar;
            this.f20138o = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(l.a aVar, r.c cVar) {
            cVar.d(new b.C0256b(aVar.b(), aVar.o(), aVar.l(), aVar.m()));
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f20136e, this.f20137i, this.f20138o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f20135d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f20136e.c();
                n nVar = this.f20137i;
                final l.a aVar = this.f20138o;
                d10 = en.z.d(nVar, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.o
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = n.h.k(l.a.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20139d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f20140e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f20141i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, n nVar, Continuation continuation) {
            super(2, continuation);
            this.f20140e = aVar;
            this.f20141i = nVar;
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
                return Unit.f31987a;
            }
            cVar.e(l.j.k(jVar2, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 229375, null));
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f20140e, this.f20141i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f20139d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f20139d = 1;
                if (i0.a(2000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f20140e.c();
            d10 = en.z.d(this.f20141i, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = n.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public n(Context applicationContext, c.a createInquiryWorker, a.InterfaceC0247a inquirySessionWorker, q.b pollingWorker, u.a transitionBackWorker, x.a transitionWorkerFactory, a0.a updateInquirySessionWorkerFactory, f.a exchangeOneTimeCodeWorkerFactory, g3 governmentIdWorkflow, x5 selfieWorkflow, v4 uiWorkflow, r2 documentWorkflow, up.c sandboxFlags, fq.e externalInquiryController, jq.b navigationStateManager, fq.c externalEventLogger, l2 uiStepSavedStateHelper, s.a restoreUiStepStateWorkerFactory) {
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
        this.f20061a = applicationContext;
        this.f20062b = createInquiryWorker;
        this.f20063c = inquirySessionWorker;
        this.f20064d = pollingWorker;
        this.f20065e = transitionBackWorker;
        this.f20066f = transitionWorkerFactory;
        this.f20067g = updateInquirySessionWorkerFactory;
        this.f20068h = exchangeOneTimeCodeWorkerFactory;
        this.f20069i = governmentIdWorkflow;
        this.f20070j = selfieWorkflow;
        this.f20071k = uiWorkflow;
        this.f20072l = documentWorkflow;
        this.f20073m = sandboxFlags;
        this.f20074n = externalInquiryController;
        this.f20075o = navigationStateManager;
        this.f20076p = externalEventLogger;
        this.f20077q = uiStepSavedStateHelper;
        this.f20078r = restoreUiStepStateWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.d.k(dVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, null, 1019, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(n nVar, k.a aVar) {
        en.r d10;
        nVar.f20073m.f();
        en.h c10 = aVar.c();
        d10 = en.z.d(nVar, null, new Function1() { // from class: ep.t1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B1;
                B1 = com.withpersona.sdk2.inquiry.internal.n.B1((r.c) obj);
                return B1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final Object B0(c cVar, final l.e eVar, k.a aVar, Function0 function0) {
        jq.b.d(this.f20075o, false, false, false, 4, null);
        en.w.l(aVar, this.f20068h.a(eVar.j()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.f.class), "", new Function1() { // from class: ep.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r C0;
                C0 = com.withpersona.sdk2.inquiry.internal.n.C0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, (com.withpersona.sdk2.inquiry.internal.network.d) obj);
                return C0;
            }
        });
        return new d.b(eVar.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r C0(final n nVar, final l.e eVar, final com.withpersona.sdk2.inquiry.internal.network.d it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit D0;
                    D0 = com.withpersona.sdk2.inquiry.internal.n.D0(com.withpersona.sdk2.inquiry.internal.network.d.this, (r.c) obj);
                    return D0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.a) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E0;
                    E0 = com.withpersona.sdk2.inquiry.internal.n.E0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, it, (r.c) obj);
                    return E0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final c.b C1(n nVar) {
        return nVar.f20073m.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        d.b bVar = (d.b) dVar;
        if (bVar.b() == null) {
            action.e(new l.c(bVar.a()));
        } else {
            action.e(new l.i(bVar.b(), new w.a(null, 1, null), bVar.a(), null, true, iq.g.f30404o.a()));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(n nVar, k.a aVar, boolean z10) {
        en.r d10;
        nVar.f20073m.e(z10);
        en.h c10 = aVar.c();
        d10 = en.z.d(nVar, null, new Function1() { // from class: ep.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E1;
                E1 = com.withpersona.sdk2.inquiry.internal.n.E1((r.c) obj);
                return E1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(n nVar, l.e eVar, com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, eVar.m(), ((d.a) dVar).a(), null, 4, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f31987a;
    }

    private final Object F0(c cVar, final l.f fVar, k.a aVar) {
        List list;
        NextStep.GovernmentId.AssetConfig assetConfig;
        String e10 = fVar.e();
        g3 g3Var = this.f20069i;
        String m10 = fVar.m();
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
            c4 o10 = to.z.o(id2, str, fVar.F());
            if (o10 != null) {
                arrayList.add(o10);
            }
        }
        String b10 = fVar.b();
        String str2 = "US";
        String e11 = fVar.e();
        String B = fVar.B();
        boolean q10 = fVar.q();
        boolean r10 = fVar.r();
        List v10 = fVar.v();
        StepStyles.GovernmentIdStepStyle styles = fVar.getStyles();
        int C = fVar.C();
        String x10 = fVar.x();
        String A = fVar.A();
        NextStep.GovernmentId.Localizations E = fVar.E();
        String s12 = fVar.s();
        if (s12 != null) {
            str2 = s12;
        }
        List D = fVar.D();
        if (D != null) {
            list = CollectionsKt.V0(D);
        } else {
            list = null;
        }
        g3.a.C0672a i10 = kp.a.i(E, str2, list);
        long F = fVar.F();
        Integer theme = cVar.getTheme();
        boolean K = fVar.K();
        List u10 = fVar.u();
        List<NextStep.GovernmentId.VideoCaptureMethod> M = fVar.M();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(M, 10));
        for (NextStep.GovernmentId.VideoCaptureMethod videoCaptureMethod : M) {
            arrayList2.add(lo.a.valueOf(videoCaptureMethod.toString()));
        }
        VideoCaptureConfig videoCaptureConfig = new VideoCaptureConfig(0L, u10, arrayList2, fVar.N(), fVar.o(), 1, null);
        NextStep.GovernmentId.AssetConfig l10 = fVar.l();
        if (l10 == null) {
            assetConfig = new NextStep.GovernmentId.AssetConfig(null, null, null, null, null, 31, null);
        } else {
            assetConfig = l10;
        }
        return aVar.b(g3Var, new g3.a(m10, s10, arrayList, b10, e11, B, q10, r10, v10, styles, i10, C, x10, A, F, K, theme, videoCaptureConfig, assetConfig, !Intrinsics.areEqual(fVar.f(), w.c.f20390d), fVar.p(), fVar.H(), fVar.G(), fVar.t()), e10, new Function1() { // from class: ep.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r G0;
                G0 = com.withpersona.sdk2.inquiry.internal.n.G0(com.withpersona.sdk2.inquiry.internal.n.this, fVar, (g3.b) obj);
                return G0;
            }
        });
    }

    private final lq.k F1(Object obj, l lVar) {
        lq.j jVar;
        if (lVar.d()) {
            jVar = lq.j.f35981e;
        } else {
            jVar = lq.j.f35980d;
        }
        return new lq.k(obj, jVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r G0(final n nVar, final l.f fVar, final g3.b it) {
        en.r d10;
        en.r d11;
        en.r d12;
        en.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, g3.b.C0673b.f49278a)) {
            d13 = en.z.d(nVar, null, new Function1() { // from class: ep.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = com.withpersona.sdk2.inquiry.internal.n.H0(l.f.this, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            return d13;
        } else if (it instanceof g3.b.c) {
            d12 = en.z.d(nVar, null, new Function1() { // from class: ep.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = com.withpersona.sdk2.inquiry.internal.n.I0(com.withpersona.sdk2.inquiry.internal.n.this, it, fVar, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, g3.b.d.f49280a)) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit J0;
                    J0 = com.withpersona.sdk2.inquiry.internal.n.J0(l.f.this, (r.c) obj);
                    return J0;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, g3.b.a.f49277a)) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.q0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K0;
                    K0 = com.withpersona.sdk2.inquiry.internal.n.K0(l.f.this, (r.c) obj);
                    return K0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(l.f fVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = fVar.b();
        String m10 = fVar.m();
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
        action.d(new b.a(b10, m10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(n nVar, g3.b bVar, l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.b.c cVar = (g3.b.c) bVar;
        if (nVar.k0(cVar.a())) {
            action.e(nVar.i1(fVar));
        } else {
            x1(nVar, action, fVar.m(), cVar.a(), null, 4, null);
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.k(fVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.k(fVar, null, null, w.c.f20390d, null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f31987a;
    }

    private final Object L0(c cVar, final kp.d dVar, k.a aVar, StepStyle stepStyle, Function0 function0) {
        jq.b.d(this.f20075o, false, false, false, 4, null);
        en.w.l(aVar, this.f20062b.a(dVar), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.c.class), "", new Function1() { // from class: ep.z1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r M0;
                M0 = com.withpersona.sdk2.inquiry.internal.n.M0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (com.withpersona.sdk2.inquiry.internal.network.a) obj);
                return M0;
            }
        });
        return new d.b(stepStyle, true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r M0(final n nVar, final kp.d dVar, final com.withpersona.sdk2.inquiry.internal.network.a it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = com.withpersona.sdk2.inquiry.internal.n.N0(com.withpersona.sdk2.inquiry.internal.network.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.C0258a) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.m0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = com.withpersona.sdk2.inquiry.internal.n.O0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, it, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b bVar = (a.b) aVar;
        if (bq.h.e(bVar.b())) {
            action.d(new b.d(bVar.b(), bVar.a()));
        } else {
            action.e(new l.c(bVar.b()));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(n nVar, kp.d dVar, com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.C0258a c0258a = (a.C0258a) aVar;
        nVar.w1(action, dVar.g(), c0258a.a(), c0258a.b());
        return Unit.f31987a;
    }

    private final Object P0(c cVar, l.g gVar, k.a aVar, Function0 function0) {
        return L0(cVar, new kp.d(null, null, gVar.j(), gVar.k(), cVar.a(), null, null, null, null, null, null, 2019, null), aVar, gVar.getStyles(), function0);
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
        x5 x5Var = this.f20070j;
        String m10 = hVar.m();
        String b10 = hVar.b();
        String u10 = hVar.u();
        String e12 = hVar.e();
        boolean p10 = hVar.p();
        boolean q10 = hVar.q();
        String t10 = hVar.t();
        boolean B = hVar.B();
        boolean D = hVar.D();
        NextStep.Selfie.Localizations v10 = hVar.v();
        if (hVar.C() == NextStep.Selfie.CaptureMethod.ONLY_CENTER) {
            z10 = true;
        } else {
            z10 = false;
        }
        x5.b.a j10 = kp.a.j(v10, z10);
        d2 a10 = e2.a(hVar.C());
        List w10 = hVar.w();
        if (w10 == null || w10.isEmpty()) {
            str = m10;
            str2 = b10;
            int i10 = e.f20121a[hVar.C().ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    throw new as.p();
                }
                e10 = CollectionsKt.o(a1.b.f52970d, a1.b.f52971e, a1.b.f52972i);
            } else {
                e10 = CollectionsKt.e(a1.b.f52970d);
            }
        } else {
            List<NextStep.Selfie.SelfiePose> w11 = hVar.w();
            str = m10;
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
        NextStep.Selfie.AssetConfig l10 = hVar.l();
        if (l10 == null) {
            list = e10;
            l10 = new NextStep.Selfie.AssetConfig(null, null, 3, null);
            str3 = str;
            str4 = cameraPermissionsTitle;
        } else {
            list = e10;
            str3 = str;
            str4 = cameraPermissionsTitle;
        }
        PendingPageTextPosition x10 = hVar.x();
        List s10 = hVar.s();
        List<NextStep.Selfie.VideoCaptureMethod> F = hVar.F();
        String str5 = str3;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(F, 10));
        for (NextStep.Selfie.VideoCaptureMethod videoCaptureMethod : F) {
            arrayList.add(lo.a.valueOf(videoCaptureMethod.toString()));
        }
        return new lp.d(aVar.b(x5Var, new x5.b(str5, str2, u10, e12, p10, q10, t10, B, D, j10, a10, list, str4, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, microphonePermissionsTitle, microphonePermissionsPrompt, microphonePermissionsBtnContinueMobile, microphonePermissionsBtnCancel, styles, new com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig(0L, s10, arrayList, hVar.G(), hVar.o(), 1, null), l10, x10, hVar.A(), hVar.r()), e11, new Function1() { // from class: ep.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r R0;
                R0 = com.withpersona.sdk2.inquiry.internal.n.R0(com.withpersona.sdk2.inquiry.internal.n.this, hVar, (x5.c) obj);
                return R0;
            }
        }), !Intrinsics.areEqual(hVar.f(), w.c.f20390d), hVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r R0(final n nVar, final l.h hVar, final x5.c it) {
        en.r d10;
        en.r d11;
        en.r d12;
        en.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, x5.c.b.f53738a)) {
            d13 = en.z.d(nVar, null, new Function1() { // from class: ep.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = com.withpersona.sdk2.inquiry.internal.n.S0(l.h.this, (r.c) obj);
                    return S0;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, x5.c.d.f53740a)) {
            d12 = en.z.d(nVar, null, new Function1() { // from class: ep.c1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = com.withpersona.sdk2.inquiry.internal.n.T0(l.h.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, x5.c.a.f53737a)) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = com.withpersona.sdk2.inquiry.internal.n.U0(l.h.this, (r.c) obj);
                    return U0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof x5.c.C0748c) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = com.withpersona.sdk2.inquiry.internal.n.V0(com.withpersona.sdk2.inquiry.internal.n.this, it, hVar, (r.c) obj);
                    return V0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(l.h hVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = hVar.b();
        String m10 = hVar.m();
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
        action.d(new b.a(b10, m10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.k(hVar, null, null, new w.a(null, 1, null), null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.k(hVar, null, null, w.c.f20390d, null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(n nVar, x5.c cVar, l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5.c.C0748c c0748c = (x5.c.C0748c) cVar;
        if (nVar.k0(c0748c.a())) {
            action.e(nVar.i1(hVar));
        } else {
            x1(nVar, action, hVar.m(), c0748c.a(), null, 4, null);
        }
        return Unit.f31987a;
    }

    private final Object W0(c cVar, l.i iVar, k.a aVar, Function0 function0) {
        jq.b.d(this.f20075o, false, false, false, 4, null);
        return new d.b(iVar.getStyles(), iVar.l(), function0);
    }

    /* JADX WARN: Removed duplicated region for block: B:66:0x0145  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0173  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object X0(com.withpersona.sdk2.inquiry.internal.n.c r27, final com.withpersona.sdk2.inquiry.internal.l.j r28, en.k.a r29, kotlin.jvm.functions.Function0 r30) {
        /*
            Method dump skipped, instructions count: 399
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.n.X0(com.withpersona.sdk2.inquiry.internal.n$c, com.withpersona.sdk2.inquiry.internal.l$j, en.k$a, kotlin.jvm.functions.Function0):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r Y0(final n nVar, final l.j jVar, final v4.c it) {
        en.r d10;
        en.r d11;
        en.r d12;
        en.r d13;
        en.r d14;
        en.r d15;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, v4.c.b.f56977a)) {
            d15 = en.z.d(nVar, null, new Function1() { // from class: ep.f1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z0;
                    Z0 = com.withpersona.sdk2.inquiry.internal.n.Z0(l.j.this, (r.c) obj);
                    return Z0;
                }
            }, 1, null);
            return d15;
        } else if (it instanceof v4.c.d) {
            d14 = en.z.d(nVar, null, new Function1() { // from class: ep.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a12;
                    a12 = com.withpersona.sdk2.inquiry.internal.n.a1(com.withpersona.sdk2.inquiry.internal.n.this, it, jVar, (r.c) obj);
                    return a12;
                }
            }, 1, null);
            return d14;
        } else if (it instanceof v4.c.f) {
            d13 = en.z.d(nVar, null, new Function1() { // from class: ep.i1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = com.withpersona.sdk2.inquiry.internal.n.b1(l.j.this, it, (r.c) obj);
                    return b12;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, v4.c.e.f56981a)) {
            d12 = en.z.d(nVar, null, new Function1() { // from class: ep.j1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c12;
                    c12 = com.withpersona.sdk2.inquiry.internal.n.c1(l.j.this, (r.c) obj);
                    return c12;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v4.c.a) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.k1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d16;
                    d16 = com.withpersona.sdk2.inquiry.internal.n.d1(l.j.this, (r.c) obj);
                    return d16;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof v4.c.C0813c) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.l1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = com.withpersona.sdk2.inquiry.internal.n.e1(l.j.this, (r.c) obj);
                    return e12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(l.j jVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = jVar.b();
        String m10 = jVar.m();
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
        action.d(new b.a(b10, m10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(n nVar, v4.c cVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.d dVar = (v4.c.d) cVar;
        if (nVar.k0(dVar.a())) {
            action.e(nVar.i1(jVar));
        } else {
            nVar.w1(action, jVar.m(), dVar.a(), dVar.b());
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(l.j jVar, v4.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.f fVar = (v4.c.f) cVar;
        action.e(l.j.k(jVar, null, null, new w.b(new x.c(fVar.b(), fVar.a(), fVar.c())), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.k(jVar, null, null, new w.d(null), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.k(jVar, null, null, w.c.f20390d, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new b.C0256b(jVar.b(), jVar.s(), jVar.q(), jVar.m()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r f1(final n nVar, final l.j jVar, final s.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, s.b.a.f20373a)) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = com.withpersona.sdk2.inquiry.internal.n.g1(com.withpersona.sdk2.inquiry.internal.n.this, jVar, (r.c) obj);
                    return g12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof s.b.C0261b) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.q1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h12;
                    h12 = com.withpersona.sdk2.inquiry.internal.n.h1(s.b.this, (r.c) obj);
                    return h12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(n nVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof l.j)) {
            return Unit.f31987a;
        }
        action.e(nVar.i1(jVar));
        return Unit.f31987a;
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
            return Unit.f31987a;
        }
        action.e(l.j.k(jVar2, null, null, null, null, null, null, null, null, ((s.b.C0261b) bVar).a(), false, false, false, null, null, null, null, null, false, 130815, null));
        return Unit.f31987a;
    }

    private final l.i i1(j2 j2Var) {
        return new l.i(j2Var.m(), null, j2Var.b(), j2Var.getStyles(), true, j2Var.a(), 2, null);
    }

    private final void j1(c cVar, final l lVar, k.a aVar) {
        final String m10 = lVar.m();
        String b10 = lVar.b();
        String e10 = lVar.e();
        final w f10 = lVar.f();
        if (f10 instanceof w.b) {
            if (m10 != null && b10 != null) {
                en.w.l(aVar, this.f20066f.a(m10, b10, lVar.a(), ((w.b) f10).a()), Reflection.typeOf(x.class), "", new Function1() { // from class: ep.v1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r u12;
                        u12 = com.withpersona.sdk2.inquiry.internal.n.u1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, m10, (x.b) obj);
                        return u12;
                    }
                });
            }
        } else if (f10 instanceof w.d) {
            if (m10 != null && b10 != null) {
                en.w.l(aVar, this.f20067g.a(m10, b10, lVar.a()), Reflection.typeOf(a0.class), "", new Function1() { // from class: ep.w1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r m12;
                        m12 = com.withpersona.sdk2.inquiry.internal.n.m1(com.withpersona.sdk2.inquiry.internal.n.this, m10, f10, (com.withpersona.sdk2.inquiry.internal.network.i) obj);
                        return m12;
                    }
                });
            }
        } else if (f10 instanceof w.a) {
            if (m10 != null && b10 != null) {
                en.w.l(aVar, this.f20064d.a(m10, b10, ((w.a) f10).a(), lVar.a()), Reflection.typeOf(q.class), "", new Function1() { // from class: ep.x1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r p12;
                        p12 = com.withpersona.sdk2.inquiry.internal.n.p1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, m10, (q.c) obj);
                        return p12;
                    }
                });
            }
        } else if (Intrinsics.areEqual(f10, w.c.f20390d)) {
            if (m10 != null && b10 != null && e10 != null) {
                en.w.l(aVar, this.f20065e.a(m10, b10, e10, lVar.a()), Reflection.typeOf(u.class), "", new Function1() { // from class: ep.y1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r r12;
                        r12 = com.withpersona.sdk2.inquiry.internal.n.r1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, m10, (com.withpersona.sdk2.inquiry.internal.network.h) obj);
                        return r12;
                    }
                });
            }
        } else if (f10 == null) {
        } else {
            throw new as.p();
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

    private static final en.r k1(final n nVar, final l lVar, final String str, final InternalErrorInfo internalErrorInfo) {
        en.r d10;
        d10 = en.z.d(nVar, null, new Function1() { // from class: ep.u1
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
                    return Unit.f31987a;
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
                throw new as.p();
            } else {
                if (networkErrorInfo.isRecoverable()) {
                    Object c11 = action.c();
                    if (c11 instanceof l.j) {
                        jVar2 = (l.j) c11;
                    }
                    l.j jVar3 = jVar2;
                    if (jVar3 == null) {
                        return Unit.f31987a;
                    }
                    action.e(l.j.k(jVar3, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, networkErrorInfo, null, false, 229371, null));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            }
        } else if (!(internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode)) {
            throw new as.p();
        } else {
            x1(nVar, action, str, internalErrorInfo, null, 4, null);
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, n nVar, l lVar) {
        n0(aVar, nVar, lVar, false);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r m1(final n nVar, final String str, final w wVar, final com.withpersona.sdk2.inquiry.internal.network.i it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof i.a) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n12;
                    n12 = com.withpersona.sdk2.inquiry.internal.n.n1(com.withpersona.sdk2.inquiry.internal.n.this, str, it, (r.c) obj);
                    return n12;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, i.b.f20344a)) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = com.withpersona.sdk2.inquiry.internal.n.o1(com.withpersona.sdk2.inquiry.internal.w.this, (r.c) obj);
                    return o12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n0(k.a aVar, n nVar, final l lVar, final boolean z10) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(nVar, null, new Function1() { // from class: ep.l0
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(l lVar, boolean z10, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = lVar.b();
        String m10 = lVar.m();
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
        action.d(new b.a(b10, m10, styles, str, str2, str3, str4, z10));
        return Unit.f31987a;
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
        return Unit.f31987a;
    }

    private final Object p0(l.a aVar, k.a aVar2) {
        aVar2.a("complete", new h(aVar2, this, aVar, null));
        return new d.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r p1(n nVar, l lVar, String str, final q.c it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof q.c.b) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.o1
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
            throw new as.p();
        }
    }

    private final Object q0(c cVar, l.b bVar, k.a aVar, Function0 function0) {
        return L0(cVar, new kp.d(bVar.p(), bVar.q(), bVar.b(), bVar.m(), cVar.a(), bVar.k(), bVar.j(), bVar.o(), null, bVar.l(), bVar.r(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null), aVar, bVar.getStyles(), function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(q.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((q.c.b) cVar).a());
        return Unit.f31987a;
    }

    private final Object r0(c cVar, final l.c cVar2, k.a aVar, Function0 function0) {
        jq.b.d(this.f20075o, false, false, false, 4, null);
        en.w.l(aVar, this.f20063c.a(cVar2.b()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.a.class), "", new Function1() { // from class: ep.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r s02;
                s02 = com.withpersona.sdk2.inquiry.internal.n.s0(com.withpersona.sdk2.inquiry.internal.n.this, cVar2, (com.withpersona.sdk2.inquiry.internal.network.b) obj);
                return s02;
            }
        });
        return new d.b(cVar2.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r r1(final n nVar, final l lVar, final String str, final com.withpersona.sdk2.inquiry.internal.network.h it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof h.b) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s12;
                    s12 = com.withpersona.sdk2.inquiry.internal.n.s1(com.withpersona.sdk2.inquiry.internal.network.h.this, (r.c) obj);
                    return s12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof h.a) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t12;
                    t12 = com.withpersona.sdk2.inquiry.internal.n.t1(com.withpersona.sdk2.inquiry.internal.n.this, it, lVar, str, (r.c) obj);
                    return t12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r s0(final n nVar, final l.c cVar, final com.withpersona.sdk2.inquiry.internal.network.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof b.C0259b) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t02;
                    t02 = com.withpersona.sdk2.inquiry.internal.n.t0(l.c.this, it, nVar, (r.c) obj);
                    return t02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.a) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.u0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit u02;
                    u02 = com.withpersona.sdk2.inquiry.internal.n.u0(com.withpersona.sdk2.inquiry.internal.n.this, cVar, it, (r.c) obj);
                    return u02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(com.withpersona.sdk2.inquiry.internal.network.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h.b bVar = (h.b) hVar;
        bVar.a().g(true);
        action.e(bVar.a());
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, n nVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        b.C0259b c0259b = (b.C0259b) bVar;
        action.e(new l.i(c0259b.b(), null, cVar.b(), null, true, c0259b.a(), 2, null));
        nVar.f20076p.b(new b.C0296b(cVar.b(), com.withpersona.sdk2.inquiry.internal.h.f19918b.a(c0259b.b())));
        return Unit.f31987a;
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(n nVar, l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, cVar.m(), ((b.a) bVar).a(), null, 4, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r u1(n nVar, l lVar, String str, final x.b it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof x.b.a) {
            return k1(nVar, lVar, str, ((x.b.a) it).a());
        }
        if (it instanceof x.b.C0263b) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit v12;
                    v12 = com.withpersona.sdk2.inquiry.internal.n.v1(x.b.this, (r.c) obj);
                    return v12;
                }
            }, 1, null);
            return d10;
        }
        throw new as.p();
    }

    private final Object v0(final l.d dVar, k.a aVar) {
        r2.e eVar;
        boolean z10;
        boolean z11;
        String str;
        String str2;
        String documentId = dVar.o().getConfig().getDocumentId();
        int i10 = e.f20123c[dVar.o().getConfig().getStartPage().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (documentId != null) {
                    eVar = new r2.e.b(documentId);
                } else {
                    eVar = r2.e.a.f40918d;
                }
            } else {
                throw new as.p();
            }
        } else {
            eVar = r2.e.a.f40918d;
        }
        r2.e eVar2 = eVar;
        String e10 = dVar.e();
        r2 r2Var = this.f20072l;
        String m10 = dVar.m();
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
        oo.l q10 = dVar.q();
        NextStep.Document.AssetConfig l10 = dVar.l();
        if (l10 == null) {
            str = m10;
            str2 = b10;
            l10 = new NextStep.Document.AssetConfig(null, null, 3, null);
        } else {
            str = m10;
            str2 = b10;
        }
        PendingPageTextPosition pendingPageTextVerticalPosition = dVar.o().getConfig().getPendingPageTextVerticalPosition();
        if (pendingPageTextVerticalPosition == null) {
            pendingPageTextVerticalPosition = PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
        return new lp.d(aVar.b(r2Var, new r2.b(str, str2, e11, p10, title, prompt, disclaimer, btnSubmit, title2, description, fieldKeyDocument, kind, documentId, eVar2, q10, documentFileLimit, z10, z11, cameraPermissionsTitle, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, styles, l10, pendingPageTextVerticalPosition), e10, new Function1() { // from class: ep.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r w02;
                w02 = com.withpersona.sdk2.inquiry.internal.n.w0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (r2.c) obj);
                return w02;
            }
        }), !Intrinsics.areEqual(dVar.f(), w.c.f20390d), dVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((l) action.c()).i(new w.d(((x.b.C0263b) bVar).a())));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r w0(final n nVar, final l.d dVar, final r2.c it) {
        en.r d10;
        en.r d11;
        en.r d12;
        en.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, r2.c.b.f40886a)) {
            d13 = en.z.d(nVar, null, new Function1() { // from class: ep.v0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x02;
                    x02 = com.withpersona.sdk2.inquiry.internal.n.x0(l.d.this, (r.c) obj);
                    return x02;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, r2.c.a.f40885a)) {
            d12 = en.z.d(nVar, null, new Function1() { // from class: ep.x0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y02;
                    y02 = com.withpersona.sdk2.inquiry.internal.n.y0(l.d.this, (r.c) obj);
                    return y02;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof r2.c.C0567c) {
            d11 = en.z.d(nVar, null, new Function1() { // from class: ep.y0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit z02;
                    z02 = com.withpersona.sdk2.inquiry.internal.n.z0(com.withpersona.sdk2.inquiry.internal.n.this, it, dVar, (r.c) obj);
                    return z02;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, r2.c.d.f40888a)) {
            d10 = en.z.d(nVar, null, new Function1() { // from class: ep.z0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = com.withpersona.sdk2.inquiry.internal.n.A0(l.d.this, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    private final void w1(r.c cVar, String str, InternalErrorInfo internalErrorInfo, String str2) {
        if (str2 == null) {
            str2 = ep.r.b(internalErrorInfo);
        }
        cVar.d(new b.c(str2, ep.r.a(internalErrorInfo), internalErrorInfo, str));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(l.d dVar, r.c action) {
        String str;
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String b10 = dVar.b();
        String m10 = dVar.m();
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
        action.d(new b.a(b10, m10, styles, str, str2, str3, str4, false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null));
        return Unit.f31987a;
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
        action.e(l.d.k(dVar, null, null, w.c.f20390d, null, null, null, null, null, null, null, 1019, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(n nVar, r2.c cVar, l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        r2.c.C0567c c0567c = (r2.c.C0567c) cVar;
        if (nVar.k0(c0567c.a())) {
            action.e(nVar.i1(dVar));
        } else {
            x1(nVar, action, dVar.m(), c0567c.a(), null, 4, null);
        }
        return Unit.f31987a;
    }

    private final up.i z1(Object obj, final k.a aVar) {
        return new up.i(obj, new Function0() { // from class: ep.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit A1;
                A1 = com.withpersona.sdk2.inquiry.internal.n.A1(com.withpersona.sdk2.inquiry.internal.n.this, aVar);
                return A1;
            }
        }, new Function0() { // from class: ep.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                c.b C1;
                C1 = com.withpersona.sdk2.inquiry.internal.n.C1(com.withpersona.sdk2.inquiry.internal.n.this);
                return C1;
            }
        }, this.f20073m.b(), new Function1() { // from class: ep.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit D1;
                D1 = com.withpersona.sdk2.inquiry.internal.n.D1(com.withpersona.sdk2.inquiry.internal.n.this, aVar, ((Boolean) obj2).booleanValue());
                return D1;
            }
        });
    }

    @Override // en.k
    /* renamed from: j0 */
    public l d(c props, en.i iVar) {
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
                readParcelable = obtain.readParcelable(en.i.class.getClassLoader());
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
        } else if (props instanceof c.C0257c) {
            c.C0257c c0257c = (c.C0257c) props;
            return new l.b(c0257c.g(), c0257c.h(), c0257c.b(), c0257c.c(), c0257c.e(), c0257c.d(), c0257c.i(), c0257c.f());
        } else if (props instanceof c.b) {
            return new l.e(((c.b) props).b());
        } else {
            if (props instanceof c.a) {
                c.a aVar = (c.a) props;
                if (bq.h.e(aVar.b()) && aVar.c() != null) {
                    return new l.g(aVar.b(), aVar.c());
                }
                String c10 = aVar.c();
                if (c10 != null && c10.length() != 0) {
                    return new l.i(aVar.c(), new w.a(null, 1, null), aVar.b(), null, true, iq.g.f30404o.a());
                }
                return new l.c(aVar.b());
            }
            throw new as.p();
        }
    }

    @Override // en.k
    /* renamed from: l0 */
    public Object f(c renderProps, final l renderState, final k.a context) {
        Object p02;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        j1(renderProps, renderState, context);
        this.f20075o.e(Intrinsics.areEqual(renderState.f(), w.c.f20390d));
        Function0 function0 = new Function0() { // from class: ep.a0
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
            throw new as.p();
        }
        lq.k F1 = F1(p02, renderState);
        if (this.f20073m.c()) {
            return z1(F1, context);
        }
        return F1;
    }

    @Override // en.k
    /* renamed from: y1 */
    public en.i g(l state) {
        Intrinsics.checkNotNullParameter(state, "state");
        if (state instanceof l.j) {
            l.j jVar = (l.j) state;
            this.f20077q.e(jVar.m(), jVar.b(), jVar.v(), jVar.getComponents());
            return gn.s.a(l.j.k(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 261887, null));
        }
        return gn.s.a(state);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        ep.f a();

        Integer getTheme();

        boolean isCancelled();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f20103a;

            /* renamed from: b  reason: collision with root package name */
            private final ep.f f20104b;

            /* renamed from: c  reason: collision with root package name */
            private final Integer f20105c;

            /* renamed from: d  reason: collision with root package name */
            private final boolean f20106d;

            public b(String oneTimeLinkCode, ep.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f20103a = oneTimeLinkCode;
                this.f20104b = environment;
                this.f20105c = num;
                this.f20106d = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public ep.f a() {
                return this.f20104b;
            }

            public final String b() {
                return this.f20103a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof b) {
                    b bVar = (b) obj;
                    return Intrinsics.areEqual(this.f20103a, bVar.f20103a) && this.f20104b == bVar.f20104b && Intrinsics.areEqual(this.f20105c, bVar.f20105c) && this.f20106d == bVar.f20106d;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f20105c;
            }

            public int hashCode() {
                int hashCode = ((this.f20103a.hashCode() * 31) + this.f20104b.hashCode()) * 31;
                Integer num = this.f20105c;
                return ((hashCode + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.f20106d);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f20106d;
            }

            public String toString() {
                String str = this.f20103a;
                ep.f fVar = this.f20104b;
                Integer num = this.f20105c;
                boolean z10 = this.f20106d;
                return "OneTimeCodeProps(oneTimeLinkCode=" + str + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ b(String str, ep.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, fVar, num, (i10 & 8) != 0 ? false : z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f20097a;

            /* renamed from: b  reason: collision with root package name */
            private final String f20098b;

            /* renamed from: c  reason: collision with root package name */
            private final String f20099c;

            /* renamed from: d  reason: collision with root package name */
            private final ep.f f20100d;

            /* renamed from: e  reason: collision with root package name */
            private final Integer f20101e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f20102f;

            public a(String inquiryId, String str, String str2, ep.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f20097a = inquiryId;
                this.f20098b = str;
                this.f20099c = str2;
                this.f20100d = environment;
                this.f20101e = num;
                this.f20102f = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public ep.f a() {
                return this.f20100d;
            }

            public final String b() {
                return this.f20097a;
            }

            public final String c() {
                return this.f20098b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f20097a, aVar.f20097a) && Intrinsics.areEqual(this.f20098b, aVar.f20098b) && Intrinsics.areEqual(this.f20099c, aVar.f20099c) && this.f20100d == aVar.f20100d && Intrinsics.areEqual(this.f20101e, aVar.f20101e) && this.f20102f == aVar.f20102f;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f20101e;
            }

            public int hashCode() {
                int hashCode = this.f20097a.hashCode() * 31;
                String str = this.f20098b;
                int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
                String str2 = this.f20099c;
                int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.f20100d.hashCode()) * 31;
                Integer num = this.f20101e;
                return ((hashCode3 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f20102f);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f20102f;
            }

            public String toString() {
                String str = this.f20097a;
                String str2 = this.f20098b;
                String str3 = this.f20099c;
                ep.f fVar = this.f20100d;
                Integer num = this.f20101e;
                boolean z10 = this.f20102f;
                return "InquiryProps(inquiryId=" + str + ", sessionToken=" + str2 + ", environmentId=" + str3 + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ a(String str, String str2, String str3, ep.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, fVar, num, (i10 & 32) != 0 ? false : z10);
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0257c implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f20107a;

            /* renamed from: b  reason: collision with root package name */
            private final String f20108b;

            /* renamed from: c  reason: collision with root package name */
            private final String f20109c;

            /* renamed from: d  reason: collision with root package name */
            private final String f20110d;

            /* renamed from: e  reason: collision with root package name */
            private final String f20111e;

            /* renamed from: f  reason: collision with root package name */
            private final Map f20112f;

            /* renamed from: g  reason: collision with root package name */
            private final String f20113g;

            /* renamed from: h  reason: collision with root package name */
            private final StaticInquiryTemplate f20114h;

            /* renamed from: i  reason: collision with root package name */
            private final ep.f f20115i;

            /* renamed from: j  reason: collision with root package name */
            private final Integer f20116j;

            /* renamed from: k  reason: collision with root package name */
            private final boolean f20117k;

            public C0257c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, ep.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f20107a = str;
                this.f20108b = str2;
                this.f20109c = str3;
                this.f20110d = str4;
                this.f20111e = str5;
                this.f20112f = map;
                this.f20113g = str6;
                this.f20114h = staticInquiryTemplate;
                this.f20115i = environment;
                this.f20116j = num;
                this.f20117k = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public ep.f a() {
                return this.f20115i;
            }

            public final String b() {
                return this.f20109c;
            }

            public final String c() {
                return this.f20111e;
            }

            public final Map d() {
                return this.f20112f;
            }

            public final String e() {
                return this.f20110d;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0257c) {
                    C0257c c0257c = (C0257c) obj;
                    return Intrinsics.areEqual(this.f20107a, c0257c.f20107a) && Intrinsics.areEqual(this.f20108b, c0257c.f20108b) && Intrinsics.areEqual(this.f20109c, c0257c.f20109c) && Intrinsics.areEqual(this.f20110d, c0257c.f20110d) && Intrinsics.areEqual(this.f20111e, c0257c.f20111e) && Intrinsics.areEqual(this.f20112f, c0257c.f20112f) && Intrinsics.areEqual(this.f20113g, c0257c.f20113g) && Intrinsics.areEqual(this.f20114h, c0257c.f20114h) && this.f20115i == c0257c.f20115i && Intrinsics.areEqual(this.f20116j, c0257c.f20116j) && this.f20117k == c0257c.f20117k;
                }
                return false;
            }

            public final StaticInquiryTemplate f() {
                return this.f20114h;
            }

            public final String g() {
                return this.f20107a;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f20116j;
            }

            public final String h() {
                return this.f20108b;
            }

            public int hashCode() {
                String str = this.f20107a;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f20108b;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                String str3 = this.f20109c;
                int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f20110d;
                int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f20111e;
                int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
                Map map = this.f20112f;
                int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
                String str6 = this.f20113g;
                int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
                StaticInquiryTemplate staticInquiryTemplate = this.f20114h;
                int hashCode8 = (((hashCode7 + (staticInquiryTemplate == null ? 0 : staticInquiryTemplate.hashCode())) * 31) + this.f20115i.hashCode()) * 31;
                Integer num = this.f20116j;
                return ((hashCode8 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f20117k);
            }

            public final String i() {
                return this.f20113g;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f20117k;
            }

            public String toString() {
                String str = this.f20107a;
                String str2 = this.f20108b;
                String str3 = this.f20109c;
                String str4 = this.f20110d;
                String str5 = this.f20111e;
                Map map = this.f20112f;
                String str6 = this.f20113g;
                StaticInquiryTemplate staticInquiryTemplate = this.f20114h;
                ep.f fVar = this.f20115i;
                Integer num = this.f20116j;
                boolean z10 = this.f20117k;
                return "TemplateProps(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", referenceId=" + str4 + ", environmentId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ C0257c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, ep.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, str4, str5, map, str6, staticInquiryTemplate, fVar, num, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0256b implements b {
            @NotNull
            public static final Parcelable.Creator<C0256b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f20087d;

            /* renamed from: e  reason: collision with root package name */
            private final String f20088e;

            /* renamed from: i  reason: collision with root package name */
            private final Map f20089i;

            /* renamed from: o  reason: collision with root package name */
            private final String f20090o;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0256b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    String readString = parcel.readString();
                    String readString2 = parcel.readString();
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0256b.class.getClassLoader()));
                    }
                    return new C0256b(readString, readString2, linkedHashMap, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0256b[] newArray(int i10) {
                    return new C0256b[i10];
                }
            }

            public C0256b(String inquiryId, String inquiryStatus, Map fields, String str) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
                Intrinsics.checkNotNullParameter(fields, "fields");
                this.f20087d = inquiryId;
                this.f20088e = inquiryStatus;
                this.f20089i = fields;
                this.f20090o = str;
            }

            public final Map a() {
                return this.f20089i;
            }

            public final String b() {
                return this.f20087d;
            }

            public final String c() {
                return this.f20088e;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0256b) {
                    C0256b c0256b = (C0256b) obj;
                    return Intrinsics.areEqual(this.f20087d, c0256b.f20087d) && Intrinsics.areEqual(this.f20088e, c0256b.f20088e) && Intrinsics.areEqual(this.f20089i, c0256b.f20089i) && Intrinsics.areEqual(this.f20090o, c0256b.f20090o);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = ((((this.f20087d.hashCode() * 31) + this.f20088e.hashCode()) * 31) + this.f20089i.hashCode()) * 31;
                String str = this.f20090o;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String m() {
                return this.f20090o;
            }

            public String toString() {
                String str = this.f20087d;
                String str2 = this.f20088e;
                Map map = this.f20089i;
                String str3 = this.f20090o;
                return "Complete(inquiryId=" + str + ", inquiryStatus=" + str2 + ", fields=" + map + ", sessionToken=" + str3 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f20087d);
                dest.writeString(this.f20088e);
                Map map = this.f20089i;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
                dest.writeString(this.f20090o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements b {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f20091d;

            /* renamed from: e  reason: collision with root package name */
            private final yq.d f20092e;

            /* renamed from: i  reason: collision with root package name */
            private final InternalErrorInfo f20093i;

            /* renamed from: o  reason: collision with root package name */
            private final String f20094o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c(parcel.readString(), (yq.d) parcel.readParcelable(c.class.getClassLoader()), (InternalErrorInfo) parcel.readParcelable(c.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(String str, yq.d errorCode, InternalErrorInfo cause, String str2) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f20091d = str;
                this.f20092e = errorCode;
                this.f20093i = cause;
                this.f20094o = str2;
            }

            public final InternalErrorInfo a() {
                return this.f20093i;
            }

            public final String b() {
                return this.f20091d;
            }

            public final yq.d c() {
                return this.f20092e;
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
                    return Intrinsics.areEqual(this.f20091d, cVar.f20091d) && this.f20092e == cVar.f20092e && Intrinsics.areEqual(this.f20093i, cVar.f20093i) && Intrinsics.areEqual(this.f20094o, cVar.f20094o);
                }
                return false;
            }

            public int hashCode() {
                String str = this.f20091d;
                int hashCode = (((((str == null ? 0 : str.hashCode()) * 31) + this.f20092e.hashCode()) * 31) + this.f20093i.hashCode()) * 31;
                String str2 = this.f20094o;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String m() {
                return this.f20094o;
            }

            public String toString() {
                String str = this.f20091d;
                yq.d dVar = this.f20092e;
                InternalErrorInfo internalErrorInfo = this.f20093i;
                String str2 = this.f20094o;
                return "Error(debugMessage=" + str + ", errorCode=" + dVar + ", cause=" + internalErrorInfo + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f20091d);
                dest.writeParcelable(this.f20092e, i10);
                dest.writeParcelable(this.f20093i, i10);
                dest.writeString(this.f20094o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements b {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f20095d;

            /* renamed from: e  reason: collision with root package name */
            private final String f20096e;

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
                this.f20095d = inquiryId;
                this.f20096e = str;
            }

            public final String a() {
                return this.f20095d;
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
                    return Intrinsics.areEqual(this.f20095d, dVar.f20095d) && Intrinsics.areEqual(this.f20096e, dVar.f20096e);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = this.f20095d.hashCode() * 31;
                String str = this.f20096e;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String m() {
                return this.f20096e;
            }

            public String toString() {
                String str = this.f20095d;
                String str2 = this.f20096e;
                return "ReinitializeWithFallbackMode(inquiryId=" + str + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f20095d);
                dest.writeString(this.f20096e);
            }
        }

        String m();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0255a();

            /* renamed from: d  reason: collision with root package name */
            private final String f20079d;

            /* renamed from: e  reason: collision with root package name */
            private final String f20080e;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyle f20081i;

            /* renamed from: o  reason: collision with root package name */
            private final String f20082o;

            /* renamed from: p  reason: collision with root package name */
            private final String f20083p;

            /* renamed from: q  reason: collision with root package name */
            private final String f20084q;

            /* renamed from: r  reason: collision with root package name */
            private final String f20085r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f20086s;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0255a implements Parcelable.Creator {
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
                this.f20079d = str;
                this.f20080e = str2;
                this.f20081i = stepStyle;
                this.f20082o = str3;
                this.f20083p = str4;
                this.f20084q = str5;
                this.f20085r = str6;
                this.f20086s = z10;
            }

            public final String a() {
                return this.f20085r;
            }

            public final boolean b() {
                return this.f20086s;
            }

            public final String c() {
                return this.f20079d;
            }

            public final String d() {
                return this.f20083p;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String e() {
                return this.f20084q;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f20079d, aVar.f20079d) && Intrinsics.areEqual(this.f20080e, aVar.f20080e) && Intrinsics.areEqual(this.f20081i, aVar.f20081i) && Intrinsics.areEqual(this.f20082o, aVar.f20082o) && Intrinsics.areEqual(this.f20083p, aVar.f20083p) && Intrinsics.areEqual(this.f20084q, aVar.f20084q) && Intrinsics.areEqual(this.f20085r, aVar.f20085r) && this.f20086s == aVar.f20086s;
                }
                return false;
            }

            public final StepStyle f() {
                return this.f20081i;
            }

            public final String g() {
                return this.f20082o;
            }

            public int hashCode() {
                String str = this.f20079d;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f20080e;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                StepStyle stepStyle = this.f20081i;
                int hashCode3 = (hashCode2 + (stepStyle == null ? 0 : stepStyle.hashCode())) * 31;
                String str3 = this.f20082o;
                int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f20083p;
                int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f20084q;
                int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
                String str6 = this.f20085r;
                return ((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + Boolean.hashCode(this.f20086s);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String m() {
                return this.f20080e;
            }

            public String toString() {
                String str = this.f20079d;
                String str2 = this.f20080e;
                StepStyle stepStyle = this.f20081i;
                String str3 = this.f20082o;
                String str4 = this.f20083p;
                String str5 = this.f20084q;
                String str6 = this.f20085r;
                boolean z10 = this.f20086s;
                return "Cancel(inquiryId=" + str + ", sessionToken=" + str2 + ", styles=" + stepStyle + ", title=" + str3 + ", message=" + str4 + ", resumeButtonText=" + str5 + ", cancelButtonText=" + str6 + ", force=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f20079d);
                dest.writeString(this.f20080e);
                dest.writeParcelable(this.f20081i, i10);
                dest.writeString(this.f20082o);
                dest.writeString(this.f20083p);
                dest.writeString(this.f20084q);
                dest.writeString(this.f20085r);
                dest.writeInt(this.f20086s ? 1 : 0);
            }

            public /* synthetic */ a(String str, String str2, StepStyle stepStyle, String str3, String str4, String str5, String str6, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, stepStyle, str3, str4, str5, str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z10);
            }
        }
    }
}
