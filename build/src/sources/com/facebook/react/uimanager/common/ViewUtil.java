package com.facebook.react.uimanager.common;

import android.view.View;
import ir.c;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u0005H\u0007J\u0010\u0010\u0006\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\tH\u0007J\u0018\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u00052\u0006\u0010\n\u001a\u00020\u0005H\u0007J\u0010\u0010\u000b\u001a\u00020\f2\u0006\u0010\u0007\u001a\u00020\u0005H\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/facebook/react/uimanager/common/ViewUtil;", "", "<init>", "()V", "NO_SURFACE_ID", "", "getUIManagerType", "viewTag", "view", "Landroid/view/View;", "surfaceId", "isRootTag", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ViewUtil {
    @NotNull
    public static final ViewUtil INSTANCE = new ViewUtil();
    public static final int NO_SURFACE_ID = -1;

    private ViewUtil() {
    }

    public static final int getUIManagerType(int i10) {
        return i10 % 2 == 0 ? 2 : 1;
    }

    @c
    public static final boolean isRootTag(int i10) {
        if (i10 % 10 == 1) {
            return true;
        }
        return false;
    }

    public static final int getUIManagerType(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return getUIManagerType(view.getId());
    }

    public static final int getUIManagerType(int i10, int i11) {
        int i12 = i11 == -1 ? 1 : 2;
        if (i12 == 1 && !isRootTag(i10) && i10 % 2 == 0) {
            return 2;
        }
        return i12;
    }
}
