package ln;

import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final a f36165a;

    /* renamed from: b  reason: collision with root package name */
    private long f36166b;

    /* renamed from: c  reason: collision with root package name */
    private long f36167c;

    /* renamed from: d  reason: collision with root package name */
    private double f36168d;

    /* renamed from: e  reason: collision with root package name */
    private double f36169e;

    /* renamed from: f  reason: collision with root package name */
    private float f36170f;

    /* renamed from: g  reason: collision with root package name */
    private float f36171g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f36172h;

    /* renamed from: i  reason: collision with root package name */
    private final int[] f36173i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f36174j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(w wVar);

        boolean b(w wVar);

        void c(w wVar);
    }

    public w(a aVar) {
        this.f36165a = aVar;
    }

    private final void a() {
        if (this.f36172h) {
            this.f36174j = false;
            this.f36172h = false;
            a aVar = this.f36165a;
            if (aVar != null) {
                aVar.c(this);
            }
        }
    }

    private final void g() {
        if (this.f36174j) {
            return;
        }
        this.f36174j = true;
    }

    private final void h(double d10) {
        if (!this.f36174j) {
            return;
        }
        this.f36168d = d10;
        this.f36174j = false;
    }

    private final void i(MotionEvent motionEvent) {
        double d10;
        this.f36167c = this.f36166b;
        this.f36166b = motionEvent.getEventTime();
        int findPointerIndex = motionEvent.findPointerIndex(this.f36173i[0]);
        int findPointerIndex2 = motionEvent.findPointerIndex(this.f36173i[1]);
        if (findPointerIndex != -1 && findPointerIndex2 != -1) {
            float x10 = motionEvent.getX(findPointerIndex);
            float y10 = motionEvent.getY(findPointerIndex);
            float x11 = motionEvent.getX(findPointerIndex2);
            float y11 = motionEvent.getY(findPointerIndex2);
            float f10 = y11 - y10;
            this.f36170f = (x10 + x11) * 0.5f;
            this.f36171g = (y10 + y11) * 0.5f;
            double d11 = -Math.atan2(f10, x11 - x10);
            h(d11);
            if (Double.isNaN(this.f36168d)) {
                d10 = 0.0d;
            } else {
                d10 = this.f36168d - d11;
            }
            this.f36169e = d10;
            this.f36168d = d11;
            if (d10 > 3.141592653589793d) {
                this.f36169e = d10 - 3.141592653589793d;
            } else if (d10 < -3.141592653589793d) {
                this.f36169e = d10 + 3.141592653589793d;
            }
            double d12 = this.f36169e;
            if (d12 > 1.5707963267948966d) {
                this.f36169e = d12 - 3.141592653589793d;
            } else if (d12 < -1.5707963267948966d) {
                this.f36169e = d12 + 3.141592653589793d;
            }
        }
    }

    public final float b() {
        return this.f36170f;
    }

    public final float c() {
        return this.f36171g;
    }

    public final double d() {
        return this.f36169e;
    }

    public final long e() {
        return this.f36166b - this.f36167c;
    }

    public final boolean f(MotionEvent event) {
        a aVar;
        Intrinsics.checkNotNullParameter(event, "event");
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6 && this.f36172h) {
                            int pointerId = event.getPointerId(event.getActionIndex());
                            int[] iArr = this.f36173i;
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
                        if (!this.f36172h || this.f36174j) {
                            this.f36173i[1] = event.getPointerId(event.getActionIndex());
                            i(event);
                        }
                        if (!this.f36172h) {
                            this.f36172h = true;
                            this.f36167c = event.getEventTime();
                            this.f36168d = Double.NaN;
                            a aVar2 = this.f36165a;
                            if (aVar2 != null) {
                                aVar2.b(this);
                            }
                        }
                    }
                } else if (this.f36172h) {
                    i(event);
                    if (!this.f36174j && (aVar = this.f36165a) != null) {
                        aVar.a(this);
                    }
                }
            } else {
                a();
            }
        } else {
            this.f36172h = false;
            this.f36173i[0] = event.getPointerId(event.getActionIndex());
            this.f36173i[1] = -1;
        }
        return true;
    }
}
