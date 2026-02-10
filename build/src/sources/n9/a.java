package n9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0527a f36995a;

    /* renamed from: b  reason: collision with root package name */
    final float f36996b;

    /* renamed from: c  reason: collision with root package name */
    boolean f36997c;

    /* renamed from: d  reason: collision with root package name */
    boolean f36998d;

    /* renamed from: e  reason: collision with root package name */
    long f36999e;

    /* renamed from: f  reason: collision with root package name */
    float f37000f;

    /* renamed from: g  reason: collision with root package name */
    float f37001g;

    /* renamed from: n9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0527a {
        boolean a();
    }

    public a(Context context) {
        this.f36996b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f36995a = null;
        e();
    }

    public boolean b() {
        return this.f36997c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0527a interfaceC0527a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f36997c = false;
                        this.f36998d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37000f) > this.f36996b || Math.abs(motionEvent.getY() - this.f37001g) > this.f36996b) {
                    this.f36998d = false;
                }
            } else {
                this.f36997c = false;
                if (Math.abs(motionEvent.getX() - this.f37000f) > this.f36996b || Math.abs(motionEvent.getY() - this.f37001g) > this.f36996b) {
                    this.f36998d = false;
                }
                if (this.f36998d && motionEvent.getEventTime() - this.f36999e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0527a = this.f36995a) != null) {
                    interfaceC0527a.a();
                }
                this.f36998d = false;
            }
        } else {
            this.f36997c = true;
            this.f36998d = true;
            this.f36999e = motionEvent.getEventTime();
            this.f37000f = motionEvent.getX();
            this.f37001g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f36997c = false;
        this.f36998d = false;
    }

    public void f(InterfaceC0527a interfaceC0527a) {
        this.f36995a = interfaceC0527a;
    }
}
