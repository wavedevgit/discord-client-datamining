package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f46579a;

    /* renamed from: b  reason: collision with root package name */
    private final char f46580b;

    /* renamed from: c  reason: collision with root package name */
    private final double f46581c;

    /* renamed from: d  reason: collision with root package name */
    private final double f46582d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46583e;

    /* renamed from: f  reason: collision with root package name */
    private final String f46584f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f46579a = list;
        this.f46580b = c10;
        this.f46581c = d10;
        this.f46582d = d11;
        this.f46583e = str;
        this.f46584f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f46579a;
    }

    public double b() {
        return this.f46582d;
    }

    public int hashCode() {
        return c(this.f46580b, this.f46584f, this.f46583e);
    }
}
