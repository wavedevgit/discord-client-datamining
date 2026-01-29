package com.discord.channel_spine;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.ChannelSpineManagerDelegate;
import com.facebook.react.viewmanagers.ChannelSpineManagerInterface;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ChannelSpineViewManagerImpl.NAME)
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0000\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u0018\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u0013H\u0017J\u0018\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0015\u001a\u00020\u0016H\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lcom/discord/channel_spine/ChannelSpineViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/discord/channel_spine/ChannelSpineView;", "Lcom/facebook/react/viewmanagers/ChannelSpineManagerInterface;", "<init>", "()V", "mDelegate", "Lcom/facebook/react/viewmanagers/ChannelSpineManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setNumRows", "", "view", "numRows", "", "setRowHeight", "height", "", "channel_spine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelSpineViewManager extends SimpleViewManager<ChannelSpineView> implements ChannelSpineManagerInterface<ChannelSpineView> {
    @NotNull
    private final ChannelSpineManagerDelegate<ChannelSpineView, ChannelSpineViewManager> mDelegate = new ChannelSpineManagerDelegate<>(this);

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return ChannelSpineViewManagerImpl.NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ChannelSpineView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return ChannelSpineViewManagerImpl.INSTANCE.createViewInstance(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ChannelSpineManagerDelegate<ChannelSpineView, ChannelSpineViewManager> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.viewmanagers.ChannelSpineManagerInterface
    @ReactProp(name = "numRows")
    public void setNumRows(@NotNull ChannelSpineView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        ChannelSpineViewManagerImpl.INSTANCE.numRows(view, i10);
    }

    @Override // com.facebook.react.viewmanagers.ChannelSpineManagerInterface
    @ReactProp(name = "rowHeight")
    public void setRowHeight(@NotNull ChannelSpineView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        ChannelSpineViewManagerImpl.INSTANCE.rowHeight(view, f10);
    }
}
