package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import qq.e;
import qq.h;
import rq.c;
import rq.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class UCropView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private GestureCropImageView f19533d;

    /* renamed from: e  reason: collision with root package name */
    private final OverlayView f19534e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {
        a() {
        }

        @Override // rq.c
        public void a(float f10) {
            UCropView.this.f19534e.setTargetAspectRatio(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements d {
        b() {
        }

        @Override // rq.d
        public void a(RectF rectF) {
            UCropView.this.f19533d.setCropRect(rectF);
        }
    }

    public UCropView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void c() {
        this.f19533d.setCropBoundsChangeListener(new a());
        this.f19534e.setOverlayViewChangeListener(new b());
    }

    @NonNull
    public GestureCropImageView getCropImageView() {
        return this.f19533d;
    }

    @NonNull
    public OverlayView getOverlayView() {
        return this.f19534e;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    public UCropView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater.from(context).inflate(e.f48112d, (ViewGroup) this, true);
        this.f19533d = (GestureCropImageView) findViewById(qq.d.f48084b);
        OverlayView overlayView = (OverlayView) findViewById(qq.d.f48107y);
        this.f19534e = overlayView;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, h.f48122e);
        overlayView.g(obtainStyledAttributes);
        this.f19533d.y(obtainStyledAttributes);
        obtainStyledAttributes.recycle();
        c();
    }
}
