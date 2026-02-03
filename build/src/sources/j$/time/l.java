package j$.time;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class l extends k {

    /* renamed from: a  reason: collision with root package name */
    public final String f31379a;

    /* renamed from: b  reason: collision with root package name */
    public final transient j$.time.zone.c f31380b;

    public static l C(String str) {
        Objects.requireNonNull(str, "zoneId");
        int length = str.length();
        if (length >= 2) {
            for (int i10 = 0; i10 < length; i10++) {
                char charAt = str.charAt(i10);
                if ((charAt < 'a' || charAt > 'z') && ((charAt < 'A' || charAt > 'Z') && ((charAt != '/' || i10 == 0) && ((charAt < '0' || charAt > '9' || i10 == 0) && ((charAt != '~' || i10 == 0) && ((charAt != '.' || i10 == 0) && ((charAt != '_' || i10 == 0) && ((charAt != '+' || i10 == 0) && (charAt != '-' || i10 == 0))))))))) {
                    throw new DateTimeException("Invalid ID for region-based ZoneId, invalid format: ".concat(str));
                }
            }
            return new l(str, j$.time.zone.e.a(str));
        }
        throw new DateTimeException("Invalid ID for region-based ZoneId, invalid format: ".concat(str));
    }

    public l(String str, j$.time.zone.c cVar) {
        this.f31379a = str;
        this.f31380b = cVar;
    }

    @Override // j$.time.k
    public final String r() {
        return this.f31379a;
    }

    @Override // j$.time.k
    public final j$.time.zone.c t() {
        j$.time.zone.c cVar = this.f31380b;
        return cVar != null ? cVar : j$.time.zone.e.a(this.f31379a);
    }
}
