package com.discord.fastest_list.react_events;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\b\u0000\u0018\u00002\u00020\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005B1\b\u0016\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\t\u0012\u0006\u0010\u000b\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\t¢\u0006\u0004\b\u0004\u0010\rJ\b\u0010\u000e\u001a\u00020\u0003H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000f"}, d2 = {"Lcom/discord/fastest_list/react_events/OnVisibleItemsChangedEvent;", "Lcom/discord/reactevents/ReactEvent;", "data", "Lcom/facebook/react/bridge/WritableMap;", "<init>", "(Lcom/facebook/react/bridge/WritableMap;)V", "sectionsId", "", "sectionStart", "", "sectionEnd", "itemStart", "itemEnd", "(Ljava/lang/String;IIII)V", "serialize", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnVisibleItemsChangedEvent implements ReactEvent {
    @NotNull
    private final WritableMap data;

    private OnVisibleItemsChangedEvent(WritableMap writableMap) {
        this.data = writableMap;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return this.data;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public OnVisibleItemsChangedEvent(@NotNull String sectionsId, int i10, int i11, int i12, int i13) {
        this(NativeMapExtensionsKt.nativeMapOf(v.a("sectionsId", sectionsId), v.a("sectionStart", Integer.valueOf(i10)), v.a("sectionEnd", Integer.valueOf(i11)), v.a("itemStart", Integer.valueOf(i12)), v.a("itemEnd", Integer.valueOf(i13))));
        Intrinsics.checkNotNullParameter(sectionsId, "sectionsId");
    }
}
