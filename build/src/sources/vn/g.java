package vn;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f52632a;

        /* renamed from: b  reason: collision with root package name */
        private final String f52633b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f52634c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f52635d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f52632a = extractionRawPayload;
            this.f52633b = str;
            this.f52634c = date;
            this.f52635d = date2;
        }

        public final Date a() {
            return this.f52634c;
        }

        public final Date b() {
            return this.f52635d;
        }

        public String c() {
            return this.f52632a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f52632a, aVar.f52632a) && Intrinsics.areEqual(this.f52633b, aVar.f52633b) && Intrinsics.areEqual(this.f52634c, aVar.f52634c) && Intrinsics.areEqual(this.f52635d, aVar.f52635d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f52632a.hashCode() * 31;
            String str = this.f52633b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f52634c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f52635d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f52632a;
            String str2 = this.f52633b;
            Date date = this.f52634c;
            Date date2 = this.f52635d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f52636a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f52636a = extractionRawPayload;
        }

        public String a() {
            return this.f52636a;
        }

        public final vn.a b() {
            return vn.a.f52540o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f52636a, ((b) obj).f52636a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52636a.hashCode();
        }

        public String toString() {
            String str = this.f52636a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
