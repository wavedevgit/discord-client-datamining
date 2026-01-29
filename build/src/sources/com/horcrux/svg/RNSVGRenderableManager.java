package com.horcrux.svg;

import android.content.res.Resources;
import android.graphics.Matrix;
import android.graphics.PathMeasure;
import android.graphics.RectF;
import android.graphics.Region;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.rnlineargradient.LinearGradientManager;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
@ReactModule(name = "RNSVGRenderableModule")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class RNSVGRenderableManager extends NativeSvgRenderableModuleSpec {
    private static final int DEFAULT_BUFFER_SIZE = 4096;
    private static final int EOF = -1;
    public static final String NAME = "RNSVGRenderableModule";

    /* JADX INFO: Access modifiers changed from: package-private */
    public RNSVGRenderableManager(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap getBBox(Double d10, ReadableMap readableMap) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return Arguments.createMap();
        }
        boolean z10 = readableMap.getBoolean("fill");
        boolean z11 = readableMap.getBoolean("stroke");
        boolean z12 = readableMap.getBoolean("markers");
        boolean z13 = readableMap.getBoolean("clipped");
        try {
            renderableViewByTag.getPath(null, null);
            float f10 = renderableViewByTag.mScale;
            renderableViewByTag.initBounds();
            RectF rectF = new RectF();
            RectF rectF2 = renderableViewByTag.mFillBounds;
            RectF rectF3 = renderableViewByTag.mStrokeBounds;
            RectF rectF4 = renderableViewByTag.mMarkerBounds;
            RectF rectF5 = renderableViewByTag.mClipBounds;
            if (z10 && rectF2 != null) {
                rectF.union(rectF2);
            }
            if (z11 && rectF3 != null) {
                rectF.union(rectF3);
            }
            if (z12 && rectF4 != null) {
                rectF.union(rectF4);
            }
            if (z13 && rectF5 != null) {
                rectF.intersect(rectF5);
            }
            WritableMap createMap = Arguments.createMap();
            createMap.putDouble("x", rectF.left / f10);
            createMap.putDouble("y", rectF.top / f10);
            createMap.putDouble("width", rectF.width() / f10);
            createMap.putDouble("height", rectF.height() / f10);
            return createMap;
        } catch (NullPointerException unused) {
            renderableViewByTag.invalidate();
            return Arguments.createMap();
        }
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap getCTM(Double d10) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return Arguments.createMap();
        }
        float f10 = renderableViewByTag.mScale;
        Matrix matrix = new Matrix(renderableViewByTag.mCTM);
        SvgView svgView = renderableViewByTag.getSvgView();
        if (svgView != null) {
            matrix.preConcat(svgView.mInvViewBoxMatrix);
            float[] fArr = new float[9];
            matrix.getValues(fArr);
            WritableMap createMap = Arguments.createMap();
            createMap.putDouble("a", fArr[0]);
            createMap.putDouble("b", fArr[3]);
            createMap.putDouble("c", fArr[1]);
            createMap.putDouble("d", fArr[4]);
            createMap.putDouble("e", fArr[2] / f10);
            createMap.putDouble("f", fArr[5] / f10);
            return createMap;
        }
        throw new RuntimeException("Did not find parent SvgView for view with tag: " + d10);
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec, com.facebook.react.bridge.NativeModule
    public String getName() {
        return "RNSVGRenderableModule";
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap getPointAtLength(Double d10, ReadableMap readableMap) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return Arguments.createMap();
        }
        try {
            PathMeasure pathMeasure = new PathMeasure(renderableViewByTag.getPath(null, null), false);
            float f10 = (float) readableMap.getDouble("length");
            float f11 = renderableViewByTag.mScale;
            float[] fArr = new float[2];
            float[] fArr2 = new float[2];
            pathMeasure.getPosTan(Math.max(0.0f, Math.min(f10 * f11, pathMeasure.getLength())), fArr, fArr2);
            double atan2 = Math.atan2(fArr2[1], fArr2[0]);
            WritableMap createMap = Arguments.createMap();
            createMap.putDouble("x", fArr[0] / f11);
            createMap.putDouble("y", fArr[1] / f11);
            createMap.putDouble(LinearGradientManager.PROP_ANGLE, atan2);
            return createMap;
        } catch (NullPointerException unused) {
            renderableViewByTag.invalidate();
            return Arguments.createMap();
        }
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod
    public void getRawResource(String str, Promise promise) {
        try {
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Resources resources = reactApplicationContext.getResources();
            InputStream openRawResource = resources.openRawResource(resources.getIdentifier(str, "raw", reactApplicationContext.getPackageName()));
            InputStreamReader inputStreamReader = new InputStreamReader(openRawResource, StandardCharsets.UTF_8);
            char[] cArr = new char[4096];
            StringBuilder sb2 = new StringBuilder();
            while (true) {
                int read = inputStreamReader.read(cArr, 0, 4096);
                if (read != -1) {
                    sb2.append(cArr, 0, read);
                } else {
                    promise.resolve(sb2.toString());
                    try {
                        openRawResource.close();
                        return;
                    } catch (IOException unused) {
                        return;
                    }
                }
            }
        } catch (Exception e10) {
            e10.printStackTrace();
            promise.reject(e10);
        }
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap getScreenCTM(Double d10) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return Arguments.createMap();
        }
        float[] fArr = new float[9];
        renderableViewByTag.mCTM.getValues(fArr);
        float f10 = renderableViewByTag.mScale;
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("a", fArr[0]);
        createMap.putDouble("b", fArr[3]);
        createMap.putDouble("c", fArr[1]);
        createMap.putDouble("d", fArr[4]);
        createMap.putDouble("e", fArr[2] / f10);
        createMap.putDouble("f", fArr[5] / f10);
        return createMap;
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public double getTotalLength(Double d10) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return 0.0d;
        }
        try {
            return new PathMeasure(renderableViewByTag.getPath(null, null), false).getLength() / renderableViewByTag.mScale;
        } catch (NullPointerException unused) {
            renderableViewByTag.invalidate();
            return -1.0d;
        }
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public boolean isPointInFill(Double d10, ReadableMap readableMap) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return false;
        }
        float f10 = renderableViewByTag.mScale;
        if (renderableViewByTag.hitTest(new float[]{((float) readableMap.getDouble("x")) * f10, ((float) readableMap.getDouble("y")) * f10}) == -1) {
            return false;
        }
        return true;
    }

    @Override // com.horcrux.svg.NativeSvgRenderableModuleSpec
    @ReactMethod(isBlockingSynchronousMethod = true)
    public boolean isPointInStroke(Double d10, ReadableMap readableMap) {
        RenderableView renderableViewByTag = VirtualViewManager.getRenderableViewByTag(d10.intValue());
        if (renderableViewByTag == null) {
            return false;
        }
        try {
            renderableViewByTag.getPath(null, null);
            renderableViewByTag.initBounds();
            double d11 = renderableViewByTag.mScale;
            int i10 = (int) (readableMap.getDouble("x") * d11);
            int i11 = (int) (readableMap.getDouble("y") * d11);
            Region region = renderableViewByTag.mStrokeRegion;
            if (region == null || !region.contains(i10, i11)) {
                return false;
            }
            return true;
        } catch (NullPointerException unused) {
            renderableViewByTag.invalidate();
            return false;
        }
    }
}
