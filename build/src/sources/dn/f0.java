package dn;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import java.util.Arrays;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h0 f20871d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f20872e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: dn.f0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0272a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function1 f20873d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ View f20874e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0272a(Function1 function1, View view) {
                super(0);
                this.f20873d = function1;
                this.f20874e = view;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1171invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1171invoke() {
                this.f20873d.invoke(this.f20874e);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(h0 h0Var, Function1 function1) {
            super(1);
            this.f20871d = h0Var;
            this.f20872e = function1;
        }

        public final void a(View newView) {
            Intrinsics.checkNotNullParameter(newView, "newView");
            this.f20871d.a(newView, new C0272a(this.f20872e, newView));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((View) obj);
            return Unit.f32056a;
        }
    }

    public static final e0 a() {
        return new y(new c0[0]);
    }

    public static final e0 b(c0... bindings) {
        Intrinsics.checkNotNullParameter(bindings, "bindings");
        return new y((c0[]) Arrays.copyOf(bindings, bindings.length));
    }

    public static final View c(e0 e0Var, Object initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup, h0 h0Var) {
        Intrinsics.checkNotNullParameter(e0Var, "<this>");
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        View a10 = e(e0Var, initialRendering).a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        if (k0.d(a10) != null) {
            if (h0Var == null) {
                return a10;
            }
            g0.f(a10, new a(h0Var, g0.e(a10)));
            return a10;
        }
        throw new IllegalStateException(("View.bindShowRendering should have been called for " + a10 + ", typically by the " + ((Object) c0.class.getName()) + " that created it.").toString());
    }

    public static /* synthetic */ View d(e0 e0Var, Object obj, a0 a0Var, Context context, ViewGroup viewGroup, h0 h0Var, int i10, Object obj2) {
        if ((i10 & 8) != 0) {
            viewGroup = null;
        }
        if ((i10 & 16) != 0) {
            h0Var = null;
        }
        return c(e0Var, obj, a0Var, context, viewGroup, h0Var);
    }

    public static final c0 e(e0 e0Var, Object rendering) {
        b bVar;
        n nVar;
        Intrinsics.checkNotNullParameter(e0Var, "<this>");
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        c0 a10 = e0Var.a(Reflection.getOrCreateKotlinClass(rendering.getClass()));
        if (a10 == null) {
            o oVar = null;
            if (rendering instanceof b) {
                bVar = (b) rendering;
            } else {
                bVar = null;
            }
            if (bVar == null) {
                a10 = null;
            } else {
                a10 = bVar.a();
            }
            if (a10 == null) {
                a10 = null;
            }
            if (a10 == null) {
                if (rendering instanceof n) {
                    nVar = (n) rendering;
                } else {
                    nVar = null;
                }
                if (nVar != null) {
                    oVar = o.f20922b;
                }
                if (oVar != null) {
                    return oVar;
                }
                throw new IllegalArgumentException("A " + ((Object) Reflection.getOrCreateKotlinClass(c0.class).getQualifiedName()) + " should have been registered to display " + ((Object) Reflection.getOrCreateKotlinClass(rendering.getClass()).getQualifiedName()) + " instances, or that class should implement " + ((Object) Reflection.getOrCreateKotlinClass(b.class).getSimpleName()) + '<' + ((Object) Reflection.getOrCreateKotlinClass(rendering.getClass()).getSimpleName()) + ">.");
            }
        }
        return a10;
    }
}
