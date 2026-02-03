package nn;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f41970a;

        /* renamed from: b  reason: collision with root package name */
        private final String f41971b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f41972c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f41973d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f41970a = extractionRawPayload;
            this.f41971b = str;
            this.f41972c = date;
            this.f41973d = date2;
        }

        public final Date a() {
            return this.f41972c;
        }

        public final Date b() {
            return this.f41973d;
        }

        public String c() {
            return this.f41970a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f41970a, aVar.f41970a) && Intrinsics.areEqual(this.f41971b, aVar.f41971b) && Intrinsics.areEqual(this.f41972c, aVar.f41972c) && Intrinsics.areEqual(this.f41973d, aVar.f41973d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f41970a.hashCode() * 31;
            String str = this.f41971b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f41972c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f41973d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f41970a;
            String str2 = this.f41971b;
            Date date = this.f41972c;
            Date date2 = this.f41973d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f41974a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f41974a = extractionRawPayload;
        }

        public String a() {
            return this.f41974a;
        }

        public final nn.a b() {
            return nn.a.f41878o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f41974a, ((b) obj).f41974a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f41974a.hashCode();
        }

        public String toString() {
            String str = this.f41974a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
