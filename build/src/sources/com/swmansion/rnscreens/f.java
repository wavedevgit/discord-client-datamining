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
    public static final a f17877q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private StateWrapper f17878d;

    /* renamed from: e  reason: collision with root package name */
    private float f17879e;

    /* renamed from: i  reason: collision with root package name */
    private float f17880i;

    /* renamed from: o  reason: collision with root package name */
    private float f17881o;

    /* renamed from: p  reason: collision with root package name */
    private float f17882p;

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
        if (Math.abs(this.f17879e - dIPFromPixel) >= 0.9f || Math.abs(this.f17880i - dIPFromPixel2) >= 0.9f || Math.abs(this.f17881o - dIPFromPixel3) >= 0.9f || Math.abs(this.f17882p - dIPFromPixel4) >= 0.9f) {
            this.f17879e = dIPFromPixel;
            this.f17880i = dIPFromPixel2;
            this.f17881o = dIPFromPixel3;
            this.f17882p = dIPFromPixel4;
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putDouble("frameWidth", dIPFromPixel);
            writableNativeMap.putDouble("frameHeight", dIPFromPixel2);
            writableNativeMap.putDouble("contentOffsetX", dIPFromPixel3);
            writableNativeMap.putDouble("contentOffsetY", dIPFromPixel4);
            StateWrapper stateWrapper = this.f17878d;
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
        this.f17878d = stateWrapper;
    }
}
