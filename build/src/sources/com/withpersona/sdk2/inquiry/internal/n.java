package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import cn.k;
import cn.r;
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
import fo.r2;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import ko.c4;
import ko.g3;
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
import lp.c;
import np.a1;
import np.d2;
import np.e2;
import np.m1;
import np.x5;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import ps.i0;
import qq.v4;
import uo.b;
import vo.b2;
import vo.j2;
import vo.l2;
import wp.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends cn.k {

    /* renamed from: s  reason: collision with root package name */
    public static final a f19180s = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f19181a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f19182b;

    /* renamed from: c  reason: collision with root package name */
    private final a.InterfaceC0262a f19183c;

    /* renamed from: d  reason: collision with root package name */
    private final q.b f19184d;

    /* renamed from: e  reason: collision with root package name */
    private final u.a f19185e;

    /* renamed from: f  reason: collision with root package name */
    private final x.a f19186f;

    /* renamed from: g  reason: collision with root package name */
    private final a0.a f19187g;

    /* renamed from: h  reason: collision with root package name */
    private final f.a f19188h;

    /* renamed from: i  reason: collision with root package name */
    private final g3 f19189i;

    /* renamed from: j  reason: collision with root package name */
    private final x5 f19190j;

    /* renamed from: k  reason: collision with root package name */
    private final v4 f19191k;

    /* renamed from: l  reason: collision with root package name */
    private final r2 f19192l;

    /* renamed from: m  reason: collision with root package name */
    private final lp.c f19193m;

    /* renamed from: n  reason: collision with root package name */
    private final wp.e f19194n;

    /* renamed from: o  reason: collision with root package name */
    private final aq.b f19195o;

    /* renamed from: p  reason: collision with root package name */
    private final wp.c f19196p;

    /* renamed from: q  reason: collision with root package name */
    private final l2 f19197q;

    /* renamed from: r  reason: collision with root package name */
    private final s.a f19198r;

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
            private final StepStyle f19238a;

            /* renamed from: b  reason: collision with root package name */
            private final boolean f19239b;

            /* renamed from: c  reason: collision with root package name */
            private final Function0 f19240c;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(StepStyle stepStyle, boolean z10, Function0 onBack) {
                super(null);
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                this.f19238a = stepStyle;
                this.f19239b = z10;
                this.f19240c = onBack;
            }

            public final Function0 a() {
                return this.f19240c;
            }

            public final StepStyle b() {
                return this.f19238a;
            }

            public final boolean c() {
                return this.f19239b;
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
        public static final /* synthetic */ int[] f19241a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f19242b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f19243c;

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
            f19241a = iArr;
            int[] iArr2 = new int[b2.values().length];
            try {
                iArr2[b2.f52789d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[b2.f52790e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f19242b = iArr2;
            int[] iArr3 = new int[NextStep.Document.StartPage.values().length];
            try {
                iArr3[NextStep.Document.StartPage.PROMPT.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr3[NextStep.Document.StartPage.REVIEW.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            f19243c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19244d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f19246i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f19247o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ k.a f19248d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ n f19249e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ l f19250i;

            a(k.a aVar, n nVar, l lVar) {
                this.f19248d = aVar;
                this.f19249e = nVar;
                this.f19250i = lVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(wp.a aVar, Continuation continuation) {
                if (aVar instanceof a.C0752a) {
                    n.n0(this.f19248d, this.f19249e, this.f19250i, ((a.C0752a) aVar).a());
                    return Unit.f31765a;
                }
                throw new rr.p();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f19246i = aVar;
            this.f19247o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f19246i, this.f19247o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f19244d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow c10 = n.this.f19194n.c();
                a aVar = new a(this.f19246i, n.this, this.f19247o);
                this.f19244d = 1;
                if (c10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19251d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19252e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19253i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l f19254o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, n nVar, l lVar, Continuation continuation) {
            super(2, continuation);
            this.f19252e = aVar;
            this.f19253i = nVar;
            this.f19254o = lVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f19252e, this.f19253i, this.f19254o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f19251d == 0) {
                kotlin.c.b(obj);
                n.n0(this.f19252e, this.f19253i, this.f19254o, true);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19255d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19256e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19257i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ l.a f19258o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, n nVar, l.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f19256e = aVar;
            this.f19257i = nVar;
            this.f19258o = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(l.a aVar, r.c cVar) {
            cVar.d(new b.C0271b(aVar.b(), aVar.p(), aVar.o(), aVar.k()));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f19256e, this.f19257i, this.f19258o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            xr.b.f();
            if (this.f19255d == 0) {
                kotlin.c.b(obj);
                cn.h c10 = this.f19256e.c();
                n nVar = this.f19257i;
                final l.a aVar = this.f19258o;
                d10 = cn.z.d(nVar, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.o
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = n.h.k(l.a.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19259d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f19260e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f19261i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, n nVar, Continuation continuation) {
            super(2, continuation);
            this.f19260e = aVar;
            this.f19261i = nVar;
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
                return Unit.f31765a;
            }
            cVar.e(l.j.l(jVar2, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 229375, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f19260e, this.f19261i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            Object f10 = xr.b.f();
            int i10 = this.f19259d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f19259d = 1;
                if (i0.a(2000L, this) == f10) {
                    return f10;
                }
            }
            cn.h c10 = this.f19260e.c();
            d10 = cn.z.d(this.f19261i, null, new Function1() { // from class: com.withpersona.sdk2.inquiry.internal.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = n.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public n(Context applicationContext, c.a createInquiryWorker, a.InterfaceC0262a inquirySessionWorker, q.b pollingWorker, u.a transitionBackWorker, x.a transitionWorkerFactory, a0.a updateInquirySessionWorkerFactory, f.a exchangeOneTimeCodeWorkerFactory, g3 governmentIdWorkflow, x5 selfieWorkflow, v4 uiWorkflow, r2 documentWorkflow, lp.c sandboxFlags, wp.e externalInquiryController, aq.b navigationStateManager, wp.c externalEventLogger, l2 uiStepSavedStateHelper, s.a restoreUiStepStateWorkerFactory) {
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
        this.f19181a = applicationContext;
        this.f19182b = createInquiryWorker;
        this.f19183c = inquirySessionWorker;
        this.f19184d = pollingWorker;
        this.f19185e = transitionBackWorker;
        this.f19186f = transitionWorkerFactory;
        this.f19187g = updateInquirySessionWorkerFactory;
        this.f19188h = exchangeOneTimeCodeWorkerFactory;
        this.f19189i = governmentIdWorkflow;
        this.f19190j = selfieWorkflow;
        this.f19191k = uiWorkflow;
        this.f19192l = documentWorkflow;
        this.f19193m = sandboxFlags;
        this.f19194n = externalInquiryController;
        this.f19195o = navigationStateManager;
        this.f19196p = externalEventLogger;
        this.f19197q = uiStepSavedStateHelper;
        this.f19198r = restoreUiStepStateWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.d.l(dVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, null, 1019, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(n nVar, k.a aVar) {
        cn.r d10;
        nVar.f19193m.f();
        cn.h c10 = aVar.c();
        d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.t1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B1;
                B1 = com.withpersona.sdk2.inquiry.internal.n.B1((r.c) obj);
                return B1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final Object B0(c cVar, final l.e eVar, k.a aVar, Function0 function0) {
        aq.b.d(this.f19195o, false, false, false, 4, null);
        cn.w.l(aVar, this.f19188h.a(eVar.j()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.f.class), "", new Function1() { // from class: vo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r C0;
                C0 = com.withpersona.sdk2.inquiry.internal.n.C0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, (com.withpersona.sdk2.inquiry.internal.network.d) obj);
                return C0;
            }
        });
        return new d.b(eVar.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r C0(final n nVar, final l.e eVar, final com.withpersona.sdk2.inquiry.internal.network.d it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit D0;
                    D0 = com.withpersona.sdk2.inquiry.internal.n.D0(com.withpersona.sdk2.inquiry.internal.network.d.this, (r.c) obj);
                    return D0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.a) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E0;
                    E0 = com.withpersona.sdk2.inquiry.internal.n.E0(com.withpersona.sdk2.inquiry.internal.n.this, eVar, it, (r.c) obj);
                    return E0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final c.b C1(n nVar) {
        return nVar.f19193m.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        d.b bVar = (d.b) dVar;
        if (bVar.b() == null) {
            action.e(new l.c(bVar.a()));
        } else {
            action.e(new l.i(bVar.b(), new w.a(null, 1, null), bVar.a(), null, true, zp.g.f56624o.a()));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(n nVar, k.a aVar, boolean z10) {
        cn.r d10;
        nVar.f19193m.e(z10);
        cn.h c10 = aVar.c();
        d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E1;
                E1 = com.withpersona.sdk2.inquiry.internal.n.E1((r.c) obj);
                return E1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(n nVar, l.e eVar, com.withpersona.sdk2.inquiry.internal.network.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, eVar.k(), ((d.a) dVar).a(), null, 4, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        return Unit.f31765a;
    }

    private final Object F0(c cVar, final l.f fVar, k.a aVar) {
        List list;
        NextStep.GovernmentId.AssetConfig assetConfig;
        String e10 = fVar.e();
        g3 g3Var = this.f19189i;
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
            c4 o10 = ko.z.o(id2, str, fVar.K());
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
        g3.a.C0474a i10 = bp.a.i(H, str2, list);
        long K = fVar.K();
        Integer theme = cVar.getTheme();
        boolean N = fVar.N();
        List w10 = fVar.w();
        List<NextStep.GovernmentId.VideoCaptureMethod> P = fVar.P();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(P, 10));
        for (NextStep.GovernmentId.VideoCaptureMethod videoCaptureMethod : P) {
            arrayList2.add(bo.a.valueOf(videoCaptureMethod.toString()));
        }
        VideoCaptureConfig videoCaptureConfig = new VideoCaptureConfig(0L, w10, arrayList2, fVar.R(), fVar.p(), 1, null);
        NextStep.GovernmentId.AssetConfig o11 = fVar.o();
        if (o11 == null) {
            assetConfig = new NextStep.GovernmentId.AssetConfig(null, null, null, null, null, 31, null);
        } else {
            assetConfig = o11;
        }
        return aVar.b(g3Var, new g3.a(k10, u10, arrayList, b10, e11, E, r10, t10, x10, styles, i10, F, B, D, K, N, theme, videoCaptureConfig, assetConfig, !Intrinsics.areEqual(fVar.f(), w.c.f19510d), fVar.q(), fVar.M(), fVar.L(), fVar.v()), e10, new Function1() { // from class: vo.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r G0;
                G0 = com.withpersona.sdk2.inquiry.internal.n.G0(com.withpersona.sdk2.inquiry.internal.n.this, fVar, (g3.b) obj);
                return G0;
            }
        });
    }

    private final cq.k F1(Object obj, l lVar) {
        cq.j jVar;
        if (lVar.d()) {
            jVar = cq.j.f20143e;
        } else {
            jVar = cq.j.f20142d;
        }
        return new cq.k(obj, jVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r G0(final n nVar, final l.f fVar, final g3.b it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        cn.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, g3.b.C0475b.f31286a)) {
            d13 = cn.z.d(nVar, null, new Function1() { // from class: vo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = com.withpersona.sdk2.inquiry.internal.n.H0(l.f.this, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            return d13;
        } else if (it instanceof g3.b.c) {
            d12 = cn.z.d(nVar, null, new Function1() { // from class: vo.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = com.withpersona.sdk2.inquiry.internal.n.I0(com.withpersona.sdk2.inquiry.internal.n.this, it, fVar, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, g3.b.d.f31288a)) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit J0;
                    J0 = com.withpersona.sdk2.inquiry.internal.n.J0(l.f.this, (r.c) obj);
                    return J0;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, g3.b.a.f31285a)) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.q0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K0;
                    K0 = com.withpersona.sdk2.inquiry.internal.n.K0(l.f.this, (r.c) obj);
                    return K0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
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
        return Unit.f31765a;
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.l(fVar, null, null, new w.a(null, 1, null), null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(l.f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.f.l(fVar, null, null, w.c.f19510d, null, null, null, null, null, null, false, false, null, null, null, 0, 0L, null, null, false, null, null, null, null, null, null, null, false, null, 268435451, null));
        return Unit.f31765a;
    }

    private final Object L0(c cVar, final bp.d dVar, k.a aVar, StepStyle stepStyle, Function0 function0) {
        aq.b.d(this.f19195o, false, false, false, 4, null);
        cn.w.l(aVar, this.f19182b.a(dVar), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.c.class), "", new Function1() { // from class: vo.z1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r M0;
                M0 = com.withpersona.sdk2.inquiry.internal.n.M0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (com.withpersona.sdk2.inquiry.internal.network.a) obj);
                return M0;
            }
        });
        return new d.b(stepStyle, true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r M0(final n nVar, final bp.d dVar, final com.withpersona.sdk2.inquiry.internal.network.a it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = com.withpersona.sdk2.inquiry.internal.n.N0(com.withpersona.sdk2.inquiry.internal.network.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.C0273a) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.m0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = com.withpersona.sdk2.inquiry.internal.n.O0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, it, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b bVar = (a.b) aVar;
        if (sp.h.e(bVar.b())) {
            action.d(new b.d(bVar.b(), bVar.a()));
        } else {
            action.e(new l.c(bVar.b()));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(n nVar, bp.d dVar, com.withpersona.sdk2.inquiry.internal.network.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.C0273a c0273a = (a.C0273a) aVar;
        nVar.w1(action, dVar.g(), c0273a.a(), c0273a.b());
        return Unit.f31765a;
    }

    private final Object P0(c cVar, l.g gVar, k.a aVar, Function0 function0) {
        return L0(cVar, new bp.d(null, null, gVar.j(), gVar.l(), cVar.a(), null, null, null, null, null, null, 2019, null), aVar, gVar.getStyles(), function0);
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
        x5 x5Var = this.f19190j;
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
        x5.b.a j10 = bp.a.j(x10, z10);
        d2 a10 = e2.a(hVar.F());
        List A = hVar.A();
        if (A == null || A.isEmpty()) {
            str = k10;
            str2 = b10;
            int i10 = e.f19241a[hVar.F().ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    throw new rr.p();
                }
                e10 = CollectionsKt.o(a1.b.f39020d, a1.b.f39021e, a1.b.f39022i);
            } else {
                e10 = CollectionsKt.e(a1.b.f39020d);
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
            arrayList.add(bo.a.valueOf(videoCaptureMethod.toString()));
        }
        return new cp.d(aVar.b(x5Var, new x5.b(str5, str2, w10, e12, q10, r10, v10, E, G, j10, a10, list, str4, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, microphonePermissionsTitle, microphonePermissionsPrompt, microphonePermissionsBtnContinueMobile, microphonePermissionsBtnCancel, styles, new com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig(0L, u10, arrayList, hVar.L(), hVar.p(), 1, null), o10, B, hVar.D(), hVar.t()), e11, new Function1() { // from class: vo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r R0;
                R0 = com.withpersona.sdk2.inquiry.internal.n.R0(com.withpersona.sdk2.inquiry.internal.n.this, hVar, (x5.c) obj);
                return R0;
            }
        }), !Intrinsics.areEqual(hVar.f(), w.c.f19510d), hVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r R0(final n nVar, final l.h hVar, final x5.c it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        cn.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, x5.c.b.f39788a)) {
            d13 = cn.z.d(nVar, null, new Function1() { // from class: vo.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = com.withpersona.sdk2.inquiry.internal.n.S0(l.h.this, (r.c) obj);
                    return S0;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, x5.c.d.f39790a)) {
            d12 = cn.z.d(nVar, null, new Function1() { // from class: vo.c1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = com.withpersona.sdk2.inquiry.internal.n.T0(l.h.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, x5.c.a.f39787a)) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = com.withpersona.sdk2.inquiry.internal.n.U0(l.h.this, (r.c) obj);
                    return U0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof x5.c.C0569c) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = com.withpersona.sdk2.inquiry.internal.n.V0(com.withpersona.sdk2.inquiry.internal.n.this, it, hVar, (r.c) obj);
                    return V0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.l(hVar, null, null, new w.a(null, 1, null), null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.h.l(hVar, null, null, w.c.f19510d, null, null, null, null, null, false, false, null, false, false, null, null, null, null, null, null, null, false, null, null, 8388603, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(n nVar, x5.c cVar, l.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5.c.C0569c c0569c = (x5.c.C0569c) cVar;
        if (nVar.k0(c0569c.a())) {
            action.e(nVar.i1(hVar));
        } else {
            x1(nVar, action, hVar.k(), c0569c.a(), null, 4, null);
        }
        return Unit.f31765a;
    }

    private final Object W0(c cVar, l.i iVar, k.a aVar, Function0 function0) {
        aq.b.d(this.f19195o, false, false, false, 4, null);
        return new d.b(iVar.getStyles(), iVar.o(), function0);
    }

    /* JADX WARN: Removed duplicated region for block: B:66:0x0145  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0173  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object X0(com.withpersona.sdk2.inquiry.internal.n.c r27, final com.withpersona.sdk2.inquiry.internal.l.j r28, cn.k.a r29, kotlin.jvm.functions.Function0 r30) {
        /*
            Method dump skipped, instructions count: 399
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.internal.n.X0(com.withpersona.sdk2.inquiry.internal.n$c, com.withpersona.sdk2.inquiry.internal.l$j, cn.k$a, kotlin.jvm.functions.Function0):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r Y0(final n nVar, final l.j jVar, final v4.c it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        cn.r d13;
        cn.r d14;
        cn.r d15;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, v4.c.b.f47074a)) {
            d15 = cn.z.d(nVar, null, new Function1() { // from class: vo.f1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z0;
                    Z0 = com.withpersona.sdk2.inquiry.internal.n.Z0(l.j.this, (r.c) obj);
                    return Z0;
                }
            }, 1, null);
            return d15;
        } else if (it instanceof v4.c.d) {
            d14 = cn.z.d(nVar, null, new Function1() { // from class: vo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a12;
                    a12 = com.withpersona.sdk2.inquiry.internal.n.a1(com.withpersona.sdk2.inquiry.internal.n.this, it, jVar, (r.c) obj);
                    return a12;
                }
            }, 1, null);
            return d14;
        } else if (it instanceof v4.c.f) {
            d13 = cn.z.d(nVar, null, new Function1() { // from class: vo.i1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = com.withpersona.sdk2.inquiry.internal.n.b1(l.j.this, it, (r.c) obj);
                    return b12;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, v4.c.e.f47078a)) {
            d12 = cn.z.d(nVar, null, new Function1() { // from class: vo.j1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c12;
                    c12 = com.withpersona.sdk2.inquiry.internal.n.c1(l.j.this, (r.c) obj);
                    return c12;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v4.c.a) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.k1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d16;
                    d16 = com.withpersona.sdk2.inquiry.internal.n.d1(l.j.this, (r.c) obj);
                    return d16;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof v4.c.C0637c) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.l1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = com.withpersona.sdk2.inquiry.internal.n.e1(l.j.this, (r.c) obj);
                    return e12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
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
        return Unit.f31765a;
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(l.j jVar, v4.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        v4.c.f fVar = (v4.c.f) cVar;
        action.e(l.j.l(jVar, null, null, new w.b(new x.c(fVar.b(), fVar.a(), fVar.c())), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.l(jVar, null, null, new w.d(null), null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(l.j.l(jVar, null, null, w.c.f19510d, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 262139, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new b.C0271b(jVar.b(), jVar.u(), jVar.r(), jVar.k()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r f1(final n nVar, final l.j jVar, final s.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, s.b.a.f19493a)) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = com.withpersona.sdk2.inquiry.internal.n.g1(com.withpersona.sdk2.inquiry.internal.n.this, jVar, (r.c) obj);
                    return g12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof s.b.C0276b) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.q1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h12;
                    h12 = com.withpersona.sdk2.inquiry.internal.n.h1(s.b.this, (r.c) obj);
                    return h12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(n nVar, l.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof l.j)) {
            return Unit.f31765a;
        }
        action.e(nVar.i1(jVar));
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        action.e(l.j.l(jVar2, null, null, null, null, null, null, null, null, ((s.b.C0276b) bVar).a(), false, false, false, null, null, null, null, null, false, 130815, null));
        return Unit.f31765a;
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
                cn.w.l(aVar, this.f19186f.a(k10, b10, lVar.a(), ((w.b) f10).a()), Reflection.typeOf(x.class), "", new Function1() { // from class: vo.v1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r u12;
                        u12 = com.withpersona.sdk2.inquiry.internal.n.u1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (x.b) obj);
                        return u12;
                    }
                });
            }
        } else if (f10 instanceof w.d) {
            if (k10 != null && b10 != null) {
                cn.w.l(aVar, this.f19187g.a(k10, b10, lVar.a()), Reflection.typeOf(a0.class), "", new Function1() { // from class: vo.w1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r m12;
                        m12 = com.withpersona.sdk2.inquiry.internal.n.m1(com.withpersona.sdk2.inquiry.internal.n.this, k10, f10, (com.withpersona.sdk2.inquiry.internal.network.i) obj);
                        return m12;
                    }
                });
            }
        } else if (f10 instanceof w.a) {
            if (k10 != null && b10 != null) {
                cn.w.l(aVar, this.f19184d.a(k10, b10, ((w.a) f10).a(), lVar.a()), Reflection.typeOf(q.class), "", new Function1() { // from class: vo.x1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r p12;
                        p12 = com.withpersona.sdk2.inquiry.internal.n.p1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (q.c) obj);
                        return p12;
                    }
                });
            }
        } else if (Intrinsics.areEqual(f10, w.c.f19510d)) {
            if (k10 != null && b10 != null && e10 != null) {
                cn.w.l(aVar, this.f19185e.a(k10, b10, e10, lVar.a()), Reflection.typeOf(u.class), "", new Function1() { // from class: vo.y1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r r12;
                        r12 = com.withpersona.sdk2.inquiry.internal.n.r1(com.withpersona.sdk2.inquiry.internal.n.this, lVar, k10, (com.withpersona.sdk2.inquiry.internal.network.h) obj);
                        return r12;
                    }
                });
            }
        } else if (f10 == null) {
        } else {
            throw new rr.p();
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

    private static final cn.r k1(final n nVar, final l lVar, final String str, final InternalErrorInfo internalErrorInfo) {
        cn.r d10;
        d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.u1
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
                    return Unit.f31765a;
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
                throw new rr.p();
            } else {
                if (networkErrorInfo.isRecoverable()) {
                    Object c11 = action.c();
                    if (c11 instanceof l.j) {
                        jVar2 = (l.j) c11;
                    }
                    l.j jVar3 = jVar2;
                    if (jVar3 == null) {
                        return Unit.f31765a;
                    }
                    action.e(l.j.l(jVar3, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, networkErrorInfo, null, false, 229371, null));
                } else {
                    x1(nVar, action, str, internalErrorInfo, null, 4, null);
                }
            }
        } else if (!(internalErrorInfo instanceof InternalErrorInfo.CameraErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.ConfigurationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.IntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.NoDiskSpaceErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.PermissionErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.UnknownErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.WebRtcIntegrationErrorInfo) && !(internalErrorInfo instanceof InternalErrorInfo.InvalidOneTimeLinkCode)) {
            throw new rr.p();
        } else {
            x1(nVar, action, str, internalErrorInfo, null, 4, null);
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, n nVar, l lVar) {
        n0(aVar, nVar, lVar, false);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r m1(final n nVar, final String str, final w wVar, final com.withpersona.sdk2.inquiry.internal.network.i it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof i.a) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n12;
                    n12 = com.withpersona.sdk2.inquiry.internal.n.n1(com.withpersona.sdk2.inquiry.internal.n.this, str, it, (r.c) obj);
                    return n12;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, i.b.f19464a)) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = com.withpersona.sdk2.inquiry.internal.n.o1(com.withpersona.sdk2.inquiry.internal.w.this, (r.c) obj);
                    return o12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n0(k.a aVar, n nVar, final l lVar, final boolean z10) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.l0
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
        return Unit.f31765a;
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
        return Unit.f31765a;
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
        return Unit.f31765a;
    }

    private final Object p0(l.a aVar, k.a aVar2) {
        aVar2.a("complete", new h(aVar2, this, aVar, null));
        return new d.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r p1(n nVar, l lVar, String str, final q.c it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof q.c.b) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.o1
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
            throw new rr.p();
        }
    }

    private final Object q0(c cVar, l.b bVar, k.a aVar, Function0 function0) {
        return L0(cVar, new bp.d(bVar.q(), bVar.r(), bVar.b(), bVar.k(), cVar.a(), bVar.l(), bVar.j(), bVar.p(), null, bVar.o(), bVar.t(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null), aVar, bVar.getStyles(), function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(q.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((q.c.b) cVar).a());
        return Unit.f31765a;
    }

    private final Object r0(c cVar, final l.c cVar2, k.a aVar, Function0 function0) {
        aq.b.d(this.f19195o, false, false, false, 4, null);
        cn.w.l(aVar, this.f19183c.a(cVar2.b()), Reflection.typeOf(com.withpersona.sdk2.inquiry.internal.a.class), "", new Function1() { // from class: vo.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r s02;
                s02 = com.withpersona.sdk2.inquiry.internal.n.s0(com.withpersona.sdk2.inquiry.internal.n.this, cVar2, (com.withpersona.sdk2.inquiry.internal.network.b) obj);
                return s02;
            }
        });
        return new d.b(cVar2.getStyles(), true, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r r1(final n nVar, final l lVar, final String str, final com.withpersona.sdk2.inquiry.internal.network.h it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof h.b) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit s12;
                    s12 = com.withpersona.sdk2.inquiry.internal.n.s1(com.withpersona.sdk2.inquiry.internal.network.h.this, (r.c) obj);
                    return s12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof h.a) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t12;
                    t12 = com.withpersona.sdk2.inquiry.internal.n.t1(com.withpersona.sdk2.inquiry.internal.n.this, it, lVar, str, (r.c) obj);
                    return t12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r s0(final n nVar, final l.c cVar, final com.withpersona.sdk2.inquiry.internal.network.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof b.C0274b) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit t02;
                    t02 = com.withpersona.sdk2.inquiry.internal.n.t0(l.c.this, it, nVar, (r.c) obj);
                    return t02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.a) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.u0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit u02;
                    u02 = com.withpersona.sdk2.inquiry.internal.n.u0(com.withpersona.sdk2.inquiry.internal.n.this, cVar, it, (r.c) obj);
                    return u02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(com.withpersona.sdk2.inquiry.internal.network.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h.b bVar = (h.b) hVar;
        bVar.a().h(true);
        action.e(bVar.a());
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, n nVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        b.C0274b c0274b = (b.C0274b) bVar;
        action.e(new l.i(c0274b.b(), null, cVar.b(), null, true, c0274b.a(), 2, null));
        nVar.f19196p.b(new b.C0718b(cVar.b(), com.withpersona.sdk2.inquiry.internal.h.f19038b.a(c0274b.b())));
        return Unit.f31765a;
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(n nVar, l.c cVar, com.withpersona.sdk2.inquiry.internal.network.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x1(nVar, action, cVar.k(), ((b.a) bVar).a(), null, 4, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r u1(n nVar, l lVar, String str, final x.b it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof x.b.a) {
            return k1(nVar, lVar, str, ((x.b.a) it).a());
        }
        if (it instanceof x.b.C0278b) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit v12;
                    v12 = com.withpersona.sdk2.inquiry.internal.n.v1(x.b.this, (r.c) obj);
                    return v12;
                }
            }, 1, null);
            return d10;
        }
        throw new rr.p();
    }

    private final Object v0(final l.d dVar, k.a aVar) {
        r2.e eVar;
        boolean z10;
        boolean z11;
        String str;
        String str2;
        String documentId = dVar.p().getConfig().getDocumentId();
        int i10 = e.f19243c[dVar.p().getConfig().getStartPage().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                if (documentId != null) {
                    eVar = new r2.e.b(documentId);
                } else {
                    eVar = r2.e.a.f23010d;
                }
            } else {
                throw new rr.p();
            }
        } else {
            eVar = r2.e.a.f23010d;
        }
        r2.e eVar2 = eVar;
        String e10 = dVar.e();
        r2 r2Var = this.f19192l;
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
        fo.l r10 = dVar.r();
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
        return new cp.d(aVar.b(r2Var, new r2.b(str, str2, e11, q10, title, prompt, disclaimer, btnSubmit, title2, description, fieldKeyDocument, kind, documentId, eVar2, r10, documentFileLimit, z10, z11, cameraPermissionsTitle, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, styles, o10, pendingPageTextVerticalPosition), e10, new Function1() { // from class: vo.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r w02;
                w02 = com.withpersona.sdk2.inquiry.internal.n.w0(com.withpersona.sdk2.inquiry.internal.n.this, dVar, (r2.c) obj);
                return w02;
            }
        }), !Intrinsics.areEqual(dVar.f(), w.c.f19510d), dVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((l) action.c()).i(new w.d(((x.b.C0278b) bVar).a())));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r w0(final n nVar, final l.d dVar, final r2.c it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        cn.r d13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, r2.c.b.f22978a)) {
            d13 = cn.z.d(nVar, null, new Function1() { // from class: vo.v0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x02;
                    x02 = com.withpersona.sdk2.inquiry.internal.n.x0(l.d.this, (r.c) obj);
                    return x02;
                }
            }, 1, null);
            return d13;
        } else if (Intrinsics.areEqual(it, r2.c.a.f22977a)) {
            d12 = cn.z.d(nVar, null, new Function1() { // from class: vo.x0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y02;
                    y02 = com.withpersona.sdk2.inquiry.internal.n.y0(l.d.this, (r.c) obj);
                    return y02;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof r2.c.C0343c) {
            d11 = cn.z.d(nVar, null, new Function1() { // from class: vo.y0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit z02;
                    z02 = com.withpersona.sdk2.inquiry.internal.n.z0(com.withpersona.sdk2.inquiry.internal.n.this, it, dVar, (r.c) obj);
                    return z02;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, r2.c.d.f22980a)) {
            d10 = cn.z.d(nVar, null, new Function1() { // from class: vo.z0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = com.withpersona.sdk2.inquiry.internal.n.A0(l.d.this, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    private final void w1(r.c cVar, String str, InternalErrorInfo internalErrorInfo, String str2) {
        if (str2 == null) {
            str2 = vo.r.b(internalErrorInfo);
        }
        cVar.d(new b.c(str2, vo.r.a(internalErrorInfo), internalErrorInfo, str));
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
        return Unit.f31765a;
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
        action.e(l.d.l(dVar, null, null, w.c.f19510d, null, null, null, null, null, null, null, 1019, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(n nVar, r2.c cVar, l.d dVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        r2.c.C0343c c0343c = (r2.c.C0343c) cVar;
        if (nVar.k0(c0343c.a())) {
            action.e(nVar.i1(dVar));
        } else {
            x1(nVar, action, dVar.k(), c0343c.a(), null, 4, null);
        }
        return Unit.f31765a;
    }

    private final lp.i z1(Object obj, final k.a aVar) {
        return new lp.i(obj, new Function0() { // from class: vo.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit A1;
                A1 = com.withpersona.sdk2.inquiry.internal.n.A1(com.withpersona.sdk2.inquiry.internal.n.this, aVar);
                return A1;
            }
        }, new Function0() { // from class: vo.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                c.b C1;
                C1 = com.withpersona.sdk2.inquiry.internal.n.C1(com.withpersona.sdk2.inquiry.internal.n.this);
                return C1;
            }
        }, this.f19193m.b(), new Function1() { // from class: vo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit D1;
                D1 = com.withpersona.sdk2.inquiry.internal.n.D1(com.withpersona.sdk2.inquiry.internal.n.this, aVar, ((Boolean) obj2).booleanValue());
                return D1;
            }
        });
    }

    @Override // cn.k
    /* renamed from: j0 */
    public l d(c props, cn.i iVar) {
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
                readParcelable = obtain.readParcelable(cn.i.class.getClassLoader());
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
        } else if (props instanceof c.C0272c) {
            c.C0272c c0272c = (c.C0272c) props;
            return new l.b(c0272c.g(), c0272c.h(), c0272c.b(), c0272c.c(), c0272c.e(), c0272c.d(), c0272c.i(), c0272c.f());
        } else if (props instanceof c.b) {
            return new l.e(((c.b) props).b());
        } else {
            if (props instanceof c.a) {
                c.a aVar = (c.a) props;
                if (sp.h.e(aVar.b()) && aVar.c() != null) {
                    return new l.g(aVar.b(), aVar.c());
                }
                String c10 = aVar.c();
                if (c10 != null && c10.length() != 0) {
                    return new l.i(aVar.c(), new w.a(null, 1, null), aVar.b(), null, true, zp.g.f56624o.a());
                }
                return new l.c(aVar.b());
            }
            throw new rr.p();
        }
    }

    @Override // cn.k
    /* renamed from: l0 */
    public Object f(c renderProps, final l renderState, final k.a context) {
        Object p02;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        j1(renderProps, renderState, context);
        this.f19195o.e(Intrinsics.areEqual(renderState.f(), w.c.f19510d));
        Function0 function0 = new Function0() { // from class: vo.a0
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
            throw new rr.p();
        }
        cq.k F1 = F1(p02, renderState);
        if (this.f19193m.c()) {
            return z1(F1, context);
        }
        return F1;
    }

    @Override // cn.k
    /* renamed from: y1 */
    public cn.i g(l state) {
        Intrinsics.checkNotNullParameter(state, "state");
        if (state instanceof l.j) {
            l.j jVar = (l.j) state;
            this.f19197q.e(jVar.k(), jVar.b(), jVar.x(), jVar.getComponents());
            return en.s.a(l.j.l(jVar, null, null, null, null, null, null, null, null, null, false, false, false, null, null, null, null, null, false, 261887, null));
        }
        return en.s.a(state);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        vo.f a();

        Integer getTheme();

        boolean isCancelled();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19223a;

            /* renamed from: b  reason: collision with root package name */
            private final vo.f f19224b;

            /* renamed from: c  reason: collision with root package name */
            private final Integer f19225c;

            /* renamed from: d  reason: collision with root package name */
            private final boolean f19226d;

            public b(String oneTimeLinkCode, vo.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19223a = oneTimeLinkCode;
                this.f19224b = environment;
                this.f19225c = num;
                this.f19226d = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public vo.f a() {
                return this.f19224b;
            }

            public final String b() {
                return this.f19223a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof b) {
                    b bVar = (b) obj;
                    return Intrinsics.areEqual(this.f19223a, bVar.f19223a) && this.f19224b == bVar.f19224b && Intrinsics.areEqual(this.f19225c, bVar.f19225c) && this.f19226d == bVar.f19226d;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19225c;
            }

            public int hashCode() {
                int hashCode = ((this.f19223a.hashCode() * 31) + this.f19224b.hashCode()) * 31;
                Integer num = this.f19225c;
                return ((hashCode + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.f19226d);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19226d;
            }

            public String toString() {
                String str = this.f19223a;
                vo.f fVar = this.f19224b;
                Integer num = this.f19225c;
                boolean z10 = this.f19226d;
                return "OneTimeCodeProps(oneTimeLinkCode=" + str + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ b(String str, vo.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, fVar, num, (i10 & 8) != 0 ? false : z10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19217a;

            /* renamed from: b  reason: collision with root package name */
            private final String f19218b;

            /* renamed from: c  reason: collision with root package name */
            private final String f19219c;

            /* renamed from: d  reason: collision with root package name */
            private final vo.f f19220d;

            /* renamed from: e  reason: collision with root package name */
            private final Integer f19221e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f19222f;

            public a(String inquiryId, String str, String str2, vo.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19217a = inquiryId;
                this.f19218b = str;
                this.f19219c = str2;
                this.f19220d = environment;
                this.f19221e = num;
                this.f19222f = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public vo.f a() {
                return this.f19220d;
            }

            public final String b() {
                return this.f19217a;
            }

            public final String c() {
                return this.f19218b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f19217a, aVar.f19217a) && Intrinsics.areEqual(this.f19218b, aVar.f19218b) && Intrinsics.areEqual(this.f19219c, aVar.f19219c) && this.f19220d == aVar.f19220d && Intrinsics.areEqual(this.f19221e, aVar.f19221e) && this.f19222f == aVar.f19222f;
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19221e;
            }

            public int hashCode() {
                int hashCode = this.f19217a.hashCode() * 31;
                String str = this.f19218b;
                int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
                String str2 = this.f19219c;
                int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.f19220d.hashCode()) * 31;
                Integer num = this.f19221e;
                return ((hashCode3 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19222f);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19222f;
            }

            public String toString() {
                String str = this.f19217a;
                String str2 = this.f19218b;
                String str3 = this.f19219c;
                vo.f fVar = this.f19220d;
                Integer num = this.f19221e;
                boolean z10 = this.f19222f;
                return "InquiryProps(inquiryId=" + str + ", sessionToken=" + str2 + ", environmentId=" + str3 + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ a(String str, String str2, String str3, vo.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, fVar, num, (i10 & 32) != 0 ? false : z10);
            }
        }

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0272c implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f19227a;

            /* renamed from: b  reason: collision with root package name */
            private final String f19228b;

            /* renamed from: c  reason: collision with root package name */
            private final String f19229c;

            /* renamed from: d  reason: collision with root package name */
            private final String f19230d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19231e;

            /* renamed from: f  reason: collision with root package name */
            private final Map f19232f;

            /* renamed from: g  reason: collision with root package name */
            private final String f19233g;

            /* renamed from: h  reason: collision with root package name */
            private final StaticInquiryTemplate f19234h;

            /* renamed from: i  reason: collision with root package name */
            private final vo.f f19235i;

            /* renamed from: j  reason: collision with root package name */
            private final Integer f19236j;

            /* renamed from: k  reason: collision with root package name */
            private final boolean f19237k;

            public C0272c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, vo.f environment, Integer num, boolean z10) {
                Intrinsics.checkNotNullParameter(environment, "environment");
                this.f19227a = str;
                this.f19228b = str2;
                this.f19229c = str3;
                this.f19230d = str4;
                this.f19231e = str5;
                this.f19232f = map;
                this.f19233g = str6;
                this.f19234h = staticInquiryTemplate;
                this.f19235i = environment;
                this.f19236j = num;
                this.f19237k = z10;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public vo.f a() {
                return this.f19235i;
            }

            public final String b() {
                return this.f19229c;
            }

            public final String c() {
                return this.f19231e;
            }

            public final Map d() {
                return this.f19232f;
            }

            public final String e() {
                return this.f19230d;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0272c) {
                    C0272c c0272c = (C0272c) obj;
                    return Intrinsics.areEqual(this.f19227a, c0272c.f19227a) && Intrinsics.areEqual(this.f19228b, c0272c.f19228b) && Intrinsics.areEqual(this.f19229c, c0272c.f19229c) && Intrinsics.areEqual(this.f19230d, c0272c.f19230d) && Intrinsics.areEqual(this.f19231e, c0272c.f19231e) && Intrinsics.areEqual(this.f19232f, c0272c.f19232f) && Intrinsics.areEqual(this.f19233g, c0272c.f19233g) && Intrinsics.areEqual(this.f19234h, c0272c.f19234h) && this.f19235i == c0272c.f19235i && Intrinsics.areEqual(this.f19236j, c0272c.f19236j) && this.f19237k == c0272c.f19237k;
                }
                return false;
            }

            public final StaticInquiryTemplate f() {
                return this.f19234h;
            }

            public final String g() {
                return this.f19227a;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public Integer getTheme() {
                return this.f19236j;
            }

            public final String h() {
                return this.f19228b;
            }

            public int hashCode() {
                String str = this.f19227a;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f19228b;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                String str3 = this.f19229c;
                int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f19230d;
                int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f19231e;
                int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
                Map map = this.f19232f;
                int hashCode6 = (hashCode5 + (map == null ? 0 : map.hashCode())) * 31;
                String str6 = this.f19233g;
                int hashCode7 = (hashCode6 + (str6 == null ? 0 : str6.hashCode())) * 31;
                StaticInquiryTemplate staticInquiryTemplate = this.f19234h;
                int hashCode8 = (((hashCode7 + (staticInquiryTemplate == null ? 0 : staticInquiryTemplate.hashCode())) * 31) + this.f19235i.hashCode()) * 31;
                Integer num = this.f19236j;
                return ((hashCode8 + (num != null ? num.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19237k);
            }

            public final String i() {
                return this.f19233g;
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.c
            public boolean isCancelled() {
                return this.f19237k;
            }

            public String toString() {
                String str = this.f19227a;
                String str2 = this.f19228b;
                String str3 = this.f19229c;
                String str4 = this.f19230d;
                String str5 = this.f19231e;
                Map map = this.f19232f;
                String str6 = this.f19233g;
                StaticInquiryTemplate staticInquiryTemplate = this.f19234h;
                vo.f fVar = this.f19235i;
                Integer num = this.f19236j;
                boolean z10 = this.f19237k;
                return "TemplateProps(templateId=" + str + ", templateVersion=" + str2 + ", accountId=" + str3 + ", referenceId=" + str4 + ", environmentId=" + str5 + ", fields=" + map + ", themeSetId=" + str6 + ", staticInquiryTemplate=" + staticInquiryTemplate + ", environment=" + fVar + ", theme=" + num + ", isCancelled=" + z10 + ")";
            }

            public /* synthetic */ C0272c(String str, String str2, String str3, String str4, String str5, Map map, String str6, StaticInquiryTemplate staticInquiryTemplate, vo.f fVar, Integer num, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, str3, str4, str5, map, str6, staticInquiryTemplate, fVar, num, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? false : z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0271b implements b {
            @NotNull
            public static final Parcelable.Creator<C0271b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19207d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19208e;

            /* renamed from: i  reason: collision with root package name */
            private final Map f19209i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19210o;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0271b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    String readString = parcel.readString();
                    String readString2 = parcel.readString();
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0271b.class.getClassLoader()));
                    }
                    return new C0271b(readString, readString2, linkedHashMap, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0271b[] newArray(int i10) {
                    return new C0271b[i10];
                }
            }

            public C0271b(String inquiryId, String inquiryStatus, Map fields, String str) {
                Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
                Intrinsics.checkNotNullParameter(inquiryStatus, "inquiryStatus");
                Intrinsics.checkNotNullParameter(fields, "fields");
                this.f19207d = inquiryId;
                this.f19208e = inquiryStatus;
                this.f19209i = fields;
                this.f19210o = str;
            }

            public final Map a() {
                return this.f19209i;
            }

            public final String b() {
                return this.f19207d;
            }

            public final String c() {
                return this.f19208e;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof C0271b) {
                    C0271b c0271b = (C0271b) obj;
                    return Intrinsics.areEqual(this.f19207d, c0271b.f19207d) && Intrinsics.areEqual(this.f19208e, c0271b.f19208e) && Intrinsics.areEqual(this.f19209i, c0271b.f19209i) && Intrinsics.areEqual(this.f19210o, c0271b.f19210o);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = ((((this.f19207d.hashCode() * 31) + this.f19208e.hashCode()) * 31) + this.f19209i.hashCode()) * 31;
                String str = this.f19210o;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19210o;
            }

            public String toString() {
                String str = this.f19207d;
                String str2 = this.f19208e;
                Map map = this.f19209i;
                String str3 = this.f19210o;
                return "Complete(inquiryId=" + str + ", inquiryStatus=" + str2 + ", fields=" + map + ", sessionToken=" + str3 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19207d);
                dest.writeString(this.f19208e);
                Map map = this.f19209i;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
                dest.writeString(this.f19210o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements b {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19211d;

            /* renamed from: e  reason: collision with root package name */
            private final pq.d f19212e;

            /* renamed from: i  reason: collision with root package name */
            private final InternalErrorInfo f19213i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19214o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c(parcel.readString(), (pq.d) parcel.readParcelable(c.class.getClassLoader()), (InternalErrorInfo) parcel.readParcelable(c.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(String str, pq.d errorCode, InternalErrorInfo cause, String str2) {
                Intrinsics.checkNotNullParameter(errorCode, "errorCode");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f19211d = str;
                this.f19212e = errorCode;
                this.f19213i = cause;
                this.f19214o = str2;
            }

            public final InternalErrorInfo a() {
                return this.f19213i;
            }

            public final String b() {
                return this.f19211d;
            }

            public final pq.d c() {
                return this.f19212e;
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
                    return Intrinsics.areEqual(this.f19211d, cVar.f19211d) && this.f19212e == cVar.f19212e && Intrinsics.areEqual(this.f19213i, cVar.f19213i) && Intrinsics.areEqual(this.f19214o, cVar.f19214o);
                }
                return false;
            }

            public int hashCode() {
                String str = this.f19211d;
                int hashCode = (((((str == null ? 0 : str.hashCode()) * 31) + this.f19212e.hashCode()) * 31) + this.f19213i.hashCode()) * 31;
                String str2 = this.f19214o;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19214o;
            }

            public String toString() {
                String str = this.f19211d;
                pq.d dVar = this.f19212e;
                InternalErrorInfo internalErrorInfo = this.f19213i;
                String str2 = this.f19214o;
                return "Error(debugMessage=" + str + ", errorCode=" + dVar + ", cause=" + internalErrorInfo + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19211d);
                dest.writeParcelable(this.f19212e, i10);
                dest.writeParcelable(this.f19213i, i10);
                dest.writeString(this.f19214o);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements b {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19215d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19216e;

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
                this.f19215d = inquiryId;
                this.f19216e = str;
            }

            public final String a() {
                return this.f19215d;
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
                    return Intrinsics.areEqual(this.f19215d, dVar.f19215d) && Intrinsics.areEqual(this.f19216e, dVar.f19216e);
                }
                return false;
            }

            public int hashCode() {
                int hashCode = this.f19215d.hashCode() * 31;
                String str = this.f19216e;
                return hashCode + (str == null ? 0 : str.hashCode());
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19216e;
            }

            public String toString() {
                String str = this.f19215d;
                String str2 = this.f19216e;
                return "ReinitializeWithFallbackMode(inquiryId=" + str + ", sessionToken=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19215d);
                dest.writeString(this.f19216e);
            }
        }

        String k();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0270a();

            /* renamed from: d  reason: collision with root package name */
            private final String f19199d;

            /* renamed from: e  reason: collision with root package name */
            private final String f19200e;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyle f19201i;

            /* renamed from: o  reason: collision with root package name */
            private final String f19202o;

            /* renamed from: p  reason: collision with root package name */
            private final String f19203p;

            /* renamed from: q  reason: collision with root package name */
            private final String f19204q;

            /* renamed from: r  reason: collision with root package name */
            private final String f19205r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f19206s;

            /* renamed from: com.withpersona.sdk2.inquiry.internal.n$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0270a implements Parcelable.Creator {
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
                this.f19199d = str;
                this.f19200e = str2;
                this.f19201i = stepStyle;
                this.f19202o = str3;
                this.f19203p = str4;
                this.f19204q = str5;
                this.f19205r = str6;
                this.f19206s = z10;
            }

            public final String a() {
                return this.f19205r;
            }

            public final boolean b() {
                return this.f19206s;
            }

            public final String c() {
                return this.f19199d;
            }

            public final String d() {
                return this.f19203p;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public final String e() {
                return this.f19204q;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f19199d, aVar.f19199d) && Intrinsics.areEqual(this.f19200e, aVar.f19200e) && Intrinsics.areEqual(this.f19201i, aVar.f19201i) && Intrinsics.areEqual(this.f19202o, aVar.f19202o) && Intrinsics.areEqual(this.f19203p, aVar.f19203p) && Intrinsics.areEqual(this.f19204q, aVar.f19204q) && Intrinsics.areEqual(this.f19205r, aVar.f19205r) && this.f19206s == aVar.f19206s;
                }
                return false;
            }

            public final StepStyle f() {
                return this.f19201i;
            }

            public final String h() {
                return this.f19202o;
            }

            public int hashCode() {
                String str = this.f19199d;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.f19200e;
                int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
                StepStyle stepStyle = this.f19201i;
                int hashCode3 = (hashCode2 + (stepStyle == null ? 0 : stepStyle.hashCode())) * 31;
                String str3 = this.f19202o;
                int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
                String str4 = this.f19203p;
                int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
                String str5 = this.f19204q;
                int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
                String str6 = this.f19205r;
                return ((hashCode6 + (str6 != null ? str6.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19206s);
            }

            @Override // com.withpersona.sdk2.inquiry.internal.n.b
            public String k() {
                return this.f19200e;
            }

            public String toString() {
                String str = this.f19199d;
                String str2 = this.f19200e;
                StepStyle stepStyle = this.f19201i;
                String str3 = this.f19202o;
                String str4 = this.f19203p;
                String str5 = this.f19204q;
                String str6 = this.f19205r;
                boolean z10 = this.f19206s;
                return "Cancel(inquiryId=" + str + ", sessionToken=" + str2 + ", styles=" + stepStyle + ", title=" + str3 + ", message=" + str4 + ", resumeButtonText=" + str5 + ", cancelButtonText=" + str6 + ", force=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f19199d);
                dest.writeString(this.f19200e);
                dest.writeParcelable(this.f19201i, i10);
                dest.writeString(this.f19202o);
                dest.writeString(this.f19203p);
                dest.writeString(this.f19204q);
                dest.writeString(this.f19205r);
                dest.writeInt(this.f19206s ? 1 : 0);
            }

            public /* synthetic */ a(String str, String str2, StepStyle stepStyle, String str3, String str4, String str5, String str6, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(str, str2, stepStyle, str3, str4, str5, str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? false : z10);
            }
        }
    }
}
