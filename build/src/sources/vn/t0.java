package vn;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f52724a;

        public a(i0 i0Var) {
            this.f52724a = i0Var;
        }

        @Override // vn.t0
        public i0 a() {
            return this.f52724a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f52724a, ((a) obj).f52724a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f52724a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f52724a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f52725a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f52726b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f52727c;

        /* renamed from: d  reason: collision with root package name */
        private final g f52728d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f52729e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f52730f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f52725a = side;
            this.f52726b = bitmap;
            this.f52727c = h0Var;
            this.f52728d = gVar;
            this.f52729e = d0Var;
            this.f52730f = i0Var;
        }

        @Override // vn.t0
        public i0 a() {
            return this.f52730f;
        }

        public final Bitmap b() {
            return this.f52726b;
        }

        public final g c() {
            return this.f52728d;
        }

        public final d0 d() {
            return this.f52729e;
        }

        public final h0 e() {
            return this.f52727c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f52725a == bVar.f52725a && Intrinsics.areEqual(this.f52726b, bVar.f52726b) && Intrinsics.areEqual(this.f52727c, bVar.f52727c) && Intrinsics.areEqual(this.f52728d, bVar.f52728d) && Intrinsics.areEqual(this.f52729e, bVar.f52729e) && Intrinsics.areEqual(this.f52730f, bVar.f52730f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f52725a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f52725a.hashCode() * 31) + this.f52726b.hashCode()) * 31;
            h0 h0Var = this.f52727c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f52728d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f52729e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f52730f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f52725a;
            Bitmap bitmap = this.f52726b;
            h0 h0Var = this.f52727c;
            g gVar = this.f52728d;
            d0 d0Var = this.f52729e;
            i0 i0Var = this.f52730f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f52731d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f52732e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f52733i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f52734o;

        static {
            c[] a10 = a();
            f52733i = a10;
            f52734o = yr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f52731d, f52732e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f52733i.clone();
        }
    }

    i0 a();
}
