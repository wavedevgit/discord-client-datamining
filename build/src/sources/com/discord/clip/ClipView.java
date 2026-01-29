package com.discord.clip;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Region;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\f\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0006\u0010\u000f\u001a\u00020\u0010J\u001e\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\f2\u0006\u0010\u0013\u001a\u00020\f2\u0006\u0010\u0014\u001a\u00020\fJ.\u0010\u0015\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\f2\u0006\u0010\u0013\u001a\u00020\f2\u0006\u0010\u0016\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\fJ\u000e\u0010\r\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\u000eJ\u000e\u0010\u0019\u001a\u00020\u00102\u0006\u0010\u001a\u001a\u00020\fJ\u0010\u0010\u001b\u001a\u00020\u00102\u0006\u0010\u001c\u001a\u00020\u001dH\u0016J(\u0010\u001e\u001a\u00020\u00102\u0006\u0010\u001f\u001a\u00020\u001d2\u0006\u0010 \u001a\u00020\u001d2\u0006\u0010!\u001a\u00020\u001d2\u0006\u0010\"\u001a\u00020\u001dH\u0014J\u0010\u0010#\u001a\u00020\u00102\u0006\u0010$\u001a\u00020%H\u0014J\"\u0010&\u001a\u00020\u00102\u0006\u0010\u0016\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00020\f2\b\b\u0002\u0010'\u001a\u00020\u000eH\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000eX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006("}, d2 = {"Lcom/discord/clip/ClipView;", "Lcom/facebook/react/views/view/ReactViewGroup;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "cutoutPath", "Landroid/graphics/Path;", "clipPath", "clipPathBackgroundColorPaint", "Landroid/graphics/Paint;", "clipPathRadius", "", "clipToCircle", "", "resetCutouts", "", "addCircleCutout", "x", "y", "size", "addRoundedRectCutout", "width", "height", "cornerRadius", "clipToBorderRadius", "borderRadius", "setBackgroundColor", ViewProps.COLOR, "", "onSizeChanged", "w", "h", "oldw", "oldh", "onDraw", "canvas", "Landroid/graphics/Canvas;", "handleClipTo", "invalidate", "clip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ClipView extends ReactViewGroup {
    @NotNull
    private final Path clipPath;
    @NotNull
    private final Paint clipPathBackgroundColorPaint;
    private float clipPathRadius;
    private boolean clipToCircle;
    @NotNull
    private final Path cutoutPath;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ClipView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.cutoutPath = new Path();
        this.clipPath = new Path();
        Paint paint = new Paint();
        paint.setColor(0);
        this.clipPathBackgroundColorPaint = paint;
        setWillNotDraw(false);
    }

    private final void handleClipTo(float f10, float f11, boolean z10) {
        if (!this.clipPath.isEmpty()) {
            this.clipPath.rewind();
        }
        if (this.clipToCircle) {
            this.clipPath.addOval(0.0f, 0.0f, f10, f11, Path.Direction.CCW);
        } else {
            float f12 = this.clipPathRadius;
            if (f12 > 0.0f) {
                this.clipPath.addRoundRect(0.0f, 0.0f, f10, f11, f12, f12, Path.Direction.CCW);
            }
        }
        if (z10) {
            invalidate();
        }
    }

    static /* synthetic */ void handleClipTo$default(ClipView clipView, float f10, float f11, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        clipView.handleClipTo(f10, f11, z10);
    }

    public final void addCircleCutout(float f10, float f11, float f12) {
        float f13 = f12 / 2;
        this.cutoutPath.addCircle(f10 + f13, f11 + f13, f13, Path.Direction.CCW);
        invalidate();
    }

    public final void addRoundedRectCutout(float f10, float f11, float f12, float f13, float f14) {
        this.cutoutPath.addRoundRect(f10, f11, f10 + f12, f11 + f13, f14, f14, Path.Direction.CCW);
        invalidate();
    }

    public final void clipToBorderRadius(float f10) {
        this.clipPathRadius = f10;
        handleClipTo(getWidth(), getHeight(), true);
    }

    public final void clipToCircle(boolean z10) {
        this.clipToCircle = z10;
        handleClipTo(getWidth(), getHeight(), true);
    }

    @Override // android.view.View
    protected void onDraw(@NotNull Canvas canvas) {
        Canvas canvas2;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (!this.clipPath.isEmpty()) {
            ClipPathCompatKt.clipPathCompat(canvas, this.clipPath, Region.Op.INTERSECT);
        }
        if (!this.cutoutPath.isEmpty()) {
            ClipPathCompatKt.clipPathCompat(canvas, this.cutoutPath, Region.Op.DIFFERENCE);
        }
        if (this.clipPathBackgroundColorPaint.getColor() != 0) {
            canvas2 = canvas;
            canvas2.drawRect(0.0f, 0.0f, getWidth(), getHeight(), this.clipPathBackgroundColorPaint);
        } else {
            canvas2 = canvas;
        }
        super.onDraw(canvas2);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        handleClipTo$default(this, i10, i11, false, 4, null);
    }

    public final void resetCutouts() {
        if (!this.cutoutPath.isEmpty()) {
            this.cutoutPath.rewind();
            invalidate();
        }
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public void setBackgroundColor(int i10) {
        this.clipPathBackgroundColorPaint.setColor(i10);
    }
}
