package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f53167a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f53168b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f53169c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f53170d = 0;

    public void a(String str) {
        int i10 = this.f53169c;
        if (i10 == 5) {
            this.f53170d++;
            return;
        }
        this.f53167a[i10] = str;
        this.f53168b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f53169c++;
    }

    public float b(String str) {
        int i10 = this.f53170d;
        if (i10 > 0) {
            this.f53170d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f53169c - 1;
        this.f53169c = i11;
        if (i11 != -1) {
            if (str.equals(this.f53167a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f53168b[this.f53169c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f53167a[this.f53169c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
