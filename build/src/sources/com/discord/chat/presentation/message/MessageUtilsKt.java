package com.discord.chat.presentation.message;

import android.content.Context;
import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.widget.TextView;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.rolecolors.RoleColorsKt;
import com.discord.react.FontManager;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001c\n\u0000\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\n\u0010\u0000\u001a\u00020\u0001*\u00020\u0002\u001a\u0012\u0010\u0003\u001a\u00020\u0004*\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"getChatTextSizeSp", "", "Landroid/content/Context;", "clearOrSetRoleColors", "", "Landroid/widget/TextView;", "message", "Lcom/discord/chat/bridge/Message;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageUtilsKt {
    public static final void clearOrSetRoleColors(@NotNull TextView textView, @NotNull Message message) {
        Integer num;
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(message, "message");
        RoleColors androidColors = RoleColorsKt.toAndroidColors(message.getRoleColors());
        if (!message.getShouldShowRoleDot() && message.getShouldShowRoleOnName()) {
            if (androidColors != null) {
                num = androidColors.getSecondaryColor();
            } else {
                num = null;
            }
            if (num != null) {
                textView.getPaint().setShader(new LinearGradient(0.0f, 0.0f, 150.0f, 0.0f, CollectionsKt.g1(CollectionsKt.q(Integer.valueOf(androidColors.getPrimaryColor()), androidColors.getSecondaryColor(), androidColors.getTertiaryColor())), (float[]) null, Shader.TileMode.MIRROR));
                return;
            }
        }
        textView.getPaint().setShader(null);
    }

    public static final int getChatTextSizeSp(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        if (FontManager.INSTANCE.getIsClassicChatFontScaleEnabled(context)) {
            return 14;
        }
        return 16;
    }
}
