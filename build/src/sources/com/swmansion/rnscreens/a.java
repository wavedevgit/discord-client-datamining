package com.swmansion.rnscreens;

import android.content.Context;
import android.view.View;
import com.google.android.material.appbar.AppBarLayout;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends AppBarLayout {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void G(int i10) {
        measure(View.MeasureSpec.makeMeasureSpec(getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(getHeight() + i10, 1073741824));
        layout(getLeft(), getTop(), getRight(), getBottom() + i10);
    }

    public final void H(int i10) {
        G(i10);
    }
}
