package z1;

import android.util.Base64;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f56015a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56016b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56017c;

    /* renamed from: d  reason: collision with root package name */
    private final List f56018d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56019e;

    /* renamed from: f  reason: collision with root package name */
    private final String f56020f;

    /* renamed from: g  reason: collision with root package name */
    private final String f56021g;

    /* renamed from: h  reason: collision with root package name */
    private final String f56022h;

    public e(String str, String str2, String str3, List list) {
        this(str, str2, str3, list, null, null);
    }

    private String a(String str, String str2, String str3, String str4, String str5) {
        return str + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    }

    public List b() {
        return this.f56018d;
    }

    public int c() {
        return this.f56019e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d() {
        return this.f56022h;
    }

    public String e() {
        return this.f56015a;
    }

    public String f() {
        return this.f56016b;
    }

    public String g() {
        return this.f56017c;
    }

    public String h() {
        return this.f56020f;
    }

    public String i() {
        return this.f56021g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("FontRequest {mProviderAuthority: " + this.f56015a + ", mProviderPackage: " + this.f56016b + ", mQuery: " + this.f56017c + ", mSystemFont: " + this.f56020f + ", mVariationSettings: " + this.f56021g + ", mCertificates:");
        for (int i10 = 0; i10 < this.f56018d.size(); i10++) {
            sb2.append(" [");
            List list = (List) this.f56018d.get(i10);
            for (int i11 = 0; i11 < list.size(); i11++) {
                sb2.append(" \"");
                sb2.append(Base64.encodeToString((byte[]) list.get(i11), 0));
                sb2.append("\"");
            }
            sb2.append(" ]");
        }
        sb2.append("}");
        sb2.append("mCertificatesArray: " + this.f56019e);
        return sb2.toString();
    }

    public e(String str, String str2, String str3, List list, String str4, String str5) {
        this.f56015a = (String) b2.e.g(str);
        this.f56016b = (String) b2.e.g(str2);
        this.f56017c = (String) b2.e.g(str3);
        this.f56018d = (List) b2.e.g(list);
        this.f56019e = 0;
        this.f56020f = str4;
        this.f56021g = str5;
        this.f56022h = a(str, str2, str3, str4, str5);
    }
}
