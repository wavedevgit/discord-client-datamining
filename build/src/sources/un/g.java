package un;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f51772a;

        /* renamed from: b  reason: collision with root package name */
        private final String f51773b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f51774c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f51775d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f51772a = extractionRawPayload;
            this.f51773b = str;
            this.f51774c = date;
            this.f51775d = date2;
        }

        public final Date a() {
            return this.f51774c;
        }

        public final Date b() {
            return this.f51775d;
        }

        public String c() {
            return this.f51772a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f51772a, aVar.f51772a) && Intrinsics.areEqual(this.f51773b, aVar.f51773b) && Intrinsics.areEqual(this.f51774c, aVar.f51774c) && Intrinsics.areEqual(this.f51775d, aVar.f51775d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f51772a.hashCode() * 31;
            String str = this.f51773b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f51774c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f51775d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f51772a;
            String str2 = this.f51773b;
            Date date = this.f51774c;
            Date date2 = this.f51775d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f51776a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f51776a = extractionRawPayload;
        }

        public String a() {
            return this.f51776a;
        }

        public final un.a b() {
            return un.a.f51680o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f51776a, ((b) obj).f51776a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f51776a.hashCode();
        }

        public String toString() {
            String str = this.f51776a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
