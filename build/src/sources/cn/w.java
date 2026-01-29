package cn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f8660a;

    /* renamed from: b  reason: collision with root package name */
    private long f8661b;

    /* renamed from: c  reason: collision with root package name */
    private long f8662c;

    /* renamed from: d  reason: collision with root package name */
    private double f8663d;

    /* renamed from: e  reason: collision with root package name */
    private double f8664e;

    /* renamed from: f  reason: collision with root package name */
    private float f8665f;

    /* renamed from: g  reason: collision with root package name */
    private float f8666g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f8667h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f8668i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f8669j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f8660a = aVar;
    }

    private final void a() {
        if (this.f8667h) {
            this.f8669j = false;
            this.f8667h = false;
            a aVar = this.f8660a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f8669j) {
            return;
        }
        this.f8669j = true;
    }

    private final void h(double d10) {
        if (!this.f8669j) {
            return;
        }
        this.f8663d = d10;
        this.f8669j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f8662c = this.f8661b;
        this.f8661b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f8668i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f8668i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f8665f = (x10 + x11) * 0.5f;
            this.f8666g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f8663d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f8663d - d11;
            }
            this.f8664e = d10;
            this.f8663d = d11;
            if (d10 > 3.141592653589793d) {
                this.f8664e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f8664e = d10 + 3.141592653589793d;
            }
            double d12 = this.f8664e;
            if (d12 > 1.5707963267948966d) {
                this.f8664e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f8664e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f8665f;
    }

    public final float c() {
        return this.f8666g;
    }

    public final double d() {
        return this.f8664e;
    }

    public final long e() {
        return this.f8661b - this.f8662c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f8667h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f8668i;
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
                        if (!this.f8667h || this.f8669j) {
                            this.f8668i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f8667h) {
                            this.f8667h = true;
                            this.f8662c = event.getEventTime();
                            this.f8663d = Double.NaN;
                            a aVar2 = this.f8660a;
                            if (aVar2 != null) {
                                aVar2.c(this);
                            }
                        }
                    }
                } else if (this.f8667h) {
                    i(event);
                    if (!this.f8669j && (aVar = this.f8660a) != null) {
                        aVar.b(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f8667h = false;
            this.f8668i[0] = event.getPointerId(event.getActionIndex());
            this.f8668i[1] = -1;
        }
        return true;
    }
}
