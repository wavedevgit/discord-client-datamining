package sn;

import android.graphics.Bitmap;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f49970a;

        public a(i0 i0Var) {
            this.f49970a = i0Var;
        }

        @Override // sn.t0
        public i0 a() {
            return this.f49970a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f49970a, ((a) obj).f49970a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            i0 i0Var = this.f49970a;
            if (i0Var == null) {
                return 0;
            }
            return i0Var.hashCode();
        }

        public String toString() {
            i0 i0Var = this.f49970a;
            return "None(imageLightCondition=" + i0Var + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements t0 {

        /* renamed from: a  reason: collision with root package name */
        private final c f49971a;

        /* renamed from: b  reason: collision with root package name */
        private final Bitmap f49972b;

        /* renamed from: c  reason: collision with root package name */
        private final h0 f49973c;

        /* renamed from: d  reason: collision with root package name */
        private final g f49974d;

        /* renamed from: e  reason: collision with root package name */
        private final d0 f49975e;

        /* renamed from: f  reason: collision with root package name */
        private final i0 f49976f;

        public b(c side, Bitmap bitmap, h0 h0Var, g gVar, d0 d0Var, i0 i0Var) {
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            this.f49971a = side;
            this.f49972b = bitmap;
            this.f49973c = h0Var;
            this.f49974d = gVar;
            this.f49975e = d0Var;
            this.f49976f = i0Var;
        }

        @Override // sn.t0
        public i0 a() {
            return this.f49976f;
        }

        public final Bitmap b() {
            return this.f49972b;
        }

        public final g c() {
            return this.f49974d;
        }

        public final d0 d() {
            return this.f49975e;
        }

        public final h0 e() {
            return this.f49973c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f49971a == bVar.f49971a && Intrinsics.areEqual(this.f49972b, bVar.f49972b) && Intrinsics.areEqual(this.f49973c, bVar.f49973c) && Intrinsics.areEqual(this.f49974d, bVar.f49974d) && Intrinsics.areEqual(this.f49975e, bVar.f49975e) && Intrinsics.areEqual(this.f49976f, bVar.f49976f)) {
                return true;
            }
            return false;
        }

        public final c f() {
            return this.f49971a;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4 = ((this.f49971a.hashCode() * 31) + this.f49972b.hashCode()) * 31;
            h0 h0Var = this.f49973c;
            int i10 = 0;
            if (h0Var == null) {
                hashCode = 0;
            } else {
                hashCode = h0Var.hashCode();
            }
            int i11 = (hashCode4 + hashCode) * 31;
            g gVar = this.f49974d;
            if (gVar == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = gVar.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            d0 d0Var = this.f49975e;
            if (d0Var == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = d0Var.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            i0 i0Var = this.f49976f;
            if (i0Var != null) {
                i10 = i0Var.hashCode();
            }
            return i13 + i10;
        }

        public String toString() {
            c cVar = this.f49971a;
            Bitmap bitmap = this.f49972b;
            h0 h0Var = this.f49973c;
            g gVar = this.f49974d;
            d0 d0Var = this.f49975e;
            i0 i0Var = this.f49976f;
            return "ParsedIdSide(side=" + cVar + ", bitmap=" + bitmap + ", metadata=" + h0Var + ", extractedBarcode=" + gVar + ", extractedTexts=" + d0Var + ", imageLightCondition=" + i0Var + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f49977d = new c("Front", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f49978e = new c("Back", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ c[] f49979i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f49980o;

        static {
            c[] a10 = a();
            f49979i = a10;
            f49980o = vr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f49977d, f49978e};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f49979i.clone();
        }
    }

    i0 a();
}
