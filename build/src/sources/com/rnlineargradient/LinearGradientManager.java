package com.rnlineargradient;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
@ReactModule(name = LinearGradientManager.REACT_CLASS)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class LinearGradientManager extends LinearGradientManagerSpec<b> {
    public static final String PROP_ANGLE = "angle";
    public static final String PROP_ANGLE_CENTER = "angleCenter";
    public static final String PROP_BORDER_RADII = "borderRadii";
    public static final String PROP_COLORS = "colors";
    public static final String PROP_END_POINT = "endPoint";
    public static final String PROP_LOCATIONS = "locations";
    public static final String PROP_START_POINT = "startPoint";
    public static final String PROP_USE_ANGLE = "useAngle";
    public static final String REACT_CLASS = "RNLinearGradient";

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NonNull
    public String getName() {
        return REACT_CLASS;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NonNull
    public b createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new b(themedReactContext);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(defaultFloat = 45.0f, name = PROP_ANGLE)
    public void setAngle(b bVar, float f10) {
        bVar.setAngle(f10);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(name = PROP_ANGLE_CENTER)
    public void setAngleCenter(b bVar, ReadableMap readableMap) {
        bVar.setAngleCenter(readableMap);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(name = PROP_BORDER_RADII)
    public void setBorderRadii(b bVar, ReadableArray readableArray) {
        bVar.setBorderRadii(readableArray);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(name = PROP_COLORS)
    public void setColors(b bVar, ReadableArray readableArray) {
        bVar.setColors(readableArray);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(name = PROP_END_POINT)
    public void setEndPoint(b bVar, ReadableMap readableMap) {
        bVar.setEndPoint(readableMap);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(name = PROP_LOCATIONS)
    public void setLocations(b bVar, ReadableArray readableArray) {
        if (readableArray != null) {
            bVar.setLocations(readableArray);
        }
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(name = PROP_START_POINT)
    public void setStartPoint(b bVar, ReadableMap readableMap) {
        bVar.setStartPoint(readableMap);
    }

    @Override // com.facebook.react.viewmanagers.RNLinearGradientManagerInterface
    @ReactProp(defaultBoolean = false, name = PROP_USE_ANGLE)
    public void setUseAngle(b bVar, boolean z10) {
        bVar.setUseAngle(z10);
    }
}
