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
    private final Dialog f31738d;

    /* renamed from: e  reason: collision with root package name */
    private final int f31739e;

    /* renamed from: i  reason: collision with root package name */
    private final int f31740i;

    /* renamed from: o  reason: collision with root package name */
    private final int f31741o;

    public a(Dialog dialog, Rect rect) {
        this.f31738d = dialog;
        this.f31739e = rect.left;
        this.f31740i = rect.top;
        this.f31741o = ViewConfiguration.get(dialog.getContext()).getScaledWindowTouchSlop();
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        View findViewById = view.findViewById(16908290);
        int left = this.f31739e + findViewById.getLeft();
        int width = findViewById.getWidth() + left;
        int top = this.f31740i + findViewById.getTop();
        if (new RectF(left, top, width, findViewById.getHeight() + top).contains(motionEvent.getX(), motionEvent.getY())) {
            return false;
        }
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        if (motionEvent.getAction() == 1) {
            obtain.setAction(4);
        }
        if (Build.VERSION.SDK_INT < 28) {
            obtain.setAction(0);
            int i10 = this.f31741o;
            obtain.setLocation((-i10) - 1, (-i10) - 1);
        }
        view.performClick();
        return this.f31738d.onTouchEvent(obtain);
    }
}
