package hh;

import android.app.Dialog;
import android.graphics.Rect;
import android.graphics.RectF;
import android.os.Build;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements View.OnTouchListener {

    /* renamed from: d  reason: collision with root package name */
    private final Dialog f25987d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25988e;

    /* renamed from: i  reason: collision with root package name */
    private final int f25989i;

    /* renamed from: o  reason: collision with root package name */
    private final int f25990o;

    public a(Dialog dialog, Rect rect) {
        this.f25987d = dialog;
        this.f25988e = rect.left;
        this.f25989i = rect.top;
        this.f25990o = ViewConfiguration.get(dialog.getContext()).getScaledWindowTouchSlop();
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        View findViewById = view.findViewById(16908290);
        int left = this.f25988e + findViewById.getLeft();
        int width = findViewById.getWidth() + left;
        int top = this.f25989i + findViewById.getTop();
        if (new RectF(left, top, width, findViewById.getHeight() + top).contains(motionEvent.getX(), motionEvent.getY())) {
            return false;
        }
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        if (motionEvent.getAction() == 1) {
            obtain.setAction(4);
        }
        if (Build.VERSION.SDK_INT < 28) {
            obtain.setAction(0);
            int i10 = this.f25990o;
            obtain.setLocation((-i10) - 1, (-i10) - 1);
        }
        view.performClick();
        return this.f25987d.onTouchEvent(obtain);
    }
}
