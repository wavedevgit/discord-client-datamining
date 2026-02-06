package com.shopify.reactnative.flash_list;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.AutoLayoutViewManagerDelegate;
import com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 -2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001.B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\n\u001a\u00020\t2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\n\u0010\u000bJ\u000f\u0010\r\u001a\u00020\fH\u0016¢\u0006\u0004\b\r\u0010\u000eJ\u0015\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u00020\u000fH\u0014¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0014\u001a\u00020\u00022\u0006\u0010\u0013\u001a\u00020\u0012H\u0014¢\u0006\u0004\b\u0014\u0010\u0015J'\u0010\u0017\u001a\u001a\u0012\u0004\u0012\u00020\f\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f0\u00160\u0016H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J\u001f\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u001aH\u0017¢\u0006\u0004\b\u001d\u0010\u001eJ\u001f\u0010 \u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00022\u0006\u0010\u001f\u001a\u00020\u001aH\u0017¢\u0006\u0004\b \u0010\u001eJ\u001f\u0010\"\u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00022\u0006\u0010!\u001a\u00020\u0006H\u0017¢\u0006\u0004\b\"\u0010#J\u001f\u0010%\u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00022\u0006\u0010$\u001a\u00020\u0006H\u0017¢\u0006\u0004\b%\u0010#J\u001f\u0010'\u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00022\u0006\u0010&\u001a\u00020\u0006H\u0017¢\u0006\u0004\b'\u0010#J\u001f\u0010)\u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00022\u0006\u0010(\u001a\u00020\u001aH\u0017¢\u0006\u0004\b)\u0010\u001eR \u0010+\u001a\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00000*8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010,¨\u0006/"}, d2 = {"Lcom/shopify/reactnative/flash_list/AutoLayoutViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/shopify/reactnative/flash_list/b;", "Lcom/facebook/react/viewmanagers/AutoLayoutViewManagerInterface;", "<init>", "()V", "", "dp", "density", "", "convertToPixelLayout", "(DD)I", "", "getName", "()Ljava/lang/String;", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "getDelegate", "()Lcom/facebook/react/uimanager/ViewManagerDelegate;", "Lcom/facebook/react/uimanager/ThemedReactContext;", "context", "createViewInstance", "(Lcom/facebook/react/uimanager/ThemedReactContext;)Lcom/shopify/reactnative/flash_list/b;", "", "getExportedCustomDirectEventTypeConstants", "()Ljava/util/Map;", "view", "", "isHorizontal", "", "setHorizontal", "(Lcom/shopify/reactnative/flash_list/b;Z)V", "disableAutoLayout", "setDisableAutoLayout", "scrollOffset", "setScrollOffset", "(Lcom/shopify/reactnative/flash_list/b;D)V", "windowSize", "setWindowSize", "renderOffset", "setRenderAheadOffset", "enableInstrumentation", "setEnableInstrumentation", "Lcom/facebook/react/viewmanagers/AutoLayoutViewManagerDelegate;", "mDelegate", "Lcom/facebook/react/viewmanagers/AutoLayoutViewManagerDelegate;", "Companion", "a", "shopify_flash-list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = AutoLayoutViewManager.REACT_CLASS)
@SourceDebugExtension({"SMAP\nAutoLayoutViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AutoLayoutViewManager.kt\ncom/shopify/reactnative/flash_list/AutoLayoutViewManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,71:1\n1#2:72\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AutoLayoutViewManager extends ViewGroupManager<b> implements AutoLayoutViewManagerInterface<b> {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    public static final String REACT_CLASS = "AutoLayoutView";
    @NotNull
    private final AutoLayoutViewManagerDelegate<b, AutoLayoutViewManager> mDelegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public AutoLayoutViewManager() {
        super(null, 1, null);
        this.mDelegate = new AutoLayoutViewManagerDelegate<>(this);
    }

    private final int convertToPixelLayout(double d10, double d11) {
        return fs.a.b(d10 * d11);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    protected ViewManagerDelegate<b> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Map<String, String>> getExportedCustomDirectEventTypeConstants() {
        return o0.n(v.a("onBlankAreaEvent", o0.n(v.a("registrationName", "onBlankAreaEvent"))));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public b createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        b bVar = new b(context);
        bVar.setPixelDensity(context.getResources().getDisplayMetrics().density);
        return bVar;
    }

    @Override // com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface
    @ReactProp(name = "disableAutoLayout")
    public void setDisableAutoLayout(@NotNull b view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setDisableAutoLayout(z10);
    }

    @Override // com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface
    @ReactProp(name = "enableInstrumentation")
    public void setEnableInstrumentation(@NotNull b view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEnableInstrumentation(z10);
    }

    @Override // com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface
    @ReactProp(name = "horizontal")
    public void setHorizontal(@NotNull b view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getAlShadow().h(z10);
    }

    @Override // com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface
    @ReactProp(name = "renderAheadOffset")
    public void setRenderAheadOffset(@NotNull b view, double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getAlShadow().k(convertToPixelLayout(d10, view.getPixelDensity()));
    }

    @Override // com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface
    @ReactProp(name = "scrollOffset")
    public void setScrollOffset(@NotNull b view, double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getAlShadow().l(convertToPixelLayout(d10, view.getPixelDensity()));
    }

    @Override // com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface
    @ReactProp(name = "windowSize")
    public void setWindowSize(@NotNull b view, double d10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.getAlShadow().m(convertToPixelLayout(d10, view.getPixelDensity()));
    }
}
