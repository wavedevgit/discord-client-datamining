package androidx.recyclerview.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements m {

    /* renamed from: a  reason: collision with root package name */
    final m f5409a;

    /* renamed from: b  reason: collision with root package name */
    int f5410b = 0;

    /* renamed from: c  reason: collision with root package name */
    int f5411c = -1;

    /* renamed from: d  reason: collision with root package name */
    int f5412d = -1;

    /* renamed from: e  reason: collision with root package name */
    Object f5413e = null;

    public d(m mVar) {
        this.f5409a = mVar;
    }

    @Override // androidx.recyclerview.widget.m
    public void a(int i10, int i11) {
        int i12;
        if (this.f5410b == 1 && i10 >= (i12 = this.f5411c)) {
            int i13 = this.f5412d;
            if (i10 <= i12 + i13) {
                this.f5412d = i13 + i11;
                this.f5411c = Math.min(i10, i12);
                return;
            }
        }
        e();
        this.f5411c = i10;
        this.f5412d = i11;
        this.f5410b = 1;
    }

    @Override // androidx.recyclerview.widget.m
    public void b(int i10, int i11) {
        int i12;
        if (this.f5410b == 2 && (i12 = this.f5411c) >= i10 && i12 <= i10 + i11) {
            this.f5412d += i11;
            this.f5411c = i10;
            return;
        }
        e();
        this.f5411c = i10;
        this.f5412d = i11;
        this.f5410b = 2;
    }

    @Override // androidx.recyclerview.widget.m
    public void c(int i10, int i11, Object obj) {
        int i12;
        if (this.f5410b == 3) {
            int i13 = this.f5411c;
            int i14 = this.f5412d;
            if (i10 <= i13 + i14 && (i12 = i10 + i11) >= i13 && this.f5413e == obj) {
                this.f5411c = Math.min(i10, i13);
                this.f5412d = Math.max(i14 + i13, i12) - this.f5411c;
                return;
            }
        }
        e();
        this.f5411c = i10;
        this.f5412d = i11;
        this.f5413e = obj;
        this.f5410b = 3;
    }

    @Override // androidx.recyclerview.widget.m
    public void d(int i10, int i11) {
        e();
        this.f5409a.d(i10, i11);
    }

    public void e() {
        int i10 = this.f5410b;
        if (i10 == 0) {
            return;
        }
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f5409a.c(this.f5411c, this.f5412d, this.f5413e);
                }
            } else {
                this.f5409a.b(this.f5411c, this.f5412d);
            }
        } else {
            this.f5409a.a(this.f5411c, this.f5412d);
        }
        this.f5413e = null;
        this.f5410b = 0;
    }
}
