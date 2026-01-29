package com.facebook.react.uimanager.drawable;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.ComposeShader;
import android.graphics.DashPathEffect;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathEffect;
import android.graphics.PointF;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.drawable.Drawable;
import b2.e;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.FloatUtil;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.Spacing;
import com.facebook.react.uimanager.style.BackgroundImageLayer;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderRadiusStyle;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.ComputedBorderRadius;
import com.facebook.react.uimanager.style.CornerRadii;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
@UnstableReactNativeAPI
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class CSSBackgroundDrawable extends Drawable {
    private static final int ALL_BITS_SET = -1;
    private static final int ALL_BITS_UNSET = 0;
    private static final int DEFAULT_BORDER_ALPHA = 255;
    private static final int DEFAULT_BORDER_COLOR = -16777216;
    private static final int DEFAULT_BORDER_RGB = 0;
    private Path mBackgroundColorRenderPath;
    private Spacing mBorderAlpha;
    private Spacing mBorderRGB;
    private BorderStyle mBorderStyle;
    private Spacing mBorderWidth;
    private Path mCenterDrawPath;
    private final Context mContext;
    private PointF mInnerBottomLeftCorner;
    private PointF mInnerBottomRightCorner;
    private Path mInnerClipPathForBorderRadius;
    private RectF mInnerClipTempRectForBorderRadius;
    private PointF mInnerTopLeftCorner;
    private PointF mInnerTopRightCorner;
    private Path mOuterClipPathForBorderRadius;
    private RectF mOuterClipTempRectForBorderRadius;
    private Path mPathForBorder;
    private Path mPathForBorderRadiusOutline;
    private RectF mTempRectForBorderRadiusOutline;
    private RectF mTempRectForCenterDrawPath;
    private final Path mPathForSingleBorder = new Path();
    private boolean mNeedUpdatePathForBorderRadius = false;
    private final Paint mPaint = new Paint(1);
    private int mColor = 0;
    private List<BackgroundImageLayer> mBackgroundImageLayers = null;
    private int mAlpha = 255;
    private final float mGapBetweenPaths = 0.8f;
    private BorderRadiusStyle mBorderRadius = new BorderRadiusStyle();
    private ComputedBorderRadius mComputedBorderRadius = new ComputedBorderRadius();
    private int mLayoutDirectionOverride = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.react.uimanager.drawable.CSSBackgroundDrawable$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$com$facebook$react$uimanager$style$BorderStyle;

        static {
            int[] iArr = new int[BorderStyle.values().length];
            $SwitchMap$com$facebook$react$uimanager$style$BorderStyle = iArr;
            try {
                iArr[BorderStyle.SOLID.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$facebook$react$uimanager$style$BorderStyle[BorderStyle.DASHED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$facebook$react$uimanager$style$BorderStyle[BorderStyle.DOTTED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public CSSBackgroundDrawable(Context context) {
        this.mContext = context;
    }

    private static int colorFromAlphaAndRGBComponents(float f10, float f11) {
        return ((((int) f10) << 24) & DEFAULT_BORDER_COLOR) | (((int) f11) & 16777215);
    }

    private void drawQuadrilateral(Canvas canvas, int i10, float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        if (i10 == 0) {
            return;
        }
        if (this.mPathForBorder == null) {
            this.mPathForBorder = new Path();
        }
        this.mPaint.setColor(i10);
        this.mPathForBorder.reset();
        this.mPathForBorder.moveTo(f10, f11);
        this.mPathForBorder.lineTo(f12, f13);
        this.mPathForBorder.lineTo(f14, f15);
        this.mPathForBorder.lineTo(f16, f17);
        this.mPathForBorder.lineTo(f10, f11);
        canvas.drawPath(this.mPathForBorder, this.mPaint);
    }

    private void drawRectangularBackgroundWithBorders(Canvas canvas) {
        boolean z10;
        int i10;
        int i11;
        boolean z11;
        CSSBackgroundDrawable cSSBackgroundDrawable;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        this.mPaint.setStyle(Paint.Style.FILL);
        int multiplyColorAlpha = multiplyColorAlpha(this.mColor, this.mAlpha);
        if (Color.alpha(multiplyColorAlpha) != 0) {
            this.mPaint.setColor(multiplyColorAlpha);
            canvas.drawRect(getBounds(), this.mPaint);
        }
        List<BackgroundImageLayer> list = this.mBackgroundImageLayers;
        if (list != null && !list.isEmpty()) {
            this.mPaint.setShader(getBackgroundImageShader());
            canvas.drawRect(getBounds(), this.mPaint);
            this.mPaint.setShader(null);
        }
        RectF directionAwareBorderInsets = getDirectionAwareBorderInsets();
        int round = Math.round(directionAwareBorderInsets.left);
        int round2 = Math.round(directionAwareBorderInsets.top);
        int round3 = Math.round(directionAwareBorderInsets.right);
        int round4 = Math.round(directionAwareBorderInsets.bottom);
        if (round > 0 || round3 > 0 || round2 > 0 || round4 > 0) {
            Rect bounds = getBounds();
            int borderColor = getBorderColor(0);
            int borderColor2 = getBorderColor(1);
            int borderColor3 = getBorderColor(2);
            int borderColor4 = getBorderColor(3);
            int borderColor5 = getBorderColor(9);
            int borderColor6 = getBorderColor(11);
            int borderColor7 = getBorderColor(10);
            if (isBorderColorDefined(9)) {
                borderColor2 = borderColor5;
                borderColor4 = borderColor2;
            }
            if (isBorderColorDefined(10)) {
                borderColor4 = borderColor7;
            }
            if (isBorderColorDefined(11)) {
                borderColor2 = borderColor6;
            }
            if (getLayoutDirection() == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            int borderColor8 = getBorderColor(4);
            int borderColor9 = getBorderColor(5);
            if (I18nUtil.getInstance().doLeftAndRightSwapInRTL(this.mContext)) {
                if (isBorderColorDefined(4)) {
                    borderColor = borderColor8;
                }
                if (isBorderColorDefined(5)) {
                    borderColor3 = borderColor9;
                }
                if (z10) {
                    i16 = borderColor3;
                } else {
                    i16 = borderColor;
                }
                if (z10) {
                    borderColor3 = borderColor;
                }
                i11 = round;
                borderColor = i16;
            } else {
                if (z10) {
                    i10 = borderColor9;
                } else {
                    i10 = borderColor8;
                }
                if (!z10) {
                    borderColor8 = borderColor9;
                }
                boolean isBorderColorDefined = isBorderColorDefined(4);
                i11 = round;
                boolean isBorderColorDefined2 = isBorderColorDefined(5);
                if (z10) {
                    z11 = isBorderColorDefined2;
                } else {
                    z11 = isBorderColorDefined;
                }
                if (!z10) {
                    isBorderColorDefined = isBorderColorDefined2;
                }
                if (z11) {
                    borderColor = i10;
                }
                if (isBorderColorDefined) {
                    borderColor3 = borderColor8;
                }
            }
            int i17 = bounds.left;
            int i18 = bounds.top;
            int fastBorderCompatibleColorOrZero = fastBorderCompatibleColorOrZero(i11, round2, round3, round4, borderColor, borderColor2, borderColor3, borderColor4);
            int i19 = borderColor2;
            int i20 = borderColor3;
            int i21 = borderColor4;
            if (fastBorderCompatibleColorOrZero != 0) {
                if (Color.alpha(fastBorderCompatibleColorOrZero) != 0) {
                    int i22 = bounds.right;
                    int i23 = bounds.bottom;
                    this.mPaint.setColor(fastBorderCompatibleColorOrZero);
                    this.mPaint.setStyle(Paint.Style.STROKE);
                    if (i11 > 0) {
                        this.mPathForSingleBorder.reset();
                        int round5 = Math.round(directionAwareBorderInsets.left);
                        updatePathEffect(round5);
                        this.mPaint.setStrokeWidth(round5);
                        float f10 = (round5 / 2) + i17;
                        this.mPathForSingleBorder.moveTo(f10, i18);
                        this.mPathForSingleBorder.lineTo(f10, i23);
                        canvas.drawPath(this.mPathForSingleBorder, this.mPaint);
                    }
                    if (round2 > 0) {
                        this.mPathForSingleBorder.reset();
                        int round6 = Math.round(directionAwareBorderInsets.top);
                        updatePathEffect(round6);
                        this.mPaint.setStrokeWidth(round6);
                        float f11 = (round6 / 2) + i18;
                        this.mPathForSingleBorder.moveTo(i17, f11);
                        this.mPathForSingleBorder.lineTo(i22, f11);
                        canvas.drawPath(this.mPathForSingleBorder, this.mPaint);
                    }
                    if (round3 > 0) {
                        this.mPathForSingleBorder.reset();
                        int round7 = Math.round(directionAwareBorderInsets.right);
                        updatePathEffect(round7);
                        this.mPaint.setStrokeWidth(round7);
                        float f12 = i22 - (round7 / 2);
                        this.mPathForSingleBorder.moveTo(f12, i18);
                        this.mPathForSingleBorder.lineTo(f12, i23);
                        canvas.drawPath(this.mPathForSingleBorder, this.mPaint);
                    }
                    if (round4 > 0) {
                        this.mPathForSingleBorder.reset();
                        int round8 = Math.round(directionAwareBorderInsets.bottom);
                        updatePathEffect(round8);
                        this.mPaint.setStrokeWidth(round8);
                        float f13 = i23 - (round8 / 2);
                        this.mPathForSingleBorder.moveTo(i17, f13);
                        this.mPathForSingleBorder.lineTo(i22, f13);
                        canvas.drawPath(this.mPathForSingleBorder, this.mPaint);
                        return;
                    }
                    return;
                }
                return;
            }
            this.mPaint.setAntiAlias(false);
            int width = bounds.width();
            int height = bounds.height();
            if (i11 > 0) {
                float f14 = i17;
                float f15 = i17 + i11;
                float f16 = i18 + height;
                drawQuadrilateral(canvas, borderColor, f14, i18, f15, i18 + round2, f15, i15 - round4, f14, f16);
            }
            if (round2 > 0) {
                float f17 = i18;
                float f18 = i18 + round2;
                drawQuadrilateral(canvas, i19, i17, f17, i17 + i11, f18, i14 - round3, f18, i17 + width, f17);
            }
            if (round3 > 0) {
                int i24 = i17 + width;
                float f19 = i24;
                float f20 = i24 - round3;
                drawQuadrilateral(canvas, i20, f19, i18, f19, i18 + height, f20, i13 - round4, f20, i18 + round2);
            }
            if (round4 > 0) {
                int i25 = i18 + height;
                float f21 = i25;
                float f22 = i25 - round4;
                cSSBackgroundDrawable = this;
                cSSBackgroundDrawable.drawQuadrilateral(canvas, i21, i17, f21, width + i17, f21, i12 - round3, f22, i17 + i11, f22);
            } else {
                cSSBackgroundDrawable = this;
            }
            cSSBackgroundDrawable.mPaint.setAntiAlias(true);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:84:0x01c8  */
    /* JADX WARN: Removed duplicated region for block: B:85:0x0207  */
    /* JADX WARN: Removed duplicated region for block: B:88:0x021f  */
    /* JADX WARN: Removed duplicated region for block: B:91:0x0242  */
    /* JADX WARN: Removed duplicated region for block: B:94:0x0265  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void drawRoundedBackgroundWithBorders(android.graphics.Canvas r26) {
        /*
            Method dump skipped, instructions count: 646
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.drawable.CSSBackgroundDrawable.drawRoundedBackgroundWithBorders(android.graphics.Canvas):void");
    }

    private static int fastBorderCompatibleColorOrZero(int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        int i18 = (i13 > 0 ? i17 : -1) & (i10 > 0 ? i14 : -1) & (i11 > 0 ? i15 : -1) & (i12 > 0 ? i16 : -1);
        if (i10 <= 0) {
            i14 = 0;
        }
        if (i11 <= 0) {
            i15 = 0;
        }
        int i19 = i14 | i15;
        if (i12 <= 0) {
            i16 = 0;
        }
        int i20 = i19 | i16;
        if (i13 <= 0) {
            i17 = 0;
        }
        if (i18 == (i20 | i17)) {
            return i18;
        }
        return 0;
    }

    private Shader getBackgroundImageShader() {
        List<BackgroundImageLayer> list = this.mBackgroundImageLayers;
        ComposeShader composeShader = null;
        if (list == null) {
            return null;
        }
        for (BackgroundImageLayer backgroundImageLayer : list) {
            Shader shader = backgroundImageLayer.getShader(getBounds());
            if (shader != null) {
                if (composeShader == null) {
                    composeShader = shader;
                } else {
                    composeShader = new ComposeShader(shader, composeShader, PorterDuff.Mode.SRC_OVER);
                }
            }
        }
        return composeShader;
    }

    private static void getEllipseIntersectionWithLine(double d10, double d11, double d12, double d13, double d14, double d15, double d16, double d17, PointF pointF) {
        double d18 = (d10 + d12) / 2.0d;
        double d19 = (d11 + d13) / 2.0d;
        double d20 = d14 - d18;
        double d21 = d15 - d19;
        double abs = Math.abs(d12 - d10) / 2.0d;
        double abs2 = Math.abs(d13 - d11) / 2.0d;
        double d22 = ((d17 - d19) - d21) / ((d16 - d18) - d20);
        double d23 = d21 - (d20 * d22);
        double d24 = abs2 * abs2;
        double d25 = abs * abs;
        double d26 = d24 + (d25 * d22 * d22);
        double d27 = abs * 2.0d * abs * d23 * d22;
        double d28 = (-(d25 * ((d23 * d23) - d24))) / d26;
        double d29 = d26 * 2.0d;
        double sqrt = ((-d27) / d29) - Math.sqrt(d28 + Math.pow(d27 / d29, 2.0d));
        double d30 = sqrt + d18;
        double d31 = (d22 * sqrt) + d23 + d19;
        if (!Double.isNaN(d30) && !Double.isNaN(d31)) {
            pointF.x = (float) d30;
            pointF.y = (float) d31;
        }
    }

    private static PathEffect getPathEffect(BorderStyle borderStyle, float f10) {
        int i10 = AnonymousClass1.$SwitchMap$com$facebook$react$uimanager$style$BorderStyle[borderStyle.ordinal()];
        if (i10 != 2) {
            if (i10 != 3) {
                return null;
            }
            return new DashPathEffect(new float[]{f10, f10, f10, f10}, 0.0f);
        }
        float f11 = f10 * 3.0f;
        return new DashPathEffect(new float[]{f11, f11, f11, f11}, 0.0f);
    }

    private boolean isBorderColorDefined(int i10) {
        float f10;
        Spacing spacing = this.mBorderRGB;
        float f11 = Float.NaN;
        if (spacing != null) {
            f10 = spacing.get(i10);
        } else {
            f10 = Float.NaN;
        }
        Spacing spacing2 = this.mBorderAlpha;
        if (spacing2 != null) {
            f11 = spacing2.get(i10);
        }
        if (!Float.isNaN(f10) && !Float.isNaN(f11)) {
            return true;
        }
        return false;
    }

    private static int multiplyColorAlpha(int i10, int i11) {
        if (i11 == 255) {
            return i10;
        }
        if (i11 == 0) {
            return i10 & 16777215;
        }
        return (i10 & 16777215) | ((((i10 >>> 24) * (i11 + (i11 >> 7))) >> 8) << 24);
    }

    private void setBorderAlpha(int i10, float f10) {
        if (this.mBorderAlpha == null) {
            this.mBorderAlpha = new Spacing(255.0f);
        }
        if (!FloatUtil.floatsEqual(this.mBorderAlpha.getRaw(i10), f10)) {
            this.mBorderAlpha.set(i10, f10);
            invalidateSelf();
        }
    }

    private void setBorderRGB(int i10, float f10) {
        if (this.mBorderRGB == null) {
            this.mBorderRGB = new Spacing(0.0f);
        }
        if (!FloatUtil.floatsEqual(this.mBorderRGB.getRaw(i10), f10)) {
            this.mBorderRGB.set(i10, f10);
            invalidateSelf();
        }
    }

    private void updatePath() {
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        if (!this.mNeedUpdatePathForBorderRadius) {
            return;
        }
        this.mNeedUpdatePathForBorderRadius = false;
        if (this.mInnerClipPathForBorderRadius == null) {
            this.mInnerClipPathForBorderRadius = new Path();
        }
        if (this.mBackgroundColorRenderPath == null) {
            this.mBackgroundColorRenderPath = new Path();
        }
        if (this.mOuterClipPathForBorderRadius == null) {
            this.mOuterClipPathForBorderRadius = new Path();
        }
        if (this.mPathForBorderRadiusOutline == null) {
            this.mPathForBorderRadiusOutline = new Path();
        }
        if (this.mCenterDrawPath == null) {
            this.mCenterDrawPath = new Path();
        }
        if (this.mInnerClipTempRectForBorderRadius == null) {
            this.mInnerClipTempRectForBorderRadius = new RectF();
        }
        if (this.mOuterClipTempRectForBorderRadius == null) {
            this.mOuterClipTempRectForBorderRadius = new RectF();
        }
        if (this.mTempRectForBorderRadiusOutline == null) {
            this.mTempRectForBorderRadiusOutline = new RectF();
        }
        if (this.mTempRectForCenterDrawPath == null) {
            this.mTempRectForCenterDrawPath = new RectF();
        }
        this.mInnerClipPathForBorderRadius.reset();
        this.mBackgroundColorRenderPath.reset();
        this.mOuterClipPathForBorderRadius.reset();
        this.mPathForBorderRadiusOutline.reset();
        this.mCenterDrawPath.reset();
        this.mInnerClipTempRectForBorderRadius.set(getBounds());
        this.mOuterClipTempRectForBorderRadius.set(getBounds());
        this.mTempRectForBorderRadiusOutline.set(getBounds());
        this.mTempRectForCenterDrawPath.set(getBounds());
        RectF directionAwareBorderInsets = getDirectionAwareBorderInsets();
        int borderColor = getBorderColor(0);
        int borderColor2 = getBorderColor(1);
        int borderColor3 = getBorderColor(2);
        int borderColor4 = getBorderColor(3);
        int borderColor5 = getBorderColor(8);
        int borderColor6 = getBorderColor(9);
        int borderColor7 = getBorderColor(11);
        int borderColor8 = getBorderColor(10);
        if (isBorderColorDefined(9)) {
            borderColor2 = borderColor6;
            borderColor4 = borderColor2;
        }
        if (!isBorderColorDefined(10)) {
            borderColor8 = borderColor4;
        }
        if (!isBorderColorDefined(11)) {
            borderColor7 = borderColor2;
        }
        if (Color.alpha(borderColor) != 0 || Color.alpha(borderColor7) != 0 || Color.alpha(borderColor3) != 0 || Color.alpha(borderColor8) != 0 || Color.alpha(borderColor5) != 0) {
            RectF rectF = this.mInnerClipTempRectForBorderRadius;
            rectF.top += directionAwareBorderInsets.top;
            rectF.bottom -= directionAwareBorderInsets.bottom;
            rectF.left += directionAwareBorderInsets.left;
            rectF.right -= directionAwareBorderInsets.right;
        }
        RectF rectF2 = this.mTempRectForCenterDrawPath;
        rectF2.top += directionAwareBorderInsets.top * 0.5f;
        rectF2.bottom -= directionAwareBorderInsets.bottom * 0.5f;
        rectF2.left += directionAwareBorderInsets.left * 0.5f;
        rectF2.right -= directionAwareBorderInsets.right * 0.5f;
        ComputedBorderRadius resolve = this.mBorderRadius.resolve(getLayoutDirection(), this.mContext, PixelUtil.toDIPFromPixel(this.mOuterClipTempRectForBorderRadius.width()), PixelUtil.toDIPFromPixel(this.mOuterClipTempRectForBorderRadius.height()));
        this.mComputedBorderRadius = resolve;
        CornerRadii pixelFromDIP = resolve.getTopLeft().toPixelFromDIP();
        CornerRadii pixelFromDIP2 = this.mComputedBorderRadius.getTopRight().toPixelFromDIP();
        CornerRadii pixelFromDIP3 = this.mComputedBorderRadius.getBottomLeft().toPixelFromDIP();
        CornerRadii pixelFromDIP4 = this.mComputedBorderRadius.getBottomRight().toPixelFromDIP();
        float innerBorderRadius = getInnerBorderRadius(pixelFromDIP.getHorizontal(), directionAwareBorderInsets.left);
        float innerBorderRadius2 = getInnerBorderRadius(pixelFromDIP.getVertical(), directionAwareBorderInsets.top);
        float innerBorderRadius3 = getInnerBorderRadius(pixelFromDIP2.getHorizontal(), directionAwareBorderInsets.right);
        float innerBorderRadius4 = getInnerBorderRadius(pixelFromDIP2.getVertical(), directionAwareBorderInsets.top);
        float innerBorderRadius5 = getInnerBorderRadius(pixelFromDIP4.getHorizontal(), directionAwareBorderInsets.right);
        float innerBorderRadius6 = getInnerBorderRadius(pixelFromDIP4.getVertical(), directionAwareBorderInsets.bottom);
        float innerBorderRadius7 = getInnerBorderRadius(pixelFromDIP3.getHorizontal(), directionAwareBorderInsets.left);
        float innerBorderRadius8 = getInnerBorderRadius(pixelFromDIP3.getVertical(), directionAwareBorderInsets.bottom);
        Path.Direction direction = Path.Direction.CW;
        this.mInnerClipPathForBorderRadius.addRoundRect(this.mInnerClipTempRectForBorderRadius, new float[]{innerBorderRadius, innerBorderRadius2, innerBorderRadius3, innerBorderRadius4, innerBorderRadius5, innerBorderRadius6, innerBorderRadius7, innerBorderRadius8}, direction);
        Path path = this.mBackgroundColorRenderPath;
        if (directionAwareBorderInsets.left > 0.0f) {
            f10 = this.mInnerClipTempRectForBorderRadius.left - 0.8f;
        } else {
            f10 = this.mInnerClipTempRectForBorderRadius.left;
        }
        float f15 = f10;
        if (directionAwareBorderInsets.top > 0.0f) {
            f11 = this.mInnerClipTempRectForBorderRadius.top - 0.8f;
        } else {
            f11 = this.mInnerClipTempRectForBorderRadius.top;
        }
        float f16 = f11;
        if (directionAwareBorderInsets.right > 0.0f) {
            f12 = this.mInnerClipTempRectForBorderRadius.right + 0.8f;
        } else {
            f12 = this.mInnerClipTempRectForBorderRadius.right;
        }
        float f17 = f12;
        if (directionAwareBorderInsets.bottom > 0.0f) {
            f13 = this.mInnerClipTempRectForBorderRadius.bottom + 0.8f;
        } else {
            f13 = this.mInnerClipTempRectForBorderRadius.bottom;
        }
        path.addRoundRect(f15, f16, f17, f13, new float[]{innerBorderRadius, innerBorderRadius2, innerBorderRadius3, innerBorderRadius4, innerBorderRadius5, innerBorderRadius6, innerBorderRadius7, innerBorderRadius8}, direction);
        this.mOuterClipPathForBorderRadius.addRoundRect(this.mOuterClipTempRectForBorderRadius, new float[]{pixelFromDIP.getHorizontal(), pixelFromDIP.getVertical(), pixelFromDIP2.getHorizontal(), pixelFromDIP2.getVertical(), pixelFromDIP4.getHorizontal(), pixelFromDIP4.getVertical(), pixelFromDIP3.getHorizontal(), pixelFromDIP3.getVertical()}, direction);
        Spacing spacing = this.mBorderWidth;
        if (spacing != null) {
            f14 = spacing.get(8) / 2.0f;
        } else {
            f14 = 0.0f;
        }
        this.mPathForBorderRadiusOutline.addRoundRect(this.mTempRectForBorderRadiusOutline, new float[]{pixelFromDIP.getHorizontal() + f14, pixelFromDIP.getVertical() + f14, pixelFromDIP2.getHorizontal() + f14, pixelFromDIP2.getVertical() + f14, pixelFromDIP4.getHorizontal() + f14, pixelFromDIP4.getVertical() + f14, pixelFromDIP3.getHorizontal() + f14, pixelFromDIP3.getVertical() + f14}, direction);
        this.mCenterDrawPath.addRoundRect(this.mTempRectForCenterDrawPath, new float[]{pixelFromDIP.getHorizontal() - (directionAwareBorderInsets.left * 0.5f), pixelFromDIP.getVertical() - (directionAwareBorderInsets.top * 0.5f), pixelFromDIP2.getHorizontal() - (directionAwareBorderInsets.right * 0.5f), pixelFromDIP2.getVertical() - (directionAwareBorderInsets.top * 0.5f), pixelFromDIP4.getHorizontal() - (directionAwareBorderInsets.right * 0.5f), pixelFromDIP4.getVertical() - (directionAwareBorderInsets.bottom * 0.5f), pixelFromDIP3.getHorizontal() - (directionAwareBorderInsets.left * 0.5f), pixelFromDIP3.getVertical() - (directionAwareBorderInsets.bottom * 0.5f)}, direction);
        if (this.mInnerTopLeftCorner == null) {
            this.mInnerTopLeftCorner = new PointF();
        }
        PointF pointF = this.mInnerTopLeftCorner;
        RectF rectF3 = this.mInnerClipTempRectForBorderRadius;
        float f18 = rectF3.left;
        pointF.x = f18;
        float f19 = rectF3.top;
        pointF.y = f19;
        RectF rectF4 = this.mOuterClipTempRectForBorderRadius;
        getEllipseIntersectionWithLine(f18, f19, (innerBorderRadius * 2.0f) + f18, (innerBorderRadius2 * 2.0f) + f19, rectF4.left, rectF4.top, f18, f19, pointF);
        if (this.mInnerBottomLeftCorner == null) {
            this.mInnerBottomLeftCorner = new PointF();
        }
        PointF pointF2 = this.mInnerBottomLeftCorner;
        RectF rectF5 = this.mInnerClipTempRectForBorderRadius;
        float f20 = rectF5.left;
        pointF2.x = f20;
        float f21 = rectF5.bottom;
        pointF2.y = f21;
        RectF rectF6 = this.mOuterClipTempRectForBorderRadius;
        getEllipseIntersectionWithLine(f20, f21 - (innerBorderRadius8 * 2.0f), (innerBorderRadius7 * 2.0f) + f20, f21, rectF6.left, rectF6.bottom, f20, f21, pointF2);
        if (this.mInnerTopRightCorner == null) {
            this.mInnerTopRightCorner = new PointF();
        }
        PointF pointF3 = this.mInnerTopRightCorner;
        RectF rectF7 = this.mInnerClipTempRectForBorderRadius;
        float f22 = rectF7.right;
        pointF3.x = f22;
        float f23 = rectF7.top;
        pointF3.y = f23;
        RectF rectF8 = this.mOuterClipTempRectForBorderRadius;
        getEllipseIntersectionWithLine(f22 - (innerBorderRadius3 * 2.0f), f23, f22, (innerBorderRadius4 * 2.0f) + f23, rectF8.right, rectF8.top, f22, f23, pointF3);
        if (this.mInnerBottomRightCorner == null) {
            this.mInnerBottomRightCorner = new PointF();
        }
        PointF pointF4 = this.mInnerBottomRightCorner;
        RectF rectF9 = this.mInnerClipTempRectForBorderRadius;
        float f24 = rectF9.right;
        pointF4.x = f24;
        float f25 = rectF9.bottom;
        pointF4.y = f25;
        RectF rectF10 = this.mOuterClipTempRectForBorderRadius;
        getEllipseIntersectionWithLine(f24 - (innerBorderRadius5 * 2.0f), f25 - (innerBorderRadius6 * 2.0f), f24, f25, rectF10.right, rectF10.bottom, f24, f25, pointF4);
    }

    private void updatePathEffect() {
        BorderStyle borderStyle = this.mBorderStyle;
        this.mPaint.setPathEffect(borderStyle != null ? getPathEffect(borderStyle, getFullBorderWidth()) : null);
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        updatePathEffect();
        if (!hasRoundedBorders()) {
            drawRectangularBackgroundWithBorders(canvas);
        } else {
            drawRoundedBackgroundWithBorders(canvas);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.mAlpha;
    }

    public Path getBorderBoxPath() {
        if (hasRoundedBorders()) {
            updatePath();
            return new Path((Path) e.g(this.mOuterClipPathForBorderRadius));
        }
        return null;
    }

    public RectF getBorderBoxRect() {
        return new RectF(getBounds());
    }

    public int getBorderColor(int i10) {
        float f10;
        float f11;
        Spacing spacing = this.mBorderRGB;
        if (spacing != null) {
            f10 = spacing.get(i10);
        } else {
            f10 = 0.0f;
        }
        Spacing spacing2 = this.mBorderAlpha;
        if (spacing2 != null) {
            f11 = spacing2.get(i10);
        } else {
            f11 = 255.0f;
        }
        return colorFromAlphaAndRGBComponents(f11, f10);
    }

    public BorderRadiusStyle getBorderRadius() {
        return this.mBorderRadius;
    }

    public BorderStyle getBorderStyle() {
        return this.mBorderStyle;
    }

    public Float getBorderWidth(int i10) {
        Spacing spacing = this.mBorderWidth;
        if (spacing == null) {
            return null;
        }
        float raw = spacing.getRaw(i10);
        if (Float.isNaN(raw)) {
            return null;
        }
        return Float.valueOf(raw);
    }

    public float getBorderWidthOrDefaultTo(float f10, int i10) {
        Float borderWidth = getBorderWidth(i10);
        if (borderWidth == null) {
            return f10;
        }
        return borderWidth.floatValue();
    }

    public int getColor() {
        return this.mColor;
    }

    public RectF getDirectionAwareBorderInsets() {
        float f10;
        float f11;
        float borderWidthOrDefaultTo = getBorderWidthOrDefaultTo(0.0f, 8);
        boolean z10 = true;
        float borderWidthOrDefaultTo2 = getBorderWidthOrDefaultTo(borderWidthOrDefaultTo, 1);
        float borderWidthOrDefaultTo3 = getBorderWidthOrDefaultTo(borderWidthOrDefaultTo, 3);
        float borderWidthOrDefaultTo4 = getBorderWidthOrDefaultTo(borderWidthOrDefaultTo, 0);
        float borderWidthOrDefaultTo5 = getBorderWidthOrDefaultTo(borderWidthOrDefaultTo, 2);
        if (this.mBorderWidth != null) {
            if (getLayoutDirection() != 1) {
                z10 = false;
            }
            float raw = this.mBorderWidth.getRaw(4);
            float raw2 = this.mBorderWidth.getRaw(5);
            if (I18nUtil.getInstance().doLeftAndRightSwapInRTL(this.mContext)) {
                if (!Float.isNaN(raw)) {
                    borderWidthOrDefaultTo4 = raw;
                }
                if (!Float.isNaN(raw2)) {
                    borderWidthOrDefaultTo5 = raw2;
                }
                if (z10) {
                    f11 = borderWidthOrDefaultTo5;
                } else {
                    f11 = borderWidthOrDefaultTo4;
                }
                if (z10) {
                    borderWidthOrDefaultTo5 = borderWidthOrDefaultTo4;
                }
                borderWidthOrDefaultTo4 = f11;
            } else {
                if (z10) {
                    f10 = raw2;
                } else {
                    f10 = raw;
                }
                if (!z10) {
                    raw = raw2;
                }
                if (!Float.isNaN(f10)) {
                    borderWidthOrDefaultTo4 = f10;
                }
                if (!Float.isNaN(raw)) {
                    borderWidthOrDefaultTo5 = raw;
                }
            }
        }
        return new RectF(borderWidthOrDefaultTo4, borderWidthOrDefaultTo2, borderWidthOrDefaultTo5, borderWidthOrDefaultTo3);
    }

    public float getFullBorderWidth() {
        Spacing spacing = this.mBorderWidth;
        if (spacing != null && !Float.isNaN(spacing.getRaw(8))) {
            return this.mBorderWidth.getRaw(8);
        }
        return 0.0f;
    }

    public float getInnerBorderRadius(float f10, float f11) {
        return Math.max(f10 - f11, 0.0f);
    }

    @Override // android.graphics.drawable.Drawable
    @SuppressLint({"WrongConstant"})
    public int getLayoutDirection() {
        int i10 = this.mLayoutDirectionOverride;
        if (i10 == -1) {
            return super.getLayoutDirection();
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        int alpha = (Color.alpha(this.mColor) * this.mAlpha) >> 8;
        if (alpha != 0) {
            if (alpha != 255) {
                return -3;
            }
            return -1;
        }
        return -2;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (hasRoundedBorders()) {
            updatePath();
            outline.setConvexPath((Path) e.g(this.mPathForBorderRadiusOutline));
            return;
        }
        outline.setRect(getBounds());
    }

    public Path getPaddingBoxPath() {
        if (hasRoundedBorders()) {
            updatePath();
            return new Path((Path) e.g(this.mInnerClipPathForBorderRadius));
        }
        return null;
    }

    public RectF getPaddingBoxRect() {
        RectF directionAwareBorderInsets = getDirectionAwareBorderInsets();
        if (directionAwareBorderInsets == null) {
            return new RectF(0.0f, 0.0f, getBounds().width(), getBounds().height());
        }
        return new RectF(directionAwareBorderInsets.left, directionAwareBorderInsets.top, getBounds().width() - directionAwareBorderInsets.right, getBounds().height() - directionAwareBorderInsets.bottom);
    }

    public boolean hasRoundedBorders() {
        return this.mBorderRadius.hasRoundedBorders();
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        this.mNeedUpdatePathForBorderRadius = true;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (i10 != this.mAlpha) {
            this.mAlpha = i10;
            invalidateSelf();
        }
    }

    public void setBackgroundImage(List<BackgroundImageLayer> list) {
        this.mBackgroundImageLayers = list;
        invalidateSelf();
    }

    public void setBorderColor(int i10, Integer num) {
        float intValue;
        float f10 = Float.NaN;
        if (num == null) {
            intValue = Float.NaN;
        } else {
            intValue = num.intValue() & 16777215;
        }
        if (num != null) {
            f10 = num.intValue() >>> 24;
        }
        setBorderRGB(i10, intValue);
        setBorderAlpha(i10, f10);
        this.mNeedUpdatePathForBorderRadius = true;
    }

    public void setBorderRadius(BorderRadiusProp borderRadiusProp, LengthPercentage lengthPercentage) {
        if (Objects.equals(lengthPercentage, this.mBorderRadius.get(borderRadiusProp))) {
            return;
        }
        this.mBorderRadius.set(borderRadiusProp, lengthPercentage);
        this.mNeedUpdatePathForBorderRadius = true;
        invalidateSelf();
    }

    public void setBorderStyle(String str) {
        setBorderStyle(str == null ? null : BorderStyle.valueOf(str.toUpperCase(Locale.US)));
    }

    public void setBorderWidth(int i10, float f10) {
        if (this.mBorderWidth == null) {
            this.mBorderWidth = new Spacing();
        }
        if (!FloatUtil.floatsEqual(this.mBorderWidth.getRaw(i10), f10)) {
            this.mBorderWidth.set(i10, f10);
            if (i10 == 0 || i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4 || i10 == 5 || i10 == 8) {
                this.mNeedUpdatePathForBorderRadius = true;
            }
            invalidateSelf();
        }
    }

    public void setColor(int i10) {
        this.mColor = i10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }

    @Deprecated
    public void setLayoutDirectionOverride(int i10) {
        if (this.mLayoutDirectionOverride != i10) {
            this.mLayoutDirectionOverride = i10;
        }
    }

    @Deprecated(forRemoval = true, since = "0.75.0")
    public void setRadius(float f10) {
        Float valueOf = Float.isNaN(f10) ? null : Float.valueOf(f10);
        if (valueOf == null) {
            setBorderRadius(BorderRadiusProp.BORDER_RADIUS, null);
        } else {
            setBorderRadius(BorderRadiusProp.BORDER_RADIUS, new LengthPercentage(valueOf.floatValue(), LengthPercentageType.POINT));
        }
    }

    private void updatePathEffect(int i10) {
        BorderStyle borderStyle = this.mBorderStyle;
        this.mPaint.setPathEffect(borderStyle != null ? getPathEffect(borderStyle, i10) : null);
    }

    public void setBorderStyle(BorderStyle borderStyle) {
        if (this.mBorderStyle != borderStyle) {
            this.mBorderStyle = borderStyle;
            this.mNeedUpdatePathForBorderRadius = true;
            invalidateSelf();
        }
    }

    public void setBorderRadius(BorderRadiusStyle borderRadiusStyle) {
        this.mBorderRadius = borderRadiusStyle;
    }

    @Deprecated(forRemoval = true, since = "0.75.0")
    public void setRadius(float f10, int i10) {
        Float valueOf = Float.isNaN(f10) ? null : Float.valueOf(f10);
        if (valueOf == null) {
            this.mBorderRadius.set(BorderRadiusProp.values()[i10], null);
            invalidateSelf();
            return;
        }
        setBorderRadius(BorderRadiusProp.values()[i10], new LengthPercentage(valueOf.floatValue(), LengthPercentageType.POINT));
    }
}
