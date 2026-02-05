package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f53711a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f53712b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f53713c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f53714d = 0;

    public void a(String str) {
        int i10 = this.f53713c;
        if (i10 == 5) {
            this.f53714d++;
            return;
        }
        this.f53711a[i10] = str;
        this.f53712b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f53713c++;
    }

    public float b(String str) {
        int i10 = this.f53714d;
        if (i10 > 0) {
            this.f53714d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f53713c - 1;
        this.f53713c = i11;
        if (i11 != -1) {
            if (str.equals(this.f53711a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f53712b[this.f53713c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f53711a[this.f53713c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
