package zo;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.coroutines.CoroutineScope;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
import tm.a;
import tm.k;
import tm.r;
import zo.c1;
import zo.e0;
import zo.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 extends tm.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f55860a;

    /* renamed from: b  reason: collision with root package name */
    private final e0.a f55861b;

    /* renamed from: c  reason: collision with root package name */
    private final x f55862c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final h1 f55863a;

        public a(h1 permissionState) {
            Intrinsics.checkNotNullParameter(permissionState, "permissionState");
            this.f55863a = permissionState;
        }

        public final h1 a() {
            return this.f55863a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f55863a, ((a) obj).f55863a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f55863a.hashCode();
        }

        public String toString() {
            h1 h1Var = this.f55863a;
            return "Output(permissionState=" + h1Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final a f55864d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0785a();

            /* renamed from: zo.c1$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0785a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f55864d;
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
                return -367421189;
            }

            public String toString() {
                return "CheckPermissionPermanentlyDenied";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* renamed from: zo.c1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0786b extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final C0786b f55865d = new C0786b();
            @NotNull
            public static final Parcelable.Creator<C0786b> CREATOR = new a();

            /* renamed from: zo.c1$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0786b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0786b.f55865d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0786b[] newArray(int i10) {
                    return new C0786b[i10];
                }
            }

            private C0786b() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0786b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1860465355;
            }

            public String toString() {
                return "CheckPermissionRationaleState";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final c f55866d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f55866d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            private c() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -885686570;
            }

            public String toString() {
                return "CheckPermissionState";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final d f55867d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f55867d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            private d() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1563807797;
            }

            public String toString() {
                return "Complete";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final e f55868d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f55868d;
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
                return -1821218195;
            }

            public String toString() {
                return "RequestDeviceFeature";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final f f55869d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f55869d;
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
                return -2052298174;
            }

            public String toString() {
                return "RequestPermission";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final g f55870d = new g();
            @NotNull
            public static final Parcelable.Creator<g> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final g createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return g.f55870d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final g[] newArray(int i10) {
                    return new g[i10];
                }
            }

            private g() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof g)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1723010119;
            }

            public String toString() {
                return "ShowPermissionPermanentlyDeniedMessage";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class h extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final h f55871d = new h();
            @NotNull
            public static final Parcelable.Creator<h> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final h createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return h.f55871d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final h[] newArray(int i10) {
                    return new h[i10];
                }
            }

            private h() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof h)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 120525746;
            }

            public String toString() {
                return "ShowRequestPermissionRationale";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final d0 f55872a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f55873b;

        /* renamed from: c  reason: collision with root package name */
        private final String f55874c;

        /* renamed from: d  reason: collision with root package name */
        private final String f55875d;

        /* renamed from: e  reason: collision with root package name */
        private final String f55876e;

        /* renamed from: f  reason: collision with root package name */
        private final String f55877f;

        /* renamed from: g  reason: collision with root package name */
        private final String f55878g;

        /* renamed from: h  reason: collision with root package name */
        private final String f55879h;

        /* renamed from: i  reason: collision with root package name */
        private final String f55880i;

        /* renamed from: j  reason: collision with root package name */
        private final String f55881j;

        /* renamed from: k  reason: collision with root package name */
        private final StepStyle f55882k;

        public c(d0 permission, boolean z10, String title, String rationale, String rationaleWhenPermanentlyDenied, String str, String str2, String str3, String str4, String str5, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(permission, "permission");
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(rationale, "rationale");
            Intrinsics.checkNotNullParameter(rationaleWhenPermanentlyDenied, "rationaleWhenPermanentlyDenied");
            this.f55872a = permission;
            this.f55873b = z10;
            this.f55874c = title;
            this.f55875d = rationale;
            this.f55876e = rationaleWhenPermanentlyDenied;
            this.f55877f = str;
            this.f55878g = str2;
            this.f55879h = str3;
            this.f55880i = str4;
            this.f55881j = str5;
            this.f55882k = stepStyle;
        }

        public final String a() {
            return this.f55881j;
        }

        public final String b() {
            return this.f55880i;
        }

        public final String c() {
            return this.f55879h;
        }

        public final String d() {
            return this.f55878g;
        }

        public final boolean e() {
            return this.f55873b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f55872a == cVar.f55872a && this.f55873b == cVar.f55873b && Intrinsics.areEqual(this.f55874c, cVar.f55874c) && Intrinsics.areEqual(this.f55875d, cVar.f55875d) && Intrinsics.areEqual(this.f55876e, cVar.f55876e) && Intrinsics.areEqual(this.f55877f, cVar.f55877f) && Intrinsics.areEqual(this.f55878g, cVar.f55878g) && Intrinsics.areEqual(this.f55879h, cVar.f55879h) && Intrinsics.areEqual(this.f55880i, cVar.f55880i) && Intrinsics.areEqual(this.f55881j, cVar.f55881j) && Intrinsics.areEqual(this.f55882k, cVar.f55882k)) {
                return true;
            }
            return false;
        }

        public final d0 f() {
            return this.f55872a;
        }

        public final String g() {
            return this.f55877f;
        }

        public final String h() {
            return this.f55875d;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((this.f55872a.hashCode() * 31) + Boolean.hashCode(this.f55873b)) * 31) + this.f55874c.hashCode()) * 31) + this.f55875d.hashCode()) * 31) + this.f55876e.hashCode()) * 31;
            String str = this.f55877f;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            String str2 = this.f55878g;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f55879h;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f55880i;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f55881j;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            StepStyle stepStyle = this.f55882k;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i15 + i10;
        }

        public final String i() {
            return this.f55876e;
        }

        public final StepStyle j() {
            return this.f55882k;
        }

        public final String k() {
            return this.f55874c;
        }

        public final boolean l() {
            d0 d0Var = this.f55872a;
            if (d0Var != d0.f55895i && d0Var != d0.f55896o) {
                return false;
            }
            return true;
        }

        public String toString() {
            d0 d0Var = this.f55872a;
            boolean z10 = this.f55873b;
            String str = this.f55874c;
            String str2 = this.f55875d;
            String str3 = this.f55876e;
            String str4 = this.f55877f;
            String str5 = this.f55878g;
            String str6 = this.f55879h;
            String str7 = this.f55880i;
            String str8 = this.f55881j;
            StepStyle stepStyle = this.f55882k;
            return "Props(permission=" + d0Var + ", optional=" + z10 + ", title=" + str + ", rationale=" + str2 + ", rationaleWhenPermanentlyDenied=" + str3 + ", positiveButtonText=" + str4 + ", negativeButtonText=" + str5 + ", gpsFeatureTitle=" + str6 + ", gpsFeatureRationale=" + str7 + ", gpsFeatureModalNegativeButton=" + str8 + ", styles=" + stepStyle + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55883a;

        static {
            int[] iArr = new int[c0.values().length];
            try {
                iArr[c0.f55855d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c0.f55856e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c0.f55857i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f55883a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55884d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ c f55886i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ k.a f55887o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(c cVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f55886i = cVar;
            this.f55887o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(r.c cVar) {
            cVar.e(b.e.f55868d);
            return Unit.f33282a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(b.C0786b.f55865d);
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f55886i, this.f55887o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            tm.r d11;
            or.b.f();
            if (this.f55884d == 0) {
                kotlin.c.b(obj);
                if (l1.b(c1.this.f55860a, this.f55886i.f())) {
                    tm.h c10 = this.f55887o.c();
                    d11 = tm.z.d(c1.this, null, new Function1() { // from class: zo.d1
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = c1.e.l((r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    tm.h c11 = this.f55887o.c();
                    d10 = tm.z.d(c1.this, null, new Function1() { // from class: zo.e1
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = c1.e.m((r.c) obj2);
                            return m10;
                        }
                    }, 1, null);
                    c11.d(d10);
                }
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55888d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f55889e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ c1 f55890i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f55891o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, c1 c1Var, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f55889e = aVar;
            this.f55890i = c1Var;
            this.f55891o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(c1 c1Var, c cVar, r.c cVar2) {
            c1Var.G(cVar2, new h1(cVar.f(), g1.f55919d));
            return Unit.f33282a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f55889e, this.f55890i, this.f55891o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            tm.r d10;
            or.b.f();
            if (this.f55888d == 0) {
                kotlin.c.b(obj);
                tm.h c10 = this.f55889e.c();
                final c1 c1Var = this.f55890i;
                final c cVar = this.f55891o;
                d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.f1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = c1.f.k(c1.this, cVar, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public c1(Context applicationContext, e0.a permissionRequestWorkerFactory, x deviceFeatureRequestWorkflow) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkerFactory, "permissionRequestWorkerFactory");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkflow, "deviceFeatureRequestWorkflow");
        this.f55860a = applicationContext;
        this.f55861b = permissionRequestWorkerFactory;
        this.f55862c = deviceFeatureRequestWorkflow;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void G(r.c cVar, h1 h1Var) {
        cVar.d(new a(h1Var));
    }

    private final void I() {
        Intent intent = new Intent("android.settings.APPLICATION_DETAILS_SETTINGS");
        intent.addFlags(268435456);
        intent.setData(Uri.fromParts("package", this.f55860a.getPackageName(), null));
        this.f55860a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K(k.a aVar, c1 c1Var, final boolean z10) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit L;
                L = c1.L(z10, (r.c) obj);
                return L;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L(boolean z10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (z10) {
            action.e(b.h.f55871d);
        } else {
            action.e(b.f.f55869d);
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r M(final c1 c1Var, final k.a aVar, final c cVar, e0.b it) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, e0.b.C0787b.f55906a)) {
            d11 = tm.z.d(c1Var, null, new Function1() { // from class: zo.a1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q;
                    Q = c1.Q(k.a.this, c1Var, (r.c) obj);
                    return Q;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, e0.b.a.f55905a)) {
            d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N;
                    N = c1.N(k.a.this, c1Var, cVar, (r.c) obj);
                    return N;
                }
            }, 1, null);
            return d10;
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(k.a aVar, final c1 c1Var, final c cVar, r.c action) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((c) action.b()).e()) {
            tm.h c10 = aVar.c();
            d11 = tm.z.d(c1Var, null, new Function1() { // from class: zo.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O;
                    O = c1.O(c1.this, cVar, (r.c) obj);
                    return O;
                }
            }, 1, null);
            c10.d(d11);
        } else {
            tm.h c11 = aVar.c();
            d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P;
                    P = c1.P((r.c) obj);
                    return P;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f55920e));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.a.f55864d);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(k.a aVar, c1 c1Var, r.c action) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.n0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R;
                R = c1.R((r.c) obj);
                return R;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.e.f55868d);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r S(final c1 c1Var, final k.a aVar, final c cVar, final x.b it) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.m0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit T;
                T = c1.T(x.b.this, aVar, c1Var, cVar, (r.c) obj);
                return T;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(x.b bVar, k.a aVar, final c1 c1Var, final c cVar, r.c action) {
        tm.r d10;
        tm.r d11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = d.f55883a[bVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    tm.h c10 = aVar.c();
                    d11 = tm.z.d(c1Var, null, new Function1() { // from class: zo.t0
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit V;
                            V = c1.V(c1.this, cVar, (r.c) obj);
                            return V;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    throw new ir.p();
                }
            } else {
                c1Var.G(action, new h1(cVar.f(), g1.f55920e));
            }
        } else {
            tm.h c11 = aVar.c();
            d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U;
                    U = c1.U(c1.this, cVar, (r.c) obj);
                    return U;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f55919d));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f55921i));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final c1 c1Var, final c cVar, final boolean z10) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.k0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = c1.X(z10, c1Var, cVar, aVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(boolean z10, c1 c1Var, c cVar, k.a aVar, r.c action) {
        tm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (z10) {
            c1Var.G(action, new h1(cVar.f(), g1.f55920e));
        } else {
            tm.h c10 = aVar.c();
            d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y;
                    Y = c1.Y((r.c) obj);
                    return Y;
                }
            }, 1, null);
            c10.d(d10);
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.g.f55870d);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(final c1 c1Var, k.a aVar, final c cVar) {
        tm.r d10;
        c1Var.I();
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a02;
                a02 = c1.a0(c1.this, cVar, (r.c) obj);
                return a02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f55921i));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(k.a aVar, final c1 c1Var, final c cVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit c02;
                c02 = c1.c0(c1.this, cVar, (r.c) obj);
                return c02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f55920e));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(k.a aVar, c1 c1Var) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit e02;
                e02 = c1.e0((r.c) obj);
                return e02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.f.f55869d);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(k.a aVar, final c1 c1Var, final c cVar) {
        tm.r d10;
        tm.h c10 = aVar.c();
        d10 = tm.z.d(c1Var, null, new Function1() { // from class: zo.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g02;
                g02 = c1.g0(c1.this, cVar, (r.c) obj);
                return g02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f55920e));
        return Unit.f33282a;
    }

    @Override // tm.k
    /* renamed from: H */
    public b d(c props, tm.i iVar) {
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
                parcelable = obtain.readParcelable(tm.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            b bVar = (b) parcelable;
            if (bVar != null) {
                return bVar;
            }
        }
        return b.c.f55866d;
    }

    @Override // tm.k
    /* renamed from: J */
    public Object f(final c renderProps, b renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, b.c.f55866d)) {
            context.a("check_permission_state", new e(renderProps, context, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, b.C0786b.f55865d)) {
            return new tp.k(new l(renderProps.f(), false, new Function1() { // from class: zo.f0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K;
                    K = c1.K(k.a.this, this, ((Boolean) obj).booleanValue());
                    return K;
                }
            }), tp.j.f49798i);
        } else {
            if (Intrinsics.areEqual(renderState, b.h.f55871d)) {
                String k10 = renderProps.k();
                String h10 = renderProps.h();
                String g10 = renderProps.g();
                if (g10 == null) {
                    g10 = this.f55860a.getString(bp.e.f7665z);
                    Intrinsics.checkNotNullExpressionValue(g10, "getString(...)");
                }
                String str = g10;
                StepStyle j10 = renderProps.j();
                Function0 function0 = new Function0() { // from class: zo.q0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit d02;
                        d02 = c1.d0(k.a.this, this);
                        return d02;
                    }
                };
                String d10 = renderProps.d();
                if (d10 == null) {
                    d10 = this.f55860a.getString(bp.e.f7664y);
                    Intrinsics.checkNotNullExpressionValue(d10, "getString(...)");
                }
                return new tp.k(new k(k10, h10, str, j10, function0, d10, new Function0() { // from class: zo.u0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit f02;
                        f02 = c1.f0(k.a.this, this, renderProps);
                        return f02;
                    }
                }), tp.j.f49798i);
            } else if (Intrinsics.areEqual(renderState, b.f.f55869d)) {
                tm.w.l(context, this.f55861b.a(renderProps.f()), Reflection.typeOf(e0.class), "", new Function1() { // from class: zo.v0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        tm.r M;
                        M = c1.M(c1.this, context, renderProps, (e0.b) obj);
                        return M;
                    }
                });
                return null;
            } else if (Intrinsics.areEqual(renderState, b.e.f55868d)) {
                if (renderProps.l()) {
                    return a.C0642a.a(context, this.f55862c, new x.c(k1.a(renderProps.f()), renderProps.c(), renderProps.b(), renderProps.g(), renderProps.a(), renderProps.j()), null, new Function1() { // from class: zo.w0
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            tm.r S;
                            S = c1.S(c1.this, context, renderProps, (x.b) obj);
                            return S;
                        }
                    }, 4, null);
                }
                context.a("request_device_feature", new f(context, this, renderProps, null));
                return null;
            } else if (Intrinsics.areEqual(renderState, b.a.f55864d)) {
                return new tp.k(new l(renderProps.f(), true, new Function1() { // from class: zo.x0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit W;
                        W = c1.W(k.a.this, this, renderProps, ((Boolean) obj).booleanValue());
                        return W;
                    }
                }), tp.j.f49798i);
            } else {
                if (Intrinsics.areEqual(renderState, b.g.f55870d)) {
                    String k11 = renderProps.k();
                    String i10 = renderProps.i();
                    String g11 = renderProps.g();
                    if (g11 == null) {
                        g11 = this.f55860a.getString(bp.e.A);
                        Intrinsics.checkNotNullExpressionValue(g11, "getString(...)");
                    }
                    String str2 = g11;
                    StepStyle j11 = renderProps.j();
                    Function0 function02 = new Function0() { // from class: zo.y0
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = c1.Z(c1.this, context, renderProps);
                            return Z;
                        }
                    };
                    String d11 = renderProps.d();
                    if (d11 == null) {
                        d11 = this.f55860a.getString(bp.e.f7664y);
                        Intrinsics.checkNotNullExpressionValue(d11, "getString(...)");
                    }
                    return new tp.k(new k(k11, i10, str2, j11, function02, d11, new Function0() { // from class: zo.z0
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = c1.b0(k.a.this, this, renderProps);
                            return b02;
                        }
                    }), tp.j.f49798i);
                } else if (Intrinsics.areEqual(renderState, b.d.f55867d)) {
                    return null;
                } else {
                    throw new ir.p();
                }
            }
        }
    }

    @Override // tm.k
    /* renamed from: h0 */
    public tm.i g(b state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return vm.s.a(state);
    }
}
