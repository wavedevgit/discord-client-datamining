package androidx.recyclerview.widget;

import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class ViewBoundsCheck {

    /* renamed from: a  reason: collision with root package name */
    final Callback f5041a;

    /* renamed from: b  reason: collision with root package name */
    a f5042b = new a();

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
        int f5043a = 0;

        /* renamed from: b  reason: collision with root package name */
        int f5044b;

        /* renamed from: c  reason: collision with root package name */
        int f5045c;

        /* renamed from: d  reason: collision with root package name */
        int f5046d;

        /* renamed from: e  reason: collision with root package name */
        int f5047e;

        a() {
        }

        void a(int i10) {
            this.f5043a = i10 | this.f5043a;
        }

        boolean b() {
            int i10 = this.f5043a;
            if ((i10 & 7) != 0 && (i10 & c(this.f5046d, this.f5044b)) == 0) {
                return false;
            }
            int i11 = this.f5043a;
            if ((i11 & 112) != 0 && (i11 & (c(this.f5046d, this.f5045c) << 4)) == 0) {
                return false;
            }
            int i12 = this.f5043a;
            if ((i12 & 1792) != 0 && (i12 & (c(this.f5047e, this.f5044b) << 8)) == 0) {
                return false;
            }
            int i13 = this.f5043a;
            if ((i13 & 28672) != 0 && (i13 & (c(this.f5047e, this.f5045c) << 12)) == 0) {
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
            this.f5043a = 0;
        }

        void e(int i10, int i11, int i12, int i13) {
            this.f5044b = i10;
            this.f5045c = i11;
            this.f5046d = i12;
            this.f5047e = i13;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewBoundsCheck(Callback callback) {
        this.f5041a = callback;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View a(int i10, int i11, int i12, int i13) {
        int i14;
        int b10 = this.f5041a.b();
        int c10 = this.f5041a.c();
        if (i11 > i10) {
            i14 = 1;
        } else {
            i14 = -1;
        }
        View view = null;
        while (i10 != i11) {
            View childAt = this.f5041a.getChildAt(i10);
            this.f5042b.e(b10, c10, this.f5041a.a(childAt), this.f5041a.d(childAt));
            if (i12 != 0) {
                this.f5042b.d();
                this.f5042b.a(i12);
                if (this.f5042b.b()) {
                    return childAt;
                }
            }
            if (i13 != 0) {
                this.f5042b.d();
                this.f5042b.a(i13);
                if (this.f5042b.b()) {
                    view = childAt;
                }
            }
            i10 += i14;
        }
        return view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean b(View view, int i10) {
        this.f5042b.e(this.f5041a.b(), this.f5041a.c(), this.f5041a.a(view), this.f5041a.d(view));
        if (i10 != 0) {
            this.f5042b.d();
            this.f5042b.a(i10);
            return this.f5042b.b();
        }
        return false;
    }
}
