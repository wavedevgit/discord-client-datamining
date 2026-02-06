package com.facebook.react.fabric.mounting.mountitems;

import com.facebook.react.views.image.ReactImageManager;
import com.facebook.react.views.modal.ReactModalHostManager;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.scroll.ReactScrollViewManager;
import com.facebook.react.views.text.ReactRawTextManager;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\b\u0003\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\u0006H\u0007R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/facebook/react/fabric/mounting/mountitems/FabricNameComponentMapping;", "", "<init>", "()V", "componentNames", "", "", "getFabricComponentName", "componentName", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FabricNameComponentMapping {
    @NotNull
    public static final FabricNameComponentMapping INSTANCE = new FabricNameComponentMapping();
    @NotNull
    private static final Map<String, String> componentNames = o0.m(v.a("View", "RCTView"), v.a("Image", ReactImageManager.REACT_CLASS), v.a("ScrollView", ReactScrollViewManager.REACT_CLASS), v.a("Slider", "RCTSlider"), v.a("ModalHostView", ReactModalHostManager.REACT_CLASS), v.a("Paragraph", "RCTText"), v.a("Text", "RCTText"), v.a("RawText", ReactRawTextManager.REACT_CLASS), v.a("ActivityIndicatorView", ReactProgressBarViewManager.REACT_CLASS), v.a("ShimmeringView", "RKShimmeringView"), v.a("TemplateView", "RCTTemplateView"), v.a("AxialGradientView", "RCTAxialGradientView"), v.a("Video", "RCTVideo"), v.a("Map", "RCTMap"), v.a("WebView", "RCTWebView"), v.a("Keyframes", "RCTKeyframes"), v.a("ImpressionTrackingView", "RCTImpressionTrackingView"));

    private FabricNameComponentMapping() {
    }

    @NotNull
    public static final String getFabricComponentName(@NotNull String componentName) {
        Intrinsics.checkNotNullParameter(componentName, "componentName");
        String str = componentNames.get(componentName);
        if (str == null) {
            return componentName;
        }
        return str;
    }
}
