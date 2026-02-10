package cl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: f  reason: collision with root package name */
    public static final b f8307f = new b(929, 3);

    /* renamed from: a  reason: collision with root package name */
    private final int[] f8308a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f8309b;

    /* renamed from: c  reason: collision with root package name */
    private final c f8310c;

    /* renamed from: d  reason: collision with root package name */
    private final c f8311d;

    /* renamed from: e  reason: collision with root package name */
    private final int f8312e;

    private b(int i10, int i11) {
        this.f8312e = i10;
        this.f8308a = new int[i10];
        this.f8309b = new int[i10];
        int i12 = 1;
        for (int i13 = 0; i13 < i10; i13++) {
            this.f8308a[i13] = i12;
            i12 = (i12 * i11) % i10;
        }
        for (int i14 = 0; i14 < i10 - 1; i14++) {
            this.f8309b[this.f8308a[i14]] = i14;
        }
        this.f8310c = new c(this, new int[]{0});
        this.f8311d = new c(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(int i10, int i11) {
        return (i10 + i11) % this.f8312e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f8310c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new c(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f8308a[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        return this.f8311d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f8312e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c f() {
        return this.f8310c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g(int i10) {
        if (i10 != 0) {
            return this.f8308a[(this.f8312e - this.f8309b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f8309b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f8308a;
            int[] iArr2 = this.f8309b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f8312e - 1)];
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        int i12 = this.f8312e;
        return ((i10 + i12) - i11) % i12;
    }
}
