package com.th3rdwave.safeareacontext;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import qr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {
    public static final Map a(a insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        return o0.m(v.a(ViewProps.TOP, Float.valueOf(PixelUtil.toDIPFromPixel(insets.d()))), v.a(ViewProps.RIGHT, Float.valueOf(PixelUtil.toDIPFromPixel(insets.c()))), v.a(ViewProps.BOTTOM, Float.valueOf(PixelUtil.toDIPFromPixel(insets.a()))), v.a(ViewProps.LEFT, Float.valueOf(PixelUtil.toDIPFromPixel(insets.b()))));
    }

    public static final WritableMap b(a insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble(ViewProps.TOP, PixelUtil.toDIPFromPixel(insets.d()));
        createMap.putDouble(ViewProps.RIGHT, PixelUtil.toDIPFromPixel(insets.c()));
        createMap.putDouble(ViewProps.BOTTOM, PixelUtil.toDIPFromPixel(insets.a()));
        createMap.putDouble(ViewProps.LEFT, PixelUtil.toDIPFromPixel(insets.b()));
        return createMap;
    }

    public static final Map c(c rect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        return o0.m(v.a("x", Float.valueOf(PixelUtil.toDIPFromPixel(rect.c()))), v.a("y", Float.valueOf(PixelUtil.toDIPFromPixel(rect.d()))), v.a("width", Float.valueOf(PixelUtil.toDIPFromPixel(rect.b()))), v.a("height", Float.valueOf(PixelUtil.toDIPFromPixel(rect.a()))));
    }

    public static final WritableMap d(c rect) {
        Intrinsics.checkNotNullParameter(rect, "rect");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putDouble("x", PixelUtil.toDIPFromPixel(rect.c()));
        createMap.putDouble("y", PixelUtil.toDIPFromPixel(rect.d()));
        createMap.putDouble("width", PixelUtil.toDIPFromPixel(rect.b()));
        createMap.putDouble("height", PixelUtil.toDIPFromPixel(rect.a()));
        return createMap;
    }
}
