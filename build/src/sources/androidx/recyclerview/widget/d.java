package androidx.recyclerview.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements m {

    /* renamed from: a  reason: collision with root package name */
    final m f4968a;

    /* renamed from: b  reason: collision with root package name */
    int f4969b = 0;

    /* renamed from: c  reason: collision with root package name */
    int f4970c = -1;

    /* renamed from: d  reason: collision with root package name */
    int f4971d = -1;

    /* renamed from: e  reason: collision with root package name */
    Object f4972e = null;

    public d(m mVar) {
        this.f4968a = mVar;
    }

    @Override // androidx.recyclerview.widget.m
    public void a(int i10, int i11) {
        int i12;
        if (this.f4969b == 1 && i10 >= (i12 = this.f4970c)) {
            int i13 = this.f4971d;
            if (i10 <= i12 + i13) {
                this.f4971d = i13 + i11;
                this.f4970c = Math.min(i10, i12);
                return;
            }
        }
        e();
        this.f4970c = i10;
        this.f4971d = i11;
        this.f4969b = 1;
    }

    @Override // androidx.recyclerview.widget.m
    public void b(int i10, int i11) {
        int i12;
        if (this.f4969b == 2 && (i12 = this.f4970c) >= i10 && i12 <= i10 + i11) {
            this.f4971d += i11;
            this.f4970c = i10;
            return;
        }
        e();
        this.f4970c = i10;
        this.f4971d = i11;
        this.f4969b = 2;
    }

    @Override // androidx.recyclerview.widget.m
    public void c(int i10, int i11, Object obj) {
        int i12;
        if (this.f4969b == 3) {
            int i13 = this.f4970c;
            int i14 = this.f4971d;
            if (i10 <= i13 + i14 && (i12 = i10 + i11) >= i13 && this.f4972e == obj) {
                this.f4970c = Math.min(i10, i13);
                this.f4971d = Math.max(i14 + i13, i12) - this.f4970c;
                return;
            }
        }
        e();
        this.f4970c = i10;
        this.f4971d = i11;
        this.f4972e = obj;
        this.f4969b = 3;
    }

    @Override // androidx.recyclerview.widget.m
    public void d(int i10, int i11) {
        e();
        this.f4968a.d(i10, i11);
    }

    public void e() {
        int i10 = this.f4969b;
        if (i10 == 0) {
            return;
        }
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f4968a.c(this.f4970c, this.f4971d, this.f4972e);
                }
            } else {
                this.f4968a.b(this.f4970c, this.f4971d);
            }
        } else {
            this.f4968a.a(this.f4970c, this.f4971d);
        }
        this.f4972e = null;
        this.f4969b = 0;
    }
}
