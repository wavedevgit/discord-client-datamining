package com.facebook.react.uimanager;

import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010$\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0010\u0001\n\u0002\b\u0010\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J!\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0001¢\u0006\u0002\b\fJ&\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00052\u0014\u0010\u0014\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0015H\u0002Jc\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\u00152\u001c\u0010\u0016\u001a\u0018\u0012\u0014\u0012\u0012\u0012\u0006\b\u0000\u0012\u00020\u0019\u0012\u0006\b\u0000\u0012\u00020\u00190\u00180\u00172\u0014\u0010\u001a\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u00152\u0014\u0010\u001b\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0015H\u0001¢\u0006\u0002\b\fJ\u0089\u0001\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\u00152\u0016\u0010\u001d\u001a\u0012\u0012\u0006\b\u0000\u0012\u00020\u0019\u0012\u0006\b\u0000\u0012\u00020\u00190\u00182\u0014\u0010\u001e\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u00152\u0014\u0010\u001f\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u00152\u0014\u0010 \u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u00152\u0014\u0010!\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0015H\u0001¢\u0006\u0002\b\"J-\u0010#\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\u00152\u0012\u0010$\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\u0015H\u0001¢\u0006\u0002\b%J4\u0010&\u001a\u00020\u00122\u0014\u0010'\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u00152\u0014\u0010(\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0015H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R&\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00010\t8FX\u0087\u0004¢\u0006\f\u0012\u0004\b\u000e\u0010\u0003\u001a\u0004\b\u000f\u0010\u0010¨\u0006)"}, d2 = {"Lcom/facebook/react/uimanager/UIManagerModuleConstantsHelper;", "", "<init>", "()V", "TAG", "", "BUBBLING_EVENTS_KEY", "DIRECT_EVENTS_KEY", "createConstants", "", "resolver", "Lcom/facebook/react/uimanager/ViewManagerResolver;", "internal_createConstants", "defaultExportableEventTypes", "getDefaultExportableEventTypes$annotations", "getDefaultExportableEventTypes", "()Ljava/util/Map;", "validateDirectEventNames", "", "viewManagerName", "directEvents", "", "viewManagers", "", "Lcom/facebook/react/uimanager/ViewManager;", "", "allBubblingEventTypes", "allDirectEventTypes", "createConstantsForViewManager", "viewManager", "defaultBubblingEvents", "defaultDirectEvents", "cumulativeBubblingEventTypes", "cumulativeDirectEventTypes", "internal_createConstantsForViewManager", "normalizeEventTypes", "eventsToNormalize", "normalizeEventTypes$ReactAndroid_release", "recursiveMerge", "dest", "source", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class UIManagerModuleConstantsHelper {
    @NotNull
    private static final String BUBBLING_EVENTS_KEY = "bubblingEventTypes";
    @NotNull
    private static final String DIRECT_EVENTS_KEY = "directEventTypes";
    @NotNull
    public static final UIManagerModuleConstantsHelper INSTANCE = new UIManagerModuleConstantsHelper();
    @NotNull
    private static final String TAG = "UIManagerModuleConstantsHelper";

    private UIManagerModuleConstantsHelper() {
    }

    @NotNull
    public static final Map<String, Object> getDefaultExportableEventTypes() {
        return o0.m(lr.v.a(BUBBLING_EVENTS_KEY, UIManagerModuleConstants.bubblingEventTypeConstants), lr.v.a(DIRECT_EVENTS_KEY, UIManagerModuleConstants.directEventTypeConstants));
    }

    public static /* synthetic */ void getDefaultExportableEventTypes$annotations() {
    }

    @NotNull
    public static final Map<String, Object> internal_createConstants(@NotNull ViewManagerResolver resolver) {
        Intrinsics.checkNotNullParameter(resolver, "resolver");
        return o0.q(UIManagerModuleConstants.constants, o0.m(lr.v.a("ViewManagerNames", new ArrayList(resolver.getViewManagerNames())), lr.v.a("LazyViewManagersEnabled", Boolean.TRUE)));
    }

    @NotNull
    public static final Map<String, Object> internal_createConstantsForViewManager(@NotNull ViewManager viewManager, Map<String, Object> map, Map<String, Object> map2, Map<String, Object> map3, Map<String, Object> map4) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        Map<String, Object> exportedCustomBubblingEventTypeConstants = viewManager.getExportedCustomBubblingEventTypeConstants();
        if (exportedCustomBubblingEventTypeConstants != null) {
            if (ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer() && ReactNativeNewArchitectureFeatureFlags.useFabricInterop()) {
                exportedCustomBubblingEventTypeConstants = INSTANCE.normalizeEventTypes$ReactAndroid_release(exportedCustomBubblingEventTypeConstants);
            }
            UIManagerModuleConstantsHelper uIManagerModuleConstantsHelper = INSTANCE;
            uIManagerModuleConstantsHelper.recursiveMerge(map3, exportedCustomBubblingEventTypeConstants);
            uIManagerModuleConstantsHelper.recursiveMerge(exportedCustomBubblingEventTypeConstants, map);
            linkedHashMap.put(BUBBLING_EVENTS_KEY, exportedCustomBubblingEventTypeConstants);
        } else if (map != null) {
            linkedHashMap.put(BUBBLING_EVENTS_KEY, map);
        }
        Map<String, Object> exportedCustomDirectEventTypeConstants = viewManager.getExportedCustomDirectEventTypeConstants();
        UIManagerModuleConstantsHelper uIManagerModuleConstantsHelper2 = INSTANCE;
        String name = viewManager.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        uIManagerModuleConstantsHelper2.validateDirectEventNames(name, exportedCustomDirectEventTypeConstants);
        if (exportedCustomDirectEventTypeConstants != null) {
            if (ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer() && ReactNativeNewArchitectureFeatureFlags.useFabricInterop()) {
                exportedCustomDirectEventTypeConstants = uIManagerModuleConstantsHelper2.normalizeEventTypes$ReactAndroid_release(exportedCustomDirectEventTypeConstants);
            }
            uIManagerModuleConstantsHelper2.recursiveMerge(map4, exportedCustomDirectEventTypeConstants);
            uIManagerModuleConstantsHelper2.recursiveMerge(exportedCustomDirectEventTypeConstants, map2);
            linkedHashMap.put(DIRECT_EVENTS_KEY, exportedCustomDirectEventTypeConstants);
        } else if (map2 != null) {
            linkedHashMap.put(DIRECT_EVENTS_KEY, map2);
        }
        Map<String, Object> exportedViewConstants = viewManager.getExportedViewConstants();
        if (exportedViewConstants != null) {
            linkedHashMap.put("Constants", exportedViewConstants);
        }
        Map<String, Integer> commandsMap = viewManager.getCommandsMap();
        if (commandsMap != null) {
            linkedHashMap.put("Commands", commandsMap);
        }
        Map<String, String> nativeProps = viewManager.getNativeProps();
        if (!nativeProps.isEmpty()) {
            Intrinsics.checkNotNull(nativeProps);
            linkedHashMap.put("NativeProps", nativeProps);
        }
        return linkedHashMap;
    }

    private final void recursiveMerge(Map<String, Object> map, Map<String, Object> map2) {
        if (map != null && map2 != null && !map2.isEmpty()) {
            for (Map.Entry<String, Object> entry : map2.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                Object obj = map.get(key);
                if (obj != null && TypeIntrinsics.isMutableMap(value) && TypeIntrinsics.isMutableMap(obj)) {
                    if (!(obj instanceof HashMap)) {
                        HashMap hashMap = new HashMap((Map) obj);
                        map.replace(key, TypeIntrinsics.asMutableMap(hashMap));
                        obj = hashMap;
                    }
                    Map<String, Object> asMutableMap = TypeIntrinsics.asMutableMap(obj);
                    Intrinsics.checkNotNull(value, "null cannot be cast to non-null type kotlin.collections.MutableMap<kotlin.String, kotlin.Any>");
                    recursiveMerge(asMutableMap, TypeIntrinsics.asMutableMap(value));
                } else {
                    map.put(key, value);
                }
            }
        }
    }

    private final void validateDirectEventNames(String str, Map<String, Object> map) {
        String str2;
        if (ReactBuildConfig.DEBUG && map != null) {
            for (Map.Entry<String, Object> entry : map.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                if (TypeIntrinsics.isMutableMap(value) && (str2 = (String) ((Map) value).get("registrationName")) != null && StringsKt.P(key, ViewProps.TOP, false, 2, null) && StringsKt.P(str2, ViewProps.ON, false, 2, null)) {
                    String substring = key.substring(3);
                    Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                    String substring2 = str2.substring(2);
                    Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                    if (!Intrinsics.areEqual(substring, substring2)) {
                        p8.a.m(TAG, "Direct event name for '" + str + "' doesn't correspond to the naming convention, expected 'topEventName'->'onEventName', got '" + key + "'->'" + str2 + "'");
                    }
                }
            }
        }
    }

    @NotNull
    public final Map<String, Object> normalizeEventTypes$ReactAndroid_release(@NotNull Map<String, Object> eventsToNormalize) {
        String str;
        Intrinsics.checkNotNullParameter(eventsToNormalize, "eventsToNormalize");
        HashSet<String> hashSet = new HashSet();
        for (String str2 : eventsToNormalize.keySet()) {
            if (!StringsKt.P(str2, ViewProps.TOP, false, 2, null)) {
                hashSet.add(str2);
            }
        }
        if (!(eventsToNormalize instanceof HashMap)) {
            eventsToNormalize = new HashMap(eventsToNormalize);
        }
        for (String str3 : hashSet) {
            Object obj = eventsToNormalize.get(str3);
            if (obj != null) {
                if (StringsKt.P(str3, ViewProps.ON, false, 2, null)) {
                    str = str3.substring(2);
                    Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                } else {
                    String substring = str3.substring(0, 1);
                    Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                    Locale locale = Locale.getDefault();
                    Intrinsics.checkNotNullExpressionValue(locale, "getDefault(...)");
                    String upperCase = substring.toUpperCase(locale);
                    Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
                    String substring2 = str3.substring(1);
                    Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                    str = upperCase + substring2;
                }
                eventsToNormalize.put(ViewProps.TOP + str, obj);
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        return eventsToNormalize;
    }

    @NotNull
    public static final Map<String, Object> internal_createConstants(@NotNull List<? extends ViewManager> viewManagers, Map<String, Object> map, Map<String, Object> map2) {
        Intrinsics.checkNotNullParameter(viewManagers, "viewManagers");
        Map<String, Object> y10 = o0.y(UIManagerModuleConstants.constants);
        Map<String, Object> map3 = UIManagerModuleConstants.bubblingEventTypeConstants;
        Map<String, Object> map4 = UIManagerModuleConstants.directEventTypeConstants;
        if (map != null) {
            map.putAll(map3);
        }
        if (map2 != null) {
            map2.putAll(map4);
        }
        for (ViewManager viewManager : viewManagers) {
            String name = viewManager.getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            Map<String, Object> internal_createConstantsForViewManager = internal_createConstantsForViewManager(viewManager, null, null, map, map2);
            if (!internal_createConstantsForViewManager.isEmpty()) {
                y10.put(name, internal_createConstantsForViewManager);
            }
        }
        y10.put("genericBubblingEventTypes", map3);
        y10.put("genericDirectEventTypes", map4);
        return y10;
    }
}
