package mn;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f39303a;

        public a(i0 i0Var) {
            this.f39303a = i0Var;
        }

        @Override // mn.t0
        public i0 a() {
            return this.f39303a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f39303a, ((a) obj).f39303a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f39303a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f39303a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f39304a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f39305b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f39306c;

        /* renamed from: d  reason: collision with root package name */
        private final g f39307d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f39308e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f39309f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f39304a = side;
            this.f39305b = bitmap;
            this.f39306c = h0Var;
            this.f39307d = gVar;
            this.f39308e = d0Var;
            this.f39309f = i0Var;
        }

        @Override // mn.t0
        public i0 a() {
            return this.f39309f;
        }

        public final Bitmap b() {
            return this.f39305b;
        }

        public final g c() {
            return this.f39307d;
        }

        public final d0 d() {
            return this.f39308e;
        }

        public final h0 e() {
            return this.f39306c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f39304a == bVar.f39304a && Intrinsics.areEqual(this.f39305b, bVar.f39305b) && Intrinsics.areEqual(this.f39306c, bVar.f39306c) && Intrinsics.areEqual(this.f39307d, bVar.f39307d) && Intrinsics.areEqual(this.f39308e, bVar.f39308e) && Intrinsics.areEqual(this.f39309f, bVar.f39309f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f39304a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f39304a.hashCode() * 31) + this.f39305b.hashCode()) * 31;
            h0 h0Var = this.f39306c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f39307d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f39308e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f39309f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f39304a;
            Bitmap bitmap = this.f39305b;
            h0 h0Var = this.f39306c;
            g gVar = this.f39307d;
            d0 d0Var = this.f39308e;
            i0 i0Var = this.f39309f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f39310d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f39311e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f39312i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f39313o;

        static {
            c[] a10 = a();
            f39312i = a10;
            f39313o = pr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f39310d, f39311e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f39312i.clone();
        }
    }

    i0 a();
}
