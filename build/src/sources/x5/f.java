package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f53225a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f53226b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f53227c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f53228d = 0;

    public void a(String str) {
        int i10 = this.f53227c;
        if (i10 == 5) {
            this.f53228d++;
            return;
        }
        this.f53225a[i10] = str;
        this.f53226b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f53227c++;
    }

    public float b(String str) {
        int i10 = this.f53228d;
        if (i10 > 0) {
            this.f53228d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f53227c - 1;
        this.f53227c = i11;
        if (i11 != -1) {
            if (str.equals(this.f53225a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f53226b[this.f53227c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f53225a[this.f53227c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
