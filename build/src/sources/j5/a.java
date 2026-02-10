package j5;

import android.graphics.drawable.Drawable;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import rr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f30025a;

    /* renamed from: b  reason: collision with root package name */
    private final i f30026b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30027c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30028d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f30025a = dVar;
        this.f30026b = iVar;
        this.f30027c = i10;
        this.f30028d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f30025a.getDrawable();
        Drawable a10 = this.f30026b.a();
        h J = this.f30026b.b().J();
        int i10 = this.f30027c;
        i iVar = this.f30026b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f30028d);
        i iVar2 = this.f30026b;
        if (iVar2 instanceof q) {
            this.f30025a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f30025a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0448a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f30029c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f30030d;

        public C0448a(int i10, boolean z10) {
            this.f30029c = i10;
            this.f30030d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f30034b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f54611d) {
                return c.a.f30034b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f30029c, this.f30030d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0448a) {
                C0448a c0448a = (C0448a) obj;
                if (this.f30029c == c0448a.f30029c && this.f30030d == c0448a.f30030d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f30029c * 31) + Boolean.hashCode(this.f30030d);
        }

        public /* synthetic */ C0448a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
