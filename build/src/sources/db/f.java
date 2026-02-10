package db;

import android.graphics.ColorSpace;
import kotlin.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final ColorSpace f21512a;

    /* renamed from: b  reason: collision with root package name */
    private final Pair f21513b;

    public f(int i10, int i11, ColorSpace colorSpace) {
        Pair pair;
        this.f21512a = colorSpace;
        if (i10 != -1 && i11 != -1) {
            pair = new Pair(Integer.valueOf(i10), Integer.valueOf(i11));
        } else {
            pair = null;
        }
        this.f21513b = pair;
    }

    public final ColorSpace a() {
        return this.f21512a;
    }

    public final Pair b() {
        return this.f21513b;
    }
}
