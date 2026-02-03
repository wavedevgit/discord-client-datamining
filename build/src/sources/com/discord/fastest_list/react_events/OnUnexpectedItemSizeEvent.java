package com.discord.fastest_list.react_events;

import com.discord.fastest_list.android.FastestListSections;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import jr.v;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\b\u001a\u00020\tH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/fastest_list/react_events/OnUnexpectedItemSizeEvent;", "Lcom/discord/reactevents/ReactEvent;", "entry", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "size", "", "<init>", "(Lcom/discord/fastest_list/android/FastestListSections$Entry;I)V", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnUnexpectedItemSizeEvent implements ReactEvent {
    @NotNull
    private final FastestListSections.Entry entry;
    private final int size;

    public OnUnexpectedItemSizeEvent(@NotNull FastestListSections.Entry entry, int i10) {
        Intrinsics.checkNotNullParameter(entry, "entry");
        this.entry = entry;
        this.size = i10;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        int i10;
        Pair a10 = v.a("section", Integer.valueOf(this.entry.mo879getSectionsZRFyWU()));
        FastestListSections.Entry entry = this.entry;
        if (entry instanceof FastestListSections.Entry.SectionItem) {
            i10 = ((FastestListSections.Entry.SectionItem) entry).m896getItemJXkbwXs();
        } else {
            i10 = 0;
        }
        return NativeMapExtensionsKt.nativeMapOf(a10, v.a("item", Integer.valueOf(i10)), v.a("isSectionHeader", Boolean.valueOf(this.entry instanceof FastestListSections.Entry.SectionHeader)), v.a("isSectionFooter", Boolean.valueOf(this.entry instanceof FastestListSections.Entry.SectionFooter)), v.a("size", Float.valueOf(SizeUtilsKt.getPxToDp(this.size))), v.a("sizeExpected", Float.valueOf(SizeUtilsKt.getPxToDp(this.entry.getSize()))));
    }
}
