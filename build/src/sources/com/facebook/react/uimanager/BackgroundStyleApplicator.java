package com.facebook.react.uimanager;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.view.View;
import android.widget.ImageView;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.uimanager.common.ViewUtil;
import com.facebook.react.uimanager.drawable.BackgroundDrawable;
import com.facebook.react.uimanager.drawable.BorderDrawable;
import com.facebook.react.uimanager.drawable.CSSBackgroundDrawable;
import com.facebook.react.uimanager.drawable.CompositeBackgroundDrawable;
import com.facebook.react.uimanager.drawable.InsetBoxShadowDrawable;
import com.facebook.react.uimanager.drawable.OutlineDrawable;
import com.facebook.react.uimanager.drawable.OutsetBoxShadowDrawable;
import com.facebook.react.uimanager.style.BackgroundImageLayer;
import com.facebook.react.uimanager.style.BorderInsets;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderRadiusStyle;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.BoxShadow;
import com.facebook.react.uimanager.style.ComputedBorderRadius;
import com.facebook.react.uimanager.style.CornerRadii;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.uimanager.style.OutlineStyle;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000ª\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J!\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\n\b\u0001\u0010\b\u001a\u0004\u0018\u00010\tH\u0007¢\u0006\u0002\u0010\nJ \u0010\u000b\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u000e\u0010\f\u001a\n\u0012\u0004\u0012\u00020\u000e\u0018\u00010\rH\u0007J\u0017\u0010\u000f\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¢\u0006\u0002\u0010\u0010J'\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015H\u0007¢\u0006\u0002\u0010\u0016J\u001f\u0010\u0017\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u0013H\u0007¢\u0006\u0002\u0010\u0018J)\u0010\u0019\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u00132\n\b\u0001\u0010\b\u001a\u0004\u0018\u00010\tH\u0007¢\u0006\u0002\u0010\u001aJ\u001f\u0010\u001b\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0012\u001a\u00020\u0013H\u0007¢\u0006\u0002\u0010\u001cJ\"\u0010\u001d\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u001e\u001a\u00020\u001f2\b\u0010 \u001a\u0004\u0018\u00010!H\u0007J\u001a\u0010\"\u001a\u0004\u0018\u00010!2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u001e\u001a\u00020\u001fH\u0007J\u001a\u0010#\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010$\u001a\u0004\u0018\u00010%H\u0007J\u0012\u0010&\u001a\u0004\u0018\u00010%2\u0006\u0010\u0006\u001a\u00020\u0007H\u0007J!\u0010'\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\n\b\u0001\u0010(\u001a\u0004\u0018\u00010\tH\u0007¢\u0006\u0002\u0010\nJ\u0017\u0010)\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¢\u0006\u0002\u0010\u0010J\u0018\u0010*\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010+\u001a\u00020\u0015H\u0007J\u0015\u0010,\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010-J\u001a\u0010.\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010/\u001a\u0004\u0018\u000100H\u0007J\u0010\u00101\u001a\u0004\u0018\u0001002\u0006\u0010\u0006\u001a\u00020\u0007J\u0018\u00102\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u0015H\u0007J\u0015\u00103\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010-J\u001e\u00104\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\f\u00105\u001a\b\u0012\u0004\u0012\u0002060\rH\u0007J\u001a\u00104\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u00105\u001a\u0004\u0018\u000107H\u0007J\u001a\u00108\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u00109\u001a\u0004\u0018\u00010:H\u0007J\u0018\u0010;\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010<\u001a\u00020=H\u0007J\u0010\u0010>\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0007J\u0010\u0010?\u001a\u00020@2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0012\u0010A\u001a\u0004\u0018\u00010@2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0010\u0010B\u001a\u00020C2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0010\u0010D\u001a\u00020E2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0012\u0010F\u001a\u0004\u0018\u00010C2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0012\u0010G\u001a\u0004\u0018\u00010E2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0012\u0010H\u001a\u0004\u0018\u00010I2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0010\u0010J\u001a\u00020I2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0010\u0010K\u001a\u00020L2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0012\u0010M\u001a\u0004\u0018\u00010L2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J!\u0010N\u001a\u00020\u00152\b\u0010O\u001a\u0004\u0018\u00010\u00152\b\u0010P\u001a\u0004\u0018\u00010\u0015H\u0002¢\u0006\u0002\u0010QJ*\u0010R\u001a\u00020S2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010T\u001a\u00020@2\u0006\u0010U\u001a\u00020V2\b\u0010W\u001a\u0004\u0018\u00010VH\u0002¨\u0006X"}, d2 = {"Lcom/facebook/react/uimanager/BackgroundStyleApplicator;", "", "<init>", "()V", "setBackgroundColor", "", "view", "Landroid/view/View;", ViewProps.COLOR, "", "(Landroid/view/View;Ljava/lang/Integer;)V", "setBackgroundImage", "backgroundImageLayers", "", "Lcom/facebook/react/uimanager/style/BackgroundImageLayer;", "getBackgroundColor", "(Landroid/view/View;)Ljava/lang/Integer;", "setBorderWidth", "edge", "Lcom/facebook/react/uimanager/style/LogicalEdge;", "width", "", "(Landroid/view/View;Lcom/facebook/react/uimanager/style/LogicalEdge;Ljava/lang/Float;)V", "getBorderWidth", "(Landroid/view/View;Lcom/facebook/react/uimanager/style/LogicalEdge;)Ljava/lang/Float;", "setBorderColor", "(Landroid/view/View;Lcom/facebook/react/uimanager/style/LogicalEdge;Ljava/lang/Integer;)V", "getBorderColor", "(Landroid/view/View;Lcom/facebook/react/uimanager/style/LogicalEdge;)Ljava/lang/Integer;", "setBorderRadius", "corner", "Lcom/facebook/react/uimanager/style/BorderRadiusProp;", "radius", "Lcom/facebook/react/uimanager/LengthPercentage;", "getBorderRadius", "setBorderStyle", "borderStyle", "Lcom/facebook/react/uimanager/style/BorderStyle;", "getBorderStyle", "setOutlineColor", ViewProps.OUTLINE_COLOR, "getOutlineColor", "setOutlineOffset", ViewProps.OUTLINE_OFFSET, "getOutlineOffset", "(Landroid/view/View;)Ljava/lang/Float;", "setOutlineStyle", ViewProps.OUTLINE_STYLE, "Lcom/facebook/react/uimanager/style/OutlineStyle;", "getOutlineStyle", "setOutlineWidth", "getOutlineWidth", "setBoxShadow", "shadows", "Lcom/facebook/react/uimanager/style/BoxShadow;", "Lcom/facebook/react/bridge/ReadableArray;", "setFeedbackUnderlay", "drawable", "Landroid/graphics/drawable/Drawable;", "clipToPaddingBox", "canvas", "Landroid/graphics/Canvas;", "reset", "ensureCompositeBackgroundDrawable", "Lcom/facebook/react/uimanager/drawable/CompositeBackgroundDrawable;", "getCompositeBackgroundDrawable", "ensureCSSBackground", "Lcom/facebook/react/uimanager/drawable/CSSBackgroundDrawable;", "ensureBackgroundDrawable", "Lcom/facebook/react/uimanager/drawable/BackgroundDrawable;", "getCSSBackground", "getBackground", "getBorder", "Lcom/facebook/react/uimanager/drawable/BorderDrawable;", "ensureBorderDrawable", "ensureOutlineDrawable", "Lcom/facebook/react/uimanager/drawable/OutlineDrawable;", "getOutlineDrawable", "getInnerBorderRadius", "computedRadius", ViewProps.BORDER_WIDTH, "(Ljava/lang/Float;Ljava/lang/Float;)F", "createPaddingBoxPath", "Landroid/graphics/Path;", "composite", "paddingBoxRect", "Landroid/graphics/RectF;", "computedBorderInsets", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBackgroundStyleApplicator.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BackgroundStyleApplicator.kt\ncom/facebook/react/uimanager/BackgroundStyleApplicator\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,585:1\n808#2,11:586\n808#2,11:597\n808#2,11:608\n*S KotlinDebug\n*F\n+ 1 BackgroundStyleApplicator.kt\ncom/facebook/react/uimanager/BackgroundStyleApplicator\n*L\n110#1:586,11\n173#1:597,11\n180#1:608,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BackgroundStyleApplicator {
    @NotNull
    public static final BackgroundStyleApplicator INSTANCE = new BackgroundStyleApplicator();

    private BackgroundStyleApplicator() {
    }

    public static final void clipToPaddingBox(@NotNull View view, @NotNull Canvas canvas) {
        RectF rectF;
        float f10;
        float f11;
        float f12;
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            Rect rect = new Rect();
            view.getDrawingRect(rect);
            BackgroundStyleApplicator backgroundStyleApplicator = INSTANCE;
            CompositeBackgroundDrawable compositeBackgroundDrawable = backgroundStyleApplicator.getCompositeBackgroundDrawable(view);
            if (compositeBackgroundDrawable == null) {
                canvas.clipRect(rect);
                return;
            }
            RectF rectF2 = new RectF();
            BorderInsets borderInsets = compositeBackgroundDrawable.getBorderInsets();
            if (borderInsets != null) {
                int layoutDirection = compositeBackgroundDrawable.getLayoutDirection();
                Context context = view.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                rectF = borderInsets.resolve(layoutDirection, context);
            } else {
                rectF = null;
            }
            float f13 = compositeBackgroundDrawable.getBounds().left;
            float f14 = 0.0f;
            if (rectF != null) {
                f10 = PixelUtil.INSTANCE.dpToPx(rectF.left);
            } else {
                f10 = 0.0f;
            }
            rectF2.left = f13 + f10;
            float f15 = compositeBackgroundDrawable.getBounds().top;
            if (rectF != null) {
                f11 = PixelUtil.INSTANCE.dpToPx(rectF.top);
            } else {
                f11 = 0.0f;
            }
            rectF2.top = f15 + f11;
            float f16 = compositeBackgroundDrawable.getBounds().right;
            if (rectF != null) {
                f12 = PixelUtil.INSTANCE.dpToPx(rectF.right);
            } else {
                f12 = 0.0f;
            }
            rectF2.right = f16 - f12;
            float f17 = compositeBackgroundDrawable.getBounds().bottom;
            if (rectF != null) {
                f14 = PixelUtil.INSTANCE.dpToPx(rectF.bottom);
            }
            rectF2.bottom = f17 - f14;
            BorderRadiusStyle borderRadius = compositeBackgroundDrawable.getBorderRadius();
            if (borderRadius != null && borderRadius.hasRoundedBorders()) {
                Path createPaddingBoxPath = backgroundStyleApplicator.createPaddingBoxPath(view, compositeBackgroundDrawable, rectF2, rectF);
                createPaddingBoxPath.offset(rect.left, rect.top);
                canvas.clipPath(createPaddingBoxPath);
                return;
            }
            rectF2.offset(rect.left, rect.top);
            canvas.clipRect(rectF2);
            return;
        }
        Rect rect2 = new Rect();
        view.getDrawingRect(rect2);
        CSSBackgroundDrawable cSSBackground = INSTANCE.getCSSBackground(view);
        if (cSSBackground == null) {
            canvas.clipRect(rect2);
            return;
        }
        Path paddingBoxPath = cSSBackground.getPaddingBoxPath();
        if (paddingBoxPath != null) {
            paddingBoxPath.offset(rect2.left, rect2.top);
            canvas.clipPath(paddingBoxPath);
            return;
        }
        RectF paddingBoxRect = cSSBackground.getPaddingBoxRect();
        Intrinsics.checkNotNullExpressionValue(paddingBoxRect, "getPaddingBoxRect(...)");
        paddingBoxRect.offset(rect2.left, rect2.top);
        canvas.clipRect(paddingBoxRect);
    }

    private final Path createPaddingBoxPath(View view, CompositeBackgroundDrawable compositeBackgroundDrawable, RectF rectF, RectF rectF2) {
        ComputedBorderRadius computedBorderRadius;
        Float f10;
        Float f11;
        Float f12;
        Float f13;
        Float f14;
        Float f15;
        Float f16;
        Float f17;
        Float f18;
        Float f19;
        Float f20;
        Float f21;
        Float f22;
        Float f23;
        Float f24;
        CornerRadii bottomLeft;
        CornerRadii bottomLeft2;
        CornerRadii bottomRight;
        CornerRadii bottomRight2;
        CornerRadii topRight;
        CornerRadii topRight2;
        CornerRadii topLeft;
        CornerRadii topLeft2;
        BorderRadiusStyle borderRadius = compositeBackgroundDrawable.getBorderRadius();
        Float f25 = null;
        if (borderRadius != null) {
            int layoutDirection = compositeBackgroundDrawable.getLayoutDirection();
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            computedBorderRadius = borderRadius.resolve(layoutDirection, context, PixelUtil.toDIPFromPixel(compositeBackgroundDrawable.getBounds().width()), PixelUtil.toDIPFromPixel(compositeBackgroundDrawable.getBounds().height()));
        } else {
            computedBorderRadius = null;
        }
        Path path = new Path();
        if (computedBorderRadius != null && (topLeft2 = computedBorderRadius.getTopLeft()) != null) {
            f10 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(topLeft2.getHorizontal()));
        } else {
            f10 = null;
        }
        if (rectF2 != null) {
            f11 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.left));
        } else {
            f11 = null;
        }
        float innerBorderRadius = getInnerBorderRadius(f10, f11);
        if (computedBorderRadius != null && (topLeft = computedBorderRadius.getTopLeft()) != null) {
            f12 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(topLeft.getVertical()));
        } else {
            f12 = null;
        }
        if (rectF2 != null) {
            f13 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.top));
        } else {
            f13 = null;
        }
        float innerBorderRadius2 = getInnerBorderRadius(f12, f13);
        if (computedBorderRadius != null && (topRight2 = computedBorderRadius.getTopRight()) != null) {
            f14 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(topRight2.getHorizontal()));
        } else {
            f14 = null;
        }
        if (rectF2 != null) {
            f15 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.right));
        } else {
            f15 = null;
        }
        float innerBorderRadius3 = getInnerBorderRadius(f14, f15);
        if (computedBorderRadius != null && (topRight = computedBorderRadius.getTopRight()) != null) {
            f16 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(topRight.getVertical()));
        } else {
            f16 = null;
        }
        if (rectF2 != null) {
            f17 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.top));
        } else {
            f17 = null;
        }
        float innerBorderRadius4 = getInnerBorderRadius(f16, f17);
        if (computedBorderRadius != null && (bottomRight2 = computedBorderRadius.getBottomRight()) != null) {
            f18 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(bottomRight2.getHorizontal()));
        } else {
            f18 = null;
        }
        if (rectF2 != null) {
            f19 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.right));
        } else {
            f19 = null;
        }
        float innerBorderRadius5 = getInnerBorderRadius(f18, f19);
        if (computedBorderRadius != null && (bottomRight = computedBorderRadius.getBottomRight()) != null) {
            f20 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(bottomRight.getVertical()));
        } else {
            f20 = null;
        }
        if (rectF2 != null) {
            f21 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.bottom));
        } else {
            f21 = null;
        }
        float innerBorderRadius6 = getInnerBorderRadius(f20, f21);
        if (computedBorderRadius != null && (bottomLeft2 = computedBorderRadius.getBottomLeft()) != null) {
            f22 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(bottomLeft2.getHorizontal()));
        } else {
            f22 = null;
        }
        if (rectF2 != null) {
            f23 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.left));
        } else {
            f23 = null;
        }
        float innerBorderRadius7 = getInnerBorderRadius(f22, f23);
        if (computedBorderRadius != null && (bottomLeft = computedBorderRadius.getBottomLeft()) != null) {
            f24 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(bottomLeft.getVertical()));
        } else {
            f24 = null;
        }
        if (rectF2 != null) {
            f25 = Float.valueOf(PixelUtil.INSTANCE.dpToPx(rectF2.bottom));
        }
        path.addRoundRect(rectF, new float[]{innerBorderRadius, innerBorderRadius2, innerBorderRadius3, innerBorderRadius4, innerBorderRadius5, innerBorderRadius6, innerBorderRadius7, getInnerBorderRadius(f24, f25)}, Path.Direction.CW);
        return path;
    }

    private final BackgroundDrawable ensureBackgroundDrawable(View view) {
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = ensureCompositeBackgroundDrawable(view);
        BackgroundDrawable background = ensureCompositeBackgroundDrawable.getBackground();
        if (background != null) {
            return background;
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        BackgroundDrawable backgroundDrawable = new BackgroundDrawable(context, ensureCompositeBackgroundDrawable.getBorderRadius(), ensureCompositeBackgroundDrawable.getBorderInsets());
        view.setBackground(ensureCompositeBackgroundDrawable.withNewBackground(backgroundDrawable));
        return backgroundDrawable;
    }

    private final BorderDrawable ensureBorderDrawable(View view) {
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = ensureCompositeBackgroundDrawable(view);
        BorderDrawable border = ensureCompositeBackgroundDrawable.getBorder();
        if (border == null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            BorderRadiusStyle borderRadius = ensureCompositeBackgroundDrawable.getBorderRadius();
            BorderDrawable borderDrawable = new BorderDrawable(context, new Spacing(0.0f), borderRadius, ensureCompositeBackgroundDrawable.getBorderInsets(), BorderStyle.SOLID);
            view.setBackground(ensureCompositeBackgroundDrawable.withNewBorder(borderDrawable));
            return borderDrawable;
        }
        return border;
    }

    private final CSSBackgroundDrawable ensureCSSBackground(View view) {
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = ensureCompositeBackgroundDrawable(view);
        CSSBackgroundDrawable cssBackground = ensureCompositeBackgroundDrawable.getCssBackground();
        if (cssBackground != null) {
            return cssBackground;
        }
        CSSBackgroundDrawable cSSBackgroundDrawable = new CSSBackgroundDrawable(view.getContext());
        view.setBackground(ensureCompositeBackgroundDrawable.withNewCssBackground(cSSBackgroundDrawable));
        return cSSBackgroundDrawable;
    }

    private final CompositeBackgroundDrawable ensureCompositeBackgroundDrawable(View view) {
        if (view.getBackground() instanceof CompositeBackgroundDrawable) {
            Drawable background = view.getBackground();
            Intrinsics.checkNotNull(background, "null cannot be cast to non-null type com.facebook.react.uimanager.drawable.CompositeBackgroundDrawable");
            return (CompositeBackgroundDrawable) background;
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        CompositeBackgroundDrawable compositeBackgroundDrawable = new CompositeBackgroundDrawable(context, view.getBackground(), null, null, null, null, null, null, null, null, null, 2044, null);
        view.setBackground(compositeBackgroundDrawable);
        return compositeBackgroundDrawable;
    }

    private final OutlineDrawable ensureOutlineDrawable(View view) {
        BorderRadiusStyle borderRadius;
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = ensureCompositeBackgroundDrawable(view);
        OutlineDrawable outline = ensureCompositeBackgroundDrawable.getOutline();
        if (outline == null) {
            if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
                borderRadius = ensureCompositeBackgroundDrawable.getBorderRadius();
            } else {
                borderRadius = ensureCSSBackground(view).getBorderRadius();
            }
            BorderRadiusStyle borderRadiusStyle = borderRadius;
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            OutlineDrawable outlineDrawable = new OutlineDrawable(context, borderRadiusStyle, -16777216, 0.0f, OutlineStyle.SOLID, 0.0f);
            view.setBackground(ensureCompositeBackgroundDrawable.withNewOutline(outlineDrawable));
            return outlineDrawable;
        }
        return outline;
    }

    private final BackgroundDrawable getBackground(View view) {
        CompositeBackgroundDrawable compositeBackgroundDrawable = getCompositeBackgroundDrawable(view);
        if (compositeBackgroundDrawable != null) {
            return compositeBackgroundDrawable.getBackground();
        }
        return null;
    }

    public static final Integer getBackgroundColor(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            BackgroundDrawable background = INSTANCE.getBackground(view);
            if (background == null) {
                return null;
            }
            return Integer.valueOf(background.getBackgroundColor());
        }
        CSSBackgroundDrawable cSSBackground = INSTANCE.getCSSBackground(view);
        if (cSSBackground == null) {
            return null;
        }
        return Integer.valueOf(cSSBackground.getColor());
    }

    private final BorderDrawable getBorder(View view) {
        CompositeBackgroundDrawable compositeBackgroundDrawable = getCompositeBackgroundDrawable(view);
        if (compositeBackgroundDrawable != null) {
            return compositeBackgroundDrawable.getBorder();
        }
        return null;
    }

    public static final Integer getBorderColor(@NotNull View view, @NotNull LogicalEdge edge) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(edge, "edge");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            BorderDrawable border = INSTANCE.getBorder(view);
            if (border == null) {
                return null;
            }
            return Integer.valueOf(border.getBorderColor(edge));
        }
        CSSBackgroundDrawable cSSBackground = INSTANCE.getCSSBackground(view);
        if (cSSBackground == null) {
            return null;
        }
        return Integer.valueOf(cSSBackground.getBorderColor(edge.toSpacingType()));
    }

    public static final LengthPercentage getBorderRadius(@NotNull View view, @NotNull BorderRadiusProp corner) {
        BorderRadiusStyle borderRadius;
        BorderRadiusStyle borderRadius2;
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(corner, "corner");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            CompositeBackgroundDrawable compositeBackgroundDrawable = INSTANCE.getCompositeBackgroundDrawable(view);
            if (compositeBackgroundDrawable == null || (borderRadius2 = compositeBackgroundDrawable.getBorderRadius()) == null) {
                return null;
            }
            return borderRadius2.get(corner);
        }
        CSSBackgroundDrawable cSSBackground = INSTANCE.getCSSBackground(view);
        if (cSSBackground == null || (borderRadius = cSSBackground.getBorderRadius()) == null) {
            return null;
        }
        return borderRadius.get(corner);
    }

    public static final BorderStyle getBorderStyle(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            BorderDrawable border = INSTANCE.getBorder(view);
            if (border == null) {
                return null;
            }
            return border.getBorderStyle();
        }
        CSSBackgroundDrawable cSSBackground = INSTANCE.getCSSBackground(view);
        if (cSSBackground == null) {
            return null;
        }
        return cSSBackground.getBorderStyle();
    }

    public static final Float getBorderWidth(@NotNull View view, @NotNull LogicalEdge edge) {
        Float f10;
        Float f11;
        Spacing borderWidth;
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(edge, "edge");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            BorderDrawable border = INSTANCE.getBorder(view);
            if (border != null && (borderWidth = border.getBorderWidth()) != null) {
                f11 = Float.valueOf(borderWidth.getRaw(edge.toSpacingType()));
            } else {
                f11 = null;
            }
            if (f11 == null || Float.isNaN(f11.floatValue())) {
                return null;
            }
            return Float.valueOf(PixelUtil.INSTANCE.pxToDp(f11.floatValue()));
        }
        CSSBackgroundDrawable cSSBackground = INSTANCE.getCSSBackground(view);
        if (cSSBackground != null) {
            f10 = cSSBackground.getBorderWidth(edge.toSpacingType());
        } else {
            f10 = null;
        }
        if (f10 == null || Float.isNaN(f10.floatValue())) {
            return null;
        }
        return Float.valueOf(PixelUtil.INSTANCE.pxToDp(f10.floatValue()));
    }

    private final CSSBackgroundDrawable getCSSBackground(View view) {
        CompositeBackgroundDrawable compositeBackgroundDrawable = getCompositeBackgroundDrawable(view);
        if (compositeBackgroundDrawable != null) {
            return compositeBackgroundDrawable.getCssBackground();
        }
        return null;
    }

    private final CompositeBackgroundDrawable getCompositeBackgroundDrawable(View view) {
        Drawable background = view.getBackground();
        if (background instanceof CompositeBackgroundDrawable) {
            return (CompositeBackgroundDrawable) background;
        }
        return null;
    }

    private final float getInnerBorderRadius(Float f10, Float f11) {
        float f12;
        float f13;
        if (f10 != null) {
            f12 = f10.floatValue();
        } else {
            f12 = 0.0f;
        }
        if (f11 != null) {
            f13 = f11.floatValue();
        } else {
            f13 = 0.0f;
        }
        return kotlin.ranges.d.c(f12 - f13, 0.0f);
    }

    public static final Integer getOutlineColor(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        OutlineDrawable outlineDrawable = INSTANCE.getOutlineDrawable(view);
        if (outlineDrawable != null) {
            return Integer.valueOf(outlineDrawable.getOutlineColor());
        }
        return null;
    }

    private final OutlineDrawable getOutlineDrawable(View view) {
        CompositeBackgroundDrawable compositeBackgroundDrawable = getCompositeBackgroundDrawable(view);
        if (compositeBackgroundDrawable != null) {
            return compositeBackgroundDrawable.getOutline();
        }
        return null;
    }

    public static final void reset(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (view.getBackground() instanceof CompositeBackgroundDrawable) {
            Drawable background = view.getBackground();
            Intrinsics.checkNotNull(background, "null cannot be cast to non-null type com.facebook.react.uimanager.drawable.CompositeBackgroundDrawable");
            view.setBackground(((CompositeBackgroundDrawable) background).getOriginalBackground());
        }
    }

    public static final void setBackgroundColor(@NotNull View view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        if ((num == null || num.intValue() == 0) && !(view.getBackground() instanceof CompositeBackgroundDrawable)) {
            return;
        }
        int i10 = 0;
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            BackgroundDrawable ensureBackgroundDrawable = INSTANCE.ensureBackgroundDrawable(view);
            if (num != null) {
                i10 = num.intValue();
            }
            ensureBackgroundDrawable.setBackgroundColor(i10);
            return;
        }
        CSSBackgroundDrawable ensureCSSBackground = INSTANCE.ensureCSSBackground(view);
        if (num != null) {
            i10 = num.intValue();
        }
        ensureCSSBackground.setColor(i10);
    }

    public static final void setBackgroundImage(@NotNull View view, List<BackgroundImageLayer> list) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            INSTANCE.ensureBackgroundDrawable(view).setBackgroundImageLayers(list);
        } else {
            INSTANCE.ensureCSSBackground(view).setBackgroundImage(list);
        }
    }

    public static final void setBorderColor(@NotNull View view, @NotNull LogicalEdge edge, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(edge, "edge");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            INSTANCE.ensureBorderDrawable(view).setBorderColor(edge, num);
        } else {
            INSTANCE.ensureCSSBackground(view).setBorderColor(edge.toSpacingType(), num);
        }
    }

    public static final void setBorderRadius(@NotNull View view, @NotNull BorderRadiusProp corner, LengthPercentage lengthPercentage) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(corner, "corner");
        BackgroundStyleApplicator backgroundStyleApplicator = INSTANCE;
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = backgroundStyleApplicator.ensureCompositeBackgroundDrawable(view);
        BorderRadiusStyle borderRadius = ensureCompositeBackgroundDrawable.getBorderRadius();
        if (borderRadius == null) {
            borderRadius = new BorderRadiusStyle(null, null, null, null, null, null, null, null, null, null, null, null, null, 8191, null);
        }
        ensureCompositeBackgroundDrawable.setBorderRadius(borderRadius);
        BorderRadiusStyle borderRadius2 = ensureCompositeBackgroundDrawable.getBorderRadius();
        if (borderRadius2 != null) {
            borderRadius2.set(corner, lengthPercentage);
        }
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            if (view instanceof ImageView) {
                backgroundStyleApplicator.ensureBackgroundDrawable(view);
            }
            BackgroundDrawable background = ensureCompositeBackgroundDrawable.getBackground();
            if (background != null) {
                background.setBorderRadius(ensureCompositeBackgroundDrawable.getBorderRadius());
            }
            BorderDrawable border = ensureCompositeBackgroundDrawable.getBorder();
            if (border != null) {
                border.setBorderRadius(ensureCompositeBackgroundDrawable.getBorderRadius());
            }
            BackgroundDrawable background2 = ensureCompositeBackgroundDrawable.getBackground();
            if (background2 != null) {
                background2.invalidateSelf();
            }
            BorderDrawable border2 = ensureCompositeBackgroundDrawable.getBorder();
            if (border2 != null) {
                border2.invalidateSelf();
            }
        } else {
            backgroundStyleApplicator.ensureCSSBackground(view).setBorderRadius(corner, lengthPercentage);
        }
        if (Build.VERSION.SDK_INT >= 28) {
            ArrayList<OutsetBoxShadowDrawable> arrayList = new ArrayList();
            for (Object obj : ensureCompositeBackgroundDrawable.getOuterShadows()) {
                if (obj instanceof OutsetBoxShadowDrawable) {
                    arrayList.add(obj);
                }
            }
            for (OutsetBoxShadowDrawable outsetBoxShadowDrawable : arrayList) {
                outsetBoxShadowDrawable.setBorderRadius(ensureCompositeBackgroundDrawable.getBorderRadius());
            }
        }
        if (Build.VERSION.SDK_INT >= 29) {
            ArrayList<InsetBoxShadowDrawable> arrayList2 = new ArrayList();
            for (Object obj2 : ensureCompositeBackgroundDrawable.getInnerShadows()) {
                if (obj2 instanceof InsetBoxShadowDrawable) {
                    arrayList2.add(obj2);
                }
            }
            for (InsetBoxShadowDrawable insetBoxShadowDrawable : arrayList2) {
                insetBoxShadowDrawable.setBorderRadius(ensureCompositeBackgroundDrawable.getBorderRadius());
            }
        }
        OutlineDrawable outline = ensureCompositeBackgroundDrawable.getOutline();
        if (outline != null) {
            outline.setBorderRadius(ensureCompositeBackgroundDrawable.getBorderRadius());
        }
        ensureCompositeBackgroundDrawable.invalidateSelf();
    }

    public static final void setBorderStyle(@NotNull View view, BorderStyle borderStyle) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            INSTANCE.ensureBorderDrawable(view).setBorderStyle(borderStyle);
        } else {
            INSTANCE.ensureCSSBackground(view).setBorderStyle(borderStyle);
        }
    }

    public static final void setBorderWidth(@NotNull View view, @NotNull LogicalEdge edge, Float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(edge, "edge");
        BackgroundStyleApplicator backgroundStyleApplicator = INSTANCE;
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = backgroundStyleApplicator.ensureCompositeBackgroundDrawable(view);
        BorderInsets borderInsets = ensureCompositeBackgroundDrawable.getBorderInsets();
        if (borderInsets == null) {
            borderInsets = new BorderInsets();
        }
        ensureCompositeBackgroundDrawable.setBorderInsets(borderInsets);
        BorderInsets borderInsets2 = ensureCompositeBackgroundDrawable.getBorderInsets();
        if (borderInsets2 != null) {
            borderInsets2.setBorderWidth(edge, f10);
        }
        float f11 = Float.NaN;
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            BorderDrawable ensureBorderDrawable = backgroundStyleApplicator.ensureBorderDrawable(view);
            int spacingType = edge.toSpacingType();
            if (f10 != null) {
                f11 = PixelUtil.INSTANCE.dpToPx(f10.floatValue());
            }
            ensureBorderDrawable.setBorderWidth(spacingType, f11);
            BackgroundDrawable background = ensureCompositeBackgroundDrawable.getBackground();
            if (background != null) {
                background.setBorderInsets(ensureCompositeBackgroundDrawable.getBorderInsets());
            }
            BorderDrawable border = ensureCompositeBackgroundDrawable.getBorder();
            if (border != null) {
                border.setBorderInsets(ensureCompositeBackgroundDrawable.getBorderInsets());
            }
            BackgroundDrawable background2 = ensureCompositeBackgroundDrawable.getBackground();
            if (background2 != null) {
                background2.invalidateSelf();
            }
            BorderDrawable border2 = ensureCompositeBackgroundDrawable.getBorder();
            if (border2 != null) {
                border2.invalidateSelf();
            }
        } else {
            CSSBackgroundDrawable ensureCSSBackground = backgroundStyleApplicator.ensureCSSBackground(view);
            int spacingType2 = edge.toSpacingType();
            if (f10 != null) {
                f11 = PixelUtil.INSTANCE.dpToPx(f10.floatValue());
            }
            ensureCSSBackground.setBorderWidth(spacingType2, f11);
        }
        BorderInsets borderInsets3 = ensureCompositeBackgroundDrawable.getBorderInsets();
        if (borderInsets3 == null) {
            borderInsets3 = new BorderInsets();
        }
        ensureCompositeBackgroundDrawable.setBorderInsets(borderInsets3);
        BorderInsets borderInsets4 = ensureCompositeBackgroundDrawable.getBorderInsets();
        if (borderInsets4 != null) {
            borderInsets4.setBorderWidth(edge, f10);
        }
        if (Build.VERSION.SDK_INT >= 29) {
            ArrayList<InsetBoxShadowDrawable> arrayList = new ArrayList();
            for (Object obj : ensureCompositeBackgroundDrawable.getInnerShadows()) {
                if (obj instanceof InsetBoxShadowDrawable) {
                    arrayList.add(obj);
                }
            }
            for (InsetBoxShadowDrawable insetBoxShadowDrawable : arrayList) {
                insetBoxShadowDrawable.setBorderInsets(ensureCompositeBackgroundDrawable.getBorderInsets());
            }
        }
    }

    public static final void setBoxShadow(@NotNull View view, @NotNull List<BoxShadow> shadows) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(shadows, "shadows");
        if (ViewUtil.getUIManagerType(view) != 2) {
            return;
        }
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        CompositeBackgroundDrawable ensureCompositeBackgroundDrawable = INSTANCE.ensureCompositeBackgroundDrawable(view);
        BorderInsets borderInsets = ensureCompositeBackgroundDrawable.getBorderInsets();
        BorderRadiusStyle borderRadius = ensureCompositeBackgroundDrawable.getBorderRadius();
        for (BoxShadow boxShadow : shadows) {
            float offsetX = boxShadow.getOffsetX();
            float offsetY = boxShadow.getOffsetY();
            Integer color = boxShadow.getColor();
            int intValue = color != null ? color.intValue() : -16777216;
            Float blurRadius = boxShadow.getBlurRadius();
            float floatValue = blurRadius != null ? blurRadius.floatValue() : 0.0f;
            Float spreadDistance = boxShadow.getSpreadDistance();
            float floatValue2 = spreadDistance != null ? spreadDistance.floatValue() : 0.0f;
            Boolean inset = boxShadow.getInset();
            boolean booleanValue = inset != null ? inset.booleanValue() : false;
            if (booleanValue && Build.VERSION.SDK_INT >= 29) {
                Context context = view.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                arrayList.add(new InsetBoxShadowDrawable(context, intValue, offsetX, offsetY, floatValue, floatValue2, borderInsets, borderRadius));
            } else if (!booleanValue && Build.VERSION.SDK_INT >= 28) {
                Context context2 = view.getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                arrayList2.add(new OutsetBoxShadowDrawable(context2, intValue, offsetX, offsetY, floatValue, floatValue2, borderRadius));
            }
        }
        view.setBackground(INSTANCE.ensureCompositeBackgroundDrawable(view).withNewShadows(arrayList2, arrayList));
    }

    public static final void setFeedbackUnderlay(@NotNull View view, Drawable drawable) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ReactNativeFeatureFlags.enableNewBackgroundAndBorderDrawables()) {
            INSTANCE.ensureCompositeBackgroundDrawable(view).withNewFeedbackUnderlay(drawable);
        } else {
            view.setBackground(INSTANCE.ensureCompositeBackgroundDrawable(view).withNewFeedbackUnderlay(drawable));
        }
    }

    public static final void setOutlineColor(@NotNull View view, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ViewUtil.getUIManagerType(view) == 2) {
            OutlineDrawable ensureOutlineDrawable = INSTANCE.ensureOutlineDrawable(view);
            if (num != null) {
                ensureOutlineDrawable.setOutlineColor(num.intValue());
            }
        }
    }

    public static final void setOutlineOffset(@NotNull View view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ViewUtil.getUIManagerType(view) != 2) {
            return;
        }
        INSTANCE.ensureOutlineDrawable(view).setOutlineOffset(PixelUtil.INSTANCE.dpToPx(f10));
    }

    public static final void setOutlineStyle(@NotNull View view, OutlineStyle outlineStyle) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ViewUtil.getUIManagerType(view) == 2) {
            OutlineDrawable ensureOutlineDrawable = INSTANCE.ensureOutlineDrawable(view);
            if (outlineStyle != null) {
                ensureOutlineDrawable.setOutlineStyle(outlineStyle);
            }
        }
    }

    public static final void setOutlineWidth(@NotNull View view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (ViewUtil.getUIManagerType(view) != 2) {
            return;
        }
        INSTANCE.ensureOutlineDrawable(view).setOutlineWidth(PixelUtil.INSTANCE.dpToPx(f10));
    }

    public final Float getOutlineOffset(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        OutlineDrawable outlineDrawable = getOutlineDrawable(view);
        if (outlineDrawable != null) {
            return Float.valueOf(outlineDrawable.getOutlineOffset());
        }
        return null;
    }

    public final OutlineStyle getOutlineStyle(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        OutlineDrawable outlineDrawable = getOutlineDrawable(view);
        if (outlineDrawable != null) {
            return outlineDrawable.getOutlineStyle();
        }
        return null;
    }

    public final Float getOutlineWidth(@NotNull View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        OutlineDrawable outlineDrawable = getOutlineDrawable(view);
        if (outlineDrawable != null) {
            return Float.valueOf(outlineDrawable.getOutlineOffset());
        }
        return null;
    }

    public static final void setBoxShadow(@NotNull View view, ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (readableArray == null) {
            setBoxShadow(view, CollectionsKt.l());
            return;
        }
        ArrayList arrayList = new ArrayList();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            BoxShadow.Companion companion = BoxShadow.Companion;
            ReadableMap map = readableArray.getMap(i10);
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            BoxShadow parse = companion.parse(map, context);
            if (parse == null) {
                throw new IllegalStateException("Required value was null.");
            }
            arrayList.add(parse);
        }
        setBoxShadow(view, arrayList);
    }
}
