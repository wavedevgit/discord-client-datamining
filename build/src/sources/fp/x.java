package fp;

import android.content.Context;
import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import fp.m;
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
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends zm.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23388a;

    /* renamed from: b  reason: collision with root package name */
    private final m.a f23389b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a implements Parcelable {

        /* renamed from: fp.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0325a extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final C0325a f23390d = new C0325a();
            @NotNull
            public static final Parcelable.Creator<C0325a> CREATOR = new C0326a();

            /* renamed from: fp.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0326a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0325a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0325a.f23390d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0325a[] newArray(int i10) {
                    return new C0325a[i10];
                }
            }

            private C0325a() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0325a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -86189441;
            }

            public String toString() {
                return "CheckDeviceFeatureState";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final b f23391d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new C0327a();

            /* renamed from: fp.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0327a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f23391d;
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
                return 92238675;
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
        public static final class c extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final c f23392d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0328a();

            /* renamed from: fp.x$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0328a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f23392d;
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
                return 1991921803;
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
        public static final class d extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final d f23393d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new C0329a();

            /* renamed from: fp.x$a$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0329a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f23393d;
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
                return 725044653;
            }

            public String toString() {
                return "ShowDeviceFeaturePrompt";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final a0 f23394a;

        public b(a0 deviceFeatureState) {
            Intrinsics.checkNotNullParameter(deviceFeatureState, "deviceFeatureState");
            this.f23394a = deviceFeatureState;
        }

        public final a0 a() {
            return this.f23394a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f23394a, ((b) obj).f23394a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f23394a.hashCode();
        }

        public String toString() {
            a0 a0Var = this.f23394a;
            return "Output(deviceFeatureState=" + a0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final b0 f23395a;

        /* renamed from: b  reason: collision with root package name */
        private final String f23396b;

        /* renamed from: c  reason: collision with root package name */
        private final String f23397c;

        /* renamed from: d  reason: collision with root package name */
        private final String f23398d;

        /* renamed from: e  reason: collision with root package name */
        private final String f23399e;

        /* renamed from: f  reason: collision with root package name */
        private final StepStyle f23400f;

        public c(b0 feature, String str, String str2, String str3, String str4, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(feature, "feature");
            this.f23395a = feature;
            this.f23396b = str;
            this.f23397c = str2;
            this.f23398d = str3;
            this.f23399e = str4;
            this.f23400f = stepStyle;
        }

        public final b0 a() {
            return this.f23395a;
        }

        public final String b() {
            return this.f23399e;
        }

        public final String c() {
            return this.f23398d;
        }

        public final String d() {
            return this.f23397c;
        }

        public final String e() {
            return this.f23396b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f23395a == cVar.f23395a && Intrinsics.areEqual(this.f23396b, cVar.f23396b) && Intrinsics.areEqual(this.f23397c, cVar.f23397c) && Intrinsics.areEqual(this.f23398d, cVar.f23398d) && Intrinsics.areEqual(this.f23399e, cVar.f23399e) && Intrinsics.areEqual(this.f23400f, cVar.f23400f)) {
                return true;
            }
            return false;
        }

        public final StepStyle f() {
            return this.f23400f;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f23395a.hashCode() * 31;
            String str = this.f23396b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            String str2 = this.f23397c;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f23398d;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f23399e;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            StepStyle stepStyle = this.f23400f;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i14 + i10;
        }

        public String toString() {
            b0 b0Var = this.f23395a;
            String str = this.f23396b;
            String str2 = this.f23397c;
            String str3 = this.f23398d;
            String str4 = this.f23399e;
            StepStyle stepStyle = this.f23400f;
            return "Props(feature=" + b0Var + ", requestFeatureTitle=" + str + ", requestFeatureRationale=" + str2 + ", requestFeatureModalPositiveButton=" + str3 + ", requestFeatureModalNegativeButton=" + str4 + ", styles=" + stepStyle + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23401d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f23403i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f23404o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(k.a aVar, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f23403i = aVar;
            this.f23404o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(x xVar, c cVar, r.c cVar2) {
            xVar.r(cVar2, new a0(cVar.a(), c0.f23217d));
            return Unit.f31988a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(a.d.f23393d);
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f23403i, this.f23404o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r d10;
            zm.r d11;
            ur.b.f();
            if (this.f23401d == 0) {
                kotlin.c.b(obj);
                if (wp.f.b(x.this.f23388a)) {
                    zm.h c10 = this.f23403i.c();
                    final x xVar = x.this;
                    final c cVar = this.f23404o;
                    d11 = zm.z.d(xVar, null, new Function1() { // from class: fp.y
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = x.d.l(x.this, cVar, (r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    zm.h c11 = this.f23403i.c();
                    d10 = zm.z.d(x.this, null, new Function1() { // from class: fp.z
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = x.d.m((r.c) obj2);
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
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public x(Context applicationContext, m.a deviceFeatureRequestWorkerFactory) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkerFactory, "deviceFeatureRequestWorkerFactory");
        this.f23388a = applicationContext;
        this.f23389b = deviceFeatureRequestWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f23217d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f23218e));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f23219i));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(r.c cVar, a0 a0Var) {
        cVar.d(new b(a0Var));
    }

    private final void s() {
        Intent intent = new Intent("android.settings.LOCATION_SOURCE_SETTINGS");
        intent.setFlags(268435456);
        this.f23388a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(k.a aVar, x xVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(xVar, null, new Function1() { // from class: fp.w
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit w10;
                w10 = x.w((r.c) obj);
                return w10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(a.c.f23392d);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, final x xVar, final c cVar) {
        zm.r d10;
        zm.h c10 = aVar.c();
        d10 = zm.z.d(xVar, null, new Function1() { // from class: fp.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y10;
                y10 = x.y(x.this, cVar, (r.c) obj);
                return y10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f23218e));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r z(final x xVar, final c cVar, m.b it) {
        zm.r d10;
        zm.r d11;
        zm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof m.b.c) {
            d12 = zm.z.d(xVar, null, new Function1() { // from class: fp.s
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A;
                    A = x.A(x.this, cVar, (r.c) obj);
                    return A;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof m.b.a) {
            d11 = zm.z.d(xVar, null, new Function1() { // from class: fp.t
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B;
                    B = x.B(x.this, cVar, (r.c) obj);
                    return B;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof m.b.C0323b) {
            xVar.s();
            d10 = zm.z.d(xVar, null, new Function1() { // from class: fp.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C;
                    C = x.C(x.this, cVar, (r.c) obj);
                    return C;
                }
            }, 1, null);
            return d10;
        } else {
            throw new or.p();
        }
    }

    @Override // zm.k
    /* renamed from: D */
    public zm.i g(a state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return bn.s.a(state);
    }

    @Override // zm.k
    /* renamed from: t */
    public a d(c props, zm.i iVar) {
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
            a aVar = (a) parcelable;
            if (aVar != null) {
                return aVar;
            }
        }
        return a.C0325a.f23390d;
    }

    @Override // zm.k
    /* renamed from: u */
    public Object f(final c renderProps, a renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, a.C0325a.f23390d)) {
            context.a("check_device_feature_state", new d(context, renderProps, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, a.d.f23393d)) {
            String e10 = renderProps.e();
            if (e10 == null) {
                e10 = "Couldn't access location feature";
            }
            String d10 = renderProps.d();
            if (d10 == null) {
                d10 = "Location is turned off, please allow access to your device's location feature";
            }
            String c10 = renderProps.c();
            if (c10 == null) {
                c10 = "Allow";
            }
            StepStyle f10 = renderProps.f();
            Function0 function0 = new Function0() { // from class: fp.p
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit v10;
                    v10 = x.v(k.a.this, this);
                    return v10;
                }
            };
            String b10 = renderProps.b();
            if (b10 == null) {
                b10 = "Cancel";
            }
            return new zp.k(new k(e10, d10, c10, f10, function0, b10, new Function0() { // from class: fp.q
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x10;
                    x10 = x.x(k.a.this, this, renderProps);
                    return x10;
                }
            }), zp.j.f56160i);
        } else if (Intrinsics.areEqual(renderState, a.c.f23392d)) {
            zm.w.l(context, this.f23389b.create(), Reflection.typeOf(m.class), "", new Function1() { // from class: fp.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r z10;
                    z10 = x.z(x.this, renderProps, (m.b) obj);
                    return z10;
                }
            });
            return null;
        } else if (Intrinsics.areEqual(renderState, a.b.f23391d)) {
            return null;
        } else {
            throw new or.p();
        }
    }
}
