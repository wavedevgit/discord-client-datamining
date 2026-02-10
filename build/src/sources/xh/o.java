package xh;

import java.util.Date;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o extends e {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f54788a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f54789b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f54790c;

    /* renamed from: d  reason: collision with root package name */
    private final Date f54791d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54792e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ o(Integer num, Integer num2, Integer num3, Date date, String str, n nVar) {
        this.f54788a = num;
        this.f54789b = num2;
        this.f54790c = num3;
        this.f54791d = date;
        this.f54792e = str;
    }

    @Override // xh.e
    public final Integer a() {
        return this.f54789b;
    }

    @Override // xh.e
    public final Integer b() {
        return this.f54790c;
    }

    @Override // xh.e
    public final String d() {
        return this.f54792e;
    }

    @Override // xh.e
    public final Date e() {
        return this.f54791d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            Integer num = this.f54788a;
            if (num != null ? num.equals(eVar.f()) : eVar.f() == null) {
                Integer num2 = this.f54789b;
                if (num2 != null ? num2.equals(eVar.a()) : eVar.a() == null) {
                    Integer num3 = this.f54790c;
                    if (num3 != null ? num3.equals(eVar.b()) : eVar.b() == null) {
                        Date date = this.f54791d;
                        if (date != null ? date.equals(eVar.e()) : eVar.e() == null) {
                            String str = this.f54792e;
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

    @Override // xh.e
    public final Integer f() {
        return this.f54788a;
    }

    public final int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        Integer num = this.f54788a;
        int i10 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        Integer num2 = this.f54789b;
        if (num2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num2.hashCode();
        }
        int i11 = hashCode ^ 1000003;
        Integer num3 = this.f54790c;
        if (num3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = num3.hashCode();
        }
        int i12 = ((((i11 * 1000003) ^ hashCode2) * 1000003) ^ hashCode3) * 1000003;
        Date date = this.f54791d;
        if (date == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = date.hashCode();
        }
        int i13 = (i12 ^ hashCode4) * 1000003;
        String str = this.f54792e;
        if (str != null) {
            i10 = str.hashCode();
        }
        return i13 ^ i10;
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f54791d);
        return "AgeSignalsResult{userStatus=" + this.f54788a + ", ageLower=" + this.f54789b + ", ageUpper=" + this.f54790c + ", mostRecentApprovalDate=" + valueOf + ", installId=" + this.f54792e + "}";
    }
}
