package je;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f29903a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f29904b;

    /* renamed from: c  reason: collision with root package name */
    private int f29905c;

    public m(l... lVarArr) {
        this.f29904b = lVarArr;
        this.f29903a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f29904b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f29904b, ((m) obj).f29904b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f29905c == 0) {
            this.f29905c = 527 + Arrays.hashCode(this.f29904b);
        }
        return this.f29905c;
    }
}
