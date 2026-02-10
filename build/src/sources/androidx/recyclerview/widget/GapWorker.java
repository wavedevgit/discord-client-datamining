package androidx.recyclerview.widget;

import android.os.Trace;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.LongCompanionObject;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GapWorker implements Runnable {

    /* renamed from: p  reason: collision with root package name */
    static final ThreadLocal f4910p = new ThreadLocal();

    /* renamed from: q  reason: collision with root package name */
    static Comparator f4911q = new a();

    /* renamed from: e  reason: collision with root package name */
    long f4913e;

    /* renamed from: i  reason: collision with root package name */
    long f4914i;

    /* renamed from: d  reason: collision with root package name */
    ArrayList f4912d = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f4915o = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class LayoutPrefetchRegistryImpl implements RecyclerView.LayoutManager.LayoutPrefetchRegistry {

        /* renamed from: a  reason: collision with root package name */
        int f4916a;

        /* renamed from: b  reason: collision with root package name */
        int f4917b;

        /* renamed from: c  reason: collision with root package name */
        int[] f4918c;

        /* renamed from: d  reason: collision with root package name */
        int f4919d;

        @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry
        public void a(int i10, int i11) {
            if (i10 >= 0) {
                if (i11 >= 0) {
                    int i12 = this.f4919d;
                    int i13 = i12 * 2;
                    int[] iArr = this.f4918c;
                    if (iArr == null) {
                        int[] iArr2 = new int[4];
                        this.f4918c = iArr2;
                        Arrays.fill(iArr2, -1);
                    } else if (i13 >= iArr.length) {
                        int[] iArr3 = new int[i12 * 4];
                        this.f4918c = iArr3;
                        System.arraycopy(iArr, 0, iArr3, 0, iArr.length);
                    }
                    int[] iArr4 = this.f4918c;
                    iArr4[i13] = i10;
                    iArr4[i13 + 1] = i11;
                    this.f4919d++;
                    return;
                }
                throw new IllegalArgumentException("Pixel distance must be non-negative");
            }
            throw new IllegalArgumentException("Layout positions must be non-negative");
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b() {
            int[] iArr = this.f4918c;
            if (iArr != null) {
                Arrays.fill(iArr, -1);
            }
            this.f4919d = 0;
        }

        void c(RecyclerView recyclerView, boolean z10) {
            this.f4919d = 0;
            int[] iArr = this.f4918c;
            if (iArr != null) {
                Arrays.fill(iArr, -1);
            }
            RecyclerView.LayoutManager layoutManager = recyclerView.mLayout;
            if (recyclerView.mAdapter != null && layoutManager != null && layoutManager.isItemPrefetchEnabled()) {
                if (z10) {
                    if (!recyclerView.mAdapterHelper.p()) {
                        layoutManager.collectInitialPrefetchPositions(recyclerView.mAdapter.getItemCount(), this);
                    }
                } else if (!recyclerView.hasPendingAdapterUpdates()) {
                    layoutManager.collectAdjacentPrefetchPositions(this.f4916a, this.f4917b, recyclerView.mState, this);
                }
                int i10 = this.f4919d;
                if (i10 > layoutManager.mPrefetchMaxCountObserved) {
                    layoutManager.mPrefetchMaxCountObserved = i10;
                    layoutManager.mPrefetchMaxObservedInInitialPrefetch = z10;
                    recyclerView.mRecycler.P();
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean d(int i10) {
            if (this.f4918c != null) {
                int i11 = this.f4919d * 2;
                for (int i12 = 0; i12 < i11; i12 += 2) {
                    if (this.f4918c[i12] == i10) {
                        return true;
                    }
                }
            }
            return false;
        }

        void e(int i10, int i11) {
            this.f4916a = i10;
            this.f4917b = i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(b bVar, b bVar2) {
            boolean z10;
            boolean z11;
            RecyclerView recyclerView = bVar.f4923d;
            if (recyclerView == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (bVar2.f4923d == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10 != z11) {
                if (recyclerView == null) {
                    return 1;
                }
                return -1;
            }
            boolean z12 = bVar.f4920a;
            if (z12 != bVar2.f4920a) {
                if (!z12) {
                    return 1;
                }
                return -1;
            }
            int i10 = bVar2.f4921b - bVar.f4921b;
            if (i10 != 0) {
                return i10;
            }
            int i11 = bVar.f4922c - bVar2.f4922c;
            if (i11 == 0) {
                return 0;
            }
            return i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public boolean f4920a;

        /* renamed from: b  reason: collision with root package name */
        public int f4921b;

        /* renamed from: c  reason: collision with root package name */
        public int f4922c;

        /* renamed from: d  reason: collision with root package name */
        public RecyclerView f4923d;

        /* renamed from: e  reason: collision with root package name */
        public int f4924e;

        b() {
        }

        public void a() {
            this.f4920a = false;
            this.f4921b = 0;
            this.f4922c = 0;
            this.f4923d = null;
            this.f4924e = 0;
        }
    }

    private void b() {
        b bVar;
        boolean z10;
        int size = this.f4912d.size();
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            RecyclerView recyclerView = (RecyclerView) this.f4912d.get(i11);
            if (recyclerView.getWindowVisibility() == 0) {
                recyclerView.mPrefetchRegistry.c(recyclerView, false);
                i10 += recyclerView.mPrefetchRegistry.f4919d;
            }
        }
        this.f4915o.ensureCapacity(i10);
        int i12 = 0;
        for (int i13 = 0; i13 < size; i13++) {
            RecyclerView recyclerView2 = (RecyclerView) this.f4912d.get(i13);
            if (recyclerView2.getWindowVisibility() == 0) {
                LayoutPrefetchRegistryImpl layoutPrefetchRegistryImpl = recyclerView2.mPrefetchRegistry;
                int abs = Math.abs(layoutPrefetchRegistryImpl.f4916a) + Math.abs(layoutPrefetchRegistryImpl.f4917b);
                for (int i14 = 0; i14 < layoutPrefetchRegistryImpl.f4919d * 2; i14 += 2) {
                    if (i12 >= this.f4915o.size()) {
                        bVar = new b();
                        this.f4915o.add(bVar);
                    } else {
                        bVar = (b) this.f4915o.get(i12);
                    }
                    int[] iArr = layoutPrefetchRegistryImpl.f4918c;
                    int i15 = iArr[i14 + 1];
                    if (i15 <= abs) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    bVar.f4920a = z10;
                    bVar.f4921b = abs;
                    bVar.f4922c = i15;
                    bVar.f4923d = recyclerView2;
                    bVar.f4924e = iArr[i14];
                    i12++;
                }
            }
        }
        Collections.sort(this.f4915o, f4911q);
    }

    private void c(b bVar, long j10) {
        long j11;
        if (bVar.f4920a) {
            j11 = LongCompanionObject.MAX_VALUE;
        } else {
            j11 = j10;
        }
        RecyclerView.ViewHolder i10 = i(bVar.f4923d, bVar.f4924e, j11);
        if (i10 != null && i10.mNestedRecyclerView != null && i10.isBound() && !i10.isInvalid()) {
            h(i10.mNestedRecyclerView.get(), j10);
        }
    }

    private void d(long j10) {
        for (int i10 = 0; i10 < this.f4915o.size(); i10++) {
            b bVar = (b) this.f4915o.get(i10);
            if (bVar.f4923d != null) {
                c(bVar, j10);
                bVar.a();
            } else {
                return;
            }
        }
    }

    static boolean e(RecyclerView recyclerView, int i10) {
        int j10 = recyclerView.mChildHelper.j();
        for (int i11 = 0; i11 < j10; i11++) {
            RecyclerView.ViewHolder childViewHolderInt = RecyclerView.getChildViewHolderInt(recyclerView.mChildHelper.i(i11));
            if (childViewHolderInt.mPosition == i10 && !childViewHolderInt.isInvalid()) {
                return true;
            }
        }
        return false;
    }

    private void h(RecyclerView recyclerView, long j10) {
        String str;
        if (recyclerView != null) {
            if (recyclerView.mDataSetHasChangedAfterLayout && recyclerView.mChildHelper.j() != 0) {
                recyclerView.removeAndRecycleViews();
            }
            LayoutPrefetchRegistryImpl layoutPrefetchRegistryImpl = recyclerView.mPrefetchRegistry;
            layoutPrefetchRegistryImpl.c(recyclerView, true);
            if (layoutPrefetchRegistryImpl.f4919d != 0) {
                if (j10 == LongCompanionObject.MAX_VALUE) {
                    str = "RV Nested Prefetch";
                } else {
                    str = "RV Nested Prefetch forced - needed next frame";
                }
                try {
                    Trace.beginSection(str);
                    recyclerView.mState.f(recyclerView.mAdapter);
                    for (int i10 = 0; i10 < layoutPrefetchRegistryImpl.f4919d * 2; i10 += 2) {
                        i(recyclerView, layoutPrefetchRegistryImpl.f4918c[i10], j10);
                    }
                    Trace.endSection();
                } catch (Throwable th2) {
                    Trace.endSection();
                    throw th2;
                }
            }
        }
    }

    private RecyclerView.ViewHolder i(RecyclerView recyclerView, int i10, long j10) {
        if (e(recyclerView, i10)) {
            return null;
        }
        RecyclerView.Recycler recycler = recyclerView.mRecycler;
        if (j10 == LongCompanionObject.MAX_VALUE) {
            try {
                if (w1.i.c()) {
                    Trace.beginSection("RV Prefetch forced - needed next frame");
                }
            } catch (Throwable th2) {
                recyclerView.onExitLayoutOrScroll(false);
                Trace.endSection();
                throw th2;
            }
        }
        recyclerView.onEnterLayoutOrScroll();
        RecyclerView.ViewHolder N = recycler.N(i10, false, j10);
        if (N != null) {
            if (N.isBound() && !N.isInvalid()) {
                recycler.G(N.itemView);
            } else {
                recycler.a(N, false);
            }
        }
        recyclerView.onExitLayoutOrScroll(false);
        Trace.endSection();
        return N;
    }

    public void a(RecyclerView recyclerView) {
        if (RecyclerView.sDebugAssertionsEnabled && this.f4912d.contains(recyclerView)) {
            throw new IllegalStateException("RecyclerView already present in worker list!");
        }
        this.f4912d.add(recyclerView);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(RecyclerView recyclerView, int i10, int i11) {
        if (recyclerView.isAttachedToWindow()) {
            if (RecyclerView.sDebugAssertionsEnabled && !this.f4912d.contains(recyclerView)) {
                throw new IllegalStateException("attempting to post unregistered view!");
            }
            if (this.f4913e == 0) {
                this.f4913e = recyclerView.getNanoTime();
                recyclerView.post(this);
            }
        }
        recyclerView.mPrefetchRegistry.e(i10, i11);
    }

    void g(long j10) {
        b();
        d(j10);
    }

    public void j(RecyclerView recyclerView) {
        boolean remove = this.f4912d.remove(recyclerView);
        if (RecyclerView.sDebugAssertionsEnabled && !remove) {
            throw new IllegalStateException("RecyclerView removal failed!");
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            Trace.beginSection("RV Prefetch");
            if (!this.f4912d.isEmpty()) {
                int size = this.f4912d.size();
                long j10 = 0;
                for (int i10 = 0; i10 < size; i10++) {
                    RecyclerView recyclerView = (RecyclerView) this.f4912d.get(i10);
                    if (recyclerView.getWindowVisibility() == 0) {
                        j10 = Math.max(recyclerView.getDrawingTime(), j10);
                    }
                }
                if (j10 != 0) {
                    g(TimeUnit.MILLISECONDS.toNanos(j10) + this.f4914i);
                }
            }
        } finally {
            this.f4913e = 0L;
            Trace.endSection();
        }
    }
}
