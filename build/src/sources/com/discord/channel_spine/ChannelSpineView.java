package com.discord.channel_spine;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.View;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import ir.p;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001:\u00013B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\u0013\u001a\u00020\u0014H\u0002J\u0006\u0010%\u001a\u00020&J\u0010\u0010'\u001a\u00020&2\u0006\u0010(\u001a\u00020)H\u0014J\u0018\u0010*\u001a\u00020&2\u0006\u0010+\u001a\u00020\u000b2\u0006\u0010,\u001a\u00020\u000bH\u0014J\b\u0010-\u001a\u00020&H\u0002J \u0010.\u001a\u00020\u00192\u0006\u0010 \u001a\u00020\u00142\u0006\u0010/\u001a\u00020\u000b2\u0006\u00100\u001a\u000201H\u0002J\u0018\u00102\u001a\u00020\u00142\u0006\u0010 \u001a\u00020\u00142\u0006\u0010/\u001a\u00020\u000bH\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0010\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\r\"\u0004\b\u0012\u0010\u000fR\u000e\u0010\u0015\u001a\u00020\u0016X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00190\u0018X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R$\u0010\u001d\u001a\u00020\u000b2\u0006\u0010\u001c\u001a\u00020\u000b@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001e\u0010\r\"\u0004\b\u001f\u0010\u000fR$\u0010 \u001a\u00020\u00142\u0006\u0010\u001c\u001a\u00020\u0014@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b!\u0010\"\"\u0004\b#\u0010$¨\u00064"}, d2 = {"Lcom/discord/channel_spine/ChannelSpineView;", "Landroid/view/View;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "spinePaint", "Landroid/graphics/Paint;", "verticalPadding", "", "getVerticalPadding", "()I", "setVerticalPadding", "(I)V", "horizontalPadding", "getHorizontalPadding", "setHorizontalPadding", "arcPercent", "", "arcRect", "Landroid/graphics/RectF;", "paths", "", "Landroid/graphics/Path;", "isReplySpline", "", "value", "numRows", "getNumRows", "setNumRows", "rowHeight", "getRowHeight", "()F", "setRowHeight", "(F)V", "configureAsReplySpline", "", "onDraw", "canvas", "Landroid/graphics/Canvas;", "onMeasure", "widthMeasureSpec", "heightMeasureSpec", "rebuildLayout", "createSpinePath", "rowIndex", "direction", "Lcom/discord/channel_spine/ChannelSpineView$SpineDirection;", "yOfRow", "SpineDirection", "channel_spine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nChannelSpineView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChannelSpineView.kt\ncom/discord/channel_spine/ChannelSpineView\n+ 2 Canvas.kt\nandroidx/core/graphics/CanvasKt\n*L\n1#1,215:1\n27#2,7:216\n*S KotlinDebug\n*F\n+ 1 ChannelSpineView.kt\ncom/discord/channel_spine/ChannelSpineView\n*L\n91#1:216,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelSpineView extends View {
    @NotNull
    private final RectF arcRect;
    private int horizontalPadding;
    private boolean isReplySpline;
    private int numRows;
    @NotNull
    private List<? extends Path> paths;
    private float rowHeight;
    @NotNull
    private final Paint spinePaint;
    private int verticalPadding;

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0007\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/discord/channel_spine/ChannelSpineView$SpineDirection;", "", "arcSweepAngle", "", "<init>", "(Ljava/lang/String;IF)V", "getArcSweepAngle", "()F", "TOP_TO_BOTTOM", "BOTTOM_TO_TOP", "channel_spine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class SpineDirection {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ SpineDirection[] $VALUES;
        private final float arcSweepAngle;
        public static final SpineDirection TOP_TO_BOTTOM = new SpineDirection("TOP_TO_BOTTOM", 0, -90.0f);
        public static final SpineDirection BOTTOM_TO_TOP = new SpineDirection("BOTTOM_TO_TOP", 1, 90.0f);

        private static final /* synthetic */ SpineDirection[] $values() {
            return new SpineDirection[]{TOP_TO_BOTTOM, BOTTOM_TO_TOP};
        }

        static {
            SpineDirection[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private SpineDirection(String str, int i10, float f10) {
            this.arcSweepAngle = f10;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static SpineDirection valueOf(String str) {
            return (SpineDirection) Enum.valueOf(SpineDirection.class, str);
        }

        public static SpineDirection[] values() {
            return (SpineDirection[]) $VALUES.clone();
        }

        public final float getArcSweepAngle() {
            return this.arcSweepAngle;
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[SpineDirection.values().length];
            try {
                iArr[SpineDirection.TOP_TO_BOTTOM.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[SpineDirection.BOTTOM_TO_TOP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ChannelSpineView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final float arcPercent() {
        if (this.isReplySpline) {
            return 0.25f;
        }
        return 0.5f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureAsReplySpline$lambda$1(ChannelSpineView channelSpineView, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        channelSpineView.setRowHeight(SizeUtilsKt.getPxToDp(i13 - i11));
    }

    private final Path createSpinePath(float f10, int i10, SpineDirection spineDirection) {
        float yOfRow;
        float f11;
        Path path = new Path();
        float strokeWidth = this.spinePaint.getStrokeWidth() / 2.0f;
        int[] iArr = WhenMappings.$EnumSwitchMapping$0;
        int i11 = iArr[spineDirection.ordinal()];
        if (i11 != 1) {
            if (i11 == 2) {
                yOfRow = yOfRow(f10, i10 + 1);
            } else {
                throw new p();
            }
        } else {
            yOfRow = yOfRow(f10, i10);
        }
        if (this.isReplySpline) {
            f11 = SizeUtilsKt.getDpToPx(9);
        } else {
            f11 = 0.5f * f10;
        }
        float yOfRow2 = ((yOfRow(f10, i10) - this.verticalPadding) - strokeWidth) + f11;
        float measuredWidth = getMeasuredWidth() - this.horizontalPadding;
        float arcPercent = arcPercent() * getMeasuredWidth();
        int i12 = iArr[spineDirection.ordinal()];
        if (i12 != 1) {
            if (i12 == 2) {
                this.arcRect.set(strokeWidth, yOfRow2, strokeWidth + arcPercent, arcPercent + yOfRow2);
            } else {
                throw new p();
            }
        } else {
            this.arcRect.set(strokeWidth, yOfRow2 - arcPercent, arcPercent + strokeWidth, yOfRow2);
        }
        path.moveTo(strokeWidth, yOfRow);
        path.arcTo(this.arcRect, 180.0f, spineDirection.getArcSweepAngle(), false);
        path.lineTo(measuredWidth, yOfRow2);
        return path;
    }

    private final void rebuildLayout() {
        SpineDirection spineDirection;
        int i10 = this.numRows;
        float dpToPx = SizeUtilsKt.getDpToPx(this.rowHeight);
        if (i10 != 0 && dpToPx > 1.0E-4f) {
            int i11 = 1;
            if (i10 <= 1) {
                i11 = 0;
            }
            ArrayList arrayList = new ArrayList(i10 + i11);
            int i12 = i10 - 1;
            for (int i13 = 0; i13 < i10; i13++) {
                if (this.isReplySpline) {
                    spineDirection = SpineDirection.BOTTOM_TO_TOP;
                } else {
                    spineDirection = SpineDirection.TOP_TO_BOTTOM;
                }
                arrayList.add(createSpinePath(dpToPx, i13, spineDirection));
                if (i13 < i12) {
                    arrayList.add(createSpinePath(dpToPx, i13, SpineDirection.BOTTOM_TO_TOP));
                }
            }
            if (i11 != 0) {
                Path path = new Path();
                float strokeWidth = this.spinePaint.getStrokeWidth() / 2.0f;
                path.moveTo(strokeWidth, this.verticalPadding);
                path.lineTo(strokeWidth, yOfRow(dpToPx, i10 - 2) + (dpToPx / 2.0f));
                arrayList.add(path);
            }
            this.paths = arrayList;
            return;
        }
        this.paths = CollectionsKt.l();
    }

    private final float yOfRow(float f10, int i10) {
        return this.verticalPadding + (i10 * f10);
    }

    public final void configureAsReplySpline() {
        this.isReplySpline = true;
        this.verticalPadding = SizeUtilsKt.getDpToPx(0);
        this.horizontalPadding = SizeUtilsKt.getDpToPx(0);
        setNumRows(1);
        addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.channel_spine.a
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                ChannelSpineView.configureAsReplySpline$lambda$1(ChannelSpineView.this, view, i10, i11, i12, i13, i14, i15, i16, i17);
            }
        });
    }

    public final int getHorizontalPadding() {
        return this.horizontalPadding;
    }

    public final int getNumRows() {
        return this.numRows;
    }

    public final float getRowHeight() {
        return this.rowHeight;
    }

    public final int getVerticalPadding() {
        return this.verticalPadding;
    }

    @Override // android.view.View
    protected void onDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        int save = canvas.save();
        try {
            for (Path path : this.paths) {
                canvas.drawPath(path, this.spinePaint);
            }
        } finally {
            canvas.restoreToCount(save);
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int size;
        Number valueOf;
        if (this.numRows != 0 && this.rowHeight != 0.0f) {
            int mode = View.MeasureSpec.getMode(i10);
            boolean z10 = false;
            if (mode != Integer.MIN_VALUE && mode != 1073741824) {
                size = 0;
            } else {
                size = View.MeasureSpec.getSize(i10);
            }
            float f10 = this.numRows * this.rowHeight;
            int mode2 = View.MeasureSpec.getMode(i11);
            if (mode2 != Integer.MIN_VALUE) {
                if (mode2 != 1073741824) {
                    valueOf = Float.valueOf(f10);
                } else {
                    valueOf = Integer.valueOf(View.MeasureSpec.getSize(i11));
                }
            } else {
                valueOf = Float.valueOf(d.h(f10, View.MeasureSpec.getSize(i11)));
            }
            if (size != getMeasuredWidth()) {
                z10 = true;
            }
            setMeasuredDimension(size, valueOf.intValue());
            if (z10) {
                rebuildLayout();
                invalidate();
                return;
            }
            return;
        }
        super.onMeasure(i10, i11);
    }

    public final void setHorizontalPadding(int i10) {
        this.horizontalPadding = i10;
    }

    public final void setNumRows(int i10) {
        boolean z10;
        if (this.numRows != i10) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.numRows = i10;
        if (z10 && this.rowHeight > 0.0f) {
            rebuildLayout();
            invalidate();
            requestLayout();
        }
    }

    public final void setRowHeight(float f10) {
        boolean z10;
        if (this.rowHeight == f10) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.rowHeight = f10;
        if (!z10 && this.numRows > 0) {
            rebuildLayout();
            invalidate();
            requestLayout();
        }
    }

    public final void setVerticalPadding(int i10) {
        this.verticalPadding = i10;
    }

    public /* synthetic */ ChannelSpineView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChannelSpineView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        int colorCompat;
        Intrinsics.checkNotNullParameter(context, "context");
        Paint paint = new Paint();
        if (!isInEditMode()) {
            colorCompat = ThemeManagerKt.getTheme().getSpineDefault();
        } else {
            colorCompat = ColorUtilsKt.getColorCompat(context, com.discord.theme.R.color.primary_500);
        }
        paint.setColor(colorCompat);
        paint.setAntiAlias(true);
        paint.setStrokeCap(Paint.Cap.ROUND);
        paint.setStrokeWidth(getResources().getDimension(R.dimen.spine_width));
        paint.setStyle(Paint.Style.STROKE);
        this.spinePaint = paint;
        this.verticalPadding = SizeUtilsKt.getDpToPx(8);
        this.horizontalPadding = SizeUtilsKt.getDpToPx(0);
        this.arcRect = new RectF();
        this.paths = CollectionsKt.l();
        setWillNotDraw(false);
    }
}
