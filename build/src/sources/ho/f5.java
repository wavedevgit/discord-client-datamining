package ho;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import ho.c4;
import java.util.List;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnectionFactory;
import sn.z;
import un.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f5 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f26115a;

        /* renamed from: b  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f26116b;

        /* renamed from: c  reason: collision with root package name */
        private final dq.c2 f26117c;

        /* renamed from: d  reason: collision with root package name */
        private final dq.c2 f26118d;

        /* renamed from: e  reason: collision with root package name */
        private final String f26119e;

        /* renamed from: f  reason: collision with root package name */
        private final String f26120f;

        /* renamed from: g  reason: collision with root package name */
        private final String f26121g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f26122h;

        /* renamed from: i  reason: collision with root package name */
        private final xp.a f26123i;

        /* renamed from: j  reason: collision with root package name */
        private final Function1 f26124j;

        /* renamed from: k  reason: collision with root package name */
        private final Function1 f26125k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f26126l;

        /* renamed from: m  reason: collision with root package name */
        private final Function0 f26127m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f26128n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String str, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, dq.c2 countrySelectComponent, dq.c2 idClassSelectComponent, String str2, String str3, String str4, boolean z10, xp.a navigationState, Function1 onCountrySelected, Function1 onIdClassSelected, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
            super(null);
            Intrinsics.checkNotNullParameter(countrySelectComponent, "countrySelectComponent");
            Intrinsics.checkNotNullParameter(idClassSelectComponent, "idClassSelectComponent");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onCountrySelected, "onCountrySelected");
            Intrinsics.checkNotNullParameter(onIdClassSelected, "onIdClassSelected");
            Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
            Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
            Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
            this.f26115a = str;
            this.f26116b = governmentIdStepStyle;
            this.f26117c = countrySelectComponent;
            this.f26118d = idClassSelectComponent;
            this.f26119e = str2;
            this.f26120f = str3;
            this.f26121g = str4;
            this.f26122h = z10;
            this.f26123i = navigationState;
            this.f26124j = onCountrySelected;
            this.f26125k = onIdClassSelected;
            this.f26126l = onContinueClick;
            this.f26127m = onBackClick;
            this.f26128n = onCancelClick;
        }

        public final String a() {
            return this.f26121g;
        }

        public final String b() {
            return this.f26119e;
        }

        public final dq.c2 c() {
            return this.f26117c;
        }

        public final String d() {
            return this.f26120f;
        }

        public final dq.c2 e() {
            return this.f26118d;
        }

        public final xp.a f() {
            return this.f26123i;
        }

        public final Function0 g() {
            return this.f26127m;
        }

        public final Function0 h() {
            return this.f26128n;
        }

        public final Function0 i() {
            return this.f26126l;
        }

        public final Function1 j() {
            return this.f26124j;
        }

        public final Function1 k() {
            return this.f26125k;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f26116b;
        }

        public final String m() {
            return this.f26115a;
        }

        public final boolean n() {
            return this.f26122h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends f5 {
        private final long A;
        private final boolean B;
        private final String C;
        private final ko.h D;
        private final NextStep.GovernmentId.AssetConfig.CapturePage E;
        private final boolean F;
        private final boolean G;
        private final z.a H;
        private final g.a I;

        /* renamed from: a  reason: collision with root package name */
        private final String f26129a;

        /* renamed from: b  reason: collision with root package name */
        private final String f26130b;

        /* renamed from: c  reason: collision with root package name */
        private final String f26131c;

        /* renamed from: d  reason: collision with root package name */
        private final a f26132d;

        /* renamed from: e  reason: collision with root package name */
        private final d f26133e;

        /* renamed from: f  reason: collision with root package name */
        private final oo.e f26134f;

        /* renamed from: g  reason: collision with root package name */
        private final c4.e f26135g;

        /* renamed from: h  reason: collision with root package name */
        private final xp.a f26136h;

        /* renamed from: i  reason: collision with root package name */
        private final Function2 f26137i;

        /* renamed from: j  reason: collision with root package name */
        private final Function0 f26138j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f26139k;

        /* renamed from: l  reason: collision with root package name */
        private final boolean f26140l;

        /* renamed from: m  reason: collision with root package name */
        private final List f26141m;

        /* renamed from: n  reason: collision with root package name */
        private final n1 f26142n;

        /* renamed from: o  reason: collision with root package name */
        private final int f26143o;

        /* renamed from: p  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f26144p;

        /* renamed from: q  reason: collision with root package name */
        private final Function2 f26145q;

        /* renamed from: r  reason: collision with root package name */
        private final Function1 f26146r;

        /* renamed from: s  reason: collision with root package name */
        private final Function1 f26147s;

        /* renamed from: t  reason: collision with root package name */
        private final int f26148t;

        /* renamed from: u  reason: collision with root package name */
        private final Function0 f26149u;

        /* renamed from: v  reason: collision with root package name */
        private final Function0 f26150v;

        /* renamed from: w  reason: collision with root package name */
        private final yn.a f26151w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f26152x;

        /* renamed from: y  reason: collision with root package name */
        private final Function2 f26153y;

        /* renamed from: z  reason: collision with root package name */
        private final boolean f26154z;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f26155d = new a("Disabled", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f26156e = new a(PeerConnectionFactory.TRIAL_ENABLED, 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f26157i = new a("Hidden", 2);

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ a[] f26158o;

            /* renamed from: p  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f26159p;

            static {
                a[] a10 = a();
                f26158o = a10;
                f26159p = vr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f26155d, f26156e, f26157i};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f26158o.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String title, String message, String disclaimer, a captureButtonState, d overlay, oo.e idClass, c4.e captureSide, xp.a navigationState, Function2 manuallyCapture, Function0 close, Function0 back, boolean z10, List autoCaptureRules, n1 state, int i10, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, Function2 autoCapture, Function1 onCaptureError, Function1 onCameraError, int i11, Function0 manualCaptureClicked, Function0 checkPermissions, yn.a videoCaptureMethod, boolean z11, Function2 onLocalVideoFinalized, boolean z12, long j10, boolean z13, String str, ko.h hVar, rq.a aVar, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z14, boolean z15, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory) {
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
            this.f26129a = title;
            this.f26130b = message;
            this.f26131c = disclaimer;
            this.f26132d = captureButtonState;
            this.f26133e = overlay;
            this.f26134f = idClass;
            this.f26135g = captureSide;
            this.f26136h = navigationState;
            this.f26137i = manuallyCapture;
            this.f26138j = close;
            this.f26139k = back;
            this.f26140l = z10;
            this.f26141m = autoCaptureRules;
            this.f26142n = state;
            this.f26143o = i10;
            this.f26144p = governmentIdStepStyle;
            this.f26145q = autoCapture;
            this.f26146r = onCaptureError;
            this.f26147s = onCameraError;
            this.f26148t = i11;
            this.f26149u = manualCaptureClicked;
            this.f26150v = checkPermissions;
            this.f26151w = videoCaptureMethod;
            this.f26152x = z11;
            this.f26153y = onLocalVideoFinalized;
            this.f26154z = z12;
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
            return this.f26133e;
        }

        public final int B() {
            return this.f26148t;
        }

        public final boolean C() {
            return this.B;
        }

        public final n1 D() {
            return this.f26142n;
        }

        public final StepStyles.GovernmentIdStepStyle E() {
            return this.f26144p;
        }

        public final String F() {
            return this.f26129a;
        }

        public final yn.a G() {
            return this.f26151w;
        }

        public final rq.a H() {
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
            return this.f26145q;
        }

        public final List c() {
            return this.f26141m;
        }

        public final int d() {
            return this.f26143o;
        }

        public final boolean e() {
            return this.f26140l;
        }

        public final Function0 f() {
            return this.f26139k;
        }

        public final g.a g() {
            return this.I;
        }

        public final z.a h() {
            return this.H;
        }

        public final a i() {
            return this.f26132d;
        }

        public final c4.e j() {
            return this.f26135g;
        }

        public final ko.h k() {
            return this.D;
        }

        public final Function0 l() {
            return this.f26150v;
        }

        public final Function0 m() {
            return this.f26138j;
        }

        public final String n() {
            return this.f26131c;
        }

        public final boolean o() {
            return this.f26154z;
        }

        public final boolean p() {
            return this.f26152x;
        }

        public final String q() {
            return this.C;
        }

        public final oo.e r() {
            return this.f26134f;
        }

        public final Function0 s() {
            return this.f26149u;
        }

        public final Function2 t() {
            return this.f26137i;
        }

        public final long u() {
            return this.A;
        }

        public final String v() {
            return this.f26130b;
        }

        public final xp.a w() {
            return this.f26136h;
        }

        public final Function1 x() {
            return this.f26147s;
        }

        public final Function1 y() {
            return this.f26146r;
        }

        public final Function2 z() {
            return this.f26153y;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f26160a;

        /* renamed from: b  reason: collision with root package name */
        private final String f26161b;

        /* renamed from: c  reason: collision with root package name */
        private final String f26162c;

        /* renamed from: d  reason: collision with root package name */
        private final String f26163d;

        /* renamed from: e  reason: collision with root package name */
        private final List f26164e;

        /* renamed from: f  reason: collision with root package name */
        private final xp.a f26165f;

        /* renamed from: g  reason: collision with root package name */
        private final Function1 f26166g;

        /* renamed from: h  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f26167h;

        /* renamed from: i  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.SelectPage f26168i;

        /* renamed from: j  reason: collision with root package name */
        private final boolean f26169j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f26170k;

        /* renamed from: l  reason: collision with root package name */
        private final Function0 f26171l;

        /* renamed from: m  reason: collision with root package name */
        private final String f26172m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f26173n;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String title, String prompt, String chooseText, String disclaimer, List enabledIdClasses, xp.a navigationState, Function1 selectIdClass, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, boolean z10, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed) {
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
            this.f26160a = title;
            this.f26161b = prompt;
            this.f26162c = chooseText;
            this.f26163d = disclaimer;
            this.f26164e = enabledIdClasses;
            this.f26165f = navigationState;
            this.f26166g = selectIdClass;
            this.f26167h = governmentIdStepStyle;
            this.f26168i = selectPage;
            this.f26169j = z10;
            this.f26170k = onBack;
            this.f26171l = onCancel;
            this.f26172m = str;
            this.f26173n = onErrorDismissed;
        }

        public final NextStep.GovernmentId.AssetConfig.SelectPage a() {
            return this.f26168i;
        }

        public final String b() {
            return this.f26162c;
        }

        public final String c() {
            return this.f26163d;
        }

        public final List d() {
            return this.f26164e;
        }

        public final String e() {
            return this.f26172m;
        }

        public final xp.a f() {
            return this.f26165f;
        }

        public final Function0 g() {
            return this.f26170k;
        }

        public final Function0 h() {
            return this.f26171l;
        }

        public final Function0 i() {
            return this.f26173n;
        }

        public final String j() {
            return this.f26161b;
        }

        public final Function1 k() {
            return this.f26166g;
        }

        public final StepStyles.GovernmentIdStepStyle l() {
            return this.f26167h;
        }

        public final String m() {
            return this.f26160a;
        }

        public final boolean n() {
            return this.f26169j;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final a f26174d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0358a();

            /* renamed from: ho.f5$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0358a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f26174d;
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
            public static final b f26175d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f26175d;
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
            private final dq.i4 f26176d;

            /* renamed from: e  reason: collision with root package name */
            private final RemoteImage f26177e;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((dq.i4) parcel.readParcelable(c.class.getClassLoader()), (RemoteImage) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(dq.i4 customImage, RemoteImage config) {
                super(null);
                Intrinsics.checkNotNullParameter(customImage, "customImage");
                Intrinsics.checkNotNullParameter(config, "config");
                this.f26176d = customImage;
                this.f26177e = config;
            }

            public final RemoteImage a() {
                return this.f26177e;
            }

            public final dq.i4 b() {
                return this.f26176d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f26176d, i10);
                dest.writeParcelable(this.f26177e, i10);
            }

            /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
            public c(RemoteImage config) {
                this(new dq.i4(config), config);
                Intrinsics.checkNotNullParameter(config, "config");
            }
        }

        /* renamed from: ho.f5$d$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0359d extends d {

            /* renamed from: d  reason: collision with root package name */
            public static final C0359d f26178d = new C0359d();
            @NotNull
            public static final Parcelable.Creator<C0359d> CREATOR = new a();

            /* renamed from: ho.f5$d$d$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0359d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0359d.f26178d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0359d[] newArray(int i10) {
                    return new C0359d[i10];
                }
            }

            private C0359d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0359d)) {
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
            public static final e f26179d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f26179d;
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
            public static final f f26180d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f26180d;
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
        private final v4.h f26181a;

        /* renamed from: b  reason: collision with root package name */
        private final String f26182b;

        /* renamed from: c  reason: collision with root package name */
        private final String f26183c;

        /* renamed from: d  reason: collision with root package name */
        private final d f26184d;

        /* renamed from: e  reason: collision with root package name */
        private final String f26185e;

        /* renamed from: f  reason: collision with root package name */
        private final c4.e f26186f;

        /* renamed from: g  reason: collision with root package name */
        private final oo.e f26187g;

        /* renamed from: h  reason: collision with root package name */
        private final xp.a f26188h;

        /* renamed from: i  reason: collision with root package name */
        private final Function0 f26189i;

        /* renamed from: j  reason: collision with root package name */
        private final String f26190j;

        /* renamed from: k  reason: collision with root package name */
        private final Function0 f26191k;

        /* renamed from: l  reason: collision with root package name */
        private final String f26192l;

        /* renamed from: m  reason: collision with root package name */
        private final String f26193m;

        /* renamed from: n  reason: collision with root package name */
        private final Function0 f26194n;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f26195o;

        /* renamed from: p  reason: collision with root package name */
        private final String f26196p;

        /* renamed from: q  reason: collision with root package name */
        private final Function0 f26197q;

        /* renamed from: r  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.CapturePage f26198r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f26199s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f26200t;

        /* renamed from: u  reason: collision with root package name */
        private final StyleElements.Axis f26201u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(v4.h imageLoader, String message, String disclaimer, d overlay, String imagePath, c4.e captureSide, oo.e idClass, xp.a navigationState, Function0 acceptImage, String acceptText, Function0 retryImage, String retryText, String confirmCaptureTitle, Function0 close, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, String str, Function0 onErrorDismissed, NextStep.GovernmentId.AssetConfig.CapturePage capturePage, boolean z10, boolean z11, StyleElements.Axis reviewCaptureButtonsAxis) {
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
            this.f26181a = imageLoader;
            this.f26182b = message;
            this.f26183c = disclaimer;
            this.f26184d = overlay;
            this.f26185e = imagePath;
            this.f26186f = captureSide;
            this.f26187g = idClass;
            this.f26188h = navigationState;
            this.f26189i = acceptImage;
            this.f26190j = acceptText;
            this.f26191k = retryImage;
            this.f26192l = retryText;
            this.f26193m = confirmCaptureTitle;
            this.f26194n = close;
            this.f26195o = governmentIdStepStyle;
            this.f26196p = str;
            this.f26197q = onErrorDismissed;
            this.f26198r = capturePage;
            this.f26199s = z10;
            this.f26200t = z11;
            this.f26201u = reviewCaptureButtonsAxis;
        }

        public final Function0 a() {
            return this.f26189i;
        }

        public final String b() {
            return this.f26190j;
        }

        public final NextStep.GovernmentId.AssetConfig.CapturePage c() {
            return this.f26198r;
        }

        public final c4.e d() {
            return this.f26186f;
        }

        public final Function0 e() {
            return this.f26194n;
        }

        public final String f() {
            return this.f26193m;
        }

        public final String g() {
            return this.f26183c;
        }

        public final String h() {
            return this.f26196p;
        }

        public final oo.e i() {
            return this.f26187g;
        }

        public final v4.h j() {
            return this.f26181a;
        }

        public final String k() {
            return this.f26185e;
        }

        public final String l() {
            return this.f26182b;
        }

        public final xp.a m() {
            return this.f26188h;
        }

        public final Function0 n() {
            return this.f26197q;
        }

        public final d o() {
            return this.f26184d;
        }

        public final Function0 p() {
            return this.f26191k;
        }

        public final String q() {
            return this.f26192l;
        }

        public final StyleElements.Axis r() {
            return this.f26201u;
        }

        public final StepStyles.GovernmentIdStepStyle s() {
            return this.f26195o;
        }

        public final boolean t() {
            return this.f26200t;
        }

        public final boolean u() {
            return this.f26199s;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends f5 {

        /* renamed from: a  reason: collision with root package name */
        private final String f26202a;

        /* renamed from: b  reason: collision with root package name */
        private final String f26203b;

        /* renamed from: c  reason: collision with root package name */
        private final StepStyles.GovernmentIdStepStyle f26204c;

        /* renamed from: d  reason: collision with root package name */
        private final NextStep.GovernmentId.AssetConfig.PendingPage f26205d;

        /* renamed from: e  reason: collision with root package name */
        private final xp.a f26206e;

        /* renamed from: f  reason: collision with root package name */
        private final Function0 f26207f;

        /* renamed from: g  reason: collision with root package name */
        private final Function0 f26208g;

        /* renamed from: h  reason: collision with root package name */
        private final PendingPageTextPosition f26209h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String title, String description, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.PendingPage pendingPage, xp.a navigationState, Function0 onBack, Function0 onCancel, PendingPageTextPosition pendingPageTextVerticalPosition) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(description, "description");
            Intrinsics.checkNotNullParameter(navigationState, "navigationState");
            Intrinsics.checkNotNullParameter(onBack, "onBack");
            Intrinsics.checkNotNullParameter(onCancel, "onCancel");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f26202a = title;
            this.f26203b = description;
            this.f26204c = governmentIdStepStyle;
            this.f26205d = pendingPage;
            this.f26206e = navigationState;
            this.f26207f = onBack;
            this.f26208g = onCancel;
            this.f26209h = pendingPageTextVerticalPosition;
        }

        public final NextStep.GovernmentId.AssetConfig.PendingPage a() {
            return this.f26205d;
        }

        public final String b() {
            return this.f26203b;
        }

        public final xp.a c() {
            return this.f26206e;
        }

        public final Function0 d() {
            return this.f26207f;
        }

        public final Function0 e() {
            return this.f26208g;
        }

        public final PendingPageTextPosition f() {
            return this.f26209h;
        }

        public final StepStyles.GovernmentIdStepStyle g() {
            return this.f26204c;
        }

        public final String h() {
            return this.f26202a;
        }
    }

    public /* synthetic */ f5(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private f5() {
    }
}
