package jo;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.List;
import jo.c4;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import un.z;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f30159a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30160b;

        /* renamed from: c  reason: collision with root package name */
        private final fq.c2 f30161c;

        /* renamed from: d  reason: collision with root package name */
        private final fq.c2 f30162d;

        /* renamed from: e  reason: collision with root package name */
        private final String f30163e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30164f;

        /* renamed from: g  reason: collision with root package name */
        private final String f30165g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f30166h;

        /* renamed from: i  reason: collision with root package name */
        private final zp.a f30167i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f30168j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f30169k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f30170l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f30171m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f30172n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, fq.c2 countrySelectComponent, fq.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, zp.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f30159a = str;
            this.f30160b = governmentIdStepStyle;
            this.f30161c = countrySelectComponent;
            this.f30162d = idClassSelectComponent;
            this.f30163e = str2;
            this.f30164f = str3;
            this.f30165g = str4;
            this.f30166h = z10;
            this.f30167i = navigationState;
            this.f30168j = onCountrySelected;
            this.f30169k = onIdClassSelected;
            this.f30170l = onContinueClick;
            this.f30171m = onBackClick;
            this.f30172n = onCancelClick;
        }

        public final String a() {
            return this.f30165g;
        }

        public final String b() {
            return this.f30163e;
        }

        public final fq.c2 c() {
            return this.f30161c;
        }

        public final String d() {
            return this.f30164f;
        }

        public final fq.c2 e() {
            return this.f30162d;
        }

        public final zp.a f() {
            return this.f30167i;
        }

        public final Function0 g() {
            return this.f30171m;
        }

        public final Function0 h() {
            return this.f30172n;
        }

        public final Function0 i() {
            return this.f30170l;
        }

        public final Function1 j() {
            return this.f30168j;
        }

        public final Function1 k() {
            return this.f30169k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f30160b;
        }

        public final String m() {
            return this.f30159a;
        }

        public final boolean n() {
            return this.f30166h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final mo.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f30173a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30174b;

        /* renamed from: c  reason: collision with root package name */
        private final String f30175c;

        /* renamed from: d  reason: collision with root package name */
        private final a f30176d;

        /* renamed from: e  reason: collision with root package name */
        private final d f30177e;

        /* renamed from: f  reason: collision with root package name */
        private final qo.e f30178f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f30179g;

        /* renamed from: h  reason: collision with root package name */
        private final zp.a f30180h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f30181i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f30182j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f30183k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f30184l;

        /* renamed from: m  reason: collision with root package name */
        private final List f30185m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f30186n;

        /* renamed from: o  reason: collision with root package name */
        private final int f30187o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30188p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f30189q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f30190r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f30191s;

        /* renamed from: t  reason: collision with root package name */
        private final int f30192t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f30193u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f30194v;

        /* renamed from: w  reason: collision with root package name */
        private final ao.a f30195w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f30196x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f30197y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f30198z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f30199d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f30200e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f30201i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f30202o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f30203p;

            static {
                a[] a10 = a();
                f30202o = a10;
                f30203p = xr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f30199d, f30200e, f30201i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f30202o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, qo.e idClass, c4.e captureSide, zp.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, ao.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, mo.h hVar, tq.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
            this.f30173a = title;
            this.f30174b = message;
            this.f30175c = disclaimer;
            this.f30176d = captureButtonState;
            this.f30177e = overlay;
            this.f30178f = idClass;
            this.f30179g = captureSide;
            this.f30180h = navigationState;
            this.f30181i = manuallyCapture;
            this.f30182j = close;
            this.f30183k = back;
            this.f30184l = z10;
            this.f30185m = autoCaptureRules;
            this.f30186n = state;
            this.f30187o = i10;
            this.f30188p = governmentIdStepStyle;
            this.f30189q = autoCapture;
            this.f30190r = onCaptureError;
            this.f30191s = onCameraError;
            this.f30192t = i11;
            this.f30193u = manualCaptureClicked;
            this.f30194v = checkPermissions;
            this.f30195w = videoCaptureMethod;
            this.f30196x = z11;
            this.f30197y = onLocalVideoFinalized;
            this.f30198z = z12;
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
            return this.f30177e;
        }

        public final int B() {
            return this.f30192t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f30186n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f30188p;
        }

        public final String F() {
            return this.f30173a;
        }

        public final ao.a G() {
            return this.f30195w;
        }

        public final tq.a H() {
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
            return this.f30189q;
        }

        public final List c() {
            return this.f30185m;
        }

        public final int d() {
            return this.f30187o;
        }

        public final boolean e() {
            return this.f30184l;
        }

        public final Function0 f() {
            return this.f30183k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f30176d;
        }

        public final c4.e j() {
            return this.f30179g;
        }

        public final mo.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f30194v;
        }

        public final Function0 m() {
            return this.f30182j;
        }

        public final String n() {
            return this.f30175c;
        }

        public final boolean o() {
            return this.f30198z;
        }

        public final boolean p() {
            return this.f30196x;
        }

        public final String q() {
            return this.C;
        }

        public final qo.e r() {
            return this.f30178f;
        }

        public final Function0 s() {
            return this.f30193u;
        }

        public final Function2 t() {
            return this.f30181i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f30174b;
        }

        public final zp.a w() {
            return this.f30180h;
        }

        public final Function1 x() {
            return this.f30191s;
        }

        public final Function1 y() {
            return this.f30190r;
        }

        public final Function2 z() {
            return this.f30197y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f30204a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30205b;

        /* renamed from: c  reason: collision with root package name */
        private final String f30206c;

        /* renamed from: d  reason: collision with root package name */
        private final String f30207d;

        /* renamed from: e  reason: collision with root package name */
        private final List f30208e;

        /* renamed from: f  reason: collision with root package name */
        private final zp.a f30209f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f30210g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30211h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f30212i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f30213j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f30214k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f30215l;

        /* renamed from: m  reason: collision with root package name */
        private final String f30216m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f30217n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, zp.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
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
            this.f30204a = title;
            this.f30205b = prompt;
            this.f30206c = chooseText;
            this.f30207d = disclaimer;
            this.f30208e = enabledIdClasses;
            this.f30209f = navigationState;
            this.f30210g = selectIdClass;
            this.f30211h = governmentIdStepStyle;
            this.f30212i = selectPage;
            this.f30213j = z10;
            this.f30214k = onBack;
            this.f30215l = onCancel;
            this.f30216m = str;
            this.f30217n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f30212i;
        }

        public final String b() {
            return this.f30206c;
        }

        public final String c() {
            return this.f30207d;
        }

        public final List d() {
            return this.f30208e;
        }

        public final String e() {
            return this.f30216m;
        }

        public final zp.a f() {
            return this.f30209f;
        }

        public final Function0 g() {
            return this.f30214k;
        }

        public final Function0 h() {
            return this.f30215l;
        }

        public final Function0 i() {
            return this.f30217n;
        }

        public final String j() {
            return this.f30205b;
        }

        public final Function1 k() {
            return this.f30210g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f30211h;
        }

        public final String m() {
            return this.f30204a;
        }

        public final boolean n() {
            return this.f30213j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f30218d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0425a();

            /* renamed from: jo.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0425a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f30218d;
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
            public static final b f30219d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f30219d;
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
            private final fq.i4 f30220d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f30221e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((fq.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(fq.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f30220d = customImage;
                this.f30221e = config;
            }

            public final RemoteImage a() {
                return this.f30221e;
            }

            public final fq.i4 b() {
                return this.f30220d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f30220d, i10);
                dest.writeParcelable(this.f30221e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new fq.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: jo.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0426d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0426d f30222d = new C0426d();
            @NotNull
            public static final Parcelable.Creator<C0426d> CREATOR = new a();

            /* renamed from: jo.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0426d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0426d.f30222d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0426d[] newArray(int i10) {
                    return new C0426d[i10];
                }
            }

            private C0426d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0426d)) {
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
            public static final e f30223d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f30223d;
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
            public static final f f30224d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f30224d;
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
        private final v4.h f30225a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30226b;

        /* renamed from: c  reason: collision with root package name */
        private final String f30227c;

        /* renamed from: d  reason: collision with root package name */
        private final d f30228d;

        /* renamed from: e  reason: collision with root package name */
        private final String f30229e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f30230f;

        /* renamed from: g  reason: collision with root package name */
        private final qo.e f30231g;

        /* renamed from: h  reason: collision with root package name */
        private final zp.a f30232h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f30233i;

        /* renamed from: j  reason: collision with root package name */
        private final String f30234j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f30235k;

        /* renamed from: l  reason: collision with root package name */
        private final String f30236l;

        /* renamed from: m  reason: collision with root package name */
        private final String f30237m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f30238n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30239o;

        /* renamed from: p  reason: collision with root package name */
        private final String f30240p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f30241q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f30242r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f30243s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f30244t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f30245u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, qo.e idClass, zp.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
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
            this.f30225a = imageLoader;
            this.f30226b = message;
            this.f30227c = disclaimer;
            this.f30228d = overlay;
            this.f30229e = imagePath;
            this.f30230f = captureSide;
            this.f30231g = idClass;
            this.f30232h = navigationState;
            this.f30233i = acceptImage;
            this.f30234j = acceptText;
            this.f30235k = retryImage;
            this.f30236l = retryText;
            this.f30237m = confirmCaptureTitle;
            this.f30238n = close;
            this.f30239o = governmentIdStepStyle;
            this.f30240p = str;
            this.f30241q = onErrorDismissed;
            this.f30242r = capturePage;
            this.f30243s = z10;
            this.f30244t = z11;
            this.f30245u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f30233i;
        }

        public final String b() {
            return this.f30234j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f30242r;
        }

        public final c4.e d() {
            return this.f30230f;
        }

        public final Function0 e() {
            return this.f30238n;
        }

        public final String f() {
            return this.f30237m;
        }

        public final String g() {
            return this.f30227c;
        }

        public final String h() {
            return this.f30240p;
        }

        public final qo.e i() {
            return this.f30231g;
        }

        public final v4.h j() {
            return this.f30225a;
        }

        public final String k() {
            return this.f30229e;
        }

        public final String l() {
            return this.f30226b;
        }

        public final zp.a m() {
            return this.f30232h;
        }

        public final Function0 n() {
            return this.f30241q;
        }

        public final d o() {
            return this.f30228d;
        }

        public final Function0 p() {
            return this.f30235k;
        }

        public final String q() {
            return this.f30236l;
        }

        public final StyleElements.Axis r() {
            return this.f30245u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f30239o;
        }

        public final boolean t() {
            return this.f30244t;
        }

        public final boolean u() {
            return this.f30243s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f30246a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30247b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30248c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f30249d;

        /* renamed from: e  reason: collision with root package name */
        private final zp.a f30250e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f30251f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f30252g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f30253h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, zp.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f30246a = title;
            this.f30247b = description;
            this.f30248c = governmentIdStepStyle;
            this.f30249d = pendingPage;
            this.f30250e = navigationState;
            this.f30251f = onBack;
            this.f30252g = onCancel;
            this.f30253h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f30249d;
        }

        public final String b() {
            return this.f30247b;
        }

        public final zp.a c() {
            return this.f30250e;
        }

        public final Function0 d() {
            return this.f30251f;
        }

        public final Function0 e() {
            return this.f30252g;
        }

        public final PendingPageTextPosition f() {
            return this.f30253h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f30248c;
        }

        public final String h() {
            return this.f30246a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
