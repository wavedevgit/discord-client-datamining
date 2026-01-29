package ep;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Size;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig;
import ep.a1;
import ep.b1;
import ep.d2;
import ep.x1;
import ep.x5;
import gp.c;
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
import kq.b;
import mn.v;
import mn.z;
import np.i;
import np.j;
import okio.ByteString;
import on.g;
import tm.k;
import tm.o;
import tm.r;
import zo.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x5 extends tm.k {

    /* renamed from: l  reason: collision with root package name */
    public static final a f23715l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f23716a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f23717b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f23718c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f23719d;

    /* renamed from: e  reason: collision with root package name */
    private final zo.c1 f23720e;

    /* renamed from: f  reason: collision with root package name */
    private final hp.j f23721f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f23722g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f23723h;

    /* renamed from: i  reason: collision with root package name */
    private final rn.a f23724i;

    /* renamed from: j  reason: collision with root package name */
    private final rp.b f23725j;

    /* renamed from: k  reason: collision with root package name */
    private final np.c f23726k;

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
        private final String f23727a;

        /* renamed from: b  reason: collision with root package name */
        private final String f23728b;

        /* renamed from: c  reason: collision with root package name */
        private final String f23729c;

        /* renamed from: d  reason: collision with root package name */
        private final String f23730d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f23731e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f23732f;

        /* renamed from: g  reason: collision with root package name */
        private final String f23733g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f23734h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f23735i;

        /* renamed from: j  reason: collision with root package name */
        private final a f23736j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f23737k;

        /* renamed from: l  reason: collision with root package name */
        private final List f23738l;

        /* renamed from: m  reason: collision with root package name */
        private final String f23739m;

        /* renamed from: n  reason: collision with root package name */
        private final String f23740n;

        /* renamed from: o  reason: collision with root package name */
        private final String f23741o;

        /* renamed from: p  reason: collision with root package name */
        private final String f23742p;

        /* renamed from: q  reason: collision with root package name */
        private final String f23743q;

        /* renamed from: r  reason: collision with root package name */
        private final String f23744r;

        /* renamed from: s  reason: collision with root package name */
        private final String f23745s;

        /* renamed from: t  reason: collision with root package name */
        private final String f23746t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f23747u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f23748v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f23749w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f23750x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f23751y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f23752z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f23753a;

            /* renamed from: b  reason: collision with root package name */
            private final String f23754b;

            /* renamed from: c  reason: collision with root package name */
            private final String f23755c;

            /* renamed from: d  reason: collision with root package name */
            private final String f23756d;

            /* renamed from: e  reason: collision with root package name */
            private final String f23757e;

            /* renamed from: f  reason: collision with root package name */
            private final String f23758f;

            /* renamed from: g  reason: collision with root package name */
            private final String f23759g;

            /* renamed from: h  reason: collision with root package name */
            private final String f23760h;

            /* renamed from: i  reason: collision with root package name */
            private final String f23761i;

            /* renamed from: j  reason: collision with root package name */
            private final String f23762j;

            /* renamed from: k  reason: collision with root package name */
            private final String f23763k;

            /* renamed from: l  reason: collision with root package name */
            private final String f23764l;

            /* renamed from: m  reason: collision with root package name */
            private final String f23765m;

            /* renamed from: n  reason: collision with root package name */
            private final String f23766n;

            /* renamed from: o  reason: collision with root package name */
            private final String f23767o;

            /* renamed from: p  reason: collision with root package name */
            private final String f23768p;

            /* renamed from: q  reason: collision with root package name */
            private final String f23769q;

            /* renamed from: r  reason: collision with root package name */
            private final String f23770r;

            /* renamed from: s  reason: collision with root package name */
            private final String f23771s;

            /* renamed from: t  reason: collision with root package name */
            private final String f23772t;

            /* renamed from: u  reason: collision with root package name */
            private final String f23773u;

            /* renamed from: v  reason: collision with root package name */
            private final String f23774v;

            /* renamed from: w  reason: collision with root package name */
            private final String f23775w;

            /* renamed from: x  reason: collision with root package name */
            private final String f23776x;

            /* renamed from: y  reason: collision with root package name */
            private final String f23777y;

            /* renamed from: z  reason: collision with root package name */
            private final String f23778z;

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
                this.f23753a = title;
                this.f23754b = prompt;
                this.f23755c = disclosure;
                this.f23756d = startButton;
                this.f23757e = capturePageTitle;
                this.f23758f = selfieHintTakePhoto;
                this.f23759g = selfieHintCenterFace;
                this.f23760h = selfieHintFaceTooClose;
                this.f23761i = selfieHintFaceTooFar;
                this.f23762j = selfieHintMultipleFaces;
                this.f23763k = selfieHintFaceIncomplete;
                this.f23764l = selfieHintPoseNotCentered;
                this.f23765m = selfieHintLookLeft;
                this.f23766n = selfieHintLookRight;
                this.f23767o = selfieHintHoldStill;
                this.f23768p = processingTitle;
                this.f23769q = processingDescription;
                this.f23770r = str;
                this.f23771s = str2;
                this.f23772t = str3;
                this.f23773u = str4;
                this.f23774v = str5;
                this.f23775w = str6;
                this.f23776x = str7;
                this.f23777y = str8;
                this.f23778z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f23758f;
            }

            public final String B() {
                return this.f23756d;
            }

            public final String C() {
                return this.f23753a;
            }

            public final String a() {
                return this.f23777y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f23757e;
            }

            public final String d() {
                return this.f23778z;
            }

            public final String e() {
                return this.f23755c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f23753a, aVar.f23753a) && Intrinsics.areEqual(this.f23754b, aVar.f23754b) && Intrinsics.areEqual(this.f23755c, aVar.f23755c) && Intrinsics.areEqual(this.f23756d, aVar.f23756d) && Intrinsics.areEqual(this.f23757e, aVar.f23757e) && Intrinsics.areEqual(this.f23758f, aVar.f23758f) && Intrinsics.areEqual(this.f23759g, aVar.f23759g) && Intrinsics.areEqual(this.f23760h, aVar.f23760h) && Intrinsics.areEqual(this.f23761i, aVar.f23761i) && Intrinsics.areEqual(this.f23762j, aVar.f23762j) && Intrinsics.areEqual(this.f23763k, aVar.f23763k) && Intrinsics.areEqual(this.f23764l, aVar.f23764l) && Intrinsics.areEqual(this.f23765m, aVar.f23765m) && Intrinsics.areEqual(this.f23766n, aVar.f23766n) && Intrinsics.areEqual(this.f23767o, aVar.f23767o) && Intrinsics.areEqual(this.f23768p, aVar.f23768p) && Intrinsics.areEqual(this.f23769q, aVar.f23769q) && Intrinsics.areEqual(this.f23770r, aVar.f23770r) && Intrinsics.areEqual(this.f23771s, aVar.f23771s) && Intrinsics.areEqual(this.f23772t, aVar.f23772t) && Intrinsics.areEqual(this.f23773u, aVar.f23773u) && Intrinsics.areEqual(this.f23774v, aVar.f23774v) && Intrinsics.areEqual(this.f23775w, aVar.f23775w) && Intrinsics.areEqual(this.f23776x, aVar.f23776x) && Intrinsics.areEqual(this.f23777y, aVar.f23777y) && Intrinsics.areEqual(this.f23778z, aVar.f23778z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f23769q;
            }

            public final String g() {
                return this.f23768p;
            }

            public final String h() {
                return this.f23754b;
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
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f23753a.hashCode() * 31) + this.f23754b.hashCode()) * 31) + this.f23755c.hashCode()) * 31) + this.f23756d.hashCode()) * 31) + this.f23757e.hashCode()) * 31) + this.f23758f.hashCode()) * 31) + this.f23759g.hashCode()) * 31) + this.f23760h.hashCode()) * 31) + this.f23761i.hashCode()) * 31) + this.f23762j.hashCode()) * 31) + this.f23763k.hashCode()) * 31) + this.f23764l.hashCode()) * 31) + this.f23765m.hashCode()) * 31) + this.f23766n.hashCode()) * 31) + this.f23767o.hashCode()) * 31) + this.f23768p.hashCode()) * 31) + this.f23769q.hashCode()) * 31;
                String str = this.f23770r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f23771s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f23772t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f23773u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f23774v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f23775w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f23776x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f23777y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f23778z;
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
                return this.f23776x;
            }

            public final String j() {
                return this.f23775w;
            }

            public final String k() {
                return this.f23771s;
            }

            public final String l() {
                return this.f23772t;
            }

            public final String m() {
                return this.f23773u;
            }

            public final String n() {
                return this.f23774v;
            }

            public final String o() {
                return this.f23770r;
            }

            public final String p() {
                return this.f23759g;
            }

            public final String q() {
                return this.f23763k;
            }

            public final String r() {
                return this.f23760h;
            }

            public final String s() {
                return this.f23761i;
            }

            public final String t() {
                return this.f23767o;
            }

            public String toString() {
                String str = this.f23753a;
                String str2 = this.f23754b;
                String str3 = this.f23755c;
                String str4 = this.f23756d;
                String str5 = this.f23757e;
                String str6 = this.f23758f;
                String str7 = this.f23759g;
                String str8 = this.f23760h;
                String str9 = this.f23761i;
                String str10 = this.f23762j;
                String str11 = this.f23763k;
                String str12 = this.f23764l;
                String str13 = this.f23765m;
                String str14 = this.f23766n;
                String str15 = this.f23767o;
                String str16 = this.f23768p;
                String str17 = this.f23769q;
                String str18 = this.f23770r;
                String str19 = this.f23771s;
                String str20 = this.f23772t;
                String str21 = this.f23773u;
                String str22 = this.f23774v;
                String str23 = this.f23775w;
                String str24 = this.f23776x;
                String str25 = this.f23777y;
                String str26 = this.f23778z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f23765m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f23766n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f23762j;
            }

            public final String z() {
                return this.f23764l;
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
            this.f23727a = sessionToken;
            this.f23728b = inquiryId;
            this.f23729c = fromComponent;
            this.f23730d = fromStep;
            this.f23731e = z10;
            this.f23732f = z11;
            this.f23733g = fieldKeySelfie;
            this.f23734h = z12;
            this.f23735i = z13;
            this.f23736j = strings;
            this.f23737k = selfieType;
            this.f23738l = orderedPoses;
            this.f23739m = str;
            this.f23740n = str2;
            this.f23741o = str3;
            this.f23742p = str4;
            this.f23743q = str5;
            this.f23744r = str6;
            this.f23745s = str7;
            this.f23746t = str8;
            this.f23747u = selfieStepStyle;
            this.f23748v = videoCaptureConfig;
            this.f23749w = assetConfig;
            this.f23750x = pendingPageTextVerticalPosition;
            this.f23751y = poseConfigs;
            this.f23752z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f23749w;
        }

        public final boolean b() {
            return this.f23731e;
        }

        public final String c() {
            return this.f23742p;
        }

        public final String d() {
            return this.f23741o;
        }

        public final String e() {
            return this.f23740n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f23727a, bVar.f23727a) && Intrinsics.areEqual(this.f23728b, bVar.f23728b) && Intrinsics.areEqual(this.f23729c, bVar.f23729c) && Intrinsics.areEqual(this.f23730d, bVar.f23730d) && this.f23731e == bVar.f23731e && this.f23732f == bVar.f23732f && Intrinsics.areEqual(this.f23733g, bVar.f23733g) && this.f23734h == bVar.f23734h && this.f23735i == bVar.f23735i && Intrinsics.areEqual(this.f23736j, bVar.f23736j) && Intrinsics.areEqual(this.f23737k, bVar.f23737k) && Intrinsics.areEqual(this.f23738l, bVar.f23738l) && Intrinsics.areEqual(this.f23739m, bVar.f23739m) && Intrinsics.areEqual(this.f23740n, bVar.f23740n) && Intrinsics.areEqual(this.f23741o, bVar.f23741o) && Intrinsics.areEqual(this.f23742p, bVar.f23742p) && Intrinsics.areEqual(this.f23743q, bVar.f23743q) && Intrinsics.areEqual(this.f23744r, bVar.f23744r) && Intrinsics.areEqual(this.f23745s, bVar.f23745s) && Intrinsics.areEqual(this.f23746t, bVar.f23746t) && Intrinsics.areEqual(this.f23747u, bVar.f23747u) && Intrinsics.areEqual(this.f23748v, bVar.f23748v) && Intrinsics.areEqual(this.f23749w, bVar.f23749w) && this.f23750x == bVar.f23750x && Intrinsics.areEqual(this.f23751y, bVar.f23751y) && this.f23752z == bVar.f23752z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f23739m;
        }

        public final boolean g() {
            return this.f23732f;
        }

        public final b0 h() {
            return this.f23752z;
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
            int hashCode9 = ((((((((((((((((((((((this.f23727a.hashCode() * 31) + this.f23728b.hashCode()) * 31) + this.f23729c.hashCode()) * 31) + this.f23730d.hashCode()) * 31) + Boolean.hashCode(this.f23731e)) * 31) + Boolean.hashCode(this.f23732f)) * 31) + this.f23733g.hashCode()) * 31) + Boolean.hashCode(this.f23734h)) * 31) + Boolean.hashCode(this.f23735i)) * 31) + this.f23736j.hashCode()) * 31) + this.f23737k.hashCode()) * 31) + this.f23738l.hashCode()) * 31;
            String str = this.f23739m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f23740n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f23741o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f23742p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f23743q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f23744r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f23745s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f23746t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f23747u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f23748v.hashCode()) * 31) + this.f23749w.hashCode()) * 31) + this.f23750x.hashCode()) * 31) + this.f23751y.hashCode()) * 31) + this.f23752z.hashCode();
        }

        public final String i() {
            return this.f23733g;
        }

        public final String j() {
            return this.f23729c;
        }

        public final String k() {
            return this.f23730d;
        }

        public final String l() {
            return this.f23728b;
        }

        public final String m() {
            return this.f23746t;
        }

        public final String n() {
            return this.f23745s;
        }

        public final String o() {
            return this.f23744r;
        }

        public final String p() {
            return this.f23743q;
        }

        public final List q() {
            return this.f23738l;
        }

        public final PendingPageTextPosition r() {
            return this.f23750x;
        }

        public final s0 s() {
            return this.f23751y;
        }

        public final boolean t() {
            return this.f23734h;
        }

        public String toString() {
            String str = this.f23727a;
            String str2 = this.f23728b;
            String str3 = this.f23729c;
            String str4 = this.f23730d;
            boolean z10 = this.f23731e;
            boolean z11 = this.f23732f;
            String str5 = this.f23733g;
            boolean z12 = this.f23734h;
            boolean z13 = this.f23735i;
            a aVar = this.f23736j;
            d2 d2Var = this.f23737k;
            List list = this.f23738l;
            String str6 = this.f23739m;
            String str7 = this.f23740n;
            String str8 = this.f23741o;
            String str9 = this.f23742p;
            String str10 = this.f23743q;
            String str11 = this.f23744r;
            String str12 = this.f23745s;
            String str13 = this.f23746t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f23747u;
            VideoCaptureConfig videoCaptureConfig = this.f23748v;
            NextStep.Selfie.AssetConfig assetConfig = this.f23749w;
            PendingPageTextPosition pendingPageTextPosition = this.f23750x;
            s0 s0Var = this.f23751y;
            b0 b0Var = this.f23752z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f23737k;
        }

        public final String v() {
            return this.f23727a;
        }

        public final boolean w() {
            return this.f23735i;
        }

        public final a x() {
            return this.f23736j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f23747u;
        }

        public final VideoCaptureConfig z() {
            return this.f23748v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f23779a = new a();

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
            public static final b f23780a = new b();

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

        /* renamed from: ep.x5$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0307c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f23781a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0307c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f23781a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f23781a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0307c) && Intrinsics.areEqual(this.f23781a, ((C0307c) obj).f23781a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f23781a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f23781a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f23782a = new d();

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
            private final String f23783a;

            /* renamed from: b  reason: collision with root package name */
            private final String f23784b;

            /* renamed from: c  reason: collision with root package name */
            private final String f23785c;

            /* renamed from: d  reason: collision with root package name */
            private final String f23786d;

            /* renamed from: e  reason: collision with root package name */
            private final String f23787e;

            /* renamed from: f  reason: collision with root package name */
            private final String f23788f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f23789g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0308a f23790h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f23791i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f23792j;

            /* renamed from: k  reason: collision with root package name */
            private final rp.a f23793k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f23794l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f23795m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f23796n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f23797o;

            /* renamed from: p  reason: collision with root package name */
            private final sn.a f23798p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f23799q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f23800r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f23801s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f23802t;

            /* renamed from: u  reason: collision with root package name */
            private final float f23803u;

            /* renamed from: v  reason: collision with root package name */
            private final qn.a f23804v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f23805w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f23806x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f23807y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f23808z;

            /* renamed from: ep.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0308a {

                /* renamed from: ep.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0309a extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23809a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0309a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23809a = overlay;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23809a;
                    }
                }

                /* renamed from: ep.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23810a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f23811b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23812c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f23813d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f23814e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f23810a = overlay;
                        this.f23811b = i10;
                        this.f23812c = z10;
                        this.f23813d = j10;
                        this.f23814e = onError;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23810a;
                    }

                    public final int b() {
                        return this.f23811b;
                    }

                    public final long c() {
                        return this.f23813d;
                    }

                    public final Function1 d() {
                        return this.f23814e;
                    }

                    public final boolean e() {
                        return this.f23812c;
                    }
                }

                /* renamed from: ep.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23815a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f23816b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f23817c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f23818d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f23815a = overlay;
                        this.f23816b = finalizeVideo;
                        this.f23817c = onAnimationComplete;
                        this.f23818d = z10;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23815a;
                    }

                    public final Function1 b() {
                        return this.f23816b;
                    }

                    public final Function0 c() {
                        return this.f23817c;
                    }

                    public final boolean d() {
                        return this.f23818d;
                    }
                }

                /* renamed from: ep.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0310d extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23819a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f23820b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f23821c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f23822d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0310d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f23819a = overlay;
                        this.f23820b = processImage;
                        this.f23821c = onError;
                        this.f23822d = z10;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23819a;
                    }

                    public final boolean b() {
                        return this.f23822d;
                    }

                    public final Function1 c() {
                        return this.f23821c;
                    }

                    public final Function1 d() {
                        return this.f23820b;
                    }
                }

                /* renamed from: ep.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23823a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f23824b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f23823a = overlay;
                        this.f23824b = onCaptureClicked;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23823a;
                    }

                    public final Function0 b() {
                        return this.f23824b;
                    }
                }

                /* renamed from: ep.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23825a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f23826b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f23825a = overlay;
                        this.f23826b = poseHintComplete;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23825a;
                    }

                    public final Function0 b() {
                        return this.f23826b;
                    }
                }

                /* renamed from: ep.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23827a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f23828b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f23827a = overlay;
                        this.f23828b = previewReady;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23827a;
                    }

                    public final Function1 b() {
                        return this.f23828b;
                    }
                }

                /* renamed from: ep.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23829a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f23830b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23831c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f23829a = overlay;
                        this.f23830b = onComplete;
                        this.f23831c = z10;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23829a;
                    }

                    public final boolean b() {
                        return this.f23831c;
                    }

                    public final Function0 c() {
                        return this.f23830b;
                    }
                }

                /* renamed from: ep.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0308a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f23832a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f23833b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23832a = overlay;
                        this.f23833b = j10;
                    }

                    @Override // ep.x5.d.a.AbstractC0308a
                    public b a() {
                        return this.f23832a;
                    }

                    public final long b() {
                        return this.f23833b;
                    }
                }

                public /* synthetic */ AbstractC0308a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract b a();

                private AbstractC0308a() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b {

                /* renamed from: d  reason: collision with root package name */
                public static final b f23834d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f23835e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f23836i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f23837o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f23838p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f23839q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f23840r;

                static {
                    b[] a10 = a();
                    f23839q = a10;
                    f23840r = pr.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f23834d, f23835e, f23836i, f23837o, f23838p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f23839q.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, String str3, String str4, String str5, String str6, boolean z10, AbstractC0308a mode, StepStyles.SelfieStepStyle selfieStepStyle, boolean z11, rp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, sn.a videoCaptureMethod, lq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function1 onCameraFacingModeSelected, float f10, qn.a aVar2, v.b facingMode, boolean z13, boolean z14, Function1 onFlashSet, a1.b bVar, boolean z15) {
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
                this.f23783a = str;
                this.f23784b = str2;
                this.f23785c = str3;
                this.f23786d = str4;
                this.f23787e = str5;
                this.f23788f = str6;
                this.f23789g = z10;
                this.f23790h = mode;
                this.f23791i = selfieStepStyle;
                this.f23792j = z11;
                this.f23793k = navigationState;
                this.f23794l = onBack;
                this.f23795m = onCancel;
                this.f23796n = onCameraError;
                this.f23797o = onPermissionChanged;
                this.f23798p = videoCaptureMethod;
                this.f23799q = z12;
                this.f23800r = cameraXControllerFactory;
                this.f23801s = camera2ManagerFactoryFactory;
                this.f23802t = onCameraFacingModeSelected;
                this.f23803u = f10;
                this.f23804v = aVar2;
                this.f23805w = facingMode;
                this.f23806x = z13;
                this.f23807y = z14;
                this.f23808z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f23789g;
            }

            public final boolean B() {
                return this.f23806x;
            }

            public final boolean C() {
                return this.f23807y;
            }

            public final String a() {
                return this.f23786d;
            }

            public final qn.a b() {
                return this.f23804v;
            }

            public final g.a c() {
                return this.f23801s;
            }

            public final z.a d() {
                return this.f23800r;
            }

            public final String e() {
                return this.f23787e;
            }

            public final String f() {
                return this.f23785c;
            }

            public final v.b g() {
                return this.f23805w;
            }

            public final String h() {
                return this.f23784b;
            }

            public final AbstractC0308a i() {
                return this.f23790h;
            }

            public final rp.a j() {
                return this.f23793k;
            }

            public final Function0 k() {
                return this.f23794l;
            }

            public final Function1 l() {
                return this.f23796n;
            }

            public final Function1 m() {
                return this.f23802t;
            }

            public final Function0 n() {
                return this.f23795m;
            }

            public final Function1 o() {
                return this.f23808z;
            }

            public final Function0 p() {
                return this.f23797o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f23803u;
            }

            public final String s() {
                return this.f23788f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f23792j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f23791i;
            }

            public final String w() {
                return this.f23783a;
            }

            public final sn.a x() {
                return this.f23798p;
            }

            public final lq.a y() {
                return null;
            }

            public final boolean z() {
                return this.f23799q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f23841a;

            /* renamed from: b  reason: collision with root package name */
            private final String f23842b;

            /* renamed from: c  reason: collision with root package name */
            private final String f23843c;

            /* renamed from: d  reason: collision with root package name */
            private final String f23844d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f23845e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f23846f;

            /* renamed from: g  reason: collision with root package name */
            private final rp.a f23847g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f23848h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f23849i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f23850j;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String title, String prompt, String disclosure, String start, StepStyles.SelfieStepStyle selfieStepStyle, RemoteImage remoteImage, rp.a navigationState, Function0 onClick, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(start, "start");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f23841a = title;
                this.f23842b = prompt;
                this.f23843c = disclosure;
                this.f23844d = start;
                this.f23845e = selfieStepStyle;
                this.f23846f = remoteImage;
                this.f23847g = navigationState;
                this.f23848h = onClick;
                this.f23849i = onBack;
                this.f23850j = onCancel;
            }

            public final String a() {
                return this.f23843c;
            }

            public final RemoteImage b() {
                return this.f23846f;
            }

            public final rp.a c() {
                return this.f23847g;
            }

            public final Function0 d() {
                return this.f23849i;
            }

            public final Function0 e() {
                return this.f23850j;
            }

            public final Function0 f() {
                return this.f23848h;
            }

            public final String g() {
                return this.f23842b;
            }

            public final String h() {
                return this.f23844d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f23845e;
            }

            public final String j() {
                return this.f23841a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f23851a;

            /* renamed from: b  reason: collision with root package name */
            private final String f23852b;

            /* renamed from: c  reason: collision with root package name */
            private final b f23853c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f23854d;

            /* renamed from: e  reason: collision with root package name */
            private final a f23855e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f23856f;

            /* renamed from: g  reason: collision with root package name */
            private final rp.a f23857g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f23858h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f23859i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f23860j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f23861k;

            /* renamed from: l  reason: collision with root package name */
            private final sn.a f23862l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f23863m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f23864n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f23865o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f23866a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f23867b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f23866a = remoteImage;
                    this.f23867b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f23866a;
                }

                public final RemoteImage b() {
                    return this.f23867b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f23866a, aVar.f23866a) && Intrinsics.areEqual(this.f23867b, aVar.f23867b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f23866a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f23867b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f23866a;
                    RemoteImage remoteImage2 = this.f23867b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0314c f23868a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f23869b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0314c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23868a = overlay;
                        this.f23869b = z10;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23868a;
                    }

                    public boolean b() {
                        return this.f23869b;
                    }
                }

                /* renamed from: ep.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0311b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f23870a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f23871b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f23872c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0314c f23873d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f23874e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f23875f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0311b(int i10, boolean z10, long j10, EnumC0314c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f23870a = i10;
                        this.f23871b = z10;
                        this.f23872c = j10;
                        this.f23873d = overlay;
                        this.f23874e = z11;
                        this.f23875f = onError;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23873d;
                    }

                    public final int b() {
                        return this.f23870a;
                    }

                    public final long c() {
                        return this.f23872c;
                    }

                    public final Function1 d() {
                        return this.f23875f;
                    }

                    public final boolean e() {
                        return this.f23871b;
                    }

                    public boolean f() {
                        return this.f23874e;
                    }
                }

                /* renamed from: ep.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0312c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f23876a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f23877b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23878c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0314c f23879d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f23880e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0312c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0314c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23876a = finalizeVideo;
                        this.f23877b = onAnimationComplete;
                        this.f23878c = z10;
                        this.f23879d = overlay;
                        this.f23880e = z11;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23879d;
                    }

                    public final Function1 b() {
                        return this.f23876a;
                    }

                    public final Function0 c() {
                        return this.f23877b;
                    }

                    public boolean d() {
                        return this.f23880e;
                    }

                    public final boolean e() {
                        return this.f23878c;
                    }
                }

                /* renamed from: ep.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0313d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f23881a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f23882b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23883c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0314c f23884d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f23885e;

                    public /* synthetic */ C0313d(Function1 function1, Function1 function12, boolean z10, EnumC0314c enumC0314c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0314c, z11);
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23884d;
                    }

                    public final boolean b() {
                        return this.f23883c;
                    }

                    public final Function1 c() {
                        return this.f23882b;
                    }

                    public final Function1 d() {
                        return this.f23881a;
                    }

                    public boolean e() {
                        return this.f23885e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0313d(Function1 processImage, Function1 onError, boolean z10, EnumC0314c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23881a = processImage;
                        this.f23882b = onError;
                        this.f23883c = z10;
                        this.f23884d = overlay;
                        this.f23885e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f23886a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0314c f23887b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23888c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0314c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23886a = onCaptureClicked;
                        this.f23887b = overlay;
                        this.f23888c = z10;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23887b;
                    }

                    public final Function0 b() {
                        return this.f23886a;
                    }

                    public boolean c() {
                        return this.f23888c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f23889a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0314c f23890b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23891c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0314c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23889a = poseHintComplete;
                        this.f23890b = overlay;
                        this.f23891c = z10;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23890b;
                    }

                    public final Function0 b() {
                        return this.f23889a;
                    }

                    public boolean c() {
                        return this.f23891c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f23892a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0314c f23893b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23894c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0314c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23892a = previewReady;
                        this.f23893b = overlay;
                        this.f23894c = z10;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23893b;
                    }

                    public final Function1 b() {
                        return this.f23892a;
                    }

                    public boolean c() {
                        return this.f23894c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f23895a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f23896b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0314c f23897c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f23898d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0314c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23895a = onComplete;
                        this.f23896b = z10;
                        this.f23897c = overlay;
                        this.f23898d = z11;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23897c;
                    }

                    public final boolean b() {
                        return this.f23896b;
                    }

                    public final Function0 c() {
                        return this.f23895a;
                    }

                    public boolean d() {
                        return this.f23898d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0314c f23899a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f23900b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f23901c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0314c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f23899a = overlay;
                        this.f23900b = j10;
                        this.f23901c = z10;
                    }

                    @Override // ep.x5.d.c.b
                    public EnumC0314c a() {
                        return this.f23899a;
                    }

                    public final long b() {
                        return this.f23900b;
                    }
                }

                public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract EnumC0314c a();

                private b() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* renamed from: ep.x5$d$c$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class EnumC0314c {

                /* renamed from: d  reason: collision with root package name */
                public static final EnumC0314c f23902d = new EnumC0314c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0314c f23903e = new EnumC0314c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0314c f23904i = new EnumC0314c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0314c f23905o = new EnumC0314c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0314c f23906p = new EnumC0314c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0314c f23907q = new EnumC0314c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0314c f23908r = new EnumC0314c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0314c f23909s = new EnumC0314c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0314c f23910t = new EnumC0314c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0314c f23911u = new EnumC0314c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0314c f23912v = new EnumC0314c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0314c f23913w = new EnumC0314c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0314c[] f23914x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f23915y;

                static {
                    EnumC0314c[] a10 = a();
                    f23914x = a10;
                    f23915y = pr.a.a(a10);
                }

                private EnumC0314c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0314c[] a() {
                    return new EnumC0314c[]{f23902d, f23903e, f23904i, f23905o, f23906p, f23907q, f23908r, f23909s, f23910t, f23911u, f23912v, f23913w};
                }

                public static EnumC0314c valueOf(String str) {
                    return (EnumC0314c) Enum.valueOf(EnumC0314c.class, str);
                }

                public static EnumC0314c[] values() {
                    return (EnumC0314c[]) f23914x.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, String str2, b mode, StepStyles.SelfieStepStyle selfieStepStyle, a assetOverrides, boolean z10, rp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, sn.a videoCaptureMethod, lq.a aVar, boolean z11, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
                this.f23851a = str;
                this.f23852b = str2;
                this.f23853c = mode;
                this.f23854d = selfieStepStyle;
                this.f23855e = assetOverrides;
                this.f23856f = z10;
                this.f23857g = navigationState;
                this.f23858h = onBack;
                this.f23859i = onCancel;
                this.f23860j = onCameraError;
                this.f23861k = onPermissionChanged;
                this.f23862l = videoCaptureMethod;
                this.f23863m = z11;
                this.f23864n = cameraXControllerFactory;
                this.f23865o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f23855e;
            }

            public final g.a b() {
                return this.f23865o;
            }

            public final z.a c() {
                return this.f23864n;
            }

            public final String d() {
                return this.f23852b;
            }

            public final b e() {
                return this.f23853c;
            }

            public final rp.a f() {
                return this.f23857g;
            }

            public final Function0 g() {
                return this.f23858h;
            }

            public final Function1 h() {
                return this.f23860j;
            }

            public final Function0 i() {
                return this.f23859i;
            }

            public final Function0 j() {
                return this.f23861k;
            }

            public final boolean k() {
                return this.f23856f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f23854d;
            }

            public final String m() {
                return this.f23851a;
            }

            public final sn.a n() {
                return this.f23862l;
            }

            public final lq.a o() {
                return null;
            }

            public final boolean p() {
                return this.f23863m;
            }
        }

        /* renamed from: ep.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0315d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f23916a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0315d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f23916a = rendered;
            }

            public final Function0 a() {
                return this.f23916a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f23917a;

            /* renamed from: b  reason: collision with root package name */
            private final List f23918b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f23919c;

            /* renamed from: d  reason: collision with root package name */
            private final rp.a f23920d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f23921e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f23922f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f23923g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f23924h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f23925a;

                /* renamed from: b  reason: collision with root package name */
                private final String f23926b;

                /* renamed from: c  reason: collision with root package name */
                private final String f23927c;

                /* renamed from: d  reason: collision with root package name */
                private final String f23928d;

                /* renamed from: e  reason: collision with root package name */
                private final String f23929e;

                /* renamed from: f  reason: collision with root package name */
                private final String f23930f;

                /* renamed from: g  reason: collision with root package name */
                private final String f23931g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f23925a = title;
                    this.f23926b = description;
                    this.f23927c = selfieLabelFront;
                    this.f23928d = selfieLabelLeft;
                    this.f23929e = selfieLabelRight;
                    this.f23930f = submitButton;
                    this.f23931g = retakeButton;
                }

                public final String a() {
                    return this.f23926b;
                }

                public final String b() {
                    return this.f23931g;
                }

                public final String c() {
                    return this.f23927c;
                }

                public final String d() {
                    return this.f23928d;
                }

                public final String e() {
                    return this.f23929e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f23925a, aVar.f23925a) && Intrinsics.areEqual(this.f23926b, aVar.f23926b) && Intrinsics.areEqual(this.f23927c, aVar.f23927c) && Intrinsics.areEqual(this.f23928d, aVar.f23928d) && Intrinsics.areEqual(this.f23929e, aVar.f23929e) && Intrinsics.areEqual(this.f23930f, aVar.f23930f) && Intrinsics.areEqual(this.f23931g, aVar.f23931g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f23930f;
                }

                public final String g() {
                    return this.f23925a;
                }

                public int hashCode() {
                    return (((((((((((this.f23925a.hashCode() * 31) + this.f23926b.hashCode()) * 31) + this.f23927c.hashCode()) * 31) + this.f23928d.hashCode()) * 31) + this.f23929e.hashCode()) * 31) + this.f23930f.hashCode()) * 31) + this.f23931g.hashCode();
                }

                public String toString() {
                    String str = this.f23925a;
                    String str2 = this.f23926b;
                    String str3 = this.f23927c;
                    String str4 = this.f23928d;
                    String str5 = this.f23929e;
                    String str6 = this.f23930f;
                    String str7 = this.f23931g;
                    return "Strings(title=" + str + ", description=" + str2 + ", selfieLabelFront=" + str3 + ", selfieLabelLeft=" + str4 + ", selfieLabelRight=" + str5 + ", submitButton=" + str6 + ", retakeButton=" + str7 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(a strings, List selfies, StepStyles.SelfieStepStyle selfieStepStyle, rp.a navigationState, Function0 onUsePhotos, Function0 onRetakePhotos, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(strings, "strings");
                Intrinsics.checkNotNullParameter(selfies, "selfies");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onUsePhotos, "onUsePhotos");
                Intrinsics.checkNotNullParameter(onRetakePhotos, "onRetakePhotos");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f23917a = strings;
                this.f23918b = selfies;
                this.f23919c = selfieStepStyle;
                this.f23920d = navigationState;
                this.f23921e = onUsePhotos;
                this.f23922f = onRetakePhotos;
                this.f23923g = onBack;
                this.f23924h = onCancel;
            }

            public final rp.a a() {
                return this.f23920d;
            }

            public final Function0 b() {
                return this.f23923g;
            }

            public final Function0 c() {
                return this.f23924h;
            }

            public final Function0 d() {
                return this.f23922f;
            }

            public final Function0 e() {
                return this.f23921e;
            }

            public final List f() {
                return this.f23918b;
            }

            public final a g() {
                return this.f23917a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f23919c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f23932a;

            /* renamed from: b  reason: collision with root package name */
            private final String f23933b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f23934c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f23935d;

            /* renamed from: e  reason: collision with root package name */
            private final rp.a f23936e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f23937f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f23938g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f23939h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, rp.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f23932a = title;
                this.f23933b = description;
                this.f23934c = pendingPageTextVerticalPosition;
                this.f23935d = selfieStepStyle;
                this.f23936e = navigationState;
                this.f23937f = onBack;
                this.f23938g = onCancel;
                this.f23939h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f23939h;
            }

            public final String b() {
                return this.f23933b;
            }

            public final rp.a c() {
                return this.f23936e;
            }

            public final Function0 d() {
                return this.f23937f;
            }

            public final Function0 e() {
                return this.f23938g;
            }

            public final PendingPageTextPosition f() {
                return this.f23934c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f23935d;
            }

            public final String h() {
                return this.f23932a;
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
        public static final /* synthetic */ int[] f23940a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f23941b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f23942c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f23013e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f23014i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f23012d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23940a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f23148e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f23149i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f23147d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f23941b = iArr2;
            int[] iArr3 = new int[qn.b.values().length];
            try {
                iArr3[qn.b.f47521d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[qn.b.f47522e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[qn.b.f47523i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[qn.b.f47524o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[qn.b.f47525p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[qn.b.f47526q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[qn.b.f47527r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[qn.b.f47528s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[qn.b.f47529t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f23942c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23943d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f23943d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.m mVar = mn.m.f39231a;
                Context context = x5.this.f23716a;
                this.f23943d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            x5.V0(x5.this);
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23945d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23946e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f23947i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f23946e = aVar;
            this.f23947i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f23946e, this.f23947i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f23945d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f23946e.c();
                final x5 x5Var = this.f23947i;
                d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.y5
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = x5.g.k(x5.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23948d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23949e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f23950i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f23949e = aVar;
            this.f23950i = x5Var;
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
                return Unit.f33282a;
            }
            cVar.e(x1.a.s(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f23624o, 8191, null));
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f23949e, this.f23950i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            Object f10 = or.b.f();
            int i10 = this.f23948d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f23948d = 1;
                if (gs.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            tm.h c10 = this.f23949e.c();
            d10 = tm.z.d(this.f23950i, null, new Function1() { // from class: ep.z5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.h.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23951d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23952e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f23953i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f23952e = aVar;
            this.f23953i = x5Var;
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
                return Unit.f33282a;
            }
            cVar.e(x1.a.s(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f23622e, 8191, null));
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f23952e, this.f23953i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            Object f10 = or.b.f();
            int i10 = this.f23951d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f23951d = 1;
                if (gs.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            tm.h c10 = this.f23952e.c();
            d10 = tm.z.d(this.f23953i, null, new Function1() { // from class: ep.a6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23954d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23955e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f23956i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f23957o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f23958p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f23955e = aVar;
            this.f23956i = x5Var;
            this.f23957o = cVar;
            this.f23958p = bVar;
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
                return Unit.f33282a;
            }
            int u10 = cVar4.u();
            if (u10 > 1) {
                cVar2.e(x1.c.s(cVar4, u10 - 1, cVar4.w(), 0L, null, 0L, 0.0f, null, null, null, null, false, null, false, 8188, null));
            } else {
                qn.b w10 = cVar4.w();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                mn.v b10 = cVar4.b();
                cVar2.e(new x1.a(w10, cVar.v(), cVar.t(), null, c11, i10, false, cVar.m(), b10, m6.i(cVar2, false), bVar.s(), cVar.o(), cVar.k(), null, 8264, null));
            }
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f23955e, this.f23956i, this.f23957o, this.f23958p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            Object f10 = or.b.f();
            int i10 = this.f23954d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f23954d = 1;
                if (gs.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            tm.h c10 = this.f23955e.c();
            x5 x5Var = this.f23956i;
            final x1.c cVar = this.f23957o;
            final b bVar = this.f23958p;
            d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.b6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.j.k(x1.c.this, bVar, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23959d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23960e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f23961i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f23960e = aVar;
            this.f23961i = x5Var;
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
                return Unit.f33282a;
            }
            int t10 = dVar2.t();
            if (t10 >= 1) {
                cVar.e(x1.d.s(dVar2, t10 - 1, dVar2.u(), null, null, 0L, false, 0L, null, null, null, false, 2044, null));
            }
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(this.f23960e, this.f23961i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            Object f10 = or.b.f();
            int i10 = this.f23959d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f23959d = 1;
                if (gs.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            tm.h c10 = this.f23960e.c();
            d10 = tm.z.d(this.f23961i, null, new Function1() { // from class: ep.c6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.k.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23962d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f23963e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f23964i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f23965o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f23963e = booleanRef;
            this.f23964i = aVar;
            this.f23965o = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(Ref.BooleanRef booleanRef, r.c cVar) {
            x1 x1Var = (x1) cVar.c();
            if ((x1Var instanceof a0) && ((a0) x1Var).j()) {
                cVar.e(x1Var);
                booleanRef.element = false;
            }
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new l(this.f23963e, this.f23964i, this.f23965o, continuation);
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
                java.lang.Object r0 = or.b.f()
                int r1 = r5.f23962d
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
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f23963e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f23962d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = gs.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                tm.k$a r6 = r5.f23964i
                tm.h r6 = r6.c()
                ep.x5 r1 = r5.f23965o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f23963e
                ep.d6 r4 = new ep.d6
                r4.<init>()
                r3 = 0
                tm.r r1 = tm.w.g(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f33282a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ep.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public x5(Context applicationContext, c.a submitVerificationWorker, b.a webRtcWorkerFactory, b1.b selfieAnalyzeWorker, zo.c1 permissionRequestWorkflow, hp.j localVideoCaptureRenderer, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, rn.a cameraStatsManager, rp.b navigationStateManager, np.c externalEventLogger) {
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
        this.f23716a = applicationContext;
        this.f23717b = submitVerificationWorker;
        this.f23718c = webRtcWorkerFactory;
        this.f23719d = selfieAnalyzeWorker;
        this.f23720e = permissionRequestWorkflow;
        this.f23721f = localVideoCaptureRenderer;
        this.f23722g = cameraXControllerFactory;
        this.f23723h = camera2ManagerFactoryFactory;
        this.f23724i = cameraStatsManager;
        this.f23725j = navigationStateManager;
        this.f23726k = externalEventLogger;
        lq.c.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A2(x5 x5Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, c.d.f23782a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B2(x5 x5Var, k.a aVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, new c.C0307c(((c.b.a) bVar).a()));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean u10 = oVar.u();
        if (!oVar.t() && Y0(bVar) && jp.f.f(this.f23716a) && bVar.z().b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        String c10 = bVar.x().c();
        d.c.b.g gVar = new d.c.b.g(new Function1() { // from class: ep.i4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J2;
                J2 = x5.J2(k.a.this, this, bVar, oVar, currentTimeMillis, (mn.v) obj);
                return J2;
            }
        }, d.c.EnumC0314c.f23902d, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f23722g;
        g.a aVar3 = this.f23723h;
        v.b o10 = oVar.o();
        boolean k11 = oVar.k();
        if (u10 && !z10) {
            z11 = false;
        } else {
            z11 = true;
        }
        d f10 = j2.f(bVar, aVar, null, c10, null, null, false, gVar, v10, t10, b10, new Function0() { // from class: ep.j4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L2;
                L2 = x5.L2(k.a.this, this);
                return L2;
            }
        }, new Function0() { // from class: ep.k4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit M2;
                M2 = x5.M2(x5.this, aVar);
                return M2;
            }
        }, k10, new Function0() { // from class: ep.l4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N2;
                N2 = x5.N2(x5.this, aVar, bVar);
                return N2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, o10, k11, false, z11, PointerEventHelper.X_FLAG_SUPPORTS_HOVER, null);
        if (!u10) {
            String str = "";
            zo.d0 d0Var = zo.d0.f55893d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f23716a.getString(bp.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f23716a;
            String string = context.getString(bp.e.C, jp.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return zo.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f23720e, bVar.y(), null, new Function1() { // from class: ep.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r F2;
                    F2 = x5.F2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return F2;
                }
            }, 19976, null);
        }
        String str2 = "";
        if (z10) {
            zo.d0 d0Var2 = zo.d0.f55894e;
            String o11 = bVar.o();
            if (o11 == null) {
                o11 = this.f23716a.getString(bp.e.M);
                Intrinsics.checkNotNullExpressionValue(o11, "getString(...)");
            }
            Context context2 = this.f23716a;
            String string2 = context2.getString(bp.e.L, jp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            zo.c1 c1Var = this.f23720e;
            String p10 = bVar.p();
            if (p10 != null) {
                str2 = p10;
            }
            return zo.l1.e(f10, aVar, true, d0Var2, false, str2, o11, string2, n10, m10, null, null, null, c1Var, bVar.y(), "video_capture_mic_permission_request", new Function1() { // from class: ep.o4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r H2;
                    H2 = x5.H2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return H2;
                }
            }, 3592, null);
        }
        return f10;
    }

    private final d F1(final b bVar, x1.f fVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: ep.a4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit G1;
                G1 = x5.G1();
                return G1;
            }
        }, false, d.c.EnumC0314c.f23911u, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: ep.b4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit H1;
                H1 = x5.H1(k.a.this, this);
                return H1;
            }
        }, new Function0() { // from class: ep.d4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I1;
                I1 = x5.I1(x5.this, aVar);
                return I1;
            }
        }, k10, new Function0() { // from class: ep.e4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit J1;
                J1 = x5.J1(x5.this, aVar, bVar);
                return J1;
            }
        }, l32, null, bVar.z().b(), this.f23722g, this.f23723h, 0.0f, null, fVar.o(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r F2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.l5
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == zo.g1.f55919d) {
            action.e(x1.o.s(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f23779a);
        } else {
            x5Var.e3(aVar2, new c.C0307c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r H2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.b5
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
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == zo.g1.f55919d) {
            action.e(x1.o.s(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f23779a);
        } else {
            x5Var.e3(aVar2, new c.C0307c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J2(k.a aVar, final x5 x5Var, final b bVar, final x1.o oVar, final long j10, final mn.v cameraProperties) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.c5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K2;
                K2 = x5.K2(x5.this, bVar, oVar, cameraProperties, j10, (r.c) obj);
                return K2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    private final d K1(final b bVar, final x1.h hVar, final k.a aVar) {
        return new d.C0315d(new Function0() { // from class: ep.c4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L1;
                L1 = x5.L1(k.a.this, this, bVar, hVar);
                return L1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K2(x5 x5Var, b bVar, x1.o oVar, mn.v vVar, long j10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (x5Var.l3(bVar) == sn.a.f49090d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.o(), oVar.k()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.o(), oVar.k(), 67, null));
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(k.a aVar, x5 x5Var, final b bVar, final x1.h hVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.m5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M1;
                M1 = x5.M1(x5.b.this, hVar, (r.c) obj);
                return M1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(b bVar, x1.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, hVar.o(), false, 163, null));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f23716a.getString(bp.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f23716a.getString(bp.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f23716a.getString(bp.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f23716a.getString(bp.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f23716a.getString(bp.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f23716a.getString(bp.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f23716a.getString(bp.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.r(), bVar.y(), this.f23725j.b(), new Function0() { // from class: ep.i3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit O1;
                O1 = x5.O1(k.a.this, this, iVar);
                return O1;
            }
        }, new Function0() { // from class: ep.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Q1;
                Q1 = x5.Q1(k.a.this, this, bVar, iVar);
                return Q1;
            }
        }, new Function0() { // from class: ep.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit S1;
                S1 = x5.S1(k.a.this, this);
                return S1;
            }
        }, new Function0() { // from class: ep.l3
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
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(k.a aVar, x5 x5Var, final x1.i iVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.t5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit P1;
                P1 = x5.P1(x1.i.this, (r.c) obj);
                return P1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        tm.w.l(aVar, this.f23718c.a(bVar.z().c()), Reflection.typeOf(kq.b.class), "", new Function1() { // from class: ep.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                tm.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0462b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0314c.f23902d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f23722g;
        g.a aVar3 = this.f23723h;
        return j2.f(bVar, aVar, pVar.e(), c10, null, null, false, iVar, v10, t10, b10, new Function0() { // from class: ep.v2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T2;
                T2 = x5.T2(k.a.this, this);
                return T2;
            }
        }, new Function0() { // from class: ep.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U2;
                U2 = x5.U2(x5.this, aVar);
                return U2;
            }
        }, k10, new Function0() { // from class: ep.r3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V2;
                V2 = x5.V2(x5.this, aVar, bVar);
                return V2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, pVar.o(), pVar.k(), false, false, 50331648, null);
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
            return Unit.f33282a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.p(), iVar3.s(), iVar3.b(), iVar3.m(), m6.i(action, true), iVar.o()));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0462b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final on.m b10 = on.j.b(x5Var.f23716a, on.n.f44573d);
        if (it instanceof b.AbstractC0462b.C0463b) {
            d11 = tm.z.d(x5Var, null, new Function1() { // from class: ep.p5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q2;
                    Q2 = x5.Q2(x5.this, b10, it, pVar, bVar, aVar, (r.c) obj);
                    return Q2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.AbstractC0462b.a) {
            d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.q5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R2;
                    R2 = x5.R2(k.a.this, x5Var, pVar, (r.c) obj);
                    return R2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(k.a aVar, x5 x5Var, final b bVar, final x1.i iVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.w4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R1;
                R1 = x5.R1(x5.b.this, iVar, (r.c) obj);
                return R1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q2(x5 x5Var, on.m mVar, b.AbstractC0462b abstractC0462b, x1.p pVar, b bVar, k.a aVar, r.c action) {
        on.l b10;
        on.l b11;
        on.l b12;
        Size f10;
        on.l b13;
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R1(b bVar, x1.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, iVar.o(), false, 163, null));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R2(k.a aVar, final x5 x5Var, final x1.p pVar, r.c action) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.v5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S2;
                S2 = x5.S2(x5.this, pVar, (r.c) obj);
                return S2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S2(x5 x5Var, x1.p pVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        action.e(new x1.h(false, false, m6.i(action, false), pVar.o(), 3, null));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    private final d.b U1(final b bVar, final x1.j jVar, final k.a aVar) {
        String C = bVar.x().C();
        String h10 = bVar.x().h();
        String e10 = bVar.x().e();
        String B = bVar.x().B();
        rp.a b10 = this.f23725j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f23099a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f23101a) && !Intrinsics.areEqual(u10, d2.b.f23100a)) {
            throw new ir.p();
        } else {
            NextStep.Selfie.AssetConfig.PromptPage promptPage2 = bVar.a().getPromptPage();
            if (promptPage2 != null) {
                remoteImage = promptPage2.getSelfiePictograph();
            }
        }
        return new d.b(C, h10, e10, B, bVar.y(), remoteImage, b10, new Function0() { // from class: ep.m3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V1;
                V1 = x5.V1(k.a.this, this, bVar, jVar);
                return V1;
            }
        }, new Function0() { // from class: ep.n3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X1;
                X1 = x5.X1(k.a.this, this);
                return X1;
            }
        }, new Function0() { // from class: ep.o3
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
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    public static final /* synthetic */ lq.a V0(x5 x5Var) {
        x5Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(k.a aVar, x5 x5Var, final b bVar, final x1.j jVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.h5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W1;
                W1 = x5.W1(x5.b.this, jVar, (r.c) obj);
                return W1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(b bVar, x1.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.j(action, false, 1, null), bVar.q(), bVar.s(), false, jVar.o(), false, 163, null));
        return Unit.f33282a;
    }

    private final d W2(final b bVar, final x1.q qVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: ep.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0314c.f23913w, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: ep.x3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Z2;
                Z2 = x5.Z2(k.a.this, this);
                return Z2;
            }
        }, new Function0() { // from class: ep.y3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a32;
                a32 = x5.a3(x5.this, aVar);
                return a32;
            }
        }, k10, new Function0() { // from class: ep.z3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit b32;
                b32 = x5.b3(x5.this, aVar, bVar);
                return b32;
            }
        }, l32, null, bVar.z().b(), this.f23722g, this.f23723h, 0.0f, null, qVar.o(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X2(k.a aVar, x5 x5Var, final x1.q qVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.f5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Y2;
                Y2 = x5.Y2(x1.q.this, (r.c) obj);
                return Y2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f23716a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.p(), qVar.r(), qVar.b(), qVar.m(), m6.i(action, false)));
        return Unit.f33282a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.p(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.m(), x1Var.n(), ((b) cVar.b()).s(), x1Var.o(), zVar2.k());
        } else if (l3((b) cVar.b()) == sn.a.f49091e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.p(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.m(), x1Var.n(), x1Var.o(), 12, null);
        } else if (l3((b) cVar.b()) == sn.a.f49090d) {
            a0 a0Var3 = (a0) x1Var;
            w10 = new x1.f(CollectionsKt.M0(x1Var.p(), a1Var), a0Var3.b(), a0Var3.m(), x1Var.n(), x1Var.o());
        } else {
            a0 a0Var4 = (a0) x1Var;
            w10 = m6.w(cVar, CollectionsKt.M0(x1Var.p(), a1Var), null, a0Var4.b(), a0Var4.m(), x1Var.n());
        }
        return new x1.b(w10, zVar.e(), x1Var.n(), x1Var.o(), ((z) x1Var).k());
    }

    private final d Z1(final b bVar, final x1.k kVar, final k.a aVar) {
        h1 h1Var;
        String u10;
        d.c.EnumC0314c enumC0314c;
        int i10 = e.f23940a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new ir.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f23149i;
        } else {
            h1Var = h1.f23148e;
        }
        int[] iArr = e.f23941b;
        int i11 = iArr[h1Var.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    u10 = bVar.x().z();
                } else {
                    throw new ir.p();
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
                    enumC0314c = d.c.EnumC0314c.f23903e;
                } else {
                    throw new ir.p();
                }
            } else {
                enumC0314c = d.c.EnumC0314c.f23908r;
            }
        } else {
            enumC0314c = d.c.EnumC0314c.f23905o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: ep.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0314c, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f23722g;
        g.a aVar3 = this.f23723h;
        boolean a10 = kVar.a();
        return j2.f(bVar, aVar, kVar.e(), c10, str, null, a10, fVar, v10, t10, b10, new Function0() { // from class: ep.n2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c22;
                c22 = x5.c2(k.a.this, this);
                return c22;
            }
        }, new Function0() { // from class: ep.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d22;
                d22 = x5.d2(x5.this, aVar);
                return d22;
            }
        }, k10, new Function0() { // from class: ep.p2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit e22;
                e22 = x5.e2(x5.this, aVar, bVar);
                return e22;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, kVar.o(), kVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(k.a aVar, x5 x5Var, final x1.k kVar, final b bVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.s5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b22;
                b22 = x5.b2(x1.k.this, bVar, (r.c) obj);
                return b22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    private final d b1(final b bVar, final x1.a aVar, final k.a aVar2) {
        x1.g gVar;
        String str;
        String str2;
        d.c.EnumC0314c enumC0314c;
        d.c.b aVar3;
        boolean z10;
        boolean z11;
        final a1.b e10 = aVar.e();
        if (aVar.k()) {
            if (aVar.u() == x1.g.f23621d) {
                gVar = x1.g.f23622e;
            } else {
                gVar = aVar.u();
            }
        } else {
            gVar = x1.g.f23621d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f23719d;
            if (gVar != x1.g.f23621d && gVar != x1.g.f23624o) {
                z11 = false;
            } else {
                z11 = true;
            }
            tm.w.l(aVar2, bVar2.a(e10, z11), Reflection.typeOf(b1.class), "", new Function1() { // from class: ep.p3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r c12;
                    c12 = x5.c1(x5.this, aVar, aVar2, (b1.c) obj);
                    return c12;
                }
            });
        }
        qn.b w10 = aVar.w();
        if (w10 != null) {
            str = i3(w10, bVar.x(), aVar.e());
        } else {
            str = null;
        }
        if (e10 == a1.b.f23013e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f23014i) {
            str2 = bVar.x().w();
        } else if (aVar.w() != null) {
            str2 = str;
        } else if (e10 == a1.b.f23012d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f23940a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0314c = d.c.EnumC0314c.f23903e;
                } else {
                    throw new ir.p();
                }
            } else {
                enumC0314c = d.c.EnumC0314c.f23909s;
            }
        } else {
            enumC0314c = d.c.EnumC0314c.f23906p;
        }
        d.c.EnumC0314c enumC0314c2 = enumC0314c;
        if (aVar.j() && gVar != x1.g.f23623i && gVar != x1.g.f23624o) {
            aVar3 = new d.c.b.C0313d(new Function1() { // from class: ep.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = x5.e1(a1.b.this, aVar2, this, aVar, (String) obj);
                    return e12;
                }
            }, new Function1() { // from class: ep.s3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = x5.g1(x5.this, aVar2, (Throwable) obj);
                    return g12;
                }
            }, false, enumC0314c2, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0314c2, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f23623i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f23624o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar2);
        sn.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f23722g;
        g.a aVar5 = this.f23723h;
        boolean a10 = aVar.a();
        a1.b e11 = aVar.e();
        float v11 = aVar.v();
        qn.a t11 = aVar.t();
        v.b o10 = aVar.o();
        boolean k11 = aVar.k();
        if (aVar.u() != gVar2 && aVar.u() != gVar3) {
            z10 = false;
        } else {
            z10 = true;
        }
        return j2.f(bVar, aVar2, e11, c10, str4, str3, a10, aVar3, v10, t10, b10, new Function0() { // from class: ep.t3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h12;
                h12 = x5.h1(k.a.this, this);
                return h12;
            }
        }, new Function0() { // from class: ep.u3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i12;
                i12 = x5.i1(x5.this, aVar2);
                return i12;
            }
        }, k10, new Function0() { // from class: ep.v3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j12;
                j12 = x5.j1(x5.this, aVar2, bVar);
                return j12;
            }
        }, l32, null, b11, aVar4, aVar5, v11, t11, o10, k11, z10, false, 33554432, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b2(x1.k kVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List c10 = kVar.c();
        action.e(new x1.a(null, 0.0f, null, kVar.p(), c10, System.currentTimeMillis(), kVar.a(), kVar.m(), kVar.b(), m6.i(action, false), bVar.s(), kVar.o(), kVar.k(), null, 8193, null));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r c1(final x5 x5Var, final x1.a aVar, final k.a aVar2, final b1.c output) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.r5
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
        return Unit.f33282a;
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
            return Unit.f33282a;
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
                action.e(x1.a.s(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f23623i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0298c) {
            b1.c.C0298c c0298c = (b1.c.C0298c) cVar;
            if (c0298c.b() == qn.b.f47528s) {
                action.e(x1.a.s(aVar4, null, c0298c.c(), c0298c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.s(aVar4, c0298c.b(), c0298c.c(), c0298c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new ir.p();
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    private final void d3(k.a aVar, Throwable th2) {
        String message;
        String message2 = th2.getMessage();
        if (message2 != null && StringsKt.V(message2, "ENOSPC", false, 2, null)) {
            e3(aVar, new c.C0307c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        } else if (th2 instanceof x.o0) {
            Throwable cause = th2.getCause();
            if (cause != null && (message = cause.getMessage()) != null && StringsKt.V(message, "ENOSPC", false, 2, null)) {
                e3(aVar, new c.C0307c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
                return;
            }
            String canonicalName = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0307c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName)));
        } else {
            String canonicalName2 = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0307c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.a aVar2, String absolutePath) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f23008i, bVar, System.currentTimeMillis());
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.i5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f12;
                f12 = x5.f1(x5.this, aVar2, cVar, (r.c) obj);
                return f12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    private final void e3(k.a aVar, final c cVar) {
        tm.r d10;
        if (!(cVar instanceof c.d) && !(cVar instanceof c.a)) {
            boolean z10 = cVar instanceof c.C0307c;
        }
        tm.h c10 = aVar.c();
        d10 = tm.z.d(this, null, new Function1() { // from class: ep.d5
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
        return Unit.f33282a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0313d c0313d;
        if (lVar.f().c()) {
            tm.w.l(aVar, this.f23719d.a(a1.b.f23012d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: ep.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r g22;
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
        d.c.EnumC0314c enumC0314c = d.c.EnumC0314c.f23903e;
        qn.b v10 = lVar.v();
        if (v10 != null) {
            str = i3(v10, bVar.x(), lVar.e());
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
                aVar2 = new d.c.b.e(new Function0() { // from class: ep.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i22;
                        i22 = x5.i2(k.a.this, this, lVar, bVar);
                        return i22;
                    }
                }, enumC0314c, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
            } else {
                c0313d = new d.c.b.C0313d(new Function1() { // from class: ep.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit k22;
                        k22 = x5.k2(a1.b.this, aVar, this, lVar, (String) obj);
                        return k22;
                    }
                }, new Function1() { // from class: ep.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m22;
                        m22 = x5.m2(x5.this, aVar, (Throwable) obj);
                        return m22;
                    }
                }, false, enumC0314c, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a), 4, null);
                boolean t10 = bVar.t();
                rp.a b10 = this.f23725j.b();
                Function1 k10 = m6.k(aVar);
                sn.a l32 = l3(bVar);
                d.c.a v11 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f23722g;
                g.a aVar4 = this.f23723h;
                boolean a10 = lVar.a();
                return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a10, c0313d, v11, t10, b10, new Function0() { // from class: ep.u2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit n22;
                        n22 = x5.n2(k.a.this, this);
                        return n22;
                    }
                }, new Function0() { // from class: ep.w2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit o22;
                        o22 = x5.o2(x5.this, aVar);
                        return o22;
                    }
                }, k10, new Function0() { // from class: ep.x2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p22;
                        p22 = x5.p2(x5.this, aVar, bVar);
                        return p22;
                    }
                }, l32, null, b11, aVar3, aVar4, lVar.u(), lVar.t(), lVar.o(), lVar.k(), false, false, 50331648, null);
            }
        } else {
            aVar2 = new d.c.b.a(enumC0314c, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        }
        c0313d = aVar2;
        boolean t102 = bVar.t();
        rp.a b102 = this.f23725j.b();
        Function1 k102 = m6.k(aVar);
        sn.a l322 = l3(bVar);
        d.c.a v112 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f23722g;
        g.a aVar42 = this.f23723h;
        boolean a102 = lVar.a();
        return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a102, c0313d, v112, t102, b102, new Function0() { // from class: ep.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n22;
                n22 = x5.n2(k.a.this, this);
                return n22;
            }
        }, new Function0() { // from class: ep.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o22;
                o22 = x5.o2(x5.this, aVar);
                return o22;
            }
        }, k102, new Function0() { // from class: ep.x2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p22;
                p22 = x5.p2(x5.this, aVar, bVar);
                return p22;
            }
        }, l322, null, b112, aVar32, aVar42, lVar.u(), lVar.t(), lVar.o(), lVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f3(c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(cVar);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r g2(final x5 x5Var, final x1.l lVar, final b bVar, final k.a aVar, final b1.c output) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.k5
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
        cVar.d(new c.C0307c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h2(b1.c cVar, x1.l lVar, b bVar, x5 x5Var, k.a aVar, r.c action) {
        x1.l lVar2;
        x1.l s10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.l) {
            lVar2 = (x1.l) c10;
        } else {
            lVar2 = null;
        }
        x1.l lVar3 = lVar2;
        if (lVar3 == null) {
            return Unit.f33282a;
        }
        if (cVar instanceof b1.c.a) {
            List c11 = lVar.c();
            b1.c.a aVar2 = (b1.c.a) cVar;
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.m(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.o(), lVar.k()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0298c) {
            b1.c.C0298c c0298c = (b1.c.C0298c) cVar;
            if (c0298c.b() == qn.b.f47528s) {
                s10 = x1.l.s(lVar3, false, null, c0298c.c(), c0298c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                s10 = x1.l.s(lVar3, false, c0298c.b(), c0298c.c(), c0298c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(s10);
        } else {
            throw new ir.p();
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i2(k.a aVar, x5 x5Var, final x1.l lVar, final b bVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.o5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j22;
                j22 = x5.j2(x1.l.this, bVar, (r.c) obj);
                return j22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    private final String i3(qn.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f23942c[bVar.ordinal()]) {
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
                int i10 = e.f23940a[bVar2.ordinal()];
                if (i10 == 1 || i10 == 2) {
                    return null;
                }
                if (i10 == 3) {
                    return aVar.z();
                }
                throw new ir.p();
            case 8:
                return aVar.p();
            case 9:
                return aVar.p();
            default:
                throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
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
            return Unit.f33282a;
        }
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.m(), m6.i(action, false), bVar.s(), lVar.o(), lVar.k(), 2, null));
        return Unit.f33282a;
    }

    private final np.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f42059a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b g10 = ((x1.k) x1Var).g();
            if (g10 != null) {
                str = m1.a(g10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f42059a;
        } else {
            if (x1Var instanceof z) {
                a1.b g11 = ((z) x1Var).g();
                if (g11 != null) {
                    str = m1.a(g11);
                }
                return new j.f(str);
            } else if (x1Var instanceof x1.b) {
                return j3(((x1.b) x1Var).s());
            } else {
                if (!(x1Var instanceof x1.e) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q)) {
                    if (x1Var instanceof x1.i) {
                        return j.a.f42055a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f42058a;
                    }
                    throw new ir.p();
                }
                return j.b.f42056a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0314c enumC0314c;
        String c10 = bVar.x().c();
        if (bVar2.s() instanceof x1.n) {
            enumC0314c = d.c.EnumC0314c.f23912v;
        } else {
            int i10 = e.f23940a[bVar2.r().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0314c = d.c.EnumC0314c.f23904i;
                    } else {
                        throw new ir.p();
                    }
                } else {
                    enumC0314c = d.c.EnumC0314c.f23910t;
                }
            } else {
                enumC0314c = d.c.EnumC0314c.f23907q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: ep.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0314c, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: ep.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n12;
                n12 = x5.n1(k.a.this, this);
                return n12;
            }
        }, new Function0() { // from class: ep.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o12;
                o12 = x5.o1(x5.this, aVar);
                return o12;
            }
        }, k10, new Function0() { // from class: ep.h3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p12;
                p12 = x5.p1(x5.this, aVar, bVar);
                return p12;
            }
        }, l32, null, bVar.z().b(), this.f23722g, this.f23723h, 0.0f, null, bVar2.o(), bVar2.t(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f23008i, bVar, System.currentTimeMillis());
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.n5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l22;
                l22 = x5.l2(x5.this, lVar, cVar, (r.c) obj);
                return l22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    private final boolean k3(x1 x1Var) {
        if (!(x1Var instanceof x1.a) && !(x1Var instanceof x1.b) && !(x1Var instanceof x1.c) && !(x1Var instanceof x1.d) && !(x1Var instanceof x1.k) && !(x1Var instanceof x1.l) && !(x1Var instanceof x1.m) && !(x1Var instanceof x1.o) && !(x1Var instanceof x1.p) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q) && !(x1Var instanceof x1.e)) {
            if (!(x1Var instanceof x1.j) && !(x1Var instanceof x1.h) && !(x1Var instanceof x1.i) && !(x1Var instanceof x1.n)) {
                throw new ir.p();
            }
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(k.a aVar, x5 x5Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.g5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m12;
                m12 = x5.m1((r.c) obj);
                return m12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f33282a;
    }

    private final sn.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f23716a);
        if (Result.e(f10) == null) {
            return (sn.a) f10;
        }
        return sn.a.f49092i;
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
            x1Var = bVar.s();
        }
        if (x1Var != null) {
            action.e(x1Var);
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m2(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f33282a;
    }

    private final boolean m3(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f23716a);
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            tm.w.l(aVar, this.f23719d.a(a1.b.f23012d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: ep.p4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r r12;
                    r12 = x5.r1(x5.this, aVar, (b1.c) obj);
                    return r12;
                }
            });
        }
        aVar.a("countdown_" + cVar.u(), new j(aVar, this, cVar, bVar, null));
        qn.b w10 = cVar.w();
        if (w10 != null) {
            str = i3(w10, bVar.x(), cVar.e());
        } else {
            str = null;
        }
        if (str == null) {
            str2 = bVar.x().p();
        } else {
            str2 = str;
        }
        String c10 = bVar.x().c();
        int u10 = cVar.u();
        if (l3(bVar) == sn.a.f49091e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0311b c0311b = new d.c.b.C0311b(u10, z10, bVar.z().a(), d.c.EnumC0314c.f23903e, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a), new Function1() { // from class: ep.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f23722g;
        g.a aVar3 = this.f23723h;
        return j2.f(bVar, aVar, cVar.e(), c10, str2, str, cVar.a(), c0311b, v10, t10, b10, new Function0() { // from class: ep.r4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit u12;
                u12 = x5.u1(k.a.this, this);
                return u12;
            }
        }, new Function0() { // from class: ep.s4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v12;
                v12 = x5.v1(x5.this, aVar);
                return v12;
            }
        }, k10, new Function0() { // from class: ep.t4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w12;
                w12 = x5.w1(x5.this, aVar, bVar);
                return w12;
            }
        }, l32, null, b11, aVar2, aVar3, cVar.v(), cVar.t(), cVar.o(), cVar.k(), false, false, 50331648, null);
    }

    private final d q2(final b bVar, final x1.m mVar, final k.a aVar) {
        if (mVar.f().c()) {
            tm.w.l(aVar, this.f23719d.a(a1.b.f23012d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: ep.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        tm.w.l(aVar, o.a.b(tm.o.f49726a, 1000L, null, 2, null), Reflection.typeOf(tm.o.class, KTypeProjection.f33386c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: ep.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                tm.r t22;
                t22 = x5.t2(x5.this, mVar, bVar, (Unit) obj);
                return t22;
            }
        });
        String c10 = bVar.x().c();
        String t10 = bVar.x().t();
        String t11 = bVar.x().t();
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0314c.f23903e, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        boolean t12 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f23722g;
        g.a aVar4 = this.f23723h;
        boolean a10 = mVar.a();
        return j2.f(bVar, aVar, mVar.e(), c10, t10, t11, a10, aVar2, v10, t12, b10, new Function0() { // from class: ep.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v22;
                v22 = x5.v2(k.a.this, this);
                return v22;
            }
        }, new Function0() { // from class: ep.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w22;
                w22 = x5.w2(x5.this, aVar);
                return w22;
            }
        }, k10, new Function0() { // from class: ep.c3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit x22;
                x22 = x5.x2(x5.this, aVar, bVar);
                return x22;
            }
        }, l32, null, b11, aVar3, aVar4, mVar.u(), mVar.t(), mVar.o(), mVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r r1(final x5 x5Var, final k.a aVar, final b1.c output) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.e5
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
    public static final tm.r r2(final x5 x5Var, final k.a aVar, final x1.m mVar, final b bVar, final b1.c output) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.z4
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
            return Unit.f33282a;
        }
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0298c) {
                b1.c.C0298c c0298c = (b1.c.C0298c) cVar;
                action.e(x1.c.s(cVar3, 0, c0298c.b(), 0L, null, 0L, c0298c.c(), c0298c.a(), null, null, null, false, null, false, 8093, null));
            } else {
                throw new ir.p();
            }
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s2(b1.c cVar, x5 x5Var, k.a aVar, x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0298c) {
                b1.c.C0298c c0298c = (b1.c.C0298c) cVar;
                qn.b b10 = c0298c.b();
                List c10 = mVar.c();
                long i10 = mVar.i();
                mn.v b11 = mVar.b();
                action.e(new x1.l(false, b10, c0298c.c(), c0298c.a(), c10, i10, false, mVar.m(), b11, m6.i(action, false), bVar.s(), mVar.o(), mVar.k(), 65, null));
            } else {
                throw new ir.p();
            }
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r t2(x5 x5Var, final x1.m mVar, final b bVar, Unit it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.x4
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f33282a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.m(), mVar.u(), mVar.t(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.o(), mVar.k(), 2, null));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f23780a);
        return Unit.f33282a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0314c enumC0314c;
        String str;
        final x1.d dVar2;
        d.c.b c0311b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f23940a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0314c = d.c.EnumC0314c.f23903e;
                } else {
                    throw new ir.p();
                }
            } else {
                enumC0314c = d.c.EnumC0314c.f23909s;
            }
        } else {
            enumC0314c = d.c.EnumC0314c.f23906p;
        }
        d.c.EnumC0314c enumC0314c2 = enumC0314c;
        String str2 = null;
        aVar.a("countdown_to_manual_capture_" + dVar.t(), new k(aVar, this, null));
        qn.b u10 = dVar.u();
        if (u10 != null) {
            str2 = i3(u10, bVar.x(), dVar.e());
        }
        String str3 = str2;
        if (str3 == null) {
            str = bVar.x().p();
        } else {
            str = str3;
        }
        String c10 = bVar.x().c();
        if (dVar.t() == 0) {
            dVar2 = dVar;
            c0311b = new d.c.b.C0313d(new Function1() { // from class: ep.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = x5.y1(a1.b.this, aVar, this, dVar2, (String) obj);
                    return y12;
                }
            }, new Function1() { // from class: ep.y4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A1;
                    A1 = x5.A1(x5.this, aVar, (Throwable) obj);
                    return A1;
                }
            }, true, enumC0314c2, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a));
        } else {
            dVar2 = dVar;
            int t10 = dVar2.t();
            if (l3(bVar) == sn.a.f49091e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0311b = new d.c.b.C0311b(t10, z10, bVar.z().a(), enumC0314c2, !Intrinsics.areEqual(bVar.u(), d2.b.f23100a), new Function1() { // from class: ep.j5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B1;
                    B1 = x5.B1(k.a.this, (Throwable) obj);
                    return B1;
                }
            });
        }
        d.c.b bVar3 = c0311b;
        boolean t11 = bVar.t();
        rp.a b10 = this.f23725j.b();
        Function1 k10 = m6.k(aVar);
        sn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f23722g;
        g.a aVar3 = this.f23723h;
        return j2.f(bVar, aVar, dVar2.e(), c10, str, str3, dVar2.a(), bVar3, v10, t11, b10, new Function0() { // from class: ep.u5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C1;
                C1 = x5.C1(k.a.this, this);
                return C1;
            }
        }, new Function0() { // from class: ep.w5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D1;
                D1 = x5.D1(x5.this, aVar);
                return D1;
            }
        }, k10, new Function0() { // from class: ep.l2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E1;
                E1 = x5.E1(x5.this, aVar, bVar);
                return E1;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, dVar2.o(), dVar2.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f23716a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f23008i, bVar, System.currentTimeMillis());
        tm.h c10 = aVar.c();
        d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.a5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = x5.z1(x5.this, dVar, cVar, (r.c) obj);
                return z12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        tm.w.l(aVar, this.f23717b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.p(), nVar.r(), nVar.b(), nVar.m()), Reflection.typeOf(gp.c.class), "", new Function1() { // from class: ep.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                tm.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        rp.b.d(this.f23725j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        rp.a b10 = this.f23725j.b();
        Function0 function0 = new Function0() { // from class: ep.g4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C2;
                C2 = x5.C2(x5.this, aVar);
                return C2;
            }
        };
        Function0 function02 = new Function0() { // from class: ep.h4
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r z2(final x5 x5Var, final k.a aVar, final c.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0342b) {
            d11 = tm.z.d(x5Var, null, new Function1() { // from class: ep.u4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A2;
                    A2 = x5.A2(x5.this, aVar, (r.c) obj);
                    return A2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = tm.z.d(x5Var, null, new Function1() { // from class: ep.v4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B2;
                    B2 = x5.B2(x5.this, aVar, it, (r.c) obj);
                    return B2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    @Override // tm.k
    /* renamed from: X0 */
    public x1 d(b props, tm.i iVar) {
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
                readParcelable = obtain.readParcelable(tm.i.class.getClassLoader());
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
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f39319d, false, 163, null);
        }
        return new x1.j(null, null, 2, null);
    }

    @Override // tm.k
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
        this.f23725j.c(renderProps.b(), renderProps.g(), !z10);
        this.f23726k.c(new i.e(renderProps.k(), j3(renderState)));
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
            y22 = this.f23721f.q(renderProps, (x1.e) renderState, context);
        } else if (renderState instanceof x1.f) {
            y22 = F1(renderProps, (x1.f) renderState, context);
        } else if (renderState instanceof x1.q) {
            y22 = W2(renderProps, (x1.q) renderState, context);
        } else if (renderState instanceof x1.i) {
            y22 = N1(renderProps, (x1.i) renderState, context);
        } else if (z10) {
            y22 = y2(renderProps, (x1.n) renderState, context);
        } else {
            throw new ir.p();
        }
        if (y22 instanceof d.c) {
            return zo.l1.c(y22);
        }
        return y22;
    }

    @Override // tm.k
    /* renamed from: h3 */
    public tm.i g(x1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return vm.s.a(state);
    }
}
