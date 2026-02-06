package kn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f31897a;

    /* renamed from: b  reason: collision with root package name */
    private long f31898b;

    /* renamed from: c  reason: collision with root package name */
    private long f31899c;

    /* renamed from: d  reason: collision with root package name */
    private double f31900d;

    /* renamed from: e  reason: collision with root package name */
    private double f31901e;

    /* renamed from: f  reason: collision with root package name */
    private float f31902f;

    /* renamed from: g  reason: collision with root package name */
    private float f31903g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f31904h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f31905i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f31906j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f31897a = aVar;
    }

    private final void a() {
        if (this.f31904h) {
            this.f31906j = false;
            this.f31904h = false;
            a aVar = this.f31897a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f31906j) {
            return;
        }
        this.f31906j = true;
    }

    private final void h(double d10) {
        if (!this.f31906j) {
            return;
        }
        this.f31900d = d10;
        this.f31906j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f31899c = this.f31898b;
        this.f31898b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f31905i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f31905i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f31902f = (x10 + x11) * 0.5f;
            this.f31903g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f31900d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f31900d - d11;
            }
            this.f31901e = d10;
            this.f31900d = d11;
            if (d10 > 3.141592653589793d) {
                this.f31901e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f31901e = d10 + 3.141592653589793d;
            }
            double d12 = this.f31901e;
            if (d12 > 1.5707963267948966d) {
                this.f31901e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f31901e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f31902f;
    }

    public final float c() {
        return this.f31903g;
    }

    public final double d() {
        return this.f31901e;
    }

    public final long e() {
        return this.f31898b - this.f31899c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f31904h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f31905i;
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
                        if (!this.f31904h || this.f31906j) {
                            this.f31905i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f31904h) {
                            this.f31904h = true;
                            this.f31899c = event.getEventTime();
                            this.f31900d = Double.NaN;
                            a aVar2 = this.f31897a;
                            if (aVar2 != null) {
                                aVar2.b(this);
                            }
                        }
                    }
                } else if (this.f31904h) {
                    i(event);
                    if (!this.f31906j && (aVar = this.f31897a) != null) {
                        aVar.c(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f31904h = false;
            this.f31905i[0] = event.getPointerId(event.getActionIndex());
            this.f31905i[1] = -1;
        }
        return true;
    }
}
