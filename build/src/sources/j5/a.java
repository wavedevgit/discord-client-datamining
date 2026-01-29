package j5;

import android.graphics.drawable.Drawable;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import ir.p;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f31851a;

    /* renamed from: b  reason: collision with root package name */
    private final i f31852b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31853c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31854d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f31851a = dVar;
        this.f31852b = iVar;
        this.f31853c = i10;
        this.f31854d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f31851a.getDrawable();
        Drawable a10 = this.f31852b.a();
        h J = this.f31852b.b().J();
        int i10 = this.f31853c;
        i iVar = this.f31852b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f31854d);
        i iVar2 = this.f31852b;
        if (iVar2 instanceof q) {
            this.f31851a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f31851a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0411a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f31855c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31856d;

        public C0411a(int i10, boolean z10) {
            this.f31855c = i10;
            this.f31856d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f31860b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f53166d) {
                return c.a.f31860b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f31855c, this.f31856d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0411a) {
                C0411a c0411a = (C0411a) obj;
                if (this.f31855c == c0411a.f31855c && this.f31856d == c0411a.f31856d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31855c * 31) + Boolean.hashCode(this.f31856d);
        }

        public /* synthetic */ C0411a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
