package com.henninghall.date_picker;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class DatePickerModule extends NativeRNDatePickerSpec {
    private final b module;

    /* JADX INFO: Access modifiers changed from: package-private */
    public DatePickerModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        mt.a.b(reactApplicationContext, false);
        this.module = new b(reactApplicationContext);
    }

    @Override // com.henninghall.date_picker.NativeRNDatePickerSpec
    public void addListener(String str) {
    }

    @Override // com.henninghall.date_picker.NativeRNDatePickerSpec
    public void closePicker() {
        this.module.b();
    }

    @Override // com.henninghall.date_picker.NativeRNDatePickerSpec, com.facebook.react.bridge.NativeModule
    @NonNull
    public String getName() {
        return NativeRNDatePickerSpec.NAME;
    }

    @Override // com.henninghall.date_picker.NativeRNDatePickerSpec
    public void openPicker(ReadableMap readableMap) {
        this.module.f(readableMap);
    }

    @Override // com.henninghall.date_picker.NativeRNDatePickerSpec
    public void removeListeners(double d10) {
    }
}
