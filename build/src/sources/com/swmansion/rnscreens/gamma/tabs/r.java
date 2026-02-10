package com.swmansion.rnscreens.gamma.tabs;

import com.facebook.react.bridge.ReactContext;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends tn.a {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r(ReactContext reactContext, int i10) {
        super(reactContext, i10);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    public final void h(String tabKey, int i10, boolean z10) {
        Intrinsics.checkNotNullParameter(tabKey, "tabKey");
        e().dispatchEvent(new wn.e(f(), g(), tabKey, i10, z10));
    }
}
