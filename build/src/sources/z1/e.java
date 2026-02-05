package z1;

import android.util.Base64;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final String f55100a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55101b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55102c;

    /* renamed from: d  reason: collision with root package name */
    private final List f55103d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55104e;

    /* renamed from: f  reason: collision with root package name */
    private final String f55105f;

    /* renamed from: g  reason: collision with root package name */
    private final String f55106g;

    /* renamed from: h  reason: collision with root package name */
    private final String f55107h;

    public e(String str, String str2, String str3, List list) {
        this(str, str2, str3, list, null, null);
    }

    private String a(String str, String str2, String str3, String str4, String str5) {
        return str + "-" + str2 + "-" + str3 + "-" + str4 + "-" + str5;
    }

    public List b() {
        return this.f55103d;
    }

    public int c() {
        return this.f55104e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String d() {
        return this.f55107h;
    }

    public String e() {
        return this.f55100a;
    }

    public String f() {
        return this.f55101b;
    }

    public String g() {
        return this.f55102c;
    }

    public String h() {
        return this.f55105f;
    }

    public String i() {
        return this.f55106g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("FontRequest {mProviderAuthority: " + this.f55100a + ", mProviderPackage: " + this.f55101b + ", mQuery: " + this.f55102c + ", mSystemFont: " + this.f55105f + ", mVariationSettings: " + this.f55106g + ", mCertificates:");
        for (int i10 = 0; i10 < this.f55103d.size(); i10++) {
            sb2.append(" [");
            List list = (List) this.f55103d.get(i10);
            for (int i11 = 0; i11 < list.size(); i11++) {
                sb2.append(" \"");
                sb2.append(Base64.encodeToString((byte[]) list.get(i11), 0));
                sb2.append("\"");
            }
            sb2.append(" ]");
        }
        sb2.append("}");
        sb2.append("mCertificatesArray: " + this.f55104e);
        return sb2.toString();
    }

    public e(String str, String str2, String str3, List list, String str4, String str5) {
        this.f55100a = (String) b2.e.g(str);
        this.f55101b = (String) b2.e.g(str2);
        this.f55102c = (String) b2.e.g(str3);
        this.f55103d = (List) b2.e.g(list);
        this.f55104e = 0;
        this.f55105f = str4;
        this.f55106g = str5;
        this.f55107h = a(str, str2, str3, str4, str5);
    }
}
