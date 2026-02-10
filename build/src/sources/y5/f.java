package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final String[] f55513a = new String[5];

    /* renamed from: b  reason: collision with root package name */
    private final long[] f55514b = new long[5];

    /* renamed from: c  reason: collision with root package name */
    private int f55515c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f55516d = 0;

    public void a(String str) {
        int i10 = this.f55515c;
        if (i10 == 5) {
            this.f55516d++;
            return;
        }
        this.f55513a[i10] = str;
        this.f55514b[i10] = System.nanoTime();
        w1.i.a(str);
        this.f55515c++;
    }

    public float b(String str) {
        int i10 = this.f55516d;
        if (i10 > 0) {
            this.f55516d = i10 - 1;
            return 0.0f;
        }
        int i11 = this.f55515c - 1;
        this.f55515c = i11;
        if (i11 != -1) {
            if (str.equals(this.f55513a[i11])) {
                w1.i.b();
                return ((float) (System.nanoTime() - this.f55514b[this.f55515c])) / 1000000.0f;
            }
            throw new IllegalStateException("Unbalanced trace call " + str + ". Expected " + this.f55513a[this.f55515c] + ".");
        }
        throw new IllegalStateException("Can't end trace section. There are none.");
    }
}
