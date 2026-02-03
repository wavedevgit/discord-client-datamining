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
    private final Window.Callback f28554e;

    /* renamed from: i  reason: collision with root package name */
    private final g f28555i;

    /* renamed from: o  reason: collision with root package name */
    private final GestureDetectorCompat f28556o;

    /* renamed from: p  reason: collision with root package name */
    private final k7 f28557p;

    /* renamed from: q  reason: collision with root package name */
    private final b f28558q;

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
        this.f28556o.a(motionEvent);
        if (motionEvent.getActionMasked() == 1) {
            this.f28555i.k(motionEvent);
        }
    }

    public Window.Callback a() {
        return this.f28554e;
    }

    public void c() {
        this.f28555i.m(l8.CANCELLED);
    }

    @Override // io.sentry.android.core.internal.gestures.j, android.view.Window.Callback
    public boolean dispatchTouchEvent(MotionEvent motionEvent) {
        if (motionEvent != null) {
            try {
                b(this.f28558q.a(motionEvent));
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
        this.f28554e = callback;
        this.f28555i = gVar;
        this.f28557p = k7Var;
        this.f28556o = gestureDetectorCompat;
        this.f28558q = bVar;
    }
}
