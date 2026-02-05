package xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: f  reason: collision with root package name */
    public static final b f53925f = new b(929, 3);

    /* renamed from: a  reason: collision with root package name */
    private final int[] f53926a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f53927b;

    /* renamed from: c  reason: collision with root package name */
    private final c f53928c;

    /* renamed from: d  reason: collision with root package name */
    private final c f53929d;

    /* renamed from: e  reason: collision with root package name */
    private final int f53930e;

    private b(int i10, int i11) {
        this.f53930e = i10;
        this.f53926a = new int[i10];
        this.f53927b = new int[i10];
        int i12 = 1;
        for (int i13 = 0; i13 < i10; i13++) {
            this.f53926a[i13] = i12;
            i12 = (i12 * i11) % i10;
        }
        for (int i14 = 0; i14 < i10 - 1; i14++) {
            this.f53927b[this.f53926a[i14]] = i14;
        }
        this.f53928c = new c(this, new int[]{0});
        this.f53929d = new c(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(int i10, int i11) {
        return (i10 + i11) % this.f53930e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f53928c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new c(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f53926a[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        return this.f53929d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f53930e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c f() {
        return this.f53928c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g(int i10) {
        if (i10 != 0) {
            return this.f53926a[(this.f53930e - this.f53927b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f53927b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f53926a;
            int[] iArr2 = this.f53927b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f53930e - 1)];
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        int i12 = this.f53930e;
        return ((i10 + i12) - i11) % i12;
    }
}
