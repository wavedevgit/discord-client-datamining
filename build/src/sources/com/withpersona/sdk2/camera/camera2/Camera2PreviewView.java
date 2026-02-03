package com.withpersona.sdk2.camera.camera2;

import android.content.Context;
import android.util.AttributeSet;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\r\u0010\t\u001a\u00020\b¢\u0006\u0004\b\t\u0010\nJ%\u0010\u000f\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\r\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000b¢\u0006\u0004\b\u000f\u0010\u0010J\u001f\u0010\u0013\u001a\u00020\b2\u0006\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u000bH\u0014¢\u0006\u0004\b\u0013\u0010\u0014J7\u0010\u001b\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0017\u001a\u00020\u000b2\u0006\u0010\u0018\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u000b2\u0006\u0010\u001a\u001a\u00020\u000bH\u0014¢\u0006\u0004\b\u001b\u0010\u001cR\u0016\u0010\u001f\u001a\u00020\u000b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0016\u0010!\u001a\u00020\u000b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010\u001eR\"\u0010)\u001a\u00020\"8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b#\u0010$\u001a\u0004\b%\u0010&\"\u0004\b'\u0010(R\u0011\u0010-\u001a\u00020*8F¢\u0006\u0006\u001a\u0004\b+\u0010,¨\u0006."}, d2 = {"Lcom/withpersona/sdk2/camera/camera2/Camera2PreviewView;", "Landroid/view/ViewGroup;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "a", "()V", "", "w", "h", "orientationDegrees", "b", "(III)V", "widthMeasureSpec", "heightMeasureSpec", "onMeasure", "(II)V", "", "changed", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "onLayout", "(ZIIII)V", "d", "I", "previewW", "e", "previewH", "Landroid/view/SurfaceView;", "i", "Landroid/view/SurfaceView;", "getSurfaceView", "()Landroid/view/SurfaceView;", "setSurfaceView", "(Landroid/view/SurfaceView;)V", "surfaceView", "Landroid/view/SurfaceHolder;", "getHolder", "()Landroid/view/SurfaceHolder;", "holder", "camera_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Camera2PreviewView extends ViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private int f18072d;

    /* renamed from: e  reason: collision with root package name */
    private int f18073e;

    /* renamed from: i  reason: collision with root package name */
    private SurfaceView f18074i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Camera2PreviewView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        SurfaceView surfaceView = new SurfaceView(getContext());
        this.f18074i = surfaceView;
        addView(surfaceView);
    }

    public final void a() {
        removeAllViews();
        SurfaceView surfaceView = new SurfaceView(getContext());
        this.f18074i = surfaceView;
        addView(surfaceView);
        requestLayout();
    }

    public final void b(int i10, int i11, int i12) {
        if (i12 != 90 && i12 != 270) {
            this.f18072d = i10;
            this.f18073e = i11;
        } else {
            this.f18072d = i11;
            this.f18073e = i10;
        }
        getHolder().setFixedSize(i10, i11);
        requestLayout();
    }

    @NotNull
    public final SurfaceHolder getHolder() {
        SurfaceHolder holder = this.f18074i.getHolder();
        Intrinsics.checkNotNullExpressionValue(holder, "getHolder(...)");
        return holder;
    }

    @NotNull
    public final SurfaceView getSurfaceView() {
        return this.f18074i;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        if (this.f18072d != 0 && this.f18073e != 0) {
            int measuredWidth = getMeasuredWidth();
            int measuredHeight = getMeasuredHeight();
            double max = Double.max(measuredWidth / this.f18072d, measuredHeight / this.f18073e);
            int ceil = (int) Math.ceil(this.f18072d * max);
            int ceil2 = (int) Math.ceil(max * this.f18073e);
            int d10 = (d.d(ceil - measuredWidth, 0) / 2) * (-1);
            int d11 = (d.d(ceil2 - measuredHeight, 0) / 2) * (-1);
            this.f18074i.layout(d10, d11, ceil + d10, ceil2 + d11);
            return;
        }
        this.f18074i.layout(i10, i11, i12, i13);
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        setMeasuredDimension(View.resolveSize(Integer.MAX_VALUE, i10), View.resolveSize(Integer.MAX_VALUE, i11));
        this.f18074i.measure(View.MeasureSpec.makeMeasureSpec(this.f18072d, 1073741824), View.MeasureSpec.makeMeasureSpec(this.f18073e, 1073741824));
    }

    public final void setSurfaceView(@NotNull SurfaceView surfaceView) {
        Intrinsics.checkNotNullParameter(surfaceView, "<set-?>");
        this.f18074i = surfaceView;
    }
}
