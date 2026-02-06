package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import bn.k;
import bn.r;
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
import eo.r2;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import jo.c4;
import jo.g3;
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
import kp.c;
import mp.a1;
import mp.d2;
import mp.e2;
import mp.m1;
import mp.x5;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import os.i0;
import pq.v4;
import to.b;
import uo.b2;
import uo.j2;
import uo.l2;
import vp.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends bn.k {

    /* renamed from: s  reason: collision with root package name */
    public static final a f19040s = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f19041a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f19042b;

    /* renamed from: c  reason: collision with root package name */
    private final a.InterfaceC0235a f19043c;

    /* renamed from: d  reason: collision with root package name */
    private final q.b f19044d;

    /* renamed from: e  reason: collision with root package name */
    private final u.a f19045e;

    /* renamed from: f  reason: collision with root package name */
    private final x.a f19046f;

    /* renamed from: g  reason: collision with root package name */
    private final a0.a f19047g;

    /* renamed from: h  reason: collision with root package name */
    private final f.a f19048h;

    /* renamed from: i  reason: collision with root package name */
    private final g3 f19049i;

    /* renamed from: j  reason: collision with root package name */
    private final x5 f19050j;

    /* renamed from: k  reason: collision with root package name */
    private final v4 f19051k;

    /* renamed from: l  reason: collision with root package name */
    private final r2 f19052l;

    /* renamed from: m  reason: collision with root package name */
    private final kp.c f19053m;

    /* renamed from: n  reason: collision with root package name */
    private final vp.e f19054n;

    /* renamed from: o  reason: collision with root package name */
    private final zp.b f19055o;

    /* renamed from: p  reason: collision with root package name */
    private final vp.c f19056p;

    /* renamed from: q  reason: collision with root package name */
    private final l2 f19057q;

    /* renamed from: r  reason: collision with root package name */
    private final s.a f19058r;

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
            private final StepStyle f19098a;

            /* renamed from: b  reason: collision with root package name */
            private final boolean f19099b;

            /* renamed from: c  reason: collision with root package name */
            private final Function0 f19100c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(StepStyle stepStyle, boolean z10, Function0 onBack) {
                super(null);
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                this.f19098a = stepStyle;
                this.f19099b = z10;
                this.f19100c = onBack;
            }

            public final Function0 a() {
                return this.f19100c;
            }

            public final StepStyle b() {
                return this.f19098a;
            }

            public final boolean c() {
                return this.f19099b;
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
        public static final /* synthetic */ int[] f19101a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f19102b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f19103c;

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
            f19101a = iArr;
            int[] iArr2 = new int[b2.values().length];
            try {
                iArr2[b2.f51881d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[b2.f51882e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f19102b = iArr2;
            int[] iArr3 = new int[NextStep.Document.StartPage.values().length];
            try {
                iArr3[NextStep.Document.StartPage.PROMPT.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr3[NextStep.Document.StartPage.REVIEW.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            f19103c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19104d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f19106i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f19107o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ k.a f19108d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ n f19109e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ l f19110i;

            a(k.a aVar, n nVar, l lVar) {
                this.f19108d = aVar;
                this.f19109e = nVar;
                this.f19110i = lVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(vp.a aVar, Continuation continuation) {
                if (aVar instanceof a.C0699a) {
                    n.n0(this.f19108d, this.f19109e, this.f19110i, ((a.C0699a) aVar).a());
                    return Unit.f32008a;
                }
                throw new qr.p();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f19106i = aVar;
            this.f19107o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f19106i, this.f19107o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f19104d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = n.this.f19054n.c();
                a aVar = new a(this.f19106i, n.this, this.f19107o);
                this.f19104d = 1;
                if (c10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19111d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19112e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19113i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f19114o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, n nVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f19112e = aVar;
            this.f19113i = nVar;
            this.f19114o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f19112e, this.f19113i, this.f19114o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f19111d == 0) {
                kotlin.c.b(obj);
                n.n0(this.f19112e, this.f19113i, this.f19114o, true);
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19115d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19116e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19117i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l.a f19118o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, n nVar, l.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f19116e = aVar;
            this.f19117i = nVar;
            this.f19118o = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(l.a aVar, r.c cVar) {
            cVar.d(new b.C0244b(aVar.b(), aVar.p(), aVar.o(), aVar.k()));
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f19116e, this.f19117i, this.f19118o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            wr.b.f();
            if (this.f19115d == 0) {
                kotlin.c.b(obj);
                bn.h c10 = this.f19116e.c();
                n nVar = this.f19117i;
                final l.a aVar = this.f19118o;
                d10 = bn.z.d(nVar, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.o
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = n.h.k(l.a.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19119d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19120e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19121i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, n nVar, Continuation continuation) {
            super(2, continuation);
            this.f19120e = aVar;
            this.f19121i = nVar;
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
                return Unit.f32008a;
            }
            cVar.e(l.j.l(jVar2, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 229375, null));
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f19120e, this.f19121i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            Object f10 = wr.b.f();
            int i10 = this.f19119d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f19119d = 1;
                if (i0.a(2000L, this) == f10) {
                    return f10;
                }
            }
            bn.h c10 = this.f19120e.c();
            d10 = bn.z.d(this.f19121i, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = n.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public n(Context applicationContext, c.a createInquiryWorker, a.InterfaceC0235a inquirySessionWorker, q.b pollingWorker, u.a transitionBackWorker, x.a transitionWorkerFactory, a0.a updateInquirySessionWorkerFactory, f.a exchangeOneTimeCodeWorkerFactory, g3 governmentIdWorkflow, x5 selfieWorkflow, v4 uiWorkflow, r2 documentWorkflow, kp.c sandboxFlags, vp.e externalInquiryController, zp.b navigationStateManager, vp.c externalEventLogger, l2 uiStepSavedStateHelper, s.a restoreUiStepStateWorkerFactory) {
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
        this.f19041a = applicationContext;
        this.f19042b = createInquiryWorker;
        this.f19043c = inquirySessionWorker;
        this.f19044d = pollingWorker;
        this.f19045e = transitionBackWorker;
        this.f19046f = transitionWorkerFactory;
        this.f19047g = updateInquirySessionWorkerFactory;
        this.f19048h = exchangeOneTimeCodeWorkerFactory;
        this.f19049i = governmentIdWorkflow;
        this.f19050j = selfieWorkflow;
        this.f19051k = uiWorkflow;
        this.f19052l = documentWorkflow;
        this.f19053m = sandboxFlags;
        this.f19054n = externalInquiryController;
        this.f19055o = navigationStateManager;
        this.f19056p = externalEventLogger;
        this.f19057q = uiStepSavedStateHelper;
        this.f19058r = restoreUiStepStateWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.d.l(dVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, null, 1019, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(n nVar, k.a aVar) {
        bn.r d10;
        nVar.f19053m.f();
        bn.h c10 = aVar.c();
        d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.t1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B1;
                B1 = com.withpersona.sdk2.inquiry.internal.n.B1((r.c) obj);
                return B1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    private final Object B0(c cVar, final l.e eVar, k.a aVar, Function0 function0) {
        zp.b.d(this.f19055o, false, false, false, 4, null);
        bn.w.l(aVar, this.f19048h.a(eVar.j()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.f.class), "", new Function1() { // from class: uo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r C0;
                C0 = com.withpersona.sdk2.inquiry.internal.n.C0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, (com.withpersona.sdk2.inquiry.internal.network.d) obj);
                return C0;
            }
        });
        return new d.b(eVar.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r C0(final n nVar, final l.e eVar, final com.withpersona.sdk2.inquiry.internal.network.d it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit D0;
                    D0 = com.withpersona.sdk2.inquiry.internal.n.D0(com.withpersona.sdk2.inquiry.internal.network.d.this, (r.c) obj);
                    return D0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.a) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E0;
                    E0 = com.withpersona.sdk2.inquiry.internal.n.E0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, it, (r.c) obj);
                    return E0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final c.b C1(n nVar) {
        return nVar.f19053m.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        d.b bVar = (d.b) dVar;
        if (bVar.b() == null) {
            action.e(new l.c(bVar.a()));
        } else {
            action.e(new l.i(bVar.b(), new w.a(null, 1, null), bVar.a(), null, true, yp.g.f55551o.a()));
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(n nVar, k.a aVar, boolean z10) {
        bn.r d10;
        nVar.f19053m.e(z10);
        bn.h c10 = aVar.c();
        d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E1;
                E1 = com.withpersona.sdk2.inquiry.internal.n.E1((r.c) obj);
                return E1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(n nVar, l.e eVar, com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, eVar.k(), ((d.a) dVar).a(), null, 4, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f32008a;
    }

    private final Object F0(c cVar, final l.f fVar, k.a aVar) {
        List list;
        NextStep.GovernmentId.AssetConfig assetConfig;
        String e10 = fVar.e();
        g3 g3Var = this.f19049i;
        String k10 = fVar.k();
        String u10 = fVar.u();
        ArrayList arrayList = new ArrayList();
        Iterator it = fVar.A().iterator();
        while (true) {
            String str = "US";
            if (!it.hasNext()) {
                break;
            }
            Id id2 = (Id) it.next();
            String u11 = fVar.u();
            if (u11 != null) {
                str = u11;
            }
            c4 o10 = jo.z.o(id2, str, fVar.K());
            if (o10 != null) {
                arrayList.add(o10);
            }
        }
        String b10 = fVar.b();
        String str2 = "US";
        String e11 = fVar.e();
        String E = fVar.E();
        boolean r10 = fVar.r();
        boolean t10 = fVar.t();
        List x10 = fVar.x();
        StepStyles.GovernmentIdStepStyle styles = fVar.getStyles();
        int F = fVar.F();
        String B = fVar.B();
        String D = fVar.D();
        NextStep.GovernmentId.Localizations H = fVar.H();
        String u12 = fVar.u();
        if (u12 != null) {
            str2 = u12;
        }
        List G = fVar.G();
        if (G != null) {
            list = CollectionsKt.V0(G);
        } else {
            list = null;
        }
        g3.a.C0428a i10 = ap.a.i(H, str2, list);
        long K = fVar.K();
        Integer theme = cVar.getTheme();
        boolean N = fVar.N();
        List w10 = fVar.w();
        List<NextStep.GovernmentId.VideoCaptureMethod> Q = fVar.Q();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(Q, 10));
        for (NextStep.GovernmentId.VideoCaptureMethod videoCaptureMethod : Q) {
            arrayList2.add(ao.a.valueOf(videoCaptureMethod.toString()));
        }
        VideoCaptureConfig videoCaptureConfig = new VideoCaptureConfig(0L, w10, arrayList2, fVar.R(), fVar.p(), 1, null);
        NextStep.GovernmentId.AssetConfig o11 = fVar.o();
        if (o11 == null) {
            assetConfig = new NextStep.GovernmentId.AssetConfig(null, null, null, null, null, 31, null);
        } else {
            assetConfig = o11;
        }
        return aVar.b(g3Var, new g3.a(k10, u10, arrayList, b10, e11, E, r10, t10, x10, styles, i10, F, B, D, K, N, theme, videoCaptureConfig, assetConfig, !Intrinsics.areEqual(fVar.f(), w.c.f19370d), fVar.q(), fVar.M(), fVar.L(), fVar.v()), e10, new Function1() { // from class: uo.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r G0;
                G0 = com.withpersona.sdk2.inquiry.internal.n.G0(com.withpersona.sdk2.inquiry.internal.n.this, fVar, (g3.b) obj);
                return G0;
            }
        });
    }

    private final bq.k F1(Object obj, l lVar) {
        bq.j jVar;
        if (lVar.d()) {
            jVar = bq.j.f6988e;
        } else {
            jVar = bq.j.f6987d;
        }
        return new bq.k(obj, jVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r G0(final n nVar, final l.f fVar, final g3.b it) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        bn.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, g3.b.C0429b.f30287a)) {
            d13 = bn.z.d(nVar, null, new Function1() { // from class: uo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = com.withpersona.sdk2.inquiry.internal.n.H0(l.f.this, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            return d13;
        } else if (it instanceof g3.b.c) {
            d12 = bn.z.d(nVar, null, new Function1() { // from class: uo.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = com.withpersona.sdk2.inquiry.internal.n.I0(com.withpersona.sdk2.inquiry.internal.n.this, it, fVar, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, g3.b.d.f30289a)) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit J0;
                    J0 = com.withpersona.sdk2.inquiry.internal.n.J0(l.f.this, (r.c) obj);
                    return J0;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, g3.b.a.f30286a)) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.q0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K0;
                    K0 = com.withpersona.sdk2.inquiry.internal.n.K0(l.f.this, (r.c) obj);
                    return K0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
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
        return Unit.f32008a;
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
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.l(fVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.l(fVar, null, null, w.c.f19370d, null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f32008a;
    }

    private final Object L0(c cVar, final ap.d dVar, k.a aVar, StepStyle stepStyle, Function0 function0) {
        zp.b.d(this.f19055o, false, false, false, 4, null);
        bn.w.l(aVar, this.f19042b.a(dVar), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.c.class), "", new Function1() { // from class: uo.z1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r M0;
                M0 = com.withpersona.sdk2.inquiry.internal.n.M0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (com.withpersona.sdk2.inquiry.internal.network.a) obj);
                return M0;
            }
        });
        return new d.b(stepStyle, true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r M0(final n nVar, final ap.d dVar, final com.withpersona.sdk2.inquiry.internal.network.a it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = com.withpersona.sdk2.inquiry.internal.n.N0(com.withpersona.sdk2.inquiry.internal.network.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.C0246a) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.m0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = com.withpersona.sdk2.inquiry.internal.n.O0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, it, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b bVar = (a.b) aVar;
        if (rp.h.e(bVar.b())) {
            action.d(new b.d(bVar.b(), bVar.a()));
        } else {
            action.e(new l.c(bVar.b()));
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(n nVar, ap.d dVar, com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.C0246a c0246a = (a.C0246a) aVar;
        nVar.w1(action, dVar.g(), c0246a.a(), c0246a.b());
        return Unit.f32008a;
    }

    private final Object P0(c cVar, l.g gVar, k.a aVar, Function0 function0) {
        return L0(cVar, new ap.d(null, null, gVar.j(), gVar.l(), cVar.a(), null, null, null, null, null, null, 2019, null), aVar, gVar.getStyles(), function0);
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
        x5 x5Var = this.f19050j;
        String k10 = hVar.k();
        String b10 = hVar.b();
        String w10 = hVar.w();
        String e12 = hVar.e();
        boolean q10 = hVar.q();
        boolean r10 = hVar.r();
        String v10 = hVar.v();
        boolean E = hVar.E();
        boolean G = hVar.G();
        NextStep.Selfie.Localizations x10 = hVar.x();
        if (hVar.F() == NextStep.Selfie.CaptureMethod.ONLY_CENTER) {
            z10 = true;
        } else {
            z10 = false;
        }
        x5.b.a j10 = ap.a.j(x10, z10);
        d2 a10 = e2.a(hVar.F());
        List A = hVar.A();
        if (A == null || A.isEmpty()) {
            str = k10;
            str2 = b10;
            int i10 = e.f19101a[hVar.F().ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    throw new qr.p();
                }
                e10 = CollectionsKt.o(a1.b.f37287d, a1.b.f37288e, a1.b.f37289i);
            } else {
                e10 = CollectionsKt.e(a1.b.f37287d);
            }
        } else {
            List<NextStep.Selfie.SelfiePose> A2 = hVar.A();
            str = k10;
            str2 = b10;
            e10 = new ArrayList(CollectionsKt.w(A2, 10));
            for (NextStep.Selfie.SelfiePose selfiePose : A2) {
                e10.add(m1.c(selfiePose));
            }
        }
        String cameraPermissionsTitle = hVar.x().getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = hVar.x().getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = hVar.x().getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = hVar.x().getPromptPage().getCameraPermissionsCancelButtonText();
        String microphonePermissionsTitle = hVar.x().getPromptPage().getMicrophonePermissionsTitle();
        String microphonePermissionsPrompt = hVar.x().getPromptPage().getMicrophonePermissionsPrompt();
        String microphonePermissionsBtnContinueMobile = hVar.x().getPromptPage().getMicrophonePermissionsBtnContinueMobile();
        String microphonePermissionsBtnCancel = hVar.x().getPromptPage().getMicrophonePermissionsBtnCancel();
        StepStyles.SelfieStepStyle styles = hVar.getStyles();
        NextStep.Selfie.AssetConfig o10 = hVar.o();
        if (o10 == null) {
            list = e10;
            o10 = new NextStep.Selfie.AssetConfig(null, null, 3, null);
            str3 = str;
            str4 = cameraPermissionsTitle;
        } else {
            list = e10;
            str3 = str;
            str4 = cameraPermissionsTitle;
        }
        PendingPageTextPosition B = hVar.B();
        List u10 = hVar.u();
        List<NextStep.Selfie.VideoCaptureMethod> K = hVar.K();
        String str5 = str3;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(K, 10));
        for (NextStep.Selfie.VideoCaptureMethod videoCaptureMethod : K) {
            arrayList.add(ao.a.valueOf(videoCaptureMethod.toString()));
        }
        return new bp.d(aVar.b(x5Var, new x5.b(str5, str2, w10, e12, q10, r10, v10, E, G, j10, a10, list, str4, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, microphonePermissionsTitle, microphonePermissionsPrompt, microphonePermissionsBtnContinueMobile, microphonePermissionsBtnCancel, styles, new com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig(0L, u10, arrayList, hVar.L(), hVar.p(), 1, null), o10, B, hVar.D(), hVar.t()), e11, new Function1() { // from class: uo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r R0;
                R0 = com.withpersona.sdk2.inquiry.internal.n.R0(com.withpersona.sdk2.inquiry.internal.n.this, hVar, (x5.c) obj);
                return R0;
            }
        }), !Intrinsics.areEqual(hVar.f(), w.c.f19370d), hVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r R0(final n nVar, final l.h hVar, final x5.c it) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        bn.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, x5.c.b.f38055a)) {
            d13 = bn.z.d(nVar, null, new Function1() { // from class: uo.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = com.withpersona.sdk2.inquiry.internal.n.S0(l.h.this, (r.c) obj);
                    return S0;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, x5.c.d.f38057a)) {
            d12 = bn.z.d(nVar, null, new Function1() { // from class: uo.c1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = com.withpersona.sdk2.inquiry.internal.n.T0(l.h.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, x5.c.a.f38054a)) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = com.withpersona.sdk2.inquiry.internal.n.U0(l.h.this, (r.c) obj);
                    return U0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof x5.c.C0515c) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = com.withpersona.sdk2.inquiry.internal.n.V0(com.withpersona.sdk2.inquiry.internal.n.this, it, hVar, (r.c) obj);
                    return V0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
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
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.l(hVar, null, null, new w.a(null, 1, null), null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.l(hVar, null, null, w.c.f19370d, null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(n nVar, x5.c cVar, l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5.c.C0515c c0515c = (x5.c.C0515c) cVar;
        if (nVar.k0(c0515c.a())) {
            action.e(nVar.i1(hVar));
        } else {
            x1(nVar, action, hVar.k(), c0515c.a(), null, 4, null);
        }
        return Unit.f32008a;
    }

    private final Object W0(c cVar, l.i iVar, k.a aVar, Function0 function0) {
        zp.b.d(this.f19055o, false, false, false, 4, null);
        return new d.b(iVar.getStyles(), iVar.o(), function0);
    }

    /* JADX WARN: Removed duplicated region for block: B:66:0x0145  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0173  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object X0(com.withpersona.sdk2.inquiry.internal.n.c r27, final com.withpersona.sdk2.inquiry.internal.l.j r28, bn.k.a r29, kotlin.jvm.functions.Function0 r30) {
        /*
            Method dump skipped, instructions count: 399
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.n.X0(com.withpersona.sdk2.inquiry.internal.n$c, com.withpersona.sdk2.inquiry.internal.l$j, bn.k$a, kotlin.jvm.functions.Function0):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r Y0(final n nVar, final l.j jVar, final v4.c it) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        bn.r d13;
        bn.r d14;
        bn.r d15;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, v4.c.b.f45512a)) {
            d15 = bn.z.d(nVar, null, new Function1() { // from class: uo.f1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z0;
                    Z0 = com.withpersona.sdk2.inquiry.internal.n.Z0(l.j.this, (r.c) obj);
                    return Z0;
                }
            }, 1, null);
            return d15;
        } else if (it instanceof v4.c.d) {
            d14 = bn.z.d(nVar, null, new Function1() { // from class: uo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a12;
                    a12 = com.withpersona.sdk2.inquiry.internal.n.a1(com.withpersona.sdk2.inquiry.internal.n.this, it, jVar, (r.c) obj);
                    return a12;
                }
            }, 1, null);
            return d14;
        } else if (it instanceof v4.c.f) {
            d13 = bn.z.d(nVar, null, new Function1() { // from class: uo.i1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = com.withpersona.sdk2.inquiry.internal.n.b1(l.j.this, it, (r.c) obj);
                    return b12;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, v4.c.e.f45516a)) {
            d12 = bn.z.d(nVar, null, new Function1() { // from class: uo.j1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c12;
                    c12 = com.withpersona.sdk2.inquiry.internal.n.c1(l.j.this, (r.c) obj);
                    return c12;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v4.c.a) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.k1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d16;
                    d16 = com.withpersona.sdk2.inquiry.internal.n.d1(l.j.this, (r.c) obj);
                    return d16;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof v4.c.C0589c) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.l1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = com.withpersona.sdk2.inquiry.internal.n.e1(l.j.this, (r.c) obj);
                    return e12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
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
        return Unit.f32008a;
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
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(l.j jVar, v4.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.f fVar = (v4.c.f) cVar;
        action.e(l.j.l(jVar, null, null, new w.b(new x.c(fVar.b(), fVar.a(), fVar.c())), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.l(jVar, null, null, new w.d(null), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.l(jVar, null, null, w.c.f19370d, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new b.C0244b(jVar.b(), jVar.u(), jVar.r(), jVar.k()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r f1(final n nVar, final l.j jVar, final s.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, s.b.a.f19353a)) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = com.withpersona.sdk2.inquiry.internal.n.g1(com.withpersona.sdk2.inquiry.internal.n.this, jVar, (r.c) obj);
                    return g12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof s.b.C0249b) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.q1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h12;
                    h12 = com.withpersona.sdk2.inquiry.internal.n.h1(s.b.this, (r.c) obj);
                    return h12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(n nVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof l.j)) {
            return Unit.f32008a;
        }
        action.e(nVar.i1(jVar));
        return Unit.f32008a;
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
            return Unit.f32008a;
        }
        action.e(l.j.l(jVar2, null, null, null, null, null, null, null, null, ((s.b.C0249b) bVar).a(), false, false, false, null, null, null, null, null, false, 130815, null));
        return Unit.f32008a;
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
                bn.w.l(aVar, this.f19046f.a(k10, b10, lVar.a(), ((w.b) f10).a()), Reflection.typeOf(x.class), "", new Function1() { // from class: uo.v1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r u12;
                        u12 = com.withpersona.sdk2.inquiry.internal.n.u1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (x.b) obj);
                        return u12;
                    }
                });
            }
        } else if (f10 instanceof w.d) {
            if (k10 != null && b10 != null) {
                bn.w.l(aVar, this.f19047g.a(k10, b10, lVar.a()), Reflection.typeOf(a0.class), "", new Function1() { // from class: uo.w1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r m12;
                        m12 = com.withpersona.sdk2.inquiry.internal.n.m1(com.withpersona.sdk2.inquiry.internal.n.this, k10, f10, (com.withpersona.sdk2.inquiry.internal.network.i) obj);
                        return m12;
                    }
                });
            }
        } else if (f10 instanceof w.a) {
            if (k10 != null && b10 != null) {
                bn.w.l(aVar, this.f19044d.a(k10, b10, ((w.a) f10).a(), lVar.a()), Reflection.typeOf(q.class), "", new Function1() { // from class: uo.x1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r p12;
                        p12 = com.withpersona.sdk2.inquiry.internal.n.p1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (q.c) obj);
                        return p12;
                    }
                });
            }
        } else if (Intrinsics.areEqual(f10, w.c.f19370d)) {
            if (k10 != null && b10 != null && e10 != null) {
                bn.w.l(aVar, this.f19045e.a(k10, b10, e10, lVar.a()), Reflection.typeOf(u.class), "", new Function1() { // from class: uo.y1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r r12;
                        r12 = com.withpersona.sdk2.inquiry.internal.n.r1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (com.withpersona.sdk2.inquiry.internal.network.h) obj);
                        return r12;
                    }
                });
            }
        } else if (f10 == null) {
        } else {
            throw new qr.p();
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

    private static final bn.r k1(final n nVar, final l lVar, final String str, final InternalErrorInfo internalErrorInfo) {
        bn.r d10;
        d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.u1
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
                    return Unit.f32008a;
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
                throw new qr.p();
            } else {
                if (networkErrorInfo.isRecoverable()) {
                    Object c11 = action.c();
                    if (c11 instanceof l.j) {
                        jVar2 = (l.j) c11;
                    }
                    l.j jVar3 = jVar2;
                    if (jVar3 == null) {
                        return Unit.f32008a;
                    }
                    action.e(l.j.l(jVar3, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, networkErrorInfo, null, false, 229371, null));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            }
        } else if (!(internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode)) {
            throw new qr.p();
        } else {
            x1(nVar, action, str, internalErrorInfo, null, 4, null);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, n nVar, l lVar) {
        n0(aVar, nVar, lVar, false);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r m1(final n nVar, final String str, final w wVar, final com.withpersona.sdk2.inquiry.internal.network.i it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof i.a) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n12;
                    n12 = com.withpersona.sdk2.inquiry.internal.n.n1(com.withpersona.sdk2.inquiry.internal.n.this, str, it, (r.c) obj);
                    return n12;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, i.b.f19324a)) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = com.withpersona.sdk2.inquiry.internal.n.o1(com.withpersona.sdk2.inquiry.internal.w.this, (r.c) obj);
                    return o12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n0(k.a aVar, n nVar, final l lVar, final boolean z10) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.l0
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
        return Unit.f32008a;
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
        return Unit.f32008a;
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
        return Unit.f32008a;
    }

    private final Object p0(l.a aVar, k.a aVar2) {
        aVar2.a("complete", new h(aVar2, this, aVar, null));
        return new d.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r p1(n nVar, l lVar, String str, final q.c it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof q.c.b) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.o1
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
            throw new qr.p();
        }
    }

    private final Object q0(c cVar, l.b bVar, k.a aVar, Function0 function0) {
        return L0(cVar, new ap.d(bVar.q(), bVar.r(), bVar.b(), bVar.k(), cVar.a(), bVar.l(), bVar.j(), bVar.p(), null, bVar.o(), bVar.t(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null), aVar, bVar.getStyles(), function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(q.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((q.c.b) cVar).a());
        return Unit.f32008a;
    }

    private final Object r0(c cVar, final l.c cVar2, k.a aVar, Function0 function0) {
        zp.b.d(this.f19055o, false, false, false, 4, null);
        bn.w.l(aVar, this.f19043c.a(cVar2.b()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.a.class), "", new Function1() { // from class: uo.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r s02;
                s02 = com.withpersona.sdk2.inquiry.internal.n.s0(com.withpersona.sdk2.inquiry.internal.n.this, cVar2, (com.withpersona.sdk2.inquiry.internal.network.b) obj);
                return s02;
            }
        });
        return new d.b(cVar2.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r r1(final n nVar, final l lVar, final String str, final com.withpersona.sdk2.inquiry.internal.network.h it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof h.b) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s12;
                    s12 = com.withpersona.sdk2.inquiry.internal.n.s1(com.withpersona.sdk2.inquiry.internal.network.h.this, (r.c) obj);
                    return s12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof h.a) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t12;
                    t12 = com.withpersona.sdk2.inquiry.internal.n.t1(com.withpersona.sdk2.inquiry.internal.n.this, it, lVar, str, (r.c) obj);
                    return t12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r s0(final n nVar, final l.c cVar, final com.withpersona.sdk2.inquiry.internal.network.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof b.C0247b) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t02;
                    t02 = com.withpersona.sdk2.inquiry.internal.n.t0(l.c.this, it, nVar, (r.c) obj);
                    return t02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.a) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.u0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit u02;
                    u02 = com.withpersona.sdk2.inquiry.internal.n.u0(com.withpersona.sdk2.inquiry.internal.n.this, cVar, it, (r.c) obj);
                    return u02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(com.withpersona.sdk2.inquiry.internal.network.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h.b bVar = (h.b) hVar;
        bVar.a().h(true);
        action.e(bVar.a());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, n nVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        b.C0247b c0247b = (b.C0247b) bVar;
        action.e(new l.i(c0247b.b(), null, cVar.b(), null, true, c0247b.a(), 2, null));
        nVar.f19056p.b(new b.C0670b(cVar.b(), com.withpersona.sdk2.inquiry.internal.h.f18898b.a(c0247b.b())));
        return Unit.f32008a;
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
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(n nVar, l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, cVar.k(), ((b.a) bVar).a(), null, 4, null);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r u1(n nVar, l lVar, String str, final x.b it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof x.b.a) {
            return k1(nVar, lVar, str, ((x.b.a) it).a());
        }
        if (it instanceof x.b.C0251b) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit v12;
                    v12 = com.withpersona.sdk2.inquiry.internal.n.v1(x.b.this, (r.c) obj);
                    return v12;
                }
            }, 1, null);
            return d10;
        }
        throw new qr.p();
    }

    private final Object v0(final l.d dVar, k.a aVar) {
        r2.e eVar;
        boolean z10;
        boolean z11;
        String str;
        String str2;
        String documentId = dVar.p().getConfig().getDocumentId();
        int i10 = e.f19103c[dVar.p().getConfig().getStartPage().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (documentId != null) {
                    eVar = new r2.e.b(documentId);
                } else {
                    eVar = r2.e.a.f21934d;
                }
            } else {
                throw new qr.p();
            }
        } else {
            eVar = r2.e.a.f21934d;
        }
        r2.e eVar2 = eVar;
        String e10 = dVar.e();
        r2 r2Var = this.f19052l;
        String k10 = dVar.k();
        String b10 = dVar.b();
        String e11 = dVar.e();
        String q10 = dVar.q();
        String title = dVar.p().getConfig().getLocalizations().getPromptPage().getTitle();
        String prompt = dVar.p().getConfig().getLocalizations().getPromptPage().getPrompt();
        String disclaimer = dVar.p().getConfig().getLocalizations().getPromptPage().getDisclaimer();
        String btnSubmit = dVar.p().getConfig().getLocalizations().getPromptPage().getBtnSubmit();
        String title2 = dVar.p().getConfig().getLocalizations().getPendingPage().getTitle();
        String description = dVar.p().getConfig().getLocalizations().getPendingPage().getDescription();
        String fieldKeyDocument = dVar.p().getConfig().getFieldKeyDocument();
        String kind = dVar.p().getConfig().getKind();
        int documentFileLimit = dVar.p().getConfig().getDocumentFileLimit();
        Boolean backStepEnabled = dVar.p().getConfig().getBackStepEnabled();
        if (backStepEnabled != null) {
            z10 = backStepEnabled.booleanValue();
        } else {
            z10 = false;
        }
        Boolean cancelButtonEnabled = dVar.p().getConfig().getCancelButtonEnabled();
        if (cancelButtonEnabled != null) {
            z11 = cancelButtonEnabled.booleanValue();
        } else {
            z11 = true;
        }
        String cameraPermissionsTitle = dVar.p().getConfig().getLocalizations().getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = dVar.p().getConfig().getLocalizations().getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = dVar.p().getConfig().getLocalizations().getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = dVar.p().getConfig().getLocalizations().getPromptPage().getCameraPermissionsCancelButtonText();
        StepStyles.DocumentStepStyle styles = dVar.getStyles();
        eo.l r10 = dVar.r();
        NextStep.Document.AssetConfig o10 = dVar.o();
        if (o10 == null) {
            str = k10;
            str2 = b10;
            o10 = new NextStep.Document.AssetConfig(null, null, 3, null);
        } else {
            str = k10;
            str2 = b10;
        }
        PendingPageTextPosition pendingPageTextVerticalPosition = dVar.p().getConfig().getPendingPageTextVerticalPosition();
        if (pendingPageTextVerticalPosition == null) {
            pendingPageTextVerticalPosition = PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
        return new bp.d(aVar.b(r2Var, new r2.b(str, str2, e11, q10, title, prompt, disclaimer, btnSubmit, title2, description, fieldKeyDocument, kind, documentId, eVar2, r10, documentFileLimit, z10, z11, cameraPermissionsTitle, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, styles, o10, pendingPageTextVerticalPosition), e10, new Function1() { // from class: uo.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r w02;
                w02 = com.withpersona.sdk2.inquiry.internal.n.w0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (r2.c) obj);
                return w02;
            }
        }), !Intrinsics.areEqual(dVar.f(), w.c.f19370d), dVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((l) action.c()).i(new w.d(((x.b.C0251b) bVar).a())));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r w0(final n nVar, final l.d dVar, final r2.c it) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        bn.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, r2.c.b.f21902a)) {
            d13 = bn.z.d(nVar, null, new Function1() { // from class: uo.v0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x02;
                    x02 = com.withpersona.sdk2.inquiry.internal.n.x0(l.d.this, (r.c) obj);
                    return x02;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, r2.c.a.f21901a)) {
            d12 = bn.z.d(nVar, null, new Function1() { // from class: uo.x0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y02;
                    y02 = com.withpersona.sdk2.inquiry.internal.n.y0(l.d.this, (r.c) obj);
                    return y02;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof r2.c.C0298c) {
            d11 = bn.z.d(nVar, null, new Function1() { // from class: uo.y0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit z02;
                    z02 = com.withpersona.sdk2.inquiry.internal.n.z0(com.withpersona.sdk2.inquiry.internal.n.this, it, dVar, (r.c) obj);
                    return z02;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, r2.c.d.f21904a)) {
            d10 = bn.z.d(nVar, null, new Function1() { // from class: uo.z0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = com.withpersona.sdk2.inquiry.internal.n.A0(l.d.this, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    private final void w1(r.c cVar, String str, InternalErrorInfo internalErrorInfo, String str2) {
        if (str2 == null) {
            str2 = uo.r.b(internalErrorInfo);
        }
        cVar.d(new b.c(str2, uo.r.a(internalErrorInfo), internalErrorInfo, str));
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
        return Unit.f32008a;
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
        action.e(l.d.l(dVar, null, null, w.c.f19370d, null, null, null, null, null, null, null, 1019, null));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(n nVar, r2.c cVar, l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        r2.c.C0298c c0298c = (r2.c.C0298c) cVar;
        if (nVar.k0(c0298c.a())) {
            action.e(nVar.i1(dVar));
        } else {
            x1(nVar, action, dVar.k(), c0298c.a(), null, 4, null);
        }
        return Unit.f32008a;
    }

    private final kp.i z1(Object obj, final k.a aVar) {
        return new kp.i(obj, new Function0() { // from class: uo.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit A1;
                A1 = com.withpersona.sdk2.inquiry.internal.n.A1(com.withpersona.sdk2.inquiry.internal.n.this, aVar);
                return A1;
            }
        }, new Function0() { // from class: uo.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                c.b C1;
                C1 = com.withpersona.sdk2.inquiry.internal.n.C1(com.withpersona.sdk2.inquiry.internal.n.this);
                return C1;
            }
        }, this.f19053m.b(), new Function1() { // from class: uo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit D1;
                D1 = com.withpersona.sdk2.inquiry.internal.n.D1(com.withpersona.sdk2.inquiry.internal.n.this, aVar, ((Boolean) obj2).booleanValue());
                return D1;
            }
        });
    }

    @Override // bn.k
    /* renamed from: j0 */
    public l d(c props, bn.i iVar) {
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
                readParcelable = obtain.readParcelable(bn.i.class.getClassLoader());
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
        } else if (props instanceof c.C0245c) {
            c.C0245c c0245c = (c.C0245c) props;
            return new l.b(c0245c.g(), c0245c.h(), c0245c.b(), c0245c.c(), c0245c.e(), c0245c.d(), c0245c.i(), c0245c.f());
        } else if (props instanceof c.b) {
            return new l.e(((c.b) props).b());
        } else {
            if (props instanceof c.a) {
                c.a aVar = (c.a) props;
                if (rp.h.e(aVar.b()) && aVar.c() != null) {
                    return new l.g(aVar.b(), aVar.c());
                }
                String c10 = aVar.c();
                if (c10 != null && c10.length() != 0) {
                    return new l.i(aVar.c(), new w.a(null, 1, null), aVar.b(), null, true, yp.g.f55551o.a());
                }
                return new l.c(aVar.b());
            }
            throw new qr.p();
        }
    }

    @Override // bn.k
    /* renamed from: l0 */
    public Object f(c renderProps, final l renderState, final k.a context) {
        Object p02;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        j1(renderProps, renderState, context);
        this.f19055o.e(Intrinsics.areEqual(renderState.f(), w.c.f19370d));
        Function0 function0 = new Function0() { // from class: uo.a0
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
            throw new qr.p();
        }
        bq.k F1 = F1(p02, renderState);
        if (this.f19053m.c()) {
            return z1(F1, context);
        }
        return F1;
    }

    @Override // bn.k
    /* renamed from: y1 */
    public bn.i g(l state) {
        Intrinsics.checkNotNullParameter(state, "state");
        if (state instanceof l.j) {
            l.j jVar = (l.j) state;
            this.f19057q.e(jVar.k(), jVar.b(), jVar.x(), jVar.getComponents());
            return dn.s.a(l.j.l(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 261887, null));
        }
        return dn.s.a(state);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        uo.f a();

        Integer getTheme();

        boolean isCancelled();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19083a;

            /* renamed from: b  reason: collision with root package name */
            private final uo.f f19084b;

            /* renamed from: c  reason: collision with root package name */
            private final Integer f19085c;

            /* renamed from: d  reason: collision with root package name */
            private final boolean f19086d;

            public b(String oneTimeLinkCode, uo.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19083a = oneTimeLinkCode;
                this.f19084b = environment;
                this.f19085c = num;
                this.f19086d = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public uo.f a() {
                return this.f19084b;
            }

            public final String b() {
                return this.f19083a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof b) {
                    b bVar = (b) obj;
                    return Intrinsics.areEqual(this.f19083a, bVar.f19083a) && this.f19084b == bVar.f19084b && Intrinsics.areEqual(this.f19085c, bVar.f19085c) && this.f19086d == bVar.f19086d;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19085c;
            }

            public int hashCode() {
                int hashCode = ((this.f19083a.hashCode() * 31) + this.f19084b.hashCode()) * 31;
                Integer num = this.f19085c;
                return ((hashCode + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.f19086d);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19086d;
            }

            public String toString() {
                String str = this.f19083a;
                uo.f fVar = this.f19084b;
                Integer num = this.f19085c;
                boolean z10 = this.f19086d;
                return "OneTimeCodeProps(oneTimeLinkCode=" + str + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ b(String str, uo.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, fVar, num, (i10 & 8) != 0 ? false : z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19077a;

            /* renamed from: b  reason: collision with root package name */
            private final String f19078b;

            /* renamed from: c  reason: collision with root package name */
            private final String f19079c;

            /* renamed from: d  reason: collision with root package name */
            private final uo.f f19080d;

            /* renamed from: e  reason: collision with root package name */
            private final Integer f19081e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f19082f;

            public a(String inquiryId, String str, String str2, uo.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19077a = inquiryId;
                this.f19078b = str;
                this.f19079c = str2;
                this.f19080d = environment;
                this.f19081e = num;
                this.f19082f = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public uo.f a() {
                return this.f19080d;
            }

            public final String b() {
                return this.f19077a;
            }

            public final String c() {
                return this.f19078b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f19077a, aVar.f19077a) && Intrinsics.areEqual(this.f19078b, aVar.f19078b) && Intrinsics.areEqual(this.f19079c, aVar.f19079c) && this.f19080d == aVar.f19080d && Intrinsics.areEqual(this.f19081e, aVar.f19081e) && this.f19082f == aVar.f19082f;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19081e;
            }

            public int hashCode() {
                int hashCode = this.f19077a.hashCode() * 31;
                String str = this.f19078b;
                int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
                String str2 = this.f19079c;
                int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.f19080d.hashCode()) * 31;
                Integer num = this.f19081e;
                return ((hashCode3 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19082f);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19082f;
            }

            public String toString() {
                String str = this.f19077a;
                String str2 = this.f19078b;
                String str3 = this.f19079c;
                uo.f fVar = this.f19080d;
                Integer num = this.f19081e;
                boolean z10 = this.f19082f;
                return "InquiryProps(inquiryId=" + str + ", sessionToken=" + str2 + ", environmentId=" + str3 + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ a(String str, String str2, String str3, uo.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, fVar, num, (i10 & 32) != 0 ? false : z10);
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0245c implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19087a;

            /* renamed from: b  reason: collision with root package name */
            private final String f19088b;

            /* renamed from: c  reason: collision with root package name */
            private final String f19089c;

            /* renamed from: d  reason: collision with root package name */
            private final String f19090d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19091e;

            /* renamed from: f  reason: collision with root package name */
            private final Map f19092f;

            /* renamed from: g  reason: collision with root package name */
            private final String f19093g;

            /* renamed from: h  reason: collision with root package name */
            private final StaticInquiryTemplate f19094h;

            /* renamed from: i  reason: collision with root package name */
            private final uo.f f19095i;

            /* renamed from: j  reason: collision with root package name */
            private final Integer f19096j;

            /* renamed from: k  reason: collision with root package name */
            private final boolean f19097k;

            public C0245c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, uo.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19087a = str;
                this.f19088b = str2;
                this.f19089c = str3;
                this.f19090d = str4;
                this.f19091e = str5;
                this.f19092f = map;
                this.f19093g = str6;
                this.f19094h = staticInquiryTemplate;
                this.f19095i = environment;
                this.f19096j = num;
                this.f19097k = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public uo.f a() {
                return this.f19095i;
            }

            public final String b() {
                return this.f19089c;
            }

            public final String c() {
                return this.f19091e;
            }

            public final Map d() {
                return this.f19092f;
            }

            public final String e() {
                return this.f19090d;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0245c) {
                    C0245c c0245c = (C0245c) obj;
                    return Intrinsics.areEqual(this.f19087a, c0245c.f19087a) && Intrinsics.areEqual(this.f19088b, c0245c.f19088b) && Intrinsics.areEqual(this.f19089c, c0245c.f19089c) && Intrinsics.areEqual(this.f19090d, c0245c.f19090d) && Intrinsics.areEqual(this.f19091e, c0245c.f19091e) && Intrinsics.areEqual(this.f19092f, c0245c.f19092f) && Intrinsics.areEqual(this.f19093g, c0245c.f19093g) && Intrinsics.areEqual(this.f19094h, c0245c.f19094h) && this.f19095i == c0245c.f19095i && Intrinsics.areEqual(this.f19096j, c0245c.f19096j) && this.f19097k == c0245c.f19097k;
                }
                return false;
            }

            public final StaticInquiryTemplate f() {
                return this.f19094h;
            }

            public final String g() {
                return this.f19087a;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19096j;
            }

            public final String h() {
                return this.f19088b;
            }

            public int hashCode() {
                String str = this.f19087a;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f19088b;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                String str3 = this.f19089c;
                int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f19090d;
                int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f19091e;
                int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
                Map map = this.f19092f;
                int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
                String str6 = this.f19093g;
                int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
                StaticInquiryTemplate staticInquiryTemplate = this.f19094h;
                int hashCode8 = (((hashCode7 + (staticInquiryTemplate == null ? 0 : staticInquiryTemplate.hashCode())) * 31) + this.f19095i.hashCode()) * 31;
                Integer num = this.f19096j;
                return ((hashCode8 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19097k);
            }

            public final String i() {
                return this.f19093g;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19097k;
            }

            public String toString() {
                String str = this.f19087a;
                String str2 = this.f19088b;
                String str3 = this.f19089c;
                String str4 = this.f19090d;
                String str5 = this.f19091e;
                Map map = this.f19092f;
                String str6 = this.f19093g;
                StaticInquiryTemplate staticInquiryTemplate = this.f19094h;
                uo.f fVar = this.f19095i;
                Integer num = this.f19096j;
                boolean z10 = this.f19097k;
                return "TemplateProps(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", referenceId=" + str4 + ", environmentId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ C0245c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, uo.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, str4, str5, map, str6, staticInquiryTemplate, fVar, num, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0244b implements b {
            @NotNull
            public static final Parcelable.Creator<C0244b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19067d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19068e;

            /* renamed from: i  reason: collision with root package name */
            private final Map f19069i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19070o;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0244b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    String readString = parcel.readString();
                    String readString2 = parcel.readString();
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0244b.class.getClassLoader()));
                    }
                    return new C0244b(readString, readString2, linkedHashMap, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0244b[] newArray(int i10) {
                    return new C0244b[i10];
                }
            }

            public C0244b(String inquiryId, String inquiryStatus, Map fields, String str) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
                Intrinsics.checkNotNullParameter(fields, "fields");
                this.f19067d = inquiryId;
                this.f19068e = inquiryStatus;
                this.f19069i = fields;
                this.f19070o = str;
            }

            public final Map a() {
                return this.f19069i;
            }

            public final String b() {
                return this.f19067d;
            }

            public final String c() {
                return this.f19068e;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0244b) {
                    C0244b c0244b = (C0244b) obj;
                    return Intrinsics.areEqual(this.f19067d, c0244b.f19067d) && Intrinsics.areEqual(this.f19068e, c0244b.f19068e) && Intrinsics.areEqual(this.f19069i, c0244b.f19069i) && Intrinsics.areEqual(this.f19070o, c0244b.f19070o);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = ((((this.f19067d.hashCode() * 31) + this.f19068e.hashCode()) * 31) + this.f19069i.hashCode()) * 31;
                String str = this.f19070o;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19070o;
            }

            public String toString() {
                String str = this.f19067d;
                String str2 = this.f19068e;
                Map map = this.f19069i;
                String str3 = this.f19070o;
                return "Complete(inquiryId=" + str + ", inquiryStatus=" + str2 + ", fields=" + map + ", sessionToken=" + str3 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19067d);
                dest.writeString(this.f19068e);
                Map map = this.f19069i;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
                dest.writeString(this.f19070o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements b {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19071d;

            /* renamed from: e  reason: collision with root package name */
            private final oq.d f19072e;

            /* renamed from: i  reason: collision with root package name */
            private final InternalErrorInfo f19073i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19074o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c(parcel.readString(), (oq.d) parcel.readParcelable(c.class.getClassLoader()), (InternalErrorInfo) parcel.readParcelable(c.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(String str, oq.d errorCode, InternalErrorInfo cause, String str2) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19071d = str;
                this.f19072e = errorCode;
                this.f19073i = cause;
                this.f19074o = str2;
            }

            public final InternalErrorInfo a() {
                return this.f19073i;
            }

            public final String b() {
                return this.f19071d;
            }

            public final oq.d c() {
                return this.f19072e;
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
                    return Intrinsics.areEqual(this.f19071d, cVar.f19071d) && this.f19072e == cVar.f19072e && Intrinsics.areEqual(this.f19073i, cVar.f19073i) && Intrinsics.areEqual(this.f19074o, cVar.f19074o);
                }
                return false;
            }

            public int hashCode() {
                String str = this.f19071d;
                int hashCode = (((((str == null ? 0 : str.hashCode()) * 31) + this.f19072e.hashCode()) * 31) + this.f19073i.hashCode()) * 31;
                String str2 = this.f19074o;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19074o;
            }

            public String toString() {
                String str = this.f19071d;
                oq.d dVar = this.f19072e;
                InternalErrorInfo internalErrorInfo = this.f19073i;
                String str2 = this.f19074o;
                return "Error(debugMessage=" + str + ", errorCode=" + dVar + ", cause=" + internalErrorInfo + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19071d);
                dest.writeParcelable(this.f19072e, i10);
                dest.writeParcelable(this.f19073i, i10);
                dest.writeString(this.f19074o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements b {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19075d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19076e;

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
                this.f19075d = inquiryId;
                this.f19076e = str;
            }

            public final String a() {
                return this.f19075d;
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
                    return Intrinsics.areEqual(this.f19075d, dVar.f19075d) && Intrinsics.areEqual(this.f19076e, dVar.f19076e);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = this.f19075d.hashCode() * 31;
                String str = this.f19076e;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19076e;
            }

            public String toString() {
                String str = this.f19075d;
                String str2 = this.f19076e;
                return "ReinitializeWithFallbackMode(inquiryId=" + str + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19075d);
                dest.writeString(this.f19076e);
            }
        }

        String k();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0243a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19059d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19060e;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyle f19061i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19062o;

            /* renamed from: p  reason: collision with root package name */
            private final String f19063p;

            /* renamed from: q  reason: collision with root package name */
            private final String f19064q;

            /* renamed from: r  reason: collision with root package name */
            private final String f19065r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f19066s;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0243a implements Parcelable.Creator {
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
                this.f19059d = str;
                this.f19060e = str2;
                this.f19061i = stepStyle;
                this.f19062o = str3;
                this.f19063p = str4;
                this.f19064q = str5;
                this.f19065r = str6;
                this.f19066s = z10;
            }

            public final String a() {
                return this.f19065r;
            }

            public final boolean b() {
                return this.f19066s;
            }

            public final String c() {
                return this.f19059d;
            }

            public final String d() {
                return this.f19063p;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String e() {
                return this.f19064q;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f19059d, aVar.f19059d) && Intrinsics.areEqual(this.f19060e, aVar.f19060e) && Intrinsics.areEqual(this.f19061i, aVar.f19061i) && Intrinsics.areEqual(this.f19062o, aVar.f19062o) && Intrinsics.areEqual(this.f19063p, aVar.f19063p) && Intrinsics.areEqual(this.f19064q, aVar.f19064q) && Intrinsics.areEqual(this.f19065r, aVar.f19065r) && this.f19066s == aVar.f19066s;
                }
                return false;
            }

            public final StepStyle f() {
                return this.f19061i;
            }

            public final String h() {
                return this.f19062o;
            }

            public int hashCode() {
                String str = this.f19059d;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f19060e;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                StepStyle stepStyle = this.f19061i;
                int hashCode3 = (hashCode2 + (stepStyle == null ? 0 : stepStyle.hashCode())) * 31;
                String str3 = this.f19062o;
                int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f19063p;
                int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f19064q;
                int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
                String str6 = this.f19065r;
                return ((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19066s);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19060e;
            }

            public String toString() {
                String str = this.f19059d;
                String str2 = this.f19060e;
                StepStyle stepStyle = this.f19061i;
                String str3 = this.f19062o;
                String str4 = this.f19063p;
                String str5 = this.f19064q;
                String str6 = this.f19065r;
                boolean z10 = this.f19066s;
                return "Cancel(inquiryId=" + str + ", sessionToken=" + str2 + ", styles=" + stepStyle + ", title=" + str3 + ", message=" + str4 + ", resumeButtonText=" + str5 + ", cancelButtonText=" + str6 + ", force=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19059d);
                dest.writeString(this.f19060e);
                dest.writeParcelable(this.f19061i, i10);
                dest.writeString(this.f19062o);
                dest.writeString(this.f19063p);
                dest.writeString(this.f19064q);
                dest.writeString(this.f19065r);
                dest.writeInt(this.f19066s ? 1 : 0);
            }

            public /* synthetic */ a(String str, String str2, StepStyle stepStyle, String str3, String str4, String str5, String str6, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, stepStyle, str3, str4, str5, str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z10);
            }
        }
    }
}
