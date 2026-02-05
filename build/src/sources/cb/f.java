package cb;

import android.graphics.ColorSpace;
import kotlin.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final ColorSpace f7441a;

    /* renamed from: b  reason: collision with root package name */
    private final Pair f7442b;

    public f(int i10, int i11, ColorSpace colorSpace) {
        Pair pair;
        this.f7441a = colorSpace;
        if (i10 != -1 && i11 != -1) {
            pair = new Pair(Integer.valueOf(i10), Integer.valueOf(i11));
        } else {
            pair = null;
        }
        this.f7442b = pair;
    }

    public final ColorSpace a() {
        return this.f7441a;
    }

    public final Pair b() {
        return this.f7442b;
    }
}
