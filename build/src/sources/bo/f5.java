package bo;

import android.os.Parcel;
import android.os.Parcelable;
import bo.c4;
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
import nn.z;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import pn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f6748a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6749b;

        /* renamed from: c  reason: collision with root package name */
        private final yp.c2 f6750c;

        /* renamed from: d  reason: collision with root package name */
        private final yp.c2 f6751d;

        /* renamed from: e  reason: collision with root package name */
        private final String f6752e;

        /* renamed from: f  reason: collision with root package name */
        private final String f6753f;

        /* renamed from: g  reason: collision with root package name */
        private final String f6754g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f6755h;

        /* renamed from: i  reason: collision with root package name */
        private final sp.a f6756i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f6757j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f6758k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f6759l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f6760m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f6761n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, yp.c2 countrySelectComponent, yp.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, sp.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f6748a = str;
            this.f6749b = governmentIdStepStyle;
            this.f6750c = countrySelectComponent;
            this.f6751d = idClassSelectComponent;
            this.f6752e = str2;
            this.f6753f = str3;
            this.f6754g = str4;
            this.f6755h = z10;
            this.f6756i = navigationState;
            this.f6757j = onCountrySelected;
            this.f6758k = onIdClassSelected;
            this.f6759l = onContinueClick;
            this.f6760m = onBackClick;
            this.f6761n = onCancelClick;
        }

        public final String a() {
            return this.f6754g;
        }

        public final String b() {
            return this.f6752e;
        }

        public final yp.c2 c() {
            return this.f6750c;
        }

        public final String d() {
            return this.f6753f;
        }

        public final yp.c2 e() {
            return this.f6751d;
        }

        public final sp.a f() {
            return this.f6756i;
        }

        public final Function0 g() {
            return this.f6760m;
        }

        public final Function0 h() {
            return this.f6761n;
        }

        public final Function0 i() {
            return this.f6759l;
        }

        public final Function1 j() {
            return this.f6757j;
        }

        public final Function1 k() {
            return this.f6758k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f6749b;
        }

        public final String m() {
            return this.f6748a;
        }

        public final boolean n() {
            return this.f6755h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final fo.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f6762a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6763b;

        /* renamed from: c  reason: collision with root package name */
        private final String f6764c;

        /* renamed from: d  reason: collision with root package name */
        private final a f6765d;

        /* renamed from: e  reason: collision with root package name */
        private final d f6766e;

        /* renamed from: f  reason: collision with root package name */
        private final jo.e f6767f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f6768g;

        /* renamed from: h  reason: collision with root package name */
        private final sp.a f6769h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f6770i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f6771j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f6772k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f6773l;

        /* renamed from: m  reason: collision with root package name */
        private final List f6774m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f6775n;

        /* renamed from: o  reason: collision with root package name */
        private final int f6776o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6777p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f6778q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f6779r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f6780s;

        /* renamed from: t  reason: collision with root package name */
        private final int f6781t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f6782u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f6783v;

        /* renamed from: w  reason: collision with root package name */
        private final tn.a f6784w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f6785x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f6786y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f6787z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f6788d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f6789e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f6790i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f6791o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f6792p;

            static {
                a[] a10 = a();
                f6791o = a10;
                f6792p = qr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f6788d, f6789e, f6790i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f6791o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, jo.e idClass, c4.e captureSide, sp.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, tn.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, fo.h hVar, mq.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
            this.f6762a = title;
            this.f6763b = message;
            this.f6764c = disclaimer;
            this.f6765d = captureButtonState;
            this.f6766e = overlay;
            this.f6767f = idClass;
            this.f6768g = captureSide;
            this.f6769h = navigationState;
            this.f6770i = manuallyCapture;
            this.f6771j = close;
            this.f6772k = back;
            this.f6773l = z10;
            this.f6774m = autoCaptureRules;
            this.f6775n = state;
            this.f6776o = i10;
            this.f6777p = governmentIdStepStyle;
            this.f6778q = autoCapture;
            this.f6779r = onCaptureError;
            this.f6780s = onCameraError;
            this.f6781t = i11;
            this.f6782u = manualCaptureClicked;
            this.f6783v = checkPermissions;
            this.f6784w = videoCaptureMethod;
            this.f6785x = z11;
            this.f6786y = onLocalVideoFinalized;
            this.f6787z = z12;
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
            return this.f6766e;
        }

        public final int B() {
            return this.f6781t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f6775n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f6777p;
        }

        public final String F() {
            return this.f6762a;
        }

        public final tn.a G() {
            return this.f6784w;
        }

        public final mq.a H() {
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
            return this.f6778q;
        }

        public final List c() {
            return this.f6774m;
        }

        public final int d() {
            return this.f6776o;
        }

        public final boolean e() {
            return this.f6773l;
        }

        public final Function0 f() {
            return this.f6772k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f6765d;
        }

        public final c4.e j() {
            return this.f6768g;
        }

        public final fo.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f6783v;
        }

        public final Function0 m() {
            return this.f6771j;
        }

        public final String n() {
            return this.f6764c;
        }

        public final boolean o() {
            return this.f6787z;
        }

        public final boolean p() {
            return this.f6785x;
        }

        public final String q() {
            return this.C;
        }

        public final jo.e r() {
            return this.f6767f;
        }

        public final Function0 s() {
            return this.f6782u;
        }

        public final Function2 t() {
            return this.f6770i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f6763b;
        }

        public final sp.a w() {
            return this.f6769h;
        }

        public final Function1 x() {
            return this.f6780s;
        }

        public final Function1 y() {
            return this.f6779r;
        }

        public final Function2 z() {
            return this.f6786y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f6793a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6794b;

        /* renamed from: c  reason: collision with root package name */
        private final String f6795c;

        /* renamed from: d  reason: collision with root package name */
        private final String f6796d;

        /* renamed from: e  reason: collision with root package name */
        private final List f6797e;

        /* renamed from: f  reason: collision with root package name */
        private final sp.a f6798f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f6799g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6800h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f6801i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f6802j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f6803k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f6804l;

        /* renamed from: m  reason: collision with root package name */
        private final String f6805m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f6806n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, sp.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
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
            this.f6793a = title;
            this.f6794b = prompt;
            this.f6795c = chooseText;
            this.f6796d = disclaimer;
            this.f6797e = enabledIdClasses;
            this.f6798f = navigationState;
            this.f6799g = selectIdClass;
            this.f6800h = governmentIdStepStyle;
            this.f6801i = selectPage;
            this.f6802j = z10;
            this.f6803k = onBack;
            this.f6804l = onCancel;
            this.f6805m = str;
            this.f6806n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f6801i;
        }

        public final String b() {
            return this.f6795c;
        }

        public final String c() {
            return this.f6796d;
        }

        public final List d() {
            return this.f6797e;
        }

        public final String e() {
            return this.f6805m;
        }

        public final sp.a f() {
            return this.f6798f;
        }

        public final Function0 g() {
            return this.f6803k;
        }

        public final Function0 h() {
            return this.f6804l;
        }

        public final Function0 i() {
            return this.f6806n;
        }

        public final String j() {
            return this.f6794b;
        }

        public final Function1 k() {
            return this.f6799g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f6800h;
        }

        public final String m() {
            return this.f6793a;
        }

        public final boolean n() {
            return this.f6802j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f6807d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0120a();

            /* renamed from: bo.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0120a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f6807d;
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
            public static final b f6808d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f6808d;
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
            private final yp.i4 f6809d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f6810e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((yp.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(yp.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f6809d = customImage;
                this.f6810e = config;
            }

            public final RemoteImage a() {
                return this.f6810e;
            }

            public final yp.i4 b() {
                return this.f6809d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f6809d, i10);
                dest.writeParcelable(this.f6810e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new yp.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: bo.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0121d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0121d f6811d = new C0121d();
            @NotNull
            public static final Parcelable.Creator<C0121d> CREATOR = new a();

            /* renamed from: bo.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0121d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0121d.f6811d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0121d[] newArray(int i10) {
                    return new C0121d[i10];
                }
            }

            private C0121d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0121d)) {
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
            public static final e f6812d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f6812d;
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
            public static final f f6813d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f6813d;
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
        private final v4.h f6814a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6815b;

        /* renamed from: c  reason: collision with root package name */
        private final String f6816c;

        /* renamed from: d  reason: collision with root package name */
        private final d f6817d;

        /* renamed from: e  reason: collision with root package name */
        private final String f6818e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f6819f;

        /* renamed from: g  reason: collision with root package name */
        private final jo.e f6820g;

        /* renamed from: h  reason: collision with root package name */
        private final sp.a f6821h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f6822i;

        /* renamed from: j  reason: collision with root package name */
        private final String f6823j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f6824k;

        /* renamed from: l  reason: collision with root package name */
        private final String f6825l;

        /* renamed from: m  reason: collision with root package name */
        private final String f6826m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f6827n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6828o;

        /* renamed from: p  reason: collision with root package name */
        private final String f6829p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f6830q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f6831r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f6832s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f6833t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f6834u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, jo.e idClass, sp.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
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
            this.f6814a = imageLoader;
            this.f6815b = message;
            this.f6816c = disclaimer;
            this.f6817d = overlay;
            this.f6818e = imagePath;
            this.f6819f = captureSide;
            this.f6820g = idClass;
            this.f6821h = navigationState;
            this.f6822i = acceptImage;
            this.f6823j = acceptText;
            this.f6824k = retryImage;
            this.f6825l = retryText;
            this.f6826m = confirmCaptureTitle;
            this.f6827n = close;
            this.f6828o = governmentIdStepStyle;
            this.f6829p = str;
            this.f6830q = onErrorDismissed;
            this.f6831r = capturePage;
            this.f6832s = z10;
            this.f6833t = z11;
            this.f6834u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f6822i;
        }

        public final String b() {
            return this.f6823j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f6831r;
        }

        public final c4.e d() {
            return this.f6819f;
        }

        public final Function0 e() {
            return this.f6827n;
        }

        public final String f() {
            return this.f6826m;
        }

        public final String g() {
            return this.f6816c;
        }

        public final String h() {
            return this.f6829p;
        }

        public final jo.e i() {
            return this.f6820g;
        }

        public final v4.h j() {
            return this.f6814a;
        }

        public final String k() {
            return this.f6818e;
        }

        public final String l() {
            return this.f6815b;
        }

        public final sp.a m() {
            return this.f6821h;
        }

        public final Function0 n() {
            return this.f6830q;
        }

        public final d o() {
            return this.f6817d;
        }

        public final Function0 p() {
            return this.f6824k;
        }

        public final String q() {
            return this.f6825l;
        }

        public final StyleElements.Axis r() {
            return this.f6834u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f6828o;
        }

        public final boolean t() {
            return this.f6833t;
        }

        public final boolean u() {
            return this.f6832s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f6835a;

        /* renamed from: b  reason: collision with root package name */
        private final String f6836b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f6837c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f6838d;

        /* renamed from: e  reason: collision with root package name */
        private final sp.a f6839e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f6840f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f6841g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f6842h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, sp.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f6835a = title;
            this.f6836b = description;
            this.f6837c = governmentIdStepStyle;
            this.f6838d = pendingPage;
            this.f6839e = navigationState;
            this.f6840f = onBack;
            this.f6841g = onCancel;
            this.f6842h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f6838d;
        }

        public final String b() {
            return this.f6836b;
        }

        public final sp.a c() {
            return this.f6839e;
        }

        public final Function0 d() {
            return this.f6840f;
        }

        public final Function0 e() {
            return this.f6841g;
        }

        public final PendingPageTextPosition f() {
            return this.f6842h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f6837c;
        }

        public final String h() {
            return this.f6835a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
