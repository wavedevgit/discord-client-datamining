package com.henninghall.date_picker;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class NativeRNDatePickerSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "RNDatePicker";

    public NativeRNDatePickerSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod
    @fb.a
    public abstract void addListener(String str);

    @ReactMethod
    @fb.a
    public abstract void closePicker();

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @fb.a
    public abstract void openPicker(ReadableMap readableMap);

    @ReactMethod
    @fb.a
    public abstract void removeListeners(double d10);
}
