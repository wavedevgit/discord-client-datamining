package j5;

import android.graphics.drawable.Drawable;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import or.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f30750a;

    /* renamed from: b  reason: collision with root package name */
    private final i f30751b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30752c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30753d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f30750a = dVar;
        this.f30751b = iVar;
        this.f30752c = i10;
        this.f30753d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f30750a.getDrawable();
        Drawable a10 = this.f30751b.a();
        h J = this.f30751b.b().J();
        int i10 = this.f30752c;
        i iVar = this.f30751b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f30753d);
        i iVar2 = this.f30751b;
        if (iVar2 instanceof q) {
            this.f30750a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f30750a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0424a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f30754c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f30755d;

        public C0424a(int i10, boolean z10) {
            this.f30754c = i10;
            this.f30755d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f30759b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f53652d) {
                return c.a.f30759b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f30754c, this.f30755d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0424a) {
                C0424a c0424a = (C0424a) obj;
                if (this.f30754c == c0424a.f30754c && this.f30755d == c0424a.f30755d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f30754c * 31) + Boolean.hashCode(this.f30755d);
        }

        public /* synthetic */ C0424a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
