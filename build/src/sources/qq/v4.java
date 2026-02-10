package qq;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import cn.k;
import cn.r;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputAddressComponent;
import gq.c5;
import gq.k5;
import gq.l5;
import gq.q5;
import hp.k;
import hp.o;
import ip.c1;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import okio.ByteString;
import qq.g3;
import qq.v4;
import qq.y0;
import qq.z4;
import wp.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v4 extends cn.k {

    /* renamed from: i  reason: collision with root package name */
    public static final a f47044i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f47045a;

    /* renamed from: b  reason: collision with root package name */
    private final o.a f47046b;

    /* renamed from: c  reason: collision with root package name */
    private final y0.a f47047c;

    /* renamed from: d  reason: collision with root package name */
    private final z4.a f47048d;

    /* renamed from: e  reason: collision with root package name */
    private final aq.b f47049e;

    /* renamed from: f  reason: collision with root package name */
    private final ip.c1 f47050f;

    /* renamed from: g  reason: collision with root package name */
    private final x0 f47051g;

    /* renamed from: h  reason: collision with root package name */
    private final wp.c f47052h;

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
        private final String f47053a;

        /* renamed from: b  reason: collision with root package name */
        private final String f47054b;

        /* renamed from: c  reason: collision with root package name */
        private final List f47055c;

        /* renamed from: d  reason: collision with root package name */
        private final String f47056d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f47057e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f47058f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f47059g;

        /* renamed from: h  reason: collision with root package name */
        private final zp.g f47060h;

        /* renamed from: i  reason: collision with root package name */
        private final String f47061i;

        /* renamed from: j  reason: collision with root package name */
        private final String f47062j;

        /* renamed from: k  reason: collision with root package name */
        private final String f47063k;

        /* renamed from: l  reason: collision with root package name */
        private final String f47064l;

        /* renamed from: m  reason: collision with root package name */
        private final String f47065m;

        /* renamed from: n  reason: collision with root package name */
        private final String f47066n;

        /* renamed from: o  reason: collision with root package name */
        private final String f47067o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.UiStepStyle f47068p;

        /* renamed from: q  reason: collision with root package name */
        private final List f47069q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f47070r;

        /* renamed from: s  reason: collision with root package name */
        private final InternalErrorInfo f47071s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f47072t;

        public b(String sessionToken, String inquiryId, List list, String stepName, boolean z10, boolean z11, boolean z12, zp.g inquirySessionConfig, String str, String str2, String str3, String str4, String str5, String str6, String str7, StepStyles.UiStepStyle uiStepStyle, List list2, boolean z13, InternalErrorInfo internalErrorInfo, boolean z14) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f47053a = sessionToken;
            this.f47054b = inquiryId;
            this.f47055c = list;
            this.f47056d = stepName;
            this.f47057e = z10;
            this.f47058f = z11;
            this.f47059g = z12;
            this.f47060h = inquirySessionConfig;
            this.f47061i = str;
            this.f47062j = str2;
            this.f47063k = str3;
            this.f47064l = str4;
            this.f47065m = str5;
            this.f47066n = str6;
            this.f47067o = str7;
            this.f47068p = uiStepStyle;
            this.f47069q = list2;
            this.f47070r = z13;
            this.f47071s = internalErrorInfo;
            this.f47072t = z14;
        }

        public final boolean a() {
            return this.f47057e;
        }

        public final boolean b() {
            return this.f47058f;
        }

        public final List c() {
            return this.f47055c;
        }

        public final boolean d() {
            return this.f47059g;
        }

        public final String e() {
            return this.f47067o;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f47053a, bVar.f47053a) && Intrinsics.areEqual(this.f47054b, bVar.f47054b) && Intrinsics.areEqual(this.f47055c, bVar.f47055c) && Intrinsics.areEqual(this.f47056d, bVar.f47056d) && this.f47057e == bVar.f47057e && this.f47058f == bVar.f47058f && this.f47059g == bVar.f47059g && Intrinsics.areEqual(this.f47060h, bVar.f47060h) && Intrinsics.areEqual(this.f47061i, bVar.f47061i) && Intrinsics.areEqual(this.f47062j, bVar.f47062j) && Intrinsics.areEqual(this.f47063k, bVar.f47063k) && Intrinsics.areEqual(this.f47064l, bVar.f47064l) && Intrinsics.areEqual(this.f47065m, bVar.f47065m) && Intrinsics.areEqual(this.f47066n, bVar.f47066n) && Intrinsics.areEqual(this.f47067o, bVar.f47067o) && Intrinsics.areEqual(this.f47068p, bVar.f47068p) && Intrinsics.areEqual(this.f47069q, bVar.f47069q) && this.f47070r == bVar.f47070r && Intrinsics.areEqual(this.f47071s, bVar.f47071s) && this.f47072t == bVar.f47072t) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f47066n;
        }

        public final String g() {
            return this.f47065m;
        }

        public final String h() {
            return this.f47064l;
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
            int hashCode11 = ((this.f47053a.hashCode() * 31) + this.f47054b.hashCode()) * 31;
            List list = this.f47055c;
            int i10 = 0;
            if (list == null) {
                hashCode = 0;
            } else {
                hashCode = list.hashCode();
            }
            int hashCode12 = (((((((((((hashCode11 + hashCode) * 31) + this.f47056d.hashCode()) * 31) + Boolean.hashCode(this.f47057e)) * 31) + Boolean.hashCode(this.f47058f)) * 31) + Boolean.hashCode(this.f47059g)) * 31) + this.f47060h.hashCode()) * 31;
            String str = this.f47061i;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode2) * 31;
            String str2 = this.f47062j;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str3 = this.f47063k;
            if (str3 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str3.hashCode();
            }
            int i13 = (i12 + hashCode4) * 31;
            String str4 = this.f47064l;
            if (str4 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str4.hashCode();
            }
            int i14 = (i13 + hashCode5) * 31;
            String str5 = this.f47065m;
            if (str5 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str5.hashCode();
            }
            int i15 = (i14 + hashCode6) * 31;
            String str6 = this.f47066n;
            if (str6 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str6.hashCode();
            }
            int i16 = (i15 + hashCode7) * 31;
            String str7 = this.f47067o;
            if (str7 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str7.hashCode();
            }
            int i17 = (i16 + hashCode8) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f47068p;
            if (uiStepStyle == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = uiStepStyle.hashCode();
            }
            int i18 = (i17 + hashCode9) * 31;
            List list2 = this.f47069q;
            if (list2 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = list2.hashCode();
            }
            int hashCode13 = (((i18 + hashCode10) * 31) + Boolean.hashCode(this.f47070r)) * 31;
            InternalErrorInfo internalErrorInfo = this.f47071s;
            if (internalErrorInfo != null) {
                i10 = internalErrorInfo.hashCode();
            }
            return ((hashCode13 + i10) * 31) + Boolean.hashCode(this.f47072t);
        }

        public final String i() {
            return this.f47062j;
        }

        public final String j() {
            return this.f47061i;
        }

        public final String k() {
            return this.f47054b;
        }

        public final zp.g l() {
            return this.f47060h;
        }

        public final List m() {
            return this.f47069q;
        }

        public final String n() {
            return this.f47053a;
        }

        public final String o() {
            return this.f47056d;
        }

        public final StepStyles.UiStepStyle p() {
            return this.f47068p;
        }

        public final InternalErrorInfo q() {
            return this.f47071s;
        }

        public final boolean r() {
            return this.f47072t;
        }

        public final boolean s() {
            return this.f47070r;
        }

        public String toString() {
            String str = this.f47053a;
            String str2 = this.f47054b;
            List list = this.f47055c;
            String str3 = this.f47056d;
            boolean z10 = this.f47057e;
            boolean z11 = this.f47058f;
            boolean z12 = this.f47059g;
            zp.g gVar = this.f47060h;
            String str4 = this.f47061i;
            String str5 = this.f47062j;
            String str6 = this.f47063k;
            String str7 = this.f47064l;
            String str8 = this.f47065m;
            String str9 = this.f47066n;
            String str10 = this.f47067o;
            StepStyles.UiStepStyle uiStepStyle = this.f47068p;
            List list2 = this.f47069q;
            boolean z13 = this.f47070r;
            InternalErrorInfo internalErrorInfo = this.f47071s;
            boolean z14 = this.f47072t;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", components=" + list + ", stepName=" + str3 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", finalStep=" + z12 + ", inquirySessionConfig=" + gVar + ", gpsPermissionsTitle=" + str4 + ", gpsPermissionsRationale=" + str5 + ", gpsPermissionsModalPositiveButton=" + str6 + ", gpsPermissionsModalNegativeButton=" + str7 + ", gpsFeatureTitle=" + str8 + ", gpsFeatureRationale=" + str9 + ", gpsFeatureModalPositiveButton=" + str10 + ", styles=" + uiStepStyle + ", serverComponentErrors=" + list2 + ", isSubmitting=" + z13 + ", transitionError=" + internalErrorInfo + ", isRestoringState=" + z14 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f47073a = new a();

            private a() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1353460011;
            }

            public String toString() {
                return "Back";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final b f47074a = new b();

            private b() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -650975523;
            }

            public String toString() {
                return "Canceled";
            }
        }

        /* renamed from: qq.v4$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0637c implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final C0637c f47075a = new C0637c();

            private C0637c() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0637c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -584917881;
            }

            public String toString() {
                return "Completed";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d implements c {

            /* renamed from: a  reason: collision with root package name */
            private final String f47076a;

            /* renamed from: b  reason: collision with root package name */
            private final InternalErrorInfo f47077b;

            public d(String str, InternalErrorInfo cause) {
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f47076a = str;
                this.f47077b = cause;
            }

            public final InternalErrorInfo a() {
                return this.f47077b;
            }

            public final String b() {
                return this.f47076a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final e f47078a = new e();

            private e() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1959736081;
            }

            public String toString() {
                return "FinishedWithTransition";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f implements c {

            /* renamed from: a  reason: collision with root package name */
            private final k5 f47079a;

            /* renamed from: b  reason: collision with root package name */
            private final Map f47080b;

            /* renamed from: c  reason: collision with root package name */
            private final String f47081c;

            public f(k5 fromComponent, Map componentParams, String fromStep) {
                Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                Intrinsics.checkNotNullParameter(fromStep, "fromStep");
                this.f47079a = fromComponent;
                this.f47080b = componentParams;
                this.f47081c = fromStep;
            }

            public final Map a() {
                return this.f47080b;
            }

            public final k5 b() {
                return this.f47079a;
            }

            public final String c() {
                return this.f47081c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f47079a, fVar.f47079a) && Intrinsics.areEqual(this.f47080b, fVar.f47080b) && Intrinsics.areEqual(this.f47081c, fVar.f47081c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (((this.f47079a.hashCode() * 31) + this.f47080b.hashCode()) * 31) + this.f47081c.hashCode();
            }

            public String toString() {
                k5 k5Var = this.f47079a;
                Map map = this.f47080b;
                String str = this.f47081c;
                return "FinishedWithoutTransition(fromComponent=" + k5Var + ", componentParams=" + map + ", fromStep=" + str + ")";
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: a  reason: collision with root package name */
            private final List f47082a;

            /* renamed from: b  reason: collision with root package name */
            private final List f47083b;

            /* renamed from: c  reason: collision with root package name */
            private final List f47084c;

            /* renamed from: d  reason: collision with root package name */
            private final aq.a f47085d;

            /* renamed from: e  reason: collision with root package name */
            private final Function3 f47086e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f47087f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f47088g;

            /* renamed from: h  reason: collision with root package name */
            private final Function1 f47089h;

            /* renamed from: i  reason: collision with root package name */
            private final Function2 f47090i;

            /* renamed from: j  reason: collision with root package name */
            private final C0638a f47091j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f47092k;

            /* renamed from: l  reason: collision with root package name */
            private final Function2 f47093l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f47094m;

            /* renamed from: n  reason: collision with root package name */
            private final StepStyles.UiStepStyle f47095n;

            /* renamed from: o  reason: collision with root package name */
            private final String f47096o;

            /* renamed from: p  reason: collision with root package name */
            private final Function0 f47097p;

            /* renamed from: q  reason: collision with root package name */
            private final Function2 f47098q;

            /* renamed from: qq.v4$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0638a {

                /* renamed from: a  reason: collision with root package name */
                private final gq.h f47099a;

                /* renamed from: b  reason: collision with root package name */
                private final String f47100b;

                /* renamed from: c  reason: collision with root package name */
                private final boolean f47101c;

                public C0638a(gq.h component, String str, boolean z10) {
                    Intrinsics.checkNotNullParameter(component, "component");
                    this.f47099a = component;
                    this.f47100b = str;
                    this.f47101c = z10;
                }

                public final gq.h a() {
                    return this.f47099a;
                }

                public final String b() {
                    return this.f47100b;
                }

                public final boolean c() {
                    return this.f47101c;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0638a)) {
                        return false;
                    }
                    C0638a c0638a = (C0638a) obj;
                    if (Intrinsics.areEqual(this.f47099a, c0638a.f47099a) && Intrinsics.areEqual(this.f47100b, c0638a.f47100b) && this.f47101c == c0638a.f47101c) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f47099a.hashCode() * 31;
                    String str = this.f47100b;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f47101c);
                }

                public String toString() {
                    gq.h hVar = this.f47099a;
                    String str = this.f47100b;
                    boolean z10 = this.f47101c;
                    return "AutoSubmit(component=" + hVar + ", countdownText=" + str + ", isReadyToSubmit=" + z10 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(List components, List list, List componentErrors, aq.a navigationState, Function3 onClick, Function0 onComplete, Function0 onCancel, Function1 launchNfcScan, Function2 onVerifyPersonaClick, C0638a c0638a, Function0 onBack, Function2 onSuggestionSelected, boolean z10, StepStyles.UiStepStyle uiStepStyle, String str, Function0 onErrorDismissed, Function2 onCreateReusablePersonaClick) {
                super(null);
                Intrinsics.checkNotNullParameter(components, "components");
                Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onClick, "onClick");
                Intrinsics.checkNotNullParameter(onComplete, "onComplete");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(launchNfcScan, "launchNfcScan");
                Intrinsics.checkNotNullParameter(onVerifyPersonaClick, "onVerifyPersonaClick");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onSuggestionSelected, "onSuggestionSelected");
                Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
                Intrinsics.checkNotNullParameter(onCreateReusablePersonaClick, "onCreateReusablePersonaClick");
                this.f47082a = components;
                this.f47083b = list;
                this.f47084c = componentErrors;
                this.f47085d = navigationState;
                this.f47086e = onClick;
                this.f47087f = onComplete;
                this.f47088g = onCancel;
                this.f47089h = launchNfcScan;
                this.f47090i = onVerifyPersonaClick;
                this.f47091j = c0638a;
                this.f47092k = onBack;
                this.f47093l = onSuggestionSelected;
                this.f47094m = z10;
                this.f47095n = uiStepStyle;
                this.f47096o = str;
                this.f47097p = onErrorDismissed;
                this.f47098q = onCreateReusablePersonaClick;
            }

            public final Drawable a(Context context) {
                Intrinsics.checkNotNullParameter(context, "context");
                StepStyles.UiStepStyle uiStepStyle = this.f47095n;
                if (uiStepStyle != null) {
                    return nq.c.a(uiStepStyle, context);
                }
                return null;
            }

            public final C0638a b() {
                return this.f47091j;
            }

            public final Integer c() {
                StepStyles.UiStepStyle uiStepStyle = this.f47095n;
                if (uiStepStyle != null) {
                    return uiStepStyle.getBackgroundColorValue();
                }
                return null;
            }

            public final List d() {
                return this.f47083b;
            }

            public final List e() {
                return this.f47084c;
            }

            public final List f() {
                return this.f47082a;
            }

            public final String g() {
                return this.f47096o;
            }

            public final Integer h() {
                AttributeStyles.HeaderButtonColorStyle headerButtonColor;
                StyleElements.SimpleElementColor headerButton;
                StyleElements.SimpleElementColorValue base;
                StepStyles.UiStepStyle uiStepStyle = this.f47095n;
                if (uiStepStyle != null && (headerButtonColor = uiStepStyle.getHeaderButtonColor()) != null && (headerButton = headerButtonColor.getHeaderButton()) != null && (base = headerButton.getBase()) != null) {
                    return base.getValue();
                }
                return null;
            }

            public final Function1 i() {
                return this.f47089h;
            }

            public final aq.a j() {
                return this.f47085d;
            }

            public final Function0 k() {
                return this.f47092k;
            }

            public final Function0 l() {
                return this.f47088g;
            }

            public final Function3 m() {
                return this.f47086e;
            }

            public final Function0 n() {
                return this.f47087f;
            }

            public final Function2 o() {
                return this.f47098q;
            }

            public final Function0 p() {
                return this.f47097p;
            }

            public final Function2 q() {
                return this.f47093l;
            }

            public final Function2 r() {
                return this.f47090i;
            }

            public final StyleElements.PositionType s() {
                StepStyles.UiStepStyle uiStepStyle = this.f47095n;
                if (uiStepStyle != null) {
                    return uiStepStyle.getPageLevelVerticalAlignment();
                }
                return null;
            }

            public final StepStyles.UiStepStyle t() {
                return this.f47095n;
            }

            public final boolean u() {
                return this.f47094m;
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
        public static final /* synthetic */ int[] f47102a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f47103b;

        static {
            int[] iArr = new int[ip.g1.values().length];
            try {
                iArr[ip.g1.f29494d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ip.g1.f29495e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ip.g1.f29496i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f47102a = iArr;
            int[] iArr2 = new int[GovernmentIdNfcScan.DataGroupTypes.values().length];
            try {
                iArr2[GovernmentIdNfcScan.DataGroupTypes.Dg1.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[GovernmentIdNfcScan.DataGroupTypes.Dg2.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[GovernmentIdNfcScan.DataGroupTypes.Dg14.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[GovernmentIdNfcScan.DataGroupTypes.Sod.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            f47103b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f47104d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f47105e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f47106i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3 f47107o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ gq.h f47108p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, v4 v4Var, g3 g3Var, gq.h hVar, Continuation continuation) {
            super(2, continuation);
            this.f47105e = aVar;
            this.f47106i = v4Var;
            this.f47107o = g3Var;
            this.f47108p = hVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3 g3Var, gq.h hVar, r.c cVar) {
            String str;
            g3.a aVar = (g3.a) g3Var;
            Integer autoSubmitIntervalSeconds = hVar.getAutoSubmitIntervalSeconds();
            Intrinsics.checkNotNull(autoSubmitIntervalSeconds);
            int intValue = autoSubmitIntervalSeconds.intValue();
            String autoSubmitCountdownText = hVar.getAutoSubmitCountdownText();
            if (autoSubmitCountdownText != null) {
                Integer autoSubmitIntervalSeconds2 = hVar.getAutoSubmitIntervalSeconds();
                Intrinsics.checkNotNull(autoSubmitIntervalSeconds2);
                str = StringsKt.J(autoSubmitCountdownText, "{time}", String.valueOf(autoSubmitIntervalSeconds2.intValue()), false, 4, null);
            } else {
                str = null;
            }
            cVar.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0632a(hVar, intValue, str), null, false, false, null, null, null, 8127, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f47105e, this.f47106i, this.f47107o, this.f47108p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            xr.b.f();
            if (this.f47104d == 0) {
                kotlin.c.b(obj);
                cn.h c10 = this.f47105e.c();
                v4 v4Var = this.f47106i;
                final g3 g3Var = this.f47107o;
                final gq.h hVar = this.f47108p;
                d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.w4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = v4.f.k(g3.this, hVar, (r.c) obj2);
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
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f47109d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f47110e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f47111i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3.a.C0632a f47112o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ g3 f47113p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, v4 v4Var, g3.a.C0632a c0632a, g3 g3Var, Continuation continuation) {
            super(2, continuation);
            this.f47110e = aVar;
            this.f47111i = v4Var;
            this.f47112o = c0632a;
            this.f47113p = g3Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3.a.C0632a c0632a, g3 g3Var, r.c cVar) {
            String str;
            int b10 = c0632a.b() - 1;
            g3.a aVar = (g3.a) g3Var;
            gq.h a10 = c0632a.a();
            String autoSubmitCountdownText = c0632a.a().getAutoSubmitCountdownText();
            if (autoSubmitCountdownText != null) {
                str = StringsKt.J(autoSubmitCountdownText, "{time}", String.valueOf(b10), false, 4, null);
            } else {
                str = null;
            }
            cVar.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0632a(a10, b10, str), null, false, false, null, null, null, 8127, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f47110e, this.f47111i, this.f47112o, this.f47113p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            Object f10 = xr.b.f();
            int i10 = this.f47109d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f47109d = 1;
                if (ps.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            cn.h c10 = this.f47110e.c();
            v4 v4Var = this.f47111i;
            final g3.a.C0632a c0632a = this.f47112o;
            final g3 g3Var = this.f47113p;
            d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.x4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = v4.g.k(g3.a.C0632a.this, g3Var, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31765a;
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
        int f47114d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f47115e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f47116i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ GovernmentIdNfcScan.Attributes f47117o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f47118p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Date f47119q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Date f47120r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ g3.a.c f47121s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ g3.a f47122t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, v4 v4Var, GovernmentIdNfcScan.Attributes attributes, String str, Date date, Date date2, g3.a.c cVar, g3.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f47115e = aVar;
            this.f47116i = v4Var;
            this.f47117o = attributes;
            this.f47118p = str;
            this.f47119q = date;
            this.f47120r = date2;
            this.f47121s = cVar;
            this.f47122t = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(GovernmentIdNfcScan.Attributes attributes, v4 v4Var, String str, Date date, Date date2, g3.a.c cVar, g3.a aVar, r.c cVar2) {
            String string;
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            if (attributes == null || (string = attributes.getRequiredText()) == null) {
                string = v4Var.f47045a.getString(kp.e.B);
                Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            }
            if (StringsKt.k0(str)) {
                linkedHashMap.put(GovernmentIdNfcScan.documentNumberName, string);
            }
            if (date == null) {
                linkedHashMap.put(GovernmentIdNfcScan.dateOfBirthName, string);
            }
            if (date2 == null) {
                linkedHashMap.put(GovernmentIdNfcScan.expirationDateName, string);
            }
            cVar2.e(g3.a.b(aVar, null, null, CollectionsKt.e(new UiComponentError.UiGovernmentIdNfcScanComponentError(cVar.a().getName(), null, linkedHashMap, 2, null)), null, null, null, null, null, false, false, null, null, null, 8155, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f47115e, this.f47116i, this.f47117o, this.f47118p, this.f47119q, this.f47120r, this.f47121s, this.f47122t, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            xr.b.f();
            if (this.f47114d == 0) {
                kotlin.c.b(obj);
                cn.h c10 = this.f47115e.c();
                final v4 v4Var = this.f47116i;
                final GovernmentIdNfcScan.Attributes attributes = this.f47117o;
                final String str = this.f47118p;
                final Date date = this.f47119q;
                final Date date2 = this.f47120r;
                final g3.a.c cVar = this.f47121s;
                final g3.a aVar = this.f47122t;
                d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.y4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = v4.h.k(GovernmentIdNfcScan.Attributes.this, v4Var, str, date, date2, cVar, aVar, (r.c) obj2);
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
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final i f47123d = new i();

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(k5 it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.TRUE;
        }
    }

    public v4(Context applicationContext, o.a nfcScanWorkerFactory, y0.a createReusablePersonaWorkerFactory, z4.a verifyReusablePersonaWorkerFactory, aq.b navigationStateManager, ip.c1 permissionRequestWorkflow, x0 componentWorkHelper, wp.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(nfcScanWorkerFactory, "nfcScanWorkerFactory");
        Intrinsics.checkNotNullParameter(createReusablePersonaWorkerFactory, "createReusablePersonaWorkerFactory");
        Intrinsics.checkNotNullParameter(verifyReusablePersonaWorkerFactory, "verifyReusablePersonaWorkerFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(componentWorkHelper, "componentWorkHelper");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f47045a = applicationContext;
        this.f47046b = nfcScanWorkerFactory;
        this.f47047c = createReusablePersonaWorkerFactory;
        this.f47048d = verifyReusablePersonaWorkerFactory;
        this.f47049e = navigationStateManager;
        this.f47050f = permissionRequestWorkflow;
        this.f47051g = componentWorkHelper;
        this.f47052h = externalEventLogger;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r A0(final v4 v4Var, final k.a aVar, final boolean z10, final g3 g3Var, final c1.a it) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.k3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit B0;
                B0 = v4.B0(c1.a.this, aVar, v4Var, z10, g3Var, (r.c) obj);
                return B0;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(c1.a aVar, k.a aVar2, final v4 v4Var, boolean z10, final g3 g3Var, r.c action) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        cn.r d13;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = e.f47102a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cn.h c10 = aVar2.c();
                    d13 = cn.z.d(v4Var, null, new Function1() { // from class: qq.j4
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit F0;
                            F0 = v4.F0(g3.this, (r.c) obj);
                            return F0;
                        }
                    }, 1, null);
                    c10.d(d13);
                } else {
                    throw new rr.p();
                }
            } else if (z10) {
                cn.h c11 = aVar2.c();
                d12 = cn.z.d(v4Var, null, new Function1() { // from class: qq.h4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit D0;
                        D0 = v4.D0(v4.this, (r.c) obj);
                        return D0;
                    }
                }, 1, null);
                c11.d(d12);
            } else {
                cn.h c12 = aVar2.c();
                d11 = cn.z.d(v4Var, null, new Function1() { // from class: qq.i4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit E0;
                        E0 = v4.E0(g3.this, (r.c) obj);
                        return E0;
                    }
                }, 1, null);
                c12.d(d11);
            }
        } else {
            cn.h c13 = aVar2.c();
            d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.g4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C0;
                    C0 = v4.C0(v4.this, (r.c) obj);
                    return C0;
                }
            }, 1, null);
            c13.d(d10);
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(v4 v4Var, r.c a10) {
        g3.a aVar;
        Intrinsics.checkNotNullParameter(a10, "$this$a");
        Object c10 = a10.c();
        if (c10 instanceof g3.a) {
            aVar = (g3.a) c10;
        } else {
            aVar = null;
        }
        if (aVar == null) {
            return Unit.f31765a;
        }
        v4Var.g0(a10, aVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(v4 v4Var, r.c a10) {
        g3.a aVar;
        Intrinsics.checkNotNullParameter(a10, "$this$a");
        Object c10 = a10.c();
        if (c10 instanceof g3.a) {
            aVar = (g3.a) c10;
        } else {
            aVar = null;
        }
        if (aVar == null) {
            return Unit.f31765a;
        }
        v4Var.g0(a10, aVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar = (g3.a) g3Var;
        action.e(g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, String.valueOf(Integer.parseInt(aVar.l()) + 1), 3583, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, false, null, null, null, 7679, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(final v4 v4Var, final g3 g3Var, b bVar, k.a aVar, final k5 uiComponent, boolean z10, final Map componentParams) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(uiComponent, "uiComponent");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        g3.a aVar2 = (g3.a) g3Var;
        v4Var.Q0(uiComponent, z10, aVar2);
        if (bVar.l().b() != zp.a.f56610i && !aVar2.h()) {
            cn.h c10 = aVar.c();
            d11 = cn.z.d(v4Var, null, new Function1() { // from class: qq.m3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = v4.H0(g3.this, componentParams, uiComponent, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            c10.d(d11);
        } else {
            cn.h c11 = aVar.c();
            d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.n3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = v4.I0(componentParams, uiComponent, v4Var, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(g3 g3Var, Map map, k5 k5Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, true, map, k5Var, null, 4607, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(Map map, k5 k5Var, v4 v4Var, r.c action) {
        g3.a aVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof g3.a) {
            aVar = (g3.a) c10;
        } else {
            aVar = null;
        }
        g3.a aVar2 = aVar;
        if (aVar2 == null) {
            return Unit.f31765a;
        }
        g3.a b10 = g3.a.b(aVar2, null, null, null, null, null, null, null, null, false, false, map, k5Var, null, 5119, null);
        action.e(b10);
        v4Var.g0(action, b10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(k.a aVar, v4 v4Var) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.y3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K0;
                K0 = v4.K0((r.c) obj);
                return K0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.C0637c.f47075a);
        return Unit.f31765a;
    }

    private final void L0(b bVar, final g3.a aVar, k.a aVar2, final g3.a.c cVar) {
        List o10;
        String str;
        String connectionLostPrompt;
        List<GovernmentIdNfcScan.DataGroupTypes> enabledDataGroups;
        hp.c cVar2;
        final GovernmentIdNfcScanComponent a10 = cVar.a();
        String b10 = a10.c().b();
        String b11 = a10.h().b();
        Date b12 = a10.f().b();
        Date b13 = a10.i().b();
        GovernmentIdNfcScan.Attributes attributes = a10.e().getAttributes();
        if (!StringsKt.k0(b11) && b12 != null && b13 != null) {
            hp.b bVar2 = new hp.b(b11, b13, b12);
            if (attributes != null && (enabledDataGroups = attributes.getEnabledDataGroups()) != null) {
                o10 = new ArrayList();
                for (GovernmentIdNfcScan.DataGroupTypes dataGroupTypes : enabledDataGroups) {
                    int i10 = e.f47103b[dataGroupTypes.ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                if (i10 != 4) {
                                    cVar2 = null;
                                } else {
                                    cVar2 = hp.c.f26399o;
                                }
                            } else {
                                cVar2 = hp.c.f26398i;
                            }
                        } else {
                            cVar2 = hp.c.f26397e;
                        }
                    } else {
                        cVar2 = hp.c.f26396d;
                    }
                    if (cVar2 != null) {
                        o10.add(cVar2);
                    }
                }
            } else {
                o10 = CollectionsKt.o(hp.c.f26396d, hp.c.f26397e, hp.c.f26399o);
            }
            o.a aVar3 = this.f47046b;
            String str2 = (attributes == null || (str2 = attributes.getScanDocumentPrompt()) == null) ? "" : "";
            String str3 = (attributes == null || (str3 = attributes.getAuthenticating()) == null) ? "" : "";
            String str4 = (attributes == null || (str4 = attributes.getReading()) == null) ? "" : "";
            String string = this.f47045a.getString(kp.e.f34956y);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            String str5 = (attributes == null || (str5 = attributes.getScanDocumentSuccess()) == null) ? "" : "";
            String str6 = (attributes == null || (str6 = attributes.getEnableNfcPrompt()) == null) ? "" : "";
            String string2 = this.f47045a.getString(kp.e.f34957z);
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String string3 = this.f47045a.getString(kp.e.f34956y);
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            if (attributes != null && (connectionLostPrompt = attributes.getConnectionLostPrompt()) != null) {
                str = connectionLostPrompt;
            } else {
                if (attributes != null) {
                    str = attributes.getScanDocumentError();
                } else {
                    str = null;
                }
                if (str == null) {
                    str = "";
                }
            }
            String string4 = this.f47045a.getString(kp.e.B);
            Intrinsics.checkNotNullExpressionValue(string4, "getString(...)");
            String str7 = (attributes == null || (r4 = attributes.getAuthenticationErrorPrompt()) == null) ? "" : "";
            String string5 = this.f47045a.getString(kp.e.B);
            Intrinsics.checkNotNullExpressionValue(string5, "getString(...)");
            String str8 = (attributes == null || (str8 = attributes.getScanDocumentError()) == null) ? "" : "";
            String string6 = this.f47045a.getString(kp.e.B);
            Intrinsics.checkNotNullExpressionValue(string6, "getString(...)");
            cn.w.l(aVar2, aVar3.a(b10, bVar2, new hp.m(str2, str3, str4, string, str5, str6, string2, string3, str, string4, str7, string5, str8, string6), o10, bVar.p(), null), Reflection.typeOf(hp.o.class), "", new Function1() { // from class: qq.z3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r M0;
                    M0 = v4.M0(v4.this, aVar, cVar, a10, (hp.k) obj);
                    return M0;
                }
            });
            return;
        }
        aVar2.a("client_side_nfc_form_validation", new h(aVar2, this, attributes, b11, b12, b13, cVar, aVar, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r M0(v4 v4Var, final g3.a aVar, final g3.a.c cVar, final GovernmentIdNfcScanComponent governmentIdNfcScanComponent, final hp.k output) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        Intrinsics.checkNotNullParameter(output, "output");
        if (Intrinsics.areEqual(output, k.a.f26411d)) {
            d12 = cn.z.d(v4Var, null, new Function1() { // from class: qq.c4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = v4.N0(g3.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d12;
        } else if (output instanceof k.b) {
            d11 = cn.z.d(v4Var, null, new Function1() { // from class: qq.e4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = v4.O0(g3.a.c.this, governmentIdNfcScanComponent, aVar, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d11;
        } else if (output instanceof k.d) {
            d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.f4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = v4.P0(g3.a.c.this, output, aVar, (r.c) obj);
                    return P0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, null, 8159, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(g3.a.c cVar, GovernmentIdNfcScanComponent governmentIdNfcScanComponent, g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String name = cVar.a().getName();
        GovernmentIdNfcScan.Attributes attributes = governmentIdNfcScanComponent.e().getAttributes();
        action.e(g3.a.b(aVar, null, null, CollectionsKt.e(new UiComponentError.UiInputComponentError(name, "", (attributes == null || (r3 = attributes.getScanDocumentError()) == null) ? "" : "")), null, null, null, null, null, false, false, null, null, null, 8155, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(g3.a.c cVar, hp.k kVar, g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        k.d dVar = (k.d) kVar;
        cVar.a().j().c(new hq.g(dVar.b(), dVar.c(), dVar.d(), dVar.a()));
        c5 c5Var = (c5) hq.f.a(aVar.getComponents(), Reflection.getOrCreateKotlinClass(c5.class), i.f47123d);
        if (c5Var != null) {
            action.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0632a(c5Var, 0, null), null, false, false, null, null, null, 8095, null));
        }
        return Unit.f31765a;
    }

    private final void Q0(final k5 k5Var, final boolean z10, g3.a aVar) {
        h0(aVar.getComponents(), new Function1() { // from class: qq.k4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R0;
                R0 = v4.R0(z10, k5Var, (k5) obj);
                return R0;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(boolean z10, k5 k5Var, k5 it) {
        boolean z11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof gq.j2) {
            gq.j2 j2Var = (gq.j2) it;
            if (z10) {
                z11 = Intrinsics.areEqual(it.getName(), k5Var.getName());
            } else {
                z11 = true;
            }
            j2Var.m(z11);
        }
        return Unit.f31765a;
    }

    private final void W(b bVar, final g3.a aVar, k.a aVar2) {
        final g3.b j10 = aVar.j();
        if (j10 instanceof g3.b.a) {
            y0.a aVar3 = this.f47047c;
            String n10 = bVar.n();
            String k10 = bVar.k();
            g3.b.a aVar4 = (g3.b.a) j10;
            String e10 = aVar4.a().e();
            if (e10 != null) {
                cn.w.l(aVar2, aVar3.a(n10, k10, e10, aVar4.a().getName()), Reflection.typeOf(y0.class), "", new Function1() { // from class: qq.q3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r X;
                        X = v4.X(g3.b.this, this, aVar, (y0.b) obj);
                        return X;
                    }
                });
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        } else if (j10 instanceof g3.b.C0636b) {
            z4.a aVar5 = this.f47048d;
            String n11 = bVar.n();
            String k11 = bVar.k();
            g3.b.C0636b c0636b = (g3.b.C0636b) j10;
            String a10 = c0636b.b().a();
            if (a10 != null) {
                cn.w.l(aVar2, aVar5.a(n11, k11, a10, c0636b.b().getName(), c0636b.a()), Reflection.typeOf(z4.class), "", new Function1() { // from class: qq.r3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        cn.r b02;
                        b02 = v4.b0(v4.this, aVar, (z4.b) obj);
                        return b02;
                    }
                });
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        } else if (j10 == null) {
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r X(final g3.b bVar, final v4 v4Var, final g3.a aVar, final y0.b it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (((g3.b.a) bVar).a().c()) {
            d12 = cn.z.d(v4Var, null, new Function1() { // from class: qq.l4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y;
                    Y = v4.Y((r.c) obj);
                    return Y;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, y0.b.a.f47159a)) {
            d11 = cn.z.d(v4Var, null, new Function1() { // from class: qq.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z;
                    Z = v4.Z(g3.a.this, bVar, (r.c) obj);
                    return Z;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof y0.b.C0639b) {
            d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a02;
                    a02 = v4.a0(y0.b.this, aVar, v4Var, bVar, (r.c) obj);
                    return a02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.C0637c.f47075a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(g3.a aVar, g3.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.b.a aVar2 = (g3.b.a) bVar;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), aVar2.a(), com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar2.a(), null, null, null, false, true, false, false, null, 207, null)), null, null, null, null, null, null, null, false, false, null, null, null, 8062, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(y0.b bVar, g3.a aVar, v4 v4Var, g3.b bVar2, r.c action) {
        g3.a b10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((y0.b.C0639b) bVar).a() instanceof InternalErrorInfo.NetworkErrorInfo) {
            b10 = g3.a.b(aVar, null, null, null, null, v4Var.f47045a.getString(kp.e.f34955x), null, null, null, false, false, null, null, null, 8047, null);
        } else {
            g3.b.a aVar2 = (g3.b.a) bVar2;
            b10 = g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), aVar2.a(), com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar2.a(), null, null, null, false, true, false, false, null, 207, null)), null, null, null, null, null, null, null, false, false, null, null, null, 8062, null);
        }
        action.e(b10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r b0(final v4 v4Var, final g3.a aVar, final z4.b it) {
        cn.r d10;
        cn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, z4.b.a.f47202a)) {
            d11 = cn.z.d(v4Var, null, new Function1() { // from class: qq.a4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c02;
                    c02 = v4.c0((r.c) obj);
                    return c02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof z4.b.C0640b) {
            d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.b4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d02;
                    d02 = v4.d0(z4.b.this, v4Var, aVar, (r.c) obj);
                    return d02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.e.f47078a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(z4.b bVar, v4 v4Var, g3.a aVar, r.c action) {
        g3.a b10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((z4.b.C0640b) bVar).a() instanceof InternalErrorInfo.NetworkErrorInfo) {
            b10 = g3.a.b(aVar, null, null, null, null, v4Var.f47045a.getString(kp.e.f34955x), null, null, null, false, false, null, null, null, 8047, null);
        } else {
            b10 = g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, null, 8063, null);
        }
        action.e(b10);
        return Unit.f31765a;
    }

    private final void f0(b bVar, g3 g3Var) {
        wp.i fVar;
        if (g3Var instanceof g3.a) {
            g3.a aVar = (g3.a) g3Var;
            if (aVar.j() != null) {
                g3.b j10 = aVar.j();
                if (j10 instanceof g3.b.a) {
                    fVar = new i.a(bVar.o());
                } else if (j10 instanceof g3.b.C0636b) {
                    fVar = new i.g(bVar.o());
                } else {
                    throw new rr.p();
                }
            } else if (aVar.i() != null) {
                fVar = new i.d(bVar.o());
            } else {
                fVar = new i.f(bVar.o());
            }
            this.f47052h.c(fVar);
            return;
        }
        throw new rr.p();
    }

    private final void g0(r.c cVar, g3.a aVar) {
        k5 p10 = aVar.p();
        Map e10 = aVar.e();
        if (p10 != null && e10 != null) {
            cVar.d(new c.f(p10, e10, aVar.o()));
        }
    }

    private final void h0(List list, final Function1 function1) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            k5 k5Var = (k5) it.next();
            if (k5Var instanceof l5) {
                h0(((l5) k5Var).getChildren(), new Function1() { // from class: qq.x3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit i02;
                        i02 = v4.i0(Function1.this, (k5) obj);
                        return i02;
                    }
                });
            } else {
                function1.invoke(k5Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(Function1 function1, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        function1.invoke(it);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(v4 v4Var, b bVar, g3 g3Var, k.a aVar, k5 component) {
        Intrinsics.checkNotNullParameter(component, "component");
        v4Var.f47051g.Z(bVar, (g3.a) g3Var, aVar, component);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean l0(gq.h component) {
        Intrinsics.checkNotNullParameter(component, "component");
        if (component.getAutoSubmitIntervalSeconds() != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, v4 v4Var, final b bVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.v3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = v4.n0(v4.b.this, (r.c) obj);
                return n02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(b bVar, r.c action) {
        Object obj;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (bVar.d()) {
            obj = c.C0637c.f47075a;
        } else {
            obj = c.b.f47074a;
        }
        action.d(obj);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(v4 v4Var, final g3 g3Var, k.a aVar, final GovernmentIdNfcScanComponent component) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        v4Var.Q0(component, true, (g3.a) g3Var);
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.o3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p02;
                p02 = v4.p0(g3.this, component, (r.c) obj);
                return p02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3 g3Var, GovernmentIdNfcScanComponent governmentIdNfcScanComponent, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, new g3.a.c(governmentIdNfcScanComponent), null, null, false, false, null, null, null, 8159, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(v4 v4Var, final g3 g3Var, k.a aVar, final q5 component, final Map componentParams) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        v4Var.Q0(component, true, (g3.a) g3Var);
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.w3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = v4.r0(g3.this, component, componentParams, (r.c) obj);
                return r02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(g3 g3Var, q5 q5Var, Map map, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, new g3.b.C0636b(q5Var, map), false, false, null, null, null, 8063, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(k.a aVar, v4 v4Var) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.t3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t02;
                t02 = v4.t0((r.c) obj);
                return t02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f47073a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(k.a aVar, v4 v4Var, final g3 g3Var, final InputAddressComponent component, final String addressId) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(addressId, "addressId");
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.l3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v02;
                v02 = v4.v0(g3.this, component, addressId, (r.c) obj);
                return v02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(g3 g3Var, InputAddressComponent inputAddressComponent, String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar = (g3.a) g3Var;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), inputAddressComponent, inputAddressComponent.U(str).R(Boolean.TRUE)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(k.a aVar, v4 v4Var, final g3 g3Var) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.p3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit x02;
                x02 = v4.x0(g3.this, (r.c) obj);
                return x02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, false, null, null, null, 8175, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, v4 v4Var, final g3 g3Var, final com.withpersona.sdk2.inquiry.steps.ui.components.a createReusablePersonaComponent, final k5 buttonClicked) {
        cn.r d10;
        Intrinsics.checkNotNullParameter(createReusablePersonaComponent, "createReusablePersonaComponent");
        Intrinsics.checkNotNullParameter(buttonClicked, "buttonClicked");
        cn.h c10 = aVar.c();
        d10 = cn.z.d(v4Var, null, new Function1() { // from class: qq.u3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = v4.z0(g3.this, createReusablePersonaComponent, buttonClicked, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(g3 g3Var, com.withpersona.sdk2.inquiry.steps.ui.components.a aVar, k5 k5Var, r.c action) {
        gq.h hVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar2 = (g3.a) g3Var;
        List components = aVar2.getComponents();
        if (k5Var instanceof gq.h) {
            hVar = (gq.h) k5Var;
        } else {
            hVar = null;
        }
        if (hVar != null) {
            hVar.m(true);
        }
        Unit unit = Unit.f31765a;
        action.e(g3.a.b(aVar2, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(components, aVar, gq.q.b(aVar, k5Var, k5Var)), null, null, null, null, null, null, new g3.b.a(aVar), false, false, null, null, null, 8062, null));
        return Unit.f31765a;
    }

    @Override // cn.k
    /* renamed from: S0 */
    public cn.i g(g3 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return en.s.a(state);
    }

    @Override // cn.k
    /* renamed from: e0 */
    public g3 d(b props, cn.i iVar) {
        List l10;
        Intrinsics.checkNotNullParameter(props, "props");
        if (iVar != null) {
            ByteString b10 = iVar.b();
            Parcelable parcelable = null;
            if (b10.G() <= 0) {
                b10 = null;
            }
            if (b10 != null) {
                Parcel obtain = Parcel.obtain();
                Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
                byte[] L = b10.L();
                obtain.unmarshall(L, 0, L.length);
                obtain.setDataPosition(0);
                parcelable = obtain.readParcelable(cn.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            g3 g3Var = (g3) parcelable;
            if (g3Var != null) {
                return g3Var;
            }
        }
        List c10 = props.c();
        if (c10 == null || (l10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.i(c10)) == null) {
            l10 = CollectionsKt.l();
        }
        List list = l10;
        String o10 = props.o();
        StepStyles.UiStepStyle p10 = props.p();
        List m10 = props.m();
        if (m10 == null) {
            m10 = CollectionsKt.l();
        }
        return new g3.a(list, o10, m10, p10, null, null, null, null, false, false, null, null, null, 8176, null);
    }

    @Override // cn.k
    /* renamed from: j0 */
    public Object f(final b renderProps, final g3 renderState, final k.a context) {
        boolean z10;
        ip.d0 d0Var;
        final boolean z11;
        final v4 v4Var;
        final g3 g3Var;
        Function3 function3;
        Function0 function0;
        Function0 function02;
        d.a.C0638a c0638a;
        boolean z12;
        boolean z13;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (renderProps.r()) {
            return Unit.f31765a;
        }
        f0(renderProps, renderState);
        if (renderState instanceof g3.a) {
            g3.a aVar = (g3.a) renderState;
            W(renderProps, aVar, context);
            aq.b bVar = this.f47049e;
            boolean a10 = renderProps.a();
            boolean b10 = renderProps.b();
            if (aVar.j() == null && !renderProps.s()) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.c(a10, b10, z10);
            h0(aVar.getComponents(), new Function1() { // from class: qq.h3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit k02;
                    k02 = v4.k0(v4.this, renderProps, renderState, context, (k5) obj);
                    return k02;
                }
            });
            if (aVar.i() != null) {
                L0(renderProps, aVar, context, aVar.i());
            }
            if (renderProps.l().c() == zp.e.f56620d) {
                d0Var = ip.d0.f29470i;
            } else {
                d0Var = ip.d0.f29471o;
            }
            ip.d0 d0Var2 = d0Var;
            if (renderProps.l().b() == zp.a.f56609e) {
                z11 = true;
            } else {
                z11 = false;
            }
            String f10 = aVar.f();
            if (f10 == null && renderProps.q() != null) {
                f10 = this.f47045a.getString(kp.e.f34955x);
            }
            String str = f10;
            if (aVar.c() == null) {
                gq.h hVar = (gq.h) hq.f.a(aVar.getComponents(), Reflection.getOrCreateKotlinClass(gq.h.class), new Function1() { // from class: qq.o4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        boolean l02;
                        l02 = v4.l0((gq.h) obj);
                        return Boolean.valueOf(l02);
                    }
                });
                if (hVar != null) {
                    context.a("begin_countdown", new f(context, this, renderState, hVar, null));
                }
            }
            g3.a.C0632a c10 = aVar.c();
            if (c10 != null && c10.b() >= 1) {
                String str2 = "countdown_" + c10.b();
                g gVar = new g(context, this, c10, renderState, null);
                v4Var = this;
                g3Var = renderState;
                context.a(str2, gVar);
            } else {
                v4Var = this;
                g3Var = renderState;
            }
            List components = aVar.getComponents();
            List c11 = renderProps.c();
            List d10 = aVar.d();
            List m10 = renderProps.m();
            if (m10 == null) {
                m10 = CollectionsKt.l();
            }
            List L0 = CollectionsKt.L0(d10, m10);
            aq.a b11 = v4Var.f47049e.b();
            Function3 function32 = new Function3() { // from class: qq.p4
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit G0;
                    G0 = v4.G0(v4.this, g3Var, renderProps, context, (k5) obj, ((Boolean) obj2).booleanValue(), (Map) obj3);
                    return G0;
                }
            };
            Function0 function03 = new Function0() { // from class: qq.q4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit J0;
                    J0 = v4.J0(k.a.this, v4Var);
                    return J0;
                }
            };
            Function0 function04 = new Function0() { // from class: qq.r4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m02;
                    m02 = v4.m0(k.a.this, v4Var, renderProps);
                    return m02;
                }
            };
            Function1 function1 = new Function1() { // from class: qq.s4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o02;
                    o02 = v4.o0(v4.this, g3Var, context, (GovernmentIdNfcScanComponent) obj);
                    return o02;
                }
            };
            Function2 function2 = new Function2() { // from class: qq.t4
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit q02;
                    q02 = v4.q0(v4.this, g3Var, context, (q5) obj, (Map) obj2);
                    return q02;
                }
            };
            if (!renderProps.s() && aVar.c() != null) {
                function3 = function32;
                function0 = function03;
                gq.h a11 = aVar.c().a();
                function02 = function04;
                String c12 = aVar.c().c();
                if (aVar.c().b() <= 0) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                c0638a = new d.a.C0638a(a11, c12, z13);
            } else {
                function3 = function32;
                function0 = function03;
                function02 = function04;
                c0638a = null;
            }
            Function0 function05 = new Function0() { // from class: qq.u4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s02;
                    s02 = v4.s0(k.a.this, v4Var);
                    return s02;
                }
            };
            Function2 function22 = new Function2() { // from class: qq.i3
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit u02;
                    u02 = v4.u0(k.a.this, v4Var, g3Var, (InputAddressComponent) obj, (String) obj2);
                    return u02;
                }
            };
            if (aVar.j() == null && !renderProps.s()) {
                z12 = false;
            } else {
                z12 = true;
            }
            Function3 function33 = function3;
            Function0 function06 = function0;
            d.a aVar2 = new d.a(components, c11, L0, b11, function33, function06, function02, function1, function2, c0638a, function05, function22, z12, aVar.getStyles(), str, new Function0() { // from class: qq.j3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit w02;
                    w02 = v4.w0(k.a.this, v4Var, g3Var);
                    return w02;
                }
            }, new Function2() { // from class: qq.s3
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit y02;
                    y02 = v4.y0(k.a.this, v4Var, g3Var, (com.withpersona.sdk2.inquiry.steps.ui.components.a) obj, (k5) obj2);
                    return y02;
                }
            });
            boolean q10 = aVar.q();
            String j10 = renderProps.j();
            if (j10 == null) {
                j10 = "";
            }
            String str3 = j10;
            String i10 = renderProps.i();
            if (i10 == null) {
                i10 = "Gps permission are required to verify your identity";
            }
            Context context2 = v4Var.f47045a;
            String string = context2.getString(kp.e.S, sp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            String e10 = renderProps.e();
            if (e10 == null) {
                e10 = v4Var.f47045a.getString(kp.e.f34957z);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            String h10 = renderProps.h();
            if (h10 == null) {
                h10 = v4Var.f47045a.getString(kp.e.f34957z);
                Intrinsics.checkNotNullExpressionValue(h10, "getString(...)");
            }
            return ip.l1.d(aVar2, context, q10, d0Var2, z11, str3, i10, string, e10, h10, renderProps.g(), renderProps.f(), renderProps.h(), v4Var.f47050f, renderProps.p(), aVar.l(), new Function1() { // from class: qq.d4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r A0;
                    A0 = v4.A0(v4.this, context, z11, g3Var, (c1.a) obj);
                    return A0;
                }
            });
        }
        throw new rr.p();
    }
}
