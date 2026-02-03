package androidx.recyclerview.widget;

import android.content.Context;
import android.graphics.PointF;
import android.graphics.Rect;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.BitSet;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class StaggeredGridLayoutManager extends RecyclerView.LayoutManager implements RecyclerView.SmoothScroller.a {
    private boolean A;
    private e B;
    private int C;
    private int[] H;

    /* renamed from: e  reason: collision with root package name */
    f[] f4914e;

    /* renamed from: i  reason: collision with root package name */
    OrientationHelper f4915i;

    /* renamed from: o  reason: collision with root package name */
    OrientationHelper f4916o;

    /* renamed from: p  reason: collision with root package name */
    private int f4917p;

    /* renamed from: q  reason: collision with root package name */
    private int f4918q;

    /* renamed from: r  reason: collision with root package name */
    private final k f4919r;

    /* renamed from: u  reason: collision with root package name */
    private BitSet f4922u;

    /* renamed from: z  reason: collision with root package name */
    private boolean f4927z;

    /* renamed from: d  reason: collision with root package name */
    private int f4913d = -1;

    /* renamed from: s  reason: collision with root package name */
    boolean f4920s = false;

    /* renamed from: t  reason: collision with root package name */
    boolean f4921t = false;

    /* renamed from: v  reason: collision with root package name */
    int f4923v = -1;

    /* renamed from: w  reason: collision with root package name */
    int f4924w = Integer.MIN_VALUE;

    /* renamed from: x  reason: collision with root package name */
    d f4925x = new d();

    /* renamed from: y  reason: collision with root package name */
    private int f4926y = 2;
    private final Rect D = new Rect();
    private final b E = new b();
    private boolean F = false;
    private boolean G = true;
    private final Runnable I = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            StaggeredGridLayoutManager.this.q();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b {

        /* renamed from: a  reason: collision with root package name */
        int f4929a;

        /* renamed from: b  reason: collision with root package name */
        int f4930b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4931c;

        /* renamed from: d  reason: collision with root package name */
        boolean f4932d;

        /* renamed from: e  reason: collision with root package name */
        boolean f4933e;

        /* renamed from: f  reason: collision with root package name */
        int[] f4934f;

        b() {
            c();
        }

        void a() {
            int m10;
            if (this.f4931c) {
                m10 = StaggeredGridLayoutManager.this.f4915i.i();
            } else {
                m10 = StaggeredGridLayoutManager.this.f4915i.m();
            }
            this.f4930b = m10;
        }

        void b(int i10) {
            if (this.f4931c) {
                this.f4930b = StaggeredGridLayoutManager.this.f4915i.i() - i10;
            } else {
                this.f4930b = StaggeredGridLayoutManager.this.f4915i.m() + i10;
            }
        }

        void c() {
            this.f4929a = -1;
            this.f4930b = Integer.MIN_VALUE;
            this.f4931c = false;
            this.f4932d = false;
            this.f4933e = false;
            int[] iArr = this.f4934f;
            if (iArr != null) {
                Arrays.fill(iArr, -1);
            }
        }

        void d(f[] fVarArr) {
            int length = fVarArr.length;
            int[] iArr = this.f4934f;
            if (iArr == null || iArr.length < length) {
                this.f4934f = new int[StaggeredGridLayoutManager.this.f4914e.length];
            }
            for (int i10 = 0; i10 < length; i10++) {
                this.f4934f[i10] = fVarArr[i10].p(Integer.MIN_VALUE);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends RecyclerView.LayoutParams {

        /* renamed from: p  reason: collision with root package name */
        f f4936p;

        /* renamed from: q  reason: collision with root package name */
        boolean f4937q;

        public c(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        public final int e() {
            f fVar = this.f4936p;
            if (fVar == null) {
                return -1;
            }
            return fVar.f4958e;
        }

        public boolean f() {
            return this.f4937q;
        }

        public c(int i10, int i11) {
            super(i10, i11);
        }

        public c(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
        }

        public c(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e implements Parcelable {
        public static final Parcelable.Creator<e> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        int f4944d;

        /* renamed from: e  reason: collision with root package name */
        int f4945e;

        /* renamed from: i  reason: collision with root package name */
        int f4946i;

        /* renamed from: o  reason: collision with root package name */
        int[] f4947o;

        /* renamed from: p  reason: collision with root package name */
        int f4948p;

        /* renamed from: q  reason: collision with root package name */
        int[] f4949q;

        /* renamed from: r  reason: collision with root package name */
        List f4950r;

        /* renamed from: s  reason: collision with root package name */
        boolean f4951s;

        /* renamed from: t  reason: collision with root package name */
        boolean f4952t;

        /* renamed from: u  reason: collision with root package name */
        boolean f4953u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public e createFromParcel(Parcel parcel) {
                return new e(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public e[] newArray(int i10) {
                return new e[i10];
            }
        }

        public e() {
        }

        void a() {
            this.f4947o = null;
            this.f4946i = 0;
            this.f4944d = -1;
            this.f4945e = -1;
        }

        void b() {
            this.f4947o = null;
            this.f4946i = 0;
            this.f4948p = 0;
            this.f4949q = null;
            this.f4950r = null;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f4944d);
            parcel.writeInt(this.f4945e);
            parcel.writeInt(this.f4946i);
            if (this.f4946i > 0) {
                parcel.writeIntArray(this.f4947o);
            }
            parcel.writeInt(this.f4948p);
            if (this.f4948p > 0) {
                parcel.writeIntArray(this.f4949q);
            }
            parcel.writeInt(this.f4951s ? 1 : 0);
            parcel.writeInt(this.f4952t ? 1 : 0);
            parcel.writeInt(this.f4953u ? 1 : 0);
            parcel.writeList(this.f4950r);
        }

        e(Parcel parcel) {
            this.f4944d = parcel.readInt();
            this.f4945e = parcel.readInt();
            int readInt = parcel.readInt();
            this.f4946i = readInt;
            if (readInt > 0) {
                int[] iArr = new int[readInt];
                this.f4947o = iArr;
                parcel.readIntArray(iArr);
            }
            int readInt2 = parcel.readInt();
            this.f4948p = readInt2;
            if (readInt2 > 0) {
                int[] iArr2 = new int[readInt2];
                this.f4949q = iArr2;
                parcel.readIntArray(iArr2);
            }
            this.f4951s = parcel.readInt() == 1;
            this.f4952t = parcel.readInt() == 1;
            this.f4953u = parcel.readInt() == 1;
            this.f4950r = parcel.readArrayList(d.a.class.getClassLoader());
        }

        public e(e eVar) {
            this.f4946i = eVar.f4946i;
            this.f4944d = eVar.f4944d;
            this.f4945e = eVar.f4945e;
            this.f4947o = eVar.f4947o;
            this.f4948p = eVar.f4948p;
            this.f4949q = eVar.f4949q;
            this.f4951s = eVar.f4951s;
            this.f4952t = eVar.f4952t;
            this.f4953u = eVar.f4953u;
            this.f4950r = eVar.f4950r;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f {

        /* renamed from: a  reason: collision with root package name */
        ArrayList f4954a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f4955b = Integer.MIN_VALUE;

        /* renamed from: c  reason: collision with root package name */
        int f4956c = Integer.MIN_VALUE;

        /* renamed from: d  reason: collision with root package name */
        int f4957d = 0;

        /* renamed from: e  reason: collision with root package name */
        final int f4958e;

        f(int i10) {
            this.f4958e = i10;
        }

        void a(View view) {
            c n10 = n(view);
            n10.f4936p = this;
            this.f4954a.add(view);
            this.f4956c = Integer.MIN_VALUE;
            if (this.f4954a.size() == 1) {
                this.f4955b = Integer.MIN_VALUE;
            }
            if (!n10.c() && !n10.b()) {
                return;
            }
            this.f4957d += StaggeredGridLayoutManager.this.f4915i.e(view);
        }

        void b(boolean z10, int i10) {
            int p10;
            if (z10) {
                p10 = l(Integer.MIN_VALUE);
            } else {
                p10 = p(Integer.MIN_VALUE);
            }
            e();
            if (p10 != Integer.MIN_VALUE) {
                if (!z10 || p10 >= StaggeredGridLayoutManager.this.f4915i.i()) {
                    if (!z10 && p10 > StaggeredGridLayoutManager.this.f4915i.m()) {
                        return;
                    }
                    if (i10 != Integer.MIN_VALUE) {
                        p10 += i10;
                    }
                    this.f4956c = p10;
                    this.f4955b = p10;
                }
            }
        }

        void c() {
            d.a f10;
            ArrayList arrayList = this.f4954a;
            View view = (View) arrayList.get(arrayList.size() - 1);
            c n10 = n(view);
            this.f4956c = StaggeredGridLayoutManager.this.f4915i.d(view);
            if (n10.f4937q && (f10 = StaggeredGridLayoutManager.this.f4925x.f(n10.a())) != null && f10.f4941e == 1) {
                this.f4956c += f10.a(this.f4958e);
            }
        }

        void d() {
            d.a f10;
            View view = (View) this.f4954a.get(0);
            c n10 = n(view);
            this.f4955b = StaggeredGridLayoutManager.this.f4915i.g(view);
            if (n10.f4937q && (f10 = StaggeredGridLayoutManager.this.f4925x.f(n10.a())) != null && f10.f4941e == -1) {
                this.f4955b -= f10.a(this.f4958e);
            }
        }

        void e() {
            this.f4954a.clear();
            q();
            this.f4957d = 0;
        }

        public int f() {
            if (StaggeredGridLayoutManager.this.f4920s) {
                return i(this.f4954a.size() - 1, -1, true);
            }
            return i(0, this.f4954a.size(), true);
        }

        public int g() {
            if (StaggeredGridLayoutManager.this.f4920s) {
                return i(0, this.f4954a.size(), true);
            }
            return i(this.f4954a.size() - 1, -1, true);
        }

        int h(int i10, int i11, boolean z10, boolean z11, boolean z12) {
            int i12;
            boolean z13;
            int m10 = StaggeredGridLayoutManager.this.f4915i.m();
            int i13 = StaggeredGridLayoutManager.this.f4915i.i();
            if (i11 > i10) {
                i12 = 1;
            } else {
                i12 = -1;
            }
            while (i10 != i11) {
                View view = (View) this.f4954a.get(i10);
                int g10 = StaggeredGridLayoutManager.this.f4915i.g(view);
                int d10 = StaggeredGridLayoutManager.this.f4915i.d(view);
                boolean z14 = false;
                if (!z12 ? g10 < i13 : g10 <= i13) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                if (!z12 ? d10 > m10 : d10 >= m10) {
                    z14 = true;
                }
                if (z13 && z14) {
                    if (z10 && z11) {
                        if (g10 >= m10 && d10 <= i13) {
                            return StaggeredGridLayoutManager.this.getPosition(view);
                        }
                    } else if (z11) {
                        return StaggeredGridLayoutManager.this.getPosition(view);
                    } else {
                        if (g10 < m10 || d10 > i13) {
                            return StaggeredGridLayoutManager.this.getPosition(view);
                        }
                    }
                }
                i10 += i12;
            }
            return -1;
        }

        int i(int i10, int i11, boolean z10) {
            return h(i10, i11, false, false, z10);
        }

        public int j() {
            return this.f4957d;
        }

        int k() {
            int i10 = this.f4956c;
            if (i10 != Integer.MIN_VALUE) {
                return i10;
            }
            c();
            return this.f4956c;
        }

        int l(int i10) {
            int i11 = this.f4956c;
            if (i11 != Integer.MIN_VALUE) {
                return i11;
            }
            if (this.f4954a.size() == 0) {
                return i10;
            }
            c();
            return this.f4956c;
        }

        public View m(int i10, int i11) {
            View view = null;
            if (i11 == -1) {
                int size = this.f4954a.size();
                int i12 = 0;
                while (i12 < size) {
                    View view2 = (View) this.f4954a.get(i12);
                    StaggeredGridLayoutManager staggeredGridLayoutManager = StaggeredGridLayoutManager.this;
                    if (staggeredGridLayoutManager.f4920s && staggeredGridLayoutManager.getPosition(view2) <= i10) {
                        break;
                    }
                    StaggeredGridLayoutManager staggeredGridLayoutManager2 = StaggeredGridLayoutManager.this;
                    if ((!staggeredGridLayoutManager2.f4920s && staggeredGridLayoutManager2.getPosition(view2) >= i10) || !view2.hasFocusable()) {
                        break;
                    }
                    i12++;
                    view = view2;
                }
                return view;
            }
            int size2 = this.f4954a.size() - 1;
            while (size2 >= 0) {
                View view3 = (View) this.f4954a.get(size2);
                StaggeredGridLayoutManager staggeredGridLayoutManager3 = StaggeredGridLayoutManager.this;
                if (staggeredGridLayoutManager3.f4920s && staggeredGridLayoutManager3.getPosition(view3) >= i10) {
                    break;
                }
                StaggeredGridLayoutManager staggeredGridLayoutManager4 = StaggeredGridLayoutManager.this;
                if ((!staggeredGridLayoutManager4.f4920s && staggeredGridLayoutManager4.getPosition(view3) <= i10) || !view3.hasFocusable()) {
                    break;
                }
                size2--;
                view = view3;
            }
            return view;
        }

        c n(View view) {
            return (c) view.getLayoutParams();
        }

        int o() {
            int i10 = this.f4955b;
            if (i10 != Integer.MIN_VALUE) {
                return i10;
            }
            d();
            return this.f4955b;
        }

        int p(int i10) {
            int i11 = this.f4955b;
            if (i11 != Integer.MIN_VALUE) {
                return i11;
            }
            if (this.f4954a.size() == 0) {
                return i10;
            }
            d();
            return this.f4955b;
        }

        void q() {
            this.f4955b = Integer.MIN_VALUE;
            this.f4956c = Integer.MIN_VALUE;
        }

        void r(int i10) {
            int i11 = this.f4955b;
            if (i11 != Integer.MIN_VALUE) {
                this.f4955b = i11 + i10;
            }
            int i12 = this.f4956c;
            if (i12 != Integer.MIN_VALUE) {
                this.f4956c = i12 + i10;
            }
        }

        void s() {
            int size = this.f4954a.size();
            View view = (View) this.f4954a.remove(size - 1);
            c n10 = n(view);
            n10.f4936p = null;
            if (n10.c() || n10.b()) {
                this.f4957d -= StaggeredGridLayoutManager.this.f4915i.e(view);
            }
            if (size == 1) {
                this.f4955b = Integer.MIN_VALUE;
            }
            this.f4956c = Integer.MIN_VALUE;
        }

        void t() {
            View view = (View) this.f4954a.remove(0);
            c n10 = n(view);
            n10.f4936p = null;
            if (this.f4954a.size() == 0) {
                this.f4956c = Integer.MIN_VALUE;
            }
            if (n10.c() || n10.b()) {
                this.f4957d -= StaggeredGridLayoutManager.this.f4915i.e(view);
            }
            this.f4955b = Integer.MIN_VALUE;
        }

        void u(View view) {
            c n10 = n(view);
            n10.f4936p = this;
            this.f4954a.add(0, view);
            this.f4955b = Integer.MIN_VALUE;
            if (this.f4954a.size() == 1) {
                this.f4956c = Integer.MIN_VALUE;
            }
            if (!n10.c() && !n10.b()) {
                return;
            }
            this.f4957d += StaggeredGridLayoutManager.this.f4915i.e(view);
        }

        void v(int i10) {
            this.f4955b = i10;
            this.f4956c = i10;
        }
    }

    public StaggeredGridLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        RecyclerView.LayoutManager.Properties properties = RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11);
        setOrientation(properties.f4846a);
        setSpanCount(properties.f4847b);
        setReverseLayout(properties.f4848c);
        this.f4919r = new k();
        x();
    }

    private int D(int i10) {
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            int position = getPosition(getChildAt(childCount));
            if (position >= 0 && position < i10) {
                return position;
            }
        }
        return 0;
    }

    private void E(RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int i10;
        int I = I(Integer.MIN_VALUE);
        if (I != Integer.MIN_VALUE && (i10 = this.f4915i.i() - I) > 0) {
            int i11 = i10 - (-scrollBy(-i10, recycler, state));
            if (z10 && i11 > 0) {
                this.f4915i.r(i11);
            }
        }
    }

    private void F(RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int m10;
        int L = L(Integer.MAX_VALUE);
        if (L != Integer.MAX_VALUE && (m10 = L - this.f4915i.m()) > 0) {
            int scrollBy = m10 - scrollBy(m10, recycler, state);
            if (z10 && scrollBy > 0) {
                this.f4915i.r(-scrollBy);
            }
        }
    }

    private int I(int i10) {
        int l10 = this.f4914e[0].l(i10);
        for (int i11 = 1; i11 < this.f4913d; i11++) {
            int l11 = this.f4914e[i11].l(i10);
            if (l11 > l10) {
                l10 = l11;
            }
        }
        return l10;
    }

    private int J(int i10) {
        int p10 = this.f4914e[0].p(i10);
        for (int i11 = 1; i11 < this.f4913d; i11++) {
            int p11 = this.f4914e[i11].p(i10);
            if (p11 > p10) {
                p10 = p11;
            }
        }
        return p10;
    }

    private int K(int i10) {
        int l10 = this.f4914e[0].l(i10);
        for (int i11 = 1; i11 < this.f4913d; i11++) {
            int l11 = this.f4914e[i11].l(i10);
            if (l11 < l10) {
                l10 = l11;
            }
        }
        return l10;
    }

    private int L(int i10) {
        int p10 = this.f4914e[0].p(i10);
        for (int i11 = 1; i11 < this.f4913d; i11++) {
            int p11 = this.f4914e[i11].p(i10);
            if (p11 < p10) {
                p10 = p11;
            }
        }
        return p10;
    }

    private f M(k kVar) {
        int i10;
        int i11;
        int i12;
        if (T(kVar.f5069e)) {
            i11 = this.f4913d - 1;
            i10 = -1;
            i12 = -1;
        } else {
            i10 = this.f4913d;
            i11 = 0;
            i12 = 1;
        }
        f fVar = null;
        if (kVar.f5069e == 1) {
            int m10 = this.f4915i.m();
            int i13 = Integer.MAX_VALUE;
            while (i11 != i10) {
                f fVar2 = this.f4914e[i11];
                int l10 = fVar2.l(m10);
                if (l10 < i13) {
                    fVar = fVar2;
                    i13 = l10;
                }
                i11 += i12;
            }
            return fVar;
        }
        int i14 = this.f4915i.i();
        int i15 = Integer.MIN_VALUE;
        while (i11 != i10) {
            f fVar3 = this.f4914e[i11];
            int p10 = fVar3.p(i14);
            if (p10 > i15) {
                fVar = fVar3;
                i15 = p10;
            }
            i11 += i12;
        }
        return fVar;
    }

    /* JADX WARN: Removed duplicated region for block: B:15:0x0026  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x003d  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0045  */
    /* JADX WARN: Removed duplicated region for block: B:32:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void N(int r7, int r8, int r9) {
        /*
            r6 = this;
            boolean r0 = r6.f4921t
            if (r0 == 0) goto L9
            int r0 = r6.H()
            goto Ld
        L9:
            int r0 = r6.G()
        Ld:
            r1 = 8
            if (r9 != r1) goto L1b
            if (r7 >= r8) goto L17
            int r2 = r8 + 1
        L15:
            r3 = r7
            goto L1e
        L17:
            int r2 = r7 + 1
            r3 = r8
            goto L1e
        L1b:
            int r2 = r7 + r8
            goto L15
        L1e:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r4 = r6.f4925x
            r4.h(r3)
            r4 = 1
            if (r9 == r4) goto L3d
            r5 = 2
            if (r9 == r5) goto L37
            if (r9 == r1) goto L2c
            goto L42
        L2c:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r9 = r6.f4925x
            r9.k(r7, r4)
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r7 = r6.f4925x
            r7.j(r8, r4)
            goto L42
        L37:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r9 = r6.f4925x
            r9.k(r7, r8)
            goto L42
        L3d:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r9 = r6.f4925x
            r9.j(r7, r8)
        L42:
            if (r2 > r0) goto L45
            goto L57
        L45:
            boolean r7 = r6.f4921t
            if (r7 == 0) goto L4e
            int r7 = r6.G()
            goto L52
        L4e:
            int r7 = r6.H()
        L52:
            if (r3 > r7) goto L57
            r6.requestLayout()
        L57:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.StaggeredGridLayoutManager.N(int, int, int):void");
    }

    private void Q(View view, int i10, int i11, boolean z10) {
        boolean shouldMeasureChild;
        calculateItemDecorationsForChild(view, this.D);
        c cVar = (c) view.getLayoutParams();
        int i12 = ((ViewGroup.MarginLayoutParams) cVar).leftMargin;
        Rect rect = this.D;
        int j02 = j0(i10, i12 + rect.left, ((ViewGroup.MarginLayoutParams) cVar).rightMargin + rect.right);
        int i13 = ((ViewGroup.MarginLayoutParams) cVar).topMargin;
        Rect rect2 = this.D;
        int j03 = j0(i11, i13 + rect2.top, ((ViewGroup.MarginLayoutParams) cVar).bottomMargin + rect2.bottom);
        if (z10) {
            shouldMeasureChild = shouldReMeasureChild(view, j02, j03, cVar);
        } else {
            shouldMeasureChild = shouldMeasureChild(view, j02, j03, cVar);
        }
        if (shouldMeasureChild) {
            view.measure(j02, j03);
        }
    }

    private void R(View view, c cVar, boolean z10) {
        if (cVar.f4937q) {
            if (this.f4917p == 1) {
                Q(view, this.C, RecyclerView.LayoutManager.getChildMeasureSpec(getHeight(), getHeightMode(), getPaddingTop() + getPaddingBottom(), ((ViewGroup.MarginLayoutParams) cVar).height, true), z10);
            } else {
                Q(view, RecyclerView.LayoutManager.getChildMeasureSpec(getWidth(), getWidthMode(), getPaddingLeft() + getPaddingRight(), ((ViewGroup.MarginLayoutParams) cVar).width, true), this.C, z10);
            }
        } else if (this.f4917p == 1) {
            Q(view, RecyclerView.LayoutManager.getChildMeasureSpec(this.f4918q, getWidthMode(), 0, ((ViewGroup.MarginLayoutParams) cVar).width, false), RecyclerView.LayoutManager.getChildMeasureSpec(getHeight(), getHeightMode(), getPaddingTop() + getPaddingBottom(), ((ViewGroup.MarginLayoutParams) cVar).height, true), z10);
        } else {
            Q(view, RecyclerView.LayoutManager.getChildMeasureSpec(getWidth(), getWidthMode(), getPaddingLeft() + getPaddingRight(), ((ViewGroup.MarginLayoutParams) cVar).width, true), RecyclerView.LayoutManager.getChildMeasureSpec(this.f4918q, getHeightMode(), 0, ((ViewGroup.MarginLayoutParams) cVar).height, false), z10);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:84:0x0152, code lost:
        if (q() != false) goto L81;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void S(androidx.recyclerview.widget.RecyclerView.Recycler r9, androidx.recyclerview.widget.RecyclerView.State r10, boolean r11) {
        /*
            Method dump skipped, instructions count: 374
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.StaggeredGridLayoutManager.S(androidx.recyclerview.widget.RecyclerView$Recycler, androidx.recyclerview.widget.RecyclerView$State, boolean):void");
    }

    private boolean T(int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f4917p == 0) {
            if (i10 == -1) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z12 == this.f4921t) {
                return false;
            }
            return true;
        }
        if (i10 == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 == this.f4921t) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11 != isLayoutRTL()) {
            return false;
        }
        return true;
    }

    private void V(View view) {
        for (int i10 = this.f4913d - 1; i10 >= 0; i10--) {
            this.f4914e[i10].u(view);
        }
    }

    private void W(RecyclerView.Recycler recycler, k kVar) {
        int min;
        int min2;
        if (kVar.f5065a && !kVar.f5073i) {
            if (kVar.f5066b == 0) {
                if (kVar.f5069e == -1) {
                    X(recycler, kVar.f5071g);
                } else {
                    Y(recycler, kVar.f5070f);
                }
            } else if (kVar.f5069e == -1) {
                int i10 = kVar.f5070f;
                int J = i10 - J(i10);
                if (J < 0) {
                    min2 = kVar.f5071g;
                } else {
                    min2 = kVar.f5071g - Math.min(J, kVar.f5066b);
                }
                X(recycler, min2);
            } else {
                int K = K(kVar.f5071g) - kVar.f5071g;
                if (K < 0) {
                    min = kVar.f5070f;
                } else {
                    min = Math.min(K, kVar.f5066b) + kVar.f5070f;
                }
                Y(recycler, min);
            }
        }
    }

    private void X(RecyclerView.Recycler recycler, int i10) {
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            if (this.f4915i.g(childAt) >= i10 && this.f4915i.q(childAt) >= i10) {
                c cVar = (c) childAt.getLayoutParams();
                if (cVar.f4937q) {
                    for (int i11 = 0; i11 < this.f4913d; i11++) {
                        if (this.f4914e[i11].f4954a.size() == 1) {
                            return;
                        }
                    }
                    for (int i12 = 0; i12 < this.f4913d; i12++) {
                        this.f4914e[i12].s();
                    }
                } else if (cVar.f4936p.f4954a.size() != 1) {
                    cVar.f4936p.s();
                } else {
                    return;
                }
                removeAndRecycleView(childAt, recycler);
            } else {
                return;
            }
        }
    }

    private void Y(RecyclerView.Recycler recycler, int i10) {
        while (getChildCount() > 0) {
            View childAt = getChildAt(0);
            if (this.f4915i.d(childAt) <= i10 && this.f4915i.p(childAt) <= i10) {
                c cVar = (c) childAt.getLayoutParams();
                if (cVar.f4937q) {
                    for (int i11 = 0; i11 < this.f4913d; i11++) {
                        if (this.f4914e[i11].f4954a.size() == 1) {
                            return;
                        }
                    }
                    for (int i12 = 0; i12 < this.f4913d; i12++) {
                        this.f4914e[i12].t();
                    }
                } else if (cVar.f4936p.f4954a.size() != 1) {
                    cVar.f4936p.t();
                } else {
                    return;
                }
                removeAndRecycleView(childAt, recycler);
            } else {
                return;
            }
        }
    }

    private void Z() {
        if (this.f4916o.k() != 1073741824) {
            int childCount = getChildCount();
            float f10 = 0.0f;
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = getChildAt(i10);
                float e10 = this.f4916o.e(childAt);
                if (e10 >= f10) {
                    if (((c) childAt.getLayoutParams()).f()) {
                        e10 = (e10 * 1.0f) / this.f4913d;
                    }
                    f10 = Math.max(f10, e10);
                }
            }
            int i11 = this.f4918q;
            int round = Math.round(f10 * this.f4913d);
            if (this.f4916o.k() == Integer.MIN_VALUE) {
                round = Math.min(round, this.f4916o.n());
            }
            h0(round);
            if (this.f4918q != i11) {
                for (int i12 = 0; i12 < childCount; i12++) {
                    View childAt2 = getChildAt(i12);
                    c cVar = (c) childAt2.getLayoutParams();
                    if (!cVar.f4937q) {
                        if (isLayoutRTL() && this.f4917p == 1) {
                            int i13 = this.f4913d;
                            int i14 = cVar.f4936p.f4958e;
                            childAt2.offsetLeftAndRight(((-((i13 - 1) - i14)) * this.f4918q) - ((-((i13 - 1) - i14)) * i11));
                        } else {
                            int i15 = cVar.f4936p.f4958e;
                            int i16 = this.f4918q * i15;
                            int i17 = i15 * i11;
                            if (this.f4917p == 1) {
                                childAt2.offsetLeftAndRight(i16 - i17);
                            } else {
                                childAt2.offsetTopAndBottom(i16 - i17);
                            }
                        }
                    }
                }
            }
        }
    }

    private void a0() {
        if (this.f4917p != 1 && isLayoutRTL()) {
            this.f4921t = !this.f4920s;
        } else {
            this.f4921t = this.f4920s;
        }
    }

    private void b0(int i10) {
        boolean z10;
        k kVar = this.f4919r;
        kVar.f5069e = i10;
        boolean z11 = this.f4921t;
        int i11 = 1;
        if (i10 == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z11 != z10) {
            i11 = -1;
        }
        kVar.f5068d = i11;
    }

    private void c0(int i10, int i11) {
        for (int i12 = 0; i12 < this.f4913d; i12++) {
            if (!this.f4914e[i12].f4954a.isEmpty()) {
                i0(this.f4914e[i12], i10, i11);
            }
        }
    }

    private int convertFocusDirectionToLayoutDirection(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 17) {
                    if (i10 != 33) {
                        if (i10 != 66) {
                            if (i10 == 130 && this.f4917p == 1) {
                                return 1;
                            }
                            return Integer.MIN_VALUE;
                        } else if (this.f4917p == 0) {
                            return 1;
                        } else {
                            return Integer.MIN_VALUE;
                        }
                    } else if (this.f4917p == 1) {
                        return -1;
                    } else {
                        return Integer.MIN_VALUE;
                    }
                } else if (this.f4917p == 0) {
                    return -1;
                } else {
                    return Integer.MIN_VALUE;
                }
            } else if (this.f4917p != 1 && isLayoutRTL()) {
                return -1;
            } else {
                return 1;
            }
        } else if (this.f4917p == 1 || !isLayoutRTL()) {
            return -1;
        } else {
            return 1;
        }
    }

    private boolean d0(RecyclerView.State state, b bVar) {
        int z10;
        if (this.f4927z) {
            z10 = D(state.b());
        } else {
            z10 = z(state.b());
        }
        bVar.f4929a = z10;
        bVar.f4930b = Integer.MIN_VALUE;
        return true;
    }

    private void g0(int i10, RecyclerView.State state) {
        int i11;
        int i12;
        int c10;
        boolean z10;
        k kVar = this.f4919r;
        boolean z11 = false;
        kVar.f5066b = 0;
        kVar.f5067c = i10;
        if (isSmoothScrolling() && (c10 = state.c()) != -1) {
            boolean z12 = this.f4921t;
            if (c10 < i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z12 == z10) {
                i11 = this.f4915i.n();
                i12 = 0;
            } else {
                i12 = this.f4915i.n();
                i11 = 0;
            }
        } else {
            i11 = 0;
            i12 = 0;
        }
        if (getClipToPadding()) {
            this.f4919r.f5070f = this.f4915i.m() - i12;
            this.f4919r.f5071g = this.f4915i.i() + i11;
        } else {
            this.f4919r.f5071g = this.f4915i.h() + i11;
            this.f4919r.f5070f = -i12;
        }
        k kVar2 = this.f4919r;
        kVar2.f5072h = false;
        kVar2.f5065a = true;
        if (this.f4915i.k() == 0 && this.f4915i.h() == 0) {
            z11 = true;
        }
        kVar2.f5073i = z11;
    }

    private void i0(f fVar, int i10, int i11) {
        int j10 = fVar.j();
        if (i10 == -1) {
            if (fVar.o() + j10 <= i11) {
                this.f4922u.set(fVar.f4958e, false);
            }
        } else if (fVar.k() - j10 >= i11) {
            this.f4922u.set(fVar.f4958e, false);
        }
    }

    private int j0(int i10, int i11, int i12) {
        int mode;
        if ((i11 == 0 && i12 == 0) || ((mode = View.MeasureSpec.getMode(i10)) != Integer.MIN_VALUE && mode != 1073741824)) {
            return i10;
        }
        return View.MeasureSpec.makeMeasureSpec(Math.max(0, (View.MeasureSpec.getSize(i10) - i11) - i12), mode);
    }

    private void k(View view) {
        for (int i10 = this.f4913d - 1; i10 >= 0; i10--) {
            this.f4914e[i10].a(view);
        }
    }

    private void l(b bVar) {
        int m10;
        e eVar = this.B;
        int i10 = eVar.f4946i;
        if (i10 > 0) {
            if (i10 == this.f4913d) {
                for (int i11 = 0; i11 < this.f4913d; i11++) {
                    this.f4914e[i11].e();
                    e eVar2 = this.B;
                    int i12 = eVar2.f4947o[i11];
                    if (i12 != Integer.MIN_VALUE) {
                        if (eVar2.f4952t) {
                            m10 = this.f4915i.i();
                        } else {
                            m10 = this.f4915i.m();
                        }
                        i12 += m10;
                    }
                    this.f4914e[i11].v(i12);
                }
            } else {
                eVar.b();
                e eVar3 = this.B;
                eVar3.f4944d = eVar3.f4945e;
            }
        }
        e eVar4 = this.B;
        this.A = eVar4.f4953u;
        setReverseLayout(eVar4.f4951s);
        a0();
        e eVar5 = this.B;
        int i13 = eVar5.f4944d;
        if (i13 != -1) {
            this.f4923v = i13;
            bVar.f4931c = eVar5.f4952t;
        } else {
            bVar.f4931c = this.f4921t;
        }
        if (eVar5.f4948p > 1) {
            d dVar = this.f4925x;
            dVar.f4938a = eVar5.f4949q;
            dVar.f4939b = eVar5.f4950r;
        }
    }

    private void o(View view, c cVar, k kVar) {
        if (kVar.f5069e == 1) {
            if (cVar.f4937q) {
                k(view);
            } else {
                cVar.f4936p.a(view);
            }
        } else if (cVar.f4937q) {
            V(view);
        } else {
            cVar.f4936p.u(view);
        }
    }

    private int p(int i10) {
        boolean z10;
        if (getChildCount() == 0) {
            if (!this.f4921t) {
                return -1;
            }
            return 1;
        }
        if (i10 < G()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 != this.f4921t) {
            return -1;
        }
        return 1;
    }

    private boolean r(f fVar) {
        boolean z10;
        if (this.f4921t) {
            if (fVar.k() < this.f4915i.i()) {
                ArrayList arrayList = fVar.f4954a;
                z10 = fVar.n((View) arrayList.get(arrayList.size() - 1)).f4937q;
                return !z10;
            }
            return false;
        }
        if (fVar.o() > this.f4915i.m()) {
            z10 = fVar.n((View) fVar.f4954a.get(0)).f4937q;
            return !z10;
        }
        return false;
    }

    private int s(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        return p.a(state, this.f4915i, B(!this.G), A(!this.G), this, this.G);
    }

    private int t(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        return p.b(state, this.f4915i, B(!this.G), A(!this.G), this, this.G, this.f4921t);
    }

    private int u(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        return p.c(state, this.f4915i, B(!this.G), A(!this.G), this, this.G);
    }

    private d.a v(int i10) {
        d.a aVar = new d.a();
        aVar.f4942i = new int[this.f4913d];
        for (int i11 = 0; i11 < this.f4913d; i11++) {
            aVar.f4942i[i11] = i10 - this.f4914e[i11].l(i10);
        }
        return aVar;
    }

    private d.a w(int i10) {
        d.a aVar = new d.a();
        aVar.f4942i = new int[this.f4913d];
        for (int i11 = 0; i11 < this.f4913d; i11++) {
            aVar.f4942i[i11] = this.f4914e[i11].p(i10) - i10;
        }
        return aVar;
    }

    private void x() {
        this.f4915i = OrientationHelper.b(this, this.f4917p);
        this.f4916o = OrientationHelper.b(this, 1 - this.f4917p);
    }

    /* JADX WARN: Type inference failed for: r8v0 */
    /* JADX WARN: Type inference failed for: r8v1, types: [boolean, int] */
    /* JADX WARN: Type inference failed for: r8v5 */
    private int y(RecyclerView.Recycler recycler, k kVar, RecyclerView.State state) {
        int i10;
        int m10;
        int I;
        boolean z10;
        f fVar;
        int p10;
        int i11;
        int e10;
        int m11;
        int i12;
        int e11;
        boolean n10;
        StaggeredGridLayoutManager staggeredGridLayoutManager = this;
        ?? r82 = 0;
        staggeredGridLayoutManager.f4922u.set(0, staggeredGridLayoutManager.f4913d, true);
        if (staggeredGridLayoutManager.f4919r.f5073i) {
            if (kVar.f5069e == 1) {
                i10 = Integer.MAX_VALUE;
            } else {
                i10 = Integer.MIN_VALUE;
            }
        } else if (kVar.f5069e == 1) {
            i10 = kVar.f5071g + kVar.f5066b;
        } else {
            i10 = kVar.f5070f - kVar.f5066b;
        }
        int i13 = i10;
        staggeredGridLayoutManager.c0(kVar.f5069e, i13);
        if (staggeredGridLayoutManager.f4921t) {
            m10 = staggeredGridLayoutManager.f4915i.i();
        } else {
            m10 = staggeredGridLayoutManager.f4915i.m();
        }
        int i14 = m10;
        boolean z11 = false;
        while (kVar.a(state) && (staggeredGridLayoutManager.f4919r.f5073i || !staggeredGridLayoutManager.f4922u.isEmpty())) {
            View b10 = kVar.b(recycler);
            c cVar = (c) b10.getLayoutParams();
            int a10 = cVar.a();
            int g10 = staggeredGridLayoutManager.f4925x.g(a10);
            if (g10 == -1) {
                z10 = true;
            } else {
                z10 = r82;
            }
            if (z10) {
                if (cVar.f4937q) {
                    fVar = staggeredGridLayoutManager.f4914e[r82];
                } else {
                    fVar = staggeredGridLayoutManager.M(kVar);
                }
                staggeredGridLayoutManager.f4925x.n(a10, fVar);
            } else {
                fVar = staggeredGridLayoutManager.f4914e[g10];
            }
            f fVar2 = fVar;
            cVar.f4936p = fVar2;
            if (kVar.f5069e == 1) {
                staggeredGridLayoutManager.addView(b10);
            } else {
                staggeredGridLayoutManager.addView(b10, r82);
            }
            staggeredGridLayoutManager.R(b10, cVar, r82);
            if (kVar.f5069e == 1) {
                if (cVar.f4937q) {
                    e10 = staggeredGridLayoutManager.I(i14);
                } else {
                    e10 = fVar2.l(i14);
                }
                i11 = staggeredGridLayoutManager.f4915i.e(b10) + e10;
                if (z10 && cVar.f4937q) {
                    d.a v10 = staggeredGridLayoutManager.v(e10);
                    v10.f4941e = -1;
                    v10.f4940d = a10;
                    staggeredGridLayoutManager.f4925x.a(v10);
                }
            } else {
                if (cVar.f4937q) {
                    p10 = staggeredGridLayoutManager.L(i14);
                } else {
                    p10 = fVar2.p(i14);
                }
                i11 = p10;
                e10 = i11 - staggeredGridLayoutManager.f4915i.e(b10);
                if (z10 && cVar.f4937q) {
                    d.a w10 = staggeredGridLayoutManager.w(i11);
                    w10.f4941e = 1;
                    w10.f4940d = a10;
                    staggeredGridLayoutManager.f4925x.a(w10);
                }
            }
            if (cVar.f4937q && kVar.f5068d == -1) {
                if (z10) {
                    staggeredGridLayoutManager.F = true;
                } else {
                    if (kVar.f5069e == 1) {
                        n10 = staggeredGridLayoutManager.m();
                    } else {
                        n10 = staggeredGridLayoutManager.n();
                    }
                    if (!n10) {
                        d.a f10 = staggeredGridLayoutManager.f4925x.f(a10);
                        if (f10 != null) {
                            f10.f4943o = true;
                        }
                        staggeredGridLayoutManager.F = true;
                    }
                }
            }
            staggeredGridLayoutManager.o(b10, cVar, kVar);
            if (staggeredGridLayoutManager.isLayoutRTL() && staggeredGridLayoutManager.f4917p == 1) {
                if (cVar.f4937q) {
                    e11 = staggeredGridLayoutManager.f4916o.i();
                } else {
                    e11 = staggeredGridLayoutManager.f4916o.i() - (((staggeredGridLayoutManager.f4913d - 1) - fVar2.f4958e) * staggeredGridLayoutManager.f4918q);
                }
                i12 = e11 - staggeredGridLayoutManager.f4916o.e(b10);
            } else {
                if (cVar.f4937q) {
                    m11 = staggeredGridLayoutManager.f4916o.m();
                } else {
                    m11 = (fVar2.f4958e * staggeredGridLayoutManager.f4918q) + staggeredGridLayoutManager.f4916o.m();
                }
                i12 = m11;
                e11 = staggeredGridLayoutManager.f4916o.e(b10) + i12;
            }
            int i15 = e11;
            int i16 = i12;
            if (staggeredGridLayoutManager.f4917p == 1) {
                staggeredGridLayoutManager.layoutDecoratedWithMargins(b10, i16, e10, i15, i11);
                staggeredGridLayoutManager = this;
            } else {
                staggeredGridLayoutManager.layoutDecoratedWithMargins(b10, e10, i16, i11, i15);
            }
            if (cVar.f4937q) {
                staggeredGridLayoutManager.c0(staggeredGridLayoutManager.f4919r.f5069e, i13);
            } else {
                staggeredGridLayoutManager.i0(fVar2, staggeredGridLayoutManager.f4919r.f5069e, i13);
            }
            staggeredGridLayoutManager.W(recycler, staggeredGridLayoutManager.f4919r);
            if (staggeredGridLayoutManager.f4919r.f5072h && b10.hasFocusable()) {
                if (cVar.f4937q) {
                    staggeredGridLayoutManager.f4922u.clear();
                } else {
                    staggeredGridLayoutManager.f4922u.set(fVar2.f4958e, false);
                }
            }
            z11 = true;
            r82 = 0;
        }
        if (!z11) {
            staggeredGridLayoutManager.W(recycler, staggeredGridLayoutManager.f4919r);
        }
        if (staggeredGridLayoutManager.f4919r.f5069e == -1) {
            I = staggeredGridLayoutManager.f4915i.m() - staggeredGridLayoutManager.L(staggeredGridLayoutManager.f4915i.m());
        } else {
            I = staggeredGridLayoutManager.I(staggeredGridLayoutManager.f4915i.i()) - staggeredGridLayoutManager.f4915i.i();
        }
        if (I > 0) {
            return Math.min(kVar.f5066b, I);
        }
        return 0;
    }

    private int z(int i10) {
        int childCount = getChildCount();
        for (int i11 = 0; i11 < childCount; i11++) {
            int position = getPosition(getChildAt(i11));
            if (position >= 0 && position < i10) {
                return position;
            }
        }
        return 0;
    }

    View A(boolean z10) {
        int m10 = this.f4915i.m();
        int i10 = this.f4915i.i();
        View view = null;
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            int g10 = this.f4915i.g(childAt);
            int d10 = this.f4915i.d(childAt);
            if (d10 > m10 && g10 < i10) {
                if (d10 > i10 && z10) {
                    if (view == null) {
                        view = childAt;
                    }
                } else {
                    return childAt;
                }
            }
        }
        return view;
    }

    View B(boolean z10) {
        int m10 = this.f4915i.m();
        int i10 = this.f4915i.i();
        int childCount = getChildCount();
        View view = null;
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = getChildAt(i11);
            int g10 = this.f4915i.g(childAt);
            if (this.f4915i.d(childAt) > m10 && g10 < i10) {
                if (g10 < m10 && z10) {
                    if (view == null) {
                        view = childAt;
                    }
                } else {
                    return childAt;
                }
            }
        }
        return view;
    }

    int C() {
        View B;
        if (this.f4921t) {
            B = A(true);
        } else {
            B = B(true);
        }
        if (B == null) {
            return -1;
        }
        return getPosition(B);
    }

    int G() {
        if (getChildCount() == 0) {
            return 0;
        }
        return getPosition(getChildAt(0));
    }

    int H() {
        int childCount = getChildCount();
        if (childCount == 0) {
            return 0;
        }
        return getPosition(getChildAt(childCount - 1));
    }

    /* JADX WARN: Removed duplicated region for block: B:39:0x0097  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x0099  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x009c  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x009e  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x00a1 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:57:0x00a2 A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    android.view.View O() {
        /*
            r12 = this;
            int r0 = r12.getChildCount()
            int r1 = r0 + (-1)
            java.util.BitSet r2 = new java.util.BitSet
            int r3 = r12.f4913d
            r2.<init>(r3)
            int r3 = r12.f4913d
            r4 = 0
            r5 = 1
            r2.set(r4, r3, r5)
            int r3 = r12.f4917p
            r6 = -1
            if (r3 != r5) goto L21
            boolean r3 = r12.isLayoutRTL()
            if (r3 == 0) goto L21
            r3 = r5
            goto L22
        L21:
            r3 = r6
        L22:
            boolean r7 = r12.f4921t
            if (r7 == 0) goto L28
            r0 = r6
            goto L29
        L28:
            r1 = r4
        L29:
            if (r1 >= r0) goto L2c
            r6 = r5
        L2c:
            if (r1 == r0) goto La4
            android.view.View r7 = r12.getChildAt(r1)
            android.view.ViewGroup$LayoutParams r8 = r7.getLayoutParams()
            androidx.recyclerview.widget.StaggeredGridLayoutManager$c r8 = (androidx.recyclerview.widget.StaggeredGridLayoutManager.c) r8
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r8.f4936p
            int r9 = r9.f4958e
            boolean r9 = r2.get(r9)
            if (r9 == 0) goto L52
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r8.f4936p
            boolean r9 = r12.r(r9)
            if (r9 == 0) goto L4b
            goto La1
        L4b:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r8.f4936p
            int r9 = r9.f4958e
            r2.clear(r9)
        L52:
            boolean r9 = r8.f4937q
            if (r9 == 0) goto L57
            goto La2
        L57:
            int r9 = r1 + r6
            if (r9 == r0) goto La2
            android.view.View r9 = r12.getChildAt(r9)
            boolean r10 = r12.f4921t
            if (r10 == 0) goto L75
            androidx.recyclerview.widget.OrientationHelper r10 = r12.f4915i
            int r10 = r10.d(r7)
            androidx.recyclerview.widget.OrientationHelper r11 = r12.f4915i
            int r11 = r11.d(r9)
            if (r10 >= r11) goto L72
            goto La1
        L72:
            if (r10 != r11) goto La2
            goto L86
        L75:
            androidx.recyclerview.widget.OrientationHelper r10 = r12.f4915i
            int r10 = r10.g(r7)
            androidx.recyclerview.widget.OrientationHelper r11 = r12.f4915i
            int r11 = r11.g(r9)
            if (r10 <= r11) goto L84
            goto La1
        L84:
            if (r10 != r11) goto La2
        L86:
            android.view.ViewGroup$LayoutParams r9 = r9.getLayoutParams()
            androidx.recyclerview.widget.StaggeredGridLayoutManager$c r9 = (androidx.recyclerview.widget.StaggeredGridLayoutManager.c) r9
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r8 = r8.f4936p
            int r8 = r8.f4958e
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r9.f4936p
            int r9 = r9.f4958e
            int r8 = r8 - r9
            if (r8 >= 0) goto L99
            r8 = r5
            goto L9a
        L99:
            r8 = r4
        L9a:
            if (r3 >= 0) goto L9e
            r9 = r5
            goto L9f
        L9e:
            r9 = r4
        L9f:
            if (r8 == r9) goto La2
        La1:
            return r7
        La2:
            int r1 = r1 + r6
            goto L2c
        La4:
            r0 = 0
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.recyclerview.widget.StaggeredGridLayoutManager.O():android.view.View");
    }

    public void P() {
        this.f4925x.b();
        requestLayout();
    }

    void U(int i10, RecyclerView.State state) {
        int G;
        int i11;
        if (i10 > 0) {
            G = H();
            i11 = 1;
        } else {
            G = G();
            i11 = -1;
        }
        this.f4919r.f5065a = true;
        g0(G, state);
        b0(i11);
        k kVar = this.f4919r;
        kVar.f5067c = G + kVar.f5068d;
        kVar.f5066b = Math.abs(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void assertNotInLayoutOrScroll(String str) {
        if (this.B == null) {
            super.assertNotInLayoutOrScroll(str);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollHorizontally() {
        if (this.f4917p == 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollVertically() {
        if (this.f4917p == 1) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean checkLayoutParams(RecyclerView.LayoutParams layoutParams) {
        return layoutParams instanceof c;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void collectAdjacentPrefetchPositions(int i10, int i11, RecyclerView.State state, RecyclerView.LayoutManager.LayoutPrefetchRegistry layoutPrefetchRegistry) {
        int l10;
        int i12;
        if (this.f4917p != 0) {
            i10 = i11;
        }
        if (getChildCount() != 0 && i10 != 0) {
            U(i10, state);
            int[] iArr = this.H;
            if (iArr == null || iArr.length < this.f4913d) {
                this.H = new int[this.f4913d];
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f4913d; i14++) {
                k kVar = this.f4919r;
                if (kVar.f5068d == -1) {
                    l10 = kVar.f5070f;
                    i12 = this.f4914e[i14].p(l10);
                } else {
                    l10 = this.f4914e[i14].l(kVar.f5071g);
                    i12 = this.f4919r.f5071g;
                }
                int i15 = l10 - i12;
                if (i15 >= 0) {
                    this.H[i13] = i15;
                    i13++;
                }
            }
            Arrays.sort(this.H, 0, i13);
            for (int i16 = 0; i16 < i13 && this.f4919r.a(state); i16++) {
                layoutPrefetchRegistry.a(this.f4919r.f5067c, this.H[i16]);
                k kVar2 = this.f4919r;
                kVar2.f5067c += kVar2.f5068d;
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollExtent(RecyclerView.State state) {
        return s(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollOffset(RecyclerView.State state) {
        return t(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        return u(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.SmoothScroller.a
    public PointF computeScrollVectorForPosition(int i10) {
        int p10 = p(i10);
        PointF pointF = new PointF();
        if (p10 == 0) {
            return null;
        }
        if (this.f4917p == 0) {
            pointF.x = p10;
            pointF.y = 0.0f;
            return pointF;
        }
        pointF.x = 0.0f;
        pointF.y = p10;
        return pointF;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollExtent(RecyclerView.State state) {
        return s(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollOffset(RecyclerView.State state) {
        return t(state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollRange(RecyclerView.State state) {
        return u(state);
    }

    boolean e0(RecyclerView.State state, b bVar) {
        int i10;
        int G;
        int m10;
        boolean z10 = false;
        if (!state.e() && (i10 = this.f4923v) != -1) {
            if (i10 >= 0 && i10 < state.b()) {
                e eVar = this.B;
                if (eVar != null && eVar.f4944d != -1 && eVar.f4946i >= 1) {
                    bVar.f4930b = Integer.MIN_VALUE;
                    bVar.f4929a = this.f4923v;
                } else {
                    View findViewByPosition = findViewByPosition(this.f4923v);
                    if (findViewByPosition != null) {
                        if (this.f4921t) {
                            G = H();
                        } else {
                            G = G();
                        }
                        bVar.f4929a = G;
                        if (this.f4924w != Integer.MIN_VALUE) {
                            if (bVar.f4931c) {
                                bVar.f4930b = (this.f4915i.i() - this.f4924w) - this.f4915i.d(findViewByPosition);
                            } else {
                                bVar.f4930b = (this.f4915i.m() + this.f4924w) - this.f4915i.g(findViewByPosition);
                            }
                            return true;
                        } else if (this.f4915i.e(findViewByPosition) > this.f4915i.n()) {
                            if (bVar.f4931c) {
                                m10 = this.f4915i.i();
                            } else {
                                m10 = this.f4915i.m();
                            }
                            bVar.f4930b = m10;
                            return true;
                        } else {
                            int g10 = this.f4915i.g(findViewByPosition) - this.f4915i.m();
                            if (g10 < 0) {
                                bVar.f4930b = -g10;
                                return true;
                            }
                            int i11 = this.f4915i.i() - this.f4915i.d(findViewByPosition);
                            if (i11 < 0) {
                                bVar.f4930b = i11;
                                return true;
                            }
                            bVar.f4930b = Integer.MIN_VALUE;
                        }
                    } else {
                        int i12 = this.f4923v;
                        bVar.f4929a = i12;
                        int i13 = this.f4924w;
                        if (i13 == Integer.MIN_VALUE) {
                            if (p(i12) == 1) {
                                z10 = true;
                            }
                            bVar.f4931c = z10;
                            bVar.a();
                        } else {
                            bVar.b(i13);
                        }
                        bVar.f4932d = true;
                    }
                }
                return true;
            }
            this.f4923v = -1;
            this.f4924w = Integer.MIN_VALUE;
        }
        return false;
    }

    void f0(RecyclerView.State state, b bVar) {
        if (e0(state, bVar) || d0(state, bVar)) {
            return;
        }
        bVar.a();
        bVar.f4929a = 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateDefaultLayoutParams() {
        if (this.f4917p == 0) {
            return new c(-2, -1);
        }
        return new c(-1, -2);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateLayoutParams(Context context, AttributeSet attributeSet) {
        return new c(context, attributeSet);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int getColumnCountForAccessibility(RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.f4917p == 1) {
            return Math.min(this.f4913d, state.b());
        }
        return -1;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int getRowCountForAccessibility(RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.f4917p == 0) {
            return Math.min(this.f4913d, state.b());
        }
        return -1;
    }

    void h0(int i10) {
        this.f4918q = i10 / this.f4913d;
        this.C = View.MeasureSpec.makeMeasureSpec(i10, this.f4916o.k());
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        if (this.f4926y != 0) {
            return true;
        }
        return false;
    }

    boolean isLayoutRTL() {
        if (getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isLayoutReversed() {
        return this.f4920s;
    }

    boolean m() {
        int l10 = this.f4914e[0].l(Integer.MIN_VALUE);
        for (int i10 = 1; i10 < this.f4913d; i10++) {
            if (this.f4914e[i10].l(Integer.MIN_VALUE) != l10) {
                return false;
            }
        }
        return true;
    }

    boolean n() {
        int p10 = this.f4914e[0].p(Integer.MIN_VALUE);
        for (int i10 = 1; i10 < this.f4913d; i10++) {
            if (this.f4914e[i10].p(Integer.MIN_VALUE) != p10) {
                return false;
            }
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void offsetChildrenHorizontal(int i10) {
        super.offsetChildrenHorizontal(i10);
        for (int i11 = 0; i11 < this.f4913d; i11++) {
            this.f4914e[i11].r(i10);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void offsetChildrenVertical(int i10) {
        super.offsetChildrenVertical(i10);
        for (int i11 = 0; i11 < this.f4913d; i11++) {
            this.f4914e[i11].r(i10);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onAdapterChanged(RecyclerView.Adapter adapter, RecyclerView.Adapter adapter2) {
        this.f4925x.b();
        for (int i10 = 0; i10 < this.f4913d; i10++) {
            this.f4914e[i10].e();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onDetachedFromWindow(RecyclerView recyclerView, RecyclerView.Recycler recycler) {
        super.onDetachedFromWindow(recyclerView, recycler);
        removeCallbacks(this.I);
        for (int i10 = 0; i10 < this.f4913d; i10++) {
            this.f4914e[i10].e();
        }
        recyclerView.requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public View onFocusSearchFailed(View view, int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        View findContainingItemView;
        int G;
        boolean z10;
        boolean z11;
        int g10;
        int g11;
        int g12;
        View m10;
        if (getChildCount() == 0 || (findContainingItemView = findContainingItemView(view)) == null) {
            return null;
        }
        a0();
        int convertFocusDirectionToLayoutDirection = convertFocusDirectionToLayoutDirection(i10);
        if (convertFocusDirectionToLayoutDirection == Integer.MIN_VALUE) {
            return null;
        }
        c cVar = (c) findContainingItemView.getLayoutParams();
        boolean z12 = cVar.f4937q;
        f fVar = cVar.f4936p;
        if (convertFocusDirectionToLayoutDirection == 1) {
            G = H();
        } else {
            G = G();
        }
        g0(G, state);
        b0(convertFocusDirectionToLayoutDirection);
        k kVar = this.f4919r;
        kVar.f5067c = kVar.f5068d + G;
        kVar.f5066b = (int) (this.f4915i.n() * 0.33333334f);
        k kVar2 = this.f4919r;
        kVar2.f5072h = true;
        kVar2.f5065a = false;
        y(recycler, kVar2, state);
        this.f4927z = this.f4921t;
        if (!z12 && (m10 = fVar.m(G, convertFocusDirectionToLayoutDirection)) != null && m10 != findContainingItemView) {
            return m10;
        }
        if (T(convertFocusDirectionToLayoutDirection)) {
            for (int i11 = this.f4913d - 1; i11 >= 0; i11--) {
                View m11 = this.f4914e[i11].m(G, convertFocusDirectionToLayoutDirection);
                if (m11 != null && m11 != findContainingItemView) {
                    return m11;
                }
            }
        } else {
            for (int i12 = 0; i12 < this.f4913d; i12++) {
                View m12 = this.f4914e[i12].m(G, convertFocusDirectionToLayoutDirection);
                if (m12 != null && m12 != findContainingItemView) {
                    return m12;
                }
            }
        }
        boolean z13 = !this.f4920s;
        if (convertFocusDirectionToLayoutDirection == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z13 == z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!z12) {
            if (z11) {
                g12 = fVar.f();
            } else {
                g12 = fVar.g();
            }
            View findViewByPosition = findViewByPosition(g12);
            if (findViewByPosition != null && findViewByPosition != findContainingItemView) {
                return findViewByPosition;
            }
        }
        if (T(convertFocusDirectionToLayoutDirection)) {
            for (int i13 = this.f4913d - 1; i13 >= 0; i13--) {
                if (i13 != fVar.f4958e) {
                    if (z11) {
                        g11 = this.f4914e[i13].f();
                    } else {
                        g11 = this.f4914e[i13].g();
                    }
                    View findViewByPosition2 = findViewByPosition(g11);
                    if (findViewByPosition2 != null && findViewByPosition2 != findContainingItemView) {
                        return findViewByPosition2;
                    }
                }
            }
        } else {
            for (int i14 = 0; i14 < this.f4913d; i14++) {
                if (z11) {
                    g10 = this.f4914e[i14].f();
                } else {
                    g10 = this.f4914e[i14].g();
                }
                View findViewByPosition3 = findViewByPosition(g10);
                if (findViewByPosition3 != null && findViewByPosition3 != findContainingItemView) {
                    return findViewByPosition3;
                }
            }
        }
        return null;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(accessibilityEvent);
        if (getChildCount() > 0) {
            View B = B(false);
            View A = A(false);
            if (B != null && A != null) {
                int position = getPosition(B);
                int position2 = getPosition(A);
                if (position < position2) {
                    accessibilityEvent.setFromIndex(position);
                    accessibilityEvent.setToIndex(position2);
                    return;
                }
                accessibilityEvent.setFromIndex(position2);
                accessibilityEvent.setToIndex(position);
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityNodeInfo(RecyclerView.Recycler recycler, RecyclerView.State state, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        super.onInitializeAccessibilityNodeInfo(recycler, state, accessibilityNodeInfoCompat);
        accessibilityNodeInfoCompat.w0("androidx.recyclerview.widget.StaggeredGridLayoutManager");
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityNodeInfoForItem(RecyclerView.Recycler recycler, RecyclerView.State state, View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (!(layoutParams instanceof c)) {
            super.onInitializeAccessibilityNodeInfoForItem(view, accessibilityNodeInfoCompat);
            return;
        }
        c cVar = (c) layoutParams;
        int i10 = 1;
        if (this.f4917p == 0) {
            int e10 = cVar.e();
            if (cVar.f4937q) {
                i10 = this.f4913d;
            }
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(e10, i10, -1, -1, false, false));
            return;
        }
        int e11 = cVar.e();
        if (cVar.f4937q) {
            i10 = this.f4913d;
        }
        accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(-1, -1, e11, i10, false, false));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsAdded(RecyclerView recyclerView, int i10, int i11) {
        N(i10, i11, 1);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsChanged(RecyclerView recyclerView) {
        this.f4925x.b();
        requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsMoved(RecyclerView recyclerView, int i10, int i11, int i12) {
        N(i10, i11, 8);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsRemoved(RecyclerView recyclerView, int i10, int i11) {
        N(i10, i11, 2);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsUpdated(RecyclerView recyclerView, int i10, int i11, Object obj) {
        N(i10, i11, 4);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
        S(recycler, state, true);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutCompleted(RecyclerView.State state) {
        super.onLayoutCompleted(state);
        this.f4923v = -1;
        this.f4924w = Integer.MIN_VALUE;
        this.B = null;
        this.E.c();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (parcelable instanceof e) {
            e eVar = (e) parcelable;
            this.B = eVar;
            if (this.f4923v != -1) {
                eVar.a();
                this.B.b();
            }
            requestLayout();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public Parcelable onSaveInstanceState() {
        int G;
        int p10;
        int m10;
        int[] iArr;
        if (this.B != null) {
            return new e(this.B);
        }
        e eVar = new e();
        eVar.f4951s = this.f4920s;
        eVar.f4952t = this.f4927z;
        eVar.f4953u = this.A;
        d dVar = this.f4925x;
        if (dVar != null && (iArr = dVar.f4938a) != null) {
            eVar.f4949q = iArr;
            eVar.f4948p = iArr.length;
            eVar.f4950r = dVar.f4939b;
        } else {
            eVar.f4948p = 0;
        }
        if (getChildCount() > 0) {
            if (this.f4927z) {
                G = H();
            } else {
                G = G();
            }
            eVar.f4944d = G;
            eVar.f4945e = C();
            int i10 = this.f4913d;
            eVar.f4946i = i10;
            eVar.f4947o = new int[i10];
            for (int i11 = 0; i11 < this.f4913d; i11++) {
                if (this.f4927z) {
                    p10 = this.f4914e[i11].l(Integer.MIN_VALUE);
                    if (p10 != Integer.MIN_VALUE) {
                        m10 = this.f4915i.i();
                        p10 -= m10;
                        eVar.f4947o[i11] = p10;
                    } else {
                        eVar.f4947o[i11] = p10;
                    }
                } else {
                    p10 = this.f4914e[i11].p(Integer.MIN_VALUE);
                    if (p10 != Integer.MIN_VALUE) {
                        m10 = this.f4915i.m();
                        p10 -= m10;
                        eVar.f4947o[i11] = p10;
                    } else {
                        eVar.f4947o[i11] = p10;
                    }
                }
            }
            return eVar;
        }
        eVar.f4944d = -1;
        eVar.f4945e = -1;
        eVar.f4946i = 0;
        return eVar;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onScrollStateChanged(int i10) {
        if (i10 == 0) {
            q();
        }
    }

    boolean q() {
        int G;
        int H;
        int i10;
        if (getChildCount() == 0 || this.f4926y == 0 || !isAttachedToWindow()) {
            return false;
        }
        if (this.f4921t) {
            G = H();
            H = G();
        } else {
            G = G();
            H = H();
        }
        if (G == 0 && O() != null) {
            this.f4925x.b();
            requestSimpleAnimationsInNextLayout();
            requestLayout();
            return true;
        } else if (!this.F) {
            return false;
        } else {
            if (this.f4921t) {
                i10 = -1;
            } else {
                i10 = 1;
            }
            int i11 = H + 1;
            d.a e10 = this.f4925x.e(G, i11, i10, true);
            if (e10 == null) {
                this.F = false;
                this.f4925x.d(i11);
                return false;
            }
            d.a e11 = this.f4925x.e(G, e10.f4940d, i10 * (-1), true);
            if (e11 == null) {
                this.f4925x.d(e10.f4940d);
            } else {
                this.f4925x.d(e11.f4940d + 1);
            }
            requestSimpleAnimationsInNextLayout();
            requestLayout();
            return true;
        }
    }

    int scrollBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (getChildCount() == 0 || i10 == 0) {
            return 0;
        }
        U(i10, state);
        int y10 = y(recycler, this.f4919r, state);
        if (this.f4919r.f5066b >= y10) {
            if (i10 < 0) {
                i10 = -y10;
            } else {
                i10 = y10;
            }
        }
        this.f4915i.r(-i10);
        this.f4927z = this.f4921t;
        k kVar = this.f4919r;
        kVar.f5066b = 0;
        W(recycler, kVar);
        return i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        return scrollBy(i10, recycler, state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void scrollToPosition(int i10) {
        e eVar = this.B;
        if (eVar != null && eVar.f4944d != i10) {
            eVar.a();
        }
        this.f4923v = i10;
        this.f4924w = Integer.MIN_VALUE;
        requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollVerticallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        return scrollBy(i10, recycler, state);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void setMeasuredDimension(Rect rect, int i10, int i11) {
        int chooseSize;
        int chooseSize2;
        int paddingLeft = getPaddingLeft() + getPaddingRight();
        int paddingTop = getPaddingTop() + getPaddingBottom();
        if (this.f4917p == 1) {
            chooseSize2 = RecyclerView.LayoutManager.chooseSize(i11, rect.height() + paddingTop, getMinimumHeight());
            chooseSize = RecyclerView.LayoutManager.chooseSize(i10, (this.f4918q * this.f4913d) + paddingLeft, getMinimumWidth());
        } else {
            chooseSize = RecyclerView.LayoutManager.chooseSize(i10, rect.width() + paddingLeft, getMinimumWidth());
            chooseSize2 = RecyclerView.LayoutManager.chooseSize(i11, (this.f4918q * this.f4913d) + paddingTop, getMinimumHeight());
        }
        setMeasuredDimension(chooseSize, chooseSize2);
    }

    public void setOrientation(int i10) {
        if (i10 != 0 && i10 != 1) {
            throw new IllegalArgumentException("invalid orientation.");
        }
        assertNotInLayoutOrScroll(null);
        if (i10 == this.f4917p) {
            return;
        }
        this.f4917p = i10;
        OrientationHelper orientationHelper = this.f4915i;
        this.f4915i = this.f4916o;
        this.f4916o = orientationHelper;
        requestLayout();
    }

    public void setReverseLayout(boolean z10) {
        assertNotInLayoutOrScroll(null);
        e eVar = this.B;
        if (eVar != null && eVar.f4951s != z10) {
            eVar.f4951s = z10;
        }
        this.f4920s = z10;
        requestLayout();
    }

    public void setSpanCount(int i10) {
        assertNotInLayoutOrScroll(null);
        if (i10 != this.f4913d) {
            P();
            this.f4913d = i10;
            this.f4922u = new BitSet(this.f4913d);
            this.f4914e = new f[this.f4913d];
            for (int i11 = 0; i11 < this.f4913d; i11++) {
                this.f4914e[i11] = new f(i11);
            }
            requestLayout();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void smoothScrollToPosition(RecyclerView recyclerView, RecyclerView.State state, int i10) {
        l lVar = new l(recyclerView.getContext());
        lVar.setTargetPosition(i10);
        startSmoothScroll(lVar);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean supportsPredictiveItemAnimations() {
        if (this.B == null) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new c((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new c(layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        int[] f4938a;

        /* renamed from: b  reason: collision with root package name */
        List f4939b;

        d() {
        }

        private int i(int i10) {
            if (this.f4939b == null) {
                return -1;
            }
            a f10 = f(i10);
            if (f10 != null) {
                this.f4939b.remove(f10);
            }
            int size = this.f4939b.size();
            int i11 = 0;
            while (true) {
                if (i11 < size) {
                    if (((a) this.f4939b.get(i11)).f4940d >= i10) {
                        break;
                    }
                    i11++;
                } else {
                    i11 = -1;
                    break;
                }
            }
            if (i11 == -1) {
                return -1;
            }
            this.f4939b.remove(i11);
            return ((a) this.f4939b.get(i11)).f4940d;
        }

        private void l(int i10, int i11) {
            List list = this.f4939b;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    a aVar = (a) this.f4939b.get(size);
                    int i12 = aVar.f4940d;
                    if (i12 >= i10) {
                        aVar.f4940d = i12 + i11;
                    }
                }
            }
        }

        private void m(int i10, int i11) {
            List list = this.f4939b;
            if (list != null) {
                int i12 = i10 + i11;
                for (int size = list.size() - 1; size >= 0; size--) {
                    a aVar = (a) this.f4939b.get(size);
                    int i13 = aVar.f4940d;
                    if (i13 >= i10) {
                        if (i13 < i12) {
                            this.f4939b.remove(size);
                        } else {
                            aVar.f4940d = i13 - i11;
                        }
                    }
                }
            }
        }

        public void a(a aVar) {
            if (this.f4939b == null) {
                this.f4939b = new ArrayList();
            }
            int size = this.f4939b.size();
            for (int i10 = 0; i10 < size; i10++) {
                a aVar2 = (a) this.f4939b.get(i10);
                if (aVar2.f4940d == aVar.f4940d) {
                    this.f4939b.remove(i10);
                }
                if (aVar2.f4940d >= aVar.f4940d) {
                    this.f4939b.add(i10, aVar);
                    return;
                }
            }
            this.f4939b.add(aVar);
        }

        void b() {
            int[] iArr = this.f4938a;
            if (iArr != null) {
                Arrays.fill(iArr, -1);
            }
            this.f4939b = null;
        }

        void c(int i10) {
            int[] iArr = this.f4938a;
            if (iArr == null) {
                int[] iArr2 = new int[Math.max(i10, 10) + 1];
                this.f4938a = iArr2;
                Arrays.fill(iArr2, -1);
            } else if (i10 >= iArr.length) {
                int[] iArr3 = new int[o(i10)];
                this.f4938a = iArr3;
                System.arraycopy(iArr, 0, iArr3, 0, iArr.length);
                int[] iArr4 = this.f4938a;
                Arrays.fill(iArr4, iArr.length, iArr4.length, -1);
            }
        }

        int d(int i10) {
            List list = this.f4939b;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    if (((a) this.f4939b.get(size)).f4940d >= i10) {
                        this.f4939b.remove(size);
                    }
                }
            }
            return h(i10);
        }

        public a e(int i10, int i11, int i12, boolean z10) {
            List list = this.f4939b;
            if (list == null) {
                return null;
            }
            int size = list.size();
            for (int i13 = 0; i13 < size; i13++) {
                a aVar = (a) this.f4939b.get(i13);
                int i14 = aVar.f4940d;
                if (i14 >= i11) {
                    return null;
                }
                if (i14 >= i10 && (i12 == 0 || aVar.f4941e == i12 || (z10 && aVar.f4943o))) {
                    return aVar;
                }
            }
            return null;
        }

        public a f(int i10) {
            List list = this.f4939b;
            if (list == null) {
                return null;
            }
            for (int size = list.size() - 1; size >= 0; size--) {
                a aVar = (a) this.f4939b.get(size);
                if (aVar.f4940d == i10) {
                    return aVar;
                }
            }
            return null;
        }

        int g(int i10) {
            int[] iArr = this.f4938a;
            if (iArr != null && i10 < iArr.length) {
                return iArr[i10];
            }
            return -1;
        }

        int h(int i10) {
            int[] iArr = this.f4938a;
            if (iArr == null || i10 >= iArr.length) {
                return -1;
            }
            int i11 = i(i10);
            if (i11 == -1) {
                int[] iArr2 = this.f4938a;
                Arrays.fill(iArr2, i10, iArr2.length, -1);
                return this.f4938a.length;
            }
            int min = Math.min(i11 + 1, this.f4938a.length);
            Arrays.fill(this.f4938a, i10, min, -1);
            return min;
        }

        void j(int i10, int i11) {
            int[] iArr = this.f4938a;
            if (iArr != null && i10 < iArr.length) {
                int i12 = i10 + i11;
                c(i12);
                int[] iArr2 = this.f4938a;
                System.arraycopy(iArr2, i10, iArr2, i12, (iArr2.length - i10) - i11);
                Arrays.fill(this.f4938a, i10, i12, -1);
                l(i10, i11);
            }
        }

        void k(int i10, int i11) {
            int[] iArr = this.f4938a;
            if (iArr != null && i10 < iArr.length) {
                int i12 = i10 + i11;
                c(i12);
                int[] iArr2 = this.f4938a;
                System.arraycopy(iArr2, i12, iArr2, i10, (iArr2.length - i10) - i11);
                int[] iArr3 = this.f4938a;
                Arrays.fill(iArr3, iArr3.length - i11, iArr3.length, -1);
                m(i10, i11);
            }
        }

        void n(int i10, f fVar) {
            c(i10);
            this.f4938a[i10] = fVar.f4958e;
        }

        int o(int i10) {
            int length = this.f4938a.length;
            while (length <= i10) {
                length *= 2;
            }
            return length;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a implements Parcelable {
            public static final Parcelable.Creator<a> CREATOR = new C0067a();

            /* renamed from: d  reason: collision with root package name */
            int f4940d;

            /* renamed from: e  reason: collision with root package name */
            int f4941e;

            /* renamed from: i  reason: collision with root package name */
            int[] f4942i;

            /* renamed from: o  reason: collision with root package name */
            boolean f4943o;

            /* renamed from: androidx.recyclerview.widget.StaggeredGridLayoutManager$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            class C0067a implements Parcelable.Creator {
                C0067a() {
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public a createFromParcel(Parcel parcel) {
                    return new a(parcel);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            a(Parcel parcel) {
                this.f4940d = parcel.readInt();
                this.f4941e = parcel.readInt();
                this.f4943o = parcel.readInt() == 1;
                int readInt = parcel.readInt();
                if (readInt > 0) {
                    int[] iArr = new int[readInt];
                    this.f4942i = iArr;
                    parcel.readIntArray(iArr);
                }
            }

            int a(int i10) {
                int[] iArr = this.f4942i;
                if (iArr == null) {
                    return 0;
                }
                return iArr[i10];
            }

            @Override // android.os.Parcelable
            public int describeContents() {
                return 0;
            }

            public String toString() {
                return "FullSpanItem{mPosition=" + this.f4940d + ", mGapDir=" + this.f4941e + ", mHasUnwantedGapAfter=" + this.f4943o + ", mGapPerSpan=" + Arrays.toString(this.f4942i) + '}';
            }

            @Override // android.os.Parcelable
            public void writeToParcel(Parcel parcel, int i10) {
                parcel.writeInt(this.f4940d);
                parcel.writeInt(this.f4941e);
                parcel.writeInt(this.f4943o ? 1 : 0);
                int[] iArr = this.f4942i;
                if (iArr != null && iArr.length > 0) {
                    parcel.writeInt(iArr.length);
                    parcel.writeIntArray(this.f4942i);
                    return;
                }
                parcel.writeInt(0);
            }

            a() {
            }
        }
    }
}
