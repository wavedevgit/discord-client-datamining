package androidx.recyclerview.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements m {

    /* renamed from: a  reason: collision with root package name */
    final m f4955a;

    /* renamed from: b  reason: collision with root package name */
    int f4956b = 0;

    /* renamed from: c  reason: collision with root package name */
    int f4957c = -1;

    /* renamed from: d  reason: collision with root package name */
    int f4958d = -1;

    /* renamed from: e  reason: collision with root package name */
    Object f4959e = null;

    public d(m mVar) {
        this.f4955a = mVar;
    }

    @Override // androidx.recyclerview.widget.m
    public void a(int i10, int i11) {
        int i12;
        if (this.f4956b == 1 && i10 >= (i12 = this.f4957c)) {
            int i13 = this.f4958d;
            if (i10 <= i12 + i13) {
                this.f4958d = i13 + i11;
                this.f4957c = Math.min(i10, i12);
                return;
            }
        }
        e();
        this.f4957c = i10;
        this.f4958d = i11;
        this.f4956b = 1;
    }

    @Override // androidx.recyclerview.widget.m
    public void b(int i10, int i11) {
        int i12;
        if (this.f4956b == 2 && (i12 = this.f4957c) >= i10 && i12 <= i10 + i11) {
            this.f4958d += i11;
            this.f4957c = i10;
            return;
        }
        e();
        this.f4957c = i10;
        this.f4958d = i11;
        this.f4956b = 2;
    }

    @Override // androidx.recyclerview.widget.m
    public void c(int i10, int i11, Object obj) {
        int i12;
        if (this.f4956b == 3) {
            int i13 = this.f4957c;
            int i14 = this.f4958d;
            if (i10 <= i13 + i14 && (i12 = i10 + i11) >= i13 && this.f4959e == obj) {
                this.f4957c = Math.min(i10, i13);
                this.f4958d = Math.max(i14 + i13, i12) - this.f4957c;
                return;
            }
        }
        e();
        this.f4957c = i10;
        this.f4958d = i11;
        this.f4959e = obj;
        this.f4956b = 3;
    }

    @Override // androidx.recyclerview.widget.m
    public void d(int i10, int i11) {
        e();
        this.f4955a.d(i10, i11);
    }

    public void e() {
        int i10 = this.f4956b;
        if (i10 == 0) {
            return;
        }
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f4955a.c(this.f4957c, this.f4958d, this.f4959e);
                }
            } else {
                this.f4955a.b(this.f4957c, this.f4958d);
            }
        } else {
            this.f4955a.a(this.f4957c, this.f4958d);
        }
        this.f4959e = null;
        this.f4956b = 0;
    }
}
