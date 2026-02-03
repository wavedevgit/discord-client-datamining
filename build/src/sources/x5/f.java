package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f53449a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f53450b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f53451c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f53452d = 0;

    public void a(String str) {
        int i10 = this.f53451c;
        if (i10 == 5) {
            this.f53452d++;
            return;
        }
        this.f53449a[i10] = str;
        this.f53450b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f53451c++;
    }

    public float b(String str) {
        int i10 = this.f53452d;
        if (i10 > 0) {
            this.f53452d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f53451c - 1;
        this.f53451c = i11;
        if (i11 != -1) {
            if (str.equals(this.f53449a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f53450b[this.f53451c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f53449a[this.f53451c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
