package eo;

import android.content.Context;
import android.os.Parcel;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyWorker;
import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import eo.a0;
import eo.c4;
import eo.d0;
import eo.f5;
import eo.g3;
import eo.h4;
import eo.n1;
import eo.q;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.AdaptedFunctionReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.coroutines.CoroutineScope;
import lo.f;
import okio.ByteString;
import qp.h;
import qp.i;
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g3 extends wm.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21911a;

    /* renamed from: b  reason: collision with root package name */
    private final v4.h f21912b;

    /* renamed from: c  reason: collision with root package name */
    private final f.a f21913c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f21914d;

    /* renamed from: e  reason: collision with root package name */
    private final mo.j f21915e;

    /* renamed from: f  reason: collision with root package name */
    private final mo.s f21916f;

    /* renamed from: g  reason: collision with root package name */
    private final go.m0 f21917g;

    /* renamed from: h  reason: collision with root package name */
    private final AutoClassifyWorker.b f21918h;

    /* renamed from: i  reason: collision with root package name */
    private final fo.o f21919i;

    /* renamed from: j  reason: collision with root package name */
    private final un.a f21920j;

    /* renamed from: k  reason: collision with root package name */
    private final up.b f21921k;

    /* renamed from: l  reason: collision with root package name */
    private final qp.c f21922l;

    /* renamed from: m  reason: collision with root package name */
    private final mo.k f21923m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f21924a;

        /* renamed from: b  reason: collision with root package name */
        private final String f21925b;

        /* renamed from: c  reason: collision with root package name */
        private final List f21926c;

        /* renamed from: d  reason: collision with root package name */
        private final String f21927d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21928e;

        /* renamed from: f  reason: collision with root package name */
        private final String f21929f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f21930g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f21931h;

        /* renamed from: i  reason: collision with root package name */
        private final List f21932i;

        /* renamed from: j  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f21933j;

        /* renamed from: k  reason: collision with root package name */
        private final C0293a f21934k;

        /* renamed from: l  reason: collision with root package name */
        private final int f21935l;

        /* renamed from: m  reason: collision with root package name */
        private final String f21936m;

        /* renamed from: n  reason: collision with root package name */
        private final String f21937n;

        /* renamed from: o  reason: collision with root package name */
        private final long f21938o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f21939p;

        /* renamed from: q  reason: collision with root package name */
        private final Integer f21940q;

        /* renamed from: r  reason: collision with root package name */
        private final VideoCaptureConfig f21941r;

        /* renamed from: s  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig f21942s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f21943t;

        /* renamed from: u  reason: collision with root package name */
        private final fo.a f21944u;

        /* renamed from: v  reason: collision with root package name */
        private final StyleElements.Axis f21945v;

        /* renamed from: w  reason: collision with root package name */
        private final PendingPageTextPosition f21946w;

        /* renamed from: x  reason: collision with root package name */
        private final jo.a f21947x;

        /* renamed from: eo.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0293a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;
            private final String E;
            private final String F;
            private final String G;
            private final String H;
            private final String I;
            private final String J;
            private final String K;
            private final String L;
            private final String M;
            private final String N;
            private final String O;
            private final String P;
            private final String Q;
            private final String R;
            private final String S;
            private final String T;
            private final String U;
            private final String V;
            private final String W;
            private final String X;
            private final String Y;
            private final String Z;

            /* renamed from: a  reason: collision with root package name */
            private final String f21948a;

            /* renamed from: a0  reason: collision with root package name */
            private final String f21949a0;

            /* renamed from: b  reason: collision with root package name */
            private final String f21950b;

            /* renamed from: b0  reason: collision with root package name */
            private final String f21951b0;

            /* renamed from: c  reason: collision with root package name */
            private final String f21952c;

            /* renamed from: c0  reason: collision with root package name */
            private final String f21953c0;

            /* renamed from: d  reason: collision with root package name */
            private final String f21954d;

            /* renamed from: d0  reason: collision with root package name */
            private final List f21955d0;

            /* renamed from: e  reason: collision with root package name */
            private final j4 f21956e;

            /* renamed from: f  reason: collision with root package name */
            private final j4 f21957f;

            /* renamed from: g  reason: collision with root package name */
            private final String f21958g;

            /* renamed from: h  reason: collision with root package name */
            private final j4 f21959h;

            /* renamed from: i  reason: collision with root package name */
            private final String f21960i;

            /* renamed from: j  reason: collision with root package name */
            private final String f21961j;

            /* renamed from: k  reason: collision with root package name */
            private final String f21962k;

            /* renamed from: l  reason: collision with root package name */
            private final j4 f21963l;

            /* renamed from: m  reason: collision with root package name */
            private final String f21964m;

            /* renamed from: n  reason: collision with root package name */
            private final String f21965n;

            /* renamed from: o  reason: collision with root package name */
            private final Map f21966o;

            /* renamed from: p  reason: collision with root package name */
            private final j4 f21967p;

            /* renamed from: q  reason: collision with root package name */
            private final j4 f21968q;

            /* renamed from: r  reason: collision with root package name */
            private final String f21969r;

            /* renamed from: s  reason: collision with root package name */
            private final String f21970s;

            /* renamed from: t  reason: collision with root package name */
            private final Map f21971t;

            /* renamed from: u  reason: collision with root package name */
            private final Map f21972u;

            /* renamed from: v  reason: collision with root package name */
            private final String f21973v;

            /* renamed from: w  reason: collision with root package name */
            private final String f21974w;

            /* renamed from: x  reason: collision with root package name */
            private final String f21975x;

            /* renamed from: y  reason: collision with root package name */
            private final String f21976y;

            /* renamed from: z  reason: collision with root package name */
            private final String f21977z;

            public C0293a(String title, String prompt, String choose, String instructionsDisclaimer, j4 captureScreenTitle, j4 scanInstructions, String capturing, j4 confirmCapture, String captureDisclaimer, String buttonSubmit, String buttonRetake, j4 confirmCaptureTitle, String processingTitle, String processingDescription, Map idClassToName, j4 chooseCaptureMethodTitle, j4 chooseCaptureMethodBody, String chooseCaptureMethodCameraButton, String chooseCaptureMethodUploadButton, Map reviewSelectedImageTitle, Map reviewSelectedImageBody, String reviewSelectedImageConfirmButton, String reviewSelectedImageChooseAnotherButton, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14, String str15, String str16, String str17, String str18, String str19, String str20, String str21, String str22, String str23, String str24, String str25, String str26, String str27, String str28, String str29, String str30, String str31, String str32, List list) {
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(choose, "choose");
                Intrinsics.checkNotNullParameter(instructionsDisclaimer, "instructionsDisclaimer");
                Intrinsics.checkNotNullParameter(captureScreenTitle, "captureScreenTitle");
                Intrinsics.checkNotNullParameter(scanInstructions, "scanInstructions");
                Intrinsics.checkNotNullParameter(capturing, "capturing");
                Intrinsics.checkNotNullParameter(confirmCapture, "confirmCapture");
                Intrinsics.checkNotNullParameter(captureDisclaimer, "captureDisclaimer");
                Intrinsics.checkNotNullParameter(buttonSubmit, "buttonSubmit");
                Intrinsics.checkNotNullParameter(buttonRetake, "buttonRetake");
                Intrinsics.checkNotNullParameter(confirmCaptureTitle, "confirmCaptureTitle");
                Intrinsics.checkNotNullParameter(processingTitle, "processingTitle");
                Intrinsics.checkNotNullParameter(processingDescription, "processingDescription");
                Intrinsics.checkNotNullParameter(idClassToName, "idClassToName");
                Intrinsics.checkNotNullParameter(chooseCaptureMethodTitle, "chooseCaptureMethodTitle");
                Intrinsics.checkNotNullParameter(chooseCaptureMethodBody, "chooseCaptureMethodBody");
                Intrinsics.checkNotNullParameter(chooseCaptureMethodCameraButton, "chooseCaptureMethodCameraButton");
                Intrinsics.checkNotNullParameter(chooseCaptureMethodUploadButton, "chooseCaptureMethodUploadButton");
                Intrinsics.checkNotNullParameter(reviewSelectedImageTitle, "reviewSelectedImageTitle");
                Intrinsics.checkNotNullParameter(reviewSelectedImageBody, "reviewSelectedImageBody");
                Intrinsics.checkNotNullParameter(reviewSelectedImageConfirmButton, "reviewSelectedImageConfirmButton");
                Intrinsics.checkNotNullParameter(reviewSelectedImageChooseAnotherButton, "reviewSelectedImageChooseAnotherButton");
                this.f21948a = title;
                this.f21950b = prompt;
                this.f21952c = choose;
                this.f21954d = instructionsDisclaimer;
                this.f21956e = captureScreenTitle;
                this.f21957f = scanInstructions;
                this.f21958g = capturing;
                this.f21959h = confirmCapture;
                this.f21960i = captureDisclaimer;
                this.f21961j = buttonSubmit;
                this.f21962k = buttonRetake;
                this.f21963l = confirmCaptureTitle;
                this.f21964m = processingTitle;
                this.f21965n = processingDescription;
                this.f21966o = idClassToName;
                this.f21967p = chooseCaptureMethodTitle;
                this.f21968q = chooseCaptureMethodBody;
                this.f21969r = chooseCaptureMethodCameraButton;
                this.f21970s = chooseCaptureMethodUploadButton;
                this.f21971t = reviewSelectedImageTitle;
                this.f21972u = reviewSelectedImageBody;
                this.f21973v = reviewSelectedImageConfirmButton;
                this.f21974w = reviewSelectedImageChooseAnotherButton;
                this.f21975x = str;
                this.f21976y = str2;
                this.f21977z = str3;
                this.A = str4;
                this.B = str5;
                this.C = str6;
                this.D = str7;
                this.E = str8;
                this.F = str9;
                this.G = str10;
                this.H = str11;
                this.I = str12;
                this.J = str13;
                this.K = str14;
                this.L = str15;
                this.M = str16;
                this.N = str17;
                this.O = str18;
                this.P = str19;
                this.Q = str20;
                this.R = str21;
                this.S = str22;
                this.T = str23;
                this.U = str24;
                this.V = str25;
                this.W = str26;
                this.X = str27;
                this.Y = str28;
                this.Z = str29;
                this.f21949a0 = str30;
                this.f21951b0 = str31;
                this.f21953c0 = str32;
                this.f21955d0 = list;
            }

            public final String A() {
                return this.S;
            }

            public final String B() {
                return this.R;
            }

            public final String C() {
                return this.Q;
            }

            public final String D() {
                return this.Z;
            }

            public final String E() {
                return this.X;
            }

            public final String F() {
                return this.W;
            }

            public final Map G() {
                return this.f21966o;
            }

            public final String H() {
                return this.P;
            }

            public final String I() {
                return this.O;
            }

            public final String J() {
                return this.N;
            }

            public final String K() {
                return this.M;
            }

            public final String L() {
                return this.f21954d;
            }

            public final List M() {
                return this.f21955d0;
            }

            public final String N() {
                return this.f21951b0;
            }

            public final String O() {
                return this.f21949a0;
            }

            public final String P() {
                return this.D;
            }

            public final String Q() {
                return this.E;
            }

            public final String R() {
                return this.C;
            }

            public final String S() {
                return this.B;
            }

            public final String T() {
                return this.f21965n;
            }

            public final String U() {
                return this.f21964m;
            }

            public final String V() {
                return this.f21950b;
            }

            public final Map W() {
                return this.f21972u;
            }

            public final String X() {
                return this.f21974w;
            }

            public final String Y() {
                return this.f21973v;
            }

            public final Map Z() {
                return this.f21971t;
            }

            public final String a() {
                return this.f21953c0;
            }

            public final j4 a0() {
                return this.f21957f;
            }

            public final String b() {
                return this.L;
            }

            public final String b0() {
                return this.f21948a;
            }

            public final String c() {
                return this.K;
            }

            public final String c0() {
                return this.V;
            }

            public final String d() {
                return this.J;
            }

            public final String d0() {
                return this.U;
            }

            public final String e() {
                return this.I;
            }

            public final String f() {
                return this.f21962k;
            }

            public final String g() {
                return this.f21961j;
            }

            public final String h() {
                return this.f21977z;
            }

            public final String i() {
                return this.A;
            }

            public final String j() {
                return this.f21976y;
            }

            public final String k() {
                return this.f21975x;
            }

            public final String l() {
                return this.f21960i;
            }

            public final j4 m() {
                return this.f21956e;
            }

            public final String n() {
                return this.f21958g;
            }

            public final String o() {
                return this.f21952c;
            }

            public final j4 p() {
                return this.f21968q;
            }

            public final String q() {
                return this.f21969r;
            }

            public final j4 r() {
                return this.f21967p;
            }

            public final String s() {
                return this.f21970s;
            }

            public final j4 t() {
                return this.f21959h;
            }

            public final j4 u() {
                return this.f21963l;
            }

            public final String v() {
                return this.Y;
            }

            public final String w() {
                return this.H;
            }

            public final String x() {
                return this.F;
            }

            public final String y() {
                return this.G;
            }

            public final String z() {
                return this.T;
            }
        }

        public a(String sessionToken, String str, List enabledIdClasses, String inquiryId, String fromStep, String fromComponent, boolean z10, boolean z11, List enabledCaptureOptionsNativeMobile, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, C0293a strings, int i10, String fieldKeyDocument, String fieldKeyIdClass, long j10, boolean z12, Integer num, VideoCaptureConfig videoCaptureConfig, NextStep.GovernmentId.AssetConfig assetConfig, boolean z13, fo.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, jo.a aVar) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(enabledIdClasses, "enabledIdClasses");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(enabledCaptureOptionsNativeMobile, "enabledCaptureOptionsNativeMobile");
            Intrinsics.checkNotNullParameter(strings, "strings");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            Intrinsics.checkNotNullParameter(fieldKeyIdClass, "fieldKeyIdClass");
            Intrinsics.checkNotNullParameter(videoCaptureConfig, "videoCaptureConfig");
            Intrinsics.checkNotNullParameter(assetConfig, "assetConfig");
            Intrinsics.checkNotNullParameter(autoClassificationConfig, "autoClassificationConfig");
            Intrinsics.checkNotNullParameter(reviewCaptureButtonsAxis, "reviewCaptureButtonsAxis");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f21924a = sessionToken;
            this.f21925b = str;
            this.f21926c = enabledIdClasses;
            this.f21927d = inquiryId;
            this.f21928e = fromStep;
            this.f21929f = fromComponent;
            this.f21930g = z10;
            this.f21931h = z11;
            this.f21932i = enabledCaptureOptionsNativeMobile;
            this.f21933j = governmentIdStepStyle;
            this.f21934k = strings;
            this.f21935l = i10;
            this.f21936m = fieldKeyDocument;
            this.f21937n = fieldKeyIdClass;
            this.f21938o = j10;
            this.f21939p = z12;
            this.f21940q = num;
            this.f21941r = videoCaptureConfig;
            this.f21942s = assetConfig;
            this.f21943t = z13;
            this.f21944u = autoClassificationConfig;
            this.f21945v = reviewCaptureButtonsAxis;
            this.f21946w = pendingPageTextVerticalPosition;
            this.f21947x = aVar;
        }

        public final NextStep.GovernmentId.AssetConfig a() {
            return this.f21942s;
        }

        public final fo.a b() {
            return this.f21944u;
        }

        public final boolean c() {
            return this.f21930g;
        }

        public final boolean d() {
            return this.f21931h;
        }

        public final String e() {
            return this.f21925b;
        }

        public final List f() {
            return this.f21932i;
        }

        public final List g() {
            return this.f21926c;
        }

        public final String h() {
            return this.f21936m;
        }

        public final String i() {
            return this.f21937n;
        }

        public final String j() {
            return this.f21929f;
        }

        public final String k() {
            return this.f21928e;
        }

        public final boolean l() {
            if (this.f21932i.size() > 1) {
                return true;
            }
            return false;
        }

        public final int m() {
            return this.f21935l;
        }

        public final String n() {
            return this.f21927d;
        }

        public final long o() {
            return this.f21938o;
        }

        public final PendingPageTextPosition p() {
            return this.f21946w;
        }

        public final StyleElements.Axis q() {
            return this.f21945v;
        }

        public final String r() {
            return this.f21924a;
        }

        public final boolean s() {
            return this.f21939p;
        }

        public final C0293a t() {
            return this.f21934k;
        }

        public final StepStyles.GovernmentIdStepStyle u() {
            return this.f21933j;
        }

        public final VideoCaptureConfig v() {
            return this.f21941r;
        }

        public final boolean w() {
            return this.f21943t;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f21978a = new a();

            private a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1411335115;
            }

            public String toString() {
                return "Back";
            }
        }

        /* renamed from: eo.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0294b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0294b f21979a = new C0294b();

            private C0294b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0294b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1649914237;
            }

            public String toString() {
                return "Canceled";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends b {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f21980a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f21980a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f21980a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final d f21981a = new d();

            private d() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1099427158;
            }

            public String toString() {
                return "Finished";
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21982a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f21714o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f21715p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f21716q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[c4.e.f21717r.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[c4.e.f21718s.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f21982a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21983d;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f21983d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.m mVar = pn.m.f46282a;
                Context context = g3.this.f21911a;
                this.f21983d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            g3.this.f21923m.a();
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21985d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f21986e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ g3 f21987i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(k.a aVar, g3 g3Var, Continuation continuation) {
            super(2, continuation);
            this.f21986e = aVar;
            this.f21987i = g3Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3 g3Var, r.c cVar) {
            g3Var.Z0(cVar);
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f21986e, this.f21987i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f21985d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f21986e.c();
                final g3 g3Var = this.f21987i;
                d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.h3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = g3.e.k(g3.this, (r.c) obj2);
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
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21988d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f21989e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1 f21990i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3 f21991o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ k.a f21992p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(a aVar, n1 n1Var, g3 g3Var, k.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f21989e = aVar;
            this.f21990i = n1Var;
            this.f21991o = g3Var;
            this.f21992p = aVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f21989e, this.f21990i, this.f21991o, this.f21992p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f21988d == 0) {
                kotlin.c.b(obj);
                if (this.f21989e.g().size() == 1) {
                    n1 n1Var = this.f21990i;
                    g3 g3Var = this.f21991o;
                    k.a aVar = this.f21992p;
                    a aVar2 = this.f21989e;
                    g3.W0(n1Var, g3Var, aVar, aVar2, (c4) CollectionsKt.o0(aVar2.g()), false);
                }
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g extends AdaptedFunctionReference implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n1 f21993d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g3 f21994e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f21995i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ a f21996o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(n1 n1Var, g3 g3Var, k.a aVar, a aVar2) {
            super(1, Intrinsics.Kotlin.class, "selectIdClass", "renderScreen$selectIdClass(Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdState;Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdWorkflow;Lcom/squareup/workflow1/StatefulWorkflow$RenderContext;Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdWorkflow$Input;Lcom/withpersona/sdk2/inquiry/governmentid/IdConfig;Z)V", 0);
            this.f21993d = n1Var;
            this.f21994e = g3Var;
            this.f21995i = aVar;
            this.f21996o = aVar2;
        }

        public final void a(c4 p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            g3.X0(this.f21993d, this.f21994e, this.f21995i, this.f21996o, p02, false, 32, null);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c4) obj);
            return Unit.f32464a;
        }
    }

    public g3(Context applicationContext, v4.h imageLoader, f.a submitVerificationWorkerFactory, a0 documentSelectWorker, mo.j localVideoCaptureRenderer, mo.s webRtcRenderer, go.m0 captureRenderer, AutoClassifyWorker.b autoClassifyWorkerFactory, fo.o autoClassificationRenderer, un.a cameraStatsManager, up.b navigationStateManager, qp.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(submitVerificationWorkerFactory, "submitVerificationWorkerFactory");
        Intrinsics.checkNotNullParameter(documentSelectWorker, "documentSelectWorker");
        Intrinsics.checkNotNullParameter(localVideoCaptureRenderer, "localVideoCaptureRenderer");
        Intrinsics.checkNotNullParameter(webRtcRenderer, "webRtcRenderer");
        Intrinsics.checkNotNullParameter(captureRenderer, "captureRenderer");
        Intrinsics.checkNotNullParameter(autoClassifyWorkerFactory, "autoClassifyWorkerFactory");
        Intrinsics.checkNotNullParameter(autoClassificationRenderer, "autoClassificationRenderer");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f21911a = applicationContext;
        this.f21912b = imageLoader;
        this.f21913c = submitVerificationWorkerFactory;
        this.f21914d = documentSelectWorker;
        this.f21915e = localVideoCaptureRenderer;
        this.f21916f = webRtcRenderer;
        this.f21917g = captureRenderer;
        this.f21918h = autoClassifyWorkerFactory;
        this.f21919i = autoClassificationRenderer;
        this.f21920j = cameraStatsManager;
        this.f21921k = navigationStateManager;
        this.f21922l = externalEventLogger;
        this.f21923m = new mo.k(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(g3 g3Var, r.c action) {
        n1.l lVar;
        mo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (g3Var.f21923m.d()) {
                tVar = mo.t.f38933e;
            } else {
                tVar = mo.t.f38934i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(wm.h hVar) {
        hVar.d(b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(k.a aVar, g3 g3Var, final n1 n1Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = g3.D0(n1.this, (r.c) obj);
                return D0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.g.u((n1.g) n1Var, null, null, null, null, null, 0, null, null, null, false, null, 1791, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(a aVar, n1 n1Var, k.a aVar2, g3 g3Var) {
        x4.g(aVar, (n1.h) n1Var, aVar2, g3Var.f21923m);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f21923m);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f21923m);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(k.a aVar) {
        b4.t(aVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(k.a aVar, g3 g3Var, final n1 n1Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.i2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J0;
                J0 = g3.J0(n1.this, (r.c) obj);
                return J0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.i.u((n1.i) n1Var, null, null, null, null, null, null, 0, null, null, null, false, null, 3583, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r K0(final g3 g3Var, final k.a aVar, final f.b it) {
        wm.r d10;
        final String string;
        wm.r d11;
        wm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof f.b.c) {
            d12 = wm.z.d(g3Var, null, new Function1() { // from class: eo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L0;
                    L0 = g3.L0(g3.this, aVar, (r.c) obj);
                    return L0;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof f.b.C0472b) {
            f.b.C0472b c0472b = (f.b.C0472b) it;
            if (c0472b.a() instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) {
                string = g3Var.f21911a.getString(ep.e.f22499p, Integer.valueOf(((GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) c0472b.a()).getDetails().getMinDimensionSize()));
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            } else {
                string = g3Var.f21911a.getString(ep.e.f22500q);
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            }
            d11 = wm.z.d(g3Var, null, new Function1() { // from class: eo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = g3.M0(string, (r.c) obj);
                    return M0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof f.b.a) {
            d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = g3.N0(f.b.this, g3Var, aVar, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L0(g3 g3Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.Y0(aVar, b.d.f21981a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        if (e10 != null) {
            action.e(e10.c(str));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(f.b bVar, g3 g3Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        f.b.a aVar2 = (f.b.a) bVar;
        if (aVar2.a().isRecoverable() && e10 != null) {
            String string = g3Var.f21911a.getString(ep.e.f22507x);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            action.e(e10.c(string));
        } else {
            g3Var.Y0(aVar, new b.c(aVar2.a()));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f21923m);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(g3 g3Var, k.a aVar) {
        g3Var.Y0(aVar, b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(g3 g3Var, k.a aVar) {
        g3Var.Y0(aVar, b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(k.a aVar) {
        b4.t(aVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(k.a aVar, g3 g3Var, final n1 n1Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit T0;
                T0 = g3.T0(n1.this, (r.c) obj);
                return T0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.j.p((n1.j) n1Var, null, null, null, null, 0, null, null, null, 127, null));
        return Unit.f32464a;
    }

    private static final wm.r U0(h4.a aVar, final n1 n1Var, g3 g3Var, String str, final String str2) {
        wm.r d10;
        final d0.b bVar = new d0.b(CollectionsKt.e(new c0(str, null, 2, null)), b4.W(aVar.a()), r.b(((n1.c) n1Var).q()), d0.a.f21725i, null, null, 32, null);
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.v2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit V0;
                V0 = g3.V0(n1.this, bVar, str2, (r.c) obj);
                return V0;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(n1 n1Var, d0.b bVar, String str, r.c action) {
        n1.c cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.c) {
            cVar = (n1.c) c10;
        } else {
            cVar = null;
        }
        if (cVar == null) {
            return Unit.f32464a;
        }
        n1.c cVar2 = cVar;
        n1.c cVar3 = (n1.c) n1Var;
        action.e(new n1.i(cVar3.g(), cVar3.m(), cVar3.q(), bVar, str, cVar2.k(), cVar2.j(), b4.w(action, false, 1, null), null, null, false, cVar3.f(), 1792, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void W0(n1 n1Var, g3 g3Var, k.a aVar, a aVar2, c4 c4Var, boolean z10) {
        b4.Q((n1.j) n1Var, aVar, aVar2, null, c4Var, g3Var.f21923m, new pn.v(null, null, null, 0, 15, null), z10, c4Var.b(), 0, null, null, 3584, null);
    }

    static /* synthetic */ void X0(n1 n1Var, g3 g3Var, k.a aVar, a aVar2, c4 c4Var, boolean z10, int i10, Object obj) {
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        W0(n1Var, g3Var, aVar, aVar2, c4Var, z10);
    }

    private final String Y(a.C0293a c0293a, c4.e eVar, String str, String str2) {
        String a10 = c0293a.p().a(str2, str, eVar);
        if (a10 == null) {
            String string = this.f21911a.getString(ep.e.f22497n);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return a10;
    }

    private final void Y0(k.a aVar, b bVar) {
        b4.U(aVar, bVar, this.f21923m);
    }

    private final String Z(a.C0293a c0293a, c4.e eVar, String str, String str2) {
        String a10 = c0293a.r().a(str2, str, eVar);
        if (a10 == null) {
            String string = this.f21911a.getString(ep.e.f22498o);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Z0(r.c cVar) {
        cVar.d(new b.c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    private final String a0(a.C0293a c0293a, c4.e eVar, String str, String str2) {
        String a10 = c0293a.u().a(str2, str, eVar);
        if (a10 == null) {
            return "";
        }
        return a10;
    }

    private final String b0(a.C0293a c0293a, c4.e eVar) {
        String str = (String) c0293a.W().get(eVar);
        if (str == null) {
            String string = this.f21911a.getString(ep.e.f22501r);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return str;
    }

    private final boolean b1(n1 n1Var) {
        if (!(n1Var instanceof n1.d) && !(n1Var instanceof n1.f) && !(n1Var instanceof n1.l) && !(n1Var instanceof n1.e)) {
            if (!(n1Var instanceof n1.c) && !(n1Var instanceof n1.i) && !(n1Var instanceof n1.j) && !(n1Var instanceof n1.k) && !(n1Var instanceof n1.g) && !(n1Var instanceof n1.a) && !(n1Var instanceof n1.b)) {
                throw new lr.p();
            }
            return false;
        }
        return true;
    }

    private final String c0(a.C0293a c0293a, c4.e eVar) {
        String str = (String) c0293a.Z().get(eVar);
        if (str == null) {
            String string = this.f21911a.getString(ep.e.f22502s);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return str;
    }

    private final wp.k c1(Object obj, n1 n1Var) {
        wp.j jVar;
        if (n1Var.i()) {
            jVar = wp.j.f52630e;
        } else {
            jVar = wp.j.f52629d;
        }
        return new wp.k(obj, jVar);
    }

    private final String d0(n1 n1Var) {
        if (!(n1Var instanceof n1.d) && !(n1Var instanceof n1.g) && !(n1Var instanceof n1.l) && !(n1Var instanceof n1.e) && !(n1Var instanceof n1.f)) {
            if (!(n1Var instanceof n1.c) && !(n1Var instanceof n1.i) && !(n1Var instanceof n1.j) && !(n1Var instanceof n1.k) && !(n1Var instanceof n1.a) && !(n1Var instanceof n1.b)) {
                throw new lr.p();
            }
            return null;
        }
        return "camera_screen";
    }

    private final ym.n f0(Object obj, String str) {
        return new ym.n(obj, str);
    }

    private final Object h0(final a aVar, final n1 n1Var, final k.a aVar2) {
        qp.h c0582h;
        RemoteImage idFrontPictograph;
        RemoteImage remoteImage;
        int i10;
        final wm.h hVar = new wm.h() { // from class: eo.t1
            @Override // wm.h
            public final void d(Object obj) {
                g3.s0(k.a.this, this, (g3.b) obj);
            }
        };
        this.f21921k.c(aVar.c(), aVar.d(), aVar.w() && !(n1Var instanceof n1.k));
        qp.c cVar = this.f21922l;
        String k10 = aVar.k();
        boolean z10 = n1Var instanceof n1.a;
        if (z10) {
            c0582h = h.a.f48031a;
        } else if (n1Var instanceof n1.b) {
            c0582h = h.b.f48032a;
        } else if (n1Var instanceof n1.j) {
            c0582h = h.g.f48037a;
        } else if (n1Var instanceof n1.c) {
            c0582h = new h.f(((n1.c) n1Var).j());
        } else if (!(n1Var instanceof n1.l) && !(n1Var instanceof n1.d) && !(n1Var instanceof n1.e) && !(n1Var instanceof n1.f)) {
            if (n1Var instanceof n1.g) {
                c0582h = new h.c(((n1.g) n1Var).j());
            } else if (n1Var instanceof n1.i) {
                c0582h = new h.d(((n1.i) n1Var).j());
            } else if (n1Var instanceof n1.k) {
                c0582h = h.e.f48035a;
            } else {
                throw new lr.p();
            }
        } else {
            c0582h = new h.C0582h(n1Var.j());
        }
        cVar.c(new i.c(k10, c0582h));
        if (n1Var instanceof n1.j) {
            aVar2.a("check_if_single_id_class", new f(aVar, n1Var, this, aVar2, null));
            String b02 = aVar.t().b0();
            String V = aVar.t().V();
            String o10 = aVar.t().o();
            String L = aVar.t().L();
            List H = b4.H(aVar);
            g gVar = new g(n1Var, this, aVar2, aVar);
            NextStep.GovernmentId.AssetConfig.SelectPage selectPage = aVar.a().getSelectPage();
            return new f5.c(b02, V, o10, L, H, this.f21921k.b(), gVar, aVar.u(), selectPage, aVar.w(), new Function0() { // from class: eo.v1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit O0;
                    O0 = g3.O0(k.a.this, this);
                    return O0;
                }
            }, new Function0() { // from class: eo.y1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit R0;
                    R0 = g3.R0(k.a.this);
                    return R0;
                }
            }, ((n1.j) n1Var).q(), new Function0() { // from class: eo.z1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit S0;
                    S0 = g3.S0(k.a.this, this, n1Var);
                    return S0;
                }
            });
        } else if (n1Var instanceof n1.c) {
            n1.c cVar2 = (n1.c) n1Var;
            final h4.a g10 = cVar2.g();
            if (cVar2.r()) {
                wm.w.l(aVar2, this.f21914d, Reflection.typeOf(a0.class), "", new Function1() { // from class: eo.a2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r i02;
                        i02 = g3.i0(g3.this, g10, n1Var, (a0.a) obj);
                        return i02;
                    }
                });
            }
            NextStep.GovernmentId.AssetConfig.PromptPage promptPage = aVar.a().getPromptPage();
            List f10 = aVar.f();
            String Z = Z(aVar.t(), g10.a(), r.b(cVar2.q()), cVar2.f());
            String Y = Y(aVar.t(), g10.a(), r.b(cVar2.q()), cVar2.f());
            String q10 = aVar.t().q();
            String s10 = aVar.t().s();
            up.a b10 = this.f21921k.b();
            Function0 function0 = new Function0() { // from class: eo.b2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k02;
                    k02 = g3.k0(k.a.this, this, n1Var, aVar);
                    return k02;
                }
            };
            Function0 function02 = new Function0() { // from class: eo.c2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit o02;
                    o02 = g3.o0(k.a.this, this, n1Var);
                    return o02;
                }
            };
            Function0 function03 = new Function0() { // from class: eo.d2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q02;
                    q02 = g3.q0(k.a.this, this);
                    return q02;
                }
            };
            Function0 function04 = new Function0() { // from class: eo.f2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r02;
                    r02 = g3.r0(k.a.this);
                    return r02;
                }
            };
            String t10 = cVar2.t();
            Function0 function05 = new Function0() { // from class: eo.g2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u02;
                    u02 = g3.u0(k.a.this, this, n1Var);
                    return u02;
                }
            };
            StepStyles.GovernmentIdStepStyle u10 = aVar.u();
            c4.e a10 = cVar2.g().a();
            int[] iArr = c.f21982a;
            int i11 = iArr[a10.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 != 5) {
                                throw new lr.p();
                            }
                            if (promptPage != null) {
                                idFrontPictograph = promptPage.getPassportSignaturePictograph();
                                remoteImage = idFrontPictograph;
                            }
                        } else if (promptPage != null) {
                            idFrontPictograph = promptPage.getBarcodePdf417Pictograph();
                            remoteImage = idFrontPictograph;
                        }
                    }
                    remoteImage = null;
                } else {
                    if (promptPage != null) {
                        idFrontPictograph = promptPage.getIdBackPictograph();
                        remoteImage = idFrontPictograph;
                    }
                    remoteImage = null;
                }
            } else if (r.a(cVar2.q()) == lo.e.f36998u) {
                if (promptPage != null) {
                    idFrontPictograph = promptPage.getPassportFrontPictograph();
                    remoteImage = idFrontPictograph;
                }
                remoteImage = null;
            } else {
                if (promptPage != null) {
                    idFrontPictograph = promptPage.getIdFrontPictograph();
                    remoteImage = idFrontPictograph;
                }
                remoteImage = null;
            }
            int i12 = iArr[cVar2.g().a().ordinal()];
            if (i12 != 1) {
                if (i12 != 2 && i12 != 4) {
                    i10 = o4.f22307e;
                } else {
                    i10 = o4.f22306d;
                }
            } else if (r.a(cVar2.q()) == lo.e.f36998u) {
                i10 = o4.f22308f;
            } else {
                i10 = o4.f22307e;
            }
            return new y(f10, Z, Y, q10, s10, b10, function0, function02, function03, function04, t10, function05, u10, remoteImage, i10);
        } else if (n1Var instanceof n1.l) {
            return this.f21917g.b0(aVar, (n1.l) n1Var, aVar2, this.f21923m, hVar);
        } else {
            if (n1Var instanceof n1.d) {
                return this.f21917g.Q(aVar, (n1.d) n1Var, aVar2, this.f21923m, hVar);
            }
            if (n1Var instanceof n1.g) {
                n1.g gVar2 = (n1.g) n1Var;
                final q p10 = gVar2.p();
                c4.c d10 = r.d(p10, gVar2.g().a());
                c0 c0Var = (c0) CollectionsKt.o0(gVar2.r().i2());
                if (gVar2.w()) {
                    x4.i(aVar, (n1.h) n1Var, aVar2, this.f21923m, this.f21918h);
                }
                return new cn.d(cp.l1.c(new f5.e(this.f21912b, b4.G(aVar.t(), gVar2.g().a(), r.b(gVar2.p()), gVar2.f()), aVar.t().l(), d10.c(), c0Var.a(), gVar2.g().a(), r.a(p10), this.f21921k.b(), new Function0() { // from class: eo.e2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit w02;
                        w02 = g3.w0(g3.a.this, n1Var, aVar2, this);
                        return w02;
                    }
                }, aVar.t().g(), new Function0() { // from class: eo.p2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit x02;
                        x02 = g3.x0(k.a.this, this, n1Var, aVar, p10);
                        return x02;
                    }
                }, aVar.t().f(), a0(aVar.t(), gVar2.g().a(), r.b(gVar2.p()), gVar2.f()), new Function0() { // from class: eo.z2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit B0;
                        B0 = g3.B0(wm.h.this);
                        return B0;
                    }
                }, aVar.u(), gVar2.v(), new Function0() { // from class: eo.a3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit C0;
                        C0 = g3.C0(k.a.this, this, n1Var);
                        return C0;
                    }
                }, aVar.a().getCapturePage(), aVar.w() && !gVar2.w(), gVar2.w(), aVar.q())), null, 2, null);
            } else if (n1Var instanceof n1.i) {
                n1.i iVar = (n1.i) n1Var;
                h4.a g11 = iVar.g();
                if (iVar.y()) {
                    x4.i(aVar, (n1.h) n1Var, aVar2, this.f21923m, this.f21918h);
                }
                return new e5(this.f21912b, c0(aVar.t(), g11.a()), b0(aVar.t(), g11.a()), aVar.t().Y(), aVar.t().X(), ((c0) CollectionsKt.o0(iVar.r().i2())).a(), ((c0) CollectionsKt.o0(iVar.r().i2())).b(), iVar.w(), this.f21921k.b(), new Function0() { // from class: eo.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit E0;
                        E0 = g3.E0(g3.a.this, n1Var, aVar2, this);
                        return E0;
                    }
                }, new Function0() { // from class: eo.c3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit F0;
                        F0 = g3.F0(k.a.this, this);
                        return F0;
                    }
                }, new Function0() { // from class: eo.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit G0;
                        G0 = g3.G0(k.a.this, this);
                        return G0;
                    }
                }, new Function0() { // from class: eo.e3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit H0;
                        H0 = g3.H0(k.a.this);
                        return H0;
                    }
                }, iVar.v(), new Function0() { // from class: eo.f3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit I0;
                        I0 = g3.I0(k.a.this, this, n1Var);
                        return I0;
                    }
                }, aVar.u(), iVar.y());
            } else if (n1Var instanceof n1.k) {
                n1.k kVar = (n1.k) n1Var;
                wm.w.l(aVar2, this.f21913c.a(aVar.r(), aVar.n(), aVar.j(), aVar.k(), kVar.p(), kVar.q(), kVar.o()), Reflection.typeOf(lo.f.class), "", new Function1() { // from class: eo.u1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        wm.r K0;
                        K0 = g3.K0(g3.this, aVar2, (f.b) obj);
                        return K0;
                    }
                });
                up.b.d(this.f21921k, false, false, false, 4, null);
                return new f5.f(aVar.t().U(), aVar.t().T(), aVar.u(), aVar.a().getPendingPage(), this.f21921k.b(), new Function0() { // from class: eo.w1
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit P0;
                        P0 = g3.P0(g3.this, aVar2);
                        return P0;
                    }
                }, new Function0() { // from class: eo.x1
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q0;
                        Q0 = g3.Q0(g3.this, aVar2);
                        return Q0;
                    }
                }, aVar.p());
            } else if (n1Var instanceof n1.e) {
                return this.f21915e.i(aVar, (n1.e) n1Var, aVar2, this.f21923m);
            } else {
                if (n1Var instanceof n1.f) {
                    return this.f21916f.h(aVar, (n1.f) n1Var, aVar2, this.f21923m);
                }
                if (z10) {
                    return this.f21919i.n(aVar, (n1.a) n1Var, aVar2, this.f21923m);
                }
                if (n1Var instanceof n1.b) {
                    return this.f21919i.t(aVar, (n1.b) n1Var, aVar2, this.f21923m);
                }
                throw new lr.p();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r i0(g3 g3Var, h4.a aVar, final n1 n1Var, a0.a it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a0.a.b) {
            a0.a.b bVar = (a0.a.b) it;
            return U0(aVar, n1Var, g3Var, bVar.a(), bVar.b());
        } else if (Intrinsics.areEqual(it, a0.a.C0285a.f21653a)) {
            d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit j02;
                    j02 = g3.j0(n1.this, (r.c) obj);
                    return j02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.c.p((n1.c) n1Var, null, null, null, 0, null, null, false, null, null, 447, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(final k.a aVar, final g3 g3Var, final n1 n1Var, final a aVar2) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.r2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l02;
                l02 = g3.l0(n1.this, aVar2, aVar, g3Var, (r.c) obj);
                return l02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(n1 n1Var, a aVar, final k.a aVar2, final g3 g3Var, r.c action) {
        n1.c cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.c) {
            cVar = (n1.c) c10;
        } else {
            cVar = null;
        }
        if (cVar == null) {
            return Unit.f32464a;
        }
        n1.c cVar2 = (n1.c) n1Var;
        action.e(new n1.l(cVar2.g(), cVar2.m(), cVar2.q(), b4.I(aVar, cVar2.g().a()), cVar.k(), cVar.j(), b4.w(action, false, 1, null), mo.t.f38934i, aVar.v().d(), null, false, false, cVar2.f(), null, new Function0() { // from class: eo.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m02;
                m02 = g3.m0(k.a.this, g3Var);
                return m02;
            }
        }, 11776, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, final g3 g3Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.y2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = g3.n0(g3.this, (r.c) obj);
                return n02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(g3 g3Var, r.c action) {
        n1.l lVar;
        mo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (g3Var.f21923m.d()) {
                tVar = mo.t.f38933e;
            } else {
                tVar = mo.t.f38934i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(k.a aVar, final g3 g3Var, final n1 n1Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.h2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p02;
                p02 = g3.p0(g3.this, n1Var, (r.c) obj);
                return p02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3 g3Var, n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.f21914d.e();
        action.e(n1.c.p((n1.c) n1Var, null, null, null, 0, null, null, true, null, null, 447, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f21923m);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(k.a aVar) {
        b4.t(aVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(final k.a aVar, final g3 g3Var, final b it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.o2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t02;
                t02 = g3.t0(g3.this, aVar, it, (r.c) obj);
                return t02;
            }
        }, 1, null);
        c10.d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(g3 g3Var, k.a aVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.Y0(aVar, bVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(k.a aVar, g3 g3Var, final n1 n1Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.t2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v02;
                v02 = g3.v0(n1.this, (r.c) obj);
                return v02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.c.p((n1.c) n1Var, null, null, null, 0, null, null, false, null, null, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(a aVar, n1 n1Var, k.a aVar2, g3 g3Var) {
        x4.g(aVar, (n1.h) n1Var, aVar2, g3Var.f21923m);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(final k.a aVar, final g3 g3Var, final n1 n1Var, final a aVar2, final q qVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.m2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y02;
                y02 = g3.y0(n1.this, aVar2, qVar, aVar, g3Var, (r.c) obj);
                return y02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(n1 n1Var, a aVar, q qVar, final k.a aVar2, final g3 g3Var, r.c action) {
        n1 n1Var2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1) {
            n1Var2 = (n1) c10;
        } else {
            n1Var2 = null;
        }
        if (n1Var2 == null) {
            return Unit.f32464a;
        }
        n1.g gVar = (n1.g) n1Var;
        n1.l lVar = new n1.l(gVar.g(), ((n1) action.c()).m(), qVar, b4.I((a) action.b(), gVar.g().a()), n1Var2.k(), n1Var2.j(), b4.v(action, false), mo.t.f38934i, aVar.v().d(), null, false, false, gVar.f(), null, new Function0() { // from class: eo.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit z02;
                z02 = g3.z0(k.a.this, g3Var);
                return z02;
            }
        }, 11776, null);
        lVar.n(true);
        action.e(lVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(k.a aVar, final g3 g3Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(g3Var, null, new Function1() { // from class: eo.x2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit A0;
                A0 = g3.A0(g3.this, (r.c) obj);
                return A0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    @Override // wm.k
    /* renamed from: a1 */
    public wm.i g(n1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return ym.s.a(state);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v13, types: [android.os.Parcelable, java.lang.Object] */
    @Override // wm.k
    /* renamed from: e0 */
    public n1 d(a props, wm.i iVar) {
        Intrinsics.checkNotNullParameter(props, "props");
        n1 n1Var = null;
        if (iVar != null) {
            ByteString b10 = iVar.b();
            if (b10.G() <= 0) {
                b10 = null;
            }
            if (b10 != null) {
                Parcel obtain = Parcel.obtain();
                Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
                byte[] L = b10.L();
                obtain.unmarshall(L, 0, L.length);
                obtain.setDataPosition(0);
                ?? readParcelable = obtain.readParcelable(wm.i.class.getClassLoader());
                Intrinsics.checkNotNull(readParcelable);
                Intrinsics.checkNotNullExpressionValue(readParcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
                n1Var = readParcelable;
            }
            n1Var = n1Var;
        }
        if (n1Var != null) {
            return n1Var;
        }
        if (props.b().c() && !this.f21923m.c(props)) {
            if (props.l()) {
                return new n1.c(new h4.a(c4.e.f21714o), CollectionsKt.l(), CollectionsKt.l(), 0, props.e(), new q.a(props.b()), false, null, null, 320, null);
            }
            return new n1.l(new h4.a(c4.e.f21714o), CollectionsKt.l(), new q.a(props.b()), f5.b.a.f21844e, CollectionsKt.l(), 0, null, mo.t.f38934i, props.v().d(), null, false, false, props.e(), null, null, 28160, null);
        }
        return new n1.j(null, null, null, null, 0, props.e(), null, null, 223, null);
    }

    @Override // wm.k
    /* renamed from: g0 */
    public Object f(a renderProps, n1 renderState, k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Object h02 = h0(renderProps, renderState, context);
        String d02 = d0(renderState);
        if (d02 != null) {
            h02 = f0(h02, d02);
        }
        if (!b1(renderState)) {
            context.a("close_camera", new d(null));
        }
        if (!this.f21923m.f(renderProps) && mp.f.e(this.f21911a)) {
            context.a("output_webrtc_error", new e(context, this, null));
        }
        return c1(h02, renderState);
    }
}
