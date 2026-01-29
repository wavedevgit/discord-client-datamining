package je;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f31983a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f31984b;

    /* renamed from: c  reason: collision with root package name */
    private int f31985c;

    public m(l... lVarArr) {
        this.f31984b = lVarArr;
        this.f31983a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f31984b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f31984b, ((m) obj).f31984b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f31985c == 0) {
            this.f31985c = 527 + Arrays.hashCode(this.f31984b);
        }
        return this.f31985c;
    }
}
