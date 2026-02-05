package bn;

import android.view.View;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements bn.b {

    /* renamed from: d  reason: collision with root package name */
    private final Object f6535d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f6536e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f6537i;

    /* renamed from: o  reason: collision with root package name */
    private final c0 f6538o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f6539d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Object invoke(d outer) {
            Intrinsics.checkNotNullParameter(outer, "outer");
            return outer.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function4 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f6540d = new b();

        b() {
            super(4);
        }

        public final void a(View view, Function2 innerShowRendering, d outerRendering, a0 viewEnvironment) {
            Intrinsics.checkNotNullParameter(view, "view");
            Intrinsics.checkNotNullParameter(innerShowRendering, "innerShowRendering");
            Intrinsics.checkNotNullParameter(outerRendering, "outerRendering");
            Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
            if (!outerRendering.c()) {
                e.c(view, outerRendering.b());
            }
            innerShowRendering.invoke(outerRendering.d(), viewEnvironment);
            if (outerRendering.c()) {
                e.c(view, outerRendering.b());
            }
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((View) obj, (Function2) obj2, (d) obj3, (a0) obj4);
            return Unit.f31988a;
        }
    }

    public d(Object wrapped, boolean z10, Function0 function0) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        this.f6535d = wrapped;
        this.f6536e = z10;
        this.f6537i = function0;
        this.f6538o = new i(Reflection.getOrCreateKotlinClass(d.class), a.f6539d, null, b.f6540d, 4, null);
    }

    @Override // bn.b
    public c0 a() {
        return this.f6538o;
    }

    public final Function0 b() {
        return this.f6537i;
    }

    public final boolean c() {
        return this.f6536e;
    }

    public final Object d() {
        return this.f6535d;
    }

    public /* synthetic */ d(Object obj, boolean z10, Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(obj, (i10 & 2) != 0 ? false : z10, (i10 & 4) != 0 ? null : function0);
    }
}
