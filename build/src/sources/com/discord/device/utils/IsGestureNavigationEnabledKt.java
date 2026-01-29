package com.discord.device.utils;

import android.annotation.SuppressLint;
import android.content.Context;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0000\u001a\f\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0007¨\u0006\u0003"}, d2 = {"isGestureNavigationEnabled", "", "Landroid/content/Context;", "device_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class IsGestureNavigationEnabledKt {
    @SuppressLint({"DiscouragedApi"})
    public static final boolean isGestureNavigationEnabled(@NotNull Context context) {
        int i10;
        Intrinsics.checkNotNullParameter(context, "<this>");
        int identifier = context.getResources().getIdentifier("config_navBarInteractionMode", InquiryField.IntegerField.TYPE, "android");
        if (identifier > 0) {
            i10 = context.getResources().getInteger(identifier);
        } else {
            i10 = 0;
        }
        if (i10 != NavigationType.GESTURE.getValue()) {
            return false;
        }
        return true;
    }
}
