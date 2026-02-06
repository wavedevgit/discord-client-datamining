package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f54530a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f54531b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f54532c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f54533d = 0;

    public void a(String str) {
        int i10 = this.f54532c;
        if (i10 == 5) {
            this.f54533d++;
            return;
        }
        this.f54530a[i10] = str;
        this.f54531b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f54532c++;
    }

    public float b(String str) {
        int i10 = this.f54533d;
        if (i10 > 0) {
            this.f54533d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f54532c - 1;
        this.f54532c = i11;
        if (i11 != -1) {
            if (str.equals(this.f54530a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f54531b[this.f54532c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f54530a[this.f54532c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
