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
    private final b f2918a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends b {

        /* renamed from: e  reason: collision with root package name */
        private static HandlerThread f2919e;

        /* renamed from: f  reason: collision with root package name */
        private static Handler f2920f;

        /* renamed from: a  reason: collision with root package name */
        int f2921a;

        /* renamed from: b  reason: collision with root package name */
        SparseIntArray[] f2922b = new SparseIntArray[9];

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f2923c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        Window.OnFrameMetricsAvailableListener f2924d = new Window$OnFrameMetricsAvailableListenerC0033a();

        /* renamed from: androidx.core.app.FrameMetricsAggregator$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Window$OnFrameMetricsAvailableListenerC0033a implements Window.OnFrameMetricsAvailableListener {
            Window$OnFrameMetricsAvailableListenerC0033a() {
            }

            @Override // android.view.Window.OnFrameMetricsAvailableListener
            public void onFrameMetricsAvailable(Window window, FrameMetrics frameMetrics, int i10) {
                a aVar = a.this;
                if ((aVar.f2921a & 1) != 0) {
                    aVar.f(aVar.f2922b[0], frameMetrics.getMetric(8));
                }
                a aVar2 = a.this;
                if ((aVar2.f2921a & 2) != 0) {
                    aVar2.f(aVar2.f2922b[1], frameMetrics.getMetric(1));
                }
                a aVar3 = a.this;
                if ((aVar3.f2921a & 4) != 0) {
                    aVar3.f(aVar3.f2922b[2], frameMetrics.getMetric(3));
                }
                a aVar4 = a.this;
                if ((aVar4.f2921a & 8) != 0) {
                    aVar4.f(aVar4.f2922b[3], frameMetrics.getMetric(4));
                }
                a aVar5 = a.this;
                if ((aVar5.f2921a & 16) != 0) {
                    aVar5.f(aVar5.f2922b[4], frameMetrics.getMetric(5));
                }
                a aVar6 = a.this;
                if ((aVar6.f2921a & 64) != 0) {
                    aVar6.f(aVar6.f2922b[6], frameMetrics.getMetric(7));
                }
                a aVar7 = a.this;
                if ((aVar7.f2921a & 32) != 0) {
                    aVar7.f(aVar7.f2922b[5], frameMetrics.getMetric(6));
                }
                a aVar8 = a.this;
                if ((aVar8.f2921a & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    aVar8.f(aVar8.f2922b[7], frameMetrics.getMetric(0));
                }
                a aVar9 = a.this;
                if ((aVar9.f2921a & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                    aVar9.f(aVar9.f2922b[8], frameMetrics.getMetric(2));
                }
            }
        }

        a(int i10) {
            this.f2921a = i10;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public void a(Activity activity) {
            if (f2919e == null) {
                HandlerThread handlerThread = new HandlerThread("FrameMetricsAggregator");
                f2919e = handlerThread;
                handlerThread.start();
                f2920f = new Handler(f2919e.getLooper());
            }
            for (int i10 = 0; i10 <= 8; i10++) {
                SparseIntArray[] sparseIntArrayArr = this.f2922b;
                if (sparseIntArrayArr[i10] == null && (this.f2921a & (1 << i10)) != 0) {
                    sparseIntArrayArr[i10] = new SparseIntArray();
                }
            }
            activity.getWindow().addOnFrameMetricsAvailableListener(this.f2924d, f2920f);
            this.f2923c.add(new WeakReference(activity));
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] b() {
            return this.f2922b;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] c(Activity activity) {
            Iterator it = this.f2923c.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                WeakReference weakReference = (WeakReference) it.next();
                if (weakReference.get() == activity) {
                    this.f2923c.remove(weakReference);
                    break;
                }
            }
            activity.getWindow().removeOnFrameMetricsAvailableListener(this.f2924d);
            return this.f2922b;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] d() {
            SparseIntArray[] sparseIntArrayArr = this.f2922b;
            this.f2922b = new SparseIntArray[9];
            return sparseIntArrayArr;
        }

        @Override // androidx.core.app.FrameMetricsAggregator.b
        public SparseIntArray[] e() {
            for (int size = this.f2923c.size() - 1; size >= 0; size--) {
                WeakReference weakReference = (WeakReference) this.f2923c.get(size);
                Activity activity = (Activity) weakReference.get();
                if (weakReference.get() != null) {
                    activity.getWindow().removeOnFrameMetricsAvailableListener(this.f2924d);
                    this.f2923c.remove(size);
                }
            }
            return this.f2922b;
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
        this.f2918a.a(activity);
    }

    public SparseIntArray[] b() {
        return this.f2918a.b();
    }

    public SparseIntArray[] c(Activity activity) {
        return this.f2918a.c(activity);
    }

    public SparseIntArray[] d() {
        return this.f2918a.d();
    }

    public SparseIntArray[] e() {
        return this.f2918a.e();
    }

    public FrameMetricsAggregator(int i10) {
        this.f2918a = new a(i10);
    }
}
