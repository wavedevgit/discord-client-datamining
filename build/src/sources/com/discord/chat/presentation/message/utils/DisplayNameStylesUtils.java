package com.discord.chat.presentation.message.utils;

import android.widget.TextView;
import com.discord.chat.bridge.displaynamestyles.DisplayNameStyles;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u0005J\u0014\u0010\u000f\u001a\u00020\u0010*\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/presentation/message/utils/DisplayNameStylesUtils;", "", "<init>", "()V", "DISPLAY_NAME_FONT_CHERRY_BOMB", "", "DISPLAY_NAME_FONT_CHICLE", "DISPLAY_NAME_FONT_MUSEO_MODERNO", "DISPLAY_NAME_FONT_NEO_CASTEL", "DISPLAY_NAME_FONT_PIXELIFY", "DISPLAY_NAME_FONT_SINISTRE", "DISPLAY_NAME_FONT_ZILLA_SLAB", "getDisplayNameFont", "Lcom/discord/fonts/DiscordFont;", "fontId", "applyDisplayNameStyles", "", "Landroid/widget/TextView;", "displayNameStyles", "Lcom/discord/chat/bridge/displaynamestyles/DisplayNameStyles;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DisplayNameStylesUtils {
    private static final int DISPLAY_NAME_FONT_CHERRY_BOMB = 3;
    private static final int DISPLAY_NAME_FONT_CHICLE = 4;
    private static final int DISPLAY_NAME_FONT_MUSEO_MODERNO = 6;
    private static final int DISPLAY_NAME_FONT_NEO_CASTEL = 7;
    private static final int DISPLAY_NAME_FONT_PIXELIFY = 8;
    private static final int DISPLAY_NAME_FONT_SINISTRE = 10;
    private static final int DISPLAY_NAME_FONT_ZILLA_SLAB = 12;
    @NotNull
    public static final DisplayNameStylesUtils INSTANCE = new DisplayNameStylesUtils();

    private DisplayNameStylesUtils() {
    }

    public final void applyDisplayNameStyles(@NotNull TextView textView, DisplayNameStyles displayNameStyles) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        if (displayNameStyles == null) {
            DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
        } else {
            DiscordFontUtilsKt.setDiscordFont(textView, getDisplayNameFont(displayNameStyles.getFontId()));
        }
    }

    @NotNull
    public final DiscordFont getDisplayNameFont(int i10) {
        if (i10 != 3) {
            if (i10 != 4) {
                if (i10 != 6) {
                    if (i10 != 7) {
                        if (i10 != 8) {
                            if (i10 != 10) {
                                if (i10 != 12) {
                                    return DiscordFont.PrimarySemibold;
                                }
                                return DiscordFont.ZillaSlabSemibold;
                            }
                            return DiscordFont.SinistreNormal;
                        }
                        return DiscordFont.PixelifySansNormal;
                    }
                    return DiscordFont.NeoCastelNormal;
                }
                return DiscordFont.MuseoModernoMedium;
            }
            return DiscordFont.ChicleNormal;
        }
        return DiscordFont.CherryBombOneNormal;
    }
}
