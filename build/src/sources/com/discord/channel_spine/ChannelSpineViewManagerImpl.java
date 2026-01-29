package com.discord.channel_spine;

import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tJ\u0016\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\rJ\u0016\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u00072\u0006\u0010\u000f\u001a\u00020\u0010R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/channel_spine/ChannelSpineViewManagerImpl;", "", "<init>", "()V", "NAME", "", "createViewInstance", "Lcom/discord/channel_spine/ChannelSpineView;", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "numRows", "", "view", "", "rowHeight", "height", "", "channel_spine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelSpineViewManagerImpl {
    @NotNull
    public static final ChannelSpineViewManagerImpl INSTANCE = new ChannelSpineViewManagerImpl();
    @NotNull
    public static final String NAME = "ChannelSpine";

    private ChannelSpineViewManagerImpl() {
    }

    @NotNull
    public final ChannelSpineView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new ChannelSpineView(reactContext, null, 2, null);
    }

    public final void numRows(@NotNull ChannelSpineView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNumRows(i10);
    }

    public final void rowHeight(@NotNull ChannelSpineView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setRowHeight(f10);
    }
}
