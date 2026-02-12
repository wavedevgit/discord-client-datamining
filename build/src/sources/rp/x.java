package rp;

import android.content.Context;
import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import en.k;
import en.r;
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
import rp.m;
import rp.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends en.k {

    /* renamed from: a  reason: collision with root package name */
    private final Context f47708a;

    /* renamed from: b  reason: collision with root package name */
    private final m.a f47709b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a implements Parcelable {

        /* renamed from: rp.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0642a extends a {

            /* renamed from: d  reason: collision with root package name */
            public static final C0642a f47710d = new C0642a();
            @NotNull
            public static final Parcelable.Creator<C0642a> CREATOR = new C0643a();

            /* renamed from: rp.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0643a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0642a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return C0642a.f47710d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0642a[] newArray(int i10) {
                    return new C0642a[i10];
                }
            }

            private C0642a() {
                super(null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0642a)) {
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
            public static final b f47711d = new b();
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new C0644a();

            /* renamed from: rp.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0644a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return b.f47711d;
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
            public static final c f47712d = new c();
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0645a();

            /* renamed from: rp.x$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0645a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return c.f47712d;
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
            public static final d f47713d = new d();
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new C0646a();

            /* renamed from: rp.x$a$d$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0646a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return d.f47713d;
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
        private final a0 f47714a;

        public b(a0 deviceFeatureState) {
            Intrinsics.checkNotNullParameter(deviceFeatureState, "deviceFeatureState");
            this.f47714a = deviceFeatureState;
        }

        public final a0 a() {
            return this.f47714a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f47714a, ((b) obj).f47714a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f47714a.hashCode();
        }

        public String toString() {
            a0 a0Var = this.f47714a;
            return "Output(deviceFeatureState=" + a0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final b0 f47715a;

        /* renamed from: b  reason: collision with root package name */
        private final String f47716b;

        /* renamed from: c  reason: collision with root package name */
        private final String f47717c;

        /* renamed from: d  reason: collision with root package name */
        private final String f47718d;

        /* renamed from: e  reason: collision with root package name */
        private final String f47719e;

        /* renamed from: f  reason: collision with root package name */
        private final StepStyle f47720f;

        public c(b0 feature, String str, String str2, String str3, String str4, StepStyle stepStyle) {
            Intrinsics.checkNotNullParameter(feature, "feature");
            this.f47715a = feature;
            this.f47716b = str;
            this.f47717c = str2;
            this.f47718d = str3;
            this.f47719e = str4;
            this.f47720f = stepStyle;
        }

        public final b0 a() {
            return this.f47715a;
        }

        public final String b() {
            return this.f47719e;
        }

        public final String c() {
            return this.f47718d;
        }

        public final String d() {
            return this.f47717c;
        }

        public final String e() {
            return this.f47716b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f47715a == cVar.f47715a && Intrinsics.areEqual(this.f47716b, cVar.f47716b) && Intrinsics.areEqual(this.f47717c, cVar.f47717c) && Intrinsics.areEqual(this.f47718d, cVar.f47718d) && Intrinsics.areEqual(this.f47719e, cVar.f47719e) && Intrinsics.areEqual(this.f47720f, cVar.f47720f)) {
                return true;
            }
            return false;
        }

        public final StepStyle f() {
            return this.f47720f;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5 = this.f47715a.hashCode() * 31;
            String str = this.f47716b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode5 + hashCode) * 31;
            String str2 = this.f47717c;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f47718d;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f47719e;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            StepStyle stepStyle = this.f47720f;
            if (stepStyle != null) {
                i10 = stepStyle.hashCode();
            }
            return i14 + i10;
        }

        public String toString() {
            b0 b0Var = this.f47715a;
            String str = this.f47716b;
            String str2 = this.f47717c;
            String str3 = this.f47718d;
            String str4 = this.f47719e;
            StepStyle stepStyle = this.f47720f;
            return "Props(feature=" + b0Var + ", requestFeatureTitle=" + str + ", requestFeatureRationale=" + str2 + ", requestFeatureModalPositiveButton=" + str3 + ", requestFeatureModalNegativeButton=" + str4 + ", styles=" + stepStyle + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f47721d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f47723i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ c f47724o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(k.a aVar, c cVar, Continuation continuation) {
            super(2, continuation);
            this.f47723i = aVar;
            this.f47724o = cVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit l(x xVar, c cVar, r.c cVar2) {
            xVar.r(cVar2, new a0(cVar.a(), c0.f47537d));
            return Unit.f31988a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit m(r.c cVar) {
            cVar.e(a.d.f47713d);
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f47723i, this.f47724o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            en.r d11;
            gs.b.f();
            if (this.f47721d == 0) {
                kotlin.c.b(obj);
                if (iq.f.b(x.this.f47708a)) {
                    en.h c10 = this.f47723i.c();
                    final x xVar = x.this;
                    final c cVar = this.f47724o;
                    d11 = en.z.d(xVar, null, new Function1() { // from class: rp.y
                        @Override // kotlin.jvm.functions.Function1
                        public final Object invoke(Object obj2) {
                            Unit l10;
                            l10 = x.d.l(x.this, cVar, (r.c) obj2);
                            return l10;
                        }
                    }, 1, null);
                    c10.d(d11);
                } else {
                    en.h c11 = this.f47723i.c();
                    d10 = en.z.d(x.this, null, new Function1() { // from class: rp.z
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
        this.f47708a = applicationContext;
        this.f47709b = deviceFeatureRequestWorkerFactory;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f47537d));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f47538e));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x xVar, c cVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        xVar.r(action, new a0(cVar.a(), c0.f47539i));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void r(r.c cVar, a0 a0Var) {
        cVar.d(new b(a0Var));
    }

    private final void s() {
        Intent intent = new Intent("android.settings.LOCATION_SOURCE_SETTINGS");
        intent.setFlags(268435456);
        this.f47708a.startActivity(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(k.a aVar, x xVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(xVar, null, new Function1() { // from class: rp.w
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
        action.e(a.c.f47712d);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(k.a aVar, final x xVar, final c cVar) {
        en.r d10;
        en.h c10 = aVar.c();
        d10 = en.z.d(xVar, null, new Function1() { // from class: rp.v
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
        xVar.r(action, new a0(cVar.a(), c0.f47538e));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r z(final x xVar, final c cVar, m.b it) {
        en.r d10;
        en.r d11;
        en.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof m.b.c) {
            d12 = en.z.d(xVar, null, new Function1() { // from class: rp.s
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A;
                    A = x.A(x.this, cVar, (r.c) obj);
                    return A;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof m.b.a) {
            d11 = en.z.d(xVar, null, new Function1() { // from class: rp.t
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B;
                    B = x.B(x.this, cVar, (r.c) obj);
                    return B;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof m.b.C0640b) {
            xVar.s();
            d10 = en.z.d(xVar, null, new Function1() { // from class: rp.u
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit C;
                    C = x.C(x.this, cVar, (r.c) obj);
                    return C;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    @Override // en.k
    /* renamed from: D */
    public en.i g(a state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return gn.s.a(state);
    }

    @Override // en.k
    /* renamed from: t */
    public a d(c props, en.i iVar) {
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
                parcelable = obtain.readParcelable(en.i.class.getClassLoader());
                Intrinsics.checkNotNull(parcelable);
                Intrinsics.checkNotNullExpressionValue(parcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
            }
            a aVar = (a) parcelable;
            if (aVar != null) {
                return aVar;
            }
        }
        return a.C0642a.f47710d;
    }

    @Override // en.k
    /* renamed from: u */
    public Object f(final c renderProps, a renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        if (Intrinsics.areEqual(renderState, a.C0642a.f47710d)) {
            context.a("check_device_feature_state", new d(context, renderProps, null));
            return null;
        } else if (Intrinsics.areEqual(renderState, a.d.f47713d)) {
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
            Function0 function0 = new Function0() { // from class: rp.p
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
            return new lq.k(new k(e10, d10, c10, f10, function0, b10, new Function0() { // from class: rp.q
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x10;
                    x10 = x.x(k.a.this, this, renderProps);
                    return x10;
                }
            }), lq.j.f35983i);
        } else if (Intrinsics.areEqual(renderState, a.c.f47712d)) {
            en.w.l(context, this.f47709b.create(), Reflection.typeOf(m.class), "", new Function1() { // from class: rp.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r z10;
                    z10 = x.z(x.this, renderProps, (m.b) obj);
                    return z10;
                }
            });
            return null;
        } else if (Intrinsics.areEqual(renderState, a.b.f47711d)) {
            return null;
        } else {
            throw new as.p();
        }
    }
}
