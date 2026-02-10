package com.swmansion.rnscreens;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u0 {

    /* renamed from: a  reason: collision with root package name */
    private Integer f19371a;

    public final void a(ScreenStackHeaderConfig config, Screen screen) {
        int height;
        Intrinsics.checkNotNullParameter(config, "config");
        if (config.h()) {
            height = 0;
        } else {
            height = config.getToolbar().getHeight();
        }
        Integer num = this.f19371a;
        if (num == null || height != num.intValue()) {
            this.f19371a = Integer.valueOf(height);
            if (screen != null) {
                screen.notifyHeaderHeightChange$react_native_screens_release(height);
            }
        }
    }
}
