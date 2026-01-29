package com.discord.clip;

import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.ClipViewManagerDelegate;
import com.facebook.react.viewmanagers.ClipViewManagerInterface;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\b\u0007\u0018\u0000 \u001c2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\u001cB\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\t\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\b\u0010\n\u001a\u00020\u000bH\u0016J\u0010\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0014J\u001a\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0017J\u0018\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0015\u001a\u00020\u0016H\u0017J\u0018\u0010\u0017\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0018\u001a\u00020\u0019H\u0017J\u0018\u0010\u001a\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u0019H\u0017R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/clip/ClipViewManager;", "Lcom/facebook/react/uimanager/ViewGroupManager;", "Lcom/discord/clip/ClipView;", "Lcom/facebook/react/viewmanagers/ClipViewManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/ClipViewManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "context", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setCutouts", "", "view", "cutouts", "Lcom/facebook/react/bridge/ReadableArray;", "setClipToCircle", "clipToCircle", "", "setBorderRadius", "borderRadius", "", "setBackgroundColor", ViewProps.BACKGROUND_COLOR, "Companion", "clip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = ClipViewManager.NAME)
@SourceDebugExtension({"SMAP\nClipViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClipViewManager.kt\ncom/discord/clip/ClipViewManager\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,101:1\n1869#2,2:102\n*S KotlinDebug\n*F\n+ 1 ClipViewManager.kt\ncom/discord/clip/ClipViewManager\n*L\n29#1:102,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ClipViewManager extends ViewGroupManager<ClipView> implements ClipViewManagerInterface<ClipView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "ClipView";
    @NotNull
    private final ClipViewManagerDelegate<ClipView, ClipViewManager> delegate;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/clip/ClipViewManager$Companion;", "", "<init>", "()V", "NAME", "", "clip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ClipViewManager() {
        super(null, 1, null);
        this.delegate = new ClipViewManagerDelegate<>(this);
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ClipView createViewInstance(@NotNull ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return new ClipView(context);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public ClipViewManagerDelegate<ClipView, ClipViewManager> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager
    @ReactProp(name = ViewProps.BACKGROUND_COLOR)
    public void setBackgroundColor(@NotNull ClipView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBackgroundColor(i10);
    }

    @Override // com.facebook.react.viewmanagers.ClipViewManagerInterface
    @ReactProp(name = "borderRadius")
    public void setBorderRadius(@NotNull ClipView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.clipToBorderRadius(SizeUtilsKt.getDpToPx(i10));
    }

    @Override // com.facebook.react.viewmanagers.ClipViewManagerInterface
    @ReactProp(name = "clipToCircle")
    public void setClipToCircle(@NotNull ClipView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.clipToCircle(z10);
    }

    @Override // com.facebook.react.viewmanagers.ClipViewManagerInterface
    @ReactProp(name = "cutouts")
    public void setCutouts(@NotNull ClipView view, ReadableArray readableArray) {
        IntRange sizeRange;
        ClipView clipView;
        Intrinsics.checkNotNullParameter(view, "view");
        view.resetCutouts();
        if (readableArray == null || (sizeRange = NativeArrayExtensionsKt.sizeRange(readableArray)) == null) {
            return;
        }
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            ReadableMap map = readableArray.getMap(((m0) it).nextInt());
            Intrinsics.checkNotNull(map);
            String string = map.getString("shape");
            if (Intrinsics.areEqual(string, "circle")) {
                view.addCircleCutout(SizeUtilsKt.getDpToPx((float) map.getDouble("x")), SizeUtilsKt.getDpToPx((float) map.getDouble("y")), SizeUtilsKt.getDpToPx((float) map.getDouble("size")));
            } else if (Intrinsics.areEqual(string, "rounded-rect")) {
                clipView = view;
                clipView.addRoundedRectCutout(SizeUtilsKt.getDpToPx((float) map.getDouble("x")), SizeUtilsKt.getDpToPx((float) map.getDouble("y")), SizeUtilsKt.getDpToPx((float) map.getDouble("width")), SizeUtilsKt.getDpToPx((float) map.getDouble("height")), SizeUtilsKt.getDpToPx((float) map.getDouble("cornerRadius")));
                view = clipView;
            }
            clipView = view;
            view = clipView;
        }
    }
}
