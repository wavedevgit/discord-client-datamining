package androidx.dynamicanimation.animation;

import android.animation.ValueAnimator;
import android.os.Build;
import android.os.Looper;
import android.os.SystemClock;
import android.view.Choreographer;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: j  reason: collision with root package name */
    private static final ThreadLocal f4029j = new ThreadLocal();

    /* renamed from: e  reason: collision with root package name */
    private b3.f f4034e;

    /* renamed from: i  reason: collision with root package name */
    public e f4038i;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f4030a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f4031b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final b f4032c = new b();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f4033d = new Runnable() { // from class: b3.a
        @Override // java.lang.Runnable
        public final void run() {
            androidx.dynamicanimation.animation.a.this.f4032c.a();
        }
    };

    /* renamed from: f  reason: collision with root package name */
    long f4035f = 0;

    /* renamed from: g  reason: collision with root package name */
    private boolean f4036g = false;

    /* renamed from: h  reason: collision with root package name */
    public float f4037h = 1.0f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b {
        private b() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void a() {
            a.this.f4035f = SystemClock.uptimeMillis();
            a aVar = a.this;
            aVar.f(aVar.f4035f);
            if (a.this.f4031b.size() > 0) {
                a.this.f4034e.a(a.this.f4033d);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        boolean a(long j10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements e {

        /* renamed from: a  reason: collision with root package name */
        ValueAnimator.DurationScaleChangeListener f4040a;

        public d() {
        }

        @Override // androidx.dynamicanimation.animation.a.e
        public boolean a() {
            boolean unregisterDurationScaleChangeListener = ValueAnimator.unregisterDurationScaleChangeListener(this.f4040a);
            this.f4040a = null;
            return unregisterDurationScaleChangeListener;
        }

        @Override // androidx.dynamicanimation.animation.a.e
        public boolean b() {
            if (this.f4040a == null) {
                ValueAnimator.DurationScaleChangeListener durationScaleChangeListener = new ValueAnimator.DurationScaleChangeListener() { // from class: b3.b
                    public final void onChanged(float f10) {
                        androidx.dynamicanimation.animation.a.this.f4037h = f10;
                    }
                };
                this.f4040a = durationScaleChangeListener;
                return ValueAnimator.registerDurationScaleChangeListener(durationScaleChangeListener);
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface e {
        boolean a();

        boolean b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class f implements b3.f {

        /* renamed from: a  reason: collision with root package name */
        private final Choreographer f4042a = Choreographer.getInstance();

        /* renamed from: b  reason: collision with root package name */
        private final Looper f4043b = Looper.myLooper();

        f() {
        }

        @Override // b3.f
        public void a(final Runnable runnable) {
            this.f4042a.postFrameCallback(new Choreographer.FrameCallback() { // from class: androidx.dynamicanimation.animation.b
                @Override // android.view.Choreographer.FrameCallback
                public final void doFrame(long j10) {
                    runnable.run();
                }
            });
        }

        @Override // b3.f
        public boolean b() {
            if (Thread.currentThread() == this.f4043b.getThread()) {
                return true;
            }
            return false;
        }
    }

    public a(b3.f fVar) {
        this.f4034e = fVar;
    }

    private void e() {
        if (this.f4036g) {
            for (int size = this.f4031b.size() - 1; size >= 0; size--) {
                if (this.f4031b.get(size) == null) {
                    this.f4031b.remove(size);
                }
            }
            if (this.f4031b.size() == 0 && Build.VERSION.SDK_INT >= 33) {
                this.f4038i.a();
            }
            this.f4036g = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a h() {
        ThreadLocal threadLocal = f4029j;
        if (threadLocal.get() == null) {
            threadLocal.set(new a(new f()));
        }
        return (a) threadLocal.get();
    }

    private boolean i(c cVar, long j10) {
        Long l10 = (Long) this.f4030a.get(cVar);
        if (l10 == null) {
            return true;
        }
        if (l10.longValue() < j10) {
            this.f4030a.remove(cVar);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(c cVar, long j10) {
        if (this.f4031b.size() == 0) {
            this.f4034e.a(this.f4033d);
            if (Build.VERSION.SDK_INT >= 33) {
                this.f4037h = ValueAnimator.getDurationScale();
                if (this.f4038i == null) {
                    this.f4038i = new d();
                }
                this.f4038i.b();
            }
        }
        if (!this.f4031b.contains(cVar)) {
            this.f4031b.add(cVar);
        }
        if (j10 > 0) {
            this.f4030a.put(cVar, Long.valueOf(SystemClock.uptimeMillis() + j10));
        }
    }

    void f(long j10) {
        long uptimeMillis = SystemClock.uptimeMillis();
        for (int i10 = 0; i10 < this.f4031b.size(); i10++) {
            c cVar = (c) this.f4031b.get(i10);
            if (cVar != null && i(cVar, uptimeMillis)) {
                cVar.a(j10);
            }
        }
        e();
    }

    public float g() {
        return this.f4037h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f4034e.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(c cVar) {
        this.f4030a.remove(cVar);
        int indexOf = this.f4031b.indexOf(cVar);
        if (indexOf >= 0) {
            this.f4031b.set(indexOf, null);
            this.f4036g = true;
        }
    }
}
