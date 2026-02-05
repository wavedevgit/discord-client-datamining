package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0496a f37302a;

    /* renamed from: b  reason: collision with root package name */
    final float f37303b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37304c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37305d;

    /* renamed from: e  reason: collision with root package name */
    long f37306e;

    /* renamed from: f  reason: collision with root package name */
    float f37307f;

    /* renamed from: g  reason: collision with root package name */
    float f37308g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0496a {
        boolean a();
    }

    public a(Context context) {
        this.f37303b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37302a = null;
        e();
    }

    public boolean b() {
        return this.f37304c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0496a interfaceC0496a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37304c = false;
                        this.f37305d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37307f) > this.f37303b || Math.abs(motionEvent.getY() - this.f37308g) > this.f37303b) {
                    this.f37305d = false;
                }
            } else {
                this.f37304c = false;
                if (Math.abs(motionEvent.getX() - this.f37307f) > this.f37303b || Math.abs(motionEvent.getY() - this.f37308g) > this.f37303b) {
                    this.f37305d = false;
                }
                if (this.f37305d && motionEvent.getEventTime() - this.f37306e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0496a = this.f37302a) != null) {
                    interfaceC0496a.a();
                }
                this.f37305d = false;
            }
        } else {
            this.f37304c = true;
            this.f37305d = true;
            this.f37306e = motionEvent.getEventTime();
            this.f37307f = motionEvent.getX();
            this.f37308g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37304c = false;
        this.f37305d = false;
    }

    public void f(InterfaceC0496a interfaceC0496a) {
        this.f37302a = interfaceC0496a;
    }
}
