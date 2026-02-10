package fo;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f24027a;

        /* renamed from: b  reason: collision with root package name */
        private final String f24028b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f24029c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f24030d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f24027a = extractionRawPayload;
            this.f24028b = str;
            this.f24029c = date;
            this.f24030d = date2;
        }

        public final Date a() {
            return this.f24029c;
        }

        public final Date b() {
            return this.f24030d;
        }

        public String c() {
            return this.f24027a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f24027a, aVar.f24027a) && Intrinsics.areEqual(this.f24028b, aVar.f24028b) && Intrinsics.areEqual(this.f24029c, aVar.f24029c) && Intrinsics.areEqual(this.f24030d, aVar.f24030d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f24027a.hashCode() * 31;
            String str = this.f24028b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f24029c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f24030d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f24027a;
            String str2 = this.f24028b;
            Date date = this.f24029c;
            Date date2 = this.f24030d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f24031a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f24031a = extractionRawPayload;
        }

        public String a() {
            return this.f24031a;
        }

        public final fo.a b() {
            return fo.a.f23935o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f24031a, ((b) obj).f24031a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24031a.hashCode();
        }

        public String toString() {
            String str = this.f24031a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
