package com.facebook.react.uimanager.style;

import android.content.Context;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.ViewProps;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0011\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0081@\u0018\u00002\u00020\u0001B\u0019\u0012\u0010\b\u0003\u0010\u0002\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00040\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u001d\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u00042\u0006\u0010\r\u001a\u00020\u000e¢\u0006\u0004\b\u000f\u0010\u0010J\u001a\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0014\u0010\u0015J\u0010\u0010\u0016\u001a\u00020\u0004HÖ\u0001¢\u0006\u0004\b\u0017\u0010\u0018J\u0010\u0010\u0019\u001a\u00020\u001aHÖ\u0001¢\u0006\u0004\b\u001b\u0010\u001cR\u001b\u0010\u0002\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00040\u0003¢\u0006\n\n\u0002\u0010\t\u001a\u0004\b\u0007\u0010\b\u0088\u0001\u0002¨\u0006\u001d"}, d2 = {"Lcom/facebook/react/uimanager/style/BorderColors;", "", "edgeColors", "", "", "constructor-impl", "([Ljava/lang/Integer;)[Ljava/lang/Integer;", "getEdgeColors", "()[Ljava/lang/Integer;", "[Ljava/lang/Integer;", "resolve", "Lcom/facebook/react/uimanager/style/ColorEdges;", ViewProps.LAYOUT_DIRECTION, "context", "Landroid/content/Context;", "resolve-impl", "([Ljava/lang/Integer;ILandroid/content/Context;)Lcom/facebook/react/uimanager/style/ColorEdges;", "equals", "", "other", "equals-impl", "([Ljava/lang/Integer;Ljava/lang/Object;)Z", "hashCode", "hashCode-impl", "([Ljava/lang/Integer;)I", "toString", "", "toString-impl", "([Ljava/lang/Integer;)Ljava/lang/String;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BorderColors {
    @NotNull
    private final Integer[] edgeColors;

    private /* synthetic */ BorderColors(Integer[] numArr) {
        this.edgeColors = numArr;
    }

    /* renamed from: box-impl  reason: not valid java name */
    public static final /* synthetic */ BorderColors m1161boximpl(Integer[] numArr) {
        return new BorderColors(numArr);
    }

    @NotNull
    /* renamed from: constructor-impl  reason: not valid java name */
    public static Integer[] m1162constructorimpl(@NotNull Integer[] edgeColors) {
        Intrinsics.checkNotNullParameter(edgeColors, "edgeColors");
        return edgeColors;
    }

    /* renamed from: constructor-impl$default  reason: not valid java name */
    public static /* synthetic */ Integer[] m1163constructorimpl$default(Integer[] numArr, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        if ((i10 & 1) != 0) {
            numArr = new Integer[LogicalEdge.values().length];
        }
        return m1162constructorimpl(numArr);
    }

    /* renamed from: equals-impl  reason: not valid java name */
    public static boolean m1164equalsimpl(Integer[] numArr, Object obj) {
        return (obj instanceof BorderColors) && Intrinsics.areEqual(numArr, ((BorderColors) obj).m1169unboximpl());
    }

    /* renamed from: equals-impl0  reason: not valid java name */
    public static final boolean m1165equalsimpl0(Integer[] numArr, Integer[] numArr2) {
        return Intrinsics.areEqual(numArr, numArr2);
    }

    /* renamed from: hashCode-impl  reason: not valid java name */
    public static int m1166hashCodeimpl(Integer[] numArr) {
        return Arrays.hashCode(numArr);
    }

    @NotNull
    /* renamed from: resolve-impl  reason: not valid java name */
    public static final ColorEdges m1167resolveimpl(Integer[] numArr, int i10, @NotNull Context context) {
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        Intrinsics.checkNotNullParameter(context, "context");
        int i20 = -16777216;
        if (i10 != 0) {
            if (i10 == 1) {
                if (I18nUtil.Companion.getInstance().doLeftAndRightSwapInRTL(context)) {
                    Integer num = numArr[LogicalEdge.END.ordinal()];
                    if (num != null || (num = numArr[LogicalEdge.RIGHT.ordinal()]) != null || (num = numArr[LogicalEdge.HORIZONTAL.ordinal()]) != null || (num = numArr[LogicalEdge.ALL.ordinal()]) != null) {
                        i17 = num.intValue();
                    } else {
                        i17 = -16777216;
                    }
                    Integer num2 = numArr[LogicalEdge.BLOCK_START.ordinal()];
                    if (num2 != null || (num2 = numArr[LogicalEdge.TOP.ordinal()]) != null || (num2 = numArr[LogicalEdge.BLOCK.ordinal()]) != null || (num2 = numArr[LogicalEdge.VERTICAL.ordinal()]) != null || (num2 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
                        i18 = num2.intValue();
                    } else {
                        i18 = -16777216;
                    }
                    Integer num3 = numArr[LogicalEdge.START.ordinal()];
                    if (num3 != null || (num3 = numArr[LogicalEdge.LEFT.ordinal()]) != null || (num3 = numArr[LogicalEdge.HORIZONTAL.ordinal()]) != null || (num3 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
                        i19 = num3.intValue();
                    } else {
                        i19 = -16777216;
                    }
                    Integer num4 = numArr[LogicalEdge.BLOCK_END.ordinal()];
                    if (num4 != null || (num4 = numArr[LogicalEdge.BOTTOM.ordinal()]) != null || (num4 = numArr[LogicalEdge.BLOCK.ordinal()]) != null || (num4 = numArr[LogicalEdge.VERTICAL.ordinal()]) != null) {
                        i20 = num4.intValue();
                    } else {
                        Integer num5 = numArr[LogicalEdge.ALL.ordinal()];
                        if (num5 != null) {
                            i20 = num5.intValue();
                        }
                    }
                    return new ColorEdges(i17, i18, i19, i20);
                }
                Integer num6 = numArr[LogicalEdge.END.ordinal()];
                if (num6 != null || (num6 = numArr[LogicalEdge.LEFT.ordinal()]) != null || (num6 = numArr[LogicalEdge.HORIZONTAL.ordinal()]) != null || (num6 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
                    i14 = num6.intValue();
                } else {
                    i14 = -16777216;
                }
                Integer num7 = numArr[LogicalEdge.BLOCK_START.ordinal()];
                if (num7 != null || (num7 = numArr[LogicalEdge.TOP.ordinal()]) != null || (num7 = numArr[LogicalEdge.BLOCK.ordinal()]) != null || (num7 = numArr[LogicalEdge.VERTICAL.ordinal()]) != null || (num7 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
                    i15 = num7.intValue();
                } else {
                    i15 = -16777216;
                }
                Integer num8 = numArr[LogicalEdge.START.ordinal()];
                if (num8 != null || (num8 = numArr[LogicalEdge.RIGHT.ordinal()]) != null || (num8 = numArr[LogicalEdge.HORIZONTAL.ordinal()]) != null || (num8 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
                    i16 = num8.intValue();
                } else {
                    i16 = -16777216;
                }
                Integer num9 = numArr[LogicalEdge.BLOCK_END.ordinal()];
                if (num9 != null || (num9 = numArr[LogicalEdge.BOTTOM.ordinal()]) != null || (num9 = numArr[LogicalEdge.BLOCK.ordinal()]) != null || (num9 = numArr[LogicalEdge.VERTICAL.ordinal()]) != null) {
                    i20 = num9.intValue();
                } else {
                    Integer num10 = numArr[LogicalEdge.ALL.ordinal()];
                    if (num10 != null) {
                        i20 = num10.intValue();
                    }
                }
                return new ColorEdges(i14, i15, i16, i20);
            }
            throw new IllegalArgumentException("Expected resolved layout direction");
        }
        Integer num11 = numArr[LogicalEdge.START.ordinal()];
        if (num11 != null || (num11 = numArr[LogicalEdge.LEFT.ordinal()]) != null || (num11 = numArr[LogicalEdge.HORIZONTAL.ordinal()]) != null || (num11 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
            i11 = num11.intValue();
        } else {
            i11 = -16777216;
        }
        Integer num12 = numArr[LogicalEdge.BLOCK_START.ordinal()];
        if (num12 != null || (num12 = numArr[LogicalEdge.TOP.ordinal()]) != null || (num12 = numArr[LogicalEdge.BLOCK.ordinal()]) != null || (num12 = numArr[LogicalEdge.VERTICAL.ordinal()]) != null || (num12 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
            i12 = num12.intValue();
        } else {
            i12 = -16777216;
        }
        Integer num13 = numArr[LogicalEdge.END.ordinal()];
        if (num13 != null || (num13 = numArr[LogicalEdge.RIGHT.ordinal()]) != null || (num13 = numArr[LogicalEdge.HORIZONTAL.ordinal()]) != null || (num13 = numArr[LogicalEdge.ALL.ordinal()]) != null) {
            i13 = num13.intValue();
        } else {
            i13 = -16777216;
        }
        Integer num14 = numArr[LogicalEdge.BLOCK_END.ordinal()];
        if (num14 != null || (num14 = numArr[LogicalEdge.BOTTOM.ordinal()]) != null || (num14 = numArr[LogicalEdge.BLOCK.ordinal()]) != null || (num14 = numArr[LogicalEdge.VERTICAL.ordinal()]) != null) {
            i20 = num14.intValue();
        } else {
            Integer num15 = numArr[LogicalEdge.ALL.ordinal()];
            if (num15 != null) {
                i20 = num15.intValue();
            }
        }
        return new ColorEdges(i11, i12, i13, i20);
    }

    /* renamed from: toString-impl  reason: not valid java name */
    public static String m1168toStringimpl(Integer[] numArr) {
        String arrays = Arrays.toString(numArr);
        return "BorderColors(edgeColors=" + arrays + ")";
    }

    public boolean equals(Object obj) {
        return m1164equalsimpl(this.edgeColors, obj);
    }

    @NotNull
    public final Integer[] getEdgeColors() {
        return this.edgeColors;
    }

    public int hashCode() {
        return m1166hashCodeimpl(this.edgeColors);
    }

    public String toString() {
        return m1168toStringimpl(this.edgeColors);
    }

    /* renamed from: unbox-impl  reason: not valid java name */
    public final /* synthetic */ Integer[] m1169unboximpl() {
        return this.edgeColors;
    }
}
