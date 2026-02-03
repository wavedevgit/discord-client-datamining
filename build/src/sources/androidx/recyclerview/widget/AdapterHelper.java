package androidx.recyclerview.widget;

import androidx.core.util.Pools$SimplePool;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.n;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AdapterHelper implements n.a {

    /* renamed from: a  reason: collision with root package name */
    private b2.d f4704a;

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f4705b;

    /* renamed from: c  reason: collision with root package name */
    final ArrayList f4706c;

    /* renamed from: d  reason: collision with root package name */
    final a f4707d;

    /* renamed from: e  reason: collision with root package name */
    Runnable f4708e;

    /* renamed from: f  reason: collision with root package name */
    final boolean f4709f;

    /* renamed from: g  reason: collision with root package name */
    final n f4710g;

    /* renamed from: h  reason: collision with root package name */
    private int f4711h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(int i10, int i11);

        void b(b bVar);

        void c(b bVar);

        void d(int i10, int i11);

        void e(int i10, int i11, Object obj);

        RecyclerView.ViewHolder f(int i10);

        void g(int i10, int i11);

        void h(int i10, int i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        int f4712a;

        /* renamed from: b  reason: collision with root package name */
        int f4713b;

        /* renamed from: c  reason: collision with root package name */
        Object f4714c;

        /* renamed from: d  reason: collision with root package name */
        int f4715d;

        b(int i10, int i11, int i12, Object obj) {
            this.f4712a = i10;
            this.f4713b = i11;
            this.f4715d = i12;
            this.f4714c = obj;
        }

        String a() {
            int i10 = this.f4712a;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 4) {
                        if (i10 != 8) {
                            return "??";
                        }
                        return "mv";
                    }
                    return "up";
                }
                return "rm";
            }
            return "add";
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            int i10 = this.f4712a;
            if (i10 != bVar.f4712a) {
                return false;
            }
            if (i10 == 8 && Math.abs(this.f4715d - this.f4713b) == 1 && this.f4715d == bVar.f4713b && this.f4713b == bVar.f4715d) {
                return true;
            }
            if (this.f4715d != bVar.f4715d || this.f4713b != bVar.f4713b) {
                return false;
            }
            Object obj2 = this.f4714c;
            if (obj2 != null) {
                if (!obj2.equals(bVar.f4714c)) {
                    return false;
                }
            } else if (bVar.f4714c != null) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (((this.f4712a * 31) + this.f4713b) * 31) + this.f4715d;
        }

        public String toString() {
            return Integer.toHexString(System.identityHashCode(this)) + "[" + a() + ",s:" + this.f4713b + "c:" + this.f4715d + ",p:" + this.f4714c + "]";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AdapterHelper(a aVar) {
        this(aVar, false);
    }

    private void c(b bVar) {
        v(bVar);
    }

    private void d(b bVar) {
        v(bVar);
    }

    private void f(b bVar) {
        boolean z10;
        char c10;
        int i10 = bVar.f4713b;
        int i11 = bVar.f4715d + i10;
        char c11 = 65535;
        int i12 = i10;
        int i13 = 0;
        while (i12 < i11) {
            if (this.f4707d.f(i12) == null && !h(i12)) {
                if (c11 == 1) {
                    v(a(2, i10, i13, null));
                    z10 = true;
                } else {
                    z10 = false;
                }
                c10 = 0;
            } else {
                if (c11 == 0) {
                    k(a(2, i10, i13, null));
                    z10 = true;
                } else {
                    z10 = false;
                }
                c10 = 1;
            }
            if (z10) {
                i12 -= i13;
                i11 -= i13;
                i13 = 1;
            } else {
                i13++;
            }
            i12++;
            c11 = c10;
        }
        if (i13 != bVar.f4715d) {
            b(bVar);
            bVar = a(2, i10, i13, null);
        }
        if (c11 == 0) {
            k(bVar);
        } else {
            v(bVar);
        }
    }

    private void g(b bVar) {
        int i10 = bVar.f4713b;
        int i11 = bVar.f4715d + i10;
        int i12 = 0;
        boolean z10 = true;
        int i13 = i10;
        while (i10 < i11) {
            if (this.f4707d.f(i10) == null && !h(i10)) {
                if (z10) {
                    v(a(4, i13, i12, bVar.f4714c));
                    i13 = i10;
                    i12 = 0;
                }
                z10 = false;
            } else {
                if (!z10) {
                    k(a(4, i13, i12, bVar.f4714c));
                    i13 = i10;
                    i12 = 0;
                }
                z10 = true;
            }
            i12++;
            i10++;
        }
        if (i12 != bVar.f4715d) {
            Object obj = bVar.f4714c;
            b(bVar);
            bVar = a(4, i13, i12, obj);
        }
        if (!z10) {
            k(bVar);
        } else {
            v(bVar);
        }
    }

    private boolean h(int i10) {
        int size = this.f4706c.size();
        for (int i11 = 0; i11 < size; i11++) {
            b bVar = (b) this.f4706c.get(i11);
            int i12 = bVar.f4712a;
            if (i12 == 8) {
                if (n(bVar.f4715d, i11 + 1) == i10) {
                    return true;
                }
            } else if (i12 == 1) {
                int i13 = bVar.f4713b;
                int i14 = bVar.f4715d + i13;
                while (i13 < i14) {
                    if (n(i13, i11 + 1) == i10) {
                        return true;
                    }
                    i13++;
                }
                continue;
            } else {
                continue;
            }
        }
        return false;
    }

    private void k(b bVar) {
        int i10;
        int i11 = bVar.f4712a;
        if (i11 != 1 && i11 != 8) {
            int z10 = z(bVar.f4713b, i11);
            int i12 = bVar.f4713b;
            int i13 = bVar.f4712a;
            if (i13 != 2) {
                if (i13 == 4) {
                    i10 = 1;
                } else {
                    throw new IllegalArgumentException("op should be remove or update." + bVar);
                }
            } else {
                i10 = 0;
            }
            int i14 = 1;
            for (int i15 = 1; i15 < bVar.f4715d; i15++) {
                int z11 = z(bVar.f4713b + (i10 * i15), bVar.f4712a);
                int i16 = bVar.f4712a;
                if (i16 == 2 ? z11 == z10 : !(i16 != 4 || z11 != z10 + 1)) {
                    i14++;
                } else {
                    b a10 = a(i16, z10, i14, bVar.f4714c);
                    l(a10, i12);
                    b(a10);
                    if (bVar.f4712a == 4) {
                        i12 += i14;
                    }
                    i14 = 1;
                    z10 = z11;
                }
            }
            Object obj = bVar.f4714c;
            b(bVar);
            if (i14 > 0) {
                b a11 = a(bVar.f4712a, z10, i14, obj);
                l(a11, i12);
                b(a11);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("should not dispatch add or move for pre layout");
    }

    private void v(b bVar) {
        this.f4706c.add(bVar);
        int i10 = bVar.f4712a;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 4) {
                    if (i10 == 8) {
                        this.f4707d.a(bVar.f4713b, bVar.f4715d);
                        return;
                    }
                    throw new IllegalArgumentException("Unknown update op type for " + bVar);
                }
                this.f4707d.e(bVar.f4713b, bVar.f4715d, bVar.f4714c);
                return;
            }
            this.f4707d.d(bVar.f4713b, bVar.f4715d);
            return;
        }
        this.f4707d.g(bVar.f4713b, bVar.f4715d);
    }

    private int z(int i10, int i11) {
        int i12;
        int i13;
        for (int size = this.f4706c.size() - 1; size >= 0; size--) {
            b bVar = (b) this.f4706c.get(size);
            int i14 = bVar.f4712a;
            if (i14 == 8) {
                int i15 = bVar.f4713b;
                int i16 = bVar.f4715d;
                if (i15 < i16) {
                    i13 = i15;
                    i12 = i16;
                } else {
                    i12 = i15;
                    i13 = i16;
                }
                if (i10 >= i13 && i10 <= i12) {
                    if (i13 == i15) {
                        if (i11 == 1) {
                            bVar.f4715d = i16 + 1;
                        } else if (i11 == 2) {
                            bVar.f4715d = i16 - 1;
                        }
                        i10++;
                    } else {
                        if (i11 == 1) {
                            bVar.f4713b = i15 + 1;
                        } else if (i11 == 2) {
                            bVar.f4713b = i15 - 1;
                        }
                        i10--;
                    }
                } else if (i10 < i15) {
                    if (i11 == 1) {
                        bVar.f4713b = i15 + 1;
                        bVar.f4715d = i16 + 1;
                    } else if (i11 == 2) {
                        bVar.f4713b = i15 - 1;
                        bVar.f4715d = i16 - 1;
                    }
                }
            } else {
                int i17 = bVar.f4713b;
                if (i17 <= i10) {
                    if (i14 == 1) {
                        i10 -= bVar.f4715d;
                    } else if (i14 == 2) {
                        i10 += bVar.f4715d;
                    }
                } else if (i11 == 1) {
                    bVar.f4713b = i17 + 1;
                } else if (i11 == 2) {
                    bVar.f4713b = i17 - 1;
                }
            }
        }
        for (int size2 = this.f4706c.size() - 1; size2 >= 0; size2--) {
            b bVar2 = (b) this.f4706c.get(size2);
            if (bVar2.f4712a == 8) {
                int i18 = bVar2.f4715d;
                if (i18 == bVar2.f4713b || i18 < 0) {
                    this.f4706c.remove(size2);
                    b(bVar2);
                }
            } else if (bVar2.f4715d <= 0) {
                this.f4706c.remove(size2);
                b(bVar2);
            }
        }
        return i10;
    }

    @Override // androidx.recyclerview.widget.n.a
    public b a(int i10, int i11, int i12, Object obj) {
        b bVar = (b) this.f4704a.acquire();
        if (bVar == null) {
            return new b(i10, i11, i12, obj);
        }
        bVar.f4712a = i10;
        bVar.f4713b = i11;
        bVar.f4715d = i12;
        bVar.f4714c = obj;
        return bVar;
    }

    @Override // androidx.recyclerview.widget.n.a
    public void b(b bVar) {
        if (!this.f4709f) {
            bVar.f4714c = null;
            this.f4704a.release(bVar);
        }
    }

    public int e(int i10) {
        int size = this.f4705b.size();
        for (int i11 = 0; i11 < size; i11++) {
            b bVar = (b) this.f4705b.get(i11);
            int i12 = bVar.f4712a;
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 8) {
                        int i13 = bVar.f4713b;
                        if (i13 == i10) {
                            i10 = bVar.f4715d;
                        } else {
                            if (i13 < i10) {
                                i10--;
                            }
                            if (bVar.f4715d <= i10) {
                                i10++;
                            }
                        }
                    }
                } else {
                    int i14 = bVar.f4713b;
                    if (i14 <= i10) {
                        int i15 = bVar.f4715d;
                        if (i14 + i15 > i10) {
                            return -1;
                        }
                        i10 -= i15;
                    } else {
                        continue;
                    }
                }
            } else if (bVar.f4713b <= i10) {
                i10 += bVar.f4715d;
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        int size = this.f4706c.size();
        for (int i10 = 0; i10 < size; i10++) {
            this.f4707d.c((b) this.f4706c.get(i10));
        }
        x(this.f4706c);
        this.f4711h = 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        i();
        int size = this.f4705b.size();
        for (int i10 = 0; i10 < size; i10++) {
            b bVar = (b) this.f4705b.get(i10);
            int i11 = bVar.f4712a;
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 4) {
                        if (i11 == 8) {
                            this.f4707d.c(bVar);
                            this.f4707d.a(bVar.f4713b, bVar.f4715d);
                        }
                    } else {
                        this.f4707d.c(bVar);
                        this.f4707d.e(bVar.f4713b, bVar.f4715d, bVar.f4714c);
                    }
                } else {
                    this.f4707d.c(bVar);
                    this.f4707d.h(bVar.f4713b, bVar.f4715d);
                }
            } else {
                this.f4707d.c(bVar);
                this.f4707d.g(bVar.f4713b, bVar.f4715d);
            }
            Runnable runnable = this.f4708e;
            if (runnable != null) {
                runnable.run();
            }
        }
        x(this.f4705b);
        this.f4711h = 0;
    }

    void l(b bVar, int i10) {
        this.f4707d.b(bVar);
        int i11 = bVar.f4712a;
        if (i11 != 2) {
            if (i11 == 4) {
                this.f4707d.e(i10, bVar.f4715d, bVar.f4714c);
                return;
            }
            throw new IllegalArgumentException("only remove and update ops can be dispatched in first pass");
        }
        this.f4707d.h(i10, bVar.f4715d);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int m(int i10) {
        return n(i10, 0);
    }

    int n(int i10, int i11) {
        int size = this.f4706c.size();
        while (i11 < size) {
            b bVar = (b) this.f4706c.get(i11);
            int i12 = bVar.f4712a;
            if (i12 == 8) {
                int i13 = bVar.f4713b;
                if (i13 == i10) {
                    i10 = bVar.f4715d;
                } else {
                    if (i13 < i10) {
                        i10--;
                    }
                    if (bVar.f4715d <= i10) {
                        i10++;
                    }
                }
            } else {
                int i14 = bVar.f4713b;
                if (i14 > i10) {
                    continue;
                } else if (i12 == 2) {
                    int i15 = bVar.f4715d;
                    if (i10 < i14 + i15) {
                        return -1;
                    }
                    i10 -= i15;
                } else if (i12 == 1) {
                    i10 += bVar.f4715d;
                }
            }
            i11++;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean o(int i10) {
        if ((i10 & this.f4711h) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean p() {
        if (this.f4705b.size() > 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q() {
        if (!this.f4706c.isEmpty() && !this.f4705b.isEmpty()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r(int i10, int i11, Object obj) {
        if (i11 < 1) {
            return false;
        }
        this.f4705b.add(a(4, i10, i11, obj));
        this.f4711h |= 4;
        if (this.f4705b.size() != 1) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean s(int i10, int i11) {
        if (i11 < 1) {
            return false;
        }
        this.f4705b.add(a(1, i10, i11, null));
        this.f4711h |= 1;
        if (this.f4705b.size() != 1) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t(int i10, int i11, int i12) {
        if (i10 == i11) {
            return false;
        }
        if (i12 == 1) {
            this.f4705b.add(a(8, i10, i11, null));
            this.f4711h |= 8;
            if (this.f4705b.size() != 1) {
                return false;
            }
            return true;
        }
        throw new IllegalArgumentException("Moving more than 1 item is not supported yet");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean u(int i10, int i11) {
        if (i11 < 1) {
            return false;
        }
        this.f4705b.add(a(2, i10, i11, null));
        this.f4711h |= 2;
        if (this.f4705b.size() != 1) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w() {
        this.f4710g.b(this.f4705b);
        int size = this.f4705b.size();
        for (int i10 = 0; i10 < size; i10++) {
            b bVar = (b) this.f4705b.get(i10);
            int i11 = bVar.f4712a;
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 4) {
                        if (i11 == 8) {
                            d(bVar);
                        }
                    } else {
                        g(bVar);
                    }
                } else {
                    f(bVar);
                }
            } else {
                c(bVar);
            }
            Runnable runnable = this.f4708e;
            if (runnable != null) {
                runnable.run();
            }
        }
        this.f4705b.clear();
    }

    void x(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            b((b) list.get(i10));
        }
        list.clear();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        x(this.f4705b);
        x(this.f4706c);
        this.f4711h = 0;
    }

    AdapterHelper(a aVar, boolean z10) {
        this.f4704a = new Pools$SimplePool(30);
        this.f4705b = new ArrayList();
        this.f4706c = new ArrayList();
        this.f4711h = 0;
        this.f4707d = aVar;
        this.f4709f = z10;
        this.f4710g = new n(this);
    }
}
