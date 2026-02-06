package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0500a f36884a;

    /* renamed from: b  reason: collision with root package name */
    final float f36885b;

    /* renamed from: c  reason: collision with root package name */
    boolean f36886c;

    /* renamed from: d  reason: collision with root package name */
    boolean f36887d;

    /* renamed from: e  reason: collision with root package name */
    long f36888e;

    /* renamed from: f  reason: collision with root package name */
    float f36889f;

    /* renamed from: g  reason: collision with root package name */
    float f36890g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0500a {
        boolean a();
    }

    public a(Context context) {
        this.f36885b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f36884a = null;
        e();
    }

    public boolean b() {
        return this.f36886c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0500a interfaceC0500a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f36886c = false;
                        this.f36887d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f36889f) > this.f36885b || Math.abs(motionEvent.getY() - this.f36890g) > this.f36885b) {
                    this.f36887d = false;
                }
            } else {
                this.f36886c = false;
                if (Math.abs(motionEvent.getX() - this.f36889f) > this.f36885b || Math.abs(motionEvent.getY() - this.f36890g) > this.f36885b) {
                    this.f36887d = false;
                }
                if (this.f36887d && motionEvent.getEventTime() - this.f36888e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0500a = this.f36884a) != null) {
                    interfaceC0500a.a();
                }
                this.f36887d = false;
            }
        } else {
            this.f36886c = true;
            this.f36887d = true;
            this.f36888e = motionEvent.getEventTime();
            this.f36889f = motionEvent.getX();
            this.f36890g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f36886c = false;
        this.f36887d = false;
    }

    public void f(InterfaceC0500a interfaceC0500a) {
        this.f36884a = interfaceC0500a;
    }
}
