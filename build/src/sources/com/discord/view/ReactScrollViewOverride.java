package com.discord.view;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Canvas;
import android.view.ViewTreeObserver;
import com.facebook.react.views.scroll.FpsListener;
import com.facebook.react.views.scroll.ReactScrollView;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\b\u0007\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\f\u001a\u00020\rH\u0014J\b\u0010\u000e\u001a\u00020\rH\u0014J\u0010\u0010\u000f\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\u0011H\u0016J(\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0016\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0014H\u0014R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/view/ReactScrollViewOverride;", "Lcom/facebook/react/views/scroll/ReactScrollView;", "context", "Landroid/content/Context;", "fpsListener", "Lcom/facebook/react/views/scroll/FpsListener;", "<init>", "(Landroid/content/Context;Lcom/facebook/react/views/scroll/FpsListener;)V", "isDrawing", "", "onDrawListener", "Landroid/view/ViewTreeObserver$OnDrawListener;", "onAttachedToWindow", "", "onDetachedFromWindow", "draw", "canvas", "Landroid/graphics/Canvas;", "onScrollChanged", "x", "", "y", "oldX", "oldY", "app_canaryRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactScrollViewOverride extends ReactScrollView {
    private boolean isDrawing;
    @NotNull
    private final ViewTreeObserver.OnDrawListener onDrawListener;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactScrollViewOverride(@NotNull Context context, FpsListener fpsListener) {
        super(context, fpsListener);
        Intrinsics.checkNotNullParameter(context, "context");
        this.onDrawListener = new ViewTreeObserver.OnDrawListener() { // from class: com.discord.view.a
            @Override // android.view.ViewTreeObserver.OnDrawListener
            public final void onDraw() {
                ReactScrollViewOverride.this.isDrawing = true;
            }
        };
    }

    @Override // com.facebook.react.views.scroll.ReactScrollView, android.widget.ScrollView, android.view.View
    public void draw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.draw(canvas);
        this.isDrawing = false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.scroll.ReactScrollView, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        getViewTreeObserver().addOnDrawListener(this.onDrawListener);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.scroll.ReactScrollView, android.widget.ScrollView, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        getViewTreeObserver().removeOnDrawListener(this.onDrawListener);
    }

    @Override // com.facebook.react.views.scroll.ReactScrollView, android.view.View
    protected void onScrollChanged(int i10, int i11, int i12, int i13) {
        super.onScrollChanged(i10, i11, i12, i13, this.isDrawing);
    }
}
