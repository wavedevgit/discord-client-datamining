package com.reactnativecommunity.slider;

import android.content.Context;
import android.view.View;
import android.widget.SeekBar;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNCSliderManagerDelegate;
import com.facebook.react.viewmanagers.RNCSliderManagerInterface;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.h;
import java.util.Map;
@ReactModule(name = "RNCSlider")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ReactSliderManager extends SimpleViewManager<com.reactnativecommunity.slider.a> implements RNCSliderManagerInterface<com.reactnativecommunity.slider.a> {
    private static final SeekBar.OnSeekBarChangeListener ON_CHANGE_LISTENER = new a();
    private final ViewManagerDelegate<com.reactnativecommunity.slider.a> mDelegate = new RNCSliderManagerDelegate(this);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements SeekBar.OnSeekBarChangeListener {
        a() {
        }

        @Override // android.widget.SeekBar.OnSeekBarChangeListener
        public void onProgressChanged(SeekBar seekBar, int i10, boolean z10) {
            com.reactnativecommunity.slider.a aVar = (com.reactnativecommunity.slider.a) seekBar;
            int c10 = aVar.c(i10);
            seekBar.setProgress(c10);
            ReactContext reactContext = (ReactContext) seekBar.getContext();
            if (z10) {
                int id2 = seekBar.getId();
                UIManagerHelper.getEventDispatcherForReactTag(reactContext, id2).dispatchEvent(new b(id2, aVar.f(c10), true));
            }
        }

        @Override // android.widget.SeekBar.OnSeekBarChangeListener
        public void onStartTrackingTouch(SeekBar seekBar) {
            int id2 = seekBar.getId();
            com.reactnativecommunity.slider.a aVar = (com.reactnativecommunity.slider.a) seekBar;
            aVar.d(true);
            UIManagerHelper.getEventDispatcherForReactTag((ReactContext) seekBar.getContext(), id2).dispatchEvent(new f(id2, aVar.f(seekBar.getProgress())));
        }

        @Override // android.widget.SeekBar.OnSeekBarChangeListener
        public void onStopTrackingTouch(SeekBar seekBar) {
            com.reactnativecommunity.slider.a aVar = (com.reactnativecommunity.slider.a) seekBar;
            aVar.d(false);
            int id2 = seekBar.getId();
            UIManagerHelper.getEventDispatcherForReactTag((ReactContext) seekBar.getContext(), id2).dispatchEvent(new e(id2, aVar.f(seekBar.getProgress())));
        }
    }

    @Override // com.facebook.react.uimanager.ViewManager
    protected ViewManagerDelegate<com.reactnativecommunity.slider.a> getDelegate() {
        return this.mDelegate;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        return c.b();
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return c.c();
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    public String getName() {
        return "RNCSlider";
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public long measure(Context context, ReadableMap readableMap, ReadableMap readableMap2, ReadableMap readableMap3, float f10, YogaMeasureMode yogaMeasureMode, float f11, YogaMeasureMode yogaMeasureMode2, float[] fArr) {
        com.reactnativecommunity.slider.a aVar = new com.reactnativecommunity.slider.a(context, null);
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
        aVar.measure(makeMeasureSpec, makeMeasureSpec);
        return h.a(PixelUtil.toDIPFromPixel(aVar.getMeasuredWidth()), PixelUtil.toDIPFromPixel(aVar.getMeasuredHeight()));
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    public void setMaximumTrackImage(com.reactnativecommunity.slider.a aVar, ReadableMap readableMap) {
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    public void setMinimumTrackImage(com.reactnativecommunity.slider.a aVar, ReadableMap readableMap) {
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    public void setTapToSeek(com.reactnativecommunity.slider.a aVar, boolean z10) {
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    public void setTrackImage(com.reactnativecommunity.slider.a aVar, ReadableMap readableMap) {
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    public void setVertical(com.reactnativecommunity.slider.a aVar, boolean z10) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void addEventEmitters(ThemedReactContext themedReactContext, com.reactnativecommunity.slider.a aVar) {
        aVar.setOnSeekBarChangeListener(ON_CHANGE_LISTENER);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    public com.reactnativecommunity.slider.a createViewInstance(ThemedReactContext themedReactContext) {
        return c.a(themedReactContext);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(name = "accessibilityIncrements")
    public void setAccessibilityIncrements(com.reactnativecommunity.slider.a aVar, ReadableArray readableArray) {
        c.d(aVar, readableArray);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(name = "accessibilityUnits")
    public void setAccessibilityUnits(com.reactnativecommunity.slider.a aVar, String str) {
        c.e(aVar, str);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(defaultBoolean = false, name = "disabled")
    public void setDisabled(com.reactnativecommunity.slider.a aVar, boolean z10) {
        c.f(aVar, z10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(defaultBoolean = false, name = "inverted")
    public void setInverted(com.reactnativecommunity.slider.a aVar, boolean z10) {
        c.g(aVar, z10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(name = "lowerLimit")
    public void setLowerLimit(com.reactnativecommunity.slider.a aVar, float f10) {
        c.h(aVar, f10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(customType = "Color", name = "maximumTrackTintColor")
    public void setMaximumTrackTintColor(com.reactnativecommunity.slider.a aVar, Integer num) {
        c.i(aVar, num);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(defaultFloat = 0.0f, name = "maximumValue")
    public void setMaximumValue(com.reactnativecommunity.slider.a aVar, double d10) {
        c.j(aVar, d10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(customType = "Color", name = "minimumTrackTintColor")
    public void setMinimumTrackTintColor(com.reactnativecommunity.slider.a aVar, Integer num) {
        c.k(aVar, num);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(defaultFloat = 0.0f, name = "minimumValue")
    public void setMinimumValue(com.reactnativecommunity.slider.a aVar, double d10) {
        c.l(aVar, d10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(defaultFloat = 0.0f, name = "step")
    public void setStep(com.reactnativecommunity.slider.a aVar, double d10) {
        c.m(aVar, d10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    public void setTestID(com.reactnativecommunity.slider.a aVar, String str) {
        super.setTestId(aVar, str);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(name = "thumbImage")
    public void setThumbImage(com.reactnativecommunity.slider.a aVar, ReadableMap readableMap) {
        c.n(aVar, readableMap);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(customType = "Color", name = "thumbTintColor")
    public void setThumbTintColor(com.reactnativecommunity.slider.a aVar, Integer num) {
        c.o(aVar, num);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(name = "upperLimit")
    public void setUpperLimit(com.reactnativecommunity.slider.a aVar, float f10) {
        c.p(aVar, f10);
    }

    @Override // com.facebook.react.viewmanagers.RNCSliderManagerInterface
    @ReactProp(defaultFloat = 0.0f, name = "value")
    public void setValue(com.reactnativecommunity.slider.a aVar, float f10) {
        c.q(aVar, f10);
    }
}
