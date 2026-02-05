package com.swmansion.rnscreens;

import android.content.Context;
import android.view.ViewGroup;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ViewProps;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e extends ViewGroup {

    /* renamed from: q  reason: collision with root package name */
    public static final a f18274q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private StateWrapper f18275d;

    /* renamed from: e  reason: collision with root package name */
    private float f18276e;

    /* renamed from: i  reason: collision with root package name */
    private float f18277i;

    /* renamed from: o  reason: collision with root package name */
    private float f18278o;

    /* renamed from: p  reason: collision with root package name */
    private float f18279p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public e(Context context) {
        super(context);
    }

    private final void b(int i10, int i11, int i12, int i13) {
        float dIPFromPixel = PixelUtil.toDIPFromPixel(i10);
        float dIPFromPixel2 = PixelUtil.toDIPFromPixel(i11);
        float dIPFromPixel3 = PixelUtil.toDIPFromPixel(i12);
        float dIPFromPixel4 = PixelUtil.toDIPFromPixel(i13);
        if (Math.abs(this.f18276e - dIPFromPixel) >= 0.9f || Math.abs(this.f18277i - dIPFromPixel2) >= 0.9f || Math.abs(this.f18278o - dIPFromPixel3) >= 0.9f || Math.abs(this.f18279p - dIPFromPixel4) >= 0.9f) {
            this.f18276e = dIPFromPixel;
            this.f18277i = dIPFromPixel2;
            this.f18278o = dIPFromPixel3;
            this.f18279p = dIPFromPixel4;
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putDouble("frameWidth", dIPFromPixel);
            writableNativeMap.putDouble("frameHeight", dIPFromPixel2);
            writableNativeMap.putDouble(ViewProps.PADDING_START, dIPFromPixel3);
            writableNativeMap.putDouble(ViewProps.PADDING_END, dIPFromPixel4);
            StateWrapper stateWrapper = this.f18275d;
            if (stateWrapper != null) {
                stateWrapper.updateState(writableNativeMap);
            }
        }
    }

    public final void a(int i10, int i11, int i12, int i13) {
        b(i10, i11, i12, i13);
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.f18275d = stateWrapper;
    }
}
