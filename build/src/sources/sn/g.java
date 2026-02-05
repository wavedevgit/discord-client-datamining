package sn;

import java.util.Date;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f49878a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49879b;

        /* renamed from: c  reason: collision with root package name */
        private final Date f49880c;

        /* renamed from: d  reason: collision with root package name */
        private final Date f49881d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String extractionRawPayload, String str, Date date, Date date2) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f49878a = extractionRawPayload;
            this.f49879b = str;
            this.f49880c = date;
            this.f49881d = date2;
        }

        public final Date a() {
            return this.f49880c;
        }

        public final Date b() {
            return this.f49881d;
        }

        public String c() {
            return this.f49878a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f49878a, aVar.f49878a) && Intrinsics.areEqual(this.f49879b, aVar.f49879b) && Intrinsics.areEqual(this.f49880c, aVar.f49880c) && Intrinsics.areEqual(this.f49881d, aVar.f49881d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3 = this.f49878a.hashCode() * 31;
            String str = this.f49879b;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode3 + hashCode) * 31;
            Date date = this.f49880c;
            if (date == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = date.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            Date date2 = this.f49881d;
            if (date2 != null) {
                i10 = date2.hashCode();
            }
            return i12 + i10;
        }

        public String toString() {
            String str = this.f49878a;
            String str2 = this.f49879b;
            Date date = this.f49880c;
            Date date2 = this.f49881d;
            return "MrzBarcodeInfo(extractionRawPayload=" + str + ", identificationNumber=" + str2 + ", birthdate=" + date + ", expirationDate=" + date2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final String f49882a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String extractionRawPayload) {
            super(null);
            Intrinsics.checkNotNullParameter(extractionRawPayload, "extractionRawPayload");
            this.f49882a = extractionRawPayload;
        }

        public String a() {
            return this.f49882a;
        }

        public final sn.a b() {
            return sn.a.f49786o.d(a());
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && Intrinsics.areEqual(this.f49882a, ((b) obj).f49882a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f49882a.hashCode();
        }

        public String toString() {
            String str = this.f49882a;
            return "Pdf417BarcodeInfo(extractionRawPayload=" + str + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
