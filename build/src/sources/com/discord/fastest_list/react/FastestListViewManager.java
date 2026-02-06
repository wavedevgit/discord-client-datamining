package com.discord.fastest_list.react;

import com.discord.fastest_list.android.FastestListSections;
import com.discord.fastest_list.android.FastestListView;
import com.discord.fastest_list.android.FastestListVisibleItemsTracker;
import com.discord.fastest_list.android.placeholder.FastestListPlaceholderConfig;
import com.discord.fastest_list.android.scroll.FastestListScrollOffset;
import com.discord.fastest_list.react_events.OnLayoutEvent;
import com.discord.fastest_list.react_events.OnScrollBeginDragEvent;
import com.discord.fastest_list.react_events.OnScrollEndDragEvent;
import com.discord.fastest_list.react_events.OnScrollEvent;
import com.discord.fastest_list.react_events.OnUnexpectedItemSizeEvent;
import com.discord.fastest_list.react_events.OnVisibleItemsChangedEvent;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.InitialPropsViewGroupManager;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.FastestListManagerDelegate;
import com.facebook.react.viewmanagers.FastestListManagerInterface;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0011\b\u0001\u0018\u0000 82\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u00018B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J\u0014\u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e0\fH\u0016J\b\u0010\u000f\u001a\u00020\rH\u0016J$\u0010\u0010\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007H\u0014J\u0018\u0010\u0011\u001a\u00020\u00022\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015H\u0016J\b\u0010\u0016\u001a\u00020\u0017H\u0016J\u0010\u0010\u0018\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00170\u0019H\u0016J\u0010\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0002H\u0016J\u0018\u0010\u001d\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u001fH\u0017J\u0018\u0010 \u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020!H\u0017J\u0018\u0010\"\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020!H\u0017J\u0018\u0010#\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u001fH\u0017J\u001a\u0010$\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\b\u0010\u001e\u001a\u0004\u0018\u00010%H\u0017J\u001a\u0010&\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\b\u0010\u001e\u001a\u0004\u0018\u00010\rH\u0017J\u0018\u0010'\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020(H\u0017J\u001a\u0010)\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\b\u0010\u001e\u001a\u0004\u0018\u00010%H\u0017J\u0018\u0010*\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u001fH\u0017J\u0018\u0010+\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010\u001e\u001a\u00020\u001fH\u0017J\u0010\u0010,\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u0002H\u0014J0\u0010-\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u0010.\u001a\u00020(2\u0006\u0010/\u001a\u00020(2\u0006\u00100\u001a\u00020\u001f2\u0006\u00101\u001a\u00020(H\u0016J\u0018\u00102\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u00100\u001a\u00020\u001fH\u0016J0\u00103\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00022\u0006\u00104\u001a\u00020(2\u0006\u00105\u001a\u00020(2\u0006\u00106\u001a\u00020(2\u0006\u00107\u001a\u00020(H\u0016R*\u0010\u0006\u001a\u001e\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \b*\u0004\u0018\u00010\u00000\u00000\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u00069"}, d2 = {"Lcom/discord/fastest_list/react/FastestListViewManager;", "Lcom/discord/react/utilities/InitialPropsViewGroupManager;", "Lcom/discord/fastest_list/android/FastestListView;", "Lcom/facebook/react/viewmanagers/FastestListManagerInterface;", "<init>", "()V", "delegate", "Lcom/facebook/react/viewmanagers/FastestListManagerDelegate;", "kotlin.jvm.PlatformType", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "getExportedCustomDirectEventTypeConstants", "", "", "", "getName", "getDelegate", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "initialProps", "Lcom/facebook/react/uimanager/ReactStylesDiffMap;", "createShadowNodeInstance", "Lcom/facebook/react/uimanager/LayoutShadowNode;", "getShadowNodeClass", "Ljava/lang/Class;", "onDropViewInstance", "", "view", "setHorizontal", "value", "", "setInsetEnd", "", "setInsetStart", "setKeyboardDismissOnDrag", "setPlaceholderConfig", "Lcom/facebook/react/bridge/ReadableMap;", "setRenderAhead", "setScrollEventThrottle", "", "setSectionsVersioned", "setShowsHorizontalScrollIndicator", "setShowsVerticalScrollIndicator", "onAfterUpdateTransaction", "scrollToLocation", "section", "item", "animated", ViewProps.PADDING_START, "scrollToTop", "setPadding", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = FastestListViewManager.NAME)
@SourceDebugExtension({"SMAP\nFastestListViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FastestListViewManager.kt\ncom/discord/fastest_list/react/FastestListViewManager\n+ 2 ReactStylesDiffMapExtensions.kt\ncom/discord/react/utilities/ReactStylesDiffMapExtensionsKt\n*L\n1#1,285:1\n8#2,12:286\n8#2,12:298\n8#2,12:310\n8#2,12:322\n8#2,12:334\n8#2,12:346\n8#2,12:358\n*S KotlinDebug\n*F\n+ 1 FastestListViewManager.kt\ncom/discord/fastest_list/react/FastestListViewManager\n*L\n58#1:286,12\n59#1:298,12\n60#1:310,12\n61#1:322,12\n74#1:334,12\n130#1:346,12\n134#1:358,12\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListViewManager extends InitialPropsViewGroupManager<FastestListView> implements FastestListManagerInterface<FastestListView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "FastestList";
    @NotNull
    private static final String PROP_HORIZONTAL = "horizontal";
    @NotNull
    private static final String PROP_INSET_END = "insetEnd";
    @NotNull
    private static final String PROP_INSET_START = "insetStart";
    @NotNull
    private static final String PROP_KEYBOARD_DISMISS_ON_DRAG = "keyboardDismissOnDrag";
    @NotNull
    private static final String PROP_PLACEHOLDER_CONFIG = "placeholderConfig";
    @NotNull
    private static final String PROP_RENDER_AHEAD = "renderAhead";
    @NotNull
    private static final String PROP_SCROLL_EVENT_THROTTLE = "scrollEventThrottle";
    @NotNull
    private static final String PROP_SECTIONS_VERSIONED = "sectionsVersioned";
    @NotNull
    private static final String PROP_SHOWS_HORIZONTAL_SCROLL_INDICATOR = "showsHorizontalScrollIndicator";
    @NotNull
    private static final String PROP_SHOWS_VERTICAL_SCROLL_INDICATOR = "showsVerticalScrollIndicator";
    @NotNull
    private final FastestListManagerDelegate<FastestListView, FastestListViewManager> delegate = new FastestListManagerDelegate<>(this);
    @NotNull
    private final ReactEvents reactEvents = new ReactEvents(v.a("onUnexpectedItemSize", Reflection.getOrCreateKotlinClass(OnUnexpectedItemSizeEvent.class)), v.a("onLayout", Reflection.getOrCreateKotlinClass(OnLayoutEvent.class)), v.a("onScroll", Reflection.getOrCreateKotlinClass(OnScrollEvent.class)), v.a("onScrollBeginDrag", Reflection.getOrCreateKotlinClass(OnScrollBeginDragEvent.class)), v.a("onScrollEndDrag", Reflection.getOrCreateKotlinClass(OnScrollEndDragEvent.class)), v.a("onVisibleItemsChanged", Reflection.getOrCreateKotlinClass(OnVisibleItemsChangedEvent.class)));

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u000b\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/fastest_list/react/FastestListViewManager$Companion;", "", "<init>", "()V", "NAME", "", "PROP_HORIZONTAL", "PROP_INSET_START", "PROP_INSET_END", "PROP_KEYBOARD_DISMISS_ON_DRAG", "PROP_PLACEHOLDER_CONFIG", "PROP_RENDER_AHEAD", "PROP_SCROLL_EVENT_THROTTLE", "PROP_SECTIONS_VERSIONED", "PROP_SHOWS_HORIZONTAL_SCROLL_INDICATOR", "PROP_SHOWS_VERTICAL_SCROLL_INDICATOR", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$0(FastestListViewManager fastestListViewManager, FastestListView view, int i10, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(view, "view");
        fastestListViewManager.reactEvents.emitEvent(view, new OnLayoutEvent(SizeUtilsKt.getPxToDp(i10), SizeUtilsKt.getPxToDp(i11), SizeUtilsKt.getPxToDp(i12), SizeUtilsKt.getPxToDp(i13)));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$1(FastestListViewManager fastestListViewManager, FastestListView view, FastestListScrollOffset.Data data) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(data, "data");
        fastestListViewManager.reactEvents.emitEvent(view, new OnScrollEvent(data));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$2(FastestListViewManager fastestListViewManager, FastestListView view, FastestListScrollOffset.Data data) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(data, "data");
        fastestListViewManager.reactEvents.emitEvent(view, new OnScrollBeginDragEvent(data));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$3(FastestListViewManager fastestListViewManager, FastestListView view, FastestListScrollOffset.Data data) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(data, "data");
        fastestListViewManager.reactEvents.emitEvent(view, new OnScrollEndDragEvent(data));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$4(FastestListViewManager fastestListViewManager, FastestListView view, FastestListSections.Entry entry, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(entry, "entry");
        fastestListViewManager.reactEvents.emitEvent(view, new OnUnexpectedItemSizeEvent(entry, i10));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$5(FastestListViewManager fastestListViewManager, FastestListView view, String sectionsId, int i10, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(sectionsId, "sectionsId");
        fastestListViewManager.reactEvents.emitEvent(view, new OnVisibleItemsChangedEvent(sectionsId, i10, i11, i12, i13));
        return Unit.f32008a;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return this.reactEvents.exportEventConstants();
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public Class<? extends LayoutShadowNode> getShadowNodeClass() {
        return FastestListShadowNode.class;
    }

    @Override // com.facebook.react.uimanager.ViewGroupManager, com.facebook.react.uimanager.ViewManager
    @NotNull
    public LayoutShadowNode createShadowNodeInstance() {
        return new FastestListShadowNode();
    }

    /* JADX WARN: Removed duplicated region for block: B:96:0x035f  */
    /* JADX WARN: Removed duplicated region for block: B:98:0x0369 A[Catch: NoSuchKeyException | IllegalArgumentException -> 0x03bf, TryCatch #8 {NoSuchKeyException | IllegalArgumentException -> 0x03bf, blocks: (B:93:0x034f, B:97:0x0360, B:98:0x0369, B:100:0x0373, B:102:0x0386, B:104:0x0390, B:105:0x03a2, B:106:0x03be), top: B:126:0x034f }] */
    @Override // com.discord.react.utilities.InitialPropsViewGroupManager
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.discord.fastest_list.android.FastestListView createViewInstance(@org.jetbrains.annotations.NotNull com.facebook.react.uimanager.ThemedReactContext r32, @org.jetbrains.annotations.NotNull com.facebook.react.uimanager.ReactStylesDiffMap r33) {
        /*
            Method dump skipped, instructions count: 977
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.fastest_list.react.FastestListViewManager.createViewInstance(com.facebook.react.uimanager.ThemedReactContext, com.facebook.react.uimanager.ReactStylesDiffMap):com.discord.fastest_list.android.FastestListView");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public FastestListManagerDelegate<FastestListView, FastestListViewManager> getDelegate() {
        return this.delegate;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onAfterUpdateTransaction(@NotNull FastestListView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onAfterUpdateTransaction((FastestListViewManager) view);
        FastestListShadowNode.Companion.updateFromShadowNode(view);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    public void scrollToLocation(@NotNull FastestListView view, int i10, int i11, boolean z10, int i12) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.scrollTo(i10, i11, z10, i12);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    public void scrollToTop(@NotNull FastestListView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.scrollToTop(z10);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_HORIZONTAL)
    public void setHorizontal(@NotNull FastestListView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setHorizontal(z10);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_INSET_END)
    public void setInsetEnd(@NotNull FastestListView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setInsetEnd(SizeUtilsKt.getDpToPx(f10));
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_INSET_START)
    public void setInsetStart(@NotNull FastestListView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setInsetStart(SizeUtilsKt.getDpToPx(f10));
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_KEYBOARD_DISMISS_ON_DRAG)
    public void setKeyboardDismissOnDrag(@NotNull FastestListView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setKeyboardDismissOnDrag(z10);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void setPadding(@NotNull FastestListView view, int i10, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.setPadding((FastestListViewManager) view, i10, i11, i12, i13);
        view.setPadding(i10, i11, i12, i13);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_PLACEHOLDER_CONFIG)
    public void setPlaceholderConfig(@NotNull FastestListView view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            view.setPlaceholderConfig(FastestListDeserializerPlaceholderConfigKt.invoke(FastestListPlaceholderConfig.Companion, readableMap));
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_RENDER_AHEAD)
    public void setRenderAhead(@NotNull FastestListView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setRenderAhead(FastestListVisibleItemsTracker.RenderAhead.Companion.create(str));
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_SCROLL_EVENT_THROTTLE)
    public void setScrollEventThrottle(@NotNull FastestListView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setScrollEventThrottle(i10);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_SECTIONS_VERSIONED)
    public void setSectionsVersioned(@NotNull FastestListView view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            view.setSectionsVersioned(FastestListDeserializerSectionsKt.invoke(FastestListSections.Versioned.Companion, readableMap));
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_SHOWS_HORIZONTAL_SCROLL_INDICATOR)
    public void setShowsHorizontalScrollIndicator(@NotNull FastestListView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShowsHorizontalScrollIndicator(z10);
    }

    @Override // com.facebook.react.viewmanagers.FastestListManagerInterface
    @ReactProp(name = PROP_SHOWS_VERTICAL_SCROLL_INDICATOR)
    public void setShowsVerticalScrollIndicator(@NotNull FastestListView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setShowsVerticalScrollIndicator(z10);
    }

    @Override // com.discord.react.utilities.InitialPropsViewGroupManager
    public void onDropViewInstance(@NotNull FastestListView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.onDrop();
        FastestListShadowNode.Companion.dropShadowNode(view);
    }
}
