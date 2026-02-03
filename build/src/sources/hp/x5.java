package hp;

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
import cp.c1;
import hp.a1;
import hp.b1;
import hp.d2;
import hp.x1;
import hp.x5;
import java.util.List;
import jp.c;
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
import nq.b;
import okio.ByteString;
import pn.v;
import pn.z;
import qp.i;
import qp.j;
import rn.g;
import wm.k;
import wm.o;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x5 extends wm.k {

    /* renamed from: l  reason: collision with root package name */
    public static final a f27841l = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f27842a;

    /* renamed from: b  reason: collision with root package name */
    private final c.a f27843b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f27844c;

    /* renamed from: d  reason: collision with root package name */
    private final b1.b f27845d;

    /* renamed from: e  reason: collision with root package name */
    private final cp.c1 f27846e;

    /* renamed from: f  reason: collision with root package name */
    private final kp.j f27847f;

    /* renamed from: g  reason: collision with root package name */
    private final z.a f27848g;

    /* renamed from: h  reason: collision with root package name */
    private final g.a f27849h;

    /* renamed from: i  reason: collision with root package name */
    private final un.a f27850i;

    /* renamed from: j  reason: collision with root package name */
    private final up.b f27851j;

    /* renamed from: k  reason: collision with root package name */
    private final qp.c f27852k;

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
        private final String f27853a;

        /* renamed from: b  reason: collision with root package name */
        private final String f27854b;

        /* renamed from: c  reason: collision with root package name */
        private final String f27855c;

        /* renamed from: d  reason: collision with root package name */
        private final String f27856d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f27857e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f27858f;

        /* renamed from: g  reason: collision with root package name */
        private final String f27859g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f27860h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f27861i;

        /* renamed from: j  reason: collision with root package name */
        private final a f27862j;

        /* renamed from: k  reason: collision with root package name */
        private final d2 f27863k;

        /* renamed from: l  reason: collision with root package name */
        private final List f27864l;

        /* renamed from: m  reason: collision with root package name */
        private final String f27865m;

        /* renamed from: n  reason: collision with root package name */
        private final String f27866n;

        /* renamed from: o  reason: collision with root package name */
        private final String f27867o;

        /* renamed from: p  reason: collision with root package name */
        private final String f27868p;

        /* renamed from: q  reason: collision with root package name */
        private final String f27869q;

        /* renamed from: r  reason: collision with root package name */
        private final String f27870r;

        /* renamed from: s  reason: collision with root package name */
        private final String f27871s;

        /* renamed from: t  reason: collision with root package name */
        private final String f27872t;

        /* renamed from: u  reason: collision with root package name */
        private final StepStyles.SelfieStepStyle f27873u;

        /* renamed from: v  reason: collision with root package name */
        private final VideoCaptureConfig f27874v;

        /* renamed from: w  reason: collision with root package name */
        private final NextStep.Selfie.AssetConfig f27875w;

        /* renamed from: x  reason: collision with root package name */
        private final PendingPageTextPosition f27876x;

        /* renamed from: y  reason: collision with root package name */
        private final s0 f27877y;

        /* renamed from: z  reason: collision with root package name */
        private final b0 f27878z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {
            private final String A;
            private final String B;
            private final String C;
            private final String D;

            /* renamed from: a  reason: collision with root package name */
            private final String f27879a;

            /* renamed from: b  reason: collision with root package name */
            private final String f27880b;

            /* renamed from: c  reason: collision with root package name */
            private final String f27881c;

            /* renamed from: d  reason: collision with root package name */
            private final String f27882d;

            /* renamed from: e  reason: collision with root package name */
            private final String f27883e;

            /* renamed from: f  reason: collision with root package name */
            private final String f27884f;

            /* renamed from: g  reason: collision with root package name */
            private final String f27885g;

            /* renamed from: h  reason: collision with root package name */
            private final String f27886h;

            /* renamed from: i  reason: collision with root package name */
            private final String f27887i;

            /* renamed from: j  reason: collision with root package name */
            private final String f27888j;

            /* renamed from: k  reason: collision with root package name */
            private final String f27889k;

            /* renamed from: l  reason: collision with root package name */
            private final String f27890l;

            /* renamed from: m  reason: collision with root package name */
            private final String f27891m;

            /* renamed from: n  reason: collision with root package name */
            private final String f27892n;

            /* renamed from: o  reason: collision with root package name */
            private final String f27893o;

            /* renamed from: p  reason: collision with root package name */
            private final String f27894p;

            /* renamed from: q  reason: collision with root package name */
            private final String f27895q;

            /* renamed from: r  reason: collision with root package name */
            private final String f27896r;

            /* renamed from: s  reason: collision with root package name */
            private final String f27897s;

            /* renamed from: t  reason: collision with root package name */
            private final String f27898t;

            /* renamed from: u  reason: collision with root package name */
            private final String f27899u;

            /* renamed from: v  reason: collision with root package name */
            private final String f27900v;

            /* renamed from: w  reason: collision with root package name */
            private final String f27901w;

            /* renamed from: x  reason: collision with root package name */
            private final String f27902x;

            /* renamed from: y  reason: collision with root package name */
            private final String f27903y;

            /* renamed from: z  reason: collision with root package name */
            private final String f27904z;

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
                this.f27879a = title;
                this.f27880b = prompt;
                this.f27881c = disclosure;
                this.f27882d = startButton;
                this.f27883e = capturePageTitle;
                this.f27884f = selfieHintTakePhoto;
                this.f27885g = selfieHintCenterFace;
                this.f27886h = selfieHintFaceTooClose;
                this.f27887i = selfieHintFaceTooFar;
                this.f27888j = selfieHintMultipleFaces;
                this.f27889k = selfieHintFaceIncomplete;
                this.f27890l = selfieHintPoseNotCentered;
                this.f27891m = selfieHintLookLeft;
                this.f27892n = selfieHintLookRight;
                this.f27893o = selfieHintHoldStill;
                this.f27894p = processingTitle;
                this.f27895q = processingDescription;
                this.f27896r = str;
                this.f27897s = str2;
                this.f27898t = str3;
                this.f27899u = str4;
                this.f27900v = str5;
                this.f27901w = str6;
                this.f27902x = str7;
                this.f27903y = str8;
                this.f27904z = str9;
                this.A = str10;
                this.B = str11;
                this.C = str12;
                this.D = str13;
            }

            public final String A() {
                return this.f27884f;
            }

            public final String B() {
                return this.f27882d;
            }

            public final String C() {
                return this.f27879a;
            }

            public final String a() {
                return this.f27903y;
            }

            public final String b() {
                return this.D;
            }

            public final String c() {
                return this.f27883e;
            }

            public final String d() {
                return this.f27904z;
            }

            public final String e() {
                return this.f27881c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f27879a, aVar.f27879a) && Intrinsics.areEqual(this.f27880b, aVar.f27880b) && Intrinsics.areEqual(this.f27881c, aVar.f27881c) && Intrinsics.areEqual(this.f27882d, aVar.f27882d) && Intrinsics.areEqual(this.f27883e, aVar.f27883e) && Intrinsics.areEqual(this.f27884f, aVar.f27884f) && Intrinsics.areEqual(this.f27885g, aVar.f27885g) && Intrinsics.areEqual(this.f27886h, aVar.f27886h) && Intrinsics.areEqual(this.f27887i, aVar.f27887i) && Intrinsics.areEqual(this.f27888j, aVar.f27888j) && Intrinsics.areEqual(this.f27889k, aVar.f27889k) && Intrinsics.areEqual(this.f27890l, aVar.f27890l) && Intrinsics.areEqual(this.f27891m, aVar.f27891m) && Intrinsics.areEqual(this.f27892n, aVar.f27892n) && Intrinsics.areEqual(this.f27893o, aVar.f27893o) && Intrinsics.areEqual(this.f27894p, aVar.f27894p) && Intrinsics.areEqual(this.f27895q, aVar.f27895q) && Intrinsics.areEqual(this.f27896r, aVar.f27896r) && Intrinsics.areEqual(this.f27897s, aVar.f27897s) && Intrinsics.areEqual(this.f27898t, aVar.f27898t) && Intrinsics.areEqual(this.f27899u, aVar.f27899u) && Intrinsics.areEqual(this.f27900v, aVar.f27900v) && Intrinsics.areEqual(this.f27901w, aVar.f27901w) && Intrinsics.areEqual(this.f27902x, aVar.f27902x) && Intrinsics.areEqual(this.f27903y, aVar.f27903y) && Intrinsics.areEqual(this.f27904z, aVar.f27904z) && Intrinsics.areEqual(this.A, aVar.A) && Intrinsics.areEqual(this.B, aVar.B) && Intrinsics.areEqual(this.C, aVar.C) && Intrinsics.areEqual(this.D, aVar.D)) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f27895q;
            }

            public final String g() {
                return this.f27894p;
            }

            public final String h() {
                return this.f27880b;
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
                int hashCode13 = ((((((((((((((((((((((((((((((((this.f27879a.hashCode() * 31) + this.f27880b.hashCode()) * 31) + this.f27881c.hashCode()) * 31) + this.f27882d.hashCode()) * 31) + this.f27883e.hashCode()) * 31) + this.f27884f.hashCode()) * 31) + this.f27885g.hashCode()) * 31) + this.f27886h.hashCode()) * 31) + this.f27887i.hashCode()) * 31) + this.f27888j.hashCode()) * 31) + this.f27889k.hashCode()) * 31) + this.f27890l.hashCode()) * 31) + this.f27891m.hashCode()) * 31) + this.f27892n.hashCode()) * 31) + this.f27893o.hashCode()) * 31) + this.f27894p.hashCode()) * 31) + this.f27895q.hashCode()) * 31;
                String str = this.f27896r;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode13 + hashCode) * 31;
                String str2 = this.f27897s;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f27898t;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f27899u;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int i14 = (i13 + hashCode4) * 31;
                String str5 = this.f27900v;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int i15 = (i14 + hashCode5) * 31;
                String str6 = this.f27901w;
                if (str6 == null) {
                    hashCode6 = 0;
                } else {
                    hashCode6 = str6.hashCode();
                }
                int i16 = (i15 + hashCode6) * 31;
                String str7 = this.f27902x;
                if (str7 == null) {
                    hashCode7 = 0;
                } else {
                    hashCode7 = str7.hashCode();
                }
                int i17 = (i16 + hashCode7) * 31;
                String str8 = this.f27903y;
                if (str8 == null) {
                    hashCode8 = 0;
                } else {
                    hashCode8 = str8.hashCode();
                }
                int i18 = (i17 + hashCode8) * 31;
                String str9 = this.f27904z;
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
                return this.f27902x;
            }

            public final String j() {
                return this.f27901w;
            }

            public final String k() {
                return this.f27897s;
            }

            public final String l() {
                return this.f27898t;
            }

            public final String m() {
                return this.f27899u;
            }

            public final String n() {
                return this.f27900v;
            }

            public final String o() {
                return this.f27896r;
            }

            public final String p() {
                return this.f27885g;
            }

            public final String q() {
                return this.f27889k;
            }

            public final String r() {
                return this.f27886h;
            }

            public final String s() {
                return this.f27887i;
            }

            public final String t() {
                return this.f27893o;
            }

            public String toString() {
                String str = this.f27879a;
                String str2 = this.f27880b;
                String str3 = this.f27881c;
                String str4 = this.f27882d;
                String str5 = this.f27883e;
                String str6 = this.f27884f;
                String str7 = this.f27885g;
                String str8 = this.f27886h;
                String str9 = this.f27887i;
                String str10 = this.f27888j;
                String str11 = this.f27889k;
                String str12 = this.f27890l;
                String str13 = this.f27891m;
                String str14 = this.f27892n;
                String str15 = this.f27893o;
                String str16 = this.f27894p;
                String str17 = this.f27895q;
                String str18 = this.f27896r;
                String str19 = this.f27897s;
                String str20 = this.f27898t;
                String str21 = this.f27899u;
                String str22 = this.f27900v;
                String str23 = this.f27901w;
                String str24 = this.f27902x;
                String str25 = this.f27903y;
                String str26 = this.f27904z;
                String str27 = this.A;
                String str28 = this.B;
                String str29 = this.C;
                String str30 = this.D;
                return "Strings(title=" + str + ", prompt=" + str2 + ", disclosure=" + str3 + ", startButton=" + str4 + ", capturePageTitle=" + str5 + ", selfieHintTakePhoto=" + str6 + ", selfieHintCenterFace=" + str7 + ", selfieHintFaceTooClose=" + str8 + ", selfieHintFaceTooFar=" + str9 + ", selfieHintMultipleFaces=" + str10 + ", selfieHintFaceIncomplete=" + str11 + ", selfieHintPoseNotCentered=" + str12 + ", selfieHintLookLeft=" + str13 + ", selfieHintLookRight=" + str14 + ", selfieHintHoldStill=" + str15 + ", processingTitle=" + str16 + ", processingDescription=" + str17 + ", selfieCheckPageTitle=" + str18 + ", selfieCheckPageDescription=" + str19 + ", selfieCheckPageLabelFront=" + str20 + ", selfieCheckPageLabelLeft=" + str21 + ", selfieCheckPageLabelRight=" + str22 + ", selfieCheckPageBtnSubmit=" + str23 + ", selfieCheckPageBtnRetake=" + str24 + ", autoCaptureOn=" + str25 + ", captureSuccess=" + str26 + ", selfieHintCenterFaceDescription=" + str27 + ", selfieHintLookLeftDescription=" + str28 + ", selfieHintLookRightDescription=" + str29 + ", cameraLoadingTitle=" + str30 + ")";
            }

            public final String u() {
                return this.f27891m;
            }

            public final String v() {
                return this.B;
            }

            public final String w() {
                return this.f27892n;
            }

            public final String x() {
                return this.C;
            }

            public final String y() {
                return this.f27888j;
            }

            public final String z() {
                return this.f27890l;
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
            this.f27853a = sessionToken;
            this.f27854b = inquiryId;
            this.f27855c = fromComponent;
            this.f27856d = fromStep;
            this.f27857e = z10;
            this.f27858f = z11;
            this.f27859g = fieldKeySelfie;
            this.f27860h = z12;
            this.f27861i = z13;
            this.f27862j = strings;
            this.f27863k = selfieType;
            this.f27864l = orderedPoses;
            this.f27865m = str;
            this.f27866n = str2;
            this.f27867o = str3;
            this.f27868p = str4;
            this.f27869q = str5;
            this.f27870r = str6;
            this.f27871s = str7;
            this.f27872t = str8;
            this.f27873u = selfieStepStyle;
            this.f27874v = videoCaptureConfig;
            this.f27875w = assetConfig;
            this.f27876x = pendingPageTextVerticalPosition;
            this.f27877y = poseConfigs;
            this.f27878z = designVersion;
        }

        public final NextStep.Selfie.AssetConfig a() {
            return this.f27875w;
        }

        public final boolean b() {
            return this.f27857e;
        }

        public final String c() {
            return this.f27868p;
        }

        public final String d() {
            return this.f27867o;
        }

        public final String e() {
            return this.f27866n;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f27853a, bVar.f27853a) && Intrinsics.areEqual(this.f27854b, bVar.f27854b) && Intrinsics.areEqual(this.f27855c, bVar.f27855c) && Intrinsics.areEqual(this.f27856d, bVar.f27856d) && this.f27857e == bVar.f27857e && this.f27858f == bVar.f27858f && Intrinsics.areEqual(this.f27859g, bVar.f27859g) && this.f27860h == bVar.f27860h && this.f27861i == bVar.f27861i && Intrinsics.areEqual(this.f27862j, bVar.f27862j) && Intrinsics.areEqual(this.f27863k, bVar.f27863k) && Intrinsics.areEqual(this.f27864l, bVar.f27864l) && Intrinsics.areEqual(this.f27865m, bVar.f27865m) && Intrinsics.areEqual(this.f27866n, bVar.f27866n) && Intrinsics.areEqual(this.f27867o, bVar.f27867o) && Intrinsics.areEqual(this.f27868p, bVar.f27868p) && Intrinsics.areEqual(this.f27869q, bVar.f27869q) && Intrinsics.areEqual(this.f27870r, bVar.f27870r) && Intrinsics.areEqual(this.f27871s, bVar.f27871s) && Intrinsics.areEqual(this.f27872t, bVar.f27872t) && Intrinsics.areEqual(this.f27873u, bVar.f27873u) && Intrinsics.areEqual(this.f27874v, bVar.f27874v) && Intrinsics.areEqual(this.f27875w, bVar.f27875w) && this.f27876x == bVar.f27876x && Intrinsics.areEqual(this.f27877y, bVar.f27877y) && this.f27878z == bVar.f27878z) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f27865m;
        }

        public final boolean g() {
            return this.f27858f;
        }

        public final b0 h() {
            return this.f27878z;
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
            int hashCode9 = ((((((((((((((((((((((this.f27853a.hashCode() * 31) + this.f27854b.hashCode()) * 31) + this.f27855c.hashCode()) * 31) + this.f27856d.hashCode()) * 31) + Boolean.hashCode(this.f27857e)) * 31) + Boolean.hashCode(this.f27858f)) * 31) + this.f27859g.hashCode()) * 31) + Boolean.hashCode(this.f27860h)) * 31) + Boolean.hashCode(this.f27861i)) * 31) + this.f27862j.hashCode()) * 31) + this.f27863k.hashCode()) * 31) + this.f27864l.hashCode()) * 31;
            String str = this.f27865m;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode9 + hashCode) * 31;
            String str2 = this.f27866n;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f27867o;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f27868p;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f27869q;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f27870r;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int i16 = (i15 + hashCode6) * 31;
            String str7 = this.f27871s;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int i17 = (i16 + hashCode7) * 31;
            String str8 = this.f27872t;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i18 = (i17 + hashCode8) * 31;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f27873u;
            if (selfieStepStyle != null) {
                i10 = selfieStepStyle.hashCode();
            }
            return ((((((((((i18 + i10) * 31) + this.f27874v.hashCode()) * 31) + this.f27875w.hashCode()) * 31) + this.f27876x.hashCode()) * 31) + this.f27877y.hashCode()) * 31) + this.f27878z.hashCode();
        }

        public final String i() {
            return this.f27859g;
        }

        public final String j() {
            return this.f27855c;
        }

        public final String k() {
            return this.f27856d;
        }

        public final String l() {
            return this.f27854b;
        }

        public final String m() {
            return this.f27872t;
        }

        public final String n() {
            return this.f27871s;
        }

        public final String o() {
            return this.f27870r;
        }

        public final String p() {
            return this.f27869q;
        }

        public final List q() {
            return this.f27864l;
        }

        public final PendingPageTextPosition r() {
            return this.f27876x;
        }

        public final s0 s() {
            return this.f27877y;
        }

        public final boolean t() {
            return this.f27860h;
        }

        public String toString() {
            String str = this.f27853a;
            String str2 = this.f27854b;
            String str3 = this.f27855c;
            String str4 = this.f27856d;
            boolean z10 = this.f27857e;
            boolean z11 = this.f27858f;
            String str5 = this.f27859g;
            boolean z12 = this.f27860h;
            boolean z13 = this.f27861i;
            a aVar = this.f27862j;
            d2 d2Var = this.f27863k;
            List list = this.f27864l;
            String str6 = this.f27865m;
            String str7 = this.f27866n;
            String str8 = this.f27867o;
            String str9 = this.f27868p;
            String str10 = this.f27869q;
            String str11 = this.f27870r;
            String str12 = this.f27871s;
            String str13 = this.f27872t;
            StepStyles.SelfieStepStyle selfieStepStyle = this.f27873u;
            VideoCaptureConfig videoCaptureConfig = this.f27874v;
            NextStep.Selfie.AssetConfig assetConfig = this.f27875w;
            PendingPageTextPosition pendingPageTextPosition = this.f27876x;
            s0 s0Var = this.f27877y;
            b0 b0Var = this.f27878z;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromComponent=" + str3 + ", fromStep=" + str4 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", fieldKeySelfie=" + str5 + ", requireStrictSelfieCapture=" + z12 + ", skipPromptPage=" + z13 + ", strings=" + aVar + ", selfieType=" + d2Var + ", orderedPoses=" + list + ", cameraPermissionsTitle=" + str6 + ", cameraPermissionsRationale=" + str7 + ", cameraPermissionsModalPositiveButton=" + str8 + ", cameraPermissionsModalNegativeButton=" + str9 + ", microphonePermissionsTitle=" + str10 + ", microphonePermissionsRationale=" + str11 + ", microphonePermissionsModalPositiveButton=" + str12 + ", microphonePermissionsModalNegativeButton=" + str13 + ", styles=" + selfieStepStyle + ", videoCaptureConfig=" + videoCaptureConfig + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ", poseConfigs=" + s0Var + ", designVersion=" + b0Var + ")";
        }

        public final d2 u() {
            return this.f27863k;
        }

        public final String v() {
            return this.f27853a;
        }

        public final boolean w() {
            return this.f27861i;
        }

        public final a x() {
            return this.f27862j;
        }

        public final StepStyles.SelfieStepStyle y() {
            return this.f27873u;
        }

        public final VideoCaptureConfig z() {
            return this.f27874v;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f27905a = new a();

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
            public static final b f27906a = new b();

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

        /* renamed from: hp.x5$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0359c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f27907a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0359c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f27907a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f27907a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0359c) && Intrinsics.areEqual(this.f27907a, ((C0359c) obj).f27907a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f27907a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f27907a;
                return "Error(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f27908a = new d();

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
            private final String f27909a;

            /* renamed from: b  reason: collision with root package name */
            private final String f27910b;

            /* renamed from: c  reason: collision with root package name */
            private final String f27911c;

            /* renamed from: d  reason: collision with root package name */
            private final String f27912d;

            /* renamed from: e  reason: collision with root package name */
            private final String f27913e;

            /* renamed from: f  reason: collision with root package name */
            private final String f27914f;

            /* renamed from: g  reason: collision with root package name */
            private final boolean f27915g;

            /* renamed from: h  reason: collision with root package name */
            private final AbstractC0360a f27916h;

            /* renamed from: i  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f27917i;

            /* renamed from: j  reason: collision with root package name */
            private final boolean f27918j;

            /* renamed from: k  reason: collision with root package name */
            private final up.a f27919k;

            /* renamed from: l  reason: collision with root package name */
            private final Function0 f27920l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f27921m;

            /* renamed from: n  reason: collision with root package name */
            private final Function1 f27922n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f27923o;

            /* renamed from: p  reason: collision with root package name */
            private final vn.a f27924p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f27925q;

            /* renamed from: r  reason: collision with root package name */
            private final z.a f27926r;

            /* renamed from: s  reason: collision with root package name */
            private final g.a f27927s;

            /* renamed from: t  reason: collision with root package name */
            private final Function1 f27928t;

            /* renamed from: u  reason: collision with root package name */
            private final float f27929u;

            /* renamed from: v  reason: collision with root package name */
            private final tn.a f27930v;

            /* renamed from: w  reason: collision with root package name */
            private final v.b f27931w;

            /* renamed from: x  reason: collision with root package name */
            private final boolean f27932x;

            /* renamed from: y  reason: collision with root package name */
            private final boolean f27933y;

            /* renamed from: z  reason: collision with root package name */
            private final Function1 f27934z;

            /* renamed from: hp.x5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class AbstractC0360a {

                /* renamed from: hp.x5$d$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0361a extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27935a;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0361a(b overlay) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f27935a = overlay;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27935a;
                    }
                }

                /* renamed from: hp.x5$d$a$a$b */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class b extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27936a;

                    /* renamed from: b  reason: collision with root package name */
                    private final int f27937b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f27938c;

                    /* renamed from: d  reason: collision with root package name */
                    private final long f27939d;

                    /* renamed from: e  reason: collision with root package name */
                    private final Function1 f27940e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public b(b overlay, int i10, boolean z10, long j10, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f27936a = overlay;
                        this.f27937b = i10;
                        this.f27938c = z10;
                        this.f27939d = j10;
                        this.f27940e = onError;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27936a;
                    }

                    public final int b() {
                        return this.f27937b;
                    }

                    public final long c() {
                        return this.f27939d;
                    }

                    public final Function1 d() {
                        return this.f27940e;
                    }

                    public final boolean e() {
                        return this.f27938c;
                    }
                }

                /* renamed from: hp.x5$d$a$a$c */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class c extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27941a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f27942b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function0 f27943c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f27944d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public c(b overlay, Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        this.f27941a = overlay;
                        this.f27942b = finalizeVideo;
                        this.f27943c = onAnimationComplete;
                        this.f27944d = z10;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27941a;
                    }

                    public final Function1 b() {
                        return this.f27942b;
                    }

                    public final Function0 c() {
                        return this.f27943c;
                    }

                    public final boolean d() {
                        return this.f27944d;
                    }
                }

                /* renamed from: hp.x5$d$a$a$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0362d extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27945a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f27946b;

                    /* renamed from: c  reason: collision with root package name */
                    private final Function1 f27947c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f27948d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0362d(b overlay, Function1 processImage, Function1 onError, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f27945a = overlay;
                        this.f27946b = processImage;
                        this.f27947c = onError;
                        this.f27948d = z10;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27945a;
                    }

                    public final boolean b() {
                        return this.f27948d;
                    }

                    public final Function1 c() {
                        return this.f27947c;
                    }

                    public final Function1 d() {
                        return this.f27946b;
                    }
                }

                /* renamed from: hp.x5$d$a$a$e */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27949a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f27950b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(b overlay, Function0 onCaptureClicked) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        this.f27949a = overlay;
                        this.f27950b = onCaptureClicked;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27949a;
                    }

                    public final Function0 b() {
                        return this.f27950b;
                    }
                }

                /* renamed from: hp.x5$d$a$a$f */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27951a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f27952b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(b overlay, Function0 poseHintComplete) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        this.f27951a = overlay;
                        this.f27952b = poseHintComplete;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27951a;
                    }

                    public final Function0 b() {
                        return this.f27952b;
                    }
                }

                /* renamed from: hp.x5$d$a$a$g */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27953a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f27954b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(b overlay, Function1 previewReady) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        this.f27953a = overlay;
                        this.f27954b = previewReady;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27953a;
                    }

                    public final Function1 b() {
                        return this.f27954b;
                    }
                }

                /* renamed from: hp.x5$d$a$a$h */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27955a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f27956b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f27957c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(b overlay, Function0 onComplete, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        this.f27955a = overlay;
                        this.f27956b = onComplete;
                        this.f27957c = z10;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27955a;
                    }

                    public final boolean b() {
                        return this.f27957c;
                    }

                    public final Function0 c() {
                        return this.f27956b;
                    }
                }

                /* renamed from: hp.x5$d$a$a$i */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends AbstractC0360a {

                    /* renamed from: a  reason: collision with root package name */
                    private final b f27958a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f27959b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(b overlay, long j10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f27958a = overlay;
                        this.f27959b = j10;
                    }

                    @Override // hp.x5.d.a.AbstractC0360a
                    public b a() {
                        return this.f27958a;
                    }

                    public final long b() {
                        return this.f27959b;
                    }
                }

                public /* synthetic */ AbstractC0360a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract b a();

                private AbstractC0360a() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b {

                /* renamed from: d  reason: collision with root package name */
                public static final b f27960d = new b("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final b f27961e = new b("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final b f27962i = new b("LOOK_LEFT", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final b f27963o = new b("LOOK_RIGHT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final b f27964p = new b("FINALIZING", 4);

                /* renamed from: q  reason: collision with root package name */
                private static final /* synthetic */ b[] f27965q;

                /* renamed from: r  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f27966r;

                static {
                    b[] a10 = a();
                    f27965q = a10;
                    f27966r = sr.a.a(a10);
                }

                private b(String str, int i10) {
                }

                private static final /* synthetic */ b[] a() {
                    return new b[]{f27960d, f27961e, f27962i, f27963o, f27964p};
                }

                public static b valueOf(String str) {
                    return (b) Enum.valueOf(b.class, str);
                }

                public static b[] values() {
                    return (b[]) f27965q.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, String str3, String str4, String str5, String str6, boolean z10, AbstractC0360a mode, StepStyles.SelfieStepStyle selfieStepStyle, boolean z11, up.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, vn.a videoCaptureMethod, oq.a aVar, boolean z12, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, Function1 onCameraFacingModeSelected, float f10, tn.a aVar2, v.b facingMode, boolean z13, boolean z14, Function1 onFlashSet, a1.b bVar, boolean z15) {
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
                this.f27909a = str;
                this.f27910b = str2;
                this.f27911c = str3;
                this.f27912d = str4;
                this.f27913e = str5;
                this.f27914f = str6;
                this.f27915g = z10;
                this.f27916h = mode;
                this.f27917i = selfieStepStyle;
                this.f27918j = z11;
                this.f27919k = navigationState;
                this.f27920l = onBack;
                this.f27921m = onCancel;
                this.f27922n = onCameraError;
                this.f27923o = onPermissionChanged;
                this.f27924p = videoCaptureMethod;
                this.f27925q = z12;
                this.f27926r = cameraXControllerFactory;
                this.f27927s = camera2ManagerFactoryFactory;
                this.f27928t = onCameraFacingModeSelected;
                this.f27929u = f10;
                this.f27930v = aVar2;
                this.f27931w = facingMode;
                this.f27932x = z13;
                this.f27933y = z14;
                this.f27934z = onFlashSet;
                this.A = bVar;
                this.B = z15;
            }

            public final boolean A() {
                return this.f27915g;
            }

            public final boolean B() {
                return this.f27932x;
            }

            public final boolean C() {
                return this.f27933y;
            }

            public final String a() {
                return this.f27912d;
            }

            public final tn.a b() {
                return this.f27930v;
            }

            public final g.a c() {
                return this.f27927s;
            }

            public final z.a d() {
                return this.f27926r;
            }

            public final String e() {
                return this.f27913e;
            }

            public final String f() {
                return this.f27911c;
            }

            public final v.b g() {
                return this.f27931w;
            }

            public final String h() {
                return this.f27910b;
            }

            public final AbstractC0360a i() {
                return this.f27916h;
            }

            public final up.a j() {
                return this.f27919k;
            }

            public final Function0 k() {
                return this.f27920l;
            }

            public final Function1 l() {
                return this.f27922n;
            }

            public final Function1 m() {
                return this.f27928t;
            }

            public final Function0 n() {
                return this.f27921m;
            }

            public final Function1 o() {
                return this.f27934z;
            }

            public final Function0 p() {
                return this.f27923o;
            }

            public final a1.b q() {
                return this.A;
            }

            public final float r() {
                return this.f27929u;
            }

            public final String s() {
                return this.f27914f;
            }

            public final boolean t() {
                return this.B;
            }

            public final boolean u() {
                return this.f27918j;
            }

            public final StepStyles.SelfieStepStyle v() {
                return this.f27917i;
            }

            public final String w() {
                return this.f27909a;
            }

            public final vn.a x() {
                return this.f27924p;
            }

            public final oq.a y() {
                return null;
            }

            public final boolean z() {
                return this.f27925q;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f27967a;

            /* renamed from: b  reason: collision with root package name */
            private final String f27968b;

            /* renamed from: c  reason: collision with root package name */
            private final String f27969c;

            /* renamed from: d  reason: collision with root package name */
            private final String f27970d;

            /* renamed from: e  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f27971e;

            /* renamed from: f  reason: collision with root package name */
            private final RemoteImage f27972f;

            /* renamed from: g  reason: collision with root package name */
            private final up.a f27973g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f27974h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f27975i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f27976j;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String title, String prompt, String disclosure, String start, StepStyles.SelfieStepStyle selfieStepStyle, RemoteImage remoteImage, up.a navigationState, Function0 onClick, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(prompt, "prompt");
                Intrinsics.checkNotNullParameter(disclosure, "disclosure");
                Intrinsics.checkNotNullParameter(start, "start");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f27967a = title;
                this.f27968b = prompt;
                this.f27969c = disclosure;
                this.f27970d = start;
                this.f27971e = selfieStepStyle;
                this.f27972f = remoteImage;
                this.f27973g = navigationState;
                this.f27974h = onClick;
                this.f27975i = onBack;
                this.f27976j = onCancel;
            }

            public final String a() {
                return this.f27969c;
            }

            public final RemoteImage b() {
                return this.f27972f;
            }

            public final up.a c() {
                return this.f27973g;
            }

            public final Function0 d() {
                return this.f27975i;
            }

            public final Function0 e() {
                return this.f27976j;
            }

            public final Function0 f() {
                return this.f27974h;
            }

            public final String g() {
                return this.f27968b;
            }

            public final String h() {
                return this.f27970d;
            }

            public final StepStyles.SelfieStepStyle i() {
                return this.f27971e;
            }

            public final String j() {
                return this.f27967a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f27977a;

            /* renamed from: b  reason: collision with root package name */
            private final String f27978b;

            /* renamed from: c  reason: collision with root package name */
            private final b f27979c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f27980d;

            /* renamed from: e  reason: collision with root package name */
            private final a f27981e;

            /* renamed from: f  reason: collision with root package name */
            private final boolean f27982f;

            /* renamed from: g  reason: collision with root package name */
            private final up.a f27983g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f27984h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f27985i;

            /* renamed from: j  reason: collision with root package name */
            private final Function1 f27986j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f27987k;

            /* renamed from: l  reason: collision with root package name */
            private final vn.a f27988l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f27989m;

            /* renamed from: n  reason: collision with root package name */
            private final z.a f27990n;

            /* renamed from: o  reason: collision with root package name */
            private final g.a f27991o;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final RemoteImage f27992a;

                /* renamed from: b  reason: collision with root package name */
                private final RemoteImage f27993b;

                public a(RemoteImage remoteImage, RemoteImage remoteImage2) {
                    this.f27992a = remoteImage;
                    this.f27993b = remoteImage2;
                }

                public final RemoteImage a() {
                    return this.f27992a;
                }

                public final RemoteImage b() {
                    return this.f27993b;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f27992a, aVar.f27992a) && Intrinsics.areEqual(this.f27993b, aVar.f27993b)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    RemoteImage remoteImage = this.f27992a;
                    int i10 = 0;
                    if (remoteImage == null) {
                        hashCode = 0;
                    } else {
                        hashCode = remoteImage.hashCode();
                    }
                    int i11 = hashCode * 31;
                    RemoteImage remoteImage2 = this.f27993b;
                    if (remoteImage2 != null) {
                        i10 = remoteImage2.hashCode();
                    }
                    return i11 + i10;
                }

                public String toString() {
                    RemoteImage remoteImage = this.f27992a;
                    RemoteImage remoteImage2 = this.f27993b;
                    return "AssetOverrides(leftPoseImage=" + remoteImage + ", rightPoseImage=" + remoteImage2 + ")";
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static abstract class b {

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0366c f27994a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f27995b;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public a(EnumC0366c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f27994a = overlay;
                        this.f27995b = z10;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f27994a;
                    }

                    public boolean b() {
                        return this.f27995b;
                    }
                }

                /* renamed from: hp.x5$d$c$b$b  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0363b extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final int f27996a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f27997b;

                    /* renamed from: c  reason: collision with root package name */
                    private final long f27998c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0366c f27999d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f28000e;

                    /* renamed from: f  reason: collision with root package name */
                    private final Function1 f28001f;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0363b(int i10, boolean z10, long j10, EnumC0366c overlay, boolean z11, Function1 onError) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        this.f27996a = i10;
                        this.f27997b = z10;
                        this.f27998c = j10;
                        this.f27999d = overlay;
                        this.f28000e = z11;
                        this.f28001f = onError;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f27999d;
                    }

                    public final int b() {
                        return this.f27996a;
                    }

                    public final long c() {
                        return this.f27998c;
                    }

                    public final Function1 d() {
                        return this.f28001f;
                    }

                    public final boolean e() {
                        return this.f27997b;
                    }

                    public boolean f() {
                        return this.f28000e;
                    }
                }

                /* renamed from: hp.x5$d$c$b$c  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0364c extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f28002a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function0 f28003b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f28004c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0366c f28005d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f28006e;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0364c(Function1 finalizeVideo, Function0 onAnimationComplete, boolean z10, EnumC0366c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(finalizeVideo, "finalizeVideo");
                        Intrinsics.checkNotNullParameter(onAnimationComplete, "onAnimationComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28002a = finalizeVideo;
                        this.f28003b = onAnimationComplete;
                        this.f28004c = z10;
                        this.f28005d = overlay;
                        this.f28006e = z11;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28005d;
                    }

                    public final Function1 b() {
                        return this.f28002a;
                    }

                    public final Function0 c() {
                        return this.f28003b;
                    }

                    public boolean d() {
                        return this.f28006e;
                    }

                    public final boolean e() {
                        return this.f28004c;
                    }
                }

                /* renamed from: hp.x5$d$c$b$d  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0365d extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f28007a;

                    /* renamed from: b  reason: collision with root package name */
                    private final Function1 f28008b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f28009c;

                    /* renamed from: d  reason: collision with root package name */
                    private final EnumC0366c f28010d;

                    /* renamed from: e  reason: collision with root package name */
                    private final boolean f28011e;

                    public /* synthetic */ C0365d(Function1 function1, Function1 function12, boolean z10, EnumC0366c enumC0366c, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                        this(function1, function12, (i10 & 4) != 0 ? false : z10, enumC0366c, z11);
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28010d;
                    }

                    public final boolean b() {
                        return this.f28009c;
                    }

                    public final Function1 c() {
                        return this.f28008b;
                    }

                    public final Function1 d() {
                        return this.f28007a;
                    }

                    public boolean e() {
                        return this.f28011e;
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public C0365d(Function1 processImage, Function1 onError, boolean z10, EnumC0366c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(processImage, "processImage");
                        Intrinsics.checkNotNullParameter(onError, "onError");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28007a = processImage;
                        this.f28008b = onError;
                        this.f28009c = z10;
                        this.f28010d = overlay;
                        this.f28011e = z11;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class e extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f28012a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0366c f28013b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f28014c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public e(Function0 onCaptureClicked, EnumC0366c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onCaptureClicked, "onCaptureClicked");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28012a = onCaptureClicked;
                        this.f28013b = overlay;
                        this.f28014c = z10;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28013b;
                    }

                    public final Function0 b() {
                        return this.f28012a;
                    }

                    public boolean c() {
                        return this.f28014c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class f extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f28015a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0366c f28016b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f28017c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public f(Function0 poseHintComplete, EnumC0366c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(poseHintComplete, "poseHintComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28015a = poseHintComplete;
                        this.f28016b = overlay;
                        this.f28017c = z10;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28016b;
                    }

                    public final Function0 b() {
                        return this.f28015a;
                    }

                    public boolean c() {
                        return this.f28017c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class g extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function1 f28018a;

                    /* renamed from: b  reason: collision with root package name */
                    private final EnumC0366c f28019b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f28020c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public g(Function1 previewReady, EnumC0366c overlay, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(previewReady, "previewReady");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28018a = previewReady;
                        this.f28019b = overlay;
                        this.f28020c = z10;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28019b;
                    }

                    public final Function1 b() {
                        return this.f28018a;
                    }

                    public boolean c() {
                        return this.f28020c;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class h extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final Function0 f28021a;

                    /* renamed from: b  reason: collision with root package name */
                    private final boolean f28022b;

                    /* renamed from: c  reason: collision with root package name */
                    private final EnumC0366c f28023c;

                    /* renamed from: d  reason: collision with root package name */
                    private final boolean f28024d;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public h(Function0 onComplete, boolean z10, EnumC0366c overlay, boolean z11) {
                        super(null);
                        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28021a = onComplete;
                        this.f28022b = z10;
                        this.f28023c = overlay;
                        this.f28024d = z11;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28023c;
                    }

                    public final boolean b() {
                        return this.f28022b;
                    }

                    public final Function0 c() {
                        return this.f28021a;
                    }

                    public boolean d() {
                        return this.f28024d;
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class i extends b {

                    /* renamed from: a  reason: collision with root package name */
                    private final EnumC0366c f28025a;

                    /* renamed from: b  reason: collision with root package name */
                    private final long f28026b;

                    /* renamed from: c  reason: collision with root package name */
                    private final boolean f28027c;

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    public i(EnumC0366c overlay, long j10, boolean z10) {
                        super(null);
                        Intrinsics.checkNotNullParameter(overlay, "overlay");
                        this.f28025a = overlay;
                        this.f28026b = j10;
                        this.f28027c = z10;
                    }

                    @Override // hp.x5.d.c.b
                    public EnumC0366c a() {
                        return this.f28025a;
                    }

                    public final long b() {
                        return this.f28026b;
                    }
                }

                public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public abstract EnumC0366c a();

                private b() {
                }
            }

            /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
            /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
            /* renamed from: hp.x5$d$c$c  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class EnumC0366c {

                /* renamed from: d  reason: collision with root package name */
                public static final EnumC0366c f28028d = new EnumC0366c("CLEAR", 0);

                /* renamed from: e  reason: collision with root package name */
                public static final EnumC0366c f28029e = new EnumC0366c("CENTER", 1);

                /* renamed from: i  reason: collision with root package name */
                public static final EnumC0366c f28030i = new EnumC0366c("CENTER_COMPLETE", 2);

                /* renamed from: o  reason: collision with root package name */
                public static final EnumC0366c f28031o = new EnumC0366c("LOOK_LEFT_HINT", 3);

                /* renamed from: p  reason: collision with root package name */
                public static final EnumC0366c f28032p = new EnumC0366c("LOOK_LEFT", 4);

                /* renamed from: q  reason: collision with root package name */
                public static final EnumC0366c f28033q = new EnumC0366c("LOOK_LEFT_COMPLETE", 5);

                /* renamed from: r  reason: collision with root package name */
                public static final EnumC0366c f28034r = new EnumC0366c("LOOK_RIGHT_HINT", 6);

                /* renamed from: s  reason: collision with root package name */
                public static final EnumC0366c f28035s = new EnumC0366c("LOOK_RIGHT", 7);

                /* renamed from: t  reason: collision with root package name */
                public static final EnumC0366c f28036t = new EnumC0366c("LOOK_RIGHT_COMPLETE", 8);

                /* renamed from: u  reason: collision with root package name */
                public static final EnumC0366c f28037u = new EnumC0366c("FINALIZING", 9);

                /* renamed from: v  reason: collision with root package name */
                public static final EnumC0366c f28038v = new EnumC0366c("COMPLETE_WITH_CAPTURE", 10);

                /* renamed from: w  reason: collision with root package name */
                public static final EnumC0366c f28039w = new EnumC0366c("COMPLETE", 11);

                /* renamed from: x  reason: collision with root package name */
                private static final /* synthetic */ EnumC0366c[] f28040x;

                /* renamed from: y  reason: collision with root package name */
                private static final /* synthetic */ EnumEntries f28041y;

                static {
                    EnumC0366c[] a10 = a();
                    f28040x = a10;
                    f28041y = sr.a.a(a10);
                }

                private EnumC0366c(String str, int i10) {
                }

                private static final /* synthetic */ EnumC0366c[] a() {
                    return new EnumC0366c[]{f28028d, f28029e, f28030i, f28031o, f28032p, f28033q, f28034r, f28035s, f28036t, f28037u, f28038v, f28039w};
                }

                public static EnumC0366c valueOf(String str) {
                    return (EnumC0366c) Enum.valueOf(EnumC0366c.class, str);
                }

                public static EnumC0366c[] values() {
                    return (EnumC0366c[]) f28040x.clone();
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, String str2, b mode, StepStyles.SelfieStepStyle selfieStepStyle, a assetOverrides, boolean z10, up.a navigationState, Function0 onBack, Function0 onCancel, Function1 onCameraError, Function0 onPermissionChanged, vn.a videoCaptureMethod, oq.a aVar, boolean z11, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
                this.f27977a = str;
                this.f27978b = str2;
                this.f27979c = mode;
                this.f27980d = selfieStepStyle;
                this.f27981e = assetOverrides;
                this.f27982f = z10;
                this.f27983g = navigationState;
                this.f27984h = onBack;
                this.f27985i = onCancel;
                this.f27986j = onCameraError;
                this.f27987k = onPermissionChanged;
                this.f27988l = videoCaptureMethod;
                this.f27989m = z11;
                this.f27990n = cameraXControllerFactory;
                this.f27991o = camera2ManagerFactoryFactory;
            }

            public final a a() {
                return this.f27981e;
            }

            public final g.a b() {
                return this.f27991o;
            }

            public final z.a c() {
                return this.f27990n;
            }

            public final String d() {
                return this.f27978b;
            }

            public final b e() {
                return this.f27979c;
            }

            public final up.a f() {
                return this.f27983g;
            }

            public final Function0 g() {
                return this.f27984h;
            }

            public final Function1 h() {
                return this.f27986j;
            }

            public final Function0 i() {
                return this.f27985i;
            }

            public final Function0 j() {
                return this.f27987k;
            }

            public final boolean k() {
                return this.f27982f;
            }

            public final StepStyles.SelfieStepStyle l() {
                return this.f27980d;
            }

            public final String m() {
                return this.f27977a;
            }

            public final vn.a n() {
                return this.f27988l;
            }

            public final oq.a o() {
                return null;
            }

            public final boolean p() {
                return this.f27989m;
            }
        }

        /* renamed from: hp.x5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0367d extends d {

            /* renamed from: a  reason: collision with root package name */
            private final Function0 f28042a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0367d(Function0 rendered) {
                super(null);
                Intrinsics.checkNotNullParameter(rendered, "rendered");
                this.f28042a = rendered;
            }

            public final Function0 a() {
                return this.f28042a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: a  reason: collision with root package name */
            private final a f28043a;

            /* renamed from: b  reason: collision with root package name */
            private final List f28044b;

            /* renamed from: c  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f28045c;

            /* renamed from: d  reason: collision with root package name */
            private final up.a f28046d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f28047e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f28048f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f28049g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f28050h;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a {

                /* renamed from: a  reason: collision with root package name */
                private final String f28051a;

                /* renamed from: b  reason: collision with root package name */
                private final String f28052b;

                /* renamed from: c  reason: collision with root package name */
                private final String f28053c;

                /* renamed from: d  reason: collision with root package name */
                private final String f28054d;

                /* renamed from: e  reason: collision with root package name */
                private final String f28055e;

                /* renamed from: f  reason: collision with root package name */
                private final String f28056f;

                /* renamed from: g  reason: collision with root package name */
                private final String f28057g;

                public a(String title, String description, String selfieLabelFront, String selfieLabelLeft, String selfieLabelRight, String submitButton, String retakeButton) {
                    Intrinsics.checkNotNullParameter(title, "title");
                    Intrinsics.checkNotNullParameter(description, "description");
                    Intrinsics.checkNotNullParameter(selfieLabelFront, "selfieLabelFront");
                    Intrinsics.checkNotNullParameter(selfieLabelLeft, "selfieLabelLeft");
                    Intrinsics.checkNotNullParameter(selfieLabelRight, "selfieLabelRight");
                    Intrinsics.checkNotNullParameter(submitButton, "submitButton");
                    Intrinsics.checkNotNullParameter(retakeButton, "retakeButton");
                    this.f28051a = title;
                    this.f28052b = description;
                    this.f28053c = selfieLabelFront;
                    this.f28054d = selfieLabelLeft;
                    this.f28055e = selfieLabelRight;
                    this.f28056f = submitButton;
                    this.f28057g = retakeButton;
                }

                public final String a() {
                    return this.f28052b;
                }

                public final String b() {
                    return this.f28057g;
                }

                public final String c() {
                    return this.f28053c;
                }

                public final String d() {
                    return this.f28054d;
                }

                public final String e() {
                    return this.f28055e;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof a)) {
                        return false;
                    }
                    a aVar = (a) obj;
                    if (Intrinsics.areEqual(this.f28051a, aVar.f28051a) && Intrinsics.areEqual(this.f28052b, aVar.f28052b) && Intrinsics.areEqual(this.f28053c, aVar.f28053c) && Intrinsics.areEqual(this.f28054d, aVar.f28054d) && Intrinsics.areEqual(this.f28055e, aVar.f28055e) && Intrinsics.areEqual(this.f28056f, aVar.f28056f) && Intrinsics.areEqual(this.f28057g, aVar.f28057g)) {
                        return true;
                    }
                    return false;
                }

                public final String f() {
                    return this.f28056f;
                }

                public final String g() {
                    return this.f28051a;
                }

                public int hashCode() {
                    return (((((((((((this.f28051a.hashCode() * 31) + this.f28052b.hashCode()) * 31) + this.f28053c.hashCode()) * 31) + this.f28054d.hashCode()) * 31) + this.f28055e.hashCode()) * 31) + this.f28056f.hashCode()) * 31) + this.f28057g.hashCode();
                }

                public String toString() {
                    String str = this.f28051a;
                    String str2 = this.f28052b;
                    String str3 = this.f28053c;
                    String str4 = this.f28054d;
                    String str5 = this.f28055e;
                    String str6 = this.f28056f;
                    String str7 = this.f28057g;
                    return "Strings(title=" + str + ", description=" + str2 + ", selfieLabelFront=" + str3 + ", selfieLabelLeft=" + str4 + ", selfieLabelRight=" + str5 + ", submitButton=" + str6 + ", retakeButton=" + str7 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(a strings, List selfies, StepStyles.SelfieStepStyle selfieStepStyle, up.a navigationState, Function0 onUsePhotos, Function0 onRetakePhotos, Function0 onBack, Function0 onCancel) {
                super(null);
                Intrinsics.checkNotNullParameter(strings, "strings");
                Intrinsics.checkNotNullParameter(selfies, "selfies");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onUsePhotos, "onUsePhotos");
                Intrinsics.checkNotNullParameter(onRetakePhotos, "onRetakePhotos");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f28043a = strings;
                this.f28044b = selfies;
                this.f28045c = selfieStepStyle;
                this.f28046d = navigationState;
                this.f28047e = onUsePhotos;
                this.f28048f = onRetakePhotos;
                this.f28049g = onBack;
                this.f28050h = onCancel;
            }

            public final up.a a() {
                return this.f28046d;
            }

            public final Function0 b() {
                return this.f28049g;
            }

            public final Function0 c() {
                return this.f28050h;
            }

            public final Function0 d() {
                return this.f28048f;
            }

            public final Function0 e() {
                return this.f28047e;
            }

            public final List f() {
                return this.f28044b;
            }

            public final a g() {
                return this.f28043a;
            }

            public final StepStyles.SelfieStepStyle h() {
                return this.f28045c;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f28058a;

            /* renamed from: b  reason: collision with root package name */
            private final String f28059b;

            /* renamed from: c  reason: collision with root package name */
            private final PendingPageTextPosition f28060c;

            /* renamed from: d  reason: collision with root package name */
            private final StepStyles.SelfieStepStyle f28061d;

            /* renamed from: e  reason: collision with root package name */
            private final up.a f28062e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f28063f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f28064g;

            /* renamed from: h  reason: collision with root package name */
            private final RemoteImage f28065h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String title, String description, PendingPageTextPosition pendingPageTextVerticalPosition, StepStyles.SelfieStepStyle selfieStepStyle, up.a navigationState, Function0 onBack, Function0 onCancel, RemoteImage remoteImage) {
                super(null);
                Intrinsics.checkNotNullParameter(title, "title");
                Intrinsics.checkNotNullParameter(description, "description");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                this.f28058a = title;
                this.f28059b = description;
                this.f28060c = pendingPageTextVerticalPosition;
                this.f28061d = selfieStepStyle;
                this.f28062e = navigationState;
                this.f28063f = onBack;
                this.f28064g = onCancel;
                this.f28065h = remoteImage;
            }

            public final RemoteImage a() {
                return this.f28065h;
            }

            public final String b() {
                return this.f28059b;
            }

            public final up.a c() {
                return this.f28062e;
            }

            public final Function0 d() {
                return this.f28063f;
            }

            public final Function0 e() {
                return this.f28064g;
            }

            public final PendingPageTextPosition f() {
                return this.f28060c;
            }

            public final StepStyles.SelfieStepStyle g() {
                return this.f28061d;
            }

            public final String h() {
                return this.f28058a;
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
        public static final /* synthetic */ int[] f28066a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f28067b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f28068c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f27139e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f27140i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f27138d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f28066a = iArr;
            int[] iArr2 = new int[h1.values().length];
            try {
                iArr2[h1.f27274e.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[h1.f27275i.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[h1.f27273d.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f28067b = iArr2;
            int[] iArr3 = new int[tn.b.values().length];
            try {
                iArr3[tn.b.f50143d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[tn.b.f50144e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[tn.b.f50145i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[tn.b.f50146o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[tn.b.f50147p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[tn.b.f50148q.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[tn.b.f50149r.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr3[tn.b.f50150s.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr3[tn.b.f50151t.ordinal()] = 9;
            } catch (NoSuchFieldError unused15) {
            }
            f28068c = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28069d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f28069d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.m mVar = pn.m.f46282a;
                Context context = x5.this.f27842a;
                this.f28069d = 1;
                if (mVar.b(context, this) == f10) {
                    return f10;
                }
            }
            x5.V0(x5.this);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28071d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28072e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f28073i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f28072e = aVar;
            this.f28073i = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(x5 x5Var, r.c cVar) {
            x5Var.g3(cVar);
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f28072e, this.f28073i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            rr.b.f();
            if (this.f28071d == 0) {
                kotlin.c.b(obj);
                wm.h c10 = this.f28072e.c();
                final x5 x5Var = this.f28073i;
                d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.y5
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = x5.g.k(x5.this, (r.c) obj2);
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
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28074d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28075e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f28076i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f28075e = aVar;
            this.f28076i = x5Var;
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
                return Unit.f32464a;
            }
            cVar.e(x1.a.s(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f27750o, 8191, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f28075e, this.f28076i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            Object f10 = rr.b.f();
            int i10 = this.f28074d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f28074d = 1;
                if (js.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            wm.h c10 = this.f28075e.c();
            d10 = wm.z.d(this.f28076i, null, new Function1() { // from class: hp.z5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.h.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28077d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28078e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f28079i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f28078e = aVar;
            this.f28079i = x5Var;
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
                return Unit.f32464a;
            }
            cVar.e(x1.a.s(aVar2, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f27748e, 8191, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f28078e, this.f28079i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            Object f10 = rr.b.f();
            int i10 = this.f28077d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f28077d = 1;
                if (js.i0.a(3000L, this) == f10) {
                    return f10;
                }
            }
            wm.h c10 = this.f28078e.c();
            d10 = wm.z.d(this.f28079i, null, new Function1() { // from class: hp.a6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.i.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28080d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28081e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f28082i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x1.c f28083o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ b f28084p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(k.a aVar, x5 x5Var, x1.c cVar, b bVar, Continuation continuation) {
            super(2, continuation);
            this.f28081e = aVar;
            this.f28082i = x5Var;
            this.f28083o = cVar;
            this.f28084p = bVar;
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
                return Unit.f32464a;
            }
            int u10 = cVar4.u();
            if (u10 > 1) {
                cVar2.e(x1.c.s(cVar4, u10 - 1, cVar4.w(), 0L, null, 0L, 0.0f, null, null, null, null, false, null, false, 8188, null));
            } else {
                tn.b w10 = cVar4.w();
                List c11 = cVar4.c();
                long i10 = cVar4.i();
                pn.v b10 = cVar4.b();
                cVar2.e(new x1.a(w10, cVar.v(), cVar.t(), null, c11, i10, false, cVar.m(), b10, m6.i(cVar2, false), bVar.s(), cVar.o(), cVar.k(), null, 8264, null));
            }
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f28081e, this.f28082i, this.f28083o, this.f28084p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            Object f10 = rr.b.f();
            int i10 = this.f28080d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f28080d = 1;
                if (js.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            wm.h c10 = this.f28081e.c();
            x5 x5Var = this.f28082i;
            final x1.c cVar = this.f28083o;
            final b bVar = this.f28084p;
            d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.b6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.j.k(x1.c.this, bVar, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28085d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28086e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5 f28087i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        k(k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f28086e = aVar;
            this.f28087i = x5Var;
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
                return Unit.f32464a;
            }
            int t10 = dVar2.t();
            if (t10 >= 1) {
                cVar.e(x1.d.s(dVar2, t10 - 1, dVar2.u(), null, null, 0L, false, 0L, null, null, null, false, 2044, null));
            }
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new k(this.f28086e, this.f28087i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            Object f10 = rr.b.f();
            int i10 = this.f28085d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f28085d = 1;
                if (js.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            wm.h c10 = this.f28086e.c();
            d10 = wm.z.d(this.f28087i, null, new Function1() { // from class: hp.c6
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = x5.k.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((k) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28088d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f28089e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f28090i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5 f28091o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        l(Ref.BooleanRef booleanRef, k.a aVar, x5 x5Var, Continuation continuation) {
            super(2, continuation);
            this.f28089e = booleanRef;
            this.f28090i = aVar;
            this.f28091o = x5Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(Ref.BooleanRef booleanRef, r.c cVar) {
            x1 x1Var = (x1) cVar.c();
            if ((x1Var instanceof a0) && ((a0) x1Var).j()) {
                cVar.e(x1Var);
                booleanRef.element = false;
            }
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new l(this.f28089e, this.f28090i, this.f28091o, continuation);
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
                java.lang.Object r0 = rr.b.f()
                int r1 = r5.f28088d
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
                kotlin.jvm.internal.Ref$BooleanRef r6 = r5.f28089e
                boolean r6 = r6.element
                if (r6 == 0) goto L43
                r5.f28088d = r2
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = js.i0.a(r3, r5)
                if (r6 != r0) goto L2b
                return r0
            L2b:
                wm.k$a r6 = r5.f28090i
                wm.h r6 = r6.c()
                hp.x5 r1 = r5.f28091o
                kotlin.jvm.internal.Ref$BooleanRef r3 = r5.f28089e
                hp.d6 r4 = new hp.d6
                r4.<init>()
                r3 = 0
                wm.r r1 = wm.w.g(r1, r3, r4, r2, r3)
                r6.d(r1)
                goto L1a
            L43:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: hp.x5.l.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((l) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public x5(Context applicationContext, c.a submitVerificationWorker, b.a webRtcWorkerFactory, b1.b selfieAnalyzeWorker, cp.c1 permissionRequestWorkflow, kp.j localVideoCaptureRenderer, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, un.a cameraStatsManager, up.b navigationStateManager, qp.c externalEventLogger) {
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
        this.f27842a = applicationContext;
        this.f27843b = submitVerificationWorker;
        this.f27844c = webRtcWorkerFactory;
        this.f27845d = selfieAnalyzeWorker;
        this.f27846e = permissionRequestWorkflow;
        this.f27847f = localVideoCaptureRenderer;
        this.f27848g = cameraXControllerFactory;
        this.f27849h = camera2ManagerFactoryFactory;
        this.f27850i = cameraStatsManager;
        this.f27851j = navigationStateManager;
        this.f27852k = externalEventLogger;
        oq.c.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A2(x5 x5Var, k.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, c.d.f27908a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B2(x5 x5Var, k.a aVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.e3(aVar, new c.C0359c(((c.b.a) bVar).a()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    private final Object E2(final b bVar, final x1.o oVar, final k.a aVar) {
        boolean z10;
        boolean z11;
        boolean u10 = oVar.u();
        if (!oVar.t() && Y0(bVar) && mp.f.f(this.f27842a) && bVar.z().b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        String c10 = bVar.x().c();
        d.c.b.g gVar = new d.c.b.g(new Function1() { // from class: hp.i4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit J2;
                J2 = x5.J2(k.a.this, this, bVar, oVar, currentTimeMillis, (pn.v) obj);
                return J2;
            }
        }, d.c.EnumC0366c.f28028d, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f27848g;
        g.a aVar3 = this.f27849h;
        v.b o10 = oVar.o();
        boolean k11 = oVar.k();
        if (u10 && !z10) {
            z11 = false;
        } else {
            z11 = true;
        }
        d f10 = j2.f(bVar, aVar, null, c10, null, null, false, gVar, v10, t10, b10, new Function0() { // from class: hp.j4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L2;
                L2 = x5.L2(k.a.this, this);
                return L2;
            }
        }, new Function0() { // from class: hp.k4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit M2;
                M2 = x5.M2(x5.this, aVar);
                return M2;
            }
        }, k10, new Function0() { // from class: hp.l4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N2;
                N2 = x5.N2(x5.this, aVar, bVar);
                return N2;
            }
        }, l32, null, b11, aVar2, aVar3, 0.0f, null, o10, k11, false, z11, PointerEventHelper.X_FLAG_SUPPORTS_HOVER, null);
        if (!u10) {
            String str = "";
            cp.d0 d0Var = cp.d0.f19644d;
            String f11 = bVar.f();
            if (f11 != null) {
                str = f11;
            }
            String e10 = bVar.e();
            if (e10 == null) {
                e10 = this.f27842a.getString(ep.e.D);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            Context context = this.f27842a;
            String string = context.getString(ep.e.C, mp.f.b(context));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return cp.l1.e(f10, aVar, true, d0Var, false, str, e10, string, bVar.d(), bVar.c(), null, null, null, this.f27846e, bVar.y(), null, new Function1() { // from class: hp.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r F2;
                    F2 = x5.F2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return F2;
                }
            }, 19976, null);
        }
        String str2 = "";
        if (z10) {
            cp.d0 d0Var2 = cp.d0.f19645e;
            String o11 = bVar.o();
            if (o11 == null) {
                o11 = this.f27842a.getString(ep.e.M);
                Intrinsics.checkNotNullExpressionValue(o11, "getString(...)");
            }
            Context context2 = this.f27842a;
            String string2 = context2.getString(ep.e.L, mp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String n10 = bVar.n();
            String m10 = bVar.m();
            cp.c1 c1Var = this.f27846e;
            String p10 = bVar.p();
            if (p10 != null) {
                str2 = p10;
            }
            return cp.l1.e(f10, aVar, true, d0Var2, false, str2, o11, string2, n10, m10, null, null, null, c1Var, bVar.y(), "video_capture_mic_permission_request", new Function1() { // from class: hp.o4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r H2;
                    H2 = x5.H2(x5.this, oVar, bVar, aVar, (c1.a) obj);
                    return H2;
                }
            }, 3592, null);
        }
        return f10;
    }

    private final d F1(final b bVar, x1.f fVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: hp.a4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit G1;
                G1 = x5.G1();
                return G1;
            }
        }, false, d.c.EnumC0366c.f28037u, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: hp.b4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit H1;
                H1 = x5.H1(k.a.this, this);
                return H1;
            }
        }, new Function0() { // from class: hp.d4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I1;
                I1 = x5.I1(x5.this, aVar);
                return I1;
            }
        }, k10, new Function0() { // from class: hp.e4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit J1;
                J1 = x5.J1(x5.this, aVar, bVar);
                return J1;
            }
        }, l32, null, bVar.z().b(), this.f27848g, this.f27849h, 0.0f, null, fVar.o(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r F2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.l5
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == cp.g1.f19670d) {
            action.e(x1.o.s(oVar, true, false, null, null, null, false, null, false, 254, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f27905a);
        } else {
            x5Var.e3(aVar2, new c.C0359c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r H2(final x5 x5Var, final x1.o oVar, final b bVar, final k.a aVar, final c1.a it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.b5
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
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I2(c1.a aVar, x1.o oVar, b bVar, x5 x5Var, k.a aVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar.a().a() == cp.g1.f19670d) {
            action.e(x1.o.s(oVar, false, true, null, null, null, false, null, false, 253, null));
        } else if (!bVar.w()) {
            action.e(new x1.j(null, null, 2, null));
        } else if (bVar.b()) {
            x5Var.e3(aVar2, c.a.f27905a);
        } else {
            x5Var.e3(aVar2, new c.C0359c(new InternalErrorInfo.PermissionErrorInfo("User rejected camera permissions for the selfie flow.")));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J2(k.a aVar, final x5 x5Var, final b bVar, final x1.o oVar, final long j10, final pn.v cameraProperties) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.c5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K2;
                K2 = x5.K2(x5.this, bVar, oVar, cameraProperties, j10, (r.c) obj);
                return K2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final d K1(final b bVar, final x1.h hVar, final k.a aVar) {
        return new d.C0367d(new Function0() { // from class: hp.c4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit L1;
                L1 = x5.L1(k.a.this, this, bVar, hVar);
                return L1;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K2(x5 x5Var, b bVar, x1.o oVar, pn.v vVar, long j10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (x5Var.l3(bVar) == vn.a.f51700d) {
            action.e(new x1.p(bVar.z().c(), vVar, j10, m6.i(action, false), oVar.c(), bVar.s(), true, oVar.o(), oVar.k()));
        } else {
            action.e(new x1.l(false, null, 0.0f, null, oVar.c(), System.currentTimeMillis(), false, j10, vVar, m6.i(action, false), bVar.s(), oVar.o(), oVar.k(), 67, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(k.a aVar, x5 x5Var, final b bVar, final x1.h hVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.m5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M1;
                M1 = x5.M1(x5.b.this, hVar, (r.c) obj);
                return M1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(b bVar, x1.h hVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, hVar.o(), false, 163, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    private final d N1(final b bVar, final x1.i iVar, final k.a aVar) {
        String o10 = bVar.x().o();
        if (o10 == null) {
            o10 = this.f27842a.getString(ep.e.K);
            Intrinsics.checkNotNullExpressionValue(o10, "getString(...)");
        }
        String k10 = bVar.x().k();
        if (k10 == null) {
            k10 = this.f27842a.getString(ep.e.E);
            Intrinsics.checkNotNullExpressionValue(k10, "getString(...)");
        }
        String l10 = bVar.x().l();
        if (l10 == null) {
            l10 = this.f27842a.getString(ep.e.H);
            Intrinsics.checkNotNullExpressionValue(l10, "getString(...)");
        }
        String m10 = bVar.x().m();
        if (m10 == null) {
            m10 = this.f27842a.getString(ep.e.I);
            Intrinsics.checkNotNullExpressionValue(m10, "getString(...)");
        }
        String n10 = bVar.x().n();
        if (n10 == null) {
            n10 = this.f27842a.getString(ep.e.J);
            Intrinsics.checkNotNullExpressionValue(n10, "getString(...)");
        }
        String j10 = bVar.x().j();
        if (j10 == null) {
            j10 = this.f27842a.getString(ep.e.G);
            Intrinsics.checkNotNullExpressionValue(j10, "getString(...)");
        }
        String i10 = bVar.x().i();
        if (i10 == null) {
            i10 = this.f27842a.getString(ep.e.F);
            Intrinsics.checkNotNullExpressionValue(i10, "getString(...)");
        }
        return new d.e(new d.e.a(o10, k10, l10, m10, n10, j10, i10), iVar.r(), bVar.y(), this.f27851j.b(), new Function0() { // from class: hp.i3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit O1;
                O1 = x5.O1(k.a.this, this, iVar);
                return O1;
            }
        }, new Function0() { // from class: hp.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Q1;
                Q1 = x5.Q1(k.a.this, this, bVar, iVar);
                return Q1;
            }
        }, new Function0() { // from class: hp.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit S1;
                S1 = x5.S1(k.a.this, this);
                return S1;
            }
        }, new Function0() { // from class: hp.l3
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
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(k.a aVar, x5 x5Var, final x1.i iVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.t5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit P1;
                P1 = x5.P1(x1.i.this, (r.c) obj);
                return P1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final d O2(final b bVar, final x1.p pVar, final k.a aVar) {
        wm.w.l(aVar, this.f27844c.a(bVar.z().c()), Reflection.typeOf(nq.b.class), "", new Function1() { // from class: hp.k2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r P2;
                P2 = x5.P2(x5.this, pVar, bVar, aVar, (b.AbstractC0526b) obj);
                return P2;
            }
        });
        String c10 = bVar.x().c();
        d.c.b.i iVar = new d.c.b.i(d.c.EnumC0366c.f28028d, bVar.z().a(), !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f27848g;
        g.a aVar3 = this.f27849h;
        return j2.f(bVar, aVar, pVar.e(), c10, null, null, false, iVar, v10, t10, b10, new Function0() { // from class: hp.v2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T2;
                T2 = x5.T2(k.a.this, this);
                return T2;
            }
        }, new Function0() { // from class: hp.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U2;
                U2 = x5.U2(x5.this, aVar);
                return U2;
            }
        }, k10, new Function0() { // from class: hp.r3
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
            return Unit.f32464a;
        }
        x1.i iVar3 = iVar2;
        action.e(new x1.n(iVar3.p(), iVar3.s(), iVar3.b(), iVar3.m(), m6.i(action, true), iVar.o()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r P2(final x5 x5Var, final x1.p pVar, final b bVar, final k.a aVar, final b.AbstractC0526b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        final rn.m b10 = rn.j.b(x5Var.f27842a, rn.n.f49015d);
        if (it instanceof b.AbstractC0526b.C0527b) {
            d11 = wm.z.d(x5Var, null, new Function1() { // from class: hp.p5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q2;
                    Q2 = x5.Q2(x5.this, b10, it, pVar, bVar, aVar, (r.c) obj);
                    return Q2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof b.AbstractC0526b.a) {
            d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.q5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R2;
                    R2 = x5.R2(k.a.this, x5Var, pVar, (r.c) obj);
                    return R2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(k.a aVar, x5 x5Var, final b bVar, final x1.i iVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.w4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R1;
                R1 = x5.R1(x5.b.this, iVar, (r.c) obj);
                return R1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q2(x5 x5Var, rn.m mVar, b.AbstractC0526b abstractC0526b, x1.p pVar, b bVar, k.a aVar, r.c action) {
        rn.l b10;
        rn.l b11;
        rn.l b12;
        Size f10;
        rn.l b13;
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R1(b bVar, x1.i iVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.i(action, false), bVar.q(), bVar.s(), false, iVar.o(), false, 163, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R2(k.a aVar, final x5 x5Var, final x1.p pVar, r.c action) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.v5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S2;
                S2 = x5.S2(x5.this, pVar, (r.c) obj);
                return S2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S2(x5 x5Var, x1.p pVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        x5Var.getClass();
        action.e(new x1.h(false, false, m6.i(action, false), pVar.o(), 3, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    private final d.b U1(final b bVar, final x1.j jVar, final k.a aVar) {
        String C = bVar.x().C();
        String h10 = bVar.x().h();
        String e10 = bVar.x().e();
        String B = bVar.x().B();
        up.a b10 = this.f27851j.b();
        d2 u10 = bVar.u();
        RemoteImage remoteImage = null;
        if (Intrinsics.areEqual(u10, d2.a.f27225a)) {
            NextStep.Selfie.AssetConfig.PromptPage promptPage = bVar.a().getPromptPage();
            if (promptPage != null) {
                remoteImage = promptPage.getSelfieCenterPictograph();
            }
        } else if (!Intrinsics.areEqual(u10, d2.c.f27227a) && !Intrinsics.areEqual(u10, d2.b.f27226a)) {
            throw new lr.p();
        } else {
            NextStep.Selfie.AssetConfig.PromptPage promptPage2 = bVar.a().getPromptPage();
            if (promptPage2 != null) {
                remoteImage = promptPage2.getSelfiePictograph();
            }
        }
        return new d.b(C, h10, e10, B, bVar.y(), remoteImage, b10, new Function0() { // from class: hp.m3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit V1;
                V1 = x5.V1(k.a.this, this, bVar, jVar);
                return V1;
            }
        }, new Function0() { // from class: hp.n3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X1;
                X1 = x5.X1(k.a.this, this);
                return X1;
            }
        }, new Function0() { // from class: hp.o3
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
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    public static final /* synthetic */ oq.a V0(x5 x5Var) {
        x5Var.getClass();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(k.a aVar, x5 x5Var, final b bVar, final x1.j jVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.h5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W1;
                W1 = x5.W1(x5.b.this, jVar, (r.c) obj);
                return W1;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(b bVar, x1.j jVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new x1.o(false, false, m6.j(action, false, 1, null), bVar.q(), bVar.s(), false, jVar.o(), false, 163, null));
        return Unit.f32464a;
    }

    private final d W2(final b bVar, final x1.q qVar, final k.a aVar) {
        String c10 = bVar.x().c();
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: hp.w3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit X2;
                X2 = x5.X2(k.a.this, this, qVar);
                return X2;
            }
        }, false, d.c.EnumC0366c.f28039w, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: hp.x3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Z2;
                Z2 = x5.Z2(k.a.this, this);
                return Z2;
            }
        }, new Function0() { // from class: hp.y3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a32;
                a32 = x5.a3(x5.this, aVar);
                return a32;
            }
        }, k10, new Function0() { // from class: hp.z3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit b32;
                b32 = x5.b3(x5.this, aVar, bVar);
                return b32;
            }
        }, l32, null, bVar.z().b(), this.f27848g, this.f27849h, 0.0f, null, qVar.o(), false, false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X2(k.a aVar, x5 x5Var, final x1.q qVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.f5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Y2;
                Y2 = x5.Y2(x1.q.this, (r.c) obj);
                return Y2;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final boolean Y0(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f27842a);
        if (Result.e(d10) == null) {
            return ((Boolean) d10).booleanValue();
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y2(x1.q qVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(m6.w(action, qVar.p(), qVar.r(), qVar.b(), qVar.m(), m6.i(action, false)));
        return Unit.f32464a;
    }

    private final x1.b Z0(r.c cVar, x1 x1Var, a1 a1Var) {
        x1 w10;
        z zVar = (z) x1Var;
        if (zVar.c().size() > 1) {
            z zVar2 = (z) x1Var;
            a0 a0Var = (a0) x1Var;
            w10 = new x1.k(CollectionsKt.M0(x1Var.p(), a1Var), CollectionsKt.f0(zVar2.c(), 1), zVar2.a(), a0Var.b(), a0Var.m(), x1Var.n(), ((b) cVar.b()).s(), x1Var.o(), zVar2.k());
        } else if (l3((b) cVar.b()) == vn.a.f51701e) {
            a0 a0Var2 = (a0) x1Var;
            w10 = new x1.e(CollectionsKt.M0(x1Var.p(), a1Var), 3000L, false, false, a0Var2.b(), a0Var2.m(), x1Var.n(), x1Var.o(), 12, null);
        } else if (l3((b) cVar.b()) == vn.a.f51700d) {
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
        d.c.EnumC0366c enumC0366c;
        int i10 = e.f28066a[((a1.b) CollectionsKt.o0(kVar.c())).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    throw new lr.p();
                }
                throw new IllegalStateException("Pose hint cannot be shown for center pose");
            }
            h1Var = h1.f27275i;
        } else {
            h1Var = h1.f27274e;
        }
        int[] iArr = e.f28067b;
        int i11 = iArr[h1Var.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    u10 = bVar.x().z();
                } else {
                    throw new lr.p();
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
                    enumC0366c = d.c.EnumC0366c.f28029e;
                } else {
                    throw new lr.p();
                }
            } else {
                enumC0366c = d.c.EnumC0366c.f28034r;
            }
        } else {
            enumC0366c = d.c.EnumC0366c.f28031o;
        }
        String str = u10;
        d.c.b.f fVar = new d.c.b.f(new Function0() { // from class: hp.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a22;
                a22 = x5.a2(k.a.this, this, kVar, bVar);
                return a22;
            }
        }, enumC0366c, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f27848g;
        g.a aVar3 = this.f27849h;
        boolean a10 = kVar.a();
        return j2.f(bVar, aVar, kVar.e(), c10, str, null, a10, fVar, v10, t10, b10, new Function0() { // from class: hp.n2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c22;
                c22 = x5.c2(k.a.this, this);
                return c22;
            }
        }, new Function0() { // from class: hp.o2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d22;
                d22 = x5.d2(x5.this, aVar);
                return d22;
            }
        }, k10, new Function0() { // from class: hp.p2
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(k.a aVar, x5 x5Var, final x1.k kVar, final b bVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.s5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b22;
                b22 = x5.b2(x1.k.this, bVar, (r.c) obj);
                return b22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a3(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    private final d b1(final b bVar, final x1.a aVar, final k.a aVar2) {
        x1.g gVar;
        String str;
        String str2;
        d.c.EnumC0366c enumC0366c;
        d.c.b aVar3;
        boolean z10;
        boolean z11;
        final a1.b e10 = aVar.e();
        if (aVar.k()) {
            if (aVar.u() == x1.g.f27747d) {
                gVar = x1.g.f27748e;
            } else {
                gVar = aVar.u();
            }
        } else {
            gVar = x1.g.f27747d;
        }
        if (aVar.f().c()) {
            b1.b bVar2 = this.f27845d;
            if (gVar != x1.g.f27747d && gVar != x1.g.f27750o) {
                z11 = false;
            } else {
                z11 = true;
            }
            wm.w.l(aVar2, bVar2.a(e10, z11), Reflection.typeOf(b1.class), "", new Function1() { // from class: hp.p3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r c12;
                    c12 = x5.c1(x5.this, aVar, aVar2, (b1.c) obj);
                    return c12;
                }
            });
        }
        tn.b w10 = aVar.w();
        if (w10 != null) {
            str = i3(w10, bVar.x(), aVar.e());
        } else {
            str = null;
        }
        if (e10 == a1.b.f27139e) {
            str2 = bVar.x().u();
        } else if (e10 == a1.b.f27140i) {
            str2 = bVar.x().w();
        } else if (aVar.w() != null) {
            str2 = str;
        } else if (e10 == a1.b.f27138d) {
            str2 = bVar.x().p();
        } else {
            str2 = null;
        }
        int i10 = e.f28066a[e10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0366c = d.c.EnumC0366c.f28029e;
                } else {
                    throw new lr.p();
                }
            } else {
                enumC0366c = d.c.EnumC0366c.f28035s;
            }
        } else {
            enumC0366c = d.c.EnumC0366c.f28032p;
        }
        d.c.EnumC0366c enumC0366c2 = enumC0366c;
        if (aVar.j() && gVar != x1.g.f27749i && gVar != x1.g.f27750o) {
            aVar3 = new d.c.b.C0365d(new Function1() { // from class: hp.q3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit e12;
                    e12 = x5.e1(a1.b.this, aVar2, this, aVar, (String) obj);
                    return e12;
                }
            }, new Function1() { // from class: hp.s3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit g12;
                    g12 = x5.g1(x5.this, aVar2, (Throwable) obj);
                    return g12;
                }
            }, false, enumC0366c2, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a), 4, null);
        } else {
            aVar3 = new d.c.b.a(enumC0366c2, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        }
        if (!aVar.j()) {
            c3(aVar2);
        }
        x1.g gVar2 = x1.g.f27749i;
        if (gVar == gVar2) {
            aVar2.a("wait_to_capture_with_flash_on", new h(aVar2, this, null));
        }
        x1.g gVar3 = x1.g.f27750o;
        if (gVar == gVar3) {
            aVar2.a("turn_off_flash", new i(aVar2, this, null));
        }
        String c10 = bVar.x().c();
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar2);
        vn.a l32 = l3(bVar);
        String str3 = str;
        String str4 = str2;
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar4 = this.f27848g;
        g.a aVar5 = this.f27849h;
        boolean a10 = aVar.a();
        a1.b e11 = aVar.e();
        float v11 = aVar.v();
        tn.a t11 = aVar.t();
        v.b o10 = aVar.o();
        boolean k11 = aVar.k();
        if (aVar.u() != gVar2 && aVar.u() != gVar3) {
            z10 = false;
        } else {
            z10 = true;
        }
        return j2.f(bVar, aVar2, e11, c10, str4, str3, a10, aVar3, v10, t10, b10, new Function0() { // from class: hp.t3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h12;
                h12 = x5.h1(k.a.this, this);
                return h12;
            }
        }, new Function0() { // from class: hp.u3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i12;
                i12 = x5.i1(x5.this, aVar2);
                return i12;
            }
        }, k10, new Function0() { // from class: hp.v3
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b3(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r c1(final x5 x5Var, final x1.a aVar, final k.a aVar2, final b1.c output) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.r5
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
        return Unit.f32464a;
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
            return Unit.f32464a;
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
                action.e(x1.a.s(aVar4, null, 0.0f, null, null, null, 0L, false, 0L, null, null, null, null, false, x1.g.f27749i, 8191, null));
            }
        } else if (cVar instanceof b1.c.C0350c) {
            b1.c.C0350c c0350c = (b1.c.C0350c) cVar;
            if (c0350c.b() == tn.b.f50150s) {
                action.e(x1.a.s(aVar4, null, c0350c.c(), c0350c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16313, null));
            } else {
                action.e(x1.a.s(aVar4, c0350c.b(), c0350c.c(), c0350c.a(), null, null, 0L, false, 0L, null, null, null, null, false, null, 16376, null));
            }
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar2, ((b1.c.b) cVar).a());
        } else {
            throw new lr.p();
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    private final void d3(k.a aVar, Throwable th2) {
        String message;
        String message2 = th2.getMessage();
        if (message2 != null && StringsKt.V(message2, "ENOSPC", false, 2, null)) {
            e3(aVar, new c.C0359c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        } else if (th2 instanceof x.o0) {
            Throwable cause = th2.getCause();
            if (cause != null && (message = cause.getMessage()) != null && StringsKt.V(message, "ENOSPC", false, 2, null)) {
                e3(aVar, new c.C0359c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
                return;
            }
            String canonicalName = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0359c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName)));
        } else {
            String canonicalName2 = th2.getClass().getCanonicalName();
            e3(aVar, new c.C0359c(new InternalErrorInfo.UnknownErrorInfo("Unknown error. Type: " + canonicalName2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.a aVar2, String absolutePath) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f27134i, bVar, System.currentTimeMillis());
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.i5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit f12;
                f12 = x5.f1(x5.this, aVar2, cVar, (r.c) obj);
                return f12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    private final void e3(k.a aVar, final c cVar) {
        wm.r d10;
        if (!(cVar instanceof c.d) && !(cVar instanceof c.a)) {
            boolean z10 = cVar instanceof c.C0359c;
        }
        wm.h c10 = aVar.c();
        d10 = wm.z.d(this, null, new Function1() { // from class: hp.d5
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
        return Unit.f32464a;
    }

    private final d f2(final b bVar, final x1.l lVar, final k.a aVar) {
        String str;
        boolean z10;
        String str2;
        d.c.b aVar2;
        d.c.b.C0365d c0365d;
        if (lVar.f().c()) {
            wm.w.l(aVar, this.f27845d.a(a1.b.f27138d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: hp.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r g22;
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
        d.c.EnumC0366c enumC0366c = d.c.EnumC0366c.f28029e;
        tn.b v10 = lVar.v();
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
                aVar2 = new d.c.b.e(new Function0() { // from class: hp.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i22;
                        i22 = x5.i2(k.a.this, this, lVar, bVar);
                        return i22;
                    }
                }, enumC0366c, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
            } else {
                c0365d = new d.c.b.C0365d(new Function1() { // from class: hp.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit k22;
                        k22 = x5.k2(a1.b.this, aVar, this, lVar, (String) obj);
                        return k22;
                    }
                }, new Function1() { // from class: hp.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m22;
                        m22 = x5.m2(x5.this, aVar, (Throwable) obj);
                        return m22;
                    }
                }, false, enumC0366c, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a), 4, null);
                boolean t10 = bVar.t();
                up.a b10 = this.f27851j.b();
                Function1 k10 = m6.k(aVar);
                vn.a l32 = l3(bVar);
                d.c.a v11 = m6.v(bVar);
                boolean b11 = bVar.z().b();
                z.a aVar3 = this.f27848g;
                g.a aVar4 = this.f27849h;
                boolean a10 = lVar.a();
                return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a10, c0365d, v11, t10, b10, new Function0() { // from class: hp.u2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit n22;
                        n22 = x5.n2(k.a.this, this);
                        return n22;
                    }
                }, new Function0() { // from class: hp.w2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit o22;
                        o22 = x5.o2(x5.this, aVar);
                        return o22;
                    }
                }, k10, new Function0() { // from class: hp.x2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p22;
                        p22 = x5.p2(x5.this, aVar, bVar);
                        return p22;
                    }
                }, l32, null, b11, aVar3, aVar4, lVar.u(), lVar.t(), lVar.o(), lVar.k(), false, false, 50331648, null);
            }
        } else {
            aVar2 = new d.c.b.a(enumC0366c, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        }
        c0365d = aVar2;
        boolean t102 = bVar.t();
        up.a b102 = this.f27851j.b();
        Function1 k102 = m6.k(aVar);
        vn.a l322 = l3(bVar);
        d.c.a v112 = m6.v(bVar);
        boolean b112 = bVar.z().b();
        z.a aVar32 = this.f27848g;
        g.a aVar42 = this.f27849h;
        boolean a102 = lVar.a();
        return j2.f(bVar, aVar, lVar.e(), c10, str2, str3, a102, c0365d, v112, t102, b102, new Function0() { // from class: hp.u2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n22;
                n22 = x5.n2(k.a.this, this);
                return n22;
            }
        }, new Function0() { // from class: hp.w2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o22;
                o22 = x5.o2(x5.this, aVar);
                return o22;
            }
        }, k102, new Function0() { // from class: hp.x2
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g1(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r g2(final x5 x5Var, final x1.l lVar, final b bVar, final k.a aVar, final b1.c output) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.k5
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
        cVar.d(new c.C0359c(new InternalErrorInfo.WebRtcIntegrationErrorInfo("WebRTC is listed as the preferred or only capture method, but it has not been configured for this project.")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
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
            return Unit.f32464a;
        }
        if (cVar instanceof b1.c.a) {
            List c11 = lVar.c();
            b1.c.a aVar2 = (b1.c.a) cVar;
            action.e(new x1.m(lVar.i(), lVar.b(), lVar.m(), aVar2.b(), aVar2.a(), c11, m6.i(action, false), bVar.s(), lVar.a(), lVar.o(), lVar.k()));
        } else if (cVar instanceof b1.c.b) {
            x5Var.d3(aVar, ((b1.c.b) cVar).a());
        } else if (cVar instanceof b1.c.C0350c) {
            b1.c.C0350c c0350c = (b1.c.C0350c) cVar;
            if (c0350c.b() == tn.b.f50150s) {
                s10 = x1.l.s(lVar3, false, null, c0350c.c(), c0350c.a(), null, 0L, false, 0L, null, null, null, null, false, 8114, null);
            } else {
                s10 = x1.l.s(lVar3, false, c0350c.b(), c0350c.c(), c0350c.a(), null, 0L, false, 0L, null, null, null, null, false, 8176, null);
            }
            action.e(s10);
        } else {
            throw new lr.p();
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i2(k.a aVar, x5 x5Var, final x1.l lVar, final b bVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.o5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j22;
                j22 = x5.j2(x1.l.this, bVar, (r.c) obj);
                return j22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final String i3(tn.b bVar, b.a aVar, a1.b bVar2) {
        switch (e.f28068c[bVar.ordinal()]) {
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
                int i10 = e.f28066a[bVar2.ordinal()];
                if (i10 == 1 || i10 == 2) {
                    return null;
                }
                if (i10 == 3) {
                    return aVar.z();
                }
                throw new lr.p();
            case 8:
                return aVar.p();
            case 9:
                return aVar.p();
            default:
                throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
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
            return Unit.f32464a;
        }
        action.e(new x1.d(3, null, lVar2.b(), lVar2.c(), System.currentTimeMillis(), lVar2.a(), lVar.m(), m6.i(action, false), bVar.s(), lVar.o(), lVar.k(), 2, null));
        return Unit.f32464a;
    }

    private final qp.j j3(x1 x1Var) {
        if (x1Var instanceof x1.j) {
            return j.e.f48056a;
        }
        String str = null;
        if (x1Var instanceof x1.k) {
            a1.b g10 = ((x1.k) x1Var).g();
            if (g10 != null) {
                str = m1.a(g10);
            }
            return new j.c(str);
        } else if (x1Var instanceof x1.h) {
            return j.e.f48056a;
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
                        return j.a.f48052a;
                    }
                    if (x1Var instanceof x1.n) {
                        return j.d.f48055a;
                    }
                    throw new lr.p();
                }
                return j.b.f48053a;
            }
        }
    }

    private final d k1(final b bVar, x1.b bVar2, final k.a aVar) {
        d.c.EnumC0366c enumC0366c;
        String c10 = bVar.x().c();
        if (bVar2.s() instanceof x1.n) {
            enumC0366c = d.c.EnumC0366c.f28038v;
        } else {
            int i10 = e.f28066a[bVar2.r().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        enumC0366c = d.c.EnumC0366c.f28030i;
                    } else {
                        throw new lr.p();
                    }
                } else {
                    enumC0366c = d.c.EnumC0366c.f28036t;
                }
            } else {
                enumC0366c = d.c.EnumC0366c.f28033q;
            }
        }
        d.c.b.h hVar = new d.c.b.h(new Function0() { // from class: hp.d3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l12;
                l12 = x5.l1(k.a.this, this);
                return l12;
            }
        }, true, enumC0366c, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        return j2.f(bVar, aVar, null, c10, null, null, false, hVar, m6.v(bVar), t10, b10, new Function0() { // from class: hp.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n12;
                n12 = x5.n1(k.a.this, this);
                return n12;
            }
        }, new Function0() { // from class: hp.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o12;
                o12 = x5.o1(x5.this, aVar);
                return o12;
            }
        }, k10, new Function0() { // from class: hp.h3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p12;
                p12 = x5.p1(x5.this, aVar, bVar);
                return p12;
            }
        }, l32, null, bVar.z().b(), this.f27848g, this.f27849h, 0.0f, null, bVar2.o(), bVar2.t(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k2(a1.b bVar, k.a aVar, final x5 x5Var, final x1.l lVar, String absolutePath) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f27134i, bVar, System.currentTimeMillis());
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.n5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l22;
                l22 = x5.l2(x5.this, lVar, cVar, (r.c) obj);
                return l22;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final boolean k3(x1 x1Var) {
        if (!(x1Var instanceof x1.a) && !(x1Var instanceof x1.b) && !(x1Var instanceof x1.c) && !(x1Var instanceof x1.d) && !(x1Var instanceof x1.k) && !(x1Var instanceof x1.l) && !(x1Var instanceof x1.m) && !(x1Var instanceof x1.o) && !(x1Var instanceof x1.p) && !(x1Var instanceof x1.f) && !(x1Var instanceof x1.q) && !(x1Var instanceof x1.e)) {
            if (!(x1Var instanceof x1.j) && !(x1Var instanceof x1.h) && !(x1Var instanceof x1.i) && !(x1Var instanceof x1.n)) {
                throw new lr.p();
            }
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(k.a aVar, x5 x5Var) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.g5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m12;
                m12 = x5.m1((r.c) obj);
                return m12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l2(x5 x5Var, x1.l lVar, a1.c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(x5Var.Z0(action, lVar, cVar));
        return Unit.f32464a;
    }

    private final vn.a l3(b bVar) {
        Object f10 = bVar.z().f(null, null, this.f27842a);
        if (Result.e(f10) == null) {
            return (vn.a) f10;
        }
        return vn.a.f51702i;
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m2(x5 x5Var, k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        x5Var.d3(aVar, it);
        return Unit.f32464a;
    }

    private final boolean m3(b bVar) {
        Object d10 = bVar.z().d(null, null, this.f27842a);
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p2(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    private final d q1(final b bVar, x1.c cVar, final k.a aVar) {
        String str;
        String str2;
        boolean z10;
        if (cVar.f().c()) {
            wm.w.l(aVar, this.f27845d.a(a1.b.f27138d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: hp.p4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r r12;
                    r12 = x5.r1(x5.this, aVar, (b1.c) obj);
                    return r12;
                }
            });
        }
        aVar.a("countdown_" + cVar.u(), new j(aVar, this, cVar, bVar, null));
        tn.b w10 = cVar.w();
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
        if (l3(bVar) == vn.a.f51701e) {
            z10 = true;
        } else {
            z10 = false;
        }
        d.c.b.C0363b c0363b = new d.c.b.C0363b(u10, z10, bVar.z().a(), d.c.EnumC0366c.f28029e, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a), new Function1() { // from class: hp.q4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t12;
                t12 = x5.t1(k.a.this, (Throwable) obj);
                return t12;
            }
        });
        boolean t10 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f27848g;
        g.a aVar3 = this.f27849h;
        return j2.f(bVar, aVar, cVar.e(), c10, str2, str, cVar.a(), c0363b, v10, t10, b10, new Function0() { // from class: hp.r4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit u12;
                u12 = x5.u1(k.a.this, this);
                return u12;
            }
        }, new Function0() { // from class: hp.s4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v12;
                v12 = x5.v1(x5.this, aVar);
                return v12;
            }
        }, k10, new Function0() { // from class: hp.t4
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
            wm.w.l(aVar, this.f27845d.a(a1.b.f27138d, false), Reflection.typeOf(b1.class), "", new Function1() { // from class: hp.y2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r r22;
                    r22 = x5.r2(x5.this, aVar, mVar, bVar, (b1.c) obj);
                    return r22;
                }
            });
        }
        wm.w.l(aVar, o.a.b(wm.o.f52562a, 1000L, null, 2, null), Reflection.typeOf(wm.o.class, KTypeProjection.f32568c.d(Reflection.typeOf(Unit.class))), "", new Function1() { // from class: hp.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r t22;
                t22 = x5.t2(x5.this, mVar, bVar, (Unit) obj);
                return t22;
            }
        });
        String c10 = bVar.x().c();
        String t10 = bVar.x().t();
        String t11 = bVar.x().t();
        d.c.b.a aVar2 = new d.c.b.a(d.c.EnumC0366c.f28029e, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        boolean t12 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar3 = this.f27848g;
        g.a aVar4 = this.f27849h;
        boolean a10 = mVar.a();
        return j2.f(bVar, aVar, mVar.e(), c10, t10, t11, a10, aVar2, v10, t12, b10, new Function0() { // from class: hp.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit v22;
                v22 = x5.v2(k.a.this, this);
                return v22;
            }
        }, new Function0() { // from class: hp.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit w22;
                w22 = x5.w2(x5.this, aVar);
                return w22;
            }
        }, k10, new Function0() { // from class: hp.c3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit x22;
                x22 = x5.x2(x5.this, aVar, bVar);
                return x22;
            }
        }, l32, null, b11, aVar3, aVar4, mVar.u(), mVar.t(), mVar.o(), mVar.k(), false, false, 50331648, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r r1(final x5 x5Var, final k.a aVar, final b1.c output) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.e5
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
    public static final wm.r r2(final x5 x5Var, final k.a aVar, final x1.m mVar, final b bVar, final b1.c output) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(output, "output");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.z4
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
            return Unit.f32464a;
        }
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0350c) {
                b1.c.C0350c c0350c = (b1.c.C0350c) cVar;
                action.e(x1.c.s(cVar3, 0, c0350c.b(), 0L, null, 0L, c0350c.c(), c0350c.a(), null, null, null, false, null, false, 8093, null));
            } else {
                throw new lr.p();
            }
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s2(b1.c cVar, x5 x5Var, k.a aVar, x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(cVar instanceof b1.c.a)) {
            if (cVar instanceof b1.c.b) {
                x5Var.d3(aVar, ((b1.c.b) cVar).a());
            } else if (cVar instanceof b1.c.C0350c) {
                b1.c.C0350c c0350c = (b1.c.C0350c) cVar;
                tn.b b10 = c0350c.b();
                List c10 = mVar.c();
                long i10 = mVar.i();
                pn.v b11 = mVar.b();
                action.e(new x1.l(false, b10, c0350c.c(), c0350c.a(), c10, i10, false, mVar.m(), b11, m6.i(action, false), bVar.s(), mVar.o(), mVar.k(), 65, null));
            } else {
                throw new lr.p();
            }
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t1(k.a aVar, Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        m6.k(aVar).invoke(it);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r t2(x5 x5Var, final x1.m mVar, final b bVar, Unit it) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.x4
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u2(x1.m mVar, b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (!(action.c() instanceof x1.m)) {
            return Unit.f32464a;
        }
        List c10 = mVar.c();
        action.e(new x1.c(3, null, mVar.i(), mVar.b(), mVar.m(), mVar.u(), mVar.t(), c10, m6.i(action, false), bVar.s(), mVar.a(), mVar.o(), mVar.k(), 2, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v2(k.a aVar, x5 x5Var) {
        x5Var.getClass();
        m6.r(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w1(x5 x5Var, k.a aVar, b bVar) {
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w2(x5 x5Var, k.a aVar) {
        x5Var.e3(aVar, c.b.f27906a);
        return Unit.f32464a;
    }

    private final d x1(final b bVar, x1.d dVar, final k.a aVar) {
        d.c.EnumC0366c enumC0366c;
        String str;
        final x1.d dVar2;
        d.c.b c0363b;
        boolean z10;
        final a1.b bVar2 = (a1.b) CollectionsKt.o0(dVar.c());
        int i10 = e.f28066a[bVar2.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    enumC0366c = d.c.EnumC0366c.f28029e;
                } else {
                    throw new lr.p();
                }
            } else {
                enumC0366c = d.c.EnumC0366c.f28035s;
            }
        } else {
            enumC0366c = d.c.EnumC0366c.f28032p;
        }
        d.c.EnumC0366c enumC0366c2 = enumC0366c;
        String str2 = null;
        aVar.a("countdown_to_manual_capture_" + dVar.t(), new k(aVar, this, null));
        tn.b u10 = dVar.u();
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
            c0363b = new d.c.b.C0365d(new Function1() { // from class: hp.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = x5.y1(a1.b.this, aVar, this, dVar2, (String) obj);
                    return y12;
                }
            }, new Function1() { // from class: hp.y4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A1;
                    A1 = x5.A1(x5.this, aVar, (Throwable) obj);
                    return A1;
                }
            }, true, enumC0366c2, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a));
        } else {
            dVar2 = dVar;
            int t10 = dVar2.t();
            if (l3(bVar) == vn.a.f51701e) {
                z10 = true;
            } else {
                z10 = false;
            }
            c0363b = new d.c.b.C0363b(t10, z10, bVar.z().a(), enumC0366c2, !Intrinsics.areEqual(bVar.u(), d2.b.f27226a), new Function1() { // from class: hp.j5
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B1;
                    B1 = x5.B1(k.a.this, (Throwable) obj);
                    return B1;
                }
            });
        }
        d.c.b bVar3 = c0363b;
        boolean t11 = bVar.t();
        up.a b10 = this.f27851j.b();
        Function1 k10 = m6.k(aVar);
        vn.a l32 = l3(bVar);
        d.c.a v10 = m6.v(bVar);
        boolean b11 = bVar.z().b();
        z.a aVar2 = this.f27848g;
        g.a aVar3 = this.f27849h;
        return j2.f(bVar, aVar, dVar2.e(), c10, str, str3, dVar2.a(), bVar3, v10, t11, b10, new Function0() { // from class: hp.u5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C1;
                C1 = x5.C1(k.a.this, this);
                return C1;
            }
        }, new Function0() { // from class: hp.w5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D1;
                D1 = x5.D1(x5.this, aVar);
                return D1;
            }
        }, k10, new Function0() { // from class: hp.l2
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
        m6.t(x5Var.f27842a, aVar, bVar, x5Var.Y0(bVar));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(a1.b bVar, k.a aVar, final x5 x5Var, final x1.d dVar, String absolutePath) {
        wm.r d10;
        Intrinsics.checkNotNullParameter(absolutePath, "absolutePath");
        final a1.c cVar = new a1.c(absolutePath, a1.a.f27134i, bVar, System.currentTimeMillis());
        wm.h c10 = aVar.c();
        d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.a5
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = x5.z1(x5.this, dVar, cVar, (r.c) obj);
                return z12;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    private final d y2(b bVar, x1.n nVar, final k.a aVar) {
        RemoteImage remoteImage;
        wm.w.l(aVar, this.f27843b.a(bVar.v(), bVar.l(), bVar.j(), bVar.k(), bVar.u(), bVar.i(), nVar.p(), nVar.r(), nVar.b(), nVar.m()), Reflection.typeOf(jp.c.class), "", new Function1() { // from class: hp.f4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r z22;
                z22 = x5.z2(x5.this, aVar, (c.b) obj);
                return z22;
            }
        });
        up.b.d(this.f27851j, false, false, false, 4, null);
        String g10 = bVar.x().g();
        String f10 = bVar.x().f();
        PendingPageTextPosition r10 = bVar.r();
        StepStyles.SelfieStepStyle y10 = bVar.y();
        up.a b10 = this.f27851j.b();
        Function0 function0 = new Function0() { // from class: hp.g4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit C2;
                C2 = x5.C2(x5.this, aVar);
                return C2;
            }
        };
        Function0 function02 = new Function0() { // from class: hp.h4
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r z2(final x5 x5Var, final k.a aVar, final c.b it) {
        wm.r d10;
        wm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0425b) {
            d11 = wm.z.d(x5Var, null, new Function1() { // from class: hp.u4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A2;
                    A2 = x5.A2(x5.this, aVar, (r.c) obj);
                    return A2;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = wm.z.d(x5Var, null, new Function1() { // from class: hp.v4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B2;
                    B2 = x5.B2(x5.this, aVar, it, (r.c) obj);
                    return B2;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    @Override // wm.k
    /* renamed from: X0 */
    public x1 d(b props, wm.i iVar) {
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
                readParcelable = obtain.readParcelable(wm.i.class.getClassLoader());
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
            return new x1.o(false, false, null, props.q(), props.s(), false, v.b.f46370d, false, 163, null);
        }
        return new x1.j(null, null, 2, null);
    }

    @Override // wm.k
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
        this.f27851j.c(renderProps.b(), renderProps.g(), !z10);
        this.f27852k.c(new i.e(renderProps.k(), j3(renderState)));
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
            y22 = this.f27847f.q(renderProps, (x1.e) renderState, context);
        } else if (renderState instanceof x1.f) {
            y22 = F1(renderProps, (x1.f) renderState, context);
        } else if (renderState instanceof x1.q) {
            y22 = W2(renderProps, (x1.q) renderState, context);
        } else if (renderState instanceof x1.i) {
            y22 = N1(renderProps, (x1.i) renderState, context);
        } else if (z10) {
            y22 = y2(renderProps, (x1.n) renderState, context);
        } else {
            throw new lr.p();
        }
        if (y22 instanceof d.c) {
            return cp.l1.c(y22);
        }
        return y22;
    }

    @Override // wm.k
    /* renamed from: h3 */
    public wm.i g(x1 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return ym.s.a(state);
    }
}
