package com.discord.sticker_picker;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.modules.dialog.AlertFragment;
import java.util.List;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import sr.a;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0080\b\u0018\u00002\u00020\u0001:\u0001\u001eB/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u000e\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\b¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\u0011\u0010\u0016\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\bHÆ\u0003J9\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\bHÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0019\u0010\u0007\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012¨\u0006\u001f"}, d2 = {"Lcom/discord/sticker_picker/StickerPickerRow;", "", "rowContentWidth", "", "rowContentPaddingVertical", "", "itemSize", AlertFragment.ARG_ITEMS, "", "Lcom/discord/sticker_picker/StickerPickerRow$Sticker;", "<init>", "(DIILjava/util/List;)V", "getRowContentWidth", "()D", "getRowContentPaddingVertical", "()I", "getItemSize", "getItems", "()Ljava/util/List;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "Sticker", "sticker_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StickerPickerRow {
    private final int itemSize;
    @NotNull
    private final List<Sticker> items;
    private final int rowContentPaddingVertical;
    private final double rowContentWidth;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u001a\n\u0002\u0010\b\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001:\u0001%B?\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\n\u001a\u00020\b\u0012\u0006\u0010\u000b\u001a\u00020\b¢\u0006\u0004\b\f\u0010\rJ\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0006HÆ\u0003J\t\u0010\u001b\u001a\u00020\bHÆ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\bHÆ\u0003J\t\u0010\u001e\u001a\u00020\bHÆ\u0003JO\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\u00032\b\b\u0002\u0010\n\u001a\u00020\b2\b\b\u0002\u0010\u000b\u001a\u00020\bHÆ\u0001J\u0013\u0010 \u001a\u00020\b2\b\u0010!\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\"\u001a\u00020#HÖ\u0001J\t\u0010$\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u000fR\u0011\u0010\n\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0014R\u0011\u0010\u000b\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0014¨\u0006&"}, d2 = {"Lcom/discord/sticker_picker/StickerPickerRow$Sticker;", "", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, "type", "Lcom/discord/sticker_picker/StickerPickerRow$Sticker$Type;", "animated", "", "url", "disabled", "opaque", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/sticker_picker/StickerPickerRow$Sticker$Type;ZLjava/lang/String;ZZ)V", "getId", "()Ljava/lang/String;", "getName", "getType", "()Lcom/discord/sticker_picker/StickerPickerRow$Sticker$Type;", "getAnimated", "()Z", "getUrl", "getDisabled", "getOpaque", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "other", "hashCode", "", "toString", "Type", "sticker_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Sticker {
        private final boolean animated;
        private final boolean disabled;
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f9423id;
        @NotNull
        private final String name;
        private final boolean opaque;
        @NotNull
        private final Type type;
        @NotNull
        private final String url;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/discord/sticker_picker/StickerPickerRow$Sticker$Type;", "", "<init>", "(Ljava/lang/String;I)V", "PNG", "APNG", "LOTTIE", "GIF", "sticker_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Type {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ Type[] $VALUES;
            public static final Type PNG = new Type("PNG", 0);
            public static final Type APNG = new Type("APNG", 1);
            public static final Type LOTTIE = new Type("LOTTIE", 2);
            public static final Type GIF = new Type("GIF", 3);

            private static final /* synthetic */ Type[] $values() {
                return new Type[]{PNG, APNG, LOTTIE, GIF};
            }

            static {
                Type[] $values = $values();
                $VALUES = $values;
                $ENTRIES = a.a($values);
            }

            private Type(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static Type valueOf(String str) {
                return (Type) Enum.valueOf(Type.class, str);
            }

            public static Type[] values() {
                return (Type[]) $VALUES.clone();
            }
        }

        public Sticker(@NotNull String id2, @NotNull String name, @NotNull Type type, boolean z10, @NotNull String url, boolean z11, boolean z12) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(url, "url");
            this.f9423id = id2;
            this.name = name;
            this.type = type;
            this.animated = z10;
            this.url = url;
            this.disabled = z11;
            this.opaque = z12;
        }

        public static /* synthetic */ Sticker copy$default(Sticker sticker, String str, String str2, Type type, boolean z10, String str3, boolean z11, boolean z12, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = sticker.f9423id;
            }
            if ((i10 & 2) != 0) {
                str2 = sticker.name;
            }
            if ((i10 & 4) != 0) {
                type = sticker.type;
            }
            if ((i10 & 8) != 0) {
                z10 = sticker.animated;
            }
            if ((i10 & 16) != 0) {
                str3 = sticker.url;
            }
            if ((i10 & 32) != 0) {
                z11 = sticker.disabled;
            }
            if ((i10 & 64) != 0) {
                z12 = sticker.opaque;
            }
            boolean z13 = z11;
            boolean z14 = z12;
            String str4 = str3;
            Type type2 = type;
            return sticker.copy(str, str2, type2, z10, str4, z13, z14);
        }

        @NotNull
        public final String component1() {
            return this.f9423id;
        }

        @NotNull
        public final String component2() {
            return this.name;
        }

        @NotNull
        public final Type component3() {
            return this.type;
        }

        public final boolean component4() {
            return this.animated;
        }

        @NotNull
        public final String component5() {
            return this.url;
        }

        public final boolean component6() {
            return this.disabled;
        }

        public final boolean component7() {
            return this.opaque;
        }

        @NotNull
        public final Sticker copy(@NotNull String id2, @NotNull String name, @NotNull Type type, boolean z10, @NotNull String url, boolean z11, boolean z12) {
            Intrinsics.checkNotNullParameter(id2, "id");
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(url, "url");
            return new Sticker(id2, name, type, z10, url, z11, z12);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Sticker) {
                Sticker sticker = (Sticker) obj;
                return Intrinsics.areEqual(this.f9423id, sticker.f9423id) && Intrinsics.areEqual(this.name, sticker.name) && this.type == sticker.type && this.animated == sticker.animated && Intrinsics.areEqual(this.url, sticker.url) && this.disabled == sticker.disabled && this.opaque == sticker.opaque;
            }
            return false;
        }

        public final boolean getAnimated() {
            return this.animated;
        }

        public final boolean getDisabled() {
            return this.disabled;
        }

        @NotNull
        public final String getId() {
            return this.f9423id;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        public final boolean getOpaque() {
            return this.opaque;
        }

        @NotNull
        public final Type getType() {
            return this.type;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            return (((((((((((this.f9423id.hashCode() * 31) + this.name.hashCode()) * 31) + this.type.hashCode()) * 31) + Boolean.hashCode(this.animated)) * 31) + this.url.hashCode()) * 31) + Boolean.hashCode(this.disabled)) * 31) + Boolean.hashCode(this.opaque);
        }

        @NotNull
        public String toString() {
            String str = this.f9423id;
            String str2 = this.name;
            Type type = this.type;
            boolean z10 = this.animated;
            String str3 = this.url;
            boolean z11 = this.disabled;
            boolean z12 = this.opaque;
            return "Sticker(id=" + str + ", name=" + str2 + ", type=" + type + ", animated=" + z10 + ", url=" + str3 + ", disabled=" + z11 + ", opaque=" + z12 + ")";
        }
    }

    public StickerPickerRow(double d10, int i10, int i11, @NotNull List<Sticker> items) {
        Intrinsics.checkNotNullParameter(items, "items");
        this.rowContentWidth = d10;
        this.rowContentPaddingVertical = i10;
        this.itemSize = i11;
        this.items = items;
    }

    public static /* synthetic */ StickerPickerRow copy$default(StickerPickerRow stickerPickerRow, double d10, int i10, int i11, List list, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            d10 = stickerPickerRow.rowContentWidth;
        }
        double d11 = d10;
        if ((i12 & 2) != 0) {
            i10 = stickerPickerRow.rowContentPaddingVertical;
        }
        int i13 = i10;
        if ((i12 & 4) != 0) {
            i11 = stickerPickerRow.itemSize;
        }
        int i14 = i11;
        List<Sticker> list2 = list;
        if ((i12 & 8) != 0) {
            list2 = stickerPickerRow.items;
        }
        return stickerPickerRow.copy(d11, i13, i14, list2);
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
    public final List<Sticker> component4() {
        return this.items;
    }

    @NotNull
    public final StickerPickerRow copy(double d10, int i10, int i11, @NotNull List<Sticker> items) {
        Intrinsics.checkNotNullParameter(items, "items");
        return new StickerPickerRow(d10, i10, i11, items);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof StickerPickerRow) {
            StickerPickerRow stickerPickerRow = (StickerPickerRow) obj;
            return Double.compare(this.rowContentWidth, stickerPickerRow.rowContentWidth) == 0 && this.rowContentPaddingVertical == stickerPickerRow.rowContentPaddingVertical && this.itemSize == stickerPickerRow.itemSize && Intrinsics.areEqual(this.items, stickerPickerRow.items);
        }
        return false;
    }

    public final int getItemSize() {
        return this.itemSize;
    }

    @NotNull
    public final List<Sticker> getItems() {
        return this.items;
    }

    public final int getRowContentPaddingVertical() {
        return this.rowContentPaddingVertical;
    }

    public final double getRowContentWidth() {
        return this.rowContentWidth;
    }

    public int hashCode() {
        return (((((Double.hashCode(this.rowContentWidth) * 31) + Integer.hashCode(this.rowContentPaddingVertical)) * 31) + Integer.hashCode(this.itemSize)) * 31) + this.items.hashCode();
    }

    @NotNull
    public String toString() {
        double d10 = this.rowContentWidth;
        int i10 = this.rowContentPaddingVertical;
        int i11 = this.itemSize;
        List<Sticker> list = this.items;
        return "StickerPickerRow(rowContentWidth=" + d10 + ", rowContentPaddingVertical=" + i10 + ", itemSize=" + i11 + ", items=" + list + ")";
    }
}
