package h1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class f implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Object[] f27451a;

    /* renamed from: b  reason: collision with root package name */
    private int f27452b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10) {
        if (i10 > 0) {
            this.f27451a = new Object[i10];
            return;
        }
        throw new IllegalArgumentException("The max pool size must be > 0");
    }

    @Override // h1.e
    public void a(Object[] objArr, int i10) {
        if (i10 > objArr.length) {
            i10 = objArr.length;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            Object obj = objArr[i11];
            int i12 = this.f27452b;
            Object[] objArr2 = this.f27451a;
            if (i12 < objArr2.length) {
                objArr2[i12] = obj;
                this.f27452b = i12 + 1;
            }
        }
    }

    @Override // h1.e
    public Object acquire() {
        int i10 = this.f27452b;
        if (i10 <= 0) {
            return null;
        }
        int i11 = i10 - 1;
        Object[] objArr = this.f27451a;
        Object obj = objArr[i11];
        objArr[i11] = null;
        this.f27452b = i10 - 1;
        return obj;
    }

    @Override // h1.e
    public boolean release(Object obj) {
        int i10 = this.f27452b;
        Object[] objArr = this.f27451a;
        if (i10 < objArr.length) {
            objArr[i10] = obj;
            this.f27452b = i10 + 1;
            return true;
        }
        return false;
    }
}
