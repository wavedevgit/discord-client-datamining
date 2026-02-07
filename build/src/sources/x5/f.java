package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f54578a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f54579b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f54580c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f54581d = 0;

    public void a(String str) {
        int i10 = this.f54580c;
        if (i10 == 5) {
            this.f54581d++;
            return;
        }
        this.f54578a[i10] = str;
        this.f54579b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f54580c++;
    }

    public float b(String str) {
        int i10 = this.f54581d;
        if (i10 > 0) {
            this.f54581d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f54580c - 1;
        this.f54580c = i11;
        if (i11 != -1) {
            if (str.equals(this.f54578a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f54579b[this.f54580c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f54578a[this.f54580c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
