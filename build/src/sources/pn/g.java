package pn;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f46262a;

        /* renamed from: b  reason: collision with root package name */
        private final String f46263b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f46264c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f46265d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f46262a = extractionRawPayload;
            this.f46263b = str;
            this.f46264c = date;
            this.f46265d = date2;
        }

        public final Date a() {
            return this.f46264c;
        }

        public final Date b() {
            return this.f46265d;
        }

        public String c() {
            return this.f46262a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f46262a, aVar.f46262a) && Intrinsics.areEqual(this.f46263b, aVar.f46263b) && Intrinsics.areEqual(this.f46264c, aVar.f46264c) && Intrinsics.areEqual(this.f46265d, aVar.f46265d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f46262a.hashCode() * 31;
            String str = this.f46263b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f46264c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f46265d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f46262a;
            String str2 = this.f46263b;
            Date date = this.f46264c;
            Date date2 = this.f46265d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f46266a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f46266a = extractionRawPayload;
        }

        public String a() {
            return this.f46266a;
        }

        public final pn.a b() {
            return pn.a.f46170o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f46266a, ((b) obj).f46266a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f46266a.hashCode();
        }

        public String toString() {
            String str = this.f46266a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
