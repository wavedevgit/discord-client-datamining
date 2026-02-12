package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f55445a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f55446b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f55447c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f55448d = 0;

    public void a(String str) {
        int i10 = this.f55447c;
        if (i10 == 5) {
            this.f55448d++;
            return;
        }
        this.f55445a[i10] = str;
        this.f55446b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f55447c++;
    }

    public float b(String str) {
        int i10 = this.f55448d;
        if (i10 > 0) {
            this.f55448d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f55447c - 1;
        this.f55447c = i11;
        if (i11 != -1) {
            if (str.equals(this.f55445a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f55446b[this.f55447c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f55445a[this.f55447c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
