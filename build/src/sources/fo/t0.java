package fo;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f24119a;

        public a(i0 i0Var) {
            this.f24119a = i0Var;
        }

        @Override // fo.t0
        public i0 a() {
            return this.f24119a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f24119a, ((a) obj).f24119a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f24119a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f24119a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f24120a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f24121b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f24122c;

        /* renamed from: d  reason: collision with root package name */
        private final g f24123d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f24124e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f24125f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f24120a = side;
            this.f24121b = bitmap;
            this.f24122c = h0Var;
            this.f24123d = gVar;
            this.f24124e = d0Var;
            this.f24125f = i0Var;
        }

        @Override // fo.t0
        public i0 a() {
            return this.f24125f;
        }

        public final Bitmap b() {
            return this.f24121b;
        }

        public final g c() {
            return this.f24123d;
        }

        public final d0 d() {
            return this.f24124e;
        }

        public final h0 e() {
            return this.f24122c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f24120a == bVar.f24120a && Intrinsics.areEqual(this.f24121b, bVar.f24121b) && Intrinsics.areEqual(this.f24122c, bVar.f24122c) && Intrinsics.areEqual(this.f24123d, bVar.f24123d) && Intrinsics.areEqual(this.f24124e, bVar.f24124e) && Intrinsics.areEqual(this.f24125f, bVar.f24125f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f24120a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f24120a.hashCode() * 31) + this.f24121b.hashCode()) * 31;
            h0 h0Var = this.f24122c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f24123d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f24124e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f24125f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f24120a;
            Bitmap bitmap = this.f24121b;
            h0 h0Var = this.f24122c;
            g gVar = this.f24123d;
            d0 d0Var = this.f24124e;
            i0 i0Var = this.f24125f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f24126d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f24127e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f24128i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f24129o;

        static {
            c[] a10 = a();
            f24128i = a10;
            f24129o = hs.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f24126d, f24127e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f24128i.clone();
        }
    }

    i0 a();
}
