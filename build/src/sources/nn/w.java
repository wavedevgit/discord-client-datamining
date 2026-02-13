package nn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f38704a;

    /* renamed from: b  reason: collision with root package name */
    private long f38705b;

    /* renamed from: c  reason: collision with root package name */
    private long f38706c;

    /* renamed from: d  reason: collision with root package name */
    private double f38707d;

    /* renamed from: e  reason: collision with root package name */
    private double f38708e;

    /* renamed from: f  reason: collision with root package name */
    private float f38709f;

    /* renamed from: g  reason: collision with root package name */
    private float f38710g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f38711h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f38712i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f38713j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f38704a = aVar;
    }

    private final void a() {
        if (this.f38711h) {
            this.f38713j = false;
            this.f38711h = false;
            a aVar = this.f38704a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f38713j) {
            return;
        }
        this.f38713j = true;
    }

    private final void h(double d10) {
        if (!this.f38713j) {
            return;
        }
        this.f38707d = d10;
        this.f38713j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f38706c = this.f38705b;
        this.f38705b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f38712i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f38712i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f38709f = (x10 + x11) * 0.5f;
            this.f38710g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f38707d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f38707d - d11;
            }
            this.f38708e = d10;
            this.f38707d = d11;
            if (d10 > 3.141592653589793d) {
                this.f38708e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f38708e = d10 + 3.141592653589793d;
            }
            double d12 = this.f38708e;
            if (d12 > 1.5707963267948966d) {
                this.f38708e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f38708e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f38709f;
    }

    public final float c() {
        return this.f38710g;
    }

    public final double d() {
        return this.f38708e;
    }

    public final long e() {
        return this.f38705b - this.f38706c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f38711h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f38712i;
                            if (pointerId == iArr[0]) {
                                iArr[0] = iArr[1];
                                iArr[1] = -1;
                                g();
                            } else if (pointerId == iArr[1]) {
                                iArr[1] = -1;
                                g();
                            }
                        }
                    } else {
                        if (!this.f38711h || this.f38713j) {
                            this.f38712i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f38711h) {
                            this.f38711h = true;
                            this.f38706c = event.getEventTime();
                            this.f38707d = Double.NaN;
                            a aVar2 = this.f38704a;
                            if (aVar2 != null) {
                                aVar2.c(this);
                            }
                        }
                    }
                } else if (this.f38711h) {
                    i(event);
                    if (!this.f38713j && (aVar = this.f38704a) != null) {
                        aVar.b(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f38711h = false;
            this.f38712i[0] = event.getPointerId(event.getActionIndex());
            this.f38712i[1] = -1;
        }
        return true;
    }
}
