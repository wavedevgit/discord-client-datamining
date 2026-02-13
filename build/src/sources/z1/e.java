package z1;

import android.util.Base64;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f56583a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56584b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56585c;

    /* renamed from: d  reason: collision with root package name */
    private final List f56586d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56587e;

    /* renamed from: f  reason: collision with root package name */
    private final String f56588f;

    /* renamed from: g  reason: collision with root package name */
    private final String f56589g;

    /* renamed from: h  reason: collision with root package name */
    private final String f56590h;

    public e(String str, String str2, String str3, List list) {
        this(str, str2, str3, list, null, null);
    }

    private String a(String str, String str2, String str3, String str4, String str5) {
        return str + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    }

    public List b() {
        return this.f56586d;
    }

    public int c() {
        return this.f56587e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d() {
        return this.f56590h;
    }

    public String e() {
        return this.f56583a;
    }

    public String f() {
        return this.f56584b;
    }

    public String g() {
        return this.f56585c;
    }

    public String h() {
        return this.f56588f;
    }

    public String i() {
        return this.f56589g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("FontRequest {mProviderAuthority: " + this.f56583a + ", mProviderPackage: " + this.f56584b + ", mQuery: " + this.f56585c + ", mSystemFont: " + this.f56588f + ", mVariationSettings: " + this.f56589g + ", mCertificates:");
        for (int i10 = 0; i10 < this.f56586d.size(); i10++) {
            sb2.append(" [");
            List list = (List) this.f56586d.get(i10);
            for (int i11 = 0; i11 < list.size(); i11++) {
                sb2.append(" \"");
                sb2.append(Base64.encodeToString((byte[]) list.get(i11), 0));
                sb2.append("\"");
            }
            sb2.append(" ]");
        }
        sb2.append("}");
        sb2.append("mCertificatesArray: " + this.f56587e);
        return sb2.toString();
    }

    public e(String str, String str2, String str3, List list, String str4, String str5) {
        this.f56583a = (String) b2.e.g(str);
        this.f56584b = (String) b2.e.g(str2);
        this.f56585c = (String) b2.e.g(str3);
        this.f56586d = (List) b2.e.g(list);
        this.f56587e = 0;
        this.f56588f = str4;
        this.f56589g = str5;
        this.f56590h = a(str, str2, str3, str4, str5);
    }
}
