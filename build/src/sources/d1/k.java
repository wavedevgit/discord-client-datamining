package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k extends c {

    /* renamed from: e  reason: collision with root package name */
    public static final a f20199e = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(String name, int i10) {
        super(name, b.f20142a.a(), i10, null);
        Intrinsics.checkNotNullParameter(name, "name");
    }

    @Override // d1.c
    public float c(int i10) {
        if (i10 == 0) {
            return 100.0f;
        }
        return 128.0f;
    }

    @Override // d1.c
    public float d(int i10) {
        if (i10 == 0) {
            return 0.0f;
        }
        return -128.0f;
    }

    @Override // d1.c
    public long h(float f10, float f11, float f12) {
        float f13;
        float f14;
        float l10 = (kotlin.ranges.d.l(f10, 0.0f, 100.0f) + 16.0f) / 116.0f;
        float l11 = (kotlin.ranges.d.l(f10, -128.0f, 128.0f) * 0.002f) + l10;
        if (l11 > 0.20689656f) {
            f13 = l11 * l11 * l11;
        } else {
            f13 = (l11 - 0.13793103f) * 0.12841855f;
        }
        if (l10 > 0.20689656f) {
            f14 = l10 * l10 * l10;
        } else {
            f14 = (l10 - 0.13793103f) * 0.12841855f;
        }
        j jVar = j.f20188a;
        return (Float.floatToIntBits(f13 * jVar.c()[0]) << 32) | (Float.floatToIntBits(f14 * jVar.c()[1]) & 4294967295L);
    }

    @Override // d1.c
    public float i(float f10, float f11, float f12) {
        float f13;
        float l10 = ((kotlin.ranges.d.l(f10, 0.0f, 100.0f) + 16.0f) / 116.0f) - (kotlin.ranges.d.l(f12, -128.0f, 128.0f) * 0.005f);
        if (l10 > 0.20689656f) {
            f13 = l10 * l10 * l10;
        } else {
            f13 = 0.12841855f * (l10 - 0.13793103f);
        }
        return f13 * j.f20188a.c()[2];
    }

    @Override // d1.c
    public long j(float f10, float f11, float f12, float f13, c colorSpace) {
        float f14;
        float f15;
        float f16;
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        j jVar = j.f20188a;
        float f17 = f10 / jVar.c()[0];
        float f18 = f11 / jVar.c()[1];
        float f19 = f12 / jVar.c()[2];
        if (f17 > 0.008856452f) {
            f14 = (float) Math.pow(f17, 0.33333334f);
        } else {
            f14 = (f17 * 7.787037f) + 0.13793103f;
        }
        if (f18 > 0.008856452f) {
            f15 = (float) Math.pow(f18, 0.33333334f);
        } else {
            f15 = (f18 * 7.787037f) + 0.13793103f;
        }
        if (f19 > 0.008856452f) {
            f16 = (float) Math.pow(f19, 0.33333334f);
        } else {
            f16 = (f19 * 7.787037f) + 0.13793103f;
        }
        return c1.b.a(kotlin.ranges.d.l((116.0f * f15) - 16.0f, 0.0f, 100.0f), kotlin.ranges.d.l((f14 - f15) * 500.0f, -128.0f, 128.0f), kotlin.ranges.d.l((f15 - f16) * 200.0f, -128.0f, 128.0f), f13, colorSpace);
    }
}
