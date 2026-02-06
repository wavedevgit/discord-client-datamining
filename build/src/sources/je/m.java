package je;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public final int f29855a;

    /* renamed from: b  reason: collision with root package name */
    private final l[] f29856b;

    /* renamed from: c  reason: collision with root package name */
    private int f29857c;

    public m(l... lVarArr) {
        this.f29856b = lVarArr;
        this.f29855a = lVarArr.length;
    }

    public l a(int i10) {
        return this.f29856b[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && m.class == obj.getClass()) {
            return Arrays.equals(this.f29856b, ((m) obj).f29856b);
        }
        return false;
    }

    public int hashCode() {
        if (this.f29857c == 0) {
            this.f29857c = 527 + Arrays.hashCode(this.f29856b);
        }
        return this.f29857c;
    }
}
