package je;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f31533a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f31534b;

    /* renamed from: c  reason: collision with root package name */
    private int f31535c;

    public m(l... lVarArr) {
        this.f31534b = lVarArr;
        this.f31533a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f31534b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f31534b, ((m) obj).f31534b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f31535c == 0) {
            this.f31535c = 527 + Arrays.hashCode(this.f31534b);
        }
        return this.f31535c;
    }
}
