package ko;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.List;
import ko.c4;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import vn.z;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f31110a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f31111b;

        /* renamed from: c  reason: collision with root package name */
        private final gq.c2 f31112c;

        /* renamed from: d  reason: collision with root package name */
        private final gq.c2 f31113d;

        /* renamed from: e  reason: collision with root package name */
        private final String f31114e;

        /* renamed from: f  reason: collision with root package name */
        private final String f31115f;

        /* renamed from: g  reason: collision with root package name */
        private final String f31116g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f31117h;

        /* renamed from: i  reason: collision with root package name */
        private final aq.a f31118i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f31119j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f31120k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f31121l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f31122m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f31123n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, gq.c2 countrySelectComponent, gq.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, aq.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f31110a = str;
            this.f31111b = governmentIdStepStyle;
            this.f31112c = countrySelectComponent;
            this.f31113d = idClassSelectComponent;
            this.f31114e = str2;
            this.f31115f = str3;
            this.f31116g = str4;
            this.f31117h = z10;
            this.f31118i = navigationState;
            this.f31119j = onCountrySelected;
            this.f31120k = onIdClassSelected;
            this.f31121l = onContinueClick;
            this.f31122m = onBackClick;
            this.f31123n = onCancelClick;
        }

        public final String a() {
            return this.f31116g;
        }

        public final String b() {
            return this.f31114e;
        }

        public final gq.c2 c() {
            return this.f31112c;
        }

        public final String d() {
            return this.f31115f;
        }

        public final gq.c2 e() {
            return this.f31113d;
        }

        public final aq.a f() {
            return this.f31118i;
        }

        public final Function0 g() {
            return this.f31122m;
        }

        public final Function0 h() {
            return this.f31123n;
        }

        public final Function0 i() {
            return this.f31121l;
        }

        public final Function1 j() {
            return this.f31119j;
        }

        public final Function1 k() {
            return this.f31120k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f31111b;
        }

        public final String m() {
            return this.f31110a;
        }

        public final boolean n() {
            return this.f31117h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final no.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f31124a;

        /* renamed from: b  reason: collision with root package name */
        private final String f31125b;

        /* renamed from: c  reason: collision with root package name */
        private final String f31126c;

        /* renamed from: d  reason: collision with root package name */
        private final a f31127d;

        /* renamed from: e  reason: collision with root package name */
        private final d f31128e;

        /* renamed from: f  reason: collision with root package name */
        private final ro.e f31129f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f31130g;

        /* renamed from: h  reason: collision with root package name */
        private final aq.a f31131h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f31132i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f31133j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f31134k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f31135l;

        /* renamed from: m  reason: collision with root package name */
        private final List f31136m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f31137n;

        /* renamed from: o  reason: collision with root package name */
        private final int f31138o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f31139p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f31140q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f31141r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f31142s;

        /* renamed from: t  reason: collision with root package name */
        private final int f31143t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f31144u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f31145v;

        /* renamed from: w  reason: collision with root package name */
        private final bo.a f31146w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f31147x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f31148y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f31149z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f31150d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f31151e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f31152i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f31153o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f31154p;

            static {
                a[] a10 = a();
                f31153o = a10;
                f31154p = yr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f31150d, f31151e, f31152i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f31153o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, ro.e idClass, c4.e captureSide, aq.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, bo.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, no.h hVar, uq.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
            this.f31124a = title;
            this.f31125b = message;
            this.f31126c = disclaimer;
            this.f31127d = captureButtonState;
            this.f31128e = overlay;
            this.f31129f = idClass;
            this.f31130g = captureSide;
            this.f31131h = navigationState;
            this.f31132i = manuallyCapture;
            this.f31133j = close;
            this.f31134k = back;
            this.f31135l = z10;
            this.f31136m = autoCaptureRules;
            this.f31137n = state;
            this.f31138o = i10;
            this.f31139p = governmentIdStepStyle;
            this.f31140q = autoCapture;
            this.f31141r = onCaptureError;
            this.f31142s = onCameraError;
            this.f31143t = i11;
            this.f31144u = manualCaptureClicked;
            this.f31145v = checkPermissions;
            this.f31146w = videoCaptureMethod;
            this.f31147x = z11;
            this.f31148y = onLocalVideoFinalized;
            this.f31149z = z12;
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
            return this.f31128e;
        }

        public final int B() {
            return this.f31143t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f31137n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f31139p;
        }

        public final String F() {
            return this.f31124a;
        }

        public final bo.a G() {
            return this.f31146w;
        }

        public final uq.a H() {
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
            return this.f31140q;
        }

        public final List c() {
            return this.f31136m;
        }

        public final int d() {
            return this.f31138o;
        }

        public final boolean e() {
            return this.f31135l;
        }

        public final Function0 f() {
            return this.f31134k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f31127d;
        }

        public final c4.e j() {
            return this.f31130g;
        }

        public final no.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f31145v;
        }

        public final Function0 m() {
            return this.f31133j;
        }

        public final String n() {
            return this.f31126c;
        }

        public final boolean o() {
            return this.f31149z;
        }

        public final boolean p() {
            return this.f31147x;
        }

        public final String q() {
            return this.C;
        }

        public final ro.e r() {
            return this.f31129f;
        }

        public final Function0 s() {
            return this.f31144u;
        }

        public final Function2 t() {
            return this.f31132i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f31125b;
        }

        public final aq.a w() {
            return this.f31131h;
        }

        public final Function1 x() {
            return this.f31142s;
        }

        public final Function1 y() {
            return this.f31141r;
        }

        public final Function2 z() {
            return this.f31148y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f31155a;

        /* renamed from: b  reason: collision with root package name */
        private final String f31156b;

        /* renamed from: c  reason: collision with root package name */
        private final String f31157c;

        /* renamed from: d  reason: collision with root package name */
        private final String f31158d;

        /* renamed from: e  reason: collision with root package name */
        private final List f31159e;

        /* renamed from: f  reason: collision with root package name */
        private final aq.a f31160f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f31161g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f31162h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f31163i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f31164j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f31165k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f31166l;

        /* renamed from: m  reason: collision with root package name */
        private final String f31167m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f31168n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, aq.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
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
            this.f31155a = title;
            this.f31156b = prompt;
            this.f31157c = chooseText;
            this.f31158d = disclaimer;
            this.f31159e = enabledIdClasses;
            this.f31160f = navigationState;
            this.f31161g = selectIdClass;
            this.f31162h = governmentIdStepStyle;
            this.f31163i = selectPage;
            this.f31164j = z10;
            this.f31165k = onBack;
            this.f31166l = onCancel;
            this.f31167m = str;
            this.f31168n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f31163i;
        }

        public final String b() {
            return this.f31157c;
        }

        public final String c() {
            return this.f31158d;
        }

        public final List d() {
            return this.f31159e;
        }

        public final String e() {
            return this.f31167m;
        }

        public final aq.a f() {
            return this.f31160f;
        }

        public final Function0 g() {
            return this.f31165k;
        }

        public final Function0 h() {
            return this.f31166l;
        }

        public final Function0 i() {
            return this.f31168n;
        }

        public final String j() {
            return this.f31156b;
        }

        public final Function1 k() {
            return this.f31161g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f31162h;
        }

        public final String m() {
            return this.f31155a;
        }

        public final boolean n() {
            return this.f31164j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f31169d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0471a();

            /* renamed from: ko.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0471a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f31169d;
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
            public static final b f31170d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f31170d;
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
            private final gq.i4 f31171d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f31172e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((gq.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(gq.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f31171d = customImage;
                this.f31172e = config;
            }

            public final RemoteImage a() {
                return this.f31172e;
            }

            public final gq.i4 b() {
                return this.f31171d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f31171d, i10);
                dest.writeParcelable(this.f31172e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new gq.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: ko.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0472d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0472d f31173d = new C0472d();
            @NotNull
            public static final Parcelable.Creator<C0472d> CREATOR = new a();

            /* renamed from: ko.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0472d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0472d.f31173d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0472d[] newArray(int i10) {
                    return new C0472d[i10];
                }
            }

            private C0472d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0472d)) {
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
            public static final e f31174d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f31174d;
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
            public static final f f31175d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f31175d;
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
        private final v4.h f31176a;

        /* renamed from: b  reason: collision with root package name */
        private final String f31177b;

        /* renamed from: c  reason: collision with root package name */
        private final String f31178c;

        /* renamed from: d  reason: collision with root package name */
        private final d f31179d;

        /* renamed from: e  reason: collision with root package name */
        private final String f31180e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f31181f;

        /* renamed from: g  reason: collision with root package name */
        private final ro.e f31182g;

        /* renamed from: h  reason: collision with root package name */
        private final aq.a f31183h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f31184i;

        /* renamed from: j  reason: collision with root package name */
        private final String f31185j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f31186k;

        /* renamed from: l  reason: collision with root package name */
        private final String f31187l;

        /* renamed from: m  reason: collision with root package name */
        private final String f31188m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f31189n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f31190o;

        /* renamed from: p  reason: collision with root package name */
        private final String f31191p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f31192q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f31193r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f31194s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f31195t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f31196u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, ro.e idClass, aq.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
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
            this.f31176a = imageLoader;
            this.f31177b = message;
            this.f31178c = disclaimer;
            this.f31179d = overlay;
            this.f31180e = imagePath;
            this.f31181f = captureSide;
            this.f31182g = idClass;
            this.f31183h = navigationState;
            this.f31184i = acceptImage;
            this.f31185j = acceptText;
            this.f31186k = retryImage;
            this.f31187l = retryText;
            this.f31188m = confirmCaptureTitle;
            this.f31189n = close;
            this.f31190o = governmentIdStepStyle;
            this.f31191p = str;
            this.f31192q = onErrorDismissed;
            this.f31193r = capturePage;
            this.f31194s = z10;
            this.f31195t = z11;
            this.f31196u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f31184i;
        }

        public final String b() {
            return this.f31185j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f31193r;
        }

        public final c4.e d() {
            return this.f31181f;
        }

        public final Function0 e() {
            return this.f31189n;
        }

        public final String f() {
            return this.f31188m;
        }

        public final String g() {
            return this.f31178c;
        }

        public final String h() {
            return this.f31191p;
        }

        public final ro.e i() {
            return this.f31182g;
        }

        public final v4.h j() {
            return this.f31176a;
        }

        public final String k() {
            return this.f31180e;
        }

        public final String l() {
            return this.f31177b;
        }

        public final aq.a m() {
            return this.f31183h;
        }

        public final Function0 n() {
            return this.f31192q;
        }

        public final d o() {
            return this.f31179d;
        }

        public final Function0 p() {
            return this.f31186k;
        }

        public final String q() {
            return this.f31187l;
        }

        public final StyleElements.Axis r() {
            return this.f31196u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f31190o;
        }

        public final boolean t() {
            return this.f31195t;
        }

        public final boolean u() {
            return this.f31194s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f31197a;

        /* renamed from: b  reason: collision with root package name */
        private final String f31198b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f31199c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f31200d;

        /* renamed from: e  reason: collision with root package name */
        private final aq.a f31201e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f31202f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f31203g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f31204h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, aq.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f31197a = title;
            this.f31198b = description;
            this.f31199c = governmentIdStepStyle;
            this.f31200d = pendingPage;
            this.f31201e = navigationState;
            this.f31202f = onBack;
            this.f31203g = onCancel;
            this.f31204h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f31200d;
        }

        public final String b() {
            return this.f31198b;
        }

        public final aq.a c() {
            return this.f31201e;
        }

        public final Function0 d() {
            return this.f31202f;
        }

        public final Function0 e() {
            return this.f31203g;
        }

        public final PendingPageTextPosition f() {
            return this.f31204h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f31199c;
        }

        public final String h() {
            return this.f31197a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
