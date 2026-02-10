package z1;

import android.util.Base64;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f56014a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56015b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56016c;

    /* renamed from: d  reason: collision with root package name */
    private final List f56017d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56018e;

    /* renamed from: f  reason: collision with root package name */
    private final String f56019f;

    /* renamed from: g  reason: collision with root package name */
    private final String f56020g;

    /* renamed from: h  reason: collision with root package name */
    private final String f56021h;

    public e(String str, String str2, String str3, List list) {
        this(str, str2, str3, list, null, null);
    }

    private String a(String str, String str2, String str3, String str4, String str5) {
        return str + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    }

    public List b() {
        return this.f56017d;
    }

    public int c() {
        return this.f56018e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d() {
        return this.f56021h;
    }

    public String e() {
        return this.f56014a;
    }

    public String f() {
        return this.f56015b;
    }

    public String g() {
        return this.f56016c;
    }

    public String h() {
        return this.f56019f;
    }

    public String i() {
        return this.f56020g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("FontRequest {mProviderAuthority: " + this.f56014a + ", mProviderPackage: " + this.f56015b + ", mQuery: " + this.f56016c + ", mSystemFont: " + this.f56019f + ", mVariationSettings: " + this.f56020g + ", mCertificates:");
        for (int i10 = 0; i10 < this.f56017d.size(); i10++) {
            sb2.append(" [");
            List list = (List) this.f56017d.get(i10);
            for (int i11 = 0; i11 < list.size(); i11++) {
                sb2.append(" \"");
                sb2.append(Base64.encodeToString((byte[]) list.get(i11), 0));
                sb2.append("\"");
            }
            sb2.append(" ]");
        }
        sb2.append("}");
        sb2.append("mCertificatesArray: " + this.f56018e);
        return sb2.toString();
    }

    public e(String str, String str2, String str3, List list, String str4, String str5) {
        this.f56014a = (String) b2.e.g(str);
        this.f56015b = (String) b2.e.g(str2);
        this.f56016c = (String) b2.e.g(str3);
        this.f56017d = (List) b2.e.g(list);
        this.f56018e = 0;
        this.f56019f = str4;
        this.f56020g = str5;
        this.f56021h = a(str, str2, str3, str4, str5);
    }
}
