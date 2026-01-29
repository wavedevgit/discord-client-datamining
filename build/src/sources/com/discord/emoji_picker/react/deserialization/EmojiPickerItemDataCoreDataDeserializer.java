package com.discord.emoji_picker.react.deserialization;

import com.discord.emoji.UnicodeEmojis;
import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.emoji_picker.EmojiPickerItemData;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J&\u0010\u0004\u001a\u00020\u0005*\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\nJ\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u0007\u001a\u00020\bH\u0002J\u001e\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\b2\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u0002J4\u0010\u0014\u001a\u00020\u000f2\u0006\u0010\u0015\u001a\u00020\b2\f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00170\u00122\f\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00190\u00122\u0006\u0010\u001a\u001a\u00020\u001bH\u0002J\u001e\u0010\u001c\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\b2\f\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u0002J&\u0010\u001e\u001a\u00020\u000f2\u0006\u0010\u001f\u001a\u00020 2\f\u0010!\u001a\b\u0012\u0004\u0012\u00020\u00130\u00122\u0006\u0010\u001a\u001a\u00020\u001bH\u0002¨\u0006\""}, d2 = {"Lcom/discord/emoji_picker/react/deserialization/EmojiPickerItemDataCoreDataDeserializer;", "", "<init>", "()V", "deserialize", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$Companion;", "data", "Lcom/facebook/react/bridge/ReadableMap;", "contentPaddingBottom", "", "contentPaddingTop", "deserializeRowSize", "", "deserializeTypeTitle", "", "section", "leading", "", "Lcom/discord/emoji_picker/EmojiPickerItem;", "deserializeTypeNativeSection", "emojiSection", "emojis", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Guild;", "emojisUnicode", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection$Unicode;", "isSectionNitroLocked", "", "deserializeTypeFooterUpsell", "trailing", "deserializeTypeEmojiRowSlim", "emojisRow", "Lcom/facebook/react/bridge/ReadableArray;", "emojiItems", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiPickerItemDataCoreDataDeserializer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerItemDataCoreDataDeserializer.kt\ncom/discord/emoji_picker/react/deserialization/EmojiPickerItemDataCoreDataDeserializer\n+ 2 NativeArrayExtensions.kt\ncom/discord/react/utilities/NativeArrayExtensionsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,197:1\n100#2:198\n97#2:199\n101#2,2:201\n92#2:204\n93#2:207\n94#2:209\n97#2:211\n1869#3:200\n1870#3:203\n1634#3,2:205\n1636#3:208\n1869#3,2:212\n1#4:210\n*S KotlinDebug\n*F\n+ 1 EmojiPickerItemDataCoreDataDeserializer.kt\ncom/discord/emoji_picker/react/deserialization/EmojiPickerItemDataCoreDataDeserializer\n*L\n35#1:198\n35#1:199\n35#1:201,2\n124#1:204\n124#1:207\n124#1:209\n165#1:211\n35#1:200\n35#1:203\n124#1:205,2\n124#1:208\n165#1:212,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerItemDataCoreDataDeserializer {
    @NotNull
    public static final EmojiPickerItemDataCoreDataDeserializer INSTANCE = new EmojiPickerItemDataCoreDataDeserializer();

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[EmojiPickerItemTypes.values().length];
            try {
                iArr[EmojiPickerItemTypes.TITLE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[EmojiPickerItemTypes.EMOJI_ROW_SLIM.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[EmojiPickerItemTypes.NATIVE_SECTION.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[EmojiPickerItemTypes.FOOTER_UPSELL.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    private EmojiPickerItemDataCoreDataDeserializer() {
    }

    public static /* synthetic */ EmojiPickerItemData.CoreData deserialize$default(EmojiPickerItemDataCoreDataDeserializer emojiPickerItemDataCoreDataDeserializer, EmojiPickerItemData.CoreData.Companion companion, ReadableMap readableMap, float f10, float f11, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            f10 = 0.0f;
        }
        if ((i10 & 4) != 0) {
            f11 = 0.0f;
        }
        return emojiPickerItemDataCoreDataDeserializer.deserialize(companion, readableMap, f10, f11);
    }

    private final int deserializeRowSize(ReadableMap readableMap) {
        int i10 = readableMap.getInt("rowSize");
        if (i10 > 0) {
            return i10;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    private final void deserializeTypeEmojiRowSlim(ReadableArray readableArray, List<EmojiPickerItem> list, boolean z10) {
        Iterator it = NativeArrayExtensionsKt.sizeRange(readableArray).iterator();
        while (it.hasNext()) {
            ReadableMap map = readableArray.getMap(((m0) it).nextInt());
            Intrinsics.checkNotNull(map);
            String string = map.getString(StackTraceHelper.ID_KEY);
            String nonNullString = NativeMapExtensionsKt.getNonNullString(map, StackTraceHelper.NAME_KEY);
            boolean z11 = NativeMapExtensionsKt.getBoolean(map, "animated", false);
            if (string == null) {
                list.add(new EmojiPickerItem.Emoji(IdUtilsKt.convertToId(nonNullString), nonNullString, z11, null, new UnicodeEmojis.Emoji(CollectionsKt.e(nonNullString), NativeMapExtensionsKt.getNonNullString(map, "surrogates")), false, 40, null));
            } else {
                list.add(new EmojiPickerItem.Emoji(Long.parseLong(string), nonNullString, z11, EmojiPickerItem.Emoji.DisabledType.Companion.create(NativeMapExtensionsKt.getBoolean(map, "disabled", false), z10), null, false, 48, null));
            }
        }
    }

    private final void deserializeTypeFooterUpsell(ReadableMap readableMap, List<EmojiPickerItem> list) {
        Object obj;
        Iterator<T> it = list.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((EmojiPickerItem) obj) instanceof EmojiPickerItem.FooterUpsell) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        if (obj == null) {
            list.add(CollectionsKt.n(list), new EmojiPickerItem.FooterUpsell(NativeMapExtensionsKt.getNonNullString(readableMap, StackTraceHelper.ID_KEY)));
            return;
        }
        throw new IllegalArgumentException("Only one footer upsell is supported.");
    }

    private final void deserializeTypeNativeSection(ReadableMap readableMap, List<EmojiPickerItemData.CoreData.NativeSection.Guild> list, List<EmojiPickerItemData.CoreData.NativeSection.Unicode> list2, boolean z10) {
        String string = readableMap.getString("guildId");
        if (string != null) {
            String nonNullString = NativeMapExtensionsKt.getNonNullString(readableMap, "title");
            int i10 = readableMap.getInt("emojiCount");
            ReadableArray nonNullArray = NativeMapExtensionsKt.getNonNullArray(readableMap, "emojisDisabled");
            HashSet hashSet = new HashSet();
            Iterator it = NativeArrayExtensionsKt.sizeRange(nonNullArray).iterator();
            while (it.hasNext()) {
                String string2 = nonNullArray.getString(((m0) it).nextInt());
                Intrinsics.checkNotNull(string2);
                hashSet.add(Long.valueOf(Long.parseLong(string2)));
            }
            list.add(new EmojiPickerItemData.CoreData.NativeSection.Guild(string, nonNullString, i10, hashSet, z10, readableMap.getBoolean("hasPremiumInlineRoadblockHeader"), readableMap.getBoolean("hasPremiumInlineRoadblockFooter")));
            return;
        }
        list2.add(new EmojiPickerItemData.CoreData.NativeSection.Unicode(NativeMapExtensionsKt.getNonNullString(readableMap, "title"), readableMap.getInt("emojiCount")));
    }

    private final void deserializeTypeTitle(ReadableMap readableMap, List<EmojiPickerItem> list) {
        list.add(new EmojiPickerItem.Category(NativeMapExtensionsKt.getNonNullString(readableMap, "title"), 0L, false, 6, null));
    }

    @NotNull
    public final EmojiPickerItemData.CoreData deserialize(@NotNull EmojiPickerItemData.CoreData.Companion companion, @NotNull ReadableMap data, float f10, float f11) {
        Intrinsics.checkNotNullParameter(companion, "<this>");
        Intrinsics.checkNotNullParameter(data, "data");
        EmojiPickerItem.Spacer spacer = new EmojiPickerItem.Spacer(ViewProps.TOP, SizeUtilsKt.getDpToPx(f11));
        EmojiPickerItem.Spacer spacer2 = new EmojiPickerItem.Spacer(ViewProps.BOTTOM, SizeUtilsKt.getDpToPx(f10));
        List<EmojiPickerItem> r10 = CollectionsKt.r(spacer);
        List<EmojiPickerItem> r11 = CollectionsKt.r(spacer2);
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        ReadableArray nonNullArray = NativeMapExtensionsKt.getNonNullArray(data, "data");
        Iterator it = NativeArrayExtensionsKt.sizeRange(nonNullArray).iterator();
        boolean z10 = false;
        while (it.hasNext()) {
            ReadableMap map = nonNullArray.getMap(((m0) it).nextInt());
            Intrinsics.checkNotNull(map);
            EmojiPickerItemTypes create = EmojiPickerItemTypes.Companion.create(map.getInt("type"));
            int i10 = WhenMappings.$EnumSwitchMapping$0[create.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (!create.getNoop()) {
                                throw new IllegalArgumentException(create.getUnsupported());
                            }
                        } else {
                            INSTANCE.deserializeTypeFooterUpsell(map, r11);
                        }
                    } else {
                        EmojiPickerItemDataCoreDataDeserializer emojiPickerItemDataCoreDataDeserializer = INSTANCE;
                        boolean z11 = map.getBoolean("isSectionNitroLocked");
                        if (!z10 && !z11) {
                            z10 = false;
                        } else {
                            z10 = true;
                        }
                        Unit unit = Unit.f33282a;
                        emojiPickerItemDataCoreDataDeserializer.deserializeTypeNativeSection(map, arrayList, arrayList2, z11);
                    }
                } else {
                    EmojiPickerItemDataCoreDataDeserializer emojiPickerItemDataCoreDataDeserializer2 = INSTANCE;
                    ReadableArray nonNullArray2 = NativeMapExtensionsKt.getNonNullArray(map, "emojis");
                    boolean z12 = map.getBoolean("isSectionNitroLocked");
                    if (!z10 && !z12) {
                        z10 = false;
                    } else {
                        z10 = true;
                    }
                    Unit unit2 = Unit.f33282a;
                    emojiPickerItemDataCoreDataDeserializer2.deserializeTypeEmojiRowSlim(nonNullArray2, r10, z12);
                }
            } else {
                INSTANCE.deserializeTypeTitle(map, r10);
            }
        }
        return new EmojiPickerItemData.CoreData(deserializeRowSize(data), data.getBoolean("hasGuildData"), data.getBoolean("hasSearchData"), z10, r10, r11, arrayList, arrayList2);
    }
}
