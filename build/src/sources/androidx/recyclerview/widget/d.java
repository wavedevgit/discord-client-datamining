package androidx.recyclerview.widget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements m {

    /* renamed from: a  reason: collision with root package name */
    final m f5116a;

    /* renamed from: b  reason: collision with root package name */
    int f5117b = 0;

    /* renamed from: c  reason: collision with root package name */
    int f5118c = -1;

    /* renamed from: d  reason: collision with root package name */
    int f5119d = -1;

    /* renamed from: e  reason: collision with root package name */
    Object f5120e = null;

    public d(m mVar) {
        this.f5116a = mVar;
    }

    @Override // androidx.recyclerview.widget.m
    public void a(int i10, int i11) {
        int i12;
        if (this.f5117b == 1 && i10 >= (i12 = this.f5118c)) {
            int i13 = this.f5119d;
            if (i10 <= i12 + i13) {
                this.f5119d = i13 + i11;
                this.f5118c = Math.min(i10, i12);
                return;
            }
        }
        e();
        this.f5118c = i10;
        this.f5119d = i11;
        this.f5117b = 1;
    }

    @Override // androidx.recyclerview.widget.m
    public void b(int i10, int i11) {
        int i12;
        if (this.f5117b == 2 && (i12 = this.f5118c) >= i10 && i12 <= i10 + i11) {
            this.f5119d += i11;
            this.f5118c = i10;
            return;
        }
        e();
        this.f5118c = i10;
        this.f5119d = i11;
        this.f5117b = 2;
    }

    @Override // androidx.recyclerview.widget.m
    public void c(int i10, int i11, Object obj) {
        int i12;
        if (this.f5117b == 3) {
            int i13 = this.f5118c;
            int i14 = this.f5119d;
            if (i10 <= i13 + i14 && (i12 = i10 + i11) >= i13 && this.f5120e == obj) {
                this.f5118c = Math.min(i10, i13);
                this.f5119d = Math.max(i14 + i13, i12) - this.f5118c;
                return;
            }
        }
        e();
        this.f5118c = i10;
        this.f5119d = i11;
        this.f5120e = obj;
        this.f5117b = 3;
    }

    @Override // androidx.recyclerview.widget.m
    public void d(int i10, int i11) {
        e();
        this.f5116a.d(i10, i11);
    }

    public void e() {
        int i10 = this.f5117b;
        if (i10 == 0) {
            return;
        }
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f5116a.c(this.f5118c, this.f5119d, this.f5120e);
                }
            } else {
                this.f5116a.b(this.f5118c, this.f5119d);
            }
        } else {
            this.f5116a.a(this.f5118c, this.f5119d);
        }
        this.f5120e = null;
        this.f5117b = 0;
    }
}
