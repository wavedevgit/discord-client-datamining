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
    private final d f31394a;

    /* renamed from: b  reason: collision with root package name */
    private final i f31395b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31396c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31397d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f31394a = dVar;
        this.f31395b = iVar;
        this.f31396c = i10;
        this.f31397d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f31394a.getDrawable();
        Drawable a10 = this.f31395b.a();
        h J = this.f31395b.b().J();
        int i10 = this.f31396c;
        i iVar = this.f31395b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f31397d);
        i iVar2 = this.f31395b;
        if (iVar2 instanceof q) {
            this.f31394a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f31394a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0416a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f31398c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31399d;

        public C0416a(int i10, boolean z10) {
            this.f31398c = i10;
            this.f31399d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f31403b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f54912d) {
                return c.a.f31403b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f31398c, this.f31399d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0416a) {
                C0416a c0416a = (C0416a) obj;
                if (this.f31398c == c0416a.f31398c && this.f31399d == c0416a.f31399d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31398c * 31) + Boolean.hashCode(this.f31399d);
        }

        public /* synthetic */ C0416a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
