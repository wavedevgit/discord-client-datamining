package fn;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f24215a;

    /* renamed from: b  reason: collision with root package name */
    private long f24216b;

    /* renamed from: c  reason: collision with root package name */
    private long f24217c;

    /* renamed from: d  reason: collision with root package name */
    private double f24218d;

    /* renamed from: e  reason: collision with root package name */
    private double f24219e;

    /* renamed from: f  reason: collision with root package name */
    private float f24220f;

    /* renamed from: g  reason: collision with root package name */
    private float f24221g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f24222h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f24223i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f24224j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(w wVar);

        void b(w wVar);

        boolean c(w wVar);
    }

    public w(a aVar) {
        this.f24215a = aVar;
    }

    private final void a() {
        if (this.f24222h) {
            this.f24224j = false;
            this.f24222h = false;
            a aVar = this.f24215a;
            if (aVar != null) {
                aVar.b(this);
            }
        }
    }

    private final void g() {
        if (this.f24224j) {
            return;
        }
        this.f24224j = true;
    }

    private final void h(double d10) {
        if (!this.f24224j) {
            return;
        }
        this.f24218d = d10;
        this.f24224j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f24217c = this.f24216b;
        this.f24216b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f24223i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f24223i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f24220f = (x10 + x11) * 0.5f;
            this.f24221g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f24218d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f24218d - d11;
            }
            this.f24219e = d10;
            this.f24218d = d11;
            if (d10 > 3.141592653589793d) {
                this.f24219e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f24219e = d10 + 3.141592653589793d;
            }
            double d12 = this.f24219e;
            if (d12 > 1.5707963267948966d) {
                this.f24219e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f24219e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f24220f;
    }

    public final float c() {
        return this.f24221g;
    }

    public final double d() {
        return this.f24219e;
    }

    public final long e() {
        return this.f24216b - this.f24217c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f24222h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f24223i;
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
                        if (!this.f24222h || this.f24224j) {
                            this.f24223i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f24222h) {
                            this.f24222h = true;
                            this.f24217c = event.getEventTime();
                            this.f24218d = Double.NaN;
                            a aVar2 = this.f24215a;
                            if (aVar2 != null) {
                                aVar2.c(this);
                            }
                        }
                    }
                } else if (this.f24222h) {
                    i(event);
                    if (!this.f24224j && (aVar = this.f24215a) != null) {
                        aVar.a(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f24222h = false;
            this.f24223i[0] = event.getPointerId(event.getActionIndex());
            this.f24223i[1] = -1;
        }
        return true;
    }
}
