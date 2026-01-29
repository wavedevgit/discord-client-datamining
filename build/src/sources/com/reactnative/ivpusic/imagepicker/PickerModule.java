package com.reactnative.ivpusic.imagepicker;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
@ReactModule(name = NativeImageCropPickerSpec.NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class PickerModule extends NativeImageCropPickerSpec {
    private final g picker;

    public PickerModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.picker = new g(reactApplicationContext);
    }

    @Override // com.reactnative.ivpusic.imagepicker.NativeImageCropPickerSpec
    public void clean(Promise promise) {
        this.picker.E(promise);
    }

    @Override // com.reactnative.ivpusic.imagepicker.NativeImageCropPickerSpec
    public void cleanSingle(String str, Promise promise) {
        this.picker.F(str, promise);
    }

    @Override // com.reactnative.ivpusic.imagepicker.NativeImageCropPickerSpec
    public void openCamera(ReadableMap readableMap, Promise promise) {
        this.picker.d0(readableMap, promise);
    }

    @Override // com.reactnative.ivpusic.imagepicker.NativeImageCropPickerSpec
    public void openCropper(ReadableMap readableMap, Promise promise) {
        this.picker.e0(readableMap, promise);
    }

    @Override // com.reactnative.ivpusic.imagepicker.NativeImageCropPickerSpec
    public void openPicker(ReadableMap readableMap, Promise promise) {
        this.picker.f0(readableMap, promise);
    }
}
