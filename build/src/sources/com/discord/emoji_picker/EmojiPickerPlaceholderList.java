package com.discord.emoji_picker;

import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.emoji_picker.EmojiPickerItemData;
import com.discord.misc.utilities.collections.StubbedList;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0007\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u001d\u0012\f\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0011\u0010\u0010\u001a\u00020\u00022\u0006\u0010\u0011\u001a\u00020\u000bH\u0096\u0002R\u0014\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0004X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\u00020\u000b8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u0012"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerPlaceholderList;", "Lcom/discord/misc/utilities/collections/StubbedList;", "Lcom/discord/emoji_picker/EmojiPickerItem;", "nativeSection", "", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData$NativeSection;", "offsetId", "", "<init>", "(Ljava/util/List;J)V", "listSize", "", "listHeaderIndices", "size", "getSize", "()I", "get", "index", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiPickerPlaceholderList.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerPlaceholderList.kt\ncom/discord/emoji_picker/EmojiPickerPlaceholderList\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,36:1\n1#2:37\n1#2:41\n2967#3,3:38\n2970#3,6:42\n*S KotlinDebug\n*F\n+ 1 EmojiPickerPlaceholderList.kt\ncom/discord/emoji_picker/EmojiPickerPlaceholderList\n*L\n11#1:41\n11#1:38,3\n11#1:42,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerPlaceholderList extends StubbedList<EmojiPickerItem> {
    @NotNull
    private final List<Integer> listHeaderIndices;
    private final int listSize;
    @NotNull
    private final List<EmojiPickerItemData.CoreData.NativeSection> nativeSection;
    private final long offsetId;

    /* JADX WARN: Multi-variable type inference failed */
    public EmojiPickerPlaceholderList(@NotNull List<? extends EmojiPickerItemData.CoreData.NativeSection> nativeSection, long j10) {
        List list;
        Intrinsics.checkNotNullParameter(nativeSection, "nativeSection");
        this.nativeSection = nativeSection;
        this.offsetId = j10;
        int i10 = 0;
        for (EmojiPickerItemData.CoreData.NativeSection nativeSection2 : nativeSection) {
            i10 += nativeSection2.getCount() + 1;
        }
        this.listSize = i10;
        List<EmojiPickerItemData.CoreData.NativeSection> list2 = this.nativeSection;
        Integer num = 0;
        int w10 = CollectionsKt.w(list2, 9);
        if (w10 == 0) {
            list = CollectionsKt.e(num);
        } else {
            ArrayList arrayList = new ArrayList(w10 + 1);
            arrayList.add(num);
            for (EmojiPickerItemData.CoreData.NativeSection nativeSection3 : list2) {
                num = Integer.valueOf(num.intValue() + nativeSection3.getCount() + 1);
                arrayList.add(num);
            }
            list = arrayList;
        }
        this.listHeaderIndices = CollectionsKt.g0(list, 1);
    }

    public /* bridge */ boolean contains(EmojiPickerItem emojiPickerItem) {
        return super.contains((Object) emojiPickerItem);
    }

    @Override // com.discord.misc.utilities.collections.StubbedList
    public int getSize() {
        return this.listSize;
    }

    public /* bridge */ int indexOf(EmojiPickerItem emojiPickerItem) {
        return super.indexOf((Object) emojiPickerItem);
    }

    public /* bridge */ int lastIndexOf(EmojiPickerItem emojiPickerItem) {
        return super.lastIndexOf((Object) emojiPickerItem);
    }

    @Override // com.discord.misc.utilities.collections.StubbedList, java.util.List, java.util.Collection
    public final /* bridge */ boolean contains(Object obj) {
        if (obj instanceof EmojiPickerItem) {
            return contains((EmojiPickerItem) obj);
        }
        return false;
    }

    @Override // com.discord.misc.utilities.collections.StubbedList, java.util.List
    @NotNull
    public EmojiPickerItem get(int i10) {
        String guildName;
        int indexOf = this.listHeaderIndices.indexOf(Integer.valueOf(i10));
        if (indexOf != -1) {
            EmojiPickerItemData.CoreData.NativeSection nativeSection = this.nativeSection.get(indexOf);
            if (nativeSection instanceof EmojiPickerItemData.CoreData.NativeSection.Unicode) {
                guildName = ((EmojiPickerItemData.CoreData.NativeSection.Unicode) nativeSection).getTitle();
            } else if (nativeSection instanceof EmojiPickerItemData.CoreData.NativeSection.Guild) {
                guildName = ((EmojiPickerItemData.CoreData.NativeSection.Guild) nativeSection).getGuildName();
            } else {
                throw new or.p();
            }
            return new EmojiPickerItem.Category(guildName, 0L, false, 6, null);
        }
        return new EmojiPickerItem.EmojiPlaceholder(this.offsetId + i10);
    }

    @Override // com.discord.misc.utilities.collections.StubbedList, java.util.List
    public final /* bridge */ int indexOf(Object obj) {
        if (obj instanceof EmojiPickerItem) {
            return indexOf((EmojiPickerItem) obj);
        }
        return -1;
    }

    @Override // com.discord.misc.utilities.collections.StubbedList, java.util.List
    public final /* bridge */ int lastIndexOf(Object obj) {
        if (obj instanceof EmojiPickerItem) {
            return lastIndexOf((EmojiPickerItem) obj);
        }
        return -1;
    }
}
