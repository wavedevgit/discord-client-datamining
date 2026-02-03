package fh;

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
    private final Dialog f24398d;

    /* renamed from: e  reason: collision with root package name */
    private final int f24399e;

    /* renamed from: i  reason: collision with root package name */
    private final int f24400i;

    /* renamed from: o  reason: collision with root package name */
    private final int f24401o;

    public a(Dialog dialog, Rect rect) {
        this.f24398d = dialog;
        this.f24399e = rect.left;
        this.f24400i = rect.top;
        this.f24401o = ViewConfiguration.get(dialog.getContext()).getScaledWindowTouchSlop();
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        View findViewById = view.findViewById(16908290);
        int left = this.f24399e + findViewById.getLeft();
        int width = findViewById.getWidth() + left;
        int top = this.f24400i + findViewById.getTop();
        if (new RectF(left, top, width, findViewById.getHeight() + top).contains(motionEvent.getX(), motionEvent.getY())) {
            return false;
        }
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        if (motionEvent.getAction() == 1) {
            obtain.setAction(4);
        }
        if (Build.VERSION.SDK_INT < 28) {
            obtain.setAction(0);
            int i10 = this.f24401o;
            obtain.setLocation((-i10) - 1, (-i10) - 1);
        }
        view.performClick();
        return this.f24398d.onTouchEvent(obtain);
    }
}
