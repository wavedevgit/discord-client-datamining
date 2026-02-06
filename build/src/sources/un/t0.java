package un;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f51816a;

        public a(i0 i0Var) {
            this.f51816a = i0Var;
        }

        @Override // un.t0
        public i0 a() {
            return this.f51816a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f51816a, ((a) obj).f51816a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f51816a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f51816a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f51817a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f51818b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f51819c;

        /* renamed from: d  reason: collision with root package name */
        private final g f51820d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f51821e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f51822f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f51817a = side;
            this.f51818b = bitmap;
            this.f51819c = h0Var;
            this.f51820d = gVar;
            this.f51821e = d0Var;
            this.f51822f = i0Var;
        }

        @Override // un.t0
        public i0 a() {
            return this.f51822f;
        }

        public final Bitmap b() {
            return this.f51818b;
        }

        public final g c() {
            return this.f51820d;
        }

        public final d0 d() {
            return this.f51821e;
        }

        public final h0 e() {
            return this.f51819c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51817a == bVar.f51817a && Intrinsics.areEqual(this.f51818b, bVar.f51818b) && Intrinsics.areEqual(this.f51819c, bVar.f51819c) && Intrinsics.areEqual(this.f51820d, bVar.f51820d) && Intrinsics.areEqual(this.f51821e, bVar.f51821e) && Intrinsics.areEqual(this.f51822f, bVar.f51822f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f51817a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f51817a.hashCode() * 31) + this.f51818b.hashCode()) * 31;
            h0 h0Var = this.f51819c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f51820d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f51821e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f51822f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f51817a;
            Bitmap bitmap = this.f51818b;
            h0 h0Var = this.f51819c;
            g gVar = this.f51820d;
            d0 d0Var = this.f51821e;
            i0 i0Var = this.f51822f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f51823d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f51824e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f51825i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51826o;

        static {
            c[] a10 = a();
            f51825i = a10;
            f51826o = xr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f51823d, f51824e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f51825i.clone();
        }
    }

    i0 a();
}
