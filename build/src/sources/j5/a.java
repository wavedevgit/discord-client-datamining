package j5;

import android.graphics.drawable.Drawable;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import qr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f29771a;

    /* renamed from: b  reason: collision with root package name */
    private final i f29772b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29773c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f29774d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f29771a = dVar;
        this.f29772b = iVar;
        this.f29773c = i10;
        this.f29774d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f29771a.getDrawable();
        Drawable a10 = this.f29772b.a();
        h J = this.f29772b.b().J();
        int i10 = this.f29773c;
        i iVar = this.f29772b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f29774d);
        i iVar2 = this.f29772b;
        if (iVar2 instanceof q) {
            this.f29771a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f29771a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0414a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f29775c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f29776d;

        public C0414a(int i10, boolean z10) {
            this.f29775c = i10;
            this.f29776d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f29780b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f54519d) {
                return c.a.f29780b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f29775c, this.f29776d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0414a) {
                C0414a c0414a = (C0414a) obj;
                if (this.f29775c == c0414a.f29775c && this.f29776d == c0414a.f29776d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f29775c * 31) + Boolean.hashCode(this.f29776d);
        }

        public /* synthetic */ C0414a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
