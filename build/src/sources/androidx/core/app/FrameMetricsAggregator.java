package androidx.core.app;

import android.app.Activity;
import android.os.Handler;
import android.os.HandlerThread;
import android.util.SparseIntArray;
import android.view.FrameMetrics;
import android.view.Window;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameMetricsAggregator {

    /* renamed from: a  reason: collision with root package name */
    private final b f2874a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends b {

        /* renamed from: e  reason: collision with root package name */
        private static HandlerThread f2875e;

        /* renamed from: f  reason: collision with root package name */
        private static Handler f2876f;

        /* renamed from: a  reason: collision with root package name */
        int f2877a;

        /* renamed from: b  reason: collision with root package name */
        SparseIntArray[] f2878b = new SparseIntArray[9];

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f2879c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        Window.OnFrameMetricsAvailableListener f2880d = new Window$OnFrameMetricsAvailableListenerC0029a();

        /* renamed from: androidx.core.app.FrameMetricsAggregator$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Window$OnFrameMetricsAvailableListenerC0029a implements Window.OnFrameMetricsAvailableListener {
            Window$OnFrameMetricsAvailableListenerC0029a() {
            }

            @Override // android.view.Window.OnFrameMetricsAvailableListener
            public void onFrameMetricsAvailable(Window window, FrameMetrics frameMetrics, int i10) {
                a aVar = a.this;
                if ((aVar.f2877a & 1) != 0) {
                    aVar.f(aVar.f2878b[0], frameMetrics.getMetric(8));
                }
                a aVar2 = a.this;
                if ((aVar2.f2877a & 2) != 0) {
                    aVar2.f(aVar2.f2878b[1], frameMetrics.getMetric(1));
                }
                a aVar3 = a.this;
                if ((aVar3.f2877a & 4) != 0) {
                    aVar3.f(aVar3.f2878b[2], frameMetrics.getMetric(3));
                }
                a aVar4 = a.this;
                if ((aVar4.f2877a & 8) != 0) {
                    aVar4.f(aVar4.f2878b[3], frameMetrics.getMetric(4));
                }
                a aVar5 = a.this;
                if ((aVar5.f2877a & 16) != 0) {
                    aVar5.f(aVar5.f2878b[4], frameMetrics.getMetric(5));
                }
                a aVar6 = a.this;
                if ((aVar6.f2877a & 64) != 0) {
                    aVar6.f(aVar6.f2878b[6], frameMetrics.getMetric(7));
                }
                a aVar7 = a.this;
                if ((aVar7.f2877a & 32) != 0) {
                    aVar7.f(aVar7.f2878b[5], frameMetrics.getMetric(6));
                }
                a aVar8 = a.this;
                if ((aVar8.f2877a & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    aVar8.f(aVar8.f2878b[7], frameMetrics.getMetric(0));
                }
                a aVar9 = a.this;
                if ((aVar9.f2877a & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                    aVar9.f(aVar9.f2878b[8], frameMetrics.getMetric(2));
                }
            }
        }

        a(int i10) {
            this.f2877a = i10;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public void a(Activity activity) {
            if (f2875e == null) {
                HandlerThread handlerThread = new HandlerThread("FrameMetricsAggregator");
                f2875e = handlerThread;
                handlerThread.start();
                f2876f = new Handler(f2875e.getLooper());
            }
            for (int i10 = 0; i10 <= 8; i10++) {
                SparseIntArray[] sparseIntArrayArr = this.f2878b;
                if (sparseIntArrayArr[i10] == null && (this.f2877a & (1 << i10)) != 0) {
                    sparseIntArrayArr[i10] = new SparseIntArray();
                }
            }
            activity.getWindow().addOnFrameMetricsAvailableListener(this.f2880d, f2876f);
            this.f2879c.add(new WeakReference(activity));
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] b() {
            return this.f2878b;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] c(Activity activity) {
            Iterator it = this.f2879c.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                WeakReference weakReference = (WeakReference) it.next();
                if (weakReference.get() == activity) {
                    this.f2879c.remove(weakReference);
                    break;
                }
            }
            activity.getWindow().removeOnFrameMetricsAvailableListener(this.f2880d);
            return this.f2878b;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] d() {
            SparseIntArray[] sparseIntArrayArr = this.f2878b;
            this.f2878b = new SparseIntArray[9];
            return sparseIntArrayArr;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] e() {
            for (int size = this.f2879c.size() - 1; size >= 0; size--) {
                WeakReference weakReference = (WeakReference) this.f2879c.get(size);
                Activity activity = (Activity) weakReference.get();
                if (weakReference.get() != null) {
                    activity.getWindow().removeOnFrameMetricsAvailableListener(this.f2880d);
                    this.f2879c.remove(size);
                }
            }
            return this.f2878b;
        }

        void f(SparseIntArray sparseIntArray, long j10) {
            if (sparseIntArray != null) {
                int i10 = (int) ((500000 + j10) / 1000000);
                if (j10 >= 0) {
                    sparseIntArray.put(i10, sparseIntArray.get(i10) + 1);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b {
        b() {
        }

        public abstract void a(Activity activity);

        public abstract SparseIntArray[] b();

        public abstract SparseIntArray[] c(Activity activity);

        public abstract SparseIntArray[] d();

        public abstract SparseIntArray[] e();
    }

    public FrameMetricsAggregator() {
        this(1);
    }

    public void a(Activity activity) {
        this.f2874a.a(activity);
    }

    public SparseIntArray[] b() {
        return this.f2874a.b();
    }

    public SparseIntArray[] c(Activity activity) {
        return this.f2874a.c(activity);
    }

    public SparseIntArray[] d() {
        return this.f2874a.d();
    }

    public SparseIntArray[] e() {
        return this.f2874a.e();
    }

    public FrameMetricsAggregator(int i10) {
        this.f2874a = new a(i10);
    }
}
