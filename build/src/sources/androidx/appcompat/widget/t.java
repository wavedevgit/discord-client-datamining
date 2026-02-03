package androidx.appcompat.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.widget.SeekBar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t extends SeekBar {

    /* renamed from: d  reason: collision with root package name */
    private final u f1804d;

    public t(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.H);
    }

    @Override // android.widget.AbsSeekBar, android.widget.ProgressBar, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        this.f1804d.h();
    }

    @Override // android.widget.AbsSeekBar, android.widget.ProgressBar, android.view.View
    public void jumpDrawablesToCurrentState() {
        super.jumpDrawablesToCurrentState();
        this.f1804d.i();
    }

    @Override // android.widget.AbsSeekBar, android.widget.ProgressBar, android.view.View
    protected synchronized void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        this.f1804d.g(canvas);
    }

    public t(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        r0.a(this, getContext());
        u uVar = new u(this);
        this.f1804d = uVar;
        uVar.c(attributeSet, i10);
    }
}
