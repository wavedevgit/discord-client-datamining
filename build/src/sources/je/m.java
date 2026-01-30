package je;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f31999a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f32000b;

    /* renamed from: c  reason: collision with root package name */
    private int f32001c;

    public m(l... lVarArr) {
        this.f32000b = lVarArr;
        this.f31999a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f32000b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f32000b, ((m) obj).f32000b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f32001c == 0) {
            this.f32001c = 527 + Arrays.hashCode(this.f32000b);
        }
        return this.f32001c;
    }
}
