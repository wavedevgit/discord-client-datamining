package nq;

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
import dq.c5;
import dq.k5;
import dq.l5;
import dq.q5;
import ep.k;
import ep.o;
import fp.c1;
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
import nq.g3;
import nq.v4;
import nq.y0;
import nq.z4;
import okio.ByteString;
import tp.i;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v4 extends zm.k {

    /* renamed from: i  reason: collision with root package name */
    public static final a f41794i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f41795a;

    /* renamed from: b  reason: collision with root package name */
    private final o.a f41796b;

    /* renamed from: c  reason: collision with root package name */
    private final y0.a f41797c;

    /* renamed from: d  reason: collision with root package name */
    private final z4.a f41798d;

    /* renamed from: e  reason: collision with root package name */
    private final xp.b f41799e;

    /* renamed from: f  reason: collision with root package name */
    private final fp.c1 f41800f;

    /* renamed from: g  reason: collision with root package name */
    private final x0 f41801g;

    /* renamed from: h  reason: collision with root package name */
    private final tp.c f41802h;

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
        private final String f41803a;

        /* renamed from: b  reason: collision with root package name */
        private final String f41804b;

        /* renamed from: c  reason: collision with root package name */
        private final List f41805c;

        /* renamed from: d  reason: collision with root package name */
        private final String f41806d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f41807e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f41808f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f41809g;

        /* renamed from: h  reason: collision with root package name */
        private final wp.g f41810h;

        /* renamed from: i  reason: collision with root package name */
        private final String f41811i;

        /* renamed from: j  reason: collision with root package name */
        private final String f41812j;

        /* renamed from: k  reason: collision with root package name */
        private final String f41813k;

        /* renamed from: l  reason: collision with root package name */
        private final String f41814l;

        /* renamed from: m  reason: collision with root package name */
        private final String f41815m;

        /* renamed from: n  reason: collision with root package name */
        private final String f41816n;

        /* renamed from: o  reason: collision with root package name */
        private final String f41817o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.UiStepStyle f41818p;

        /* renamed from: q  reason: collision with root package name */
        private final List f41819q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f41820r;

        /* renamed from: s  reason: collision with root package name */
        private final InternalErrorInfo f41821s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f41822t;

        public b(String sessionToken, String inquiryId, List list, String stepName, boolean z10, boolean z11, boolean z12, wp.g inquirySessionConfig, String str, String str2, String str3, String str4, String str5, String str6, String str7, StepStyles.UiStepStyle uiStepStyle, List list2, boolean z13, InternalErrorInfo internalErrorInfo, boolean z14) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
            this.f41803a = sessionToken;
            this.f41804b = inquiryId;
            this.f41805c = list;
            this.f41806d = stepName;
            this.f41807e = z10;
            this.f41808f = z11;
            this.f41809g = z12;
            this.f41810h = inquirySessionConfig;
            this.f41811i = str;
            this.f41812j = str2;
            this.f41813k = str3;
            this.f41814l = str4;
            this.f41815m = str5;
            this.f41816n = str6;
            this.f41817o = str7;
            this.f41818p = uiStepStyle;
            this.f41819q = list2;
            this.f41820r = z13;
            this.f41821s = internalErrorInfo;
            this.f41822t = z14;
        }

        public final boolean a() {
            return this.f41807e;
        }

        public final boolean b() {
            return this.f41808f;
        }

        public final List c() {
            return this.f41805c;
        }

        public final boolean d() {
            return this.f41809g;
        }

        public final String e() {
            return this.f41817o;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f41803a, bVar.f41803a) && Intrinsics.areEqual(this.f41804b, bVar.f41804b) && Intrinsics.areEqual(this.f41805c, bVar.f41805c) && Intrinsics.areEqual(this.f41806d, bVar.f41806d) && this.f41807e == bVar.f41807e && this.f41808f == bVar.f41808f && this.f41809g == bVar.f41809g && Intrinsics.areEqual(this.f41810h, bVar.f41810h) && Intrinsics.areEqual(this.f41811i, bVar.f41811i) && Intrinsics.areEqual(this.f41812j, bVar.f41812j) && Intrinsics.areEqual(this.f41813k, bVar.f41813k) && Intrinsics.areEqual(this.f41814l, bVar.f41814l) && Intrinsics.areEqual(this.f41815m, bVar.f41815m) && Intrinsics.areEqual(this.f41816n, bVar.f41816n) && Intrinsics.areEqual(this.f41817o, bVar.f41817o) && Intrinsics.areEqual(this.f41818p, bVar.f41818p) && Intrinsics.areEqual(this.f41819q, bVar.f41819q) && this.f41820r == bVar.f41820r && Intrinsics.areEqual(this.f41821s, bVar.f41821s) && this.f41822t == bVar.f41822t) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f41816n;
        }

        public final String g() {
            return this.f41815m;
        }

        public final String h() {
            return this.f41814l;
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
            int hashCode11 = ((this.f41803a.hashCode() * 31) + this.f41804b.hashCode()) * 31;
            List list = this.f41805c;
            int i10 = 0;
            if (list == null) {
                hashCode = 0;
            } else {
                hashCode = list.hashCode();
            }
            int hashCode12 = (((((((((((hashCode11 + hashCode) * 31) + this.f41806d.hashCode()) * 31) + Boolean.hashCode(this.f41807e)) * 31) + Boolean.hashCode(this.f41808f)) * 31) + Boolean.hashCode(this.f41809g)) * 31) + this.f41810h.hashCode()) * 31;
            String str = this.f41811i;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode2) * 31;
            String str2 = this.f41812j;
            if (str2 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str2.hashCode();
            }
            int i12 = (i11 + hashCode3) * 31;
            String str3 = this.f41813k;
            if (str3 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str3.hashCode();
            }
            int i13 = (i12 + hashCode4) * 31;
            String str4 = this.f41814l;
            if (str4 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str4.hashCode();
            }
            int i14 = (i13 + hashCode5) * 31;
            String str5 = this.f41815m;
            if (str5 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str5.hashCode();
            }
            int i15 = (i14 + hashCode6) * 31;
            String str6 = this.f41816n;
            if (str6 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str6.hashCode();
            }
            int i16 = (i15 + hashCode7) * 31;
            String str7 = this.f41817o;
            if (str7 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str7.hashCode();
            }
            int i17 = (i16 + hashCode8) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f41818p;
            if (uiStepStyle == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = uiStepStyle.hashCode();
            }
            int i18 = (i17 + hashCode9) * 31;
            List list2 = this.f41819q;
            if (list2 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = list2.hashCode();
            }
            int hashCode13 = (((i18 + hashCode10) * 31) + Boolean.hashCode(this.f41820r)) * 31;
            InternalErrorInfo internalErrorInfo = this.f41821s;
            if (internalErrorInfo != null) {
                i10 = internalErrorInfo.hashCode();
            }
            return ((hashCode13 + i10) * 31) + Boolean.hashCode(this.f41822t);
        }

        public final String i() {
            return this.f41812j;
        }

        public final String j() {
            return this.f41811i;
        }

        public final String k() {
            return this.f41804b;
        }

        public final wp.g l() {
            return this.f41810h;
        }

        public final List m() {
            return this.f41819q;
        }

        public final String n() {
            return this.f41803a;
        }

        public final String o() {
            return this.f41806d;
        }

        public final StepStyles.UiStepStyle p() {
            return this.f41818p;
        }

        public final InternalErrorInfo q() {
            return this.f41821s;
        }

        public final boolean r() {
            return this.f41822t;
        }

        public final boolean s() {
            return this.f41820r;
        }

        public String toString() {
            String str = this.f41803a;
            String str2 = this.f41804b;
            List list = this.f41805c;
            String str3 = this.f41806d;
            boolean z10 = this.f41807e;
            boolean z11 = this.f41808f;
            boolean z12 = this.f41809g;
            wp.g gVar = this.f41810h;
            String str4 = this.f41811i;
            String str5 = this.f41812j;
            String str6 = this.f41813k;
            String str7 = this.f41814l;
            String str8 = this.f41815m;
            String str9 = this.f41816n;
            String str10 = this.f41817o;
            StepStyles.UiStepStyle uiStepStyle = this.f41818p;
            List list2 = this.f41819q;
            boolean z13 = this.f41820r;
            InternalErrorInfo internalErrorInfo = this.f41821s;
            boolean z14 = this.f41822t;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", components=" + list + ", stepName=" + str3 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", finalStep=" + z12 + ", inquirySessionConfig=" + gVar + ", gpsPermissionsTitle=" + str4 + ", gpsPermissionsRationale=" + str5 + ", gpsPermissionsModalPositiveButton=" + str6 + ", gpsPermissionsModalNegativeButton=" + str7 + ", gpsFeatureTitle=" + str8 + ", gpsFeatureRationale=" + str9 + ", gpsFeatureModalPositiveButton=" + str10 + ", styles=" + uiStepStyle + ", serverComponentErrors=" + list2 + ", isSubmitting=" + z13 + ", transitionError=" + internalErrorInfo + ", isRestoringState=" + z14 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f41823a = new a();

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
            public static final b f41824a = new b();

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

        /* renamed from: nq.v4$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0539c implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final C0539c f41825a = new C0539c();

            private C0539c() {
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0539c)) {
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
            private final String f41826a;

            /* renamed from: b  reason: collision with root package name */
            private final InternalErrorInfo f41827b;

            public d(String str, InternalErrorInfo cause) {
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f41826a = str;
                this.f41827b = cause;
            }

            public final InternalErrorInfo a() {
                return this.f41827b;
            }

            public final String b() {
                return this.f41826a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e implements c {

            /* renamed from: a  reason: collision with root package name */
            public static final e f41828a = new e();

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
            private final k5 f41829a;

            /* renamed from: b  reason: collision with root package name */
            private final Map f41830b;

            /* renamed from: c  reason: collision with root package name */
            private final String f41831c;

            public f(k5 fromComponent, Map componentParams, String fromStep) {
                Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                Intrinsics.checkNotNullParameter(fromStep, "fromStep");
                this.f41829a = fromComponent;
                this.f41830b = componentParams;
                this.f41831c = fromStep;
            }

            public final Map a() {
                return this.f41830b;
            }

            public final k5 b() {
                return this.f41829a;
            }

            public final String c() {
                return this.f41831c;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f41829a, fVar.f41829a) && Intrinsics.areEqual(this.f41830b, fVar.f41830b) && Intrinsics.areEqual(this.f41831c, fVar.f41831c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (((this.f41829a.hashCode() * 31) + this.f41830b.hashCode()) * 31) + this.f41831c.hashCode();
            }

            public String toString() {
                k5 k5Var = this.f41829a;
                Map map = this.f41830b;
                String str = this.f41831c;
                return "FinishedWithoutTransition(fromComponent=" + k5Var + ", componentParams=" + map + ", fromStep=" + str + ")";
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: a  reason: collision with root package name */
            private final List f41832a;

            /* renamed from: b  reason: collision with root package name */
            private final List f41833b;

            /* renamed from: c  reason: collision with root package name */
            private final List f41834c;

            /* renamed from: d  reason: collision with root package name */
            private final xp.a f41835d;

            /* renamed from: e  reason: collision with root package name */
            private final Function3 f41836e;

            /* renamed from: f  reason: collision with root package name */
            private final Function0 f41837f;

            /* renamed from: g  reason: collision with root package name */
            private final Function0 f41838g;

            /* renamed from: h  reason: collision with root package name */
            private final Function1 f41839h;

            /* renamed from: i  reason: collision with root package name */
            private final Function2 f41840i;

            /* renamed from: j  reason: collision with root package name */
            private final C0540a f41841j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f41842k;

            /* renamed from: l  reason: collision with root package name */
            private final Function2 f41843l;

            /* renamed from: m  reason: collision with root package name */
            private final boolean f41844m;

            /* renamed from: n  reason: collision with root package name */
            private final StepStyles.UiStepStyle f41845n;

            /* renamed from: o  reason: collision with root package name */
            private final String f41846o;

            /* renamed from: p  reason: collision with root package name */
            private final Function0 f41847p;

            /* renamed from: q  reason: collision with root package name */
            private final Function2 f41848q;

            /* renamed from: nq.v4$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0540a {

                /* renamed from: a  reason: collision with root package name */
                private final dq.h f41849a;

                /* renamed from: b  reason: collision with root package name */
                private final String f41850b;

                /* renamed from: c  reason: collision with root package name */
                private final boolean f41851c;

                public C0540a(dq.h component, String str, boolean z10) {
                    Intrinsics.checkNotNullParameter(component, "component");
                    this.f41849a = component;
                    this.f41850b = str;
                    this.f41851c = z10;
                }

                public final dq.h a() {
                    return this.f41849a;
                }

                public final String b() {
                    return this.f41850b;
                }

                public final boolean c() {
                    return this.f41851c;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0540a)) {
                        return false;
                    }
                    C0540a c0540a = (C0540a) obj;
                    if (Intrinsics.areEqual(this.f41849a, c0540a.f41849a) && Intrinsics.areEqual(this.f41850b, c0540a.f41850b) && this.f41851c == c0540a.f41851c) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f41849a.hashCode() * 31;
                    String str = this.f41850b;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f41851c);
                }

                public String toString() {
                    dq.h hVar = this.f41849a;
                    String str = this.f41850b;
                    boolean z10 = this.f41851c;
                    return "AutoSubmit(component=" + hVar + ", countdownText=" + str + ", isReadyToSubmit=" + z10 + ")";
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(List components, List list, List componentErrors, xp.a navigationState, Function3 onClick, Function0 onComplete, Function0 onCancel, Function1 launchNfcScan, Function2 onVerifyPersonaClick, C0540a c0540a, Function0 onBack, Function2 onSuggestionSelected, boolean z10, StepStyles.UiStepStyle uiStepStyle, String str, Function0 onErrorDismissed, Function2 onCreateReusablePersonaClick) {
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
                this.f41832a = components;
                this.f41833b = list;
                this.f41834c = componentErrors;
                this.f41835d = navigationState;
                this.f41836e = onClick;
                this.f41837f = onComplete;
                this.f41838g = onCancel;
                this.f41839h = launchNfcScan;
                this.f41840i = onVerifyPersonaClick;
                this.f41841j = c0540a;
                this.f41842k = onBack;
                this.f41843l = onSuggestionSelected;
                this.f41844m = z10;
                this.f41845n = uiStepStyle;
                this.f41846o = str;
                this.f41847p = onErrorDismissed;
                this.f41848q = onCreateReusablePersonaClick;
            }

            public final Drawable a(Context context) {
                Intrinsics.checkNotNullParameter(context, "context");
                StepStyles.UiStepStyle uiStepStyle = this.f41845n;
                if (uiStepStyle != null) {
                    return kq.c.a(uiStepStyle, context);
                }
                return null;
            }

            public final C0540a b() {
                return this.f41841j;
            }

            public final Integer c() {
                StepStyles.UiStepStyle uiStepStyle = this.f41845n;
                if (uiStepStyle != null) {
                    return uiStepStyle.getBackgroundColorValue();
                }
                return null;
            }

            public final List d() {
                return this.f41833b;
            }

            public final List e() {
                return this.f41834c;
            }

            public final List f() {
                return this.f41832a;
            }

            public final String g() {
                return this.f41846o;
            }

            public final Integer h() {
                AttributeStyles.HeaderButtonColorStyle headerButtonColor;
                StyleElements.SimpleElementColor headerButton;
                StyleElements.SimpleElementColorValue base;
                StepStyles.UiStepStyle uiStepStyle = this.f41845n;
                if (uiStepStyle != null && (headerButtonColor = uiStepStyle.getHeaderButtonColor()) != null && (headerButton = headerButtonColor.getHeaderButton()) != null && (base = headerButton.getBase()) != null) {
                    return base.getValue();
                }
                return null;
            }

            public final Function1 i() {
                return this.f41839h;
            }

            public final xp.a j() {
                return this.f41835d;
            }

            public final Function0 k() {
                return this.f41842k;
            }

            public final Function0 l() {
                return this.f41838g;
            }

            public final Function3 m() {
                return this.f41836e;
            }

            public final Function0 n() {
                return this.f41837f;
            }

            public final Function2 o() {
                return this.f41848q;
            }

            public final Function0 p() {
                return this.f41847p;
            }

            public final Function2 q() {
                return this.f41843l;
            }

            public final Function2 r() {
                return this.f41840i;
            }

            public final StyleElements.PositionType s() {
                StepStyles.UiStepStyle uiStepStyle = this.f41845n;
                if (uiStepStyle != null) {
                    return uiStepStyle.getPageLevelVerticalAlignment();
                }
                return null;
            }

            public final StepStyles.UiStepStyle t() {
                return this.f41845n;
            }

            public final boolean u() {
                return this.f41844m;
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
        public static final /* synthetic */ int[] f41852a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f41853b;

        static {
            int[] iArr = new int[fp.g1.values().length];
            try {
                iArr[fp.g1.f23281d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[fp.g1.f23282e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[fp.g1.f23283i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f41852a = iArr;
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
            f41853b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41854d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f41855e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f41856i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3 f41857o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ dq.h f41858p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, v4 v4Var, g3 g3Var, dq.h hVar, Continuation continuation) {
            super(2, continuation);
            this.f41855e = aVar;
            this.f41856i = v4Var;
            this.f41857o = g3Var;
            this.f41858p = hVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3 g3Var, dq.h hVar, r.c cVar) {
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
            cVar.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0534a(hVar, intValue, str), null, false, false, null, null, null, 8127, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f41855e, this.f41856i, this.f41857o, this.f41858p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f41854d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f41855e.c();
                v4 v4Var = this.f41856i;
                final g3 g3Var = this.f41857o;
                final dq.h hVar = this.f41858p;
                d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.w4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = v4.f.k(g3.this, hVar, (r.c) obj2);
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
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41859d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f41860e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f41861i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g3.a.C0534a f41862o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ g3 f41863p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(k.a aVar, v4 v4Var, g3.a.C0534a c0534a, g3 g3Var, Continuation continuation) {
            super(2, continuation);
            this.f41860e = aVar;
            this.f41861i = v4Var;
            this.f41862o = c0534a;
            this.f41863p = g3Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(g3.a.C0534a c0534a, g3 g3Var, r.c cVar) {
            String str;
            int b10 = c0534a.b() - 1;
            g3.a aVar = (g3.a) g3Var;
            dq.h a10 = c0534a.a();
            String autoSubmitCountdownText = c0534a.a().getAutoSubmitCountdownText();
            if (autoSubmitCountdownText != null) {
                str = StringsKt.J(autoSubmitCountdownText, "{time}", String.valueOf(b10), false, 4, null);
            } else {
                str = null;
            }
            cVar.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0534a(a10, b10, str), null, false, false, null, null, null, 8127, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f41860e, this.f41861i, this.f41862o, this.f41863p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            Object f10 = ur.b.f();
            int i10 = this.f41859d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                this.f41859d = 1;
                if (ms.i0.a(1000L, this) == f10) {
                    return f10;
                }
            }
            zm.h c10 = this.f41860e.c();
            v4 v4Var = this.f41861i;
            final g3.a.C0534a c0534a = this.f41862o;
            final g3 g3Var = this.f41863p;
            d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.x4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = v4.g.k(g3.a.C0534a.this, g3Var, (r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c10.d(d10);
            return Unit.f31988a;
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
        int f41864d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f41865e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ v4 f41866i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ GovernmentIdNfcScan.Attributes f41867o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f41868p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Date f41869q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Date f41870r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ g3.a.c f41871s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ g3.a f41872t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, v4 v4Var, GovernmentIdNfcScan.Attributes attributes, String str, Date date, Date date2, g3.a.c cVar, g3.a aVar2, Continuation continuation) {
            super(2, continuation);
            this.f41865e = aVar;
            this.f41866i = v4Var;
            this.f41867o = attributes;
            this.f41868p = str;
            this.f41869q = date;
            this.f41870r = date2;
            this.f41871s = cVar;
            this.f41872t = aVar2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(GovernmentIdNfcScan.Attributes attributes, v4 v4Var, String str, Date date, Date date2, g3.a.c cVar, g3.a aVar, r.c cVar2) {
            String string;
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            if (attributes == null || (string = attributes.getRequiredText()) == null) {
                string = v4Var.f41795a.getString(hp.e.B);
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
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f41865e, this.f41866i, this.f41867o, this.f41868p, this.f41869q, this.f41870r, this.f41871s, this.f41872t, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f41864d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f41865e.c();
                final v4 v4Var = this.f41866i;
                final GovernmentIdNfcScan.Attributes attributes = this.f41867o;
                final String str = this.f41868p;
                final Date date = this.f41869q;
                final Date date2 = this.f41870r;
                final g3.a.c cVar = this.f41871s;
                final g3.a aVar = this.f41872t;
                d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.y4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = v4.h.k(GovernmentIdNfcScan.Attributes.this, v4Var, str, date, date2, cVar, aVar, (r.c) obj2);
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
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final i f41873d = new i();

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(k5 it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.TRUE;
        }
    }

    public v4(Context applicationContext, o.a nfcScanWorkerFactory, y0.a createReusablePersonaWorkerFactory, z4.a verifyReusablePersonaWorkerFactory, xp.b navigationStateManager, fp.c1 permissionRequestWorkflow, x0 componentWorkHelper, tp.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(nfcScanWorkerFactory, "nfcScanWorkerFactory");
        Intrinsics.checkNotNullParameter(createReusablePersonaWorkerFactory, "createReusablePersonaWorkerFactory");
        Intrinsics.checkNotNullParameter(verifyReusablePersonaWorkerFactory, "verifyReusablePersonaWorkerFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(componentWorkHelper, "componentWorkHelper");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f41795a = applicationContext;
        this.f41796b = nfcScanWorkerFactory;
        this.f41797c = createReusablePersonaWorkerFactory;
        this.f41798d = verifyReusablePersonaWorkerFactory;
        this.f41799e = navigationStateManager;
        this.f41800f = permissionRequestWorkflow;
        this.f41801g = componentWorkHelper;
        this.f41802h = externalEventLogger;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r A0(final v4 v4Var, final k.a aVar, final boolean z10, final g3 g3Var, final c1.a it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.k3
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
        zm.r d10;
        zm.r d11;
        zm.r d12;
        zm.r d13;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = e.f41852a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    zm.h c10 = aVar2.c();
                    d13 = zm.z.d(v4Var, null, new Function1() { // from class: nq.j4
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit F0;
                            F0 = v4.F0(g3.this, (r.c) obj);
                            return F0;
                        }
                    }, 1, null);
                    c10.d(d13);
                } else {
                    throw new or.p();
                }
            } else if (z10) {
                zm.h c11 = aVar2.c();
                d12 = zm.z.d(v4Var, null, new Function1() { // from class: nq.h4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit D0;
                        D0 = v4.D0(v4.this, (r.c) obj);
                        return D0;
                    }
                }, 1, null);
                c11.d(d12);
            } else {
                zm.h c12 = aVar2.c();
                d11 = zm.z.d(v4Var, null, new Function1() { // from class: nq.i4
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
            zm.h c13 = aVar2.c();
            d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.g4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C0;
                    C0 = v4.C0(v4.this, (r.c) obj);
                    return C0;
                }
            }, 1, null);
            c13.d(d10);
        }
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        v4Var.g0(a10, aVar);
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        v4Var.g0(a10, aVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar = (g3.a) g3Var;
        action.e(g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, String.valueOf(Integer.parseInt(aVar.l()) + 1), 3583, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, false, null, null, null, 7679, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(final v4 v4Var, final g3 g3Var, b bVar, k.a aVar, final k5 uiComponent, boolean z10, final Map componentParams) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(uiComponent, "uiComponent");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        g3.a aVar2 = (g3.a) g3Var;
        v4Var.Q0(uiComponent, z10, aVar2);
        if (bVar.l().b() != wp.a.f53222i && !aVar2.g()) {
            zm.h c10 = aVar.c();
            d11 = zm.z.d(v4Var, null, new Function1() { // from class: nq.m3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit H0;
                    H0 = v4.H0(g3.this, componentParams, uiComponent, (r.c) obj);
                    return H0;
                }
            }, 1, null);
            c10.d(d11);
        } else {
            zm.h c11 = aVar.c();
            d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.n3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit I0;
                    I0 = v4.I0(componentParams, uiComponent, v4Var, (r.c) obj);
                    return I0;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(g3 g3Var, Map map, k5 k5Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, true, map, k5Var, null, 4607, null));
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        g3.a b10 = g3.a.b(aVar2, null, null, null, null, null, null, null, null, false, false, map, k5Var, null, 5119, null);
        action.e(b10);
        v4Var.g0(action, b10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(k.a aVar, v4 v4Var) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.y3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K0;
                K0 = v4.K0((r.c) obj);
                return K0;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.C0539c.f41825a);
        return Unit.f31988a;
    }

    private final void L0(b bVar, final g3.a aVar, k.a aVar2, final g3.a.c cVar) {
        List o10;
        String str;
        String connectionLostPrompt;
        List<GovernmentIdNfcScan.DataGroupTypes> enabledDataGroups;
        ep.c cVar2;
        final GovernmentIdNfcScanComponent a10 = cVar.a();
        String b10 = a10.c().b();
        String b11 = a10.g().b();
        Date b12 = a10.f().b();
        Date b13 = a10.i().b();
        GovernmentIdNfcScan.Attributes attributes = a10.e().getAttributes();
        if (!StringsKt.k0(b11) && b12 != null && b13 != null) {
            ep.b bVar2 = new ep.b(b11, b13, b12);
            if (attributes != null && (enabledDataGroups = attributes.getEnabledDataGroups()) != null) {
                o10 = new ArrayList();
                for (GovernmentIdNfcScan.DataGroupTypes dataGroupTypes : enabledDataGroups) {
                    int i10 = e.f41853b[dataGroupTypes.ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                if (i10 != 4) {
                                    cVar2 = null;
                                } else {
                                    cVar2 = ep.c.f21685o;
                                }
                            } else {
                                cVar2 = ep.c.f21684i;
                            }
                        } else {
                            cVar2 = ep.c.f21683e;
                        }
                    } else {
                        cVar2 = ep.c.f21682d;
                    }
                    if (cVar2 != null) {
                        o10.add(cVar2);
                    }
                }
            } else {
                o10 = CollectionsKt.o(ep.c.f21682d, ep.c.f21683e, ep.c.f21685o);
            }
            o.a aVar3 = this.f41796b;
            String str2 = (attributes == null || (str2 = attributes.getScanDocumentPrompt()) == null) ? "" : "";
            String str3 = (attributes == null || (str3 = attributes.getAuthenticating()) == null) ? "" : "";
            String str4 = (attributes == null || (str4 = attributes.getReading()) == null) ? "" : "";
            String string = this.f41795a.getString(hp.e.f26820y);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            String str5 = (attributes == null || (str5 = attributes.getScanDocumentSuccess()) == null) ? "" : "";
            String str6 = (attributes == null || (str6 = attributes.getEnableNfcPrompt()) == null) ? "" : "";
            String string2 = this.f41795a.getString(hp.e.f26821z);
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            String string3 = this.f41795a.getString(hp.e.f26820y);
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
            String string4 = this.f41795a.getString(hp.e.B);
            Intrinsics.checkNotNullExpressionValue(string4, "getString(...)");
            String str7 = (attributes == null || (r4 = attributes.getAuthenticationErrorPrompt()) == null) ? "" : "";
            String string5 = this.f41795a.getString(hp.e.B);
            Intrinsics.checkNotNullExpressionValue(string5, "getString(...)");
            String str8 = (attributes == null || (str8 = attributes.getScanDocumentError()) == null) ? "" : "";
            String string6 = this.f41795a.getString(hp.e.B);
            Intrinsics.checkNotNullExpressionValue(string6, "getString(...)");
            zm.w.l(aVar2, aVar3.a(b10, bVar2, new ep.m(str2, str3, str4, string, str5, str6, string2, string3, str, string4, str7, string5, str8, string6), o10, bVar.p(), null), Reflection.typeOf(ep.o.class), "", new Function1() { // from class: nq.z3
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r M0;
                    M0 = v4.M0(v4.this, aVar, cVar, a10, (ep.k) obj);
                    return M0;
                }
            });
            return;
        }
        aVar2.a("client_side_nfc_form_validation", new h(aVar2, this, attributes, b11, b12, b13, cVar, aVar, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r M0(v4 v4Var, final g3.a aVar, final g3.a.c cVar, final GovernmentIdNfcScanComponent governmentIdNfcScanComponent, final ep.k output) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        Intrinsics.checkNotNullParameter(output, "output");
        if (Intrinsics.areEqual(output, k.a.f21697d)) {
            d12 = zm.z.d(v4Var, null, new Function1() { // from class: nq.c4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = v4.N0(g3.a.this, (r.c) obj);
                    return N0;
                }
            }, 1, null);
            return d12;
        } else if (output instanceof k.b) {
            d11 = zm.z.d(v4Var, null, new Function1() { // from class: nq.e4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = v4.O0(g3.a.c.this, governmentIdNfcScanComponent, aVar, (r.c) obj);
                    return O0;
                }
            }, 1, null);
            return d11;
        } else if (output instanceof k.d) {
            d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.f4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = v4.P0(g3.a.c.this, output, aVar, (r.c) obj);
                    return P0;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, null, 8159, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(g3.a.c cVar, GovernmentIdNfcScanComponent governmentIdNfcScanComponent, g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        String name = cVar.a().getName();
        GovernmentIdNfcScan.Attributes attributes = governmentIdNfcScanComponent.e().getAttributes();
        action.e(g3.a.b(aVar, null, null, CollectionsKt.e(new UiComponentError.UiInputComponentError(name, "", (attributes == null || (r3 = attributes.getScanDocumentError()) == null) ? "" : "")), null, null, null, null, null, false, false, null, null, null, 8155, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(g3.a.c cVar, ep.k kVar, g3.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        k.d dVar = (k.d) kVar;
        cVar.a().j().c(new eq.g(dVar.b(), dVar.c(), dVar.d(), dVar.a()));
        c5 c5Var = (c5) eq.f.a(aVar.getComponents(), Reflection.getOrCreateKotlinClass(c5.class), i.f41873d);
        if (c5Var != null) {
            action.e(g3.a.b(aVar, null, null, null, null, null, null, new g3.a.C0534a(c5Var, 0, null), null, false, false, null, null, null, 8095, null));
        }
        return Unit.f31988a;
    }

    private final void Q0(final k5 k5Var, final boolean z10, g3.a aVar) {
        h0(aVar.getComponents(), new Function1() { // from class: nq.k4
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
        if (it instanceof dq.j2) {
            dq.j2 j2Var = (dq.j2) it;
            if (z10) {
                z11 = Intrinsics.areEqual(it.getName(), k5Var.getName());
            } else {
                z11 = true;
            }
            j2Var.m(z11);
        }
        return Unit.f31988a;
    }

    private final void W(b bVar, final g3.a aVar, k.a aVar2) {
        final g3.b j10 = aVar.j();
        if (j10 instanceof g3.b.a) {
            y0.a aVar3 = this.f41797c;
            String n10 = bVar.n();
            String k10 = bVar.k();
            g3.b.a aVar4 = (g3.b.a) j10;
            String e10 = aVar4.a().e();
            if (e10 != null) {
                zm.w.l(aVar2, aVar3.a(n10, k10, e10, aVar4.a().getName()), Reflection.typeOf(y0.class), "", new Function1() { // from class: nq.q3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r X;
                        X = v4.X(g3.b.this, this, aVar, (y0.b) obj);
                        return X;
                    }
                });
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        } else if (j10 instanceof g3.b.C0538b) {
            z4.a aVar5 = this.f41798d;
            String n11 = bVar.n();
            String k11 = bVar.k();
            g3.b.C0538b c0538b = (g3.b.C0538b) j10;
            String a10 = c0538b.b().a();
            if (a10 != null) {
                zm.w.l(aVar2, aVar5.a(n11, k11, a10, c0538b.b().getName(), c0538b.a()), Reflection.typeOf(z4.class), "", new Function1() { // from class: nq.r3
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r b02;
                        b02 = v4.b0(v4.this, aVar, (z4.b) obj);
                        return b02;
                    }
                });
                return;
            }
            throw new IllegalArgumentException("Required value was null.");
        } else if (j10 == null) {
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r X(final g3.b bVar, final v4 v4Var, final g3.a aVar, final y0.b it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (((g3.b.a) bVar).a().c()) {
            d12 = zm.z.d(v4Var, null, new Function1() { // from class: nq.l4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y;
                    Y = v4.Y((r.c) obj);
                    return Y;
                }
            }, 1, null);
            return d12;
        } else if (Intrinsics.areEqual(it, y0.b.a.f41909a)) {
            d11 = zm.z.d(v4Var, null, new Function1() { // from class: nq.m4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Z;
                    Z = v4.Z(g3.a.this, bVar, (r.c) obj);
                    return Z;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof y0.b.C0541b) {
            d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.n4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a02;
                    a02 = v4.a0(y0.b.this, aVar, v4Var, bVar, (r.c) obj);
                    return a02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.C0539c.f41825a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(g3.a aVar, g3.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.b.a aVar2 = (g3.b.a) bVar;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), aVar2.a(), com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar2.a(), null, null, null, false, true, false, false, null, 207, null)), null, null, null, null, null, null, null, false, false, null, null, null, 8062, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(y0.b bVar, g3.a aVar, v4 v4Var, g3.b bVar2, r.c action) {
        g3.a b10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((y0.b.C0541b) bVar).a() instanceof InternalErrorInfo.NetworkErrorInfo) {
            b10 = g3.a.b(aVar, null, null, null, null, v4Var.f41795a.getString(hp.e.f26819x), null, null, null, false, false, null, null, null, 8047, null);
        } else {
            g3.b.a aVar2 = (g3.b.a) bVar2;
            b10 = g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), aVar2.a(), com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar2.a(), null, null, null, false, true, false, false, null, 207, null)), null, null, null, null, null, null, null, false, false, null, null, null, 8062, null);
        }
        action.e(b10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r b0(final v4 v4Var, final g3.a aVar, final z4.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, z4.b.a.f41952a)) {
            d11 = zm.z.d(v4Var, null, new Function1() { // from class: nq.a4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c02;
                    c02 = v4.c0((r.c) obj);
                    return c02;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof z4.b.C0542b) {
            d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.b4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit d02;
                    d02 = v4.d0(z4.b.this, v4Var, aVar, (r.c) obj);
                    return d02;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.e.f41828a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(z4.b bVar, v4 v4Var, g3.a aVar, r.c action) {
        g3.a b10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((z4.b.C0542b) bVar).a() instanceof InternalErrorInfo.NetworkErrorInfo) {
            b10 = g3.a.b(aVar, null, null, null, null, v4Var.f41795a.getString(hp.e.f26819x), null, null, null, false, false, null, null, null, 8047, null);
        } else {
            b10 = g3.a.b(aVar, null, null, null, null, null, null, null, null, false, false, null, null, null, 8063, null);
        }
        action.e(b10);
        return Unit.f31988a;
    }

    private final void f0(b bVar, g3 g3Var) {
        tp.i fVar;
        if (g3Var instanceof g3.a) {
            g3.a aVar = (g3.a) g3Var;
            if (aVar.j() != null) {
                g3.b j10 = aVar.j();
                if (j10 instanceof g3.b.a) {
                    fVar = new i.a(bVar.o());
                } else if (j10 instanceof g3.b.C0538b) {
                    fVar = new i.g(bVar.o());
                } else {
                    throw new or.p();
                }
            } else if (aVar.i() != null) {
                fVar = new i.d(bVar.o());
            } else {
                fVar = new i.f(bVar.o());
            }
            this.f41802h.c(fVar);
            return;
        }
        throw new or.p();
    }

    private final void g0(r.c cVar, g3.a aVar) {
        k5 o10 = aVar.o();
        Map e10 = aVar.e();
        if (o10 != null && e10 != null) {
            cVar.d(new c.f(o10, e10, aVar.n()));
        }
    }

    private final void h0(List list, final Function1 function1) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            k5 k5Var = (k5) it.next();
            if (k5Var instanceof l5) {
                h0(((l5) k5Var).getChildren(), new Function1() { // from class: nq.x3
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(v4 v4Var, b bVar, g3 g3Var, k.a aVar, k5 component) {
        Intrinsics.checkNotNullParameter(component, "component");
        v4Var.f41801g.Z(bVar, (g3.a) g3Var, aVar, component);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean l0(dq.h component) {
        Intrinsics.checkNotNullParameter(component, "component");
        if (component.getAutoSubmitIntervalSeconds() != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(k.a aVar, v4 v4Var, final b bVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.v3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n02;
                n02 = v4.n0(v4.b.this, (r.c) obj);
                return n02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(b bVar, r.c action) {
        Object obj;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (bVar.d()) {
            obj = c.C0539c.f41825a;
        } else {
            obj = c.b.f41824a;
        }
        action.d(obj);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(v4 v4Var, final g3 g3Var, k.a aVar, final GovernmentIdNfcScanComponent component) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        v4Var.Q0(component, true, (g3.a) g3Var);
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.o3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit p02;
                p02 = v4.p0(g3.this, component, (r.c) obj);
                return p02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(g3 g3Var, GovernmentIdNfcScanComponent governmentIdNfcScanComponent, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, new g3.a.c(governmentIdNfcScanComponent), null, null, false, false, null, null, null, 8159, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(v4 v4Var, final g3 g3Var, k.a aVar, final q5 component, final Map componentParams) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentParams, "componentParams");
        v4Var.Q0(component, true, (g3.a) g3Var);
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.w3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = v4.r0(g3.this, component, componentParams, (r.c) obj);
                return r02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(g3 g3Var, q5 q5Var, Map map, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, new g3.b.C0538b(q5Var, map), false, false, null, null, null, 8063, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(k.a aVar, v4 v4Var) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.t3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t02;
                t02 = v4.t0((r.c) obj);
                return t02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f41823a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(k.a aVar, v4 v4Var, final g3 g3Var, final InputAddressComponent component, final String addressId) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(addressId, "addressId");
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.l3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v02;
                v02 = v4.v0(g3.this, component, addressId, (r.c) obj);
                return v02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(g3 g3Var, InputAddressComponent inputAddressComponent, String str, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar = (g3.a) g3Var;
        action.e(g3.a.b(aVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(aVar.getComponents(), inputAddressComponent, inputAddressComponent.R(str).O(Boolean.TRUE)), null, null, null, null, null, null, null, false, false, null, null, null, 8190, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(k.a aVar, v4 v4Var, final g3 g3Var) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.p3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit x02;
                x02 = v4.x0(g3.this, (r.c) obj);
                return x02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(g3 g3Var, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(g3.a.b((g3.a) g3Var, null, null, null, null, null, null, null, null, false, false, null, null, null, 8175, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, v4 v4Var, final g3 g3Var, final com.withpersona.sdk2.inquiry.steps.ui.components.a createReusablePersonaComponent, final k5 buttonClicked) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(createReusablePersonaComponent, "createReusablePersonaComponent");
        Intrinsics.checkNotNullParameter(buttonClicked, "buttonClicked");
        zm.h c10 = aVar.c();
        d10 = zm.z.d(v4Var, null, new Function1() { // from class: nq.u3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = v4.z0(g3.this, createReusablePersonaComponent, buttonClicked, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(g3 g3Var, com.withpersona.sdk2.inquiry.steps.ui.components.a aVar, k5 k5Var, r.c action) {
        dq.h hVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        g3.a aVar2 = (g3.a) g3Var;
        List components = aVar2.getComponents();
        if (k5Var instanceof dq.h) {
            hVar = (dq.h) k5Var;
        } else {
            hVar = null;
        }
        if (hVar != null) {
            hVar.m(true);
        }
        Unit unit = Unit.f31988a;
        action.e(g3.a.b(aVar2, com.withpersona.sdk2.inquiry.steps.ui.components.f.m(components, aVar, dq.q.b(aVar, k5Var, k5Var)), null, null, null, null, null, null, new g3.b.a(aVar), false, false, null, null, null, 8062, null));
        return Unit.f31988a;
    }

    @Override // zm.k
    /* renamed from: S0 */
    public zm.i g(g3 state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return bn.s.a(state);
    }

    @Override // zm.k
    /* renamed from: e0 */
    public g3 d(b props, zm.i iVar) {
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
                parcelable = obtain.readParcelable(zm.i.class.getClassLoader());
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

    @Override // zm.k
    /* renamed from: j0 */
    public Object f(final b renderProps, final g3 renderState, final k.a context) {
        boolean z10;
        fp.d0 d0Var;
        final boolean z11;
        final v4 v4Var;
        final g3 g3Var;
        Function3 function3;
        Function0 function0;
        Function0 function02;
        d.a.C0540a c0540a;
        boolean z12;
        boolean z13;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (renderProps.r()) {
            return Unit.f31988a;
        }
        f0(renderProps, renderState);
        if (renderState instanceof g3.a) {
            g3.a aVar = (g3.a) renderState;
            W(renderProps, aVar, context);
            xp.b bVar = this.f41799e;
            boolean a10 = renderProps.a();
            boolean b10 = renderProps.b();
            if (aVar.j() == null && !renderProps.s()) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.c(a10, b10, z10);
            h0(aVar.getComponents(), new Function1() { // from class: nq.h3
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
            if (renderProps.l().c() == wp.e.f53232d) {
                d0Var = fp.d0.f23257i;
            } else {
                d0Var = fp.d0.f23258o;
            }
            fp.d0 d0Var2 = d0Var;
            if (renderProps.l().b() == wp.a.f53221e) {
                z11 = true;
            } else {
                z11 = false;
            }
            String f10 = aVar.f();
            if (f10 == null && renderProps.q() != null) {
                f10 = this.f41795a.getString(hp.e.f26819x);
            }
            String str = f10;
            if (aVar.c() == null) {
                dq.h hVar = (dq.h) eq.f.a(aVar.getComponents(), Reflection.getOrCreateKotlinClass(dq.h.class), new Function1() { // from class: nq.o4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        boolean l02;
                        l02 = v4.l0((dq.h) obj);
                        return Boolean.valueOf(l02);
                    }
                });
                if (hVar != null) {
                    context.a("begin_countdown", new f(context, this, renderState, hVar, null));
                }
            }
            g3.a.C0534a c10 = aVar.c();
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
            xp.a b11 = v4Var.f41799e.b();
            Function3 function32 = new Function3() { // from class: nq.p4
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit G0;
                    G0 = v4.G0(v4.this, g3Var, renderProps, context, (k5) obj, ((Boolean) obj2).booleanValue(), (Map) obj3);
                    return G0;
                }
            };
            Function0 function03 = new Function0() { // from class: nq.q4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit J0;
                    J0 = v4.J0(k.a.this, v4Var);
                    return J0;
                }
            };
            Function0 function04 = new Function0() { // from class: nq.r4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m02;
                    m02 = v4.m0(k.a.this, v4Var, renderProps);
                    return m02;
                }
            };
            Function1 function1 = new Function1() { // from class: nq.s4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o02;
                    o02 = v4.o0(v4.this, g3Var, context, (GovernmentIdNfcScanComponent) obj);
                    return o02;
                }
            };
            Function2 function2 = new Function2() { // from class: nq.t4
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
                dq.h a11 = aVar.c().a();
                function02 = function04;
                String c12 = aVar.c().c();
                if (aVar.c().b() <= 0) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                c0540a = new d.a.C0540a(a11, c12, z13);
            } else {
                function3 = function32;
                function0 = function03;
                function02 = function04;
                c0540a = null;
            }
            Function0 function05 = new Function0() { // from class: nq.u4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s02;
                    s02 = v4.s0(k.a.this, v4Var);
                    return s02;
                }
            };
            Function2 function22 = new Function2() { // from class: nq.i3
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
            d.a aVar2 = new d.a(components, c11, L0, b11, function33, function06, function02, function1, function2, c0540a, function05, function22, z12, aVar.getStyles(), str, new Function0() { // from class: nq.j3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit w02;
                    w02 = v4.w0(k.a.this, v4Var, g3Var);
                    return w02;
                }
            }, new Function2() { // from class: nq.s3
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit y02;
                    y02 = v4.y0(k.a.this, v4Var, g3Var, (com.withpersona.sdk2.inquiry.steps.ui.components.a) obj, (k5) obj2);
                    return y02;
                }
            });
            boolean p10 = aVar.p();
            String j10 = renderProps.j();
            if (j10 == null) {
                j10 = "";
            }
            String str3 = j10;
            String i10 = renderProps.i();
            if (i10 == null) {
                i10 = "Gps permission are required to verify your identity";
            }
            Context context2 = v4Var.f41795a;
            String string = context2.getString(hp.e.S, pp.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            String e10 = renderProps.e();
            if (e10 == null) {
                e10 = v4Var.f41795a.getString(hp.e.f26821z);
                Intrinsics.checkNotNullExpressionValue(e10, "getString(...)");
            }
            String h10 = renderProps.h();
            if (h10 == null) {
                h10 = v4Var.f41795a.getString(hp.e.f26821z);
                Intrinsics.checkNotNullExpressionValue(h10, "getString(...)");
            }
            return fp.l1.d(aVar2, context, p10, d0Var2, z11, str3, i10, string, e10, h10, renderProps.g(), renderProps.f(), renderProps.h(), v4Var.f41800f, renderProps.p(), aVar.l(), new Function1() { // from class: nq.d4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r A0;
                    A0 = v4.A0(v4.this, context, z11, g3Var, (c1.a) obj);
                    return A0;
                }
            });
        }
        throw new or.p();
    }
}
