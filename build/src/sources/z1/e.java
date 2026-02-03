package z1;

import android.util.Base64;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f55514a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55515b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55516c;

    /* renamed from: d  reason: collision with root package name */
    private final List f55517d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55518e;

    /* renamed from: f  reason: collision with root package name */
    private final String f55519f;

    /* renamed from: g  reason: collision with root package name */
    private final String f55520g;

    /* renamed from: h  reason: collision with root package name */
    private final String f55521h;

    public e(String str, String str2, String str3, List list) {
        this(str, str2, str3, list, null, null);
    }

    private String a(String str, String str2, String str3, String str4, String str5) {
        return str + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    }

    public List b() {
        return this.f55517d;
    }

    public int c() {
        return this.f55518e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d() {
        return this.f55521h;
    }

    public String e() {
        return this.f55514a;
    }

    public String f() {
        return this.f55515b;
    }

    public String g() {
        return this.f55516c;
    }

    public String h() {
        return this.f55519f;
    }

    public String i() {
        return this.f55520g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("FontRequest {mProviderAuthority: " + this.f55514a + ", mProviderPackage: " + this.f55515b + ", mQuery: " + this.f55516c + ", mSystemFont: " + this.f55519f + ", mVariationSettings: " + this.f55520g + ", mCertificates:");
        for (int i10 = 0; i10 < this.f55517d.size(); i10++) {
            sb2.append(" [");
            List list = (List) this.f55517d.get(i10);
            for (int i11 = 0; i11 < list.size(); i11++) {
                sb2.append(" \"");
                sb2.append(Base64.encodeToString((byte[]) list.get(i11), 0));
                sb2.append("\"");
            }
            sb2.append(" ]");
        }
        sb2.append("}");
        sb2.append("mCertificatesArray: " + this.f55518e);
        return sb2.toString();
    }

    public e(String str, String str2, String str3, List list, String str4, String str5) {
        this.f55514a = (String) b2.e.g(str);
        this.f55515b = (String) b2.e.g(str2);
        this.f55516c = (String) b2.e.g(str3);
        this.f55517d = (List) b2.e.g(list);
        this.f55518e = 0;
        this.f55519f = str4;
        this.f55520g = str5;
        this.f55521h = a(str, str2, str3, str4, str5);
    }
}
