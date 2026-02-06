package androidx.recyclerview.widget;

import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class ViewBoundsCheck {

    /* renamed from: a  reason: collision with root package name */
    final Callback f5370a;

    /* renamed from: b  reason: collision with root package name */
    a f5371b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface Callback {
        int a(View view);

        int b();

        int c();

        int d(View view);

        View getChildAt(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {

        /* renamed from: a  reason: collision with root package name */
        int f5372a = 0;

        /* renamed from: b  reason: collision with root package name */
        int f5373b;

        /* renamed from: c  reason: collision with root package name */
        int f5374c;

        /* renamed from: d  reason: collision with root package name */
        int f5375d;

        /* renamed from: e  reason: collision with root package name */
        int f5376e;

        a() {
        }

        void a(int i10) {
            this.f5372a = i10 | this.f5372a;
        }

        boolean b() {
            int i10 = this.f5372a;
            if ((i10 & 7) != 0 && (i10 & c(this.f5375d, this.f5373b)) == 0) {
                return false;
            }
            int i11 = this.f5372a;
            if ((i11 & 112) != 0 && (i11 & (c(this.f5375d, this.f5374c) << 4)) == 0) {
                return false;
            }
            int i12 = this.f5372a;
            if ((i12 & 1792) != 0 && (i12 & (c(this.f5376e, this.f5373b) << 8)) == 0) {
                return false;
            }
            int i13 = this.f5372a;
            if ((i13 & 28672) != 0 && (i13 & (c(this.f5376e, this.f5374c) << 12)) == 0) {
                return false;
            }
            return true;
        }

        int c(int i10, int i11) {
            if (i10 > i11) {
                return 1;
            }
            return i10 == i11 ? 2 : 4;
        }

        void d() {
            this.f5372a = 0;
        }

        void e(int i10, int i11, int i12, int i13) {
            this.f5373b = i10;
            this.f5374c = i11;
            this.f5375d = i12;
            this.f5376e = i13;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewBoundsCheck(Callback callback) {
        this.f5370a = callback;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View a(int i10, int i11, int i12, int i13) {
        int i14;
        int b10 = this.f5370a.b();
        int c10 = this.f5370a.c();
        if (i11 > i10) {
            i14 = 1;
        } else {
            i14 = -1;
        }
        View view = null;
        while (i10 != i11) {
            View childAt = this.f5370a.getChildAt(i10);
            this.f5371b.e(b10, c10, this.f5370a.a(childAt), this.f5370a.d(childAt));
            if (i12 != 0) {
                this.f5371b.d();
                this.f5371b.a(i12);
                if (this.f5371b.b()) {
                    return childAt;
                }
            }
            if (i13 != 0) {
                this.f5371b.d();
                this.f5371b.a(i13);
                if (this.f5371b.b()) {
                    view = childAt;
                }
            }
            i10 += i14;
        }
        return view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b(View view, int i10) {
        this.f5371b.e(this.f5370a.b(), this.f5370a.c(), this.f5370a.a(view), this.f5370a.d(view));
        if (i10 != 0) {
            this.f5371b.d();
            this.f5371b.a(i10);
            return this.f5371b.b();
        }
        return false;
    }
}
