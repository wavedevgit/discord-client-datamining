package ym;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements c0 {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f54612a;

    /* renamed from: b  reason: collision with root package name */
    private final Function2 f54613b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f54614c;

    /* renamed from: d  reason: collision with root package name */
    private final Function4 f54615d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function4 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f54616d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function1 function1) {
            super(4);
            this.f54616d = function1;
        }

        public final void a(View noName_0, Function2 innerShowRendering, Object outerRendering, a0 viewEnvironment) {
            Intrinsics.checkNotNullParameter(noName_0, "$noName_0");
            Intrinsics.checkNotNullParameter(innerShowRendering, "innerShowRendering");
            Intrinsics.checkNotNullParameter(outerRendering, "outerRendering");
            Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
            innerShowRendering.invoke(this.f54616d.invoke(outerRendering), viewEnvironment);
        }

        @Override // kotlin.jvm.functions.Function4
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            a((View) obj, (Function2) obj2, obj3, (a0) obj4);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f54617d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function1 function1) {
            super(2);
            this.f54617d = function1;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Pair invoke(Object outer, a0 viewEnvironment) {
            Intrinsics.checkNotNullParameter(outer, "outer");
            Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
            return new Pair(this.f54617d.invoke(outer), viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function2 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ View f54619e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f54620i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(View view, Function2 function2) {
            super(2);
            this.f54619e = view;
            this.f54620i = function2;
        }

        public final void a(Object rendering, a0 env) {
            Intrinsics.checkNotNullParameter(rendering, "rendering");
            Intrinsics.checkNotNullParameter(env, "env");
            i.this.f54615d.invoke(this.f54619e, this.f54620i, rendering, env);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(obj, (a0) obj2);
            return Unit.f32464a;
        }
    }

    public i(KClass type, Function2 map, h0 h0Var, Function4 doShowRendering) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(map, "map");
        Intrinsics.checkNotNullParameter(doShowRendering, "doShowRendering");
        this.f54612a = type;
        this.f54613b = map;
        this.f54614c = h0Var;
        this.f54615d = doShowRendering;
    }

    @Override // ym.c0
    public View a(Object initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        Pair pair = (Pair) this.f54613b.invoke(initialRendering, initialViewEnvironment);
        Object a10 = pair.a();
        a0 a0Var = (a0) pair.b();
        View c10 = f0.c((e0) a0Var.a(e0.f54602a), a10, a0Var, contextForNewView, viewGroup, this.f54614c);
        Function2 d10 = g0.d(c10);
        Intrinsics.checkNotNull(d10);
        g0.a(c10, initialRendering, a0Var, new c(c10, d10));
        return c10;
    }

    @Override // ym.c0
    public KClass getType() {
        return this.f54612a;
    }

    public /* synthetic */ i(KClass kClass, Function1 function1, h0 h0Var, Function4 function4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(kClass, function1, (i10 & 4) != 0 ? null : h0Var, (i10 & 8) != 0 ? new a(function1) : function4);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public i(KClass type, Function1 map, h0 h0Var, Function4 doShowRendering) {
        this(type, new b(map), h0Var, doShowRendering);
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(map, "map");
        Intrinsics.checkNotNullParameter(doShowRendering, "doShowRendering");
    }
}
