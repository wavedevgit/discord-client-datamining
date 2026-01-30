package hq;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputAddressComponent;
import hq.g3;
import hq.v4;
import hq.y0;
import hq.z4;
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
import np.i;
import okio.ByteString;
import tm.k;
import tm.r;
import xp.c5;
import xp.k5;
import xp.l5;
import xp.q5;
import yo.k;
import yo.o;
import zo.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v4 extends tm.k {

    /* renamed from: i  reason: collision with root package name */
    public static final a f28028i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f28029a;

    /* renamed from: b  reason: collision with root package name */
    private final o.a f28030b;

    /* renamed from: c  reason: collision with root package name */
    private final y0.a f28031c;

    /* renamed from: d  reason: collision with root package name */
    private final z4.a f28032d;

    /* renamed from: e  reason: collision with root package name */
    private final rp.b f28033e;

    /* renamed from: f  reason: collision with root package name */
    private final zo.c1 f28034f;

    /* renamed from: g  reason: collision with root package name */
    private final x0 f28035g;

    /* renamed from: h  reason: collision with root package name */
    private final np.c f28036h;

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
        private final String f28037a;

        /* renamed from: b  reason: collision with root package name */
        private final String f28038b;

        /* renamed from: c  reason: collision with root package name */
        private final List f28039c;

        /* renamed from: d  reason: collision with root package name */
        private final String f28040d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f28041e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f28042f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f28043g;

        /* renamed from: h  reason: collision with root package name */
        private final qp.g f28044h;

        /* renamed from: i  reason: collision with root package name */
        private final String f28045i;

        /* renamed from: j  reason: collision with root package name */
        private final String f28046j;

        /* renamed from: k  reason: collision with root package name */
        private final String f28047k;

        /* renamed from: l  reason: collision with root package name */
        private final String f28048l;

        /* renamed from: m  reason: collision with root package name */
        private final String f28049m;

        /* renamed from: n  reason: collision with root package name */
        private final String f28050n;

        /* renamed from: o  reason: collision with root package name */
        private final String f28051o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.UiStepStyle f28052p;

        /* renamed from: q  reason: collision with root package name */
        private final List f28053q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f28054r;

        /* renamed from: s  reason: collision with root package name */
        private final InternalErrorInfo f28055s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f28056t;

        public b(String sessionToken, String inquiryId, List list, String stepName, boolean z10, boolean z11, boolean z12, qp.g inquirySessionConfig, String str, String str2, String str3, String str4, String str5, String str6, String str7, StepStyles.UiStepStyle uiStepStyle, List list2, boolean z13, InternalErrorInfo internalErrorInfo, boolean z14) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f28037a = sessionToken;
            this.f28038b = inquiryId;
            this.f28039c = list;
            this.f28040d = stepName;
            this.f28041e = z10;
            this.f28042f = z11;
            this.f28043g = z12;
            this.f28044h = inquirySessionConfig;
            this.f28045i = str;
            this.f28046j = str2;
            this.f28047k = str3;
            this.f28048l = str4;
            this.f28049m = str5;
            this.f28050n = str6;
            this.f28051o = str7;
            this.f28052p = uiStepStyle;
            this.f28053q = list2;
            this.f28054r = z13;
            this.f28055s = internalErrorInfo;
            this.f28056t = z14;
        }

        public final boolean a() {
            return this.f28041e;
        }

        public final boolean b() {
            return this.f28042f;
        }

        public final List c() {
            return this.f28039c;
        }

        public final boolean d() {
            return this.f28043g;
        }

        public final String e() {
            return this.f28051o;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f28037a, bVar.f28037a) && Intrinsics.areEqual(this.f28038b, bVar.f28038b) && Intrinsics.areEqual(this.f28039c, bVar.f28039c) && Intrinsics.areEqual(this.f28040d, bVar.f28040d) && this.f28041e == bVar.f28041e && this.f28042f == bVar.f28042f && this.f28043g == bVar.f28043g && Intrinsics.areEqual(this.f28044h, bVar.f28044h) && Intrinsics.areEqual(this.f28045i, bVar.f28045i) && Intrinsics.areEqual(this.f28046j, bVar.f28046j) && Intrinsics.areEqual(this.f28047k, bVar.f28047k) && Intrinsics.areEqual(this.f28048l, bVar.f28048l) && Intrinsics.areEqual(this.f28049m, bVar.f28049m) && Intrinsics.areEqual(this.f28050n, bVar.f28050n) && Intrinsics.areEqual(this.f28051o, bVar.f28051o) && Intrinsics.areEqual(this.f28052p, bVar.f28052p) && Intrinsics.areEqual(this.f28053q, bVar.f28053q) && this.f28054r == bVar.f28054r && Intrinsics.areEqual(this.f28055s, bVar.f28055s) && this.f28056t == bVar.f28056t) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f28050n;
        }

        public final String g() {
            return this.f28049m;
        }

        public final String h() {
            return this.f28048l;
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
            int hashCode11 = ((this.f28037a.hashCode() * 31) + this.f28038b.hashCode()) * 31;
            List list = this.f28039c;
            int i10 = 0;
            if (list == null) {
                hashCode = 0;
            } else {
                hashCode = list.hashCode();
            }
            int hashCode12 = (((((((((((hashCode11 + hashCode) * 31) + this.f28040d.hashCode()) * 31) + Boolean.hashCode(this.f28041e)) * 31) + Boolean.hashCode(this.f28042f)) * 31) + Boolean.hashCode(this.f28043g)) * 31) + this.f28044h.hashCode()) * 31;
            String str = this.f28045i;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode2) * 31;
            String str2 = this.f28046j;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str3 = this.f28047k;
            if (str3 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str3.hashCode();
            }
            int i13 = (i12 + hashCode4) * 31;
            String str4 = this.f28048l;
            if (str4 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str4.hashCode();
            }
            int i14 = (i13 + hashCode5) * 31;
            String str5 = this.f28049m;
            if (str5 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str5.hashCode();
            }
            int i15 = (i14 + hashCode6) * 31;
            String str6 = this.f28050n;
            if (str6 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str6.hashCode();
            }
            int i16 = (i15 + hashCode7) * 31;
            String str7 = this.f28051o;
            if (str7 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str7.hashCode();
            }
            int i17 = (i16 + hashCode8) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f28052p;
            if (uiStepStyle == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = uiStepStyle.hashCode();
            }
            int i18 = (i17 + hashCode9) * 31;
            List list2 = this.f28053q;
            if (list2 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = list2.hashCode();
            }
            int hashCode13 = (((i18 + hashCode10) * 31) + Boolean.hashCode(this.f28054r)) * 31;
            InternalErrorInfo internalErrorInfo = this.f28055s;
            if (internalErrorInfo != null) {
                i10 = internalErrorInfo.hashCode();
            }
            return ((hashCode13 + i10) * 31) + Boolean.hashCode(this.f28056t);
        }

        public final String i() {
            return this.f28046j;
        }

        public final String j() {
            return this.f28045i;
        }

        public final String k() {
            return this.f28038b;
        }

        public final qp.g l() {
            return this.f28044h;
        }

        public final List m() {
            return this.f28053q;
        }

        public final String n() {
            return this.f28037a;
        }

        public final String o() {
            return this.f28040d;
        }

        public final StepStyles.UiStepStyle p() {
            return this.f28052p;
        }

        public final InternalErrorInfo q() {
            return this.f28055s;
        }

        public final boolean r() {
            return this.f28056t;
        }

        public final boolean s() {
            return this.f28054r;
        }

        public String toString() {
            String str = this.f28037a;
            String str2 = this.f28038b;
            List list = this.f28039c;
            String str3 = this.f28040d;
            boolean z10 = this.f28041e;
            boolean z11 = this.f28042f;
            boolean z12 = this.f28043g;
            qp.g gVar = this.f28044h;
            String str4 = this.f28045i;
            String str5 = this.f28046j;
            String str6 = this.f28047k;
            String str7 = this.f28048l;
            String str8 = this.f28049m;
            String str9 = this.f28050n;
            String str10 = this.f28051o;
            StepStyles.UiStepStyle uiStepStyle = this.f28052p;
            List list2 = this.f28053q;
            boolean z13 = this.f28054r;
            InternalErrorInfo internalErrorInfo = this.f28055s;
            boolean z14 = this.f28056t;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", components=" + list + ", stepName=" + str3 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", finalStep=" + z12 + ", inquirySessionConfig=" + gVar + ", gpsPermissionsTitle=" + str4 + ", gpsPermissionsRationale=" + str5 + ", gpsPermissionsModalPositiveButton=" + str6 + ", gpsPermissionsModalNegativeButton=" + str7 + ", gpsFeatureTitle=" + str8 + ", gpsFeatureRationale=" + str9 + ", gpsFeatureModalPositiveButton=" + str10 + ", styles=" + uiStepStyle + ", serverComponentErrors=" + list2 + ", isSubmitting=" + z13 + ", transitionError=" + internalErrorInfo + ", isRestoringState=" + z14 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f28057a = new a();

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
            public static final b f28058a = new b();

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

        /* renamed from: hq.v4$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0363c implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final C0363c f28059a = new C0363c();

            private C0363c() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0363c)) {
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
            private final String f28060a;

            /* renamed from: b  reason: collision with root package name */
            private final InternalErrorInfo f28061b;

            public d(String str, InternalErrorInfo cause) {
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f28060a = str;
                this.f28061b = cause;
            }

            public final InternalErrorInfo a() {
                return this.f28061b;
            }

            public final String b() {
                return this.f28060a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final e f28062a = new e();

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
            private final k5 f28063a;

            /* renamed from: b  reason: collision with root package name */
            private final Map f28064b;

            /* renamed from: c  reason: collision with root package name */
            private final String f28065c;

            public f(k5 fromComponent, Map componentParams, String fromStep) {
                Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                Intrinsics.checkNotNullParameter(fromStep, "fromStep");
                this.f28063a = fromComponent;
                this.f28064b = componentParams;
                this.f28065c = fromStep;
            }

            public final Map a() {
                return this.f28064b;
            }

            public final k5 b() {
                return this.f28063a;
            }

            public final String c() {
                return this.f28065c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f28063a, fVar.f28063a) && Intrinsics.areEqual(this.f28064b, fVar.f28064b) && Intrinsics.areEqual(this.f28065c, fVar.f28065c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (((this.f28063a.hashCode() * 31) + this.f28064b.hashCode()) * 31) + this.f28065c.hashCode();
            }

            public String toString() {
                k5 k5Var = this.f28063a;
                Map map = this.f28064b;
                String str = this.f28065c;
                return "FinishedWithoutTransition(fromComponent=" + k5Var + ", componentParams=" + map + ", fromStep=" + str + ")";
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: a  reason: collision with root package name */
            private final List f28066a;

            /* renamed from: b  reason: collision with root package name */
            private final List f28067b;

            /* renamed from: c  reason: collision with root package name */
            private final List f28068c;

            /* renamed from: d  reason: collision with root package name */
            private final rp.a f28069d;

            /* renamed from: e  reason: collision with root package name */
            private final Function3 f28070e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f28071f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f28072g;

            /* renamed from: h  reason: collision with root package name */
            private final Function1 f28073h;

            /* renamed from: i  reason: collision with root package name */
            private final Function2 f28074i;

            /* renamed from: j  reason: collision with root package name */
            private final C0364a f28075j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f28076k;

            /* renamed from: l  reason: collision with root package name */
            private final Function2 f28077l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f28078m;

            /* renamed from: n  reason: collision with root package name */
            private final StepStyles.UiStepStyle f28079n;

            /* renamed from: o  reason: collision with root package name */
            private final String f28080o;

            /* renamed from: p  reason: collision with root package name */
            private final Function0 f28081p;

            /* renamed from: q  reason: collision with root package name */
            private final Function2 f28082q;

            /* renamed from: hq.v4$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0364a {

                /* renamed from: a  reason: collision with root package name */
                private final xp.h f28083a;

                /* renamed from: b  reason: collision with root package name */
                private final String f28084b;

                /* renamed from: c  reason: collision with root package name */
                private final boolean f28085c;

                public C0364a(xp.h component, String str, boolean z10) {
                    Intrinsics.checkNotNullParameter(component, "component");
                    this.f28083a = component;
                    this.f28084b = str;
                    this.f28085c = z10;
                }

                public final xp.h a() {
                    return this.f28083a;
                }

                public final String b() {
                    return this.f28084b;
                }

                public final boolean c() {
                    return this.f28085c;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0364a)) {
                        return false;
                    }
                    C0364a c0364a = (C0364a) obj;
                    if (Intrinsics.areEqual(this.f28083a, c0364a.f28083a) && Intrinsics.areEqual(this.f28084b, c0364a.f28084b) && this.f28085c == c0364a.f28085c) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f28083a.hashCode() * 31;
                    String str = this.f28084b;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f28085c);
                }

                public String toString() {
                    xp.h hVar = this.f28083a;
                    String str = this.f28084b;
                    boolean z10 = this.f28085c;
                    return "AutoSubmit(component=" + hVar + ", countdownText=" + str + ", isReadyToSubmit=" + z10 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(List components, List list, List componentErrors, rp.a navigationState, Function3 onClick, Function0 onComplete, Function0 onCancel, Function1 launchNfcScan, Function2 onVerifyPersonaClick, C0364a c0364a, Function0 onBack, Function2 onSuggestionSelected, boolean z10, StepStyles.UiStepStyle uiStepStyle, String str, Function0 onErrorDismissed, Function2 onCreateReusablePersonaClick) {
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
                this.f28066a = components;
                this.f28067b = list;
                this.f28068c = componentErrors;
                this.f28069d = navigationState;
                this.f28070e = onClick;
                this.f28071f = onComplete;
                this.f28072g = onCancel;
                this.f28073h = launchNfcScan;
                this.f28074i = onVerifyPersonaClick;
                this.f28075j = c0364a;
                this.f28076k = onBack;
                this.f28077l = onSuggestionSelected;
                this.f28078m = z10;
                this.f28079n = uiStepStyle;
                this.f28080o = str;
                this.f28081p = onErrorDismissed;
                this.f28082q = onCreateReusablePersonaClick;
            }

            public final Drawable a(Context context) {
                Intrinsics.checkNotNullParameter(context, "context");
                StepStyles.UiStepStyle uiStepStyle = this.f28079n;
                if (uiStepStyle != null) {
                    return eq.c.a(uiStepStyle, context);
                }
                return null;
            }

            public final C0364a b() {
                return this.f28075j;
            }

            public final Integer c() {
                StepStyles.UiStepStyle uiStepStyle = this.f28079n;
                if (uiStepStyle != null) {
                    return uiStepStyle.getBackgroundColorValue();
                }
                return null;
            }

            public final List d() {
                return this.f28067b;
            }

            public final List e() {
                return this.f28068c;
            }

            public final List f() {
                return this.f28066a;
            }

            public final String g() {
                return this.f28080o;
            }

            public final Integer h() {
                AttributeStyles.HeaderButtonColorStyle headerButtonColor;
                StyleElements.SimpleElementColor headerButton;
                StyleElements.SimpleElementColorValue base;
                StepStyles.UiStepStyle uiStepStyle = this.f28079n;
                if (uiStepStyle != null && (headerButtonColor = uiStepStyle.getHeaderButtonColor()) != null && (headerButton = headerButtonColor.getHeaderButton()) != null && (base = headerButton.getBase()) != null) {
                    return base.getValue();
                }
                return null;
            }

            public final Function1 i() {
                return this.f28073h;
            }

            public final rp.a j() {
                return this.f28069d;
            }

            public final Function0 k() {
                return this.f28076k;
            }

            public final Function0 l() {
                return this.f28072g;
            }

            public final Function3 m() {
                return this.f28070e;
            }

            public final Function0 n() {
                return this.f28071f;
            }

            public final Function2 o() {
                return this.f28082q;
            }

            public final Function0 p() {
                return this.f28081p;
            }

            public final Function2 q() {
                return this.f28077l;
            }

            public final Function2 r() {
                return this.f28074i;
            }

            public final StyleElements.PositionType s() {
                StepStyles.UiStepStyle uiStepStyle = this.f28079n;
                if (uiStepStyle != null) {
                    return uiStepStyle.getPageLevelVerticalAlignment();
                }
                return null;
            }

            public final StepStyles.UiStepStyle t() {
                return this.f28079n;
            }

            public final boolean u() {
                return this.f28078m;
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
        public static final /* synthetic */ int[] f28086a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f28087b;

        static {
            int[] iArr = new int[zo.g1.values().length];
            try {
                iArr[zo.g1.f55935d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[zo.g1.f55936e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[zo.g1.f55937i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f28086a = iArr;
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
            f28087b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28088d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28089e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f28090i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3 f28091o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ xp.h f28092p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, v4 v4Var, g3 g3Var, xp.h hVar, Continuation continuation) {
            super(2, continuation);
            this.f28089e = aVar;
            this.f28090i = v4Var;
            this.f28091o = g3Var;
            this.f28092p = hVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3 g3Var, xp.h hVar, r.c cVar) {
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
            cVar.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0358a(hVar, intValue, str), null, false, false, null, null, null, 8127, null));
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f28089e, this.f28090i, this.f28091o, this.f28092p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f28088d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f28089e.c();
                v4 v4Var = this.f28090i;
                final g3 g3Var = this.f28091o;
                final xp.h hVar = this.f28092p;
                d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.w4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = v4.f.k(g3.this, hVar, (r.c) obj2);
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
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28093d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28094e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f28095i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3.a.C0358a f28096o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ g3 f28097p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, v4 v4Var, g3.a.C0358a c0358a, g3 g3Var, Continuation continuation) {
            super(2, continuation);
            this.f28094e = aVar;
            this.f28095i = v4Var;
            this.f28096o = c0358a;
            this.f28097p = g3Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3.a.C0358a c0358a, g3 g3Var, r.c cVar) {
            String str;
            int b10 = c0358a.b() - 1;
            g3.a aVar = (g3.a) g3Var;
            xp.h a10 = c0358a.a();
            String autoSubmitCountdownText = c0358a.a().getAutoSubmitCountdownText();
            if (autoSubmitCountdownText != null) {
                str = StringsKt.J(autoSubmitCountdownText, "{time}", String.valueOf(b10), false, 4, null);
            } else {
                str = null;
            }
            cVar.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0358a(a10, b10, str), null, false, false, null, null, null, 8127, null));
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f28094e, this.f28095i, this.f28096o, this.f28097p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            Object f10 = or.b.f();
            int i10 = this.f28093d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f28093d = 1;
                if (gs.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            tm.h c10 = this.f28094e.c();
            v4 v4Var = this.f28095i;
            final g3.a.C0358a c0358a = this.f28096o;
            final g3 g3Var = this.f28097p;
            d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.x4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = v4.g.k(g3.a.C0358a.this, g3Var, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28098d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f28099e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f28100i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ GovernmentIdNfcScan.Attributes f28101o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f28102p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Date f28103q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Date f28104r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ g3.a.c f28105s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ g3.a f28106t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, v4 v4Var, GovernmentIdNfcScan.Attributes attributes, String str, Date date, Date date2, g3.a.c cVar, g3.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f28099e = aVar;
            this.f28100i = v4Var;
            this.f28101o = attributes;
            this.f28102p = str;
            this.f28103q = date;
            this.f28104r = date2;
            this.f28105s = cVar;
            this.f28106t = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(GovernmentIdNfcScan.Attributes attributes, v4 v4Var, String str, Date date, Date date2, g3.a.c cVar, g3.a aVar, r.c cVar2) {
            String string;
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            if (attributes == null || (string = attributes.getRequiredText()) == null) {
                string = v4Var.f28029a.getString(bp.e.B);
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
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f28099e, this.f28100i, this.f28101o, this.f28102p, this.f28103q, this.f28104r, this.f28105s, this.f28106t, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f28098d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f28099e.c();
                final v4 v4Var = this.f28100i;
                final GovernmentIdNfcScan.Attributes attributes = this.f28101o;
                final String str = this.f28102p;
                final Date date = this.f28103q;
                final Date date2 = this.f28104r;
                final g3.a.c cVar = this.f28105s;
                final g3.a aVar = this.f28106t;
                d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.y4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = v4.h.k(GovernmentIdNfcScan.Attributes.this, v4Var, str, date, date2, cVar, aVar, (r.c) obj2);
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
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final i f28107d = new i();

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(k5 it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.TRUE;
        }
    }

    public v4(Context applicationContext, o.a nfcScanWorkerFactory, y0.a createReusablePersonaWorkerFactory, z4.a verifyReusablePersonaWorkerFactory, rp.b navigationStateManager, zo.c1 permissionRequestWorkflow, x0 componentWorkHelper, np.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(nfcScanWorkerFactory, "nfcScanWorkerFactory");
        Intrinsics.checkNotNullParameter(createReusablePersonaWorkerFactory, "createReusablePersonaWorkerFactory");
        Intrinsics.checkNotNullParameter(verifyReusablePersonaWorkerFactory, "verifyReusablePersonaWorkerFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(componentWorkHelper, "componentWorkHelper");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f28029a = applicationContext;
        this.f28030b = nfcScanWorkerFactory;
        this.f28031c = createReusablePersonaWorkerFactory;
        this.f28032d = verifyReusablePersonaWorkerFactory;
        this.f28033e = navigationStateManager;
        this.f28034f = permissionRequestWorkflow;
        this.f28035g = componentWorkHelper;
        this.f28036h = externalEventLogger;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r A0(final v4 v4Var, final k.a aVar, final boolean z10, final g3 g3Var, final c1.a it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.k3
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
        tm.r d10;
        tm.r d11;
        tm.r d12;
        tm.r d13;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = e.f28086a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    tm.h c10 = aVar2.c();
                    d13 = tm.z.d(v4Var, null, new Function1() { // from class: hq.j4
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit F0;
                            F0 = v4.F0(g3.this, (r.c) obj);
                            return F0;
                        }
                    }, 1, null);
                    c10.d(d13);
                } else {
                    throw new ir.p();
                }
            } else if (z10) {
                tm.h c11 = aVar2.c();
                d12 = tm.z.d(v4Var, null, new Function1() { // from class: hq.h4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit D0;
                        D0 = v4.D0(v4.this, (r.c) obj);
                        return D0;
                    }
                }, 1, null);
                c11.d(d12);
            } else {
                tm.h c12 = aVar2.c();
                d11 = tm.z.d(v4Var, null, new Function1() { // from class: hq.i4
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
            tm.h c13 = aVar2.c();
            d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.g4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C0;
                    C0 = v4.C0(v4.this, (r.c) obj);
                    return C0;
                }
            }, 1, null);
            c13.d(d10);
        }
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        v4Var.g0(a10, aVar);
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        v4Var.g0(a10, aVar);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar = (g3.a) g3Var;
        action.e(g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, String.valueOf(Integer.parseInt(aVar.k()) + 1), 3583, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, false, null, null, null, 7679, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(final v4 v4Var, final g3 g3Var, b bVar, k.a aVar, final k5 uiComponent, boolean z10, final Map componentParams) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(uiComponent, "uiComponent");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        g3.a aVar2 = (g3.a) g3Var;
        v4Var.Q0(uiComponent, z10, aVar2);
        if (bVar.l().b() != qp.a.f47598i && !aVar2.g()) {
            tm.h c10 = aVar.c();
            d11 = tm.z.d(v4Var, null, new Function1() { // from class: hq.m3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = v4.H0(g3.this, componentParams, uiComponent, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            c10.d(d11);
        } else {
            tm.h c11 = aVar.c();
            d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.n3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = v4.I0(componentParams, uiComponent, v4Var, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(g3 g3Var, Map map, k5 k5Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, true, map, k5Var, null, 4607, null));
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        g3.a b10 = g3.a.b(aVar2, null, null, null, null, null, null, null, null, false, false, map, k5Var, null, 5119, null);
        action.e(b10);
        v4Var.g0(action, b10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(k.a aVar, v4 v4Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.y3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K0;
                K0 = v4.K0((r.c) obj);
                return K0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.C0363c.f28059a);
        return Unit.f33298a;
    }

    private final void L0(b bVar, final g3.a aVar, k.a aVar2, final g3.a.c cVar) {
        List o10;
        String str;
        String connectionLostPrompt;
        List<GovernmentIdNfcScan.DataGroupTypes> enabledDataGroups;
        yo.c cVar2;
        final GovernmentIdNfcScanComponent a10 = cVar.a();
        String b10 = a10.c().b();
        String b11 = a10.g().b();
        Date b12 = a10.f().b();
        Date b13 = a10.i().b();
        GovernmentIdNfcScan.Attributes attributes = a10.e().getAttributes();
        if (!StringsKt.k0(b11) && b12 != null && b13 != null) {
            yo.b bVar2 = new yo.b(b11, b13, b12);
            if (attributes != null && (enabledDataGroups = attributes.getEnabledDataGroups()) != null) {
                o10 = new ArrayList();
                for (GovernmentIdNfcScan.DataGroupTypes dataGroupTypes : enabledDataGroups) {
                    int i10 = e.f28087b[dataGroupTypes.ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                if (i10 != 4) {
                                    cVar2 = null;
                                } else {
                                    cVar2 = yo.c.f54865o;
                                }
                            } else {
                                cVar2 = yo.c.f54864i;
                            }
                        } else {
                            cVar2 = yo.c.f54863e;
                        }
                    } else {
                        cVar2 = yo.c.f54862d;
                    }
                    if (cVar2 != null) {
                        o10.add(cVar2);
                    }
                }
            } else {
                o10 = CollectionsKt.o(yo.c.f54862d, yo.c.f54863e, yo.c.f54865o);
            }
            o.a aVar3 = this.f28030b;
            String str2 = (attributes == null || (str2 = attributes.getScanDocumentPrompt()) == null) ? "" : "";
            String str3 = (attributes == null || (str3 = attributes.getAuthenticating()) == null) ? "" : "";
            String str4 = (attributes == null || (str4 = attributes.getReading()) == null) ? "" : "";
            String string = this.f28029a.getString(bp.e.f7664y);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            String str5 = (attributes == null || (str5 = attributes.getScanDocumentSuccess()) == null) ? "" : "";
            String str6 = (attributes == null || (str6 = attributes.getEnableNfcPrompt()) == null) ? "" : "";
            String string2 = this.f28029a.getString(bp.e.f7665z);
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String string3 = this.f28029a.getString(bp.e.f7664y);
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
            String string4 = this.f28029a.getString(bp.e.B);
            Intrinsics.checkNotNullExpressionValue(string4, "getString(...)");
            String str7 = (attributes == null || (r4 = attributes.getAuthenticationErrorPrompt()) == null) ? "" : "";
            String string5 = this.f28029a.getString(bp.e.B);
            Intrinsics.checkNotNullExpressionValue(string5, "getString(...)");
            String str8 = (attributes == null || (str8 = attributes.getScanDocumentError()) == null) ? "" : "";
            String string6 = this.f28029a.getString(bp.e.B);
            Intrinsics.checkNotNullExpressionValue(string6, "getString(...)");
            tm.w.l(aVar2, aVar3.a(b10, bVar2, new yo.m(str2, str3, str4, string, str5, str6, string2, string3, str, string4, str7, string5, str8, string6), o10, bVar.p(), null), Reflection.typeOf(yo.o.class), "", new Function1() { // from class: hq.z3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r M0;
                    M0 = v4.M0(v4.this, aVar, cVar, a10, (yo.k) obj);
                    return M0;
                }
            });
            return;
        }
        aVar2.a("client_side_nfc_form_validation", new h(aVar2, this, attributes, b11, b12, b13, cVar, aVar, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r M0(v4 v4Var, final g3.a aVar, final g3.a.c cVar, final GovernmentIdNfcScanComponent governmentIdNfcScanComponent, final yo.k output) {
        tm.r d10;
        tm.r d11;
        tm.r d12;
        Intrinsics.checkNotNullParameter(output, "output");
        if (Intrinsics.areEqual(output, k.a.f54877d)) {
            d12 = tm.z.d(v4Var, null, new Function1() { // from class: hq.c4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = v4.N0(g3.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d12;
        } else if (output instanceof k.b) {
            d11 = tm.z.d(v4Var, null, new Function1() { // from class: hq.e4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = v4.O0(g3.a.c.this, governmentIdNfcScanComponent, aVar, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d11;
        } else if (output instanceof k.d) {
            d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.f4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = v4.P0(g3.a.c.this, output, aVar, (r.c) obj);
                    return P0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, null, 8159, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(g3.a.c cVar, GovernmentIdNfcScanComponent governmentIdNfcScanComponent, g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String name = cVar.a().getName();
        GovernmentIdNfcScan.Attributes attributes = governmentIdNfcScanComponent.e().getAttributes();
        action.e(g3.a.b(aVar, null, null, CollectionsKt.e(new UiComponentError.UiInputComponentError(name, "", (attributes == null || (r3 = attributes.getScanDocumentError()) == null) ? "" : "")), null, null, null, null, null, false, false, null, null, null, 8155, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(g3.a.c cVar, yo.k kVar, g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        k.d dVar = (k.d) kVar;
        cVar.a().j().c(new yp.g(dVar.b(), dVar.c(), dVar.d(), dVar.a()));
        c5 c5Var = (c5) yp.f.a(aVar.getComponents(), Reflection.getOrCreateKotlinClass(c5.class), i.f28107d);
        if (c5Var != null) {
            action.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0358a(c5Var, 0, null), null, false, false, null, null, null, 8095, null));
        }
        return Unit.f33298a;
    }

    private final void Q0(final k5 k5Var, final boolean z10, g3.a aVar) {
        h0(aVar.getComponents(), new Function1() { // from class: hq.k4
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
        if (it instanceof xp.j2) {
            xp.j2 j2Var = (xp.j2) it;
            if (z10) {
                z11 = Intrinsics.areEqual(it.getName(), k5Var.getName());
            } else {
                z11 = true;
            }
            j2Var.x(z11);
        }
        return Unit.f33298a;
    }

    private final void W(b bVar, final g3.a aVar, k.a aVar2) {
        final g3.b j10 = aVar.j();
        if (j10 instanceof g3.b.a) {
            y0.a aVar3 = this.f28031c;
            String n10 = bVar.n();
            String k10 = bVar.k();
            g3.b.a aVar4 = (g3.b.a) j10;
            String e10 = aVar4.a().e();
            if (e10 != null) {
                tm.w.l(aVar2, aVar3.a(n10, k10, e10, aVar4.a().getName()), Reflection.typeOf(y0.class), "", new Function1() { // from class: hq.q3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r X;
                        X = v4.X(g3.b.this, this, aVar, (y0.b) obj);
                        return X;
                    }
                });
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        } else if (j10 instanceof g3.b.C0362b) {
            z4.a aVar5 = this.f28032d;
            String n11 = bVar.n();
            String k11 = bVar.k();
            g3.b.C0362b c0362b = (g3.b.C0362b) j10;
            String a10 = c0362b.b().a();
            if (a10 != null) {
                tm.w.l(aVar2, aVar5.a(n11, k11, a10, c0362b.b().getName(), c0362b.a()), Reflection.typeOf(z4.class), "", new Function1() { // from class: hq.r3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r b02;
                        b02 = v4.b0(v4.this, aVar, (z4.b) obj);
                        return b02;
                    }
                });
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        } else if (j10 == null) {
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r X(final g3.b bVar, final v4 v4Var, final g3.a aVar, final y0.b it) {
        tm.r d10;
        tm.r d11;
        tm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (((g3.b.a) bVar).a().c()) {
            d12 = tm.z.d(v4Var, null, new Function1() { // from class: hq.l4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y;
                    Y = v4.Y((r.c) obj);
                    return Y;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, y0.b.a.f28143a)) {
            d11 = tm.z.d(v4Var, null, new Function1() { // from class: hq.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z;
                    Z = v4.Z(g3.a.this, bVar, (r.c) obj);
                    return Z;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof y0.b.C0365b) {
            d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a02;
                    a02 = v4.a0(y0.b.this, aVar, v4Var, bVar, (r.c) obj);
                    return a02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.C0363c.f28059a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(g3.a aVar, g3.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.b.a aVar2 = (g3.b.a) bVar;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), aVar2.a(), com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar2.a(), null, null, null, false, true, false, false, null, 207, null)), null, null, null, null, null, null, null, false, false, null, null, null, 8062, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(y0.b bVar, g3.a aVar, v4 v4Var, g3.b bVar2, r.c action) {
        g3.a b10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((y0.b.C0365b) bVar).a() instanceof InternalErrorInfo.NetworkErrorInfo) {
            b10 = g3.a.b(aVar, null, null, null, null, v4Var.f28029a.getString(bp.e.f7663x), null, null, null, false, false, null, null, null, 8047, null);
        } else {
            g3.b.a aVar2 = (g3.b.a) bVar2;
            b10 = g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), aVar2.a(), com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar2.a(), null, null, null, false, true, false, false, null, 207, null)), null, null, null, null, null, null, null, false, false, null, null, null, 8062, null);
        }
        action.e(b10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r b0(final v4 v4Var, final g3.a aVar, final z4.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, z4.b.a.f28186a)) {
            d11 = tm.z.d(v4Var, null, new Function1() { // from class: hq.a4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c02;
                    c02 = v4.c0((r.c) obj);
                    return c02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof z4.b.C0366b) {
            d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.b4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d02;
                    d02 = v4.d0(z4.b.this, v4Var, aVar, (r.c) obj);
                    return d02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.e.f28062a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(z4.b bVar, v4 v4Var, g3.a aVar, r.c action) {
        g3.a b10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((z4.b.C0366b) bVar).a() instanceof InternalErrorInfo.NetworkErrorInfo) {
            b10 = g3.a.b(aVar, null, null, null, null, v4Var.f28029a.getString(bp.e.f7663x), null, null, null, false, false, null, null, null, 8047, null);
        } else {
            b10 = g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, null, 8063, null);
        }
        action.e(b10);
        return Unit.f33298a;
    }

    private final void f0(b bVar, g3 g3Var) {
        np.i fVar;
        if (g3Var instanceof g3.a) {
            g3.a aVar = (g3.a) g3Var;
            if (aVar.j() != null) {
                g3.b j10 = aVar.j();
                if (j10 instanceof g3.b.a) {
                    fVar = new i.a(bVar.o());
                } else if (j10 instanceof g3.b.C0362b) {
                    fVar = new i.g(bVar.o());
                } else {
                    throw new ir.p();
                }
            } else if (aVar.i() != null) {
                fVar = new i.d(bVar.o());
            } else {
                fVar = new i.f(bVar.o());
            }
            this.f28036h.c(fVar);
            return;
        }
        throw new ir.p();
    }

    private final void g0(r.c cVar, g3.a aVar) {
        k5 n10 = aVar.n();
        Map e10 = aVar.e();
        if (n10 != null && e10 != null) {
            cVar.d(new c.f(n10, e10, aVar.m()));
        }
    }

    private final void h0(List list, final Function1 function1) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            k5 k5Var = (k5) it.next();
            if (k5Var instanceof l5) {
                h0(((l5) k5Var).getChildren(), new Function1() { // from class: hq.x3
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
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(v4 v4Var, b bVar, g3 g3Var, k.a aVar, k5 component) {
        Intrinsics.checkNotNullParameter(component, "component");
        v4Var.f28035g.Z(bVar, (g3.a) g3Var, aVar, component);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean l0(xp.h component) {
        Intrinsics.checkNotNullParameter(component, "component");
        if (component.getAutoSubmitIntervalSeconds() != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, v4 v4Var, final b bVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.v3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = v4.n0(v4.b.this, (r.c) obj);
                return n02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(b bVar, r.c action) {
        Object obj;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (bVar.d()) {
            obj = c.C0363c.f28059a;
        } else {
            obj = c.b.f28058a;
        }
        action.d(obj);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(v4 v4Var, final g3 g3Var, k.a aVar, final GovernmentIdNfcScanComponent component) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        v4Var.Q0(component, true, (g3.a) g3Var);
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.o3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p02;
                p02 = v4.p0(g3.this, component, (r.c) obj);
                return p02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3 g3Var, GovernmentIdNfcScanComponent governmentIdNfcScanComponent, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, new g3.a.c(governmentIdNfcScanComponent), null, null, false, false, null, null, null, 8159, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(v4 v4Var, final g3 g3Var, k.a aVar, final q5 component, final Map componentParams) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        v4Var.Q0(component, true, (g3.a) g3Var);
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.w3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = v4.r0(g3.this, component, componentParams, (r.c) obj);
                return r02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(g3 g3Var, q5 q5Var, Map map, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, new g3.b.C0362b(q5Var, map), false, false, null, null, null, 8063, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(k.a aVar, v4 v4Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.t3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t02;
                t02 = v4.t0((r.c) obj);
                return t02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f28057a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(k.a aVar, v4 v4Var, final g3 g3Var, final InputAddressComponent component, final String addressId) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(addressId, "addressId");
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.l3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v02;
                v02 = v4.v0(g3.this, component, addressId, (r.c) obj);
                return v02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(g3 g3Var, InputAddressComponent inputAddressComponent, String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar = (g3.a) g3Var;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), inputAddressComponent, inputAddressComponent.R(str).O(Boolean.TRUE)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(k.a aVar, v4 v4Var, final g3 g3Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.p3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit x02;
                x02 = v4.x0(g3.this, (r.c) obj);
                return x02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, false, null, null, null, 8175, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, v4 v4Var, final g3 g3Var, final com.withpersona.sdk2.inquiry.steps.ui.components.a createReusablePersonaComponent, final k5 buttonClicked) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(createReusablePersonaComponent, "createReusablePersonaComponent");
        Intrinsics.checkNotNullParameter(buttonClicked, "buttonClicked");
        tm.h c10 = aVar.c();
        d10 = tm.z.d(v4Var, null, new Function1() { // from class: hq.u3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = v4.z0(g3.this, createReusablePersonaComponent, buttonClicked, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(g3 g3Var, com.withpersona.sdk2.inquiry.steps.ui.components.a aVar, k5 k5Var, r.c action) {
        xp.h hVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar2 = (g3.a) g3Var;
        List components = aVar2.getComponents();
        if (k5Var instanceof xp.h) {
            hVar = (xp.h) k5Var;
        } else {
            hVar = null;
        }
        if (hVar != null) {
            hVar.x(true);
        }
        Unit unit = Unit.f33298a;
        action.e(g3.a.b(aVar2, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(components, aVar, xp.q.b(aVar, k5Var, k5Var)), null, null, null, null, null, null, new g3.b.a(aVar), false, false, null, null, null, 8062, null));
        return Unit.f33298a;
    }

    @Override // tm.k
    /* renamed from: S0 */
    public tm.i g(g3 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return vm.s.a(state);
    }

    @Override // tm.k
    /* renamed from: e0 */
    public g3 d(b props, tm.i iVar) {
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
                parcelable = obtain.readParcelable(tm.i.class.getClassLoader());
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

    @Override // tm.k
    /* renamed from: j0 */
    public Object f(final b renderProps, final g3 renderState, final k.a context) {
        boolean z10;
        zo.d0 d0Var;
        final boolean z11;
        final v4 v4Var;
        final g3 g3Var;
        Function3 function3;
        Function0 function0;
        Function0 function02;
        d.a.C0364a c0364a;
        boolean z12;
        boolean z13;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (renderProps.r()) {
            return Unit.f33298a;
        }
        f0(renderProps, renderState);
        if (renderState instanceof g3.a) {
            g3.a aVar = (g3.a) renderState;
            W(renderProps, aVar, context);
            rp.b bVar = this.f28033e;
            boolean a10 = renderProps.a();
            boolean b10 = renderProps.b();
            if (aVar.j() == null && !renderProps.s()) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.c(a10, b10, z10);
            h0(aVar.getComponents(), new Function1() { // from class: hq.h3
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
            if (renderProps.l().c() == qp.e.f47608d) {
                d0Var = zo.d0.f55911i;
            } else {
                d0Var = zo.d0.f55912o;
            }
            zo.d0 d0Var2 = d0Var;
            if (renderProps.l().b() == qp.a.f47597e) {
                z11 = true;
            } else {
                z11 = false;
            }
            String f10 = aVar.f();
            if (f10 == null && renderProps.q() != null) {
                f10 = this.f28029a.getString(bp.e.f7663x);
            }
            String str = f10;
            if (aVar.c() == null) {
                xp.h hVar = (xp.h) yp.f.a(aVar.getComponents(), Reflection.getOrCreateKotlinClass(xp.h.class), new Function1() { // from class: hq.o4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        boolean l02;
                        l02 = v4.l0((xp.h) obj);
                        return Boolean.valueOf(l02);
                    }
                });
                if (hVar != null) {
                    context.a("begin_countdown", new f(context, this, renderState, hVar, null));
                }
            }
            g3.a.C0358a c10 = aVar.c();
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
            rp.a b11 = v4Var.f28033e.b();
            Function3 function32 = new Function3() { // from class: hq.p4
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit G0;
                    G0 = v4.G0(v4.this, g3Var, renderProps, context, (k5) obj, ((Boolean) obj2).booleanValue(), (Map) obj3);
                    return G0;
                }
            };
            Function0 function03 = new Function0() { // from class: hq.q4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit J0;
                    J0 = v4.J0(k.a.this, v4Var);
                    return J0;
                }
            };
            Function0 function04 = new Function0() { // from class: hq.r4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m02;
                    m02 = v4.m0(k.a.this, v4Var, renderProps);
                    return m02;
                }
            };
            Function1 function1 = new Function1() { // from class: hq.s4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o02;
                    o02 = v4.o0(v4.this, g3Var, context, (GovernmentIdNfcScanComponent) obj);
                    return o02;
                }
            };
            Function2 function2 = new Function2() { // from class: hq.t4
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
                xp.h a11 = aVar.c().a();
                function02 = function04;
                String c12 = aVar.c().c();
                if (aVar.c().b() <= 0) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                c0364a = new d.a.C0364a(a11, c12, z13);
            } else {
                function3 = function32;
                function0 = function03;
                function02 = function04;
                c0364a = null;
            }
            Function0 function05 = new Function0() { // from class: hq.u4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s02;
                    s02 = v4.s0(k.a.this, v4Var);
                    return s02;
                }
            };
            Function2 function22 = new Function2() { // from class: hq.i3
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
            d.a aVar2 = new d.a(components, c11, L0, b11, function33, function06, function02, function1, function2, c0364a, function05, function22, z12, aVar.getStyles(), str, new Function0() { // from class: hq.j3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit w02;
                    w02 = v4.w0(k.a.this, v4Var, g3Var);
                    return w02;
                }
            }, new Function2() { // from class: hq.s3
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit y02;
                    y02 = v4.y0(k.a.this, v4Var, g3Var, (com.withpersona.sdk2.inquiry.steps.ui.components.a) obj, (k5) obj2);
                    return y02;
                }
            });
            boolean o10 = aVar.o();
            String j10 = renderProps.j();
            if (j10 == null) {
                j10 = "";
            }
            String str3 = j10;
            String i10 = renderProps.i();
            if (i10 == null) {
                i10 = "Gps permission are required to verify your identity";
            }
            Context context2 = v4Var.f28029a;
            String string = context2.getString(bp.e.S, jp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            String e10 = renderProps.e();
            if (e10 == null) {
                e10 = v4Var.f28029a.getString(bp.e.f7665z);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            String h10 = renderProps.h();
            if (h10 == null) {
                h10 = v4Var.f28029a.getString(bp.e.f7665z);
                Intrinsics.checkNotNullExpressionValue(h10, "getString(...)");
            }
            return zo.l1.d(aVar2, context, o10, d0Var2, z11, str3, i10, string, e10, h10, renderProps.g(), renderProps.f(), renderProps.h(), v4Var.f28034f, renderProps.p(), aVar.k(), new Function1() { // from class: hq.d4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    tm.r A0;
                    A0 = v4.A0(v4.this, context, z11, g3Var, (c1.a) obj);
                    return A0;
                }
            });
        }
        throw new ir.p();
    }
}
