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
        private final String f30111a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30112b;

        /* renamed from: c  reason: collision with root package name */
        private final fq.c2 f30113c;

        /* renamed from: d  reason: collision with root package name */
        private final fq.c2 f30114d;

        /* renamed from: e  reason: collision with root package name */
        private final String f30115e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30116f;

        /* renamed from: g  reason: collision with root package name */
        private final String f30117g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f30118h;

        /* renamed from: i  reason: collision with root package name */
        private final zp.a f30119i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f30120j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f30121k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f30122l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f30123m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f30124n;

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
            this.f30111a = str;
            this.f30112b = governmentIdStepStyle;
            this.f30113c = countrySelectComponent;
            this.f30114d = idClassSelectComponent;
            this.f30115e = str2;
            this.f30116f = str3;
            this.f30117g = str4;
            this.f30118h = z10;
            this.f30119i = navigationState;
            this.f30120j = onCountrySelected;
            this.f30121k = onIdClassSelected;
            this.f30122l = onContinueClick;
            this.f30123m = onBackClick;
            this.f30124n = onCancelClick;
        }

        public final String a() {
            return this.f30117g;
        }

        public final String b() {
            return this.f30115e;
        }

        public final fq.c2 c() {
            return this.f30113c;
        }

        public final String d() {
            return this.f30116f;
        }

        public final fq.c2 e() {
            return this.f30114d;
        }

        public final zp.a f() {
            return this.f30119i;
        }

        public final Function0 g() {
            return this.f30123m;
        }

        public final Function0 h() {
            return this.f30124n;
        }

        public final Function0 i() {
            return this.f30122l;
        }

        public final Function1 j() {
            return this.f30120j;
        }

        public final Function1 k() {
            return this.f30121k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f30112b;
        }

        public final String m() {
            return this.f30111a;
        }

        public final boolean n() {
            return this.f30118h;
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
        private final String f30125a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30126b;

        /* renamed from: c  reason: collision with root package name */
        private final String f30127c;

        /* renamed from: d  reason: collision with root package name */
        private final a f30128d;

        /* renamed from: e  reason: collision with root package name */
        private final d f30129e;

        /* renamed from: f  reason: collision with root package name */
        private final qo.e f30130f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f30131g;

        /* renamed from: h  reason: collision with root package name */
        private final zp.a f30132h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f30133i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f30134j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f30135k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f30136l;

        /* renamed from: m  reason: collision with root package name */
        private final List f30137m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f30138n;

        /* renamed from: o  reason: collision with root package name */
        private final int f30139o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30140p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f30141q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f30142r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f30143s;

        /* renamed from: t  reason: collision with root package name */
        private final int f30144t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f30145u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f30146v;

        /* renamed from: w  reason: collision with root package name */
        private final ao.a f30147w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f30148x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f30149y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f30150z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f30151d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f30152e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f30153i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f30154o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f30155p;

            static {
                a[] a10 = a();
                f30154o = a10;
                f30155p = xr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f30151d, f30152e, f30153i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f30154o.clone();
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
            this.f30125a = title;
            this.f30126b = message;
            this.f30127c = disclaimer;
            this.f30128d = captureButtonState;
            this.f30129e = overlay;
            this.f30130f = idClass;
            this.f30131g = captureSide;
            this.f30132h = navigationState;
            this.f30133i = manuallyCapture;
            this.f30134j = close;
            this.f30135k = back;
            this.f30136l = z10;
            this.f30137m = autoCaptureRules;
            this.f30138n = state;
            this.f30139o = i10;
            this.f30140p = governmentIdStepStyle;
            this.f30141q = autoCapture;
            this.f30142r = onCaptureError;
            this.f30143s = onCameraError;
            this.f30144t = i11;
            this.f30145u = manualCaptureClicked;
            this.f30146v = checkPermissions;
            this.f30147w = videoCaptureMethod;
            this.f30148x = z11;
            this.f30149y = onLocalVideoFinalized;
            this.f30150z = z12;
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
            return this.f30129e;
        }

        public final int B() {
            return this.f30144t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f30138n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f30140p;
        }

        public final String F() {
            return this.f30125a;
        }

        public final ao.a G() {
            return this.f30147w;
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
            return this.f30141q;
        }

        public final List c() {
            return this.f30137m;
        }

        public final int d() {
            return this.f30139o;
        }

        public final boolean e() {
            return this.f30136l;
        }

        public final Function0 f() {
            return this.f30135k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f30128d;
        }

        public final c4.e j() {
            return this.f30131g;
        }

        public final mo.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f30146v;
        }

        public final Function0 m() {
            return this.f30134j;
        }

        public final String n() {
            return this.f30127c;
        }

        public final boolean o() {
            return this.f30150z;
        }

        public final boolean p() {
            return this.f30148x;
        }

        public final String q() {
            return this.C;
        }

        public final qo.e r() {
            return this.f30130f;
        }

        public final Function0 s() {
            return this.f30145u;
        }

        public final Function2 t() {
            return this.f30133i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f30126b;
        }

        public final zp.a w() {
            return this.f30132h;
        }

        public final Function1 x() {
            return this.f30143s;
        }

        public final Function1 y() {
            return this.f30142r;
        }

        public final Function2 z() {
            return this.f30149y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f30156a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30157b;

        /* renamed from: c  reason: collision with root package name */
        private final String f30158c;

        /* renamed from: d  reason: collision with root package name */
        private final String f30159d;

        /* renamed from: e  reason: collision with root package name */
        private final List f30160e;

        /* renamed from: f  reason: collision with root package name */
        private final zp.a f30161f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f30162g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30163h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f30164i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f30165j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f30166k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f30167l;

        /* renamed from: m  reason: collision with root package name */
        private final String f30168m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f30169n;

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
            this.f30156a = title;
            this.f30157b = prompt;
            this.f30158c = chooseText;
            this.f30159d = disclaimer;
            this.f30160e = enabledIdClasses;
            this.f30161f = navigationState;
            this.f30162g = selectIdClass;
            this.f30163h = governmentIdStepStyle;
            this.f30164i = selectPage;
            this.f30165j = z10;
            this.f30166k = onBack;
            this.f30167l = onCancel;
            this.f30168m = str;
            this.f30169n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f30164i;
        }

        public final String b() {
            return this.f30158c;
        }

        public final String c() {
            return this.f30159d;
        }

        public final List d() {
            return this.f30160e;
        }

        public final String e() {
            return this.f30168m;
        }

        public final zp.a f() {
            return this.f30161f;
        }

        public final Function0 g() {
            return this.f30166k;
        }

        public final Function0 h() {
            return this.f30167l;
        }

        public final Function0 i() {
            return this.f30169n;
        }

        public final String j() {
            return this.f30157b;
        }

        public final Function1 k() {
            return this.f30162g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f30163h;
        }

        public final String m() {
            return this.f30156a;
        }

        public final boolean n() {
            return this.f30165j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f30170d = new a();
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
                    return a.f30170d;
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
            public static final b f30171d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f30171d;
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
            private final fq.i4 f30172d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f30173e;

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
                this.f30172d = customImage;
                this.f30173e = config;
            }

            public final RemoteImage a() {
                return this.f30173e;
            }

            public final fq.i4 b() {
                return this.f30172d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f30172d, i10);
                dest.writeParcelable(this.f30173e, i10);
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
            public static final C0426d f30174d = new C0426d();
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
                    return C0426d.f30174d;
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
            public static final e f30175d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f30175d;
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
            public static final f f30176d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f30176d;
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
        private final v4.h f30177a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30178b;

        /* renamed from: c  reason: collision with root package name */
        private final String f30179c;

        /* renamed from: d  reason: collision with root package name */
        private final d f30180d;

        /* renamed from: e  reason: collision with root package name */
        private final String f30181e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f30182f;

        /* renamed from: g  reason: collision with root package name */
        private final qo.e f30183g;

        /* renamed from: h  reason: collision with root package name */
        private final zp.a f30184h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f30185i;

        /* renamed from: j  reason: collision with root package name */
        private final String f30186j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f30187k;

        /* renamed from: l  reason: collision with root package name */
        private final String f30188l;

        /* renamed from: m  reason: collision with root package name */
        private final String f30189m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f30190n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30191o;

        /* renamed from: p  reason: collision with root package name */
        private final String f30192p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f30193q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f30194r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f30195s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f30196t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f30197u;

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
            this.f30177a = imageLoader;
            this.f30178b = message;
            this.f30179c = disclaimer;
            this.f30180d = overlay;
            this.f30181e = imagePath;
            this.f30182f = captureSide;
            this.f30183g = idClass;
            this.f30184h = navigationState;
            this.f30185i = acceptImage;
            this.f30186j = acceptText;
            this.f30187k = retryImage;
            this.f30188l = retryText;
            this.f30189m = confirmCaptureTitle;
            this.f30190n = close;
            this.f30191o = governmentIdStepStyle;
            this.f30192p = str;
            this.f30193q = onErrorDismissed;
            this.f30194r = capturePage;
            this.f30195s = z10;
            this.f30196t = z11;
            this.f30197u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f30185i;
        }

        public final String b() {
            return this.f30186j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f30194r;
        }

        public final c4.e d() {
            return this.f30182f;
        }

        public final Function0 e() {
            return this.f30190n;
        }

        public final String f() {
            return this.f30189m;
        }

        public final String g() {
            return this.f30179c;
        }

        public final String h() {
            return this.f30192p;
        }

        public final qo.e i() {
            return this.f30183g;
        }

        public final v4.h j() {
            return this.f30177a;
        }

        public final String k() {
            return this.f30181e;
        }

        public final String l() {
            return this.f30178b;
        }

        public final zp.a m() {
            return this.f30184h;
        }

        public final Function0 n() {
            return this.f30193q;
        }

        public final d o() {
            return this.f30180d;
        }

        public final Function0 p() {
            return this.f30187k;
        }

        public final String q() {
            return this.f30188l;
        }

        public final StyleElements.Axis r() {
            return this.f30197u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f30191o;
        }

        public final boolean t() {
            return this.f30196t;
        }

        public final boolean u() {
            return this.f30195s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f30198a;

        /* renamed from: b  reason: collision with root package name */
        private final String f30199b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f30200c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f30201d;

        /* renamed from: e  reason: collision with root package name */
        private final zp.a f30202e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f30203f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f30204g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f30205h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, zp.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f30198a = title;
            this.f30199b = description;
            this.f30200c = governmentIdStepStyle;
            this.f30201d = pendingPage;
            this.f30202e = navigationState;
            this.f30203f = onBack;
            this.f30204g = onCancel;
            this.f30205h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f30201d;
        }

        public final String b() {
            return this.f30199b;
        }

        public final zp.a c() {
            return this.f30202e;
        }

        public final Function0 d() {
            return this.f30203f;
        }

        public final Function0 e() {
            return this.f30204g;
        }

        public final PendingPageTextPosition f() {
            return this.f30205h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f30200c;
        }

        public final String h() {
            return this.f30198a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
