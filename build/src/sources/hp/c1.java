package hp;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import bn.a;
import bn.k;
import bn.r;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import hp.c1;
import hp.e0;
import hp.x;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c1 extends bn.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f26247a;

    /* renamed from: b  reason: collision with root package name */
    private final e0.a f26248b;

    /* renamed from: c  reason: collision with root package name */
    private final x f26249c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final h1 f26250a;

        public a(h1 permissionState) {
            Intrinsics.checkNotNullParameter(permissionState, "permissionState");
            this.f26250a = permissionState;
        }

        public final h1 a() {
            return this.f26250a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f26250a, ((a) obj).f26250a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f26250a.hashCode();
        }

        public String toString() {
            h1 h1Var = this.f26250a;
            return "Output(permissionState=" + h1Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b implements Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final a f26251d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0361a();

            /* renamed from: hp.c1$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0361a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f26251d;
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

        /* renamed from: hp.c1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0362b extends b {

            /* renamed from: d  reason: collision with root package name */
            public static final C0362b f26252d = new C0362b();
            @NotNull
            public static final Parcelable.Creator<C0362b> CREATOR = new a();

            /* renamed from: hp.c1$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0362b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0362b.f26252d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0362b[] newArray(int i10) {
                    return new C0362b[i10];
                }
            }

            private C0362b() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0362b)) {
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
            public static final c f26253d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f26253d;
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
            public static final d f26254d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f26254d;
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
            public static final e f26255d = new e();
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return e.f26255d;
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
            public static final f f26256d = new f();
            @NotNull
            public static final Parcelable.Creator<f> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final f createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return f.f26256d;
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
            public static final g f26257d = new g();
            @NotNull
            public static final Parcelable.Creator<g> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final g createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return g.f26257d;
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
            public static final h f26258d = new h();
            @NotNull
            public static final Parcelable.Creator<h> CREATOR = new a();

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final h createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return h.f26258d;
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
        private final d0 f26259a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f26260b;

        /* renamed from: c  reason: collision with root package name */
        private final String f26261c;

        /* renamed from: d  reason: collision with root package name */
        private final String f26262d;

        /* renamed from: e  reason: collision with root package name */
        private final String f26263e;

        /* renamed from: f  reason: collision with root package name */
        private final String f26264f;

        /* renamed from: g  reason: collision with root package name */
        private final String f26265g;

        /* renamed from: h  reason: collision with root package name */
        private final String f26266h;

        /* renamed from: i  reason: collision with root package name */
        private final String f26267i;

        /* renamed from: j  reason: collision with root package name */
        private final String f26268j;

        /* renamed from: k  reason: collision with root package name */
        private final StepStyle f26269k;

        public c(d0 permission, boolean z10, String title, String rationale, String rationaleWhenPermanentlyDenied, String str, String str2, String str3, String str4, String str5, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(permission, "permission");
            Intrinsics.checkNotNullParameter(title, "title");
            Intrinsics.checkNotNullParameter(rationale, "rationale");
            Intrinsics.checkNotNullParameter(rationaleWhenPermanentlyDenied, "rationaleWhenPermanentlyDenied");
            this.f26259a = permission;
            this.f26260b = z10;
            this.f26261c = title;
            this.f26262d = rationale;
            this.f26263e = rationaleWhenPermanentlyDenied;
            this.f26264f = str;
            this.f26265g = str2;
            this.f26266h = str3;
            this.f26267i = str4;
            this.f26268j = str5;
            this.f26269k = stepStyle;
        }

        public final String a() {
            return this.f26268j;
        }

        public final String b() {
            return this.f26267i;
        }

        public final String c() {
            return this.f26266h;
        }

        public final String d() {
            return this.f26265g;
        }

        public final boolean e() {
            return this.f26260b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f26259a == cVar.f26259a && this.f26260b == cVar.f26260b && Intrinsics.areEqual(this.f26261c, cVar.f26261c) && Intrinsics.areEqual(this.f26262d, cVar.f26262d) && Intrinsics.areEqual(this.f26263e, cVar.f26263e) && Intrinsics.areEqual(this.f26264f, cVar.f26264f) && Intrinsics.areEqual(this.f26265g, cVar.f26265g) && Intrinsics.areEqual(this.f26266h, cVar.f26266h) && Intrinsics.areEqual(this.f26267i, cVar.f26267i) && Intrinsics.areEqual(this.f26268j, cVar.f26268j) && Intrinsics.areEqual(this.f26269k, cVar.f26269k)) {
                return true;
            }
            return false;
        }

        public final d0 f() {
            return this.f26259a;
        }

        public final String g() {
            return this.f26264f;
        }

        public final String h() {
            return this.f26262d;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6 = ((((((((this.f26259a.hashCode() * 31) + Boolean.hashCode(this.f26260b)) * 31) + this.f26261c.hashCode()) * 31) + this.f26262d.hashCode()) * 31) + this.f26263e.hashCode()) * 31;
            String str = this.f26264f;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode6 + hashCode) * 31;
            String str2 = this.f26265g;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f26266h;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f26267i;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f26268j;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            StepStyle stepStyle = this.f26269k;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i15 + i10;
        }

        public final String i() {
            return this.f26263e;
        }

        public final StepStyle j() {
            return this.f26269k;
        }

        public final String k() {
            return this.f26261c;
        }

        public final boolean l() {
            d0 d0Var = this.f26259a;
            if (d0Var != d0.f26282i && d0Var != d0.f26283o) {
                return false;
            }
            return true;
        }

        public String toString() {
            d0 d0Var = this.f26259a;
            boolean z10 = this.f26260b;
            String str = this.f26261c;
            String str2 = this.f26262d;
            String str3 = this.f26263e;
            String str4 = this.f26264f;
            String str5 = this.f26265g;
            String str6 = this.f26266h;
            String str7 = this.f26267i;
            String str8 = this.f26268j;
            StepStyle stepStyle = this.f26269k;
            return "Props(permission=" + d0Var + ", optional=" + z10 + ", title=" + str + ", rationale=" + str2 + ", rationaleWhenPermanentlyDenied=" + str3 + ", positiveButtonText=" + str4 + ", negativeButtonText=" + str5 + ", gpsFeatureTitle=" + str6 + ", gpsFeatureRationale=" + str7 + ", gpsFeatureModalNegativeButton=" + str8 + ", styles=" + stepStyle + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f26270a;

        static {
            int[] iArr = new int[c0.values().length];
            try {
                iArr[c0.f26242d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c0.f26243e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c0.f26244i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f26270a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f26271d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ c f26273i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ k.a f26274o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(c cVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f26273i = cVar;
            this.f26274o = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(r.c cVar) {
            cVar.e(b.e.f26255d);
            return Unit.f32008a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(b.C0362b.f26252d);
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f26273i, this.f26274o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            bn.r d11;
            wr.b.f();
            if (this.f26271d == 0) {
                kotlin.c.b(obj);
                if (l1.b(c1.this.f26247a, this.f26273i.f())) {
                    bn.h c10 = this.f26274o.c();
                    d11 = bn.z.d(c1.this, null, new Function1() { // from class: hp.d1
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = c1.e.l((r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    bn.h c11 = this.f26274o.c();
                    d10 = bn.z.d(c1.this, null, new Function1() { // from class: hp.e1
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = c1.e.m((r.c) obj2);
                            return m10;
                        }
                    }, 1, null);
                    c11.d(d10);
                }
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f26275d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f26276e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ c1 f26277i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f26278o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(k.a aVar, c1 c1Var, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f26276e = aVar;
            this.f26277i = c1Var;
            this.f26278o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(c1 c1Var, c cVar, r.c cVar2) {
            c1Var.G(cVar2, new h1(cVar.f(), g1.f26306d));
            return Unit.f32008a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f26276e, this.f26277i, this.f26278o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            wr.b.f();
            if (this.f26275d == 0) {
                kotlin.c.b(obj);
                bn.h c10 = this.f26276e.c();
                final c1 c1Var = this.f26277i;
                final c cVar = this.f26278o;
                d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.f1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = c1.f.k(c1.this, cVar, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public c1(Context applicationContext, e0.a permissionRequestWorkerFactory, x deviceFeatureRequestWorkflow) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkerFactory, "permissionRequestWorkerFactory");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkflow, "deviceFeatureRequestWorkflow");
        this.f26247a = applicationContext;
        this.f26248b = permissionRequestWorkerFactory;
        this.f26249c = deviceFeatureRequestWorkflow;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void G(r.c cVar, h1 h1Var) {
        cVar.d(new a(h1Var));
    }

    private final void I() {
        Intent intent = new Intent("android.settings.APPLICATION_DETAILS_SETTINGS");
        intent.addFlags(268435456);
        intent.setData(Uri.fromParts("package", this.f26247a.getPackageName(), null));
        this.f26247a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K(k.a aVar, c1 c1Var, final boolean z10) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit L;
                L = c1.L(z10, (r.c) obj);
                return L;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L(boolean z10, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (z10) {
            action.e(b.h.f26258d);
        } else {
            action.e(b.f.f26256d);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r M(final c1 c1Var, final k.a aVar, final c cVar, e0.b it) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, e0.b.C0363b.f26293a)) {
            d11 = bn.z.d(c1Var, null, new Function1() { // from class: hp.a1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q;
                    Q = c1.Q(k.a.this, c1Var, (r.c) obj);
                    return Q;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, e0.b.a.f26292a)) {
            d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.b1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N;
                    N = c1.N(k.a.this, c1Var, cVar, (r.c) obj);
                    return N;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(k.a aVar, final c1 c1Var, final c cVar, r.c action) {
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (((c) action.b()).e()) {
            bn.h c10 = aVar.c();
            d11 = bn.z.d(c1Var, null, new Function1() { // from class: hp.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O;
                    O = c1.O(c1.this, cVar, (r.c) obj);
                    return O;
                }
            }, 1, null);
            c10.d(d11);
        } else {
            bn.h c11 = aVar.c();
            d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.p0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P;
                    P = c1.P((r.c) obj);
                    return P;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f26307e));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.a.f26251d);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(k.a aVar, c1 c1Var, r.c action) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.n0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R;
                R = c1.R((r.c) obj);
                return R;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.e.f26255d);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r S(final c1 c1Var, final k.a aVar, final c cVar, final x.b it) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.m0
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
        bn.r d10;
        bn.r d11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = d.f26270a[bVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    bn.h c10 = aVar.c();
                    d11 = bn.z.d(c1Var, null, new Function1() { // from class: hp.t0
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            Unit V;
                            V = c1.V(c1.this, cVar, (r.c) obj);
                            return V;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    throw new qr.p();
                }
            } else {
                c1Var.G(action, new h1(cVar.f(), g1.f26307e));
            }
        } else {
            bn.h c11 = aVar.c();
            d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.s0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U;
                    U = c1.U(c1.this, cVar, (r.c) obj);
                    return U;
                }
            }, 1, null);
            c11.d(d10);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f26306d));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f26308i));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final c1 c1Var, final c cVar, final boolean z10) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.k0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = c1.X(z10, c1Var, cVar, aVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(boolean z10, c1 c1Var, c cVar, k.a aVar, r.c action) {
        bn.r d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (z10) {
            c1Var.G(action, new h1(cVar.f(), g1.f26307e));
        } else {
            bn.h c10 = aVar.c();
            d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.r0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y;
                    Y = c1.Y((r.c) obj);
                    return Y;
                }
            }, 1, null);
            c10.d(d10);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.g.f26257d);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(final c1 c1Var, k.a aVar, final c cVar) {
        bn.r d10;
        c1Var.I();
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a02;
                a02 = c1.a0(c1.this, cVar, (r.c) obj);
                return a02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f26308i));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(k.a aVar, final c1 c1Var, final c cVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit c02;
                c02 = c1.c0(c1.this, cVar, (r.c) obj);
                return c02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f26307e));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(k.a aVar, c1 c1Var) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit e02;
                e02 = c1.e0((r.c) obj);
                return e02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(b.f.f26256d);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(k.a aVar, final c1 c1Var, final c cVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(c1Var, null, new Function1() { // from class: hp.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g02;
                g02 = c1.g0(c1.this, cVar, (r.c) obj);
                return g02;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(c1 c1Var, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        c1Var.G(action, new h1(cVar.f(), g1.f26307e));
        return Unit.f32008a;
    }

    @Override // bn.k
    /* renamed from: H */
    public b d(c props, bn.i iVar) {
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
                parcelable = obtain.readParcelable(bn.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            b bVar = (b) parcelable;
            if (bVar != null) {
                return bVar;
            }
        }
        return b.c.f26253d;
    }

    @Override // bn.k
    /* renamed from: J */
    public Object f(final c renderProps, b renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, b.c.f26253d)) {
            context.a("check_permission_state", new e(renderProps, context, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, b.C0362b.f26252d)) {
            return new bq.k(new l(renderProps.f(), false, new Function1() { // from class: hp.f0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit K;
                    K = c1.K(k.a.this, this, ((Boolean) obj).booleanValue());
                    return K;
                }
            }), bq.j.f6989i);
        } else {
            if (Intrinsics.areEqual(renderState, b.h.f26258d)) {
                String k10 = renderProps.k();
                String h10 = renderProps.h();
                String g10 = renderProps.g();
                if (g10 == null) {
                    g10 = this.f26247a.getString(jp.e.f30817z);
                    Intrinsics.checkNotNullExpressionValue(g10, "getString(...)");
                }
                String str = g10;
                StepStyle j10 = renderProps.j();
                Function0 function0 = new Function0() { // from class: hp.q0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit d02;
                        d02 = c1.d0(k.a.this, this);
                        return d02;
                    }
                };
                String d10 = renderProps.d();
                if (d10 == null) {
                    d10 = this.f26247a.getString(jp.e.f30816y);
                    Intrinsics.checkNotNullExpressionValue(d10, "getString(...)");
                }
                return new bq.k(new k(k10, h10, str, j10, function0, d10, new Function0() { // from class: hp.u0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit f02;
                        f02 = c1.f0(k.a.this, this, renderProps);
                        return f02;
                    }
                }), bq.j.f6989i);
            } else if (Intrinsics.areEqual(renderState, b.f.f26256d)) {
                bn.w.l(context, this.f26248b.a(renderProps.f()), Reflection.typeOf(e0.class), "", new Function1() { // from class: hp.v0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        bn.r M;
                        M = c1.M(c1.this, context, renderProps, (e0.b) obj);
                        return M;
                    }
                });
                return null;
            } else if (Intrinsics.areEqual(renderState, b.e.f26255d)) {
                if (renderProps.l()) {
                    return a.C0104a.a(context, this.f26249c, new x.c(k1.a(renderProps.f()), renderProps.c(), renderProps.b(), renderProps.g(), renderProps.a(), renderProps.j()), null, new Function1() { // from class: hp.w0
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj) {
                            bn.r S;
                            S = c1.S(c1.this, context, renderProps, (x.b) obj);
                            return S;
                        }
                    }, 4, null);
                }
                context.a("request_device_feature", new f(context, this, renderProps, null));
                return null;
            } else if (Intrinsics.areEqual(renderState, b.a.f26251d)) {
                return new bq.k(new l(renderProps.f(), true, new Function1() { // from class: hp.x0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit W;
                        W = c1.W(k.a.this, this, renderProps, ((Boolean) obj).booleanValue());
                        return W;
                    }
                }), bq.j.f6989i);
            } else {
                if (Intrinsics.areEqual(renderState, b.g.f26257d)) {
                    String k11 = renderProps.k();
                    String i10 = renderProps.i();
                    String g11 = renderProps.g();
                    if (g11 == null) {
                        g11 = this.f26247a.getString(jp.e.A);
                        Intrinsics.checkNotNullExpressionValue(g11, "getString(...)");
                    }
                    String str2 = g11;
                    StepStyle j11 = renderProps.j();
                    Function0 function02 = new Function0() { // from class: hp.y0
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = c1.Z(c1.this, context, renderProps);
                            return Z;
                        }
                    };
                    String d11 = renderProps.d();
                    if (d11 == null) {
                        d11 = this.f26247a.getString(jp.e.f30816y);
                        Intrinsics.checkNotNullExpressionValue(d11, "getString(...)");
                    }
                    return new bq.k(new k(k11, i10, str2, j11, function02, d11, new Function0() { // from class: hp.z0
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = c1.b0(k.a.this, this, renderProps);
                            return b02;
                        }
                    }), bq.j.f6989i);
                } else if (Intrinsics.areEqual(renderState, b.d.f26254d)) {
                    return null;
                } else {
                    throw new qr.p();
                }
            }
        }
    }

    @Override // bn.k
    /* renamed from: h0 */
    public bn.i g(b state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return dn.s.a(state);
    }
}
