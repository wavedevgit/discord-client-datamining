package ym;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.viewbinding.ViewBinding;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements c0 {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f54710a;

    /* renamed from: b  reason: collision with root package name */
    private final Function3 f54711b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f54712c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ k f54713d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(k kVar) {
            super(2);
            this.f54713d = kVar;
        }

        public final void a(Object rendering, a0 environment) {
            Intrinsics.checkNotNullParameter(rendering, "rendering");
            Intrinsics.checkNotNullParameter(environment, "environment");
            this.f54713d.a(rendering, environment);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(obj, (a0) obj2);
            return Unit.f32464a;
        }
    }

    public z(KClass type, Function3 bindingInflater, Function1 runnerConstructor) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(bindingInflater, "bindingInflater");
        Intrinsics.checkNotNullParameter(runnerConstructor, "runnerConstructor");
        this.f54710a = type;
        this.f54711b = bindingInflater;
        this.f54712c = runnerConstructor;
    }

    @Override // ym.c0
    public View a(Object initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        Function3 function3 = this.f54711b;
        LayoutInflater a10 = l.a(contextForNewView, viewGroup);
        Intrinsics.checkNotNullExpressionValue(a10, "contextForNewView.viewBi…LayoutInflater(container)");
        ViewBinding viewBinding = (ViewBinding) function3.invoke(a10, viewGroup, Boolean.FALSE);
        View root = viewBinding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "binding.root");
        g0.a(root, initialRendering, initialViewEnvironment, new a((k) this.f54712c.invoke(viewBinding)));
        View root2 = viewBinding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "bindingInflater(contextF…    }\n      }\n      .root");
        return root2;
    }

    @Override // ym.c0
    public KClass getType() {
        return this.f54710a;
    }
}
