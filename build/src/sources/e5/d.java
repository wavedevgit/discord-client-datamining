package e5;

import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import b5.a;
import b5.b;
import e5.c;
import g5.m;
import g5.p;
import g5.q;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import k5.k;
import k5.t;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    public static final a f21351c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f21352a;

    /* renamed from: b  reason: collision with root package name */
    private final p f21353b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public d(v4.h hVar, p pVar, t tVar) {
        this.f21352a = hVar;
        this.f21353b = pVar;
    }

    private final String b(c.C0284c c0284c) {
        Object obj = c0284c.b().get("coil#disk_cache_key");
        if (obj instanceof String) {
            return (String) obj;
        }
        return null;
    }

    private final boolean d(c.C0284c c0284c) {
        Boolean bool;
        Object obj = c0284c.b().get("coil#is_sampled");
        if (obj instanceof Boolean) {
            bool = (Boolean) obj;
        } else {
            bool = null;
        }
        if (bool != null) {
            return bool.booleanValue();
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x009a, code lost:
        if (java.lang.Math.abs(r6 - r3) <= 1) goto L37;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r4v3 */
    /* JADX WARN: Type inference failed for: r4v4 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final boolean e(g5.h r18, e5.c.b r19, e5.c.C0284c r20, h5.i r21, h5.h r22) {
        /*
            r17 = this;
            r0 = r17
            r1 = r20
            boolean r2 = r0.d(r1)
            boolean r3 = h5.b.b(r21)
            r4 = 0
            r5 = 1
            if (r3 == 0) goto L14
            if (r2 == 0) goto L13
            return r4
        L13:
            return r5
        L14:
            java.util.Map r3 = r19.c()
            java.lang.String r6 = "coil#transformation_size"
            java.lang.Object r3 = r3.get(r6)
            java.lang.String r3 = (java.lang.String) r3
            if (r3 == 0) goto L2b
            java.lang.String r1 = r21.toString()
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r1)
            return r1
        L2b:
            android.graphics.Bitmap r3 = r1.a()
            int r3 = r3.getWidth()
            android.graphics.Bitmap r1 = r1.a()
            int r1 = r1.getHeight()
            h5.c r6 = r21.d()
            boolean r7 = r6 instanceof h5.c.a
            r8 = 2147483647(0x7fffffff, float:NaN)
            if (r7 == 0) goto L4b
            h5.c$a r6 = (h5.c.a) r6
            int r6 = r6.f25833a
            goto L4c
        L4b:
            r6 = r8
        L4c:
            h5.c r7 = r21.c()
            boolean r9 = r7 instanceof h5.c.a
            if (r9 == 0) goto L58
            h5.c$a r7 = (h5.c.a) r7
            int r8 = r7.f25833a
        L58:
            r7 = r22
            double r9 = x4.j.c(r3, r1, r6, r8, r7)
            boolean r7 = k5.i.a(r18)
            r11 = 4607182418800017408(0x3ff0000000000000, double:1.0)
            if (r7 == 0) goto L88
            double r13 = kotlin.ranges.d.g(r9, r11)
            r18 = r11
            double r11 = (double) r6
            r15 = r4
            r16 = r5
            double r4 = (double) r3
            double r4 = r4 * r13
            double r11 = r11 - r4
            double r3 = java.lang.Math.abs(r11)
            int r3 = (r3 > r18 ? 1 : (r3 == r18 ? 0 : -1))
            if (r3 <= 0) goto L87
            double r3 = (double) r8
            double r5 = (double) r1
            double r13 = r13 * r5
            double r3 = r3 - r13
            double r3 = java.lang.Math.abs(r3)
            int r1 = (r3 > r18 ? 1 : (r3 == r18 ? 0 : -1))
            if (r1 > 0) goto Laf
        L87:
            return r16
        L88:
            r15 = r4
            r16 = r5
            r18 = r11
            boolean r4 = k5.k.s(r6)
            if (r4 != 0) goto L9d
            int r6 = r6 - r3
            int r3 = java.lang.Math.abs(r6)
            r4 = r16
            if (r3 > r4) goto Laf
            goto L9f
        L9d:
            r4 = r16
        L9f:
            boolean r3 = k5.k.s(r8)
            if (r3 != 0) goto Lac
            int r8 = r8 - r1
            int r1 = java.lang.Math.abs(r8)
            if (r1 > r4) goto Laf
        Lac:
            r16 = r4
            goto Lc0
        Laf:
            int r1 = (r9 > r18 ? 1 : (r9 == r18 ? 0 : -1))
            if (r1 != 0) goto Lb4
            goto Lb7
        Lb4:
            if (r7 != 0) goto Lb7
            return r15
        Lb7:
            int r1 = (r9 > r18 ? 1 : (r9 == r18 ? 0 : -1))
            if (r1 <= 0) goto Lbe
            if (r2 == 0) goto Lbe
            return r15
        Lbe:
            r16 = 1
        Lc0:
            return r16
        */
        throw new UnsupportedOperationException("Method not decompiled: e5.d.e(g5.h, e5.c$b, e5.c$c, h5.i, h5.h):boolean");
    }

    public final c.C0284c a(g5.h hVar, c.b bVar, h5.i iVar, h5.h hVar2) {
        c.C0284c c0284c;
        if (!hVar.C().d()) {
            return null;
        }
        c b10 = this.f21352a.b();
        if (b10 != null) {
            c0284c = b10.b(bVar);
        } else {
            c0284c = null;
        }
        if (c0284c == null || !c(hVar, bVar, c0284c, iVar, hVar2)) {
            return null;
        }
        return c0284c;
    }

    public final boolean c(g5.h hVar, c.b bVar, c.C0284c c0284c, h5.i iVar, h5.h hVar2) {
        if (!this.f21353b.c(hVar, k5.a.c(c0284c.a()))) {
            return false;
        }
        return e(hVar, bVar, c0284c, iVar, hVar2);
    }

    public final c.b f(g5.h hVar, Object obj, m mVar, v4.c cVar) {
        c.b B = hVar.B();
        if (B != null) {
            return B;
        }
        cVar.f(hVar, obj);
        String f10 = this.f21352a.getComponents().f(obj, mVar);
        cVar.h(hVar, f10);
        if (f10 == null) {
            return null;
        }
        List O = hVar.O();
        Map c10 = hVar.E().c();
        if (O.isEmpty() && c10.isEmpty()) {
            return new c.b(f10, null, 2, null);
        }
        Map y10 = o0.y(c10);
        if (!O.isEmpty()) {
            List O2 = hVar.O();
            if (O2.size() <= 0) {
                y10.put("coil#transformation_size", mVar.o().toString());
            } else {
                android.support.v4.media.session.b.a(O2.get(0));
                StringBuilder sb2 = new StringBuilder();
                sb2.append("coil#transformation_");
                sb2.append(0);
                throw null;
            }
        }
        return new c.b(f10, y10);
    }

    public final q g(b.a aVar, g5.h hVar, c.b bVar, c.C0284c c0284c) {
        return new q(new BitmapDrawable(hVar.l().getResources(), c0284c.a()), hVar, x4.h.f54519d, bVar, b(c0284c), d(c0284c), k.t(aVar));
    }

    public final boolean h(c.b bVar, g5.h hVar, a.b bVar2) {
        c b10;
        BitmapDrawable bitmapDrawable;
        Bitmap bitmap;
        if (hVar.C().e() && (b10 = this.f21352a.b()) != null && bVar != null) {
            Drawable e10 = bVar2.e();
            if (e10 instanceof BitmapDrawable) {
                bitmapDrawable = (BitmapDrawable) e10;
            } else {
                bitmapDrawable = null;
            }
            if (bitmapDrawable != null && (bitmap = bitmapDrawable.getBitmap()) != null) {
                LinkedHashMap linkedHashMap = new LinkedHashMap();
                linkedHashMap.put("coil#is_sampled", Boolean.valueOf(bVar2.f()));
                String d10 = bVar2.d();
                if (d10 != null) {
                    linkedHashMap.put("coil#disk_cache_key", d10);
                }
                b10.c(bVar, new c.C0284c(bitmap, linkedHashMap));
                return true;
            }
        }
        return false;
    }
}
