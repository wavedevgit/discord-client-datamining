package io.sentry.android.core.internal.gestures;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.view.MotionEvent;
import android.view.Window;
import androidx.core.view.GestureDetectorCompat;
import io.sentry.k7;
import io.sentry.l8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends j {

    /* renamed from: e  reason: collision with root package name */
    private final Window.Callback f27165e;

    /* renamed from: i  reason: collision with root package name */
    private final g f27166i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetectorCompat f27167o;

    /* renamed from: p  reason: collision with root package name */
    private final k7 f27168p;

    /* renamed from: q  reason: collision with root package name */
    private final b f27169q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements b {
        a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface b {
        default MotionEvent a(MotionEvent motionEvent) {
            return MotionEvent.obtain(motionEvent);
        }
    }

    public h(Window.Callback callback, Context context, g gVar, k7 k7Var) {
        this(callback, new GestureDetectorCompat(context, gVar, new Handler(Looper.getMainLooper())), gVar, k7Var, new a());
    }

    private void b(MotionEvent motionEvent) {
        this.f27167o.a(motionEvent);
        if (motionEvent.getActionMasked() == 1) {
            this.f27166i.k(motionEvent);
        }
    }

    public Window.Callback a() {
        return this.f27165e;
    }

    public void c() {
        this.f27166i.m(l8.CANCELLED);
    }

    @Override // io.sentry.android.core.internal.gestures.j, android.view.Window.Callback
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        if (motionEvent != null) {
            try {
                b(this.f27169q.a(motionEvent));
            } finally {
                try {
                } finally {
                }
            }
        }
        return super.dispatchTouchEvent(motionEvent);
    }

    h(Window.Callback callback, GestureDetectorCompat gestureDetectorCompat, g gVar, k7 k7Var, b bVar) {
        super(callback);
        this.f27165e = callback;
        this.f27166i = gVar;
        this.f27168p = k7Var;
        this.f27167o = gestureDetectorCompat;
        this.f27169q = bVar;
    }
}
