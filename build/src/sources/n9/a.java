package n9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0527a f36996a;

    /* renamed from: b  reason: collision with root package name */
    final float f36997b;

    /* renamed from: c  reason: collision with root package name */
    boolean f36998c;

    /* renamed from: d  reason: collision with root package name */
    boolean f36999d;

    /* renamed from: e  reason: collision with root package name */
    long f37000e;

    /* renamed from: f  reason: collision with root package name */
    float f37001f;

    /* renamed from: g  reason: collision with root package name */
    float f37002g;

    /* renamed from: n9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0527a {
        boolean a();
    }

    public a(Context context) {
        this.f36997b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f36996a = null;
        e();
    }

    public boolean b() {
        return this.f36998c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0527a interfaceC0527a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f36998c = false;
                        this.f36999d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37001f) > this.f36997b || Math.abs(motionEvent.getY() - this.f37002g) > this.f36997b) {
                    this.f36999d = false;
                }
            } else {
                this.f36998c = false;
                if (Math.abs(motionEvent.getX() - this.f37001f) > this.f36997b || Math.abs(motionEvent.getY() - this.f37002g) > this.f36997b) {
                    this.f36999d = false;
                }
                if (this.f36999d && motionEvent.getEventTime() - this.f37000e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0527a = this.f36996a) != null) {
                    interfaceC0527a.a();
                }
                this.f36999d = false;
            }
        } else {
            this.f36998c = true;
            this.f36999d = true;
            this.f37000e = motionEvent.getEventTime();
            this.f37001f = motionEvent.getX();
            this.f37002g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f36998c = false;
        this.f36999d = false;
    }

    public void f(InterfaceC0527a interfaceC0527a) {
        this.f36996a = interfaceC0527a;
    }
}
