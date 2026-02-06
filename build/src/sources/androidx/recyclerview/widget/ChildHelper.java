package androidx.recyclerview.widget;

import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ChildHelper {

    /* renamed from: a  reason: collision with root package name */
    final b f5157a;

    /* renamed from: e  reason: collision with root package name */
    private View f5161e;

    /* renamed from: d  reason: collision with root package name */
    private int f5160d = 0;

    /* renamed from: b  reason: collision with root package name */
    final a f5158b = new a();

    /* renamed from: c  reason: collision with root package name */
    final List f5159c = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        long f5162a = 0;

        /* renamed from: b  reason: collision with root package name */
        a f5163b;

        a() {
        }

        private void c() {
            if (this.f5163b == null) {
                this.f5163b = new a();
            }
        }

        void a(int i10) {
            if (i10 >= 64) {
                a aVar = this.f5163b;
                if (aVar != null) {
                    aVar.a(i10 - 64);
                    return;
                }
                return;
            }
            this.f5162a &= ~(1 << i10);
        }

        int b(int i10) {
            a aVar = this.f5163b;
            if (aVar == null) {
                if (i10 >= 64) {
                    return Long.bitCount(this.f5162a);
                }
                return Long.bitCount(this.f5162a & ((1 << i10) - 1));
            } else if (i10 < 64) {
                return Long.bitCount(this.f5162a & ((1 << i10) - 1));
            } else {
                return aVar.b(i10 - 64) + Long.bitCount(this.f5162a);
            }
        }

        boolean d(int i10) {
            if (i10 >= 64) {
                c();
                return this.f5163b.d(i10 - 64);
            } else if ((this.f5162a & (1 << i10)) != 0) {
                return true;
            } else {
                return false;
            }
        }

        void e(int i10, boolean z10) {
            boolean z11;
            if (i10 >= 64) {
                c();
                this.f5163b.e(i10 - 64, z10);
                return;
            }
            long j10 = this.f5162a;
            if ((Long.MIN_VALUE & j10) != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            long j11 = (1 << i10) - 1;
            this.f5162a = ((j10 & (~j11)) << 1) | (j10 & j11);
            if (z10) {
                h(i10);
            } else {
                a(i10);
            }
            if (!z11 && this.f5163b == null) {
                return;
            }
            c();
            this.f5163b.e(0, z11);
        }

        boolean f(int i10) {
            boolean z10;
            if (i10 >= 64) {
                c();
                return this.f5163b.f(i10 - 64);
            }
            long j10 = 1 << i10;
            long j11 = this.f5162a;
            if ((j11 & j10) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            long j12 = j11 & (~j10);
            this.f5162a = j12;
            long j13 = j10 - 1;
            this.f5162a = (j12 & j13) | Long.rotateRight((~j13) & j12, 1);
            a aVar = this.f5163b;
            if (aVar != null) {
                if (aVar.d(0)) {
                    h(63);
                }
                this.f5163b.f(0);
            }
            return z10;
        }

        void g() {
            this.f5162a = 0L;
            a aVar = this.f5163b;
            if (aVar != null) {
                aVar.g();
            }
        }

        void h(int i10) {
            if (i10 >= 64) {
                c();
                this.f5163b.h(i10 - 64);
                return;
            }
            this.f5162a |= 1 << i10;
        }

        public String toString() {
            if (this.f5163b == null) {
                return Long.toBinaryString(this.f5162a);
            }
            return this.f5163b.toString() + "xx" + Long.toBinaryString(this.f5162a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(View view);

        RecyclerView.ViewHolder b(View view);

        void c(int i10);

        void d(View view, int i10);

        void e();

        int f(View view);

        void g(View view);

        View getChildAt(int i10);

        int getChildCount();

        void h(int i10);

        void i(View view, int i10, ViewGroup.LayoutParams layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ChildHelper(b bVar) {
        this.f5157a = bVar;
    }

    private int h(int i10) {
        if (i10 < 0) {
            return -1;
        }
        int childCount = this.f5157a.getChildCount();
        int i11 = i10;
        while (i11 < childCount) {
            int b10 = i10 - (i11 - this.f5158b.b(i11));
            if (b10 == 0) {
                while (this.f5158b.d(i11)) {
                    i11++;
                }
                return i11;
            }
            i11 += b10;
        }
        return -1;
    }

    private void l(View view) {
        this.f5159c.add(view);
        this.f5157a.a(view);
    }

    private boolean t(View view) {
        if (this.f5159c.remove(view)) {
            this.f5157a.g(view);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(View view, int i10, boolean z10) {
        int h10;
        if (i10 < 0) {
            h10 = this.f5157a.getChildCount();
        } else {
            h10 = h(i10);
        }
        this.f5158b.e(h10, z10);
        if (z10) {
            l(view);
        }
        this.f5157a.d(view, h10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(View view, boolean z10) {
        a(view, -1, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(View view, int i10, ViewGroup.LayoutParams layoutParams, boolean z10) {
        int h10;
        if (i10 < 0) {
            h10 = this.f5157a.getChildCount();
        } else {
            h10 = h(i10);
        }
        this.f5158b.e(h10, z10);
        if (z10) {
            l(view);
        }
        this.f5157a.i(view, h10, layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(int i10) {
        int h10 = h(i10);
        this.f5158b.f(h10);
        this.f5157a.c(h10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View e(int i10) {
        int size = this.f5159c.size();
        for (int i11 = 0; i11 < size; i11++) {
            View view = (View) this.f5159c.get(i11);
            RecyclerView.ViewHolder b10 = this.f5157a.b(view);
            if (b10.getLayoutPosition() == i10 && !b10.isInvalid() && !b10.isRemoved()) {
                return view;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View f(int i10) {
        return this.f5157a.getChildAt(h(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f5157a.getChildCount() - this.f5159c.size();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View i(int i10) {
        return this.f5157a.getChildAt(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f5157a.getChildCount();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(View view) {
        int f10 = this.f5157a.f(view);
        if (f10 >= 0) {
            this.f5158b.h(f10);
            l(view);
            return;
        }
        throw new IllegalArgumentException("view is not a child, cannot hide " + view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m(View view) {
        int f10 = this.f5157a.f(view);
        if (f10 == -1 || this.f5158b.d(f10)) {
            return -1;
        }
        return f10 - this.f5158b.b(f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n(View view) {
        return this.f5159c.contains(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o() {
        this.f5158b.g();
        for (int size = this.f5159c.size() - 1; size >= 0; size--) {
            this.f5157a.g((View) this.f5159c.get(size));
            this.f5159c.remove(size);
        }
        this.f5157a.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(View view) {
        int i10 = this.f5160d;
        if (i10 != 1) {
            if (i10 != 2) {
                try {
                    this.f5160d = 1;
                    this.f5161e = view;
                    int f10 = this.f5157a.f(view);
                    if (f10 >= 0) {
                        if (this.f5158b.f(f10)) {
                            t(view);
                        }
                        this.f5157a.h(f10);
                    }
                    this.f5160d = 0;
                    this.f5161e = null;
                    return;
                } catch (Throwable th2) {
                    this.f5160d = 0;
                    this.f5161e = null;
                    throw th2;
                }
            }
            throw new IllegalStateException("Cannot call removeView(At) within removeViewIfHidden");
        }
        throw new IllegalStateException("Cannot call removeView(At) within removeView(At)");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(int i10) {
        int i11 = this.f5160d;
        if (i11 != 1) {
            if (i11 != 2) {
                try {
                    int h10 = h(i10);
                    View childAt = this.f5157a.getChildAt(h10);
                    if (childAt != null) {
                        this.f5160d = 1;
                        this.f5161e = childAt;
                        if (this.f5158b.f(h10)) {
                            t(childAt);
                        }
                        this.f5157a.h(h10);
                    }
                    this.f5160d = 0;
                    this.f5161e = null;
                    return;
                } catch (Throwable th2) {
                    this.f5160d = 0;
                    this.f5161e = null;
                    throw th2;
                }
            }
            throw new IllegalStateException("Cannot call removeView(At) within removeViewIfHidden");
        }
        throw new IllegalStateException("Cannot call removeView(At) within removeView(At)");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r(View view) {
        int i10 = this.f5160d;
        if (i10 == 1) {
            if (this.f5161e == view) {
                return false;
            }
            throw new IllegalStateException("Cannot call removeViewIfHidden within removeView(At) for a different view");
        } else if (i10 != 2) {
            try {
                this.f5160d = 2;
                int f10 = this.f5157a.f(view);
                if (f10 == -1) {
                    t(view);
                    return true;
                } else if (!this.f5158b.d(f10)) {
                    return false;
                } else {
                    this.f5158b.f(f10);
                    t(view);
                    this.f5157a.h(f10);
                    return true;
                }
            } finally {
                this.f5160d = 0;
            }
        } else {
            throw new IllegalStateException("Cannot call removeViewIfHidden within removeViewIfHidden");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(View view) {
        int f10 = this.f5157a.f(view);
        if (f10 >= 0) {
            if (this.f5158b.d(f10)) {
                this.f5158b.a(f10);
                t(view);
                return;
            }
            throw new RuntimeException("trying to unhide a view that was not hidden" + view);
        }
        throw new IllegalArgumentException("view is not a child, cannot hide " + view);
    }

    public String toString() {
        return this.f5158b.toString() + ", hidden list:" + this.f5159c.size();
    }
}
