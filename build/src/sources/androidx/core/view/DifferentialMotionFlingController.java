package androidx.core.view;

import android.content.Context;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.ViewConfiguration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DifferentialMotionFlingController {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3682a;

    /* renamed from: b  reason: collision with root package name */
    private final DifferentialMotionFlingTarget f3683b;

    /* renamed from: c  reason: collision with root package name */
    private final b f3684c;

    /* renamed from: d  reason: collision with root package name */
    private final a f3685d;

    /* renamed from: e  reason: collision with root package name */
    private VelocityTracker f3686e;

    /* renamed from: f  reason: collision with root package name */
    private float f3687f;

    /* renamed from: g  reason: collision with root package name */
    private int f3688g;

    /* renamed from: h  reason: collision with root package name */
    private int f3689h;

    /* renamed from: i  reason: collision with root package name */
    private int f3690i;

    /* renamed from: j  reason: collision with root package name */
    private final int[] f3691j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        float a(VelocityTracker velocityTracker, MotionEvent motionEvent, int i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(Context context, int[] iArr, MotionEvent motionEvent, int i10);
    }

    public DifferentialMotionFlingController(Context context, DifferentialMotionFlingTarget differentialMotionFlingTarget) {
        this(context, differentialMotionFlingTarget, new b() { // from class: androidx.core.view.g
            @Override // androidx.core.view.DifferentialMotionFlingController.b
            public final void a(Context context2, int[] iArr, MotionEvent motionEvent, int i10) {
                DifferentialMotionFlingController.c(context2, iArr, motionEvent, i10);
            }
        }, new a() { // from class: androidx.core.view.h
            @Override // androidx.core.view.DifferentialMotionFlingController.a
            public final float a(VelocityTracker velocityTracker, MotionEvent motionEvent, int i10) {
                float f10;
                f10 = DifferentialMotionFlingController.f(velocityTracker, motionEvent, i10);
                return f10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void c(Context context, int[] iArr, MotionEvent motionEvent, int i10) {
        ViewConfiguration viewConfiguration = ViewConfiguration.get(context);
        iArr[0] = k0.i(context, viewConfiguration, motionEvent.getDeviceId(), i10, motionEvent.getSource());
        iArr[1] = k0.h(context, viewConfiguration, motionEvent.getDeviceId(), i10, motionEvent.getSource());
    }

    private boolean d(MotionEvent motionEvent, int i10) {
        int source = motionEvent.getSource();
        int deviceId = motionEvent.getDeviceId();
        if (this.f3689h == source && this.f3690i == deviceId && this.f3688g == i10) {
            return false;
        }
        this.f3684c.a(this.f3682a, this.f3691j, motionEvent, i10);
        this.f3689h = source;
        this.f3690i = deviceId;
        this.f3688g = i10;
        return true;
    }

    private float e(MotionEvent motionEvent, int i10) {
        if (this.f3686e == null) {
            this.f3686e = VelocityTracker.obtain();
        }
        return this.f3685d.a(this.f3686e, motionEvent, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static float f(VelocityTracker velocityTracker, MotionEvent motionEvent, int i10) {
        e0.a(velocityTracker, motionEvent);
        e0.b(velocityTracker, 1000);
        return e0.d(velocityTracker, i10);
    }

    public void g(MotionEvent motionEvent, int i10) {
        boolean d10 = d(motionEvent, i10);
        if (this.f3691j[0] == Integer.MAX_VALUE) {
            VelocityTracker velocityTracker = this.f3686e;
            if (velocityTracker != null) {
                velocityTracker.recycle();
                this.f3686e = null;
                return;
            }
            return;
        }
        float e10 = e(motionEvent, i10) * this.f3683b.b();
        float signum = Math.signum(e10);
        float f10 = 0.0f;
        if (d10 || (signum != Math.signum(this.f3687f) && signum != 0.0f)) {
            this.f3683b.c();
        }
        float abs = Math.abs(e10);
        int[] iArr = this.f3691j;
        if (abs < iArr[0]) {
            return;
        }
        int i11 = iArr[1];
        float max = Math.max(-i11, Math.min(e10, i11));
        if (this.f3683b.a(max)) {
            f10 = max;
        }
        this.f3687f = f10;
    }

    DifferentialMotionFlingController(Context context, DifferentialMotionFlingTarget differentialMotionFlingTarget, b bVar, a aVar) {
        this.f3688g = -1;
        this.f3689h = -1;
        this.f3690i = -1;
        this.f3691j = new int[]{Integer.MAX_VALUE, 0};
        this.f3682a = context;
        this.f3683b = differentialMotionFlingTarget;
        this.f3684c = bVar;
        this.f3685d = aVar;
    }
}
