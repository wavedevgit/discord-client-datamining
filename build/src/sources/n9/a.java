package n9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0527a f37564a;

    /* renamed from: b  reason: collision with root package name */
    final float f37565b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37566c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37567d;

    /* renamed from: e  reason: collision with root package name */
    long f37568e;

    /* renamed from: f  reason: collision with root package name */
    float f37569f;

    /* renamed from: g  reason: collision with root package name */
    float f37570g;

    /* renamed from: n9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0527a {
        boolean a();
    }

    public a(Context context) {
        this.f37565b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37564a = null;
        e();
    }

    public boolean b() {
        return this.f37566c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0527a interfaceC0527a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37566c = false;
                        this.f37567d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37569f) > this.f37565b || Math.abs(motionEvent.getY() - this.f37570g) > this.f37565b) {
                    this.f37567d = false;
                }
            } else {
                this.f37566c = false;
                if (Math.abs(motionEvent.getX() - this.f37569f) > this.f37565b || Math.abs(motionEvent.getY() - this.f37570g) > this.f37565b) {
                    this.f37567d = false;
                }
                if (this.f37567d && motionEvent.getEventTime() - this.f37568e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0527a = this.f37564a) != null) {
                    interfaceC0527a.a();
                }
                this.f37567d = false;
            }
        } else {
            this.f37566c = true;
            this.f37567d = true;
            this.f37568e = motionEvent.getEventTime();
            this.f37569f = motionEvent.getX();
            this.f37570g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37566c = false;
        this.f37567d = false;
    }

    public void f(InterfaceC0527a interfaceC0527a) {
        this.f37564a = interfaceC0527a;
    }
}
