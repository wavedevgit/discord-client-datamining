package com.facebook.react.uimanager.style;

import android.content.Context;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.ViewProps;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import lr.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u001e\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0010\u000e\n\u0000\b\u0080\b\u0018\u00002\u00020\u0001B£\u0001\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0010\u0010\u0011B#\b\u0016\u0012\u0018\u0010\u0012\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u00030\u00140\u0013¢\u0006\u0004\b\u0010\u0010\u0016J\u0018\u00103\u001a\u0002042\u0006\u00105\u001a\u00020\u00152\b\u00106\u001a\u0004\u0018\u00010\u0003J\u0010\u00107\u001a\u0004\u0018\u00010\u00032\u0006\u00105\u001a\u00020\u0015J\u0006\u00108\u001a\u000209J&\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020=2\u0006\u0010>\u001a\u00020?2\u0006\u0010@\u001a\u00020A2\u0006\u0010B\u001a\u00020AJ8\u0010C\u001a\u00020;2\u0006\u0010\u0004\u001a\u00020D2\u0006\u0010\u0005\u001a\u00020D2\u0006\u0010\u0006\u001a\u00020D2\u0006\u0010\u0007\u001a\u00020D2\u0006\u0010@\u001a\u00020A2\u0006\u0010B\u001a\u00020AH\u0002J\u000b\u0010E\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010F\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010G\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010H\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010I\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010J\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010K\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010L\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010M\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010N\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010O\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010P\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010Q\u001a\u0004\u0018\u00010\u0003HÆ\u0003J¥\u0001\u0010R\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010S\u001a\u0002092\b\u0010T\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010U\u001a\u00020=HÖ\u0001J\t\u0010V\u001a\u00020WHÖ\u0001R\u001c\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\u0018\"\u0004\b\u0019\u0010\u001aR\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001b\u0010\u0018\"\u0004\b\u001c\u0010\u001aR\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001d\u0010\u0018\"\u0004\b\u001e\u0010\u001aR\u001c\u0010\u0006\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010\u0018\"\u0004\b \u0010\u001aR\u001c\u0010\u0007\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b!\u0010\u0018\"\u0004\b\"\u0010\u001aR\u001c\u0010\b\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b#\u0010\u0018\"\u0004\b$\u0010\u001aR\u001c\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b%\u0010\u0018\"\u0004\b&\u0010\u001aR\u001c\u0010\n\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b'\u0010\u0018\"\u0004\b(\u0010\u001aR\u001c\u0010\u000b\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b)\u0010\u0018\"\u0004\b*\u0010\u001aR\u001c\u0010\f\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b+\u0010\u0018\"\u0004\b,\u0010\u001aR\u001c\u0010\r\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b-\u0010\u0018\"\u0004\b.\u0010\u001aR\u001c\u0010\u000e\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b/\u0010\u0018\"\u0004\b0\u0010\u001aR\u001c\u0010\u000f\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b1\u0010\u0018\"\u0004\b2\u0010\u001a¨\u0006X"}, d2 = {"Lcom/facebook/react/uimanager/style/BorderRadiusStyle;", "", "uniform", "Lcom/facebook/react/uimanager/LengthPercentage;", "topLeft", "topRight", "bottomLeft", "bottomRight", "topStart", "topEnd", "bottomStart", "bottomEnd", "startStart", "startEnd", "endStart", "endEnd", "<init>", "(Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;)V", "properties", "", "Lkotlin/Pair;", "Lcom/facebook/react/uimanager/style/BorderRadiusProp;", "(Ljava/util/List;)V", "getUniform", "()Lcom/facebook/react/uimanager/LengthPercentage;", "setUniform", "(Lcom/facebook/react/uimanager/LengthPercentage;)V", "getTopLeft", "setTopLeft", "getTopRight", "setTopRight", "getBottomLeft", "setBottomLeft", "getBottomRight", "setBottomRight", "getTopStart", "setTopStart", "getTopEnd", "setTopEnd", "getBottomStart", "setBottomStart", "getBottomEnd", "setBottomEnd", "getStartStart", "setStartStart", "getStartEnd", "setStartEnd", "getEndStart", "setEndStart", "getEndEnd", "setEndEnd", "set", "", "property", "value", "get", "hasRoundedBorders", "", "resolve", "Lcom/facebook/react/uimanager/style/ComputedBorderRadius;", ViewProps.LAYOUT_DIRECTION, "", "context", "Landroid/content/Context;", "width", "", "height", "ensureNoOverlap", "Lcom/facebook/react/uimanager/style/CornerRadii;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "copy", "equals", "other", "hashCode", "toString", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBorderRadiusStyle.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BorderRadiusStyle.kt\ncom/facebook/react/uimanager/style/BorderRadiusStyle\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,224:1\n1869#2,2:225\n*S KotlinDebug\n*F\n+ 1 BorderRadiusStyle.kt\ncom/facebook/react/uimanager/style/BorderRadiusStyle\n*L\n49#1:225,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BorderRadiusStyle {
    private LengthPercentage bottomEnd;
    private LengthPercentage bottomLeft;
    private LengthPercentage bottomRight;
    private LengthPercentage bottomStart;
    private LengthPercentage endEnd;
    private LengthPercentage endStart;
    private LengthPercentage startEnd;
    private LengthPercentage startStart;
    private LengthPercentage topEnd;
    private LengthPercentage topLeft;
    private LengthPercentage topRight;
    private LengthPercentage topStart;
    private LengthPercentage uniform;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[BorderRadiusProp.values().length];
            try {
                iArr[BorderRadiusProp.BORDER_RADIUS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_TOP_LEFT_RADIUS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_TOP_RIGHT_RADIUS.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_BOTTOM_LEFT_RADIUS.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_BOTTOM_RIGHT_RADIUS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_TOP_START_RADIUS.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_TOP_END_RADIUS.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_BOTTOM_START_RADIUS.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_BOTTOM_END_RADIUS.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_START_START_RADIUS.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_START_END_RADIUS.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_END_START_RADIUS.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr[BorderRadiusProp.BORDER_END_END_RADIUS.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public BorderRadiusStyle() {
        this(null, null, null, null, null, null, null, null, null, null, null, null, null, 8191, null);
    }

    public static /* synthetic */ BorderRadiusStyle copy$default(BorderRadiusStyle borderRadiusStyle, LengthPercentage lengthPercentage, LengthPercentage lengthPercentage2, LengthPercentage lengthPercentage3, LengthPercentage lengthPercentage4, LengthPercentage lengthPercentage5, LengthPercentage lengthPercentage6, LengthPercentage lengthPercentage7, LengthPercentage lengthPercentage8, LengthPercentage lengthPercentage9, LengthPercentage lengthPercentage10, LengthPercentage lengthPercentage11, LengthPercentage lengthPercentage12, LengthPercentage lengthPercentage13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            lengthPercentage = borderRadiusStyle.uniform;
        }
        return borderRadiusStyle.copy(lengthPercentage, (i10 & 2) != 0 ? borderRadiusStyle.topLeft : lengthPercentage2, (i10 & 4) != 0 ? borderRadiusStyle.topRight : lengthPercentage3, (i10 & 8) != 0 ? borderRadiusStyle.bottomLeft : lengthPercentage4, (i10 & 16) != 0 ? borderRadiusStyle.bottomRight : lengthPercentage5, (i10 & 32) != 0 ? borderRadiusStyle.topStart : lengthPercentage6, (i10 & 64) != 0 ? borderRadiusStyle.topEnd : lengthPercentage7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? borderRadiusStyle.bottomStart : lengthPercentage8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? borderRadiusStyle.bottomEnd : lengthPercentage9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? borderRadiusStyle.startStart : lengthPercentage10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? borderRadiusStyle.startEnd : lengthPercentage11, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? borderRadiusStyle.endStart : lengthPercentage12, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? borderRadiusStyle.endEnd : lengthPercentage13);
    }

    private final ComputedBorderRadius ensureNoOverlap(CornerRadii cornerRadii, CornerRadii cornerRadii2, CornerRadii cornerRadii3, CornerRadii cornerRadii4, float f10, float f11) {
        float f12;
        float f13;
        float f14;
        float vertical = cornerRadii.getVertical() + cornerRadii3.getVertical();
        float horizontal = cornerRadii.getHorizontal() + cornerRadii2.getHorizontal();
        float vertical2 = cornerRadii2.getVertical() + cornerRadii4.getVertical();
        float horizontal2 = cornerRadii3.getHorizontal() + cornerRadii4.getHorizontal();
        float f15 = 0.0f;
        if (vertical > 0.0f) {
            f12 = Math.min(f11 / vertical, 1.0f);
        } else {
            f12 = 0.0f;
        }
        if (horizontal > 0.0f) {
            f13 = Math.min(f10 / horizontal, 1.0f);
        } else {
            f13 = 0.0f;
        }
        if (vertical2 > 0.0f) {
            f14 = Math.min(f11 / vertical2, 1.0f);
        } else {
            f14 = 0.0f;
        }
        if (horizontal2 > 0.0f) {
            f15 = Math.min(f10 / horizontal2, 1.0f);
        }
        return new ComputedBorderRadius(new CornerRadii(cornerRadii.getHorizontal() * Math.min(f13, f12), cornerRadii.getVertical() * Math.min(f13, f12)), new CornerRadii(cornerRadii2.getHorizontal() * Math.min(f14, f13), cornerRadii2.getVertical() * Math.min(f14, f13)), new CornerRadii(cornerRadii3.getHorizontal() * Math.min(f15, f12), cornerRadii3.getVertical() * Math.min(f15, f12)), new CornerRadii(cornerRadii4.getHorizontal() * Math.min(f15, f14), cornerRadii4.getVertical() * Math.min(f15, f14)));
    }

    public final LengthPercentage component1() {
        return this.uniform;
    }

    public final LengthPercentage component10() {
        return this.startStart;
    }

    public final LengthPercentage component11() {
        return this.startEnd;
    }

    public final LengthPercentage component12() {
        return this.endStart;
    }

    public final LengthPercentage component13() {
        return this.endEnd;
    }

    public final LengthPercentage component2() {
        return this.topLeft;
    }

    public final LengthPercentage component3() {
        return this.topRight;
    }

    public final LengthPercentage component4() {
        return this.bottomLeft;
    }

    public final LengthPercentage component5() {
        return this.bottomRight;
    }

    public final LengthPercentage component6() {
        return this.topStart;
    }

    public final LengthPercentage component7() {
        return this.topEnd;
    }

    public final LengthPercentage component8() {
        return this.bottomStart;
    }

    public final LengthPercentage component9() {
        return this.bottomEnd;
    }

    @NotNull
    public final BorderRadiusStyle copy(LengthPercentage lengthPercentage, LengthPercentage lengthPercentage2, LengthPercentage lengthPercentage3, LengthPercentage lengthPercentage4, LengthPercentage lengthPercentage5, LengthPercentage lengthPercentage6, LengthPercentage lengthPercentage7, LengthPercentage lengthPercentage8, LengthPercentage lengthPercentage9, LengthPercentage lengthPercentage10, LengthPercentage lengthPercentage11, LengthPercentage lengthPercentage12, LengthPercentage lengthPercentage13) {
        return new BorderRadiusStyle(lengthPercentage, lengthPercentage2, lengthPercentage3, lengthPercentage4, lengthPercentage5, lengthPercentage6, lengthPercentage7, lengthPercentage8, lengthPercentage9, lengthPercentage10, lengthPercentage11, lengthPercentage12, lengthPercentage13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BorderRadiusStyle) {
            BorderRadiusStyle borderRadiusStyle = (BorderRadiusStyle) obj;
            return Intrinsics.areEqual(this.uniform, borderRadiusStyle.uniform) && Intrinsics.areEqual(this.topLeft, borderRadiusStyle.topLeft) && Intrinsics.areEqual(this.topRight, borderRadiusStyle.topRight) && Intrinsics.areEqual(this.bottomLeft, borderRadiusStyle.bottomLeft) && Intrinsics.areEqual(this.bottomRight, borderRadiusStyle.bottomRight) && Intrinsics.areEqual(this.topStart, borderRadiusStyle.topStart) && Intrinsics.areEqual(this.topEnd, borderRadiusStyle.topEnd) && Intrinsics.areEqual(this.bottomStart, borderRadiusStyle.bottomStart) && Intrinsics.areEqual(this.bottomEnd, borderRadiusStyle.bottomEnd) && Intrinsics.areEqual(this.startStart, borderRadiusStyle.startStart) && Intrinsics.areEqual(this.startEnd, borderRadiusStyle.startEnd) && Intrinsics.areEqual(this.endStart, borderRadiusStyle.endStart) && Intrinsics.areEqual(this.endEnd, borderRadiusStyle.endEnd);
        }
        return false;
    }

    public final LengthPercentage get(@NotNull BorderRadiusProp property) {
        Intrinsics.checkNotNullParameter(property, "property");
        switch (WhenMappings.$EnumSwitchMapping$0[property.ordinal()]) {
            case 1:
                return this.uniform;
            case 2:
                return this.topLeft;
            case 3:
                return this.topRight;
            case 4:
                return this.bottomLeft;
            case 5:
                return this.bottomRight;
            case 6:
                return this.topStart;
            case 7:
                return this.topEnd;
            case 8:
                return this.bottomStart;
            case 9:
                return this.bottomEnd;
            case 10:
                return this.startStart;
            case 11:
                return this.startEnd;
            case 12:
                return this.endStart;
            case 13:
                return this.endEnd;
            default:
                throw new p();
        }
    }

    public final LengthPercentage getBottomEnd() {
        return this.bottomEnd;
    }

    public final LengthPercentage getBottomLeft() {
        return this.bottomLeft;
    }

    public final LengthPercentage getBottomRight() {
        return this.bottomRight;
    }

    public final LengthPercentage getBottomStart() {
        return this.bottomStart;
    }

    public final LengthPercentage getEndEnd() {
        return this.endEnd;
    }

    public final LengthPercentage getEndStart() {
        return this.endStart;
    }

    public final LengthPercentage getStartEnd() {
        return this.startEnd;
    }

    public final LengthPercentage getStartStart() {
        return this.startStart;
    }

    public final LengthPercentage getTopEnd() {
        return this.topEnd;
    }

    public final LengthPercentage getTopLeft() {
        return this.topLeft;
    }

    public final LengthPercentage getTopRight() {
        return this.topRight;
    }

    public final LengthPercentage getTopStart() {
        return this.topStart;
    }

    public final LengthPercentage getUniform() {
        return this.uniform;
    }

    public final boolean hasRoundedBorders() {
        if (this.uniform == null && this.topLeft == null && this.topRight == null && this.bottomLeft == null && this.bottomRight == null && this.topStart == null && this.topEnd == null && this.bottomStart == null && this.bottomEnd == null && this.startStart == null && this.startEnd == null && this.endStart == null && this.endEnd == null) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        LengthPercentage lengthPercentage = this.uniform;
        int hashCode = (lengthPercentage == null ? 0 : lengthPercentage.hashCode()) * 31;
        LengthPercentage lengthPercentage2 = this.topLeft;
        int hashCode2 = (hashCode + (lengthPercentage2 == null ? 0 : lengthPercentage2.hashCode())) * 31;
        LengthPercentage lengthPercentage3 = this.topRight;
        int hashCode3 = (hashCode2 + (lengthPercentage3 == null ? 0 : lengthPercentage3.hashCode())) * 31;
        LengthPercentage lengthPercentage4 = this.bottomLeft;
        int hashCode4 = (hashCode3 + (lengthPercentage4 == null ? 0 : lengthPercentage4.hashCode())) * 31;
        LengthPercentage lengthPercentage5 = this.bottomRight;
        int hashCode5 = (hashCode4 + (lengthPercentage5 == null ? 0 : lengthPercentage5.hashCode())) * 31;
        LengthPercentage lengthPercentage6 = this.topStart;
        int hashCode6 = (hashCode5 + (lengthPercentage6 == null ? 0 : lengthPercentage6.hashCode())) * 31;
        LengthPercentage lengthPercentage7 = this.topEnd;
        int hashCode7 = (hashCode6 + (lengthPercentage7 == null ? 0 : lengthPercentage7.hashCode())) * 31;
        LengthPercentage lengthPercentage8 = this.bottomStart;
        int hashCode8 = (hashCode7 + (lengthPercentage8 == null ? 0 : lengthPercentage8.hashCode())) * 31;
        LengthPercentage lengthPercentage9 = this.bottomEnd;
        int hashCode9 = (hashCode8 + (lengthPercentage9 == null ? 0 : lengthPercentage9.hashCode())) * 31;
        LengthPercentage lengthPercentage10 = this.startStart;
        int hashCode10 = (hashCode9 + (lengthPercentage10 == null ? 0 : lengthPercentage10.hashCode())) * 31;
        LengthPercentage lengthPercentage11 = this.startEnd;
        int hashCode11 = (hashCode10 + (lengthPercentage11 == null ? 0 : lengthPercentage11.hashCode())) * 31;
        LengthPercentage lengthPercentage12 = this.endStart;
        int hashCode12 = (hashCode11 + (lengthPercentage12 == null ? 0 : lengthPercentage12.hashCode())) * 31;
        LengthPercentage lengthPercentage13 = this.endEnd;
        return hashCode12 + (lengthPercentage13 != null ? lengthPercentage13.hashCode() : 0);
    }

    @NotNull
    public final ComputedBorderRadius resolve(int i10, @NotNull Context context, float f10, float f11) {
        CornerRadii cornerRadii;
        CornerRadii cornerRadii2;
        CornerRadii cornerRadii3;
        CornerRadii cornerRadii4;
        CornerRadii cornerRadii5;
        CornerRadii cornerRadii6;
        CornerRadii cornerRadii7;
        CornerRadii cornerRadii8;
        CornerRadii cornerRadii9;
        Intrinsics.checkNotNullParameter(context, "context");
        CornerRadii cornerRadii10 = new CornerRadii(0.0f, 0.0f);
        if (i10 != 0) {
            if (i10 == 1) {
                if (I18nUtil.Companion.getInstance().doLeftAndRightSwapInRTL(context)) {
                    LengthPercentage lengthPercentage = this.endStart;
                    if (lengthPercentage == null && (lengthPercentage = this.topEnd) == null && (lengthPercentage = this.topRight) == null) {
                        lengthPercentage = this.uniform;
                    }
                    if (lengthPercentage != null) {
                        cornerRadii7 = new CornerRadii(lengthPercentage, f10, f11);
                    } else {
                        cornerRadii7 = cornerRadii10;
                    }
                    LengthPercentage lengthPercentage2 = this.startStart;
                    if (lengthPercentage2 == null && (lengthPercentage2 = this.topStart) == null && (lengthPercentage2 = this.topLeft) == null) {
                        lengthPercentage2 = this.uniform;
                    }
                    if (lengthPercentage2 != null) {
                        cornerRadii8 = new CornerRadii(lengthPercentage2, f10, f11);
                    } else {
                        cornerRadii8 = cornerRadii10;
                    }
                    LengthPercentage lengthPercentage3 = this.endEnd;
                    if (lengthPercentage3 == null && (lengthPercentage3 = this.bottomEnd) == null && (lengthPercentage3 = this.bottomRight) == null) {
                        lengthPercentage3 = this.uniform;
                    }
                    if (lengthPercentage3 != null) {
                        cornerRadii9 = new CornerRadii(lengthPercentage3, f10, f11);
                    } else {
                        cornerRadii9 = cornerRadii10;
                    }
                    LengthPercentage lengthPercentage4 = this.startEnd;
                    if (lengthPercentage4 == null && (lengthPercentage4 = this.bottomStart) == null && (lengthPercentage4 = this.bottomLeft) == null) {
                        lengthPercentage4 = this.uniform;
                    }
                    if (lengthPercentage4 != null) {
                        cornerRadii10 = new CornerRadii(lengthPercentage4, f10, f11);
                    }
                    return ensureNoOverlap(cornerRadii7, cornerRadii8, cornerRadii9, cornerRadii10, f10, f11);
                }
                LengthPercentage lengthPercentage5 = this.endStart;
                if (lengthPercentage5 == null && (lengthPercentage5 = this.topEnd) == null && (lengthPercentage5 = this.topLeft) == null) {
                    lengthPercentage5 = this.uniform;
                }
                if (lengthPercentage5 != null) {
                    cornerRadii4 = new CornerRadii(lengthPercentage5, f10, f11);
                } else {
                    cornerRadii4 = cornerRadii10;
                }
                LengthPercentage lengthPercentage6 = this.startStart;
                if (lengthPercentage6 == null && (lengthPercentage6 = this.topStart) == null && (lengthPercentage6 = this.topRight) == null) {
                    lengthPercentage6 = this.uniform;
                }
                if (lengthPercentage6 != null) {
                    cornerRadii5 = new CornerRadii(lengthPercentage6, f10, f11);
                } else {
                    cornerRadii5 = cornerRadii10;
                }
                LengthPercentage lengthPercentage7 = this.endEnd;
                if (lengthPercentage7 == null && (lengthPercentage7 = this.bottomStart) == null && (lengthPercentage7 = this.bottomLeft) == null) {
                    lengthPercentage7 = this.uniform;
                }
                if (lengthPercentage7 != null) {
                    cornerRadii6 = new CornerRadii(lengthPercentage7, f10, f11);
                } else {
                    cornerRadii6 = cornerRadii10;
                }
                LengthPercentage lengthPercentage8 = this.startEnd;
                if (lengthPercentage8 == null && (lengthPercentage8 = this.bottomEnd) == null && (lengthPercentage8 = this.bottomRight) == null) {
                    lengthPercentage8 = this.uniform;
                }
                if (lengthPercentage8 != null) {
                    cornerRadii10 = new CornerRadii(lengthPercentage8, f10, f11);
                }
                return ensureNoOverlap(cornerRadii4, cornerRadii5, cornerRadii6, cornerRadii10, f10, f11);
            }
            throw new IllegalArgumentException("Expected?.resolved layout direction");
        }
        LengthPercentage lengthPercentage9 = this.startStart;
        if (lengthPercentage9 == null && (lengthPercentage9 = this.topStart) == null && (lengthPercentage9 = this.topLeft) == null) {
            lengthPercentage9 = this.uniform;
        }
        if (lengthPercentage9 != null) {
            cornerRadii = new CornerRadii(lengthPercentage9, f10, f11);
        } else {
            cornerRadii = cornerRadii10;
        }
        LengthPercentage lengthPercentage10 = this.endStart;
        if (lengthPercentage10 == null && (lengthPercentage10 = this.topEnd) == null && (lengthPercentage10 = this.topRight) == null) {
            lengthPercentage10 = this.uniform;
        }
        if (lengthPercentage10 != null) {
            cornerRadii2 = new CornerRadii(lengthPercentage10, f10, f11);
        } else {
            cornerRadii2 = cornerRadii10;
        }
        LengthPercentage lengthPercentage11 = this.startEnd;
        if (lengthPercentage11 == null && (lengthPercentage11 = this.bottomStart) == null && (lengthPercentage11 = this.bottomLeft) == null) {
            lengthPercentage11 = this.uniform;
        }
        if (lengthPercentage11 != null) {
            cornerRadii3 = new CornerRadii(lengthPercentage11, f10, f11);
        } else {
            cornerRadii3 = cornerRadii10;
        }
        LengthPercentage lengthPercentage12 = this.endEnd;
        if (lengthPercentage12 == null && (lengthPercentage12 = this.bottomEnd) == null && (lengthPercentage12 = this.bottomRight) == null) {
            lengthPercentage12 = this.uniform;
        }
        if (lengthPercentage12 != null) {
            cornerRadii10 = new CornerRadii(lengthPercentage12, f10, f11);
        }
        return ensureNoOverlap(cornerRadii, cornerRadii2, cornerRadii3, cornerRadii10, f10, f11);
    }

    public final void set(@NotNull BorderRadiusProp property, LengthPercentage lengthPercentage) {
        Intrinsics.checkNotNullParameter(property, "property");
        switch (WhenMappings.$EnumSwitchMapping$0[property.ordinal()]) {
            case 1:
                this.uniform = lengthPercentage;
                return;
            case 2:
                this.topLeft = lengthPercentage;
                return;
            case 3:
                this.topRight = lengthPercentage;
                return;
            case 4:
                this.bottomLeft = lengthPercentage;
                return;
            case 5:
                this.bottomRight = lengthPercentage;
                return;
            case 6:
                this.topStart = lengthPercentage;
                return;
            case 7:
                this.topEnd = lengthPercentage;
                return;
            case 8:
                this.bottomStart = lengthPercentage;
                return;
            case 9:
                this.bottomEnd = lengthPercentage;
                return;
            case 10:
                this.startStart = lengthPercentage;
                return;
            case 11:
                this.startEnd = lengthPercentage;
                return;
            case 12:
                this.endStart = lengthPercentage;
                return;
            case 13:
                this.endEnd = lengthPercentage;
                return;
            default:
                throw new p();
        }
    }

    public final void setBottomEnd(LengthPercentage lengthPercentage) {
        this.bottomEnd = lengthPercentage;
    }

    public final void setBottomLeft(LengthPercentage lengthPercentage) {
        this.bottomLeft = lengthPercentage;
    }

    public final void setBottomRight(LengthPercentage lengthPercentage) {
        this.bottomRight = lengthPercentage;
    }

    public final void setBottomStart(LengthPercentage lengthPercentage) {
        this.bottomStart = lengthPercentage;
    }

    public final void setEndEnd(LengthPercentage lengthPercentage) {
        this.endEnd = lengthPercentage;
    }

    public final void setEndStart(LengthPercentage lengthPercentage) {
        this.endStart = lengthPercentage;
    }

    public final void setStartEnd(LengthPercentage lengthPercentage) {
        this.startEnd = lengthPercentage;
    }

    public final void setStartStart(LengthPercentage lengthPercentage) {
        this.startStart = lengthPercentage;
    }

    public final void setTopEnd(LengthPercentage lengthPercentage) {
        this.topEnd = lengthPercentage;
    }

    public final void setTopLeft(LengthPercentage lengthPercentage) {
        this.topLeft = lengthPercentage;
    }

    public final void setTopRight(LengthPercentage lengthPercentage) {
        this.topRight = lengthPercentage;
    }

    public final void setTopStart(LengthPercentage lengthPercentage) {
        this.topStart = lengthPercentage;
    }

    public final void setUniform(LengthPercentage lengthPercentage) {
        this.uniform = lengthPercentage;
    }

    @NotNull
    public String toString() {
        LengthPercentage lengthPercentage = this.uniform;
        LengthPercentage lengthPercentage2 = this.topLeft;
        LengthPercentage lengthPercentage3 = this.topRight;
        LengthPercentage lengthPercentage4 = this.bottomLeft;
        LengthPercentage lengthPercentage5 = this.bottomRight;
        LengthPercentage lengthPercentage6 = this.topStart;
        LengthPercentage lengthPercentage7 = this.topEnd;
        LengthPercentage lengthPercentage8 = this.bottomStart;
        LengthPercentage lengthPercentage9 = this.bottomEnd;
        LengthPercentage lengthPercentage10 = this.startStart;
        LengthPercentage lengthPercentage11 = this.startEnd;
        LengthPercentage lengthPercentage12 = this.endStart;
        LengthPercentage lengthPercentage13 = this.endEnd;
        return "BorderRadiusStyle(uniform=" + lengthPercentage + ", topLeft=" + lengthPercentage2 + ", topRight=" + lengthPercentage3 + ", bottomLeft=" + lengthPercentage4 + ", bottomRight=" + lengthPercentage5 + ", topStart=" + lengthPercentage6 + ", topEnd=" + lengthPercentage7 + ", bottomStart=" + lengthPercentage8 + ", bottomEnd=" + lengthPercentage9 + ", startStart=" + lengthPercentage10 + ", startEnd=" + lengthPercentage11 + ", endStart=" + lengthPercentage12 + ", endEnd=" + lengthPercentage13 + ")";
    }

    public BorderRadiusStyle(LengthPercentage lengthPercentage, LengthPercentage lengthPercentage2, LengthPercentage lengthPercentage3, LengthPercentage lengthPercentage4, LengthPercentage lengthPercentage5, LengthPercentage lengthPercentage6, LengthPercentage lengthPercentage7, LengthPercentage lengthPercentage8, LengthPercentage lengthPercentage9, LengthPercentage lengthPercentage10, LengthPercentage lengthPercentage11, LengthPercentage lengthPercentage12, LengthPercentage lengthPercentage13) {
        this.uniform = lengthPercentage;
        this.topLeft = lengthPercentage2;
        this.topRight = lengthPercentage3;
        this.bottomLeft = lengthPercentage4;
        this.bottomRight = lengthPercentage5;
        this.topStart = lengthPercentage6;
        this.topEnd = lengthPercentage7;
        this.bottomStart = lengthPercentage8;
        this.bottomEnd = lengthPercentage9;
        this.startStart = lengthPercentage10;
        this.startEnd = lengthPercentage11;
        this.endStart = lengthPercentage12;
        this.endEnd = lengthPercentage13;
    }

    public /* synthetic */ BorderRadiusStyle(LengthPercentage lengthPercentage, LengthPercentage lengthPercentage2, LengthPercentage lengthPercentage3, LengthPercentage lengthPercentage4, LengthPercentage lengthPercentage5, LengthPercentage lengthPercentage6, LengthPercentage lengthPercentage7, LengthPercentage lengthPercentage8, LengthPercentage lengthPercentage9, LengthPercentage lengthPercentage10, LengthPercentage lengthPercentage11, LengthPercentage lengthPercentage12, LengthPercentage lengthPercentage13, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : lengthPercentage, (i10 & 2) != 0 ? null : lengthPercentage2, (i10 & 4) != 0 ? null : lengthPercentage3, (i10 & 8) != 0 ? null : lengthPercentage4, (i10 & 16) != 0 ? null : lengthPercentage5, (i10 & 32) != 0 ? null : lengthPercentage6, (i10 & 64) != 0 ? null : lengthPercentage7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : lengthPercentage8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : lengthPercentage9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : lengthPercentage10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : lengthPercentage11, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : lengthPercentage12, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : lengthPercentage13);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public BorderRadiusStyle(@NotNull List<? extends Pair<? extends BorderRadiusProp, LengthPercentage>> properties) {
        this(null, null, null, null, null, null, null, null, null, null, null, null, null, 8191, null);
        Intrinsics.checkNotNullParameter(properties, "properties");
        Iterator<T> it = properties.iterator();
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            set((BorderRadiusProp) pair.a(), (LengthPercentage) pair.b());
        }
    }
}
