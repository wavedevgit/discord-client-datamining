package kp;

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
import fp.c1;
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
import kp.a1;
import kp.b1;
import kp.d2;
import kp.x1;
import kp.x5;
import mp.c;
import okio.ByteString;
import qq.b;
import sn.v;
import sn.z;
import tp.i;
import tp.j;
import un.g;
import zm.k;
import zm.o;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x5 extends zm.k {

    /* renamed from: l  reason: collision with root package name */
    public static final a f35834l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f35835a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f35836b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f35837c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f35838d;

    /* renamed from: e  reason: collision with root package name */
    private final fp.c1 f35839e;

    /* renamed from: f  reason: collision with root package name */
    private final np.j f35840f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f35841g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f35842h;

    /* renamed from: i  reason: collision with root package name */
    private final xn.a f35843i;

    /* renamed from: j  reason: collision with root package name */
    private final xp.b f35844j;

    /* renamed from: k  reason: collision with root package name */
    private final tp.c f35845k;

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
        private final String f35846a;

        /* renamed from: b  reason: collision with root package name */
        private final String f35847b;

        /* renamed from: c  reason: collision with root package name */
        private final String f35848c;

        /* renamed from: d  reason: collision with root package name */
        private final String f35849d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f35850e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f35851f;

        /* renamed from: g  reason: collision with root package name */
        private final String f35852g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f35853h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f35854i;

        /* renamed from: j  reason: collision with root package name */
        private final a f35855j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f35856k;

        /* renamed from: l  reason: collision with root package name */
        private final List f35857l;

        /* renamed from: m  reason: collision with root package name */
        private final String f35858m;

        /* renamed from: n  reason: collision with root package name */
        private final String f35859n;

        /* renamed from: o  reason: collision with root package name */
        private final String f35860o;

        /* renamed from: p  reason: collision with root package name */
        private final String f35861p;

        /* renamed from: q  reason: collision with root package name */
        private final String f35862q;

        /* renamed from: r  reason: collision with root package name */
        private final String f35863r;

        /* renamed from: s  reason: collision with root package name */
        private final String f35864s;

        /* renamed from: t  reason: collision with root package name */
        private final String f35865t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f35866u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f35867v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f35868w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f35869x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f35870y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f35871z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f35872a;

            /* renamed from: b  reason: collision with root package name */
            private final String f35873b;

            /* renamed from: c  reason: collision with root package name */
            private final String f35874c;

            /* renamed from: d  reason: collision with root package name */
            private final String f35875d;

            /* renamed from: e  reason: collision with root package name */
            private final String f35876e;

            /* renamed from: f  reason: collision with root package name */
            private final String f35877f;

            /* renamed from: g  reason: collision with root package name */
            private final String f35878g;

            /* renamed from: h  reason: collision with root package name */
            private final String f35879h;

            /* renamed from: i  reason: collision with root package name */
            private final String f35880i;

            /* renamed from: j  reason: collision with root package name */
            private final String f35881j;

            /* renamed from: k  reason: collision with root package name */
            private final String f35882k;

            /* renamed from: l  reason: collision with root package name */
            private final String f35883l;

            /* renamed from: m  reason: collision with root package name */
            private final String f35884m;

            /* renamed from: n  reason: collision with root package name */
            private final String f35885n;

            /* renamed from: o  reason: collision with root package name */
            private final String f35886o;

            /* renamed from: p  reason: collision with root package name */
            private final String f35887p;

            /* renamed from: q  reason: collision with root package name */
            private final String f35888q;

            /* renamed from: r  reason: collision with root package name */
            private final String f35889r;

            /* renamed from: s  reason: collision with root package name */
            private final String f35890s;

            /* renamed from: t  reason: collision with root package name */
            private final String f35891t;

            /* renamed from: u  reason: collision with root package name */
            private final String f35892u;

            /* renamed from: v  reason: collision with root package name */
            private final String f35893v;

            /* renamed from: w  reason: collision with root package name */
            private final String f35894w;

            /* renamed from: x  reason: collision with root package name */
            private final String f35895x;

            /* renamed from: y  reason: collision with root package name */
            private final String f35896y;

            /* renamed from: z  reason: collision with root package name */
            private final String f35897z;

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
                this.f35872a = title;
                this.f35873b = prompt;
                this.f35874c = disclosure;
                this.f35875d = startButton;
                this.f35876e = capturePageTitle;
                this.f35877f = selfieHintTakePhoto;
                this.f35878g = selfieHintCenterFace;
                this.f35879h = selfieHintFaceTooClose;
                this.f35880i = selfieHintFaceTooFar;
                this.f35881j = selfieHintMultipleFaces;
                this.f35882k = selfieHintFaceIncomplete;
                this.f35883l = selfieHintPoseNotCentered;
                this.f35884m = selfieHintLookLeft;
                this.f35885n = selfieHintLookRight;
                this.f35886o = selfieHintHoldStill;
                this.f35887p = processingTitle;
                this.f35888q = processingDescription;
                this.f35889r = str;
                this.f35890s = str2;
                this.f35891t = str3;
                this.f35892u = str4;
                this.f35893v = str5;
                this.f35894w = str6;
                this.f35895x = str7;
                this.f35896y = str8;
                this.f35897z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f35877f;
            }

            public final String B() {
                return this.f35875d;
            }

            public final String C() {
                return this.f35872a;
            }

            public final String a() {
                return this.f35896y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f35876e;
            }

            public final String d() {
                return this.f35897z;
            }

            public final String e() {
                return this.f35874c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f35872a, aVar.f35872a) && Intrinsics.areEqual(this.f35873b, aVar.f35873b) && Intrinsics.areEqual(this.f35874c, aVar.f35874c) && Intrinsics.areEqual(this.f35875d, aVar.f35875d) && Intrinsics.areEqual(this.f35876e, aVar.f35876e) && Intrinsics.areEqual(this.f35877f, aVar.f35877f) && Intrinsics.areEqual(this.f35878g, aVar.f35878g) && Intrinsics.areEqual(this.f35879h, aVar.f35879h) && Intrinsics.areEqual(this.f35880i, aVar.f35880i) && Intrinsics.areEqual(this.f35881j, aVar.f35881j) && Intrinsics.areEqual(this.f35882k, aVar.f35882k) && Intrinsics.areEqual(this.f35883l, aVar.f35883l) && Intrinsics.areEqual(this.f35884m, aVar.f35884m) && Intrinsics.areEqual(this.f35885n, aVar.f35885n) && Intrinsics.areEqual(this.f35886o, aVar.f35886o) && Intrinsics.areEqual(this.f35887p, aVar.f35887p) && Intrinsics.areEqual(this.f35888q, aVar.f35888q) && Intrinsics.areEqual(this.f35889r, aVar.f35889r) && Intrinsics.areEqual(this.f35890s, aVar.f35890s) && Intrinsics.areEqual(this.f35891t, aVar.f35891t) && Intrinsics.areEqual(this.f35892u, aVar.f35892u) && Intrinsics.areEqual(this.f35893v, aVar.f35893v) && Intrinsics.areEqual(this.f35894w, aVar.f35894w) && Intrinsics.areEqual(this.f35895x, aVar.f35895x) && Intrinsics.areEqual(this.f35896y, aVar.f35896y) && Intrinsics.areEqual(this.f35897z, aVar.f35897z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f35888q;
            }

            public final String g() {
                return this.f35887p;
            }

            public final String h() {
                return this.f35873b;
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
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f35872a.hashCode() * 31) + this.f35873b.hashCode()) * 31) + this.f35874c.hashCode()) * 31) + this.f35875d.hashCode()) * 31) + this.f35876e.hashCode()) * 31) + this.f35877f.hashCode()) * 31) + this.f35878g.hashCode()) * 31) + this.f35879h.hashCode()) * 31) + this.f35880i.hashCode()) * 31) + this.f35881j.hashCode()) * 31) + this.f35882k.hashCode()) * 31) + this.f35883l.hashCode()) * 31) + this.f35884m.hashCode()) * 31) + this.f35885n.hashCode()) * 31) + this.f35886o.hashCode()) * 31) + this.f35887p.hashCode()) * 31) + this.f35888q.hashCode()) * 31;
                String str = this.f35889r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f35890s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f35891t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f35892u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f35893v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f35894w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f35895x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f35896y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f35897z;
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
                return this.f35895x;
            }

            public final String j() {
                return this.f35894w;
            }

            public final String k() {
                return this.f35890s;
            }

            public final String l() {
                return this.f35891t;
            }

            public final String m() {
                return this.f35892u;
            }

            public final String n() {
                return this.f35893v;
            }

            public final String o() {
                return this.f35889r;
            }

            public final String p() {
                return this.f35878g;
            }

            public final String q() {
                return this.f35882k;
            }

            public final String r() {
                return this.f35879h;
            }

            public final String s() {
                return this.f35880i;
            }

            public final String t() {
                return this.f35886o;
            }

            public String toString() {
                String str = this.f35872a;
                String str2 = this.f35873b;
                String str3 = this.f35874c;
                String str4 = this.f35875d;
                String str5 = this.f35876e;
                String str6 = this.f35877f;
                String str7 = this.f35878g;
                String str8 = this.f35879h;
                String str9 = this.f35880i;
                String str10 = this.f35881j;
                String str11 = this.f35882k;
                String str12 = this.f35883l;
                String str13 = this.f35884m;
                String str14 = this.f35885n;
                String str15 = this.f35886o;
                String str16 = this.f35887p;
                String str17 = this.f35888q;
                String str18 = this.f35889r;
                String str19 = this.f35890s;
                String str20 = this.f35891t;
                String str21 = this.f35892u;
                String str22 = this.f35893v;
                String str23 = this.f35894w;
                String str24 = this.f35895x;
                String str25 = this.f35896y;
                String str26 = this.f35897z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f35884m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f35885n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f35881j;
            }

            public final String z() {
                return this.f35883l;
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
            this.f35846a = sessionToken;
            this.f35847b = inquiryId;
            this.f35848c = fromComponent;
            this.f35849d = fromStep;
            this.f35850e = z10;
            this.f35851f = z11;
            this.f35852g = fieldKeySelfie;
            this.f35853h = z12;
            this.f35854i = z13;
            this.f35855j = strings;
            this.f35856k = selfieType;
            this.f35857l = orderedPoses;
            this.f35858m = str;
            this.f35859n = str2;
            this.f35860o = str3;
            this.f35861p = str4;
            this.f35862q = str5;
            this.f35863r = str6;
            this.f35864s = str7;
            this.f35865t = str8;
            this.f35866u = selfieStepStyle;
            this.f35867v = videoCaptureConfig;
            this.f35868w = assetConfig;
            this.f35869x = pendingPageTextVerticalPosition;
            this.f35870y = poseConfigs;
            this.f35871z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f35868w;
        }

        public final boolean b() {
            return this.f35850e;
        }

        public final String c() {
            return this.f35861p;
        }

        public final String d() {
            return this.f35860o;
        }

        public final String e() {
            return this.f35859n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f35846a, bVar.f35846a) && Intrinsics.areEqual(this.f35847b, bVar.f35847b) && Intrinsics.areEqual(this.f35848c, bVar.f35848c) && Intrinsics.areEqual(this.f35849d, bVar.f35849d) && this.f35850e == bVar.f35850e && this.f35851f == bVar.f35851f && Intrinsics.areEqual(this.f35852g, bVar.f35852g) && this.f35853h == bVar.f35853h && this.f35854i == bVar.f35854i && Intrinsics.areEqual(this.f35855j, bVar.f35855j) && Intrinsics.areEqual(this.f35856k, bVar.f35856k) && Intrinsics.areEqual(this.f35857l, bVar.f35857l) && Intrinsics.areEqual(this.f35858m, bVar.f35858m) && Intrinsics.areEqual(this.f35859n, bVar.f35859n) && Intrinsics.areEqual(this.f35860o, bVar.f35860o) && Intrinsics.areEqual(this.f35861p, bVar.f35861p) && Intrinsics.areEqual(this.f35862q, bVar.f35862q) && Intrinsics.areEqual(this.f35863r, bVar.f35863r) && Intrinsics.areEqual(this.f35864s, bVar.f35864s) && Intrinsics.areEqual(this.f35865t, bVar.f35865t) && Intrinsics.areEqual(this.f35866u, bVar.f35866u) && Intrinsics.areEqual(this.f35867v, bVar.f35867v) && Intrinsics.areEqual(this.f35868w, bVar.f35868w) && this.f35869x == bVar.f35869x && Intrinsics.areEqual(this.f35870y, bVar.f35870y) && this.f35871z == bVar.f35871z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f35858m;
        }

        public final boolean g() {
            return this.f35851f;
        }

        public final b0 h() {
            return this.f35871z;
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
            int hashCode9 = ((((((((((((((((((((((this.f35846a.hashCode() * 31) + this.f35847b.hashCode()) * 31) + this.f35848c.hashCode()) * 31) + this.f35849d.hashCode()) * 31) + Boolean.hashCode(this.f35850e)) * 31) + Boolean.hashCode(this.f35851f)) * 31) + this.f35852g.hashCode()) * 31) + Boolean.hashCode(this.f35853h)) * 31) + Boolean.hashCode(this.f35854i)) * 31) + this.f35855j.hashCode()) * 31) + this.f35856k.hashCode()) * 31) + this.f35857l.hashCode()) * 31;
            String str = this.f35858m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f35859n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f35860o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f35861p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f35862q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f35863r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f35864s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f35865t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f35866u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f35867v.hashCode()) * 31) + this.f35868w.hashCode()) * 31) + this.f35869x.hashCode()) * 31) + this.f35870y.hashCode()) * 31) + this.f35871z.hashCode();
        }

        public final String i() {
            return this.f35852g;
        }

        public final String j() {
            return this.f35848c;
        }

        public final String k() {
            return this.f35849d;
        }

        public final String l() {
            return this.f35847b;
        }

        public final String m() {
            return this.f35865t;
        }

        public final String n() {
            return this.f35864s;
        }

        public final String o() {
            return this.f35863r;
        }

        public final String p() {
            return this.f35862q;
        }

        public final List q() {
            return this.f35857l;
        }

        public final PendingPageTextPosition r() {
            return this.f35869x;
        }

        public final s0 s() {
            return this.f35870y;
        }

        public final boolean t() {
            return this.f35853h;
        }

        public String toString() {
            String str = this.f35846a;
            String str2 = this.f35847b;
            String str3 = this.f35848c;
            String str4 = this.f35849d;
            boolean z10 = this.f35850e;
            boolean z11 = this.f35851f;
            String str5 = this.f35852g;
            boolean z12 = this.f35853h;
            boolean z13 = this.f35854i;
            a aVar = this.f35855j;
            d2 d2Var = this.f35856k;
            List list = this.f35857l;
            String str6 = this.f35858m;
            String str7 = this.f35859n;
            String str8 = this.f35860o;
            String str9 = this.f35861p;
            String str10 = this.f35862q;
            String str11 = this.f35863r;
            String str12 = this.f35864s;
            String str13 = this.f35865t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f35866u;
            VideoCaptureConfig videoCaptureConfig = this.f35867v;
            NextStep.Selfie.AssetConfig assetConfig = this.f35868w;
            PendingPageTextPosition pendingPageTextPosition = this.f35869x;
            s0 s0Var = this.f35870y;
            b0 b0Var = this.f35871z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f35856k;
        }

        public final String v() {
            return this.f35846a;
        }

        public final boolean w() {
            return this.f35854i;
        }

        public final a x() {
            return this.f35855j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f35866u;
        }

        public final VideoCaptureConfig z() {
            return this.f35867v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f35898a = new a();

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
            public static final b f35899a = new b();

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

        /* renamed from: kp.x5$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0461c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f35900a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0461c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f35900a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f35900a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0461c) && Intrinsics.areEqual(this.f35900a, ((C0461c) obj).f35900a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f35900a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f35900a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f35901a = new d();

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
            private final String f35902a;

            /* renamed from: b  reason: collision with root package name */
            private final String f35903b;

            /* renamed from: c  reason: collision with root package name */
            private final String f35904c;

            /* renamed from: d  reason: collision with root package name */
            private final String f35905d;

            /* renamed from: e  reason: collision with root package name */
            private final String f35906e;

            /* renamed from: f  reason: collision with root package name */
            private final String f35907f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f35908g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0462a f35909h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f35910i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f35911j;

            /* renamed from: k  reason: collision with root package name */
            private final xp.a f35912k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f35913l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f35914m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f35915n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f35916o;

            /* renamed from: p  reason: collision with root package name */
            private final yn.a f35917p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f35918q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f35919r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f35920s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f35921t;

            /* renamed from: u  reason: collision with root package name */
            private final float f35922u;

            /* renamed from: v  reason: collision with root package name */
            private final wn.a f35923v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f35924w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f35925x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f35926y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f35927z;

            /* renamed from: kp.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0462a {

                /* renamed from: kp.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0463a extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35928a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0463a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f35928a = overlay;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35928a;
                    }
                }

                /* renamed from: kp.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35929a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f35930b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f35931c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f35932d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f35933e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f35929a = overlay;
                        this.f35930b = i10;
                        this.f35931c = z10;
                        this.f35932d = j10;
                        this.f35933e = onError;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35929a;
                    }

                    public final int b() {
                        return this.f35930b;
                    }

                    public final long c() {
                        return this.f35932d;
                    }

                    public final Function1 d() {
                        return this.f35933e;
                    }

                    public final boolean e() {
                        return this.f35931c;
                    }
                }

                /* renamed from: kp.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35934a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f35935b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f35936c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f35937d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f35934a = overlay;
                        this.f35935b = finalizeVideo;
                        this.f35936c = onAnimationComplete;
                        this.f35937d = z10;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35934a;
                    }

                    public final Function1 b() {
                        return this.f35935b;
                    }

                    public final Function0 c() {
                        return this.f35936c;
                    }

                    public final boolean d() {
                        return this.f35937d;
                    }
                }

                /* renamed from: kp.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0464d extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35938a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f35939b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f35940c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f35941d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0464d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f35938a = overlay;
                        this.f35939b = processImage;
                        this.f35940c = onError;
                        this.f35941d = z10;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35938a;
                    }

                    public final boolean b() {
                        return this.f35941d;
                    }

                    public final Function1 c() {
                        return this.f35940c;
                    }

                    public final Function1 d() {
                        return this.f35939b;
                    }
                }

                /* renamed from: kp.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35942a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f35943b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f35942a = overlay;
                        this.f35943b = onCaptureClicked;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35942a;
                    }

                    public final Function0 b() {
                        return this.f35943b;
                    }
                }

                /* renamed from: kp.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35944a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f35945b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f35944a = overlay;
                        this.f35945b = poseHintComplete;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35944a;
                    }

                    public final Function0 b() {
                        return this.f35945b;
                    }
                }

                /* renamed from: kp.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35946a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f35947b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f35946a = overlay;
                        this.f35947b = previewReady;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35946a;
                    }

                    public final Function1 b() {
                        return this.f35947b;
                    }
                }

                /* renamed from: kp.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35948a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f35949b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f35950c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f35948a = overlay;
                        this.f35949b = onComplete;
                        this.f35950c = z10;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35948a;
                    }

                    public final boolean b() {
                        return this.f35950c;
                    }

                    public final Function0 c() {
                        return this.f35949b;
                    }
                }

                /* renamed from: kp.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0462a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f35951a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f35952b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f35951a = overlay;
                        this.f35952b = j10;
                    }

                    @Override // kp.x5.d.a.AbstractC0462a
                    public b a() {
                        return this.f35951a;
                    }

                    public final long b() {
                        return this.f35952b;
                    }
                }

                public /* synthetic */ AbstractC0462a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract b a();

                private AbstractC0462a() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b {

                /* renamed from: d  reason: collision with root package name */
                public static final b f35953d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f35954e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f35955i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f35956o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f35957p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f35958q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f35959r;

                static {
                    b[] a10 = a();
                    f35958q = a10;
                    f35959r = vr.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f35953d, f35954e, f35955i, f35956o, f35957p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f35958q.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, String str3, String str4, String str5, String str6, boolean z10, AbstractC0462a mode, StepStyles.SelfieStepStyle selfieStepStyle, boolean z11, xp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, yn.a videoCaptureMethod, rq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function1 onCameraFacingModeSelected, float f10, wn.a aVar2, v.b facingMode, boolean z13, boolean z14, Function1 onFlashSet, a1.b bVar, boolean z15) {
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
                this.f35902a = str;
                this.f35903b = str2;
                this.f35904c = str3;
                this.f35905d = str4;
                this.f35906e = str5;
                this.f35907f = str6;
                this.f35908g = z10;
                this.f35909h = mode;
                this.f35910i = selfieStepStyle;
                this.f35911j = z11;
                this.f35912k = navigationState;
                this.f35913l = onBack;
                this.f35914m = onCancel;
                this.f35915n = onCameraError;
                this.f35916o = onPermissionChanged;
                this.f35917p = videoCaptureMethod;
                this.f35918q = z12;
                this.f35919r = cameraXControllerFactory;
                this.f35920s = camera2ManagerFactoryFactory;
                this.f35921t = onCameraFacingModeSelected;
                this.f35922u = f10;
                this.f35923v = aVar2;
                this.f35924w = facingMode;
                this.f35925x = z13;
                this.f35926y = z14;
                this.f35927z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f35908g;
            }

            public final boolean B() {
                return this.f35925x;
            }

            public final boolean C() {
                return this.f35926y;
            }

            public final String a() {
                return this.f35905d;
            }

            public final wn.a b() {
                return this.f35923v;
            }

            public final g.a c() {
                return this.f35920s;
            }

            public final z.a d() {
                return this.f35919r;
            }

            public final String e() {
                return this.f35906e;
            }

            public final String f() {
                return this.f35904c;
            }

            public final v.b g() {
                return this.f35924w;
            }

            public final String h() {
                return this.f35903b;
            }

            public final AbstractC0462a i() {
                return this.f35909h;
            }

            public final xp.a j() {
                return this.f35912k;
            }

            public final Function0 k() {
                return this.f35913l;
            }

            public final Function1 l() {
                return this.f35915n;
            }

            public final Function1 m() {
                return this.f35921t;
            }

            public final Function0 n() {
                return this.f35914m;
            }

            public final Function1 o() {
                return this.f35927z;
            }

            public final Function0 p() {
                return this.f35916o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f35922u;
            }

            public final String s() {
                return this.f35907f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f35911j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f35910i;
            }

            public final String w() {
                return this.f35902a;
            }

            public final yn.a x() {
                return this.f35917p;
            }

            public final rq.a y() {
                return null;
            }

            public final boolean z() {
                return this.f35918q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f35960a;

            /* renamed from: b  reason: collision with root package name */
            private final String f35961b;

            /* renamed from: c  reason: collision with root package name */
            private final String f35962c;

            /* renamed from: d  reason: collision with root package name */
            private final String f35963d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f35964e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f35965f;

            /* renamed from: g  reason: collision with root package name */
            private final xp.a f35966g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f35967h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f35968i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f35969j;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String title, String prompt, String disclosure, String start, StepStyles.SelfieStepStyle selfieStepStyle, RemoteImage remoteImage, xp.a navigationState, Function0 onClick, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(start, "start");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f35960a = title;
                this.f35961b = prompt;
                this.f35962c = disclosure;
                this.f35963d = start;
                this.f35964e = selfieStepStyle;
                this.f35965f = remoteImage;
                this.f35966g = navigationState;
                this.f35967h = onClick;
                this.f35968i = onBack;
                this.f35969j = onCancel;
            }

            public final String a() {
                return this.f35962c;
            }

            public final RemoteImage b() {
                return this.f35965f;
            }

            public final xp.a c() {
                return this.f35966g;
            }

            public final Function0 d() {
                return this.f35968i;
            }

            public final Function0 e() {
                return this.f35969j;
            }

            public final Function0 f() {
                return this.f35967h;
            }

            public final String g() {
                return this.f35961b;
            }

            public final String h() {
                return this.f35963d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f35964e;
            }

            public final String j() {
                return this.f35960a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f35970a;

            /* renamed from: b  reason: collision with root package name */
            private final String f35971b;

            /* renamed from: c  reason: collision with root package name */
            private final b f35972c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f35973d;

            /* renamed from: e  reason: collision with root package name */
            private final a f35974e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f35975f;

            /* renamed from: g  reason: collision with root package name */
            private final xp.a f35976g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f35977h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f35978i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f35979j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f35980k;

            /* renamed from: l  reason: collision with root package name */
            private final yn.a f35981l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f35982m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f35983n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f35984o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f35985a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f35986b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f35985a = remoteImage;
                    this.f35986b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f35985a;
                }

                public final RemoteImage b() {
                    return this.f35986b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f35985a, aVar.f35985a) && Intrinsics.areEqual(this.f35986b, aVar.f35986b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f35985a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f35986b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f35985a;
                    RemoteImage remoteImage2 = this.f35986b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0468c f35987a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f35988b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0468c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f35987a = overlay;
                        this.f35988b = z10;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f35987a;
                    }

                    public boolean b() {
                        return this.f35988b;
                    }
                }

                /* renamed from: kp.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0465b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f35989a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f35990b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f35991c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0468c f35992d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f35993e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f35994f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0465b(int i10, boolean z10, long j10, EnumC0468c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f35989a = i10;
                        this.f35990b = z10;
                        this.f35991c = j10;
                        this.f35992d = overlay;
                        this.f35993e = z11;
                        this.f35994f = onError;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f35992d;
                    }

                    public final int b() {
                        return this.f35989a;
                    }

                    public final long c() {
                        return this.f35991c;
                    }

                    public final Function1 d() {
                        return this.f35994f;
                    }

                    public final boolean e() {
                        return this.f35990b;
                    }

                    public boolean f() {
                        return this.f35993e;
                    }
                }

                /* renamed from: kp.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0466c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f35995a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f35996b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f35997c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0468c f35998d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f35999e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0466c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0468c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f35995a = finalizeVideo;
                        this.f35996b = onAnimationComplete;
                        this.f35997c = z10;
                        this.f35998d = overlay;
                        this.f35999e = z11;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f35998d;
                    }

                    public final Function1 b() {
                        return this.f35995a;
                    }

                    public final Function0 c() {
                        return this.f35996b;
                    }

                    public boolean d() {
                        return this.f35999e;
                    }

                    public final boolean e() {
                        return this.f35997c;
                    }
                }

                /* renamed from: kp.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0467d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f36000a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f36001b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f36002c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0468c f36003d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f36004e;

                    public /* synthetic */ C0467d(Function1 function1, Function1 function12, boolean z10, EnumC0468c enumC0468c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0468c, z11);
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f36003d;
                    }

                    public final boolean b() {
                        return this.f36002c;
                    }

                    public final Function1 c() {
                        return this.f36001b;
                    }

                    public final Function1 d() {
                        return this.f36000a;
                    }

                    public boolean e() {
                        return this.f36004e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0467d(Function1 processImage, Function1 onError, boolean z10, EnumC0468c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f36000a = processImage;
                        this.f36001b = onError;
                        this.f36002c = z10;
                        this.f36003d = overlay;
                        this.f36004e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f36005a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0468c f36006b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f36007c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0468c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f36005a = onCaptureClicked;
                        this.f36006b = overlay;
                        this.f36007c = z10;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f36006b;
                    }

                    public final Function0 b() {
                        return this.f36005a;
                    }

                    public boolean c() {
                        return this.f36007c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f36008a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0468c f36009b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f36010c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0468c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f36008a = poseHintComplete;
                        this.f36009b = overlay;
                        this.f36010c = z10;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f36009b;
                    }

                    public final Function0 b() {
                        return this.f36008a;
                    }

                    public boolean c() {
                        return this.f36010c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f36011a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0468c f36012b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f36013c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0468c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f36011a = previewReady;
                        this.f36012b = overlay;
                        this.f36013c = z10;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f36012b;
                    }

                    public final Function1 b() {
                        return this.f36011a;
                    }

                    public boolean c() {
                        return this.f36013c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f36014a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f36015b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0468c f36016c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f36017d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0468c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f36014a = onComplete;
                        this.f36015b = z10;
                        this.f36016c = overlay;
                        this.f36017d = z11;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f36016c;
                    }

                    public final boolean b() {
                        return this.f36015b;
                    }

                    public final Function0 c() {
                        return this.f36014a;
                    }

                    public boolean d() {
                        return this.f36017d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0468c f36018a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f36019b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f36020c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0468c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f36018a = overlay;
                        this.f36019b = j10;
                        this.f36020c = z10;
                    }

                    @Override // kp.x5.d.c.b
                    public EnumC0468c a() {
                        return this.f36018a;
                    }

                    public final long b() {
                        return this.f36019b;
                    }
                }

                public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract EnumC0468c a();

                private b() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* renamed from: kp.x5$d$c$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class EnumC0468c {

                /* renamed from: d  reason: collision with root package name */
                public static final EnumC0468c f36021d = new EnumC0468c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0468c f36022e = new EnumC0468c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0468c f36023i = new EnumC0468c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0468c f36024o = new EnumC0468c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0468c f36025p = new EnumC0468c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0468c f36026q = new EnumC0468c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0468c f36027r = new EnumC0468c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0468c f36028s = new EnumC0468c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0468c f36029t = new EnumC0468c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0468c f36030u = new EnumC0468c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0468c f36031v = new EnumC0468c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0468c f36032w = new EnumC0468c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0468c[] f36033x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f36034y;

                static {
                    EnumC0468c[] a10 = a();
                    f36033x = a10;
                    f36034y = vr.a.a(a10);
                }

                private EnumC0468c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0468c[] a() {
                    return new EnumC0468c[]{f36021d, f36022e, f36023i, f36024o, f36025p, f36026q, f36027r, f36028s, f36029t, f36030u, f36031v, f36032w};
                }

                public static EnumC0468c valueOf(String str) {
                    return (EnumC0468c) Enum.valueOf(EnumC0468c.class, str);
                }

                public static EnumC0468c[] values() {
                    return (EnumC0468c[]) f36033x.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, String str2, b mode, StepStyles.SelfieStepStyle selfieStepStyle, a assetOverrides, boolean z10, xp.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, yn.a videoCaptureMethod, rq.a aVar, boolean z11, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
                this.f35970a = str;
                this.f35971b = str2;
                this.f35972c = mode;
                this.f35973d = selfieStepStyle;
                this.f35974e = assetOverrides;
                this.f35975f = z10;
                this.f35976g = navigationState;
                this.f35977h = onBack;
                this.f35978i = onCancel;
                this.f35979j = onCameraError;
                this.f35980k = onPermissionChanged;
                this.f35981l = videoCaptureMethod;
                this.f35982m = z11;
                this.f35983n = cameraXControllerFactory;
                this.f35984o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f35974e;
            }

            public final g.a b() {
                return this.f35984o;
            }

            public final z.a c() {
                return this.f35983n;
            }

            public final String d() {
                return this.f35971b;
            }

            public final b e() {
                return this.f35972c;
            }

            public final xp.a f() {
                return this.f35976g;
            }

            public final Function0 g() {
                return this.f35977h;
            }

            public final Function1 h() {
                return this.f35979j;
            }

            public final Function0 i() {
                return this.f35978i;
            }

            public final Function0 j() {
                return this.f35980k;
            }

            public final boolean k() {
                return this.f35975f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f35973d;
            }

            public final String m() {
                return this.f35970a;
            }

            public final yn.a n() {
                return this.f35981l;
            }

            public final rq.a o() {
                return null;
            }

            public final boolean p() {
                return this.f35982m;
            }
        }

        /* renamed from: kp.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0469d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f36035a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0469d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f36035a = rendered;
            }

            public final Function0 a() {
                return this.f36035a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f36036a;

            /* renamed from: b  reason: collision with root package name */
            private final List f36037b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f36038c;

            /* renamed from: d  reason: collision with root package name */
            private final xp.a f36039d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f36040e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f36041f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f36042g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f36043h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f36044a;

                /* renamed from: b  reason: collision with root package name */
                private final String f36045b;

                /* renamed from: c  reason: collision with root package name */
                private final String f36046c;

                /* renamed from: d  reason: collision with root package name */
                private final String f36047d;

                /* renamed from: e  reason: collision with root package name */
                private final String f36048e;

                /* renamed from: f  reason: collision with root package name */
                private final String f36049f;

                /* renamed from: g  reason: collision with root package name */
                private final String f36050g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f36044a = title;
                    this.f36045b = description;
                    this.f36046c = selfieLabelFront;
                    this.f36047d = selfieLabelLeft;
                    this.f36048e = selfieLabelRight;
                    this.f36049f = submitButton;
                    this.f36050g = retakeButton;
                }

                public final String a() {
                    return this.f36045b;
                }

                public final String b() {
                    return this.f36050g;
                }

                public final String c() {
                    return this.f36046c;
                }

                public final String d() {
                    return this.f36047d;
                }

                public final String e() {
                    return this.f36048e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f36044a, aVar.f36044a) && Intrinsics.areEqual(this.f36045b, aVar.f36045b) && Intrinsics.areEqual(this.f36046c, aVar.f36046c) && Intrinsics.areEqual(this.f36047d, aVar.f36047d) && Intrinsics.areEqual(this.f36048e, aVar.f36048e) && Intrinsics.areEqual(this.f36049f, aVar.f36049f) && Intrinsics.areEqual(this.f36050g, aVar.f36050g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f36049f;
                }

                public final String g() {
                    return this.f36044a;
                }

                public int hashCode() {
                    return (((((((((((this.f36044a.hashCode() * 31) + this.f36045b.hashCode()) * 31) + this.f36046c.hashCode()) * 31) + this.f36047d.hashCode()) * 31) + this.f36048e.hashCode()) * 31) + this.f36049f.hashCode()) * 31) + this.f36050g.hashCode();
                }

                public String toString() {
                    String str = this.f36044a;
                    String str2 = this.f36045b;
                    String str3 = this.f36046c;
                    String str4 = this.f36047d;
                    String str5 = this.f36048e;
                    String str6 = this.f36049f;
                    String str7 = this.f36050g;
                    return "Strings(title=" + str + ", description=" + str2 + ", selfieLabelFront=" + str3 + ", selfieLabelLeft=" + str4 + ", selfieLabelRight=" + str5 + ", submitButton=" + str6 + ", retakeButton=" + str7 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(a strings, List selfies, StepStyles.SelfieStepStyle selfieStepStyle, xp.a navigationState, Function0 onUsePhotos, Function0 onRetakePhotos, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(strings, "strings");
                Intrinsics.checkNotNullParameter(selfies, "selfies");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onUsePhotos, "onUsePhotos");
                Intrinsics.checkNotNullParameter(onRetakePhotos, "onRetakePhotos");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f36036a = strings;
                this.f36037b = selfies;
                this.f36038c = selfieStepStyle;
                this.f36039d = navigationState;
                this.f36040e = onUsePhotos;
                this.f36041f = onRetakePhotos;
                this.f36042g = onBack;
                this.f36043h = onCancel;
            }

            public final xp.a a() {
                return this.f36039d;
            }

            public final Function0 b() {
                return this.f36042g;
            }

            public final Function0 c() {
                return this.f36043h;
            }

            public final Function0 d() {
                return this.f36041f;
            }

            public final Function0 e() {
                return this.f36040e;
            }

            public final List f() {
                return this.f36037b;
            }

            public final a g() {
                return this.f36036a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f36038c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f36051a;

            /* renamed from: b  reason: collision with root package name */
            private final String f36052b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f36053c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f36054d;

            /* renamed from: e  reason: collision with root package name */
            private final xp.a f36055e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f36056f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f36057g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f36058h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, xp.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f36051a = title;
                this.f36052b = description;
                this.f36053c = pendingPageTextVerticalPosition;
                this.f36054d = selfieStepStyle;
                this.f36055e = navigationState;
                this.f36056f = onBack;
                this.f36057g = onCancel;
                this.f36058h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f36058h;
            }

            public final String b() {
                return this.f36052b;
            }

            public final xp.a c() {
                return this.f36055e;
            }

            public final Function0 d() {
                return this.f36056f;
            }

            public final Function0 e() {
                return this.f36057g;
            }

            public final PendingPageTextPosition f() {
                return this.f36053c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f36054d;
            }

            public final String h() {
                return this.f36051a;
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
        public static final /* synthetic */ int[] f36059a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f36060b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f36061c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f35132e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f35133i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f35131d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f36059a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f35267e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f35268i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f35266d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f36060b = iArr2;
            int[] iArr3 = new int[wn.b.values().length];
            try {
                iArr3[wn.b.f53161d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[wn.b.f53162e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[wn.b.f53163i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[wn.b.f53164o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[wn.b.f53165p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[wn.b.f53166q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[wn.b.f53167r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[wn.b.f53168s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[wn.b.f53169t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f36061c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36062d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f36062d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                sn.m mVar = sn.m.f49898a;
                Context context = x5.this.f35835a;
                this.f36062d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            x5.V0(x5.this);
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
        int f36064d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f36065e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f36066i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f36065e = aVar;
            this.f36066i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f36065e, this.f36066i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f36064d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f36065e.c();
                final x5 x5Var = this.f36066i;
                d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.y5
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = x5.g.k(x5.this, (r.c) obj2);
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
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36067d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f36068e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f36069i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f36068e = aVar;
            this.f36069i = x5Var;
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
                return Unit.f31988a;
            }
            cVar.e(x1.a.t(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f35743o, 8191, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f36068e, this.f36069i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            Object f10 = ur.b.f();
            int i10 = this.f36067d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f36067d = 1;
                if (ms.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            zm.h c10 = this.f36068e.c();
            d10 = zm.z.d(this.f36069i, null, new Function1() { // from class: kp.z5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.h.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31988a;
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
        int f36070d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f36071e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f36072i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f36071e = aVar;
            this.f36072i = x5Var;
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
                return Unit.f31988a;
            }
            cVar.e(x1.a.t(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f35741e, 8191, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f36071e, this.f36072i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            Object f10 = ur.b.f();
            int i10 = this.f36070d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f36070d = 1;
                if (ms.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            zm.h c10 = this.f36071e.c();
            d10 = zm.z.d(this.f36072i, null, new Function1() { // from class: kp.a6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.i.k((r.c) obj2);
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

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36073d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f36074e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f36075i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f36076o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f36077p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f36074e = aVar;
            this.f36075i = x5Var;
            this.f36076o = cVar;
            this.f36077p = bVar;
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
                return Unit.f31988a;
            }
            int v10 = cVar4.v();
            if (v10 > 1) {
                cVar2.e(x1.c.t(cVar4, v10 - 1, cVar4.x(), 0L, null, 0L, 0.0f, null, null, null, null, false, null, false, 8188, null));
            } else {
                wn.b x10 = cVar4.x();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                sn.v b10 = cVar4.b();
                cVar2.e(new x1.a(x10, cVar.w(), cVar.u(), null, c11, i10, false, cVar.n(), b10, m6.i(cVar2, false), bVar.s(), cVar.p(), cVar.l(), null, 8264, null));
            }
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f36074e, this.f36075i, this.f36076o, this.f36077p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            Object f10 = ur.b.f();
            int i10 = this.f36073d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f36073d = 1;
                if (ms.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            zm.h c10 = this.f36074e.c();
            x5 x5Var = this.f36075i;
            final x1.c cVar = this.f36076o;
            final b bVar = this.f36077p;
            d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.b6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.j.k(x1.c.this, bVar, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36078d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f36079e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f36080i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f36079e = aVar;
            this.f36080i = x5Var;
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
                return Unit.f31988a;
            }
            int u10 = dVar2.u();
            if (u10 >= 1) {
                cVar.e(x1.d.t(dVar2, u10 - 1, dVar2.v(), null, null, 0L, false, 0L, null, null, null, false, 2044, null));
            }
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(this.f36079e, this.f36080i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            Object f10 = ur.b.f();
            int i10 = this.f36078d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f36078d = 1;
                if (ms.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            zm.h c10 = this.f36079e.c();
            d10 = zm.z.d(this.f36080i, null, new Function1() { // from class: kp.c6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.k.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36081d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f36082e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f36083i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f36084o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f36082e = booleanRef;
            this.f36083i = aVar;
            this.f36084o = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(Ref.BooleanRef booleanRef, r.c cVar) {
            x1 x1Var = (x1) cVar.c();
            if ((x1Var instanceof a0) && ((a0) x1Var).j()) {
                cVar.e(x1Var);
                booleanRef.element = false;
            }
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new l(this.f36082e, this.f36083i, this.f36084o, continuation);
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
                java.lang.Object r0 = ur.b.f()
                int r1 = r5.f36081d
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
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f36082e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f36081d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ms.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                zm.k$a r6 = r5.f36083i
                zm.h r6 = r6.c()
                kp.x5 r1 = r5.f36084o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f36082e
                kp.d6 r4 = new kp.d6
                r4.<init>()
                r3 = 0
                zm.r r1 = zm.w.g(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f31988a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kp.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public x5(Context applicationContext, c.a submitVerificationWorker, b.a webRtcWorkerFactory, b1.b selfieAnalyzeWorker, fp.c1 permissionRequestWorkflow, np.j localVideoCaptureRenderer, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, xn.a cameraStatsManager, xp.b navigationStateManager, tp.c externalEventLogger) {
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
        this.f35835a = applicationContext;
        this.f35836b = submitVerificationWorker;
        this.f35837c = webRtcWorkerFactory;
        this.f35838d = selfieAnalyzeWorker;
        this.f35839e = permissionRequestWorkflow;
        this.f35840f = localVideoCaptureRenderer;
        this.f35841g = cameraXControllerFactory;
        this.f35842h = camera2ManagerFactoryFactory;
        this.f35843i = cameraStatsManager;
        this.f35844j = navigationStateManager;
        this.f35845k = externalEventLogger;
        rq.c.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A2(x5 x5Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, c.d.f35901a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B2(x5 x5Var, k.a aVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, new c.C0461c(((c.b.a) bVar).a()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean v10 = oVar.v();
        if (!oVar.u() && Y0(bVar) && pp.f.f(this.f35835a) && bVar.z().b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        String c10 = bVar.x().c();
        d.c.b.g gVar = new d.c.b.g(new Function1() { // from class: kp.i4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J2;
                J2 = x5.J2(k.a.this, this, bVar, oVar, currentTimeMillis, (sn.v) obj);
                return J2;
            }
        }, d.c.EnumC0468c.f36021d, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f35841g;
        g.a aVar3 = this.f35842h;
        v.b p10 = oVar.p();
        boolean l10 = oVar.l();
        if (v10 && !z10) {
            z11 = false;
        } else {
            z11 = true;
        }
        d f10 = j2.f(bVar, aVar, null, c10, null, null, false, gVar, v11, t10, b10, new Function0() { // from class: kp.j4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L2;
                L2 = x5.L2(k.a.this, this);
                return L2;
            }
        }, new Function0() { // from class: kp.k4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit M2;
                M2 = x5.M2(x5.this, aVar);
                return M2;
            }
        }, k10, new Function0() { // from class: kp.l4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N2;
                N2 = x5.N2(x5.this, aVar, bVar);
                return N2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, p10, l10, false, z11, PointerEventHelper.X_FLAG_SUPPORTS_HOVER, null);
        if (!v10) {
            String str = "";
            fp.d0 d0Var = fp.d0.f23255d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f35835a.getString(hp.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f35835a;
            String string = context.getString(hp.e.C, pp.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return fp.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f35839e, bVar.y(), null, new Function1() { // from class: kp.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r F2;
                    F2 = x5.F2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return F2;
                }
            }, 19976, null);
        }
        String str2 = "";
        if (z10) {
            fp.d0 d0Var2 = fp.d0.f23256e;
            String o10 = bVar.o();
            if (o10 == null) {
                o10 = this.f35835a.getString(hp.e.M);
                Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
            }
            Context context2 = this.f35835a;
            String string2 = context2.getString(hp.e.L, pp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            fp.c1 c1Var = this.f35839e;
            String p11 = bVar.p();
            if (p11 != null) {
                str2 = p11;
            }
            return fp.l1.e(f10, aVar, true, d0Var2, false, str2, o10, string2, n10, m10, null, null, null, c1Var, bVar.y(), "video_capture_mic_permission_request", new Function1() { // from class: kp.o4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r H2;
                    H2 = x5.H2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return H2;
                }
            }, 3592, null);
        }
        return f10;
    }

    private final d F1(final b bVar, x1.f fVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: kp.a4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit G1;
                G1 = x5.G1();
                return G1;
            }
        }, false, d.c.EnumC0468c.f36030u, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: kp.b4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit H1;
                H1 = x5.H1(k.a.this, this);
                return H1;
            }
        }, new Function0() { // from class: kp.d4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I1;
                I1 = x5.I1(x5.this, aVar);
                return I1;
            }
        }, k10, new Function0() { // from class: kp.e4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit J1;
                J1 = x5.J1(x5.this, aVar, bVar);
                return J1;
            }
        }, l32, null, bVar.z().b(), this.f35841g, this.f35842h, 0.0f, null, fVar.p(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r F2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.l5
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == fp.g1.f23281d) {
            action.e(x1.o.t(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f35898a);
        } else {
            x5Var.e3(aVar2, new c.C0461c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r H2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.b5
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
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == fp.g1.f23281d) {
            action.e(x1.o.t(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f35898a);
        } else {
            x5Var.e3(aVar2, new c.C0461c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J2(k.a aVar, final x5 x5Var, final b bVar, final x1.o oVar, final long j10, final sn.v cameraProperties) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.c5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K2;
                K2 = x5.K2(x5.this, bVar, oVar, cameraProperties, j10, (r.c) obj);
                return K2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final d K1(final b bVar, final x1.h hVar, final k.a aVar) {
        return new d.C0469d(new Function0() { // from class: kp.c4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L1;
                L1 = x5.L1(k.a.this, this, bVar, hVar);
                return L1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K2(x5 x5Var, b bVar, x1.o oVar, sn.v vVar, long j10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (x5Var.l3(bVar) == yn.a.f54862d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.p(), oVar.l()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.p(), oVar.l(), 67, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(k.a aVar, x5 x5Var, final b bVar, final x1.h hVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.m5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M1;
                M1 = x5.M1(x5.b.this, hVar, (r.c) obj);
                return M1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(b bVar, x1.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, hVar.p(), false, 163, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f35835a.getString(hp.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f35835a.getString(hp.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f35835a.getString(hp.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f35835a.getString(hp.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f35835a.getString(hp.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f35835a.getString(hp.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f35835a.getString(hp.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.s(), bVar.y(), this.f35844j.b(), new Function0() { // from class: kp.i3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit O1;
                O1 = x5.O1(k.a.this, this, iVar);
                return O1;
            }
        }, new Function0() { // from class: kp.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Q1;
                Q1 = x5.Q1(k.a.this, this, bVar, iVar);
                return Q1;
            }
        }, new Function0() { // from class: kp.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit S1;
                S1 = x5.S1(k.a.this, this);
                return S1;
            }
        }, new Function0() { // from class: kp.l3
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
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(k.a aVar, x5 x5Var, final x1.i iVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.t5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit P1;
                P1 = x5.P1(x1.i.this, (r.c) obj);
                return P1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        zm.w.l(aVar, this.f35837c.a(bVar.z().c()), Reflection.typeOf(qq.b.class), "", new Function1() { // from class: kp.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0601b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0468c.f36021d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f35841g;
        g.a aVar3 = this.f35842h;
        return j2.f(bVar, aVar, pVar.e(), c10, null, null, false, iVar, v10, t10, b10, new Function0() { // from class: kp.v2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T2;
                T2 = x5.T2(k.a.this, this);
                return T2;
            }
        }, new Function0() { // from class: kp.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U2;
                U2 = x5.U2(x5.this, aVar);
                return U2;
            }
        }, k10, new Function0() { // from class: kp.r3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V2;
                V2 = x5.V2(x5.this, aVar, bVar);
                return V2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, pVar.p(), pVar.l(), false, false, 50331648, null);
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
            return Unit.f31988a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.q(), iVar3.t(), iVar3.b(), iVar3.n(), m6.i(action, true), iVar.p()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0601b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final un.m b10 = un.j.b(x5Var.f35835a, un.n.f51614d);
        if (it instanceof b.AbstractC0601b.C0602b) {
            d11 = zm.z.d(x5Var, null, new Function1() { // from class: kp.p5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q2;
                    Q2 = x5.Q2(x5.this, b10, it, pVar, bVar, aVar, (r.c) obj);
                    return Q2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.AbstractC0601b.a) {
            d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.q5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R2;
                    R2 = x5.R2(k.a.this, x5Var, pVar, (r.c) obj);
                    return R2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(k.a aVar, x5 x5Var, final b bVar, final x1.i iVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.w4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R1;
                R1 = x5.R1(x5.b.this, iVar, (r.c) obj);
                return R1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q2(x5 x5Var, un.m mVar, b.AbstractC0601b abstractC0601b, x1.p pVar, b bVar, k.a aVar, r.c action) {
        un.l b10;
        un.l b11;
        un.l b12;
        Size f10;
        un.l b13;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R1(b bVar, x1.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, iVar.p(), false, 163, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R2(k.a aVar, final x5 x5Var, final x1.p pVar, r.c action) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.v5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S2;
                S2 = x5.S2(x5.this, pVar, (r.c) obj);
                return S2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S2(x5 x5Var, x1.p pVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        action.e(new x1.h(false, false, m6.i(action, false), pVar.p(), 3, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    private final d.b U1(final b bVar, final x1.j jVar, final k.a aVar) {
        String C = bVar.x().C();
        String h10 = bVar.x().h();
        String e10 = bVar.x().e();
        String B = bVar.x().B();
        xp.a b10 = this.f35844j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f35218a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f35220a) && !Intrinsics.areEqual(u10, d2.b.f35219a)) {
            throw new or.p();
        } else {
            NextStep.Selfie.AssetConfig.PromptPage promptPage2 = bVar.a().getPromptPage();
            if (promptPage2 != null) {
                remoteImage = promptPage2.getSelfiePictograph();
            }
        }
        return new d.b(C, h10, e10, B, bVar.y(), remoteImage, b10, new Function0() { // from class: kp.m3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V1;
                V1 = x5.V1(k.a.this, this, bVar, jVar);
                return V1;
            }
        }, new Function0() { // from class: kp.n3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X1;
                X1 = x5.X1(k.a.this, this);
                return X1;
            }
        }, new Function0() { // from class: kp.o3
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
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    public static final /* synthetic */ rq.a V0(x5 x5Var) {
        x5Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(k.a aVar, x5 x5Var, final b bVar, final x1.j jVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.h5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W1;
                W1 = x5.W1(x5.b.this, jVar, (r.c) obj);
                return W1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(b bVar, x1.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.j(action, false, 1, null), bVar.q(), bVar.s(), false, jVar.p(), false, 163, null));
        return Unit.f31988a;
    }

    private final d W2(final b bVar, final x1.q qVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: kp.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0468c.f36032w, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: kp.x3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Z2;
                Z2 = x5.Z2(k.a.this, this);
                return Z2;
            }
        }, new Function0() { // from class: kp.y3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a32;
                a32 = x5.a3(x5.this, aVar);
                return a32;
            }
        }, k10, new Function0() { // from class: kp.z3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit b32;
                b32 = x5.b3(x5.this, aVar, bVar);
                return b32;
            }
        }, l32, null, bVar.z().b(), this.f35841g, this.f35842h, 0.0f, null, qVar.p(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X2(k.a aVar, x5 x5Var, final x1.q qVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.f5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Y2;
                Y2 = x5.Y2(x1.q.this, (r.c) obj);
                return Y2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f35835a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.q(), qVar.s(), qVar.b(), qVar.n(), m6.i(action, false)));
        return Unit.f31988a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.q(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.n(), x1Var.o(), ((b) cVar.b()).s(), x1Var.p(), zVar2.l());
        } else if (l3((b) cVar.b()) == yn.a.f54863e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.q(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.n(), x1Var.o(), x1Var.p(), 12, null);
        } else if (l3((b) cVar.b()) == yn.a.f54862d) {
            a0 a0Var3 = (a0) x1Var;
            w10 = new x1.f(CollectionsKt.M0(x1Var.q(), a1Var), a0Var3.b(), a0Var3.n(), x1Var.o(), x1Var.p());
        } else {
            a0 a0Var4 = (a0) x1Var;
            w10 = m6.w(cVar, CollectionsKt.M0(x1Var.q(), a1Var), null, a0Var4.b(), a0Var4.n(), x1Var.o());
        }
        return new x1.b(w10, zVar.e(), x1Var.o(), x1Var.p(), ((z) x1Var).l());
    }

    private final d Z1(final b bVar, final x1.k kVar, final k.a aVar) {
        h1 h1Var;
        String u10;
        d.c.EnumC0468c enumC0468c;
        int i10 = e.f36059a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new or.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f35268i;
        } else {
            h1Var = h1.f35267e;
        }
        int[] iArr = e.f36060b;
        int i11 = iArr[h1Var.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    u10 = bVar.x().z();
                } else {
                    throw new or.p();
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
                    enumC0468c = d.c.EnumC0468c.f36022e;
                } else {
                    throw new or.p();
                }
            } else {
                enumC0468c = d.c.EnumC0468c.f36027r;
            }
        } else {
            enumC0468c = d.c.EnumC0468c.f36024o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: kp.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0468c, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f35841g;
        g.a aVar3 = this.f35842h;
        boolean a10 = kVar.a();
        return j2.f(bVar, aVar, kVar.e(), c10, str, null, a10, fVar, v10, t10, b10, new Function0() { // from class: kp.n2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c22;
                c22 = x5.c2(k.a.this, this);
                return c22;
            }
        }, new Function0() { // from class: kp.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d22;
                d22 = x5.d2(x5.this, aVar);
                return d22;
            }
        }, k10, new Function0() { // from class: kp.p2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit e22;
                e22 = x5.e2(x5.this, aVar, bVar);
                return e22;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, kVar.p(), kVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(k.a aVar, x5 x5Var, final x1.k kVar, final b bVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.s5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b22;
                b22 = x5.b2(x1.k.this, bVar, (r.c) obj);
                return b22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    private final d b1(final b bVar, final x1.a aVar, final k.a aVar2) {
        x1.g gVar;
        String str;
        String str2;
        d.c.EnumC0468c enumC0468c;
        d.c.b aVar3;
        boolean z10;
        boolean z11;
        final a1.b e10 = aVar.e();
        if (aVar.l()) {
            if (aVar.v() == x1.g.f35740d) {
                gVar = x1.g.f35741e;
            } else {
                gVar = aVar.v();
            }
        } else {
            gVar = x1.g.f35740d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f35838d;
            if (gVar != x1.g.f35740d && gVar != x1.g.f35743o) {
                z11 = false;
            } else {
                z11 = true;
            }
            zm.w.l(aVar2, bVar2.a(e10, z11), Reflection.typeOf(b1.class), "", new Function1() { // from class: kp.p3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r c12;
                    c12 = x5.c1(x5.this, aVar, aVar2, (b1.c) obj);
                    return c12;
                }
            });
        }
        wn.b x10 = aVar.x();
        if (x10 != null) {
            str = i3(x10, bVar.x(), aVar.e());
        } else {
            str = null;
        }
        if (e10 == a1.b.f35132e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f35133i) {
            str2 = bVar.x().w();
        } else if (aVar.x() != null) {
            str2 = str;
        } else if (e10 == a1.b.f35131d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f36059a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0468c = d.c.EnumC0468c.f36022e;
                } else {
                    throw new or.p();
                }
            } else {
                enumC0468c = d.c.EnumC0468c.f36028s;
            }
        } else {
            enumC0468c = d.c.EnumC0468c.f36025p;
        }
        d.c.EnumC0468c enumC0468c2 = enumC0468c;
        if (aVar.j() && gVar != x1.g.f35742i && gVar != x1.g.f35743o) {
            aVar3 = new d.c.b.C0467d(new Function1() { // from class: kp.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = x5.e1(a1.b.this, aVar2, this, aVar, (String) obj);
                    return e12;
                }
            }, new Function1() { // from class: kp.s3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = x5.g1(x5.this, aVar2, (Throwable) obj);
                    return g12;
                }
            }, false, enumC0468c2, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0468c2, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f35742i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f35743o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar2);
        yn.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f35841g;
        g.a aVar5 = this.f35842h;
        boolean a10 = aVar.a();
        a1.b e11 = aVar.e();
        float w10 = aVar.w();
        wn.a u10 = aVar.u();
        v.b p10 = aVar.p();
        boolean l10 = aVar.l();
        if (aVar.v() != gVar2 && aVar.v() != gVar3) {
            z10 = false;
        } else {
            z10 = true;
        }
        return j2.f(bVar, aVar2, e11, c10, str4, str3, a10, aVar3, v10, t10, b10, new Function0() { // from class: kp.t3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h12;
                h12 = x5.h1(k.a.this, this);
                return h12;
            }
        }, new Function0() { // from class: kp.u3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i12;
                i12 = x5.i1(x5.this, aVar2);
                return i12;
            }
        }, k10, new Function0() { // from class: kp.v3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j12;
                j12 = x5.j1(x5.this, aVar2, bVar);
                return j12;
            }
        }, l32, null, b11, aVar4, aVar5, w10, u10, p10, l10, z10, false, 33554432, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b2(x1.k kVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List c10 = kVar.c();
        action.e(new x1.a(null, 0.0f, null, kVar.q(), c10, System.currentTimeMillis(), kVar.a(), kVar.n(), kVar.b(), m6.i(action, false), bVar.s(), kVar.p(), kVar.l(), null, 8193, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r c1(final x5 x5Var, final x1.a aVar, final k.a aVar2, final b1.c output) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.r5
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
        return Unit.f31988a;
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
            return Unit.f31988a;
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
                action.e(x1.a.t(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f35742i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0452c) {
            b1.c.C0452c c0452c = (b1.c.C0452c) cVar;
            if (c0452c.b() == wn.b.f53168s) {
                action.e(x1.a.t(aVar4, null, c0452c.c(), c0452c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.t(aVar4, c0452c.b(), c0452c.c(), c0452c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new or.p();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    private final void d3(k.a aVar, Throwable th2) {
        String message;
        String message2 = th2.getMessage();
        if (message2 != null && StringsKt.V(message2, "ENOSPC", false, 2, null)) {
            e3(aVar, new c.C0461c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        } else if (th2 instanceof x.o0) {
            Throwable cause = th2.getCause();
            if (cause != null && (message = cause.getMessage()) != null && StringsKt.V(message, "ENOSPC", false, 2, null)) {
                e3(aVar, new c.C0461c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
                return;
            }
            String canonicalName = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0461c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName)));
        } else {
            String canonicalName2 = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0461c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.a aVar2, String absolutePath) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f35127i, bVar, System.currentTimeMillis());
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.i5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f12;
                f12 = x5.f1(x5.this, aVar2, cVar, (r.c) obj);
                return f12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    private final void e3(k.a aVar, final c cVar) {
        zm.r d10;
        if (!(cVar instanceof c.d) && !(cVar instanceof c.a)) {
            boolean z10 = cVar instanceof c.C0461c;
        }
        zm.h c10 = aVar.c();
        d10 = zm.z.d(this, null, new Function1() { // from class: kp.d5
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
        return Unit.f31988a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0467d c0467d;
        if (lVar.f().c()) {
            zm.w.l(aVar, this.f35838d.a(a1.b.f35131d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: kp.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r g22;
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
        d.c.EnumC0468c enumC0468c = d.c.EnumC0468c.f36022e;
        wn.b w10 = lVar.w();
        if (w10 != null) {
            str = i3(w10, bVar.x(), lVar.e());
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
                aVar2 = new d.c.b.e(new Function0() { // from class: kp.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i22;
                        i22 = x5.i2(k.a.this, this, lVar, bVar);
                        return i22;
                    }
                }, enumC0468c, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
            } else {
                c0467d = new d.c.b.C0467d(new Function1() { // from class: kp.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit k22;
                        k22 = x5.k2(a1.b.this, aVar, this, lVar, (String) obj);
                        return k22;
                    }
                }, new Function1() { // from class: kp.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m22;
                        m22 = x5.m2(x5.this, aVar, (Throwable) obj);
                        return m22;
                    }
                }, false, enumC0468c, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a), 4, null);
                boolean t10 = bVar.t();
                xp.a b10 = this.f35844j.b();
                Function1 k10 = m6.k(aVar);
                yn.a l32 = l3(bVar);
                d.c.a v10 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f35841g;
                g.a aVar4 = this.f35842h;
                boolean a10 = lVar.a();
                return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a10, c0467d, v10, t10, b10, new Function0() { // from class: kp.u2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit n22;
                        n22 = x5.n2(k.a.this, this);
                        return n22;
                    }
                }, new Function0() { // from class: kp.w2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit o22;
                        o22 = x5.o2(x5.this, aVar);
                        return o22;
                    }
                }, k10, new Function0() { // from class: kp.x2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p22;
                        p22 = x5.p2(x5.this, aVar, bVar);
                        return p22;
                    }
                }, l32, null, b11, aVar3, aVar4, lVar.v(), lVar.u(), lVar.p(), lVar.l(), false, false, 50331648, null);
            }
        } else {
            aVar2 = new d.c.b.a(enumC0468c, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        }
        c0467d = aVar2;
        boolean t102 = bVar.t();
        xp.a b102 = this.f35844j.b();
        Function1 k102 = m6.k(aVar);
        yn.a l322 = l3(bVar);
        d.c.a v102 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f35841g;
        g.a aVar42 = this.f35842h;
        boolean a102 = lVar.a();
        return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a102, c0467d, v102, t102, b102, new Function0() { // from class: kp.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n22;
                n22 = x5.n2(k.a.this, this);
                return n22;
            }
        }, new Function0() { // from class: kp.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o22;
                o22 = x5.o2(x5.this, aVar);
                return o22;
            }
        }, k102, new Function0() { // from class: kp.x2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p22;
                p22 = x5.p2(x5.this, aVar, bVar);
                return p22;
            }
        }, l322, null, b112, aVar32, aVar42, lVar.v(), lVar.u(), lVar.p(), lVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f3(c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(cVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r g2(final x5 x5Var, final x1.l lVar, final b bVar, final k.a aVar, final b1.c output) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.k5
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
        cVar.d(new c.C0461c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h2(b1.c cVar, x1.l lVar, b bVar, x5 x5Var, k.a aVar, r.c action) {
        x1.l lVar2;
        x1.l t10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.l) {
            lVar2 = (x1.l) c10;
        } else {
            lVar2 = null;
        }
        x1.l lVar3 = lVar2;
        if (lVar3 == null) {
            return Unit.f31988a;
        }
        if (cVar instanceof b1.c.a) {
            List c11 = lVar.c();
            b1.c.a aVar2 = (b1.c.a) cVar;
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.n(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.p(), lVar.l()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0452c) {
            b1.c.C0452c c0452c = (b1.c.C0452c) cVar;
            if (c0452c.b() == wn.b.f53168s) {
                t10 = x1.l.t(lVar3, false, null, c0452c.c(), c0452c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                t10 = x1.l.t(lVar3, false, c0452c.b(), c0452c.c(), c0452c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(t10);
        } else {
            throw new or.p();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i2(k.a aVar, x5 x5Var, final x1.l lVar, final b bVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.o5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j22;
                j22 = x5.j2(x1.l.this, bVar, (r.c) obj);
                return j22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final String i3(wn.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f36061c[bVar.ordinal()]) {
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
                int i10 = e.f36059a[bVar2.ordinal()];
                if (i10 == 1 || i10 == 2) {
                    return null;
                }
                if (i10 == 3) {
                    return aVar.z();
                }
                throw new or.p();
            case 8:
                return aVar.p();
            case 9:
                return aVar.p();
            default:
                throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.n(), m6.i(action, false), bVar.s(), lVar.p(), lVar.l(), 2, null));
        return Unit.f31988a;
    }

    private final tp.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f50920a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b g10 = ((x1.k) x1Var).g();
            if (g10 != null) {
                str = m1.a(g10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f50920a;
        } else {
            if (x1Var instanceof z) {
                a1.b g11 = ((z) x1Var).g();
                if (g11 != null) {
                    str = m1.a(g11);
                }
                return new j.f(str);
            } else if (x1Var instanceof x1.b) {
                return j3(((x1.b) x1Var).t());
            } else {
                if (!(x1Var instanceof x1.e) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q)) {
                    if (x1Var instanceof x1.i) {
                        return j.a.f50916a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f50919a;
                    }
                    throw new or.p();
                }
                return j.b.f50917a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0468c enumC0468c;
        String c10 = bVar.x().c();
        if (bVar2.t() instanceof x1.n) {
            enumC0468c = d.c.EnumC0468c.f36031v;
        } else {
            int i10 = e.f36059a[bVar2.s().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0468c = d.c.EnumC0468c.f36023i;
                    } else {
                        throw new or.p();
                    }
                } else {
                    enumC0468c = d.c.EnumC0468c.f36029t;
                }
            } else {
                enumC0468c = d.c.EnumC0468c.f36026q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: kp.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0468c, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: kp.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n12;
                n12 = x5.n1(k.a.this, this);
                return n12;
            }
        }, new Function0() { // from class: kp.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o12;
                o12 = x5.o1(x5.this, aVar);
                return o12;
            }
        }, k10, new Function0() { // from class: kp.h3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p12;
                p12 = x5.p1(x5.this, aVar, bVar);
                return p12;
            }
        }, l32, null, bVar.z().b(), this.f35841g, this.f35842h, 0.0f, null, bVar2.p(), bVar2.u(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f35127i, bVar, System.currentTimeMillis());
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.n5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l22;
                l22 = x5.l2(x5.this, lVar, cVar, (r.c) obj);
                return l22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final boolean k3(x1 x1Var) {
        if (!(x1Var instanceof x1.a) && !(x1Var instanceof x1.b) && !(x1Var instanceof x1.c) && !(x1Var instanceof x1.d) && !(x1Var instanceof x1.k) && !(x1Var instanceof x1.l) && !(x1Var instanceof x1.m) && !(x1Var instanceof x1.o) && !(x1Var instanceof x1.p) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q) && !(x1Var instanceof x1.e)) {
            if (!(x1Var instanceof x1.j) && !(x1Var instanceof x1.h) && !(x1Var instanceof x1.i) && !(x1Var instanceof x1.n)) {
                throw new or.p();
            }
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(k.a aVar, x5 x5Var) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.g5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m12;
                m12 = x5.m1((r.c) obj);
                return m12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f31988a;
    }

    private final yn.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f35835a);
        if (Result.e(f10) == null) {
            return (yn.a) f10;
        }
        return yn.a.f54864i;
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
            x1Var = bVar.t();
        }
        if (x1Var != null) {
            action.e(x1Var);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m2(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31988a;
    }

    private final boolean m3(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f35835a);
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            zm.w.l(aVar, this.f35838d.a(a1.b.f35131d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: kp.p4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r r12;
                    r12 = x5.r1(x5.this, aVar, (b1.c) obj);
                    return r12;
                }
            });
        }
        aVar.a("countdown_" + cVar.v(), new j(aVar, this, cVar, bVar, null));
        wn.b x10 = cVar.x();
        if (x10 != null) {
            str = i3(x10, bVar.x(), cVar.e());
        } else {
            str = null;
        }
        if (str == null) {
            str2 = bVar.x().p();
        } else {
            str2 = str;
        }
        String c10 = bVar.x().c();
        int v10 = cVar.v();
        if (l3(bVar) == yn.a.f54863e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0465b c0465b = new d.c.b.C0465b(v10, z10, bVar.z().a(), d.c.EnumC0468c.f36022e, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a), new Function1() { // from class: kp.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f35841g;
        g.a aVar3 = this.f35842h;
        return j2.f(bVar, aVar, cVar.e(), c10, str2, str, cVar.a(), c0465b, v11, t10, b10, new Function0() { // from class: kp.r4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit u12;
                u12 = x5.u1(k.a.this, this);
                return u12;
            }
        }, new Function0() { // from class: kp.s4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v12;
                v12 = x5.v1(x5.this, aVar);
                return v12;
            }
        }, k10, new Function0() { // from class: kp.t4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w12;
                w12 = x5.w1(x5.this, aVar, bVar);
                return w12;
            }
        }, l32, null, b11, aVar2, aVar3, cVar.w(), cVar.u(), cVar.p(), cVar.l(), false, false, 50331648, null);
    }

    private final d q2(final b bVar, final x1.m mVar, final k.a aVar) {
        if (mVar.f().c()) {
            zm.w.l(aVar, this.f35838d.a(a1.b.f35131d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: kp.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        zm.w.l(aVar, o.a.b(zm.o.f56088a, 1000L, null, 2, null), Reflection.typeOf(zm.o.class, KTypeProjection.f32092c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: kp.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r t22;
                t22 = x5.t2(x5.this, mVar, bVar, (Unit) obj);
                return t22;
            }
        });
        String c10 = bVar.x().c();
        String t10 = bVar.x().t();
        String t11 = bVar.x().t();
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0468c.f36022e, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        boolean t12 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f35841g;
        g.a aVar4 = this.f35842h;
        boolean a10 = mVar.a();
        return j2.f(bVar, aVar, mVar.e(), c10, t10, t11, a10, aVar2, v10, t12, b10, new Function0() { // from class: kp.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v22;
                v22 = x5.v2(k.a.this, this);
                return v22;
            }
        }, new Function0() { // from class: kp.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w22;
                w22 = x5.w2(x5.this, aVar);
                return w22;
            }
        }, k10, new Function0() { // from class: kp.c3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit x22;
                x22 = x5.x2(x5.this, aVar, bVar);
                return x22;
            }
        }, l32, null, b11, aVar3, aVar4, mVar.v(), mVar.u(), mVar.p(), mVar.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r r1(final x5 x5Var, final k.a aVar, final b1.c output) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.e5
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
    public static final zm.r r2(final x5 x5Var, final k.a aVar, final x1.m mVar, final b bVar, final b1.c output) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.z4
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
            return Unit.f31988a;
        }
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0452c) {
                b1.c.C0452c c0452c = (b1.c.C0452c) cVar;
                action.e(x1.c.t(cVar3, 0, c0452c.b(), 0L, null, 0L, c0452c.c(), c0452c.a(), null, null, null, false, null, false, 8093, null));
            } else {
                throw new or.p();
            }
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s2(b1.c cVar, x5 x5Var, k.a aVar, x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0452c) {
                b1.c.C0452c c0452c = (b1.c.C0452c) cVar;
                wn.b b10 = c0452c.b();
                List c10 = mVar.c();
                long i10 = mVar.i();
                sn.v b11 = mVar.b();
                action.e(new x1.l(false, b10, c0452c.c(), c0452c.a(), c10, i10, false, mVar.n(), b11, m6.i(action, false), bVar.s(), mVar.p(), mVar.l(), 65, null));
            } else {
                throw new or.p();
            }
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r t2(x5 x5Var, final x1.m mVar, final b bVar, Unit it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.x4
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f31988a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.n(), mVar.v(), mVar.u(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.p(), mVar.l(), 2, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f35899a);
        return Unit.f31988a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0468c enumC0468c;
        String str;
        final x1.d dVar2;
        d.c.b c0465b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f36059a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0468c = d.c.EnumC0468c.f36022e;
                } else {
                    throw new or.p();
                }
            } else {
                enumC0468c = d.c.EnumC0468c.f36028s;
            }
        } else {
            enumC0468c = d.c.EnumC0468c.f36025p;
        }
        d.c.EnumC0468c enumC0468c2 = enumC0468c;
        String str2 = null;
        aVar.a("countdown_to_manual_capture_" + dVar.u(), new k(aVar, this, null));
        wn.b v10 = dVar.v();
        if (v10 != null) {
            str2 = i3(v10, bVar.x(), dVar.e());
        }
        String str3 = str2;
        if (str3 == null) {
            str = bVar.x().p();
        } else {
            str = str3;
        }
        String c10 = bVar.x().c();
        if (dVar.u() == 0) {
            dVar2 = dVar;
            c0465b = new d.c.b.C0467d(new Function1() { // from class: kp.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = x5.y1(a1.b.this, aVar, this, dVar2, (String) obj);
                    return y12;
                }
            }, new Function1() { // from class: kp.y4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A1;
                    A1 = x5.A1(x5.this, aVar, (Throwable) obj);
                    return A1;
                }
            }, true, enumC0468c2, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a));
        } else {
            dVar2 = dVar;
            int u10 = dVar2.u();
            if (l3(bVar) == yn.a.f54863e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0465b = new d.c.b.C0465b(u10, z10, bVar.z().a(), enumC0468c2, !Intrinsics.areEqual(bVar.u(), d2.b.f35219a), new Function1() { // from class: kp.j5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B1;
                    B1 = x5.B1(k.a.this, (Throwable) obj);
                    return B1;
                }
            });
        }
        d.c.b bVar3 = c0465b;
        boolean t10 = bVar.t();
        xp.a b10 = this.f35844j.b();
        Function1 k10 = m6.k(aVar);
        yn.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f35841g;
        g.a aVar3 = this.f35842h;
        return j2.f(bVar, aVar, dVar2.e(), c10, str, str3, dVar2.a(), bVar3, v11, t10, b10, new Function0() { // from class: kp.u5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C1;
                C1 = x5.C1(k.a.this, this);
                return C1;
            }
        }, new Function0() { // from class: kp.w5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D1;
                D1 = x5.D1(x5.this, aVar);
                return D1;
            }
        }, k10, new Function0() { // from class: kp.l2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E1;
                E1 = x5.E1(x5.this, aVar, bVar);
                return E1;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, dVar2.p(), dVar2.l(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f35835a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f35127i, bVar, System.currentTimeMillis());
        zm.h c10 = aVar.c();
        d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.a5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = x5.z1(x5.this, dVar, cVar, (r.c) obj);
                return z12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        zm.w.l(aVar, this.f35836b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.q(), nVar.s(), nVar.b(), nVar.n()), Reflection.typeOf(mp.c.class), "", new Function1() { // from class: kp.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        xp.b.d(this.f35844j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        xp.a b10 = this.f35844j.b();
        Function0 function0 = new Function0() { // from class: kp.g4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C2;
                C2 = x5.C2(x5.this, aVar);
                return C2;
            }
        };
        Function0 function02 = new Function0() { // from class: kp.h4
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r z2(final x5 x5Var, final k.a aVar, final c.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0506b) {
            d11 = zm.z.d(x5Var, null, new Function1() { // from class: kp.u4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A2;
                    A2 = x5.A2(x5.this, aVar, (r.c) obj);
                    return A2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = zm.z.d(x5Var, null, new Function1() { // from class: kp.v4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B2;
                    B2 = x5.B2(x5.this, aVar, it, (r.c) obj);
                    return B2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    @Override // zm.k
    /* renamed from: X0 */
    public x1 d(b props, zm.i iVar) {
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
            x1 x1Var = (x1) readParcelable;
            if (x1Var != null) {
                return x1Var;
            }
        }
        if (props.w()) {
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f49986d, false, 163, null);
        }
        return new x1.j(null, null, 2, null);
    }

    @Override // zm.k
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
        this.f35844j.c(renderProps.b(), renderProps.g(), !z10);
        this.f35845k.c(new i.e(renderProps.k(), j3(renderState)));
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
            y22 = this.f35840f.q(renderProps, (x1.e) renderState, context);
        } else if (renderState instanceof x1.f) {
            y22 = F1(renderProps, (x1.f) renderState, context);
        } else if (renderState instanceof x1.q) {
            y22 = W2(renderProps, (x1.q) renderState, context);
        } else if (renderState instanceof x1.i) {
            y22 = N1(renderProps, (x1.i) renderState, context);
        } else if (z10) {
            y22 = y2(renderProps, (x1.n) renderState, context);
        } else {
            throw new or.p();
        }
        if (y22 instanceof d.c) {
            return fp.l1.c(y22);
        }
        return y22;
    }

    @Override // zm.k
    /* renamed from: h3 */
    public zm.i g(x1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return bn.s.a(state);
    }
}
