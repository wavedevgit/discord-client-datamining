package wp;

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
import cr.b;
import en.k;
import en.o;
import en.r;
import fo.v;
import fo.z;
import fq.i;
import fq.j;
import ho.g;
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
import okio.ByteString;
import rp.c1;
import wp.a1;
import wp.b1;
import wp.d2;
import wp.x1;
import wp.x5;
import yp.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x5 extends en.k {

    /* renamed from: l  reason: collision with root package name */
    public static final a f53673l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f53674a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f53675b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f53676c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f53677d;

    /* renamed from: e  reason: collision with root package name */
    private final rp.c1 f53678e;

    /* renamed from: f  reason: collision with root package name */
    private final zp.j f53679f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f53680g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f53681h;

    /* renamed from: i  reason: collision with root package name */
    private final ko.a f53682i;

    /* renamed from: j  reason: collision with root package name */
    private final jq.b f53683j;

    /* renamed from: k  reason: collision with root package name */
    private final fq.c f53684k;

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
        private final String f53685a;

        /* renamed from: b  reason: collision with root package name */
        private final String f53686b;

        /* renamed from: c  reason: collision with root package name */
        private final String f53687c;

        /* renamed from: d  reason: collision with root package name */
        private final String f53688d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53689e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f53690f;

        /* renamed from: g  reason: collision with root package name */
        private final String f53691g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f53692h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f53693i;

        /* renamed from: j  reason: collision with root package name */
        private final a f53694j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f53695k;

        /* renamed from: l  reason: collision with root package name */
        private final List f53696l;

        /* renamed from: m  reason: collision with root package name */
        private final String f53697m;

        /* renamed from: n  reason: collision with root package name */
        private final String f53698n;

        /* renamed from: o  reason: collision with root package name */
        private final String f53699o;

        /* renamed from: p  reason: collision with root package name */
        private final String f53700p;

        /* renamed from: q  reason: collision with root package name */
        private final String f53701q;

        /* renamed from: r  reason: collision with root package name */
        private final String f53702r;

        /* renamed from: s  reason: collision with root package name */
        private final String f53703s;

        /* renamed from: t  reason: collision with root package name */
        private final String f53704t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f53705u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f53706v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f53707w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f53708x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f53709y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f53710z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f53711a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53712b;

            /* renamed from: c  reason: collision with root package name */
            private final String f53713c;

            /* renamed from: d  reason: collision with root package name */
            private final String f53714d;

            /* renamed from: e  reason: collision with root package name */
            private final String f53715e;

            /* renamed from: f  reason: collision with root package name */
            private final String f53716f;

            /* renamed from: g  reason: collision with root package name */
            private final String f53717g;

            /* renamed from: h  reason: collision with root package name */
            private final String f53718h;

            /* renamed from: i  reason: collision with root package name */
            private final String f53719i;

            /* renamed from: j  reason: collision with root package name */
            private final String f53720j;

            /* renamed from: k  reason: collision with root package name */
            private final String f53721k;

            /* renamed from: l  reason: collision with root package name */
            private final String f53722l;

            /* renamed from: m  reason: collision with root package name */
            private final String f53723m;

            /* renamed from: n  reason: collision with root package name */
            private final String f53724n;

            /* renamed from: o  reason: collision with root package name */
            private final String f53725o;

            /* renamed from: p  reason: collision with root package name */
            private final String f53726p;

            /* renamed from: q  reason: collision with root package name */
            private final String f53727q;

            /* renamed from: r  reason: collision with root package name */
            private final String f53728r;

            /* renamed from: s  reason: collision with root package name */
            private final String f53729s;

            /* renamed from: t  reason: collision with root package name */
            private final String f53730t;

            /* renamed from: u  reason: collision with root package name */
            private final String f53731u;

            /* renamed from: v  reason: collision with root package name */
            private final String f53732v;

            /* renamed from: w  reason: collision with root package name */
            private final String f53733w;

            /* renamed from: x  reason: collision with root package name */
            private final String f53734x;

            /* renamed from: y  reason: collision with root package name */
            private final String f53735y;

            /* renamed from: z  reason: collision with root package name */
            private final String f53736z;

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
                this.f53711a = title;
                this.f53712b = prompt;
                this.f53713c = disclosure;
                this.f53714d = startButton;
                this.f53715e = capturePageTitle;
                this.f53716f = selfieHintTakePhoto;
                this.f53717g = selfieHintCenterFace;
                this.f53718h = selfieHintFaceTooClose;
                this.f53719i = selfieHintFaceTooFar;
                this.f53720j = selfieHintMultipleFaces;
                this.f53721k = selfieHintFaceIncomplete;
                this.f53722l = selfieHintPoseNotCentered;
                this.f53723m = selfieHintLookLeft;
                this.f53724n = selfieHintLookRight;
                this.f53725o = selfieHintHoldStill;
                this.f53726p = processingTitle;
                this.f53727q = processingDescription;
                this.f53728r = str;
                this.f53729s = str2;
                this.f53730t = str3;
                this.f53731u = str4;
                this.f53732v = str5;
                this.f53733w = str6;
                this.f53734x = str7;
                this.f53735y = str8;
                this.f53736z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f53716f;
            }

            public final String B() {
                return this.f53714d;
            }

            public final String C() {
                return this.f53711a;
            }

            public final String a() {
                return this.f53735y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f53715e;
            }

            public final String d() {
                return this.f53736z;
            }

            public final String e() {
                return this.f53713c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f53711a, aVar.f53711a) && Intrinsics.areEqual(this.f53712b, aVar.f53712b) && Intrinsics.areEqual(this.f53713c, aVar.f53713c) && Intrinsics.areEqual(this.f53714d, aVar.f53714d) && Intrinsics.areEqual(this.f53715e, aVar.f53715e) && Intrinsics.areEqual(this.f53716f, aVar.f53716f) && Intrinsics.areEqual(this.f53717g, aVar.f53717g) && Intrinsics.areEqual(this.f53718h, aVar.f53718h) && Intrinsics.areEqual(this.f53719i, aVar.f53719i) && Intrinsics.areEqual(this.f53720j, aVar.f53720j) && Intrinsics.areEqual(this.f53721k, aVar.f53721k) && Intrinsics.areEqual(this.f53722l, aVar.f53722l) && Intrinsics.areEqual(this.f53723m, aVar.f53723m) && Intrinsics.areEqual(this.f53724n, aVar.f53724n) && Intrinsics.areEqual(this.f53725o, aVar.f53725o) && Intrinsics.areEqual(this.f53726p, aVar.f53726p) && Intrinsics.areEqual(this.f53727q, aVar.f53727q) && Intrinsics.areEqual(this.f53728r, aVar.f53728r) && Intrinsics.areEqual(this.f53729s, aVar.f53729s) && Intrinsics.areEqual(this.f53730t, aVar.f53730t) && Intrinsics.areEqual(this.f53731u, aVar.f53731u) && Intrinsics.areEqual(this.f53732v, aVar.f53732v) && Intrinsics.areEqual(this.f53733w, aVar.f53733w) && Intrinsics.areEqual(this.f53734x, aVar.f53734x) && Intrinsics.areEqual(this.f53735y, aVar.f53735y) && Intrinsics.areEqual(this.f53736z, aVar.f53736z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f53727q;
            }

            public final String g() {
                return this.f53726p;
            }

            public final String h() {
                return this.f53712b;
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
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f53711a.hashCode() * 31) + this.f53712b.hashCode()) * 31) + this.f53713c.hashCode()) * 31) + this.f53714d.hashCode()) * 31) + this.f53715e.hashCode()) * 31) + this.f53716f.hashCode()) * 31) + this.f53717g.hashCode()) * 31) + this.f53718h.hashCode()) * 31) + this.f53719i.hashCode()) * 31) + this.f53720j.hashCode()) * 31) + this.f53721k.hashCode()) * 31) + this.f53722l.hashCode()) * 31) + this.f53723m.hashCode()) * 31) + this.f53724n.hashCode()) * 31) + this.f53725o.hashCode()) * 31) + this.f53726p.hashCode()) * 31) + this.f53727q.hashCode()) * 31;
                String str = this.f53728r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f53729s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f53730t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f53731u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f53732v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f53733w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f53734x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f53735y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f53736z;
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
                return this.f53734x;
            }

            public final String j() {
                return this.f53733w;
            }

            public final String k() {
                return this.f53729s;
            }

            public final String l() {
                return this.f53730t;
            }

            public final String m() {
                return this.f53731u;
            }

            public final String n() {
                return this.f53732v;
            }

            public final String o() {
                return this.f53728r;
            }

            public final String p() {
                return this.f53717g;
            }

            public final String q() {
                return this.f53721k;
            }

            public final String r() {
                return this.f53718h;
            }

            public final String s() {
                return this.f53719i;
            }

            public final String t() {
                return this.f53725o;
            }

            public String toString() {
                String str = this.f53711a;
                String str2 = this.f53712b;
                String str3 = this.f53713c;
                String str4 = this.f53714d;
                String str5 = this.f53715e;
                String str6 = this.f53716f;
                String str7 = this.f53717g;
                String str8 = this.f53718h;
                String str9 = this.f53719i;
                String str10 = this.f53720j;
                String str11 = this.f53721k;
                String str12 = this.f53722l;
                String str13 = this.f53723m;
                String str14 = this.f53724n;
                String str15 = this.f53725o;
                String str16 = this.f53726p;
                String str17 = this.f53727q;
                String str18 = this.f53728r;
                String str19 = this.f53729s;
                String str20 = this.f53730t;
                String str21 = this.f53731u;
                String str22 = this.f53732v;
                String str23 = this.f53733w;
                String str24 = this.f53734x;
                String str25 = this.f53735y;
                String str26 = this.f53736z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f53723m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f53724n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f53720j;
            }

            public final String z() {
                return this.f53722l;
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
            this.f53685a = sessionToken;
            this.f53686b = inquiryId;
            this.f53687c = fromComponent;
            this.f53688d = fromStep;
            this.f53689e = z10;
            this.f53690f = z11;
            this.f53691g = fieldKeySelfie;
            this.f53692h = z12;
            this.f53693i = z13;
            this.f53694j = strings;
            this.f53695k = selfieType;
            this.f53696l = orderedPoses;
            this.f53697m = str;
            this.f53698n = str2;
            this.f53699o = str3;
            this.f53700p = str4;
            this.f53701q = str5;
            this.f53702r = str6;
            this.f53703s = str7;
            this.f53704t = str8;
            this.f53705u = selfieStepStyle;
            this.f53706v = videoCaptureConfig;
            this.f53707w = assetConfig;
            this.f53708x = pendingPageTextVerticalPosition;
            this.f53709y = poseConfigs;
            this.f53710z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f53707w;
        }

        public final boolean b() {
            return this.f53689e;
        }

        public final String c() {
            return this.f53700p;
        }

        public final String d() {
            return this.f53699o;
        }

        public final String e() {
            return this.f53698n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f53685a, bVar.f53685a) && Intrinsics.areEqual(this.f53686b, bVar.f53686b) && Intrinsics.areEqual(this.f53687c, bVar.f53687c) && Intrinsics.areEqual(this.f53688d, bVar.f53688d) && this.f53689e == bVar.f53689e && this.f53690f == bVar.f53690f && Intrinsics.areEqual(this.f53691g, bVar.f53691g) && this.f53692h == bVar.f53692h && this.f53693i == bVar.f53693i && Intrinsics.areEqual(this.f53694j, bVar.f53694j) && Intrinsics.areEqual(this.f53695k, bVar.f53695k) && Intrinsics.areEqual(this.f53696l, bVar.f53696l) && Intrinsics.areEqual(this.f53697m, bVar.f53697m) && Intrinsics.areEqual(this.f53698n, bVar.f53698n) && Intrinsics.areEqual(this.f53699o, bVar.f53699o) && Intrinsics.areEqual(this.f53700p, bVar.f53700p) && Intrinsics.areEqual(this.f53701q, bVar.f53701q) && Intrinsics.areEqual(this.f53702r, bVar.f53702r) && Intrinsics.areEqual(this.f53703s, bVar.f53703s) && Intrinsics.areEqual(this.f53704t, bVar.f53704t) && Intrinsics.areEqual(this.f53705u, bVar.f53705u) && Intrinsics.areEqual(this.f53706v, bVar.f53706v) && Intrinsics.areEqual(this.f53707w, bVar.f53707w) && this.f53708x == bVar.f53708x && Intrinsics.areEqual(this.f53709y, bVar.f53709y) && this.f53710z == bVar.f53710z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f53697m;
        }

        public final boolean g() {
            return this.f53690f;
        }

        public final b0 h() {
            return this.f53710z;
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
            int hashCode9 = ((((((((((((((((((((((this.f53685a.hashCode() * 31) + this.f53686b.hashCode()) * 31) + this.f53687c.hashCode()) * 31) + this.f53688d.hashCode()) * 31) + Boolean.hashCode(this.f53689e)) * 31) + Boolean.hashCode(this.f53690f)) * 31) + this.f53691g.hashCode()) * 31) + Boolean.hashCode(this.f53692h)) * 31) + Boolean.hashCode(this.f53693i)) * 31) + this.f53694j.hashCode()) * 31) + this.f53695k.hashCode()) * 31) + this.f53696l.hashCode()) * 31;
            String str = this.f53697m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f53698n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f53699o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f53700p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f53701q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f53702r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f53703s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f53704t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f53705u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f53706v.hashCode()) * 31) + this.f53707w.hashCode()) * 31) + this.f53708x.hashCode()) * 31) + this.f53709y.hashCode()) * 31) + this.f53710z.hashCode();
        }

        public final String i() {
            return this.f53691g;
        }

        public final String j() {
            return this.f53687c;
        }

        public final String k() {
            return this.f53688d;
        }

        public final String l() {
            return this.f53686b;
        }

        public final String m() {
            return this.f53704t;
        }

        public final String n() {
            return this.f53703s;
        }

        public final String o() {
            return this.f53702r;
        }

        public final String p() {
            return this.f53701q;
        }

        public final List q() {
            return this.f53696l;
        }

        public final PendingPageTextPosition r() {
            return this.f53708x;
        }

        public final s0 s() {
            return this.f53709y;
        }

        public final boolean t() {
            return this.f53692h;
        }

        public String toString() {
            String str = this.f53685a;
            String str2 = this.f53686b;
            String str3 = this.f53687c;
            String str4 = this.f53688d;
            boolean z10 = this.f53689e;
            boolean z11 = this.f53690f;
            String str5 = this.f53691g;
            boolean z12 = this.f53692h;
            boolean z13 = this.f53693i;
            a aVar = this.f53694j;
            d2 d2Var = this.f53695k;
            List list = this.f53696l;
            String str6 = this.f53697m;
            String str7 = this.f53698n;
            String str8 = this.f53699o;
            String str9 = this.f53700p;
            String str10 = this.f53701q;
            String str11 = this.f53702r;
            String str12 = this.f53703s;
            String str13 = this.f53704t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f53705u;
            VideoCaptureConfig videoCaptureConfig = this.f53706v;
            NextStep.Selfie.AssetConfig assetConfig = this.f53707w;
            PendingPageTextPosition pendingPageTextPosition = this.f53708x;
            s0 s0Var = this.f53709y;
            b0 b0Var = this.f53710z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f53695k;
        }

        public final String v() {
            return this.f53685a;
        }

        public final boolean w() {
            return this.f53693i;
        }

        public final a x() {
            return this.f53694j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f53705u;
        }

        public final VideoCaptureConfig z() {
            return this.f53706v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f53737a = new a();

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
            public static final b f53738a = new b();

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

        /* renamed from: wp.x5$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0748c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f53739a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0748c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f53739a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f53739a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0748c) && Intrinsics.areEqual(this.f53739a, ((C0748c) obj).f53739a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f53739a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f53739a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f53740a = new d();

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
            private final String f53741a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53742b;

            /* renamed from: c  reason: collision with root package name */
            private final String f53743c;

            /* renamed from: d  reason: collision with root package name */
            private final String f53744d;

            /* renamed from: e  reason: collision with root package name */
            private final String f53745e;

            /* renamed from: f  reason: collision with root package name */
            private final String f53746f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f53747g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0749a f53748h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53749i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f53750j;

            /* renamed from: k  reason: collision with root package name */
            private final jq.a f53751k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f53752l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f53753m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f53754n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f53755o;

            /* renamed from: p  reason: collision with root package name */
            private final lo.a f53756p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f53757q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f53758r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f53759s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f53760t;

            /* renamed from: u  reason: collision with root package name */
            private final float f53761u;

            /* renamed from: v  reason: collision with root package name */
            private final jo.a f53762v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f53763w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f53764x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f53765y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f53766z;

            /* renamed from: wp.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0749a {

                /* renamed from: wp.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0750a extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53767a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0750a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53767a = overlay;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53767a;
                    }
                }

                /* renamed from: wp.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53768a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f53769b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53770c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f53771d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f53772e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f53768a = overlay;
                        this.f53769b = i10;
                        this.f53770c = z10;
                        this.f53771d = j10;
                        this.f53772e = onError;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53768a;
                    }

                    public final int b() {
                        return this.f53769b;
                    }

                    public final long c() {
                        return this.f53771d;
                    }

                    public final Function1 d() {
                        return this.f53772e;
                    }

                    public final boolean e() {
                        return this.f53770c;
                    }
                }

                /* renamed from: wp.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53773a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53774b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f53775c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f53776d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f53773a = overlay;
                        this.f53774b = finalizeVideo;
                        this.f53775c = onAnimationComplete;
                        this.f53776d = z10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53773a;
                    }

                    public final Function1 b() {
                        return this.f53774b;
                    }

                    public final Function0 c() {
                        return this.f53775c;
                    }

                    public final boolean d() {
                        return this.f53776d;
                    }
                }

                /* renamed from: wp.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0751d extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53777a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53778b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f53779c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f53780d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0751d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f53777a = overlay;
                        this.f53778b = processImage;
                        this.f53779c = onError;
                        this.f53780d = z10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53777a;
                    }

                    public final boolean b() {
                        return this.f53780d;
                    }

                    public final Function1 c() {
                        return this.f53779c;
                    }

                    public final Function1 d() {
                        return this.f53778b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53781a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53782b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f53781a = overlay;
                        this.f53782b = onCaptureClicked;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53781a;
                    }

                    public final Function0 b() {
                        return this.f53782b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53783a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53784b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f53783a = overlay;
                        this.f53784b = poseHintComplete;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53783a;
                    }

                    public final Function0 b() {
                        return this.f53784b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53785a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53786b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f53785a = overlay;
                        this.f53786b = previewReady;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53785a;
                    }

                    public final Function1 b() {
                        return this.f53786b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53787a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53788b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53789c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f53787a = overlay;
                        this.f53788b = onComplete;
                        this.f53789c = z10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53787a;
                    }

                    public final boolean b() {
                        return this.f53789c;
                    }

                    public final Function0 c() {
                        return this.f53788b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53790a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f53791b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53790a = overlay;
                        this.f53791b = j10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53790a;
                    }

                    public final long b() {
                        return this.f53791b;
                    }
                }

                public /* synthetic */ AbstractC0749a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract b a();

                private AbstractC0749a() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b {

                /* renamed from: d  reason: collision with root package name */
                public static final b f53792d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f53793e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f53794i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f53795o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f53796p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f53797q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f53798r;

                static {
                    b[] a10 = a();
                    f53797q = a10;
                    f53798r = hs.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f53792d, f53793e, f53794i, f53795o, f53796p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f53797q.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, String str3, String str4, String str5, String str6, boolean z10, AbstractC0749a mode, StepStyles.SelfieStepStyle selfieStepStyle, boolean z11, jq.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, lo.a videoCaptureMethod, dr.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function1 onCameraFacingModeSelected, float f10, jo.a aVar2, v.b facingMode, boolean z13, boolean z14, Function1 onFlashSet, a1.b bVar, boolean z15) {
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
                this.f53741a = str;
                this.f53742b = str2;
                this.f53743c = str3;
                this.f53744d = str4;
                this.f53745e = str5;
                this.f53746f = str6;
                this.f53747g = z10;
                this.f53748h = mode;
                this.f53749i = selfieStepStyle;
                this.f53750j = z11;
                this.f53751k = navigationState;
                this.f53752l = onBack;
                this.f53753m = onCancel;
                this.f53754n = onCameraError;
                this.f53755o = onPermissionChanged;
                this.f53756p = videoCaptureMethod;
                this.f53757q = z12;
                this.f53758r = cameraXControllerFactory;
                this.f53759s = camera2ManagerFactoryFactory;
                this.f53760t = onCameraFacingModeSelected;
                this.f53761u = f10;
                this.f53762v = aVar2;
                this.f53763w = facingMode;
                this.f53764x = z13;
                this.f53765y = z14;
                this.f53766z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f53747g;
            }

            public final boolean B() {
                return this.f53764x;
            }

            public final boolean C() {
                return this.f53765y;
            }

            public final String a() {
                return this.f53744d;
            }

            public final jo.a b() {
                return this.f53762v;
            }

            public final g.a c() {
                return this.f53759s;
            }

            public final z.a d() {
                return this.f53758r;
            }

            public final String e() {
                return this.f53745e;
            }

            public final String f() {
                return this.f53743c;
            }

            public final v.b g() {
                return this.f53763w;
            }

            public final String h() {
                return this.f53742b;
            }

            public final AbstractC0749a i() {
                return this.f53748h;
            }

            public final jq.a j() {
                return this.f53751k;
            }

            public final Function0 k() {
                return this.f53752l;
            }

            public final Function1 l() {
                return this.f53754n;
            }

            public final Function1 m() {
                return this.f53760t;
            }

            public final Function0 n() {
                return this.f53753m;
            }

            public final Function1 o() {
                return this.f53766z;
            }

            public final Function0 p() {
                return this.f53755o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f53761u;
            }

            public final String s() {
                return this.f53746f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f53750j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f53749i;
            }

            public final String w() {
                return this.f53741a;
            }

            public final lo.a x() {
                return this.f53756p;
            }

            public final dr.a y() {
                return null;
            }

            public final boolean z() {
                return this.f53757q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f53799a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53800b;

            /* renamed from: c  reason: collision with root package name */
            private final String f53801c;

            /* renamed from: d  reason: collision with root package name */
            private final String f53802d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53803e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f53804f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f53805g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f53806h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f53807i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f53808j;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String title, String prompt, String disclosure, String start, StepStyles.SelfieStepStyle selfieStepStyle, RemoteImage remoteImage, jq.a navigationState, Function0 onClick, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(start, "start");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f53799a = title;
                this.f53800b = prompt;
                this.f53801c = disclosure;
                this.f53802d = start;
                this.f53803e = selfieStepStyle;
                this.f53804f = remoteImage;
                this.f53805g = navigationState;
                this.f53806h = onClick;
                this.f53807i = onBack;
                this.f53808j = onCancel;
            }

            public final String a() {
                return this.f53801c;
            }

            public final RemoteImage b() {
                return this.f53804f;
            }

            public final jq.a c() {
                return this.f53805g;
            }

            public final Function0 d() {
                return this.f53807i;
            }

            public final Function0 e() {
                return this.f53808j;
            }

            public final Function0 f() {
                return this.f53806h;
            }

            public final String g() {
                return this.f53800b;
            }

            public final String h() {
                return this.f53802d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f53803e;
            }

            public final String j() {
                return this.f53799a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f53809a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53810b;

            /* renamed from: c  reason: collision with root package name */
            private final b f53811c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53812d;

            /* renamed from: e  reason: collision with root package name */
            private final a f53813e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f53814f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f53815g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f53816h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f53817i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f53818j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f53819k;

            /* renamed from: l  reason: collision with root package name */
            private final lo.a f53820l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f53821m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f53822n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f53823o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f53824a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f53825b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f53824a = remoteImage;
                    this.f53825b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f53824a;
                }

                public final RemoteImage b() {
                    return this.f53825b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f53824a, aVar.f53824a) && Intrinsics.areEqual(this.f53825b, aVar.f53825b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f53824a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f53825b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f53824a;
                    RemoteImage remoteImage2 = this.f53825b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0755c f53826a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f53827b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53826a = overlay;
                        this.f53827b = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53826a;
                    }

                    public boolean b() {
                        return this.f53827b;
                    }
                }

                /* renamed from: wp.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0752b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f53828a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f53829b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f53830c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0755c f53831d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f53832e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f53833f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0752b(int i10, boolean z10, long j10, EnumC0755c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f53828a = i10;
                        this.f53829b = z10;
                        this.f53830c = j10;
                        this.f53831d = overlay;
                        this.f53832e = z11;
                        this.f53833f = onError;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53831d;
                    }

                    public final int b() {
                        return this.f53828a;
                    }

                    public final long c() {
                        return this.f53830c;
                    }

                    public final Function1 d() {
                        return this.f53833f;
                    }

                    public final boolean e() {
                        return this.f53829b;
                    }

                    public boolean f() {
                        return this.f53832e;
                    }
                }

                /* renamed from: wp.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0753c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f53834a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53835b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53836c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0755c f53837d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f53838e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0753c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0755c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53834a = finalizeVideo;
                        this.f53835b = onAnimationComplete;
                        this.f53836c = z10;
                        this.f53837d = overlay;
                        this.f53838e = z11;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53837d;
                    }

                    public final Function1 b() {
                        return this.f53834a;
                    }

                    public final Function0 c() {
                        return this.f53835b;
                    }

                    public boolean d() {
                        return this.f53838e;
                    }

                    public final boolean e() {
                        return this.f53836c;
                    }
                }

                /* renamed from: wp.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0754d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f53839a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53840b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53841c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0755c f53842d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f53843e;

                    public /* synthetic */ C0754d(Function1 function1, Function1 function12, boolean z10, EnumC0755c enumC0755c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0755c, z11);
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53842d;
                    }

                    public final boolean b() {
                        return this.f53841c;
                    }

                    public final Function1 c() {
                        return this.f53840b;
                    }

                    public final Function1 d() {
                        return this.f53839a;
                    }

                    public boolean e() {
                        return this.f53843e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0754d(Function1 processImage, Function1 onError, boolean z10, EnumC0755c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53839a = processImage;
                        this.f53840b = onError;
                        this.f53841c = z10;
                        this.f53842d = overlay;
                        this.f53843e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f53844a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0755c f53845b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53846c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53844a = onCaptureClicked;
                        this.f53845b = overlay;
                        this.f53846c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53845b;
                    }

                    public final Function0 b() {
                        return this.f53844a;
                    }

                    public boolean c() {
                        return this.f53846c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f53847a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0755c f53848b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53849c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53847a = poseHintComplete;
                        this.f53848b = overlay;
                        this.f53849c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53848b;
                    }

                    public final Function0 b() {
                        return this.f53847a;
                    }

                    public boolean c() {
                        return this.f53849c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f53850a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0755c f53851b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53852c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53850a = previewReady;
                        this.f53851b = overlay;
                        this.f53852c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53851b;
                    }

                    public final Function1 b() {
                        return this.f53850a;
                    }

                    public boolean c() {
                        return this.f53852c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f53853a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f53854b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0755c f53855c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f53856d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0755c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53853a = onComplete;
                        this.f53854b = z10;
                        this.f53855c = overlay;
                        this.f53856d = z11;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53855c;
                    }

                    public final boolean b() {
                        return this.f53854b;
                    }

                    public final Function0 c() {
                        return this.f53853a;
                    }

                    public boolean d() {
                        return this.f53856d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0755c f53857a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f53858b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53859c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0755c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53857a = overlay;
                        this.f53858b = j10;
                        this.f53859c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53857a;
                    }

                    public final long b() {
                        return this.f53858b;
                    }
                }

                public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract EnumC0755c a();

                private b() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* renamed from: wp.x5$d$c$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class EnumC0755c {

                /* renamed from: d  reason: collision with root package name */
                public static final EnumC0755c f53860d = new EnumC0755c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0755c f53861e = new EnumC0755c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0755c f53862i = new EnumC0755c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0755c f53863o = new EnumC0755c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0755c f53864p = new EnumC0755c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0755c f53865q = new EnumC0755c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0755c f53866r = new EnumC0755c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0755c f53867s = new EnumC0755c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0755c f53868t = new EnumC0755c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0755c f53869u = new EnumC0755c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0755c f53870v = new EnumC0755c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0755c f53871w = new EnumC0755c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0755c[] f53872x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f53873y;

                static {
                    EnumC0755c[] a10 = a();
                    f53872x = a10;
                    f53873y = hs.a.a(a10);
                }

                private EnumC0755c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0755c[] a() {
                    return new EnumC0755c[]{f53860d, f53861e, f53862i, f53863o, f53864p, f53865q, f53866r, f53867s, f53868t, f53869u, f53870v, f53871w};
                }

                public static EnumC0755c valueOf(String str) {
                    return (EnumC0755c) Enum.valueOf(EnumC0755c.class, str);
                }

                public static EnumC0755c[] values() {
                    return (EnumC0755c[]) f53872x.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, String str2, b mode, StepStyles.SelfieStepStyle selfieStepStyle, a assetOverrides, boolean z10, jq.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, lo.a videoCaptureMethod, dr.a aVar, boolean z11, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
                this.f53809a = str;
                this.f53810b = str2;
                this.f53811c = mode;
                this.f53812d = selfieStepStyle;
                this.f53813e = assetOverrides;
                this.f53814f = z10;
                this.f53815g = navigationState;
                this.f53816h = onBack;
                this.f53817i = onCancel;
                this.f53818j = onCameraError;
                this.f53819k = onPermissionChanged;
                this.f53820l = videoCaptureMethod;
                this.f53821m = z11;
                this.f53822n = cameraXControllerFactory;
                this.f53823o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f53813e;
            }

            public final g.a b() {
                return this.f53823o;
            }

            public final z.a c() {
                return this.f53822n;
            }

            public final String d() {
                return this.f53810b;
            }

            public final b e() {
                return this.f53811c;
            }

            public final jq.a f() {
                return this.f53815g;
            }

            public final Function0 g() {
                return this.f53816h;
            }

            public final Function1 h() {
                return this.f53818j;
            }

            public final Function0 i() {
                return this.f53817i;
            }

            public final Function0 j() {
                return this.f53819k;
            }

            public final boolean k() {
                return this.f53814f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f53812d;
            }

            public final String m() {
                return this.f53809a;
            }

            public final lo.a n() {
                return this.f53820l;
            }

            public final dr.a o() {
                return null;
            }

            public final boolean p() {
                return this.f53821m;
            }
        }

        /* renamed from: wp.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0756d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f53874a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0756d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f53874a = rendered;
            }

            public final Function0 a() {
                return this.f53874a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f53875a;

            /* renamed from: b  reason: collision with root package name */
            private final List f53876b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53877c;

            /* renamed from: d  reason: collision with root package name */
            private final jq.a f53878d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f53879e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f53880f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f53881g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f53882h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f53883a;

                /* renamed from: b  reason: collision with root package name */
                private final String f53884b;

                /* renamed from: c  reason: collision with root package name */
                private final String f53885c;

                /* renamed from: d  reason: collision with root package name */
                private final String f53886d;

                /* renamed from: e  reason: collision with root package name */
                private final String f53887e;

                /* renamed from: f  reason: collision with root package name */
                private final String f53888f;

                /* renamed from: g  reason: collision with root package name */
                private final String f53889g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f53883a = title;
                    this.f53884b = description;
                    this.f53885c = selfieLabelFront;
                    this.f53886d = selfieLabelLeft;
                    this.f53887e = selfieLabelRight;
                    this.f53888f = submitButton;
                    this.f53889g = retakeButton;
                }

                public final String a() {
                    return this.f53884b;
                }

                public final String b() {
                    return this.f53889g;
                }

                public final String c() {
                    return this.f53885c;
                }

                public final String d() {
                    return this.f53886d;
                }

                public final String e() {
                    return this.f53887e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f53883a, aVar.f53883a) && Intrinsics.areEqual(this.f53884b, aVar.f53884b) && Intrinsics.areEqual(this.f53885c, aVar.f53885c) && Intrinsics.areEqual(this.f53886d, aVar.f53886d) && Intrinsics.areEqual(this.f53887e, aVar.f53887e) && Intrinsics.areEqual(this.f53888f, aVar.f53888f) && Intrinsics.areEqual(this.f53889g, aVar.f53889g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f53888f;
                }

                public final String g() {
                    return this.f53883a;
                }

                public int hashCode() {
                    return (((((((((((this.f53883a.hashCode() * 31) + this.f53884b.hashCode()) * 31) + this.f53885c.hashCode()) * 31) + this.f53886d.hashCode()) * 31) + this.f53887e.hashCode()) * 31) + this.f53888f.hashCode()) * 31) + this.f53889g.hashCode();
                }

                public String toString() {
                    String str = this.f53883a;
                    String str2 = this.f53884b;
                    String str3 = this.f53885c;
                    String str4 = this.f53886d;
                    String str5 = this.f53887e;
                    String str6 = this.f53888f;
                    String str7 = this.f53889g;
                    return "Strings(title=" + str + ", description=" + str2 + ", selfieLabelFront=" + str3 + ", selfieLabelLeft=" + str4 + ", selfieLabelRight=" + str5 + ", submitButton=" + str6 + ", retakeButton=" + str7 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(a strings, List selfies, StepStyles.SelfieStepStyle selfieStepStyle, jq.a navigationState, Function0 onUsePhotos, Function0 onRetakePhotos, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(strings, "strings");
                Intrinsics.checkNotNullParameter(selfies, "selfies");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onUsePhotos, "onUsePhotos");
                Intrinsics.checkNotNullParameter(onRetakePhotos, "onRetakePhotos");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f53875a = strings;
                this.f53876b = selfies;
                this.f53877c = selfieStepStyle;
                this.f53878d = navigationState;
                this.f53879e = onUsePhotos;
                this.f53880f = onRetakePhotos;
                this.f53881g = onBack;
                this.f53882h = onCancel;
            }

            public final jq.a a() {
                return this.f53878d;
            }

            public final Function0 b() {
                return this.f53881g;
            }

            public final Function0 c() {
                return this.f53882h;
            }

            public final Function0 d() {
                return this.f53880f;
            }

            public final Function0 e() {
                return this.f53879e;
            }

            public final List f() {
                return this.f53876b;
            }

            public final a g() {
                return this.f53875a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f53877c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f53890a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53891b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f53892c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53893d;

            /* renamed from: e  reason: collision with root package name */
            private final jq.a f53894e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f53895f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f53896g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f53897h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, jq.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f53890a = title;
                this.f53891b = description;
                this.f53892c = pendingPageTextVerticalPosition;
                this.f53893d = selfieStepStyle;
                this.f53894e = navigationState;
                this.f53895f = onBack;
                this.f53896g = onCancel;
                this.f53897h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f53897h;
            }

            public final String b() {
                return this.f53891b;
            }

            public final jq.a c() {
                return this.f53894e;
            }

            public final Function0 d() {
                return this.f53895f;
            }

            public final Function0 e() {
                return this.f53896g;
            }

            public final PendingPageTextPosition f() {
                return this.f53892c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f53893d;
            }

            public final String h() {
                return this.f53890a;
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
        public static final /* synthetic */ int[] f53898a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f53899b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f53900c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f52971e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f52972i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f52970d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f53898a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f53106e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f53107i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f53105d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f53899b = iArr2;
            int[] iArr3 = new int[jo.b.values().length];
            try {
                iArr3[jo.b.f31207d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[jo.b.f31208e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[jo.b.f31209i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[jo.b.f31210o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[jo.b.f31211p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[jo.b.f31212q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[jo.b.f31213r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[jo.b.f31214s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[jo.b.f31215t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f53900c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53901d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f53901d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.m mVar = fo.m.f24047a;
                Context context = x5.this.f53674a;
                this.f53901d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            x5.V0(x5.this);
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
        int f53903d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53904e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53905i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53904e = aVar;
            this.f53905i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f53904e, this.f53905i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f53903d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f53904e.c();
                final x5 x5Var = this.f53905i;
                d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.y5
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = x5.g.k(x5.this, (r.c) obj2);
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
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53906d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53907e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53908i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53907e = aVar;
            this.f53908i = x5Var;
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
                return Unit.f31987a;
            }
            cVar.e(x1.a.t(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f53582o, 8191, null));
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f53907e, this.f53908i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53906d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53906d = 1;
                if (ys.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53907e.c();
            d10 = en.z.d(this.f53908i, null, new Function1() { // from class: wp.z5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.h.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31987a;
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
        int f53909d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53910e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53911i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53910e = aVar;
            this.f53911i = x5Var;
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
                return Unit.f31987a;
            }
            cVar.e(x1.a.t(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f53580e, 8191, null));
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f53910e, this.f53911i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53909d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53909d = 1;
                if (ys.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53910e.c();
            d10 = en.z.d(this.f53911i, null, new Function1() { // from class: wp.a6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.i.k((r.c) obj2);
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

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53912d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53913e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53914i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f53915o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f53916p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f53913e = aVar;
            this.f53914i = x5Var;
            this.f53915o = cVar;
            this.f53916p = bVar;
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
                return Unit.f31987a;
            }
            int v10 = cVar4.v();
            if (v10 > 1) {
                cVar2.e(x1.c.t(cVar4, v10 - 1, cVar4.x(), 0L, null, 0L, 0.0f, null, null, null, null, false, null, false, 8188, null));
            } else {
                jo.b x10 = cVar4.x();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                fo.v b10 = cVar4.b();
                cVar2.e(new x1.a(x10, cVar.w(), cVar.u(), null, c11, i10, false, cVar.l(), b10, m6.i(cVar2, false), bVar.s(), cVar.p(), cVar.k(), null, 8264, null));
            }
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f53913e, this.f53914i, this.f53915o, this.f53916p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53912d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53912d = 1;
                if (ys.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53913e.c();
            x5 x5Var = this.f53914i;
            final x1.c cVar = this.f53915o;
            final b bVar = this.f53916p;
            d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.b6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.j.k(x1.c.this, bVar, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53917d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53918e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53919i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53918e = aVar;
            this.f53919i = x5Var;
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
                return Unit.f31987a;
            }
            int u10 = dVar2.u();
            if (u10 >= 1) {
                cVar.e(x1.d.t(dVar2, u10 - 1, dVar2.v(), null, null, 0L, false, 0L, null, null, null, false, 2044, null));
            }
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(this.f53918e, this.f53919i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53917d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53917d = 1;
                if (ys.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53918e.c();
            d10 = en.z.d(this.f53919i, null, new Function1() { // from class: wp.c6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.k.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53920d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f53921e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f53922i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f53923o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53921e = booleanRef;
            this.f53922i = aVar;
            this.f53923o = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(Ref.BooleanRef booleanRef, r.c cVar) {
            x1 x1Var = (x1) cVar.c();
            if ((x1Var instanceof a0) && ((a0) x1Var).j()) {
                cVar.e(x1Var);
                booleanRef.element = false;
            }
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new l(this.f53921e, this.f53922i, this.f53923o, continuation);
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r5.f53920d
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
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f53921e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f53920d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ys.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                en.k$a r6 = r5.f53922i
                en.h r6 = r6.c()
                wp.x5 r1 = r5.f53923o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f53921e
                wp.d6 r4 = new wp.d6
                r4.<init>()
                r3 = 0
                en.r r1 = en.w.f(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f31987a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public x5(Context applicationContext, c.a submitVerificationWorker, b.a webRtcWorkerFactory, b1.b selfieAnalyzeWorker, rp.c1 permissionRequestWorkflow, zp.j localVideoCaptureRenderer, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, ko.a cameraStatsManager, jq.b navigationStateManager, fq.c externalEventLogger) {
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
        this.f53674a = applicationContext;
        this.f53675b = submitVerificationWorker;
        this.f53676c = webRtcWorkerFactory;
        this.f53677d = selfieAnalyzeWorker;
        this.f53678e = permissionRequestWorkflow;
        this.f53679f = localVideoCaptureRenderer;
        this.f53680g = cameraXControllerFactory;
        this.f53681h = camera2ManagerFactoryFactory;
        this.f53682i = cameraStatsManager;
        this.f53683j = navigationStateManager;
        this.f53684k = externalEventLogger;
        dr.c.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A2(x5 x5Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, c.d.f53740a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B2(x5 x5Var, k.a aVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, new c.C0748c(((c.b.a) bVar).a()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean v10 = oVar.v();
        if (!oVar.u() && Y0(bVar) && bq.f.f(this.f53674a) && bVar.z().b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        String c10 = bVar.x().c();
        d.c.b.g gVar = new d.c.b.g(new Function1() { // from class: wp.i4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J2;
                J2 = x5.J2(k.a.this, this, bVar, oVar, currentTimeMillis, (fo.v) obj);
                return J2;
            }
        }, d.c.EnumC0755c.f53860d, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53680g;
        g.a aVar3 = this.f53681h;
        v.b p10 = oVar.p();
        boolean k11 = oVar.k();
        if (v10 && !z10) {
            z11 = false;
        } else {
            z11 = true;
        }
        d f10 = j2.f(bVar, aVar, null, c10, null, null, false, gVar, v11, t10, b10, new Function0() { // from class: wp.j4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L2;
                L2 = x5.L2(k.a.this, this);
                return L2;
            }
        }, new Function0() { // from class: wp.k4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit M2;
                M2 = x5.M2(x5.this, aVar);
                return M2;
            }
        }, k10, new Function0() { // from class: wp.l4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N2;
                N2 = x5.N2(x5.this, aVar, bVar);
                return N2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, p10, k11, false, z11, PointerEventHelper.X_FLAG_SUPPORTS_HOVER, null);
        if (!v10) {
            String str = "";
            rp.d0 d0Var = rp.d0.f47574d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f53674a.getString(tp.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f53674a;
            String string = context.getString(tp.e.C, bq.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return rp.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f53678e, bVar.y(), null, new Function1() { // from class: wp.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r F2;
                    F2 = x5.F2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return F2;
                }
            }, 19976, null);
        }
        String str2 = "";
        if (z10) {
            rp.d0 d0Var2 = rp.d0.f47575e;
            String o10 = bVar.o();
            if (o10 == null) {
                o10 = this.f53674a.getString(tp.e.M);
                Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
            }
            Context context2 = this.f53674a;
            String string2 = context2.getString(tp.e.L, bq.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            rp.c1 c1Var = this.f53678e;
            String p11 = bVar.p();
            if (p11 != null) {
                str2 = p11;
            }
            return rp.l1.e(f10, aVar, true, d0Var2, false, str2, o10, string2, n10, m10, null, null, null, c1Var, bVar.y(), "video_capture_mic_permission_request", new Function1() { // from class: wp.o4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r H2;
                    H2 = x5.H2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return H2;
                }
            }, 3592, null);
        }
        return f10;
    }

    private final d F1(final b bVar, x1.f fVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: wp.a4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit G1;
                G1 = x5.G1();
                return G1;
            }
        }, false, d.c.EnumC0755c.f53869u, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: wp.b4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit H1;
                H1 = x5.H1(k.a.this, this);
                return H1;
            }
        }, new Function0() { // from class: wp.d4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I1;
                I1 = x5.I1(x5.this, aVar);
                return I1;
            }
        }, k10, new Function0() { // from class: wp.e4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit J1;
                J1 = x5.J1(x5.this, aVar, bVar);
                return J1;
            }
        }, l32, null, bVar.z().b(), this.f53680g, this.f53681h, 0.0f, null, fVar.p(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r F2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.l5
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == rp.g1.f47600d) {
            action.e(x1.o.t(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f53737a);
        } else {
            x5Var.e3(aVar2, new c.C0748c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r H2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.b5
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
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == rp.g1.f47600d) {
            action.e(x1.o.t(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f53737a);
        } else {
            x5Var.e3(aVar2, new c.C0748c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J2(k.a aVar, final x5 x5Var, final b bVar, final x1.o oVar, final long j10, final fo.v cameraProperties) {
        en.r d10;
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.c5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K2;
                K2 = x5.K2(x5.this, bVar, oVar, cameraProperties, j10, (r.c) obj);
                return K2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final d K1(final b bVar, final x1.h hVar, final k.a aVar) {
        return new d.C0756d(new Function0() { // from class: wp.c4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L1;
                L1 = x5.L1(k.a.this, this, bVar, hVar);
                return L1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K2(x5 x5Var, b bVar, x1.o oVar, fo.v vVar, long j10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (x5Var.l3(bVar) == lo.a.f35948d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.p(), oVar.k()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.p(), oVar.k(), 67, null));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(k.a aVar, x5 x5Var, final b bVar, final x1.h hVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.m5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M1;
                M1 = x5.M1(x5.b.this, hVar, (r.c) obj);
                return M1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(b bVar, x1.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, hVar.p(), false, 163, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f53674a.getString(tp.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f53674a.getString(tp.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f53674a.getString(tp.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f53674a.getString(tp.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f53674a.getString(tp.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f53674a.getString(tp.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f53674a.getString(tp.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.s(), bVar.y(), this.f53683j.b(), new Function0() { // from class: wp.i3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit O1;
                O1 = x5.O1(k.a.this, this, iVar);
                return O1;
            }
        }, new Function0() { // from class: wp.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Q1;
                Q1 = x5.Q1(k.a.this, this, bVar, iVar);
                return Q1;
            }
        }, new Function0() { // from class: wp.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit S1;
                S1 = x5.S1(k.a.this, this);
                return S1;
            }
        }, new Function0() { // from class: wp.l3
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
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(k.a aVar, x5 x5Var, final x1.i iVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.t5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit P1;
                P1 = x5.P1(x1.i.this, (r.c) obj);
                return P1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        en.w.l(aVar, this.f53676c.a(bVar.z().c()), Reflection.typeOf(cr.b.class), "", new Function1() { // from class: wp.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0274b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0755c.f53860d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53680g;
        g.a aVar3 = this.f53681h;
        return j2.f(bVar, aVar, pVar.e(), c10, null, null, false, iVar, v10, t10, b10, new Function0() { // from class: wp.v2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T2;
                T2 = x5.T2(k.a.this, this);
                return T2;
            }
        }, new Function0() { // from class: wp.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U2;
                U2 = x5.U2(x5.this, aVar);
                return U2;
            }
        }, k10, new Function0() { // from class: wp.r3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V2;
                V2 = x5.V2(x5.this, aVar, bVar);
                return V2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, pVar.p(), pVar.k(), false, false, 50331648, null);
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
            return Unit.f31987a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.q(), iVar3.t(), iVar3.b(), iVar3.l(), m6.i(action, true), iVar.p()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0274b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final ho.m b10 = ho.j.b(x5Var.f53674a, ho.n.f27613d);
        if (it instanceof b.AbstractC0274b.C0275b) {
            d11 = en.z.d(x5Var, null, new Function1() { // from class: wp.p5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q2;
                    Q2 = x5.Q2(x5.this, b10, it, pVar, bVar, aVar, (r.c) obj);
                    return Q2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.AbstractC0274b.a) {
            d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.q5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R2;
                    R2 = x5.R2(k.a.this, x5Var, pVar, (r.c) obj);
                    return R2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(k.a aVar, x5 x5Var, final b bVar, final x1.i iVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.w4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R1;
                R1 = x5.R1(x5.b.this, iVar, (r.c) obj);
                return R1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q2(x5 x5Var, ho.m mVar, b.AbstractC0274b abstractC0274b, x1.p pVar, b bVar, k.a aVar, r.c action) {
        ho.l b10;
        ho.l b11;
        ho.l b12;
        Size f10;
        ho.l b13;
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R1(b bVar, x1.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, iVar.p(), false, 163, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R2(k.a aVar, final x5 x5Var, final x1.p pVar, r.c action) {
        en.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.v5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S2;
                S2 = x5.S2(x5.this, pVar, (r.c) obj);
                return S2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S2(x5 x5Var, x1.p pVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        action.e(new x1.h(false, false, m6.i(action, false), pVar.p(), 3, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    private final d.b U1(final b bVar, final x1.j jVar, final k.a aVar) {
        String C = bVar.x().C();
        String h10 = bVar.x().h();
        String e10 = bVar.x().e();
        String B = bVar.x().B();
        jq.a b10 = this.f53683j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f53057a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f53059a) && !Intrinsics.areEqual(u10, d2.b.f53058a)) {
            throw new as.p();
        } else {
            NextStep.Selfie.AssetConfig.PromptPage promptPage2 = bVar.a().getPromptPage();
            if (promptPage2 != null) {
                remoteImage = promptPage2.getSelfiePictograph();
            }
        }
        return new d.b(C, h10, e10, B, bVar.y(), remoteImage, b10, new Function0() { // from class: wp.m3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V1;
                V1 = x5.V1(k.a.this, this, bVar, jVar);
                return V1;
            }
        }, new Function0() { // from class: wp.n3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X1;
                X1 = x5.X1(k.a.this, this);
                return X1;
            }
        }, new Function0() { // from class: wp.o3
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
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    public static final /* synthetic */ dr.a V0(x5 x5Var) {
        x5Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(k.a aVar, x5 x5Var, final b bVar, final x1.j jVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.h5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W1;
                W1 = x5.W1(x5.b.this, jVar, (r.c) obj);
                return W1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(b bVar, x1.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.j(action, false, 1, null), bVar.q(), bVar.s(), false, jVar.p(), false, 163, null));
        return Unit.f31987a;
    }

    private final d W2(final b bVar, final x1.q qVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: wp.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0755c.f53871w, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: wp.x3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Z2;
                Z2 = x5.Z2(k.a.this, this);
                return Z2;
            }
        }, new Function0() { // from class: wp.y3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a32;
                a32 = x5.a3(x5.this, aVar);
                return a32;
            }
        }, k10, new Function0() { // from class: wp.z3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit b32;
                b32 = x5.b3(x5.this, aVar, bVar);
                return b32;
            }
        }, l32, null, bVar.z().b(), this.f53680g, this.f53681h, 0.0f, null, qVar.p(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X2(k.a aVar, x5 x5Var, final x1.q qVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.f5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Y2;
                Y2 = x5.Y2(x1.q.this, (r.c) obj);
                return Y2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f53674a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.q(), qVar.s(), qVar.b(), qVar.l(), m6.i(action, false)));
        return Unit.f31987a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.q(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.l(), x1Var.o(), ((b) cVar.b()).s(), x1Var.p(), zVar2.k());
        } else if (l3((b) cVar.b()) == lo.a.f35949e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.q(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.l(), x1Var.o(), x1Var.p(), 12, null);
        } else if (l3((b) cVar.b()) == lo.a.f35948d) {
            a0 a0Var3 = (a0) x1Var;
            w10 = new x1.f(CollectionsKt.M0(x1Var.q(), a1Var), a0Var3.b(), a0Var3.l(), x1Var.o(), x1Var.p());
        } else {
            a0 a0Var4 = (a0) x1Var;
            w10 = m6.w(cVar, CollectionsKt.M0(x1Var.q(), a1Var), null, a0Var4.b(), a0Var4.l(), x1Var.o());
        }
        return new x1.b(w10, zVar.e(), x1Var.o(), x1Var.p(), ((z) x1Var).k());
    }

    private final d Z1(final b bVar, final x1.k kVar, final k.a aVar) {
        h1 h1Var;
        String u10;
        d.c.EnumC0755c enumC0755c;
        int i10 = e.f53898a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new as.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f53107i;
        } else {
            h1Var = h1.f53106e;
        }
        int[] iArr = e.f53899b;
        int i11 = iArr[h1Var.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    u10 = bVar.x().z();
                } else {
                    throw new as.p();
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
                    enumC0755c = d.c.EnumC0755c.f53861e;
                } else {
                    throw new as.p();
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53866r;
            }
        } else {
            enumC0755c = d.c.EnumC0755c.f53863o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: wp.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53680g;
        g.a aVar3 = this.f53681h;
        boolean a10 = kVar.a();
        return j2.f(bVar, aVar, kVar.e(), c10, str, null, a10, fVar, v10, t10, b10, new Function0() { // from class: wp.n2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c22;
                c22 = x5.c2(k.a.this, this);
                return c22;
            }
        }, new Function0() { // from class: wp.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d22;
                d22 = x5.d2(x5.this, aVar);
                return d22;
            }
        }, k10, new Function0() { // from class: wp.p2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit e22;
                e22 = x5.e2(x5.this, aVar, bVar);
                return e22;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, kVar.p(), kVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(k.a aVar, x5 x5Var, final x1.k kVar, final b bVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.s5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b22;
                b22 = x5.b2(x1.k.this, bVar, (r.c) obj);
                return b22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    private final d b1(final b bVar, final x1.a aVar, final k.a aVar2) {
        x1.g gVar;
        String str;
        String str2;
        d.c.EnumC0755c enumC0755c;
        d.c.b aVar3;
        boolean z10;
        boolean z11;
        final a1.b e10 = aVar.e();
        if (aVar.k()) {
            if (aVar.v() == x1.g.f53579d) {
                gVar = x1.g.f53580e;
            } else {
                gVar = aVar.v();
            }
        } else {
            gVar = x1.g.f53579d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f53677d;
            if (gVar != x1.g.f53579d && gVar != x1.g.f53582o) {
                z11 = false;
            } else {
                z11 = true;
            }
            en.w.l(aVar2, bVar2.a(e10, z11), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.p3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r c12;
                    c12 = x5.c1(x5.this, aVar, aVar2, (b1.c) obj);
                    return c12;
                }
            });
        }
        jo.b x10 = aVar.x();
        if (x10 != null) {
            str = i3(x10, bVar.x(), aVar.e());
        } else {
            str = null;
        }
        if (e10 == a1.b.f52971e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f52972i) {
            str2 = bVar.x().w();
        } else if (aVar.x() != null) {
            str2 = str;
        } else if (e10 == a1.b.f52970d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f53898a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0755c = d.c.EnumC0755c.f53861e;
                } else {
                    throw new as.p();
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53867s;
            }
        } else {
            enumC0755c = d.c.EnumC0755c.f53864p;
        }
        d.c.EnumC0755c enumC0755c2 = enumC0755c;
        if (aVar.j() && gVar != x1.g.f53581i && gVar != x1.g.f53582o) {
            aVar3 = new d.c.b.C0754d(new Function1() { // from class: wp.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = x5.e1(a1.b.this, aVar2, this, aVar, (String) obj);
                    return e12;
                }
            }, new Function1() { // from class: wp.s3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = x5.g1(x5.this, aVar2, (Throwable) obj);
                    return g12;
                }
            }, false, enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f53581i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f53582o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar2);
        lo.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f53680g;
        g.a aVar5 = this.f53681h;
        boolean a10 = aVar.a();
        a1.b e11 = aVar.e();
        float w10 = aVar.w();
        jo.a u10 = aVar.u();
        v.b p10 = aVar.p();
        boolean k11 = aVar.k();
        if (aVar.v() != gVar2 && aVar.v() != gVar3) {
            z10 = false;
        } else {
            z10 = true;
        }
        return j2.f(bVar, aVar2, e11, c10, str4, str3, a10, aVar3, v10, t10, b10, new Function0() { // from class: wp.t3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h12;
                h12 = x5.h1(k.a.this, this);
                return h12;
            }
        }, new Function0() { // from class: wp.u3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i12;
                i12 = x5.i1(x5.this, aVar2);
                return i12;
            }
        }, k10, new Function0() { // from class: wp.v3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j12;
                j12 = x5.j1(x5.this, aVar2, bVar);
                return j12;
            }
        }, l32, null, b11, aVar4, aVar5, w10, u10, p10, k11, z10, false, 33554432, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b2(x1.k kVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List c10 = kVar.c();
        action.e(new x1.a(null, 0.0f, null, kVar.q(), c10, System.currentTimeMillis(), kVar.a(), kVar.l(), kVar.b(), m6.i(action, false), bVar.s(), kVar.p(), kVar.k(), null, 8193, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r c1(final x5 x5Var, final x1.a aVar, final k.a aVar2, final b1.c output) {
        en.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.r5
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
        return Unit.f31987a;
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
            return Unit.f31987a;
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
                action.e(x1.a.t(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f53581i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0739c) {
            b1.c.C0739c c0739c = (b1.c.C0739c) cVar;
            if (c0739c.b() == jo.b.f31214s) {
                action.e(x1.a.t(aVar4, null, c0739c.c(), c0739c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.t(aVar4, c0739c.b(), c0739c.c(), c0739c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new as.p();
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    private final void d3(k.a aVar, Throwable th2) {
        String message;
        String message2 = th2.getMessage();
        if (message2 != null && StringsKt.V(message2, "ENOSPC", false, 2, null)) {
            e3(aVar, new c.C0748c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        } else if (th2 instanceof x.o0) {
            Throwable cause = th2.getCause();
            if (cause != null && (message = cause.getMessage()) != null && StringsKt.V(message, "ENOSPC", false, 2, null)) {
                e3(aVar, new c.C0748c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
                return;
            }
            String canonicalName = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0748c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName)));
        } else {
            String canonicalName2 = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0748c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.a aVar2, String absolutePath) {
        en.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f52966i, bVar, System.currentTimeMillis());
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.i5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f12;
                f12 = x5.f1(x5.this, aVar2, cVar, (r.c) obj);
                return f12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    private final void e3(k.a aVar, final c cVar) {
        en.r d10;
        if (!(cVar instanceof c.d) && !(cVar instanceof c.a)) {
            boolean z10 = cVar instanceof c.C0748c;
        }
        en.h c10 = aVar.c();
        d10 = en.z.d(this, null, new Function1() { // from class: wp.d5
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
        return Unit.f31987a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0754d c0754d;
        if (lVar.f().c()) {
            en.w.l(aVar, this.f53677d.a(a1.b.f52970d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r g22;
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
        d.c.EnumC0755c enumC0755c = d.c.EnumC0755c.f53861e;
        jo.b w10 = lVar.w();
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
                aVar2 = new d.c.b.e(new Function0() { // from class: wp.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i22;
                        i22 = x5.i2(k.a.this, this, lVar, bVar);
                        return i22;
                    }
                }, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
            } else {
                c0754d = new d.c.b.C0754d(new Function1() { // from class: wp.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit k22;
                        k22 = x5.k2(a1.b.this, aVar, this, lVar, (String) obj);
                        return k22;
                    }
                }, new Function1() { // from class: wp.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m22;
                        m22 = x5.m2(x5.this, aVar, (Throwable) obj);
                        return m22;
                    }
                }, false, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a), 4, null);
                boolean t10 = bVar.t();
                jq.a b10 = this.f53683j.b();
                Function1 k10 = m6.k(aVar);
                lo.a l32 = l3(bVar);
                d.c.a v10 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f53680g;
                g.a aVar4 = this.f53681h;
                boolean a10 = lVar.a();
                return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a10, c0754d, v10, t10, b10, new Function0() { // from class: wp.u2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit n22;
                        n22 = x5.n2(k.a.this, this);
                        return n22;
                    }
                }, new Function0() { // from class: wp.w2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit o22;
                        o22 = x5.o2(x5.this, aVar);
                        return o22;
                    }
                }, k10, new Function0() { // from class: wp.x2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p22;
                        p22 = x5.p2(x5.this, aVar, bVar);
                        return p22;
                    }
                }, l32, null, b11, aVar3, aVar4, lVar.v(), lVar.u(), lVar.p(), lVar.k(), false, false, 50331648, null);
            }
        } else {
            aVar2 = new d.c.b.a(enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        }
        c0754d = aVar2;
        boolean t102 = bVar.t();
        jq.a b102 = this.f53683j.b();
        Function1 k102 = m6.k(aVar);
        lo.a l322 = l3(bVar);
        d.c.a v102 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f53680g;
        g.a aVar42 = this.f53681h;
        boolean a102 = lVar.a();
        return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a102, c0754d, v102, t102, b102, new Function0() { // from class: wp.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n22;
                n22 = x5.n2(k.a.this, this);
                return n22;
            }
        }, new Function0() { // from class: wp.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o22;
                o22 = x5.o2(x5.this, aVar);
                return o22;
            }
        }, k102, new Function0() { // from class: wp.x2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p22;
                p22 = x5.p2(x5.this, aVar, bVar);
                return p22;
            }
        }, l322, null, b112, aVar32, aVar42, lVar.v(), lVar.u(), lVar.p(), lVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f3(c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(cVar);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r g2(final x5 x5Var, final x1.l lVar, final b bVar, final k.a aVar, final b1.c output) {
        en.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.k5
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
        cVar.d(new c.C0748c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
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
            return Unit.f31987a;
        }
        if (cVar instanceof b1.c.a) {
            List c11 = lVar.c();
            b1.c.a aVar2 = (b1.c.a) cVar;
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.l(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.p(), lVar.k()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0739c) {
            b1.c.C0739c c0739c = (b1.c.C0739c) cVar;
            if (c0739c.b() == jo.b.f31214s) {
                t10 = x1.l.t(lVar3, false, null, c0739c.c(), c0739c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                t10 = x1.l.t(lVar3, false, c0739c.b(), c0739c.c(), c0739c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(t10);
        } else {
            throw new as.p();
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i2(k.a aVar, x5 x5Var, final x1.l lVar, final b bVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.o5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j22;
                j22 = x5.j2(x1.l.this, bVar, (r.c) obj);
                return j22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final String i3(jo.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f53900c[bVar.ordinal()]) {
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
                int i10 = e.f53898a[bVar2.ordinal()];
                if (i10 == 1 || i10 == 2) {
                    return null;
                }
                if (i10 == 3) {
                    return aVar.z();
                }
                throw new as.p();
            case 8:
                return aVar.p();
            case 9:
                return aVar.p();
            default:
                throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
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
            return Unit.f31987a;
        }
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.l(), m6.i(action, false), bVar.s(), lVar.p(), lVar.k(), 2, null));
        return Unit.f31987a;
    }

    private final fq.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f24218a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b g10 = ((x1.k) x1Var).g();
            if (g10 != null) {
                str = m1.a(g10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f24218a;
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
                        return j.a.f24214a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f24217a;
                    }
                    throw new as.p();
                }
                return j.b.f24215a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0755c enumC0755c;
        String c10 = bVar.x().c();
        if (bVar2.t() instanceof x1.n) {
            enumC0755c = d.c.EnumC0755c.f53870v;
        } else {
            int i10 = e.f53898a[bVar2.s().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0755c = d.c.EnumC0755c.f53862i;
                    } else {
                        throw new as.p();
                    }
                } else {
                    enumC0755c = d.c.EnumC0755c.f53868t;
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53865q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: wp.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: wp.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n12;
                n12 = x5.n1(k.a.this, this);
                return n12;
            }
        }, new Function0() { // from class: wp.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o12;
                o12 = x5.o1(x5.this, aVar);
                return o12;
            }
        }, k10, new Function0() { // from class: wp.h3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p12;
                p12 = x5.p1(x5.this, aVar, bVar);
                return p12;
            }
        }, l32, null, bVar.z().b(), this.f53680g, this.f53681h, 0.0f, null, bVar2.p(), bVar2.u(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        en.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f52966i, bVar, System.currentTimeMillis());
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.n5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l22;
                l22 = x5.l2(x5.this, lVar, cVar, (r.c) obj);
                return l22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final boolean k3(x1 x1Var) {
        if (!(x1Var instanceof x1.a) && !(x1Var instanceof x1.b) && !(x1Var instanceof x1.c) && !(x1Var instanceof x1.d) && !(x1Var instanceof x1.k) && !(x1Var instanceof x1.l) && !(x1Var instanceof x1.m) && !(x1Var instanceof x1.o) && !(x1Var instanceof x1.p) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q) && !(x1Var instanceof x1.e)) {
            if (!(x1Var instanceof x1.j) && !(x1Var instanceof x1.h) && !(x1Var instanceof x1.i) && !(x1Var instanceof x1.n)) {
                throw new as.p();
            }
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(k.a aVar, x5 x5Var) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.g5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m12;
                m12 = x5.m1((r.c) obj);
                return m12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f31987a;
    }

    private final lo.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f53674a);
        if (Result.e(f10) == null) {
            return (lo.a) f10;
        }
        return lo.a.f35950i;
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m2(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31987a;
    }

    private final boolean m3(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f53674a);
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            en.w.l(aVar, this.f53677d.a(a1.b.f52970d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.p4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r r12;
                    r12 = x5.r1(x5.this, aVar, (b1.c) obj);
                    return r12;
                }
            });
        }
        aVar.a("countdown_" + cVar.v(), new j(aVar, this, cVar, bVar, null));
        jo.b x10 = cVar.x();
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
        if (l3(bVar) == lo.a.f35949e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0752b c0752b = new d.c.b.C0752b(v10, z10, bVar.z().a(), d.c.EnumC0755c.f53861e, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a), new Function1() { // from class: wp.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53680g;
        g.a aVar3 = this.f53681h;
        return j2.f(bVar, aVar, cVar.e(), c10, str2, str, cVar.a(), c0752b, v11, t10, b10, new Function0() { // from class: wp.r4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit u12;
                u12 = x5.u1(k.a.this, this);
                return u12;
            }
        }, new Function0() { // from class: wp.s4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v12;
                v12 = x5.v1(x5.this, aVar);
                return v12;
            }
        }, k10, new Function0() { // from class: wp.t4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w12;
                w12 = x5.w1(x5.this, aVar, bVar);
                return w12;
            }
        }, l32, null, b11, aVar2, aVar3, cVar.w(), cVar.u(), cVar.p(), cVar.k(), false, false, 50331648, null);
    }

    private final d q2(final b bVar, final x1.m mVar, final k.a aVar) {
        if (mVar.f().c()) {
            en.w.l(aVar, this.f53677d.a(a1.b.f52970d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        en.w.l(aVar, o.a.b(en.o.f23000a, 1000L, null, 2, null), Reflection.typeOf(en.o.class, KTypeProjection.f32091c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: wp.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r t22;
                t22 = x5.t2(x5.this, mVar, bVar, (Unit) obj);
                return t22;
            }
        });
        String c10 = bVar.x().c();
        String t10 = bVar.x().t();
        String t11 = bVar.x().t();
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0755c.f53861e, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        boolean t12 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f53680g;
        g.a aVar4 = this.f53681h;
        boolean a10 = mVar.a();
        return j2.f(bVar, aVar, mVar.e(), c10, t10, t11, a10, aVar2, v10, t12, b10, new Function0() { // from class: wp.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v22;
                v22 = x5.v2(k.a.this, this);
                return v22;
            }
        }, new Function0() { // from class: wp.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w22;
                w22 = x5.w2(x5.this, aVar);
                return w22;
            }
        }, k10, new Function0() { // from class: wp.c3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit x22;
                x22 = x5.x2(x5.this, aVar, bVar);
                return x22;
            }
        }, l32, null, b11, aVar3, aVar4, mVar.v(), mVar.u(), mVar.p(), mVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r r1(final x5 x5Var, final k.a aVar, final b1.c output) {
        en.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.e5
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
    public static final en.r r2(final x5 x5Var, final k.a aVar, final x1.m mVar, final b bVar, final b1.c output) {
        en.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.z4
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
            return Unit.f31987a;
        }
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0739c) {
                b1.c.C0739c c0739c = (b1.c.C0739c) cVar;
                action.e(x1.c.t(cVar3, 0, c0739c.b(), 0L, null, 0L, c0739c.c(), c0739c.a(), null, null, null, false, null, false, 8093, null));
            } else {
                throw new as.p();
            }
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s2(b1.c cVar, x5 x5Var, k.a aVar, x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0739c) {
                b1.c.C0739c c0739c = (b1.c.C0739c) cVar;
                jo.b b10 = c0739c.b();
                List c10 = mVar.c();
                long i10 = mVar.i();
                fo.v b11 = mVar.b();
                action.e(new x1.l(false, b10, c0739c.c(), c0739c.a(), c10, i10, false, mVar.l(), b11, m6.i(action, false), bVar.s(), mVar.p(), mVar.k(), 65, null));
            } else {
                throw new as.p();
            }
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r t2(x5 x5Var, final x1.m mVar, final b bVar, Unit it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.x4
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f31987a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.l(), mVar.v(), mVar.u(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.p(), mVar.k(), 2, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53738a);
        return Unit.f31987a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0755c enumC0755c;
        String str;
        final x1.d dVar2;
        d.c.b c0752b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f53898a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0755c = d.c.EnumC0755c.f53861e;
                } else {
                    throw new as.p();
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53867s;
            }
        } else {
            enumC0755c = d.c.EnumC0755c.f53864p;
        }
        d.c.EnumC0755c enumC0755c2 = enumC0755c;
        String str2 = null;
        aVar.a("countdown_to_manual_capture_" + dVar.u(), new k(aVar, this, null));
        jo.b v10 = dVar.v();
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
            c0752b = new d.c.b.C0754d(new Function1() { // from class: wp.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = x5.y1(a1.b.this, aVar, this, dVar2, (String) obj);
                    return y12;
                }
            }, new Function1() { // from class: wp.y4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A1;
                    A1 = x5.A1(x5.this, aVar, (Throwable) obj);
                    return A1;
                }
            }, true, enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a));
        } else {
            dVar2 = dVar;
            int u10 = dVar2.u();
            if (l3(bVar) == lo.a.f35949e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0752b = new d.c.b.C0752b(u10, z10, bVar.z().a(), enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53058a), new Function1() { // from class: wp.j5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B1;
                    B1 = x5.B1(k.a.this, (Throwable) obj);
                    return B1;
                }
            });
        }
        d.c.b bVar3 = c0752b;
        boolean t10 = bVar.t();
        jq.a b10 = this.f53683j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53680g;
        g.a aVar3 = this.f53681h;
        return j2.f(bVar, aVar, dVar2.e(), c10, str, str3, dVar2.a(), bVar3, v11, t10, b10, new Function0() { // from class: wp.u5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C1;
                C1 = x5.C1(k.a.this, this);
                return C1;
            }
        }, new Function0() { // from class: wp.w5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D1;
                D1 = x5.D1(x5.this, aVar);
                return D1;
            }
        }, k10, new Function0() { // from class: wp.l2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E1;
                E1 = x5.E1(x5.this, aVar, bVar);
                return E1;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, dVar2.p(), dVar2.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53674a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        en.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f52966i, bVar, System.currentTimeMillis());
        en.h c10 = aVar.c();
        d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.a5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = x5.z1(x5.this, dVar, cVar, (r.c) obj);
                return z12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31987a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        en.w.l(aVar, this.f53675b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.q(), nVar.s(), nVar.b(), nVar.l()), Reflection.typeOf(yp.c.class), "", new Function1() { // from class: wp.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        jq.b.d(this.f53683j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        jq.a b10 = this.f53683j.b();
        Function0 function0 = new Function0() { // from class: wp.g4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C2;
                C2 = x5.C2(x5.this, aVar);
                return C2;
            }
        };
        Function0 function02 = new Function0() { // from class: wp.h4
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
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r z2(final x5 x5Var, final k.a aVar, final c.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0780b) {
            d11 = en.z.d(x5Var, null, new Function1() { // from class: wp.u4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A2;
                    A2 = x5.A2(x5.this, aVar, (r.c) obj);
                    return A2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.v4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B2;
                    B2 = x5.B2(x5.this, aVar, it, (r.c) obj);
                    return B2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    @Override // en.k
    /* renamed from: X0 */
    public x1 d(b props, en.i iVar) {
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
            x1 x1Var = (x1) readParcelable;
            if (x1Var != null) {
                return x1Var;
            }
        }
        if (props.w()) {
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f24135d, false, 163, null);
        }
        return new x1.j(null, null, 2, null);
    }

    @Override // en.k
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
        this.f53683j.c(renderProps.b(), renderProps.g(), !z10);
        this.f53684k.c(new i.e(renderProps.k(), j3(renderState)));
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
            y22 = this.f53679f.q(renderProps, (x1.e) renderState, context);
        } else if (renderState instanceof x1.f) {
            y22 = F1(renderProps, (x1.f) renderState, context);
        } else if (renderState instanceof x1.q) {
            y22 = W2(renderProps, (x1.q) renderState, context);
        } else if (renderState instanceof x1.i) {
            y22 = N1(renderProps, (x1.i) renderState, context);
        } else if (z10) {
            y22 = y2(renderProps, (x1.n) renderState, context);
        } else {
            throw new as.p();
        }
        if (y22 instanceof d.c) {
            return rp.l1.c(y22);
        }
        return y22;
    }

    @Override // en.k
    /* renamed from: h3 */
    public en.i g(x1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return gn.s.a(state);
    }
}
