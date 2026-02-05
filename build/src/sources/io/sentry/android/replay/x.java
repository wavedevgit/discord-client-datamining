package io.sentry.android.replay;

import android.view.View;
import android.view.Window;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x {
    public static final Window a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        w wVar = w.f28737a;
        View rootView = view.getRootView();
        Intrinsics.checkNotNullExpressionValue(rootView, "getRootView(...)");
        return wVar.d(rootView);
    }
}
