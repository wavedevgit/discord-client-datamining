package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: f  reason: collision with root package name */
    public static final b f50330f = new b(929, 3);

    /* renamed from: a  reason: collision with root package name */
    private final int[] f50331a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f50332b;

    /* renamed from: c  reason: collision with root package name */
    private final c f50333c;

    /* renamed from: d  reason: collision with root package name */
    private final c f50334d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50335e;

    private b(int i10, int i11) {
        this.f50335e = i10;
        this.f50331a = new int[i10];
        this.f50332b = new int[i10];
        int i12 = 1;
        for (int i13 = 0; i13 < i10; i13++) {
            this.f50331a[i13] = i12;
            i12 = (i12 * i11) % i10;
        }
        for (int i14 = 0; i14 < i10 - 1; i14++) {
            this.f50332b[this.f50331a[i14]] = i14;
        }
        this.f50333c = new c(this, new int[]{0});
        this.f50334d = new c(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(int i10, int i11) {
        return (i10 + i11) % this.f50335e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f50333c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new c(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f50331a[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        return this.f50334d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f50335e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c f() {
        return this.f50333c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g(int i10) {
        if (i10 != 0) {
            return this.f50331a[(this.f50335e - this.f50332b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f50332b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f50331a;
            int[] iArr2 = this.f50332b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f50335e - 1)];
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        int i12 = this.f50335e;
        return ((i10 + i12) - i11) % i12;
    }
}
