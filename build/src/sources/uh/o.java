package uh;

import java.util.Date;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o extends e {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f51532a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f51533b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f51534c;

    /* renamed from: d  reason: collision with root package name */
    private final Date f51535d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51536e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ o(Integer num, Integer num2, Integer num3, Date date, String str, n nVar) {
        this.f51532a = num;
        this.f51533b = num2;
        this.f51534c = num3;
        this.f51535d = date;
        this.f51536e = str;
    }

    @Override // uh.e
    public final Integer a() {
        return this.f51533b;
    }

    @Override // uh.e
    public final Integer b() {
        return this.f51534c;
    }

    @Override // uh.e
    public final String d() {
        return this.f51536e;
    }

    @Override // uh.e
    public final Date e() {
        return this.f51535d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            Integer num = this.f51532a;
            if (num != null ? num.equals(eVar.f()) : eVar.f() == null) {
                Integer num2 = this.f51533b;
                if (num2 != null ? num2.equals(eVar.a()) : eVar.a() == null) {
                    Integer num3 = this.f51534c;
                    if (num3 != null ? num3.equals(eVar.b()) : eVar.b() == null) {
                        Date date = this.f51535d;
                        if (date != null ? date.equals(eVar.e()) : eVar.e() == null) {
                            String str = this.f51536e;
                            if (str != null ? str.equals(eVar.d()) : eVar.d() == null) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    @Override // uh.e
    public final Integer f() {
        return this.f51532a;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        Integer num = this.f51532a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        Integer num2 = this.f51533b;
        if (num2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num2.hashCode();
        }
        int i11 = hashCode ^ 1000003;
        Integer num3 = this.f51534c;
        if (num3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = num3.hashCode();
        }
        int i12 = ((((i11 * 1000003) ^ hashCode2) * 1000003) ^ hashCode3) * 1000003;
        Date date = this.f51535d;
        if (date == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = date.hashCode();
        }
        int i13 = (i12 ^ hashCode4) * 1000003;
        String str = this.f51536e;
        if (str != null) {
            i10 = str.hashCode();
        }
        return i13 ^ i10;
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f51535d);
        return "AgeSignalsResult{userStatus=" + this.f51532a + ", ageLower=" + this.f51533b + ", ageUpper=" + this.f51534c + ", mostRecentApprovalDate=" + valueOf + ", installId=" + this.f51536e + "}";
    }
}
