package je;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f30882a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f30883b;

    /* renamed from: c  reason: collision with root package name */
    private int f30884c;

    public m(l... lVarArr) {
        this.f30883b = lVarArr;
        this.f30882a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f30883b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f30883b, ((m) obj).f30883b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f30884c == 0) {
            this.f30884c = 527 + Arrays.hashCode(this.f30883b);
        }
        return this.f30884c;
    }
}
