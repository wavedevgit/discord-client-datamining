package ao;

import android.os.Parcel;
import android.os.Parcelable;
import ao.c4;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mn.z;
import on.g;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f5925a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f5926b;

        /* renamed from: c  reason: collision with root package name */
        private final xp.c2 f5927c;

        /* renamed from: d  reason: collision with root package name */
        private final xp.c2 f5928d;

        /* renamed from: e  reason: collision with root package name */
        private final String f5929e;

        /* renamed from: f  reason: collision with root package name */
        private final String f5930f;

        /* renamed from: g  reason: collision with root package name */
        private final String f5931g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f5932h;

        /* renamed from: i  reason: collision with root package name */
        private final rp.a f5933i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f5934j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f5935k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f5936l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f5937m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f5938n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, xp.c2 countrySelectComponent, xp.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, rp.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f5925a = str;
            this.f5926b = governmentIdStepStyle;
            this.f5927c = countrySelectComponent;
            this.f5928d = idClassSelectComponent;
            this.f5929e = str2;
            this.f5930f = str3;
            this.f5931g = str4;
            this.f5932h = z10;
            this.f5933i = navigationState;
            this.f5934j = onCountrySelected;
            this.f5935k = onIdClassSelected;
            this.f5936l = onContinueClick;
            this.f5937m = onBackClick;
            this.f5938n = onCancelClick;
        }

        public final String a() {
            return this.f5931g;
        }

        public final String b() {
            return this.f5929e;
        }

        public final xp.c2 c() {
            return this.f5927c;
        }

        public final String d() {
            return this.f5930f;
        }

        public final xp.c2 e() {
            return this.f5928d;
        }

        public final rp.a f() {
            return this.f5933i;
        }

        public final Function0 g() {
            return this.f5937m;
        }

        public final Function0 h() {
            return this.f5938n;
        }

        public final Function0 i() {
            return this.f5936l;
        }

        public final Function1 j() {
            return this.f5934j;
        }

        public final Function1 k() {
            return this.f5935k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f5926b;
        }

        public final String m() {
            return this.f5925a;
        }

        public final boolean n() {
            return this.f5932h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final eo.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f5939a;

        /* renamed from: b  reason: collision with root package name */
        private final String f5940b;

        /* renamed from: c  reason: collision with root package name */
        private final String f5941c;

        /* renamed from: d  reason: collision with root package name */
        private final a f5942d;

        /* renamed from: e  reason: collision with root package name */
        private final d f5943e;

        /* renamed from: f  reason: collision with root package name */
        private final io.e f5944f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f5945g;

        /* renamed from: h  reason: collision with root package name */
        private final rp.a f5946h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f5947i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f5948j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f5949k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f5950l;

        /* renamed from: m  reason: collision with root package name */
        private final List f5951m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f5952n;

        /* renamed from: o  reason: collision with root package name */
        private final int f5953o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f5954p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f5955q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f5956r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f5957s;

        /* renamed from: t  reason: collision with root package name */
        private final int f5958t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f5959u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f5960v;

        /* renamed from: w  reason: collision with root package name */
        private final sn.a f5961w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f5962x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f5963y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f5964z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f5965d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f5966e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f5967i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f5968o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f5969p;

            static {
                a[] a10 = a();
                f5968o = a10;
                f5969p = pr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f5965d, f5966e, f5967i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f5968o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, io.e idClass, c4.e captureSide, rp.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, sn.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, eo.h hVar, lq.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
            this.f5939a = title;
            this.f5940b = message;
            this.f5941c = disclaimer;
            this.f5942d = captureButtonState;
            this.f5943e = overlay;
            this.f5944f = idClass;
            this.f5945g = captureSide;
            this.f5946h = navigationState;
            this.f5947i = manuallyCapture;
            this.f5948j = close;
            this.f5949k = back;
            this.f5950l = z10;
            this.f5951m = autoCaptureRules;
            this.f5952n = state;
            this.f5953o = i10;
            this.f5954p = governmentIdStepStyle;
            this.f5955q = autoCapture;
            this.f5956r = onCaptureError;
            this.f5957s = onCameraError;
            this.f5958t = i11;
            this.f5959u = manualCaptureClicked;
            this.f5960v = checkPermissions;
            this.f5961w = videoCaptureMethod;
            this.f5962x = z11;
            this.f5963y = onLocalVideoFinalized;
            this.f5964z = z12;
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
            return this.f5943e;
        }

        public final int B() {
            return this.f5958t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f5952n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f5954p;
        }

        public final String F() {
            return this.f5939a;
        }

        public final sn.a G() {
            return this.f5961w;
        }

        public final lq.a H() {
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
            return this.f5955q;
        }

        public final List c() {
            return this.f5951m;
        }

        public final int d() {
            return this.f5953o;
        }

        public final boolean e() {
            return this.f5950l;
        }

        public final Function0 f() {
            return this.f5949k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f5942d;
        }

        public final c4.e j() {
            return this.f5945g;
        }

        public final eo.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f5960v;
        }

        public final Function0 m() {
            return this.f5948j;
        }

        public final String n() {
            return this.f5941c;
        }

        public final boolean o() {
            return this.f5964z;
        }

        public final boolean p() {
            return this.f5962x;
        }

        public final String q() {
            return this.C;
        }

        public final io.e r() {
            return this.f5944f;
        }

        public final Function0 s() {
            return this.f5959u;
        }

        public final Function2 t() {
            return this.f5947i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f5940b;
        }

        public final rp.a w() {
            return this.f5946h;
        }

        public final Function1 x() {
            return this.f5957s;
        }

        public final Function1 y() {
            return this.f5956r;
        }

        public final Function2 z() {
            return this.f5963y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f5970a;

        /* renamed from: b  reason: collision with root package name */
        private final String f5971b;

        /* renamed from: c  reason: collision with root package name */
        private final String f5972c;

        /* renamed from: d  reason: collision with root package name */
        private final String f5973d;

        /* renamed from: e  reason: collision with root package name */
        private final List f5974e;

        /* renamed from: f  reason: collision with root package name */
        private final rp.a f5975f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f5976g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f5977h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f5978i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f5979j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f5980k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f5981l;

        /* renamed from: m  reason: collision with root package name */
        private final String f5982m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f5983n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, rp.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
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
            this.f5970a = title;
            this.f5971b = prompt;
            this.f5972c = chooseText;
            this.f5973d = disclaimer;
            this.f5974e = enabledIdClasses;
            this.f5975f = navigationState;
            this.f5976g = selectIdClass;
            this.f5977h = governmentIdStepStyle;
            this.f5978i = selectPage;
            this.f5979j = z10;
            this.f5980k = onBack;
            this.f5981l = onCancel;
            this.f5982m = str;
            this.f5983n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f5978i;
        }

        public final String b() {
            return this.f5972c;
        }

        public final String c() {
            return this.f5973d;
        }

        public final List d() {
            return this.f5974e;
        }

        public final String e() {
            return this.f5982m;
        }

        public final rp.a f() {
            return this.f5975f;
        }

        public final Function0 g() {
            return this.f5980k;
        }

        public final Function0 h() {
            return this.f5981l;
        }

        public final Function0 i() {
            return this.f5983n;
        }

        public final String j() {
            return this.f5971b;
        }

        public final Function1 k() {
            return this.f5976g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f5977h;
        }

        public final String m() {
            return this.f5970a;
        }

        public final boolean n() {
            return this.f5979j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f5984d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0086a();

            /* renamed from: ao.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0086a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f5984d;
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
            public static final b f5985d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f5985d;
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
            private final xp.i4 f5986d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f5987e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((xp.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(xp.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f5986d = customImage;
                this.f5987e = config;
            }

            public final RemoteImage a() {
                return this.f5987e;
            }

            public final xp.i4 b() {
                return this.f5986d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f5986d, i10);
                dest.writeParcelable(this.f5987e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new xp.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: ao.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0087d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0087d f5988d = new C0087d();
            @NotNull
            public static final Parcelable.Creator<C0087d> CREATOR = new a();

            /* renamed from: ao.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0087d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0087d.f5988d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0087d[] newArray(int i10) {
                    return new C0087d[i10];
                }
            }

            private C0087d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0087d)) {
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
            public static final e f5989d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f5989d;
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
            public static final f f5990d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f5990d;
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
        private final v4.h f5991a;

        /* renamed from: b  reason: collision with root package name */
        private final String f5992b;

        /* renamed from: c  reason: collision with root package name */
        private final String f5993c;

        /* renamed from: d  reason: collision with root package name */
        private final d f5994d;

        /* renamed from: e  reason: collision with root package name */
        private final String f5995e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f5996f;

        /* renamed from: g  reason: collision with root package name */
        private final io.e f5997g;

        /* renamed from: h  reason: collision with root package name */
        private final rp.a f5998h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f5999i;

        /* renamed from: j  reason: collision with root package name */
        private final String f6000j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f6001k;

        /* renamed from: l  reason: collision with root package name */
        private final String f6002l;

        /* renamed from: m  reason: collision with root package name */
        private final String f6003m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f6004n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6005o;

        /* renamed from: p  reason: collision with root package name */
        private final String f6006p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f6007q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f6008r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f6009s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f6010t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f6011u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, io.e idClass, rp.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
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
            this.f5991a = imageLoader;
            this.f5992b = message;
            this.f5993c = disclaimer;
            this.f5994d = overlay;
            this.f5995e = imagePath;
            this.f5996f = captureSide;
            this.f5997g = idClass;
            this.f5998h = navigationState;
            this.f5999i = acceptImage;
            this.f6000j = acceptText;
            this.f6001k = retryImage;
            this.f6002l = retryText;
            this.f6003m = confirmCaptureTitle;
            this.f6004n = close;
            this.f6005o = governmentIdStepStyle;
            this.f6006p = str;
            this.f6007q = onErrorDismissed;
            this.f6008r = capturePage;
            this.f6009s = z10;
            this.f6010t = z11;
            this.f6011u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f5999i;
        }

        public final String b() {
            return this.f6000j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f6008r;
        }

        public final c4.e d() {
            return this.f5996f;
        }

        public final Function0 e() {
            return this.f6004n;
        }

        public final String f() {
            return this.f6003m;
        }

        public final String g() {
            return this.f5993c;
        }

        public final String h() {
            return this.f6006p;
        }

        public final io.e i() {
            return this.f5997g;
        }

        public final v4.h j() {
            return this.f5991a;
        }

        public final String k() {
            return this.f5995e;
        }

        public final String l() {
            return this.f5992b;
        }

        public final rp.a m() {
            return this.f5998h;
        }

        public final Function0 n() {
            return this.f6007q;
        }

        public final d o() {
            return this.f5994d;
        }

        public final Function0 p() {
            return this.f6001k;
        }

        public final String q() {
            return this.f6002l;
        }

        public final StyleElements.Axis r() {
            return this.f6011u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f6005o;
        }

        public final boolean t() {
            return this.f6010t;
        }

        public final boolean u() {
            return this.f6009s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f6012a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6013b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6014c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f6015d;

        /* renamed from: e  reason: collision with root package name */
        private final rp.a f6016e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f6017f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f6018g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f6019h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, rp.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f6012a = title;
            this.f6013b = description;
            this.f6014c = governmentIdStepStyle;
            this.f6015d = pendingPage;
            this.f6016e = navigationState;
            this.f6017f = onBack;
            this.f6018g = onCancel;
            this.f6019h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f6015d;
        }

        public final String b() {
            return this.f6013b;
        }

        public final rp.a c() {
            return this.f6016e;
        }

        public final Function0 d() {
            return this.f6017f;
        }

        public final Function0 e() {
            return this.f6018g;
        }

        public final PendingPageTextPosition f() {
            return this.f6019h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f6014c;
        }

        public final String h() {
            return this.f6012a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
