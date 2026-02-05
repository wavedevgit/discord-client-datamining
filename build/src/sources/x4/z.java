package x4;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.RectF;
import android.graphics.drawable.BitmapDrawable;
import kotlin.Pair;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ms.x0;
import okio.BufferedSource;
import x4.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f53697d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final r f53698a;

    /* renamed from: b  reason: collision with root package name */
    private final g5.m f53699b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f53700c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public z(r rVar, g5.m mVar, boolean z10) {
        this.f53698a = rVar;
        this.f53699b = mVar;
        this.f53700c = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final i c(z zVar) {
        float h10;
        float f10;
        int c10;
        int c11;
        BufferedSource h11 = zVar.f53698a.h();
        try {
            f6.g l10 = f6.g.l(h11.n2());
            f6.f fVar = null;
            zr.c.a(h11, null);
            RectF g10 = l10.g();
            if (zVar.f53700c && g10 != null) {
                h10 = g10.width();
                f10 = g10.height();
            } else {
                h10 = l10.h();
                f10 = l10.f();
            }
            Pair d10 = zVar.d(h10, f10, zVar.f53699b.n());
            float floatValue = ((Number) d10.a()).floatValue();
            float floatValue2 = ((Number) d10.b()).floatValue();
            int i10 = (h10 > 0.0f ? 1 : (h10 == 0.0f ? 0 : -1));
            if (i10 > 0 && f10 > 0.0f) {
                float d11 = j.d(h10, f10, floatValue, floatValue2, zVar.f53699b.n());
                c10 = (int) (d11 * h10);
                c11 = (int) (d11 * f10);
            } else {
                c10 = ds.a.c(floatValue);
                c11 = ds.a.c(floatValue2);
            }
            if (g10 == null && i10 > 0 && f10 > 0.0f) {
                l10.s(0.0f, 0.0f, h10, f10);
            }
            l10.t("100%");
            l10.r("100%");
            Bitmap createBitmap = Bitmap.createBitmap(c10, c11, k5.j.d(zVar.f53699b.f()));
            String a10 = g5.r.a(zVar.f53699b.l());
            if (a10 != null) {
                fVar = new f6.f().a(a10);
            }
            l10.o(new Canvas(createBitmap), fVar);
            return new i(new BitmapDrawable(zVar.f53699b.g().getResources(), createBitmap), true);
        } finally {
        }
    }

    private final Pair d(float f10, float f11, h5.h hVar) {
        if (h5.b.b(this.f53699b.o())) {
            if (f10 <= 0.0f) {
                f10 = 512.0f;
            }
            if (f11 <= 0.0f) {
                f11 = 512.0f;
            }
            return or.v.a(Float.valueOf(f10), Float.valueOf(f11));
        }
        h5.i o10 = this.f53699b.o();
        return or.v.a(Float.valueOf(k5.j.c(o10.a(), hVar)), Float.valueOf(k5.j.c(o10.b(), hVar)));
    }

    @Override // x4.k
    public Object a(Continuation continuation) {
        return x0.c(null, new Function0() { // from class: x4.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                i c10;
                c10 = z.c(z.this);
                return c10;
            }
        }, continuation, 1, null);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements k.a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f53701a;

        public b(boolean z10) {
            this.f53701a = z10;
        }

        private final boolean b(a5.l lVar) {
            if (!Intrinsics.areEqual(lVar.b(), "image/svg+xml") && !x.a(j.f53660a, lVar.c().h())) {
                return false;
            }
            return true;
        }

        @Override // x4.k.a
        public k a(a5.l lVar, g5.m mVar, v4.h hVar) {
            if (!b(lVar)) {
                return null;
            }
            return new z(lVar.c(), mVar, this.f53701a);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && this.f53701a == ((b) obj).f53701a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f53701a);
        }

        public /* synthetic */ b(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? true : z10);
        }
    }

    public /* synthetic */ z(r rVar, g5.m mVar, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(rVar, mVar, (i10 & 4) != 0 ? true : z10);
    }
}
