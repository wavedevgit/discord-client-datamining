package bn;

import android.view.View;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends j0 {

        /* renamed from: a  reason: collision with root package name */
        private final Object f6587a;

        /* renamed from: b  reason: collision with root package name */
        private final a0 f6588b;

        /* renamed from: c  reason: collision with root package name */
        private final Function2 f6589c;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Object showing, a0 environment, Function2 showRendering) {
            super(null);
            Intrinsics.checkNotNullParameter(showing, "showing");
            Intrinsics.checkNotNullParameter(environment, "environment");
            Intrinsics.checkNotNullParameter(showRendering, "showRendering");
            this.f6587a = showing;
            this.f6588b = environment;
            this.f6589c = showRendering;
        }

        @Override // bn.j0
        public a0 a() {
            return this.f6588b;
        }

        @Override // bn.j0
        public Function2 b() {
            return this.f6589c;
        }

        @Override // bn.j0
        /* renamed from: d */
        public Object c() {
            return this.f6587a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(c(), bVar.c()) && Intrinsics.areEqual(a(), bVar.a()) && Intrinsics.areEqual(b(), bVar.b())) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((c().hashCode() * 31) + a().hashCode()) * 31) + b().hashCode();
        }

        public String toString() {
            return "Started(showing=" + c() + ", environment=" + a() + ", showRendering=" + b() + ')';
        }
    }

    public /* synthetic */ j0(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract a0 a();

    public abstract Function2 b();

    public abstract Object c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends j0 {

        /* renamed from: a  reason: collision with root package name */
        private final Object f6582a;

        /* renamed from: b  reason: collision with root package name */
        private final a0 f6583b;

        /* renamed from: c  reason: collision with root package name */
        private final Function2 f6584c;

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f6585d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: bn.j0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0108a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0108a f6586d = new C0108a();

            C0108a() {
                super(1);
            }

            public final void a(View view) {
                Object c10;
                Intrinsics.checkNotNullParameter(view, "view");
                j0 d10 = k0.d(view);
                Object obj = null;
                if (d10 == null) {
                    c10 = null;
                } else {
                    c10 = d10.c();
                }
                if (c10 != null) {
                    obj = c10;
                }
                Intrinsics.checkNotNull(obj);
                a0 c11 = g0.c(view);
                Intrinsics.checkNotNull(c11);
                g0.g(view, obj, c11);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((View) obj);
                return Unit.f31988a;
            }
        }

        public /* synthetic */ a(Object obj, a0 a0Var, Function2 function2, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(obj, a0Var, function2, (i10 & 8) != 0 ? C0108a.f6586d : function1);
        }

        public static /* synthetic */ a e(a aVar, Object obj, a0 a0Var, Function2 function2, Function1 function1, int i10, Object obj2) {
            if ((i10 & 1) != 0) {
                obj = aVar.c();
            }
            if ((i10 & 2) != 0) {
                a0Var = aVar.a();
            }
            if ((i10 & 4) != 0) {
                function2 = aVar.b();
            }
            if ((i10 & 8) != 0) {
                function1 = aVar.f6585d;
            }
            return aVar.d(obj, a0Var, function2, function1);
        }

        @Override // bn.j0
        public a0 a() {
            return this.f6583b;
        }

        @Override // bn.j0
        public Function2 b() {
            return this.f6584c;
        }

        public final a d(Object showing, a0 environment, Function2 showRendering, Function1 starter) {
            Intrinsics.checkNotNullParameter(showing, "showing");
            Intrinsics.checkNotNullParameter(environment, "environment");
            Intrinsics.checkNotNullParameter(showRendering, "showRendering");
            Intrinsics.checkNotNullParameter(starter, "starter");
            return new a(showing, environment, showRendering, starter);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(c(), aVar.c()) && Intrinsics.areEqual(a(), aVar.a()) && Intrinsics.areEqual(b(), aVar.b()) && Intrinsics.areEqual(this.f6585d, aVar.f6585d)) {
                return true;
            }
            return false;
        }

        @Override // bn.j0
        /* renamed from: f */
        public Object c() {
            return this.f6582a;
        }

        public final Function1 g() {
            return this.f6585d;
        }

        public int hashCode() {
            return (((((c().hashCode() * 31) + a().hashCode()) * 31) + b().hashCode()) * 31) + this.f6585d.hashCode();
        }

        public String toString() {
            return "New(showing=" + c() + ", environment=" + a() + ", showRendering=" + b() + ", starter=" + this.f6585d + ')';
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Object showing, a0 environment, Function2 showRendering, Function1 starter) {
            super(null);
            Intrinsics.checkNotNullParameter(showing, "showing");
            Intrinsics.checkNotNullParameter(environment, "environment");
            Intrinsics.checkNotNullParameter(showRendering, "showRendering");
            Intrinsics.checkNotNullParameter(starter, "starter");
            this.f6582a = showing;
            this.f6583b = environment;
            this.f6584c = showRendering;
            this.f6585d = starter;
        }
    }

    private j0() {
    }
}
