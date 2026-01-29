package com.discord.sticker_picker.react;

import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.sticker_picker.StickerPickerRow;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.modules.dialog.AlertFragment;
import java.util.ArrayList;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u0010\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\u0000¨\u0006\u0004"}, d2 = {"deserializeStickerPickerRowData", "Lcom/discord/sticker_picker/StickerPickerRow;", "data", "Lcom/facebook/react/bridge/ReadableMap;", "sticker_picker_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nStickerPickerRowDataSerializationUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StickerPickerRowDataSerializationUtils.kt\ncom/discord/sticker_picker/react/StickerPickerRowDataSerializationUtilsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,44:1\n1563#2:45\n1634#2,3:46\n*S KotlinDebug\n*F\n+ 1 StickerPickerRowDataSerializationUtils.kt\ncom/discord/sticker_picker/react/StickerPickerRowDataSerializationUtilsKt\n*L\n17#1:45\n17#1:46,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StickerPickerRowDataSerializationUtilsKt {
    @NotNull
    public static final StickerPickerRow deserializeStickerPickerRowData(@NotNull ReadableMap data) {
        String str;
        StickerPickerRow.Sticker.Type type;
        Intrinsics.checkNotNullParameter(data, "data");
        double d10 = data.getDouble("rowContentWidth");
        int i10 = data.getInt("rowContentPaddingVertical");
        int i11 = data.getInt("itemSize");
        ReadableArray nonNullArray = NativeMapExtensionsKt.getNonNullArray(data, AlertFragment.ARG_ITEMS);
        IntRange sizeRange = NativeArrayExtensionsKt.sizeRange(nonNullArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            int nextInt = ((m0) it).nextInt();
            StickerPickerRow.Sticker sticker = null;
            if (!nonNullArray.isNull(nextInt)) {
                ReadableMap map = nonNullArray.getMap(nextInt);
                if (map != null) {
                    str = map.getString("stickerId");
                } else {
                    str = null;
                }
                if (str != null) {
                    ReadableMap map2 = nonNullArray.getMap(nextInt);
                    Intrinsics.checkNotNull(map2);
                    String nonNullString = NativeMapExtensionsKt.getNonNullString(map2, "stickerId");
                    String nonNullString2 = NativeMapExtensionsKt.getNonNullString(map2, "stickerName");
                    int i12 = map2.getInt("stickerType");
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 3) {
                                if (i12 == 4) {
                                    type = StickerPickerRow.Sticker.Type.GIF;
                                } else {
                                    throw new IllegalArgumentException("Unknown type " + i12);
                                }
                            } else {
                                type = StickerPickerRow.Sticker.Type.LOTTIE;
                            }
                        } else {
                            type = StickerPickerRow.Sticker.Type.APNG;
                        }
                    } else {
                        type = StickerPickerRow.Sticker.Type.PNG;
                    }
                    sticker = new StickerPickerRow.Sticker(nonNullString, nonNullString2, type, map2.getBoolean("stickerAnimated"), NativeMapExtensionsKt.getNonNullString(map2, "stickerUrl"), map2.getBoolean("stickerDisabled"), map2.getBoolean("stickerOpaque"));
                } else {
                    continue;
                }
            }
            arrayList.add(sticker);
        }
        return new StickerPickerRow(d10, i10, i11, arrayList);
    }
}
