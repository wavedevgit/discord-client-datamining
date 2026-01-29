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
    public static final a f19253q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private StateWrapper f19254d;

    /* renamed from: e  reason: collision with root package name */
    private float f19255e;

    /* renamed from: i  reason: collision with root package name */
    private float f19256i;

    /* renamed from: o  reason: collision with root package name */
    private float f19257o;

    /* renamed from: p  reason: collision with root package name */
    private float f19258p;

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
        if (Math.abs(this.f19255e - dIPFromPixel) >= 0.9f || Math.abs(this.f19256i - dIPFromPixel2) >= 0.9f || Math.abs(this.f19257o - dIPFromPixel3) >= 0.9f || Math.abs(this.f19258p - dIPFromPixel4) >= 0.9f) {
            this.f19255e = dIPFromPixel;
            this.f19256i = dIPFromPixel2;
            this.f19257o = dIPFromPixel3;
            this.f19258p = dIPFromPixel4;
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putDouble("frameWidth", dIPFromPixel);
            writableNativeMap.putDouble("frameHeight", dIPFromPixel2);
            writableNativeMap.putDouble(ViewProps.PADDING_START, dIPFromPixel3);
            writableNativeMap.putDouble(ViewProps.PADDING_END, dIPFromPixel4);
            StateWrapper stateWrapper = this.f19254d;
            if (stateWrapper != null) {
                stateWrapper.updateState(writableNativeMap);
            }
        }
    }

    public final void a(int i10, int i11, int i12, int i13) {
        b(i10, i11, i12, i13);
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.f19254d = stateWrapper;
    }
}
