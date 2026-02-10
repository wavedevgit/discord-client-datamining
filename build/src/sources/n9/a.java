package n9;

import android.content.Context;
import android.view.MotionEvent;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    InterfaceC0550a f37991a;

    /* renamed from: b  reason: collision with root package name */
    final float f37992b;

    /* renamed from: c  reason: collision with root package name */
    boolean f37993c;

    /* renamed from: d  reason: collision with root package name */
    boolean f37994d;

    /* renamed from: e  reason: collision with root package name */
    long f37995e;

    /* renamed from: f  reason: collision with root package name */
    float f37996f;

    /* renamed from: g  reason: collision with root package name */
    float f37997g;

    /* renamed from: n9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0550a {
        boolean a();
    }

    public a(Context context) {
        this.f37992b = ViewConfiguration.get(context).getScaledTouchSlop();
        a();
    }

    public static a c(Context context) {
        return new a(context);
    }

    public void a() {
        this.f37991a = null;
        e();
    }

    public boolean b() {
        return this.f37993c;
    }

    public boolean d(MotionEvent motionEvent) {
        InterfaceC0550a interfaceC0550a;
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action != 2) {
                    if (action == 3) {
                        this.f37993c = false;
                        this.f37994d = false;
                    }
                } else if (Math.abs(motionEvent.getX() - this.f37996f) > this.f37992b || Math.abs(motionEvent.getY() - this.f37997g) > this.f37992b) {
                    this.f37994d = false;
                }
            } else {
                this.f37993c = false;
                if (Math.abs(motionEvent.getX() - this.f37996f) > this.f37992b || Math.abs(motionEvent.getY() - this.f37997g) > this.f37992b) {
                    this.f37994d = false;
                }
                if (this.f37994d && motionEvent.getEventTime() - this.f37995e <= ViewConfiguration.getLongPressTimeout() && (interfaceC0550a = this.f37991a) != null) {
                    interfaceC0550a.a();
                }
                this.f37994d = false;
            }
        } else {
            this.f37993c = true;
            this.f37994d = true;
            this.f37995e = motionEvent.getEventTime();
            this.f37996f = motionEvent.getX();
            this.f37997g = motionEvent.getY();
        }
        return true;
    }

    public void e() {
        this.f37993c = false;
        this.f37994d = false;
    }

    public void f(InterfaceC0550a interfaceC0550a) {
        this.f37991a = interfaceC0550a;
    }
}
