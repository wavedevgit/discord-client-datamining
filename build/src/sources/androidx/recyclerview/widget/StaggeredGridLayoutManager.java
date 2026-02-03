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
    f[] f4883e;

    /* renamed from: i  reason: collision with root package name */
    OrientationHelper f4884i;

    /* renamed from: o  reason: collision with root package name */
    OrientationHelper f4885o;

    /* renamed from: p  reason: collision with root package name */
    private int f4886p;

    /* renamed from: q  reason: collision with root package name */
    private int f4887q;

    /* renamed from: r  reason: collision with root package name */
    private final k f4888r;

    /* renamed from: u  reason: collision with root package name */
    private BitSet f4891u;

    /* renamed from: z  reason: collision with root package name */
    private boolean f4896z;

    /* renamed from: d  reason: collision with root package name */
    private int f4882d = -1;

    /* renamed from: s  reason: collision with root package name */
    boolean f4889s = false;

    /* renamed from: t  reason: collision with root package name */
    boolean f4890t = false;

    /* renamed from: v  reason: collision with root package name */
    int f4892v = -1;

    /* renamed from: w  reason: collision with root package name */
    int f4893w = Integer.MIN_VALUE;

    /* renamed from: x  reason: collision with root package name */
    d f4894x = new d();

    /* renamed from: y  reason: collision with root package name */
    private int f4895y = 2;
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
        int f4898a;

        /* renamed from: b  reason: collision with root package name */
        int f4899b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4900c;

        /* renamed from: d  reason: collision with root package name */
        boolean f4901d;

        /* renamed from: e  reason: collision with root package name */
        boolean f4902e;

        /* renamed from: f  reason: collision with root package name */
        int[] f4903f;

        b() {
            c();
        }

        void a() {
            int m10;
            if (this.f4900c) {
                m10 = StaggeredGridLayoutManager.this.f4884i.i();
            } else {
                m10 = StaggeredGridLayoutManager.this.f4884i.m();
            }
            this.f4899b = m10;
        }

        void b(int i10) {
            if (this.f4900c) {
                this.f4899b = StaggeredGridLayoutManager.this.f4884i.i() - i10;
            } else {
                this.f4899b = StaggeredGridLayoutManager.this.f4884i.m() + i10;
            }
        }

        void c() {
            this.f4898a = -1;
            this.f4899b = Integer.MIN_VALUE;
            this.f4900c = false;
            this.f4901d = false;
            this.f4902e = false;
            int[] iArr = this.f4903f;
            if (iArr != null) {
                Arrays.fill(iArr, -1);
            }
        }

        void d(f[] fVarArr) {
            int length = fVarArr.length;
            int[] iArr = this.f4903f;
            if (iArr == null || iArr.length < length) {
                this.f4903f = new int[StaggeredGridLayoutManager.this.f4883e.length];
            }
            for (int i10 = 0; i10 < length; i10++) {
                this.f4903f[i10] = fVarArr[i10].p(Integer.MIN_VALUE);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends RecyclerView.LayoutParams {

        /* renamed from: p  reason: collision with root package name */
        f f4905p;

        /* renamed from: q  reason: collision with root package name */
        boolean f4906q;

        public c(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        public final int e() {
            f fVar = this.f4905p;
            if (fVar == null) {
                return -1;
            }
            return fVar.f4927e;
        }

        public boolean f() {
            return this.f4906q;
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
        int f4913d;

        /* renamed from: e  reason: collision with root package name */
        int f4914e;

        /* renamed from: i  reason: collision with root package name */
        int f4915i;

        /* renamed from: o  reason: collision with root package name */
        int[] f4916o;

        /* renamed from: p  reason: collision with root package name */
        int f4917p;

        /* renamed from: q  reason: collision with root package name */
        int[] f4918q;

        /* renamed from: r  reason: collision with root package name */
        List f4919r;

        /* renamed from: s  reason: collision with root package name */
        boolean f4920s;

        /* renamed from: t  reason: collision with root package name */
        boolean f4921t;

        /* renamed from: u  reason: collision with root package name */
        boolean f4922u;

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
            this.f4916o = null;
            this.f4915i = 0;
            this.f4913d = -1;
            this.f4914e = -1;
        }

        void b() {
            this.f4916o = null;
            this.f4915i = 0;
            this.f4917p = 0;
            this.f4918q = null;
            this.f4919r = null;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeInt(this.f4913d);
            parcel.writeInt(this.f4914e);
            parcel.writeInt(this.f4915i);
            if (this.f4915i > 0) {
                parcel.writeIntArray(this.f4916o);
            }
            parcel.writeInt(this.f4917p);
            if (this.f4917p > 0) {
                parcel.writeIntArray(this.f4918q);
            }
            parcel.writeInt(this.f4920s ? 1 : 0);
            parcel.writeInt(this.f4921t ? 1 : 0);
            parcel.writeInt(this.f4922u ? 1 : 0);
            parcel.writeList(this.f4919r);
        }

        e(Parcel parcel) {
            this.f4913d = parcel.readInt();
            this.f4914e = parcel.readInt();
            int readInt = parcel.readInt();
            this.f4915i = readInt;
            if (readInt > 0) {
                int[] iArr = new int[readInt];
                this.f4916o = iArr;
                parcel.readIntArray(iArr);
            }
            int readInt2 = parcel.readInt();
            this.f4917p = readInt2;
            if (readInt2 > 0) {
                int[] iArr2 = new int[readInt2];
                this.f4918q = iArr2;
                parcel.readIntArray(iArr2);
            }
            this.f4920s = parcel.readInt() == 1;
            this.f4921t = parcel.readInt() == 1;
            this.f4922u = parcel.readInt() == 1;
            this.f4919r = parcel.readArrayList(d.a.class.getClassLoader());
        }

        public e(e eVar) {
            this.f4915i = eVar.f4915i;
            this.f4913d = eVar.f4913d;
            this.f4914e = eVar.f4914e;
            this.f4916o = eVar.f4916o;
            this.f4917p = eVar.f4917p;
            this.f4918q = eVar.f4918q;
            this.f4920s = eVar.f4920s;
            this.f4921t = eVar.f4921t;
            this.f4922u = eVar.f4922u;
            this.f4919r = eVar.f4919r;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f {

        /* renamed from: a  reason: collision with root package name */
        ArrayList f4923a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f4924b = Integer.MIN_VALUE;

        /* renamed from: c  reason: collision with root package name */
        int f4925c = Integer.MIN_VALUE;

        /* renamed from: d  reason: collision with root package name */
        int f4926d = 0;

        /* renamed from: e  reason: collision with root package name */
        final int f4927e;

        f(int i10) {
            this.f4927e = i10;
        }

        void a(View view) {
            c n10 = n(view);
            n10.f4905p = this;
            this.f4923a.add(view);
            this.f4925c = Integer.MIN_VALUE;
            if (this.f4923a.size() == 1) {
                this.f4924b = Integer.MIN_VALUE;
            }
            if (!n10.c() && !n10.b()) {
                return;
            }
            this.f4926d += StaggeredGridLayoutManager.this.f4884i.e(view);
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
                if (!z10 || p10 >= StaggeredGridLayoutManager.this.f4884i.i()) {
                    if (!z10 && p10 > StaggeredGridLayoutManager.this.f4884i.m()) {
                        return;
                    }
                    if (i10 != Integer.MIN_VALUE) {
                        p10 += i10;
                    }
                    this.f4925c = p10;
                    this.f4924b = p10;
                }
            }
        }

        void c() {
            d.a f10;
            ArrayList arrayList = this.f4923a;
            View view = (View) arrayList.get(arrayList.size() - 1);
            c n10 = n(view);
            this.f4925c = StaggeredGridLayoutManager.this.f4884i.d(view);
            if (n10.f4906q && (f10 = StaggeredGridLayoutManager.this.f4894x.f(n10.a())) != null && f10.f4910e == 1) {
                this.f4925c += f10.a(this.f4927e);
            }
        }

        void d() {
            d.a f10;
            View view = (View) this.f4923a.get(0);
            c n10 = n(view);
            this.f4924b = StaggeredGridLayoutManager.this.f4884i.g(view);
            if (n10.f4906q && (f10 = StaggeredGridLayoutManager.this.f4894x.f(n10.a())) != null && f10.f4910e == -1) {
                this.f4924b -= f10.a(this.f4927e);
            }
        }

        void e() {
            this.f4923a.clear();
            q();
            this.f4926d = 0;
        }

        public int f() {
            if (StaggeredGridLayoutManager.this.f4889s) {
                return i(this.f4923a.size() - 1, -1, true);
            }
            return i(0, this.f4923a.size(), true);
        }

        public int g() {
            if (StaggeredGridLayoutManager.this.f4889s) {
                return i(0, this.f4923a.size(), true);
            }
            return i(this.f4923a.size() - 1, -1, true);
        }

        int h(int i10, int i11, boolean z10, boolean z11, boolean z12) {
            int i12;
            boolean z13;
            int m10 = StaggeredGridLayoutManager.this.f4884i.m();
            int i13 = StaggeredGridLayoutManager.this.f4884i.i();
            if (i11 > i10) {
                i12 = 1;
            } else {
                i12 = -1;
            }
            while (i10 != i11) {
                View view = (View) this.f4923a.get(i10);
                int g10 = StaggeredGridLayoutManager.this.f4884i.g(view);
                int d10 = StaggeredGridLayoutManager.this.f4884i.d(view);
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
            return this.f4926d;
        }

        int k() {
            int i10 = this.f4925c;
            if (i10 != Integer.MIN_VALUE) {
                return i10;
            }
            c();
            return this.f4925c;
        }

        int l(int i10) {
            int i11 = this.f4925c;
            if (i11 != Integer.MIN_VALUE) {
                return i11;
            }
            if (this.f4923a.size() == 0) {
                return i10;
            }
            c();
            return this.f4925c;
        }

        public View m(int i10, int i11) {
            View view = null;
            if (i11 == -1) {
                int size = this.f4923a.size();
                int i12 = 0;
                while (i12 < size) {
                    View view2 = (View) this.f4923a.get(i12);
                    StaggeredGridLayoutManager staggeredGridLayoutManager = StaggeredGridLayoutManager.this;
                    if (staggeredGridLayoutManager.f4889s && staggeredGridLayoutManager.getPosition(view2) <= i10) {
                        break;
                    }
                    StaggeredGridLayoutManager staggeredGridLayoutManager2 = StaggeredGridLayoutManager.this;
                    if ((!staggeredGridLayoutManager2.f4889s && staggeredGridLayoutManager2.getPosition(view2) >= i10) || !view2.hasFocusable()) {
                        break;
                    }
                    i12++;
                    view = view2;
                }
                return view;
            }
            int size2 = this.f4923a.size() - 1;
            while (size2 >= 0) {
                View view3 = (View) this.f4923a.get(size2);
                StaggeredGridLayoutManager staggeredGridLayoutManager3 = StaggeredGridLayoutManager.this;
                if (staggeredGridLayoutManager3.f4889s && staggeredGridLayoutManager3.getPosition(view3) >= i10) {
                    break;
                }
                StaggeredGridLayoutManager staggeredGridLayoutManager4 = StaggeredGridLayoutManager.this;
                if ((!staggeredGridLayoutManager4.f4889s && staggeredGridLayoutManager4.getPosition(view3) <= i10) || !view3.hasFocusable()) {
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
            int i10 = this.f4924b;
            if (i10 != Integer.MIN_VALUE) {
                return i10;
            }
            d();
            return this.f4924b;
        }

        int p(int i10) {
            int i11 = this.f4924b;
            if (i11 != Integer.MIN_VALUE) {
                return i11;
            }
            if (this.f4923a.size() == 0) {
                return i10;
            }
            d();
            return this.f4924b;
        }

        void q() {
            this.f4924b = Integer.MIN_VALUE;
            this.f4925c = Integer.MIN_VALUE;
        }

        void r(int i10) {
            int i11 = this.f4924b;
            if (i11 != Integer.MIN_VALUE) {
                this.f4924b = i11 + i10;
            }
            int i12 = this.f4925c;
            if (i12 != Integer.MIN_VALUE) {
                this.f4925c = i12 + i10;
            }
        }

        void s() {
            int size = this.f4923a.size();
            View view = (View) this.f4923a.remove(size - 1);
            c n10 = n(view);
            n10.f4905p = null;
            if (n10.c() || n10.b()) {
                this.f4926d -= StaggeredGridLayoutManager.this.f4884i.e(view);
            }
            if (size == 1) {
                this.f4924b = Integer.MIN_VALUE;
            }
            this.f4925c = Integer.MIN_VALUE;
        }

        void t() {
            View view = (View) this.f4923a.remove(0);
            c n10 = n(view);
            n10.f4905p = null;
            if (this.f4923a.size() == 0) {
                this.f4925c = Integer.MIN_VALUE;
            }
            if (n10.c() || n10.b()) {
                this.f4926d -= StaggeredGridLayoutManager.this.f4884i.e(view);
            }
            this.f4924b = Integer.MIN_VALUE;
        }

        void u(View view) {
            c n10 = n(view);
            n10.f4905p = this;
            this.f4923a.add(0, view);
            this.f4924b = Integer.MIN_VALUE;
            if (this.f4923a.size() == 1) {
                this.f4925c = Integer.MIN_VALUE;
            }
            if (!n10.c() && !n10.b()) {
                return;
            }
            this.f4926d += StaggeredGridLayoutManager.this.f4884i.e(view);
        }

        void v(int i10) {
            this.f4924b = i10;
            this.f4925c = i10;
        }
    }

    public StaggeredGridLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        RecyclerView.LayoutManager.Properties properties = RecyclerView.LayoutManager.getProperties(context, attributeSet, i10, i11);
        setOrientation(properties.f4815a);
        setSpanCount(properties.f4816b);
        setReverseLayout(properties.f4817c);
        this.f4888r = new k();
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
        if (I != Integer.MIN_VALUE && (i10 = this.f4884i.i() - I) > 0) {
            int i11 = i10 - (-scrollBy(-i10, recycler, state));
            if (z10 && i11 > 0) {
                this.f4884i.r(i11);
            }
        }
    }

    private void F(RecyclerView.Recycler recycler, RecyclerView.State state, boolean z10) {
        int m10;
        int L = L(Integer.MAX_VALUE);
        if (L != Integer.MAX_VALUE && (m10 = L - this.f4884i.m()) > 0) {
            int scrollBy = m10 - scrollBy(m10, recycler, state);
            if (z10 && scrollBy > 0) {
                this.f4884i.r(-scrollBy);
            }
        }
    }

    private int I(int i10) {
        int l10 = this.f4883e[0].l(i10);
        for (int i11 = 1; i11 < this.f4882d; i11++) {
            int l11 = this.f4883e[i11].l(i10);
            if (l11 > l10) {
                l10 = l11;
            }
        }
        return l10;
    }

    private int J(int i10) {
        int p10 = this.f4883e[0].p(i10);
        for (int i11 = 1; i11 < this.f4882d; i11++) {
            int p11 = this.f4883e[i11].p(i10);
            if (p11 > p10) {
                p10 = p11;
            }
        }
        return p10;
    }

    private int K(int i10) {
        int l10 = this.f4883e[0].l(i10);
        for (int i11 = 1; i11 < this.f4882d; i11++) {
            int l11 = this.f4883e[i11].l(i10);
            if (l11 < l10) {
                l10 = l11;
            }
        }
        return l10;
    }

    private int L(int i10) {
        int p10 = this.f4883e[0].p(i10);
        for (int i11 = 1; i11 < this.f4882d; i11++) {
            int p11 = this.f4883e[i11].p(i10);
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
        if (T(kVar.f5038e)) {
            i11 = this.f4882d - 1;
            i10 = -1;
            i12 = -1;
        } else {
            i10 = this.f4882d;
            i11 = 0;
            i12 = 1;
        }
        f fVar = null;
        if (kVar.f5038e == 1) {
            int m10 = this.f4884i.m();
            int i13 = Integer.MAX_VALUE;
            while (i11 != i10) {
                f fVar2 = this.f4883e[i11];
                int l10 = fVar2.l(m10);
                if (l10 < i13) {
                    fVar = fVar2;
                    i13 = l10;
                }
                i11 += i12;
            }
            return fVar;
        }
        int i14 = this.f4884i.i();
        int i15 = Integer.MIN_VALUE;
        while (i11 != i10) {
            f fVar3 = this.f4883e[i11];
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
            boolean r0 = r6.f4890t
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
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r4 = r6.f4894x
            r4.h(r3)
            r4 = 1
            if (r9 == r4) goto L3d
            r5 = 2
            if (r9 == r5) goto L37
            if (r9 == r1) goto L2c
            goto L42
        L2c:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r9 = r6.f4894x
            r9.k(r7, r4)
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r7 = r6.f4894x
            r7.j(r8, r4)
            goto L42
        L37:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r9 = r6.f4894x
            r9.k(r7, r8)
            goto L42
        L3d:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$d r9 = r6.f4894x
            r9.j(r7, r8)
        L42:
            if (r2 > r0) goto L45
            goto L57
        L45:
            boolean r7 = r6.f4890t
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
        if (cVar.f4906q) {
            if (this.f4886p == 1) {
                Q(view, this.C, RecyclerView.LayoutManager.getChildMeasureSpec(getHeight(), getHeightMode(), getPaddingTop() + getPaddingBottom(), ((ViewGroup.MarginLayoutParams) cVar).height, true), z10);
            } else {
                Q(view, RecyclerView.LayoutManager.getChildMeasureSpec(getWidth(), getWidthMode(), getPaddingLeft() + getPaddingRight(), ((ViewGroup.MarginLayoutParams) cVar).width, true), this.C, z10);
            }
        } else if (this.f4886p == 1) {
            Q(view, RecyclerView.LayoutManager.getChildMeasureSpec(this.f4887q, getWidthMode(), 0, ((ViewGroup.MarginLayoutParams) cVar).width, false), RecyclerView.LayoutManager.getChildMeasureSpec(getHeight(), getHeightMode(), getPaddingTop() + getPaddingBottom(), ((ViewGroup.MarginLayoutParams) cVar).height, true), z10);
        } else {
            Q(view, RecyclerView.LayoutManager.getChildMeasureSpec(getWidth(), getWidthMode(), getPaddingLeft() + getPaddingRight(), ((ViewGroup.MarginLayoutParams) cVar).width, true), RecyclerView.LayoutManager.getChildMeasureSpec(this.f4887q, getHeightMode(), 0, ((ViewGroup.MarginLayoutParams) cVar).height, false), z10);
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
        if (this.f4886p == 0) {
            if (i10 == -1) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z12 == this.f4890t) {
                return false;
            }
            return true;
        }
        if (i10 == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 == this.f4890t) {
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
        for (int i10 = this.f4882d - 1; i10 >= 0; i10--) {
            this.f4883e[i10].u(view);
        }
    }

    private void W(RecyclerView.Recycler recycler, k kVar) {
        int min;
        int min2;
        if (kVar.f5034a && !kVar.f5042i) {
            if (kVar.f5035b == 0) {
                if (kVar.f5038e == -1) {
                    X(recycler, kVar.f5040g);
                } else {
                    Y(recycler, kVar.f5039f);
                }
            } else if (kVar.f5038e == -1) {
                int i10 = kVar.f5039f;
                int J = i10 - J(i10);
                if (J < 0) {
                    min2 = kVar.f5040g;
                } else {
                    min2 = kVar.f5040g - Math.min(J, kVar.f5035b);
                }
                X(recycler, min2);
            } else {
                int K = K(kVar.f5040g) - kVar.f5040g;
                if (K < 0) {
                    min = kVar.f5039f;
                } else {
                    min = Math.min(K, kVar.f5035b) + kVar.f5039f;
                }
                Y(recycler, min);
            }
        }
    }

    private void X(RecyclerView.Recycler recycler, int i10) {
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            if (this.f4884i.g(childAt) >= i10 && this.f4884i.q(childAt) >= i10) {
                c cVar = (c) childAt.getLayoutParams();
                if (cVar.f4906q) {
                    for (int i11 = 0; i11 < this.f4882d; i11++) {
                        if (this.f4883e[i11].f4923a.size() == 1) {
                            return;
                        }
                    }
                    for (int i12 = 0; i12 < this.f4882d; i12++) {
                        this.f4883e[i12].s();
                    }
                } else if (cVar.f4905p.f4923a.size() != 1) {
                    cVar.f4905p.s();
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
            if (this.f4884i.d(childAt) <= i10 && this.f4884i.p(childAt) <= i10) {
                c cVar = (c) childAt.getLayoutParams();
                if (cVar.f4906q) {
                    for (int i11 = 0; i11 < this.f4882d; i11++) {
                        if (this.f4883e[i11].f4923a.size() == 1) {
                            return;
                        }
                    }
                    for (int i12 = 0; i12 < this.f4882d; i12++) {
                        this.f4883e[i12].t();
                    }
                } else if (cVar.f4905p.f4923a.size() != 1) {
                    cVar.f4905p.t();
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
        if (this.f4885o.k() != 1073741824) {
            int childCount = getChildCount();
            float f10 = 0.0f;
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = getChildAt(i10);
                float e10 = this.f4885o.e(childAt);
                if (e10 >= f10) {
                    if (((c) childAt.getLayoutParams()).f()) {
                        e10 = (e10 * 1.0f) / this.f4882d;
                    }
                    f10 = Math.max(f10, e10);
                }
            }
            int i11 = this.f4887q;
            int round = Math.round(f10 * this.f4882d);
            if (this.f4885o.k() == Integer.MIN_VALUE) {
                round = Math.min(round, this.f4885o.n());
            }
            h0(round);
            if (this.f4887q != i11) {
                for (int i12 = 0; i12 < childCount; i12++) {
                    View childAt2 = getChildAt(i12);
                    c cVar = (c) childAt2.getLayoutParams();
                    if (!cVar.f4906q) {
                        if (isLayoutRTL() && this.f4886p == 1) {
                            int i13 = this.f4882d;
                            int i14 = cVar.f4905p.f4927e;
                            childAt2.offsetLeftAndRight(((-((i13 - 1) - i14)) * this.f4887q) - ((-((i13 - 1) - i14)) * i11));
                        } else {
                            int i15 = cVar.f4905p.f4927e;
                            int i16 = this.f4887q * i15;
                            int i17 = i15 * i11;
                            if (this.f4886p == 1) {
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
        if (this.f4886p != 1 && isLayoutRTL()) {
            this.f4890t = !this.f4889s;
        } else {
            this.f4890t = this.f4889s;
        }
    }

    private void b0(int i10) {
        boolean z10;
        k kVar = this.f4888r;
        kVar.f5038e = i10;
        boolean z11 = this.f4890t;
        int i11 = 1;
        if (i10 == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z11 != z10) {
            i11 = -1;
        }
        kVar.f5037d = i11;
    }

    private void c0(int i10, int i11) {
        for (int i12 = 0; i12 < this.f4882d; i12++) {
            if (!this.f4883e[i12].f4923a.isEmpty()) {
                i0(this.f4883e[i12], i10, i11);
            }
        }
    }

    private int convertFocusDirectionToLayoutDirection(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 17) {
                    if (i10 != 33) {
                        if (i10 != 66) {
                            if (i10 == 130 && this.f4886p == 1) {
                                return 1;
                            }
                            return Integer.MIN_VALUE;
                        } else if (this.f4886p == 0) {
                            return 1;
                        } else {
                            return Integer.MIN_VALUE;
                        }
                    } else if (this.f4886p == 1) {
                        return -1;
                    } else {
                        return Integer.MIN_VALUE;
                    }
                } else if (this.f4886p == 0) {
                    return -1;
                } else {
                    return Integer.MIN_VALUE;
                }
            } else if (this.f4886p != 1 && isLayoutRTL()) {
                return -1;
            } else {
                return 1;
            }
        } else if (this.f4886p == 1 || !isLayoutRTL()) {
            return -1;
        } else {
            return 1;
        }
    }

    private boolean d0(RecyclerView.State state, b bVar) {
        int z10;
        if (this.f4896z) {
            z10 = D(state.b());
        } else {
            z10 = z(state.b());
        }
        bVar.f4898a = z10;
        bVar.f4899b = Integer.MIN_VALUE;
        return true;
    }

    private void g0(int i10, RecyclerView.State state) {
        int i11;
        int i12;
        int c10;
        boolean z10;
        k kVar = this.f4888r;
        boolean z11 = false;
        kVar.f5035b = 0;
        kVar.f5036c = i10;
        if (isSmoothScrolling() && (c10 = state.c()) != -1) {
            boolean z12 = this.f4890t;
            if (c10 < i10) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z12 == z10) {
                i11 = this.f4884i.n();
                i12 = 0;
            } else {
                i12 = this.f4884i.n();
                i11 = 0;
            }
        } else {
            i11 = 0;
            i12 = 0;
        }
        if (getClipToPadding()) {
            this.f4888r.f5039f = this.f4884i.m() - i12;
            this.f4888r.f5040g = this.f4884i.i() + i11;
        } else {
            this.f4888r.f5040g = this.f4884i.h() + i11;
            this.f4888r.f5039f = -i12;
        }
        k kVar2 = this.f4888r;
        kVar2.f5041h = false;
        kVar2.f5034a = true;
        if (this.f4884i.k() == 0 && this.f4884i.h() == 0) {
            z11 = true;
        }
        kVar2.f5042i = z11;
    }

    private void i0(f fVar, int i10, int i11) {
        int j10 = fVar.j();
        if (i10 == -1) {
            if (fVar.o() + j10 <= i11) {
                this.f4891u.set(fVar.f4927e, false);
            }
        } else if (fVar.k() - j10 >= i11) {
            this.f4891u.set(fVar.f4927e, false);
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
        for (int i10 = this.f4882d - 1; i10 >= 0; i10--) {
            this.f4883e[i10].a(view);
        }
    }

    private void l(b bVar) {
        int m10;
        e eVar = this.B;
        int i10 = eVar.f4915i;
        if (i10 > 0) {
            if (i10 == this.f4882d) {
                for (int i11 = 0; i11 < this.f4882d; i11++) {
                    this.f4883e[i11].e();
                    e eVar2 = this.B;
                    int i12 = eVar2.f4916o[i11];
                    if (i12 != Integer.MIN_VALUE) {
                        if (eVar2.f4921t) {
                            m10 = this.f4884i.i();
                        } else {
                            m10 = this.f4884i.m();
                        }
                        i12 += m10;
                    }
                    this.f4883e[i11].v(i12);
                }
            } else {
                eVar.b();
                e eVar3 = this.B;
                eVar3.f4913d = eVar3.f4914e;
            }
        }
        e eVar4 = this.B;
        this.A = eVar4.f4922u;
        setReverseLayout(eVar4.f4920s);
        a0();
        e eVar5 = this.B;
        int i13 = eVar5.f4913d;
        if (i13 != -1) {
            this.f4892v = i13;
            bVar.f4900c = eVar5.f4921t;
        } else {
            bVar.f4900c = this.f4890t;
        }
        if (eVar5.f4917p > 1) {
            d dVar = this.f4894x;
            dVar.f4907a = eVar5.f4918q;
            dVar.f4908b = eVar5.f4919r;
        }
    }

    private void o(View view, c cVar, k kVar) {
        if (kVar.f5038e == 1) {
            if (cVar.f4906q) {
                k(view);
            } else {
                cVar.f4905p.a(view);
            }
        } else if (cVar.f4906q) {
            V(view);
        } else {
            cVar.f4905p.u(view);
        }
    }

    private int p(int i10) {
        boolean z10;
        if (getChildCount() == 0) {
            if (!this.f4890t) {
                return -1;
            }
            return 1;
        }
        if (i10 < G()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10 != this.f4890t) {
            return -1;
        }
        return 1;
    }

    private boolean r(f fVar) {
        boolean z10;
        if (this.f4890t) {
            if (fVar.k() < this.f4884i.i()) {
                ArrayList arrayList = fVar.f4923a;
                z10 = fVar.n((View) arrayList.get(arrayList.size() - 1)).f4906q;
                return !z10;
            }
            return false;
        }
        if (fVar.o() > this.f4884i.m()) {
            z10 = fVar.n((View) fVar.f4923a.get(0)).f4906q;
            return !z10;
        }
        return false;
    }

    private int s(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        return p.a(state, this.f4884i, B(!this.G), A(!this.G), this, this.G);
    }

    private int t(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        return p.b(state, this.f4884i, B(!this.G), A(!this.G), this, this.G, this.f4890t);
    }

    private int u(RecyclerView.State state) {
        if (getChildCount() == 0) {
            return 0;
        }
        return p.c(state, this.f4884i, B(!this.G), A(!this.G), this, this.G);
    }

    private d.a v(int i10) {
        d.a aVar = new d.a();
        aVar.f4911i = new int[this.f4882d];
        for (int i11 = 0; i11 < this.f4882d; i11++) {
            aVar.f4911i[i11] = i10 - this.f4883e[i11].l(i10);
        }
        return aVar;
    }

    private d.a w(int i10) {
        d.a aVar = new d.a();
        aVar.f4911i = new int[this.f4882d];
        for (int i11 = 0; i11 < this.f4882d; i11++) {
            aVar.f4911i[i11] = this.f4883e[i11].p(i10) - i10;
        }
        return aVar;
    }

    private void x() {
        this.f4884i = OrientationHelper.b(this, this.f4886p);
        this.f4885o = OrientationHelper.b(this, 1 - this.f4886p);
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
        staggeredGridLayoutManager.f4891u.set(0, staggeredGridLayoutManager.f4882d, true);
        if (staggeredGridLayoutManager.f4888r.f5042i) {
            if (kVar.f5038e == 1) {
                i10 = Integer.MAX_VALUE;
            } else {
                i10 = Integer.MIN_VALUE;
            }
        } else if (kVar.f5038e == 1) {
            i10 = kVar.f5040g + kVar.f5035b;
        } else {
            i10 = kVar.f5039f - kVar.f5035b;
        }
        int i13 = i10;
        staggeredGridLayoutManager.c0(kVar.f5038e, i13);
        if (staggeredGridLayoutManager.f4890t) {
            m10 = staggeredGridLayoutManager.f4884i.i();
        } else {
            m10 = staggeredGridLayoutManager.f4884i.m();
        }
        int i14 = m10;
        boolean z11 = false;
        while (kVar.a(state) && (staggeredGridLayoutManager.f4888r.f5042i || !staggeredGridLayoutManager.f4891u.isEmpty())) {
            View b10 = kVar.b(recycler);
            c cVar = (c) b10.getLayoutParams();
            int a10 = cVar.a();
            int g10 = staggeredGridLayoutManager.f4894x.g(a10);
            if (g10 == -1) {
                z10 = true;
            } else {
                z10 = r82;
            }
            if (z10) {
                if (cVar.f4906q) {
                    fVar = staggeredGridLayoutManager.f4883e[r82];
                } else {
                    fVar = staggeredGridLayoutManager.M(kVar);
                }
                staggeredGridLayoutManager.f4894x.n(a10, fVar);
            } else {
                fVar = staggeredGridLayoutManager.f4883e[g10];
            }
            f fVar2 = fVar;
            cVar.f4905p = fVar2;
            if (kVar.f5038e == 1) {
                staggeredGridLayoutManager.addView(b10);
            } else {
                staggeredGridLayoutManager.addView(b10, r82);
            }
            staggeredGridLayoutManager.R(b10, cVar, r82);
            if (kVar.f5038e == 1) {
                if (cVar.f4906q) {
                    e10 = staggeredGridLayoutManager.I(i14);
                } else {
                    e10 = fVar2.l(i14);
                }
                i11 = staggeredGridLayoutManager.f4884i.e(b10) + e10;
                if (z10 && cVar.f4906q) {
                    d.a v10 = staggeredGridLayoutManager.v(e10);
                    v10.f4910e = -1;
                    v10.f4909d = a10;
                    staggeredGridLayoutManager.f4894x.a(v10);
                }
            } else {
                if (cVar.f4906q) {
                    p10 = staggeredGridLayoutManager.L(i14);
                } else {
                    p10 = fVar2.p(i14);
                }
                i11 = p10;
                e10 = i11 - staggeredGridLayoutManager.f4884i.e(b10);
                if (z10 && cVar.f4906q) {
                    d.a w10 = staggeredGridLayoutManager.w(i11);
                    w10.f4910e = 1;
                    w10.f4909d = a10;
                    staggeredGridLayoutManager.f4894x.a(w10);
                }
            }
            if (cVar.f4906q && kVar.f5037d == -1) {
                if (z10) {
                    staggeredGridLayoutManager.F = true;
                } else {
                    if (kVar.f5038e == 1) {
                        n10 = staggeredGridLayoutManager.m();
                    } else {
                        n10 = staggeredGridLayoutManager.n();
                    }
                    if (!n10) {
                        d.a f10 = staggeredGridLayoutManager.f4894x.f(a10);
                        if (f10 != null) {
                            f10.f4912o = true;
                        }
                        staggeredGridLayoutManager.F = true;
                    }
                }
            }
            staggeredGridLayoutManager.o(b10, cVar, kVar);
            if (staggeredGridLayoutManager.isLayoutRTL() && staggeredGridLayoutManager.f4886p == 1) {
                if (cVar.f4906q) {
                    e11 = staggeredGridLayoutManager.f4885o.i();
                } else {
                    e11 = staggeredGridLayoutManager.f4885o.i() - (((staggeredGridLayoutManager.f4882d - 1) - fVar2.f4927e) * staggeredGridLayoutManager.f4887q);
                }
                i12 = e11 - staggeredGridLayoutManager.f4885o.e(b10);
            } else {
                if (cVar.f4906q) {
                    m11 = staggeredGridLayoutManager.f4885o.m();
                } else {
                    m11 = (fVar2.f4927e * staggeredGridLayoutManager.f4887q) + staggeredGridLayoutManager.f4885o.m();
                }
                i12 = m11;
                e11 = staggeredGridLayoutManager.f4885o.e(b10) + i12;
            }
            int i15 = e11;
            int i16 = i12;
            if (staggeredGridLayoutManager.f4886p == 1) {
                staggeredGridLayoutManager.layoutDecoratedWithMargins(b10, i16, e10, i15, i11);
                staggeredGridLayoutManager = this;
            } else {
                staggeredGridLayoutManager.layoutDecoratedWithMargins(b10, e10, i16, i11, i15);
            }
            if (cVar.f4906q) {
                staggeredGridLayoutManager.c0(staggeredGridLayoutManager.f4888r.f5038e, i13);
            } else {
                staggeredGridLayoutManager.i0(fVar2, staggeredGridLayoutManager.f4888r.f5038e, i13);
            }
            staggeredGridLayoutManager.W(recycler, staggeredGridLayoutManager.f4888r);
            if (staggeredGridLayoutManager.f4888r.f5041h && b10.hasFocusable()) {
                if (cVar.f4906q) {
                    staggeredGridLayoutManager.f4891u.clear();
                } else {
                    staggeredGridLayoutManager.f4891u.set(fVar2.f4927e, false);
                }
            }
            z11 = true;
            r82 = 0;
        }
        if (!z11) {
            staggeredGridLayoutManager.W(recycler, staggeredGridLayoutManager.f4888r);
        }
        if (staggeredGridLayoutManager.f4888r.f5038e == -1) {
            I = staggeredGridLayoutManager.f4884i.m() - staggeredGridLayoutManager.L(staggeredGridLayoutManager.f4884i.m());
        } else {
            I = staggeredGridLayoutManager.I(staggeredGridLayoutManager.f4884i.i()) - staggeredGridLayoutManager.f4884i.i();
        }
        if (I > 0) {
            return Math.min(kVar.f5035b, I);
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
        int m10 = this.f4884i.m();
        int i10 = this.f4884i.i();
        View view = null;
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            int g10 = this.f4884i.g(childAt);
            int d10 = this.f4884i.d(childAt);
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
        int m10 = this.f4884i.m();
        int i10 = this.f4884i.i();
        int childCount = getChildCount();
        View view = null;
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = getChildAt(i11);
            int g10 = this.f4884i.g(childAt);
            if (this.f4884i.d(childAt) > m10 && g10 < i10) {
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
        if (this.f4890t) {
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
            int r3 = r12.f4882d
            r2.<init>(r3)
            int r3 = r12.f4882d
            r4 = 0
            r5 = 1
            r2.set(r4, r3, r5)
            int r3 = r12.f4886p
            r6 = -1
            if (r3 != r5) goto L21
            boolean r3 = r12.isLayoutRTL()
            if (r3 == 0) goto L21
            r3 = r5
            goto L22
        L21:
            r3 = r6
        L22:
            boolean r7 = r12.f4890t
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
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r8.f4905p
            int r9 = r9.f4927e
            boolean r9 = r2.get(r9)
            if (r9 == 0) goto L52
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r8.f4905p
            boolean r9 = r12.r(r9)
            if (r9 == 0) goto L4b
            goto La1
        L4b:
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r8.f4905p
            int r9 = r9.f4927e
            r2.clear(r9)
        L52:
            boolean r9 = r8.f4906q
            if (r9 == 0) goto L57
            goto La2
        L57:
            int r9 = r1 + r6
            if (r9 == r0) goto La2
            android.view.View r9 = r12.getChildAt(r9)
            boolean r10 = r12.f4890t
            if (r10 == 0) goto L75
            androidx.recyclerview.widget.OrientationHelper r10 = r12.f4884i
            int r10 = r10.d(r7)
            androidx.recyclerview.widget.OrientationHelper r11 = r12.f4884i
            int r11 = r11.d(r9)
            if (r10 >= r11) goto L72
            goto La1
        L72:
            if (r10 != r11) goto La2
            goto L86
        L75:
            androidx.recyclerview.widget.OrientationHelper r10 = r12.f4884i
            int r10 = r10.g(r7)
            androidx.recyclerview.widget.OrientationHelper r11 = r12.f4884i
            int r11 = r11.g(r9)
            if (r10 <= r11) goto L84
            goto La1
        L84:
            if (r10 != r11) goto La2
        L86:
            android.view.ViewGroup$LayoutParams r9 = r9.getLayoutParams()
            androidx.recyclerview.widget.StaggeredGridLayoutManager$c r9 = (androidx.recyclerview.widget.StaggeredGridLayoutManager.c) r9
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r8 = r8.f4905p
            int r8 = r8.f4927e
            androidx.recyclerview.widget.StaggeredGridLayoutManager$f r9 = r9.f4905p
            int r9 = r9.f4927e
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
        this.f4894x.b();
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
        this.f4888r.f5034a = true;
        g0(G, state);
        b0(i11);
        k kVar = this.f4888r;
        kVar.f5036c = G + kVar.f5037d;
        kVar.f5035b = Math.abs(i10);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void assertNotInLayoutOrScroll(String str) {
        if (this.B == null) {
            super.assertNotInLayoutOrScroll(str);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollHorizontally() {
        if (this.f4886p == 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollVertically() {
        if (this.f4886p == 1) {
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
        if (this.f4886p != 0) {
            i10 = i11;
        }
        if (getChildCount() != 0 && i10 != 0) {
            U(i10, state);
            int[] iArr = this.H;
            if (iArr == null || iArr.length < this.f4882d) {
                this.H = new int[this.f4882d];
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f4882d; i14++) {
                k kVar = this.f4888r;
                if (kVar.f5037d == -1) {
                    l10 = kVar.f5039f;
                    i12 = this.f4883e[i14].p(l10);
                } else {
                    l10 = this.f4883e[i14].l(kVar.f5040g);
                    i12 = this.f4888r.f5040g;
                }
                int i15 = l10 - i12;
                if (i15 >= 0) {
                    this.H[i13] = i15;
                    i13++;
                }
            }
            Arrays.sort(this.H, 0, i13);
            for (int i16 = 0; i16 < i13 && this.f4888r.a(state); i16++) {
                layoutPrefetchRegistry.a(this.f4888r.f5036c, this.H[i16]);
                k kVar2 = this.f4888r;
                kVar2.f5036c += kVar2.f5037d;
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
        if (this.f4886p == 0) {
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
        if (!state.e() && (i10 = this.f4892v) != -1) {
            if (i10 >= 0 && i10 < state.b()) {
                e eVar = this.B;
                if (eVar != null && eVar.f4913d != -1 && eVar.f4915i >= 1) {
                    bVar.f4899b = Integer.MIN_VALUE;
                    bVar.f4898a = this.f4892v;
                } else {
                    View findViewByPosition = findViewByPosition(this.f4892v);
                    if (findViewByPosition != null) {
                        if (this.f4890t) {
                            G = H();
                        } else {
                            G = G();
                        }
                        bVar.f4898a = G;
                        if (this.f4893w != Integer.MIN_VALUE) {
                            if (bVar.f4900c) {
                                bVar.f4899b = (this.f4884i.i() - this.f4893w) - this.f4884i.d(findViewByPosition);
                            } else {
                                bVar.f4899b = (this.f4884i.m() + this.f4893w) - this.f4884i.g(findViewByPosition);
                            }
                            return true;
                        } else if (this.f4884i.e(findViewByPosition) > this.f4884i.n()) {
                            if (bVar.f4900c) {
                                m10 = this.f4884i.i();
                            } else {
                                m10 = this.f4884i.m();
                            }
                            bVar.f4899b = m10;
                            return true;
                        } else {
                            int g10 = this.f4884i.g(findViewByPosition) - this.f4884i.m();
                            if (g10 < 0) {
                                bVar.f4899b = -g10;
                                return true;
                            }
                            int i11 = this.f4884i.i() - this.f4884i.d(findViewByPosition);
                            if (i11 < 0) {
                                bVar.f4899b = i11;
                                return true;
                            }
                            bVar.f4899b = Integer.MIN_VALUE;
                        }
                    } else {
                        int i12 = this.f4892v;
                        bVar.f4898a = i12;
                        int i13 = this.f4893w;
                        if (i13 == Integer.MIN_VALUE) {
                            if (p(i12) == 1) {
                                z10 = true;
                            }
                            bVar.f4900c = z10;
                            bVar.a();
                        } else {
                            bVar.b(i13);
                        }
                        bVar.f4901d = true;
                    }
                }
                return true;
            }
            this.f4892v = -1;
            this.f4893w = Integer.MIN_VALUE;
        }
        return false;
    }

    void f0(RecyclerView.State state, b bVar) {
        if (e0(state, bVar) || d0(state, bVar)) {
            return;
        }
        bVar.a();
        bVar.f4898a = 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateDefaultLayoutParams() {
        if (this.f4886p == 0) {
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
        if (this.f4886p == 1) {
            return Math.min(this.f4882d, state.b());
        }
        return -1;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int getRowCountForAccessibility(RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (this.f4886p == 0) {
            return Math.min(this.f4882d, state.b());
        }
        return -1;
    }

    void h0(int i10) {
        this.f4887q = i10 / this.f4882d;
        this.C = View.MeasureSpec.makeMeasureSpec(i10, this.f4885o.k());
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        if (this.f4895y != 0) {
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
        return this.f4889s;
    }

    boolean m() {
        int l10 = this.f4883e[0].l(Integer.MIN_VALUE);
        for (int i10 = 1; i10 < this.f4882d; i10++) {
            if (this.f4883e[i10].l(Integer.MIN_VALUE) != l10) {
                return false;
            }
        }
        return true;
    }

    boolean n() {
        int p10 = this.f4883e[0].p(Integer.MIN_VALUE);
        for (int i10 = 1; i10 < this.f4882d; i10++) {
            if (this.f4883e[i10].p(Integer.MIN_VALUE) != p10) {
                return false;
            }
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void offsetChildrenHorizontal(int i10) {
        super.offsetChildrenHorizontal(i10);
        for (int i11 = 0; i11 < this.f4882d; i11++) {
            this.f4883e[i11].r(i10);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void offsetChildrenVertical(int i10) {
        super.offsetChildrenVertical(i10);
        for (int i11 = 0; i11 < this.f4882d; i11++) {
            this.f4883e[i11].r(i10);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onAdapterChanged(RecyclerView.Adapter adapter, RecyclerView.Adapter adapter2) {
        this.f4894x.b();
        for (int i10 = 0; i10 < this.f4882d; i10++) {
            this.f4883e[i10].e();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onDetachedFromWindow(RecyclerView recyclerView, RecyclerView.Recycler recycler) {
        super.onDetachedFromWindow(recyclerView, recycler);
        removeCallbacks(this.I);
        for (int i10 = 0; i10 < this.f4882d; i10++) {
            this.f4883e[i10].e();
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
        boolean z12 = cVar.f4906q;
        f fVar = cVar.f4905p;
        if (convertFocusDirectionToLayoutDirection == 1) {
            G = H();
        } else {
            G = G();
        }
        g0(G, state);
        b0(convertFocusDirectionToLayoutDirection);
        k kVar = this.f4888r;
        kVar.f5036c = kVar.f5037d + G;
        kVar.f5035b = (int) (this.f4884i.n() * 0.33333334f);
        k kVar2 = this.f4888r;
        kVar2.f5041h = true;
        kVar2.f5034a = false;
        y(recycler, kVar2, state);
        this.f4896z = this.f4890t;
        if (!z12 && (m10 = fVar.m(G, convertFocusDirectionToLayoutDirection)) != null && m10 != findContainingItemView) {
            return m10;
        }
        if (T(convertFocusDirectionToLayoutDirection)) {
            for (int i11 = this.f4882d - 1; i11 >= 0; i11--) {
                View m11 = this.f4883e[i11].m(G, convertFocusDirectionToLayoutDirection);
                if (m11 != null && m11 != findContainingItemView) {
                    return m11;
                }
            }
        } else {
            for (int i12 = 0; i12 < this.f4882d; i12++) {
                View m12 = this.f4883e[i12].m(G, convertFocusDirectionToLayoutDirection);
                if (m12 != null && m12 != findContainingItemView) {
                    return m12;
                }
            }
        }
        boolean z13 = !this.f4889s;
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
            for (int i13 = this.f4882d - 1; i13 >= 0; i13--) {
                if (i13 != fVar.f4927e) {
                    if (z11) {
                        g11 = this.f4883e[i13].f();
                    } else {
                        g11 = this.f4883e[i13].g();
                    }
                    View findViewByPosition2 = findViewByPosition(g11);
                    if (findViewByPosition2 != null && findViewByPosition2 != findContainingItemView) {
                        return findViewByPosition2;
                    }
                }
            }
        } else {
            for (int i14 = 0; i14 < this.f4882d; i14++) {
                if (z11) {
                    g10 = this.f4883e[i14].f();
                } else {
                    g10 = this.f4883e[i14].g();
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
        if (this.f4886p == 0) {
            int e10 = cVar.e();
            if (cVar.f4906q) {
                i10 = this.f4882d;
            }
            accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(e10, i10, -1, -1, false, false));
            return;
        }
        int e11 = cVar.e();
        if (cVar.f4906q) {
            i10 = this.f4882d;
        }
        accessibilityNodeInfoCompat.z0(AccessibilityNodeInfoCompat.g.b(-1, -1, e11, i10, false, false));
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsAdded(RecyclerView recyclerView, int i10, int i11) {
        N(i10, i11, 1);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsChanged(RecyclerView recyclerView) {
        this.f4894x.b();
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
        this.f4892v = -1;
        this.f4893w = Integer.MIN_VALUE;
        this.B = null;
        this.E.c();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onRestoreInstanceState(Parcelable parcelable) {
        if (parcelable instanceof e) {
            e eVar = (e) parcelable;
            this.B = eVar;
            if (this.f4892v != -1) {
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
        eVar.f4920s = this.f4889s;
        eVar.f4921t = this.f4896z;
        eVar.f4922u = this.A;
        d dVar = this.f4894x;
        if (dVar != null && (iArr = dVar.f4907a) != null) {
            eVar.f4918q = iArr;
            eVar.f4917p = iArr.length;
            eVar.f4919r = dVar.f4908b;
        } else {
            eVar.f4917p = 0;
        }
        if (getChildCount() > 0) {
            if (this.f4896z) {
                G = H();
            } else {
                G = G();
            }
            eVar.f4913d = G;
            eVar.f4914e = C();
            int i10 = this.f4882d;
            eVar.f4915i = i10;
            eVar.f4916o = new int[i10];
            for (int i11 = 0; i11 < this.f4882d; i11++) {
                if (this.f4896z) {
                    p10 = this.f4883e[i11].l(Integer.MIN_VALUE);
                    if (p10 != Integer.MIN_VALUE) {
                        m10 = this.f4884i.i();
                        p10 -= m10;
                        eVar.f4916o[i11] = p10;
                    } else {
                        eVar.f4916o[i11] = p10;
                    }
                } else {
                    p10 = this.f4883e[i11].p(Integer.MIN_VALUE);
                    if (p10 != Integer.MIN_VALUE) {
                        m10 = this.f4884i.m();
                        p10 -= m10;
                        eVar.f4916o[i11] = p10;
                    } else {
                        eVar.f4916o[i11] = p10;
                    }
                }
            }
            return eVar;
        }
        eVar.f4913d = -1;
        eVar.f4914e = -1;
        eVar.f4915i = 0;
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
        if (getChildCount() == 0 || this.f4895y == 0 || !isAttachedToWindow()) {
            return false;
        }
        if (this.f4890t) {
            G = H();
            H = G();
        } else {
            G = G();
            H = H();
        }
        if (G == 0 && O() != null) {
            this.f4894x.b();
            requestSimpleAnimationsInNextLayout();
            requestLayout();
            return true;
        } else if (!this.F) {
            return false;
        } else {
            if (this.f4890t) {
                i10 = -1;
            } else {
                i10 = 1;
            }
            int i11 = H + 1;
            d.a e10 = this.f4894x.e(G, i11, i10, true);
            if (e10 == null) {
                this.F = false;
                this.f4894x.d(i11);
                return false;
            }
            d.a e11 = this.f4894x.e(G, e10.f4909d, i10 * (-1), true);
            if (e11 == null) {
                this.f4894x.d(e10.f4909d);
            } else {
                this.f4894x.d(e11.f4909d + 1);
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
        int y10 = y(recycler, this.f4888r, state);
        if (this.f4888r.f5035b >= y10) {
            if (i10 < 0) {
                i10 = -y10;
            } else {
                i10 = y10;
            }
        }
        this.f4884i.r(-i10);
        this.f4896z = this.f4890t;
        k kVar = this.f4888r;
        kVar.f5035b = 0;
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
        if (eVar != null && eVar.f4913d != i10) {
            eVar.a();
        }
        this.f4892v = i10;
        this.f4893w = Integer.MIN_VALUE;
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
        if (this.f4886p == 1) {
            chooseSize2 = RecyclerView.LayoutManager.chooseSize(i11, rect.height() + paddingTop, getMinimumHeight());
            chooseSize = RecyclerView.LayoutManager.chooseSize(i10, (this.f4887q * this.f4882d) + paddingLeft, getMinimumWidth());
        } else {
            chooseSize = RecyclerView.LayoutManager.chooseSize(i10, rect.width() + paddingLeft, getMinimumWidth());
            chooseSize2 = RecyclerView.LayoutManager.chooseSize(i11, (this.f4887q * this.f4882d) + paddingTop, getMinimumHeight());
        }
        setMeasuredDimension(chooseSize, chooseSize2);
    }

    public void setOrientation(int i10) {
        if (i10 != 0 && i10 != 1) {
            throw new IllegalArgumentException("invalid orientation.");
        }
        assertNotInLayoutOrScroll(null);
        if (i10 == this.f4886p) {
            return;
        }
        this.f4886p = i10;
        OrientationHelper orientationHelper = this.f4884i;
        this.f4884i = this.f4885o;
        this.f4885o = orientationHelper;
        requestLayout();
    }

    public void setReverseLayout(boolean z10) {
        assertNotInLayoutOrScroll(null);
        e eVar = this.B;
        if (eVar != null && eVar.f4920s != z10) {
            eVar.f4920s = z10;
        }
        this.f4889s = z10;
        requestLayout();
    }

    public void setSpanCount(int i10) {
        assertNotInLayoutOrScroll(null);
        if (i10 != this.f4882d) {
            P();
            this.f4882d = i10;
            this.f4891u = new BitSet(this.f4882d);
            this.f4883e = new f[this.f4882d];
            for (int i11 = 0; i11 < this.f4882d; i11++) {
                this.f4883e[i11] = new f(i11);
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
        int[] f4907a;

        /* renamed from: b  reason: collision with root package name */
        List f4908b;

        d() {
        }

        private int i(int i10) {
            if (this.f4908b == null) {
                return -1;
            }
            a f10 = f(i10);
            if (f10 != null) {
                this.f4908b.remove(f10);
            }
            int size = this.f4908b.size();
            int i11 = 0;
            while (true) {
                if (i11 < size) {
                    if (((a) this.f4908b.get(i11)).f4909d >= i10) {
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
            this.f4908b.remove(i11);
            return ((a) this.f4908b.get(i11)).f4909d;
        }

        private void l(int i10, int i11) {
            List list = this.f4908b;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    a aVar = (a) this.f4908b.get(size);
                    int i12 = aVar.f4909d;
                    if (i12 >= i10) {
                        aVar.f4909d = i12 + i11;
                    }
                }
            }
        }

        private void m(int i10, int i11) {
            List list = this.f4908b;
            if (list != null) {
                int i12 = i10 + i11;
                for (int size = list.size() - 1; size >= 0; size--) {
                    a aVar = (a) this.f4908b.get(size);
                    int i13 = aVar.f4909d;
                    if (i13 >= i10) {
                        if (i13 < i12) {
                            this.f4908b.remove(size);
                        } else {
                            aVar.f4909d = i13 - i11;
                        }
                    }
                }
            }
        }

        public void a(a aVar) {
            if (this.f4908b == null) {
                this.f4908b = new ArrayList();
            }
            int size = this.f4908b.size();
            for (int i10 = 0; i10 < size; i10++) {
                a aVar2 = (a) this.f4908b.get(i10);
                if (aVar2.f4909d == aVar.f4909d) {
                    this.f4908b.remove(i10);
                }
                if (aVar2.f4909d >= aVar.f4909d) {
                    this.f4908b.add(i10, aVar);
                    return;
                }
            }
            this.f4908b.add(aVar);
        }

        void b() {
            int[] iArr = this.f4907a;
            if (iArr != null) {
                Arrays.fill(iArr, -1);
            }
            this.f4908b = null;
        }

        void c(int i10) {
            int[] iArr = this.f4907a;
            if (iArr == null) {
                int[] iArr2 = new int[Math.max(i10, 10) + 1];
                this.f4907a = iArr2;
                Arrays.fill(iArr2, -1);
            } else if (i10 >= iArr.length) {
                int[] iArr3 = new int[o(i10)];
                this.f4907a = iArr3;
                System.arraycopy(iArr, 0, iArr3, 0, iArr.length);
                int[] iArr4 = this.f4907a;
                Arrays.fill(iArr4, iArr.length, iArr4.length, -1);
            }
        }

        int d(int i10) {
            List list = this.f4908b;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    if (((a) this.f4908b.get(size)).f4909d >= i10) {
                        this.f4908b.remove(size);
                    }
                }
            }
            return h(i10);
        }

        public a e(int i10, int i11, int i12, boolean z10) {
            List list = this.f4908b;
            if (list == null) {
                return null;
            }
            int size = list.size();
            for (int i13 = 0; i13 < size; i13++) {
                a aVar = (a) this.f4908b.get(i13);
                int i14 = aVar.f4909d;
                if (i14 >= i11) {
                    return null;
                }
                if (i14 >= i10 && (i12 == 0 || aVar.f4910e == i12 || (z10 && aVar.f4912o))) {
                    return aVar;
                }
            }
            return null;
        }

        public a f(int i10) {
            List list = this.f4908b;
            if (list == null) {
                return null;
            }
            for (int size = list.size() - 1; size >= 0; size--) {
                a aVar = (a) this.f4908b.get(size);
                if (aVar.f4909d == i10) {
                    return aVar;
                }
            }
            return null;
        }

        int g(int i10) {
            int[] iArr = this.f4907a;
            if (iArr != null && i10 < iArr.length) {
                return iArr[i10];
            }
            return -1;
        }

        int h(int i10) {
            int[] iArr = this.f4907a;
            if (iArr == null || i10 >= iArr.length) {
                return -1;
            }
            int i11 = i(i10);
            if (i11 == -1) {
                int[] iArr2 = this.f4907a;
                Arrays.fill(iArr2, i10, iArr2.length, -1);
                return this.f4907a.length;
            }
            int min = Math.min(i11 + 1, this.f4907a.length);
            Arrays.fill(this.f4907a, i10, min, -1);
            return min;
        }

        void j(int i10, int i11) {
            int[] iArr = this.f4907a;
            if (iArr != null && i10 < iArr.length) {
                int i12 = i10 + i11;
                c(i12);
                int[] iArr2 = this.f4907a;
                System.arraycopy(iArr2, i10, iArr2, i12, (iArr2.length - i10) - i11);
                Arrays.fill(this.f4907a, i10, i12, -1);
                l(i10, i11);
            }
        }

        void k(int i10, int i11) {
            int[] iArr = this.f4907a;
            if (iArr != null && i10 < iArr.length) {
                int i12 = i10 + i11;
                c(i12);
                int[] iArr2 = this.f4907a;
                System.arraycopy(iArr2, i12, iArr2, i10, (iArr2.length - i10) - i11);
                int[] iArr3 = this.f4907a;
                Arrays.fill(iArr3, iArr3.length - i11, iArr3.length, -1);
                m(i10, i11);
            }
        }

        void n(int i10, f fVar) {
            c(i10);
            this.f4907a[i10] = fVar.f4927e;
        }

        int o(int i10) {
            int length = this.f4907a.length;
            while (length <= i10) {
                length *= 2;
            }
            return length;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a implements Parcelable {
            public static final Parcelable.Creator<a> CREATOR = new C0065a();

            /* renamed from: d  reason: collision with root package name */
            int f4909d;

            /* renamed from: e  reason: collision with root package name */
            int f4910e;

            /* renamed from: i  reason: collision with root package name */
            int[] f4911i;

            /* renamed from: o  reason: collision with root package name */
            boolean f4912o;

            /* renamed from: androidx.recyclerview.widget.StaggeredGridLayoutManager$d$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            class C0065a implements Parcelable.Creator {
                C0065a() {
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
                this.f4909d = parcel.readInt();
                this.f4910e = parcel.readInt();
                this.f4912o = parcel.readInt() == 1;
                int readInt = parcel.readInt();
                if (readInt > 0) {
                    int[] iArr = new int[readInt];
                    this.f4911i = iArr;
                    parcel.readIntArray(iArr);
                }
            }

            int a(int i10) {
                int[] iArr = this.f4911i;
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
                return "FullSpanItem{mPosition=" + this.f4909d + ", mGapDir=" + this.f4910e + ", mHasUnwantedGapAfter=" + this.f4912o + ", mGapPerSpan=" + Arrays.toString(this.f4911i) + '}';
            }

            @Override // android.os.Parcelable
            public void writeToParcel(Parcel parcel, int i10) {
                parcel.writeInt(this.f4909d);
                parcel.writeInt(this.f4910e);
                parcel.writeInt(this.f4912o ? 1 : 0);
                int[] iArr = this.f4911i;
                if (iArr != null && iArr.length > 0) {
                    parcel.writeInt(iArr.length);
                    parcel.writeIntArray(this.f4911i);
                    return;
                }
                parcel.writeInt(0);
            }

            a() {
            }
        }
    }
}
