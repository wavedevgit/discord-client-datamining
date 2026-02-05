package com.discord.animatable_underlay;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.view.MotionEvent;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react_rootview.RootViewUtils;
import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u00002\u00020\u0001:\u0002BCB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J(\u00106\u001a\u0002072\u0006\u00108\u001a\u00020$2\u0006\u00109\u001a\u00020$2\u0006\u0010:\u001a\u00020$2\u0006\u0010;\u001a\u00020$H\u0014J\u0010\u0010<\u001a\u0002072\u0006\u0010=\u001a\u00020>H\u0014J\b\u0010?\u001a\u000207H\u0014J\b\u0010@\u001a\u000207H\u0014J\u0010\u0010A\u001a\u0002072\u0006\u0010=\u001a\u00020>H\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\t\u001a\u00020\u0007X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\n\u0010\u000b\"\u0004\b\f\u0010\rR\u001a\u0010\u000e\u001a\u00020\u0007X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u000b\"\u0004\b\u0010\u0010\rR\u001a\u0010\u0011\u001a\u00020\u0012X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0013\u0010\u0014\"\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\u00020\u0018X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0019\u0010\u001a\"\u0004\b\u001b\u0010\u001cR\u001a\u0010\u001d\u001a\u00020\u001eX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010 \"\u0004\b!\u0010\"R\u001e\u0010#\u001a\u00020$8\u0006@\u0006X\u0087\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b%\u0010&\"\u0004\b'\u0010(R\u0014\u0010)\u001a\u00020*X\u0082\u000e¢\u0006\b\n\u0000\u0012\u0004\b+\u0010,R\u0014\u0010-\u001a\u00020\u0007X\u0082\u000e¢\u0006\b\n\u0000\u0012\u0004\b.\u0010,R\u000e\u0010/\u001a\u000200X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u00101\u001a\u000200X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u00102\u001a\u000203X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u00104\u001a\u000205X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006D"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlay;", "Lcom/facebook/react/views/view/ReactViewGroup;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "height", "", "width", "shapeWidth", "getShapeWidth", "()F", "setShapeWidth", "(F)V", "shapeHeight", "getShapeHeight", "setShapeHeight", "clipDirectionX", "Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionX;", "getClipDirectionX", "()Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionX;", "setClipDirectionX", "(Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionX;)V", "clipDirectionY", "Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionY;", "getClipDirectionY", "()Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionY;", "setClipDirectionY", "(Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionY;)V", "shapeBorderConfig", "Lcom/discord/animatable_underlay/AnimatableUnderlayBorders;", "getShapeBorderConfig$animatable_underlay_release", "()Lcom/discord/animatable_underlay/AnimatableUnderlayBorders;", "setShapeBorderConfig$animatable_underlay_release", "(Lcom/discord/animatable_underlay/AnimatableUnderlayBorders;)V", "shapeBackgroundColor", "", "getShapeBackgroundColor", "()I", "setShapeBackgroundColor", "(I)V", ViewProps.SHADOW_COLOR, "", "getShadowColor$annotations", "()V", "shadowElevation", "getShadowElevation$annotations", "paint", "Landroid/graphics/Paint;", "shadowPaint", "path", "Landroid/graphics/Path;", "pathRect", "Landroid/graphics/RectF;", "onSizeChanged", "", "w", "h", "oldw", "oldh", "dispatchDraw", "canvas", "Landroid/graphics/Canvas;", "onAttachedToWindow", "onDetachedFromWindow", "drawCustomShape", "ClipDirectionX", "ClipDirectionY", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAnimatableUnderlay.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AnimatableUnderlay.kt\ncom/discord/animatable_underlay/AnimatableUnderlay\n+ 2 Color.kt\nandroidx/core/graphics/ColorKt\n*L\n1#1,181:1\n404#2:182\n*S KotlinDebug\n*F\n+ 1 AnimatableUnderlay.kt\ncom/discord/animatable_underlay/AnimatableUnderlay\n*L\n47#1:182\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AnimatableUnderlay extends ReactViewGroup {
    @NotNull
    private ClipDirectionX clipDirectionX;
    @NotNull
    private ClipDirectionY clipDirectionY;
    private float height;
    @NotNull
    private final Paint paint;
    @NotNull
    private final Path path;
    @NotNull
    private final RectF pathRect;
    @NotNull
    private String shadowColor;
    private float shadowElevation;
    @NotNull
    private final Paint shadowPaint;
    private int shapeBackgroundColor;
    @NotNull
    private AnimatableUnderlayBorders shapeBorderConfig;
    private float shapeHeight;
    private float shapeWidth;
    private float width;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0086\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionX;", "", "<init>", "(Ljava/lang/String;I)V", "FROM_LEFT", "FROM_RIGHT", "CENTERED", "Companion", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ClipDirectionX {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ClipDirectionX[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final ClipDirectionX FROM_LEFT = new ClipDirectionX("FROM_LEFT", 0);
        public static final ClipDirectionX FROM_RIGHT = new ClipDirectionX("FROM_RIGHT", 1);
        public static final ClipDirectionX CENTERED = new ClipDirectionX("CENTERED", 2);

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionX$Companion;", "", "<init>", "()V", "parse", "Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionX;", "clipDirectionX", "", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final ClipDirectionX parse(String str) {
                if (str != null) {
                    int hashCode = str.hashCode();
                    if (hashCode != -1244903727) {
                        if (hashCode != -852420684) {
                            if (hashCode == 68351122 && str.equals("fromRight")) {
                                return ClipDirectionX.FROM_RIGHT;
                            }
                        } else if (str.equals("centered")) {
                            return ClipDirectionX.CENTERED;
                        }
                    } else if (str.equals("fromLeft")) {
                        return ClipDirectionX.FROM_LEFT;
                    }
                }
                throw new IllegalArgumentException("Invalid clipDirectionX: " + str);
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ ClipDirectionX[] $values() {
            return new ClipDirectionX[]{FROM_LEFT, FROM_RIGHT, CENTERED};
        }

        static {
            ClipDirectionX[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
            Companion = new Companion(null);
        }

        private ClipDirectionX(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ClipDirectionX valueOf(String str) {
            return (ClipDirectionX) Enum.valueOf(ClipDirectionX.class, str);
        }

        public static ClipDirectionX[] values() {
            return (ClipDirectionX[]) $VALUES.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0086\u0081\u0002\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0007B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\b"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionY;", "", "<init>", "(Ljava/lang/String;I)V", "FROM_TOP", "FROM_BOTTOM", "CENTERED", "Companion", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ClipDirectionY {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ClipDirectionY[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final ClipDirectionY FROM_TOP = new ClipDirectionY("FROM_TOP", 0);
        public static final ClipDirectionY FROM_BOTTOM = new ClipDirectionY("FROM_BOTTOM", 1);
        public static final ClipDirectionY CENTERED = new ClipDirectionY("CENTERED", 2);

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionY$Companion;", "", "<init>", "()V", "parse", "Lcom/discord/animatable_underlay/AnimatableUnderlay$ClipDirectionY;", "clipDirectionY", "", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final ClipDirectionY parse(String str) {
                if (str != null) {
                    int hashCode = str.hashCode();
                    if (hashCode != -852420684) {
                        if (hashCode != -594339509) {
                            if (hashCode == 1666758261 && str.equals("fromBottom")) {
                                return ClipDirectionY.FROM_BOTTOM;
                            }
                        } else if (str.equals("fromTop")) {
                            return ClipDirectionY.FROM_TOP;
                        }
                    } else if (str.equals("centered")) {
                        return ClipDirectionY.CENTERED;
                    }
                }
                throw new IllegalArgumentException("Invalid clipDirectionX: " + str);
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ ClipDirectionY[] $values() {
            return new ClipDirectionY[]{FROM_TOP, FROM_BOTTOM, CENTERED};
        }

        static {
            ClipDirectionY[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
            Companion = new Companion(null);
        }

        private ClipDirectionY(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ClipDirectionY valueOf(String str) {
            return (ClipDirectionY) Enum.valueOf(ClipDirectionY.class, str);
        }

        public static ClipDirectionY[] values() {
            return (ClipDirectionY[]) $VALUES.clone();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[ClipDirectionY.values().length];
            try {
                iArr[ClipDirectionY.FROM_TOP.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ClipDirectionY.FROM_BOTTOM.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ClipDirectionY.CENTERED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[ClipDirectionX.values().length];
            try {
                iArr2[ClipDirectionX.FROM_LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[ClipDirectionX.FROM_RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[ClipDirectionX.CENTERED.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AnimatableUnderlay(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.clipDirectionX = ClipDirectionX.CENTERED;
        this.clipDirectionY = ClipDirectionY.CENTERED;
        this.shapeBorderConfig = new AnimatableUnderlayBorders();
        this.shadowColor = "#14000000";
        this.shadowElevation = SizeUtilsKt.getDpToPx(3);
        Paint paint = new Paint();
        paint.setAntiAlias(true);
        this.paint = paint;
        Paint paint2 = new Paint();
        paint2.setAntiAlias(true);
        paint2.setColor(0);
        float f10 = this.shadowElevation;
        paint2.setShadowLayer(f10, 0.0f, f10 / 2, Color.parseColor(this.shadowColor));
        this.shadowPaint = paint2;
        this.path = new Path();
        this.pathRect = new RectF();
    }

    private final void drawCustomShape(Canvas canvas) {
        this.path.reset();
        int i10 = WhenMappings.$EnumSwitchMapping$0[this.clipDirectionY.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    RectF rectF = this.pathRect;
                    float f10 = this.height;
                    float f11 = this.shapeHeight;
                    float f12 = 2;
                    rectF.top = (f10 - f11) / f12;
                    rectF.bottom = f10 - ((f10 - f11) / f12);
                } else {
                    throw new p();
                }
            } else {
                RectF rectF2 = this.pathRect;
                rectF2.top = 0.0f;
                float f13 = this.height;
                rectF2.bottom = f13 - (f13 - this.shapeHeight);
            }
        } else {
            RectF rectF3 = this.pathRect;
            float f14 = this.height;
            rectF3.top = f14 - this.shapeHeight;
            rectF3.bottom = f14;
        }
        int i11 = WhenMappings.$EnumSwitchMapping$1[this.clipDirectionX.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    RectF rectF4 = this.pathRect;
                    float f15 = this.width;
                    float f16 = this.shapeWidth;
                    float f17 = 2;
                    rectF4.left = (f15 - f16) / f17;
                    rectF4.right = f15 - ((f15 - f16) / f17);
                } else {
                    throw new p();
                }
            } else {
                RectF rectF5 = this.pathRect;
                rectF5.left = 0.0f;
                float f18 = this.width;
                rectF5.right = f18 - (f18 - this.shapeWidth);
            }
        } else {
            RectF rectF6 = this.pathRect;
            float f19 = this.width;
            rectF6.left = f19 - this.shapeWidth;
            rectF6.right = f19;
        }
        this.path.addRoundRect(this.pathRect, this.shapeBorderConfig.getBorderRadiusRadii(), Path.Direction.CW);
        canvas.drawPath(this.path, this.shadowPaint);
        this.paint.setColor(this.shapeBackgroundColor);
        canvas.drawPath(this.path, this.paint);
        this.shapeBorderConfig.drawBorderStroke$animatable_underlay_release(canvas, this.paint, this.pathRect);
    }

    private static /* synthetic */ void getShadowColor$annotations() {
    }

    private static /* synthetic */ void getShadowElevation$annotations() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onAttachedToWindow$lambda$2(AnimatableUnderlay animatableUnderlay, MotionEvent e10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(e10, "e");
        int action = e10.getAction();
        boolean z11 = true;
        if (action != 0) {
            if (action == 1 || action == 3) {
                animatableUnderlay.setPointerEvents(PointerEvents.AUTO);
            }
        } else {
            if (e10.getX() >= animatableUnderlay.getX() && e10.getX() <= animatableUnderlay.getX() + animatableUnderlay.width) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (e10.getY() >= animatableUnderlay.getY() && e10.getY() <= animatableUnderlay.getY() + animatableUnderlay.height && z10) {
                if (e10.getX() < animatableUnderlay.getX() || e10.getX() > animatableUnderlay.getX() + (animatableUnderlay.width - animatableUnderlay.shapeWidth)) {
                    z11 = false;
                }
                if ((e10.getY() >= animatableUnderlay.getY() && e10.getY() <= animatableUnderlay.getY() + (animatableUnderlay.height - animatableUnderlay.shapeHeight)) || z11) {
                    animatableUnderlay.setPointerEvents(PointerEvents.NONE);
                }
            }
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void dispatchDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        drawCustomShape(canvas);
        canvas.clipPath(this.path);
        super.dispatchDraw(canvas);
    }

    @NotNull
    public final ClipDirectionX getClipDirectionX() {
        return this.clipDirectionX;
    }

    @NotNull
    public final ClipDirectionY getClipDirectionY() {
        return this.clipDirectionY;
    }

    public final int getShapeBackgroundColor() {
        return this.shapeBackgroundColor;
    }

    @NotNull
    public final AnimatableUnderlayBorders getShapeBorderConfig$animatable_underlay_release() {
        return this.shapeBorderConfig;
    }

    public final float getShapeHeight() {
        return this.shapeHeight;
    }

    public final float getShapeWidth() {
        return this.shapeWidth;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        RootViewUtils.INSTANCE.setOnInterceptTouchEvent(this, new Function1() { // from class: com.discord.animatable_underlay.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onAttachedToWindow$lambda$2;
                onAttachedToWindow$lambda$2 = AnimatableUnderlay.onAttachedToWindow$lambda$2(AnimatableUnderlay.this, (MotionEvent) obj);
                return onAttachedToWindow$lambda$2;
            }
        });
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        RootViewUtils.INSTANCE.setOnInterceptTouchEvent(this, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        this.width = i10;
        this.height = i11;
    }

    public final void setClipDirectionX(@NotNull ClipDirectionX clipDirectionX) {
        Intrinsics.checkNotNullParameter(clipDirectionX, "<set-?>");
        this.clipDirectionX = clipDirectionX;
    }

    public final void setClipDirectionY(@NotNull ClipDirectionY clipDirectionY) {
        Intrinsics.checkNotNullParameter(clipDirectionY, "<set-?>");
        this.clipDirectionY = clipDirectionY;
    }

    public final void setShapeBackgroundColor(int i10) {
        this.shapeBackgroundColor = i10;
    }

    public final void setShapeBorderConfig$animatable_underlay_release(@NotNull AnimatableUnderlayBorders animatableUnderlayBorders) {
        Intrinsics.checkNotNullParameter(animatableUnderlayBorders, "<set-?>");
        this.shapeBorderConfig = animatableUnderlayBorders;
    }

    public final void setShapeHeight(float f10) {
        this.shapeHeight = f10;
    }

    public final void setShapeWidth(float f10) {
        this.shapeWidth = f10;
    }
}
