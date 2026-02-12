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
    public static final a f53674l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f53675a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f53676b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f53677c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f53678d;

    /* renamed from: e  reason: collision with root package name */
    private final rp.c1 f53679e;

    /* renamed from: f  reason: collision with root package name */
    private final zp.j f53680f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f53681g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f53682h;

    /* renamed from: i  reason: collision with root package name */
    private final ko.a f53683i;

    /* renamed from: j  reason: collision with root package name */
    private final jq.b f53684j;

    /* renamed from: k  reason: collision with root package name */
    private final fq.c f53685k;

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
        private final String f53686a;

        /* renamed from: b  reason: collision with root package name */
        private final String f53687b;

        /* renamed from: c  reason: collision with root package name */
        private final String f53688c;

        /* renamed from: d  reason: collision with root package name */
        private final String f53689d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f53690e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f53691f;

        /* renamed from: g  reason: collision with root package name */
        private final String f53692g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f53693h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f53694i;

        /* renamed from: j  reason: collision with root package name */
        private final a f53695j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f53696k;

        /* renamed from: l  reason: collision with root package name */
        private final List f53697l;

        /* renamed from: m  reason: collision with root package name */
        private final String f53698m;

        /* renamed from: n  reason: collision with root package name */
        private final String f53699n;

        /* renamed from: o  reason: collision with root package name */
        private final String f53700o;

        /* renamed from: p  reason: collision with root package name */
        private final String f53701p;

        /* renamed from: q  reason: collision with root package name */
        private final String f53702q;

        /* renamed from: r  reason: collision with root package name */
        private final String f53703r;

        /* renamed from: s  reason: collision with root package name */
        private final String f53704s;

        /* renamed from: t  reason: collision with root package name */
        private final String f53705t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f53706u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f53707v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f53708w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f53709x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f53710y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f53711z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f53712a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53713b;

            /* renamed from: c  reason: collision with root package name */
            private final String f53714c;

            /* renamed from: d  reason: collision with root package name */
            private final String f53715d;

            /* renamed from: e  reason: collision with root package name */
            private final String f53716e;

            /* renamed from: f  reason: collision with root package name */
            private final String f53717f;

            /* renamed from: g  reason: collision with root package name */
            private final String f53718g;

            /* renamed from: h  reason: collision with root package name */
            private final String f53719h;

            /* renamed from: i  reason: collision with root package name */
            private final String f53720i;

            /* renamed from: j  reason: collision with root package name */
            private final String f53721j;

            /* renamed from: k  reason: collision with root package name */
            private final String f53722k;

            /* renamed from: l  reason: collision with root package name */
            private final String f53723l;

            /* renamed from: m  reason: collision with root package name */
            private final String f53724m;

            /* renamed from: n  reason: collision with root package name */
            private final String f53725n;

            /* renamed from: o  reason: collision with root package name */
            private final String f53726o;

            /* renamed from: p  reason: collision with root package name */
            private final String f53727p;

            /* renamed from: q  reason: collision with root package name */
            private final String f53728q;

            /* renamed from: r  reason: collision with root package name */
            private final String f53729r;

            /* renamed from: s  reason: collision with root package name */
            private final String f53730s;

            /* renamed from: t  reason: collision with root package name */
            private final String f53731t;

            /* renamed from: u  reason: collision with root package name */
            private final String f53732u;

            /* renamed from: v  reason: collision with root package name */
            private final String f53733v;

            /* renamed from: w  reason: collision with root package name */
            private final String f53734w;

            /* renamed from: x  reason: collision with root package name */
            private final String f53735x;

            /* renamed from: y  reason: collision with root package name */
            private final String f53736y;

            /* renamed from: z  reason: collision with root package name */
            private final String f53737z;

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
                this.f53712a = title;
                this.f53713b = prompt;
                this.f53714c = disclosure;
                this.f53715d = startButton;
                this.f53716e = capturePageTitle;
                this.f53717f = selfieHintTakePhoto;
                this.f53718g = selfieHintCenterFace;
                this.f53719h = selfieHintFaceTooClose;
                this.f53720i = selfieHintFaceTooFar;
                this.f53721j = selfieHintMultipleFaces;
                this.f53722k = selfieHintFaceIncomplete;
                this.f53723l = selfieHintPoseNotCentered;
                this.f53724m = selfieHintLookLeft;
                this.f53725n = selfieHintLookRight;
                this.f53726o = selfieHintHoldStill;
                this.f53727p = processingTitle;
                this.f53728q = processingDescription;
                this.f53729r = str;
                this.f53730s = str2;
                this.f53731t = str3;
                this.f53732u = str4;
                this.f53733v = str5;
                this.f53734w = str6;
                this.f53735x = str7;
                this.f53736y = str8;
                this.f53737z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f53717f;
            }

            public final String B() {
                return this.f53715d;
            }

            public final String C() {
                return this.f53712a;
            }

            public final String a() {
                return this.f53736y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f53716e;
            }

            public final String d() {
                return this.f53737z;
            }

            public final String e() {
                return this.f53714c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f53712a, aVar.f53712a) && Intrinsics.areEqual(this.f53713b, aVar.f53713b) && Intrinsics.areEqual(this.f53714c, aVar.f53714c) && Intrinsics.areEqual(this.f53715d, aVar.f53715d) && Intrinsics.areEqual(this.f53716e, aVar.f53716e) && Intrinsics.areEqual(this.f53717f, aVar.f53717f) && Intrinsics.areEqual(this.f53718g, aVar.f53718g) && Intrinsics.areEqual(this.f53719h, aVar.f53719h) && Intrinsics.areEqual(this.f53720i, aVar.f53720i) && Intrinsics.areEqual(this.f53721j, aVar.f53721j) && Intrinsics.areEqual(this.f53722k, aVar.f53722k) && Intrinsics.areEqual(this.f53723l, aVar.f53723l) && Intrinsics.areEqual(this.f53724m, aVar.f53724m) && Intrinsics.areEqual(this.f53725n, aVar.f53725n) && Intrinsics.areEqual(this.f53726o, aVar.f53726o) && Intrinsics.areEqual(this.f53727p, aVar.f53727p) && Intrinsics.areEqual(this.f53728q, aVar.f53728q) && Intrinsics.areEqual(this.f53729r, aVar.f53729r) && Intrinsics.areEqual(this.f53730s, aVar.f53730s) && Intrinsics.areEqual(this.f53731t, aVar.f53731t) && Intrinsics.areEqual(this.f53732u, aVar.f53732u) && Intrinsics.areEqual(this.f53733v, aVar.f53733v) && Intrinsics.areEqual(this.f53734w, aVar.f53734w) && Intrinsics.areEqual(this.f53735x, aVar.f53735x) && Intrinsics.areEqual(this.f53736y, aVar.f53736y) && Intrinsics.areEqual(this.f53737z, aVar.f53737z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f53728q;
            }

            public final String g() {
                return this.f53727p;
            }

            public final String h() {
                return this.f53713b;
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
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f53712a.hashCode() * 31) + this.f53713b.hashCode()) * 31) + this.f53714c.hashCode()) * 31) + this.f53715d.hashCode()) * 31) + this.f53716e.hashCode()) * 31) + this.f53717f.hashCode()) * 31) + this.f53718g.hashCode()) * 31) + this.f53719h.hashCode()) * 31) + this.f53720i.hashCode()) * 31) + this.f53721j.hashCode()) * 31) + this.f53722k.hashCode()) * 31) + this.f53723l.hashCode()) * 31) + this.f53724m.hashCode()) * 31) + this.f53725n.hashCode()) * 31) + this.f53726o.hashCode()) * 31) + this.f53727p.hashCode()) * 31) + this.f53728q.hashCode()) * 31;
                String str = this.f53729r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f53730s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f53731t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f53732u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f53733v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f53734w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f53735x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f53736y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f53737z;
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
                return this.f53735x;
            }

            public final String j() {
                return this.f53734w;
            }

            public final String k() {
                return this.f53730s;
            }

            public final String l() {
                return this.f53731t;
            }

            public final String m() {
                return this.f53732u;
            }

            public final String n() {
                return this.f53733v;
            }

            public final String o() {
                return this.f53729r;
            }

            public final String p() {
                return this.f53718g;
            }

            public final String q() {
                return this.f53722k;
            }

            public final String r() {
                return this.f53719h;
            }

            public final String s() {
                return this.f53720i;
            }

            public final String t() {
                return this.f53726o;
            }

            public String toString() {
                String str = this.f53712a;
                String str2 = this.f53713b;
                String str3 = this.f53714c;
                String str4 = this.f53715d;
                String str5 = this.f53716e;
                String str6 = this.f53717f;
                String str7 = this.f53718g;
                String str8 = this.f53719h;
                String str9 = this.f53720i;
                String str10 = this.f53721j;
                String str11 = this.f53722k;
                String str12 = this.f53723l;
                String str13 = this.f53724m;
                String str14 = this.f53725n;
                String str15 = this.f53726o;
                String str16 = this.f53727p;
                String str17 = this.f53728q;
                String str18 = this.f53729r;
                String str19 = this.f53730s;
                String str20 = this.f53731t;
                String str21 = this.f53732u;
                String str22 = this.f53733v;
                String str23 = this.f53734w;
                String str24 = this.f53735x;
                String str25 = this.f53736y;
                String str26 = this.f53737z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f53724m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f53725n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f53721j;
            }

            public final String z() {
                return this.f53723l;
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
            this.f53686a = sessionToken;
            this.f53687b = inquiryId;
            this.f53688c = fromComponent;
            this.f53689d = fromStep;
            this.f53690e = z10;
            this.f53691f = z11;
            this.f53692g = fieldKeySelfie;
            this.f53693h = z12;
            this.f53694i = z13;
            this.f53695j = strings;
            this.f53696k = selfieType;
            this.f53697l = orderedPoses;
            this.f53698m = str;
            this.f53699n = str2;
            this.f53700o = str3;
            this.f53701p = str4;
            this.f53702q = str5;
            this.f53703r = str6;
            this.f53704s = str7;
            this.f53705t = str8;
            this.f53706u = selfieStepStyle;
            this.f53707v = videoCaptureConfig;
            this.f53708w = assetConfig;
            this.f53709x = pendingPageTextVerticalPosition;
            this.f53710y = poseConfigs;
            this.f53711z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f53708w;
        }

        public final boolean b() {
            return this.f53690e;
        }

        public final String c() {
            return this.f53701p;
        }

        public final String d() {
            return this.f53700o;
        }

        public final String e() {
            return this.f53699n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f53686a, bVar.f53686a) && Intrinsics.areEqual(this.f53687b, bVar.f53687b) && Intrinsics.areEqual(this.f53688c, bVar.f53688c) && Intrinsics.areEqual(this.f53689d, bVar.f53689d) && this.f53690e == bVar.f53690e && this.f53691f == bVar.f53691f && Intrinsics.areEqual(this.f53692g, bVar.f53692g) && this.f53693h == bVar.f53693h && this.f53694i == bVar.f53694i && Intrinsics.areEqual(this.f53695j, bVar.f53695j) && Intrinsics.areEqual(this.f53696k, bVar.f53696k) && Intrinsics.areEqual(this.f53697l, bVar.f53697l) && Intrinsics.areEqual(this.f53698m, bVar.f53698m) && Intrinsics.areEqual(this.f53699n, bVar.f53699n) && Intrinsics.areEqual(this.f53700o, bVar.f53700o) && Intrinsics.areEqual(this.f53701p, bVar.f53701p) && Intrinsics.areEqual(this.f53702q, bVar.f53702q) && Intrinsics.areEqual(this.f53703r, bVar.f53703r) && Intrinsics.areEqual(this.f53704s, bVar.f53704s) && Intrinsics.areEqual(this.f53705t, bVar.f53705t) && Intrinsics.areEqual(this.f53706u, bVar.f53706u) && Intrinsics.areEqual(this.f53707v, bVar.f53707v) && Intrinsics.areEqual(this.f53708w, bVar.f53708w) && this.f53709x == bVar.f53709x && Intrinsics.areEqual(this.f53710y, bVar.f53710y) && this.f53711z == bVar.f53711z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f53698m;
        }

        public final boolean g() {
            return this.f53691f;
        }

        public final b0 h() {
            return this.f53711z;
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
            int hashCode9 = ((((((((((((((((((((((this.f53686a.hashCode() * 31) + this.f53687b.hashCode()) * 31) + this.f53688c.hashCode()) * 31) + this.f53689d.hashCode()) * 31) + Boolean.hashCode(this.f53690e)) * 31) + Boolean.hashCode(this.f53691f)) * 31) + this.f53692g.hashCode()) * 31) + Boolean.hashCode(this.f53693h)) * 31) + Boolean.hashCode(this.f53694i)) * 31) + this.f53695j.hashCode()) * 31) + this.f53696k.hashCode()) * 31) + this.f53697l.hashCode()) * 31;
            String str = this.f53698m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f53699n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f53700o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f53701p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f53702q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f53703r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f53704s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f53705t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f53706u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f53707v.hashCode()) * 31) + this.f53708w.hashCode()) * 31) + this.f53709x.hashCode()) * 31) + this.f53710y.hashCode()) * 31) + this.f53711z.hashCode();
        }

        public final String i() {
            return this.f53692g;
        }

        public final String j() {
            return this.f53688c;
        }

        public final String k() {
            return this.f53689d;
        }

        public final String l() {
            return this.f53687b;
        }

        public final String m() {
            return this.f53705t;
        }

        public final String n() {
            return this.f53704s;
        }

        public final String o() {
            return this.f53703r;
        }

        public final String p() {
            return this.f53702q;
        }

        public final List q() {
            return this.f53697l;
        }

        public final PendingPageTextPosition r() {
            return this.f53709x;
        }

        public final s0 s() {
            return this.f53710y;
        }

        public final boolean t() {
            return this.f53693h;
        }

        public String toString() {
            String str = this.f53686a;
            String str2 = this.f53687b;
            String str3 = this.f53688c;
            String str4 = this.f53689d;
            boolean z10 = this.f53690e;
            boolean z11 = this.f53691f;
            String str5 = this.f53692g;
            boolean z12 = this.f53693h;
            boolean z13 = this.f53694i;
            a aVar = this.f53695j;
            d2 d2Var = this.f53696k;
            List list = this.f53697l;
            String str6 = this.f53698m;
            String str7 = this.f53699n;
            String str8 = this.f53700o;
            String str9 = this.f53701p;
            String str10 = this.f53702q;
            String str11 = this.f53703r;
            String str12 = this.f53704s;
            String str13 = this.f53705t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f53706u;
            VideoCaptureConfig videoCaptureConfig = this.f53707v;
            NextStep.Selfie.AssetConfig assetConfig = this.f53708w;
            PendingPageTextPosition pendingPageTextPosition = this.f53709x;
            s0 s0Var = this.f53710y;
            b0 b0Var = this.f53711z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f53696k;
        }

        public final String v() {
            return this.f53686a;
        }

        public final boolean w() {
            return this.f53694i;
        }

        public final a x() {
            return this.f53695j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f53706u;
        }

        public final VideoCaptureConfig z() {
            return this.f53707v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f53738a = new a();

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
            public static final b f53739a = new b();

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
            private final InternalErrorInfo f53740a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0748c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f53740a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f53740a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0748c) && Intrinsics.areEqual(this.f53740a, ((C0748c) obj).f53740a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f53740a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f53740a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f53741a = new d();

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
            private final String f53742a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53743b;

            /* renamed from: c  reason: collision with root package name */
            private final String f53744c;

            /* renamed from: d  reason: collision with root package name */
            private final String f53745d;

            /* renamed from: e  reason: collision with root package name */
            private final String f53746e;

            /* renamed from: f  reason: collision with root package name */
            private final String f53747f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f53748g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0749a f53749h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53750i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f53751j;

            /* renamed from: k  reason: collision with root package name */
            private final jq.a f53752k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f53753l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f53754m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f53755n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f53756o;

            /* renamed from: p  reason: collision with root package name */
            private final lo.a f53757p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f53758q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f53759r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f53760s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f53761t;

            /* renamed from: u  reason: collision with root package name */
            private final float f53762u;

            /* renamed from: v  reason: collision with root package name */
            private final jo.a f53763v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f53764w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f53765x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f53766y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f53767z;

            /* renamed from: wp.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0749a {

                /* renamed from: wp.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0750a extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53768a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0750a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53768a = overlay;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53768a;
                    }
                }

                /* renamed from: wp.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53769a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f53770b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53771c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f53772d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f53773e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f53769a = overlay;
                        this.f53770b = i10;
                        this.f53771c = z10;
                        this.f53772d = j10;
                        this.f53773e = onError;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53769a;
                    }

                    public final int b() {
                        return this.f53770b;
                    }

                    public final long c() {
                        return this.f53772d;
                    }

                    public final Function1 d() {
                        return this.f53773e;
                    }

                    public final boolean e() {
                        return this.f53771c;
                    }
                }

                /* renamed from: wp.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53774a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53775b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f53776c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f53777d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f53774a = overlay;
                        this.f53775b = finalizeVideo;
                        this.f53776c = onAnimationComplete;
                        this.f53777d = z10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53774a;
                    }

                    public final Function1 b() {
                        return this.f53775b;
                    }

                    public final Function0 c() {
                        return this.f53776c;
                    }

                    public final boolean d() {
                        return this.f53777d;
                    }
                }

                /* renamed from: wp.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0751d extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53778a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53779b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f53780c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f53781d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0751d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f53778a = overlay;
                        this.f53779b = processImage;
                        this.f53780c = onError;
                        this.f53781d = z10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53778a;
                    }

                    public final boolean b() {
                        return this.f53781d;
                    }

                    public final Function1 c() {
                        return this.f53780c;
                    }

                    public final Function1 d() {
                        return this.f53779b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53782a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53783b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f53782a = overlay;
                        this.f53783b = onCaptureClicked;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53782a;
                    }

                    public final Function0 b() {
                        return this.f53783b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53784a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53785b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f53784a = overlay;
                        this.f53785b = poseHintComplete;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53784a;
                    }

                    public final Function0 b() {
                        return this.f53785b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53786a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53787b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f53786a = overlay;
                        this.f53787b = previewReady;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53786a;
                    }

                    public final Function1 b() {
                        return this.f53787b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53788a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53789b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53790c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f53788a = overlay;
                        this.f53789b = onComplete;
                        this.f53790c = z10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53788a;
                    }

                    public final boolean b() {
                        return this.f53790c;
                    }

                    public final Function0 c() {
                        return this.f53789b;
                    }
                }

                /* renamed from: wp.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0749a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f53791a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f53792b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53791a = overlay;
                        this.f53792b = j10;
                    }

                    @Override // wp.x5.d.a.AbstractC0749a
                    public b a() {
                        return this.f53791a;
                    }

                    public final long b() {
                        return this.f53792b;
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
                public static final b f53793d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f53794e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f53795i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f53796o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f53797p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f53798q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f53799r;

                static {
                    b[] a10 = a();
                    f53798q = a10;
                    f53799r = hs.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f53793d, f53794e, f53795i, f53796o, f53797p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f53798q.clone();
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
                this.f53742a = str;
                this.f53743b = str2;
                this.f53744c = str3;
                this.f53745d = str4;
                this.f53746e = str5;
                this.f53747f = str6;
                this.f53748g = z10;
                this.f53749h = mode;
                this.f53750i = selfieStepStyle;
                this.f53751j = z11;
                this.f53752k = navigationState;
                this.f53753l = onBack;
                this.f53754m = onCancel;
                this.f53755n = onCameraError;
                this.f53756o = onPermissionChanged;
                this.f53757p = videoCaptureMethod;
                this.f53758q = z12;
                this.f53759r = cameraXControllerFactory;
                this.f53760s = camera2ManagerFactoryFactory;
                this.f53761t = onCameraFacingModeSelected;
                this.f53762u = f10;
                this.f53763v = aVar2;
                this.f53764w = facingMode;
                this.f53765x = z13;
                this.f53766y = z14;
                this.f53767z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f53748g;
            }

            public final boolean B() {
                return this.f53765x;
            }

            public final boolean C() {
                return this.f53766y;
            }

            public final String a() {
                return this.f53745d;
            }

            public final jo.a b() {
                return this.f53763v;
            }

            public final g.a c() {
                return this.f53760s;
            }

            public final z.a d() {
                return this.f53759r;
            }

            public final String e() {
                return this.f53746e;
            }

            public final String f() {
                return this.f53744c;
            }

            public final v.b g() {
                return this.f53764w;
            }

            public final String h() {
                return this.f53743b;
            }

            public final AbstractC0749a i() {
                return this.f53749h;
            }

            public final jq.a j() {
                return this.f53752k;
            }

            public final Function0 k() {
                return this.f53753l;
            }

            public final Function1 l() {
                return this.f53755n;
            }

            public final Function1 m() {
                return this.f53761t;
            }

            public final Function0 n() {
                return this.f53754m;
            }

            public final Function1 o() {
                return this.f53767z;
            }

            public final Function0 p() {
                return this.f53756o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f53762u;
            }

            public final String s() {
                return this.f53747f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f53751j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f53750i;
            }

            public final String w() {
                return this.f53742a;
            }

            public final lo.a x() {
                return this.f53757p;
            }

            public final dr.a y() {
                return null;
            }

            public final boolean z() {
                return this.f53758q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f53800a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53801b;

            /* renamed from: c  reason: collision with root package name */
            private final String f53802c;

            /* renamed from: d  reason: collision with root package name */
            private final String f53803d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53804e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f53805f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f53806g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f53807h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f53808i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f53809j;

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
                this.f53800a = title;
                this.f53801b = prompt;
                this.f53802c = disclosure;
                this.f53803d = start;
                this.f53804e = selfieStepStyle;
                this.f53805f = remoteImage;
                this.f53806g = navigationState;
                this.f53807h = onClick;
                this.f53808i = onBack;
                this.f53809j = onCancel;
            }

            public final String a() {
                return this.f53802c;
            }

            public final RemoteImage b() {
                return this.f53805f;
            }

            public final jq.a c() {
                return this.f53806g;
            }

            public final Function0 d() {
                return this.f53808i;
            }

            public final Function0 e() {
                return this.f53809j;
            }

            public final Function0 f() {
                return this.f53807h;
            }

            public final String g() {
                return this.f53801b;
            }

            public final String h() {
                return this.f53803d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f53804e;
            }

            public final String j() {
                return this.f53800a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f53810a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53811b;

            /* renamed from: c  reason: collision with root package name */
            private final b f53812c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53813d;

            /* renamed from: e  reason: collision with root package name */
            private final a f53814e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f53815f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f53816g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f53817h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f53818i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f53819j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f53820k;

            /* renamed from: l  reason: collision with root package name */
            private final lo.a f53821l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f53822m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f53823n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f53824o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f53825a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f53826b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f53825a = remoteImage;
                    this.f53826b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f53825a;
                }

                public final RemoteImage b() {
                    return this.f53826b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f53825a, aVar.f53825a) && Intrinsics.areEqual(this.f53826b, aVar.f53826b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f53825a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f53826b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f53825a;
                    RemoteImage remoteImage2 = this.f53826b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0755c f53827a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f53828b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53827a = overlay;
                        this.f53828b = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53827a;
                    }

                    public boolean b() {
                        return this.f53828b;
                    }
                }

                /* renamed from: wp.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0752b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f53829a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f53830b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f53831c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0755c f53832d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f53833e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f53834f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0752b(int i10, boolean z10, long j10, EnumC0755c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f53829a = i10;
                        this.f53830b = z10;
                        this.f53831c = j10;
                        this.f53832d = overlay;
                        this.f53833e = z11;
                        this.f53834f = onError;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53832d;
                    }

                    public final int b() {
                        return this.f53829a;
                    }

                    public final long c() {
                        return this.f53831c;
                    }

                    public final Function1 d() {
                        return this.f53834f;
                    }

                    public final boolean e() {
                        return this.f53830b;
                    }

                    public boolean f() {
                        return this.f53833e;
                    }
                }

                /* renamed from: wp.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0753c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f53835a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f53836b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53837c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0755c f53838d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f53839e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0753c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0755c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53835a = finalizeVideo;
                        this.f53836b = onAnimationComplete;
                        this.f53837c = z10;
                        this.f53838d = overlay;
                        this.f53839e = z11;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53838d;
                    }

                    public final Function1 b() {
                        return this.f53835a;
                    }

                    public final Function0 c() {
                        return this.f53836b;
                    }

                    public boolean d() {
                        return this.f53839e;
                    }

                    public final boolean e() {
                        return this.f53837c;
                    }
                }

                /* renamed from: wp.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0754d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f53840a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f53841b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53842c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0755c f53843d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f53844e;

                    public /* synthetic */ C0754d(Function1 function1, Function1 function12, boolean z10, EnumC0755c enumC0755c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0755c, z11);
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53843d;
                    }

                    public final boolean b() {
                        return this.f53842c;
                    }

                    public final Function1 c() {
                        return this.f53841b;
                    }

                    public final Function1 d() {
                        return this.f53840a;
                    }

                    public boolean e() {
                        return this.f53844e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0754d(Function1 processImage, Function1 onError, boolean z10, EnumC0755c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53840a = processImage;
                        this.f53841b = onError;
                        this.f53842c = z10;
                        this.f53843d = overlay;
                        this.f53844e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f53845a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0755c f53846b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53847c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53845a = onCaptureClicked;
                        this.f53846b = overlay;
                        this.f53847c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53846b;
                    }

                    public final Function0 b() {
                        return this.f53845a;
                    }

                    public boolean c() {
                        return this.f53847c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f53848a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0755c f53849b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53850c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53848a = poseHintComplete;
                        this.f53849b = overlay;
                        this.f53850c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53849b;
                    }

                    public final Function0 b() {
                        return this.f53848a;
                    }

                    public boolean c() {
                        return this.f53850c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f53851a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0755c f53852b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53853c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0755c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53851a = previewReady;
                        this.f53852b = overlay;
                        this.f53853c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53852b;
                    }

                    public final Function1 b() {
                        return this.f53851a;
                    }

                    public boolean c() {
                        return this.f53853c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f53854a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f53855b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0755c f53856c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f53857d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0755c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53854a = onComplete;
                        this.f53855b = z10;
                        this.f53856c = overlay;
                        this.f53857d = z11;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53856c;
                    }

                    public final boolean b() {
                        return this.f53855b;
                    }

                    public final Function0 c() {
                        return this.f53854a;
                    }

                    public boolean d() {
                        return this.f53857d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0755c f53858a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f53859b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f53860c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0755c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f53858a = overlay;
                        this.f53859b = j10;
                        this.f53860c = z10;
                    }

                    @Override // wp.x5.d.c.b
                    public EnumC0755c a() {
                        return this.f53858a;
                    }

                    public final long b() {
                        return this.f53859b;
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
                public static final EnumC0755c f53861d = new EnumC0755c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0755c f53862e = new EnumC0755c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0755c f53863i = new EnumC0755c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0755c f53864o = new EnumC0755c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0755c f53865p = new EnumC0755c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0755c f53866q = new EnumC0755c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0755c f53867r = new EnumC0755c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0755c f53868s = new EnumC0755c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0755c f53869t = new EnumC0755c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0755c f53870u = new EnumC0755c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0755c f53871v = new EnumC0755c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0755c f53872w = new EnumC0755c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0755c[] f53873x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f53874y;

                static {
                    EnumC0755c[] a10 = a();
                    f53873x = a10;
                    f53874y = hs.a.a(a10);
                }

                private EnumC0755c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0755c[] a() {
                    return new EnumC0755c[]{f53861d, f53862e, f53863i, f53864o, f53865p, f53866q, f53867r, f53868s, f53869t, f53870u, f53871v, f53872w};
                }

                public static EnumC0755c valueOf(String str) {
                    return (EnumC0755c) Enum.valueOf(EnumC0755c.class, str);
                }

                public static EnumC0755c[] values() {
                    return (EnumC0755c[]) f53873x.clone();
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
                this.f53810a = str;
                this.f53811b = str2;
                this.f53812c = mode;
                this.f53813d = selfieStepStyle;
                this.f53814e = assetOverrides;
                this.f53815f = z10;
                this.f53816g = navigationState;
                this.f53817h = onBack;
                this.f53818i = onCancel;
                this.f53819j = onCameraError;
                this.f53820k = onPermissionChanged;
                this.f53821l = videoCaptureMethod;
                this.f53822m = z11;
                this.f53823n = cameraXControllerFactory;
                this.f53824o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f53814e;
            }

            public final g.a b() {
                return this.f53824o;
            }

            public final z.a c() {
                return this.f53823n;
            }

            public final String d() {
                return this.f53811b;
            }

            public final b e() {
                return this.f53812c;
            }

            public final jq.a f() {
                return this.f53816g;
            }

            public final Function0 g() {
                return this.f53817h;
            }

            public final Function1 h() {
                return this.f53819j;
            }

            public final Function0 i() {
                return this.f53818i;
            }

            public final Function0 j() {
                return this.f53820k;
            }

            public final boolean k() {
                return this.f53815f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f53813d;
            }

            public final String m() {
                return this.f53810a;
            }

            public final lo.a n() {
                return this.f53821l;
            }

            public final dr.a o() {
                return null;
            }

            public final boolean p() {
                return this.f53822m;
            }
        }

        /* renamed from: wp.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0756d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f53875a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0756d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f53875a = rendered;
            }

            public final Function0 a() {
                return this.f53875a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f53876a;

            /* renamed from: b  reason: collision with root package name */
            private final List f53877b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53878c;

            /* renamed from: d  reason: collision with root package name */
            private final jq.a f53879d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f53880e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f53881f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f53882g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f53883h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f53884a;

                /* renamed from: b  reason: collision with root package name */
                private final String f53885b;

                /* renamed from: c  reason: collision with root package name */
                private final String f53886c;

                /* renamed from: d  reason: collision with root package name */
                private final String f53887d;

                /* renamed from: e  reason: collision with root package name */
                private final String f53888e;

                /* renamed from: f  reason: collision with root package name */
                private final String f53889f;

                /* renamed from: g  reason: collision with root package name */
                private final String f53890g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f53884a = title;
                    this.f53885b = description;
                    this.f53886c = selfieLabelFront;
                    this.f53887d = selfieLabelLeft;
                    this.f53888e = selfieLabelRight;
                    this.f53889f = submitButton;
                    this.f53890g = retakeButton;
                }

                public final String a() {
                    return this.f53885b;
                }

                public final String b() {
                    return this.f53890g;
                }

                public final String c() {
                    return this.f53886c;
                }

                public final String d() {
                    return this.f53887d;
                }

                public final String e() {
                    return this.f53888e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f53884a, aVar.f53884a) && Intrinsics.areEqual(this.f53885b, aVar.f53885b) && Intrinsics.areEqual(this.f53886c, aVar.f53886c) && Intrinsics.areEqual(this.f53887d, aVar.f53887d) && Intrinsics.areEqual(this.f53888e, aVar.f53888e) && Intrinsics.areEqual(this.f53889f, aVar.f53889f) && Intrinsics.areEqual(this.f53890g, aVar.f53890g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f53889f;
                }

                public final String g() {
                    return this.f53884a;
                }

                public int hashCode() {
                    return (((((((((((this.f53884a.hashCode() * 31) + this.f53885b.hashCode()) * 31) + this.f53886c.hashCode()) * 31) + this.f53887d.hashCode()) * 31) + this.f53888e.hashCode()) * 31) + this.f53889f.hashCode()) * 31) + this.f53890g.hashCode();
                }

                public String toString() {
                    String str = this.f53884a;
                    String str2 = this.f53885b;
                    String str3 = this.f53886c;
                    String str4 = this.f53887d;
                    String str5 = this.f53888e;
                    String str6 = this.f53889f;
                    String str7 = this.f53890g;
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
                this.f53876a = strings;
                this.f53877b = selfies;
                this.f53878c = selfieStepStyle;
                this.f53879d = navigationState;
                this.f53880e = onUsePhotos;
                this.f53881f = onRetakePhotos;
                this.f53882g = onBack;
                this.f53883h = onCancel;
            }

            public final jq.a a() {
                return this.f53879d;
            }

            public final Function0 b() {
                return this.f53882g;
            }

            public final Function0 c() {
                return this.f53883h;
            }

            public final Function0 d() {
                return this.f53881f;
            }

            public final Function0 e() {
                return this.f53880e;
            }

            public final List f() {
                return this.f53877b;
            }

            public final a g() {
                return this.f53876a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f53878c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f53891a;

            /* renamed from: b  reason: collision with root package name */
            private final String f53892b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f53893c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f53894d;

            /* renamed from: e  reason: collision with root package name */
            private final jq.a f53895e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f53896f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f53897g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f53898h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, jq.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f53891a = title;
                this.f53892b = description;
                this.f53893c = pendingPageTextVerticalPosition;
                this.f53894d = selfieStepStyle;
                this.f53895e = navigationState;
                this.f53896f = onBack;
                this.f53897g = onCancel;
                this.f53898h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f53898h;
            }

            public final String b() {
                return this.f53892b;
            }

            public final jq.a c() {
                return this.f53895e;
            }

            public final Function0 d() {
                return this.f53896f;
            }

            public final Function0 e() {
                return this.f53897g;
            }

            public final PendingPageTextPosition f() {
                return this.f53893c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f53894d;
            }

            public final String h() {
                return this.f53891a;
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
        public static final /* synthetic */ int[] f53899a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f53900b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f53901c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f52972e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f52973i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f52971d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f53899a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f53107e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f53108i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f53106d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f53900b = iArr2;
            int[] iArr3 = new int[jo.b.values().length];
            try {
                iArr3[jo.b.f31208d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[jo.b.f31209e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[jo.b.f31210i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[jo.b.f31211o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[jo.b.f31212p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[jo.b.f31213q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[jo.b.f31214r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[jo.b.f31215s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[jo.b.f31216t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f53901c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53902d;

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
            int i10 = this.f53902d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.m mVar = fo.m.f24048a;
                Context context = x5.this.f53675a;
                this.f53902d = 1;
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
        int f53904d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53905e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53906i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53905e = aVar;
            this.f53906i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f53905e, this.f53906i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f53904d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f53905e.c();
                final x5 x5Var = this.f53906i;
                d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.y5
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
        int f53907d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53908e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53909i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53908e = aVar;
            this.f53909i = x5Var;
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
            cVar.e(x1.a.t(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f53583o, 8191, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f53908e, this.f53909i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53907d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53907d = 1;
                if (ys.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53908e.c();
            d10 = en.z.d(this.f53909i, null, new Function1() { // from class: wp.z5
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
        int f53910d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53911e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53912i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53911e = aVar;
            this.f53912i = x5Var;
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
            cVar.e(x1.a.t(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f53581e, 8191, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f53911e, this.f53912i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53910d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53910d = 1;
                if (ys.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53911e.c();
            d10 = en.z.d(this.f53912i, null, new Function1() { // from class: wp.a6
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
        int f53913d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53914e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53915i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f53916o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f53917p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f53914e = aVar;
            this.f53915i = x5Var;
            this.f53916o = cVar;
            this.f53917p = bVar;
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
                jo.b x10 = cVar4.x();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                fo.v b10 = cVar4.b();
                cVar2.e(new x1.a(x10, cVar.w(), cVar.u(), null, c11, i10, false, cVar.l(), b10, m6.i(cVar2, false), bVar.s(), cVar.p(), cVar.k(), null, 8264, null));
            }
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f53914e, this.f53915i, this.f53916o, this.f53917p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53913d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53913d = 1;
                if (ys.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53914e.c();
            x5 x5Var = this.f53915i;
            final x1.c cVar = this.f53916o;
            final b bVar = this.f53917p;
            d10 = en.z.d(x5Var, null, new Function1() { // from class: wp.b6
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
        int f53918d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f53919e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f53920i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53919e = aVar;
            this.f53920i = x5Var;
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
            return new k(this.f53919e, this.f53920i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            Object f10 = gs.b.f();
            int i10 = this.f53918d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f53918d = 1;
                if (ys.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            en.h c10 = this.f53919e.c();
            d10 = en.z.d(this.f53920i, null, new Function1() { // from class: wp.c6
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
        int f53921d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f53922e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f53923i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f53924o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f53922e = booleanRef;
            this.f53923i = aVar;
            this.f53924o = x5Var;
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
            return new l(this.f53922e, this.f53923i, this.f53924o, continuation);
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
                int r1 = r5.f53921d
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
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f53922e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f53921d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ys.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                en.k$a r6 = r5.f53923i
                en.h r6 = r6.c()
                wp.x5 r1 = r5.f53924o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f53922e
                wp.d6 r4 = new wp.d6
                r4.<init>()
                r3 = 0
                en.r r1 = en.w.f(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f31988a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
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
        this.f53675a = applicationContext;
        this.f53676b = submitVerificationWorker;
        this.f53677c = webRtcWorkerFactory;
        this.f53678d = selfieAnalyzeWorker;
        this.f53679e = permissionRequestWorkflow;
        this.f53680f = localVideoCaptureRenderer;
        this.f53681g = cameraXControllerFactory;
        this.f53682h = camera2ManagerFactoryFactory;
        this.f53683i = cameraStatsManager;
        this.f53684j = navigationStateManager;
        this.f53685k = externalEventLogger;
        dr.c.b();
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
        x5Var.e3(aVar, c.d.f53741a);
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
        x5Var.e3(aVar, new c.C0748c(((c.b.a) bVar).a()));
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
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean v10 = oVar.v();
        if (!oVar.u() && Y0(bVar) && bq.f.f(this.f53675a) && bVar.z().b()) {
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
        }, d.c.EnumC0755c.f53861d, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53681g;
        g.a aVar3 = this.f53682h;
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
            rp.d0 d0Var = rp.d0.f47575d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f53675a.getString(tp.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f53675a;
            String string = context.getString(tp.e.C, bq.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return rp.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f53679e, bVar.y(), null, new Function1() { // from class: wp.m4
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
            rp.d0 d0Var2 = rp.d0.f47576e;
            String o10 = bVar.o();
            if (o10 == null) {
                o10 = this.f53675a.getString(tp.e.M);
                Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
            }
            Context context2 = this.f53675a;
            String string2 = context2.getString(tp.e.L, bq.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            rp.c1 c1Var = this.f53679e;
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
        }, false, d.c.EnumC0755c.f53870u, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
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
        }, l32, null, bVar.z().b(), this.f53681g, this.f53682h, 0.0f, null, fVar.p(), false, false, false, 50331648, null);
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == rp.g1.f47601d) {
            action.e(x1.o.t(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f53738a);
        } else {
            x5Var.e3(aVar2, new c.C0748c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
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
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == rp.g1.f47601d) {
            action.e(x1.o.t(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f53738a);
        } else {
            x5Var.e3(aVar2, new c.C0748c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
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
        return Unit.f31988a;
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
        if (x5Var.l3(bVar) == lo.a.f35949d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.p(), oVar.k()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.p(), oVar.k(), 67, null));
        }
        return Unit.f31988a;
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
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f53675a.getString(tp.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f53675a.getString(tp.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f53675a.getString(tp.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f53675a.getString(tp.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f53675a.getString(tp.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f53675a.getString(tp.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f53675a.getString(tp.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.s(), bVar.y(), this.f53684j.b(), new Function0() { // from class: wp.i3
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
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        en.w.l(aVar, this.f53677c.a(bVar.z().c()), Reflection.typeOf(cr.b.class), "", new Function1() { // from class: wp.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0274b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0755c.f53861d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53681g;
        g.a aVar3 = this.f53682h;
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
            return Unit.f31988a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.q(), iVar3.t(), iVar3.b(), iVar3.l(), m6.i(action, true), iVar.p()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0274b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final ho.m b10 = ho.j.b(x5Var.f53675a, ho.n.f27614d);
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
        return Unit.f31988a;
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
        x5Var.e3(aVar, c.b.f53739a);
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
        jq.a b10 = this.f53684j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f53058a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f53060a) && !Intrinsics.areEqual(u10, d2.b.f53059a)) {
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
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
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
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: wp.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0755c.f53872w, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
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
        }, l32, null, bVar.z().b(), this.f53681g, this.f53682h, 0.0f, null, qVar.p(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f53675a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.q(), qVar.s(), qVar.b(), qVar.l(), m6.i(action, false)));
        return Unit.f31988a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.q(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.l(), x1Var.o(), ((b) cVar.b()).s(), x1Var.p(), zVar2.k());
        } else if (l3((b) cVar.b()) == lo.a.f35950e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.q(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.l(), x1Var.o(), x1Var.p(), 12, null);
        } else if (l3((b) cVar.b()) == lo.a.f35949d) {
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
        int i10 = e.f53899a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new as.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f53108i;
        } else {
            h1Var = h1.f53107e;
        }
        int[] iArr = e.f53900b;
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
                    enumC0755c = d.c.EnumC0755c.f53862e;
                } else {
                    throw new as.p();
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53867r;
            }
        } else {
            enumC0755c = d.c.EnumC0755c.f53864o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: wp.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53681g;
        g.a aVar3 = this.f53682h;
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
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
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
            if (aVar.v() == x1.g.f53580d) {
                gVar = x1.g.f53581e;
            } else {
                gVar = aVar.v();
            }
        } else {
            gVar = x1.g.f53580d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f53678d;
            if (gVar != x1.g.f53580d && gVar != x1.g.f53583o) {
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
        if (e10 == a1.b.f52972e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f52973i) {
            str2 = bVar.x().w();
        } else if (aVar.x() != null) {
            str2 = str;
        } else if (e10 == a1.b.f52971d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f53899a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0755c = d.c.EnumC0755c.f53862e;
                } else {
                    throw new as.p();
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53868s;
            }
        } else {
            enumC0755c = d.c.EnumC0755c.f53865p;
        }
        d.c.EnumC0755c enumC0755c2 = enumC0755c;
        if (aVar.j() && gVar != x1.g.f53582i && gVar != x1.g.f53583o) {
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
            }, false, enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f53582i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f53583o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar2);
        lo.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f53681g;
        g.a aVar5 = this.f53682h;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
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
                action.e(x1.a.t(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f53582i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0739c) {
            b1.c.C0739c c0739c = (b1.c.C0739c) cVar;
            if (c0739c.b() == jo.b.f31215s) {
                action.e(x1.a.t(aVar4, null, c0739c.c(), c0739c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.t(aVar4, c0739c.b(), c0739c.c(), c0739c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new as.p();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
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
        final a1.c cVar = new a1.c(absolutePath, a1.a.f52967i, bVar, System.currentTimeMillis());
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0754d c0754d;
        if (lVar.f().c()) {
            en.w.l(aVar, this.f53678d.a(a1.b.f52971d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.q2
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
        d.c.EnumC0755c enumC0755c = d.c.EnumC0755c.f53862e;
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
                }, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
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
                }, false, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a), 4, null);
                boolean t10 = bVar.t();
                jq.a b10 = this.f53684j.b();
                Function1 k10 = m6.k(aVar);
                lo.a l32 = l3(bVar);
                d.c.a v10 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f53681g;
                g.a aVar4 = this.f53682h;
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
            aVar2 = new d.c.b.a(enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        }
        c0754d = aVar2;
        boolean t102 = bVar.t();
        jq.a b102 = this.f53684j.b();
        Function1 k102 = m6.k(aVar);
        lo.a l322 = l3(bVar);
        d.c.a v102 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f53681g;
        g.a aVar42 = this.f53682h;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f31988a;
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
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.l(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.p(), lVar.k()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0739c) {
            b1.c.C0739c c0739c = (b1.c.C0739c) cVar;
            if (c0739c.b() == jo.b.f31215s) {
                t10 = x1.l.t(lVar3, false, null, c0739c.c(), c0739c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                t10 = x1.l.t(lVar3, false, c0739c.b(), c0739c.c(), c0739c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(t10);
        } else {
            throw new as.p();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    private final String i3(jo.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f53901c[bVar.ordinal()]) {
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
                int i10 = e.f53899a[bVar2.ordinal()];
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
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
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
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.l(), m6.i(action, false), bVar.s(), lVar.p(), lVar.k(), 2, null));
        return Unit.f31988a;
    }

    private final fq.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f24219a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b g10 = ((x1.k) x1Var).g();
            if (g10 != null) {
                str = m1.a(g10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f24219a;
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
                        return j.a.f24215a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f24218a;
                    }
                    throw new as.p();
                }
                return j.b.f24216a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0755c enumC0755c;
        String c10 = bVar.x().c();
        if (bVar2.t() instanceof x1.n) {
            enumC0755c = d.c.EnumC0755c.f53871v;
        } else {
            int i10 = e.f53899a[bVar2.s().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0755c = d.c.EnumC0755c.f53863i;
                    } else {
                        throw new as.p();
                    }
                } else {
                    enumC0755c = d.c.EnumC0755c.f53869t;
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53866q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: wp.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0755c, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
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
        }, l32, null, bVar.z().b(), this.f53681g, this.f53682h, 0.0f, null, bVar2.p(), bVar2.u(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        en.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f52967i, bVar, System.currentTimeMillis());
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
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f31988a;
    }

    private final lo.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f53675a);
        if (Result.e(f10) == null) {
            return (lo.a) f10;
        }
        return lo.a.f35951i;
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
        Object d10 = bVar.z().d(null, null, this.f53675a);
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
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            en.w.l(aVar, this.f53678d.a(a1.b.f52971d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.p4
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
        if (l3(bVar) == lo.a.f35950e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0752b c0752b = new d.c.b.C0752b(v10, z10, bVar.z().a(), d.c.EnumC0755c.f53862e, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a), new Function1() { // from class: wp.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53681g;
        g.a aVar3 = this.f53682h;
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
            en.w.l(aVar, this.f53678d.a(a1.b.f52971d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: wp.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        en.w.l(aVar, o.a.b(en.o.f23001a, 1000L, null, 2, null), Reflection.typeOf(en.o.class, KTypeProjection.f32092c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: wp.z2
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
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0755c.f53862e, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        boolean t12 = bVar.t();
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f53681g;
        g.a aVar4 = this.f53682h;
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
            return Unit.f31988a;
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
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f31988a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.l(), mVar.v(), mVar.u(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.p(), mVar.k(), 2, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
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
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f53739a);
        return Unit.f31988a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0755c enumC0755c;
        String str;
        final x1.d dVar2;
        d.c.b c0752b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f53899a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0755c = d.c.EnumC0755c.f53862e;
                } else {
                    throw new as.p();
                }
            } else {
                enumC0755c = d.c.EnumC0755c.f53868s;
            }
        } else {
            enumC0755c = d.c.EnumC0755c.f53865p;
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
            }, true, enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a));
        } else {
            dVar2 = dVar;
            int u10 = dVar2.u();
            if (l3(bVar) == lo.a.f35950e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0752b = new d.c.b.C0752b(u10, z10, bVar.z().a(), enumC0755c2, !Intrinsics.areEqual(bVar.u(), d2.b.f53059a), new Function1() { // from class: wp.j5
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
        jq.a b10 = this.f53684j.b();
        Function1 k10 = m6.k(aVar);
        lo.a l32 = l3(bVar);
        d.c.a v11 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f53681g;
        g.a aVar3 = this.f53682h;
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
        m6.t(x5Var.f53675a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        en.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f52967i, bVar, System.currentTimeMillis());
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
        return Unit.f31988a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        en.w.l(aVar, this.f53676b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.q(), nVar.s(), nVar.b(), nVar.l()), Reflection.typeOf(yp.c.class), "", new Function1() { // from class: wp.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        jq.b.d(this.f53684j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        jq.a b10 = this.f53684j.b();
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
        return Unit.f31988a;
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
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f24136d, false, 163, null);
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
        this.f53684j.c(renderProps.b(), renderProps.g(), !z10);
        this.f53685k.c(new i.e(renderProps.k(), j3(renderState)));
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
            y22 = this.f53680f.q(renderProps, (x1.e) renderState, context);
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
