package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import com.withpersona.sdk2.inquiry.internal.n;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import mo.g2;
import vm.c0;
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements vm.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f19899c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f19900b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f19901a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0241a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0241a f19902d = new C0241a();

            C0241a() {
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

        @Override // vm.c0
        /* renamed from: b */
        public View a(n.d.a initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f19901a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // vm.c0
        public KClass getType() {
            return this.f19901a.getType();
        }

        private a() {
            k.a aVar = vm.k.f51283a;
            this.f19901a = new vm.m(Reflection.getOrCreateKotlinClass(n.d.a.class), g2.f39453d, C0241a.f19902d);
        }
    }

    public i(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f19900b = view;
    }

    @Override // vm.k
    /* renamed from: b */
    public void a(n.d.a rendering, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
    }
}
