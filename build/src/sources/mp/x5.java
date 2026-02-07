package mp;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Size;
import bn.k;
import bn.o;
import bn.r;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig;
import hp.c1;
import java.util.List;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KTypeProjection;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import mp.a1;
import mp.b1;
import mp.d2;
import mp.x1;
import mp.x5;
import okio.ByteString;
import op.c;
import sq.b;
import un.v;
import un.z;
import vp.i;
import vp.j;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x5 extends bn.k {

    /* renamed from: l  reason: collision with root package name */
    public static final a f38038l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f38039a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f38040b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f38041c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f38042d;

    /* renamed from: e  reason: collision with root package name */
    private final hp.c1 f38043e;

    /* renamed from: f  reason: collision with root package name */
    private final pp.j f38044f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f38045g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f38046h;

    /* renamed from: i  reason: collision with root package name */
    private final zn.a f38047i;

    /* renamed from: j  reason: collision with root package name */
    private final zp.b f38048j;

    /* renamed from: k  reason: collision with root package name */
    private final vp.c f38049k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f38050a;

        /* renamed from: b  reason: collision with root package name */
        private final String f38051b;

        /* renamed from: c  reason: collision with root package name */
        private final String f38052c;

        /* renamed from: d  reason: collision with root package name */
        private final String f38053d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f38054e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f38055f;

        /* renamed from: g  reason: collision with root package name */
        private final String f38056g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f38057h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f38058i;

        /* renamed from: j  reason: collision with root package name */
        private final a f38059j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f38060k;

        /* renamed from: l  reason: collision with root package name */
        private final List f38061l;

        /* renamed from: m  reason: collision with root package name */
        private final String f38062m;

        /* renamed from: n  reason: collision with root package name */
        private final String f38063n;

        /* renamed from: o  reason: collision with root package name */
        private final String f38064o;

        /* renamed from: p  reason: collision with root package name */
        private final String f38065p;

        /* renamed from: q  reason: collision with root package name */
        private final String f38066q;

        /* renamed from: r  reason: collision with root package name */
        private final String f38067r;

        /* renamed from: s  reason: collision with root package name */
        private final String f38068s;

        /* renamed from: t  reason: collision with root package name */
        private final String f38069t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f38070u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f38071v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f38072w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f38073x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f38074y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f38075z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f38076a;

            /* renamed from: b  reason: collision with root package name */
            private final String f38077b;

            /* renamed from: c  reason: collision with root package name */
            private final String f38078c;

            /* renamed from: d  reason: collision with root package name */
            private final String f38079d;

            /* renamed from: e  reason: collision with root package name */
            private final String f38080e;

            /* renamed from: f  reason: collision with root package name */
            private final String f38081f;

            /* renamed from: g  reason: collision with root package name */
            private final String f38082g;

            /* renamed from: h  reason: collision with root package name */
            private final String f38083h;

            /* renamed from: i  reason: collision with root package name */
            private final String f38084i;

            /* renamed from: j  reason: collision with root package name */
            private final String f38085j;

            /* renamed from: k  reason: collision with root package name */
            private final String f38086k;

            /* renamed from: l  reason: collision with root package name */
            private final String f38087l;

            /* renamed from: m  reason: collision with root package name */
            private final String f38088m;

            /* renamed from: n  reason: collision with root package name */
            private final String f38089n;

            /* renamed from: o  reason: collision with root package name */
            private final String f38090o;

            /* renamed from: p  reason: collision with root package name */
            private final String f38091p;

            /* renamed from: q  reason: collision with root package name */
            private final String f38092q;

            /* renamed from: r  reason: collision with root package name */
            private final String f38093r;

            /* renamed from: s  reason: collision with root package name */
            private final String f38094s;

            /* renamed from: t  reason: collision with root package name */
            private final String f38095t;

            /* renamed from: u  reason: collision with root package name */
            private final String f38096u;

            /* renamed from: v  reason: collision with root package name */
            private final String f38097v;

            /* renamed from: w  reason: collision with root package name */
            private final String f38098w;

            /* renamed from: x  reason: collision with root package name */
            private final String f38099x;

            /* renamed from: y  reason: collision with root package name */
            private final String f38100y;

            /* renamed from: z  reason: collision with root package name */
            private final String f38101z;

            public a(String title, String prompt, String disclosure, String startButton, String capturePageTitle, String selfieHintTakePhoto, String selfieHintCenterFace, String selfieHintFaceTooClose, String selfieHintFaceTooFar, String selfieHintMultipleFaces, String selfieHintFaceIncomplete, String selfieHintPoseNotCentered, String selfieHintLookLeft, String selfieHintLookRight, String selfieHintHoldStill, String processingTitle, String processingDescription, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13) {
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(startButton, "startButton");
                Intrinsics.checkNotNullParameter(capturePageTitle, "capturePageTitle");
                Intrinsics.checkNotNullParameter(selfieHintTakePhoto, "selfieHintTakePhoto");
                Intrinsics.checkNotNullParameter(selfieHintCenterFace, "selfieHintCenterFace");
                Intrinsics.checkNotNullParameter(selfieHintFaceTooClose, "selfieHintFaceTooClose");
                Intrinsics.checkNotNullParameter(selfieHintFaceTooFar, "selfieHintFaceTooFar");
                Intrinsics.checkNotNullParameter(selfieHintMultipleFaces, "selfieHintMultipleFaces");
                Intrinsics.checkNotNullParameter(selfieHintFaceIncomplete, "selfieHintFaceIncomplete");
                Intrinsics.checkNotNullParameter(selfieHintPoseNotCentered, "selfieHintPoseNotCentered");
                Intrinsics.checkNotNullParameter(selfieHintLookLeft, "selfieHintLookLeft");
                Intrinsics.checkNotNullParameter(selfieHintLookRight, "selfieHintLookRight");
                Intrinsics.checkNotNullParameter(selfieHintHoldStill, "selfieHintHoldStill");
                Intrinsics.checkNotNullParameter(processingTitle, "processingTitle");
                Intrinsics.checkNotNullParameter(processingDescription, "processingDescription");
                this.f38076a = title;
                this.f38077b = prompt;
                this.f38078c = disclosure;
                this.f38079d = startButton;
                this.f38080e = capturePageTitle;
                this.f38081f = selfieHintTakePhoto;
                this.f38082g = selfieHintCenterFace;
                this.f38083h = selfieHintFaceTooClose;
                this.f38084i = selfieHintFaceTooFar;
                this.f38085j = selfieHintMultipleFaces;
                this.f38086k = selfieHintFaceIncomplete;
                this.f38087l = selfieHintPoseNotCentered;
                this.f38088m = selfieHintLookLeft;
                this.f38089n = selfieHintLookRight;
                this.f38090o = selfieHintHoldStill;
                this.f38091p = processingTitle;
                this.f38092q = processingDescription;
                this.f38093r = str;
                this.f38094s = str2;
                this.f38095t = str3;
                this.f38096u = str4;
                this.f38097v = str5;
                this.f38098w = str6;
                this.f38099x = str7;
                this.f38100y = str8;
                this.f38101z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f38081f;
            }

            public final String B() {
                return this.f38079d;
            }

            public final String C() {
                return this.f38076a;
            }

            public final String a() {
                return this.f38100y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f38080e;
            }

            public final String d() {
                return this.f38101z;
            }

            public final String e() {
                return this.f38078c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f38076a, aVar.f38076a) && Intrinsics.areEqual(this.f38077b, aVar.f38077b) && Intrinsics.areEqual(this.f38078c, aVar.f38078c) && Intrinsics.areEqual(this.f38079d, aVar.f38079d) && Intrinsics.areEqual(this.f38080e, aVar.f38080e) && Intrinsics.areEqual(this.f38081f, aVar.f38081f) && Intrinsics.areEqual(this.f38082g, aVar.f38082g) && Intrinsics.areEqual(this.f38083h, aVar.f38083h) && Intrinsics.areEqual(this.f38084i, aVar.f38084i) && Intrinsics.areEqual(this.f38085j, aVar.f38085j) && Intrinsics.areEqual(this.f38086k, aVar.f38086k) && Intrinsics.areEqual(this.f38087l, aVar.f38087l) && Intrinsics.areEqual(this.f38088m, aVar.f38088m) && Intrinsics.areEqual(this.f38089n, aVar.f38089n) && Intrinsics.areEqual(this.f38090o, aVar.f38090o) && Intrinsics.areEqual(this.f38091p, aVar.f38091p) && Intrinsics.areEqual(this.f38092q, aVar.f38092q) && Intrinsics.areEqual(this.f38093r, aVar.f38093r) && Intrinsics.areEqual(this.f38094s, aVar.f38094s) && Intrinsics.areEqual(this.f38095t, aVar.f38095t) && Intrinsics.areEqual(this.f38096u, aVar.f38096u) && Intrinsics.areEqual(this.f38097v, aVar.f38097v) && Intrinsics.areEqual(this.f38098w, aVar.f38098w) && Intrinsics.areEqual(this.f38099x, aVar.f38099x) && Intrinsics.areEqual(this.f38100y, aVar.f38100y) && Intrinsics.areEqual(this.f38101z, aVar.f38101z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f38092q;
            }

            public final String g() {
                return this.f38091p;
            }

            public final String h() {
                return this.f38077b;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6;
                int hashCode7;
                int hashCode8;
                int hashCode9;
                int hashCode10;
                int hashCode11;
                int hashCode12;
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f38076a.hashCode() * 31) + this.f38077b.hashCode()) * 31) + this.f38078c.hashCode()) * 31) + this.f38079d.hashCode()) * 31) + this.f38080e.hashCode()) * 31) + this.f38081f.hashCode()) * 31) + this.f38082g.hashCode()) * 31) + this.f38083h.hashCode()) * 31) + this.f38084i.hashCode()) * 31) + this.f38085j.hashCode()) * 31) + this.f38086k.hashCode()) * 31) + this.f38087l.hashCode()) * 31) + this.f38088m.hashCode()) * 31) + this.f38089n.hashCode()) * 31) + this.f38090o.hashCode()) * 31) + this.f38091p.hashCode()) * 31) + this.f38092q.hashCode()) * 31;
                String str = this.f38093r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f38094s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f38095t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f38096u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f38097v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f38098w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f38099x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f38100y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f38101z;
                if (str9 == null) {
                    hashCode9 = 0;
                } else {
                    hashCode9 = str9.hashCode();
                }
                int i19 = (i18 + hashCode9) * 31;
                String str10 = this.A;
                if (str10 == null) {
                    hashCode10 = 0;
                } else {
                    hashCode10 = str10.hashCode();
                }
                int i20 = (i19 + hashCode10) * 31;
                String str11 = this.B;
                if (str11 == null) {
                    hashCode11 = 0;
                } else {
                    hashCode11 = str11.hashCode();
                }
                int i21 = (i20 + hashCode11) * 31;
                String str12 = this.C;
                if (str12 == null) {
                    hashCode12 = 0;
                } else {
                    hashCode12 = str12.hashCode();
                }
                int i22 = (i21 + hashCode12) * 31;
                String str13 = this.D;
                if (str13 != null) {
                    i10 = str13.hashCode();
                }
                return i22 + i10;
            }

            public final String i() {
                return this.f38099x;
            }

            public final String j() {
                return this.f38098w;
            }

            public final String k() {
                return this.f38094s;
            }

            public final String l() {
                return this.f38095t;
            }

            public final String m() {
                return this.f38096u;
            }

            public final String n() {
                return this.f38097v;
            }

            public final String o() {
                return this.f38093r;
            }

            public final String p() {
                return this.f38082g;
            }

            public final String q() {
                return this.f38086k;
            }

            public final String r() {
                return this.f38083h;
            }

            public final String s() {
                return this.f38084i;
            }

            public final String t() {
                return this.f38090o;
            }

            public String toString() {
                String str = this.f38076a;
                String str2 = this.f38077b;
                String str3 = this.f38078c;
                String str4 = this.f38079d;
                String str5 = this.f38080e;
                String str6 = this.f38081f;
                String str7 = this.f38082g;
                String str8 = this.f38083h;
                String str9 = this.f38084i;
                String str10 = this.f38085j;
                String str11 = this.f38086k;
                String str12 = this.f38087l;
                String str13 = this.f38088m;
                String str14 = this.f38089n;
                String str15 = this.f38090o;
                String str16 = this.f38091p;
                String str17 = this.f38092q;
                String str18 = this.f38093r;
                String str19 = this.f38094s;
                String str20 = this.f38095t;
                String str21 = this.f38096u;
                String str22 = this.f38097v;
                String str23 = this.f38098w;
                String str24 = this.f38099x;
                String str25 = this.f38100y;
                String str26 = this.f38101z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f38088m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f38089n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f38085j;
            }

            public final String z() {
                return this.f38087l;
            }
        }

        public b(String sessionToken, String inquiryId, String fromComponent, String fromStep, boolean z10, boolean z11, String fieldKeySelfie, boolean z12, boolean z13, a strings, d2 selfieType, List orderedPoses, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, StepStyles.SelfieStepStyle selfieStepStyle, VideoCaptureConfig videoCaptureConfig, NextStep.Selfie.AssetConfig assetConfig, PendingPageTextPosition pendingPageTextVerticalPosition, s0 poseConfigs, b0 designVersion) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fieldKeySelfie, "fieldKeySelfie");
            Intrinsics.checkNotNullParameter(strings, "strings");
            Intrinsics.checkNotNullParameter(selfieType, "selfieType");
            Intrinsics.checkNotNullParameter(orderedPoses, "orderedPoses");
            Intrinsics.checkNotNullParameter(videoCaptureConfig, "videoCaptureConfig");
            Intrinsics.checkNotNullParameter(assetConfig, "assetConfig");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            Intrinsics.checkNotNullParameter(poseConfigs, "poseConfigs");
            Intrinsics.checkNotNullParameter(designVersion, "designVersion");
            this.f38050a = sessionToken;
            this.f38051b = inquiryId;
            this.f38052c = fromComponent;
            this.f38053d = fromStep;
            this.f38054e = z10;
            this.f38055f = z11;
            this.f38056g = fieldKeySelfie;
            this.f38057h = z12;
            this.f38058i = z13;
            this.f38059j = strings;
            this.f38060k = selfieType;
            this.f38061l = orderedPoses;
            this.f38062m = str;
            this.f38063n = str2;
            this.f38064o = str3;
            this.f38065p = str4;
            this.f38066q = str5;
            this.f38067r = str6;
            this.f38068s = str7;
            this.f38069t = str8;
            this.f38070u = selfieStepStyle;
            this.f38071v = videoCaptureConfig;
            this.f38072w = assetConfig;
            this.f38073x = pendingPageTextVerticalPosition;
            this.f38074y = poseConfigs;
            this.f38075z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f38072w;
        }

        public final boolean b() {
            return this.f38054e;
        }

        public final String c() {
            return this.f38065p;
        }

        public final String d() {
            return this.f38064o;
        }

        public final String e() {
            return this.f38063n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f38050a, bVar.f38050a) && Intrinsics.areEqual(this.f38051b, bVar.f38051b) && Intrinsics.areEqual(this.f38052c, bVar.f38052c) && Intrinsics.areEqual(this.f38053d, bVar.f38053d) && this.f38054e == bVar.f38054e && this.f38055f == bVar.f38055f && Intrinsics.areEqual(this.f38056g, bVar.f38056g) && this.f38057h == bVar.f38057h && this.f38058i == bVar.f38058i && Intrinsics.areEqual(this.f38059j, bVar.f38059j) && Intrinsics.areEqual(this.f38060k, bVar.f38060k) && Intrinsics.areEqual(this.f38061l, bVar.f38061l) && Intrinsics.areEqual(this.f38062m, bVar.f38062m) && Intrinsics.areEqual(this.f38063n, bVar.f38063n) && Intrinsics.areEqual(this.f38064o, bVar.f38064o) && Intrinsics.areEqual(this.f38065p, bVar.f38065p) && Intrinsics.areEqual(this.f38066q, bVar.f38066q) && Intrinsics.areEqual(this.f38067r, bVar.f38067r) && Intrinsics.areEqual(this.f38068s, bVar.f38068s) && Intrinsics.areEqual(this.f38069t, bVar.f38069t) && Intrinsics.areEqual(this.f38070u, bVar.f38070u) && Intrinsics.areEqual(this.f38071v, bVar.f38071v) && Intrinsics.areEqual(this.f38072w, bVar.f38072w) && this.f38073x == bVar.f38073x && Intrinsics.areEqual(this.f38074y, bVar.f38074y) && this.f38075z == bVar.f38075z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f38062m;
        }

        public final boolean g() {
            return this.f38055f;
        }

        public final b0 h() {
            return this.f38075z;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7;
            int hashCode8;
            int hashCode9 = ((((((((((((((((((((((this.f38050a.hashCode() * 31) + this.f38051b.hashCode()) * 31) + this.f38052c.hashCode()) * 31) + this.f38053d.hashCode()) * 31) + Boolean.hashCode(this.f38054e)) * 31) + Boolean.hashCode(this.f38055f)) * 31) + this.f38056g.hashCode()) * 31) + Boolean.hashCode(this.f38057h)) * 31) + Boolean.hashCode(this.f38058i)) * 31) + this.f38059j.hashCode()) * 31) + this.f38060k.hashCode()) * 31) + this.f38061l.hashCode()) * 31;
            String str = this.f38062m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f38063n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f38064o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f38065p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f38066q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f38067r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f38068s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f38069t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f38070u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f38071v.hashCode()) * 31) + this.f38072w.hashCode()) * 31) + this.f38073x.hashCode()) * 31) + this.f38074y.hashCode()) * 31) + this.f38075z.hashCode();
        }

        public final String i() {
            return this.f38056g;
        }

        public final String j() {
            return this.f38052c;
        }

        public final String k() {
            return this.f38053d;
        }

        public final String l() {
            return this.f38051b;
        }

        public final String m() {
            return this.f38069t;
        }

        public final String n() {
            return this.f38068s;
        }

        public final String o() {
            return this.f38067r;
        }

        public final String p() {
            return this.f38066q;
        }

        public final List q() {
            return this.f38061l;
        }

        public final PendingPageTextPosition r() {
            return this.f38073x;
        }

        public final s0 s() {
            return this.f38074y;
        }

        public final boolean t() {
            return this.f38057h;
        }

        public String toString() {
            String str = this.f38050a;
            String str2 = this.f38051b;
            String str3 = this.f38052c;
            String str4 = this.f38053d;
            boolean z10 = this.f38054e;
            boolean z11 = this.f38055f;
            String str5 = this.f38056g;
            boolean z12 = this.f38057h;
            boolean z13 = this.f38058i;
            a aVar = this.f38059j;
            d2 d2Var = this.f38060k;
            List list = this.f38061l;
            String str6 = this.f38062m;
            String str7 = this.f38063n;
            String str8 = this.f38064o;
            String str9 = this.f38065p;
            String str10 = this.f38066q;
            String str11 = this.f38067r;
            String str12 = this.f38068s;
            String str13 = this.f38069t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f38070u;
            VideoCaptureConfig videoCaptureConfig = this.f38071v;
            NextStep.Selfie.AssetConfig assetConfig = this.f38072w;
            PendingPageTextPosition pendingPageTextPosition = this.f38073x;
            s0 s0Var = this.f38074y;
            b0 b0Var = this.f38075z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f38060k;
        }

        public final String v() {
            return this.f38050a;
        }

        public final boolean w() {
            return this.f38058i;
        }

        public final a x() {
            return this.f38059j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f38070u;
        }

        public final VideoCaptureConfig z() {
            return this.f38071v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f38102a = new a();

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
                return 869674411;
            }

            public String toString() {
                return "Back";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final b f38103a = new b();

            private b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1455860573;
            }

            public String toString() {
                return "Canceled";
            }
        }

        /* renamed from: mp.x5$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0515c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f38104a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0515c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f38104a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f38104a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0515c) && Intrinsics.areEqual(this.f38104a, ((C0515c) obj).f38104a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f38104a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f38104a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f38105a = new d();

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
                return 905373494;
            }

            public String toString() {
                return "Finished";
            }
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {
            private final a1.b A;
            private final boolean B;

            /* renamed from: a  reason: collision with root package name */
            private final String f38106a;

            /* renamed from: b  reason: collision with root package name */
            private final String f38107b;

            /* renamed from: c  reason: collision with root package name */
            private final String f38108c;

            /* renamed from: d  reason: collision with root package name */
            private final String f38109d;

            /* renamed from: e  reason: collision with root package name */
            private final String f38110e;

            /* renamed from: f  reason: collision with root package name */
            private final String f38111f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f38112g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0516a f38113h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f38114i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f38115j;

            /* renamed from: k  reason: collision with root package name */
            private final zp.a f38116k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f38117l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f38118m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f38119n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f38120o;

            /* renamed from: p  reason: collision with root package name */
            private final ao.a f38121p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f38122q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f38123r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f38124s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f38125t;

            /* renamed from: u  reason: collision with root package name */
            private final float f38126u;

            /* renamed from: v  reason: collision with root package name */
            private final yn.a f38127v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f38128w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f38129x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f38130y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f38131z;

            /* renamed from: mp.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0516a {

                /* renamed from: mp.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0517a extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38132a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0517a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38132a = overlay;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38132a;
                    }
                }

                /* renamed from: mp.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38133a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f38134b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38135c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f38136d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f38137e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f38133a = overlay;
                        this.f38134b = i10;
                        this.f38135c = z10;
                        this.f38136d = j10;
                        this.f38137e = onError;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38133a;
                    }

                    public final int b() {
                        return this.f38134b;
                    }

                    public final long c() {
                        return this.f38136d;
                    }

                    public final Function1 d() {
                        return this.f38137e;
                    }

                    public final boolean e() {
                        return this.f38135c;
                    }
                }

                /* renamed from: mp.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38138a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f38139b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f38140c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f38141d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f38138a = overlay;
                        this.f38139b = finalizeVideo;
                        this.f38140c = onAnimationComplete;
                        this.f38141d = z10;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38138a;
                    }

                    public final Function1 b() {
                        return this.f38139b;
                    }

                    public final Function0 c() {
                        return this.f38140c;
                    }

                    public final boolean d() {
                        return this.f38141d;
                    }
                }

                /* renamed from: mp.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0518d extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38142a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f38143b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f38144c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f38145d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0518d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f38142a = overlay;
                        this.f38143b = processImage;
                        this.f38144c = onError;
                        this.f38145d = z10;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38142a;
                    }

                    public final boolean b() {
                        return this.f38145d;
                    }

                    public final Function1 c() {
                        return this.f38144c;
                    }

                    public final Function1 d() {
                        return this.f38143b;
                    }
                }

                /* renamed from: mp.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38146a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f38147b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f38146a = overlay;
                        this.f38147b = onCaptureClicked;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38146a;
                    }

                    public final Function0 b() {
                        return this.f38147b;
                    }
                }

                /* renamed from: mp.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38148a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f38149b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f38148a = overlay;
                        this.f38149b = poseHintComplete;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38148a;
                    }

                    public final Function0 b() {
                        return this.f38149b;
                    }
                }

                /* renamed from: mp.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38150a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f38151b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f38150a = overlay;
                        this.f38151b = previewReady;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38150a;
                    }

                    public final Function1 b() {
                        return this.f38151b;
                    }
                }

                /* renamed from: mp.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38152a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f38153b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38154c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f38152a = overlay;
                        this.f38153b = onComplete;
                        this.f38154c = z10;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38152a;
                    }

                    public final boolean b() {
                        return this.f38154c;
                    }

                    public final Function0 c() {
                        return this.f38153b;
                    }
                }

                /* renamed from: mp.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0516a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f38155a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f38156b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38155a = overlay;
                        this.f38156b = j10;
                    }

                    @Override // mp.x5.d.a.AbstractC0516a
                    public b a() {
                        return this.f38155a;
                    }

                    public final long b() {
                        return this.f38156b;
                    }
                }

                public /* synthetic */ AbstractC0516a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract b a();

                private AbstractC0516a() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b {

                /* renamed from: d  reason: collision with root package name */
                public static final b f38157d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f38158e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f38159i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f38160o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f38161p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f38162q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f38163r;

                static {
                    b[] a10 = a();
                    f38162q = a10;
                    f38163r = xr.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f38157d, f38158e, f38159i, f38160o, f38161p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f38162q.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, String str3, String str4, String str5, String str6, boolean z10, AbstractC0516a mode, StepStyles.SelfieStepStyle selfieStepStyle, boolean z11, zp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, ao.a videoCaptureMethod, tq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function1 onCameraFacingModeSelected, float f10, yn.a aVar2, v.b facingMode, boolean z13, boolean z14, Function1 onFlashSet, a1.b bVar, boolean z15) {
                super(null);
                Intrinsics.checkNotNullParameter(mode, "mode");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(onCameraError, "onCameraError");
                Intrinsics.checkNotNullParameter(onPermissionChanged, "onPermissionChanged");
                Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
                Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
                Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
                Intrinsics.checkNotNullParameter(onCameraFacingModeSelected, "onCameraFacingModeSelected");
                Intrinsics.checkNotNullParameter(facingMode, "facingMode");
                Intrinsics.checkNotNullParameter(onFlashSet, "onFlashSet");
                this.f38106a = str;
                this.f38107b = str2;
                this.f38108c = str3;
                this.f38109d = str4;
                this.f38110e = str5;
                this.f38111f = str6;
                this.f38112g = z10;
                this.f38113h = mode;
                this.f38114i = selfieStepStyle;
                this.f38115j = z11;
                this.f38116k = navigationState;
                this.f38117l = onBack;
                this.f38118m = onCancel;
                this.f38119n = onCameraError;
                this.f38120o = onPermissionChanged;
                this.f38121p = videoCaptureMethod;
                this.f38122q = z12;
                this.f38123r = cameraXControllerFactory;
                this.f38124s = camera2ManagerFactoryFactory;
                this.f38125t = onCameraFacingModeSelected;
                this.f38126u = f10;
                this.f38127v = aVar2;
                this.f38128w = facingMode;
                this.f38129x = z13;
                this.f38130y = z14;
                this.f38131z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f38112g;
            }

            public final boolean B() {
                return this.f38129x;
            }

            public final boolean C() {
                return this.f38130y;
            }

            public final String a() {
                return this.f38109d;
            }

            public final yn.a b() {
                return this.f38127v;
            }

            public final g.a c() {
                return this.f38124s;
            }

            public final z.a d() {
                return this.f38123r;
            }

            public final String e() {
                return this.f38110e;
            }

            public final String f() {
                return this.f38108c;
            }

            public final v.b g() {
                return this.f38128w;
            }

            public final String h() {
                return this.f38107b;
            }

            public final AbstractC0516a i() {
                return this.f38113h;
            }

            public final zp.a j() {
                return this.f38116k;
            }

            public final Function0 k() {
                return this.f38117l;
            }

            public final Function1 l() {
                return this.f38119n;
            }

            public final Function1 m() {
                return this.f38125t;
            }

            public final Function0 n() {
                return this.f38118m;
            }

            public final Function1 o() {
                return this.f38131z;
            }

            public final Function0 p() {
                return this.f38120o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f38126u;
            }

            public final String s() {
                return this.f38111f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f38115j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f38114i;
            }

            public final String w() {
                return this.f38106a;
            }

            public final ao.a x() {
                return this.f38121p;
            }

            public final tq.a y() {
                return null;
            }

            public final boolean z() {
                return this.f38122q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f38164a;

            /* renamed from: b  reason: collision with root package name */
            private final String f38165b;

            /* renamed from: c  reason: collision with root package name */
            private final String f38166c;

            /* renamed from: d  reason: collision with root package name */
            private final String f38167d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f38168e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f38169f;

            /* renamed from: g  reason: collision with root package name */
            private final zp.a f38170g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f38171h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f38172i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f38173j;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String title, String prompt, String disclosure, String start, StepStyles.SelfieStepStyle selfieStepStyle, RemoteImage remoteImage, zp.a navigationState, Function0 onClick, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(start, "start");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f38164a = title;
                this.f38165b = prompt;
                this.f38166c = disclosure;
                this.f38167d = start;
                this.f38168e = selfieStepStyle;
                this.f38169f = remoteImage;
                this.f38170g = navigationState;
                this.f38171h = onClick;
                this.f38172i = onBack;
                this.f38173j = onCancel;
            }

            public final String a() {
                return this.f38166c;
            }

            public final RemoteImage b() {
                return this.f38169f;
            }

            public final zp.a c() {
                return this.f38170g;
            }

            public final Function0 d() {
                return this.f38172i;
            }

            public final Function0 e() {
                return this.f38173j;
            }

            public final Function0 f() {
                return this.f38171h;
            }

            public final String g() {
                return this.f38165b;
            }

            public final String h() {
                return this.f38167d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f38168e;
            }

            public final String j() {
                return this.f38164a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f38174a;

            /* renamed from: b  reason: collision with root package name */
            private final String f38175b;

            /* renamed from: c  reason: collision with root package name */
            private final b f38176c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f38177d;

            /* renamed from: e  reason: collision with root package name */
            private final a f38178e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f38179f;

            /* renamed from: g  reason: collision with root package name */
            private final zp.a f38180g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f38181h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f38182i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f38183j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f38184k;

            /* renamed from: l  reason: collision with root package name */
            private final ao.a f38185l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f38186m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f38187n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f38188o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f38189a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f38190b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f38189a = remoteImage;
                    this.f38190b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f38189a;
                }

                public final RemoteImage b() {
                    return this.f38190b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f38189a, aVar.f38189a) && Intrinsics.areEqual(this.f38190b, aVar.f38190b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f38189a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f38190b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f38189a;
                    RemoteImage remoteImage2 = this.f38190b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0522c f38191a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f38192b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0522c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38191a = overlay;
                        this.f38192b = z10;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38191a;
                    }

                    public boolean b() {
                        return this.f38192b;
                    }
                }

                /* renamed from: mp.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0519b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f38193a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f38194b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f38195c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0522c f38196d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f38197e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f38198f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0519b(int i10, boolean z10, long j10, EnumC0522c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f38193a = i10;
                        this.f38194b = z10;
                        this.f38195c = j10;
                        this.f38196d = overlay;
                        this.f38197e = z11;
                        this.f38198f = onError;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38196d;
                    }

                    public final int b() {
                        return this.f38193a;
                    }

                    public final long c() {
                        return this.f38195c;
                    }

                    public final Function1 d() {
                        return this.f38198f;
                    }

                    public final boolean e() {
                        return this.f38194b;
                    }

                    public boolean f() {
                        return this.f38197e;
                    }
                }

                /* renamed from: mp.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0520c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f38199a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f38200b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38201c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0522c f38202d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f38203e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0520c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0522c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38199a = finalizeVideo;
                        this.f38200b = onAnimationComplete;
                        this.f38201c = z10;
                        this.f38202d = overlay;
                        this.f38203e = z11;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38202d;
                    }

                    public final Function1 b() {
                        return this.f38199a;
                    }

                    public final Function0 c() {
                        return this.f38200b;
                    }

                    public boolean d() {
                        return this.f38203e;
                    }

                    public final boolean e() {
                        return this.f38201c;
                    }
                }

                /* renamed from: mp.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0521d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f38204a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f38205b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38206c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0522c f38207d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f38208e;

                    public /* synthetic */ C0521d(Function1 function1, Function1 function12, boolean z10, EnumC0522c enumC0522c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0522c, z11);
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38207d;
                    }

                    public final boolean b() {
                        return this.f38206c;
                    }

                    public final Function1 c() {
                        return this.f38205b;
                    }

                    public final Function1 d() {
                        return this.f38204a;
                    }

                    public boolean e() {
                        return this.f38208e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0521d(Function1 processImage, Function1 onError, boolean z10, EnumC0522c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38204a = processImage;
                        this.f38205b = onError;
                        this.f38206c = z10;
                        this.f38207d = overlay;
                        this.f38208e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f38209a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0522c f38210b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38211c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0522c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38209a = onCaptureClicked;
                        this.f38210b = overlay;
                        this.f38211c = z10;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38210b;
                    }

                    public final Function0 b() {
                        return this.f38209a;
                    }

                    public boolean c() {
                        return this.f38211c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f38212a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0522c f38213b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38214c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0522c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38212a = poseHintComplete;
                        this.f38213b = overlay;
                        this.f38214c = z10;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38213b;
                    }

                    public final Function0 b() {
                        return this.f38212a;
                    }

                    public boolean c() {
                        return this.f38214c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f38215a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0522c f38216b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38217c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0522c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38215a = previewReady;
                        this.f38216b = overlay;
                        this.f38217c = z10;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38216b;
                    }

                    public final Function1 b() {
                        return this.f38215a;
                    }

                    public boolean c() {
                        return this.f38217c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f38218a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f38219b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0522c f38220c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f38221d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0522c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38218a = onComplete;
                        this.f38219b = z10;
                        this.f38220c = overlay;
                        this.f38221d = z11;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38220c;
                    }

                    public final boolean b() {
                        return this.f38219b;
                    }

                    public final Function0 c() {
                        return this.f38218a;
                    }

                    public boolean d() {
                        return this.f38221d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0522c f38222a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f38223b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f38224c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0522c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f38222a = overlay;
                        this.f38223b = j10;
                        this.f38224c = z10;
                    }

                    @Override // mp.x5.d.c.b
                    public EnumC0522c a() {
                        return this.f38222a;
                    }

                    public final long b() {
                        return this.f38223b;
                    }
                }

                public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract EnumC0522c a();

                private b() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* renamed from: mp.x5$d$c$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class EnumC0522c {

                /* renamed from: d  reason: collision with root package name */
                public static final EnumC0522c f38225d = new EnumC0522c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0522c f38226e = new EnumC0522c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0522c f38227i = new EnumC0522c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0522c f38228o = new EnumC0522c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0522c f38229p = new EnumC0522c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0522c f38230q = new EnumC0522c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0522c f38231r = new EnumC0522c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0522c f38232s = new EnumC0522c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0522c f38233t = new EnumC0522c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0522c f38234u = new EnumC0522c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0522c f38235v = new EnumC0522c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0522c f38236w = new EnumC0522c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0522c[] f38237x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f38238y;

                static {
                    EnumC0522c[] a10 = a();
                    f38237x = a10;
                    f38238y = xr.a.a(a10);
                }

                private EnumC0522c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0522c[] a() {
                    return new EnumC0522c[]{f38225d, f38226e, f38227i, f38228o, f38229p, f38230q, f38231r, f38232s, f38233t, f38234u, f38235v, f38236w};
                }

                public static EnumC0522c valueOf(String str) {
                    return (EnumC0522c) Enum.valueOf(EnumC0522c.class, str);
                }

                public static EnumC0522c[] values() {
                    return (EnumC0522c[]) f38237x.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, String str2, b mode, StepStyles.SelfieStepStyle selfieStepStyle, a assetOverrides, boolean z10, zp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, ao.a videoCaptureMethod, tq.a aVar, boolean z11, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
                super(null);
                Intrinsics.checkNotNullParameter(mode, "mode");
                Intrinsics.checkNotNullParameter(assetOverrides, "assetOverrides");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(onCameraError, "onCameraError");
                Intrinsics.checkNotNullParameter(onPermissionChanged, "onPermissionChanged");
                Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
                Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
                Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
                this.f38174a = str;
                this.f38175b = str2;
                this.f38176c = mode;
                this.f38177d = selfieStepStyle;
                this.f38178e = assetOverrides;
                this.f38179f = z10;
                this.f38180g = navigationState;
                this.f38181h = onBack;
                this.f38182i = onCancel;
                this.f38183j = onCameraError;
                this.f38184k = onPermissionChanged;
                this.f38185l = videoCaptureMethod;
                this.f38186m = z11;
                this.f38187n = cameraXControllerFactory;
                this.f38188o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f38178e;
            }

            public final g.a b() {
                return this.f38188o;
            }

            public final z.a c() {
                return this.f38187n;
            }

            public final String d() {
                return this.f38175b;
            }

            public final b e() {
                return this.f38176c;
            }

            public final zp.a f() {
                return this.f38180g;
            }

            public final Function0 g() {
                return this.f38181h;
            }

            public final Function1 h() {
                return this.f38183j;
            }

            public final Function0 i() {
                return this.f38182i;
            }

            public final Function0 j() {
                return this.f38184k;
            }

            public final boolean k() {
                return this.f38179f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f38177d;
            }

            public final String m() {
                return this.f38174a;
            }

            public final ao.a n() {
                return this.f38185l;
            }

            public final tq.a o() {
                return null;
            }

            public final boolean p() {
                return this.f38186m;
            }
        }

        /* renamed from: mp.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0523d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f38239a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0523d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f38239a = rendered;
            }

            public final Function0 a() {
                return this.f38239a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f38240a;

            /* renamed from: b  reason: collision with root package name */
            private final List f38241b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f38242c;

            /* renamed from: d  reason: collision with root package name */
            private final zp.a f38243d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f38244e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f38245f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f38246g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f38247h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f38248a;

                /* renamed from: b  reason: collision with root package name */
                private final String f38249b;

                /* renamed from: c  reason: collision with root package name */
                private final String f38250c;

                /* renamed from: d  reason: collision with root package name */
                private final String f38251d;

                /* renamed from: e  reason: collision with root package name */
                private final String f38252e;

                /* renamed from: f  reason: collision with root package name */
                private final String f38253f;

                /* renamed from: g  reason: collision with root package name */
                private final String f38254g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f38248a = title;
                    this.f38249b = description;
                    this.f38250c = selfieLabelFront;
                    this.f38251d = selfieLabelLeft;
                    this.f38252e = selfieLabelRight;
                    this.f38253f = submitButton;
                    this.f38254g = retakeButton;
                }

                public final String a() {
                    return this.f38249b;
                }

                public final String b() {
                    return this.f38254g;
                }

                public final String c() {
                    return this.f38250c;
                }

                public final String d() {
                    return this.f38251d;
                }

                public final String e() {
                    return this.f38252e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f38248a, aVar.f38248a) && Intrinsics.areEqual(this.f38249b, aVar.f38249b) && Intrinsics.areEqual(this.f38250c, aVar.f38250c) && Intrinsics.areEqual(this.f38251d, aVar.f38251d) && Intrinsics.areEqual(this.f38252e, aVar.f38252e) && Intrinsics.areEqual(this.f38253f, aVar.f38253f) && Intrinsics.areEqual(this.f38254g, aVar.f38254g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f38253f;
                }

                public final String g() {
                    return this.f38248a;
                }

                public int hashCode() {
                    return (((((((((((this.f38248a.hashCode() * 31) + this.f38249b.hashCode()) * 31) + this.f38250c.hashCode()) * 31) + this.f38251d.hashCode()) * 31) + this.f38252e.hashCode()) * 31) + this.f38253f.hashCode()) * 31) + this.f38254g.hashCode();
                }

                public String toString() {
                    String str = this.f38248a;
                    String str2 = this.f38249b;
                    String str3 = this.f38250c;
                    String str4 = this.f38251d;
                    String str5 = this.f38252e;
                    String str6 = this.f38253f;
                    String str7 = this.f38254g;
                    return "Strings(title=" + str + ", description=" + str2 + ", selfieLabelFront=" + str3 + ", selfieLabelLeft=" + str4 + ", selfieLabelRight=" + str5 + ", submitButton=" + str6 + ", retakeButton=" + str7 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(a strings, List selfies, StepStyles.SelfieStepStyle selfieStepStyle, zp.a navigationState, Function0 onUsePhotos, Function0 onRetakePhotos, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(strings, "strings");
                Intrinsics.checkNotNullParameter(selfies, "selfies");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onUsePhotos, "onUsePhotos");
                Intrinsics.checkNotNullParameter(onRetakePhotos, "onRetakePhotos");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f38240a = strings;
                this.f38241b = selfies;
                this.f38242c = selfieStepStyle;
                this.f38243d = navigationState;
                this.f38244e = onUsePhotos;
                this.f38245f = onRetakePhotos;
                this.f38246g = onBack;
                this.f38247h = onCancel;
            }

            public final zp.a a() {
                return this.f38243d;
            }

            public final Function0 b() {
                return this.f38246g;
            }

            public final Function0 c() {
                return this.f38247h;
            }

            public final Function0 d() {
                return this.f38245f;
            }

            public final Function0 e() {
                return this.f38244e;
            }

            public final List f() {
                return this.f38241b;
            }

            public final a g() {
                return this.f38240a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f38242c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f38255a;

            /* renamed from: b  reason: collision with root package name */
            private final String f38256b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f38257c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f38258d;

            /* renamed from: e  reason: collision with root package name */
            private final zp.a f38259e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f38260f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f38261g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f38262h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, zp.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f38255a = title;
                this.f38256b = description;
                this.f38257c = pendingPageTextVerticalPosition;
                this.f38258d = selfieStepStyle;
                this.f38259e = navigationState;
                this.f38260f = onBack;
                this.f38261g = onCancel;
                this.f38262h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f38262h;
            }

            public final String b() {
                return this.f38256b;
            }

            public final zp.a c() {
                return this.f38259e;
            }

            public final Function0 d() {
                return this.f38260f;
            }

            public final Function0 e() {
                return this.f38261g;
            }

            public final PendingPageTextPosition f() {
                return this.f38257c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f38258d;
            }

            public final String h() {
                return this.f38255a;
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
        public static final /* synthetic */ int[] f38263a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f38264b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f38265c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f37336e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f37337i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f37335d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f38263a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f37471e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f37472i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f37470d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f38264b = iArr2;
            int[] iArr3 = new int[yn.b.values().length];
            try {
                iArr3[yn.b.f55524d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[yn.b.f55525e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[yn.b.f55526i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[yn.b.f55527o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[yn.b.f55528p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[yn.b.f55529q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[yn.b.f55530r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[yn.b.f55531s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[yn.b.f55532t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f38265c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38266d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f38266d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.m mVar = un.m.f51792a;
                Context context = x5.this.f38039a;
                this.f38266d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            x5.V0(x5.this);
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38268d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f38269e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f38270i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f38269e = aVar;
            this.f38270i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f38269e, this.f38270i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            wr.b.f();
            if (this.f38268d == 0) {
                kotlin.c.b(obj);
                bn.h c10 = this.f38269e.c();
                final x5 x5Var = this.f38270i;
                d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.y5
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = x5.g.k(x5.this, (r.c) obj2);
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
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38271d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f38272e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f38273i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f38272e = aVar;
            this.f38273i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(r.c cVar) {
            x1.a aVar;
            Object c10 = cVar.c();
            if (c10 instanceof x1.a) {
                aVar = (x1.a) c10;
            } else {
                aVar = null;
            }
            x1.a aVar2 = aVar;
            if (aVar2 == null) {
                return Unit.f32056a;
            }
            cVar.e(x1.a.v(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f37947o, 8191, null));
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f38272e, this.f38273i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            Object f10 = wr.b.f();
            int i10 = this.f38271d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f38271d = 1;
                if (os.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            bn.h c10 = this.f38272e.c();
            d10 = bn.z.d(this.f38273i, null, new Function1() { // from class: mp.z5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.h.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38274d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f38275e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f38276i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f38275e = aVar;
            this.f38276i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(r.c cVar) {
            x1.a aVar;
            Object c10 = cVar.c();
            if (c10 instanceof x1.a) {
                aVar = (x1.a) c10;
            } else {
                aVar = null;
            }
            x1.a aVar2 = aVar;
            if (aVar2 == null) {
                return Unit.f32056a;
            }
            cVar.e(x1.a.v(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f37945e, 8191, null));
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f38275e, this.f38276i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            Object f10 = wr.b.f();
            int i10 = this.f38274d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f38274d = 1;
                if (os.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            bn.h c10 = this.f38275e.c();
            d10 = bn.z.d(this.f38276i, null, new Function1() { // from class: mp.a6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38277d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f38278e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f38279i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f38280o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f38281p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f38278e = aVar;
            this.f38279i = x5Var;
            this.f38280o = cVar;
            this.f38281p = bVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x1.c cVar, b bVar, r.c cVar2) {
            x1.c cVar3;
            Object c10 = cVar2.c();
            if (c10 instanceof x1.c) {
                cVar3 = (x1.c) c10;
            } else {
                cVar3 = null;
            }
            x1.c cVar4 = cVar3;
            if (cVar4 == null) {
                return Unit.f32056a;
            }
            int x10 = cVar4.x();
            if (x10 > 1) {
                cVar2.e(x1.c.v(cVar4, x10 - 1, cVar4.B(), 0L, null, 0L, 0.0f, null, null, null, null, false, null, false, 8188, null));
            } else {
                yn.b B = cVar4.B();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                un.v b10 = cVar4.b();
                cVar2.e(new x1.a(B, cVar.A(), cVar.w(), null, c11, i10, false, cVar.o(), b10, m6.i(cVar2, false), bVar.s(), cVar.q(), cVar.l(), null, 8264, null));
            }
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f38278e, this.f38279i, this.f38280o, this.f38281p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            Object f10 = wr.b.f();
            int i10 = this.f38277d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f38277d = 1;
                if (os.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            bn.h c10 = this.f38278e.c();
            x5 x5Var = this.f38279i;
            final x1.c cVar = this.f38280o;
            final b bVar = this.f38281p;
            d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.b6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.j.k(x1.c.this, bVar, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38282d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f38283e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f38284i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f38283e = aVar;
            this.f38284i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(r.c cVar) {
            x1.d dVar;
            Object c10 = cVar.c();
            if (c10 instanceof x1.d) {
                dVar = (x1.d) c10;
            } else {
                dVar = null;
            }
            x1.d dVar2 = dVar;
            if (dVar2 == null) {
                return Unit.f32056a;
            }
            int w10 = dVar2.w();
            if (w10 >= 1) {
                cVar.e(x1.d.v(dVar2, w10 - 1, dVar2.x(), null, null, 0L, false, 0L, null, null, null, false, 2044, null));
            }
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(this.f38283e, this.f38284i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            Object f10 = wr.b.f();
            int i10 = this.f38282d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f38282d = 1;
                if (os.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            bn.h c10 = this.f38283e.c();
            d10 = bn.z.d(this.f38284i, null, new Function1() { // from class: mp.c6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.k.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38285d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f38286e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f38287i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f38288o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f38286e = booleanRef;
            this.f38287i = aVar;
            this.f38288o = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(Ref.BooleanRef booleanRef, r.c cVar) {
            x1 x1Var = (x1) cVar.c();
            if ((x1Var instanceof a0) && ((a0) x1Var).j()) {
                cVar.e(x1Var);
                booleanRef.element = false;
            }
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new l(this.f38286e, this.f38287i, this.f38288o, continuation);
        }

        /* JADX WARN: Removed duplicated region for block: B:11:0x0020  */
        /* JADX WARN: Removed duplicated region for block: B:15:0x0043  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:12:0x0028 -> B:14:0x002b). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r5.f38285d
                r2 = 1
                if (r1 == 0) goto L17
                if (r1 != r2) goto Lf
                kotlin.c.b(r6)
                goto L2b
            Lf:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L17:
                kotlin.c.b(r6)
            L1a:
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f38286e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f38285d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = os.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                bn.k$a r6 = r5.f38287i
                bn.h r6 = r6.c()
                mp.x5 r1 = r5.f38288o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f38286e
                mp.d6 r4 = new mp.d6
                r4.<init>()
                r3 = 0
                bn.r r1 = bn.w.f(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f32056a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: mp.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public x5(Context applicationContext, c.a submitVerificationWorker, b.a webRtcWorkerFactory, b1.b selfieAnalyzeWorker, hp.c1 permissionRequestWorkflow, pp.j localVideoCaptureRenderer, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, zn.a cameraStatsManager, zp.b navigationStateManager, vp.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(submitVerificationWorker, "submitVerificationWorker");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(selfieAnalyzeWorker, "selfieAnalyzeWorker");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(localVideoCaptureRenderer, "localVideoCaptureRenderer");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f38039a = applicationContext;
        this.f38040b = submitVerificationWorker;
        this.f38041c = webRtcWorkerFactory;
        this.f38042d = selfieAnalyzeWorker;
        this.f38043e = permissionRequestWorkflow;
        this.f38044f = localVideoCaptureRenderer;
        this.f38045g = cameraXControllerFactory;
        this.f38046h = camera2ManagerFactoryFactory;
        this.f38047i = cameraStatsManager;
        this.f38048j = navigationStateManager;
        this.f38049k = externalEventLogger;
        tq.c.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A2(x5 x5Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, c.d.f38105a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B2(x5 x5Var, k.a aVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, new c.C0515c(((c.b.a) bVar).a()));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean x10 = oVar.x();
        if (!oVar.w() && Y0(bVar) && rp.f.f(this.f38039a) && bVar.z().b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        String c10 = bVar.x().c();
        d.c.b.g gVar = new d.c.b.g(new Function1() { // from class: mp.i4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J2;
                J2 = x5.J2(k.a.this, this, bVar, oVar, currentTimeMillis, (un.v) obj);
                return J2;
            }
        }, d.c.EnumC0522c.f38225d, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f38045g;
        g.a aVar3 = this.f38046h;
        v.b q10 = oVar.q();
        boolean l10 = oVar.l();
        if (x10 && !z10) {
            z11 = false;
        } else {
            z11 = true;
        }
        d f10 = j2.f(bVar, aVar, null, c10, null, null, false, gVar, v10, t10, b10, new Function0() { // from class: mp.j4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L2;
                L2 = x5.L2(k.a.this, this);
                return L2;
            }
        }, new Function0() { // from class: mp.k4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit M2;
                M2 = x5.M2(x5.this, aVar);
                return M2;
            }
        }, k10, new Function0() { // from class: mp.l4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N2;
                N2 = x5.N2(x5.this, aVar, bVar);
                return N2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, q10, l10, false, z11, PointerEventHelper.X_FLAG_SUPPORTS_HOVER, null);
        if (!x10) {
            String str = "";
            hp.d0 d0Var = hp.d0.f26328d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f38039a.getString(jp.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f38039a;
            String string = context.getString(jp.e.C, rp.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return hp.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f38043e, bVar.y(), null, new Function1() { // from class: mp.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r F2;
                    F2 = x5.F2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return F2;
                }
            }, 19976, null);
        }
        String str2 = "";
        if (z10) {
            hp.d0 d0Var2 = hp.d0.f26329e;
            String o10 = bVar.o();
            if (o10 == null) {
                o10 = this.f38039a.getString(jp.e.M);
                Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
            }
            Context context2 = this.f38039a;
            String string2 = context2.getString(jp.e.L, rp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            hp.c1 c1Var = this.f38043e;
            String p10 = bVar.p();
            if (p10 != null) {
                str2 = p10;
            }
            return hp.l1.e(f10, aVar, true, d0Var2, false, str2, o10, string2, n10, m10, null, null, null, c1Var, bVar.y(), "video_capture_mic_permission_request", new Function1() { // from class: mp.o4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r H2;
                    H2 = x5.H2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return H2;
                }
            }, 3592, null);
        }
        return f10;
    }

    private final d F1(final b bVar, x1.f fVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: mp.a4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit G1;
                G1 = x5.G1();
                return G1;
            }
        }, false, d.c.EnumC0522c.f38234u, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: mp.b4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit H1;
                H1 = x5.H1(k.a.this, this);
                return H1;
            }
        }, new Function0() { // from class: mp.d4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I1;
                I1 = x5.I1(x5.this, aVar);
                return I1;
            }
        }, k10, new Function0() { // from class: mp.e4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit J1;
                J1 = x5.J1(x5.this, aVar, bVar);
                return J1;
            }
        }, l32, null, bVar.z().b(), this.f38045g, this.f38046h, 0.0f, null, fVar.q(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r F2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.l5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G2;
                G2 = x5.G2(c1.a.this, oVar, bVar, x5Var, aVar, (r.c) obj);
                return G2;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1() {
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == hp.g1.f26354d) {
            action.e(x1.o.v(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f38102a);
        } else {
            x5Var.e3(aVar2, new c.C0515c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r H2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.b5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I2;
                I2 = x5.I2(c1.a.this, oVar, bVar, x5Var, aVar, (r.c) obj);
                return I2;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == hp.g1.f26354d) {
            action.e(x1.o.v(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f38102a);
        } else {
            x5Var.e3(aVar2, new c.C0515c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J2(k.a aVar, final x5 x5Var, final b bVar, final x1.o oVar, final long j10, final un.v cameraProperties) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.c5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K2;
                K2 = x5.K2(x5.this, bVar, oVar, cameraProperties, j10, (r.c) obj);
                return K2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    private final d K1(final b bVar, final x1.h hVar, final k.a aVar) {
        return new d.C0523d(new Function0() { // from class: mp.c4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L1;
                L1 = x5.L1(k.a.this, this, bVar, hVar);
                return L1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K2(x5 x5Var, b bVar, x1.o oVar, un.v vVar, long j10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (x5Var.l3(bVar) == ao.a.f6226d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.q(), oVar.l()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.q(), oVar.l(), 67, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(k.a aVar, x5 x5Var, final b bVar, final x1.h hVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.m5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M1;
                M1 = x5.M1(x5.b.this, hVar, (r.c) obj);
                return M1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(b bVar, x1.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, hVar.q(), false, 163, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f38039a.getString(jp.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f38039a.getString(jp.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f38039a.getString(jp.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f38039a.getString(jp.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f38039a.getString(jp.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f38039a.getString(jp.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f38039a.getString(jp.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.u(), bVar.y(), this.f38048j.b(), new Function0() { // from class: mp.i3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit O1;
                O1 = x5.O1(k.a.this, this, iVar);
                return O1;
            }
        }, new Function0() { // from class: mp.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Q1;
                Q1 = x5.Q1(k.a.this, this, bVar, iVar);
                return Q1;
            }
        }, new Function0() { // from class: mp.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit S1;
                S1 = x5.S1(k.a.this, this);
                return S1;
            }
        }, new Function0() { // from class: mp.l3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T1;
                T1 = x5.T1(x5.this, aVar);
                return T1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(k.a aVar, x5 x5Var, final x1.i iVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.t5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit P1;
                P1 = x5.P1(x1.i.this, (r.c) obj);
                return P1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        bn.w.l(aVar, this.f38041c.a(bVar.z().c()), Reflection.typeOf(sq.b.class), "", new Function1() { // from class: mp.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0650b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0522c.f38225d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f38045g;
        g.a aVar3 = this.f38046h;
        return j2.f(bVar, aVar, pVar.e(), c10, null, null, false, iVar, v10, t10, b10, new Function0() { // from class: mp.v2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T2;
                T2 = x5.T2(k.a.this, this);
                return T2;
            }
        }, new Function0() { // from class: mp.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U2;
                U2 = x5.U2(x5.this, aVar);
                return U2;
            }
        }, k10, new Function0() { // from class: mp.r3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V2;
                V2 = x5.V2(x5.this, aVar, bVar);
                return V2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, pVar.q(), pVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(x1.i iVar, r.c action) {
        x1.i iVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.i) {
            iVar2 = (x1.i) c10;
        } else {
            iVar2 = null;
        }
        if (iVar2 == null) {
            return Unit.f32056a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.r(), iVar3.v(), iVar3.b(), iVar3.o(), m6.i(action, true), iVar.q()));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0650b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final wn.m b10 = wn.j.b(x5Var.f38039a, wn.n.f54062d);
        if (it instanceof b.AbstractC0650b.C0651b) {
            d11 = bn.z.d(x5Var, null, new Function1() { // from class: mp.p5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q2;
                    Q2 = x5.Q2(x5.this, b10, it, pVar, bVar, aVar, (r.c) obj);
                    return Q2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.AbstractC0650b.a) {
            d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.q5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R2;
                    R2 = x5.R2(k.a.this, x5Var, pVar, (r.c) obj);
                    return R2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(k.a aVar, x5 x5Var, final b bVar, final x1.i iVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.w4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R1;
                R1 = x5.R1(x5.b.this, iVar, (r.c) obj);
                return R1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q2(x5 x5Var, wn.m mVar, b.AbstractC0650b abstractC0650b, x1.p pVar, b bVar, k.a aVar, r.c action) {
        wn.l b10;
        wn.l b11;
        wn.l b12;
        Size f10;
        wn.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        if (mVar != null && (b13 = mVar.b()) != null && (f11 = b13.f()) != null) {
            f11.getWidth();
        }
        if (mVar != null && (b12 = mVar.b()) != null && (f10 = b12.f()) != null) {
            f10.getHeight();
        }
        if ((mVar == null || (b11 = mVar.b()) == null || b11.e() != 90) && mVar != null && (b10 = mVar.b()) != null) {
            b10.e();
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R1(b bVar, x1.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, iVar.q(), false, 163, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R2(k.a aVar, final x5 x5Var, final x1.p pVar, r.c action) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.v5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S2;
                S2 = x5.S2(x5.this, pVar, (r.c) obj);
                return S2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S2(x5 x5Var, x1.p pVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        action.e(new x1.h(false, false, m6.i(action, false), pVar.q(), 3, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    private final d.b U1(final b bVar, final x1.j jVar, final k.a aVar) {
        String C = bVar.x().C();
        String h10 = bVar.x().h();
        String e10 = bVar.x().e();
        String B = bVar.x().B();
        zp.a b10 = this.f38048j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f37422a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f37424a) && !Intrinsics.areEqual(u10, d2.b.f37423a)) {
            throw new qr.p();
        } else {
            NextStep.Selfie.AssetConfig.PromptPage promptPage2 = bVar.a().getPromptPage();
            if (promptPage2 != null) {
                remoteImage = promptPage2.getSelfiePictograph();
            }
        }
        return new d.b(C, h10, e10, B, bVar.y(), remoteImage, b10, new Function0() { // from class: mp.m3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V1;
                V1 = x5.V1(k.a.this, this, bVar, jVar);
                return V1;
            }
        }, new Function0() { // from class: mp.n3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X1;
                X1 = x5.X1(k.a.this, this);
                return X1;
            }
        }, new Function0() { // from class: mp.o3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y1;
                Y1 = x5.Y1(x5.this, aVar);
                return Y1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    public static final /* synthetic */ tq.a V0(x5 x5Var) {
        x5Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(k.a aVar, x5 x5Var, final b bVar, final x1.j jVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.h5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W1;
                W1 = x5.W1(x5.b.this, jVar, (r.c) obj);
                return W1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(b bVar, x1.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.j(action, false, 1, null), bVar.q(), bVar.s(), false, jVar.q(), false, 163, null));
        return Unit.f32056a;
    }

    private final d W2(final b bVar, final x1.q qVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: mp.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0522c.f38236w, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: mp.x3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Z2;
                Z2 = x5.Z2(k.a.this, this);
                return Z2;
            }
        }, new Function0() { // from class: mp.y3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a32;
                a32 = x5.a3(x5.this, aVar);
                return a32;
            }
        }, k10, new Function0() { // from class: mp.z3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit b32;
                b32 = x5.b3(x5.this, aVar, bVar);
                return b32;
            }
        }, l32, null, bVar.z().b(), this.f38045g, this.f38046h, 0.0f, null, qVar.q(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X2(k.a aVar, x5 x5Var, final x1.q qVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.f5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Y2;
                Y2 = x5.Y2(x1.q.this, (r.c) obj);
                return Y2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f38039a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.r(), qVar.u(), qVar.b(), qVar.o(), m6.i(action, false)));
        return Unit.f32056a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.r(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.o(), x1Var.p(), ((b) cVar.b()).s(), x1Var.q(), zVar2.l());
        } else if (l3((b) cVar.b()) == ao.a.f6227e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.r(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.o(), x1Var.p(), x1Var.q(), 12, null);
        } else if (l3((b) cVar.b()) == ao.a.f6226d) {
            a0 a0Var3 = (a0) x1Var;
            w10 = new x1.f(CollectionsKt.M0(x1Var.r(), a1Var), a0Var3.b(), a0Var3.o(), x1Var.p(), x1Var.q());
        } else {
            a0 a0Var4 = (a0) x1Var;
            w10 = m6.w(cVar, CollectionsKt.M0(x1Var.r(), a1Var), null, a0Var4.b(), a0Var4.o(), x1Var.p());
        }
        return new x1.b(w10, zVar.e(), x1Var.p(), x1Var.q(), ((z) x1Var).l());
    }

    private final d Z1(final b bVar, final x1.k kVar, final k.a aVar) {
        h1 h1Var;
        String u10;
        d.c.EnumC0522c enumC0522c;
        int i10 = e.f38263a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new qr.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f37472i;
        } else {
            h1Var = h1.f37471e;
        }
        int[] iArr = e.f38264b;
        int i11 = iArr[h1Var.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    u10 = bVar.x().z();
                } else {
                    throw new qr.p();
                }
            } else {
                u10 = bVar.x().w();
            }
        } else {
            u10 = bVar.x().u();
        }
        String c10 = bVar.x().c();
        int i12 = iArr[h1Var.ordinal()];
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 == 3) {
                    enumC0522c = d.c.EnumC0522c.f38226e;
                } else {
                    throw new qr.p();
                }
            } else {
                enumC0522c = d.c.EnumC0522c.f38231r;
            }
        } else {
            enumC0522c = d.c.EnumC0522c.f38228o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: mp.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0522c, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f38045g;
        g.a aVar3 = this.f38046h;
        boolean a10 = kVar.a();
        return j2.f(bVar, aVar, kVar.e(), c10, str, null, a10, fVar, v10, t10, b10, new Function0() { // from class: mp.n2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c22;
                c22 = x5.c2(k.a.this, this);
                return c22;
            }
        }, new Function0() { // from class: mp.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d22;
                d22 = x5.d2(x5.this, aVar);
                return d22;
            }
        }, k10, new Function0() { // from class: mp.p2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit e22;
                e22 = x5.e2(x5.this, aVar, bVar);
                return e22;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, kVar.q(), kVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(k.a aVar, x5 x5Var, final x1.k kVar, final b bVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.s5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b22;
                b22 = x5.b2(x1.k.this, bVar, (r.c) obj);
                return b22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    private final d b1(final b bVar, final x1.a aVar, final k.a aVar2) {
        x1.g gVar;
        String str;
        String str2;
        d.c.EnumC0522c enumC0522c;
        d.c.b aVar3;
        boolean z10;
        boolean z11;
        final a1.b e10 = aVar.e();
        if (aVar.l()) {
            if (aVar.x() == x1.g.f37944d) {
                gVar = x1.g.f37945e;
            } else {
                gVar = aVar.x();
            }
        } else {
            gVar = x1.g.f37944d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f38042d;
            if (gVar != x1.g.f37944d && gVar != x1.g.f37947o) {
                z11 = false;
            } else {
                z11 = true;
            }
            bn.w.l(aVar2, bVar2.a(e10, z11), Reflection.typeOf(b1.class), "", new Function1() { // from class: mp.p3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r c12;
                    c12 = x5.c1(x5.this, aVar, aVar2, (b1.c) obj);
                    return c12;
                }
            });
        }
        yn.b B = aVar.B();
        if (B != null) {
            str = i3(B, bVar.x(), aVar.e());
        } else {
            str = null;
        }
        if (e10 == a1.b.f37336e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f37337i) {
            str2 = bVar.x().w();
        } else if (aVar.B() != null) {
            str2 = str;
        } else if (e10 == a1.b.f37335d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f38263a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0522c = d.c.EnumC0522c.f38226e;
                } else {
                    throw new qr.p();
                }
            } else {
                enumC0522c = d.c.EnumC0522c.f38232s;
            }
        } else {
            enumC0522c = d.c.EnumC0522c.f38229p;
        }
        d.c.EnumC0522c enumC0522c2 = enumC0522c;
        if (aVar.j() && gVar != x1.g.f37946i && gVar != x1.g.f37947o) {
            aVar3 = new d.c.b.C0521d(new Function1() { // from class: mp.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = x5.e1(a1.b.this, aVar2, this, aVar, (String) obj);
                    return e12;
                }
            }, new Function1() { // from class: mp.s3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = x5.g1(x5.this, aVar2, (Throwable) obj);
                    return g12;
                }
            }, false, enumC0522c2, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0522c2, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f37946i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f37947o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar2);
        ao.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f38045g;
        g.a aVar5 = this.f38046h;
        boolean a10 = aVar.a();
        a1.b e11 = aVar.e();
        float A = aVar.A();
        yn.a w10 = aVar.w();
        v.b q10 = aVar.q();
        boolean l10 = aVar.l();
        if (aVar.x() != gVar2 && aVar.x() != gVar3) {
            z10 = false;
        } else {
            z10 = true;
        }
        return j2.f(bVar, aVar2, e11, c10, str4, str3, a10, aVar3, v10, t10, b10, new Function0() { // from class: mp.t3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h12;
                h12 = x5.h1(k.a.this, this);
                return h12;
            }
        }, new Function0() { // from class: mp.u3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i12;
                i12 = x5.i1(x5.this, aVar2);
                return i12;
            }
        }, k10, new Function0() { // from class: mp.v3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j12;
                j12 = x5.j1(x5.this, aVar2, bVar);
                return j12;
            }
        }, l32, null, b11, aVar4, aVar5, A, w10, q10, l10, z10, false, 33554432, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b2(x1.k kVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List c10 = kVar.c();
        action.e(new x1.a(null, 0.0f, null, kVar.r(), c10, System.currentTimeMillis(), kVar.a(), kVar.o(), kVar.b(), m6.i(action, false), bVar.s(), kVar.q(), kVar.l(), null, 8193, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r c1(final x5 x5Var, final x1.a aVar, final k.a aVar2, final b1.c output) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.r5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d12;
                d12 = x5.d1(b1.c.this, x5Var, aVar, aVar2, (r.c) obj);
                return d12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    private final void c3(k.a aVar) {
        Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        booleanRef.element = true;
        aVar.a("check_if_manual_capture_enabled", new l(booleanRef, aVar, this, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(b1.c cVar, x5 x5Var, x1.a aVar, k.a aVar2, r.c action) {
        x1.a aVar3;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.a) {
            aVar3 = (x1.a) c10;
        } else {
            aVar3 = null;
        }
        x1.a aVar4 = aVar3;
        if (aVar4 == null) {
            return Unit.f32056a;
        }
        if (cVar instanceof b1.c.a) {
            b1.c.a aVar5 = (b1.c.a) cVar;
            if (aVar5.c() != null) {
                a1 c11 = aVar5.c();
                if (c11 != null) {
                    action.e(x5Var.Z0(action, aVar, c11));
                } else {
                    throw new IllegalArgumentException("Required value was null.");
                }
            } else {
                action.e(x1.a.v(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f37946i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0506c) {
            b1.c.C0506c c0506c = (b1.c.C0506c) cVar;
            if (c0506c.b() == yn.b.f55531s) {
                action.e(x1.a.v(aVar4, null, c0506c.c(), c0506c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.v(aVar4, c0506c.b(), c0506c.c(), c0506c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new qr.p();
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    private final void d3(k.a aVar, Throwable th2) {
        String message;
        String message2 = th2.getMessage();
        if (message2 != null && StringsKt.V(message2, "ENOSPC", false, 2, null)) {
            e3(aVar, new c.C0515c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        } else if (th2 instanceof x.o0) {
            Throwable cause = th2.getCause();
            if (cause != null && (message = cause.getMessage()) != null && StringsKt.V(message, "ENOSPC", false, 2, null)) {
                e3(aVar, new c.C0515c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
                return;
            }
            String canonicalName = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0515c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName)));
        } else {
            String canonicalName2 = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0515c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.a aVar2, String absolutePath) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f37331i, bVar, System.currentTimeMillis());
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.i5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f12;
                f12 = x5.f1(x5.this, aVar2, cVar, (r.c) obj);
                return f12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    private final void e3(k.a aVar, final c cVar) {
        bn.r d10;
        if (!(cVar instanceof c.d) && !(cVar instanceof c.a)) {
            boolean z10 = cVar instanceof c.C0515c;
        }
        bn.h c10 = aVar.c();
        d10 = bn.z.d(this, null, new Function1() { // from class: mp.d5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f32;
                f32 = x5.f3(x5.c.this, (r.c) obj);
                return f32;
            }
        }, 1, null);
        c10.d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(x5 x5Var, x1.a aVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, aVar, cVar));
        return Unit.f32056a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0521d c0521d;
        if (lVar.f().c()) {
            bn.w.l(aVar, this.f38042d.a(a1.b.f37335d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: mp.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r g22;
                    g22 = x5.g2(x5.this, lVar, bVar, aVar, (b1.c) obj);
                    return g22;
                }
            });
        }
        final a1.b e10 = lVar.e();
        boolean j10 = lVar.j();
        if (!j10) {
            c3(aVar);
        }
        d.c.EnumC0522c enumC0522c = d.c.EnumC0522c.f38226e;
        yn.b A = lVar.A();
        if (A != null) {
            str = i3(A, bVar.x(), lVar.e());
        } else {
            str = null;
        }
        String str3 = str;
        if (str3 == null) {
            z10 = j10;
            str2 = bVar.x().A();
        } else {
            z10 = j10;
            str2 = str3;
        }
        String c10 = bVar.x().c();
        if (z10) {
            if (Y0(bVar)) {
                aVar2 = new d.c.b.e(new Function0() { // from class: mp.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i22;
                        i22 = x5.i2(k.a.this, this, lVar, bVar);
                        return i22;
                    }
                }, enumC0522c, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
            } else {
                c0521d = new d.c.b.C0521d(new Function1() { // from class: mp.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit k22;
                        k22 = x5.k2(a1.b.this, aVar, this, lVar, (String) obj);
                        return k22;
                    }
                }, new Function1() { // from class: mp.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m22;
                        m22 = x5.m2(x5.this, aVar, (Throwable) obj);
                        return m22;
                    }
                }, false, enumC0522c, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a), 4, null);
                boolean t10 = bVar.t();
                zp.a b10 = this.f38048j.b();
                Function1 k10 = m6.k(aVar);
                ao.a l32 = l3(bVar);
                d.c.a v10 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f38045g;
                g.a aVar4 = this.f38046h;
                boolean a10 = lVar.a();
                return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a10, c0521d, v10, t10, b10, new Function0() { // from class: mp.u2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit n22;
                        n22 = x5.n2(k.a.this, this);
                        return n22;
                    }
                }, new Function0() { // from class: mp.w2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit o22;
                        o22 = x5.o2(x5.this, aVar);
                        return o22;
                    }
                }, k10, new Function0() { // from class: mp.x2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p22;
                        p22 = x5.p2(x5.this, aVar, bVar);
                        return p22;
                    }
                }, l32, null, b11, aVar3, aVar4, lVar.x(), lVar.w(), lVar.q(), lVar.l(), false, false, 50331648, null);
            }
        } else {
            aVar2 = new d.c.b.a(enumC0522c, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        }
        c0521d = aVar2;
        boolean t102 = bVar.t();
        zp.a b102 = this.f38048j.b();
        Function1 k102 = m6.k(aVar);
        ao.a l322 = l3(bVar);
        d.c.a v102 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f38045g;
        g.a aVar42 = this.f38046h;
        boolean a102 = lVar.a();
        return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a102, c0521d, v102, t102, b102, new Function0() { // from class: mp.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n22;
                n22 = x5.n2(k.a.this, this);
                return n22;
            }
        }, new Function0() { // from class: mp.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o22;
                o22 = x5.o2(x5.this, aVar);
                return o22;
            }
        }, k102, new Function0() { // from class: mp.x2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p22;
                p22 = x5.p2(x5.this, aVar, bVar);
                return p22;
            }
        }, l322, null, b112, aVar32, aVar42, lVar.x(), lVar.w(), lVar.q(), lVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f3(c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(cVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r g2(final x5 x5Var, final x1.l lVar, final b bVar, final k.a aVar, final b1.c output) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.k5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h22;
                h22 = x5.h2(b1.c.this, lVar, bVar, x5Var, aVar, (r.c) obj);
                return h22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g3(r.c cVar) {
        cVar.d(new c.C0515c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h2(b1.c cVar, x1.l lVar, b bVar, x5 x5Var, k.a aVar, r.c action) {
        x1.l lVar2;
        x1.l v10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.l) {
            lVar2 = (x1.l) c10;
        } else {
            lVar2 = null;
        }
        x1.l lVar3 = lVar2;
        if (lVar3 == null) {
            return Unit.f32056a;
        }
        if (cVar instanceof b1.c.a) {
            List c11 = lVar.c();
            b1.c.a aVar2 = (b1.c.a) cVar;
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.o(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.q(), lVar.l()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0506c) {
            b1.c.C0506c c0506c = (b1.c.C0506c) cVar;
            if (c0506c.b() == yn.b.f55531s) {
                v10 = x1.l.v(lVar3, false, null, c0506c.c(), c0506c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                v10 = x1.l.v(lVar3, false, c0506c.b(), c0506c.c(), c0506c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(v10);
        } else {
            throw new qr.p();
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i2(k.a aVar, x5 x5Var, final x1.l lVar, final b bVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.o5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j22;
                j22 = x5.j2(x1.l.this, bVar, (r.c) obj);
                return j22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    private final String i3(yn.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f38265c[bVar.ordinal()]) {
            case 1:
                return aVar.p();
            case 2:
                return aVar.r();
            case 3:
                return aVar.s();
            case 4:
                return aVar.y();
            case 5:
                return aVar.q();
            case 6:
                return aVar.p();
            case 7:
                int i10 = e.f38263a[bVar2.ordinal()];
                if (i10 == 1 || i10 == 2) {
                    return null;
                }
                if (i10 == 3) {
                    return aVar.z();
                }
                throw new qr.p();
            case 8:
                return aVar.p();
            case 9:
                return aVar.p();
            default:
                throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j2(x1.l lVar, b bVar, r.c action) {
        x1.l lVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.l) {
            lVar2 = (x1.l) c10;
        } else {
            lVar2 = null;
        }
        if (lVar2 == null) {
            return Unit.f32056a;
        }
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.o(), m6.i(action, false), bVar.s(), lVar.q(), lVar.l(), 2, null));
        return Unit.f32056a;
    }

    private final vp.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f52896a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b h10 = ((x1.k) x1Var).h();
            if (h10 != null) {
                str = m1.a(h10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f52896a;
        } else {
            if (x1Var instanceof z) {
                a1.b h11 = ((z) x1Var).h();
                if (h11 != null) {
                    str = m1.a(h11);
                }
                return new j.f(str);
            } else if (x1Var instanceof x1.b) {
                return j3(((x1.b) x1Var).v());
            } else {
                if (!(x1Var instanceof x1.e) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q)) {
                    if (x1Var instanceof x1.i) {
                        return j.a.f52892a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f52895a;
                    }
                    throw new qr.p();
                }
                return j.b.f52893a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0522c enumC0522c;
        String c10 = bVar.x().c();
        if (bVar2.v() instanceof x1.n) {
            enumC0522c = d.c.EnumC0522c.f38235v;
        } else {
            int i10 = e.f38263a[bVar2.u().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0522c = d.c.EnumC0522c.f38227i;
                    } else {
                        throw new qr.p();
                    }
                } else {
                    enumC0522c = d.c.EnumC0522c.f38233t;
                }
            } else {
                enumC0522c = d.c.EnumC0522c.f38230q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: mp.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0522c, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: mp.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n12;
                n12 = x5.n1(k.a.this, this);
                return n12;
            }
        }, new Function0() { // from class: mp.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o12;
                o12 = x5.o1(x5.this, aVar);
                return o12;
            }
        }, k10, new Function0() { // from class: mp.h3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p12;
                p12 = x5.p1(x5.this, aVar, bVar);
                return p12;
            }
        }, l32, null, bVar.z().b(), this.f38045g, this.f38046h, 0.0f, null, bVar2.q(), bVar2.w(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f37331i, bVar, System.currentTimeMillis());
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.n5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l22;
                l22 = x5.l2(x5.this, lVar, cVar, (r.c) obj);
                return l22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    private final boolean k3(x1 x1Var) {
        if (!(x1Var instanceof x1.a) && !(x1Var instanceof x1.b) && !(x1Var instanceof x1.c) && !(x1Var instanceof x1.d) && !(x1Var instanceof x1.k) && !(x1Var instanceof x1.l) && !(x1Var instanceof x1.m) && !(x1Var instanceof x1.o) && !(x1Var instanceof x1.p) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q) && !(x1Var instanceof x1.e)) {
            if (!(x1Var instanceof x1.j) && !(x1Var instanceof x1.h) && !(x1Var instanceof x1.i) && !(x1Var instanceof x1.n)) {
                throw new qr.p();
            }
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(k.a aVar, x5 x5Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.g5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m12;
                m12 = x5.m1((r.c) obj);
                return m12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f32056a;
    }

    private final ao.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f38039a);
        if (Result.e(f10) == null) {
            return (ao.a) f10;
        }
        return ao.a.f6228i;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r.c action) {
        x1.b bVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        x1 x1Var = null;
        if (c10 instanceof x1.b) {
            bVar = (x1.b) c10;
        } else {
            bVar = null;
        }
        if (bVar != null) {
            x1Var = bVar.v();
        }
        if (x1Var != null) {
            action.e(x1Var);
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m2(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f32056a;
    }

    private final boolean m3(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f38039a);
        if (Result.e(d10) == null) {
            ((Boolean) d10).getClass();
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            bn.w.l(aVar, this.f38042d.a(a1.b.f37335d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: mp.p4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r r12;
                    r12 = x5.r1(x5.this, aVar, (b1.c) obj);
                    return r12;
                }
            });
        }
        aVar.a("countdown_" + cVar.x(), new j(aVar, this, cVar, bVar, null));
        yn.b B = cVar.B();
        if (B != null) {
            str = i3(B, bVar.x(), cVar.e());
        } else {
            str = null;
        }
        if (str == null) {
            str2 = bVar.x().p();
        } else {
            str2 = str;
        }
        String c10 = bVar.x().c();
        int x10 = cVar.x();
        if (l3(bVar) == ao.a.f6227e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0519b c0519b = new d.c.b.C0519b(x10, z10, bVar.z().a(), d.c.EnumC0522c.f38226e, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a), new Function1() { // from class: mp.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f38045g;
        g.a aVar3 = this.f38046h;
        return j2.f(bVar, aVar, cVar.e(), c10, str2, str, cVar.a(), c0519b, v10, t10, b10, new Function0() { // from class: mp.r4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit u12;
                u12 = x5.u1(k.a.this, this);
                return u12;
            }
        }, new Function0() { // from class: mp.s4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v12;
                v12 = x5.v1(x5.this, aVar);
                return v12;
            }
        }, k10, new Function0() { // from class: mp.t4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w12;
                w12 = x5.w1(x5.this, aVar, bVar);
                return w12;
            }
        }, l32, null, b11, aVar2, aVar3, cVar.A(), cVar.w(), cVar.q(), cVar.l(), false, false, 50331648, null);
    }

    private final d q2(final b bVar, final x1.m mVar, final k.a aVar) {
        if (mVar.f().c()) {
            bn.w.l(aVar, this.f38042d.a(a1.b.f37335d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: mp.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        bn.w.l(aVar, o.a.b(bn.o.f6917a, 1000L, null, 2, null), Reflection.typeOf(bn.o.class, KTypeProjection.f32160c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: mp.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r t22;
                t22 = x5.t2(x5.this, mVar, bVar, (Unit) obj);
                return t22;
            }
        });
        String c10 = bVar.x().c();
        String t10 = bVar.x().t();
        String t11 = bVar.x().t();
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0522c.f38226e, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        boolean t12 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f38045g;
        g.a aVar4 = this.f38046h;
        boolean a10 = mVar.a();
        return j2.f(bVar, aVar, mVar.e(), c10, t10, t11, a10, aVar2, v10, t12, b10, new Function0() { // from class: mp.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v22;
                v22 = x5.v2(k.a.this, this);
                return v22;
            }
        }, new Function0() { // from class: mp.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w22;
                w22 = x5.w2(x5.this, aVar);
                return w22;
            }
        }, k10, new Function0() { // from class: mp.c3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit x22;
                x22 = x5.x2(x5.this, aVar, bVar);
                return x22;
            }
        }, l32, null, b11, aVar3, aVar4, mVar.x(), mVar.w(), mVar.q(), mVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r r1(final x5 x5Var, final k.a aVar, final b1.c output) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.e5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s12;
                s12 = x5.s1(b1.c.this, x5Var, aVar, (r.c) obj);
                return s12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r r2(final x5 x5Var, final k.a aVar, final x1.m mVar, final b bVar, final b1.c output) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.z4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit s22;
                s22 = x5.s2(b1.c.this, x5Var, aVar, mVar, bVar, (r.c) obj);
                return s22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(b1.c cVar, x5 x5Var, k.a aVar, r.c action) {
        x1.c cVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.c) {
            cVar2 = (x1.c) c10;
        } else {
            cVar2 = null;
        }
        x1.c cVar3 = cVar2;
        if (cVar3 == null) {
            return Unit.f32056a;
        }
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0506c) {
                b1.c.C0506c c0506c = (b1.c.C0506c) cVar;
                action.e(x1.c.v(cVar3, 0, c0506c.b(), 0L, null, 0L, c0506c.c(), c0506c.a(), null, null, null, false, null, false, 8093, null));
            } else {
                throw new qr.p();
            }
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s2(b1.c cVar, x5 x5Var, k.a aVar, x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0506c) {
                b1.c.C0506c c0506c = (b1.c.C0506c) cVar;
                yn.b b10 = c0506c.b();
                List c10 = mVar.c();
                long i10 = mVar.i();
                un.v b11 = mVar.b();
                action.e(new x1.l(false, b10, c0506c.c(), c0506c.a(), c10, i10, false, mVar.o(), b11, m6.i(action, false), bVar.s(), mVar.q(), mVar.l(), 65, null));
            } else {
                throw new qr.p();
            }
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r t2(x5 x5Var, final x1.m mVar, final b bVar, Unit it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.x4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit u22;
                u22 = x5.u2(x1.m.this, bVar, (r.c) obj);
                return u22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f32056a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.o(), mVar.x(), mVar.w(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.q(), mVar.l(), 2, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f38103a);
        return Unit.f32056a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0522c enumC0522c;
        String str;
        final x1.d dVar2;
        d.c.b c0519b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f38263a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0522c = d.c.EnumC0522c.f38226e;
                } else {
                    throw new qr.p();
                }
            } else {
                enumC0522c = d.c.EnumC0522c.f38232s;
            }
        } else {
            enumC0522c = d.c.EnumC0522c.f38229p;
        }
        d.c.EnumC0522c enumC0522c2 = enumC0522c;
        String str2 = null;
        aVar.a("countdown_to_manual_capture_" + dVar.w(), new k(aVar, this, null));
        yn.b x10 = dVar.x();
        if (x10 != null) {
            str2 = i3(x10, bVar.x(), dVar.e());
        }
        String str3 = str2;
        if (str3 == null) {
            str = bVar.x().p();
        } else {
            str = str3;
        }
        String c10 = bVar.x().c();
        if (dVar.w() == 0) {
            dVar2 = dVar;
            c0519b = new d.c.b.C0521d(new Function1() { // from class: mp.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = x5.y1(a1.b.this, aVar, this, dVar2, (String) obj);
                    return y12;
                }
            }, new Function1() { // from class: mp.y4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A1;
                    A1 = x5.A1(x5.this, aVar, (Throwable) obj);
                    return A1;
                }
            }, true, enumC0522c2, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a));
        } else {
            dVar2 = dVar;
            int w10 = dVar2.w();
            if (l3(bVar) == ao.a.f6227e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0519b = new d.c.b.C0519b(w10, z10, bVar.z().a(), enumC0522c2, !Intrinsics.areEqual(bVar.u(), d2.b.f37423a), new Function1() { // from class: mp.j5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B1;
                    B1 = x5.B1(k.a.this, (Throwable) obj);
                    return B1;
                }
            });
        }
        d.c.b bVar3 = c0519b;
        boolean t10 = bVar.t();
        zp.a b10 = this.f38048j.b();
        Function1 k10 = m6.k(aVar);
        ao.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f38045g;
        g.a aVar3 = this.f38046h;
        return j2.f(bVar, aVar, dVar2.e(), c10, str, str3, dVar2.a(), bVar3, v10, t10, b10, new Function0() { // from class: mp.u5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C1;
                C1 = x5.C1(k.a.this, this);
                return C1;
            }
        }, new Function0() { // from class: mp.w5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D1;
                D1 = x5.D1(x5.this, aVar);
                return D1;
            }
        }, k10, new Function0() { // from class: mp.l2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E1;
                E1 = x5.E1(x5.this, aVar, bVar);
                return E1;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, dVar2.q(), dVar2.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f38039a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f37331i, bVar, System.currentTimeMillis());
        bn.h c10 = aVar.c();
        d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.a5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = x5.z1(x5.this, dVar, cVar, (r.c) obj);
                return z12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        bn.w.l(aVar, this.f38040b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.r(), nVar.u(), nVar.b(), nVar.o()), Reflection.typeOf(op.c.class), "", new Function1() { // from class: mp.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        zp.b.d(this.f38048j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        zp.a b10 = this.f38048j.b();
        Function0 function0 = new Function0() { // from class: mp.g4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C2;
                C2 = x5.C2(x5.this, aVar);
                return C2;
            }
        };
        Function0 function02 = new Function0() { // from class: mp.h4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D2;
                D2 = x5.D2(x5.this, aVar);
                return D2;
            }
        };
        NextStep.Selfie.AssetConfig.RecordPage recordPage = bVar.a().getRecordPage();
        if (recordPage != null) {
            remoteImage = recordPage.getLoadingPictograph();
        } else {
            remoteImage = null;
        }
        return new d.f(g10, f10, r10, y10, b10, function0, function02, remoteImage);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(x5 x5Var, x1.d dVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, dVar, cVar));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r z2(final x5 x5Var, final k.a aVar, final c.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0569b) {
            d11 = bn.z.d(x5Var, null, new Function1() { // from class: mp.u4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A2;
                    A2 = x5.A2(x5.this, aVar, (r.c) obj);
                    return A2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = bn.z.d(x5Var, null, new Function1() { // from class: mp.v4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B2;
                    B2 = x5.B2(x5.this, aVar, it, (r.c) obj);
                    return B2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    @Override // bn.k
    /* renamed from: X0 */
    public x1 d(b props, bn.i iVar) {
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
            x1 x1Var = (x1) readParcelable;
            if (x1Var != null) {
                return x1Var;
            }
        }
        if (props.w()) {
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f51880d, false, 163, null);
        }
        return new x1.j(null, null, 2, null);
    }

    @Override // bn.k
    /* renamed from: a1 */
    public Object f(b renderProps, x1 renderState, k.a context) {
        Object y22;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!k3(renderState)) {
            context.a("close_camera", new f(null));
        }
        if (!m3(renderProps)) {
            context.a("output_webrtc_error", new g(context, this, null));
        }
        boolean z10 = renderState instanceof x1.n;
        this.f38048j.c(renderProps.b(), renderProps.g(), !z10);
        this.f38049k.c(new i.e(renderProps.k(), j3(renderState)));
        if (renderState instanceof x1.j) {
            y22 = U1(renderProps, (x1.j) renderState, context);
        } else if (renderState instanceof x1.p) {
            y22 = O2(renderProps, (x1.p) renderState, context);
        } else if (renderState instanceof x1.o) {
            y22 = E2(renderProps, (x1.o) renderState, context);
        } else if (renderState instanceof x1.h) {
            y22 = K1(renderProps, (x1.h) renderState, context);
        } else if (renderState instanceof x1.k) {
            y22 = Z1(renderProps, (x1.k) renderState, context);
        } else if (renderState instanceof x1.l) {
            y22 = f2(renderProps, (x1.l) renderState, context);
        } else if (renderState instanceof x1.m) {
            y22 = q2(renderProps, (x1.m) renderState, context);
        } else if (renderState instanceof x1.c) {
            y22 = q1(renderProps, (x1.c) renderState, context);
        } else if (renderState instanceof x1.d) {
            y22 = x1(renderProps, (x1.d) renderState, context);
        } else if (renderState instanceof x1.a) {
            y22 = b1(renderProps, (x1.a) renderState, context);
        } else if (renderState instanceof x1.b) {
            y22 = k1(renderProps, (x1.b) renderState, context);
        } else if (renderState instanceof x1.e) {
            y22 = this.f38044f.q(renderProps, (x1.e) renderState, context);
        } else if (renderState instanceof x1.f) {
            y22 = F1(renderProps, (x1.f) renderState, context);
        } else if (renderState instanceof x1.q) {
            y22 = W2(renderProps, (x1.q) renderState, context);
        } else if (renderState instanceof x1.i) {
            y22 = N1(renderProps, (x1.i) renderState, context);
        } else if (z10) {
            y22 = y2(renderProps, (x1.n) renderState, context);
        } else {
            throw new qr.p();
        }
        if (y22 instanceof d.c) {
            return hp.l1.c(y22);
        }
        return y22;
    }

    @Override // bn.k
    /* renamed from: h3 */
    public bn.i g(x1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return dn.s.a(state);
    }
}
