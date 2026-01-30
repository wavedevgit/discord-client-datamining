package ao;

import android.content.Context;
import android.os.Parcel;
import ao.a0;
import ao.c4;
import ao.d0;
import ao.f5;
import ao.g3;
import ao.h4;
import ao.n1;
import ao.q;
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
import io.f;
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
import np.h;
import np.i;
import okio.ByteString;
import tm.k;
import tm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g3 extends tm.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f6033a;

    /* renamed from: b  reason: collision with root package name */
    private final v4.h f6034b;

    /* renamed from: c  reason: collision with root package name */
    private final f.a f6035c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f6036d;

    /* renamed from: e  reason: collision with root package name */
    private final jo.j f6037e;

    /* renamed from: f  reason: collision with root package name */
    private final jo.s f6038f;

    /* renamed from: g  reason: collision with root package name */
    private final co.m0 f6039g;

    /* renamed from: h  reason: collision with root package name */
    private final AutoClassifyWorker.b f6040h;

    /* renamed from: i  reason: collision with root package name */
    private final bo.o f6041i;

    /* renamed from: j  reason: collision with root package name */
    private final rn.a f6042j;

    /* renamed from: k  reason: collision with root package name */
    private final rp.b f6043k;

    /* renamed from: l  reason: collision with root package name */
    private final np.c f6044l;

    /* renamed from: m  reason: collision with root package name */
    private final jo.k f6045m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f6046a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6047b;

        /* renamed from: c  reason: collision with root package name */
        private final List f6048c;

        /* renamed from: d  reason: collision with root package name */
        private final String f6049d;

        /* renamed from: e  reason: collision with root package name */
        private final String f6050e;

        /* renamed from: f  reason: collision with root package name */
        private final String f6051f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f6052g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f6053h;

        /* renamed from: i  reason: collision with root package name */
        private final List f6054i;

        /* renamed from: j  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6055j;

        /* renamed from: k  reason: collision with root package name */
        private final C0089a f6056k;

        /* renamed from: l  reason: collision with root package name */
        private final int f6057l;

        /* renamed from: m  reason: collision with root package name */
        private final String f6058m;

        /* renamed from: n  reason: collision with root package name */
        private final String f6059n;

        /* renamed from: o  reason: collision with root package name */
        private final long f6060o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f6061p;

        /* renamed from: q  reason: collision with root package name */
        private final Integer f6062q;

        /* renamed from: r  reason: collision with root package name */
        private final VideoCaptureConfig f6063r;

        /* renamed from: s  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig f6064s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f6065t;

        /* renamed from: u  reason: collision with root package name */
        private final bo.a f6066u;

        /* renamed from: v  reason: collision with root package name */
        private final StyleElements.Axis f6067v;

        /* renamed from: w  reason: collision with root package name */
        private final PendingPageTextPosition f6068w;

        /* renamed from: x  reason: collision with root package name */
        private final go.a f6069x;

        /* renamed from: ao.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0089a {
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
            private final String f6070a;

            /* renamed from: a0  reason: collision with root package name */
            private final String f6071a0;

            /* renamed from: b  reason: collision with root package name */
            private final String f6072b;

            /* renamed from: b0  reason: collision with root package name */
            private final String f6073b0;

            /* renamed from: c  reason: collision with root package name */
            private final String f6074c;

            /* renamed from: c0  reason: collision with root package name */
            private final String f6075c0;

            /* renamed from: d  reason: collision with root package name */
            private final String f6076d;

            /* renamed from: d0  reason: collision with root package name */
            private final List f6077d0;

            /* renamed from: e  reason: collision with root package name */
            private final j4 f6078e;

            /* renamed from: f  reason: collision with root package name */
            private final j4 f6079f;

            /* renamed from: g  reason: collision with root package name */
            private final String f6080g;

            /* renamed from: h  reason: collision with root package name */
            private final j4 f6081h;

            /* renamed from: i  reason: collision with root package name */
            private final String f6082i;

            /* renamed from: j  reason: collision with root package name */
            private final String f6083j;

            /* renamed from: k  reason: collision with root package name */
            private final String f6084k;

            /* renamed from: l  reason: collision with root package name */
            private final j4 f6085l;

            /* renamed from: m  reason: collision with root package name */
            private final String f6086m;

            /* renamed from: n  reason: collision with root package name */
            private final String f6087n;

            /* renamed from: o  reason: collision with root package name */
            private final Map f6088o;

            /* renamed from: p  reason: collision with root package name */
            private final j4 f6089p;

            /* renamed from: q  reason: collision with root package name */
            private final j4 f6090q;

            /* renamed from: r  reason: collision with root package name */
            private final String f6091r;

            /* renamed from: s  reason: collision with root package name */
            private final String f6092s;

            /* renamed from: t  reason: collision with root package name */
            private final Map f6093t;

            /* renamed from: u  reason: collision with root package name */
            private final Map f6094u;

            /* renamed from: v  reason: collision with root package name */
            private final String f6095v;

            /* renamed from: w  reason: collision with root package name */
            private final String f6096w;

            /* renamed from: x  reason: collision with root package name */
            private final String f6097x;

            /* renamed from: y  reason: collision with root package name */
            private final String f6098y;

            /* renamed from: z  reason: collision with root package name */
            private final String f6099z;

            public C0089a(String title, String prompt, String choose, String instructionsDisclaimer, j4 captureScreenTitle, j4 scanInstructions, String capturing, j4 confirmCapture, String captureDisclaimer, String buttonSubmit, String buttonRetake, j4 confirmCaptureTitle, String processingTitle, String processingDescription, Map idClassToName, j4 chooseCaptureMethodTitle, j4 chooseCaptureMethodBody, String chooseCaptureMethodCameraButton, String chooseCaptureMethodUploadButton, Map reviewSelectedImageTitle, Map reviewSelectedImageBody, String reviewSelectedImageConfirmButton, String reviewSelectedImageChooseAnotherButton, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14, String str15, String str16, String str17, String str18, String str19, String str20, String str21, String str22, String str23, String str24, String str25, String str26, String str27, String str28, String str29, String str30, String str31, String str32, List list) {
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
                this.f6070a = title;
                this.f6072b = prompt;
                this.f6074c = choose;
                this.f6076d = instructionsDisclaimer;
                this.f6078e = captureScreenTitle;
                this.f6079f = scanInstructions;
                this.f6080g = capturing;
                this.f6081h = confirmCapture;
                this.f6082i = captureDisclaimer;
                this.f6083j = buttonSubmit;
                this.f6084k = buttonRetake;
                this.f6085l = confirmCaptureTitle;
                this.f6086m = processingTitle;
                this.f6087n = processingDescription;
                this.f6088o = idClassToName;
                this.f6089p = chooseCaptureMethodTitle;
                this.f6090q = chooseCaptureMethodBody;
                this.f6091r = chooseCaptureMethodCameraButton;
                this.f6092s = chooseCaptureMethodUploadButton;
                this.f6093t = reviewSelectedImageTitle;
                this.f6094u = reviewSelectedImageBody;
                this.f6095v = reviewSelectedImageConfirmButton;
                this.f6096w = reviewSelectedImageChooseAnotherButton;
                this.f6097x = str;
                this.f6098y = str2;
                this.f6099z = str3;
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
                this.f6071a0 = str30;
                this.f6073b0 = str31;
                this.f6075c0 = str32;
                this.f6077d0 = list;
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
                return this.f6088o;
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
                return this.f6076d;
            }

            public final List M() {
                return this.f6077d0;
            }

            public final String N() {
                return this.f6073b0;
            }

            public final String O() {
                return this.f6071a0;
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
                return this.f6087n;
            }

            public final String U() {
                return this.f6086m;
            }

            public final String V() {
                return this.f6072b;
            }

            public final Map W() {
                return this.f6094u;
            }

            public final String X() {
                return this.f6096w;
            }

            public final String Y() {
                return this.f6095v;
            }

            public final Map Z() {
                return this.f6093t;
            }

            public final String a() {
                return this.f6075c0;
            }

            public final j4 a0() {
                return this.f6079f;
            }

            public final String b() {
                return this.L;
            }

            public final String b0() {
                return this.f6070a;
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
                return this.f6084k;
            }

            public final String g() {
                return this.f6083j;
            }

            public final String h() {
                return this.f6099z;
            }

            public final String i() {
                return this.A;
            }

            public final String j() {
                return this.f6098y;
            }

            public final String k() {
                return this.f6097x;
            }

            public final String l() {
                return this.f6082i;
            }

            public final j4 m() {
                return this.f6078e;
            }

            public final String n() {
                return this.f6080g;
            }

            public final String o() {
                return this.f6074c;
            }

            public final j4 p() {
                return this.f6090q;
            }

            public final String q() {
                return this.f6091r;
            }

            public final j4 r() {
                return this.f6089p;
            }

            public final String s() {
                return this.f6092s;
            }

            public final j4 t() {
                return this.f6081h;
            }

            public final j4 u() {
                return this.f6085l;
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

        public a(String sessionToken, String str, List enabledIdClasses, String inquiryId, String fromStep, String fromComponent, boolean z10, boolean z11, List enabledCaptureOptionsNativeMobile, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, C0089a strings, int i10, String fieldKeyDocument, String fieldKeyIdClass, long j10, boolean z12, Integer num, VideoCaptureConfig videoCaptureConfig, NextStep.GovernmentId.AssetConfig assetConfig, boolean z13, bo.a autoClassificationConfig, StyleElements.Axis reviewCaptureButtonsAxis, PendingPageTextPosition pendingPageTextVerticalPosition, go.a aVar) {
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
            this.f6046a = sessionToken;
            this.f6047b = str;
            this.f6048c = enabledIdClasses;
            this.f6049d = inquiryId;
            this.f6050e = fromStep;
            this.f6051f = fromComponent;
            this.f6052g = z10;
            this.f6053h = z11;
            this.f6054i = enabledCaptureOptionsNativeMobile;
            this.f6055j = governmentIdStepStyle;
            this.f6056k = strings;
            this.f6057l = i10;
            this.f6058m = fieldKeyDocument;
            this.f6059n = fieldKeyIdClass;
            this.f6060o = j10;
            this.f6061p = z12;
            this.f6062q = num;
            this.f6063r = videoCaptureConfig;
            this.f6064s = assetConfig;
            this.f6065t = z13;
            this.f6066u = autoClassificationConfig;
            this.f6067v = reviewCaptureButtonsAxis;
            this.f6068w = pendingPageTextVerticalPosition;
            this.f6069x = aVar;
        }

        public final NextStep.GovernmentId.AssetConfig a() {
            return this.f6064s;
        }

        public final bo.a b() {
            return this.f6066u;
        }

        public final boolean c() {
            return this.f6052g;
        }

        public final boolean d() {
            return this.f6053h;
        }

        public final String e() {
            return this.f6047b;
        }

        public final List f() {
            return this.f6054i;
        }

        public final List g() {
            return this.f6048c;
        }

        public final String h() {
            return this.f6058m;
        }

        public final String i() {
            return this.f6059n;
        }

        public final String j() {
            return this.f6051f;
        }

        public final String k() {
            return this.f6050e;
        }

        public final boolean l() {
            if (this.f6054i.size() > 1) {
                return true;
            }
            return false;
        }

        public final int m() {
            return this.f6057l;
        }

        public final String n() {
            return this.f6049d;
        }

        public final long o() {
            return this.f6060o;
        }

        public final PendingPageTextPosition p() {
            return this.f6068w;
        }

        public final StyleElements.Axis q() {
            return this.f6067v;
        }

        public final String r() {
            return this.f6046a;
        }

        public final boolean s() {
            return this.f6061p;
        }

        public final C0089a t() {
            return this.f6056k;
        }

        public final StepStyles.GovernmentIdStepStyle u() {
            return this.f6055j;
        }

        public final VideoCaptureConfig v() {
            return this.f6063r;
        }

        public final boolean w() {
            return this.f6065t;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final a f6100a = new a();

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

        /* renamed from: ao.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0090b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0090b f6101a = new C0090b();

            private C0090b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0090b)) {
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
            private final InternalErrorInfo f6102a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f6102a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f6102a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final d f6103a = new d();

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
        public static final /* synthetic */ int[] f6104a;

        static {
            int[] iArr = new int[c4.e.values().length];
            try {
                iArr[c4.e.f5836o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c4.e.f5837p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c4.e.f5838q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[c4.e.f5839r.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[c4.e.f5840s.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f6104a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6105d;

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f6105d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.m mVar = mn.m.f39247a;
                Context context = g3.this.f6033a;
                this.f6105d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            g3.this.f6045m.a();
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6107d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f6108e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ g3 f6109i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(k.a aVar, g3 g3Var, Continuation continuation) {
            super(2, continuation);
            this.f6108e = aVar;
            this.f6109i = g3Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3 g3Var, r.c cVar) {
            g3Var.Z0(cVar);
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f6108e, this.f6109i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f6107d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f6108e.c();
                final g3 g3Var = this.f6109i;
                d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.h3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = g3.e.k(g3.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6110d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ a f6111e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n1 f6112i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3 f6113o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ k.a f6114p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(a aVar, n1 n1Var, g3 g3Var, k.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f6111e = aVar;
            this.f6112i = n1Var;
            this.f6113o = g3Var;
            this.f6114p = aVar2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f6111e, this.f6112i, this.f6113o, this.f6114p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f6110d == 0) {
                kotlin.c.b(obj);
                if (this.f6111e.g().size() == 1) {
                    n1 n1Var = this.f6112i;
                    g3 g3Var = this.f6113o;
                    k.a aVar = this.f6114p;
                    a aVar2 = this.f6111e;
                    g3.W0(n1Var, g3Var, aVar, aVar2, (c4) CollectionsKt.o0(aVar2.g()), false);
                }
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g extends AdaptedFunctionReference implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n1 f6115d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g3 f6116e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f6117i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ a f6118o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(n1 n1Var, g3 g3Var, k.a aVar, a aVar2) {
            super(1, Intrinsics.Kotlin.class, "selectIdClass", "renderScreen$selectIdClass(Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdState;Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdWorkflow;Lcom/squareup/workflow1/StatefulWorkflow$RenderContext;Lcom/withpersona/sdk2/inquiry/governmentid/GovernmentIdWorkflow$Input;Lcom/withpersona/sdk2/inquiry/governmentid/IdConfig;Z)V", 0);
            this.f6115d = n1Var;
            this.f6116e = g3Var;
            this.f6117i = aVar;
            this.f6118o = aVar2;
        }

        public final void a(c4 p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            g3.X0(this.f6115d, this.f6116e, this.f6117i, this.f6118o, p02, false, 32, null);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((c4) obj);
            return Unit.f33298a;
        }
    }

    public g3(Context applicationContext, v4.h imageLoader, f.a submitVerificationWorkerFactory, a0 documentSelectWorker, jo.j localVideoCaptureRenderer, jo.s webRtcRenderer, co.m0 captureRenderer, AutoClassifyWorker.b autoClassifyWorkerFactory, bo.o autoClassificationRenderer, rn.a cameraStatsManager, rp.b navigationStateManager, np.c externalEventLogger) {
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
        this.f6033a = applicationContext;
        this.f6034b = imageLoader;
        this.f6035c = submitVerificationWorkerFactory;
        this.f6036d = documentSelectWorker;
        this.f6037e = localVideoCaptureRenderer;
        this.f6038f = webRtcRenderer;
        this.f6039g = captureRenderer;
        this.f6040h = autoClassifyWorkerFactory;
        this.f6041i = autoClassificationRenderer;
        this.f6042j = cameraStatsManager;
        this.f6043k = navigationStateManager;
        this.f6044l = externalEventLogger;
        this.f6045m = new jo.k(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(g3 g3Var, r.c action) {
        n1.l lVar;
        jo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (g3Var.f6045m.d()) {
                tVar = jo.t.f32287e;
            } else {
                tVar = jo.t.f32288i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(tm.h hVar) {
        hVar.d(b.C0090b.f6101a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(k.a aVar, g3 g3Var, final n1 n1Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = g3.D0(n1.this, (r.c) obj);
                return D0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.g.u((n1.g) n1Var, null, null, null, null, null, 0, null, null, null, false, null, 1791, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(a aVar, n1 n1Var, k.a aVar2, g3 g3Var) {
        x4.g(aVar, (n1.h) n1Var, aVar2, g3Var.f6045m);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f6045m);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f6045m);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(k.a aVar) {
        b4.t(aVar);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(k.a aVar, g3 g3Var, final n1 n1Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.i2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J0;
                J0 = g3.J0(n1.this, (r.c) obj);
                return J0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.i.u((n1.i) n1Var, null, null, null, null, null, null, 0, null, null, null, false, null, 3583, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r K0(final g3 g3Var, final k.a aVar, final f.b it) {
        tm.r d10;
        final String string;
        tm.r d11;
        tm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof f.b.c) {
            d12 = tm.z.d(g3Var, null, new Function1() { // from class: ao.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L0;
                    L0 = g3.L0(g3.this, aVar, (r.c) obj);
                    return L0;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof f.b.C0379b) {
            f.b.C0379b c0379b = (f.b.C0379b) it;
            if (c0379b.a() instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) {
                string = g3Var.f6033a.getString(bp.e.f7655p, Integer.valueOf(((GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) c0379b.a()).getDetails().getMinDimensionSize()));
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            } else {
                string = g3Var.f6033a.getString(bp.e.f7656q);
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            }
            d11 = tm.z.d(g3Var, null, new Function1() { // from class: ao.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = g3.M0(string, (r.c) obj);
                    return M0;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof f.b.a) {
            d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = g3.N0(f.b.this, g3Var, aVar, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L0(g3 g3Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.Y0(aVar, b.d.f6103a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        if (e10 != null) {
            action.e(e10.c(str));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(f.b bVar, g3 g3Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 e10 = ((n1) action.c()).e();
        f.b.a aVar2 = (f.b.a) bVar;
        if (aVar2.a().isRecoverable() && e10 != null) {
            String string = g3Var.f6033a.getString(bp.e.f7663x);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            action.e(e10.c(string));
        } else {
            g3Var.Y0(aVar, new b.c(aVar2.a()));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f6045m);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(g3 g3Var, k.a aVar) {
        g3Var.Y0(aVar, b.C0090b.f6101a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(g3 g3Var, k.a aVar) {
        g3Var.Y0(aVar, b.C0090b.f6101a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(k.a aVar) {
        b4.t(aVar);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(k.a aVar, g3 g3Var, final n1 n1Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit T0;
                T0 = g3.T0(n1.this, (r.c) obj);
                return T0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.j.p((n1.j) n1Var, null, null, null, null, 0, null, null, null, 127, null));
        return Unit.f33298a;
    }

    private static final tm.r U0(h4.a aVar, final n1 n1Var, g3 g3Var, String str, final String str2) {
        tm.r d10;
        final d0.b bVar = new d0.b(CollectionsKt.e(new c0(str, null, 2, null)), b4.W(aVar.a()), r.b(((n1.c) n1Var).q()), d0.a.f5847i, null, null, 32, null);
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.v2
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
            return Unit.f33298a;
        }
        n1.c cVar2 = cVar;
        n1.c cVar3 = (n1.c) n1Var;
        action.e(new n1.i(cVar3.g(), cVar3.m(), cVar3.q(), bVar, str, cVar2.k(), cVar2.j(), b4.w(action, false, 1, null), null, null, false, cVar3.f(), 1792, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void W0(n1 n1Var, g3 g3Var, k.a aVar, a aVar2, c4 c4Var, boolean z10) {
        b4.Q((n1.j) n1Var, aVar, aVar2, null, c4Var, g3Var.f6045m, new mn.v(null, null, null, 0, 15, null), z10, c4Var.b(), 0, null, null, 3584, null);
    }

    static /* synthetic */ void X0(n1 n1Var, g3 g3Var, k.a aVar, a aVar2, c4 c4Var, boolean z10, int i10, Object obj) {
        if ((i10 & 32) != 0) {
            z10 = true;
        }
        W0(n1Var, g3Var, aVar, aVar2, c4Var, z10);
    }

    private final String Y(a.C0089a c0089a, c4.e eVar, String str, String str2) {
        String a10 = c0089a.p().a(str2, str, eVar);
        if (a10 == null) {
            String string = this.f6033a.getString(bp.e.f7653n);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return a10;
    }

    private final void Y0(k.a aVar, b bVar) {
        b4.U(aVar, bVar, this.f6045m);
    }

    private final String Z(a.C0089a c0089a, c4.e eVar, String str, String str2) {
        String a10 = c0089a.r().a(str2, str, eVar);
        if (a10 == null) {
            String string = this.f6033a.getString(bp.e.f7654o);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void Z0(r.c cVar) {
        cVar.d(new b.c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    private final String a0(a.C0089a c0089a, c4.e eVar, String str, String str2) {
        String a10 = c0089a.u().a(str2, str, eVar);
        if (a10 == null) {
            return "";
        }
        return a10;
    }

    private final String b0(a.C0089a c0089a, c4.e eVar) {
        String str = (String) c0089a.W().get(eVar);
        if (str == null) {
            String string = this.f6033a.getString(bp.e.f7657r);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return str;
    }

    private final boolean b1(n1 n1Var) {
        if (!(n1Var instanceof n1.d) && !(n1Var instanceof n1.f) && !(n1Var instanceof n1.l) && !(n1Var instanceof n1.e)) {
            if (!(n1Var instanceof n1.c) && !(n1Var instanceof n1.i) && !(n1Var instanceof n1.j) && !(n1Var instanceof n1.k) && !(n1Var instanceof n1.g) && !(n1Var instanceof n1.a) && !(n1Var instanceof n1.b)) {
                throw new ir.p();
            }
            return false;
        }
        return true;
    }

    private final String c0(a.C0089a c0089a, c4.e eVar) {
        String str = (String) c0089a.Z().get(eVar);
        if (str == null) {
            String string = this.f6033a.getString(bp.e.f7658s);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        }
        return str;
    }

    private final tp.k c1(Object obj, n1 n1Var) {
        tp.j jVar;
        if (n1Var.i()) {
            jVar = tp.j.f49813e;
        } else {
            jVar = tp.j.f49812d;
        }
        return new tp.k(obj, jVar);
    }

    private final String d0(n1 n1Var) {
        if (!(n1Var instanceof n1.d) && !(n1Var instanceof n1.g) && !(n1Var instanceof n1.l) && !(n1Var instanceof n1.e) && !(n1Var instanceof n1.f)) {
            if (!(n1Var instanceof n1.c) && !(n1Var instanceof n1.i) && !(n1Var instanceof n1.j) && !(n1Var instanceof n1.k) && !(n1Var instanceof n1.a) && !(n1Var instanceof n1.b)) {
                throw new ir.p();
            }
            return null;
        }
        return "camera_screen";
    }

    private final vm.n f0(Object obj, String str) {
        return new vm.n(obj, str);
    }

    private final Object h0(final a aVar, final n1 n1Var, final k.a aVar2) {
        np.h c0524h;
        RemoteImage idFrontPictograph;
        RemoteImage remoteImage;
        int i10;
        final tm.h hVar = new tm.h() { // from class: ao.t1
            @Override // tm.h
            public final void d(Object obj) {
                g3.s0(k.a.this, this, (g3.b) obj);
            }
        };
        this.f6043k.c(aVar.c(), aVar.d(), aVar.w() && !(n1Var instanceof n1.k));
        np.c cVar = this.f6044l;
        String k10 = aVar.k();
        boolean z10 = n1Var instanceof n1.a;
        if (z10) {
            c0524h = h.a.f42053a;
        } else if (n1Var instanceof n1.b) {
            c0524h = h.b.f42054a;
        } else if (n1Var instanceof n1.j) {
            c0524h = h.g.f42059a;
        } else if (n1Var instanceof n1.c) {
            c0524h = new h.f(((n1.c) n1Var).j());
        } else if (!(n1Var instanceof n1.l) && !(n1Var instanceof n1.d) && !(n1Var instanceof n1.e) && !(n1Var instanceof n1.f)) {
            if (n1Var instanceof n1.g) {
                c0524h = new h.c(((n1.g) n1Var).j());
            } else if (n1Var instanceof n1.i) {
                c0524h = new h.d(((n1.i) n1Var).j());
            } else if (n1Var instanceof n1.k) {
                c0524h = h.e.f42057a;
            } else {
                throw new ir.p();
            }
        } else {
            c0524h = new h.C0524h(n1Var.j());
        }
        cVar.c(new i.c(k10, c0524h));
        if (n1Var instanceof n1.j) {
            aVar2.a("check_if_single_id_class", new f(aVar, n1Var, this, aVar2, null));
            String b02 = aVar.t().b0();
            String V = aVar.t().V();
            String o10 = aVar.t().o();
            String L = aVar.t().L();
            List H = b4.H(aVar);
            g gVar = new g(n1Var, this, aVar2, aVar);
            NextStep.GovernmentId.AssetConfig.SelectPage selectPage = aVar.a().getSelectPage();
            return new f5.c(b02, V, o10, L, H, this.f6043k.b(), gVar, aVar.u(), selectPage, aVar.w(), new Function0() { // from class: ao.v1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit O0;
                    O0 = g3.O0(k.a.this, this);
                    return O0;
                }
            }, new Function0() { // from class: ao.y1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit R0;
                    R0 = g3.R0(k.a.this);
                    return R0;
                }
            }, ((n1.j) n1Var).q(), new Function0() { // from class: ao.z1
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
                tm.w.l(aVar2, this.f6036d, Reflection.typeOf(a0.class), "", new Function1() { // from class: ao.a2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r i02;
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
            rp.a b10 = this.f6043k.b();
            Function0 function0 = new Function0() { // from class: ao.b2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k02;
                    k02 = g3.k0(k.a.this, this, n1Var, aVar);
                    return k02;
                }
            };
            Function0 function02 = new Function0() { // from class: ao.c2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit o02;
                    o02 = g3.o0(k.a.this, this, n1Var);
                    return o02;
                }
            };
            Function0 function03 = new Function0() { // from class: ao.d2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q02;
                    q02 = g3.q0(k.a.this, this);
                    return q02;
                }
            };
            Function0 function04 = new Function0() { // from class: ao.f2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r02;
                    r02 = g3.r0(k.a.this);
                    return r02;
                }
            };
            String t10 = cVar2.t();
            Function0 function05 = new Function0() { // from class: ao.g2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit u02;
                    u02 = g3.u0(k.a.this, this, n1Var);
                    return u02;
                }
            };
            StepStyles.GovernmentIdStepStyle u10 = aVar.u();
            c4.e a10 = cVar2.g().a();
            int[] iArr = c.f6104a;
            int i11 = iArr[a10.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 != 5) {
                                throw new ir.p();
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
            } else if (r.a(cVar2.q()) == io.e.f28672u) {
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
                    i10 = o4.f6429e;
                } else {
                    i10 = o4.f6428d;
                }
            } else if (r.a(cVar2.q()) == io.e.f28672u) {
                i10 = o4.f6430f;
            } else {
                i10 = o4.f6429e;
            }
            return new y(f10, Z, Y, q10, s10, b10, function0, function02, function03, function04, t10, function05, u10, remoteImage, i10);
        } else if (n1Var instanceof n1.l) {
            return this.f6039g.b0(aVar, (n1.l) n1Var, aVar2, this.f6045m, hVar);
        } else {
            if (n1Var instanceof n1.d) {
                return this.f6039g.Q(aVar, (n1.d) n1Var, aVar2, this.f6045m, hVar);
            }
            if (n1Var instanceof n1.g) {
                n1.g gVar2 = (n1.g) n1Var;
                final q p10 = gVar2.p();
                c4.c d10 = r.d(p10, gVar2.g().a());
                c0 c0Var = (c0) CollectionsKt.o0(gVar2.r().i2());
                if (gVar2.w()) {
                    x4.i(aVar, (n1.h) n1Var, aVar2, this.f6045m, this.f6040h);
                }
                return new zm.d(zo.l1.c(new f5.e(this.f6034b, b4.G(aVar.t(), gVar2.g().a(), r.b(gVar2.p()), gVar2.f()), aVar.t().l(), d10.c(), c0Var.a(), gVar2.g().a(), r.a(p10), this.f6043k.b(), new Function0() { // from class: ao.e2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit w02;
                        w02 = g3.w0(g3.a.this, n1Var, aVar2, this);
                        return w02;
                    }
                }, aVar.t().g(), new Function0() { // from class: ao.p2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit x02;
                        x02 = g3.x0(k.a.this, this, n1Var, aVar, p10);
                        return x02;
                    }
                }, aVar.t().f(), a0(aVar.t(), gVar2.g().a(), r.b(gVar2.p()), gVar2.f()), new Function0() { // from class: ao.z2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit B0;
                        B0 = g3.B0(tm.h.this);
                        return B0;
                    }
                }, aVar.u(), gVar2.v(), new Function0() { // from class: ao.a3
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
                    x4.i(aVar, (n1.h) n1Var, aVar2, this.f6045m, this.f6040h);
                }
                return new e5(this.f6034b, c0(aVar.t(), g11.a()), b0(aVar.t(), g11.a()), aVar.t().Y(), aVar.t().X(), ((c0) CollectionsKt.o0(iVar.r().i2())).a(), ((c0) CollectionsKt.o0(iVar.r().i2())).b(), iVar.w(), this.f6043k.b(), new Function0() { // from class: ao.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit E0;
                        E0 = g3.E0(g3.a.this, n1Var, aVar2, this);
                        return E0;
                    }
                }, new Function0() { // from class: ao.c3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit F0;
                        F0 = g3.F0(k.a.this, this);
                        return F0;
                    }
                }, new Function0() { // from class: ao.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit G0;
                        G0 = g3.G0(k.a.this, this);
                        return G0;
                    }
                }, new Function0() { // from class: ao.e3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit H0;
                        H0 = g3.H0(k.a.this);
                        return H0;
                    }
                }, iVar.v(), new Function0() { // from class: ao.f3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit I0;
                        I0 = g3.I0(k.a.this, this, n1Var);
                        return I0;
                    }
                }, aVar.u(), iVar.y());
            } else if (n1Var instanceof n1.k) {
                n1.k kVar = (n1.k) n1Var;
                tm.w.l(aVar2, this.f6035c.a(aVar.r(), aVar.n(), aVar.j(), aVar.k(), kVar.p(), kVar.q(), kVar.o()), Reflection.typeOf(io.f.class), "", new Function1() { // from class: ao.u1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r K0;
                        K0 = g3.K0(g3.this, aVar2, (f.b) obj);
                        return K0;
                    }
                });
                rp.b.d(this.f6043k, false, false, false, 4, null);
                return new f5.f(aVar.t().U(), aVar.t().T(), aVar.u(), aVar.a().getPendingPage(), this.f6043k.b(), new Function0() { // from class: ao.w1
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit P0;
                        P0 = g3.P0(g3.this, aVar2);
                        return P0;
                    }
                }, new Function0() { // from class: ao.x1
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q0;
                        Q0 = g3.Q0(g3.this, aVar2);
                        return Q0;
                    }
                }, aVar.p());
            } else if (n1Var instanceof n1.e) {
                return this.f6037e.i(aVar, (n1.e) n1Var, aVar2, this.f6045m);
            } else {
                if (n1Var instanceof n1.f) {
                    return this.f6038f.h(aVar, (n1.f) n1Var, aVar2, this.f6045m);
                }
                if (z10) {
                    return this.f6041i.n(aVar, (n1.a) n1Var, aVar2, this.f6045m);
                }
                if (n1Var instanceof n1.b) {
                    return this.f6041i.t(aVar, (n1.b) n1Var, aVar2, this.f6045m);
                }
                throw new ir.p();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r i0(g3 g3Var, h4.a aVar, final n1 n1Var, a0.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a0.a.b) {
            a0.a.b bVar = (a0.a.b) it;
            return U0(aVar, n1Var, g3Var, bVar.a(), bVar.b());
        } else if (Intrinsics.areEqual(it, a0.a.C0081a.f5775a)) {
            d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit j02;
                    j02 = g3.j0(n1.this, (r.c) obj);
                    return j02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.c.p((n1.c) n1Var, null, null, null, 0, null, null, false, null, null, 447, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(final k.a aVar, final g3 g3Var, final n1 n1Var, final a aVar2) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.r2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l02;
                l02 = g3.l0(n1.this, aVar2, aVar, g3Var, (r.c) obj);
                return l02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        n1.c cVar2 = (n1.c) n1Var;
        action.e(new n1.l(cVar2.g(), cVar2.m(), cVar2.q(), b4.I(aVar, cVar2.g().a()), cVar.k(), cVar.j(), b4.w(action, false, 1, null), jo.t.f32288i, aVar.v().d(), null, false, false, cVar2.f(), null, new Function0() { // from class: ao.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m02;
                m02 = g3.m0(k.a.this, g3Var);
                return m02;
            }
        }, 11776, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, final g3 g3Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.y2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = g3.n0(g3.this, (r.c) obj);
                return n02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(g3 g3Var, r.c action) {
        n1.l lVar;
        jo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (g3Var.f6045m.d()) {
                tVar = jo.t.f32287e;
            } else {
                tVar = jo.t.f32288i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(k.a aVar, final g3 g3Var, final n1 n1Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.h2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p02;
                p02 = g3.p0(g3.this, n1Var, (r.c) obj);
                return p02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3 g3Var, n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3Var.f6036d.e();
        action.e(n1.c.p((n1.c) n1Var, null, null, null, 0, null, null, true, null, null, 447, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(k.a aVar, g3 g3Var) {
        b4.L(aVar, g3Var.f6045m);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(k.a aVar) {
        b4.t(aVar);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(final k.a aVar, final g3 g3Var, final b it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.o2
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
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(k.a aVar, g3 g3Var, final n1 n1Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.t2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v02;
                v02 = g3.v0(n1.this, (r.c) obj);
                return v02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(n1 n1Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.c.p((n1.c) n1Var, null, null, null, 0, null, null, false, null, null, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(a aVar, n1 n1Var, k.a aVar2, g3 g3Var) {
        x4.g(aVar, (n1.h) n1Var, aVar2, g3Var.f6045m);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(final k.a aVar, final g3 g3Var, final n1 n1Var, final a aVar2, final q qVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.m2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y02;
                y02 = g3.y0(n1.this, aVar2, qVar, aVar, g3Var, (r.c) obj);
                return y02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        n1.g gVar = (n1.g) n1Var;
        n1.l lVar = new n1.l(gVar.g(), ((n1) action.c()).m(), qVar, b4.I((a) action.b(), gVar.g().a()), n1Var2.k(), n1Var2.j(), b4.v(action, false), jo.t.f32288i, aVar.v().d(), null, false, false, gVar.f(), null, new Function0() { // from class: ao.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit z02;
                z02 = g3.z0(k.a.this, g3Var);
                return z02;
            }
        }, 11776, null);
        lVar.n(true);
        action.e(lVar);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(k.a aVar, final g3 g3Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(g3Var, null, new Function1() { // from class: ao.x2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit A0;
                A0 = g3.A0(g3.this, (r.c) obj);
                return A0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    @Override // tm.k
    /* renamed from: a1 */
    public tm.i g(n1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return vm.s.a(state);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v13, types: [android.os.Parcelable, java.lang.Object] */
    @Override // tm.k
    /* renamed from: e0 */
    public n1 d(a props, tm.i iVar) {
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
                ?? readParcelable = obtain.readParcelable(tm.i.class.getClassLoader());
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
        if (props.b().c() && !this.f6045m.c(props)) {
            if (props.l()) {
                return new n1.c(new h4.a(c4.e.f5836o), CollectionsKt.l(), CollectionsKt.l(), 0, props.e(), new q.a(props.b()), false, null, null, 320, null);
            }
            return new n1.l(new h4.a(c4.e.f5836o), CollectionsKt.l(), new q.a(props.b()), f5.b.a.f5966e, CollectionsKt.l(), 0, null, jo.t.f32288i, props.v().d(), null, false, false, props.e(), null, null, 28160, null);
        }
        return new n1.j(null, null, null, null, 0, props.e(), null, null, 223, null);
    }

    @Override // tm.k
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
        if (!this.f6045m.f(renderProps) && jp.f.e(this.f6033a)) {
            context.a("output_webrtc_error", new e(context, this, null));
        }
        return c1(h02, renderState);
    }
}
