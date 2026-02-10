package np;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Size;
import cn.k;
import cn.o;
import cn.r;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.selfie.video_capture.VideoCaptureConfig;
import ip.c1;
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
import np.a1;
import np.b1;
import np.d2;
import np.x1;
import np.x5;
import okio.ByteString;
import pp.c;
import tq.b;
import vn.v;
import vn.z;
import wp.i;
import wp.j;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x5 extends cn.k {

    /* renamed from: l  reason: collision with root package name */
    public static final a f39723l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f39724a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f39725b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f39726c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f39727d;

    /* renamed from: e  reason: collision with root package name */
    private final ip.c1 f39728e;

    /* renamed from: f  reason: collision with root package name */
    private final qp.j f39729f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f39730g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f39731h;

    /* renamed from: i  reason: collision with root package name */
    private final ao.a f39732i;

    /* renamed from: j  reason: collision with root package name */
    private final aq.b f39733j;

    /* renamed from: k  reason: collision with root package name */
    private final wp.c f39734k;

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
        private final String f39735a;

        /* renamed from: b  reason: collision with root package name */
        private final String f39736b;

        /* renamed from: c  reason: collision with root package name */
        private final String f39737c;

        /* renamed from: d  reason: collision with root package name */
        private final String f39738d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f39739e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f39740f;

        /* renamed from: g  reason: collision with root package name */
        private final String f39741g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f39742h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f39743i;

        /* renamed from: j  reason: collision with root package name */
        private final a f39744j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f39745k;

        /* renamed from: l  reason: collision with root package name */
        private final List f39746l;

        /* renamed from: m  reason: collision with root package name */
        private final String f39747m;

        /* renamed from: n  reason: collision with root package name */
        private final String f39748n;

        /* renamed from: o  reason: collision with root package name */
        private final String f39749o;

        /* renamed from: p  reason: collision with root package name */
        private final String f39750p;

        /* renamed from: q  reason: collision with root package name */
        private final String f39751q;

        /* renamed from: r  reason: collision with root package name */
        private final String f39752r;

        /* renamed from: s  reason: collision with root package name */
        private final String f39753s;

        /* renamed from: t  reason: collision with root package name */
        private final String f39754t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f39755u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f39756v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f39757w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f39758x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f39759y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f39760z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f39761a;

            /* renamed from: b  reason: collision with root package name */
            private final String f39762b;

            /* renamed from: c  reason: collision with root package name */
            private final String f39763c;

            /* renamed from: d  reason: collision with root package name */
            private final String f39764d;

            /* renamed from: e  reason: collision with root package name */
            private final String f39765e;

            /* renamed from: f  reason: collision with root package name */
            private final String f39766f;

            /* renamed from: g  reason: collision with root package name */
            private final String f39767g;

            /* renamed from: h  reason: collision with root package name */
            private final String f39768h;

            /* renamed from: i  reason: collision with root package name */
            private final String f39769i;

            /* renamed from: j  reason: collision with root package name */
            private final String f39770j;

            /* renamed from: k  reason: collision with root package name */
            private final String f39771k;

            /* renamed from: l  reason: collision with root package name */
            private final String f39772l;

            /* renamed from: m  reason: collision with root package name */
            private final String f39773m;

            /* renamed from: n  reason: collision with root package name */
            private final String f39774n;

            /* renamed from: o  reason: collision with root package name */
            private final String f39775o;

            /* renamed from: p  reason: collision with root package name */
            private final String f39776p;

            /* renamed from: q  reason: collision with root package name */
            private final String f39777q;

            /* renamed from: r  reason: collision with root package name */
            private final String f39778r;

            /* renamed from: s  reason: collision with root package name */
            private final String f39779s;

            /* renamed from: t  reason: collision with root package name */
            private final String f39780t;

            /* renamed from: u  reason: collision with root package name */
            private final String f39781u;

            /* renamed from: v  reason: collision with root package name */
            private final String f39782v;

            /* renamed from: w  reason: collision with root package name */
            private final String f39783w;

            /* renamed from: x  reason: collision with root package name */
            private final String f39784x;

            /* renamed from: y  reason: collision with root package name */
            private final String f39785y;

            /* renamed from: z  reason: collision with root package name */
            private final String f39786z;

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
                this.f39761a = title;
                this.f39762b = prompt;
                this.f39763c = disclosure;
                this.f39764d = startButton;
                this.f39765e = capturePageTitle;
                this.f39766f = selfieHintTakePhoto;
                this.f39767g = selfieHintCenterFace;
                this.f39768h = selfieHintFaceTooClose;
                this.f39769i = selfieHintFaceTooFar;
                this.f39770j = selfieHintMultipleFaces;
                this.f39771k = selfieHintFaceIncomplete;
                this.f39772l = selfieHintPoseNotCentered;
                this.f39773m = selfieHintLookLeft;
                this.f39774n = selfieHintLookRight;
                this.f39775o = selfieHintHoldStill;
                this.f39776p = processingTitle;
                this.f39777q = processingDescription;
                this.f39778r = str;
                this.f39779s = str2;
                this.f39780t = str3;
                this.f39781u = str4;
                this.f39782v = str5;
                this.f39783w = str6;
                this.f39784x = str7;
                this.f39785y = str8;
                this.f39786z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f39766f;
            }

            public final String B() {
                return this.f39764d;
            }

            public final String C() {
                return this.f39761a;
            }

            public final String a() {
                return this.f39785y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f39765e;
            }

            public final String d() {
                return this.f39786z;
            }

            public final String e() {
                return this.f39763c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f39761a, aVar.f39761a) && Intrinsics.areEqual(this.f39762b, aVar.f39762b) && Intrinsics.areEqual(this.f39763c, aVar.f39763c) && Intrinsics.areEqual(this.f39764d, aVar.f39764d) && Intrinsics.areEqual(this.f39765e, aVar.f39765e) && Intrinsics.areEqual(this.f39766f, aVar.f39766f) && Intrinsics.areEqual(this.f39767g, aVar.f39767g) && Intrinsics.areEqual(this.f39768h, aVar.f39768h) && Intrinsics.areEqual(this.f39769i, aVar.f39769i) && Intrinsics.areEqual(this.f39770j, aVar.f39770j) && Intrinsics.areEqual(this.f39771k, aVar.f39771k) && Intrinsics.areEqual(this.f39772l, aVar.f39772l) && Intrinsics.areEqual(this.f39773m, aVar.f39773m) && Intrinsics.areEqual(this.f39774n, aVar.f39774n) && Intrinsics.areEqual(this.f39775o, aVar.f39775o) && Intrinsics.areEqual(this.f39776p, aVar.f39776p) && Intrinsics.areEqual(this.f39777q, aVar.f39777q) && Intrinsics.areEqual(this.f39778r, aVar.f39778r) && Intrinsics.areEqual(this.f39779s, aVar.f39779s) && Intrinsics.areEqual(this.f39780t, aVar.f39780t) && Intrinsics.areEqual(this.f39781u, aVar.f39781u) && Intrinsics.areEqual(this.f39782v, aVar.f39782v) && Intrinsics.areEqual(this.f39783w, aVar.f39783w) && Intrinsics.areEqual(this.f39784x, aVar.f39784x) && Intrinsics.areEqual(this.f39785y, aVar.f39785y) && Intrinsics.areEqual(this.f39786z, aVar.f39786z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f39777q;
            }

            public final String g() {
                return this.f39776p;
            }

            public final String h() {
                return this.f39762b;
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
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f39761a.hashCode() * 31) + this.f39762b.hashCode()) * 31) + this.f39763c.hashCode()) * 31) + this.f39764d.hashCode()) * 31) + this.f39765e.hashCode()) * 31) + this.f39766f.hashCode()) * 31) + this.f39767g.hashCode()) * 31) + this.f39768h.hashCode()) * 31) + this.f39769i.hashCode()) * 31) + this.f39770j.hashCode()) * 31) + this.f39771k.hashCode()) * 31) + this.f39772l.hashCode()) * 31) + this.f39773m.hashCode()) * 31) + this.f39774n.hashCode()) * 31) + this.f39775o.hashCode()) * 31) + this.f39776p.hashCode()) * 31) + this.f39777q.hashCode()) * 31;
                String str = this.f39778r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f39779s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f39780t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f39781u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f39782v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f39783w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f39784x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f39785y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f39786z;
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
                return this.f39784x;
            }

            public final String j() {
                return this.f39783w;
            }

            public final String k() {
                return this.f39779s;
            }

            public final String l() {
                return this.f39780t;
            }

            public final String m() {
                return this.f39781u;
            }

            public final String n() {
                return this.f39782v;
            }

            public final String o() {
                return this.f39778r;
            }

            public final String p() {
                return this.f39767g;
            }

            public final String q() {
                return this.f39771k;
            }

            public final String r() {
                return this.f39768h;
            }

            public final String s() {
                return this.f39769i;
            }

            public final String t() {
                return this.f39775o;
            }

            public String toString() {
                String str = this.f39761a;
                String str2 = this.f39762b;
                String str3 = this.f39763c;
                String str4 = this.f39764d;
                String str5 = this.f39765e;
                String str6 = this.f39766f;
                String str7 = this.f39767g;
                String str8 = this.f39768h;
                String str9 = this.f39769i;
                String str10 = this.f39770j;
                String str11 = this.f39771k;
                String str12 = this.f39772l;
                String str13 = this.f39773m;
                String str14 = this.f39774n;
                String str15 = this.f39775o;
                String str16 = this.f39776p;
                String str17 = this.f39777q;
                String str18 = this.f39778r;
                String str19 = this.f39779s;
                String str20 = this.f39780t;
                String str21 = this.f39781u;
                String str22 = this.f39782v;
                String str23 = this.f39783w;
                String str24 = this.f39784x;
                String str25 = this.f39785y;
                String str26 = this.f39786z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f39773m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f39774n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f39770j;
            }

            public final String z() {
                return this.f39772l;
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
            this.f39735a = sessionToken;
            this.f39736b = inquiryId;
            this.f39737c = fromComponent;
            this.f39738d = fromStep;
            this.f39739e = z10;
            this.f39740f = z11;
            this.f39741g = fieldKeySelfie;
            this.f39742h = z12;
            this.f39743i = z13;
            this.f39744j = strings;
            this.f39745k = selfieType;
            this.f39746l = orderedPoses;
            this.f39747m = str;
            this.f39748n = str2;
            this.f39749o = str3;
            this.f39750p = str4;
            this.f39751q = str5;
            this.f39752r = str6;
            this.f39753s = str7;
            this.f39754t = str8;
            this.f39755u = selfieStepStyle;
            this.f39756v = videoCaptureConfig;
            this.f39757w = assetConfig;
            this.f39758x = pendingPageTextVerticalPosition;
            this.f39759y = poseConfigs;
            this.f39760z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f39757w;
        }

        public final boolean b() {
            return this.f39739e;
        }

        public final String c() {
            return this.f39750p;
        }

        public final String d() {
            return this.f39749o;
        }

        public final String e() {
            return this.f39748n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f39735a, bVar.f39735a) && Intrinsics.areEqual(this.f39736b, bVar.f39736b) && Intrinsics.areEqual(this.f39737c, bVar.f39737c) && Intrinsics.areEqual(this.f39738d, bVar.f39738d) && this.f39739e == bVar.f39739e && this.f39740f == bVar.f39740f && Intrinsics.areEqual(this.f39741g, bVar.f39741g) && this.f39742h == bVar.f39742h && this.f39743i == bVar.f39743i && Intrinsics.areEqual(this.f39744j, bVar.f39744j) && Intrinsics.areEqual(this.f39745k, bVar.f39745k) && Intrinsics.areEqual(this.f39746l, bVar.f39746l) && Intrinsics.areEqual(this.f39747m, bVar.f39747m) && Intrinsics.areEqual(this.f39748n, bVar.f39748n) && Intrinsics.areEqual(this.f39749o, bVar.f39749o) && Intrinsics.areEqual(this.f39750p, bVar.f39750p) && Intrinsics.areEqual(this.f39751q, bVar.f39751q) && Intrinsics.areEqual(this.f39752r, bVar.f39752r) && Intrinsics.areEqual(this.f39753s, bVar.f39753s) && Intrinsics.areEqual(this.f39754t, bVar.f39754t) && Intrinsics.areEqual(this.f39755u, bVar.f39755u) && Intrinsics.areEqual(this.f39756v, bVar.f39756v) && Intrinsics.areEqual(this.f39757w, bVar.f39757w) && this.f39758x == bVar.f39758x && Intrinsics.areEqual(this.f39759y, bVar.f39759y) && this.f39760z == bVar.f39760z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f39747m;
        }

        public final boolean g() {
            return this.f39740f;
        }

        public final b0 h() {
            return this.f39760z;
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
            int hashCode9 = ((((((((((((((((((((((this.f39735a.hashCode() * 31) + this.f39736b.hashCode()) * 31) + this.f39737c.hashCode()) * 31) + this.f39738d.hashCode()) * 31) + Boolean.hashCode(this.f39739e)) * 31) + Boolean.hashCode(this.f39740f)) * 31) + this.f39741g.hashCode()) * 31) + Boolean.hashCode(this.f39742h)) * 31) + Boolean.hashCode(this.f39743i)) * 31) + this.f39744j.hashCode()) * 31) + this.f39745k.hashCode()) * 31) + this.f39746l.hashCode()) * 31;
            String str = this.f39747m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f39748n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f39749o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f39750p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f39751q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f39752r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f39753s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f39754t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f39755u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f39756v.hashCode()) * 31) + this.f39757w.hashCode()) * 31) + this.f39758x.hashCode()) * 31) + this.f39759y.hashCode()) * 31) + this.f39760z.hashCode();
        }

        public final String i() {
            return this.f39741g;
        }

        public final String j() {
            return this.f39737c;
        }

        public final String k() {
            return this.f39738d;
        }

        public final String l() {
            return this.f39736b;
        }

        public final String m() {
            return this.f39754t;
        }

        public final String n() {
            return this.f39753s;
        }

        public final String o() {
            return this.f39752r;
        }

        public final String p() {
            return this.f39751q;
        }

        public final List q() {
            return this.f39746l;
        }

        public final PendingPageTextPosition r() {
            return this.f39758x;
        }

        public final s0 s() {
            return this.f39759y;
        }

        public final boolean t() {
            return this.f39742h;
        }

        public String toString() {
            String str = this.f39735a;
            String str2 = this.f39736b;
            String str3 = this.f39737c;
            String str4 = this.f39738d;
            boolean z10 = this.f39739e;
            boolean z11 = this.f39740f;
            String str5 = this.f39741g;
            boolean z12 = this.f39742h;
            boolean z13 = this.f39743i;
            a aVar = this.f39744j;
            d2 d2Var = this.f39745k;
            List list = this.f39746l;
            String str6 = this.f39747m;
            String str7 = this.f39748n;
            String str8 = this.f39749o;
            String str9 = this.f39750p;
            String str10 = this.f39751q;
            String str11 = this.f39752r;
            String str12 = this.f39753s;
            String str13 = this.f39754t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f39755u;
            VideoCaptureConfig videoCaptureConfig = this.f39756v;
            NextStep.Selfie.AssetConfig assetConfig = this.f39757w;
            PendingPageTextPosition pendingPageTextPosition = this.f39758x;
            s0 s0Var = this.f39759y;
            b0 b0Var = this.f39760z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f39745k;
        }

        public final String v() {
            return this.f39735a;
        }

        public final boolean w() {
            return this.f39743i;
        }

        public final a x() {
            return this.f39744j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f39755u;
        }

        public final VideoCaptureConfig z() {
            return this.f39756v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f39787a = new a();

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
            public static final b f39788a = new b();

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

        /* renamed from: np.x5$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0569c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f39789a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0569c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f39789a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f39789a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0569c) && Intrinsics.areEqual(this.f39789a, ((C0569c) obj).f39789a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f39789a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f39789a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f39790a = new d();

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
            private final String f39791a;

            /* renamed from: b  reason: collision with root package name */
            private final String f39792b;

            /* renamed from: c  reason: collision with root package name */
            private final String f39793c;

            /* renamed from: d  reason: collision with root package name */
            private final String f39794d;

            /* renamed from: e  reason: collision with root package name */
            private final String f39795e;

            /* renamed from: f  reason: collision with root package name */
            private final String f39796f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f39797g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0570a f39798h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f39799i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f39800j;

            /* renamed from: k  reason: collision with root package name */
            private final aq.a f39801k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f39802l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f39803m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f39804n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f39805o;

            /* renamed from: p  reason: collision with root package name */
            private final bo.a f39806p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f39807q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f39808r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f39809s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f39810t;

            /* renamed from: u  reason: collision with root package name */
            private final float f39811u;

            /* renamed from: v  reason: collision with root package name */
            private final zn.a f39812v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f39813w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f39814x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f39815y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f39816z;

            /* renamed from: np.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0570a {

                /* renamed from: np.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0571a extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39817a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0571a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39817a = overlay;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39817a;
                    }
                }

                /* renamed from: np.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39818a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f39819b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39820c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f39821d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f39822e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f39818a = overlay;
                        this.f39819b = i10;
                        this.f39820c = z10;
                        this.f39821d = j10;
                        this.f39822e = onError;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39818a;
                    }

                    public final int b() {
                        return this.f39819b;
                    }

                    public final long c() {
                        return this.f39821d;
                    }

                    public final Function1 d() {
                        return this.f39822e;
                    }

                    public final boolean e() {
                        return this.f39820c;
                    }
                }

                /* renamed from: np.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39823a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f39824b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f39825c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f39826d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f39823a = overlay;
                        this.f39824b = finalizeVideo;
                        this.f39825c = onAnimationComplete;
                        this.f39826d = z10;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39823a;
                    }

                    public final Function1 b() {
                        return this.f39824b;
                    }

                    public final Function0 c() {
                        return this.f39825c;
                    }

                    public final boolean d() {
                        return this.f39826d;
                    }
                }

                /* renamed from: np.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0572d extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39827a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f39828b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f39829c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f39830d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0572d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f39827a = overlay;
                        this.f39828b = processImage;
                        this.f39829c = onError;
                        this.f39830d = z10;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39827a;
                    }

                    public final boolean b() {
                        return this.f39830d;
                    }

                    public final Function1 c() {
                        return this.f39829c;
                    }

                    public final Function1 d() {
                        return this.f39828b;
                    }
                }

                /* renamed from: np.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39831a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f39832b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f39831a = overlay;
                        this.f39832b = onCaptureClicked;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39831a;
                    }

                    public final Function0 b() {
                        return this.f39832b;
                    }
                }

                /* renamed from: np.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39833a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f39834b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f39833a = overlay;
                        this.f39834b = poseHintComplete;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39833a;
                    }

                    public final Function0 b() {
                        return this.f39834b;
                    }
                }

                /* renamed from: np.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39835a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f39836b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f39835a = overlay;
                        this.f39836b = previewReady;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39835a;
                    }

                    public final Function1 b() {
                        return this.f39836b;
                    }
                }

                /* renamed from: np.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39837a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f39838b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39839c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f39837a = overlay;
                        this.f39838b = onComplete;
                        this.f39839c = z10;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39837a;
                    }

                    public final boolean b() {
                        return this.f39839c;
                    }

                    public final Function0 c() {
                        return this.f39838b;
                    }
                }

                /* renamed from: np.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0570a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f39840a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f39841b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39840a = overlay;
                        this.f39841b = j10;
                    }

                    @Override // np.x5.d.a.AbstractC0570a
                    public b a() {
                        return this.f39840a;
                    }

                    public final long b() {
                        return this.f39841b;
                    }
                }

                public /* synthetic */ AbstractC0570a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract b a();

                private AbstractC0570a() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b {

                /* renamed from: d  reason: collision with root package name */
                public static final b f39842d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f39843e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f39844i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f39845o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f39846p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f39847q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f39848r;

                static {
                    b[] a10 = a();
                    f39847q = a10;
                    f39848r = yr.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f39842d, f39843e, f39844i, f39845o, f39846p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f39847q.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, String str3, String str4, String str5, String str6, boolean z10, AbstractC0570a mode, StepStyles.SelfieStepStyle selfieStepStyle, boolean z11, aq.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, bo.a videoCaptureMethod, uq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function1 onCameraFacingModeSelected, float f10, zn.a aVar2, v.b facingMode, boolean z13, boolean z14, Function1 onFlashSet, a1.b bVar, boolean z15) {
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
                this.f39791a = str;
                this.f39792b = str2;
                this.f39793c = str3;
                this.f39794d = str4;
                this.f39795e = str5;
                this.f39796f = str6;
                this.f39797g = z10;
                this.f39798h = mode;
                this.f39799i = selfieStepStyle;
                this.f39800j = z11;
                this.f39801k = navigationState;
                this.f39802l = onBack;
                this.f39803m = onCancel;
                this.f39804n = onCameraError;
                this.f39805o = onPermissionChanged;
                this.f39806p = videoCaptureMethod;
                this.f39807q = z12;
                this.f39808r = cameraXControllerFactory;
                this.f39809s = camera2ManagerFactoryFactory;
                this.f39810t = onCameraFacingModeSelected;
                this.f39811u = f10;
                this.f39812v = aVar2;
                this.f39813w = facingMode;
                this.f39814x = z13;
                this.f39815y = z14;
                this.f39816z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f39797g;
            }

            public final boolean B() {
                return this.f39814x;
            }

            public final boolean C() {
                return this.f39815y;
            }

            public final String a() {
                return this.f39794d;
            }

            public final zn.a b() {
                return this.f39812v;
            }

            public final g.a c() {
                return this.f39809s;
            }

            public final z.a d() {
                return this.f39808r;
            }

            public final String e() {
                return this.f39795e;
            }

            public final String f() {
                return this.f39793c;
            }

            public final v.b g() {
                return this.f39813w;
            }

            public final String h() {
                return this.f39792b;
            }

            public final AbstractC0570a i() {
                return this.f39798h;
            }

            public final aq.a j() {
                return this.f39801k;
            }

            public final Function0 k() {
                return this.f39802l;
            }

            public final Function1 l() {
                return this.f39804n;
            }

            public final Function1 m() {
                return this.f39810t;
            }

            public final Function0 n() {
                return this.f39803m;
            }

            public final Function1 o() {
                return this.f39816z;
            }

            public final Function0 p() {
                return this.f39805o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f39811u;
            }

            public final String s() {
                return this.f39796f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f39800j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f39799i;
            }

            public final String w() {
                return this.f39791a;
            }

            public final bo.a x() {
                return this.f39806p;
            }

            public final uq.a y() {
                return null;
            }

            public final boolean z() {
                return this.f39807q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f39849a;

            /* renamed from: b  reason: collision with root package name */
            private final String f39850b;

            /* renamed from: c  reason: collision with root package name */
            private final String f39851c;

            /* renamed from: d  reason: collision with root package name */
            private final String f39852d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f39853e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f39854f;

            /* renamed from: g  reason: collision with root package name */
            private final aq.a f39855g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f39856h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f39857i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f39858j;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String title, String prompt, String disclosure, String start, StepStyles.SelfieStepStyle selfieStepStyle, RemoteImage remoteImage, aq.a navigationState, Function0 onClick, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(start, "start");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f39849a = title;
                this.f39850b = prompt;
                this.f39851c = disclosure;
                this.f39852d = start;
                this.f39853e = selfieStepStyle;
                this.f39854f = remoteImage;
                this.f39855g = navigationState;
                this.f39856h = onClick;
                this.f39857i = onBack;
                this.f39858j = onCancel;
            }

            public final String a() {
                return this.f39851c;
            }

            public final RemoteImage b() {
                return this.f39854f;
            }

            public final aq.a c() {
                return this.f39855g;
            }

            public final Function0 d() {
                return this.f39857i;
            }

            public final Function0 e() {
                return this.f39858j;
            }

            public final Function0 f() {
                return this.f39856h;
            }

            public final String g() {
                return this.f39850b;
            }

            public final String h() {
                return this.f39852d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f39853e;
            }

            public final String j() {
                return this.f39849a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f39859a;

            /* renamed from: b  reason: collision with root package name */
            private final String f39860b;

            /* renamed from: c  reason: collision with root package name */
            private final b f39861c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f39862d;

            /* renamed from: e  reason: collision with root package name */
            private final a f39863e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f39864f;

            /* renamed from: g  reason: collision with root package name */
            private final aq.a f39865g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f39866h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f39867i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f39868j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f39869k;

            /* renamed from: l  reason: collision with root package name */
            private final bo.a f39870l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f39871m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f39872n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f39873o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f39874a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f39875b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f39874a = remoteImage;
                    this.f39875b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f39874a;
                }

                public final RemoteImage b() {
                    return this.f39875b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f39874a, aVar.f39874a) && Intrinsics.areEqual(this.f39875b, aVar.f39875b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f39874a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f39875b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f39874a;
                    RemoteImage remoteImage2 = this.f39875b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0576c f39876a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f39877b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0576c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39876a = overlay;
                        this.f39877b = z10;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39876a;
                    }

                    public boolean b() {
                        return this.f39877b;
                    }
                }

                /* renamed from: np.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0573b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f39878a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f39879b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f39880c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0576c f39881d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f39882e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f39883f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0573b(int i10, boolean z10, long j10, EnumC0576c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f39878a = i10;
                        this.f39879b = z10;
                        this.f39880c = j10;
                        this.f39881d = overlay;
                        this.f39882e = z11;
                        this.f39883f = onError;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39881d;
                    }

                    public final int b() {
                        return this.f39878a;
                    }

                    public final long c() {
                        return this.f39880c;
                    }

                    public final Function1 d() {
                        return this.f39883f;
                    }

                    public final boolean e() {
                        return this.f39879b;
                    }

                    public boolean f() {
                        return this.f39882e;
                    }
                }

                /* renamed from: np.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0574c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f39884a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f39885b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39886c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0576c f39887d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f39888e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0574c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0576c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39884a = finalizeVideo;
                        this.f39885b = onAnimationComplete;
                        this.f39886c = z10;
                        this.f39887d = overlay;
                        this.f39888e = z11;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39887d;
                    }

                    public final Function1 b() {
                        return this.f39884a;
                    }

                    public final Function0 c() {
                        return this.f39885b;
                    }

                    public boolean d() {
                        return this.f39888e;
                    }

                    public final boolean e() {
                        return this.f39886c;
                    }
                }

                /* renamed from: np.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0575d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f39889a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f39890b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39891c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0576c f39892d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f39893e;

                    public /* synthetic */ C0575d(Function1 function1, Function1 function12, boolean z10, EnumC0576c enumC0576c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0576c, z11);
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39892d;
                    }

                    public final boolean b() {
                        return this.f39891c;
                    }

                    public final Function1 c() {
                        return this.f39890b;
                    }

                    public final Function1 d() {
                        return this.f39889a;
                    }

                    public boolean e() {
                        return this.f39893e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0575d(Function1 processImage, Function1 onError, boolean z10, EnumC0576c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39889a = processImage;
                        this.f39890b = onError;
                        this.f39891c = z10;
                        this.f39892d = overlay;
                        this.f39893e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f39894a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0576c f39895b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39896c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0576c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39894a = onCaptureClicked;
                        this.f39895b = overlay;
                        this.f39896c = z10;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39895b;
                    }

                    public final Function0 b() {
                        return this.f39894a;
                    }

                    public boolean c() {
                        return this.f39896c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f39897a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0576c f39898b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39899c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0576c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39897a = poseHintComplete;
                        this.f39898b = overlay;
                        this.f39899c = z10;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39898b;
                    }

                    public final Function0 b() {
                        return this.f39897a;
                    }

                    public boolean c() {
                        return this.f39899c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f39900a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0576c f39901b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39902c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0576c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39900a = previewReady;
                        this.f39901b = overlay;
                        this.f39902c = z10;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39901b;
                    }

                    public final Function1 b() {
                        return this.f39900a;
                    }

                    public boolean c() {
                        return this.f39902c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f39903a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f39904b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0576c f39905c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f39906d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0576c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39903a = onComplete;
                        this.f39904b = z10;
                        this.f39905c = overlay;
                        this.f39906d = z11;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39905c;
                    }

                    public final boolean b() {
                        return this.f39904b;
                    }

                    public final Function0 c() {
                        return this.f39903a;
                    }

                    public boolean d() {
                        return this.f39906d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0576c f39907a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f39908b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f39909c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0576c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f39907a = overlay;
                        this.f39908b = j10;
                        this.f39909c = z10;
                    }

                    @Override // np.x5.d.c.b
                    public EnumC0576c a() {
                        return this.f39907a;
                    }

                    public final long b() {
                        return this.f39908b;
                    }
                }

                public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract EnumC0576c a();

                private b() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* renamed from: np.x5$d$c$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class EnumC0576c {

                /* renamed from: d  reason: collision with root package name */
                public static final EnumC0576c f39910d = new EnumC0576c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0576c f39911e = new EnumC0576c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0576c f39912i = new EnumC0576c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0576c f39913o = new EnumC0576c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0576c f39914p = new EnumC0576c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0576c f39915q = new EnumC0576c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0576c f39916r = new EnumC0576c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0576c f39917s = new EnumC0576c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0576c f39918t = new EnumC0576c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0576c f39919u = new EnumC0576c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0576c f39920v = new EnumC0576c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0576c f39921w = new EnumC0576c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0576c[] f39922x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f39923y;

                static {
                    EnumC0576c[] a10 = a();
                    f39922x = a10;
                    f39923y = yr.a.a(a10);
                }

                private EnumC0576c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0576c[] a() {
                    return new EnumC0576c[]{f39910d, f39911e, f39912i, f39913o, f39914p, f39915q, f39916r, f39917s, f39918t, f39919u, f39920v, f39921w};
                }

                public static EnumC0576c valueOf(String str) {
                    return (EnumC0576c) Enum.valueOf(EnumC0576c.class, str);
                }

                public static EnumC0576c[] values() {
                    return (EnumC0576c[]) f39922x.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, String str2, b mode, StepStyles.SelfieStepStyle selfieStepStyle, a assetOverrides, boolean z10, aq.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, bo.a videoCaptureMethod, uq.a aVar, boolean z11, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
                this.f39859a = str;
                this.f39860b = str2;
                this.f39861c = mode;
                this.f39862d = selfieStepStyle;
                this.f39863e = assetOverrides;
                this.f39864f = z10;
                this.f39865g = navigationState;
                this.f39866h = onBack;
                this.f39867i = onCancel;
                this.f39868j = onCameraError;
                this.f39869k = onPermissionChanged;
                this.f39870l = videoCaptureMethod;
                this.f39871m = z11;
                this.f39872n = cameraXControllerFactory;
                this.f39873o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f39863e;
            }

            public final g.a b() {
                return this.f39873o;
            }

            public final z.a c() {
                return this.f39872n;
            }

            public final String d() {
                return this.f39860b;
            }

            public final b e() {
                return this.f39861c;
            }

            public final aq.a f() {
                return this.f39865g;
            }

            public final Function0 g() {
                return this.f39866h;
            }

            public final Function1 h() {
                return this.f39868j;
            }

            public final Function0 i() {
                return this.f39867i;
            }

            public final Function0 j() {
                return this.f39869k;
            }

            public final boolean k() {
                return this.f39864f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f39862d;
            }

            public final String m() {
                return this.f39859a;
            }

            public final bo.a n() {
                return this.f39870l;
            }

            public final uq.a o() {
                return null;
            }

            public final boolean p() {
                return this.f39871m;
            }
        }

        /* renamed from: np.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0577d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f39924a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0577d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f39924a = rendered;
            }

            public final Function0 a() {
                return this.f39924a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f39925a;

            /* renamed from: b  reason: collision with root package name */
            private final List f39926b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f39927c;

            /* renamed from: d  reason: collision with root package name */
            private final aq.a f39928d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f39929e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f39930f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f39931g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f39932h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f39933a;

                /* renamed from: b  reason: collision with root package name */
                private final String f39934b;

                /* renamed from: c  reason: collision with root package name */
                private final String f39935c;

                /* renamed from: d  reason: collision with root package name */
                private final String f39936d;

                /* renamed from: e  reason: collision with root package name */
                private final String f39937e;

                /* renamed from: f  reason: collision with root package name */
                private final String f39938f;

                /* renamed from: g  reason: collision with root package name */
                private final String f39939g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f39933a = title;
                    this.f39934b = description;
                    this.f39935c = selfieLabelFront;
                    this.f39936d = selfieLabelLeft;
                    this.f39937e = selfieLabelRight;
                    this.f39938f = submitButton;
                    this.f39939g = retakeButton;
                }

                public final String a() {
                    return this.f39934b;
                }

                public final String b() {
                    return this.f39939g;
                }

                public final String c() {
                    return this.f39935c;
                }

                public final String d() {
                    return this.f39936d;
                }

                public final String e() {
                    return this.f39937e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f39933a, aVar.f39933a) && Intrinsics.areEqual(this.f39934b, aVar.f39934b) && Intrinsics.areEqual(this.f39935c, aVar.f39935c) && Intrinsics.areEqual(this.f39936d, aVar.f39936d) && Intrinsics.areEqual(this.f39937e, aVar.f39937e) && Intrinsics.areEqual(this.f39938f, aVar.f39938f) && Intrinsics.areEqual(this.f39939g, aVar.f39939g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f39938f;
                }

                public final String g() {
                    return this.f39933a;
                }

                public int hashCode() {
                    return (((((((((((this.f39933a.hashCode() * 31) + this.f39934b.hashCode()) * 31) + this.f39935c.hashCode()) * 31) + this.f39936d.hashCode()) * 31) + this.f39937e.hashCode()) * 31) + this.f39938f.hashCode()) * 31) + this.f39939g.hashCode();
                }

                public String toString() {
                    String str = this.f39933a;
                    String str2 = this.f39934b;
                    String str3 = this.f39935c;
                    String str4 = this.f39936d;
                    String str5 = this.f39937e;
                    String str6 = this.f39938f;
                    String str7 = this.f39939g;
                    return "Strings(title=" + str + ", description=" + str2 + ", selfieLabelFront=" + str3 + ", selfieLabelLeft=" + str4 + ", selfieLabelRight=" + str5 + ", submitButton=" + str6 + ", retakeButton=" + str7 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(a strings, List selfies, StepStyles.SelfieStepStyle selfieStepStyle, aq.a navigationState, Function0 onUsePhotos, Function0 onRetakePhotos, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(strings, "strings");
                Intrinsics.checkNotNullParameter(selfies, "selfies");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onUsePhotos, "onUsePhotos");
                Intrinsics.checkNotNullParameter(onRetakePhotos, "onRetakePhotos");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f39925a = strings;
                this.f39926b = selfies;
                this.f39927c = selfieStepStyle;
                this.f39928d = navigationState;
                this.f39929e = onUsePhotos;
                this.f39930f = onRetakePhotos;
                this.f39931g = onBack;
                this.f39932h = onCancel;
            }

            public final aq.a a() {
                return this.f39928d;
            }

            public final Function0 b() {
                return this.f39931g;
            }

            public final Function0 c() {
                return this.f39932h;
            }

            public final Function0 d() {
                return this.f39930f;
            }

            public final Function0 e() {
                return this.f39929e;
            }

            public final List f() {
                return this.f39926b;
            }

            public final a g() {
                return this.f39925a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f39927c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f39940a;

            /* renamed from: b  reason: collision with root package name */
            private final String f39941b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f39942c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f39943d;

            /* renamed from: e  reason: collision with root package name */
            private final aq.a f39944e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f39945f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f39946g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f39947h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, aq.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f39940a = title;
                this.f39941b = description;
                this.f39942c = pendingPageTextVerticalPosition;
                this.f39943d = selfieStepStyle;
                this.f39944e = navigationState;
                this.f39945f = onBack;
                this.f39946g = onCancel;
                this.f39947h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f39947h;
            }

            public final String b() {
                return this.f39941b;
            }

            public final aq.a c() {
                return this.f39944e;
            }

            public final Function0 d() {
                return this.f39945f;
            }

            public final Function0 e() {
                return this.f39946g;
            }

            public final PendingPageTextPosition f() {
                return this.f39942c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f39943d;
            }

            public final String h() {
                return this.f39940a;
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
        public static final /* synthetic */ int[] f39948a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f39949b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f39950c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f39021e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f39022i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f39020d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f39948a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f39156e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f39157i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f39155d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f39949b = iArr2;
            int[] iArr3 = new int[zn.b.values().length];
            try {
                iArr3[zn.b.f56549d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[zn.b.f56550e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[zn.b.f56551i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[zn.b.f56552o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[zn.b.f56553p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[zn.b.f56554q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[zn.b.f56555r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[zn.b.f56556s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[zn.b.f56557t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f39950c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39951d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f39951d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                vn.m mVar = vn.m.f52652a;
                Context context = x5.this.f39724a;
                this.f39951d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            x5.V0(x5.this);
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
        int f39953d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f39954e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f39955i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f39954e = aVar;
            this.f39955i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f39954e, this.f39955i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            xr.b.f();
            if (this.f39953d == 0) {
                kotlin.c.b(obj);
                cn.h c10 = this.f39954e.c();
                final x5 x5Var = this.f39955i;
                d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.y5
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = x5.g.k(x5.this, (r.c) obj2);
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
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39956d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f39957e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f39958i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f39957e = aVar;
            this.f39958i = x5Var;
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
                return Unit.f31765a;
            }
            cVar.e(x1.a.v(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f39632o, 8191, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f39957e, this.f39958i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            Object f10 = xr.b.f();
            int i10 = this.f39956d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f39956d = 1;
                if (ps.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            cn.h c10 = this.f39957e.c();
            d10 = cn.z.d(this.f39958i, null, new Function1() { // from class: np.z5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.h.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31765a;
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
        int f39959d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f39960e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f39961i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f39960e = aVar;
            this.f39961i = x5Var;
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
                return Unit.f31765a;
            }
            cVar.e(x1.a.v(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f39630e, 8191, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f39960e, this.f39961i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            Object f10 = xr.b.f();
            int i10 = this.f39959d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f39959d = 1;
                if (ps.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            cn.h c10 = this.f39960e.c();
            d10 = cn.z.d(this.f39961i, null, new Function1() { // from class: np.a6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.i.k((r.c) obj2);
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

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39962d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f39963e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f39964i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f39965o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f39966p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f39963e = aVar;
            this.f39964i = x5Var;
            this.f39965o = cVar;
            this.f39966p = bVar;
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
                return Unit.f31765a;
            }
            int x10 = cVar4.x();
            if (x10 > 1) {
                cVar2.e(x1.c.v(cVar4, x10 - 1, cVar4.B(), 0L, null, 0L, 0.0f, null, null, null, null, false, null, false, 8188, null));
            } else {
                zn.b B = cVar4.B();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                vn.v b10 = cVar4.b();
                cVar2.e(new x1.a(B, cVar.A(), cVar.w(), null, c11, i10, false, cVar.o(), b10, m6.i(cVar2, false), bVar.s(), cVar.q(), cVar.l(), null, 8264, null));
            }
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f39963e, this.f39964i, this.f39965o, this.f39966p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            Object f10 = xr.b.f();
            int i10 = this.f39962d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f39962d = 1;
                if (ps.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            cn.h c10 = this.f39963e.c();
            x5 x5Var = this.f39964i;
            final x1.c cVar = this.f39965o;
            final b bVar = this.f39966p;
            d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.b6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.j.k(x1.c.this, bVar, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39967d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f39968e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f39969i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f39968e = aVar;
            this.f39969i = x5Var;
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
                return Unit.f31765a;
            }
            int w10 = dVar2.w();
            if (w10 >= 1) {
                cVar.e(x1.d.v(dVar2, w10 - 1, dVar2.x(), null, null, 0L, false, 0L, null, null, null, false, 2044, null));
            }
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(this.f39968e, this.f39969i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            Object f10 = xr.b.f();
            int i10 = this.f39967d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f39967d = 1;
                if (ps.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            cn.h c10 = this.f39968e.c();
            d10 = cn.z.d(this.f39969i, null, new Function1() { // from class: np.c6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.k.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39970d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f39971e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f39972i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f39973o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f39971e = booleanRef;
            this.f39972i = aVar;
            this.f39973o = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(Ref.BooleanRef booleanRef, r.c cVar) {
            x1 x1Var = (x1) cVar.c();
            if ((x1Var instanceof a0) && ((a0) x1Var).j()) {
                cVar.e(x1Var);
                booleanRef.element = false;
            }
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new l(this.f39971e, this.f39972i, this.f39973o, continuation);
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
                java.lang.Object r0 = xr.b.f()
                int r1 = r5.f39970d
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
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f39971e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f39970d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ps.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                cn.k$a r6 = r5.f39972i
                cn.h r6 = r6.c()
                np.x5 r1 = r5.f39973o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f39971e
                np.d6 r4 = new np.d6
                r4.<init>()
                r3 = 0
                cn.r r1 = cn.w.f(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: np.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public x5(Context applicationContext, c.a submitVerificationWorker, b.a webRtcWorkerFactory, b1.b selfieAnalyzeWorker, ip.c1 permissionRequestWorkflow, qp.j localVideoCaptureRenderer, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, ao.a cameraStatsManager, aq.b navigationStateManager, wp.c externalEventLogger) {
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
        this.f39724a = applicationContext;
        this.f39725b = submitVerificationWorker;
        this.f39726c = webRtcWorkerFactory;
        this.f39727d = selfieAnalyzeWorker;
        this.f39728e = permissionRequestWorkflow;
        this.f39729f = localVideoCaptureRenderer;
        this.f39730g = cameraXControllerFactory;
        this.f39731h = camera2ManagerFactoryFactory;
        this.f39732i = cameraStatsManager;
        this.f39733j = navigationStateManager;
        this.f39734k = externalEventLogger;
        uq.c.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A2(x5 x5Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, c.d.f39790a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B2(x5 x5Var, k.a aVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, new c.C0569c(((c.b.a) bVar).a()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean x10 = oVar.x();
        if (!oVar.w() && Y0(bVar) && sp.f.f(this.f39724a) && bVar.z().b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        String c10 = bVar.x().c();
        d.c.b.g gVar = new d.c.b.g(new Function1() { // from class: np.i4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J2;
                J2 = x5.J2(k.a.this, this, bVar, oVar, currentTimeMillis, (vn.v) obj);
                return J2;
            }
        }, d.c.EnumC0576c.f39910d, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f39730g;
        g.a aVar3 = this.f39731h;
        v.b q10 = oVar.q();
        boolean l10 = oVar.l();
        if (x10 && !z10) {
            z11 = false;
        } else {
            z11 = true;
        }
        d f10 = j2.f(bVar, aVar, null, c10, null, null, false, gVar, v10, t10, b10, new Function0() { // from class: np.j4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L2;
                L2 = x5.L2(k.a.this, this);
                return L2;
            }
        }, new Function0() { // from class: np.k4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit M2;
                M2 = x5.M2(x5.this, aVar);
                return M2;
            }
        }, k10, new Function0() { // from class: np.l4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N2;
                N2 = x5.N2(x5.this, aVar, bVar);
                return N2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, q10, l10, false, z11, PointerEventHelper.X_FLAG_SUPPORTS_HOVER, null);
        if (!x10) {
            String str = "";
            ip.d0 d0Var = ip.d0.f29468d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f39724a.getString(kp.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f39724a;
            String string = context.getString(kp.e.C, sp.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return ip.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f39728e, bVar.y(), null, new Function1() { // from class: np.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r F2;
                    F2 = x5.F2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return F2;
                }
            }, 19976, null);
        }
        String str2 = "";
        if (z10) {
            ip.d0 d0Var2 = ip.d0.f29469e;
            String o10 = bVar.o();
            if (o10 == null) {
                o10 = this.f39724a.getString(kp.e.M);
                Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
            }
            Context context2 = this.f39724a;
            String string2 = context2.getString(kp.e.L, sp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            ip.c1 c1Var = this.f39728e;
            String p10 = bVar.p();
            if (p10 != null) {
                str2 = p10;
            }
            return ip.l1.e(f10, aVar, true, d0Var2, false, str2, o10, string2, n10, m10, null, null, null, c1Var, bVar.y(), "video_capture_mic_permission_request", new Function1() { // from class: np.o4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r H2;
                    H2 = x5.H2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return H2;
                }
            }, 3592, null);
        }
        return f10;
    }

    private final d F1(final b bVar, x1.f fVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: np.a4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit G1;
                G1 = x5.G1();
                return G1;
            }
        }, false, d.c.EnumC0576c.f39919u, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: np.b4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit H1;
                H1 = x5.H1(k.a.this, this);
                return H1;
            }
        }, new Function0() { // from class: np.d4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I1;
                I1 = x5.I1(x5.this, aVar);
                return I1;
            }
        }, k10, new Function0() { // from class: np.e4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit J1;
                J1 = x5.J1(x5.this, aVar, bVar);
                return J1;
            }
        }, l32, null, bVar.z().b(), this.f39730g, this.f39731h, 0.0f, null, fVar.q(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r F2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.l5
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == ip.g1.f29494d) {
            action.e(x1.o.v(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f39787a);
        } else {
            x5Var.e3(aVar2, new c.C0569c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r H2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.b5
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
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == ip.g1.f29494d) {
            action.e(x1.o.v(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f39787a);
        } else {
            x5Var.e3(aVar2, new c.C0569c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J2(k.a aVar, final x5 x5Var, final b bVar, final x1.o oVar, final long j10, final vn.v cameraProperties) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.c5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K2;
                K2 = x5.K2(x5.this, bVar, oVar, cameraProperties, j10, (r.c) obj);
                return K2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final d K1(final b bVar, final x1.h hVar, final k.a aVar) {
        return new d.C0577d(new Function0() { // from class: np.c4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L1;
                L1 = x5.L1(k.a.this, this, bVar, hVar);
                return L1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K2(x5 x5Var, b bVar, x1.o oVar, vn.v vVar, long j10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (x5Var.l3(bVar) == bo.a.f7161d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.q(), oVar.l()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.q(), oVar.l(), 67, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(k.a aVar, x5 x5Var, final b bVar, final x1.h hVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.m5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M1;
                M1 = x5.M1(x5.b.this, hVar, (r.c) obj);
                return M1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(b bVar, x1.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, hVar.q(), false, 163, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f39724a.getString(kp.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f39724a.getString(kp.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f39724a.getString(kp.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f39724a.getString(kp.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f39724a.getString(kp.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f39724a.getString(kp.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f39724a.getString(kp.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.u(), bVar.y(), this.f39733j.b(), new Function0() { // from class: np.i3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit O1;
                O1 = x5.O1(k.a.this, this, iVar);
                return O1;
            }
        }, new Function0() { // from class: np.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Q1;
                Q1 = x5.Q1(k.a.this, this, bVar, iVar);
                return Q1;
            }
        }, new Function0() { // from class: np.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit S1;
                S1 = x5.S1(k.a.this, this);
                return S1;
            }
        }, new Function0() { // from class: np.l3
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
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(k.a aVar, x5 x5Var, final x1.i iVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.t5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit P1;
                P1 = x5.P1(x1.i.this, (r.c) obj);
                return P1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        cn.w.l(aVar, this.f39726c.a(bVar.z().c()), Reflection.typeOf(tq.b.class), "", new Function1() { // from class: np.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0697b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0576c.f39910d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f39730g;
        g.a aVar3 = this.f39731h;
        return j2.f(bVar, aVar, pVar.e(), c10, null, null, false, iVar, v10, t10, b10, new Function0() { // from class: np.v2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T2;
                T2 = x5.T2(k.a.this, this);
                return T2;
            }
        }, new Function0() { // from class: np.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U2;
                U2 = x5.U2(x5.this, aVar);
                return U2;
            }
        }, k10, new Function0() { // from class: np.r3
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
            return Unit.f31765a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.r(), iVar3.v(), iVar3.b(), iVar3.o(), m6.i(action, true), iVar.q()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0697b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final xn.m b10 = xn.j.b(x5Var.f39724a, xn.n.f55225d);
        if (it instanceof b.AbstractC0697b.C0698b) {
            d11 = cn.z.d(x5Var, null, new Function1() { // from class: np.p5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q2;
                    Q2 = x5.Q2(x5.this, b10, it, pVar, bVar, aVar, (r.c) obj);
                    return Q2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.AbstractC0697b.a) {
            d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.q5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R2;
                    R2 = x5.R2(k.a.this, x5Var, pVar, (r.c) obj);
                    return R2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(k.a aVar, x5 x5Var, final b bVar, final x1.i iVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.w4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R1;
                R1 = x5.R1(x5.b.this, iVar, (r.c) obj);
                return R1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q2(x5 x5Var, xn.m mVar, b.AbstractC0697b abstractC0697b, x1.p pVar, b bVar, k.a aVar, r.c action) {
        xn.l b10;
        xn.l b11;
        xn.l b12;
        Size f10;
        xn.l b13;
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R1(b bVar, x1.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, iVar.q(), false, 163, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R2(k.a aVar, final x5 x5Var, final x1.p pVar, r.c action) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.v5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S2;
                S2 = x5.S2(x5.this, pVar, (r.c) obj);
                return S2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S2(x5 x5Var, x1.p pVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        action.e(new x1.h(false, false, m6.i(action, false), pVar.q(), 3, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    private final d.b U1(final b bVar, final x1.j jVar, final k.a aVar) {
        String C = bVar.x().C();
        String h10 = bVar.x().h();
        String e10 = bVar.x().e();
        String B = bVar.x().B();
        aq.a b10 = this.f39733j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f39107a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f39109a) && !Intrinsics.areEqual(u10, d2.b.f39108a)) {
            throw new rr.p();
        } else {
            NextStep.Selfie.AssetConfig.PromptPage promptPage2 = bVar.a().getPromptPage();
            if (promptPage2 != null) {
                remoteImage = promptPage2.getSelfiePictograph();
            }
        }
        return new d.b(C, h10, e10, B, bVar.y(), remoteImage, b10, new Function0() { // from class: np.m3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V1;
                V1 = x5.V1(k.a.this, this, bVar, jVar);
                return V1;
            }
        }, new Function0() { // from class: np.n3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X1;
                X1 = x5.X1(k.a.this, this);
                return X1;
            }
        }, new Function0() { // from class: np.o3
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
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    public static final /* synthetic */ uq.a V0(x5 x5Var) {
        x5Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(k.a aVar, x5 x5Var, final b bVar, final x1.j jVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.h5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W1;
                W1 = x5.W1(x5.b.this, jVar, (r.c) obj);
                return W1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(b bVar, x1.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.j(action, false, 1, null), bVar.q(), bVar.s(), false, jVar.q(), false, 163, null));
        return Unit.f31765a;
    }

    private final d W2(final b bVar, final x1.q qVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: np.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0576c.f39921w, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: np.x3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Z2;
                Z2 = x5.Z2(k.a.this, this);
                return Z2;
            }
        }, new Function0() { // from class: np.y3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a32;
                a32 = x5.a3(x5.this, aVar);
                return a32;
            }
        }, k10, new Function0() { // from class: np.z3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit b32;
                b32 = x5.b3(x5.this, aVar, bVar);
                return b32;
            }
        }, l32, null, bVar.z().b(), this.f39730g, this.f39731h, 0.0f, null, qVar.q(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X2(k.a aVar, x5 x5Var, final x1.q qVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.f5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Y2;
                Y2 = x5.Y2(x1.q.this, (r.c) obj);
                return Y2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f39724a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.r(), qVar.u(), qVar.b(), qVar.o(), m6.i(action, false)));
        return Unit.f31765a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.r(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.o(), x1Var.p(), ((b) cVar.b()).s(), x1Var.q(), zVar2.l());
        } else if (l3((b) cVar.b()) == bo.a.f7162e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.r(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.o(), x1Var.p(), x1Var.q(), 12, null);
        } else if (l3((b) cVar.b()) == bo.a.f7161d) {
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
        d.c.EnumC0576c enumC0576c;
        int i10 = e.f39948a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new rr.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f39157i;
        } else {
            h1Var = h1.f39156e;
        }
        int[] iArr = e.f39949b;
        int i11 = iArr[h1Var.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    u10 = bVar.x().z();
                } else {
                    throw new rr.p();
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
                    enumC0576c = d.c.EnumC0576c.f39911e;
                } else {
                    throw new rr.p();
                }
            } else {
                enumC0576c = d.c.EnumC0576c.f39916r;
            }
        } else {
            enumC0576c = d.c.EnumC0576c.f39913o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: np.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0576c, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f39730g;
        g.a aVar3 = this.f39731h;
        boolean a10 = kVar.a();
        return j2.f(bVar, aVar, kVar.e(), c10, str, null, a10, fVar, v10, t10, b10, new Function0() { // from class: np.n2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c22;
                c22 = x5.c2(k.a.this, this);
                return c22;
            }
        }, new Function0() { // from class: np.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d22;
                d22 = x5.d2(x5.this, aVar);
                return d22;
            }
        }, k10, new Function0() { // from class: np.p2
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(k.a aVar, x5 x5Var, final x1.k kVar, final b bVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.s5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b22;
                b22 = x5.b2(x1.k.this, bVar, (r.c) obj);
                return b22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    private final d b1(final b bVar, final x1.a aVar, final k.a aVar2) {
        x1.g gVar;
        String str;
        String str2;
        d.c.EnumC0576c enumC0576c;
        d.c.b aVar3;
        boolean z10;
        boolean z11;
        final a1.b e10 = aVar.e();
        if (aVar.l()) {
            if (aVar.x() == x1.g.f39629d) {
                gVar = x1.g.f39630e;
            } else {
                gVar = aVar.x();
            }
        } else {
            gVar = x1.g.f39629d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f39727d;
            if (gVar != x1.g.f39629d && gVar != x1.g.f39632o) {
                z11 = false;
            } else {
                z11 = true;
            }
            cn.w.l(aVar2, bVar2.a(e10, z11), Reflection.typeOf(b1.class), "", new Function1() { // from class: np.p3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r c12;
                    c12 = x5.c1(x5.this, aVar, aVar2, (b1.c) obj);
                    return c12;
                }
            });
        }
        zn.b B = aVar.B();
        if (B != null) {
            str = i3(B, bVar.x(), aVar.e());
        } else {
            str = null;
        }
        if (e10 == a1.b.f39021e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f39022i) {
            str2 = bVar.x().w();
        } else if (aVar.B() != null) {
            str2 = str;
        } else if (e10 == a1.b.f39020d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f39948a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0576c = d.c.EnumC0576c.f39911e;
                } else {
                    throw new rr.p();
                }
            } else {
                enumC0576c = d.c.EnumC0576c.f39917s;
            }
        } else {
            enumC0576c = d.c.EnumC0576c.f39914p;
        }
        d.c.EnumC0576c enumC0576c2 = enumC0576c;
        if (aVar.j() && gVar != x1.g.f39631i && gVar != x1.g.f39632o) {
            aVar3 = new d.c.b.C0575d(new Function1() { // from class: np.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = x5.e1(a1.b.this, aVar2, this, aVar, (String) obj);
                    return e12;
                }
            }, new Function1() { // from class: np.s3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = x5.g1(x5.this, aVar2, (Throwable) obj);
                    return g12;
                }
            }, false, enumC0576c2, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0576c2, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f39631i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f39632o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar2);
        bo.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f39730g;
        g.a aVar5 = this.f39731h;
        boolean a10 = aVar.a();
        a1.b e11 = aVar.e();
        float A = aVar.A();
        zn.a w10 = aVar.w();
        v.b q10 = aVar.q();
        boolean l10 = aVar.l();
        if (aVar.x() != gVar2 && aVar.x() != gVar3) {
            z10 = false;
        } else {
            z10 = true;
        }
        return j2.f(bVar, aVar2, e11, c10, str4, str3, a10, aVar3, v10, t10, b10, new Function0() { // from class: np.t3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h12;
                h12 = x5.h1(k.a.this, this);
                return h12;
            }
        }, new Function0() { // from class: np.u3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i12;
                i12 = x5.i1(x5.this, aVar2);
                return i12;
            }
        }, k10, new Function0() { // from class: np.v3
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r c1(final x5 x5Var, final x1.a aVar, final k.a aVar2, final b1.c output) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.r5
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
        return Unit.f31765a;
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
            return Unit.f31765a;
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
                action.e(x1.a.v(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f39631i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0560c) {
            b1.c.C0560c c0560c = (b1.c.C0560c) cVar;
            if (c0560c.b() == zn.b.f56556s) {
                action.e(x1.a.v(aVar4, null, c0560c.c(), c0560c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.v(aVar4, c0560c.b(), c0560c.c(), c0560c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new rr.p();
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    private final void d3(k.a aVar, Throwable th2) {
        String message;
        String message2 = th2.getMessage();
        if (message2 != null && StringsKt.V(message2, "ENOSPC", false, 2, null)) {
            e3(aVar, new c.C0569c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        } else if (th2 instanceof x.o0) {
            Throwable cause = th2.getCause();
            if (cause != null && (message = cause.getMessage()) != null && StringsKt.V(message, "ENOSPC", false, 2, null)) {
                e3(aVar, new c.C0569c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
                return;
            }
            String canonicalName = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0569c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName)));
        } else {
            String canonicalName2 = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0569c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.a aVar2, String absolutePath) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f39016i, bVar, System.currentTimeMillis());
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.i5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f12;
                f12 = x5.f1(x5.this, aVar2, cVar, (r.c) obj);
                return f12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    private final void e3(k.a aVar, final c cVar) {
        cn.r d10;
        if (!(cVar instanceof c.d) && !(cVar instanceof c.a)) {
            boolean z10 = cVar instanceof c.C0569c;
        }
        cn.h c10 = aVar.c();
        d10 = cn.z.d(this, null, new Function1() { // from class: np.d5
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
        return Unit.f31765a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0575d c0575d;
        if (lVar.f().c()) {
            cn.w.l(aVar, this.f39727d.a(a1.b.f39020d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: np.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r g22;
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
        d.c.EnumC0576c enumC0576c = d.c.EnumC0576c.f39911e;
        zn.b A = lVar.A();
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
                aVar2 = new d.c.b.e(new Function0() { // from class: np.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i22;
                        i22 = x5.i2(k.a.this, this, lVar, bVar);
                        return i22;
                    }
                }, enumC0576c, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
            } else {
                c0575d = new d.c.b.C0575d(new Function1() { // from class: np.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit k22;
                        k22 = x5.k2(a1.b.this, aVar, this, lVar, (String) obj);
                        return k22;
                    }
                }, new Function1() { // from class: np.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m22;
                        m22 = x5.m2(x5.this, aVar, (Throwable) obj);
                        return m22;
                    }
                }, false, enumC0576c, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a), 4, null);
                boolean t10 = bVar.t();
                aq.a b10 = this.f39733j.b();
                Function1 k10 = m6.k(aVar);
                bo.a l32 = l3(bVar);
                d.c.a v10 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f39730g;
                g.a aVar4 = this.f39731h;
                boolean a10 = lVar.a();
                return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a10, c0575d, v10, t10, b10, new Function0() { // from class: np.u2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit n22;
                        n22 = x5.n2(k.a.this, this);
                        return n22;
                    }
                }, new Function0() { // from class: np.w2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit o22;
                        o22 = x5.o2(x5.this, aVar);
                        return o22;
                    }
                }, k10, new Function0() { // from class: np.x2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p22;
                        p22 = x5.p2(x5.this, aVar, bVar);
                        return p22;
                    }
                }, l32, null, b11, aVar3, aVar4, lVar.x(), lVar.w(), lVar.q(), lVar.l(), false, false, 50331648, null);
            }
        } else {
            aVar2 = new d.c.b.a(enumC0576c, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        }
        c0575d = aVar2;
        boolean t102 = bVar.t();
        aq.a b102 = this.f39733j.b();
        Function1 k102 = m6.k(aVar);
        bo.a l322 = l3(bVar);
        d.c.a v102 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f39730g;
        g.a aVar42 = this.f39731h;
        boolean a102 = lVar.a();
        return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a102, c0575d, v102, t102, b102, new Function0() { // from class: np.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n22;
                n22 = x5.n2(k.a.this, this);
                return n22;
            }
        }, new Function0() { // from class: np.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o22;
                o22 = x5.o2(x5.this, aVar);
                return o22;
            }
        }, k102, new Function0() { // from class: np.x2
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r g2(final x5 x5Var, final x1.l lVar, final b bVar, final k.a aVar, final b1.c output) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.k5
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
        cVar.d(new c.C0569c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        if (cVar instanceof b1.c.a) {
            List c11 = lVar.c();
            b1.c.a aVar2 = (b1.c.a) cVar;
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.o(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.q(), lVar.l()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0560c) {
            b1.c.C0560c c0560c = (b1.c.C0560c) cVar;
            if (c0560c.b() == zn.b.f56556s) {
                v10 = x1.l.v(lVar3, false, null, c0560c.c(), c0560c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                v10 = x1.l.v(lVar3, false, c0560c.b(), c0560c.c(), c0560c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(v10);
        } else {
            throw new rr.p();
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i2(k.a aVar, x5 x5Var, final x1.l lVar, final b bVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.o5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j22;
                j22 = x5.j2(x1.l.this, bVar, (r.c) obj);
                return j22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final String i3(zn.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f39950c[bVar.ordinal()]) {
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
                int i10 = e.f39948a[bVar2.ordinal()];
                if (i10 == 1 || i10 == 2) {
                    return null;
                }
                if (i10 == 3) {
                    return aVar.z();
                }
                throw new rr.p();
            case 8:
                return aVar.p();
            case 9:
                return aVar.p();
            default:
                throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.o(), m6.i(action, false), bVar.s(), lVar.q(), lVar.l(), 2, null));
        return Unit.f31765a;
    }

    private final wp.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f53923a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b h10 = ((x1.k) x1Var).h();
            if (h10 != null) {
                str = m1.a(h10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f53923a;
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
                        return j.a.f53919a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f53922a;
                    }
                    throw new rr.p();
                }
                return j.b.f53920a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0576c enumC0576c;
        String c10 = bVar.x().c();
        if (bVar2.v() instanceof x1.n) {
            enumC0576c = d.c.EnumC0576c.f39920v;
        } else {
            int i10 = e.f39948a[bVar2.u().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0576c = d.c.EnumC0576c.f39912i;
                    } else {
                        throw new rr.p();
                    }
                } else {
                    enumC0576c = d.c.EnumC0576c.f39918t;
                }
            } else {
                enumC0576c = d.c.EnumC0576c.f39915q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: np.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0576c, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: np.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n12;
                n12 = x5.n1(k.a.this, this);
                return n12;
            }
        }, new Function0() { // from class: np.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o12;
                o12 = x5.o1(x5.this, aVar);
                return o12;
            }
        }, k10, new Function0() { // from class: np.h3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p12;
                p12 = x5.p1(x5.this, aVar, bVar);
                return p12;
            }
        }, l32, null, bVar.z().b(), this.f39730g, this.f39731h, 0.0f, null, bVar2.q(), bVar2.w(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f39016i, bVar, System.currentTimeMillis());
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.n5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l22;
                l22 = x5.l2(x5.this, lVar, cVar, (r.c) obj);
                return l22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final boolean k3(x1 x1Var) {
        if (!(x1Var instanceof x1.a) && !(x1Var instanceof x1.b) && !(x1Var instanceof x1.c) && !(x1Var instanceof x1.d) && !(x1Var instanceof x1.k) && !(x1Var instanceof x1.l) && !(x1Var instanceof x1.m) && !(x1Var instanceof x1.o) && !(x1Var instanceof x1.p) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q) && !(x1Var instanceof x1.e)) {
            if (!(x1Var instanceof x1.j) && !(x1Var instanceof x1.h) && !(x1Var instanceof x1.i) && !(x1Var instanceof x1.n)) {
                throw new rr.p();
            }
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(k.a aVar, x5 x5Var) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.g5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m12;
                m12 = x5.m1((r.c) obj);
                return m12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f31765a;
    }

    private final bo.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f39724a);
        if (Result.e(f10) == null) {
            return (bo.a) f10;
        }
        return bo.a.f7163i;
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m2(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31765a;
    }

    private final boolean m3(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f39724a);
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            cn.w.l(aVar, this.f39727d.a(a1.b.f39020d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: np.p4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r r12;
                    r12 = x5.r1(x5.this, aVar, (b1.c) obj);
                    return r12;
                }
            });
        }
        aVar.a("countdown_" + cVar.x(), new j(aVar, this, cVar, bVar, null));
        zn.b B = cVar.B();
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
        if (l3(bVar) == bo.a.f7162e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0573b c0573b = new d.c.b.C0573b(x10, z10, bVar.z().a(), d.c.EnumC0576c.f39911e, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a), new Function1() { // from class: np.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f39730g;
        g.a aVar3 = this.f39731h;
        return j2.f(bVar, aVar, cVar.e(), c10, str2, str, cVar.a(), c0573b, v10, t10, b10, new Function0() { // from class: np.r4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit u12;
                u12 = x5.u1(k.a.this, this);
                return u12;
            }
        }, new Function0() { // from class: np.s4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v12;
                v12 = x5.v1(x5.this, aVar);
                return v12;
            }
        }, k10, new Function0() { // from class: np.t4
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
            cn.w.l(aVar, this.f39727d.a(a1.b.f39020d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: np.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        cn.w.l(aVar, o.a.b(cn.o.f7758a, 1000L, null, 2, null), Reflection.typeOf(cn.o.class, KTypeProjection.f31869c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: np.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r t22;
                t22 = x5.t2(x5.this, mVar, bVar, (Unit) obj);
                return t22;
            }
        });
        String c10 = bVar.x().c();
        String t10 = bVar.x().t();
        String t11 = bVar.x().t();
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0576c.f39911e, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        boolean t12 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f39730g;
        g.a aVar4 = this.f39731h;
        boolean a10 = mVar.a();
        return j2.f(bVar, aVar, mVar.e(), c10, t10, t11, a10, aVar2, v10, t12, b10, new Function0() { // from class: np.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v22;
                v22 = x5.v2(k.a.this, this);
                return v22;
            }
        }, new Function0() { // from class: np.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w22;
                w22 = x5.w2(x5.this, aVar);
                return w22;
            }
        }, k10, new Function0() { // from class: np.c3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit x22;
                x22 = x5.x2(x5.this, aVar, bVar);
                return x22;
            }
        }, l32, null, b11, aVar3, aVar4, mVar.x(), mVar.w(), mVar.q(), mVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r r1(final x5 x5Var, final k.a aVar, final b1.c output) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.e5
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
    public static final cn.r r2(final x5 x5Var, final k.a aVar, final x1.m mVar, final b bVar, final b1.c output) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.z4
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
            return Unit.f31765a;
        }
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0560c) {
                b1.c.C0560c c0560c = (b1.c.C0560c) cVar;
                action.e(x1.c.v(cVar3, 0, c0560c.b(), 0L, null, 0L, c0560c.c(), c0560c.a(), null, null, null, false, null, false, 8093, null));
            } else {
                throw new rr.p();
            }
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s2(b1.c cVar, x5 x5Var, k.a aVar, x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0560c) {
                b1.c.C0560c c0560c = (b1.c.C0560c) cVar;
                zn.b b10 = c0560c.b();
                List c10 = mVar.c();
                long i10 = mVar.i();
                vn.v b11 = mVar.b();
                action.e(new x1.l(false, b10, c0560c.c(), c0560c.a(), c10, i10, false, mVar.o(), b11, m6.i(action, false), bVar.s(), mVar.q(), mVar.l(), 65, null));
            } else {
                throw new rr.p();
            }
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r t2(x5 x5Var, final x1.m mVar, final b bVar, Unit it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.x4
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f31765a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.o(), mVar.x(), mVar.w(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.q(), mVar.l(), 2, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f39788a);
        return Unit.f31765a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0576c enumC0576c;
        String str;
        final x1.d dVar2;
        d.c.b c0573b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f39948a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0576c = d.c.EnumC0576c.f39911e;
                } else {
                    throw new rr.p();
                }
            } else {
                enumC0576c = d.c.EnumC0576c.f39917s;
            }
        } else {
            enumC0576c = d.c.EnumC0576c.f39914p;
        }
        d.c.EnumC0576c enumC0576c2 = enumC0576c;
        String str2 = null;
        aVar.a("countdown_to_manual_capture_" + dVar.w(), new k(aVar, this, null));
        zn.b x10 = dVar.x();
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
            c0573b = new d.c.b.C0575d(new Function1() { // from class: np.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = x5.y1(a1.b.this, aVar, this, dVar2, (String) obj);
                    return y12;
                }
            }, new Function1() { // from class: np.y4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A1;
                    A1 = x5.A1(x5.this, aVar, (Throwable) obj);
                    return A1;
                }
            }, true, enumC0576c2, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a));
        } else {
            dVar2 = dVar;
            int w10 = dVar2.w();
            if (l3(bVar) == bo.a.f7162e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0573b = new d.c.b.C0573b(w10, z10, bVar.z().a(), enumC0576c2, !Intrinsics.areEqual(bVar.u(), d2.b.f39108a), new Function1() { // from class: np.j5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B1;
                    B1 = x5.B1(k.a.this, (Throwable) obj);
                    return B1;
                }
            });
        }
        d.c.b bVar3 = c0573b;
        boolean t10 = bVar.t();
        aq.a b10 = this.f39733j.b();
        Function1 k10 = m6.k(aVar);
        bo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f39730g;
        g.a aVar3 = this.f39731h;
        return j2.f(bVar, aVar, dVar2.e(), c10, str, str3, dVar2.a(), bVar3, v10, t10, b10, new Function0() { // from class: np.u5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C1;
                C1 = x5.C1(k.a.this, this);
                return C1;
            }
        }, new Function0() { // from class: np.w5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D1;
                D1 = x5.D1(x5.this, aVar);
                return D1;
            }
        }, k10, new Function0() { // from class: np.l2
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
        m6.t(x5Var.f39724a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f39016i, bVar, System.currentTimeMillis());
        cn.h c10 = aVar.c();
        d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.a5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = x5.z1(x5.this, dVar, cVar, (r.c) obj);
                return z12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        cn.w.l(aVar, this.f39725b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.r(), nVar.u(), nVar.b(), nVar.o()), Reflection.typeOf(pp.c.class), "", new Function1() { // from class: np.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        aq.b.d(this.f39733j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        aq.a b10 = this.f39733j.b();
        Function0 function0 = new Function0() { // from class: np.g4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C2;
                C2 = x5.C2(x5.this, aVar);
                return C2;
            }
        };
        Function0 function02 = new Function0() { // from class: np.h4
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r z2(final x5 x5Var, final k.a aVar, final c.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0616b) {
            d11 = cn.z.d(x5Var, null, new Function1() { // from class: np.u4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A2;
                    A2 = x5.A2(x5.this, aVar, (r.c) obj);
                    return A2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = cn.z.d(x5Var, null, new Function1() { // from class: np.v4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B2;
                    B2 = x5.B2(x5.this, aVar, it, (r.c) obj);
                    return B2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    @Override // cn.k
    /* renamed from: X0 */
    public x1 d(b props, cn.i iVar) {
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
            x1 x1Var = (x1) readParcelable;
            if (x1Var != null) {
                return x1Var;
            }
        }
        if (props.w()) {
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f52740d, false, 163, null);
        }
        return new x1.j(null, null, 2, null);
    }

    @Override // cn.k
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
        this.f39733j.c(renderProps.b(), renderProps.g(), !z10);
        this.f39734k.c(new i.e(renderProps.k(), j3(renderState)));
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
            y22 = this.f39729f.q(renderProps, (x1.e) renderState, context);
        } else if (renderState instanceof x1.f) {
            y22 = F1(renderProps, (x1.f) renderState, context);
        } else if (renderState instanceof x1.q) {
            y22 = W2(renderProps, (x1.q) renderState, context);
        } else if (renderState instanceof x1.i) {
            y22 = N1(renderProps, (x1.i) renderState, context);
        } else if (z10) {
            y22 = y2(renderProps, (x1.n) renderState, context);
        } else {
            throw new rr.p();
        }
        if (y22 instanceof d.c) {
            return ip.l1.c(y22);
        }
        return y22;
    }

    @Override // cn.k
    /* renamed from: h3 */
    public cn.i g(x1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return en.s.a(state);
    }
}
