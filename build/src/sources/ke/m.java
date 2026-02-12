package ke;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f31713a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f31714b;

    /* renamed from: c  reason: collision with root package name */
    private int f31715c;

    public m(l... lVarArr) {
        this.f31714b = lVarArr;
        this.f31713a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f31714b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f31714b, ((m) obj).f31714b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f31715c == 0) {
            this.f31715c = 527 + Arrays.hashCode(this.f31714b);
        }
        return this.f31715c;
    }
}
