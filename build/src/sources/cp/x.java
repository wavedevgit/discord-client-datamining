package cp;

import android.content.Context;
import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import cp.m;
import cp.x;
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
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends wm.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f19777a;

    /* renamed from: b  reason: collision with root package name */
    private final m.a f19778b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a implements Parcelable {

        /* renamed from: cp.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0258a extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final C0258a f19779d = new C0258a();
            @NotNull
            public static final Parcelable.Creator<C0258a> CREATOR = new C0259a();

            /* renamed from: cp.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0259a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0258a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0258a.f19779d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0258a[] newArray(int i10) {
                    return new C0258a[i10];
                }
            }

            private C0258a() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0258a)) {
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
            public static final b f19780d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new C0260a();

            /* renamed from: cp.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0260a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f19780d;
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
            public static final c f19781d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0261a();

            /* renamed from: cp.x$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0261a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f19781d;
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
            public static final d f19782d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new C0262a();

            /* renamed from: cp.x$a$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0262a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f19782d;
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
        private final a0 f19783a;

        public b(a0 deviceFeatureState) {
            Intrinsics.checkNotNullParameter(deviceFeatureState, "deviceFeatureState");
            this.f19783a = deviceFeatureState;
        }

        public final a0 a() {
            return this.f19783a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f19783a, ((b) obj).f19783a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f19783a.hashCode();
        }

        public String toString() {
            a0 a0Var = this.f19783a;
            return "Output(deviceFeatureState=" + a0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final b0 f19784a;

        /* renamed from: b  reason: collision with root package name */
        private final String f19785b;

        /* renamed from: c  reason: collision with root package name */
        private final String f19786c;

        /* renamed from: d  reason: collision with root package name */
        private final String f19787d;

        /* renamed from: e  reason: collision with root package name */
        private final String f19788e;

        /* renamed from: f  reason: collision with root package name */
        private final StepStyle f19789f;

        public c(b0 feature, String str, String str2, String str3, String str4, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(feature, "feature");
            this.f19784a = feature;
            this.f19785b = str;
            this.f19786c = str2;
            this.f19787d = str3;
            this.f19788e = str4;
            this.f19789f = stepStyle;
        }

        public final b0 a() {
            return this.f19784a;
        }

        public final String b() {
            return this.f19788e;
        }

        public final String c() {
            return this.f19787d;
        }

        public final String d() {
            return this.f19786c;
        }

        public final String e() {
            return this.f19785b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f19784a == cVar.f19784a && Intrinsics.areEqual(this.f19785b, cVar.f19785b) && Intrinsics.areEqual(this.f19786c, cVar.f19786c) && Intrinsics.areEqual(this.f19787d, cVar.f19787d) && Intrinsics.areEqual(this.f19788e, cVar.f19788e) && Intrinsics.areEqual(this.f19789f, cVar.f19789f)) {
                return true;
            }
            return false;
        }

        public final StepStyle f() {
            return this.f19789f;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f19784a.hashCode() * 31;
            String str = this.f19785b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            String str2 = this.f19786c;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f19787d;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f19788e;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            StepStyle stepStyle = this.f19789f;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i14 + i10;
        }

        public String toString() {
            b0 b0Var = this.f19784a;
            String str = this.f19785b;
            String str2 = this.f19786c;
            String str3 = this.f19787d;
            String str4 = this.f19788e;
            StepStyle stepStyle = this.f19789f;
            return "Props(feature=" + b0Var + ", requestFeatureTitle=" + str + ", requestFeatureRationale=" + str2 + ", requestFeatureModalPositiveButton=" + str3 + ", requestFeatureModalNegativeButton=" + str4 + ", styles=" + stepStyle + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19790d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f19792i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f19793o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(k.a aVar, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f19792i = aVar;
            this.f19793o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(x xVar, c cVar, r.c cVar2) {
            xVar.r(cVar2, new a0(cVar.a(), c0.f19606d));
            return Unit.f32464a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(a.d.f19782d);
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f19792i, this.f19793o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r d10;
            wm.r d11;
            rr.b.f();
            if (this.f19790d == 0) {
                kotlin.c.b(obj);
                if (tp.f.b(x.this.f19777a)) {
                    wm.h c10 = this.f19792i.c();
                    final x xVar = x.this;
                    final c cVar = this.f19793o;
                    d11 = wm.z.d(xVar, null, new Function1() { // from class: cp.y
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = x.d.l(x.this, cVar, (r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    wm.h c11 = this.f19792i.c();
                    d10 = wm.z.d(x.this, null, new Function1() { // from class: cp.z
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit m10;
                            m10 = x.d.m((r.c) obj2);
                            return m10;
                        }
                    }, 1, null);
                    c11.d(d10);
                }
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public x(Context applicationContext, m.a deviceFeatureRequestWorkerFactory) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(deviceFeatureRequestWorkerFactory, "deviceFeatureRequestWorkerFactory");
        this.f19777a = applicationContext;
        this.f19778b = deviceFeatureRequestWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f19606d));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f19607e));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f19608i));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(r.c cVar, a0 a0Var) {
        cVar.d(new b(a0Var));
    }

    private final void s() {
        Intent intent = new Intent("android.settings.LOCATION_SOURCE_SETTINGS");
        intent.setFlags(268435456);
        this.f19777a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(k.a aVar, x xVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(xVar, null, new Function1() { // from class: cp.w
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit w10;
                w10 = x.w((r.c) obj);
                return w10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(a.c.f19781d);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, final x xVar, final c cVar) {
        wm.r d10;
        wm.h c10 = aVar.c();
        d10 = wm.z.d(xVar, null, new Function1() { // from class: cp.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit y10;
                y10 = x.y(x.this, cVar, (r.c) obj);
                return y10;
            }
        }, 1, null);
        c10.d(d10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f19607e));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r z(final x xVar, final c cVar, m.b it) {
        wm.r d10;
        wm.r d11;
        wm.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof m.b.c) {
            d12 = wm.z.d(xVar, null, new Function1() { // from class: cp.s
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A;
                    A = x.A(x.this, cVar, (r.c) obj);
                    return A;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof m.b.a) {
            d11 = wm.z.d(xVar, null, new Function1() { // from class: cp.t
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B;
                    B = x.B(x.this, cVar, (r.c) obj);
                    return B;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof m.b.C0256b) {
            xVar.s();
            d10 = wm.z.d(xVar, null, new Function1() { // from class: cp.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C;
                    C = x.C(x.this, cVar, (r.c) obj);
                    return C;
                }
            }, 1, null);
            return d10;
        } else {
            throw new lr.p();
        }
    }

    @Override // wm.k
    /* renamed from: D */
    public wm.i g(a state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return ym.s.a(state);
    }

    @Override // wm.k
    /* renamed from: t */
    public a d(c props, wm.i iVar) {
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
                parcelable = obtain.readParcelable(wm.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            a aVar = (a) parcelable;
            if (aVar != null) {
                return aVar;
            }
        }
        return a.C0258a.f19779d;
    }

    @Override // wm.k
    /* renamed from: u */
    public Object f(final c renderProps, a renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, a.C0258a.f19779d)) {
            context.a("check_device_feature_state", new d(context, renderProps, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, a.d.f19782d)) {
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
            Function0 function0 = new Function0() { // from class: cp.p
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
            return new wp.k(new k(e10, d10, c10, f10, function0, b10, new Function0() { // from class: cp.q
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x10;
                    x10 = x.x(k.a.this, this, renderProps);
                    return x10;
                }
            }), wp.j.f52631i);
        } else if (Intrinsics.areEqual(renderState, a.c.f19781d)) {
            wm.w.l(context, this.f19778b.create(), Reflection.typeOf(m.class), "", new Function1() { // from class: cp.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r z10;
                    z10 = x.z(x.this, renderProps, (m.b) obj);
                    return z10;
                }
            });
            return null;
        } else if (Intrinsics.areEqual(renderState, a.b.f19780d)) {
            return null;
        } else {
            throw new lr.p();
        }
    }
}
