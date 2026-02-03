package com.discord.device.utils;

import android.app.Activity;
import android.os.Build;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.window.layout.WindowMetrics;
import com.discord.device.react_events.MetricsSize;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007J\u0012\u0010\b\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¨\u0006\t"}, d2 = {"Lcom/discord/device/utils/DeviceMetrics;", "", "<init>", "()V", "getScreenSize", "Lcom/discord/device/react_events/MetricsSize;", "currentActivity", "Landroid/app/Activity;", "getWindowSize", "device_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeviceMetrics {
    @NotNull
    public static final DeviceMetrics INSTANCE = new DeviceMetrics();

    private DeviceMetrics() {
    }

    public final MetricsSize getScreenSize(Activity activity) {
        if (Build.VERSION.SDK_INT < 34 || activity == null) {
            return null;
        }
        try {
            return new MetricsSize(i4.a.f28025a.a().a(activity));
        } catch (Exception unused) {
            return null;
        }
    }

    public final MetricsSize getWindowSize(Activity activity) {
        if (activity == null) {
            return null;
        }
        try {
            WindowMetrics a10 = i4.a.f28025a.a().a(activity);
            if (Build.VERSION.SDK_INT >= 34) {
                Insets g10 = a10.b().g(WindowInsetsCompat.p.h() | WindowInsetsCompat.p.b());
                Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
                return new MetricsSize((a10.a().width() - g10.f3194a) - g10.f3196c, (a10.a().height() - g10.f3195b) - g10.f3197d);
            }
        } catch (Exception unused) {
        }
        return null;
    }
}
