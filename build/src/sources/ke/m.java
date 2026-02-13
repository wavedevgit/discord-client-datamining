package ke;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f32281a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f32282b;

    /* renamed from: c  reason: collision with root package name */
    private int f32283c;

    public m(l... lVarArr) {
        this.f32282b = lVarArr;
        this.f32281a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f32282b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f32282b, ((m) obj).f32282b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f32283c == 0) {
            this.f32283c = 527 + Arrays.hashCode(this.f32282b);
        }
        return this.f32283c;
    }
}
