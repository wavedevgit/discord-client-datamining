package mn;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f39319a;

        public a(i0 i0Var) {
            this.f39319a = i0Var;
        }

        @Override // mn.t0
        public i0 a() {
            return this.f39319a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f39319a, ((a) obj).f39319a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f39319a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f39319a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f39320a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f39321b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f39322c;

        /* renamed from: d  reason: collision with root package name */
        private final g f39323d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f39324e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f39325f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f39320a = side;
            this.f39321b = bitmap;
            this.f39322c = h0Var;
            this.f39323d = gVar;
            this.f39324e = d0Var;
            this.f39325f = i0Var;
        }

        @Override // mn.t0
        public i0 a() {
            return this.f39325f;
        }

        public final Bitmap b() {
            return this.f39321b;
        }

        public final g c() {
            return this.f39323d;
        }

        public final d0 d() {
            return this.f39324e;
        }

        public final h0 e() {
            return this.f39322c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f39320a == bVar.f39320a && Intrinsics.areEqual(this.f39321b, bVar.f39321b) && Intrinsics.areEqual(this.f39322c, bVar.f39322c) && Intrinsics.areEqual(this.f39323d, bVar.f39323d) && Intrinsics.areEqual(this.f39324e, bVar.f39324e) && Intrinsics.areEqual(this.f39325f, bVar.f39325f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f39320a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f39320a.hashCode() * 31) + this.f39321b.hashCode()) * 31;
            h0 h0Var = this.f39322c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f39323d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f39324e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f39325f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f39320a;
            Bitmap bitmap = this.f39321b;
            h0 h0Var = this.f39322c;
            g gVar = this.f39323d;
            d0 d0Var = this.f39324e;
            i0 i0Var = this.f39325f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f39326d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f39327e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f39328i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f39329o;

        static {
            c[] a10 = a();
            f39328i = a10;
            f39329o = pr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f39326d, f39327e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f39328i.clone();
        }
    }

    i0 a();
}
