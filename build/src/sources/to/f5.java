package to;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import fo.z;
import ho.g;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f49671a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49672b;

        /* renamed from: c  reason: collision with root package name */
        private final pq.c2 f49673c;

        /* renamed from: d  reason: collision with root package name */
        private final pq.c2 f49674d;

        /* renamed from: e  reason: collision with root package name */
        private final String f49675e;

        /* renamed from: f  reason: collision with root package name */
        private final String f49676f;

        /* renamed from: g  reason: collision with root package name */
        private final String f49677g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f49678h;

        /* renamed from: i  reason: collision with root package name */
        private final jq.a f49679i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f49680j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f49681k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f49682l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f49683m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f49684n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, pq.c2 countrySelectComponent, pq.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, jq.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f49671a = str;
            this.f49672b = governmentIdStepStyle;
            this.f49673c = countrySelectComponent;
            this.f49674d = idClassSelectComponent;
            this.f49675e = str2;
            this.f49676f = str3;
            this.f49677g = str4;
            this.f49678h = z10;
            this.f49679i = navigationState;
            this.f49680j = onCountrySelected;
            this.f49681k = onIdClassSelected;
            this.f49682l = onContinueClick;
            this.f49683m = onBackClick;
            this.f49684n = onCancelClick;
        }

        public final String a() {
            return this.f49677g;
        }

        public final String b() {
            return this.f49675e;
        }

        public final pq.c2 c() {
            return this.f49673c;
        }

        public final String d() {
            return this.f49676f;
        }

        public final pq.c2 e() {
            return this.f49674d;
        }

        public final jq.a f() {
            return this.f49679i;
        }

        public final Function0 g() {
            return this.f49683m;
        }

        public final Function0 h() {
            return this.f49684n;
        }

        public final Function0 i() {
            return this.f49682l;
        }

        public final Function1 j() {
            return this.f49680j;
        }

        public final Function1 k() {
            return this.f49681k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f49672b;
        }

        public final String m() {
            return this.f49671a;
        }

        public final boolean n() {
            return this.f49678h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final wo.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f49685a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49686b;

        /* renamed from: c  reason: collision with root package name */
        private final String f49687c;

        /* renamed from: d  reason: collision with root package name */
        private final a f49688d;

        /* renamed from: e  reason: collision with root package name */
        private final d f49689e;

        /* renamed from: f  reason: collision with root package name */
        private final ap.e f49690f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f49691g;

        /* renamed from: h  reason: collision with root package name */
        private final jq.a f49692h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f49693i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f49694j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f49695k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f49696l;

        /* renamed from: m  reason: collision with root package name */
        private final List f49697m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f49698n;

        /* renamed from: o  reason: collision with root package name */
        private final int f49699o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49700p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f49701q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f49702r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f49703s;

        /* renamed from: t  reason: collision with root package name */
        private final int f49704t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f49705u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f49706v;

        /* renamed from: w  reason: collision with root package name */
        private final lo.a f49707w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f49708x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f49709y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f49710z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f49711d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f49712e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f49713i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f49714o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f49715p;

            static {
                a[] a10 = a();
                f49714o = a10;
                f49715p = hs.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f49711d, f49712e, f49713i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f49714o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, ap.e idClass, c4.e captureSide, jq.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, lo.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, wo.h hVar, dr.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
            this.f49685a = title;
            this.f49686b = message;
            this.f49687c = disclaimer;
            this.f49688d = captureButtonState;
            this.f49689e = overlay;
            this.f49690f = idClass;
            this.f49691g = captureSide;
            this.f49692h = navigationState;
            this.f49693i = manuallyCapture;
            this.f49694j = close;
            this.f49695k = back;
            this.f49696l = z10;
            this.f49697m = autoCaptureRules;
            this.f49698n = state;
            this.f49699o = i10;
            this.f49700p = governmentIdStepStyle;
            this.f49701q = autoCapture;
            this.f49702r = onCaptureError;
            this.f49703s = onCameraError;
            this.f49704t = i11;
            this.f49705u = manualCaptureClicked;
            this.f49706v = checkPermissions;
            this.f49707w = videoCaptureMethod;
            this.f49708x = z11;
            this.f49709y = onLocalVideoFinalized;
            this.f49710z = z12;
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
            return this.f49689e;
        }

        public final int B() {
            return this.f49704t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f49698n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f49700p;
        }

        public final String F() {
            return this.f49685a;
        }

        public final lo.a G() {
            return this.f49707w;
        }

        public final dr.a H() {
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
            return this.f49701q;
        }

        public final List c() {
            return this.f49697m;
        }

        public final int d() {
            return this.f49699o;
        }

        public final boolean e() {
            return this.f49696l;
        }

        public final Function0 f() {
            return this.f49695k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f49688d;
        }

        public final c4.e j() {
            return this.f49691g;
        }

        public final wo.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f49706v;
        }

        public final Function0 m() {
            return this.f49694j;
        }

        public final String n() {
            return this.f49687c;
        }

        public final boolean o() {
            return this.f49710z;
        }

        public final boolean p() {
            return this.f49708x;
        }

        public final String q() {
            return this.C;
        }

        public final ap.e r() {
            return this.f49690f;
        }

        public final Function0 s() {
            return this.f49705u;
        }

        public final Function2 t() {
            return this.f49693i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f49686b;
        }

        public final jq.a w() {
            return this.f49692h;
        }

        public final Function1 x() {
            return this.f49703s;
        }

        public final Function1 y() {
            return this.f49702r;
        }

        public final Function2 z() {
            return this.f49709y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f49716a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49717b;

        /* renamed from: c  reason: collision with root package name */
        private final String f49718c;

        /* renamed from: d  reason: collision with root package name */
        private final String f49719d;

        /* renamed from: e  reason: collision with root package name */
        private final List f49720e;

        /* renamed from: f  reason: collision with root package name */
        private final jq.a f49721f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f49722g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49723h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f49724i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f49725j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f49726k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f49727l;

        /* renamed from: m  reason: collision with root package name */
        private final String f49728m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f49729n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, jq.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
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
            this.f49716a = title;
            this.f49717b = prompt;
            this.f49718c = chooseText;
            this.f49719d = disclaimer;
            this.f49720e = enabledIdClasses;
            this.f49721f = navigationState;
            this.f49722g = selectIdClass;
            this.f49723h = governmentIdStepStyle;
            this.f49724i = selectPage;
            this.f49725j = z10;
            this.f49726k = onBack;
            this.f49727l = onCancel;
            this.f49728m = str;
            this.f49729n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f49724i;
        }

        public final String b() {
            return this.f49718c;
        }

        public final String c() {
            return this.f49719d;
        }

        public final List d() {
            return this.f49720e;
        }

        public final String e() {
            return this.f49728m;
        }

        public final jq.a f() {
            return this.f49721f;
        }

        public final Function0 g() {
            return this.f49726k;
        }

        public final Function0 h() {
            return this.f49727l;
        }

        public final Function0 i() {
            return this.f49729n;
        }

        public final String j() {
            return this.f49717b;
        }

        public final Function1 k() {
            return this.f49722g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f49723h;
        }

        public final String m() {
            return this.f49716a;
        }

        public final boolean n() {
            return this.f49725j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f49730d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0669a();

            /* renamed from: to.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0669a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f49730d;
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
            public static final b f49731d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f49731d;
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
            private final pq.i4 f49732d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f49733e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((pq.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(pq.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f49732d = customImage;
                this.f49733e = config;
            }

            public final RemoteImage a() {
                return this.f49733e;
            }

            public final pq.i4 b() {
                return this.f49732d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f49732d, i10);
                dest.writeParcelable(this.f49733e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new pq.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: to.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0670d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0670d f49734d = new C0670d();
            @NotNull
            public static final Parcelable.Creator<C0670d> CREATOR = new a();

            /* renamed from: to.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0670d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0670d.f49734d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0670d[] newArray(int i10) {
                    return new C0670d[i10];
                }
            }

            private C0670d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0670d)) {
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
            public static final e f49735d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f49735d;
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
            public static final f f49736d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f49736d;
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
        private final v4.h f49737a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49738b;

        /* renamed from: c  reason: collision with root package name */
        private final String f49739c;

        /* renamed from: d  reason: collision with root package name */
        private final d f49740d;

        /* renamed from: e  reason: collision with root package name */
        private final String f49741e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f49742f;

        /* renamed from: g  reason: collision with root package name */
        private final ap.e f49743g;

        /* renamed from: h  reason: collision with root package name */
        private final jq.a f49744h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f49745i;

        /* renamed from: j  reason: collision with root package name */
        private final String f49746j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f49747k;

        /* renamed from: l  reason: collision with root package name */
        private final String f49748l;

        /* renamed from: m  reason: collision with root package name */
        private final String f49749m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f49750n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49751o;

        /* renamed from: p  reason: collision with root package name */
        private final String f49752p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f49753q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f49754r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f49755s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f49756t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f49757u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, ap.e idClass, jq.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
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
            this.f49737a = imageLoader;
            this.f49738b = message;
            this.f49739c = disclaimer;
            this.f49740d = overlay;
            this.f49741e = imagePath;
            this.f49742f = captureSide;
            this.f49743g = idClass;
            this.f49744h = navigationState;
            this.f49745i = acceptImage;
            this.f49746j = acceptText;
            this.f49747k = retryImage;
            this.f49748l = retryText;
            this.f49749m = confirmCaptureTitle;
            this.f49750n = close;
            this.f49751o = governmentIdStepStyle;
            this.f49752p = str;
            this.f49753q = onErrorDismissed;
            this.f49754r = capturePage;
            this.f49755s = z10;
            this.f49756t = z11;
            this.f49757u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f49745i;
        }

        public final String b() {
            return this.f49746j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f49754r;
        }

        public final c4.e d() {
            return this.f49742f;
        }

        public final Function0 e() {
            return this.f49750n;
        }

        public final String f() {
            return this.f49749m;
        }

        public final String g() {
            return this.f49739c;
        }

        public final String h() {
            return this.f49752p;
        }

        public final ap.e i() {
            return this.f49743g;
        }

        public final v4.h j() {
            return this.f49737a;
        }

        public final String k() {
            return this.f49741e;
        }

        public final String l() {
            return this.f49738b;
        }

        public final jq.a m() {
            return this.f49744h;
        }

        public final Function0 n() {
            return this.f49753q;
        }

        public final d o() {
            return this.f49740d;
        }

        public final Function0 p() {
            return this.f49747k;
        }

        public final String q() {
            return this.f49748l;
        }

        public final StyleElements.Axis r() {
            return this.f49757u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f49751o;
        }

        public final boolean t() {
            return this.f49756t;
        }

        public final boolean u() {
            return this.f49755s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f49758a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49759b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49760c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f49761d;

        /* renamed from: e  reason: collision with root package name */
        private final jq.a f49762e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f49763f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f49764g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f49765h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, jq.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f49758a = title;
            this.f49759b = description;
            this.f49760c = governmentIdStepStyle;
            this.f49761d = pendingPage;
            this.f49762e = navigationState;
            this.f49763f = onBack;
            this.f49764g = onCancel;
            this.f49765h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f49761d;
        }

        public final String b() {
            return this.f49759b;
        }

        public final jq.a c() {
            return this.f49762e;
        }

        public final Function0 d() {
            return this.f49763f;
        }

        public final Function0 e() {
            return this.f49764g;
        }

        public final PendingPageTextPosition f() {
            return this.f49765h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f49760c;
        }

        public final String h() {
            return this.f49758a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
