package com.facebook.react.uimanager.drawable;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.DashPathEffect;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathEffect;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import com.facebook.react.uimanager.FloatUtil;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.Spacing;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.style.BorderColors;
import com.facebook.react.uimanager.style.BorderInsets;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderRadiusStyle;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.ColorEdges;
import com.facebook.react.uimanager.style.ComputedBorderRadius;
import com.facebook.react.uimanager.style.CornerRadii;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import fs.a;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.properties.ReadWriteProperty;
import kotlin.properties.c;
import kotlin.ranges.d;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
import qr.p;
@Metadata(d1 = {"\u0000Ä\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\f\b\u0000\u0018\u00002\u00020\u0001B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rJ)\u0010\u0018\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u001a\u0012\u0004\u0012\u0002H\u001b0\u0019\"\u0004\b\u0000\u0010\u001b2\u0006\u0010\u001c\u001a\u0002H\u001bH\u0002¢\u0006\u0002\u0010\u001dJ\b\u0010G\u001a\u00020HH\u0016J\u0010\u0010I\u001a\u00020H2\u0006\u0010J\u001a\u00020KH\u0014J\u0010\u0010L\u001a\u00020H2\u0006\u0010M\u001a\u00020-H\u0016J\u0012\u0010N\u001a\u00020H2\b\u0010O\u001a\u0004\u0018\u00010PH\u0016J\b\u0010Q\u001a\u00020-H\u0017J\u0010\u0010R\u001a\u00020H2\u0006\u0010S\u001a\u00020TH\u0016J\u0018\u0010U\u001a\u00020/2\u0006\u0010V\u001a\u00020/2\u0006\u0010\u0004\u001a\u00020/H\u0002J\u0016\u0010W\u001a\u00020H2\u0006\u0010X\u001a\u00020-2\u0006\u0010Y\u001a\u00020/J\u0018\u0010\u0012\u001a\u00020H2\u0006\u0010Z\u001a\u00020[2\b\u0010\\\u001a\u0004\u0018\u00010]J\u0010\u0010!\u001a\u00020H2\b\u0010^\u001a\u0004\u0018\u00010_J\u001d\u0010`\u001a\u00020H2\u0006\u0010X\u001a\u00020a2\b\u0010b\u001a\u0004\u0018\u00010-¢\u0006\u0002\u0010cJ\u000e\u0010d\u001a\u00020-2\u0006\u0010X\u001a\u00020aJ\u0010\u0010e\u001a\u00020H2\u0006\u0010S\u001a\u00020TH\u0002J\u0010\u0010f\u001a\u00020H2\u0006\u0010S\u001a\u00020TH\u0002JH\u0010g\u001a\u00020-2\u0006\u0010h\u001a\u00020-2\u0006\u0010i\u001a\u00020-2\u0006\u0010j\u001a\u00020-2\u0006\u0010k\u001a\u00020-2\u0006\u0010l\u001a\u00020-2\u0006\u0010m\u001a\u00020-2\u0006\u0010n\u001a\u00020-2\u0006\u0010o\u001a\u00020-H\u0002JX\u0010p\u001a\u00020H2\u0006\u0010S\u001a\u00020T2\u0006\u0010q\u001a\u00020-2\u0006\u0010r\u001a\u00020/2\u0006\u0010s\u001a\u00020/2\u0006\u0010t\u001a\u00020/2\u0006\u0010u\u001a\u00020/2\u0006\u0010v\u001a\u00020/2\u0006\u0010w\u001a\u00020/2\u0006\u0010x\u001a\u00020/2\u0006\u0010y\u001a\u00020/H\u0002J\b\u0010z\u001a\u00020DH\u0002J\b\u0010{\u001a\u00020/H\u0002J\b\u0010|\u001a\u00020HH\u0002J\u0010\u0010|\u001a\u00020H2\u0006\u0010\u0004\u001a\u00020-H\u0002J\u001a\u0010}\u001a\u0004\u0018\u00010~2\u0006\u0010^\u001a\u00020\u000b2\u0006\u0010\u0004\u001a\u00020/H\u0002Ja\u0010\u007f\u001a\u00020H2\b\u0010\u0080\u0001\u001a\u00030\u0081\u00012\b\u0010\u0082\u0001\u001a\u00030\u0081\u00012\b\u0010\u0083\u0001\u001a\u00030\u0081\u00012\b\u0010\u0084\u0001\u001a\u00030\u0081\u00012\b\u0010\u0085\u0001\u001a\u00030\u0081\u00012\b\u0010\u0086\u0001\u001a\u00030\u0081\u00012\b\u0010\u0087\u0001\u001a\u00030\u0081\u00012\b\u0010\u0088\u0001\u001a\u00030\u0081\u00012\u0007\u0010\u0089\u0001\u001a\u00020?H\u0002J\t\u0010\u008a\u0001\u001a\u00020HH\u0002J\u001a\u0010\u008b\u0001\u001a\u00020-2\u0006\u0010b\u001a\u00020-2\u0007\u0010\u008c\u0001\u001a\u00020-H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u001c\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013R\u001c\u0010\b\u001a\u0004\u0018\u00010\tX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017R/\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\u0010\u001e\u001a\u0004\u0018\u00010\u000b8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b#\u0010$\u001a\u0004\b\u001f\u0010 \"\u0004\b!\u0010\"R\u0012\u0010%\u001a\u0004\u0018\u00010&X\u0082\u000e¢\u0006\u0004\n\u0002\u0010'R\u000e\u0010(\u001a\u00020)X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010*\u001a\u0004\u0018\u00010+X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010,\u001a\u00020-X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010.\u001a\u00020/X\u0082D¢\u0006\u0002\n\u0000R\u0010\u00100\u001a\u0004\u0018\u000101X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u00102\u001a\u000203X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u00104\u001a\u000205X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u00106\u001a\u0004\u0018\u000101X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u00107\u001a\u0004\u0018\u000101X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u00108\u001a\u0004\u0018\u000101X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u00109\u001a\u0004\u0018\u000101X\u0082\u000e¢\u0006\u0002\n\u0000R\"\u0010;\u001a\u0004\u0018\u0001012\b\u0010:\u001a\u0004\u0018\u000101@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b<\u0010=R\u0010\u0010>\u001a\u0004\u0018\u00010?X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010@\u001a\u0004\u0018\u00010?X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010A\u001a\u0004\u0018\u00010?X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010B\u001a\u0004\u0018\u00010?X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010C\u001a\u0004\u0018\u00010DX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010E\u001a\u0004\u0018\u00010DX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010F\u001a\u0004\u0018\u00010DX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u008d\u0001"}, d2 = {"Lcom/facebook/react/uimanager/drawable/BorderDrawable;", "Landroid/graphics/drawable/Drawable;", "context", "Landroid/content/Context;", ViewProps.BORDER_WIDTH, "Lcom/facebook/react/uimanager/Spacing;", "borderRadius", "Lcom/facebook/react/uimanager/style/BorderRadiusStyle;", "borderInsets", "Lcom/facebook/react/uimanager/style/BorderInsets;", "borderStyle", "Lcom/facebook/react/uimanager/style/BorderStyle;", "<init>", "(Landroid/content/Context;Lcom/facebook/react/uimanager/Spacing;Lcom/facebook/react/uimanager/style/BorderRadiusStyle;Lcom/facebook/react/uimanager/style/BorderInsets;Lcom/facebook/react/uimanager/style/BorderStyle;)V", "getBorderWidth", "()Lcom/facebook/react/uimanager/Spacing;", "getBorderRadius", "()Lcom/facebook/react/uimanager/style/BorderRadiusStyle;", "setBorderRadius", "(Lcom/facebook/react/uimanager/style/BorderRadiusStyle;)V", "getBorderInsets", "()Lcom/facebook/react/uimanager/style/BorderInsets;", "setBorderInsets", "(Lcom/facebook/react/uimanager/style/BorderInsets;)V", "invalidatingAndPathChange", "Lkotlin/properties/ReadWriteProperty;", "", "T", "initialValue", "(Ljava/lang/Object;)Lkotlin/properties/ReadWriteProperty;", "<set-?>", "getBorderStyle", "()Lcom/facebook/react/uimanager/style/BorderStyle;", "setBorderStyle", "(Lcom/facebook/react/uimanager/style/BorderStyle;)V", "borderStyle$delegate", "Lkotlin/properties/ReadWriteProperty;", "borderColors", "Lcom/facebook/react/uimanager/style/BorderColors;", "[Ljava/lang/Integer;", "computedBorderColors", "Lcom/facebook/react/uimanager/style/ColorEdges;", "computedBorderRadius", "Lcom/facebook/react/uimanager/style/ComputedBorderRadius;", "borderAlpha", "", "gapBetweenPaths", "", "pathForBorder", "Landroid/graphics/Path;", "borderPaint", "Landroid/graphics/Paint;", "needUpdatePath", "", "pathForSingleBorder", "pathForOutline", "centerDrawPath", "outerClipPathForBorderRadius", "value", "innerClipPathForBorderRadius", "getInnerClipPathForBorderRadius", "()Landroid/graphics/Path;", "innerBottomLeftCorner", "Landroid/graphics/PointF;", "innerBottomRightCorner", "innerTopLeftCorner", "innerTopRightCorner", "innerClipTempRectForBorderRadius", "Landroid/graphics/RectF;", "outerClipTempRectForBorderRadius", "tempRectForCenterDrawPath", "invalidateSelf", "", "onBoundsChange", "bounds", "Landroid/graphics/Rect;", "setAlpha", "alpha", "setColorFilter", "colorFilter", "Landroid/graphics/ColorFilter;", "getOpacity", "draw", "canvas", "Landroid/graphics/Canvas;", "getInnerBorderRadius", "computedRadius", "setBorderWidth", ViewProps.POSITION, "width", "property", "Lcom/facebook/react/uimanager/style/BorderRadiusProp;", "radius", "Lcom/facebook/react/uimanager/LengthPercentage;", "style", "", "setBorderColor", "Lcom/facebook/react/uimanager/style/LogicalEdge;", ViewProps.COLOR, "(Lcom/facebook/react/uimanager/style/LogicalEdge;Ljava/lang/Integer;)V", "getBorderColor", "drawRectangularBorders", "drawRoundedBorders", "fastBorderCompatibleColorOrZero", "borderLeft", "borderTop", "borderRight", "borderBottom", "colorLeft", "colorTop", "colorRight", "colorBottom", "drawQuadrilateral", "fillColor", "x1", "y1", "x2", "y2", "x3", "y3", "x4", "y4", "computeBorderInsets", "getFullBorderWidth", "updatePathEffect", "getPathEffect", "Landroid/graphics/PathEffect;", "getEllipseIntersectionWithLine", "ellipseBoundsLeft", "", "ellipseBoundsTop", "ellipseBoundsRight", "ellipseBoundsBottom", "lineStartX", "lineStartY", "lineEndX", "lineEndY", "result", "updatePath", "multiplyColorAlpha", "rawAlpha", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBorderDrawable.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BorderDrawable.kt\ncom/facebook/react/uimanager/drawable/BorderDrawable\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,1075:1\n1#2:1076\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BorderDrawable extends Drawable {
    static final /* synthetic */ KProperty[] $$delegatedProperties = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(BorderDrawable.class, "borderStyle", "getBorderStyle()Lcom/facebook/react/uimanager/style/BorderStyle;", 0))};
    private int borderAlpha;
    private Integer[] borderColors;
    private BorderInsets borderInsets;
    @NotNull
    private final Paint borderPaint;
    private BorderRadiusStyle borderRadius;
    @NotNull
    private final ReadWriteProperty borderStyle$delegate;
    private final Spacing borderWidth;
    private Path centerDrawPath;
    @NotNull
    private ColorEdges computedBorderColors;
    private ComputedBorderRadius computedBorderRadius;
    @NotNull
    private final Context context;
    private final float gapBetweenPaths;
    private PointF innerBottomLeftCorner;
    private PointF innerBottomRightCorner;
    private Path innerClipPathForBorderRadius;
    private RectF innerClipTempRectForBorderRadius;
    private PointF innerTopLeftCorner;
    private PointF innerTopRightCorner;
    private boolean needUpdatePath;
    private Path outerClipPathForBorderRadius;
    private RectF outerClipTempRectForBorderRadius;
    private Path pathForBorder;
    private Path pathForOutline;
    private Path pathForSingleBorder;
    private RectF tempRectForCenterDrawPath;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[BorderStyle.values().length];
            try {
                iArr[BorderStyle.SOLID.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[BorderStyle.DASHED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[BorderStyle.DOTTED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public BorderDrawable(@NotNull Context context, Spacing spacing, BorderRadiusStyle borderRadiusStyle, BorderInsets borderInsets, BorderStyle borderStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.context = context;
        this.borderWidth = spacing;
        this.borderRadius = borderRadiusStyle;
        this.borderInsets = borderInsets;
        this.borderStyle$delegate = invalidatingAndPathChange(borderStyle);
        this.computedBorderColors = new ColorEdges(0, 0, 0, 0, 15, null);
        this.borderAlpha = SetSpanOperation.SPAN_MAX_PRIORITY;
        this.gapBetweenPaths = 0.8f;
        this.borderPaint = new Paint(1);
        this.needUpdatePath = true;
    }

    private final RectF computeBorderInsets() {
        RectF resolve;
        float dpToPx;
        float dpToPx2;
        float dpToPx3;
        BorderInsets borderInsets = this.borderInsets;
        float f10 = 0.0f;
        if (borderInsets != null && (resolve = borderInsets.resolve(getLayoutDirection(), this.context)) != null) {
            if (Float.isNaN(resolve.left)) {
                dpToPx = 0.0f;
            } else {
                dpToPx = PixelUtil.INSTANCE.dpToPx(resolve.left);
            }
            if (Float.isNaN(resolve.top)) {
                dpToPx2 = 0.0f;
            } else {
                dpToPx2 = PixelUtil.INSTANCE.dpToPx(resolve.top);
            }
            if (Float.isNaN(resolve.right)) {
                dpToPx3 = 0.0f;
            } else {
                dpToPx3 = PixelUtil.INSTANCE.dpToPx(resolve.right);
            }
            if (!Float.isNaN(resolve.bottom)) {
                f10 = PixelUtil.INSTANCE.dpToPx(resolve.bottom);
            }
            return new RectF(dpToPx, dpToPx2, dpToPx3, f10);
        }
        return new RectF(0.0f, 0.0f, 0.0f, 0.0f);
    }

    private final void drawQuadrilateral(Canvas canvas, int i10, float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        if (i10 != 0) {
            if (this.pathForBorder == null) {
                this.pathForBorder = new Path();
            }
            this.borderPaint.setColor(multiplyColorAlpha(i10, this.borderAlpha));
            Path path = this.pathForBorder;
            if (path != null) {
                path.reset();
            }
            Path path2 = this.pathForBorder;
            if (path2 != null) {
                path2.moveTo(f10, f11);
            }
            Path path3 = this.pathForBorder;
            if (path3 != null) {
                path3.lineTo(f12, f13);
            }
            Path path4 = this.pathForBorder;
            if (path4 != null) {
                path4.lineTo(f14, f15);
            }
            Path path5 = this.pathForBorder;
            if (path5 != null) {
                path5.lineTo(f16, f17);
            }
            Path path6 = this.pathForBorder;
            if (path6 != null) {
                path6.lineTo(f10, f11);
            }
            Path path7 = this.pathForBorder;
            if (path7 != null) {
                canvas.drawPath(path7, this.borderPaint);
            }
        }
    }

    private final void drawRectangularBorders(Canvas canvas) {
        int i10;
        int i11;
        int i12;
        RectF computeBorderInsets = computeBorderInsets();
        int c10 = a.c(computeBorderInsets.left);
        int c11 = a.c(computeBorderInsets.top);
        int c12 = a.c(computeBorderInsets.right);
        int c13 = a.c(computeBorderInsets.bottom);
        if (c10 > 0 || c12 > 0 || c11 > 0 || c13 > 0) {
            Rect bounds = getBounds();
            Intrinsics.checkNotNullExpressionValue(bounds, "getBounds(...)");
            int i13 = bounds.left;
            int i14 = bounds.top;
            int fastBorderCompatibleColorOrZero = fastBorderCompatibleColorOrZero(c10, c11, c12, c13, this.computedBorderColors.getLeft(), this.computedBorderColors.getTop(), this.computedBorderColors.getRight(), this.computedBorderColors.getBottom());
            if (fastBorderCompatibleColorOrZero != 0) {
                if (Color.alpha(fastBorderCompatibleColorOrZero) != 0) {
                    int i15 = bounds.right;
                    int i16 = bounds.bottom;
                    this.borderPaint.setColor(multiplyColorAlpha(fastBorderCompatibleColorOrZero, this.borderAlpha));
                    this.borderPaint.setStyle(Paint.Style.STROKE);
                    Path path = new Path();
                    this.pathForSingleBorder = path;
                    if (c10 > 0) {
                        path.reset();
                        int c14 = a.c(computeBorderInsets.left);
                        updatePathEffect(c14);
                        this.borderPaint.setStrokeWidth(c14);
                        Path path2 = this.pathForSingleBorder;
                        if (path2 != null) {
                            path2.moveTo((c14 / 2) + i13, i14);
                        }
                        Path path3 = this.pathForSingleBorder;
                        if (path3 != null) {
                            path3.lineTo((c14 / 2) + i13, i16);
                        }
                        Path path4 = this.pathForSingleBorder;
                        if (path4 != null) {
                            canvas.drawPath(path4, this.borderPaint);
                        }
                    }
                    if (c11 > 0) {
                        Path path5 = this.pathForSingleBorder;
                        if (path5 != null) {
                            path5.reset();
                        }
                        int c15 = a.c(computeBorderInsets.top);
                        updatePathEffect(c15);
                        this.borderPaint.setStrokeWidth(c15);
                        Path path6 = this.pathForSingleBorder;
                        if (path6 != null) {
                            path6.moveTo(i13, (c15 / 2) + i14);
                        }
                        Path path7 = this.pathForSingleBorder;
                        if (path7 != null) {
                            path7.lineTo(i15, (c15 / 2) + i14);
                        }
                        Path path8 = this.pathForSingleBorder;
                        if (path8 != null) {
                            canvas.drawPath(path8, this.borderPaint);
                        }
                    }
                    if (c12 > 0) {
                        Path path9 = this.pathForSingleBorder;
                        if (path9 != null) {
                            path9.reset();
                        }
                        int c16 = a.c(computeBorderInsets.right);
                        updatePathEffect(c16);
                        this.borderPaint.setStrokeWidth(c16);
                        Path path10 = this.pathForSingleBorder;
                        if (path10 != null) {
                            path10.moveTo(i15 - (c16 / 2), i14);
                        }
                        Path path11 = this.pathForSingleBorder;
                        if (path11 != null) {
                            path11.lineTo(i15 - (c16 / 2), i16);
                        }
                        Path path12 = this.pathForSingleBorder;
                        if (path12 != null) {
                            canvas.drawPath(path12, this.borderPaint);
                        }
                    }
                    if (c13 > 0) {
                        Path path13 = this.pathForSingleBorder;
                        if (path13 != null) {
                            path13.reset();
                        }
                        int c17 = a.c(computeBorderInsets.bottom);
                        updatePathEffect(c17);
                        this.borderPaint.setStrokeWidth(c17);
                        Path path14 = this.pathForSingleBorder;
                        if (path14 != null) {
                            path14.moveTo(i13, i16 - (c17 / 2));
                        }
                        Path path15 = this.pathForSingleBorder;
                        if (path15 != null) {
                            path15.lineTo(i15, i16 - (c17 / 2));
                        }
                        Path path16 = this.pathForSingleBorder;
                        if (path16 != null) {
                            canvas.drawPath(path16, this.borderPaint);
                            return;
                        }
                        return;
                    }
                    return;
                }
                return;
            }
            this.borderPaint.setAntiAlias(false);
            int width = bounds.width();
            int height = bounds.height();
            if (c10 > 0) {
                float f10 = i13;
                float f11 = i13 + c10;
                int left = this.computedBorderColors.getLeft();
                drawQuadrilateral(canvas, left, f10, i14, f11, i14 + c11, f11, i12 - c13, f10, i14 + height);
            }
            if (c11 > 0) {
                float f12 = i14;
                float f13 = i14 + c11;
                int top = this.computedBorderColors.getTop();
                drawQuadrilateral(canvas, top, i13, f12, i13 + c10, f13, i11 - c12, f13, i13 + width, f12);
            }
            if (c12 > 0) {
                int i17 = i13 + width;
                float f14 = i17;
                int i18 = i14 + height;
                float f15 = i17 - c12;
                drawQuadrilateral(canvas, this.computedBorderColors.getRight(), f14, i14, f14, i18, f15, i18 - c13, f15, i14 + c11);
            }
            if (c13 > 0) {
                int i19 = i14 + height;
                float f16 = i19;
                float f17 = i19 - c13;
                drawQuadrilateral(canvas, this.computedBorderColors.getBottom(), i13, f16, i13 + width, f16, i10 - c12, f17, i13 + c10, f17);
            }
            this.borderPaint.setAntiAlias(true);
        }
    }

    private final void drawRoundedBorders(Canvas canvas) {
        float f10;
        float f11;
        float f12;
        float f13;
        PointF pointF;
        PointF pointF2;
        PointF pointF3;
        PointF pointF4;
        float f14;
        CornerRadii topLeft;
        CornerRadii pixelFromDIP;
        CornerRadii topLeft2;
        CornerRadii pixelFromDIP2;
        updatePath();
        canvas.save();
        Path path = this.outerClipPathForBorderRadius;
        if (path != null) {
            canvas.clipPath(path);
            RectF computeBorderInsets = computeBorderInsets();
            float f15 = 0.0f;
            if (computeBorderInsets.top > 0.0f || computeBorderInsets.bottom > 0.0f || computeBorderInsets.left > 0.0f || computeBorderInsets.right > 0.0f) {
                float fullBorderWidth = getFullBorderWidth();
                int borderColor = getBorderColor(LogicalEdge.ALL);
                if (computeBorderInsets.top == fullBorderWidth && computeBorderInsets.bottom == fullBorderWidth && computeBorderInsets.left == fullBorderWidth && computeBorderInsets.right == fullBorderWidth && this.computedBorderColors.getLeft() == borderColor && this.computedBorderColors.getTop() == borderColor && this.computedBorderColors.getRight() == borderColor && this.computedBorderColors.getBottom() == borderColor) {
                    if (fullBorderWidth > 0.0f) {
                        this.borderPaint.setColor(multiplyColorAlpha(borderColor, this.borderAlpha));
                        this.borderPaint.setStyle(Paint.Style.STROKE);
                        this.borderPaint.setStrokeWidth(fullBorderWidth);
                        ComputedBorderRadius computedBorderRadius = this.computedBorderRadius;
                        if (computedBorderRadius != null && computedBorderRadius.isUniform()) {
                            RectF rectF = this.tempRectForCenterDrawPath;
                            if (rectF != null) {
                                ComputedBorderRadius computedBorderRadius2 = this.computedBorderRadius;
                                if (computedBorderRadius2 != null && (topLeft2 = computedBorderRadius2.getTopLeft()) != null && (pixelFromDIP2 = topLeft2.toPixelFromDIP()) != null) {
                                    f14 = pixelFromDIP2.getHorizontal();
                                } else {
                                    f14 = 0.0f;
                                }
                                float f16 = f14 - (computeBorderInsets.left * 0.5f);
                                ComputedBorderRadius computedBorderRadius3 = this.computedBorderRadius;
                                if (computedBorderRadius3 != null && (topLeft = computedBorderRadius3.getTopLeft()) != null && (pixelFromDIP = topLeft.toPixelFromDIP()) != null) {
                                    f15 = pixelFromDIP.getVertical();
                                }
                                canvas.drawRoundRect(rectF, f16, f15 - (computeBorderInsets.top * 0.5f), this.borderPaint);
                            }
                        } else {
                            Path path2 = this.centerDrawPath;
                            if (path2 != null) {
                                canvas.drawPath(path2, this.borderPaint);
                            } else {
                                throw new IllegalStateException("Required value was null.");
                            }
                        }
                    }
                } else {
                    this.borderPaint.setStyle(Paint.Style.FILL);
                    if (Build.VERSION.SDK_INT >= 26) {
                        Path path3 = this.innerClipPathForBorderRadius;
                        if (path3 != null) {
                            canvas.clipOutPath(path3);
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else {
                        Path path4 = this.innerClipPathForBorderRadius;
                        if (path4 != null) {
                            canvas.clipPath(path4, Region.Op.DIFFERENCE);
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    }
                    RectF rectF2 = this.outerClipTempRectForBorderRadius;
                    if (rectF2 != null) {
                        float f17 = rectF2.left;
                        float f18 = rectF2.right;
                        float f19 = rectF2.top;
                        float f20 = rectF2.bottom;
                        PointF pointF5 = this.innerTopLeftCorner;
                        if (pointF5 != null) {
                            PointF pointF6 = this.innerTopRightCorner;
                            if (pointF6 != null) {
                                PointF pointF7 = this.innerBottomLeftCorner;
                                if (pointF7 != null) {
                                    PointF pointF8 = this.innerBottomRightCorner;
                                    if (pointF8 != null) {
                                        if (computeBorderInsets.left > 0.0f) {
                                            float f21 = this.gapBetweenPaths;
                                            f10 = 0.0f;
                                            float f22 = f21 + f20;
                                            f13 = f20;
                                            pointF4 = pointF8;
                                            f11 = f18;
                                            pointF2 = pointF6;
                                            f12 = f19;
                                            pointF3 = pointF7;
                                            pointF = pointF5;
                                            drawQuadrilateral(canvas, this.computedBorderColors.getLeft(), f17, f19 - f21, pointF5.x, pointF5.y - f21, pointF7.x, pointF7.y + f21, f17, f22);
                                        } else {
                                            f10 = 0.0f;
                                            f11 = f18;
                                            f12 = f19;
                                            f13 = f20;
                                            pointF = pointF5;
                                            pointF2 = pointF6;
                                            pointF3 = pointF7;
                                            pointF4 = pointF8;
                                        }
                                        if (computeBorderInsets.top > f10) {
                                            float f23 = this.gapBetweenPaths;
                                            drawQuadrilateral(canvas, this.computedBorderColors.getTop(), f17 - f23, f12, pointF.x - f23, pointF.y, pointF2.x + f23, pointF2.y, f11 + f23, f12);
                                        }
                                        if (computeBorderInsets.right > f10) {
                                            float f24 = this.gapBetweenPaths;
                                            drawQuadrilateral(canvas, this.computedBorderColors.getRight(), f11, f12 - f24, pointF2.x, pointF2.y - f24, pointF4.x, pointF4.y + f24, f11, f13 + f24);
                                        }
                                        if (computeBorderInsets.bottom > f10) {
                                            float f25 = this.gapBetweenPaths;
                                            drawQuadrilateral(canvas, this.computedBorderColors.getBottom(), f17 - f25, f13, pointF3.x - f25, pointF3.y, pointF4.x + f25, pointF4.y, f11 + f25, f13);
                                        }
                                    } else {
                                        throw new IllegalStateException("Required value was null.");
                                    }
                                } else {
                                    throw new IllegalStateException("Required value was null.");
                                }
                            } else {
                                throw new IllegalStateException("Required value was null.");
                            }
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else {
                        throw new IllegalStateException("Required value was null.");
                    }
                }
            }
            canvas.restore();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final int fastBorderCompatibleColorOrZero(int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        int i18;
        int i19;
        int i20;
        if (Color.alpha(i14) >= 255 && Color.alpha(i15) >= 255 && Color.alpha(i16) >= 255 && Color.alpha(i17) >= 255) {
            int i21 = -1;
            if (i10 > 0) {
                i18 = i14;
            } else {
                i18 = -1;
            }
            if (i11 > 0) {
                i19 = i15;
            } else {
                i19 = -1;
            }
            int i22 = i18 & i19;
            if (i12 > 0) {
                i20 = i16;
            } else {
                i20 = -1;
            }
            int i23 = i22 & i20;
            if (i13 > 0) {
                i21 = i17;
            }
            int i24 = i21 & i23;
            if (i10 <= 0) {
                i14 = 0;
            }
            if (i11 <= 0) {
                i15 = 0;
            }
            int i25 = i14 | i15;
            if (i12 <= 0) {
                i16 = 0;
            }
            int i26 = i25 | i16;
            if (i13 <= 0) {
                i17 = 0;
            }
            if (i24 == (i26 | i17)) {
                return i24;
            }
        }
        return 0;
    }

    private final void getEllipseIntersectionWithLine(double d10, double d11, double d12, double d13, double d14, double d15, double d16, double d17, PointF pointF) {
        double d18 = 2;
        double d19 = (d10 + d12) / d18;
        double d20 = (d11 + d13) / d18;
        double d21 = d14 - d19;
        double d22 = d15 - d20;
        double abs = Math.abs(d12 - d10) / d18;
        double abs2 = Math.abs(d13 - d11) / d18;
        double d23 = ((d17 - d20) - d22) / ((d16 - d19) - d21);
        double d24 = d22 - (d21 * d23);
        double d25 = abs2 * abs2;
        double d26 = abs * abs;
        double d27 = d25 + (d26 * d23 * d23);
        double d28 = d18 * abs * abs * d24 * d23;
        double d29 = d18 * d27;
        double sqrt = ((-d28) / d29) - Math.sqrt(((-(d26 * ((d24 * d24) - d25))) / d27) + Math.pow(d28 / d29, 2.0d));
        double d30 = sqrt + d19;
        double d31 = (d23 * sqrt) + d24 + d20;
        if (!Double.isNaN(d30) && !Double.isNaN(d31)) {
            pointF.x = (float) d30;
            pointF.y = (float) d31;
        }
    }

    private final float getFullBorderWidth() {
        float f10;
        Spacing spacing = this.borderWidth;
        if (spacing != null) {
            f10 = spacing.getRaw(8);
        } else {
            f10 = Float.NaN;
        }
        if (!Float.isNaN(f10)) {
            return f10;
        }
        return 0.0f;
    }

    private final float getInnerBorderRadius(float f10, float f11) {
        return d.c(f10 - f11, 0.0f);
    }

    private final PathEffect getPathEffect(BorderStyle borderStyle, float f10) {
        int i10 = WhenMappings.$EnumSwitchMapping$0[borderStyle.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return new DashPathEffect(new float[]{f10, f10, f10, f10}, 0.0f);
                }
                throw new p();
            }
            float f11 = f10 * 3;
            return new DashPathEffect(new float[]{f11, f11, f11, f11}, 0.0f);
        }
        return null;
    }

    private final <T> ReadWriteProperty invalidatingAndPathChange(final T t10) {
        return new c(t10) { // from class: com.facebook.react.uimanager.drawable.BorderDrawable$invalidatingAndPathChange$1
            @Override // kotlin.properties.c
            protected void afterChange(KProperty property, T t11, T t12) {
                Intrinsics.checkNotNullParameter(property, "property");
                if (!Intrinsics.areEqual(t11, t12)) {
                    this.needUpdatePath = true;
                    this.invalidateSelf();
                }
            }
        };
    }

    private final int multiplyColorAlpha(int i10, int i11) {
        if (i11 == 255) {
            return i10;
        }
        if (i11 == 0) {
            return i10 & 16777215;
        }
        return (i10 & 16777215) | ((((i10 >>> 24) * ((i11 + (i11 >> 7)) >> 7)) >> 8) << 24);
    }

    private final void updatePath() {
        float f10;
        float f11;
        float f12;
        float f13;
        ComputedBorderRadius computedBorderRadius;
        CornerRadii cornerRadii;
        CornerRadii cornerRadii2;
        CornerRadii cornerRadii3;
        CornerRadii cornerRadii4;
        char c10;
        char c11;
        char c12;
        float f14;
        Path path;
        int i10;
        RectF rectF;
        Path path2;
        Path path3;
        CornerRadii bottomRight;
        CornerRadii bottomLeft;
        CornerRadii topRight;
        CornerRadii topLeft;
        float f15;
        float f16;
        float f17;
        float f18;
        float f19;
        float f20;
        if (this.needUpdatePath) {
            this.needUpdatePath = false;
            Path path4 = this.innerClipPathForBorderRadius;
            if (path4 == null) {
                path4 = new Path();
            }
            this.innerClipPathForBorderRadius = path4;
            Path path5 = this.outerClipPathForBorderRadius;
            if (path5 == null) {
                path5 = new Path();
            }
            this.outerClipPathForBorderRadius = path5;
            this.pathForOutline = new Path();
            RectF rectF2 = this.innerClipTempRectForBorderRadius;
            if (rectF2 == null) {
                rectF2 = new RectF();
            }
            this.innerClipTempRectForBorderRadius = rectF2;
            RectF rectF3 = this.outerClipTempRectForBorderRadius;
            if (rectF3 == null) {
                rectF3 = new RectF();
            }
            this.outerClipTempRectForBorderRadius = rectF3;
            RectF rectF4 = this.tempRectForCenterDrawPath;
            if (rectF4 == null) {
                rectF4 = new RectF();
            }
            this.tempRectForCenterDrawPath = rectF4;
            Path path6 = this.innerClipPathForBorderRadius;
            if (path6 != null) {
                path6.reset();
                Unit unit = Unit.f32056a;
            }
            Path path7 = this.outerClipPathForBorderRadius;
            if (path7 != null) {
                path7.reset();
                Unit unit2 = Unit.f32056a;
            }
            RectF rectF5 = this.innerClipTempRectForBorderRadius;
            if (rectF5 != null) {
                rectF5.set(getBounds());
                Unit unit3 = Unit.f32056a;
            }
            RectF rectF6 = this.outerClipTempRectForBorderRadius;
            if (rectF6 != null) {
                rectF6.set(getBounds());
                Unit unit4 = Unit.f32056a;
            }
            RectF rectF7 = this.tempRectForCenterDrawPath;
            if (rectF7 != null) {
                rectF7.set(getBounds());
                Unit unit5 = Unit.f32056a;
            }
            RectF computeBorderInsets = computeBorderInsets();
            if (Color.alpha(this.computedBorderColors.getLeft()) != 0 || Color.alpha(this.computedBorderColors.getTop()) != 0 || Color.alpha(this.computedBorderColors.getRight()) != 0 || Color.alpha(this.computedBorderColors.getBottom()) != 0) {
                RectF rectF8 = this.innerClipTempRectForBorderRadius;
                if (rectF8 != null) {
                    if (rectF8 != null) {
                        f13 = rectF8.top + computeBorderInsets.top;
                    } else {
                        f13 = 0.0f;
                    }
                    rectF8.top = f13;
                    Unit unit6 = Unit.f32056a;
                }
                if (rectF8 != null) {
                    if (rectF8 != null) {
                        f12 = rectF8.bottom - computeBorderInsets.bottom;
                    } else {
                        f12 = 0.0f;
                    }
                    rectF8.bottom = f12;
                    Unit unit7 = Unit.f32056a;
                }
                if (rectF8 != null) {
                    if (rectF8 != null) {
                        f11 = rectF8.left + computeBorderInsets.left;
                    } else {
                        f11 = 0.0f;
                    }
                    rectF8.left = f11;
                    Unit unit8 = Unit.f32056a;
                }
                if (rectF8 != null) {
                    if (rectF8 != null) {
                        f10 = rectF8.right - computeBorderInsets.right;
                    } else {
                        f10 = 0.0f;
                    }
                    rectF8.right = f10;
                    Unit unit9 = Unit.f32056a;
                }
            }
            RectF rectF9 = this.tempRectForCenterDrawPath;
            if (rectF9 != null) {
                if (rectF9 != null) {
                    f20 = rectF9.top + (computeBorderInsets.top * 0.5f);
                } else {
                    f20 = 0.0f;
                }
                rectF9.top = f20;
                Unit unit10 = Unit.f32056a;
            }
            if (rectF9 != null) {
                if (rectF9 != null) {
                    f19 = rectF9.bottom - (computeBorderInsets.bottom * 0.5f);
                } else {
                    f19 = 0.0f;
                }
                rectF9.bottom = f19;
                Unit unit11 = Unit.f32056a;
            }
            if (rectF9 != null) {
                if (rectF9 != null) {
                    f18 = rectF9.left + (computeBorderInsets.left * 0.5f);
                } else {
                    f18 = 0.0f;
                }
                rectF9.left = f18;
                Unit unit12 = Unit.f32056a;
            }
            if (rectF9 != null) {
                if (rectF9 != null) {
                    f17 = rectF9.right - (computeBorderInsets.right * 0.5f);
                } else {
                    f17 = 0.0f;
                }
                rectF9.right = f17;
                Unit unit13 = Unit.f32056a;
            }
            BorderRadiusStyle borderRadiusStyle = this.borderRadius;
            if (borderRadiusStyle != null) {
                int layoutDirection = getLayoutDirection();
                Context context = this.context;
                RectF rectF10 = this.outerClipTempRectForBorderRadius;
                if (rectF10 != null) {
                    f15 = PixelUtil.INSTANCE.pxToDp(rectF10.width());
                } else {
                    f15 = 0.0f;
                }
                RectF rectF11 = this.outerClipTempRectForBorderRadius;
                if (rectF11 != null) {
                    f16 = PixelUtil.INSTANCE.pxToDp(rectF11.height());
                } else {
                    f16 = 0.0f;
                }
                computedBorderRadius = borderRadiusStyle.resolve(layoutDirection, context, f15, f16);
            } else {
                computedBorderRadius = null;
            }
            this.computedBorderRadius = computedBorderRadius;
            if (computedBorderRadius == null || (topLeft = computedBorderRadius.getTopLeft()) == null || (cornerRadii = topLeft.toPixelFromDIP()) == null) {
                cornerRadii = new CornerRadii(0.0f, 0.0f);
            }
            ComputedBorderRadius computedBorderRadius2 = this.computedBorderRadius;
            if (computedBorderRadius2 == null || (topRight = computedBorderRadius2.getTopRight()) == null || (cornerRadii2 = topRight.toPixelFromDIP()) == null) {
                cornerRadii2 = new CornerRadii(0.0f, 0.0f);
            }
            ComputedBorderRadius computedBorderRadius3 = this.computedBorderRadius;
            if (computedBorderRadius3 == null || (bottomLeft = computedBorderRadius3.getBottomLeft()) == null || (cornerRadii3 = bottomLeft.toPixelFromDIP()) == null) {
                cornerRadii3 = new CornerRadii(0.0f, 0.0f);
            }
            ComputedBorderRadius computedBorderRadius4 = this.computedBorderRadius;
            if (computedBorderRadius4 == null || (bottomRight = computedBorderRadius4.getBottomRight()) == null || (cornerRadii4 = bottomRight.toPixelFromDIP()) == null) {
                cornerRadii4 = new CornerRadii(0.0f, 0.0f);
            }
            float innerBorderRadius = getInnerBorderRadius(cornerRadii.getHorizontal(), computeBorderInsets.left);
            float innerBorderRadius2 = getInnerBorderRadius(cornerRadii.getVertical(), computeBorderInsets.top);
            float innerBorderRadius3 = getInnerBorderRadius(cornerRadii2.getHorizontal(), computeBorderInsets.right);
            float innerBorderRadius4 = getInnerBorderRadius(cornerRadii2.getVertical(), computeBorderInsets.top);
            float innerBorderRadius5 = getInnerBorderRadius(cornerRadii4.getHorizontal(), computeBorderInsets.right);
            float innerBorderRadius6 = getInnerBorderRadius(cornerRadii4.getVertical(), computeBorderInsets.bottom);
            float innerBorderRadius7 = getInnerBorderRadius(cornerRadii3.getHorizontal(), computeBorderInsets.left);
            float innerBorderRadius8 = getInnerBorderRadius(cornerRadii3.getVertical(), computeBorderInsets.bottom);
            RectF rectF12 = this.innerClipTempRectForBorderRadius;
            if (rectF12 != null && (path3 = this.innerClipPathForBorderRadius) != null) {
                c11 = 7;
                c10 = 6;
                path3.addRoundRect(rectF12, new float[]{innerBorderRadius, innerBorderRadius2, innerBorderRadius3, innerBorderRadius4, innerBorderRadius5, innerBorderRadius6, innerBorderRadius7, innerBorderRadius8}, Path.Direction.CW);
                Unit unit14 = Unit.f32056a;
            } else {
                c10 = 6;
                c11 = 7;
            }
            RectF rectF13 = this.outerClipTempRectForBorderRadius;
            if (rectF13 != null && (path2 = this.outerClipPathForBorderRadius) != null) {
                float horizontal = cornerRadii.getHorizontal();
                float vertical = cornerRadii.getVertical();
                float horizontal2 = cornerRadii2.getHorizontal();
                float vertical2 = cornerRadii2.getVertical();
                float horizontal3 = cornerRadii4.getHorizontal();
                float vertical3 = cornerRadii4.getVertical();
                float horizontal4 = cornerRadii3.getHorizontal();
                float vertical4 = cornerRadii3.getVertical();
                c12 = 5;
                float[] fArr = new float[8];
                fArr[0] = horizontal;
                fArr[1] = vertical;
                fArr[2] = horizontal2;
                fArr[3] = vertical2;
                fArr[4] = horizontal3;
                fArr[5] = vertical3;
                fArr[c10] = horizontal4;
                fArr[c11] = vertical4;
                path2.addRoundRect(rectF13, fArr, Path.Direction.CW);
                Unit unit15 = Unit.f32056a;
            } else {
                c12 = 5;
            }
            Spacing spacing = this.borderWidth;
            if (spacing != null) {
                f14 = spacing.get(8) / 2.0f;
            } else {
                f14 = 0.0f;
            }
            Path path8 = this.pathForOutline;
            if (path8 != null) {
                RectF rectF14 = new RectF(getBounds());
                float horizontal5 = cornerRadii.getHorizontal() + f14;
                float vertical5 = cornerRadii.getVertical() + f14;
                float horizontal6 = cornerRadii2.getHorizontal() + f14;
                float vertical6 = cornerRadii2.getVertical() + f14;
                float horizontal7 = cornerRadii4.getHorizontal() + f14;
                float vertical7 = cornerRadii4.getVertical() + f14;
                float horizontal8 = cornerRadii3.getHorizontal() + f14;
                float vertical8 = cornerRadii3.getVertical() + f14;
                float[] fArr2 = new float[8];
                fArr2[0] = horizontal5;
                fArr2[1] = vertical5;
                fArr2[2] = horizontal6;
                fArr2[3] = vertical6;
                fArr2[4] = horizontal7;
                fArr2[c12] = vertical7;
                fArr2[c10] = horizontal8;
                fArr2[c11] = vertical8;
                path8.addRoundRect(rectF14, fArr2, Path.Direction.CW);
                Unit unit16 = Unit.f32056a;
            }
            ComputedBorderRadius computedBorderRadius5 = this.computedBorderRadius;
            if (computedBorderRadius5 == null || !computedBorderRadius5.isUniform()) {
                Path path9 = this.centerDrawPath;
                if (path9 == null) {
                    path9 = new Path();
                }
                this.centerDrawPath = path9;
                path9.reset();
                Unit unit17 = Unit.f32056a;
                RectF rectF15 = this.tempRectForCenterDrawPath;
                if (rectF15 != null && (path = this.centerDrawPath) != null) {
                    float horizontal9 = cornerRadii.getHorizontal() - (computeBorderInsets.left * 0.5f);
                    float vertical9 = cornerRadii.getVertical() - (computeBorderInsets.top * 0.5f);
                    float horizontal10 = cornerRadii2.getHorizontal() - (computeBorderInsets.right * 0.5f);
                    float vertical10 = cornerRadii2.getVertical() - (computeBorderInsets.top * 0.5f);
                    float horizontal11 = cornerRadii4.getHorizontal() - (computeBorderInsets.right * 0.5f);
                    float vertical11 = cornerRadii4.getVertical() - (computeBorderInsets.bottom * 0.5f);
                    i10 = 2;
                    float horizontal12 = cornerRadii3.getHorizontal() - (computeBorderInsets.left * 0.5f);
                    float vertical12 = cornerRadii3.getVertical() - (computeBorderInsets.bottom * 0.5f);
                    float[] fArr3 = new float[8];
                    fArr3[0] = horizontal9;
                    fArr3[1] = vertical9;
                    fArr3[2] = horizontal10;
                    fArr3[3] = vertical10;
                    fArr3[4] = horizontal11;
                    fArr3[c12] = vertical11;
                    fArr3[c10] = horizontal12;
                    fArr3[c11] = vertical12;
                    path.addRoundRect(rectF15, fArr3, Path.Direction.CW);
                    Unit unit18 = Unit.f32056a;
                    rectF = this.innerClipTempRectForBorderRadius;
                    RectF rectF16 = this.outerClipTempRectForBorderRadius;
                    if (rectF == null && rectF16 != null) {
                        PointF pointF = this.innerTopLeftCorner;
                        if (pointF == null) {
                            pointF = new PointF();
                        }
                        this.innerTopLeftCorner = pointF;
                        pointF.x = rectF.left;
                        Unit unit19 = Unit.f32056a;
                        pointF.y = rectF.top;
                        Unit unit20 = Unit.f32056a;
                        float f21 = rectF.left;
                        float f22 = rectF.top;
                        float f23 = i10;
                        getEllipseIntersectionWithLine(f21, f22, (innerBorderRadius * f23) + f21, (f23 * innerBorderRadius2) + f22, rectF16.left, rectF16.top, f21, f22, pointF);
                        Unit unit21 = Unit.f32056a;
                        PointF pointF2 = this.innerBottomLeftCorner;
                        if (pointF2 == null) {
                            pointF2 = new PointF();
                        }
                        this.innerBottomLeftCorner = pointF2;
                        pointF2.x = rectF.left;
                        Unit unit22 = Unit.f32056a;
                        pointF2.y = rectF.bottom;
                        Unit unit23 = Unit.f32056a;
                        float f24 = rectF.left;
                        float f25 = rectF.bottom;
                        float f26 = 2;
                        getEllipseIntersectionWithLine(f24, f25 - (innerBorderRadius8 * f26), (f26 * innerBorderRadius7) + f24, f25, rectF16.left, rectF16.bottom, f24, f25, pointF2);
                        Unit unit24 = Unit.f32056a;
                        PointF pointF3 = this.innerTopRightCorner;
                        if (pointF3 == null) {
                            pointF3 = new PointF();
                        }
                        this.innerTopRightCorner = pointF3;
                        pointF3.x = rectF.right;
                        Unit unit25 = Unit.f32056a;
                        pointF3.y = rectF.top;
                        Unit unit26 = Unit.f32056a;
                        float f27 = rectF.right;
                        float f28 = 2;
                        float f29 = rectF.top;
                        getEllipseIntersectionWithLine(f27 - (innerBorderRadius3 * f28), f29, f27, (f28 * innerBorderRadius4) + f29, rectF16.right, rectF16.top, f27, f29, pointF3);
                        Unit unit27 = Unit.f32056a;
                        PointF pointF4 = this.innerBottomRightCorner;
                        if (pointF4 == null) {
                            pointF4 = new PointF();
                        }
                        this.innerBottomRightCorner = pointF4;
                        pointF4.x = rectF.right;
                        Unit unit28 = Unit.f32056a;
                        pointF4.y = rectF.bottom;
                        Unit unit29 = Unit.f32056a;
                        float f30 = rectF.right;
                        float f31 = 2;
                        float f32 = rectF.bottom;
                        getEllipseIntersectionWithLine(f30 - (innerBorderRadius5 * f31), f32 - (f31 * innerBorderRadius6), f30, f32, rectF16.right, rectF16.bottom, f30, f32, pointF4);
                        Unit unit30 = Unit.f32056a;
                        return;
                    }
                }
            }
            i10 = 2;
            rectF = this.innerClipTempRectForBorderRadius;
            RectF rectF162 = this.outerClipTempRectForBorderRadius;
            if (rectF == null) {
            }
        }
    }

    private final void updatePathEffect() {
        BorderStyle borderStyle = getBorderStyle();
        if (borderStyle != null) {
            this.borderPaint.setPathEffect(getBorderStyle() != null ? getPathEffect(borderStyle, getFullBorderWidth()) : null);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(@NotNull Canvas canvas) {
        ColorEdges colorEdges;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        updatePathEffect();
        Integer[] numArr = this.borderColors;
        if (numArr == null || (colorEdges = BorderColors.m1166resolveimpl(numArr, getLayoutDirection(), this.context)) == null) {
            colorEdges = this.computedBorderColors;
        }
        this.computedBorderColors = colorEdges;
        BorderRadiusStyle borderRadiusStyle = this.borderRadius;
        if (borderRadiusStyle != null && borderRadiusStyle.hasRoundedBorders()) {
            drawRoundedBorders(canvas);
        } else {
            drawRectangularBorders(canvas);
        }
    }

    public final int getBorderColor(@NotNull LogicalEdge position) {
        Integer num;
        Intrinsics.checkNotNullParameter(position, "position");
        Integer[] numArr = this.borderColors;
        if (numArr != null && (num = numArr[position.ordinal()]) != null) {
            return num.intValue();
        }
        return -16777216;
    }

    public final BorderInsets getBorderInsets() {
        return this.borderInsets;
    }

    public final BorderRadiusStyle getBorderRadius() {
        return this.borderRadius;
    }

    public final BorderStyle getBorderStyle() {
        return (BorderStyle) this.borderStyle$delegate.getValue(this, $$delegatedProperties[0]);
    }

    public final Spacing getBorderWidth() {
        return this.borderWidth;
    }

    public final Path getInnerClipPathForBorderRadius() {
        return this.innerClipPathForBorderRadius;
    }

    @Override // android.graphics.drawable.Drawable
    @qr.c
    public int getOpacity() {
        if (tr.a.h(Color.alpha(multiplyColorAlpha(this.computedBorderColors.getLeft(), this.borderAlpha)), Color.alpha(multiplyColorAlpha(this.computedBorderColors.getTop(), this.borderAlpha)), Color.alpha(multiplyColorAlpha(this.computedBorderColors.getRight(), this.borderAlpha)), Color.alpha(multiplyColorAlpha(this.computedBorderColors.getBottom(), this.borderAlpha))) == 0) {
            return -2;
        }
        if (tr.a.i(Color.alpha(multiplyColorAlpha(this.computedBorderColors.getLeft(), this.borderAlpha)), Color.alpha(multiplyColorAlpha(this.computedBorderColors.getTop(), this.borderAlpha)), Color.alpha(multiplyColorAlpha(this.computedBorderColors.getRight(), this.borderAlpha)), Color.alpha(multiplyColorAlpha(this.computedBorderColors.getBottom(), this.borderAlpha))) == 255) {
            return -1;
        }
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.needUpdatePath = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(@NotNull Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        super.onBoundsChange(bounds);
        this.needUpdatePath = true;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.borderAlpha = i10;
        invalidateSelf();
    }

    public final void setBorderColor(@NotNull LogicalEdge position, Integer num) {
        Intrinsics.checkNotNullParameter(position, "position");
        Integer[] numArr = this.borderColors;
        if (numArr == null) {
            numArr = BorderColors.m1162constructorimpl$default(null, 1, null);
        }
        this.borderColors = numArr;
        if (numArr != null) {
            numArr[position.ordinal()] = num;
        }
        this.needUpdatePath = true;
        invalidateSelf();
    }

    public final void setBorderInsets(BorderInsets borderInsets) {
        this.borderInsets = borderInsets;
    }

    public final void setBorderRadius(BorderRadiusStyle borderRadiusStyle) {
        this.borderRadius = borderRadiusStyle;
    }

    public final void setBorderStyle(BorderStyle borderStyle) {
        this.borderStyle$delegate.setValue(this, $$delegatedProperties[0], borderStyle);
    }

    public final void setBorderWidth(int i10, float f10) {
        Float f11;
        Spacing spacing = this.borderWidth;
        if (spacing != null) {
            f11 = Float.valueOf(spacing.getRaw(i10));
        } else {
            f11 = null;
        }
        if (!FloatUtil.floatsEqual(f11, Float.valueOf(f10))) {
            Spacing spacing2 = this.borderWidth;
            if (spacing2 != null) {
                spacing2.set(i10, f10);
            }
            if (i10 == 0 || i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4 || i10 == 5 || i10 == 8) {
                this.needUpdatePath = true;
            }
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }

    public final void setBorderRadius(@NotNull BorderRadiusProp property, LengthPercentage lengthPercentage) {
        Intrinsics.checkNotNullParameter(property, "property");
        BorderRadiusStyle borderRadiusStyle = this.borderRadius;
        if (Intrinsics.areEqual(lengthPercentage, borderRadiusStyle != null ? borderRadiusStyle.get(property) : null)) {
            return;
        }
        BorderRadiusStyle borderRadiusStyle2 = this.borderRadius;
        if (borderRadiusStyle2 != null) {
            borderRadiusStyle2.set(property, lengthPercentage);
        }
        this.needUpdatePath = true;
        invalidateSelf();
    }

    public final void setBorderStyle(String str) {
        BorderStyle valueOf;
        if (str == null) {
            valueOf = null;
        } else {
            String upperCase = str.toUpperCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            valueOf = BorderStyle.valueOf(upperCase);
        }
        setBorderStyle(valueOf);
        this.needUpdatePath = true;
        invalidateSelf();
    }

    private final void updatePathEffect(int i10) {
        BorderStyle borderStyle = getBorderStyle();
        if (borderStyle != null) {
            this.borderPaint.setPathEffect(getBorderStyle() != null ? getPathEffect(borderStyle, i10) : null);
        }
    }
}
