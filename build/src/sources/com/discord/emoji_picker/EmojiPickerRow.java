package com.discord.emoji_picker;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.modules.dialog.AlertFragment;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0014\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0080\b\u0018\u00002\u00020\u0001:\u0001!B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u000e\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\b\u0012\u0006\u0010\n\u001a\u00020\u000b¢\u0006\u0004\b\f\u0010\rJ\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\u0011\u0010\u0019\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\bHÆ\u0003J\t\u0010\u001a\u001a\u00020\u000bHÆ\u0003JC\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\b2\b\b\u0002\u0010\n\u001a\u00020\u000bHÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u000b2\b\u0010\u001d\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001e\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001f\u001a\u00020 HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0019\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u0015¨\u0006\""}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerRow;", "", "rowContentWidth", "", "rowContentPaddingVertical", "", "itemSize", AlertFragment.ARG_ITEMS, "", "Lcom/discord/emoji_picker/EmojiPickerRow$Emoji;", "isSectionNitroLocked", "", "<init>", "(DIILjava/util/List;Z)V", "getRowContentWidth", "()D", "getRowContentPaddingVertical", "()I", "getItemSize", "getItems", "()Ljava/util/List;", "()Z", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "other", "hashCode", "toString", "", "Emoji", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerRow {
    private final boolean isSectionNitroLocked;
    private final int itemSize;
    @NotNull
    private final List<Emoji> items;
    private final int rowContentPaddingVertical;
    private final double rowContentWidth;

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B1\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJ\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0007HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0007HÆ\u0003J=\u0010\u0017\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00072\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010¨\u0006\u001d"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerRow$Emoji;", "", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, "url", "animated", "", "disabled", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZZ)V", "getId", "()Ljava/lang/String;", "getName", "getUrl", "getAnimated", "()Z", "getDisabled", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "other", "hashCode", "", "toString", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Emoji {
        private final boolean animated;
        private final boolean disabled;

        /* renamed from: id  reason: collision with root package name */
        private final String f8923id;
        @NotNull
        private final String name;
        @NotNull
        private final String url;

        public Emoji(String str, @NotNull String name, @NotNull String url, boolean z10, boolean z11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(url, "url");
            this.f8923id = str;
            this.name = name;
            this.url = url;
            this.animated = z10;
            this.disabled = z11;
        }

        public static /* synthetic */ Emoji copy$default(Emoji emoji, String str, String str2, String str3, boolean z10, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = emoji.f8923id;
            }
            if ((i10 & 2) != 0) {
                str2 = emoji.name;
            }
            if ((i10 & 4) != 0) {
                str3 = emoji.url;
            }
            if ((i10 & 8) != 0) {
                z10 = emoji.animated;
            }
            if ((i10 & 16) != 0) {
                z11 = emoji.disabled;
            }
            boolean z12 = z11;
            String str4 = str3;
            return emoji.copy(str, str2, str4, z10, z12);
        }

        public final String component1() {
            return this.f8923id;
        }

        @NotNull
        public final String component2() {
            return this.name;
        }

        @NotNull
        public final String component3() {
            return this.url;
        }

        public final boolean component4() {
            return this.animated;
        }

        public final boolean component5() {
            return this.disabled;
        }

        @NotNull
        public final Emoji copy(String str, @NotNull String name, @NotNull String url, boolean z10, boolean z11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(url, "url");
            return new Emoji(str, name, url, z10, z11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Emoji) {
                Emoji emoji = (Emoji) obj;
                return Intrinsics.areEqual(this.f8923id, emoji.f8923id) && Intrinsics.areEqual(this.name, emoji.name) && Intrinsics.areEqual(this.url, emoji.url) && this.animated == emoji.animated && this.disabled == emoji.disabled;
            }
            return false;
        }

        public final boolean getAnimated() {
            return this.animated;
        }

        public final boolean getDisabled() {
            return this.disabled;
        }

        public final String getId() {
            return this.f8923id;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            String str = this.f8923id;
            return ((((((((str == null ? 0 : str.hashCode()) * 31) + this.name.hashCode()) * 31) + this.url.hashCode()) * 31) + Boolean.hashCode(this.animated)) * 31) + Boolean.hashCode(this.disabled);
        }

        @NotNull
        public String toString() {
            String str = this.f8923id;
            String str2 = this.name;
            String str3 = this.url;
            boolean z10 = this.animated;
            boolean z11 = this.disabled;
            return "Emoji(id=" + str + ", name=" + str2 + ", url=" + str3 + ", animated=" + z10 + ", disabled=" + z11 + ")";
        }
    }

    public EmojiPickerRow(double d10, int i10, int i11, @NotNull List<Emoji> items, boolean z10) {
        Intrinsics.checkNotNullParameter(items, "items");
        this.rowContentWidth = d10;
        this.rowContentPaddingVertical = i10;
        this.itemSize = i11;
        this.items = items;
        this.isSectionNitroLocked = z10;
    }

    public static /* synthetic */ EmojiPickerRow copy$default(EmojiPickerRow emojiPickerRow, double d10, int i10, int i11, List list, boolean z10, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            d10 = emojiPickerRow.rowContentWidth;
        }
        double d11 = d10;
        if ((i12 & 2) != 0) {
            i10 = emojiPickerRow.rowContentPaddingVertical;
        }
        int i13 = i10;
        if ((i12 & 4) != 0) {
            i11 = emojiPickerRow.itemSize;
        }
        int i14 = i11;
        List<Emoji> list2 = list;
        if ((i12 & 8) != 0) {
            list2 = emojiPickerRow.items;
        }
        List list3 = list2;
        if ((i12 & 16) != 0) {
            z10 = emojiPickerRow.isSectionNitroLocked;
        }
        return emojiPickerRow.copy(d11, i13, i14, list3, z10);
    }

    public final double component1() {
        return this.rowContentWidth;
    }

    public final int component2() {
        return this.rowContentPaddingVertical;
    }

    public final int component3() {
        return this.itemSize;
    }

    @NotNull
    public final List<Emoji> component4() {
        return this.items;
    }

    public final boolean component5() {
        return this.isSectionNitroLocked;
    }

    @NotNull
    public final EmojiPickerRow copy(double d10, int i10, int i11, @NotNull List<Emoji> items, boolean z10) {
        Intrinsics.checkNotNullParameter(items, "items");
        return new EmojiPickerRow(d10, i10, i11, items, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmojiPickerRow) {
            EmojiPickerRow emojiPickerRow = (EmojiPickerRow) obj;
            return Double.compare(this.rowContentWidth, emojiPickerRow.rowContentWidth) == 0 && this.rowContentPaddingVertical == emojiPickerRow.rowContentPaddingVertical && this.itemSize == emojiPickerRow.itemSize && Intrinsics.areEqual(this.items, emojiPickerRow.items) && this.isSectionNitroLocked == emojiPickerRow.isSectionNitroLocked;
        }
        return false;
    }

    public final int getItemSize() {
        return this.itemSize;
    }

    @NotNull
    public final List<Emoji> getItems() {
        return this.items;
    }

    public final int getRowContentPaddingVertical() {
        return this.rowContentPaddingVertical;
    }

    public final double getRowContentWidth() {
        return this.rowContentWidth;
    }

    public int hashCode() {
        return (((((((Double.hashCode(this.rowContentWidth) * 31) + Integer.hashCode(this.rowContentPaddingVertical)) * 31) + Integer.hashCode(this.itemSize)) * 31) + this.items.hashCode()) * 31) + Boolean.hashCode(this.isSectionNitroLocked);
    }

    public final boolean isSectionNitroLocked() {
        return this.isSectionNitroLocked;
    }

    @NotNull
    public String toString() {
        double d10 = this.rowContentWidth;
        int i10 = this.rowContentPaddingVertical;
        int i11 = this.itemSize;
        List<Emoji> list = this.items;
        boolean z10 = this.isSectionNitroLocked;
        return "EmojiPickerRow(rowContentWidth=" + d10 + ", rowContentPaddingVertical=" + i10 + ", itemSize=" + i11 + ", items=" + list + ", isSectionNitroLocked=" + z10 + ")";
    }
}
