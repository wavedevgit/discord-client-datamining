package com.swmansion.rnscreens;

import android.content.Context;
import android.view.ViewGroup;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.StateWrapper;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f extends ViewGroup {

    /* renamed from: q  reason: collision with root package name */
    public static final a f18283q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private StateWrapper f18284d;

    /* renamed from: e  reason: collision with root package name */
    private float f18285e;

    /* renamed from: i  reason: collision with root package name */
    private float f18286i;

    /* renamed from: o  reason: collision with root package name */
    private float f18287o;

    /* renamed from: p  reason: collision with root package name */
    private float f18288p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public f(Context context) {
        super(context);
    }

    public final void a(int i10, int i11, int i12, int i13) {
        float dIPFromPixel = PixelUtil.toDIPFromPixel(i10);
        float dIPFromPixel2 = PixelUtil.toDIPFromPixel(i11);
        float dIPFromPixel3 = PixelUtil.toDIPFromPixel(i12);
        float dIPFromPixel4 = PixelUtil.toDIPFromPixel(i13);
        if (Math.abs(this.f18285e - dIPFromPixel) >= 0.9f || Math.abs(this.f18286i - dIPFromPixel2) >= 0.9f || Math.abs(this.f18287o - dIPFromPixel3) >= 0.9f || Math.abs(this.f18288p - dIPFromPixel4) >= 0.9f) {
            this.f18285e = dIPFromPixel;
            this.f18286i = dIPFromPixel2;
            this.f18287o = dIPFromPixel3;
            this.f18288p = dIPFromPixel4;
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putDouble("frameWidth", dIPFromPixel);
            writableNativeMap.putDouble("frameHeight", dIPFromPixel2);
            writableNativeMap.putDouble("contentOffsetX", dIPFromPixel3);
            writableNativeMap.putDouble("contentOffsetY", dIPFromPixel4);
            StateWrapper stateWrapper = this.f18284d;
            if (stateWrapper != null) {
                stateWrapper.updateState(writableNativeMap);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b(int i10, int i11, int i12, int i13) {
        a(i10, i11, i12, i13);
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.f18284d = stateWrapper;
    }
}
