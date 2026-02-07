package un;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f51864a;

        public a(i0 i0Var) {
            this.f51864a = i0Var;
        }

        @Override // un.t0
        public i0 a() {
            return this.f51864a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f51864a, ((a) obj).f51864a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f51864a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f51864a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f51865a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f51866b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f51867c;

        /* renamed from: d  reason: collision with root package name */
        private final g f51868d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f51869e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f51870f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f51865a = side;
            this.f51866b = bitmap;
            this.f51867c = h0Var;
            this.f51868d = gVar;
            this.f51869e = d0Var;
            this.f51870f = i0Var;
        }

        @Override // un.t0
        public i0 a() {
            return this.f51870f;
        }

        public final Bitmap b() {
            return this.f51866b;
        }

        public final g c() {
            return this.f51868d;
        }

        public final d0 d() {
            return this.f51869e;
        }

        public final h0 e() {
            return this.f51867c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51865a == bVar.f51865a && Intrinsics.areEqual(this.f51866b, bVar.f51866b) && Intrinsics.areEqual(this.f51867c, bVar.f51867c) && Intrinsics.areEqual(this.f51868d, bVar.f51868d) && Intrinsics.areEqual(this.f51869e, bVar.f51869e) && Intrinsics.areEqual(this.f51870f, bVar.f51870f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f51865a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f51865a.hashCode() * 31) + this.f51866b.hashCode()) * 31;
            h0 h0Var = this.f51867c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f51868d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f51869e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f51870f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f51865a;
            Bitmap bitmap = this.f51866b;
            h0 h0Var = this.f51867c;
            g gVar = this.f51868d;
            d0 d0Var = this.f51869e;
            i0 i0Var = this.f51870f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f51871d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f51872e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f51873i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f51874o;

        static {
            c[] a10 = a();
            f51873i = a10;
            f51874o = xr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f51871d, f51872e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f51873i.clone();
        }
    }

    i0 a();
}
