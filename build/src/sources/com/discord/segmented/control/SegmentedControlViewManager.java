package com.discord.segmented.control;

import android.annotation.SuppressLint;
import android.graphics.Color;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.discord.segmented.control.events.ValueChangeEvent;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.DCDSegmentedControlManagerDelegate;
import com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface;
import ir.v;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.m0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\b\u0002\b\u0007\u0018\u0000 \"2\b\u0012\u0004\u0012\u00020\u00020\u00012\b\u0012\u0004\u0012\u00020\u00020\u0003:\u0001\"B\u0007¢\u0006\u0004\b\u0004\u0010\u0005J$\u0010\u000b\u001a\u001e\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00000\u00000\tH\u0014J\b\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u000e\u001a\u00020\u00022\u0006\u0010\u000f\u001a\u00020\u0010H\u0015J\u001a\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015H\u0017J\u001a\u0010\u0016\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015H\u0017J\u0018\u0010\u0017\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u0018H\u0017J\u001a\u0010\u0019\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\rH\u0017J\u001a\u0010\u001a\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\rH\u0017J\u001a\u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\u001cH\u0017J\u001a\u0010\u001d\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\b\u0010\u0014\u001a\u0004\u0018\u00010\u001cH\u0017J\u0018\u0010\u001e\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00022\u0006\u0010\u0014\u001a\u00020\u0018H\u0017J\u0014\u0010\u001f\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020!0 H\u0016R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R*\u0010\b\u001a\u001e\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00020\u0002\u0012\f\u0012\n \n*\u0004\u0018\u00010\u00000\u00000\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006#"}, d2 = {"Lcom/discord/segmented/control/SegmentedControlViewManager;", "Lcom/facebook/react/uimanager/SimpleViewManager;", "Lcom/discord/segmented/control/SegmentedControlView;", "Lcom/facebook/react/viewmanagers/DCDSegmentedControlManagerInterface;", "<init>", "()V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "delegate", "Lcom/facebook/react/viewmanagers/DCDSegmentedControlManagerDelegate;", "kotlin.jvm.PlatformType", "getDelegate", "getName", "", "createViewInstance", "reactContext", "Lcom/facebook/react/uimanager/ThemedReactContext;", "setValues", "", "view", "value", "Lcom/facebook/react/bridge/ReadableArray;", "setAccessibilityRoleDescriptions", "setSelectedSegmentIndex", "", "setBackgroundColor", "setCustomSelectedTintColor", "setTitleAttributes", "Lcom/facebook/react/bridge/ReadableMap;", "setSelectedTitleAttributes", "setCornerRadius", "getExportedCustomDirectEventTypeConstants", "", "", "Companion", "segmented_control_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@ReactModule(name = SegmentedControlViewManager.NAME)
@SourceDebugExtension({"SMAP\nSegmentedControlViewManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SegmentedControlViewManager.kt\ncom/discord/segmented/control/SegmentedControlViewManager\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 Color.kt\nandroidx/core/graphics/ColorKt\n*L\n1#1,108:1\n1617#2,9:109\n1869#2:118\n1870#2:120\n1626#2:121\n1617#2,9:122\n1869#2:131\n1870#2:133\n1626#2:134\n1#3:119\n1#3:132\n404#4:135\n404#4:136\n*S KotlinDebug\n*F\n+ 1 SegmentedControlViewManager.kt\ncom/discord/segmented/control/SegmentedControlViewManager\n*L\n50#1:109,9\n50#1:118\n50#1:120\n50#1:121\n57#1:122,9\n57#1:131\n57#1:133\n57#1:134\n50#1:119\n57#1:132\n69#1:135\n76#1:136\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SegmentedControlViewManager extends SimpleViewManager<SegmentedControlView> implements DCDSegmentedControlManagerInterface<SegmentedControlView> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "DCDSegmentedControl";
    @NotNull
    private final ReactEvents reactEvents = new ReactEvents(v.a("onValueChange", Reflection.getOrCreateKotlinClass(ValueChangeEvent.class)));
    @NotNull
    private final DCDSegmentedControlManagerDelegate<SegmentedControlView, SegmentedControlViewManager> delegate = new DCDSegmentedControlManagerDelegate<>(this);

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/segmented/control/SegmentedControlViewManager$Companion;", "", "<init>", "()V", "NAME", "", "segmented_control_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createViewInstance$lambda$1$lambda$0(SegmentedControlViewManager segmentedControlViewManager, ThemedReactContext themedReactContext, SegmentedControlView segmentedControlView, int i10, String label) {
        Intrinsics.checkNotNullParameter(label, "label");
        segmentedControlViewManager.reactEvents.emitEvent(themedReactContext, segmentedControlView, new ValueChangeEvent(label, i10));
        return Unit.f33298a;
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

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @SuppressLint({"InflateParams"})
    @NotNull
    public SegmentedControlView createViewInstance(@NotNull final ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        final SegmentedControlView segmentedControlView = new SegmentedControlView(reactContext, null, 0, 6, null);
        segmentedControlView.setOnSegmentSelected(new Function2() { // from class: com.discord.segmented.control.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit createViewInstance$lambda$1$lambda$0;
                createViewInstance$lambda$1$lambda$0 = SegmentedControlViewManager.createViewInstance$lambda$1$lambda$0(SegmentedControlViewManager.this, reactContext, segmentedControlView, ((Integer) obj).intValue(), (String) obj2);
                return createViewInstance$lambda$1$lambda$0;
            }
        });
        return segmentedControlView;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public DCDSegmentedControlManagerDelegate<SegmentedControlView, SegmentedControlViewManager> getDelegate() {
        return this.delegate;
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "accessibilityRoleDescriptions")
    public void setAccessibilityRoleDescriptions(@NotNull SegmentedControlView view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableArray != null) {
            IntRange sizeRange = NativeArrayExtensionsKt.sizeRange(readableArray);
            ArrayList arrayList = new ArrayList();
            Iterator it = sizeRange.iterator();
            while (it.hasNext()) {
                String string = readableArray.getString(((m0) it).nextInt());
                if (string != null) {
                    arrayList.add(string);
                }
            }
            view.setAccessibilityRoleDescriptions(arrayList);
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = ViewProps.BACKGROUND_COLOR)
    public void setBackgroundColor(@NotNull SegmentedControlView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setContainerBgColor(Color.parseColor(str));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "cornerRadius")
    public void setCornerRadius(@NotNull SegmentedControlView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setCornerRadiusPx(SizeUtilsKt.getDpToPx(i10));
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "customSelectedTintColor")
    public void setCustomSelectedTintColor(@NotNull SegmentedControlView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            view.setSelectedSegmentBgColor(Color.parseColor(str));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "selectedSegmentIndex")
    public void setSelectedSegmentIndex(@NotNull SegmentedControlView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setSelectedIndex(i10);
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "selectedTitleAttributes")
    public void setSelectedTitleAttributes(@NotNull SegmentedControlView view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            view.setSelectedSegmentTextColor(readableMap.getInt("textColor"));
            view.setSelectedSegmentFontSizeSp(readableMap.getInt(ViewProps.FONT_SIZE));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "titleAttributes")
    public void setTitleAttributes(@NotNull SegmentedControlView view, ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableMap != null) {
            view.setSegmentTextColor(readableMap.getInt("textColor"));
            view.setSegmentFontSizeSp(readableMap.getInt(ViewProps.FONT_SIZE));
        }
    }

    @Override // com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface
    @ReactProp(name = "values")
    public void setValues(@NotNull SegmentedControlView view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableArray != null) {
            IntRange sizeRange = NativeArrayExtensionsKt.sizeRange(readableArray);
            ArrayList arrayList = new ArrayList();
            Iterator it = sizeRange.iterator();
            while (it.hasNext()) {
                String string = readableArray.getString(((m0) it).nextInt());
                if (string != null) {
                    arrayList.add(string);
                }
            }
            view.setLabels(arrayList);
        }
    }
}
