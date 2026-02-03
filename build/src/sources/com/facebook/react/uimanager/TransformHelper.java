package com.facebook.react.uimanager;

import com.facebook.react.bridge.NativeArray;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.ReactConstants;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u0013\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\fH\u0002J\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0006H\u0007J2\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00062\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0015\u001a\u0004\u0018\u00010\u0010H\u0007J:\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00062\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0015\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010\u0018\u001a\u00020\b2\u0006\u0010\u0019\u001a\u00020\f2\u0006\u0010\u001a\u001a\u00020\bH\u0002J,\u0010\u001b\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0015\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0016\u001a\u00020\u0017H\u0002J3\u0010\u001c\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u001d2\u0006\u0010\u0011\u001a\u00020\u00062\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0015\u001a\u0004\u0018\u00010\u001dH\u0083 R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/facebook/react/uimanager/TransformHelper;", "", "<init>", "()V", "helperMatrix", "Ljava/lang/ThreadLocal;", "", "convertToRadians", "", "transformMap", "Lcom/facebook/react/bridge/ReadableMap;", "key", "", "processTransform", "", "transforms", "Lcom/facebook/react/bridge/ReadableArray;", "result", "viewWidth", "", "viewHeight", ViewProps.TRANSFORM_ORIGIN, "allowPercentageResolution", "", "parseTranslateValue", "stringValue", "dimension", "getTranslateForTransformOrigin", "nativeProcessTransform", "Lcom/facebook/react/bridge/NativeArray;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TransformHelper {
    @NotNull
    public static final TransformHelper INSTANCE = new TransformHelper();
    @NotNull
    private static final ThreadLocal<double[]> helperMatrix = new ThreadLocal<double[]>() { // from class: com.facebook.react.uimanager.TransformHelper$helperMatrix$1
        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        public double[] initialValue() {
            return new double[16];
        }
    };

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[ReadableType.values().length];
            try {
                iArr[ReadableType.Number.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ReadableType.String.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    private TransformHelper() {
    }

    private final double convertToRadians(ReadableMap readableMap, String str) {
        double d10;
        boolean z10 = true;
        if (readableMap.getType(str) == ReadableType.String) {
            String string = readableMap.getString(str);
            Intrinsics.checkNotNull(string);
            if (StringsKt.z(string, "rad", false, 2, null)) {
                string = StringsKt.q1(string, 3);
            } else if (StringsKt.z(string, "deg", false, 2, null)) {
                string = StringsKt.q1(string, 3);
                z10 = false;
            }
            d10 = Double.parseDouble(string);
        } else {
            d10 = readableMap.getDouble(str);
        }
        if (z10) {
            return d10;
        }
        return MatrixMathHelper.degreesToRadians(d10);
    }

    private final double[] getTranslateForTransformOrigin(float f10, float f11, ReadableArray readableArray, boolean z10) {
        boolean z11;
        int i10;
        float f12;
        if (readableArray == null || (f11 == 0.0f && f10 == 0.0f)) {
            return null;
        }
        double d10 = f10 / 2.0d;
        double d11 = f11 / 2.0d;
        double[] dArr = new double[3];
        boolean z12 = false;
        dArr[0] = d10;
        int i11 = 1;
        dArr[1] = d11;
        dArr[2] = 0.0d;
        int min = Math.min(readableArray.size(), 3);
        int i12 = 0;
        while (i12 < min) {
            int i13 = WhenMappings.$EnumSwitchMapping$0[readableArray.getType(i12).ordinal()];
            if (i13 != i11) {
                if (i13 == 2 && z10) {
                    String string = readableArray.getString(i12);
                    Intrinsics.checkNotNull(string);
                    if (StringsKt.z(string, "%", z12, 2, null)) {
                        double parseDouble = Double.parseDouble(StringsKt.q1(string, i11));
                        if (i12 == 0) {
                            f12 = f10;
                        } else {
                            f12 = f11;
                        }
                        z11 = z12;
                        i10 = i11;
                        dArr[i12] = (f12 * parseDouble) / 100.0d;
                    }
                }
                z11 = z12;
                i10 = i11;
            } else {
                z11 = z12;
                i10 = i11;
                dArr[i12] = readableArray.getDouble(i12);
            }
            i12++;
            z12 = z11;
            i11 = i10;
        }
        boolean z13 = z12;
        int i14 = i11;
        double d12 = (-d10) + dArr[z13 ? 1 : 0];
        double d13 = (-d11) + dArr[i14];
        double d14 = dArr[2];
        double[] dArr2 = new double[3];
        dArr2[z13 ? 1 : 0] = d12;
        dArr2[i14] = d13;
        dArr2[2] = d14;
        return dArr2;
    }

    private static final native void nativeProcessTransform(NativeArray nativeArray, double[] dArr, float f10, float f11, NativeArray nativeArray2);

    private final double parseTranslateValue(String str, double d10) {
        try {
            if (StringsKt.z(str, "%", false, 2, null)) {
                return (Double.parseDouble(StringsKt.q1(str, 1)) * d10) / 100.0d;
            }
            return Double.parseDouble(str);
        } catch (NumberFormatException unused) {
            p8.a.J(ReactConstants.TAG, "Invalid translate value: " + str);
            return 0.0d;
        }
    }

    @jr.c
    public static final void processTransform(@NotNull ReadableArray transforms, @NotNull double[] result) {
        Intrinsics.checkNotNullParameter(transforms, "transforms");
        Intrinsics.checkNotNullParameter(result, "result");
        processTransform(transforms, result, 0.0f, 0.0f, null, false);
    }

    @jr.c
    public static final void processTransform(@NotNull ReadableArray transforms, @NotNull double[] result, float f10, float f11, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(transforms, "transforms");
        Intrinsics.checkNotNullParameter(result, "result");
        processTransform(transforms, result, f10, f11, readableArray, false);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:87:0x01e1, code lost:
        if (r13.equals("rotate") == false) goto L35;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final void processTransform(@org.jetbrains.annotations.NotNull com.facebook.react.bridge.ReadableArray r21, @org.jetbrains.annotations.NotNull double[] r22, float r23, float r24, com.facebook.react.bridge.ReadableArray r25, boolean r26) {
        /*
            Method dump skipped, instructions count: 738
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.TransformHelper.processTransform(com.facebook.react.bridge.ReadableArray, double[], float, float, com.facebook.react.bridge.ReadableArray, boolean):void");
    }
}
