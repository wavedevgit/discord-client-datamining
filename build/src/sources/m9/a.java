package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0500a f36932a;

    /* renamed from: b  reason: collision with root package name */
    final float f36933b;

    /* renamed from: c  reason: collision with root package name */
    boolean f36934c;

    /* renamed from: d  reason: collision with root package name */
    boolean f36935d;

    /* renamed from: e  reason: collision with root package name */
    long f36936e;

    /* renamed from: f  reason: collision with root package name */
    float f36937f;

    /* renamed from: g  reason: collision with root package name */
    float f36938g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0500a {
        boolean a();
    }

    public a(Context context) {
        this.f36933b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f36932a = null;
        e();
    }

    public boolean b() {
        return this.f36934c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0500a interfaceC0500a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f36934c = false;
                        this.f36935d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f36937f) > this.f36933b || Math.abs(motionEvent.getY() - this.f36938g) > this.f36933b) {
                    this.f36935d = false;
                }
            } else {
                this.f36934c = false;
                if (Math.abs(motionEvent.getX() - this.f36937f) > this.f36933b || Math.abs(motionEvent.getY() - this.f36938g) > this.f36933b) {
                    this.f36935d = false;
                }
                if (this.f36935d && motionEvent.getEventTime() - this.f36936e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0500a = this.f36932a) != null) {
                    interfaceC0500a.a();
                }
                this.f36935d = false;
            }
        } else {
            this.f36934c = true;
            this.f36935d = true;
            this.f36936e = motionEvent.getEventTime();
            this.f36937f = motionEvent.getX();
            this.f36938g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f36934c = false;
        this.f36935d = false;
    }

    public void f(InterfaceC0500a interfaceC0500a) {
        this.f36932a = interfaceC0500a;
    }
}
