package com.discord.chat.presentation.textutils;

import com.discord.fonts.DiscordFont;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.theme.ThemeManagerKt;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B3\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0003\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\tHÆ\u0003J5\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0003\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\tHÆ\u0001J\u0013\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006\u001f"}, d2 = {"Lcom/discord/chat/presentation/textutils/LinkStyle;", "", "font", "Lcom/discord/fonts/DiscordFont;", "linkColor", "", "backgroundStyle", "Lcom/discord/chat/presentation/textutils/LinkBackgroundStyle;", "icon", "Lcom/discord/react_asset_fetcher/ReactAsset;", "<init>", "(Lcom/discord/fonts/DiscordFont;ILcom/discord/chat/presentation/textutils/LinkBackgroundStyle;Lcom/discord/react_asset_fetcher/ReactAsset;)V", "getFont", "()Lcom/discord/fonts/DiscordFont;", "getLinkColor", "()I", "getBackgroundStyle", "()Lcom/discord/chat/presentation/textutils/LinkBackgroundStyle;", "getIcon", "()Lcom/discord/react_asset_fetcher/ReactAsset;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LinkStyle {
    private final LinkBackgroundStyle backgroundStyle;
    @NotNull
    private final DiscordFont font;
    private final ReactAsset icon;
    private final int linkColor;

    public LinkStyle() {
        this(null, 0, null, null, 15, null);
    }

    public static /* synthetic */ LinkStyle copy$default(LinkStyle linkStyle, DiscordFont discordFont, int i10, LinkBackgroundStyle linkBackgroundStyle, ReactAsset reactAsset, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            discordFont = linkStyle.font;
        }
        if ((i11 & 2) != 0) {
            i10 = linkStyle.linkColor;
        }
        if ((i11 & 4) != 0) {
            linkBackgroundStyle = linkStyle.backgroundStyle;
        }
        if ((i11 & 8) != 0) {
            reactAsset = linkStyle.icon;
        }
        return linkStyle.copy(discordFont, i10, linkBackgroundStyle, reactAsset);
    }

    @NotNull
    public final DiscordFont component1() {
        return this.font;
    }

    public final int component2() {
        return this.linkColor;
    }

    public final LinkBackgroundStyle component3() {
        return this.backgroundStyle;
    }

    public final ReactAsset component4() {
        return this.icon;
    }

    @NotNull
    public final LinkStyle copy(@NotNull DiscordFont font, int i10, LinkBackgroundStyle linkBackgroundStyle, ReactAsset reactAsset) {
        Intrinsics.checkNotNullParameter(font, "font");
        return new LinkStyle(font, i10, linkBackgroundStyle, reactAsset);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LinkStyle) {
            LinkStyle linkStyle = (LinkStyle) obj;
            return this.font == linkStyle.font && this.linkColor == linkStyle.linkColor && Intrinsics.areEqual(this.backgroundStyle, linkStyle.backgroundStyle) && this.icon == linkStyle.icon;
        }
        return false;
    }

    public final LinkBackgroundStyle getBackgroundStyle() {
        return this.backgroundStyle;
    }

    @NotNull
    public final DiscordFont getFont() {
        return this.font;
    }

    public final ReactAsset getIcon() {
        return this.icon;
    }

    public final int getLinkColor() {
        return this.linkColor;
    }

    public int hashCode() {
        int hashCode = ((this.font.hashCode() * 31) + Integer.hashCode(this.linkColor)) * 31;
        LinkBackgroundStyle linkBackgroundStyle = this.backgroundStyle;
        int hashCode2 = (hashCode + (linkBackgroundStyle == null ? 0 : linkBackgroundStyle.hashCode())) * 31;
        ReactAsset reactAsset = this.icon;
        return hashCode2 + (reactAsset != null ? reactAsset.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        DiscordFont discordFont = this.font;
        int i10 = this.linkColor;
        LinkBackgroundStyle linkBackgroundStyle = this.backgroundStyle;
        ReactAsset reactAsset = this.icon;
        return "LinkStyle(font=" + discordFont + ", linkColor=" + i10 + ", backgroundStyle=" + linkBackgroundStyle + ", icon=" + reactAsset + ")";
    }

    public LinkStyle(@NotNull DiscordFont font, int i10, LinkBackgroundStyle linkBackgroundStyle, ReactAsset reactAsset) {
        Intrinsics.checkNotNullParameter(font, "font");
        this.font = font;
        this.linkColor = i10;
        this.backgroundStyle = linkBackgroundStyle;
        this.icon = reactAsset;
    }

    public /* synthetic */ LinkStyle(DiscordFont discordFont, int i10, LinkBackgroundStyle linkBackgroundStyle, ReactAsset reactAsset, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? DiscordFont.PrimaryNormal : discordFont, (i11 & 2) != 0 ? ThemeManagerKt.getTheme().getTextLink() : i10, (i11 & 4) != 0 ? null : linkBackgroundStyle, (i11 & 8) != 0 ? null : reactAsset);
    }
}
