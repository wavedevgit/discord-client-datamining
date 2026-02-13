package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f56013a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f56014b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f56015c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f56016d = 0;

    public void a(String str) {
        int i10 = this.f56015c;
        if (i10 == 5) {
            this.f56016d++;
            return;
        }
        this.f56013a[i10] = str;
        this.f56014b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f56015c++;
    }

    public float b(String str) {
        int i10 = this.f56016d;
        if (i10 > 0) {
            this.f56016d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f56015c - 1;
        this.f56015c = i11;
        if (i11 != -1) {
            if (str.equals(this.f56013a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f56014b[this.f56015c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f56013a[this.f56015c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
