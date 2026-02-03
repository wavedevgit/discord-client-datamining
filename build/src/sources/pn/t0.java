package pn;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f46354a;

        public a(i0 i0Var) {
            this.f46354a = i0Var;
        }

        @Override // pn.t0
        public i0 a() {
            return this.f46354a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f46354a, ((a) obj).f46354a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f46354a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f46354a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f46355a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f46356b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f46357c;

        /* renamed from: d  reason: collision with root package name */
        private final g f46358d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f46359e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f46360f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f46355a = side;
            this.f46356b = bitmap;
            this.f46357c = h0Var;
            this.f46358d = gVar;
            this.f46359e = d0Var;
            this.f46360f = i0Var;
        }

        @Override // pn.t0
        public i0 a() {
            return this.f46360f;
        }

        public final Bitmap b() {
            return this.f46356b;
        }

        public final g c() {
            return this.f46358d;
        }

        public final d0 d() {
            return this.f46359e;
        }

        public final h0 e() {
            return this.f46357c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f46355a == bVar.f46355a && Intrinsics.areEqual(this.f46356b, bVar.f46356b) && Intrinsics.areEqual(this.f46357c, bVar.f46357c) && Intrinsics.areEqual(this.f46358d, bVar.f46358d) && Intrinsics.areEqual(this.f46359e, bVar.f46359e) && Intrinsics.areEqual(this.f46360f, bVar.f46360f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f46355a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f46355a.hashCode() * 31) + this.f46356b.hashCode()) * 31;
            h0 h0Var = this.f46357c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f46358d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f46359e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f46360f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f46355a;
            Bitmap bitmap = this.f46356b;
            h0 h0Var = this.f46357c;
            g gVar = this.f46358d;
            d0 d0Var = this.f46359e;
            i0 i0Var = this.f46360f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f46361d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f46362e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f46363i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f46364o;

        static {
            c[] a10 = a();
            f46363i = a10;
            f46364o = sr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f46361d, f46362e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f46363i.clone();
        }
    }

    i0 a();
}
