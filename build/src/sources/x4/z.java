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
import okio.BufferedSource;
import os.x0;
import x4.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f54564d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final r f54565a;

    /* renamed from: b  reason: collision with root package name */
    private final g5.m f54566b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f54567c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public z(r rVar, g5.m mVar, boolean z10) {
        this.f54565a = rVar;
        this.f54566b = mVar;
        this.f54567c = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final i c(z zVar) {
        float h10;
        float f10;
        int c10;
        int c11;
        BufferedSource g10 = zVar.f54565a.g();
        try {
            f6.g l10 = f6.g.l(g10.n2());
            f6.f fVar = null;
            bs.c.a(g10, null);
            RectF g11 = l10.g();
            if (zVar.f54567c && g11 != null) {
                h10 = g11.width();
                f10 = g11.height();
            } else {
                h10 = l10.h();
                f10 = l10.f();
            }
            Pair d10 = zVar.d(h10, f10, zVar.f54566b.n());
            float floatValue = ((Number) d10.a()).floatValue();
            float floatValue2 = ((Number) d10.b()).floatValue();
            int i10 = (h10 > 0.0f ? 1 : (h10 == 0.0f ? 0 : -1));
            if (i10 > 0 && f10 > 0.0f) {
                float d11 = j.d(h10, f10, floatValue, floatValue2, zVar.f54566b.n());
                c10 = (int) (d11 * h10);
                c11 = (int) (d11 * f10);
            } else {
                c10 = fs.a.c(floatValue);
                c11 = fs.a.c(floatValue2);
            }
            if (g11 == null && i10 > 0 && f10 > 0.0f) {
                l10.s(0.0f, 0.0f, h10, f10);
            }
            l10.t("100%");
            l10.r("100%");
            Bitmap createBitmap = Bitmap.createBitmap(c10, c11, k5.j.d(zVar.f54566b.f()));
            String a10 = g5.r.a(zVar.f54566b.l());
            if (a10 != null) {
                fVar = new f6.f().a(a10);
            }
            l10.o(new Canvas(createBitmap), fVar);
            return new i(new BitmapDrawable(zVar.f54566b.g().getResources(), createBitmap), true);
        } finally {
        }
    }

    private final Pair d(float f10, float f11, h5.h hVar) {
        if (h5.b.b(this.f54566b.o())) {
            if (f10 <= 0.0f) {
                f10 = 512.0f;
            }
            if (f11 <= 0.0f) {
                f11 = 512.0f;
            }
            return qr.v.a(Float.valueOf(f10), Float.valueOf(f11));
        }
        h5.i o10 = this.f54566b.o();
        return qr.v.a(Float.valueOf(k5.j.c(o10.a(), hVar)), Float.valueOf(k5.j.c(o10.b(), hVar)));
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
        private final boolean f54568a;

        public b(boolean z10) {
            this.f54568a = z10;
        }

        private final boolean b(a5.l lVar) {
            if (!Intrinsics.areEqual(lVar.b(), "image/svg+xml") && !x.a(j.f54527a, lVar.c().g())) {
                return false;
            }
            return true;
        }

        @Override // x4.k.a
        public k a(a5.l lVar, g5.m mVar, v4.h hVar) {
            if (!b(lVar)) {
                return null;
            }
            return new z(lVar.c(), mVar, this.f54568a);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && this.f54568a == ((b) obj).f54568a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f54568a);
        }

        public /* synthetic */ b(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? true : z10);
        }
    }

    public /* synthetic */ z(r rVar, g5.m mVar, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(rVar, mVar, (i10 & 4) != 0 ? true : z10);
    }
}
