package hp;

import android.content.Context;
import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import bn.k;
import bn.r;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import hp.m;
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
public final class x extends bn.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f26461a;

    /* renamed from: b  reason: collision with root package name */
    private final m.a f26462b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a implements Parcelable {

        /* renamed from: hp.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0367a extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final C0367a f26463d = new C0367a();
            @NotNull
            public static final Parcelable.Creator<C0367a> CREATOR = new C0368a();

            /* renamed from: hp.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0368a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0367a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0367a.f26463d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0367a[] newArray(int i10) {
                    return new C0367a[i10];
                }
            }

            private C0367a() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0367a)) {
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
            public static final b f26464d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new C0369a();

            /* renamed from: hp.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0369a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f26464d;
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
            public static final c f26465d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0370a();

            /* renamed from: hp.x$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0370a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f26465d;
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
            public static final d f26466d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new C0371a();

            /* renamed from: hp.x$a$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0371a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f26466d;
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
        private final a0 f26467a;

        public b(a0 deviceFeatureState) {
            Intrinsics.checkNotNullParameter(deviceFeatureState, "deviceFeatureState");
            this.f26467a = deviceFeatureState;
        }

        public final a0 a() {
            return this.f26467a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f26467a, ((b) obj).f26467a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f26467a.hashCode();
        }

        public String toString() {
            a0 a0Var = this.f26467a;
            return "Output(deviceFeatureState=" + a0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final b0 f26468a;

        /* renamed from: b  reason: collision with root package name */
        private final String f26469b;

        /* renamed from: c  reason: collision with root package name */
        private final String f26470c;

        /* renamed from: d  reason: collision with root package name */
        private final String f26471d;

        /* renamed from: e  reason: collision with root package name */
        private final String f26472e;

        /* renamed from: f  reason: collision with root package name */
        private final StepStyle f26473f;

        public c(b0 feature, String str, String str2, String str3, String str4, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(feature, "feature");
            this.f26468a = feature;
            this.f26469b = str;
            this.f26470c = str2;
            this.f26471d = str3;
            this.f26472e = str4;
            this.f26473f = stepStyle;
        }

        public final b0 a() {
            return this.f26468a;
        }

        public final String b() {
            return this.f26472e;
        }

        public final String c() {
            return this.f26471d;
        }

        public final String d() {
            return this.f26470c;
        }

        public final String e() {
            return this.f26469b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f26468a == cVar.f26468a && Intrinsics.areEqual(this.f26469b, cVar.f26469b) && Intrinsics.areEqual(this.f26470c, cVar.f26470c) && Intrinsics.areEqual(this.f26471d, cVar.f26471d) && Intrinsics.areEqual(this.f26472e, cVar.f26472e) && Intrinsics.areEqual(this.f26473f, cVar.f26473f)) {
                return true;
            }
            return false;
        }

        public final StepStyle f() {
            return this.f26473f;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f26468a.hashCode() * 31;
            String str = this.f26469b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            String str2 = this.f26470c;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f26471d;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f26472e;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            StepStyle stepStyle = this.f26473f;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i14 + i10;
        }

        public String toString() {
            b0 b0Var = this.f26468a;
            String str = this.f26469b;
            String str2 = this.f26470c;
            String str3 = this.f26471d;
            String str4 = this.f26472e;
            StepStyle stepStyle = this.f26473f;
            return "Props(feature=" + b0Var + ", requestFeatureTitle=" + str + ", requestFeatureRationale=" + str2 + ", requestFeatureModalPositiveButton=" + str3 + ", requestFeatureModalNegativeButton=" + str4 + ", styles=" + stepStyle + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f26474d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f26476i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f26477o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(k.a aVar, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f26476i = aVar;
            this.f26477o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(x xVar, c cVar, r.c cVar2) {
            xVar.r(cVar2, new a0(cVar.a(), c0.f26290d));
            return Unit.f32056a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(a.d.f26466d);
            return Unit.f32056a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f26476i, this.f26477o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            bn.r d10;
            bn.r d11;
            wr.b.f();
            if (this.f26474d == 0) {
                kotlin.c.b(obj);
                if (yp.f.b(x.this.f26461a)) {
                    bn.h c10 = this.f26476i.c();
                    final x xVar = x.this;
                    final c cVar = this.f26477o;
                    d11 = bn.z.d(xVar, null, new Function1() { // from class: hp.y
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = x.d.l(x.this, cVar, (r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    bn.h c11 = this.f26476i.c();
                    d10 = bn.z.d(x.this, null, new Function1() { // from class: hp.z
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = x.d.m((r.c) obj2);
                            return m10;
                        }
                    }, 1, null);
                    c11.d(d10);
                }
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public x(Context applicationContext, m.a deviceFeatureRequestWorkerFactory) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkerFactory, "deviceFeatureRequestWorkerFactory");
        this.f26461a = applicationContext;
        this.f26462b = deviceFeatureRequestWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f26290d));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f26291e));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f26292i));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(r.c cVar, a0 a0Var) {
        cVar.d(new b(a0Var));
    }

    private final void s() {
        Intent intent = new Intent("android.settings.LOCATION_SOURCE_SETTINGS");
        intent.setFlags(268435456);
        this.f26461a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(k.a aVar, x xVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(xVar, null, new Function1() { // from class: hp.w
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit w10;
                w10 = x.w((r.c) obj);
                return w10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(a.c.f26465d);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, final x xVar, final c cVar) {
        bn.r d10;
        bn.h c10 = aVar.c();
        d10 = bn.z.d(xVar, null, new Function1() { // from class: hp.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y10;
                y10 = x.y(x.this, cVar, (r.c) obj);
                return y10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f26291e));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r z(final x xVar, final c cVar, m.b it) {
        bn.r d10;
        bn.r d11;
        bn.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof m.b.c) {
            d12 = bn.z.d(xVar, null, new Function1() { // from class: hp.s
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A;
                    A = x.A(x.this, cVar, (r.c) obj);
                    return A;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof m.b.a) {
            d11 = bn.z.d(xVar, null, new Function1() { // from class: hp.t
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B;
                    B = x.B(x.this, cVar, (r.c) obj);
                    return B;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof m.b.C0365b) {
            xVar.s();
            d10 = bn.z.d(xVar, null, new Function1() { // from class: hp.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C;
                    C = x.C(x.this, cVar, (r.c) obj);
                    return C;
                }
            }, 1, null);
            return d10;
        } else {
            throw new qr.p();
        }
    }

    @Override // bn.k
    /* renamed from: D */
    public bn.i g(a state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return dn.s.a(state);
    }

    @Override // bn.k
    /* renamed from: t */
    public a d(c props, bn.i iVar) {
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
            a aVar = (a) parcelable;
            if (aVar != null) {
                return aVar;
            }
        }
        return a.C0367a.f26463d;
    }

    @Override // bn.k
    /* renamed from: u */
    public Object f(final c renderProps, a renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, a.C0367a.f26463d)) {
            context.a("check_device_feature_state", new d(context, renderProps, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, a.d.f26466d)) {
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
            Function0 function0 = new Function0() { // from class: hp.p
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
            return new bq.k(new k(e10, d10, c10, f10, function0, b10, new Function0() { // from class: hp.q
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x10;
                    x10 = x.x(k.a.this, this, renderProps);
                    return x10;
                }
            }), bq.j.f6989i);
        } else if (Intrinsics.areEqual(renderState, a.c.f26465d)) {
            bn.w.l(context, this.f26462b.create(), Reflection.typeOf(m.class), "", new Function1() { // from class: hp.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r z10;
                    z10 = x.z(x.this, renderProps, (m.b) obj);
                    return z10;
                }
            });
            return null;
        } else if (Intrinsics.areEqual(renderState, a.b.f26464d)) {
            return null;
        } else {
            throw new qr.p();
        }
    }
}
