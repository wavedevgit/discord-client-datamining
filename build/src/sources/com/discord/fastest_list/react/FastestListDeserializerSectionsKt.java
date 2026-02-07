package com.discord.fastest_list.react;

import com.discord.fastest_list.android.FastestListSections;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\u001a\u0015\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u0004H\u0080\u0002\u001aO\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\f2\u0006\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\f2\u0006\u0010\u0012\u001a\u00020\u0010H\u0002¢\u0006\u0002\u0010\u0013\u001aA\u0010\u0014\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\u0016\u001a\u00020\u00102\b\u0010\u0017\u001a\u0004\u0018\u00010\f2\u0006\u0010\u0018\u001a\u00020\u0010H\u0002¢\u0006\u0002\u0010\u0019\u001aA\u0010\u001a\u001a\u0004\u0018\u00010\u001b2\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\u001c\u001a\u00020\u00102\b\u0010\u001d\u001a\u0004\u0018\u00010\f2\u0006\u0010\u001e\u001a\u00020\u0010H\u0002¢\u0006\u0002\u0010\u001f¨\u0006 "}, d2 = {"invoke", "Lcom/discord/fastest_list/android/FastestListSections$Versioned;", "Lcom/discord/fastest_list/android/FastestListSections$Versioned$Companion;", "value", "Lcom/facebook/react/bridge/ReadableMap;", "createSectionItem", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "listId", "", "keysAreUniform", "", "sectionIndex", "", "sectionItemCount", "sectionItemIndex", "itemKeys", "Lcom/facebook/react/bridge/ReadableArray;", "itemSizeUniform", "itemSizes", "(Ljava/lang/String;ZIIILcom/facebook/react/bridge/ReadableArray;Ljava/lang/Integer;Lcom/facebook/react/bridge/ReadableArray;)Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionItem;", "createSectionHeader", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionHeader;", "sectionHeaderKeys", "sectionHeaderSizeUniform", "sectionHeaderSizes", "(Ljava/lang/String;ZILcom/facebook/react/bridge/ReadableArray;Ljava/lang/Integer;Lcom/facebook/react/bridge/ReadableArray;)Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionHeader;", "createSectionFooter", "Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionFooter;", "sectionFooterKeys", "sectionFooterSizeUniform", "sectionFooterSizes", "(Ljava/lang/String;ZILcom/facebook/react/bridge/ReadableArray;Ljava/lang/Integer;Lcom/facebook/react/bridge/ReadableArray;)Lcom/discord/fastest_list/android/FastestListSections$Entry$SectionFooter;", "fastest_list_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListDeserializerSectionsKt {
    private static final FastestListSections.Entry.SectionFooter createSectionFooter(String str, boolean z10, int i10, ReadableArray readableArray, Integer num, ReadableArray readableArray2) {
        int dpToPx;
        String str2;
        if (num != null) {
            dpToPx = num.intValue();
        } else {
            dpToPx = SizeUtilsKt.getDpToPx(readableArray2.getDouble(i10));
        }
        if (dpToPx <= 0) {
            return null;
        }
        FastestListSections.Entry.SectionFooter.Companion companion = FastestListSections.Entry.SectionFooter.Companion;
        if (!z10) {
            str2 = readableArray.getString(i10);
        } else {
            str2 = null;
        }
        return new FastestListSections.Entry.SectionFooter(companion.createKey(str, i10, str2), FastestListSections.Section.m903constructorimpl(i10), dpToPx, null);
    }

    private static final FastestListSections.Entry.SectionHeader createSectionHeader(String str, boolean z10, int i10, ReadableArray readableArray, Integer num, ReadableArray readableArray2) {
        int dpToPx;
        String str2;
        if (num != null) {
            dpToPx = num.intValue();
        } else {
            dpToPx = SizeUtilsKt.getDpToPx(readableArray2.getDouble(i10));
        }
        if (dpToPx <= 0) {
            return null;
        }
        FastestListSections.Entry.SectionHeader.Companion companion = FastestListSections.Entry.SectionHeader.Companion;
        if (!z10) {
            str2 = readableArray.getString(i10);
        } else {
            str2 = null;
        }
        return new FastestListSections.Entry.SectionHeader(companion.createKey(str, i10, str2), FastestListSections.Section.m903constructorimpl(i10), dpToPx, null);
    }

    private static final FastestListSections.Entry.SectionItem createSectionItem(String str, boolean z10, int i10, int i11, int i12, ReadableArray readableArray, Integer num, ReadableArray readableArray2) {
        int dpToPx;
        String str2;
        boolean z11;
        boolean z12;
        if (num != null) {
            dpToPx = num.intValue();
        } else {
            ReadableMap map = readableArray2.getMap(i10);
            Intrinsics.checkNotNull(map);
            dpToPx = SizeUtilsKt.getDpToPx(NativeMapExtensionsKt.getNonNullArray(map, "sizes").getDouble(i12));
        }
        int i13 = dpToPx;
        if (!z10) {
            ReadableMap map2 = readableArray.getMap(i10);
            Intrinsics.checkNotNull(map2);
            str2 = NativeMapExtensionsKt.getNonNullArray(map2, "keys").getString(i12);
        } else {
            str2 = null;
        }
        String createKey = FastestListSections.Entry.SectionItem.Companion.createKey(str, i10, i12, str2);
        int m903constructorimpl = FastestListSections.Section.m903constructorimpl(i10);
        int m896constructorimpl = FastestListSections.Item.m896constructorimpl(i12);
        if (i12 == 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (i12 == i11 - 1) {
            z12 = true;
        } else {
            z12 = false;
        }
        return new FastestListSections.Entry.SectionItem(createKey, m903constructorimpl, m896constructorimpl, i13, z11, z12, null);
    }

    @NotNull
    public static final FastestListSections.Versioned invoke(@NotNull FastestListSections.Versioned.Companion companion, @NotNull ReadableMap value) {
        ReadableArray readableArray;
        Integer num;
        Integer num2;
        Integer num3;
        ReadableArray readableArray2;
        Integer num4;
        ReadableArray readableArray3;
        FastestListSections.Entry.ListHeader listHeader;
        FastestListSections.Entry.ListFooter listFooter;
        Integer num5;
        ReadableArray readableArray4;
        Intrinsics.checkNotNullParameter(companion, "<this>");
        Intrinsics.checkNotNullParameter(value, "value");
        String nonNullString = NativeMapExtensionsKt.getNonNullString(value, "listId");
        boolean z10 = value.getBoolean("keysAreUniform");
        final ArrayList arrayList = new ArrayList();
        final Ref.IntRef intRef = new Ref.IntRef();
        final ArrayList arrayList2 = new ArrayList();
        List<Integer> intList = NativeArrayExtensionsKt.toIntList(NativeMapExtensionsKt.getNonNullArray(value, "sections"));
        String nonNullString2 = NativeMapExtensionsKt.getNonNullString(value, "sectionsId");
        ReadableArray nonNullArray = NativeMapExtensionsKt.getNonNullArray(value, "itemKeys");
        ReadableArray nonNullArray2 = NativeMapExtensionsKt.getNonNullArray(value, "itemSizes");
        if (value.getBoolean("itemSizeIsUniform")) {
            ReadableMap map = nonNullArray2.getMap(0);
            Intrinsics.checkNotNull(map);
            readableArray = nonNullArray;
            num = Integer.valueOf(SizeUtilsKt.getDpToPx(NativeMapExtensionsKt.getNonNullArray(map, "sizes").getDouble(0)));
        } else {
            readableArray = nonNullArray;
            num = null;
        }
        ReadableArray nonNullArray3 = NativeMapExtensionsKt.getNonNullArray(value, "sectionHeaderKeys");
        ReadableArray nonNullArray4 = NativeMapExtensionsKt.getNonNullArray(value, "sectionHeaderSizes");
        if (value.getBoolean("sectionHeaderSizeIsUniform")) {
            num2 = Integer.valueOf(SizeUtilsKt.getDpToPx(nonNullArray4.getDouble(0)));
        } else {
            num2 = null;
        }
        ReadableArray nonNullArray5 = NativeMapExtensionsKt.getNonNullArray(value, "sectionFooterKeys");
        ReadableArray nonNullArray6 = NativeMapExtensionsKt.getNonNullArray(value, "sectionFooterSizes");
        if (value.getBoolean("sectionFooterSizeIsUniform")) {
            num3 = Integer.valueOf(SizeUtilsKt.getDpToPx(nonNullArray6.getDouble(0)));
        } else {
            num3 = null;
        }
        boolean z11 = z10;
        String nonNullString3 = NativeMapExtensionsKt.getNonNullString(value, "listHeaderKey");
        ReadableArray readableArray5 = nonNullArray3;
        int dpToPx = SizeUtilsKt.getDpToPx(value.getDouble("listHeaderSize"));
        if (dpToPx > 0) {
            readableArray2 = nonNullArray6;
            num4 = num2;
            readableArray3 = nonNullArray4;
            listHeader = new FastestListSections.Entry.ListHeader(FastestListSections.Entry.ListHeader.Companion.createKey(nonNullString, nonNullString3), FastestListSections.Section.m903constructorimpl(0), dpToPx, null);
        } else {
            readableArray2 = nonNullArray6;
            num4 = num2;
            readableArray3 = nonNullArray4;
            listHeader = null;
        }
        String nonNullString4 = NativeMapExtensionsKt.getNonNullString(value, "listFooterKey");
        int dpToPx2 = SizeUtilsKt.getDpToPx(value.getDouble("listFooterSize"));
        if (dpToPx2 > 0) {
            listFooter = new FastestListSections.Entry.ListFooter(FastestListSections.Entry.ListFooter.Companion.createKey(nonNullString, nonNullString4), FastestListSections.Section.m903constructorimpl(Math.max(0, CollectionsKt.n(intList))), dpToPx2, null);
        } else {
            listFooter = null;
        }
        Function1 function1 = new Function1() { // from class: com.discord.fastest_list.react.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit invoke$lambda$0;
                invoke$lambda$0 = FastestListDeserializerSectionsKt.invoke$lambda$0(arrayList2, arrayList, intRef, (FastestListSections.Entry) obj);
                return invoke$lambda$0;
            }
        };
        int i10 = 0;
        while (i10 <= CollectionsKt.n(intList)) {
            if (i10 == 0) {
                function1.invoke(listHeader);
            }
            int intValue = intList.get(i10).intValue();
            if (intValue == 0) {
                if (i10 == CollectionsKt.n(intList)) {
                    function1.invoke(listFooter);
                }
                i10++;
            } else {
                FastestListSections.Entry.ListHeader listHeader2 = listHeader;
                List<Integer> list = intList;
                boolean z12 = z11;
                ReadableArray readableArray6 = readableArray3;
                Function1 function12 = function1;
                int i11 = i10;
                Integer num6 = num;
                ReadableArray readableArray7 = readableArray5;
                int i12 = intValue;
                Integer num7 = num4;
                ReadableArray readableArray8 = nonNullArray2;
                function12.invoke(createSectionHeader(nonNullString, z12, i11, readableArray7, num7, readableArray6));
                int i13 = 0;
                while (i13 < i12) {
                    int i14 = i12;
                    ReadableArray readableArray9 = readableArray;
                    function12.invoke(createSectionItem(nonNullString, z12, i11, i14, i13, readableArray9, num6, readableArray8));
                    i13++;
                    readableArray = readableArray9;
                    i12 = i14;
                }
                int i15 = i12;
                ReadableArray readableArray10 = readableArray;
                if (i13 == i15) {
                    num5 = num3;
                    readableArray4 = nonNullArray5;
                    function12.invoke(createSectionFooter(nonNullString, z12, i11, readableArray4, num5, readableArray2));
                    if (i11 == CollectionsKt.n(list)) {
                        function12.invoke(listFooter);
                    }
                } else {
                    num5 = num3;
                    readableArray4 = nonNullArray5;
                }
                nonNullArray5 = readableArray4;
                num3 = num5;
                readableArray = readableArray10;
                num = num6;
                nonNullArray2 = readableArray8;
                readableArray5 = readableArray7;
                readableArray3 = readableArray6;
                num4 = num7;
                z11 = z12;
                i10 = i11 + 1;
                function1 = function12;
                listHeader = listHeader2;
                intList = list;
            }
        }
        return new FastestListSections.Versioned(nonNullString2, arrayList2, intRef.element, arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invoke$lambda$0(List list, List list2, Ref.IntRef intRef, FastestListSections.Entry entry) {
        if (entry != null) {
            list.add(entry);
            list2.add(Integer.valueOf(intRef.element));
            intRef.element += entry.getSize();
        }
        return Unit.f32056a;
    }
}
