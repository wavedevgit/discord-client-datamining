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
        private final String f49103a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49104b;

        /* renamed from: c  reason: collision with root package name */
        private final pq.c2 f49105c;

        /* renamed from: d  reason: collision with root package name */
        private final pq.c2 f49106d;

        /* renamed from: e  reason: collision with root package name */
        private final String f49107e;

        /* renamed from: f  reason: collision with root package name */
        private final String f49108f;

        /* renamed from: g  reason: collision with root package name */
        private final String f49109g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f49110h;

        /* renamed from: i  reason: collision with root package name */
        private final jq.a f49111i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f49112j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f49113k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f49114l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f49115m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f49116n;

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
            this.f49103a = str;
            this.f49104b = governmentIdStepStyle;
            this.f49105c = countrySelectComponent;
            this.f49106d = idClassSelectComponent;
            this.f49107e = str2;
            this.f49108f = str3;
            this.f49109g = str4;
            this.f49110h = z10;
            this.f49111i = navigationState;
            this.f49112j = onCountrySelected;
            this.f49113k = onIdClassSelected;
            this.f49114l = onContinueClick;
            this.f49115m = onBackClick;
            this.f49116n = onCancelClick;
        }

        public final String a() {
            return this.f49109g;
        }

        public final String b() {
            return this.f49107e;
        }

        public final pq.c2 c() {
            return this.f49105c;
        }

        public final String d() {
            return this.f49108f;
        }

        public final pq.c2 e() {
            return this.f49106d;
        }

        public final jq.a f() {
            return this.f49111i;
        }

        public final Function0 g() {
            return this.f49115m;
        }

        public final Function0 h() {
            return this.f49116n;
        }

        public final Function0 i() {
            return this.f49114l;
        }

        public final Function1 j() {
            return this.f49112j;
        }

        public final Function1 k() {
            return this.f49113k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f49104b;
        }

        public final String m() {
            return this.f49103a;
        }

        public final boolean n() {
            return this.f49110h;
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
        private final String f49117a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49118b;

        /* renamed from: c  reason: collision with root package name */
        private final String f49119c;

        /* renamed from: d  reason: collision with root package name */
        private final a f49120d;

        /* renamed from: e  reason: collision with root package name */
        private final d f49121e;

        /* renamed from: f  reason: collision with root package name */
        private final ap.e f49122f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f49123g;

        /* renamed from: h  reason: collision with root package name */
        private final jq.a f49124h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f49125i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f49126j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f49127k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f49128l;

        /* renamed from: m  reason: collision with root package name */
        private final List f49129m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f49130n;

        /* renamed from: o  reason: collision with root package name */
        private final int f49131o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49132p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f49133q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f49134r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f49135s;

        /* renamed from: t  reason: collision with root package name */
        private final int f49136t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f49137u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f49138v;

        /* renamed from: w  reason: collision with root package name */
        private final lo.a f49139w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f49140x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f49141y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f49142z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f49143d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f49144e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f49145i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f49146o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f49147p;

            static {
                a[] a10 = a();
                f49146o = a10;
                f49147p = hs.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f49143d, f49144e, f49145i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f49146o.clone();
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
            this.f49117a = title;
            this.f49118b = message;
            this.f49119c = disclaimer;
            this.f49120d = captureButtonState;
            this.f49121e = overlay;
            this.f49122f = idClass;
            this.f49123g = captureSide;
            this.f49124h = navigationState;
            this.f49125i = manuallyCapture;
            this.f49126j = close;
            this.f49127k = back;
            this.f49128l = z10;
            this.f49129m = autoCaptureRules;
            this.f49130n = state;
            this.f49131o = i10;
            this.f49132p = governmentIdStepStyle;
            this.f49133q = autoCapture;
            this.f49134r = onCaptureError;
            this.f49135s = onCameraError;
            this.f49136t = i11;
            this.f49137u = manualCaptureClicked;
            this.f49138v = checkPermissions;
            this.f49139w = videoCaptureMethod;
            this.f49140x = z11;
            this.f49141y = onLocalVideoFinalized;
            this.f49142z = z12;
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
            return this.f49121e;
        }

        public final int B() {
            return this.f49136t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f49130n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f49132p;
        }

        public final String F() {
            return this.f49117a;
        }

        public final lo.a G() {
            return this.f49139w;
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
            return this.f49133q;
        }

        public final List c() {
            return this.f49129m;
        }

        public final int d() {
            return this.f49131o;
        }

        public final boolean e() {
            return this.f49128l;
        }

        public final Function0 f() {
            return this.f49127k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f49120d;
        }

        public final c4.e j() {
            return this.f49123g;
        }

        public final wo.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f49138v;
        }

        public final Function0 m() {
            return this.f49126j;
        }

        public final String n() {
            return this.f49119c;
        }

        public final boolean o() {
            return this.f49142z;
        }

        public final boolean p() {
            return this.f49140x;
        }

        public final String q() {
            return this.C;
        }

        public final ap.e r() {
            return this.f49122f;
        }

        public final Function0 s() {
            return this.f49137u;
        }

        public final Function2 t() {
            return this.f49125i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f49118b;
        }

        public final jq.a w() {
            return this.f49124h;
        }

        public final Function1 x() {
            return this.f49135s;
        }

        public final Function1 y() {
            return this.f49134r;
        }

        public final Function2 z() {
            return this.f49141y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f49148a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49149b;

        /* renamed from: c  reason: collision with root package name */
        private final String f49150c;

        /* renamed from: d  reason: collision with root package name */
        private final String f49151d;

        /* renamed from: e  reason: collision with root package name */
        private final List f49152e;

        /* renamed from: f  reason: collision with root package name */
        private final jq.a f49153f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f49154g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49155h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f49156i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f49157j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f49158k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f49159l;

        /* renamed from: m  reason: collision with root package name */
        private final String f49160m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f49161n;

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
            this.f49148a = title;
            this.f49149b = prompt;
            this.f49150c = chooseText;
            this.f49151d = disclaimer;
            this.f49152e = enabledIdClasses;
            this.f49153f = navigationState;
            this.f49154g = selectIdClass;
            this.f49155h = governmentIdStepStyle;
            this.f49156i = selectPage;
            this.f49157j = z10;
            this.f49158k = onBack;
            this.f49159l = onCancel;
            this.f49160m = str;
            this.f49161n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f49156i;
        }

        public final String b() {
            return this.f49150c;
        }

        public final String c() {
            return this.f49151d;
        }

        public final List d() {
            return this.f49152e;
        }

        public final String e() {
            return this.f49160m;
        }

        public final jq.a f() {
            return this.f49153f;
        }

        public final Function0 g() {
            return this.f49158k;
        }

        public final Function0 h() {
            return this.f49159l;
        }

        public final Function0 i() {
            return this.f49161n;
        }

        public final String j() {
            return this.f49149b;
        }

        public final Function1 k() {
            return this.f49154g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f49155h;
        }

        public final String m() {
            return this.f49148a;
        }

        public final boolean n() {
            return this.f49157j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f49162d = new a();
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
                    return a.f49162d;
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
            public static final b f49163d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f49163d;
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
            private final pq.i4 f49164d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f49165e;

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
                this.f49164d = customImage;
                this.f49165e = config;
            }

            public final RemoteImage a() {
                return this.f49165e;
            }

            public final pq.i4 b() {
                return this.f49164d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f49164d, i10);
                dest.writeParcelable(this.f49165e, i10);
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
            public static final C0670d f49166d = new C0670d();
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
                    return C0670d.f49166d;
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
            public static final e f49167d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f49167d;
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
            public static final f f49168d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f49168d;
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
        private final v4.h f49169a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49170b;

        /* renamed from: c  reason: collision with root package name */
        private final String f49171c;

        /* renamed from: d  reason: collision with root package name */
        private final d f49172d;

        /* renamed from: e  reason: collision with root package name */
        private final String f49173e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f49174f;

        /* renamed from: g  reason: collision with root package name */
        private final ap.e f49175g;

        /* renamed from: h  reason: collision with root package name */
        private final jq.a f49176h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f49177i;

        /* renamed from: j  reason: collision with root package name */
        private final String f49178j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f49179k;

        /* renamed from: l  reason: collision with root package name */
        private final String f49180l;

        /* renamed from: m  reason: collision with root package name */
        private final String f49181m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f49182n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49183o;

        /* renamed from: p  reason: collision with root package name */
        private final String f49184p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f49185q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f49186r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f49187s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f49188t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f49189u;

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
            this.f49169a = imageLoader;
            this.f49170b = message;
            this.f49171c = disclaimer;
            this.f49172d = overlay;
            this.f49173e = imagePath;
            this.f49174f = captureSide;
            this.f49175g = idClass;
            this.f49176h = navigationState;
            this.f49177i = acceptImage;
            this.f49178j = acceptText;
            this.f49179k = retryImage;
            this.f49180l = retryText;
            this.f49181m = confirmCaptureTitle;
            this.f49182n = close;
            this.f49183o = governmentIdStepStyle;
            this.f49184p = str;
            this.f49185q = onErrorDismissed;
            this.f49186r = capturePage;
            this.f49187s = z10;
            this.f49188t = z11;
            this.f49189u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f49177i;
        }

        public final String b() {
            return this.f49178j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f49186r;
        }

        public final c4.e d() {
            return this.f49174f;
        }

        public final Function0 e() {
            return this.f49182n;
        }

        public final String f() {
            return this.f49181m;
        }

        public final String g() {
            return this.f49171c;
        }

        public final String h() {
            return this.f49184p;
        }

        public final ap.e i() {
            return this.f49175g;
        }

        public final v4.h j() {
            return this.f49169a;
        }

        public final String k() {
            return this.f49173e;
        }

        public final String l() {
            return this.f49170b;
        }

        public final jq.a m() {
            return this.f49176h;
        }

        public final Function0 n() {
            return this.f49185q;
        }

        public final d o() {
            return this.f49172d;
        }

        public final Function0 p() {
            return this.f49179k;
        }

        public final String q() {
            return this.f49180l;
        }

        public final StyleElements.Axis r() {
            return this.f49189u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f49183o;
        }

        public final boolean t() {
            return this.f49188t;
        }

        public final boolean u() {
            return this.f49187s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f49190a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49191b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f49192c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f49193d;

        /* renamed from: e  reason: collision with root package name */
        private final jq.a f49194e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f49195f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f49196g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f49197h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, jq.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f49190a = title;
            this.f49191b = description;
            this.f49192c = governmentIdStepStyle;
            this.f49193d = pendingPage;
            this.f49194e = navigationState;
            this.f49195f = onBack;
            this.f49196g = onCancel;
            this.f49197h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f49193d;
        }

        public final String b() {
            return this.f49191b;
        }

        public final jq.a c() {
            return this.f49194e;
        }

        public final Function0 d() {
            return this.f49195f;
        }

        public final Function0 e() {
            return this.f49196g;
        }

        public final PendingPageTextPosition f() {
            return this.f49197h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f49192c;
        }

        public final String h() {
            return this.f49190a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
