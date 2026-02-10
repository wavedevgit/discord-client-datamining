package ke;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f30854a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f30855b;

    /* renamed from: c  reason: collision with root package name */
    private int f30856c;

    public m(l... lVarArr) {
        this.f30855b = lVarArr;
        this.f30854a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f30855b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f30855b, ((m) obj).f30855b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f30856c == 0) {
            this.f30856c = 527 + Arrays.hashCode(this.f30855b);
        }
        return this.f30856c;
    }
}
