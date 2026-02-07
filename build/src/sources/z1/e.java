package z1;

import android.util.Base64;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f55879a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55880b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55881c;

    /* renamed from: d  reason: collision with root package name */
    private final List f55882d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55883e;

    /* renamed from: f  reason: collision with root package name */
    private final String f55884f;

    /* renamed from: g  reason: collision with root package name */
    private final String f55885g;

    /* renamed from: h  reason: collision with root package name */
    private final String f55886h;

    public e(String str, String str2, String str3, List list) {
        this(str, str2, str3, list, null, null);
    }

    private String a(String str, String str2, String str3, String str4, String str5) {
        return str + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    }

    public List b() {
        return this.f55882d;
    }

    public int c() {
        return this.f55883e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d() {
        return this.f55886h;
    }

    public String e() {
        return this.f55879a;
    }

    public String f() {
        return this.f55880b;
    }

    public String g() {
        return this.f55881c;
    }

    public String h() {
        return this.f55884f;
    }

    public String i() {
        return this.f55885g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("FontRequest {mProviderAuthority: " + this.f55879a + ", mProviderPackage: " + this.f55880b + ", mQuery: " + this.f55881c + ", mSystemFont: " + this.f55884f + ", mVariationSettings: " + this.f55885g + ", mCertificates:");
        for (int i10 = 0; i10 < this.f55882d.size(); i10++) {
            sb2.append(" [");
            List list = (List) this.f55882d.get(i10);
            for (int i11 = 0; i11 < list.size(); i11++) {
                sb2.append(" \"");
                sb2.append(Base64.encodeToString((byte[]) list.get(i11), 0));
                sb2.append("\"");
            }
            sb2.append(" ]");
        }
        sb2.append("}");
        sb2.append("mCertificatesArray: " + this.f55883e);
        return sb2.toString();
    }

    public e(String str, String str2, String str3, List list, String str4, String str5) {
        this.f55879a = (String) b2.e.g(str);
        this.f55880b = (String) b2.e.g(str2);
        this.f55881c = (String) b2.e.g(str3);
        this.f55882d = (List) b2.e.g(list);
        this.f55883e = 0;
        this.f55884f = str4;
        this.f55885g = str5;
        this.f55886h = a(str, str2, str3, str4, str5);
    }
}
