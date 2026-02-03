package ym;

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
        private final Object f54645a;

        /* renamed from: b  reason: collision with root package name */
        private final a0 f54646b;

        /* renamed from: c  reason: collision with root package name */
        private final Function2 f54647c;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Object showing, a0 environment, Function2 showRendering) {
            super(null);
            Intrinsics.checkNotNullParameter(showing, "showing");
            Intrinsics.checkNotNullParameter(environment, "environment");
            Intrinsics.checkNotNullParameter(showRendering, "showRendering");
            this.f54645a = showing;
            this.f54646b = environment;
            this.f54647c = showRendering;
        }

        @Override // ym.j0
        public a0 a() {
            return this.f54646b;
        }

        @Override // ym.j0
        public Function2 b() {
            return this.f54647c;
        }

        @Override // ym.j0
        /* renamed from: d */
        public Object c() {
            return this.f54645a;
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
        private final Object f54640a;

        /* renamed from: b  reason: collision with root package name */
        private final a0 f54641b;

        /* renamed from: c  reason: collision with root package name */
        private final Function2 f54642c;

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f54643d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ym.j0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0751a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0751a f54644d = new C0751a();

            C0751a() {
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
                return Unit.f32464a;
            }
        }

        public /* synthetic */ a(Object obj, a0 a0Var, Function2 function2, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(obj, a0Var, function2, (i10 & 8) != 0 ? C0751a.f54644d : function1);
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
                function1 = aVar.f54643d;
            }
            return aVar.d(obj, a0Var, function2, function1);
        }

        @Override // ym.j0
        public a0 a() {
            return this.f54641b;
        }

        @Override // ym.j0
        public Function2 b() {
            return this.f54642c;
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
            if (Intrinsics.areEqual(c(), aVar.c()) && Intrinsics.areEqual(a(), aVar.a()) && Intrinsics.areEqual(b(), aVar.b()) && Intrinsics.areEqual(this.f54643d, aVar.f54643d)) {
                return true;
            }
            return false;
        }

        @Override // ym.j0
        /* renamed from: f */
        public Object c() {
            return this.f54640a;
        }

        public final Function1 g() {
            return this.f54643d;
        }

        public int hashCode() {
            return (((((c().hashCode() * 31) + a().hashCode()) * 31) + b().hashCode()) * 31) + this.f54643d.hashCode();
        }

        public String toString() {
            return "New(showing=" + c() + ", environment=" + a() + ", showRendering=" + b() + ", starter=" + this.f54643d + ')';
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Object showing, a0 environment, Function2 showRendering, Function1 starter) {
            super(null);
            Intrinsics.checkNotNullParameter(showing, "showing");
            Intrinsics.checkNotNullParameter(environment, "environment");
            Intrinsics.checkNotNullParameter(showRendering, "showRendering");
            Intrinsics.checkNotNullParameter(starter, "starter");
            this.f54640a = showing;
            this.f54641b = environment;
            this.f54642c = showRendering;
            this.f54643d = starter;
        }
    }

    private j0() {
    }
}
