package mn;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f39211a;

        /* renamed from: b  reason: collision with root package name */
        private final String f39212b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f39213c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f39214d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f39211a = extractionRawPayload;
            this.f39212b = str;
            this.f39213c = date;
            this.f39214d = date2;
        }

        public final Date a() {
            return this.f39213c;
        }

        public final Date b() {
            return this.f39214d;
        }

        public String c() {
            return this.f39211a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f39211a, aVar.f39211a) && Intrinsics.areEqual(this.f39212b, aVar.f39212b) && Intrinsics.areEqual(this.f39213c, aVar.f39213c) && Intrinsics.areEqual(this.f39214d, aVar.f39214d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f39211a.hashCode() * 31;
            String str = this.f39212b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f39213c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f39214d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f39211a;
            String str2 = this.f39212b;
            Date date = this.f39213c;
            Date date2 = this.f39214d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f39215a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f39215a = extractionRawPayload;
        }

        public String a() {
            return this.f39215a;
        }

        public final mn.a b() {
            return mn.a.f39119o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f39215a, ((b) obj).f39215a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f39215a.hashCode();
        }

        public String toString() {
            String str = this.f39215a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
