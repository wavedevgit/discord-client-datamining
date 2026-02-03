package j5;

import android.graphics.drawable.Drawable;
import g5.f;
import g5.i;
import g5.q;
import h5.h;
import j5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import lr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f31401a;

    /* renamed from: b  reason: collision with root package name */
    private final i f31402b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31403c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31404d;

    public a(d dVar, i iVar, int i10, boolean z10) {
        this.f31401a = dVar;
        this.f31402b = iVar;
        this.f31403c = i10;
        this.f31404d = z10;
        if (i10 > 0) {
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    @Override // j5.c
    public void a() {
        boolean z10;
        Drawable drawable = this.f31401a.getDrawable();
        Drawable a10 = this.f31402b.a();
        h J = this.f31402b.b().J();
        int i10 = this.f31403c;
        i iVar = this.f31402b;
        if ((iVar instanceof q) && ((q) iVar).d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        z4.a aVar = new z4.a(drawable, a10, J, i10, z10, this.f31404d);
        i iVar2 = this.f31402b;
        if (iVar2 instanceof q) {
            this.f31401a.a(aVar);
        } else if (iVar2 instanceof f) {
            this.f31401a.c(aVar);
        } else {
            throw new p();
        }
    }

    /* renamed from: j5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0412a implements c.a {

        /* renamed from: c  reason: collision with root package name */
        private final int f31405c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31406d;

        public C0412a(int i10, boolean z10) {
            this.f31405c = i10;
            this.f31406d = z10;
            if (i10 <= 0) {
                throw new IllegalArgumentException("durationMillis must be > 0.");
            }
        }

        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            if (!(iVar instanceof q)) {
                return c.a.f31410b.a(dVar, iVar);
            }
            if (((q) iVar).c() == x4.h.f53111d) {
                return c.a.f31410b.a(dVar, iVar);
            }
            return new a(dVar, iVar, this.f31405c, this.f31406d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof C0412a) {
                C0412a c0412a = (C0412a) obj;
                if (this.f31405c == c0412a.f31405c && this.f31406d == c0412a.f31406d) {
                    return true;
                }
                return false;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31405c * 31) + Boolean.hashCode(this.f31406d);
        }

        public /* synthetic */ C0412a(int i10, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? 100 : i10, (i11 & 2) != 0 ? false : z10);
        }
    }
}
