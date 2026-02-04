package com.discord.emoji_picker;

import com.discord.emoji.Surrogates;
import com.discord.emoji.UnicodeEmojis;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b0\u0018\u00002\u00020\u0001:\b\b\t\n\u000b\f\r\u000e\u000fB\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H&J\b\u0010\u0006\u001a\u00020\u0007H&\u0082\u0001\u0007\u0010\u0011\u0012\u0013\u0014\u0015\u0016¨\u0006\u0017"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem;", "", "<init>", "()V", "itemType", "", "itemId", "", "Category", "Emoji", "EmojiPlaceholder", "Spacer", "FooterUpsell", "PremiumInlineRoadblockHeader", "PremiumInlineRoadblockFooter", "ItemType", "Lcom/discord/emoji_picker/EmojiPickerItem$Category;", "Lcom/discord/emoji_picker/EmojiPickerItem$Emoji;", "Lcom/discord/emoji_picker/EmojiPickerItem$EmojiPlaceholder;", "Lcom/discord/emoji_picker/EmojiPickerItem$FooterUpsell;", "Lcom/discord/emoji_picker/EmojiPickerItem$PremiumInlineRoadblockFooter;", "Lcom/discord/emoji_picker/EmojiPickerItem$PremiumInlineRoadblockHeader;", "Lcom/discord/emoji_picker/EmojiPickerItem$Spacer;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class EmojiPickerItem {

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\b\u0010\b\u001a\u00020\u0003H\u0016J\t\u0010\t\u001a\u00020\u0003HÂ\u0003J\u0013\u0010\n\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000eHÖ\u0003J\t\u0010\u000f\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$EmojiPlaceholder;", "Lcom/discord/emoji_picker/EmojiPickerItem;", StackTraceHelper.ID_KEY, "", "<init>", "(J)V", "itemType", "", "itemId", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class EmojiPlaceholder extends EmojiPickerItem {

        /* renamed from: id  reason: collision with root package name */
        private final long f8918id;

        public EmojiPlaceholder(long j10) {
            super(null);
            this.f8918id = j10;
        }

        private final long component1() {
            return this.f8918id;
        }

        public static /* synthetic */ EmojiPlaceholder copy$default(EmojiPlaceholder emojiPlaceholder, long j10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = emojiPlaceholder.f8918id;
            }
            return emojiPlaceholder.copy(j10);
        }

        @NotNull
        public final EmojiPlaceholder copy(long j10) {
            return new EmojiPlaceholder(j10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof EmojiPlaceholder) && this.f8918id == ((EmojiPlaceholder) obj).f8918id;
        }

        public int hashCode() {
            return Long.hashCode(this.f8918id);
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return this.f8918id;
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.PLACEHOLDER.ordinal();
        }

        @NotNull
        public String toString() {
            long j10 = this.f8918id;
            return "EmojiPlaceholder(id=" + j10 + ")";
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J\b\u0010\n\u001a\u00020\u000bH\u0016J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÖ\u0003J\t\u0010\u0012\u001a\u00020\tHÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0014"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$FooterUpsell;", "Lcom/discord/emoji_picker/EmojiPickerItem;", StackTraceHelper.ID_KEY, "", "<init>", "(Ljava/lang/String;)V", "getId", "()Ljava/lang/String;", "itemType", "", "itemId", "", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class FooterUpsell extends EmojiPickerItem {
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f8919id;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public FooterUpsell(@NotNull String id2) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f8919id = id2;
        }

        public static /* synthetic */ FooterUpsell copy$default(FooterUpsell footerUpsell, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = footerUpsell.f8919id;
            }
            return footerUpsell.copy(str);
        }

        @NotNull
        public final String component1() {
            return this.f8919id;
        }

        @NotNull
        public final FooterUpsell copy(@NotNull String id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            return new FooterUpsell(id2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof FooterUpsell) && Intrinsics.areEqual(this.f8919id, ((FooterUpsell) obj).f8919id);
        }

        @NotNull
        public final String getId() {
            return this.f8919id;
        }

        public int hashCode() {
            return this.f8919id.hashCode();
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return IdUtilsKt.convertToId(this.f8919id);
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.FOOTER_UPSELL.ordinal();
        }

        @NotNull
        public String toString() {
            String str = this.f8919id;
            return "FooterUpsell(id=" + str + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u000b\b\u0086\u0081\u0002\u0018\u0000 \u000b2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u000bB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n¨\u0006\f"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$ItemType;", "", "<init>", "(Ljava/lang/String;I)V", "CATEGORY", "EMOJI", "PLACEHOLDER", "SPACER", "FOOTER_UPSELL", "PREMIUM_INLINE_ROADBLOCK_HEADER", "PREMIUM_INLINE_ROADBLOCK_FOOTER", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ItemType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ItemType[] $VALUES;
        @NotNull
        public static final Companion Companion;
        @NotNull
        private static final ItemType[] values;
        public static final ItemType CATEGORY = new ItemType("CATEGORY", 0);
        public static final ItemType EMOJI = new ItemType("EMOJI", 1);
        public static final ItemType PLACEHOLDER = new ItemType("PLACEHOLDER", 2);
        public static final ItemType SPACER = new ItemType("SPACER", 3);
        public static final ItemType FOOTER_UPSELL = new ItemType("FOOTER_UPSELL", 4);
        public static final ItemType PREMIUM_INLINE_ROADBLOCK_HEADER = new ItemType("PREMIUM_INLINE_ROADBLOCK_HEADER", 5);
        public static final ItemType PREMIUM_INLINE_ROADBLOCK_FOOTER = new ItemType("PREMIUM_INLINE_ROADBLOCK_FOOTER", 6);

        @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\n\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\fR\u0019\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\n\n\u0002\u0010\t\u001a\u0004\b\u0007\u0010\b¨\u0006\r"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$ItemType$Companion;", "", "<init>", "()V", "values", "", "Lcom/discord/emoji_picker/EmojiPickerItem$ItemType;", "getValues", "()[Lcom/discord/emoji_picker/EmojiPickerItem$ItemType;", "[Lcom/discord/emoji_picker/EmojiPickerItem$ItemType;", "create", "value", "", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final ItemType create(int i10) {
                ItemType[] values = getValues();
                if (i10 >= 0 && i10 < values.length) {
                    return values[i10];
                }
                throw new IllegalArgumentException("Unknown item type: " + i10);
            }

            @NotNull
            public final ItemType[] getValues() {
                return ItemType.values;
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ ItemType[] $values() {
            return new ItemType[]{CATEGORY, EMOJI, PLACEHOLDER, SPACER, FOOTER_UPSELL, PREMIUM_INLINE_ROADBLOCK_HEADER, PREMIUM_INLINE_ROADBLOCK_FOOTER};
        }

        static {
            ItemType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = sr.a.a($values);
            Companion = new Companion(null);
            values = values();
        }

        private ItemType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ItemType valueOf(String str) {
            return (ItemType) Enum.valueOf(ItemType.class, str);
        }

        public static ItemType[] values() {
            return (ItemType[]) $VALUES.clone();
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J\b\u0010\n\u001a\u00020\u000bH\u0016J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÖ\u0003J\t\u0010\u0012\u001a\u00020\tHÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0014"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$PremiumInlineRoadblockFooter;", "Lcom/discord/emoji_picker/EmojiPickerItem;", StackTraceHelper.ID_KEY, "", "<init>", "(Ljava/lang/String;)V", "getId", "()Ljava/lang/String;", "itemType", "", "itemId", "", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PremiumInlineRoadblockFooter extends EmojiPickerItem {
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f8920id;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public PremiumInlineRoadblockFooter(@NotNull String id2) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f8920id = id2;
        }

        public static /* synthetic */ PremiumInlineRoadblockFooter copy$default(PremiumInlineRoadblockFooter premiumInlineRoadblockFooter, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = premiumInlineRoadblockFooter.f8920id;
            }
            return premiumInlineRoadblockFooter.copy(str);
        }

        @NotNull
        public final String component1() {
            return this.f8920id;
        }

        @NotNull
        public final PremiumInlineRoadblockFooter copy(@NotNull String id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            return new PremiumInlineRoadblockFooter(id2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof PremiumInlineRoadblockFooter) && Intrinsics.areEqual(this.f8920id, ((PremiumInlineRoadblockFooter) obj).f8920id);
        }

        @NotNull
        public final String getId() {
            return this.f8920id;
        }

        public int hashCode() {
            return this.f8920id.hashCode();
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return IdUtilsKt.convertToId(this.f8920id);
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.PREMIUM_INLINE_ROADBLOCK_FOOTER.ordinal();
        }

        @NotNull
        public String toString() {
            String str = this.f8920id;
            return "PremiumInlineRoadblockFooter(id=" + str + ")";
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J\b\u0010\n\u001a\u00020\u000bH\u0016J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÖ\u0003J\t\u0010\u0012\u001a\u00020\tHÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0014"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$PremiumInlineRoadblockHeader;", "Lcom/discord/emoji_picker/EmojiPickerItem;", StackTraceHelper.ID_KEY, "", "<init>", "(Ljava/lang/String;)V", "getId", "()Ljava/lang/String;", "itemType", "", "itemId", "", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PremiumInlineRoadblockHeader extends EmojiPickerItem {
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f8921id;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public PremiumInlineRoadblockHeader(@NotNull String id2) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f8921id = id2;
        }

        public static /* synthetic */ PremiumInlineRoadblockHeader copy$default(PremiumInlineRoadblockHeader premiumInlineRoadblockHeader, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = premiumInlineRoadblockHeader.f8921id;
            }
            return premiumInlineRoadblockHeader.copy(str);
        }

        @NotNull
        public final String component1() {
            return this.f8921id;
        }

        @NotNull
        public final PremiumInlineRoadblockHeader copy(@NotNull String id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            return new PremiumInlineRoadblockHeader(id2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof PremiumInlineRoadblockHeader) && Intrinsics.areEqual(this.f8921id, ((PremiumInlineRoadblockHeader) obj).f8921id);
        }

        @NotNull
        public final String getId() {
            return this.f8921id;
        }

        public int hashCode() {
            return this.f8921id.hashCode();
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return IdUtilsKt.convertToId(this.f8921id);
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.PREMIUM_INLINE_ROADBLOCK_HEADER.ordinal();
        }

        @NotNull
        public String toString() {
            String str = this.f8921id;
            return "PremiumInlineRoadblockHeader(id=" + str + ")";
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\f\u001a\u00020\u0005H\u0016J\b\u0010\r\u001a\u00020\u000eH\u0016J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0005HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0018"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$Spacer;", "Lcom/discord/emoji_picker/EmojiPickerItem;", StackTraceHelper.ID_KEY, "", "height", "", "<init>", "(Ljava/lang/String;I)V", "getId", "()Ljava/lang/String;", "getHeight", "()I", "itemType", "itemId", "", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Spacer extends EmojiPickerItem {
        private final int height;
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f8922id;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Spacer(@NotNull String id2, int i10) {
            super(null);
            Intrinsics.checkNotNullParameter(id2, "id");
            this.f8922id = id2;
            this.height = i10;
        }

        public static /* synthetic */ Spacer copy$default(Spacer spacer, String str, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                str = spacer.f8922id;
            }
            if ((i11 & 2) != 0) {
                i10 = spacer.height;
            }
            return spacer.copy(str, i10);
        }

        @NotNull
        public final String component1() {
            return this.f8922id;
        }

        public final int component2() {
            return this.height;
        }

        @NotNull
        public final Spacer copy(@NotNull String id2, int i10) {
            Intrinsics.checkNotNullParameter(id2, "id");
            return new Spacer(id2, i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Spacer) {
                Spacer spacer = (Spacer) obj;
                return Intrinsics.areEqual(this.f8922id, spacer.f8922id) && this.height == spacer.height;
            }
            return false;
        }

        public final int getHeight() {
            return this.height;
        }

        @NotNull
        public final String getId() {
            return this.f8922id;
        }

        public int hashCode() {
            return (this.f8922id.hashCode() * 31) + Integer.hashCode(this.height);
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return IdUtilsKt.convertToId(this.f8922id);
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.SPACER.ordinal();
        }

        @NotNull
        public String toString() {
            String str = this.f8922id;
            int i10 = this.height;
            return "Spacer(id=" + str + ", height=" + i10 + ")";
        }
    }

    public /* synthetic */ EmojiPickerItem(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract long itemId();

    public abstract int itemType();

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u0010\u000f\u001a\u00020\u0010H\u0016J\b\u0010\u0011\u001a\u00020\u0005H\u0016J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0007HÆ\u0003J'\u0010\u0015\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0016\u001a\u00020\u00072\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\u0010HÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u000e¨\u0006\u001b"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$Category;", "Lcom/discord/emoji_picker/EmojiPickerItem;", "title", "", StackTraceHelper.ID_KEY, "", "isInsidePremiumRoadBlock", "", "<init>", "(Ljava/lang/String;JZ)V", "getTitle", "()Ljava/lang/String;", "getId", "()J", "()Z", "itemType", "", "itemId", "component1", "component2", "component3", "copy", "equals", "other", "", "hashCode", "toString", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Category extends EmojiPickerItem {

        /* renamed from: id  reason: collision with root package name */
        private final long f8916id;
        private final boolean isInsidePremiumRoadBlock;
        @NotNull
        private final String title;

        public /* synthetic */ Category(String str, long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? IdUtilsKt.convertToId(str) : j10, (i10 & 4) != 0 ? false : z10);
        }

        public static /* synthetic */ Category copy$default(Category category, String str, long j10, boolean z10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = category.title;
            }
            if ((i10 & 2) != 0) {
                j10 = category.f8916id;
            }
            if ((i10 & 4) != 0) {
                z10 = category.isInsidePremiumRoadBlock;
            }
            return category.copy(str, j10, z10);
        }

        @NotNull
        public final String component1() {
            return this.title;
        }

        public final long component2() {
            return this.f8916id;
        }

        public final boolean component3() {
            return this.isInsidePremiumRoadBlock;
        }

        @NotNull
        public final Category copy(@NotNull String title, long j10, boolean z10) {
            Intrinsics.checkNotNullParameter(title, "title");
            return new Category(title, j10, z10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Category) {
                Category category = (Category) obj;
                return Intrinsics.areEqual(this.title, category.title) && this.f8916id == category.f8916id && this.isInsidePremiumRoadBlock == category.isInsidePremiumRoadBlock;
            }
            return false;
        }

        public final long getId() {
            return this.f8916id;
        }

        @NotNull
        public final String getTitle() {
            return this.title;
        }

        public int hashCode() {
            return (((this.title.hashCode() * 31) + Long.hashCode(this.f8916id)) * 31) + Boolean.hashCode(this.isInsidePremiumRoadBlock);
        }

        public final boolean isInsidePremiumRoadBlock() {
            return this.isInsidePremiumRoadBlock;
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return this.f8916id;
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.CATEGORY.ordinal();
        }

        @NotNull
        public String toString() {
            String str = this.title;
            long j10 = this.f8916id;
            boolean z10 = this.isInsidePremiumRoadBlock;
            return "Category(title=" + str + ", id=" + j10 + ", isInsidePremiumRoadBlock=" + z10 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Category(@NotNull String title, long j10, boolean z10) {
            super(null);
            Intrinsics.checkNotNullParameter(title, "title");
            this.title = title;
            this.f8916id = j10;
            this.isInsidePremiumRoadBlock = z10;
        }
    }

    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\b\n\u0002\b\f\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001:\u0001(BA\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\b\u0002\u0010\f\u001a\u00020\u0007¢\u0006\u0004\b\r\u0010\u000eJ\b\u0010\u0017\u001a\u00020\u0018H\u0016J\b\u0010\u0019\u001a\u00020\u0003H\u0016J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001f\u001a\u00020\tHÆ\u0003J\u000b\u0010 \u001a\u0004\u0018\u00010\u000bHÂ\u0003J\t\u0010!\u001a\u00020\u0007HÆ\u0003JG\u0010\"\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\b\u0002\u0010\f\u001a\u00020\u0007HÆ\u0001J\u0013\u0010#\u001a\u00020\u00072\b\u0010$\u001a\u0004\u0018\u00010%HÖ\u0003J\t\u0010&\u001a\u00020\u0018HÖ\u0001J\t\u0010'\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\f\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u0014R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u00058F¢\u0006\u0006\u001a\u0004\b\u001b\u0010\u0012¨\u0006)"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$Emoji;", "Lcom/discord/emoji_picker/EmojiPickerItem;", StackTraceHelper.ID_KEY, "", StackTraceHelper.NAME_KEY, "", "animated", "", "disabled", "Lcom/discord/emoji_picker/EmojiPickerItem$Emoji$DisabledType;", "unicode", "Lcom/discord/emoji/UnicodeEmojis$Emoji;", "isInsidePremiumRoadBlock", "<init>", "(JLjava/lang/String;ZLcom/discord/emoji_picker/EmojiPickerItem$Emoji$DisabledType;Lcom/discord/emoji/UnicodeEmojis$Emoji;Z)V", "getId", "()J", "getName", "()Ljava/lang/String;", "getAnimated", "()Z", "getDisabled", "()Lcom/discord/emoji_picker/EmojiPickerItem$Emoji$DisabledType;", "itemType", "", "itemId", "unicodeUrl", "getUnicodeUrl", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "other", "", "hashCode", "toString", "DisabledType", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nEmojiPickerItem.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerItem.kt\ncom/discord/emoji_picker/EmojiPickerItem$Emoji\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,117:1\n1#2:118\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Emoji extends EmojiPickerItem {
        private final boolean animated;
        @NotNull
        private final DisabledType disabled;

        /* renamed from: id  reason: collision with root package name */
        private final long f8917id;
        private final boolean isInsidePremiumRoadBlock;
        @NotNull
        private final String name;
        private final UnicodeEmojis.Emoji unicode;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u0000 \u00062\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0006B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$Emoji$DisabledType;", "", "<init>", "(Ljava/lang/String;I)V", "ICON", "NONE", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class DisabledType {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ DisabledType[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final DisabledType ICON = new DisabledType("ICON", 0);
            public static final DisabledType NONE = new DisabledType("NONE", 1);

            @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0016\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0007¨\u0006\t"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItem$Emoji$DisabledType$Companion;", "", "<init>", "()V", "create", "Lcom/discord/emoji_picker/EmojiPickerItem$Emoji$DisabledType;", "emojiDisabled", "", "emojiSectionNitroLocked", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                @NotNull
                public final DisabledType create(boolean z10, boolean z11) {
                    if (z10 && !z11) {
                        return DisabledType.ICON;
                    }
                    return DisabledType.NONE;
                }

                private Companion() {
                }
            }

            private static final /* synthetic */ DisabledType[] $values() {
                return new DisabledType[]{ICON, NONE};
            }

            static {
                DisabledType[] $values = $values();
                $VALUES = $values;
                $ENTRIES = sr.a.a($values);
                Companion = new Companion(null);
            }

            private DisabledType(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static DisabledType valueOf(String str) {
                return (DisabledType) Enum.valueOf(DisabledType.class, str);
            }

            public static DisabledType[] values() {
                return (DisabledType[]) $VALUES.clone();
            }
        }

        public /* synthetic */ Emoji(long j10, String str, boolean z10, DisabledType disabledType, UnicodeEmojis.Emoji emoji, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, str, (i10 & 4) != 0 ? false : z10, (i10 & 8) != 0 ? DisabledType.NONE : disabledType, (i10 & 16) != 0 ? null : emoji, (i10 & 32) != 0 ? false : z11);
        }

        private final UnicodeEmojis.Emoji component5() {
            return this.unicode;
        }

        public static /* synthetic */ Emoji copy$default(Emoji emoji, long j10, String str, boolean z10, DisabledType disabledType, UnicodeEmojis.Emoji emoji2, boolean z11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = emoji.f8917id;
            }
            long j11 = j10;
            if ((i10 & 2) != 0) {
                str = emoji.name;
            }
            String str2 = str;
            if ((i10 & 4) != 0) {
                z10 = emoji.animated;
            }
            boolean z12 = z10;
            if ((i10 & 8) != 0) {
                disabledType = emoji.disabled;
            }
            DisabledType disabledType2 = disabledType;
            if ((i10 & 16) != 0) {
                emoji2 = emoji.unicode;
            }
            UnicodeEmojis.Emoji emoji3 = emoji2;
            if ((i10 & 32) != 0) {
                z11 = emoji.isInsidePremiumRoadBlock;
            }
            return emoji.copy(j11, str2, z12, disabledType2, emoji3, z11);
        }

        public final long component1() {
            return this.f8917id;
        }

        @NotNull
        public final String component2() {
            return this.name;
        }

        public final boolean component3() {
            return this.animated;
        }

        @NotNull
        public final DisabledType component4() {
            return this.disabled;
        }

        public final boolean component6() {
            return this.isInsidePremiumRoadBlock;
        }

        @NotNull
        public final Emoji copy(long j10, @NotNull String name, boolean z10, @NotNull DisabledType disabled, UnicodeEmojis.Emoji emoji, boolean z11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(disabled, "disabled");
            return new Emoji(j10, name, z10, disabled, emoji, z11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Emoji) {
                Emoji emoji = (Emoji) obj;
                return this.f8917id == emoji.f8917id && Intrinsics.areEqual(this.name, emoji.name) && this.animated == emoji.animated && this.disabled == emoji.disabled && Intrinsics.areEqual(this.unicode, emoji.unicode) && this.isInsidePremiumRoadBlock == emoji.isInsidePremiumRoadBlock;
            }
            return false;
        }

        public final boolean getAnimated() {
            return this.animated;
        }

        @NotNull
        public final DisabledType getDisabled() {
            return this.disabled;
        }

        public final long getId() {
            return this.f8917id;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        public final String getUnicodeUrl() {
            UnicodeEmojis.Emoji emoji = this.unicode;
            if (emoji != null) {
                return Surrogates.m871toAssetUrlimpl(Surrogates.m867constructorimpl(emoji.getSurrogates()));
            }
            return null;
        }

        public int hashCode() {
            int hashCode = ((((((Long.hashCode(this.f8917id) * 31) + this.name.hashCode()) * 31) + Boolean.hashCode(this.animated)) * 31) + this.disabled.hashCode()) * 31;
            UnicodeEmojis.Emoji emoji = this.unicode;
            return ((hashCode + (emoji == null ? 0 : emoji.hashCode())) * 31) + Boolean.hashCode(this.isInsidePremiumRoadBlock);
        }

        public final boolean isInsidePremiumRoadBlock() {
            return this.isInsidePremiumRoadBlock;
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public long itemId() {
            return this.f8917id;
        }

        @Override // com.discord.emoji_picker.EmojiPickerItem
        public int itemType() {
            return ItemType.EMOJI.ordinal();
        }

        @NotNull
        public String toString() {
            long j10 = this.f8917id;
            String str = this.name;
            boolean z10 = this.animated;
            DisabledType disabledType = this.disabled;
            UnicodeEmojis.Emoji emoji = this.unicode;
            boolean z11 = this.isInsidePremiumRoadBlock;
            return "Emoji(id=" + j10 + ", name=" + str + ", animated=" + z10 + ", disabled=" + disabledType + ", unicode=" + emoji + ", isInsidePremiumRoadBlock=" + z11 + ")";
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Emoji(long j10, @NotNull String name, boolean z10, @NotNull DisabledType disabled, UnicodeEmojis.Emoji emoji, boolean z11) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(disabled, "disabled");
            this.f8917id = j10;
            this.name = name;
            this.animated = z10;
            this.disabled = disabled;
            this.unicode = emoji;
            this.isInsidePremiumRoadBlock = z11;
        }
    }

    private EmojiPickerItem() {
    }
}
