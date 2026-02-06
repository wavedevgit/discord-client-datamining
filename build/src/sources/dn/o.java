package dn;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements c0 {

    /* renamed from: b  reason: collision with root package name */
    public static final o f20922b = new o();

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ i f20923a = new i(Reflection.getOrCreateKotlinClass(n.class), a.f20924d, null, null, 12, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f20924d = new a();

        a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Object invoke(n named) {
            Intrinsics.checkNotNullParameter(named, "named");
            return named.a();
        }
    }

    private o() {
    }

    @Override // dn.c0
    /* renamed from: b */
    public View a(n initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
        return this.f20923a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
    }

    @Override // dn.c0
    public KClass getType() {
        return this.f20923a.getType();
    }
}
