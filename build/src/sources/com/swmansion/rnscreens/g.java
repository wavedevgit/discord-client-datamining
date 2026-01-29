package com.swmansion.rnscreens;

import android.view.ViewGroup;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.StateWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g extends ViewGroup {
    private float lastHeaderHeight;
    private float lastHeight;
    private float lastWidth;
    private StateWrapper mStateWrapper;

    public g(ReactContext reactContext) {
        super(reactContext);
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.mStateWrapper = stateWrapper;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void updateScreenSizeFabric(int i10, int i11, int i12) {
        updateState(i10, i11, i12);
    }

    public final void updateState(int i10, int i11, int i12) {
        float dIPFromPixel = PixelUtil.toDIPFromPixel(i10);
        float dIPFromPixel2 = PixelUtil.toDIPFromPixel(i11);
        float dIPFromPixel3 = PixelUtil.toDIPFromPixel(i12);
        if (Math.abs(this.lastWidth - dIPFromPixel) >= 0.9f || Math.abs(this.lastHeight - dIPFromPixel2) >= 0.9f || Math.abs(this.lastHeaderHeight - dIPFromPixel3) >= 0.9f) {
            this.lastWidth = dIPFromPixel;
            this.lastHeight = dIPFromPixel2;
            this.lastHeaderHeight = dIPFromPixel3;
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putDouble("frameWidth", dIPFromPixel);
            writableNativeMap.putDouble("frameHeight", dIPFromPixel2);
            writableNativeMap.putDouble("contentOffsetX", 0.0d);
            writableNativeMap.putDouble("contentOffsetY", dIPFromPixel3);
            StateWrapper stateWrapper = this.mStateWrapper;
            if (stateWrapper != null) {
                stateWrapper.updateState(writableNativeMap);
            }
        }
    }
}
