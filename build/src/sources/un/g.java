package un;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f51724a;

        /* renamed from: b  reason: collision with root package name */
        private final String f51725b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f51726c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f51727d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f51724a = extractionRawPayload;
            this.f51725b = str;
            this.f51726c = date;
            this.f51727d = date2;
        }

        public final Date a() {
            return this.f51726c;
        }

        public final Date b() {
            return this.f51727d;
        }

        public String c() {
            return this.f51724a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f51724a, aVar.f51724a) && Intrinsics.areEqual(this.f51725b, aVar.f51725b) && Intrinsics.areEqual(this.f51726c, aVar.f51726c) && Intrinsics.areEqual(this.f51727d, aVar.f51727d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f51724a.hashCode() * 31;
            String str = this.f51725b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f51726c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f51727d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f51724a;
            String str2 = this.f51725b;
            Date date = this.f51726c;
            Date date2 = this.f51727d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f51728a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f51728a = extractionRawPayload;
        }

        public String a() {
            return this.f51728a;
        }

        public final un.a b() {
            return un.a.f51632o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f51728a, ((b) obj).f51728a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f51728a.hashCode();
        }

        public String toString() {
            String str = this.f51728a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
