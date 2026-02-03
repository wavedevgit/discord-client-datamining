package dn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f21989a;

    /* renamed from: b  reason: collision with root package name */
    private long f21990b;

    /* renamed from: c  reason: collision with root package name */
    private long f21991c;

    /* renamed from: d  reason: collision with root package name */
    private double f21992d;

    /* renamed from: e  reason: collision with root package name */
    private double f21993e;

    /* renamed from: f  reason: collision with root package name */
    private float f21994f;

    /* renamed from: g  reason: collision with root package name */
    private float f21995g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21996h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f21997i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f21998j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f21989a = aVar;
    }

    private final void a() {
        if (this.f21996h) {
            this.f21998j = false;
            this.f21996h = false;
            a aVar = this.f21989a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f21998j) {
            return;
        }
        this.f21998j = true;
    }

    private final void h(double d10) {
        if (!this.f21998j) {
            return;
        }
        this.f21992d = d10;
        this.f21998j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f21991c = this.f21990b;
        this.f21990b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f21997i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f21997i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f21994f = (x10 + x11) * 0.5f;
            this.f21995g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f21992d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f21992d - d11;
            }
            this.f21993e = d10;
            this.f21992d = d11;
            if (d10 > 3.141592653589793d) {
                this.f21993e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f21993e = d10 + 3.141592653589793d;
            }
            double d12 = this.f21993e;
            if (d12 > 1.5707963267948966d) {
                this.f21993e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f21993e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f21994f;
    }

    public final float c() {
        return this.f21995g;
    }

    public final double d() {
        return this.f21993e;
    }

    public final long e() {
        return this.f21990b - this.f21991c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f21996h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f21997i;
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
                        if (!this.f21996h || this.f21998j) {
                            this.f21997i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f21996h) {
                            this.f21996h = true;
                            this.f21991c = event.getEventTime();
                            this.f21992d = Double.NaN;
                            a aVar2 = this.f21989a;
                            if (aVar2 != null) {
                                aVar2.b(this);
                            }
                        }
                    }
                } else if (this.f21996h) {
                    i(event);
                    if (!this.f21998j && (aVar = this.f21989a) != null) {
                        aVar.c(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f21996h = false;
            this.f21997i[0] = event.getPointerId(event.getActionIndex());
            this.f21997i[1] = -1;
        }
        return true;
    }
}
