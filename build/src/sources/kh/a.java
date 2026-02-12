package kh;

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
    private final Dialog f31739d;

    /* renamed from: e  reason: collision with root package name */
    private final int f31740e;

    /* renamed from: i  reason: collision with root package name */
    private final int f31741i;

    /* renamed from: o  reason: collision with root package name */
    private final int f31742o;

    public a(Dialog dialog, Rect rect) {
        this.f31739d = dialog;
        this.f31740e = rect.left;
        this.f31741i = rect.top;
        this.f31742o = ViewConfiguration.get(dialog.getContext()).getScaledWindowTouchSlop();
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        View findViewById = view.findViewById(16908290);
        int left = this.f31740e + findViewById.getLeft();
        int width = findViewById.getWidth() + left;
        int top = this.f31741i + findViewById.getTop();
        if (new RectF(left, top, width, findViewById.getHeight() + top).contains(motionEvent.getX(), motionEvent.getY())) {
            return false;
        }
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        if (motionEvent.getAction() == 1) {
            obtain.setAction(4);
        }
        if (Build.VERSION.SDK_INT < 28) {
            obtain.setAction(0);
            int i10 = this.f31742o;
            obtain.setLocation((-i10) - 1, (-i10) - 1);
        }
        view.performClick();
        return this.f31739d.onTouchEvent(obtain);
    }
}
