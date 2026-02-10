package com.swmansion.rnscreens.gamma.stack.screen;

import com.facebook.react.bridge.ReactContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import vn.e;
import vn.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends tn.a implements tn.c {

    /* renamed from: e  reason: collision with root package name */
    public static final a f19205e = new a(null);

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

    @Override // tn.c
    public void a() {
        e().dispatchEvent(new f(f(), g()));
    }

    @Override // tn.c
    public void b() {
        e().dispatchEvent(new vn.b(f(), g()));
    }

    @Override // tn.c
    public void c() {
        e().dispatchEvent(new vn.a(f(), g()));
    }

    @Override // tn.c
    public void d() {
        e().dispatchEvent(new e(f(), g()));
    }

    public final void h(boolean z10) {
        e().dispatchEvent(new vn.c(f(), g(), z10));
    }
}
