package nn;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f42062a;

        public a(i0 i0Var) {
            this.f42062a = i0Var;
        }

        @Override // nn.t0
        public i0 a() {
            return this.f42062a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f42062a, ((a) obj).f42062a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f42062a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f42062a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f42063a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f42064b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f42065c;

        /* renamed from: d  reason: collision with root package name */
        private final g f42066d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f42067e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f42068f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f42063a = side;
            this.f42064b = bitmap;
            this.f42065c = h0Var;
            this.f42066d = gVar;
            this.f42067e = d0Var;
            this.f42068f = i0Var;
        }

        @Override // nn.t0
        public i0 a() {
            return this.f42068f;
        }

        public final Bitmap b() {
            return this.f42064b;
        }

        public final g c() {
            return this.f42066d;
        }

        public final d0 d() {
            return this.f42067e;
        }

        public final h0 e() {
            return this.f42065c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f42063a == bVar.f42063a && Intrinsics.areEqual(this.f42064b, bVar.f42064b) && Intrinsics.areEqual(this.f42065c, bVar.f42065c) && Intrinsics.areEqual(this.f42066d, bVar.f42066d) && Intrinsics.areEqual(this.f42067e, bVar.f42067e) && Intrinsics.areEqual(this.f42068f, bVar.f42068f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f42063a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f42063a.hashCode() * 31) + this.f42064b.hashCode()) * 31;
            h0 h0Var = this.f42065c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f42066d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f42067e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f42068f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f42063a;
            Bitmap bitmap = this.f42064b;
            h0 h0Var = this.f42065c;
            g gVar = this.f42066d;
            d0 d0Var = this.f42067e;
            i0 i0Var = this.f42068f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f42069d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f42070e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f42071i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f42072o;

        static {
            c[] a10 = a();
            f42071i = a10;
            f42072o = qr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f42069d, f42070e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f42071i.clone();
        }
    }

    i0 a();
}
