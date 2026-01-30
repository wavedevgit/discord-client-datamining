package com.discord.emoji_picker;

import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.emoji_picker.EmojiPickerItemData;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010 \n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\b\u0005\b\u0001\u0018\u0000 (2\u00020\u0001:\u0002)(B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0015\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\u000b\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\u000b\u0010\fJ\r\u0010\r\u001a\u00020\u0006¢\u0006\u0004\b\r\u0010\u000eJ\r\u0010\u000f\u001a\u00020\u0006¢\u0006\u0004\b\u000f\u0010\u000eJ7\u0010\u0016\u001a\u00020\u00142\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\b0\u00102\f\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\b0\u00102\f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00140\u0013¢\u0006\u0004\b\u0016\u0010\u0017J)\u0010\u001a\u001a\u00020\u00142\u0006\u0010\u0018\u001a\u00020\u00062\u0012\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00140\u0019¢\u0006\u0004\b\u001a\u0010\u001bJ)\u0010\u001d\u001a\u00020\u00142\u0006\u0010\u001c\u001a\u00020\u00062\u0012\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00140\u0019¢\u0006\u0004\b\u001d\u0010\u001bJ#\u0010\u001e\u001a\u00020\u00142\u0006\u0010\u0003\u001a\u00020\u00022\f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00140\u0013¢\u0006\u0004\b\u001e\u0010\u001fR\u0016\u0010\u0003\u001a\u00020\u00028\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0003\u0010 R\u0016\u0010\"\u001a\u00020!8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\"\u0010#R\u001c\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\b0\u00108\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0011\u0010$R\u001c\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\b0\u00108\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0012\u0010$R \u0010&\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\b0\u00100%8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'¨\u0006*"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData;", "", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;", "coreData", "<init>", "(Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;)V", "", ViewProps.POSITION, "Lcom/discord/emoji_picker/EmojiPickerItem;", "getItem", "(I)Lcom/discord/emoji_picker/EmojiPickerItem;", "getItemIndex", "(I)Ljava/lang/Integer;", "getItemCount", "()I", "getRowSize", "", "emojis", "emojisUnicode", "Lkotlin/Function0;", "", "onChanged", "setEmojis", "(Ljava/util/List;Ljava/util/List;Lkotlin/jvm/functions/Function0;)V", "spacerTopHeight", "Lkotlin/Function1;", "setSpacerTopHeight", "(ILkotlin/jvm/functions/Function1;)V", "spacerBottomHeight", "setSpacerBottomHeight", "setCoreData", "(Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;Lkotlin/jvm/functions/Function0;)V", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;", "", "emojisUnset", "Z", "Ljava/util/List;", "", "dataSets", "[Ljava/util/List;", "Companion", "CoreData", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiPickerItemData.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerItemData.kt\ncom/discord/emoji_picker/EmojiPickerItemData\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,183:1\n1#2:184\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmojiPickerItemData {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int INDEX_EMOJIS = 1;
    private static final int INDEX_EMOJIS_UNICODE = 2;
    private static final int INDEX_LEADING = 0;
    private static final int INDEX_TRAILING = 3;
    @NotNull
    private CoreData coreData;
    @NotNull
    private final List<EmojiPickerItem>[] dataSets;
    @NotNull
    private List<? extends EmojiPickerItem> emojis;
    @NotNull
    private List<? extends EmojiPickerItem> emojisUnicode;
    private boolean emojisUnset;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData$Companion;", "", "<init>", "()V", "INDEX_LEADING", "", "INDEX_EMOJIS", "INDEX_EMOJIS_UNICODE", "INDEX_TRAILING", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010%\n\u0002\u0010\t\n\u0002\b\u0015\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\b\u0018\u0000 82\u00020\u0001:\u000278B_\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t\u0012\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t\u0012\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\r\u0012\f\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00100\r¢\u0006\u0004\b\u0011\u0010\u0012J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0005HÆ\u0003J\t\u0010+\u001a\u00020\u0005HÆ\u0003J\t\u0010,\u001a\u00020\u0005HÆ\u0003J\u000f\u0010-\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0003J\u000f\u0010.\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0003J\u000f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u000e0\rHÆ\u0003J\u000f\u00100\u001a\b\u0012\u0004\u0012\u00020\u00100\rHÆ\u0003Jq\u00101\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\u000e\b\u0002\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\u000e\b\u0002\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\r2\u000e\b\u0002\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00100\rHÆ\u0001J\u0013\u00102\u001a\u00020\u00052\b\u00103\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u00104\u001a\u00020\u0003HÖ\u0001J\t\u00105\u001a\u000206HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0016R\u0011\u0010\u0007\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0016R\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0017\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001aR\u0017\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\r¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001aR\u0017\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00100\r¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001aR'\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020 \u0012\u0004\u0012\u00020\u00030\u001f8FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b#\u0010$\u001a\u0004\b!\u0010\"R\u0017\u0010%\u001a\b\u0012\u0004\u0012\u00020\n0\r8F¢\u0006\u0006\u001a\u0004\b&\u0010\u001aR\u0017\u0010'\u001a\b\u0012\u0004\u0012\u00020\n0\r8F¢\u0006\u0006\u001a\u0004\b(\u0010\u001a¨\u00069"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;", "", "rowSize", "", "hasGuildData", "", "hasSearchData", "hasPremiumInlineRoadblock", "leading", "", "Lcom/discord/emoji_picker/EmojiPickerItem;", "trailing", "nativeSectionsEmojis", "", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Guild;", "nativeSectionsEmojisUnicode", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Unicode;", "<init>", "(IZZZLjava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;)V", "getRowSize", "()I", "getHasGuildData", "()Z", "getHasSearchData", "getHasPremiumInlineRoadblock", "getLeading", "()Ljava/util/List;", "getTrailing", "getNativeSectionsEmojis", "getNativeSectionsEmojisUnicode", "categoryIndices", "", "", "getCategoryIndices", "()Ljava/util/Map;", "categoryIndices$delegate", "Lkotlin/Lazy;", "emojisPlaceholderList", "getEmojisPlaceholderList", "emojisUnicodePlaceholderList", "getEmojisUnicodePlaceholderList", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "equals", "other", "hashCode", "toString", "", "NativeSection", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CoreData {
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private final Lazy categoryIndices$delegate;
        private final boolean hasGuildData;
        private final boolean hasPremiumInlineRoadblock;
        private final boolean hasSearchData;
        @NotNull
        private final List<EmojiPickerItem> leading;
        @NotNull
        private final List<NativeSection.Guild> nativeSectionsEmojis;
        @NotNull
        private final List<NativeSection.Unicode> nativeSectionsEmojisUnicode;
        private final int rowSize;
        @NotNull
        private final List<EmojiPickerItem> trailing;

        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$Companion;", "", "<init>", "()V", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0002\u0006\u0007B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0004\u001a\u00020\u0005\u0082\u0001\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection;", "", "<init>", "()V", "getCount", "", "Guild", "Unicode", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Guild;", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Unicode;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static abstract class NativeSection {

            @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\"\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u000f\u0018\u00002\u00020\u0001BE\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b¢\u0006\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0017\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u0017R\u0011\u0010\f\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0011\u0010\r\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0017¨\u0006\u001a"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Guild;", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection;", "guildId", "", "guildName", "emojiCount", "", "emojisDisabled", "", "", "isNitroLocked", "", "hasPremiumInlineRoadblockHeader", "hasPremiumInlineRoadblockFooter", "<init>", "(Ljava/lang/String;Ljava/lang/String;ILjava/util/Set;ZZZ)V", "getGuildId", "()Ljava/lang/String;", "getGuildName", "getEmojiCount", "()I", "getEmojisDisabled", "()Ljava/util/Set;", "()Z", "getHasPremiumInlineRoadblockHeader", "getHasPremiumInlineRoadblockFooter", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Guild extends NativeSection {
                private final int emojiCount;
                @NotNull
                private final Set<Long> emojisDisabled;
                @NotNull
                private final String guildId;
                @NotNull
                private final String guildName;
                private final boolean hasPremiumInlineRoadblockFooter;
                private final boolean hasPremiumInlineRoadblockHeader;
                private final boolean isNitroLocked;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public Guild(@NotNull String guildId, @NotNull String guildName, int i10, @NotNull Set<Long> emojisDisabled, boolean z10, boolean z11, boolean z12) {
                    super(null);
                    Intrinsics.checkNotNullParameter(guildId, "guildId");
                    Intrinsics.checkNotNullParameter(guildName, "guildName");
                    Intrinsics.checkNotNullParameter(emojisDisabled, "emojisDisabled");
                    this.guildId = guildId;
                    this.guildName = guildName;
                    this.emojiCount = i10;
                    this.emojisDisabled = emojisDisabled;
                    this.isNitroLocked = z10;
                    this.hasPremiumInlineRoadblockHeader = z11;
                    this.hasPremiumInlineRoadblockFooter = z12;
                }

                public final int getEmojiCount() {
                    return this.emojiCount;
                }

                @NotNull
                public final Set<Long> getEmojisDisabled() {
                    return this.emojisDisabled;
                }

                @NotNull
                public final String getGuildId() {
                    return this.guildId;
                }

                @NotNull
                public final String getGuildName() {
                    return this.guildName;
                }

                public final boolean getHasPremiumInlineRoadblockFooter() {
                    return this.hasPremiumInlineRoadblockFooter;
                }

                public final boolean getHasPremiumInlineRoadblockHeader() {
                    return this.hasPremiumInlineRoadblockHeader;
                }

                public final boolean isNitroLocked() {
                    return this.isNitroLocked;
                }
            }

            @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Unicode;", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection;", "title", "", "emojiCount", "", "<init>", "(Ljava/lang/String;I)V", "getTitle", "()Ljava/lang/String;", "getEmojiCount", "()I", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class Unicode extends NativeSection {
                private final int emojiCount;
                @NotNull
                private final String title;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public Unicode(@NotNull String title, int i10) {
                    super(null);
                    Intrinsics.checkNotNullParameter(title, "title");
                    this.title = title;
                    this.emojiCount = i10;
                }

                public final int getEmojiCount() {
                    return this.emojiCount;
                }

                @NotNull
                public final String getTitle() {
                    return this.title;
                }
            }

            public /* synthetic */ NativeSection(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final int getCount() {
                if (this instanceof Guild) {
                    return ((Guild) this).getEmojiCount();
                }
                if (this instanceof Unicode) {
                    return ((Unicode) this).getEmojiCount();
                }
                throw new ir.p();
            }

            private NativeSection() {
            }
        }

        public CoreData(int i10, boolean z10, boolean z11, boolean z12, @NotNull List<EmojiPickerItem> leading, @NotNull List<EmojiPickerItem> trailing, @NotNull List<NativeSection.Guild> nativeSectionsEmojis, @NotNull List<NativeSection.Unicode> nativeSectionsEmojisUnicode) {
            Intrinsics.checkNotNullParameter(leading, "leading");
            Intrinsics.checkNotNullParameter(trailing, "trailing");
            Intrinsics.checkNotNullParameter(nativeSectionsEmojis, "nativeSectionsEmojis");
            Intrinsics.checkNotNullParameter(nativeSectionsEmojisUnicode, "nativeSectionsEmojisUnicode");
            this.rowSize = i10;
            this.hasGuildData = z10;
            this.hasSearchData = z11;
            this.hasPremiumInlineRoadblock = z12;
            this.leading = leading;
            this.trailing = trailing;
            this.nativeSectionsEmojis = nativeSectionsEmojis;
            this.nativeSectionsEmojisUnicode = nativeSectionsEmojisUnicode;
            this.categoryIndices$delegate = ir.l.b(new Function0() { // from class: com.discord.emoji_picker.b
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map categoryIndices_delegate$lambda$1;
                    categoryIndices_delegate$lambda$1 = EmojiPickerItemData.CoreData.categoryIndices_delegate$lambda$1(EmojiPickerItemData.CoreData.this);
                    return categoryIndices_delegate$lambda$1;
                }
            });
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map categoryIndices_delegate$lambda$1(CoreData coreData) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            int i10 = 0;
            for (EmojiPickerItem emojiPickerItem : coreData.leading) {
                if (emojiPickerItem instanceof EmojiPickerItem.Category) {
                    linkedHashMap.put(Long.valueOf(IdUtilsKt.convertToId(((EmojiPickerItem.Category) emojiPickerItem).getTitle())), Integer.valueOf(i10));
                    i10++;
                }
            }
            for (NativeSection.Guild guild : coreData.nativeSectionsEmojis) {
                linkedHashMap.put(Long.valueOf(Long.parseLong(guild.getGuildId())), Integer.valueOf(i10));
                i10++;
            }
            for (NativeSection.Unicode unicode : coreData.nativeSectionsEmojisUnicode) {
                linkedHashMap.put(Long.valueOf(IdUtilsKt.convertToId(unicode.getTitle())), Integer.valueOf(i10));
                i10++;
            }
            for (EmojiPickerItem emojiPickerItem2 : coreData.trailing) {
                if (emojiPickerItem2 instanceof EmojiPickerItem.Category) {
                    linkedHashMap.put(Long.valueOf(IdUtilsKt.convertToId(((EmojiPickerItem.Category) emojiPickerItem2).getTitle())), Integer.valueOf(i10));
                    i10++;
                }
            }
            return linkedHashMap;
        }

        public static /* synthetic */ CoreData copy$default(CoreData coreData, int i10, boolean z10, boolean z11, boolean z12, List list, List list2, List list3, List list4, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = coreData.rowSize;
            }
            if ((i11 & 2) != 0) {
                z10 = coreData.hasGuildData;
            }
            if ((i11 & 4) != 0) {
                z11 = coreData.hasSearchData;
            }
            if ((i11 & 8) != 0) {
                z12 = coreData.hasPremiumInlineRoadblock;
            }
            List<EmojiPickerItem> list5 = list;
            if ((i11 & 16) != 0) {
                list5 = coreData.leading;
            }
            List<EmojiPickerItem> list6 = list2;
            if ((i11 & 32) != 0) {
                list6 = coreData.trailing;
            }
            List<NativeSection.Guild> list7 = list3;
            if ((i11 & 64) != 0) {
                list7 = coreData.nativeSectionsEmojis;
            }
            List<NativeSection.Unicode> list8 = list4;
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                list8 = coreData.nativeSectionsEmojisUnicode;
            }
            List list9 = list7;
            List list10 = list8;
            List list11 = list5;
            List list12 = list6;
            return coreData.copy(i10, z10, z11, z12, list11, list12, list9, list10);
        }

        public final int component1() {
            return this.rowSize;
        }

        public final boolean component2() {
            return this.hasGuildData;
        }

        public final boolean component3() {
            return this.hasSearchData;
        }

        public final boolean component4() {
            return this.hasPremiumInlineRoadblock;
        }

        @NotNull
        public final List<EmojiPickerItem> component5() {
            return this.leading;
        }

        @NotNull
        public final List<EmojiPickerItem> component6() {
            return this.trailing;
        }

        @NotNull
        public final List<NativeSection.Guild> component7() {
            return this.nativeSectionsEmojis;
        }

        @NotNull
        public final List<NativeSection.Unicode> component8() {
            return this.nativeSectionsEmojisUnicode;
        }

        @NotNull
        public final CoreData copy(int i10, boolean z10, boolean z11, boolean z12, @NotNull List<EmojiPickerItem> leading, @NotNull List<EmojiPickerItem> trailing, @NotNull List<NativeSection.Guild> nativeSectionsEmojis, @NotNull List<NativeSection.Unicode> nativeSectionsEmojisUnicode) {
            Intrinsics.checkNotNullParameter(leading, "leading");
            Intrinsics.checkNotNullParameter(trailing, "trailing");
            Intrinsics.checkNotNullParameter(nativeSectionsEmojis, "nativeSectionsEmojis");
            Intrinsics.checkNotNullParameter(nativeSectionsEmojisUnicode, "nativeSectionsEmojisUnicode");
            return new CoreData(i10, z10, z11, z12, leading, trailing, nativeSectionsEmojis, nativeSectionsEmojisUnicode);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof CoreData) {
                CoreData coreData = (CoreData) obj;
                return this.rowSize == coreData.rowSize && this.hasGuildData == coreData.hasGuildData && this.hasSearchData == coreData.hasSearchData && this.hasPremiumInlineRoadblock == coreData.hasPremiumInlineRoadblock && Intrinsics.areEqual(this.leading, coreData.leading) && Intrinsics.areEqual(this.trailing, coreData.trailing) && Intrinsics.areEqual(this.nativeSectionsEmojis, coreData.nativeSectionsEmojis) && Intrinsics.areEqual(this.nativeSectionsEmojisUnicode, coreData.nativeSectionsEmojisUnicode);
            }
            return false;
        }

        @NotNull
        public final Map<Long, Integer> getCategoryIndices() {
            return (Map) this.categoryIndices$delegate.getValue();
        }

        @NotNull
        public final List<EmojiPickerItem> getEmojisPlaceholderList() {
            return new EmojiPickerPlaceholderList(this.nativeSectionsEmojis, 0L);
        }

        @NotNull
        public final List<EmojiPickerItem> getEmojisUnicodePlaceholderList() {
            return new EmojiPickerPlaceholderList(this.nativeSectionsEmojisUnicode, 50000L);
        }

        public final boolean getHasGuildData() {
            return this.hasGuildData;
        }

        public final boolean getHasPremiumInlineRoadblock() {
            return this.hasPremiumInlineRoadblock;
        }

        public final boolean getHasSearchData() {
            return this.hasSearchData;
        }

        @NotNull
        public final List<EmojiPickerItem> getLeading() {
            return this.leading;
        }

        @NotNull
        public final List<NativeSection.Guild> getNativeSectionsEmojis() {
            return this.nativeSectionsEmojis;
        }

        @NotNull
        public final List<NativeSection.Unicode> getNativeSectionsEmojisUnicode() {
            return this.nativeSectionsEmojisUnicode;
        }

        public final int getRowSize() {
            return this.rowSize;
        }

        @NotNull
        public final List<EmojiPickerItem> getTrailing() {
            return this.trailing;
        }

        public int hashCode() {
            return (((((((((((((Integer.hashCode(this.rowSize) * 31) + Boolean.hashCode(this.hasGuildData)) * 31) + Boolean.hashCode(this.hasSearchData)) * 31) + Boolean.hashCode(this.hasPremiumInlineRoadblock)) * 31) + this.leading.hashCode()) * 31) + this.trailing.hashCode()) * 31) + this.nativeSectionsEmojis.hashCode()) * 31) + this.nativeSectionsEmojisUnicode.hashCode();
        }

        @NotNull
        public String toString() {
            int i10 = this.rowSize;
            boolean z10 = this.hasGuildData;
            boolean z11 = this.hasSearchData;
            boolean z12 = this.hasPremiumInlineRoadblock;
            List<EmojiPickerItem> list = this.leading;
            List<EmojiPickerItem> list2 = this.trailing;
            List<NativeSection.Guild> list3 = this.nativeSectionsEmojis;
            List<NativeSection.Unicode> list4 = this.nativeSectionsEmojisUnicode;
            return "CoreData(rowSize=" + i10 + ", hasGuildData=" + z10 + ", hasSearchData=" + z11 + ", hasPremiumInlineRoadblock=" + z12 + ", leading=" + list + ", trailing=" + list2 + ", nativeSectionsEmojis=" + list3 + ", nativeSectionsEmojisUnicode=" + list4 + ")";
        }
    }

    public EmojiPickerItemData(@NotNull CoreData coreData) {
        Intrinsics.checkNotNullParameter(coreData, "coreData");
        this.coreData = coreData;
        this.emojisUnset = true;
        this.emojis = CollectionsKt.l();
        this.emojisUnicode = CollectionsKt.l();
        this.dataSets = new List[]{this.coreData.getLeading(), this.coreData.getEmojisPlaceholderList(), this.coreData.getEmojisUnicodePlaceholderList(), this.coreData.getTrailing()};
    }

    @NotNull
    public final EmojiPickerItem getItem(int i10) {
        List<EmojiPickerItem>[] listArr;
        int i11 = 0;
        for (List<EmojiPickerItem> list : this.dataSets) {
            if (i10 < list.size() + i11) {
                return list.get(i10 - i11);
            }
            i11 += list.size();
        }
        throw new IndexOutOfBoundsException("No item at position " + i10);
    }

    public final int getItemCount() {
        int i10 = 0;
        for (List<EmojiPickerItem> list : this.dataSets) {
            i10 += list.size();
        }
        return i10;
    }

    public final Integer getItemIndex(int i10) {
        EmojiPickerItem item = getItem(i10);
        if (item instanceof EmojiPickerItem.Category) {
            return this.coreData.getCategoryIndices().get(Long.valueOf(((EmojiPickerItem.Category) item).itemId()));
        }
        int itemType = item.itemType();
        throw new IllegalArgumentException("Unsupported item type " + itemType);
    }

    public final int getRowSize() {
        return this.coreData.getRowSize();
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r3v3, types: [java.lang.Object] */
    public final void setCoreData(@NotNull CoreData coreData, @NotNull Function0<Unit> onChanged) {
        Intrinsics.checkNotNullParameter(coreData, "coreData");
        Intrinsics.checkNotNullParameter(onChanged, "onChanged");
        List<EmojiPickerItem>[] listArr = this.dataSets;
        List<EmojiPickerItem> leading = coreData.getLeading();
        leading.set(0, this.coreData.getLeading().get(0));
        Unit unit = Unit.f33298a;
        listArr[0] = leading;
        List<EmojiPickerItem>[] listArr2 = this.dataSets;
        List<EmojiPickerItem> trailing = coreData.getTrailing();
        trailing.set(CollectionsKt.n(trailing), CollectionsKt.z0(this.coreData.getTrailing()));
        listArr2[3] = trailing;
        if (coreData.getHasSearchData()) {
            this.dataSets[1] = CollectionsKt.l();
            this.dataSets[2] = CollectionsKt.l();
        } else if (this.emojisUnset) {
            this.dataSets[1] = coreData.getEmojisPlaceholderList();
            this.dataSets[2] = coreData.getEmojisUnicodePlaceholderList();
        } else {
            List<EmojiPickerItem>[] listArr3 = this.dataSets;
            listArr3[1] = this.emojis;
            listArr3[2] = this.emojisUnicode;
        }
        this.coreData = coreData;
        onChanged.invoke();
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final void setEmojis(@NotNull List<? extends EmojiPickerItem> emojis, @NotNull List<? extends EmojiPickerItem> emojisUnicode, @NotNull Function0<Unit> onChanged) {
        Intrinsics.checkNotNullParameter(emojis, "emojis");
        Intrinsics.checkNotNullParameter(emojisUnicode, "emojisUnicode");
        Intrinsics.checkNotNullParameter(onChanged, "onChanged");
        this.emojisUnset = false;
        this.emojis = emojis;
        this.emojisUnicode = emojisUnicode;
        List<EmojiPickerItem>[] listArr = this.dataSets;
        listArr[1] = emojis;
        listArr[2] = emojisUnicode;
        onChanged.invoke();
    }

    public final void setSpacerBottomHeight(int i10, @NotNull Function1<? super Integer, Unit> onChanged) {
        Intrinsics.checkNotNullParameter(onChanged, "onChanged");
        Object z02 = CollectionsKt.z0(this.coreData.getTrailing());
        Intrinsics.checkNotNull(z02, "null cannot be cast to non-null type com.discord.emoji_picker.EmojiPickerItem.Spacer");
        if (((EmojiPickerItem.Spacer) z02).getHeight() != i10) {
            this.coreData.getTrailing().set(CollectionsKt.n(this.coreData.getTrailing()), new EmojiPickerItem.Spacer(ViewProps.BOTTOM, i10));
            onChanged.invoke(Integer.valueOf(getItemCount() - 1));
        }
    }

    public final void setSpacerTopHeight(int i10, @NotNull Function1<? super Integer, Unit> onChanged) {
        Intrinsics.checkNotNullParameter(onChanged, "onChanged");
        Object o02 = CollectionsKt.o0(this.coreData.getLeading());
        Intrinsics.checkNotNull(o02, "null cannot be cast to non-null type com.discord.emoji_picker.EmojiPickerItem.Spacer");
        if (((EmojiPickerItem.Spacer) o02).getHeight() != i10) {
            this.coreData.getLeading().set(0, new EmojiPickerItem.Spacer(ViewProps.TOP, i10));
            onChanged.invoke(0);
        }
    }
}
