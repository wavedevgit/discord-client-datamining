package com.swmansion.rnscreens.gamma.tabs;

import com.facebook.react.bridge.ReactContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends tn.a {

    /* renamed from: e  reason: collision with root package name */
    public static final a f19232e = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ReactContext reactContext, int i10) {
        super(reactContext, i10);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    public final void a() {
        d.b(g(), "onWillDisappear");
        e().dispatchEvent(new wn.d(f(), g()));
    }

    public final void b() {
        d.b(g(), "onDidDisappear");
        e().dispatchEvent(new wn.b(f(), g()));
    }

    public final void c() {
        d.b(g(), "onDidAppear");
        e().dispatchEvent(new wn.a(f(), g()));
    }

    public final void d() {
        d.b(g(), "onWillAppear");
        e().dispatchEvent(new wn.c(f(), g()));
    }
}
