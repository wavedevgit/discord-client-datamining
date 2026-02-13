package gn;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements c0 {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f25851a;

    /* renamed from: b  reason: collision with root package name */
    private final int f25852b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f25853c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ k f25854d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(k kVar) {
            super(2);
            this.f25854d = kVar;
        }

        public final void a(Object rendering, a0 environment) {
            Intrinsics.checkNotNullParameter(rendering, "rendering");
            Intrinsics.checkNotNullParameter(environment, "environment");
            this.f25854d.a(rendering, environment);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a(obj, (a0) obj2);
            return Unit.f32556a;
        }
    }

    public m(KClass type, int i10, Function1 runnerConstructor) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(runnerConstructor, "runnerConstructor");
        this.f25851a = type;
        this.f25852b = i10;
        this.f25853c = runnerConstructor;
    }

    @Override // gn.c0
    public View a(Object initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        View view = l.a(contextForNewView, viewGroup).inflate(this.f25852b, viewGroup, false);
        Function1 function1 = this.f25853c;
        Intrinsics.checkNotNullExpressionValue(view, "view");
        g0.a(view, initialRendering, initialViewEnvironment, new a((k) function1.invoke(view)));
        Intrinsics.checkNotNullExpressionValue(view, "contextForNewView.viewBi…onment)\n        }\n      }");
        return view;
    }

    @Override // gn.c0
    public KClass getType() {
        return this.f25851a;
    }
}
