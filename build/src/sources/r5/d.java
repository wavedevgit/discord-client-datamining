package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f47697a;

    /* renamed from: b  reason: collision with root package name */
    private final char f47698b;

    /* renamed from: c  reason: collision with root package name */
    private final double f47699c;

    /* renamed from: d  reason: collision with root package name */
    private final double f47700d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47701e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47702f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f47697a = list;
        this.f47698b = c10;
        this.f47699c = d10;
        this.f47700d = d11;
        this.f47701e = str;
        this.f47702f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f47697a;
    }

    public double b() {
        return this.f47700d;
    }

    public int hashCode() {
        return c(this.f47698b, this.f47702f, this.f47701e);
    }
}
