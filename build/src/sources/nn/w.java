package nn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f38135a;

    /* renamed from: b  reason: collision with root package name */
    private long f38136b;

    /* renamed from: c  reason: collision with root package name */
    private long f38137c;

    /* renamed from: d  reason: collision with root package name */
    private double f38138d;

    /* renamed from: e  reason: collision with root package name */
    private double f38139e;

    /* renamed from: f  reason: collision with root package name */
    private float f38140f;

    /* renamed from: g  reason: collision with root package name */
    private float f38141g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f38142h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f38143i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f38144j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(w wVar);

        boolean b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f38135a = aVar;
    }

    private final void a() {
        if (this.f38142h) {
            this.f38144j = false;
            this.f38142h = false;
            a aVar = this.f38135a;
            if (aVar != null) {
                aVar.a(this);
            }
        }
    }

    private final void g() {
        if (this.f38144j) {
            return;
        }
        this.f38144j = true;
    }

    private final void h(double d10) {
        if (!this.f38144j) {
            return;
        }
        this.f38138d = d10;
        this.f38144j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f38137c = this.f38136b;
        this.f38136b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f38143i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f38143i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f38140f = (x10 + x11) * 0.5f;
            this.f38141g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f38138d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f38138d - d11;
            }
            this.f38139e = d10;
            this.f38138d = d11;
            if (d10 > 3.141592653589793d) {
                this.f38139e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f38139e = d10 + 3.141592653589793d;
            }
            double d12 = this.f38139e;
            if (d12 > 1.5707963267948966d) {
                this.f38139e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f38139e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f38140f;
    }

    public final float c() {
        return this.f38141g;
    }

    public final double d() {
        return this.f38139e;
    }

    public final long e() {
        return this.f38136b - this.f38137c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f38142h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f38143i;
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
                        if (!this.f38142h || this.f38144j) {
                            this.f38143i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f38142h) {
                            this.f38142h = true;
                            this.f38137c = event.getEventTime();
                            this.f38138d = Double.NaN;
                            a aVar2 = this.f38135a;
                            if (aVar2 != null) {
                                aVar2.c(this);
                            }
                        }
                    }
                } else if (this.f38142h) {
                    i(event);
                    if (!this.f38144j && (aVar = this.f38135a) != null) {
                        aVar.b(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f38142h = false;
            this.f38143i[0] = event.getPointerId(event.getActionIndex());
            this.f38143i[1] = -1;
        }
        return true;
    }
}
