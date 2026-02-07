package jo;

import android.content.Context;
import android.os.Parcel;
import bn.k;
import bn.r;
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
import java.util.List;
import java.util.Map;
import jo.a0;
import jo.c4;
import jo.d0;
import jo.f5;
import jo.g3;
import jo.h4;
import jo.n1;
import jo.q;
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
import okio.ByteString;
import qo.f;
import vp.h;
import vp.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g3 extends bn.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f30267a;

    /* renamed from: b  reason: collision with root package name */
    private final v4.h f30268b;

    /* renamed from: c  reason: collision with root package name */
    private final f.a f30269c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f30270d;

    /* renamed from: e  reason: collision with root package name */
    private final ro.j f30271e;

    /* renamed from: f  reason: collision with root package name */
    private final ro.s f30272f;

    /* renamed from: g  reason: collision with root package name */
    private final lo.m0 f30273g;

    /* renamed from: h  reason: collision with root package name */
    private final AutoClassifyWorker.b f30274h;

    /* renamed from: i  reason: collision with root package name */
    private final ko.o f30275i;

    /* renamed from: j  reason: collision with root package name */
    private final zn.a f30276j;

    /* renamed from: k  reason: collision with root package name */
    private final zp.b f30277k;

    /* renamed from: l  reason: collision with root package name */
    private final vp.c f30278l;

    /* renamed from: m  reason: collision with root package name */
    private final ro.k f30279m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f30280a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30281b;

        /* renamed from: c  reason: collision with root package name */
        private final List f30282c;

        /* renamed from: d  reason: collision with root package name */
        private final String f30283d;

        /* renamed from: e  reason: collision with root package name */
        private final String f30284e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30285f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f30286g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f30287h;

        /* renamed from: i  reason: collision with root package name */
        private final List f30288i;

        /* renamed from: j  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30289j;

        /* renamed from: k  reason: collision with root package name */
        private final C0428a f30290k;

        /* renamed from: l  reason: collision with root package name */
        private final int f30291l;

        /* renamed from: m  reason: collision with root package name */
        private final String f30292m;

        /* renamed from: n  reason: collision with root package name */
        private final String f30293n;

        /* renamed from: o  reason: collision with root package name */
        private final long f30294o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f30295p;

        /* renamed from: q  reason: collision with root package name */
        private final Integer f30296q;

        /* renamed from: r  reason: collision with root package name */
        private final VideoCaptureConfig f30297r;

        /* renamed from: s  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig f30298s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f30299t;

        /* renamed from: u  reason: collision with root package name */
        private final ko.a f30300u;

        /* renamed from: v  reason: collision with root package name */
        private final StyleElements.Axis f30301v;

        /* renamed from: w  reason: collision with root package name */
        private final PendingPageTextPosition f30302w;

        /* renamed from: x  reason: collision with root package name */
        private final oo.a f30303x;

        /* renamed from: jo.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0428a {
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
            private final String f30304a;

            /* renamed from: a0  reason: collision with root package name */
            private final String f30305a0;

            /* renamed from: b  reason: collision with root package name */
            private final String f30306b;

            /* renamed from: b0  reason: collision with root package name */
            private final String f30307b0;

            /* renamed from: c  reason: collision with root package name */
            private final String f30308c;

            /* renamed from: c0  reason: collision with root package name */
            private final String f30309c0;

            /* renamed from: d  reason: collision with root package name */
            private final String f30310d;

            /* renamed from: d0  reason: collision with root package name */
            private final List f30311d0;

            /* renamed from: e  reason: collision with root package name */
            private final j4 f30312e;

            /* renamed from: f  reason: collision with root package name */
            private final j4 f30313f;

            /* renamed from: g  reason: collision with root package name */
            private final String f30314g;

            /* renamed from: h  reason: collision with root package name */
            private final j4 f30315h;

            /* renamed from: i  reason: collision with root package name */
            private final String f30316i;

            /* renamed from: j  reason: collision with root package name */
            private final String f30317j;

            /* renamed from: k  reason: collision with root package name */
            private final String f30318k;

            /* renamed from: l  reason: collision with root package name */
            private final j4 f30319l;

            /* renamed from: m  reason: collision with root package name */
            private final String f30320m;

            /* renamed from: n  reason: collision with root package name */
            private final String f30321n;

            /* renamed from: o  reason: collision with root package name */
            private final Map f30322o;

            /* renamed from: p  reason: collision with root package name */
            private final j4 f30323p;

            /* renamed from: q  reason: collision with root package name */
            private final j4 f30324q;

            /* renamed from: r  reason: collision with root package name */
            private final String f30325r;

            /* renamed from: s  reason: collision with root package name */
            private final String f30326s;

            /* renamed from: t  reason: collision with root package name */
            private final Map f30327t;

            /* renamed from: u  reason: collision with root package name */
            private final Map f30328u;

            /* renamed from: v  reason: collision with root package name */
            private final String f30329v;

            /* renamed from: w  reason: collision with root package name */
            private final String f30330w;

            /* renamed from: x  reason: collision with root package name */
            private final String f30331x;

            /* renamed from: y  reason: collision with root package name */
            private final String f30332y;

            /* renamed from: z  reason: collision with root package name */
            private final String f30333z;

            public C0428a(String title, String prompt, String choose, String instructionsDisclaimer, j4 captureScreenTitle, j4 scanInstructions, String capturing, j4 confirmCapture, String captureDisclaimer, String buttonSubmit, String buttonRetake, j4 confirmCaptureTitle, String processingTitle, String processingDescription, Map idClassToName, j4 chooseCaptureMethodTitle, j4 chooseCaptureMethodBody, String chooseCaptureMethodCameraButton, String chooseCaptureMethodUploadButton, Map reviewSelectedImageTitle, Map reviewSelectedImageBody, String reviewSelectedImageConfirmButton, String reviewSelectedImageChooseAnotherButton, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14, String str15, String str16, String str17, String str18, String str19, String str20, String str21, String str22, String str23, String str24, String str25, String str26, String str27, String str28, String str29, String str30, String str31, String str32, List list) {
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
                this.f30304a = title;
                this.f30306b = prompt;
                this.f30308c = choose;
                this.f30310d = instructionsDisclaimer;
                this.f30312e = captureScreenTitle;
                this.f30313f = scanInstructions;
                this.f30314g = capturing;
                this.f30315h = confirmCapture;
                this.f30316i = captureDisclaimer;
                this.f30317j = buttonSubmit;
                this.f30318k = buttonRetake;
                this.f30319l = confirmCaptureTitle;
                this.f30320m = processingTitle;
                this.f30321n = processingDescription;
                this.f30322o = idClassToName;
                this.f30323p = chooseCaptureMethodTitle;
                this.f30324q = chooseCaptureMethodBody;
                this.f30325r = chooseCaptureMethodCameraButton;
                this.f30326s = chooseCaptureMethodUploadButton;
                this.f30327t = reviewSelectedImageTitle;
                this.f30328u = reviewSelectedImageBody;
                this.f30329v = reviewSelectedImageConfirmButton;
                this.f30330w = reviewSelectedImageChooseAnotherButton;
                this.f30331x = str;
                this.f30332y = str2;
                this.f30333z = str3;
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
                this.f30305a0 = str30;
                this.f30307b0 = str31;
                this.f30309c0 = str32;
                this.f30311d0 = list;
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
                return this.f30322o;
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
                return this.f30310d;
            }

            public final List M() {
                return this.f30311d0;
            }

            public final String N() {
                return this.f30307b0;
            }

            public final String O() {
                return this.f30305a0;
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
                return this.f30321n;
            }

            public final String U() {
                return this.f30320m;
            }

            public final String V() {
                return this.f30306b;
            }

            public final Map W() {
                return this.f30328u;
            }

            public final String X() {
                return this.f30330w;
            }

            public final String Y() {
                return this.f30329v;
            }

            public final Map Z() {
                return this.f30327t;
            }

            public final String a() {
                return this.f30309c0;
            }

            public final j4 a0() {
                return this.f30313f;
            }

            public final String b() {
                return this.L;
            }

            public final String b0() {
                return this.f30304a;
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
                return this.f30318k;
            }

            public final String g() {
                return this.f30317j;
            }

            public final String h() {
                return this.f30333z;
            }

            public final String i() {
                return this.A;
            }

            public final String j() {
                return this.f30332y;
            }

            public final String k() {
                return this.f30331x;
            }

            public final String l() {
                return this.f30316i;
            }

            public final j4 m() {
                return this.f30312e;
            }

            public final String n() {
                return this.f30314g;
            }

            public final String o() {
                return this.f30308c;
            }

            public final j4 p() {
                return this.f30324q;
            }

            public final String q() {
                return this.f30325r;
            }

            public final j4 r() {
                return this.f30323p;
            }

            public final String s() {
                return this.f30326s;
            }

            public final j4 t() {
                return this.f30315h;
            }

            public final j4 u() {
                return this.f30319l;
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

        public a(String sessionToken, String str, List enabledIdClasses, String inquiryId, String fromStep, String fromComponent, boolean z10, boolean z11, List enabledCaptureOptionsNativeMobile, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, C0428a strings, int i10, String fieldKeyDocument, String fieldKeyIdClass, long j10, boolean z12, Integer num, VideoCaptureConfig videoCaptureConfig, NextStep.GovernmentId.AssetConfig assetConfig, boolean z13, ko.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, oo.a aVar) {
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
            this.f30280a = sessionToken;
            this.f30281b = str;
            this.f30282c = enabledIdClasses;
            this.f30283d = inquiryId;
            this.f30284e = fromStep;
            this.f30285f = fromComponent;
            this.f30286g = z10;
            this.f30287h = z11;
            this.f30288i = enabledCaptureOptionsNativeMobile;
            this.f30289j = governmentIdStepStyle;
            this.f30290k = strings;
            this.f30291l = i10;
            this.f30292m = fieldKeyDocument;
            this.f30293n = fieldKeyIdClass;
            this.f30294o = j10;
            this.f30295p = z12;
            this.f30296q = num;
            this.f30297r = videoCaptureConfig;
            this.f30298s = assetConfig;
            this.f30299t = z13;
            this.f30300u = autoClassificationConfig;
            this.f30301v = reviewCaptureButtonsAxis;
            this.f30302w = pendingPageTextVerticalPosition;
            this.f30303x = aVar;
        }

        public final NextStep.GovernmentId.AssetConfig a() {
            return this.f30298s;
        }

        public final ko.a b() {
            return this.f30300u;
        }

        public final boolean c() {
            return this.f30286g;
        }

        public final boolean d() {
            return this.f30287h;
        }

        public final String e() {
            return this.f30281b;
        }

        public final List f() {
            return this.f30288i;
        }

        public final List g() {
            return this.f30282c;
        }

        public final String h() {
            return this.f30292m;
        }

        public final String i() {
            return this.f30293n;
        }

        public final String j() {
            return this.f30285f;
        }

        public final String k() {
            return this.f30284e;
        }

        public final boolean l() {
            if (this.f30288i.size() > 1) {
                return true;
            }
            return false;
        }

        public final int m() {
            return this.f30291l;
        }

        public final String n() {
            return this.f30283d;
        }

        public final long o() {
            return this.f30294o;
        }

        public final PendingPageTextPosition p() {
            return this.f30302w;
        }

        public final StyleElements.Axis q() {
            return this.f30301v;
        }

        public final String r() {
            return this.f30280a;
        }

        public final boolean s() {
            return this.f30295p;
        }

        public final C0428a t() {
            return this.f30290k;
        }

        public final StepStyles.GovernmentIdStepStyle u() {
            return this.f30289j;
        }

        public final VideoCaptureConfig v() {
            return this.f30297r;
        }

        public final boolean w() {
            return this.f30299t;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f30334a = new a();

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

        /* renamed from: jo.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0429b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0429b f30335a = new C0429b();

            private C0429b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0429b)) {
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
            private final InternalErrorInfo f30336a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f30336a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f30336a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final d f30337a = new d();

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
        public static final /* synthetic */ int[] f30338a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f30070o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f30071p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f30072q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[c4.e.f30073r.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[c4.e.f30074s.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f30338a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f30339d;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f30339d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.m mVar = un.m.f51792a;
                Context context = g3.this.f30267a;
                this.f30339d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            g3.this.f30279m.a();
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f30341d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f30342e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ g3 f30343i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(k.a aVar, g3 g3Var, Continuation continuation) {
            super(2, continuation);
            this.f30342e = aVar;
            this.f30343i = g3Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3 g3Var, r.c cVar) {
            g3Var.Z0(cVar);
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f30342e, this.f30343i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            wr.b.f();
            if (this.f30341d == 0) {
                kotlin.c.b(obj);
                bn.h c10 = this.f30342e.c();
                final g3 g3Var = this.f30343i;
                d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.h3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = g3.e.k(g3.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f30344d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f30345e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1 f30346i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3 f30347o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ k.a f30348p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(a aVar, n1 n1Var, g3 g3Var, k.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f30345e = aVar;
            this.f30346i = n1Var;
            this.f30347o = g3Var;
            this.f30348p = aVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f30345e, this.f30346i, this.f30347o, this.f30348p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f30344d == 0) {
                kotlin.c.b(obj);
                if (this.f30345e.g().size() == 1) {
                    n1 n1Var = this.f30346i;
                    g3 g3Var = this.f30347o;
                    k.a aVar = this.f30348p;
                    a aVar2 = this.f30345e;
                    g3.W0(n1Var, g3Var, aVar, aVar2, (c4) CollectionsKt.o0(aVar2.g()), false);
                }
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g extends AdaptedFunctionReference implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n1 f30349d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g3 f30350e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f30351i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ a f30352o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(n1 n1Var, g3 g3Var, k.a aVar, a aVar2) {
            super(1, Intrinsics.Kotlin.class, "selectIdClass", "renderScreen$selectIdClass(Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdState;Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdWorkflow;Lcom/squareup/workflow1/StatefulWorkflow$RenderContext;Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdWorkflow$Input;Lcom/withpersona/sdk2/inquiry/governmentid/IdConfig;Z)V", 0);
            this.f30349d = n1Var;
            this.f30350e = g3Var;
            this.f30351i = aVar;
            this.f30352o = aVar2;
        }

        public final void a(c4 p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            g3.X0(this.f30349d, this.f30350e, this.f30351i, this.f30352o, p02, false, 32, null);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c4) obj);
            return Unit.f32056a;
        }
    }

    public g3(Context applicationContext, v4.h imageLoader, f.a submitVerificationWorkerFactory, a0 documentSelectWorker, ro.j localVideoCaptureRenderer, ro.s webRtcRenderer, lo.m0 captureRenderer, AutoClassifyWorker.b autoClassifyWorkerFactory, ko.o autoClassificationRenderer, zn.a cameraStatsManager, zp.b navigationStateManager, vp.c externalEventLogger) {
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
        this.f30267a = applicationContext;
        this.f30268b = imageLoader;
        this.f30269c = submitVerificationWorkerFactory;
        this.f30270d = documentSelectWorker;
        this.f30271e = localVideoCaptureRenderer;
        this.f30272f = webRtcRenderer;
        this.f30273g = captureRenderer;
        this.f30274h = autoClassifyWorkerFactory;
        this.f30275i = autoClassificationRenderer;
        this.f30276j = cameraStatsManager;
        this.f30277k = navigationStateManager;
        this.f30278l = externalEventLogger;
        this.f30279m = new ro.k(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(g3 g3Var, r.c action) {
        n1.l lVar;
        ro.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (g3Var.f30279m.d()) {
                tVar = ro.t.f49079e;
            } else {
                tVar = ro.t.f49080i;
            }
            action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(bn.h hVar) {
        hVar.d(b.C0429b.f30335a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(k.a aVar, g3 g3Var, final n1 n1Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = g3.D0(n1.this, (r.c) obj);
                return D0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.g.x((n1.g) n1Var, null, null, null, null, null, 0, null, null, null, false, null, 1791, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(a aVar, n1 n1Var, k.a aVar2, g3 g3Var) {
        x4.g(aVar, (n1.h) n1Var, aVar2, g3Var.f30279m);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f30279m);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f30279m);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(k.a aVar) {
        b4.t(aVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(k.a aVar, g3 g3Var, final n1 n1Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.i2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J0;
                J0 = g3.J0(n1.this, (r.c) obj);
                return J0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.i.x((n1.i) n1Var, null, null, null, null, null, null, 0, null, null, null, false, null, 3583, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r K0(final g3 g3Var, final k.a aVar, final f.b it) {
        bn.r d10;
        final String string;
        bn.r d11;
        bn.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof f.b.c) {
            d12 = bn.z.d(g3Var, null, new Function1() { // from class: jo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L0;
                    L0 = g3.L0(g3.this, aVar, (r.c) obj);
                    return L0;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof f.b.C0607b) {
            f.b.C0607b c0607b = (f.b.C0607b) it;
            if (c0607b.a() instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) {
                string = g3Var.f30267a.getString(jp.e.f30855p, Integer.valueOf(((GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) c0607b.a()).getDetails().getMinDimensionSize()));
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            } else {
                string = g3Var.f30267a.getString(jp.e.f30856q);
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            }
            d11 = bn.z.d(g3Var, null, new Function1() { // from class: jo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = g3.M0(string, (r.c) obj);
                    return M0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof f.b.a) {
            d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = g3.N0(f.b.this, g3Var, aVar, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L0(g3 g3Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.Y0(aVar, b.d.f30337a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        if (e10 != null) {
            action.e(e10.c(str));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(f.b bVar, g3 g3Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        f.b.a aVar2 = (f.b.a) bVar;
        if (aVar2.a().isRecoverable() && e10 != null) {
            String string = g3Var.f30267a.getString(jp.e.f30863x);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            action.e(e10.c(string));
        } else {
            g3Var.Y0(aVar, new b.c(aVar2.a()));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f30279m);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(g3 g3Var, k.a aVar) {
        g3Var.Y0(aVar, b.C0429b.f30335a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(g3 g3Var, k.a aVar) {
        g3Var.Y0(aVar, b.C0429b.f30335a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(k.a aVar) {
        b4.t(aVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(k.a aVar, g3 g3Var, final n1 n1Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit T0;
                T0 = g3.T0(n1.this, (r.c) obj);
                return T0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.j.r((n1.j) n1Var, null, null, null, null, 0, null, null, null, 127, null));
        return Unit.f32056a;
    }

    private static final bn.r U0(h4.a aVar, final n1 n1Var, g3 g3Var, String str, final String str2) {
        bn.r d10;
        final d0.b bVar = new d0.b(CollectionsKt.e(new c0(str, null, 2, null)), b4.W(aVar.a()), r.b(((n1.c) n1Var).t()), d0.a.f30081i, null, null, 32, null);
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.v2
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
            return Unit.f32056a;
        }
        n1.c cVar2 = cVar;
        n1.c cVar3 = (n1.c) n1Var;
        action.e(new n1.i(cVar3.h(), cVar3.o(), cVar3.t(), bVar, str, cVar2.l(), cVar2.j(), b4.w(action, false, 1, null), null, null, false, cVar3.f(), 1792, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void W0(n1 n1Var, g3 g3Var, k.a aVar, a aVar2, c4 c4Var, boolean z10) {
        b4.Q((n1.j) n1Var, aVar, aVar2, null, c4Var, g3Var.f30279m, new un.v(null, null, null, 0, 15, null), z10, c4Var.b(), 0, null, null, 3584, null);
    }

    static /* synthetic */ void X0(n1 n1Var, g3 g3Var, k.a aVar, a aVar2, c4 c4Var, boolean z10, int i10, Object obj) {
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        W0(n1Var, g3Var, aVar, aVar2, c4Var, z10);
    }

    private final String Y(a.C0428a c0428a, c4.e eVar, String str, String str2) {
        String a10 = c0428a.p().a(str2, str, eVar);
        if (a10 == null) {
            String string = this.f30267a.getString(jp.e.f30853n);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return a10;
    }

    private final void Y0(k.a aVar, b bVar) {
        b4.U(aVar, bVar, this.f30279m);
    }

    private final String Z(a.C0428a c0428a, c4.e eVar, String str, String str2) {
        String a10 = c0428a.r().a(str2, str, eVar);
        if (a10 == null) {
            String string = this.f30267a.getString(jp.e.f30854o);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Z0(r.c cVar) {
        cVar.d(new b.c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    private final String a0(a.C0428a c0428a, c4.e eVar, String str, String str2) {
        String a10 = c0428a.u().a(str2, str, eVar);
        if (a10 == null) {
            return "";
        }
        return a10;
    }

    private final String b0(a.C0428a c0428a, c4.e eVar) {
        String str = (String) c0428a.W().get(eVar);
        if (str == null) {
            String string = this.f30267a.getString(jp.e.f30857r);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return str;
    }

    private final boolean b1(n1 n1Var) {
        if (!(n1Var instanceof n1.d) && !(n1Var instanceof n1.f) && !(n1Var instanceof n1.l) && !(n1Var instanceof n1.e)) {
            if (!(n1Var instanceof n1.c) && !(n1Var instanceof n1.i) && !(n1Var instanceof n1.j) && !(n1Var instanceof n1.k) && !(n1Var instanceof n1.g) && !(n1Var instanceof n1.a) && !(n1Var instanceof n1.b)) {
                throw new qr.p();
            }
            return false;
        }
        return true;
    }

    private final String c0(a.C0428a c0428a, c4.e eVar) {
        String str = (String) c0428a.Z().get(eVar);
        if (str == null) {
            String string = this.f30267a.getString(jp.e.f30858s);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return str;
    }

    private final bq.k c1(Object obj, n1 n1Var) {
        bq.j jVar;
        if (n1Var.i()) {
            jVar = bq.j.f6988e;
        } else {
            jVar = bq.j.f6987d;
        }
        return new bq.k(obj, jVar);
    }

    private final String d0(n1 n1Var) {
        if (!(n1Var instanceof n1.d) && !(n1Var instanceof n1.g) && !(n1Var instanceof n1.l) && !(n1Var instanceof n1.e) && !(n1Var instanceof n1.f)) {
            if (!(n1Var instanceof n1.c) && !(n1Var instanceof n1.i) && !(n1Var instanceof n1.j) && !(n1Var instanceof n1.k) && !(n1Var instanceof n1.a) && !(n1Var instanceof n1.b)) {
                throw new qr.p();
            }
            return null;
        }
        return "camera_screen";
    }

    private final dn.n f0(Object obj, String str) {
        return new dn.n(obj, str);
    }

    private final Object h0(final a aVar, final n1 n1Var, final k.a aVar2) {
        vp.h c0701h;
        RemoteImage idFrontPictograph;
        RemoteImage remoteImage;
        int i10;
        final bn.h hVar = new bn.h() { // from class: jo.t1
            @Override // bn.h
            public final void d(Object obj) {
                g3.s0(k.a.this, this, (g3.b) obj);
            }
        };
        this.f30277k.c(aVar.c(), aVar.d(), aVar.w() && !(n1Var instanceof n1.k));
        vp.c cVar = this.f30278l;
        String k10 = aVar.k();
        boolean z10 = n1Var instanceof n1.a;
        if (z10) {
            c0701h = h.a.f52874a;
        } else if (n1Var instanceof n1.b) {
            c0701h = h.b.f52875a;
        } else if (n1Var instanceof n1.j) {
            c0701h = h.g.f52880a;
        } else if (n1Var instanceof n1.c) {
            c0701h = new h.f(((n1.c) n1Var).j());
        } else if (!(n1Var instanceof n1.l) && !(n1Var instanceof n1.d) && !(n1Var instanceof n1.e) && !(n1Var instanceof n1.f)) {
            if (n1Var instanceof n1.g) {
                c0701h = new h.c(((n1.g) n1Var).j());
            } else if (n1Var instanceof n1.i) {
                c0701h = new h.d(((n1.i) n1Var).j());
            } else if (n1Var instanceof n1.k) {
                c0701h = h.e.f52878a;
            } else {
                throw new qr.p();
            }
        } else {
            c0701h = new h.C0701h(n1Var.j());
        }
        cVar.c(new i.c(k10, c0701h));
        if (n1Var instanceof n1.j) {
            aVar2.a("check_if_single_id_class", new f(aVar, n1Var, this, aVar2, null));
            String b02 = aVar.t().b0();
            String V = aVar.t().V();
            String o10 = aVar.t().o();
            String L = aVar.t().L();
            List H = b4.H(aVar);
            g gVar = new g(n1Var, this, aVar2, aVar);
            NextStep.GovernmentId.AssetConfig.SelectPage selectPage = aVar.a().getSelectPage();
            return new f5.c(b02, V, o10, L, H, this.f30277k.b(), gVar, aVar.u(), selectPage, aVar.w(), new Function0() { // from class: jo.v1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit O0;
                    O0 = g3.O0(k.a.this, this);
                    return O0;
                }
            }, new Function0() { // from class: jo.y1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit R0;
                    R0 = g3.R0(k.a.this);
                    return R0;
                }
            }, ((n1.j) n1Var).t(), new Function0() { // from class: jo.z1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit S0;
                    S0 = g3.S0(k.a.this, this, n1Var);
                    return S0;
                }
            });
        } else if (n1Var instanceof n1.c) {
            n1.c cVar2 = (n1.c) n1Var;
            final h4.a h10 = cVar2.h();
            if (cVar2.u()) {
                bn.w.l(aVar2, this.f30270d, Reflection.typeOf(a0.class), "", new Function1() { // from class: jo.a2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r i02;
                        i02 = g3.i0(g3.this, h10, n1Var, (a0.a) obj);
                        return i02;
                    }
                });
            }
            NextStep.GovernmentId.AssetConfig.PromptPage promptPage = aVar.a().getPromptPage();
            List f10 = aVar.f();
            String Z = Z(aVar.t(), h10.a(), r.b(cVar2.t()), cVar2.f());
            String Y = Y(aVar.t(), h10.a(), r.b(cVar2.t()), cVar2.f());
            String q10 = aVar.t().q();
            String s10 = aVar.t().s();
            zp.a b10 = this.f30277k.b();
            Function0 function0 = new Function0() { // from class: jo.b2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k02;
                    k02 = g3.k0(k.a.this, this, n1Var, aVar);
                    return k02;
                }
            };
            Function0 function02 = new Function0() { // from class: jo.c2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit o02;
                    o02 = g3.o0(k.a.this, this, n1Var);
                    return o02;
                }
            };
            Function0 function03 = new Function0() { // from class: jo.d2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q02;
                    q02 = g3.q0(k.a.this, this);
                    return q02;
                }
            };
            Function0 function04 = new Function0() { // from class: jo.f2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r02;
                    r02 = g3.r0(k.a.this);
                    return r02;
                }
            };
            String w10 = cVar2.w();
            Function0 function05 = new Function0() { // from class: jo.g2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u02;
                    u02 = g3.u0(k.a.this, this, n1Var);
                    return u02;
                }
            };
            StepStyles.GovernmentIdStepStyle u10 = aVar.u();
            c4.e a10 = cVar2.h().a();
            int[] iArr = c.f30338a;
            int i11 = iArr[a10.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 != 5) {
                                throw new qr.p();
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
            } else if (r.a(cVar2.t()) == qo.e.f47970u) {
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
            int i12 = iArr[cVar2.h().a().ordinal()];
            if (i12 != 1) {
                if (i12 != 2 && i12 != 4) {
                    i10 = o4.f30663e;
                } else {
                    i10 = o4.f30662d;
                }
            } else if (r.a(cVar2.t()) == qo.e.f47970u) {
                i10 = o4.f30664f;
            } else {
                i10 = o4.f30663e;
            }
            return new y(f10, Z, Y, q10, s10, b10, function0, function02, function03, function04, w10, function05, u10, remoteImage, i10);
        } else if (n1Var instanceof n1.l) {
            return this.f30273g.b0(aVar, (n1.l) n1Var, aVar2, this.f30279m, hVar);
        } else {
            if (n1Var instanceof n1.d) {
                return this.f30273g.Q(aVar, (n1.d) n1Var, aVar2, this.f30279m, hVar);
            }
            if (n1Var instanceof n1.g) {
                n1.g gVar2 = (n1.g) n1Var;
                final q r10 = gVar2.r();
                c4.c d10 = r.d(r10, gVar2.h().a());
                c0 c0Var = (c0) CollectionsKt.o0(gVar2.u().i2());
                if (gVar2.B()) {
                    x4.i(aVar, (n1.h) n1Var, aVar2, this.f30279m, this.f30274h);
                }
                return new hn.d(hp.l1.c(new f5.e(this.f30268b, b4.G(aVar.t(), gVar2.h().a(), r.b(gVar2.r()), gVar2.f()), aVar.t().l(), d10.c(), c0Var.a(), gVar2.h().a(), r.a(r10), this.f30277k.b(), new Function0() { // from class: jo.e2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit w02;
                        w02 = g3.w0(g3.a.this, n1Var, aVar2, this);
                        return w02;
                    }
                }, aVar.t().g(), new Function0() { // from class: jo.p2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit x02;
                        x02 = g3.x0(k.a.this, this, n1Var, aVar, r10);
                        return x02;
                    }
                }, aVar.t().f(), a0(aVar.t(), gVar2.h().a(), r.b(gVar2.r()), gVar2.f()), new Function0() { // from class: jo.z2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit B0;
                        B0 = g3.B0(bn.h.this);
                        return B0;
                    }
                }, aVar.u(), gVar2.A(), new Function0() { // from class: jo.a3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit C0;
                        C0 = g3.C0(k.a.this, this, n1Var);
                        return C0;
                    }
                }, aVar.a().getCapturePage(), aVar.w() && !gVar2.B(), gVar2.B(), aVar.q())), null, 2, null);
            } else if (n1Var instanceof n1.i) {
                n1.i iVar = (n1.i) n1Var;
                h4.a h11 = iVar.h();
                if (iVar.D()) {
                    x4.i(aVar, (n1.h) n1Var, aVar2, this.f30279m, this.f30274h);
                }
                return new e5(this.f30268b, c0(aVar.t(), h11.a()), b0(aVar.t(), h11.a()), aVar.t().Y(), aVar.t().X(), ((c0) CollectionsKt.o0(iVar.u().i2())).a(), ((c0) CollectionsKt.o0(iVar.u().i2())).b(), iVar.B(), this.f30277k.b(), new Function0() { // from class: jo.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit E0;
                        E0 = g3.E0(g3.a.this, n1Var, aVar2, this);
                        return E0;
                    }
                }, new Function0() { // from class: jo.c3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit F0;
                        F0 = g3.F0(k.a.this, this);
                        return F0;
                    }
                }, new Function0() { // from class: jo.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit G0;
                        G0 = g3.G0(k.a.this, this);
                        return G0;
                    }
                }, new Function0() { // from class: jo.e3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit H0;
                        H0 = g3.H0(k.a.this);
                        return H0;
                    }
                }, iVar.A(), new Function0() { // from class: jo.f3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit I0;
                        I0 = g3.I0(k.a.this, this, n1Var);
                        return I0;
                    }
                }, aVar.u(), iVar.D());
            } else if (n1Var instanceof n1.k) {
                n1.k kVar = (n1.k) n1Var;
                bn.w.l(aVar2, this.f30269c.a(aVar.r(), aVar.n(), aVar.j(), aVar.k(), kVar.r(), kVar.t(), kVar.q()), Reflection.typeOf(qo.f.class), "", new Function1() { // from class: jo.u1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r K0;
                        K0 = g3.K0(g3.this, aVar2, (f.b) obj);
                        return K0;
                    }
                });
                zp.b.d(this.f30277k, false, false, false, 4, null);
                return new f5.f(aVar.t().U(), aVar.t().T(), aVar.u(), aVar.a().getPendingPage(), this.f30277k.b(), new Function0() { // from class: jo.w1
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit P0;
                        P0 = g3.P0(g3.this, aVar2);
                        return P0;
                    }
                }, new Function0() { // from class: jo.x1
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q0;
                        Q0 = g3.Q0(g3.this, aVar2);
                        return Q0;
                    }
                }, aVar.p());
            } else if (n1Var instanceof n1.e) {
                return this.f30271e.i(aVar, (n1.e) n1Var, aVar2, this.f30279m);
            } else {
                if (n1Var instanceof n1.f) {
                    return this.f30272f.h(aVar, (n1.f) n1Var, aVar2, this.f30279m);
                }
                if (z10) {
                    return this.f30275i.n(aVar, (n1.a) n1Var, aVar2, this.f30279m);
                }
                if (n1Var instanceof n1.b) {
                    return this.f30275i.t(aVar, (n1.b) n1Var, aVar2, this.f30279m);
                }
                throw new qr.p();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r i0(g3 g3Var, h4.a aVar, final n1 n1Var, a0.a it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a0.a.b) {
            a0.a.b bVar = (a0.a.b) it;
            return U0(aVar, n1Var, g3Var, bVar.a(), bVar.b());
        } else if (Intrinsics.areEqual(it, a0.a.C0420a.f30009a)) {
            d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit j02;
                    j02 = g3.j0(n1.this, (r.c) obj);
                    return j02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.c.r((n1.c) n1Var, null, null, null, 0, null, null, false, null, null, 447, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(final k.a aVar, final g3 g3Var, final n1 n1Var, final a aVar2) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.r2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l02;
                l02 = g3.l0(n1.this, aVar2, aVar, g3Var, (r.c) obj);
                return l02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
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
            return Unit.f32056a;
        }
        n1.c cVar2 = (n1.c) n1Var;
        action.e(new n1.l(cVar2.h(), cVar2.o(), cVar2.t(), b4.I(aVar, cVar2.h().a()), cVar.l(), cVar.j(), b4.w(action, false, 1, null), ro.t.f49080i, aVar.v().d(), null, false, false, cVar2.f(), null, new Function0() { // from class: jo.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m02;
                m02 = g3.m0(k.a.this, g3Var);
                return m02;
            }
        }, 11776, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, final g3 g3Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.y2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = g3.n0(g3.this, (r.c) obj);
                return n02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(g3 g3Var, r.c action) {
        n1.l lVar;
        ro.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (g3Var.f30279m.d()) {
                tVar = ro.t.f49079e;
            } else {
                tVar = ro.t.f49080i;
            }
            action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(k.a aVar, final g3 g3Var, final n1 n1Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.h2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p02;
                p02 = g3.p0(g3.this, n1Var, (r.c) obj);
                return p02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3 g3Var, n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.f30270d.e();
        action.e(n1.c.r((n1.c) n1Var, null, null, null, 0, null, null, true, null, null, 447, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f30279m);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(k.a aVar) {
        b4.t(aVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(final k.a aVar, final g3 g3Var, final b it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.o2
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
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(k.a aVar, g3 g3Var, final n1 n1Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.t2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v02;
                v02 = g3.v0(n1.this, (r.c) obj);
                return v02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.c.r((n1.c) n1Var, null, null, null, 0, null, null, false, null, null, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(a aVar, n1 n1Var, k.a aVar2, g3 g3Var) {
        x4.g(aVar, (n1.h) n1Var, aVar2, g3Var.f30279m);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(final k.a aVar, final g3 g3Var, final n1 n1Var, final a aVar2, final q qVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.m2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y02;
                y02 = g3.y0(n1.this, aVar2, qVar, aVar, g3Var, (r.c) obj);
                return y02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
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
            return Unit.f32056a;
        }
        n1.g gVar = (n1.g) n1Var;
        n1.l lVar = new n1.l(gVar.h(), ((n1) action.c()).o(), qVar, b4.I((a) action.b(), gVar.h().a()), n1Var2.l(), n1Var2.j(), b4.v(action, false), ro.t.f49080i, aVar.v().d(), null, false, false, gVar.f(), null, new Function0() { // from class: jo.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit z02;
                z02 = g3.z0(k.a.this, g3Var);
                return z02;
            }
        }, 11776, null);
        lVar.p(true);
        action.e(lVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(k.a aVar, final g3 g3Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(g3Var, null, new Function1() { // from class: jo.x2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit A0;
                A0 = g3.A0(g3.this, (r.c) obj);
                return A0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    @Override // bn.k
    /* renamed from: a1 */
    public bn.i g(n1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return dn.s.a(state);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v13, types: [android.os.Parcelable, java.lang.Object] */
    @Override // bn.k
    /* renamed from: e0 */
    public n1 d(a props, bn.i iVar) {
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
                ?? readParcelable = obtain.readParcelable(bn.i.class.getClassLoader());
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
        if (props.b().c() && !this.f30279m.c(props)) {
            if (props.l()) {
                return new n1.c(new h4.a(c4.e.f30070o), CollectionsKt.l(), CollectionsKt.l(), 0, props.e(), new q.a(props.b()), false, null, null, 320, null);
            }
            return new n1.l(new h4.a(c4.e.f30070o), CollectionsKt.l(), new q.a(props.b()), f5.b.a.f30200e, CollectionsKt.l(), 0, null, ro.t.f49080i, props.v().d(), null, false, false, props.e(), null, null, 28160, null);
        }
        return new n1.j(null, null, null, null, 0, props.e(), null, null, 223, null);
    }

    @Override // bn.k
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
        if (!this.f30279m.f(renderProps) && rp.f.e(this.f30267a)) {
            context.a("output_webrtc_error", new e(context, this, null));
        }
        return c1(h02, renderState);
    }
}
