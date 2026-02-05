package fp;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import fp.c1;
import fp.e0;
import fp.x;
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
import zm.a;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 extends zm.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23222a;

    /* renamed from: b  reason: collision with root package name */
    private final e0.a f23223b;

    /* renamed from: c  reason: collision with root package name */
    private final x f23224c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final h1 f23225a;

        public a(h1 permissionState) {
            Intrinsics.checkNotNullParameter(permissionState, "permissionState");
            this.f23225a = permissionState;
        }

        public final h1 a() {
            return this.f23225a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f23225a, ((a) obj).f23225a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f23225a.hashCode();
        }

        public String toString() {
            h1 h1Var = this.f23225a;
            return "Output(permissionState=" + h1Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final a f23226d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0319a();

            /* renamed from: fp.c1$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0319a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f23226d;
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

        /* renamed from: fp.c1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0320b extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final C0320b f23227d = new C0320b();
            @NotNull
            public static final Parcelable.Creator<C0320b> CREATOR = new a();

            /* renamed from: fp.c1$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0320b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0320b.f23227d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0320b[] newArray(int i10) {
                    return new C0320b[i10];
                }
            }

            private C0320b() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0320b)) {
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
            public static final c f23228d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f23228d;
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
            public static final d f23229d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f23229d;
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
            public static final e f23230d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f23230d;
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
            public static final f f23231d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f23231d;
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
            public static final g f23232d = new g();
            @NotNull
            public static final Parcelable.Creator<g> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final g createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return g.f23232d;
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
            public static final h f23233d = new h();
            @NotNull
            public static final Parcelable.Creator<h> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final h createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return h.f23233d;
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
        private final d0 f23234a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f23235b;

        /* renamed from: c  reason: collision with root package name */
        private final String f23236c;

        /* renamed from: d  reason: collision with root package name */
        private final String f23237d;

        /* renamed from: e  reason: collision with root package name */
        private final String f23238e;

        /* renamed from: f  reason: collision with root package name */
        private final String f23239f;

        /* renamed from: g  reason: collision with root package name */
        private final String f23240g;

        /* renamed from: h  reason: collision with root package name */
        private final String f23241h;

        /* renamed from: i  reason: collision with root package name */
        private final String f23242i;

        /* renamed from: j  reason: collision with root package name */
        private final String f23243j;

        /* renamed from: k  reason: collision with root package name */
        private final StepStyle f23244k;

        public c(d0 permission, boolean z10, String title, String rationale, String rationaleWhenPermanentlyDenied, String str, String str2, String str3, String str4, String str5, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(permission, "permission");
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(rationale, "rationale");
            Intrinsics.checkNotNullParameter(rationaleWhenPermanentlyDenied, "rationaleWhenPermanentlyDenied");
            this.f23234a = permission;
            this.f23235b = z10;
            this.f23236c = title;
            this.f23237d = rationale;
            this.f23238e = rationaleWhenPermanentlyDenied;
            this.f23239f = str;
            this.f23240g = str2;
            this.f23241h = str3;
            this.f23242i = str4;
            this.f23243j = str5;
            this.f23244k = stepStyle;
        }

        public final String a() {
            return this.f23243j;
        }

        public final String b() {
            return this.f23242i;
        }

        public final String c() {
            return this.f23241h;
        }

        public final String d() {
            return this.f23240g;
        }

        public final boolean e() {
            return this.f23235b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f23234a == cVar.f23234a && this.f23235b == cVar.f23235b && Intrinsics.areEqual(this.f23236c, cVar.f23236c) && Intrinsics.areEqual(this.f23237d, cVar.f23237d) && Intrinsics.areEqual(this.f23238e, cVar.f23238e) && Intrinsics.areEqual(this.f23239f, cVar.f23239f) && Intrinsics.areEqual(this.f23240g, cVar.f23240g) && Intrinsics.areEqual(this.f23241h, cVar.f23241h) && Intrinsics.areEqual(this.f23242i, cVar.f23242i) && Intrinsics.areEqual(this.f23243j, cVar.f23243j) && Intrinsics.areEqual(this.f23244k, cVar.f23244k)) {
                return true;
            }
            return false;
        }

        public final d0 f() {
            return this.f23234a;
        }

        public final String g() {
            return this.f23239f;
        }

        public final String h() {
            return this.f23237d;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((this.f23234a.hashCode() * 31) + Boolean.hashCode(this.f23235b)) * 31) + this.f23236c.hashCode()) * 31) + this.f23237d.hashCode()) * 31) + this.f23238e.hashCode()) * 31;
            String str = this.f23239f;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            String str2 = this.f23240g;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f23241h;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f23242i;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f23243j;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            StepStyle stepStyle = this.f23244k;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i15 + i10;
        }

        public final String i() {
            return this.f23238e;
        }

        public final StepStyle j() {
            return this.f23244k;
        }

        public final String k() {
            return this.f23236c;
        }

        public final boolean l() {
            d0 d0Var = this.f23234a;
            if (d0Var != d0.f23257i && d0Var != d0.f23258o) {
                return false;
            }
            return true;
        }

        public String toString() {
            d0 d0Var = this.f23234a;
            boolean z10 = this.f23235b;
            String str = this.f23236c;
            String str2 = this.f23237d;
            String str3 = this.f23238e;
            String str4 = this.f23239f;
            String str5 = this.f23240g;
            String str6 = this.f23241h;
            String str7 = this.f23242i;
            String str8 = this.f23243j;
            StepStyle stepStyle = this.f23244k;
            return "Props(permission=" + d0Var + ", optional=" + z10 + ", title=" + str + ", rationale=" + str2 + ", rationaleWhenPermanentlyDenied=" + str3 + ", positiveButtonText=" + str4 + ", negativeButtonText=" + str5 + ", gpsFeatureTitle=" + str6 + ", gpsFeatureRationale=" + str7 + ", gpsFeatureModalNegativeButton=" + str8 + ", styles=" + stepStyle + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f23245a;

        static {
            int[] iArr = new int[c0.values().length];
            try {
                iArr[c0.f23217d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c0.f23218e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c0.f23219i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23245a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23246d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ c f23248i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ k.a f23249o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(c cVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f23248i = cVar;
            this.f23249o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(r.c cVar) {
            cVar.e(b.e.f23230d);
            return Unit.f31988a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(b.C0320b.f23227d);
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f23248i, this.f23249o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            zm.r d11;
            ur.b.f();
            if (this.f23246d == 0) {
                kotlin.c.b(obj);
                if (l1.b(c1.this.f23222a, this.f23248i.f())) {
                    zm.h c10 = this.f23249o.c();
                    d11 = zm.z.d(c1.this, null, new Function1() { // from class: fp.d1
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = c1.e.l((r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    zm.h c11 = this.f23249o.c();
                    d10 = zm.z.d(c1.this, null, new Function1() { // from class: fp.e1
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = c1.e.m((r.c) obj2);
                            return m10;
                        }
                    }, 1, null);
                    c11.d(d10);
                }
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23250d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f23251e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ c1 f23252i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f23253o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, c1 c1Var, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f23251e = aVar;
            this.f23252i = c1Var;
            this.f23253o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(c1 c1Var, c cVar, r.c cVar2) {
            c1Var.G(cVar2, new h1(cVar.f(), g1.f23281d));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f23251e, this.f23252i, this.f23253o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            ur.b.f();
            if (this.f23250d == 0) {
                kotlin.c.b(obj);
                zm.h c10 = this.f23251e.c();
                final c1 c1Var = this.f23252i;
                final c cVar = this.f23253o;
                d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.f1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = c1.f.k(c1.this, cVar, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public c1(Context applicationContext, e0.a permissionRequestWorkerFactory, x deviceFeatureRequestWorkflow) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkerFactory, "permissionRequestWorkerFactory");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkflow, "deviceFeatureRequestWorkflow");
        this.f23222a = applicationContext;
        this.f23223b = permissionRequestWorkerFactory;
        this.f23224c = deviceFeatureRequestWorkflow;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void G(r.c cVar, h1 h1Var) {
        cVar.d(new a(h1Var));
    }

    private final void I() {
        Intent intent = new Intent("android.settings.APPLICATION_DETAILS_SETTINGS");
        intent.addFlags(268435456);
        intent.setData(Uri.fromParts("package", this.f23222a.getPackageName(), null));
        this.f23222a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K(k.a aVar, c1 c1Var, final boolean z10) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit L;
                L = c1.L(z10, (r.c) obj);
                return L;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L(boolean z10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (z10) {
            action.e(b.h.f23233d);
        } else {
            action.e(b.f.f23231d);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r M(final c1 c1Var, final k.a aVar, final c cVar, e0.b it) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, e0.b.C0321b.f23268a)) {
            d11 = zm.z.d(c1Var, null, new Function1() { // from class: fp.a1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q;
                    Q = c1.Q(k.a.this, c1Var, (r.c) obj);
                    return Q;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, e0.b.a.f23267a)) {
            d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N;
                    N = c1.N(k.a.this, c1Var, cVar, (r.c) obj);
                    return N;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(k.a aVar, final c1 c1Var, final c cVar, r.c action) {
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((c) action.b()).e()) {
            zm.h c10 = aVar.c();
            d11 = zm.z.d(c1Var, null, new Function1() { // from class: fp.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O;
                    O = c1.O(c1.this, cVar, (r.c) obj);
                    return O;
                }
            }, 1, null);
            c10.d(d11);
        } else {
            zm.h c11 = aVar.c();
            d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P;
                    P = c1.P((r.c) obj);
                    return P;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f23282e));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.a.f23226d);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(k.a aVar, c1 c1Var, r.c action) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.n0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R;
                R = c1.R((r.c) obj);
                return R;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.e.f23230d);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r S(final c1 c1Var, final k.a aVar, final c cVar, final x.b it) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.m0
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
        zm.r d10;
        zm.r d11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = d.f23245a[bVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    zm.h c10 = aVar.c();
                    d11 = zm.z.d(c1Var, null, new Function1() { // from class: fp.t0
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit V;
                            V = c1.V(c1.this, cVar, (r.c) obj);
                            return V;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    throw new or.p();
                }
            } else {
                c1Var.G(action, new h1(cVar.f(), g1.f23282e));
            }
        } else {
            zm.h c11 = aVar.c();
            d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U;
                    U = c1.U(c1.this, cVar, (r.c) obj);
                    return U;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f23281d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f23283i));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final c1 c1Var, final c cVar, final boolean z10) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.k0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = c1.X(z10, c1Var, cVar, aVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(boolean z10, c1 c1Var, c cVar, k.a aVar, r.c action) {
        zm.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (z10) {
            c1Var.G(action, new h1(cVar.f(), g1.f23282e));
        } else {
            zm.h c10 = aVar.c();
            d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y;
                    Y = c1.Y((r.c) obj);
                    return Y;
                }
            }, 1, null);
            c10.d(d10);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.g.f23232d);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(final c1 c1Var, k.a aVar, final c cVar) {
        zm.r d10;
        c1Var.I();
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a02;
                a02 = c1.a0(c1.this, cVar, (r.c) obj);
                return a02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f23283i));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(k.a aVar, final c1 c1Var, final c cVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit c02;
                c02 = c1.c0(c1.this, cVar, (r.c) obj);
                return c02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f23282e));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(k.a aVar, c1 c1Var) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit e02;
                e02 = c1.e0((r.c) obj);
                return e02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.f.f23231d);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(k.a aVar, final c1 c1Var, final c cVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(c1Var, null, new Function1() { // from class: fp.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g02;
                g02 = c1.g0(c1.this, cVar, (r.c) obj);
                return g02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f23282e));
        return Unit.f31988a;
    }

    @Override // zm.k
    /* renamed from: H */
    public b d(c props, zm.i iVar) {
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
                parcelable = obtain.readParcelable(zm.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            b bVar = (b) parcelable;
            if (bVar != null) {
                return bVar;
            }
        }
        return b.c.f23228d;
    }

    @Override // zm.k
    /* renamed from: J */
    public Object f(final c renderProps, b renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, b.c.f23228d)) {
            context.a("check_permission_state", new e(renderProps, context, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, b.C0320b.f23227d)) {
            return new zp.k(new l(renderProps.f(), false, new Function1() { // from class: fp.f0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K;
                    K = c1.K(k.a.this, this, ((Boolean) obj).booleanValue());
                    return K;
                }
            }), zp.j.f56160i);
        } else {
            if (Intrinsics.areEqual(renderState, b.h.f23233d)) {
                String k10 = renderProps.k();
                String h10 = renderProps.h();
                String g10 = renderProps.g();
                if (g10 == null) {
                    g10 = this.f23222a.getString(hp.e.f26821z);
                    Intrinsics.checkNotNullExpressionValue(g10, "getString(...)");
                }
                String str = g10;
                StepStyle j10 = renderProps.j();
                Function0 function0 = new Function0() { // from class: fp.q0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit d02;
                        d02 = c1.d0(k.a.this, this);
                        return d02;
                    }
                };
                String d10 = renderProps.d();
                if (d10 == null) {
                    d10 = this.f23222a.getString(hp.e.f26820y);
                    Intrinsics.checkNotNullExpressionValue(d10, "getString(...)");
                }
                return new zp.k(new k(k10, h10, str, j10, function0, d10, new Function0() { // from class: fp.u0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit f02;
                        f02 = c1.f0(k.a.this, this, renderProps);
                        return f02;
                    }
                }), zp.j.f56160i);
            } else if (Intrinsics.areEqual(renderState, b.f.f23231d)) {
                zm.w.l(context, this.f23223b.a(renderProps.f()), Reflection.typeOf(e0.class), "", new Function1() { // from class: fp.v0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        zm.r M;
                        M = c1.M(c1.this, context, renderProps, (e0.b) obj);
                        return M;
                    }
                });
                return null;
            } else if (Intrinsics.areEqual(renderState, b.e.f23230d)) {
                if (renderProps.l()) {
                    return a.C0784a.a(context, this.f23224c, new x.c(k1.a(renderProps.f()), renderProps.c(), renderProps.b(), renderProps.g(), renderProps.a(), renderProps.j()), null, new Function1() { // from class: fp.w0
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            zm.r S;
                            S = c1.S(c1.this, context, renderProps, (x.b) obj);
                            return S;
                        }
                    }, 4, null);
                }
                context.a("request_device_feature", new f(context, this, renderProps, null));
                return null;
            } else if (Intrinsics.areEqual(renderState, b.a.f23226d)) {
                return new zp.k(new l(renderProps.f(), true, new Function1() { // from class: fp.x0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit W;
                        W = c1.W(k.a.this, this, renderProps, ((Boolean) obj).booleanValue());
                        return W;
                    }
                }), zp.j.f56160i);
            } else {
                if (Intrinsics.areEqual(renderState, b.g.f23232d)) {
                    String k11 = renderProps.k();
                    String i10 = renderProps.i();
                    String g11 = renderProps.g();
                    if (g11 == null) {
                        g11 = this.f23222a.getString(hp.e.A);
                        Intrinsics.checkNotNullExpressionValue(g11, "getString(...)");
                    }
                    String str2 = g11;
                    StepStyle j11 = renderProps.j();
                    Function0 function02 = new Function0() { // from class: fp.y0
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = c1.Z(c1.this, context, renderProps);
                            return Z;
                        }
                    };
                    String d11 = renderProps.d();
                    if (d11 == null) {
                        d11 = this.f23222a.getString(hp.e.f26820y);
                        Intrinsics.checkNotNullExpressionValue(d11, "getString(...)");
                    }
                    return new zp.k(new k(k11, i10, str2, j11, function02, d11, new Function0() { // from class: fp.z0
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = c1.b0(k.a.this, this, renderProps);
                            return b02;
                        }
                    }), zp.j.f56160i);
                } else if (Intrinsics.areEqual(renderState, b.d.f23229d)) {
                    return null;
                } else {
                    throw new or.p();
                }
            }
        }
    }

    @Override // zm.k
    /* renamed from: h0 */
    public zm.i g(b state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return bn.s.a(state);
    }
}
