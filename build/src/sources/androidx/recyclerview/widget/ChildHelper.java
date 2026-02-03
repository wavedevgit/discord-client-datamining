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
    final b f4747a;

    /* renamed from: e  reason: collision with root package name */
    private View f4751e;

    /* renamed from: d  reason: collision with root package name */
    private int f4750d = 0;

    /* renamed from: b  reason: collision with root package name */
    final a f4748b = new a();

    /* renamed from: c  reason: collision with root package name */
    final List f4749c = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        long f4752a = 0;

        /* renamed from: b  reason: collision with root package name */
        a f4753b;

        a() {
        }

        private void c() {
            if (this.f4753b == null) {
                this.f4753b = new a();
            }
        }

        void a(int i10) {
            if (i10 >= 64) {
                a aVar = this.f4753b;
                if (aVar != null) {
                    aVar.a(i10 - 64);
                    return;
                }
                return;
            }
            this.f4752a &= ~(1 << i10);
        }

        int b(int i10) {
            a aVar = this.f4753b;
            if (aVar == null) {
                if (i10 >= 64) {
                    return Long.bitCount(this.f4752a);
                }
                return Long.bitCount(this.f4752a & ((1 << i10) - 1));
            } else if (i10 < 64) {
                return Long.bitCount(this.f4752a & ((1 << i10) - 1));
            } else {
                return aVar.b(i10 - 64) + Long.bitCount(this.f4752a);
            }
        }

        boolean d(int i10) {
            if (i10 >= 64) {
                c();
                return this.f4753b.d(i10 - 64);
            } else if ((this.f4752a & (1 << i10)) != 0) {
                return true;
            } else {
                return false;
            }
        }

        void e(int i10, boolean z10) {
            boolean z11;
            if (i10 >= 64) {
                c();
                this.f4753b.e(i10 - 64, z10);
                return;
            }
            long j10 = this.f4752a;
            if ((Long.MIN_VALUE & j10) != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            long j11 = (1 << i10) - 1;
            this.f4752a = ((j10 & (~j11)) << 1) | (j10 & j11);
            if (z10) {
                h(i10);
            } else {
                a(i10);
            }
            if (!z11 && this.f4753b == null) {
                return;
            }
            c();
            this.f4753b.e(0, z11);
        }

        boolean f(int i10) {
            boolean z10;
            if (i10 >= 64) {
                c();
                return this.f4753b.f(i10 - 64);
            }
            long j10 = 1 << i10;
            long j11 = this.f4752a;
            if ((j11 & j10) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            long j12 = j11 & (~j10);
            this.f4752a = j12;
            long j13 = j10 - 1;
            this.f4752a = (j12 & j13) | Long.rotateRight((~j13) & j12, 1);
            a aVar = this.f4753b;
            if (aVar != null) {
                if (aVar.d(0)) {
                    h(63);
                }
                this.f4753b.f(0);
            }
            return z10;
        }

        void g() {
            this.f4752a = 0L;
            a aVar = this.f4753b;
            if (aVar != null) {
                aVar.g();
            }
        }

        void h(int i10) {
            if (i10 >= 64) {
                c();
                this.f4753b.h(i10 - 64);
                return;
            }
            this.f4752a |= 1 << i10;
        }

        public String toString() {
            if (this.f4753b == null) {
                return Long.toBinaryString(this.f4752a);
            }
            return this.f4753b.toString() + "xx" + Long.toBinaryString(this.f4752a);
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
        this.f4747a = bVar;
    }

    private int h(int i10) {
        if (i10 < 0) {
            return -1;
        }
        int childCount = this.f4747a.getChildCount();
        int i11 = i10;
        while (i11 < childCount) {
            int b10 = i10 - (i11 - this.f4748b.b(i11));
            if (b10 == 0) {
                while (this.f4748b.d(i11)) {
                    i11++;
                }
                return i11;
            }
            i11 += b10;
        }
        return -1;
    }

    private void l(View view) {
        this.f4749c.add(view);
        this.f4747a.a(view);
    }

    private boolean t(View view) {
        if (this.f4749c.remove(view)) {
            this.f4747a.g(view);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(View view, int i10, boolean z10) {
        int h10;
        if (i10 < 0) {
            h10 = this.f4747a.getChildCount();
        } else {
            h10 = h(i10);
        }
        this.f4748b.e(h10, z10);
        if (z10) {
            l(view);
        }
        this.f4747a.d(view, h10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(View view, boolean z10) {
        a(view, -1, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(View view, int i10, ViewGroup.LayoutParams layoutParams, boolean z10) {
        int h10;
        if (i10 < 0) {
            h10 = this.f4747a.getChildCount();
        } else {
            h10 = h(i10);
        }
        this.f4748b.e(h10, z10);
        if (z10) {
            l(view);
        }
        this.f4747a.i(view, h10, layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(int i10) {
        int h10 = h(i10);
        this.f4748b.f(h10);
        this.f4747a.c(h10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View e(int i10) {
        int size = this.f4749c.size();
        for (int i11 = 0; i11 < size; i11++) {
            View view = (View) this.f4749c.get(i11);
            RecyclerView.ViewHolder b10 = this.f4747a.b(view);
            if (b10.getLayoutPosition() == i10 && !b10.isInvalid() && !b10.isRemoved()) {
                return view;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View f(int i10) {
        return this.f4747a.getChildAt(h(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f4747a.getChildCount() - this.f4749c.size();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View i(int i10) {
        return this.f4747a.getChildAt(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j() {
        return this.f4747a.getChildCount();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(View view) {
        int f10 = this.f4747a.f(view);
        if (f10 >= 0) {
            this.f4748b.h(f10);
            l(view);
            return;
        }
        throw new IllegalArgumentException("view is not a child, cannot hide " + view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m(View view) {
        int f10 = this.f4747a.f(view);
        if (f10 == -1 || this.f4748b.d(f10)) {
            return -1;
        }
        return f10 - this.f4748b.b(f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n(View view) {
        return this.f4749c.contains(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o() {
        this.f4748b.g();
        for (int size = this.f4749c.size() - 1; size >= 0; size--) {
            this.f4747a.g((View) this.f4749c.get(size));
            this.f4749c.remove(size);
        }
        this.f4747a.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(View view) {
        int i10 = this.f4750d;
        if (i10 != 1) {
            if (i10 != 2) {
                try {
                    this.f4750d = 1;
                    this.f4751e = view;
                    int f10 = this.f4747a.f(view);
                    if (f10 >= 0) {
                        if (this.f4748b.f(f10)) {
                            t(view);
                        }
                        this.f4747a.h(f10);
                    }
                    this.f4750d = 0;
                    this.f4751e = null;
                    return;
                } catch (Throwable th2) {
                    this.f4750d = 0;
                    this.f4751e = null;
                    throw th2;
                }
            }
            throw new IllegalStateException("Cannot call removeView(At) within removeViewIfHidden");
        }
        throw new IllegalStateException("Cannot call removeView(At) within removeView(At)");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(int i10) {
        int i11 = this.f4750d;
        if (i11 != 1) {
            if (i11 != 2) {
                try {
                    int h10 = h(i10);
                    View childAt = this.f4747a.getChildAt(h10);
                    if (childAt != null) {
                        this.f4750d = 1;
                        this.f4751e = childAt;
                        if (this.f4748b.f(h10)) {
                            t(childAt);
                        }
                        this.f4747a.h(h10);
                    }
                    this.f4750d = 0;
                    this.f4751e = null;
                    return;
                } catch (Throwable th2) {
                    this.f4750d = 0;
                    this.f4751e = null;
                    throw th2;
                }
            }
            throw new IllegalStateException("Cannot call removeView(At) within removeViewIfHidden");
        }
        throw new IllegalStateException("Cannot call removeView(At) within removeView(At)");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r(View view) {
        int i10 = this.f4750d;
        if (i10 == 1) {
            if (this.f4751e == view) {
                return false;
            }
            throw new IllegalStateException("Cannot call removeViewIfHidden within removeView(At) for a different view");
        } else if (i10 != 2) {
            try {
                this.f4750d = 2;
                int f10 = this.f4747a.f(view);
                if (f10 == -1) {
                    t(view);
                    return true;
                } else if (!this.f4748b.d(f10)) {
                    return false;
                } else {
                    this.f4748b.f(f10);
                    t(view);
                    this.f4747a.h(f10);
                    return true;
                }
            } finally {
                this.f4750d = 0;
            }
        } else {
            throw new IllegalStateException("Cannot call removeViewIfHidden within removeViewIfHidden");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(View view) {
        int f10 = this.f4747a.f(view);
        if (f10 >= 0) {
            if (this.f4748b.d(f10)) {
                this.f4748b.a(f10);
                t(view);
                return;
            }
            throw new RuntimeException("trying to unhide a view that was not hidden" + view);
        }
        throw new IllegalArgumentException("view is not a child, cannot hide " + view);
    }

    public String toString() {
        return this.f4748b.toString() + ", hidden list:" + this.f4749c.size();
    }
}
