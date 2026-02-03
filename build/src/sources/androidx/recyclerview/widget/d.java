package androidx.recyclerview.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements m {

    /* renamed from: a  reason: collision with root package name */
    final m f4999a;

    /* renamed from: b  reason: collision with root package name */
    int f5000b = 0;

    /* renamed from: c  reason: collision with root package name */
    int f5001c = -1;

    /* renamed from: d  reason: collision with root package name */
    int f5002d = -1;

    /* renamed from: e  reason: collision with root package name */
    Object f5003e = null;

    public d(m mVar) {
        this.f4999a = mVar;
    }

    @Override // androidx.recyclerview.widget.m
    public void a(int i10, int i11) {
        int i12;
        if (this.f5000b == 1 && i10 >= (i12 = this.f5001c)) {
            int i13 = this.f5002d;
            if (i10 <= i12 + i13) {
                this.f5002d = i13 + i11;
                this.f5001c = Math.min(i10, i12);
                return;
            }
        }
        e();
        this.f5001c = i10;
        this.f5002d = i11;
        this.f5000b = 1;
    }

    @Override // androidx.recyclerview.widget.m
    public void b(int i10, int i11) {
        int i12;
        if (this.f5000b == 2 && (i12 = this.f5001c) >= i10 && i12 <= i10 + i11) {
            this.f5002d += i11;
            this.f5001c = i10;
            return;
        }
        e();
        this.f5001c = i10;
        this.f5002d = i11;
        this.f5000b = 2;
    }

    @Override // androidx.recyclerview.widget.m
    public void c(int i10, int i11, Object obj) {
        int i12;
        if (this.f5000b == 3) {
            int i13 = this.f5001c;
            int i14 = this.f5002d;
            if (i10 <= i13 + i14 && (i12 = i10 + i11) >= i13 && this.f5003e == obj) {
                this.f5001c = Math.min(i10, i13);
                this.f5002d = Math.max(i14 + i13, i12) - this.f5001c;
                return;
            }
        }
        e();
        this.f5001c = i10;
        this.f5002d = i11;
        this.f5003e = obj;
        this.f5000b = 3;
    }

    @Override // androidx.recyclerview.widget.m
    public void d(int i10, int i11) {
        e();
        this.f4999a.d(i10, i11);
    }

    public void e() {
        int i10 = this.f5000b;
        if (i10 == 0) {
            return;
        }
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f4999a.c(this.f5001c, this.f5002d, this.f5003e);
                }
            } else {
                this.f4999a.b(this.f5001c, this.f5002d);
            }
        } else {
            this.f4999a.a(this.f5001c, this.f5002d);
        }
        this.f5003e = null;
        this.f5000b = 0;
    }
}
