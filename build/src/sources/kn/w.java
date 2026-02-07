package kn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f31945a;

    /* renamed from: b  reason: collision with root package name */
    private long f31946b;

    /* renamed from: c  reason: collision with root package name */
    private long f31947c;

    /* renamed from: d  reason: collision with root package name */
    private double f31948d;

    /* renamed from: e  reason: collision with root package name */
    private double f31949e;

    /* renamed from: f  reason: collision with root package name */
    private float f31950f;

    /* renamed from: g  reason: collision with root package name */
    private float f31951g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f31952h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f31953i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f31954j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f31945a = aVar;
    }

    private final void a() {
        if (this.f31952h) {
            this.f31954j = false;
            this.f31952h = false;
            a aVar = this.f31945a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f31954j) {
            return;
        }
        this.f31954j = true;
    }

    private final void h(double d10) {
        if (!this.f31954j) {
            return;
        }
        this.f31948d = d10;
        this.f31954j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f31947c = this.f31946b;
        this.f31946b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f31953i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f31953i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f31950f = (x10 + x11) * 0.5f;
            this.f31951g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f31948d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f31948d - d11;
            }
            this.f31949e = d10;
            this.f31948d = d11;
            if (d10 > 3.141592653589793d) {
                this.f31949e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f31949e = d10 + 3.141592653589793d;
            }
            double d12 = this.f31949e;
            if (d12 > 1.5707963267948966d) {
                this.f31949e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f31949e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f31950f;
    }

    public final float c() {
        return this.f31951g;
    }

    public final double d() {
        return this.f31949e;
    }

    public final long e() {
        return this.f31946b - this.f31947c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f31952h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f31953i;
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
                        if (!this.f31952h || this.f31954j) {
                            this.f31953i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f31952h) {
                            this.f31952h = true;
                            this.f31947c = event.getEventTime();
                            this.f31948d = Double.NaN;
                            a aVar2 = this.f31945a;
                            if (aVar2 != null) {
                                aVar2.b(this);
                            }
                        }
                    }
                } else if (this.f31952h) {
                    i(event);
                    if (!this.f31954j && (aVar = this.f31945a) != null) {
                        aVar.c(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f31952h = false;
            this.f31953i[0] = event.getPointerId(event.getActionIndex());
            this.f31953i[1] = -1;
        }
        return true;
    }
}
