package com.discord.thumbhash;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.DCDImageWithThumbhashPlaceholderViewManagerInterface;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ImageWithThumbhashPlaceholderViewManager.NAME)
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0004\b\u0001\u0018\u0000 \u00162\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u0016B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\u0010\u0010\b\u001a\u00020\u00022\u0006\u0010\t\u001a\u00020\nH\u0014J\u001a\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u00022\b\u0010\u000e\u001a\u0004\u0018\u00010\u0007H\u0017J\u001a\u0010\u000f\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u00022\b\u0010\u0010\u001a\u0004\u0018\u00010\u0007H\u0017J\u0018\u0010\u0011\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u0013H\u0017J\u001c\u0010\u0014\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u00022\b\u0010\u0015\u001a\u0004\u0018\u00010\u0007H\u0017¨\u0006\u0017"}, d2 = {"Lcom/discord/thumbhash/ImageWithThumbhashPlaceholderViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/discord/thumbhash/ImageWithThumbhashPlaceholderView;", "Lcom/facebook/react/viewmanagers/DCDImageWithThumbhashPlaceholderViewManagerInterface;", "<init>", "()V", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setUri", "", "view", "uri", "setPlaceholder", ReactTextInputShadowNode.PROP_PLACEHOLDER, "setPlaceholderVersion", "placeholderVersion", "", "setAlt", "alt", "Companion", "thumbhash_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageWithThumbhashPlaceholderViewManager extends SimpleViewManager<ImageWithThumbhashPlaceholderView> implements DCDImageWithThumbhashPlaceholderViewManagerInterface<ImageWithThumbhashPlaceholderView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDImageWithThumbhashPlaceholderView";

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/thumbhash/ImageWithThumbhashPlaceholderViewManager$Companion;", "", "<init>", "()V", "NAME", "", "thumbhash_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ImageWithThumbhashPlaceholderView createViewInstance(@NotNull ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new ImageWithThumbhashPlaceholderView(reactContext, null, 2, null);
    }

    @Override // com.facebook.react.viewmanagers.DCDImageWithThumbhashPlaceholderViewManagerInterface
    @ReactProp(name = "alt")
    public void setAlt(ImageWithThumbhashPlaceholderView imageWithThumbhashPlaceholderView, String str) {
        if (imageWithThumbhashPlaceholderView != null) {
            imageWithThumbhashPlaceholderView.setAlt(str);
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDImageWithThumbhashPlaceholderViewManagerInterface
    @ReactProp(name = ReactTextInputShadowNode.PROP_PLACEHOLDER)
    public void setPlaceholder(@NotNull ImageWithThumbhashPlaceholderView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPlaceholder(str);
    }

    @Override // com.facebook.react.viewmanagers.DCDImageWithThumbhashPlaceholderViewManagerInterface
    @ReactProp(name = "placeholderVersion")
    public void setPlaceholderVersion(@NotNull ImageWithThumbhashPlaceholderView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setPlaceholderVersion(Integer.valueOf(i10));
    }

    @Override // com.facebook.react.viewmanagers.DCDImageWithThumbhashPlaceholderViewManagerInterface
    @ReactProp(name = "uri")
    public void setUri(@NotNull ImageWithThumbhashPlaceholderView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setUri(str);
    }
}
