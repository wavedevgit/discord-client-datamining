package j5;

import android.graphics.drawable.Drawable;
import as.p;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f30825a;

    /* renamed from: b  reason: collision with root package name */
    private final i f30826b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30827c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30828d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f30825a = dVar;
        this.f30826b = iVar;
        this.f30827c = i10;
        this.f30828d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f30825a.getDrawable();
        Drawable a10 = this.f30826b.a();
        h J = this.f30826b.b().J();
        int i10 = this.f30827c;
        i iVar = this.f30826b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f30828d);
        i iVar2 = this.f30826b;
        if (iVar2 instanceof q) {
            this.f30825a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f30825a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0416a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f30829c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f30830d;

        public C0416a(int i10, boolean z10) {
            this.f30829c = i10;
            this.f30830d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f30834b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f54343d) {
                return c.a.f30834b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f30829c, this.f30830d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0416a) {
                C0416a c0416a = (C0416a) obj;
                if (this.f30829c == c0416a.f30829c && this.f30830d == c0416a.f30830d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f30829c * 31) + Boolean.hashCode(this.f30830d);
        }

        public /* synthetic */ C0416a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
