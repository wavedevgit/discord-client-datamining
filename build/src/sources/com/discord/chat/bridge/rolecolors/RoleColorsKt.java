package com.discord.chat.bridge.rolecolors;

import com.discord.react.utilities.ReactColorToAndroidColorKt;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.SourceDebugExtension;
import r1.c;
@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u000e\u0010\u0002\u001a\u0004\u0018\u00010\u0003*\u0004\u0018\u00010\u0003\"\u000e\u0010\u0000\u001a\u00020\u0001X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0004"}, d2 = {"ROLE_COLORS_PATTERN_WIDTH", "", "toAndroidColors", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRoleColors.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RoleColors.kt\ncom/discord/chat/bridge/rolecolors/RoleColorsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,23:1\n1#2:24\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleColorsKt {
    public static final float ROLE_COLORS_PATTERN_WIDTH = 150.0f;

    public static final RoleColors toAndroidColors(RoleColors roleColors) {
        Integer num;
        Integer num2 = null;
        if (roleColors == null) {
            return null;
        }
        int l10 = c.l(ReactColorToAndroidColorKt.reactColorToAndroidColor(roleColors.getPrimaryColor()), SetSpanOperation.SPAN_MAX_PRIORITY);
        Integer secondaryColor = roleColors.getSecondaryColor();
        if (secondaryColor != null) {
            num = Integer.valueOf(c.l(ReactColorToAndroidColorKt.reactColorToAndroidColor(secondaryColor.intValue()), SetSpanOperation.SPAN_MAX_PRIORITY));
        } else {
            num = null;
        }
        Integer tertiaryColor = roleColors.getTertiaryColor();
        if (tertiaryColor != null) {
            num2 = Integer.valueOf(c.l(ReactColorToAndroidColorKt.reactColorToAndroidColor(tertiaryColor.intValue()), SetSpanOperation.SPAN_MAX_PRIORITY));
        }
        return new RoleColors(l10, num, num2);
    }
}
