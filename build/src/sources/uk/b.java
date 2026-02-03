package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: f  reason: collision with root package name */
    public static final b f50689f = new b(929, 3);

    /* renamed from: a  reason: collision with root package name */
    private final int[] f50690a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f50691b;

    /* renamed from: c  reason: collision with root package name */
    private final c f50692c;

    /* renamed from: d  reason: collision with root package name */
    private final c f50693d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50694e;

    private b(int i10, int i11) {
        this.f50694e = i10;
        this.f50690a = new int[i10];
        this.f50691b = new int[i10];
        int i12 = 1;
        for (int i13 = 0; i13 < i10; i13++) {
            this.f50690a[i13] = i12;
            i12 = (i12 * i11) % i10;
        }
        for (int i14 = 0; i14 < i10 - 1; i14++) {
            this.f50691b[this.f50690a[i14]] = i14;
        }
        this.f50692c = new c(this, new int[]{0});
        this.f50693d = new c(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(int i10, int i11) {
        return (i10 + i11) % this.f50694e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f50692c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new c(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f50690a[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c d() {
        return this.f50693d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f50694e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c f() {
        return this.f50692c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g(int i10) {
        if (i10 != 0) {
            return this.f50690a[(this.f50694e - this.f50691b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f50691b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f50690a;
            int[] iArr2 = this.f50691b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f50694e - 1)];
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        int i12 = this.f50694e;
        return ((i10 + i12) - i11) % i12;
    }
}
