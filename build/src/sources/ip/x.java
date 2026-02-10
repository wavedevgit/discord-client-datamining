package ip;

import android.content.Context;
import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import cn.k;
import cn.r;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import ip.m;
import ip.x;
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
public final class x extends cn.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f29601a;

    /* renamed from: b  reason: collision with root package name */
    private final m.a f29602b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a implements Parcelable {

        /* renamed from: ip.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0442a extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final C0442a f29603d = new C0442a();
            @NotNull
            public static final Parcelable.Creator<C0442a> CREATOR = new C0443a();

            /* renamed from: ip.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0443a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0442a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0442a.f29603d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0442a[] newArray(int i10) {
                    return new C0442a[i10];
                }
            }

            private C0442a() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0442a)) {
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
            public static final b f29604d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new C0444a();

            /* renamed from: ip.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0444a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f29604d;
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
            public static final c f29605d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0445a();

            /* renamed from: ip.x$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0445a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f29605d;
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
            public static final d f29606d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new C0446a();

            /* renamed from: ip.x$a$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0446a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f29606d;
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
        private final a0 f29607a;

        public b(a0 deviceFeatureState) {
            Intrinsics.checkNotNullParameter(deviceFeatureState, "deviceFeatureState");
            this.f29607a = deviceFeatureState;
        }

        public final a0 a() {
            return this.f29607a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f29607a, ((b) obj).f29607a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f29607a.hashCode();
        }

        public String toString() {
            a0 a0Var = this.f29607a;
            return "Output(deviceFeatureState=" + a0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final b0 f29608a;

        /* renamed from: b  reason: collision with root package name */
        private final String f29609b;

        /* renamed from: c  reason: collision with root package name */
        private final String f29610c;

        /* renamed from: d  reason: collision with root package name */
        private final String f29611d;

        /* renamed from: e  reason: collision with root package name */
        private final String f29612e;

        /* renamed from: f  reason: collision with root package name */
        private final StepStyle f29613f;

        public c(b0 feature, String str, String str2, String str3, String str4, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(feature, "feature");
            this.f29608a = feature;
            this.f29609b = str;
            this.f29610c = str2;
            this.f29611d = str3;
            this.f29612e = str4;
            this.f29613f = stepStyle;
        }

        public final b0 a() {
            return this.f29608a;
        }

        public final String b() {
            return this.f29612e;
        }

        public final String c() {
            return this.f29611d;
        }

        public final String d() {
            return this.f29610c;
        }

        public final String e() {
            return this.f29609b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f29608a == cVar.f29608a && Intrinsics.areEqual(this.f29609b, cVar.f29609b) && Intrinsics.areEqual(this.f29610c, cVar.f29610c) && Intrinsics.areEqual(this.f29611d, cVar.f29611d) && Intrinsics.areEqual(this.f29612e, cVar.f29612e) && Intrinsics.areEqual(this.f29613f, cVar.f29613f)) {
                return true;
            }
            return false;
        }

        public final StepStyle f() {
            return this.f29613f;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f29608a.hashCode() * 31;
            String str = this.f29609b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            String str2 = this.f29610c;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f29611d;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f29612e;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            StepStyle stepStyle = this.f29613f;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i14 + i10;
        }

        public String toString() {
            b0 b0Var = this.f29608a;
            String str = this.f29609b;
            String str2 = this.f29610c;
            String str3 = this.f29611d;
            String str4 = this.f29612e;
            StepStyle stepStyle = this.f29613f;
            return "Props(feature=" + b0Var + ", requestFeatureTitle=" + str + ", requestFeatureRationale=" + str2 + ", requestFeatureModalPositiveButton=" + str3 + ", requestFeatureModalNegativeButton=" + str4 + ", styles=" + stepStyle + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f29614d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f29616i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f29617o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(k.a aVar, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f29616i = aVar;
            this.f29617o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(x xVar, c cVar, r.c cVar2) {
            xVar.r(cVar2, new a0(cVar.a(), c0.f29430d));
            return Unit.f31765a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(a.d.f29606d);
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f29616i, this.f29617o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r d10;
            cn.r d11;
            xr.b.f();
            if (this.f29614d == 0) {
                kotlin.c.b(obj);
                if (zp.f.b(x.this.f29601a)) {
                    cn.h c10 = this.f29616i.c();
                    final x xVar = x.this;
                    final c cVar = this.f29617o;
                    d11 = cn.z.d(xVar, null, new Function1() { // from class: ip.y
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = x.d.l(x.this, cVar, (r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    cn.h c11 = this.f29616i.c();
                    d10 = cn.z.d(x.this, null, new Function1() { // from class: ip.z
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = x.d.m((r.c) obj2);
                            return m10;
                        }
                    }, 1, null);
                    c11.d(d10);
                }
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public x(Context applicationContext, m.a deviceFeatureRequestWorkerFactory) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkerFactory, "deviceFeatureRequestWorkerFactory");
        this.f29601a = applicationContext;
        this.f29602b = deviceFeatureRequestWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f29430d));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f29431e));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f29432i));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(r.c cVar, a0 a0Var) {
        cVar.d(new b(a0Var));
    }

    private final void s() {
        Intent intent = new Intent("android.settings.LOCATION_SOURCE_SETTINGS");
        intent.setFlags(268435456);
        this.f29601a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(k.a aVar, x xVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(xVar, null, new Function1() { // from class: ip.w
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit w10;
                w10 = x.w((r.c) obj);
                return w10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(a.c.f29605d);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, final x xVar, final c cVar) {
        cn.r d10;
        cn.h c10 = aVar.c();
        d10 = cn.z.d(xVar, null, new Function1() { // from class: ip.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y10;
                y10 = x.y(x.this, cVar, (r.c) obj);
                return y10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f29431e));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r z(final x xVar, final c cVar, m.b it) {
        cn.r d10;
        cn.r d11;
        cn.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof m.b.c) {
            d12 = cn.z.d(xVar, null, new Function1() { // from class: ip.s
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A;
                    A = x.A(x.this, cVar, (r.c) obj);
                    return A;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof m.b.a) {
            d11 = cn.z.d(xVar, null, new Function1() { // from class: ip.t
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B;
                    B = x.B(x.this, cVar, (r.c) obj);
                    return B;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof m.b.C0440b) {
            xVar.s();
            d10 = cn.z.d(xVar, null, new Function1() { // from class: ip.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C;
                    C = x.C(x.this, cVar, (r.c) obj);
                    return C;
                }
            }, 1, null);
            return d10;
        } else {
            throw new rr.p();
        }
    }

    @Override // cn.k
    /* renamed from: D */
    public cn.i g(a state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return en.s.a(state);
    }

    @Override // cn.k
    /* renamed from: t */
    public a d(c props, cn.i iVar) {
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
                parcelable = obtain.readParcelable(cn.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            a aVar = (a) parcelable;
            if (aVar != null) {
                return aVar;
            }
        }
        return a.C0442a.f29603d;
    }

    @Override // cn.k
    /* renamed from: u */
    public Object f(final c renderProps, a renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, a.C0442a.f29603d)) {
            context.a("check_device_feature_state", new d(context, renderProps, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, a.d.f29606d)) {
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
            Function0 function0 = new Function0() { // from class: ip.p
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
            return new cq.k(new k(e10, d10, c10, f10, function0, b10, new Function0() { // from class: ip.q
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x10;
                    x10 = x.x(k.a.this, this, renderProps);
                    return x10;
                }
            }), cq.j.f20144i);
        } else if (Intrinsics.areEqual(renderState, a.c.f29605d)) {
            cn.w.l(context, this.f29602b.create(), Reflection.typeOf(m.class), "", new Function1() { // from class: ip.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r z10;
                    z10 = x.z(x.this, renderProps, (m.b) obj);
                    return z10;
                }
            });
            return null;
        } else if (Intrinsics.areEqual(renderState, a.b.f29604d)) {
            return null;
        } else {
            throw new rr.p();
        }
    }
}
