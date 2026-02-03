package j5;

import android.graphics.drawable.Drawable;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import j5.c;
import jr.p;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f31605a;

    /* renamed from: b  reason: collision with root package name */
    private final i f31606b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31607c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31608d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f31605a = dVar;
        this.f31606b = iVar;
        this.f31607c = i10;
        this.f31608d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f31605a.getDrawable();
        Drawable a10 = this.f31606b.a();
        h J = this.f31606b.b().J();
        int i10 = this.f31607c;
        i iVar = this.f31606b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f31608d);
        i iVar2 = this.f31606b;
        if (iVar2 instanceof q) {
            this.f31605a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f31605a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0422a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f31609c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31610d;

        public C0422a(int i10, boolean z10) {
            this.f31609c = i10;
            this.f31610d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f31614b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f53390d) {
                return c.a.f31614b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f31609c, this.f31610d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0422a) {
                C0422a c0422a = (C0422a) obj;
                if (this.f31609c == c0422a.f31609c && this.f31610d == c0422a.f31610d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31609c * 31) + Boolean.hashCode(this.f31610d);
        }

        public /* synthetic */ C0422a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
