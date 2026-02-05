package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import bn.c0;
import bn.k;
import com.withpersona.sdk2.inquiry.internal.n;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import so.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements bn.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f18920c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f18921b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f18922a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0245a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0245a f18923d = new C0245a();

            C0245a() {
                super(1, i.class, "<init>", "<init>(Landroid/view/View;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final i invoke(View p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new i(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // bn.c0
        /* renamed from: b */
        public View a(n.d.a initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f18922a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f18922a.getType();
        }

        private a() {
            k.a aVar = bn.k.f6590a;
            this.f18922a = new bn.m(Reflection.getOrCreateKotlinClass(n.d.a.class), g2.f50104d, C0245a.f18923d);
        }
    }

    public i(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f18921b = view;
    }

    @Override // bn.k
    /* renamed from: b */
    public void a(n.d.a rendering, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
    }
}
