package in;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f27607a;

    /* renamed from: b  reason: collision with root package name */
    private long f27608b;

    /* renamed from: c  reason: collision with root package name */
    private long f27609c;

    /* renamed from: d  reason: collision with root package name */
    private double f27610d;

    /* renamed from: e  reason: collision with root package name */
    private double f27611e;

    /* renamed from: f  reason: collision with root package name */
    private float f27612f;

    /* renamed from: g  reason: collision with root package name */
    private float f27613g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f27614h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f27615i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f27616j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f27607a = aVar;
    }

    private final void a() {
        if (this.f27614h) {
            this.f27616j = false;
            this.f27614h = false;
            a aVar = this.f27607a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f27616j) {
            return;
        }
        this.f27616j = true;
    }

    private final void h(double d10) {
        if (!this.f27616j) {
            return;
        }
        this.f27610d = d10;
        this.f27616j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f27609c = this.f27608b;
        this.f27608b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f27615i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f27615i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f27612f = (x10 + x11) * 0.5f;
            this.f27613g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f27610d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f27610d - d11;
            }
            this.f27611e = d10;
            this.f27610d = d11;
            if (d10 > 3.141592653589793d) {
                this.f27611e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f27611e = d10 + 3.141592653589793d;
            }
            double d12 = this.f27611e;
            if (d12 > 1.5707963267948966d) {
                this.f27611e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f27611e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f27612f;
    }

    public final float c() {
        return this.f27613g;
    }

    public final double d() {
        return this.f27611e;
    }

    public final long e() {
        return this.f27608b - this.f27609c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f27614h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f27615i;
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
                        if (!this.f27614h || this.f27616j) {
                            this.f27615i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f27614h) {
                            this.f27614h = true;
                            this.f27609c = event.getEventTime();
                            this.f27610d = Double.NaN;
                            a aVar2 = this.f27607a;
                            if (aVar2 != null) {
                                aVar2.c(this);
                            }
                        }
                    }
                } else if (this.f27614h) {
                    i(event);
                    if (!this.f27616j && (aVar = this.f27607a) != null) {
                        aVar.b(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f27614h = false;
            this.f27615i[0] = event.getPointerId(event.getActionIndex());
            this.f27615i[1] = -1;
        }
        return true;
    }
}
