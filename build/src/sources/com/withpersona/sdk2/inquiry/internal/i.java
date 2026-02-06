package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import com.withpersona.sdk2.inquiry.internal.n;
import dn.c0;
import dn.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import uo.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements dn.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f18900c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final View f18901b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ c0 f18902a;

        /* renamed from: com.withpersona.sdk2.inquiry.internal.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0237a extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0237a f18903d = new C0237a();

            C0237a() {
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

        @Override // dn.c0
        /* renamed from: b */
        public View a(n.d.a initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f18902a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f18902a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f18902a = new dn.m(Reflection.getOrCreateKotlinClass(n.d.a.class), g2.f51950d, C0237a.f18903d);
        }
    }

    public i(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        this.f18901b = view;
    }

    @Override // dn.k
    /* renamed from: b */
    public void a(n.d.a rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
    }
}
