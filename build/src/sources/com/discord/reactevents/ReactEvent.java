package com.discord.reactevents;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.WritableMap;
import ft.w;
import kotlin.Metadata;
import nt.a;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J\b\u0010\u0002\u001a\u00020\u0003H\u0016¨\u0006\u0004"}, d2 = {"Lcom/discord/reactevents/ReactEvent;", "", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "react_events_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ReactEvent {

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class DefaultImpls {
        @NotNull
        public static WritableMap serialize(@NotNull ReactEvent reactEvent) {
            return NativeMapExtensionsKt.toNativeMap(a.f41154b.e(w.b(reactEvent.getClass()), reactEvent));
        }
    }

    @NotNull
    WritableMap serialize();
}
