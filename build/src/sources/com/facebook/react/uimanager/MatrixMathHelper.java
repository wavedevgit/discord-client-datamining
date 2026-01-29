package com.facebook.react.uimanager;

import com.swmansion.reanimated.layoutReanimation.Snapshot;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0013\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b*\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001;B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0005H\u0002J \u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\fH\u0007J\u0018\u0010\u000f\u001a\u00020\n2\u0006\u0010\u0010\u001a\u00020\f2\u0006\u0010\u0011\u001a\u00020\u0012H\u0007J\u0010\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\fH\u0007J\u0010\u0010\u0015\u001a\u00020\f2\u0006\u0010\u0014\u001a\u00020\fH\u0007J\u0010\u0010\u0016\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00020\fH\u0007J \u0010\u0018\u001a\u00020\n2\u0006\u0010\u0019\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010\u001a\u001a\u00020\fH\u0007J\u0010\u0010\u001b\u001a\u00020\u00052\u0006\u0010\r\u001a\u00020\fH\u0007J\u0018\u0010\u001c\u001a\u00020\f2\u0006\u0010\u001d\u001a\u00020\f2\u0006\u0010\u001e\u001a\u00020\u0005H\u0007J\u0018\u0010\u001f\u001a\u00020\u00052\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\fH\u0007J(\u0010 \u001a\u00020\f2\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\f2\u0006\u0010!\u001a\u00020\u00052\u0006\u0010\"\u001a\u00020\u0005H\u0007J\u0018\u0010#\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\fH\u0007J\u0010\u0010$\u001a\u00020\u00052\u0006\u0010%\u001a\u00020\u0005H\u0007J\b\u0010&\u001a\u00020\fH\u0007J\u0010\u0010'\u001a\u00020\u00052\u0006\u0010(\u001a\u00020\u0005H\u0007J\u0010\u0010)\u001a\u00020\n2\u0006\u0010\u0014\u001a\u00020\fH\u0007J\u0018\u0010*\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010+\u001a\u00020\u0005H\u0007J\u0018\u0010,\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010-\u001a\u00020\u0005H\u0007J\u0018\u0010.\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010-\u001a\u00020\u0005H\u0007J\u0016\u0010/\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010-\u001a\u00020\u0005J \u00100\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00101\u001a\u00020\u00052\u0006\u00102\u001a\u00020\u0005H\u0007J(\u00103\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00101\u001a\u00020\u00052\u0006\u00102\u001a\u00020\u00052\u0006\u00104\u001a\u00020\u0005H\u0007J\u0018\u00105\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00106\u001a\u00020\u0005H\u0007J\u0018\u00107\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00106\u001a\u00020\u0005H\u0007J\u0018\u00108\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00106\u001a\u00020\u0005H\u0007J\u0018\u00109\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00106\u001a\u00020\u0005H\u0007J\u0018\u0010:\u001a\u00020\n2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u00106\u001a\u00020\u0005H\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006<"}, d2 = {"Lcom/facebook/react/uimanager/MatrixMathHelper;", "", "<init>", "()V", "EPSILON", "", "isZero", "", "d", "multiplyInto", "", "out", "", "a", "b", "decomposeMatrix", Snapshot.TRANSFORM_MATRIX, "ctx", "Lcom/facebook/react/uimanager/MatrixMathHelper$MatrixDecompositionContext;", "determinant", "matrix", "inverse", "transpose", "m", "multiplyVectorByMatrix", "v", "result", "v3Length", "v3Normalize", "vector", "norm", "v3Dot", "v3Combine", "aScale", "bScale", "v3Cross", "roundTo3Places", "n", "createIdentityMatrix", "degreesToRadians", "degrees", "resetIdentityMatrix", "applyPerspective", "perspective", "applyScaleX", "factor", "applyScaleY", "applyScaleZ", "applyTranslate2D", "x", "y", "applyTranslate3D", "z", "applySkewX", "radians", "applySkewY", "applyRotateX", "applyRotateY", "applyRotateZ", "MatrixDecompositionContext", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MatrixMathHelper {
    private static final double EPSILON = 1.0E-5d;
    @NotNull
    public static final MatrixMathHelper INSTANCE = new MatrixMathHelper();

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0013\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\b\u0016\u0018\u0000 \f2\u00020\u0001:\u0001\fB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\n\u001a\u00020\u000bR\u0012\u0010\u0004\u001a\u00020\u00058\u0006@\u0006X\u0087\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0006\u001a\u00020\u00058\u0006@\u0006X\u0087\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0007\u001a\u00020\u00058\u0006@\u0006X\u0087\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\b\u001a\u00020\u00058\u0006@\u0006X\u0087\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\t\u001a\u00020\u00058\u0006@\u0006X\u0087\u000e¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/facebook/react/uimanager/MatrixMathHelper$MatrixDecompositionContext;", "", "<init>", "()V", "perspective", "", "scale", "skew", "translation", "rotationDegrees", "reset", "", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class MatrixDecompositionContext {
        @NotNull
        private static final Companion Companion = new Companion(null);
        @NotNull
        public double[] perspective = new double[4];
        @NotNull
        public double[] scale = new double[3];
        @NotNull
        public double[] skew = new double[3];
        @NotNull
        public double[] translation = new double[3];
        @NotNull
        public double[] rotationDegrees = new double[3];

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0013\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/MatrixMathHelper$MatrixDecompositionContext$Companion;", "", "<init>", "()V", "resetArray", "", "arr", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final void resetArray(double[] dArr) {
                int length = dArr.length;
                for (int i10 = 0; i10 < length; i10++) {
                    dArr[i10] = 0.0d;
                }
            }

            private Companion() {
            }
        }

        public final void reset() {
            Companion companion = Companion;
            companion.resetArray(this.perspective);
            companion.resetArray(this.scale);
            companion.resetArray(this.skew);
            companion.resetArray(this.translation);
            companion.resetArray(this.rotationDegrees);
        }
    }

    private MatrixMathHelper() {
    }

    public static final void applyPerspective(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[11] = (-1) / d10;
    }

    public static final void applyRotateX(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[5] = Math.cos(d10);
        m10[6] = Math.sin(d10);
        m10[9] = -Math.sin(d10);
        m10[10] = Math.cos(d10);
    }

    public static final void applyRotateY(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[0] = Math.cos(d10);
        m10[2] = -Math.sin(d10);
        m10[8] = Math.sin(d10);
        m10[10] = Math.cos(d10);
    }

    public static final void applyRotateZ(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[0] = Math.cos(d10);
        m10[1] = Math.sin(d10);
        m10[4] = -Math.sin(d10);
        m10[5] = Math.cos(d10);
    }

    public static final void applyScaleX(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[0] = d10;
    }

    public static final void applyScaleY(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[5] = d10;
    }

    public static final void applySkewX(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[4] = Math.tan(d10);
    }

    public static final void applySkewY(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[1] = Math.tan(d10);
    }

    public static final void applyTranslate2D(@NotNull double[] m10, double d10, double d11) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[12] = d10;
        m10[13] = d11;
    }

    public static final void applyTranslate3D(@NotNull double[] m10, double d10, double d11, double d12) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[12] = d10;
        m10[13] = d11;
        m10[14] = d12;
    }

    @NotNull
    public static final double[] createIdentityMatrix() {
        double[] dArr = new double[16];
        resetIdentityMatrix(dArr);
        return dArr;
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00d0 A[LOOP:3: B:36:0x00ce->B:37:0x00d0, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00df A[LOOP:4: B:39:0x00dd->B:40:0x00df, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00ea A[LOOP:5: B:42:0x00e8->B:43:0x00ea, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:46:0x018f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final void decomposeMatrix(@org.jetbrains.annotations.NotNull double[] r23, @org.jetbrains.annotations.NotNull com.facebook.react.uimanager.MatrixMathHelper.MatrixDecompositionContext r24) {
        /*
            Method dump skipped, instructions count: 502
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.MatrixMathHelper.decomposeMatrix(double[], com.facebook.react.uimanager.MatrixMathHelper$MatrixDecompositionContext):void");
    }

    public static final double degreesToRadians(double d10) {
        return (d10 * 3.141592653589793d) / 180;
    }

    public static final double determinant(@NotNull double[] matrix) {
        Intrinsics.checkNotNullParameter(matrix, "matrix");
        double d10 = matrix[0];
        double d11 = matrix[1];
        double d12 = matrix[2];
        double d13 = matrix[3];
        double d14 = matrix[4];
        double d15 = matrix[5];
        double d16 = matrix[6];
        double d17 = matrix[7];
        double d18 = matrix[8];
        double d19 = matrix[9];
        double d20 = matrix[10];
        double d21 = matrix[11];
        double d22 = matrix[12];
        double d23 = matrix[13];
        double d24 = matrix[14];
        double d25 = matrix[15];
        double d26 = d13 * d16;
        double d27 = d12 * d17;
        double d28 = d13 * d15;
        double d29 = d11 * d17;
        double d30 = d12 * d15;
        double d31 = d11 * d16;
        double d32 = d13 * d14;
        double d33 = d17 * d10;
        double d34 = d12 * d14;
        double d35 = d16 * d10;
        double d36 = d11 * d14;
        double d37 = d10 * d15;
        return ((((((((((((((((((((((((d26 * d19) * d22) - ((d27 * d19) * d22)) - ((d28 * d20) * d22)) + ((d29 * d20) * d22)) + ((d30 * d21) * d22)) - ((d31 * d21) * d22)) - ((d26 * d18) * d23)) + ((d27 * d18) * d23)) + ((d32 * d20) * d23)) - ((d33 * d20) * d23)) - ((d34 * d21) * d23)) + ((d35 * d21) * d23)) + ((d28 * d18) * d24)) - ((d29 * d18) * d24)) - ((d32 * d19) * d24)) + ((d33 * d19) * d24)) + ((d36 * d21) * d24)) - ((d21 * d37) * d24)) - ((d30 * d18) * d25)) + ((d31 * d18) * d25)) + ((d34 * d19) * d25)) - ((d35 * d19) * d25)) - ((d36 * d20) * d25)) + (d37 * d20 * d25);
    }

    @NotNull
    public static final double[] inverse(@NotNull double[] matrix) {
        Intrinsics.checkNotNullParameter(matrix, "matrix");
        double determinant = determinant(matrix);
        if (INSTANCE.isZero(determinant)) {
            return matrix;
        }
        double d10 = matrix[0];
        double d11 = matrix[1];
        double d12 = matrix[2];
        double d13 = matrix[3];
        double d14 = matrix[4];
        double d15 = matrix[5];
        double d16 = matrix[6];
        double d17 = matrix[7];
        double d18 = matrix[8];
        double d19 = matrix[9];
        double d20 = matrix[10];
        double d21 = matrix[11];
        double d22 = matrix[12];
        double d23 = matrix[13];
        double d24 = matrix[14];
        double d25 = matrix[15];
        double d26 = d16 * d21;
        double d27 = d17 * d20;
        double d28 = d17 * d19;
        double d29 = d15 * d21;
        double d30 = d16 * d19;
        double d31 = d15 * d20;
        double d32 = d13 * d20;
        double d33 = d12 * d21;
        double d34 = d13 * d19;
        double d35 = d11 * d21;
        double d36 = d12 * d19;
        double d37 = d11 * d20;
        double d38 = d12 * d17;
        double d39 = d13 * d16;
        double d40 = d13 * d15;
        double d41 = d11 * d17;
        double d42 = d12 * d15;
        double d43 = d11 * d16;
        double d44 = (d27 * d22) - (d26 * d22);
        double d45 = d17 * d18;
        double d46 = d14 * d21;
        double d47 = d16 * d18;
        double d48 = d14 * d20;
        double d49 = (d33 * d22) - (d32 * d22);
        double d50 = d13 * d18;
        double d51 = d10 * d21;
        double d52 = d12 * d18;
        double d53 = d10 * d20;
        double d54 = d13 * d14;
        double d55 = d17 * d10;
        double d56 = d12 * d14;
        double d57 = d16 * d10;
        double d58 = d15 * d18;
        double d59 = ((((d29 * d22) - (d28 * d22)) + (d45 * d23)) - (d46 * d23)) - (d58 * d25);
        double d60 = d14 * d19;
        double d61 = d11 * d18;
        double d62 = (((d34 * d22) - (d35 * d22)) - (d50 * d23)) + (d51 * d23) + (d61 * d25);
        double d63 = d10 * d19;
        double d64 = d11 * d14;
        double d65 = d10 * d15;
        return new double[]{((((((d26 * d23) - (d27 * d23)) + (d28 * d24)) - (d29 * d24)) - (d30 * d25)) + (d31 * d25)) / determinant, ((((((d32 * d23) - (d33 * d23)) - (d34 * d24)) + (d35 * d24)) + (d36 * d25)) - (d37 * d25)) / determinant, ((((((d38 * d23) - (d39 * d23)) + (d40 * d24)) - (d41 * d24)) - (d42 * d25)) + (d43 * d25)) / determinant, ((((((d39 * d19) - (d38 * d19)) - (d40 * d20)) + (d41 * d20)) + (d42 * d21)) - (d43 * d21)) / determinant, ((((d44 - (d45 * d24)) + (d46 * d24)) + (d47 * d25)) - (d48 * d25)) / determinant, ((((d49 + (d50 * d24)) - (d51 * d24)) - (d52 * d25)) + (d53 * d25)) / determinant, ((((((d39 * d22) - (d38 * d22)) - (d54 * d24)) + (d55 * d24)) + (d56 * d25)) - (d57 * d25)) / determinant, ((((((d38 * d18) - (d39 * d18)) + (d54 * d20)) - (d55 * d20)) - (d56 * d21)) + (d57 * d21)) / determinant, (d59 + (d60 * d25)) / determinant, (d62 - (d63 * d25)) / determinant, ((((((d41 * d22) - (d40 * d22)) + (d54 * d23)) - (d55 * d23)) - (d64 * d25)) + (d25 * d65)) / determinant, ((((((d40 * d18) - (d41 * d18)) - (d54 * d19)) + (d55 * d19)) + (d64 * d21)) - (d21 * d65)) / determinant, ((((((d30 * d22) - (d31 * d22)) - (d47 * d23)) + (d48 * d23)) + (d58 * d24)) - (d60 * d24)) / determinant, ((((((d37 * d22) - (d36 * d22)) + (d52 * d23)) - (d53 * d23)) - (d61 * d24)) + (d63 * d24)) / determinant, ((((((d42 * d22) - (d22 * d43)) - (d56 * d23)) + (d23 * d57)) + (d64 * d24)) - (d24 * d65)) / determinant, ((((((d43 * d18) - (d42 * d18)) + (d56 * d19)) - (d57 * d19)) - (d64 * d20)) + (d65 * d20)) / determinant};
    }

    private final boolean isZero(double d10) {
        if (Double.isNaN(d10) || Math.abs(d10) >= EPSILON) {
            return false;
        }
        return true;
    }

    public static final void multiplyInto(@NotNull double[] out, @NotNull double[] a10, @NotNull double[] b10) {
        Intrinsics.checkNotNullParameter(out, "out");
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        double d10 = a10[0];
        double d11 = a10[1];
        double d12 = a10[2];
        double d13 = a10[3];
        double d14 = a10[4];
        double d15 = a10[5];
        double d16 = a10[6];
        double d17 = a10[7];
        double d18 = a10[8];
        double d19 = a10[9];
        double d20 = a10[10];
        double d21 = a10[11];
        double d22 = a10[12];
        double d23 = a10[13];
        double d24 = a10[14];
        double d25 = a10[15];
        double d26 = b10[0];
        double d27 = b10[1];
        double d28 = b10[2];
        double d29 = b10[3];
        out[0] = (d26 * d10) + (d27 * d14) + (d28 * d18) + (d29 * d22);
        out[1] = (d26 * d11) + (d27 * d15) + (d28 * d19) + (d29 * d23);
        out[2] = (d26 * d12) + (d27 * d16) + (d28 * d20) + (d29 * d24);
        out[3] = (d26 * d13) + (d27 * d17) + (d28 * d21) + (d29 * d25);
        double d30 = b10[4];
        double d31 = b10[5];
        double d32 = b10[6];
        double d33 = b10[7];
        out[4] = (d30 * d10) + (d31 * d14) + (d32 * d18) + (d33 * d22);
        out[5] = (d30 * d11) + (d31 * d15) + (d32 * d19) + (d33 * d23);
        out[6] = (d30 * d12) + (d31 * d16) + (d32 * d20) + (d33 * d24);
        out[7] = (d30 * d13) + (d31 * d17) + (d32 * d21) + (d33 * d25);
        double d34 = b10[8];
        double d35 = b10[9];
        double d36 = b10[10];
        double d37 = b10[11];
        out[8] = (d34 * d10) + (d35 * d14) + (d36 * d18) + (d37 * d22);
        out[9] = (d34 * d11) + (d35 * d15) + (d36 * d19) + (d37 * d23);
        out[10] = (d34 * d12) + (d35 * d16) + (d36 * d20) + (d37 * d24);
        out[11] = (d34 * d13) + (d35 * d17) + (d36 * d21) + (d37 * d25);
        double d38 = b10[12];
        double d39 = b10[13];
        double d40 = b10[14];
        double d41 = b10[15];
        out[12] = (d10 * d38) + (d14 * d39) + (d18 * d40) + (d22 * d41);
        out[13] = (d11 * d38) + (d15 * d39) + (d19 * d40) + (d23 * d41);
        out[14] = (d12 * d38) + (d16 * d39) + (d20 * d40) + (d24 * d41);
        out[15] = (d38 * d13) + (d39 * d17) + (d40 * d21) + (d41 * d25);
    }

    public static final void multiplyVectorByMatrix(@NotNull double[] v10, @NotNull double[] m10, @NotNull double[] result) {
        Intrinsics.checkNotNullParameter(v10, "v");
        Intrinsics.checkNotNullParameter(m10, "m");
        Intrinsics.checkNotNullParameter(result, "result");
        double d10 = v10[0];
        double d11 = v10[1];
        double d12 = v10[2];
        double d13 = v10[3];
        result[0] = (m10[0] * d10) + (m10[4] * d11) + (m10[8] * d12) + (m10[12] * d13);
        result[1] = (m10[1] * d10) + (m10[5] * d11) + (m10[9] * d12) + (m10[13] * d13);
        result[2] = (m10[2] * d10) + (m10[6] * d11) + (m10[10] * d12) + (m10[14] * d13);
        result[3] = (d10 * m10[3]) + (d11 * m10[7]) + (d12 * m10[11]) + (d13 * m10[15]);
    }

    public static final void resetIdentityMatrix(@NotNull double[] matrix) {
        Intrinsics.checkNotNullParameter(matrix, "matrix");
        matrix[14] = 0.0d;
        matrix[13] = 0.0d;
        matrix[12] = 0.0d;
        matrix[11] = 0.0d;
        matrix[9] = 0.0d;
        matrix[8] = 0.0d;
        matrix[7] = 0.0d;
        matrix[6] = 0.0d;
        matrix[4] = 0.0d;
        matrix[3] = 0.0d;
        matrix[2] = 0.0d;
        matrix[1] = 0.0d;
        matrix[15] = 1.0d;
        matrix[10] = 1.0d;
        matrix[5] = 1.0d;
        matrix[0] = 1.0d;
    }

    public static final double roundTo3Places(double d10) {
        return Math.round(d10 * 1000.0d) * 0.001d;
    }

    @NotNull
    public static final double[] transpose(@NotNull double[] m10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        return new double[]{m10[0], m10[4], m10[8], m10[12], m10[1], m10[5], m10[9], m10[13], m10[2], m10[6], m10[10], m10[14], m10[3], m10[7], m10[11], m10[15]};
    }

    @NotNull
    public static final double[] v3Combine(@NotNull double[] a10, @NotNull double[] b10, double d10, double d11) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        return new double[]{(a10[0] * d10) + (b10[0] * d11), (a10[1] * d10) + (b10[1] * d11), (d10 * a10[2]) + (d11 * b10[2])};
    }

    @NotNull
    public static final double[] v3Cross(@NotNull double[] a10, @NotNull double[] b10) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        double d10 = a10[1];
        double d11 = b10[2];
        double d12 = a10[2];
        double d13 = b10[1];
        double d14 = b10[0];
        double d15 = a10[0];
        return new double[]{(d10 * d11) - (d12 * d13), (d12 * d14) - (d11 * d15), (d15 * d13) - (d10 * d14)};
    }

    public static final double v3Dot(@NotNull double[] a10, @NotNull double[] b10) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        return (a10[0] * b10[0]) + (a10[1] * b10[1]) + (a10[2] * b10[2]);
    }

    public static final double v3Length(@NotNull double[] a10) {
        Intrinsics.checkNotNullParameter(a10, "a");
        double d10 = a10[0];
        double d11 = a10[1];
        double d12 = (d10 * d10) + (d11 * d11);
        double d13 = a10[2];
        return Math.sqrt(d12 + (d13 * d13));
    }

    @NotNull
    public static final double[] v3Normalize(@NotNull double[] vector, double d10) {
        Intrinsics.checkNotNullParameter(vector, "vector");
        double d11 = 1;
        if (INSTANCE.isZero(d10)) {
            d10 = v3Length(vector);
        }
        double d12 = d11 / d10;
        return new double[]{vector[0] * d12, vector[1] * d12, vector[2] * d12};
    }

    public final void applyScaleZ(@NotNull double[] m10, double d10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        m10[10] = d10;
    }
}
