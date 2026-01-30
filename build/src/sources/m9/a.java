package m9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0494a f37863a;

    /* renamed from: b  reason: collision with root package name */
    final float f37864b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37865c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37866d;

    /* renamed from: e  reason: collision with root package name */
    long f37867e;

    /* renamed from: f  reason: collision with root package name */
    float f37868f;

    /* renamed from: g  reason: collision with root package name */
    float f37869g;

    /* renamed from: m9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0494a {
        boolean a();
    }

    public a(Context context) {
        this.f37864b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37863a = null;
        e();
    }

    public boolean b() {
        return this.f37865c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0494a interfaceC0494a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37865c = false;
                        this.f37866d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37868f) > this.f37864b || Math.abs(motionEvent.getY() - this.f37869g) > this.f37864b) {
                    this.f37866d = false;
                }
            } else {
                this.f37865c = false;
                if (Math.abs(motionEvent.getX() - this.f37868f) > this.f37864b || Math.abs(motionEvent.getY() - this.f37869g) > this.f37864b) {
                    this.f37866d = false;
                }
                if (this.f37866d && motionEvent.getEventTime() - this.f37867e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0494a = this.f37863a) != null) {
                    interfaceC0494a.a();
                }
                this.f37866d = false;
            }
        } else {
            this.f37865c = true;
            this.f37866d = true;
            this.f37867e = motionEvent.getEventTime();
            this.f37868f = motionEvent.getX();
            this.f37869g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37865c = false;
        this.f37866d = false;
    }

    public void f(InterfaceC0494a interfaceC0494a) {
        this.f37863a = interfaceC0494a;
    }
}
