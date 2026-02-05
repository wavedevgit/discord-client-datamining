package com.withpersona.sdk2.inquiry.governmentid.view;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Path;
import android.graphics.Region;
import android.os.Build;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewParent;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.governmentid.view.SpotlightView;
import ho.p4;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import zp.s;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u001d\b\u0016\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J#\u0010\t\u001a\u00020\b2\b\u0010\u0003\u001a\u0004\u0018\u00010\u00022\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004H\u0002¢\u0006\u0004\b\t\u0010\u0007J/\u0010\u000f\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\f\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\n2\u0006\u0010\u000e\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u000f\u0010\u0011\u001a\u00020\bH\u0014¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0015\u001a\u00020\b2\u0006\u0010\u0014\u001a\u00020\u0013H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R\u0016\u0010\u0019\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\"\u0010!\u001a\u00020\u001a8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u001b\u0010\u001c\u001a\u0004\b\u001d\u0010\u001e\"\u0004\b\u001f\u0010 R\u0018\u0010%\u001a\u0004\u0018\u00010\"8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b#\u0010$¨\u0006&"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/view/SpotlightView;", "Landroid/view/View;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "c", "", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "f", "(IIII)V", "onFinishInflate", "()V", "Landroid/graphics/Canvas;", "canvas", "draw", "(Landroid/graphics/Canvas;)V", "d", "I", "targetViewId", "", "e", "F", "getRadius", "()F", "setRadius", "(F)V", "radius", "Landroid/graphics/Path;", "i", "Landroid/graphics/Path;", "clipPath", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SpotlightView extends View {

    /* renamed from: d  reason: collision with root package name */
    private int f18686d;

    /* renamed from: e  reason: collision with root package name */
    private float f18687e;

    /* renamed from: i  reason: collision with root package name */
    private Path f18688i;

    public SpotlightView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        c(context, attributeSet);
    }

    private final void c(Context context, AttributeSet attributeSet) {
        Resources.Theme theme;
        TypedArray obtainStyledAttributes;
        if (context != null && (theme = context.getTheme()) != null && (obtainStyledAttributes = theme.obtainStyledAttributes(attributeSet, p4.f26636a, 0, 0)) != null) {
            try {
                this.f18686d = obtainStyledAttributes.getResourceId(p4.f26638c, 0);
                this.f18687e = obtainStyledAttributes.getDimension(p4.f26637b, 0.0f);
            } finally {
                obtainStyledAttributes.recycle();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(final SpotlightView spotlightView) {
        View findViewById;
        ViewParent parent = spotlightView.getParent();
        if ((parent instanceof View) && (findViewById = ((View) parent).findViewById(spotlightView.f18686d)) != null) {
            findViewById.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: qo.c
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                    SpotlightView.e(SpotlightView.this, view, i10, i11, i12, i13, i14, i15, i16, i17);
                }
            });
            spotlightView.f(findViewById.getLeft(), findViewById.getTop(), findViewById.getRight(), findViewById.getBottom());
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(SpotlightView spotlightView, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        spotlightView.f(i10, i11, i12, i13);
    }

    private final void f(int i10, int i11, int i12, int i13) {
        Path path = new Path();
        float f10 = this.f18687e;
        path.addRoundRect(i10, i11, i12, i13, f10, f10, Path.Direction.CW);
        this.f18688i = path;
        invalidate();
    }

    @Override // android.view.View
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Path path = this.f18688i;
        if (path != null) {
            canvas.save();
            if (Build.VERSION.SDK_INT >= 26) {
                canvas.clipOutPath(path);
            } else {
                canvas.clipPath(path, Region.Op.DIFFERENCE);
            }
            super.draw(canvas);
            canvas.restore();
            return;
        }
        super.draw(canvas);
    }

    public final float getRadius() {
        return this.f18687e;
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        s.b(this, new Function0() { // from class: qo.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d10;
                d10 = SpotlightView.d(SpotlightView.this);
                return d10;
            }
        });
    }

    public final void setRadius(float f10) {
        this.f18687e = f10;
    }
}
