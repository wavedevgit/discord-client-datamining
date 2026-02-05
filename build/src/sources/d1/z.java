package d1;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z extends c {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public z(String name, int i10) {
        super(name, b.f20187a.c(), i10, null);
        Intrinsics.checkNotNullParameter(name, "name");
    }

    private final float k(float f10) {
        return kotlin.ranges.d.l(f10, -2.0f, 2.0f);
    }

    @Override // d1.c
    public float c(int i10) {
        return 2.0f;
    }

    @Override // d1.c
    public float d(int i10) {
        return -2.0f;
    }

    @Override // d1.c
    public long h(float f10, float f11, float f12) {
        float k10 = k(f10);
        float k11 = k(f11);
        return (Float.floatToIntBits(k11) & 4294967295L) | (Float.floatToIntBits(k10) << 32);
    }

    @Override // d1.c
    public float i(float f10, float f11, float f12) {
        return k(f12);
    }

    @Override // d1.c
    public long j(float f10, float f11, float f12, float f13, c colorSpace) {
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        return c1.b.a(k(f10), k(f11), k(f12), f13, colorSpace);
    }
}
