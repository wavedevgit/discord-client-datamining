package ym;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements c0 {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f54604a;

    /* renamed from: b  reason: collision with root package name */
    private final Function4 f54605b;

    public f(KClass type, Function4 viewConstructor) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(viewConstructor, "viewConstructor");
        this.f54604a = type;
        this.f54605b = viewConstructor;
    }

    @Override // ym.c0
    public View a(Object initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return (View) this.f54605b.invoke(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // ym.c0
    public KClass getType() {
        return this.f54604a;
    }
}
