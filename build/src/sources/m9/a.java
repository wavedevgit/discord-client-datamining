package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0484a f37640a;

    /* renamed from: b  reason: collision with root package name */
    final float f37641b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37642c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37643d;

    /* renamed from: e  reason: collision with root package name */
    long f37644e;

    /* renamed from: f  reason: collision with root package name */
    float f37645f;

    /* renamed from: g  reason: collision with root package name */
    float f37646g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0484a {
        boolean a();
    }

    public a(Context context) {
        this.f37641b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37640a = null;
        e();
    }

    public boolean b() {
        return this.f37642c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0484a interfaceC0484a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37642c = false;
                        this.f37643d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37645f) > this.f37641b || Math.abs(motionEvent.getY() - this.f37646g) > this.f37641b) {
                    this.f37643d = false;
                }
            } else {
                this.f37642c = false;
                if (Math.abs(motionEvent.getX() - this.f37645f) > this.f37641b || Math.abs(motionEvent.getY() - this.f37646g) > this.f37641b) {
                    this.f37643d = false;
                }
                if (this.f37643d && motionEvent.getEventTime() - this.f37644e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0484a = this.f37640a) != null) {
                    interfaceC0484a.a();
                }
                this.f37643d = false;
            }
        } else {
            this.f37642c = true;
            this.f37643d = true;
            this.f37644e = motionEvent.getEventTime();
            this.f37645f = motionEvent.getX();
            this.f37646g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37642c = false;
        this.f37643d = false;
    }

    public void f(InterfaceC0484a interfaceC0484a) {
        this.f37640a = interfaceC0484a;
    }
}
