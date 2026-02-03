package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0505a f37843a;

    /* renamed from: b  reason: collision with root package name */
    final float f37844b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37845c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37846d;

    /* renamed from: e  reason: collision with root package name */
    long f37847e;

    /* renamed from: f  reason: collision with root package name */
    float f37848f;

    /* renamed from: g  reason: collision with root package name */
    float f37849g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0505a {
        boolean a();
    }

    public a(Context context) {
        this.f37844b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37843a = null;
        e();
    }

    public boolean b() {
        return this.f37845c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0505a interfaceC0505a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37845c = false;
                        this.f37846d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37848f) > this.f37844b || Math.abs(motionEvent.getY() - this.f37849g) > this.f37844b) {
                    this.f37846d = false;
                }
            } else {
                this.f37845c = false;
                if (Math.abs(motionEvent.getX() - this.f37848f) > this.f37844b || Math.abs(motionEvent.getY() - this.f37849g) > this.f37844b) {
                    this.f37846d = false;
                }
                if (this.f37846d && motionEvent.getEventTime() - this.f37847e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0505a = this.f37843a) != null) {
                    interfaceC0505a.a();
                }
                this.f37846d = false;
            }
        } else {
            this.f37845c = true;
            this.f37846d = true;
            this.f37847e = motionEvent.getEventTime();
            this.f37848f = motionEvent.getX();
            this.f37849g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37845c = false;
        this.f37846d = false;
    }

    public void f(InterfaceC0505a interfaceC0505a) {
        this.f37843a = interfaceC0505a;
    }
}
