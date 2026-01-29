package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0494a f37847a;

    /* renamed from: b  reason: collision with root package name */
    final float f37848b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37849c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37850d;

    /* renamed from: e  reason: collision with root package name */
    long f37851e;

    /* renamed from: f  reason: collision with root package name */
    float f37852f;

    /* renamed from: g  reason: collision with root package name */
    float f37853g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0494a {
        boolean a();
    }

    public a(Context context) {
        this.f37848b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37847a = null;
        e();
    }

    public boolean b() {
        return this.f37849c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0494a interfaceC0494a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37849c = false;
                        this.f37850d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37852f) > this.f37848b || Math.abs(motionEvent.getY() - this.f37853g) > this.f37848b) {
                    this.f37850d = false;
                }
            } else {
                this.f37849c = false;
                if (Math.abs(motionEvent.getX() - this.f37852f) > this.f37848b || Math.abs(motionEvent.getY() - this.f37853g) > this.f37848b) {
                    this.f37850d = false;
                }
                if (this.f37850d && motionEvent.getEventTime() - this.f37851e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0494a = this.f37847a) != null) {
                    interfaceC0494a.a();
                }
                this.f37850d = false;
            }
        } else {
            this.f37849c = true;
            this.f37850d = true;
            this.f37851e = motionEvent.getEventTime();
            this.f37852f = motionEvent.getX();
            this.f37853g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37849c = false;
        this.f37850d = false;
    }

    public void f(InterfaceC0494a interfaceC0494a) {
        this.f37847a = interfaceC0494a;
    }
}
