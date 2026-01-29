package com.discord.theme;

import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
import pr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/discord/theme/DiscordTheme;", "", "<init>", "(Ljava/lang/String;I)V", "LIGHT", "DARK", "MIDNIGHT", "DARK_LEGACY", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DiscordTheme {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ DiscordTheme[] $VALUES;
    public static final DiscordTheme LIGHT = new DiscordTheme("LIGHT", 0);
    public static final DiscordTheme DARK = new DiscordTheme("DARK", 1);
    public static final DiscordTheme MIDNIGHT = new DiscordTheme("MIDNIGHT", 2);
    public static final DiscordTheme DARK_LEGACY = new DiscordTheme("DARK_LEGACY", 3);

    private static final /* synthetic */ DiscordTheme[] $values() {
        return new DiscordTheme[]{LIGHT, DARK, MIDNIGHT, DARK_LEGACY};
    }

    static {
        DiscordTheme[] $values = $values();
        $VALUES = $values;
        $ENTRIES = a.a($values);
    }

    private DiscordTheme(String str, int i10) {
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static DiscordTheme valueOf(String str) {
        return (DiscordTheme) Enum.valueOf(DiscordTheme.class, str);
    }

    public static DiscordTheme[] values() {
        return (DiscordTheme[]) $VALUES.clone();
    }
}
