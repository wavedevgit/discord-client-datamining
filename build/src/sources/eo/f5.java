package eo;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import eo.c4;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import pn.z;
import rn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f21803a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f21804b;

        /* renamed from: c  reason: collision with root package name */
        private final aq.c2 f21805c;

        /* renamed from: d  reason: collision with root package name */
        private final aq.c2 f21806d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21807e;

        /* renamed from: f  reason: collision with root package name */
        private final String f21808f;

        /* renamed from: g  reason: collision with root package name */
        private final String f21809g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f21810h;

        /* renamed from: i  reason: collision with root package name */
        private final up.a f21811i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f21812j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f21813k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f21814l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f21815m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f21816n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, aq.c2 countrySelectComponent, aq.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, up.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f21803a = str;
            this.f21804b = governmentIdStepStyle;
            this.f21805c = countrySelectComponent;
            this.f21806d = idClassSelectComponent;
            this.f21807e = str2;
            this.f21808f = str3;
            this.f21809g = str4;
            this.f21810h = z10;
            this.f21811i = navigationState;
            this.f21812j = onCountrySelected;
            this.f21813k = onIdClassSelected;
            this.f21814l = onContinueClick;
            this.f21815m = onBackClick;
            this.f21816n = onCancelClick;
        }

        public final String a() {
            return this.f21809g;
        }

        public final String b() {
            return this.f21807e;
        }

        public final aq.c2 c() {
            return this.f21805c;
        }

        public final String d() {
            return this.f21808f;
        }

        public final aq.c2 e() {
            return this.f21806d;
        }

        public final up.a f() {
            return this.f21811i;
        }

        public final Function0 g() {
            return this.f21815m;
        }

        public final Function0 h() {
            return this.f21816n;
        }

        public final Function0 i() {
            return this.f21814l;
        }

        public final Function1 j() {
            return this.f21812j;
        }

        public final Function1 k() {
            return this.f21813k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f21804b;
        }

        public final String m() {
            return this.f21803a;
        }

        public final boolean n() {
            return this.f21810h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final ho.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f21817a;

        /* renamed from: b  reason: collision with root package name */
        private final String f21818b;

        /* renamed from: c  reason: collision with root package name */
        private final String f21819c;

        /* renamed from: d  reason: collision with root package name */
        private final a f21820d;

        /* renamed from: e  reason: collision with root package name */
        private final d f21821e;

        /* renamed from: f  reason: collision with root package name */
        private final lo.e f21822f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f21823g;

        /* renamed from: h  reason: collision with root package name */
        private final up.a f21824h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f21825i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f21826j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f21827k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f21828l;

        /* renamed from: m  reason: collision with root package name */
        private final List f21829m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f21830n;

        /* renamed from: o  reason: collision with root package name */
        private final int f21831o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f21832p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f21833q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f21834r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f21835s;

        /* renamed from: t  reason: collision with root package name */
        private final int f21836t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f21837u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f21838v;

        /* renamed from: w  reason: collision with root package name */
        private final vn.a f21839w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f21840x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f21841y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f21842z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f21843d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f21844e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f21845i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f21846o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f21847p;

            static {
                a[] a10 = a();
                f21846o = a10;
                f21847p = sr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f21843d, f21844e, f21845i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f21846o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, lo.e idClass, c4.e captureSide, up.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, vn.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, ho.h hVar, oq.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(message, "message");
            Intrinsics.checkNotNullParameter(disclaimer, "disclaimer");
            Intrinsics.checkNotNullParameter(captureButtonState, "captureButtonState");
            Intrinsics.checkNotNullParameter(overlay, "overlay");
            Intrinsics.checkNotNullParameter(idClass, "idClass");
            Intrinsics.checkNotNullParameter(captureSide, "captureSide");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(manuallyCapture, "manuallyCapture");
            Intrinsics.checkNotNullParameter(close, "close");
            Intrinsics.checkNotNullParameter(back, "back");
            Intrinsics.checkNotNullParameter(autoCaptureRules, "autoCaptureRules");
            Intrinsics.checkNotNullParameter(state, "state");
            Intrinsics.checkNotNullParameter(autoCapture, "autoCapture");
            Intrinsics.checkNotNullParameter(onCaptureError, "onCaptureError");
            Intrinsics.checkNotNullParameter(onCameraError, "onCameraError");
            Intrinsics.checkNotNullParameter(manualCaptureClicked, "manualCaptureClicked");
            Intrinsics.checkNotNullParameter(checkPermissions, "checkPermissions");
            Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
            Intrinsics.checkNotNullParameter(onLocalVideoFinalized, "onLocalVideoFinalized");
            Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
            Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
            this.f21817a = title;
            this.f21818b = message;
            this.f21819c = disclaimer;
            this.f21820d = captureButtonState;
            this.f21821e = overlay;
            this.f21822f = idClass;
            this.f21823g = captureSide;
            this.f21824h = navigationState;
            this.f21825i = manuallyCapture;
            this.f21826j = close;
            this.f21827k = back;
            this.f21828l = z10;
            this.f21829m = autoCaptureRules;
            this.f21830n = state;
            this.f21831o = i10;
            this.f21832p = governmentIdStepStyle;
            this.f21833q = autoCapture;
            this.f21834r = onCaptureError;
            this.f21835s = onCameraError;
            this.f21836t = i11;
            this.f21837u = manualCaptureClicked;
            this.f21838v = checkPermissions;
            this.f21839w = videoCaptureMethod;
            this.f21840x = z11;
            this.f21841y = onLocalVideoFinalized;
            this.f21842z = z12;
            this.A = j10;
            this.B = z13;
            this.C = str;
            this.D = hVar;
            this.E = capturePage;
            this.F = z14;
            this.G = z15;
            this.H = cameraXControllerFactory;
            this.I = camera2ManagerFactoryFactory;
        }

        public final d A() {
            return this.f21821e;
        }

        public final int B() {
            return this.f21836t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f21830n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f21832p;
        }

        public final String F() {
            return this.f21817a;
        }

        public final vn.a G() {
            return this.f21839w;
        }

        public final oq.a H() {
            return null;
        }

        public final boolean I() {
            return this.G;
        }

        public final boolean J() {
            return this.F;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage a() {
            return this.E;
        }

        public final Function2 b() {
            return this.f21833q;
        }

        public final List c() {
            return this.f21829m;
        }

        public final int d() {
            return this.f21831o;
        }

        public final boolean e() {
            return this.f21828l;
        }

        public final Function0 f() {
            return this.f21827k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f21820d;
        }

        public final c4.e j() {
            return this.f21823g;
        }

        public final ho.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f21838v;
        }

        public final Function0 m() {
            return this.f21826j;
        }

        public final String n() {
            return this.f21819c;
        }

        public final boolean o() {
            return this.f21842z;
        }

        public final boolean p() {
            return this.f21840x;
        }

        public final String q() {
            return this.C;
        }

        public final lo.e r() {
            return this.f21822f;
        }

        public final Function0 s() {
            return this.f21837u;
        }

        public final Function2 t() {
            return this.f21825i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f21818b;
        }

        public final up.a w() {
            return this.f21824h;
        }

        public final Function1 x() {
            return this.f21835s;
        }

        public final Function1 y() {
            return this.f21834r;
        }

        public final Function2 z() {
            return this.f21841y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f21848a;

        /* renamed from: b  reason: collision with root package name */
        private final String f21849b;

        /* renamed from: c  reason: collision with root package name */
        private final String f21850c;

        /* renamed from: d  reason: collision with root package name */
        private final String f21851d;

        /* renamed from: e  reason: collision with root package name */
        private final List f21852e;

        /* renamed from: f  reason: collision with root package name */
        private final up.a f21853f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f21854g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f21855h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f21856i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f21857j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f21858k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f21859l;

        /* renamed from: m  reason: collision with root package name */
        private final String f21860m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f21861n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, up.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(prompt, "prompt");
            Intrinsics.checkNotNullParameter(chooseText, "chooseText");
            Intrinsics.checkNotNullParameter(disclaimer, "disclaimer");
            Intrinsics.checkNotNullParameter(enabledIdClasses, "enabledIdClasses");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(selectIdClass, "selectIdClass");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
            this.f21848a = title;
            this.f21849b = prompt;
            this.f21850c = chooseText;
            this.f21851d = disclaimer;
            this.f21852e = enabledIdClasses;
            this.f21853f = navigationState;
            this.f21854g = selectIdClass;
            this.f21855h = governmentIdStepStyle;
            this.f21856i = selectPage;
            this.f21857j = z10;
            this.f21858k = onBack;
            this.f21859l = onCancel;
            this.f21860m = str;
            this.f21861n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f21856i;
        }

        public final String b() {
            return this.f21850c;
        }

        public final String c() {
            return this.f21851d;
        }

        public final List d() {
            return this.f21852e;
        }

        public final String e() {
            return this.f21860m;
        }

        public final up.a f() {
            return this.f21853f;
        }

        public final Function0 g() {
            return this.f21858k;
        }

        public final Function0 h() {
            return this.f21859l;
        }

        public final Function0 i() {
            return this.f21861n;
        }

        public final String j() {
            return this.f21849b;
        }

        public final Function1 k() {
            return this.f21854g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f21855h;
        }

        public final String m() {
            return this.f21848a;
        }

        public final boolean n() {
            return this.f21857j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f21862d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0290a();

            /* renamed from: eo.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0290a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f21862d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            private a() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1779545178;
            }

            public String toString() {
                return "Barcode";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final b f21863d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f21863d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            private b() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1450323044;
            }

            public String toString() {
                return "CornersOnly";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends d {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final aq.i4 f21864d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f21865e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((aq.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(aq.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f21864d = customImage;
                this.f21865e = config;
            }

            public final RemoteImage a() {
                return this.f21865e;
            }

            public final aq.i4 b() {
                return this.f21864d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f21864d, i10);
                dest.writeParcelable(this.f21865e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new aq.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: eo.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0291d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0291d f21866d = new C0291d();
            @NotNull
            public static final Parcelable.Creator<C0291d> CREATOR = new a();

            /* renamed from: eo.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0291d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0291d.f21866d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0291d[] newArray(int i10) {
                    return new C0291d[i10];
                }
            }

            private C0291d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0291d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 212467448;
            }

            public String toString() {
                return "GenericFront";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final e f21867d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f21867d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            private e() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1995687048;
            }

            public String toString() {
                return "Passport";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final f f21868d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f21868d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final f[] newArray(int i10) {
                    return new f[i10];
                }
            }

            private f() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof f)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 319154889;
            }

            public String toString() {
                return "Rectangle";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final v4.h f21869a;

        /* renamed from: b  reason: collision with root package name */
        private final String f21870b;

        /* renamed from: c  reason: collision with root package name */
        private final String f21871c;

        /* renamed from: d  reason: collision with root package name */
        private final d f21872d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21873e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f21874f;

        /* renamed from: g  reason: collision with root package name */
        private final lo.e f21875g;

        /* renamed from: h  reason: collision with root package name */
        private final up.a f21876h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f21877i;

        /* renamed from: j  reason: collision with root package name */
        private final String f21878j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f21879k;

        /* renamed from: l  reason: collision with root package name */
        private final String f21880l;

        /* renamed from: m  reason: collision with root package name */
        private final String f21881m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f21882n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f21883o;

        /* renamed from: p  reason: collision with root package name */
        private final String f21884p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f21885q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f21886r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f21887s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f21888t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f21889u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, lo.e idClass, up.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
            super(null);
            Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
            Intrinsics.checkNotNullParameter(message, "message");
            Intrinsics.checkNotNullParameter(disclaimer, "disclaimer");
            Intrinsics.checkNotNullParameter(overlay, "overlay");
            Intrinsics.checkNotNullParameter(imagePath, "imagePath");
            Intrinsics.checkNotNullParameter(captureSide, "captureSide");
            Intrinsics.checkNotNullParameter(idClass, "idClass");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(acceptImage, "acceptImage");
            Intrinsics.checkNotNullParameter(acceptText, "acceptText");
            Intrinsics.checkNotNullParameter(retryImage, "retryImage");
            Intrinsics.checkNotNullParameter(retryText, "retryText");
            Intrinsics.checkNotNullParameter(confirmCaptureTitle, "confirmCaptureTitle");
            Intrinsics.checkNotNullParameter(close, "close");
            Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
            Intrinsics.checkNotNullParameter(reviewCaptureButtonsAxis, "reviewCaptureButtonsAxis");
            this.f21869a = imageLoader;
            this.f21870b = message;
            this.f21871c = disclaimer;
            this.f21872d = overlay;
            this.f21873e = imagePath;
            this.f21874f = captureSide;
            this.f21875g = idClass;
            this.f21876h = navigationState;
            this.f21877i = acceptImage;
            this.f21878j = acceptText;
            this.f21879k = retryImage;
            this.f21880l = retryText;
            this.f21881m = confirmCaptureTitle;
            this.f21882n = close;
            this.f21883o = governmentIdStepStyle;
            this.f21884p = str;
            this.f21885q = onErrorDismissed;
            this.f21886r = capturePage;
            this.f21887s = z10;
            this.f21888t = z11;
            this.f21889u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f21877i;
        }

        public final String b() {
            return this.f21878j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f21886r;
        }

        public final c4.e d() {
            return this.f21874f;
        }

        public final Function0 e() {
            return this.f21882n;
        }

        public final String f() {
            return this.f21881m;
        }

        public final String g() {
            return this.f21871c;
        }

        public final String h() {
            return this.f21884p;
        }

        public final lo.e i() {
            return this.f21875g;
        }

        public final v4.h j() {
            return this.f21869a;
        }

        public final String k() {
            return this.f21873e;
        }

        public final String l() {
            return this.f21870b;
        }

        public final up.a m() {
            return this.f21876h;
        }

        public final Function0 n() {
            return this.f21885q;
        }

        public final d o() {
            return this.f21872d;
        }

        public final Function0 p() {
            return this.f21879k;
        }

        public final String q() {
            return this.f21880l;
        }

        public final StyleElements.Axis r() {
            return this.f21889u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f21883o;
        }

        public final boolean t() {
            return this.f21888t;
        }

        public final boolean u() {
            return this.f21887s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f21890a;

        /* renamed from: b  reason: collision with root package name */
        private final String f21891b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f21892c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f21893d;

        /* renamed from: e  reason: collision with root package name */
        private final up.a f21894e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f21895f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f21896g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f21897h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, up.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f21890a = title;
            this.f21891b = description;
            this.f21892c = governmentIdStepStyle;
            this.f21893d = pendingPage;
            this.f21894e = navigationState;
            this.f21895f = onBack;
            this.f21896g = onCancel;
            this.f21897h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f21893d;
        }

        public final String b() {
            return this.f21891b;
        }

        public final up.a c() {
            return this.f21894e;
        }

        public final Function0 d() {
            return this.f21895f;
        }

        public final Function0 e() {
            return this.f21896g;
        }

        public final PendingPageTextPosition f() {
            return this.f21897h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f21892c;
        }

        public final String h() {
            return this.f21890a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
