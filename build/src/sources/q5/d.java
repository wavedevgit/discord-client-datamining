package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f47269a;

    /* renamed from: b  reason: collision with root package name */
    private final char f47270b;

    /* renamed from: c  reason: collision with root package name */
    private final double f47271c;

    /* renamed from: d  reason: collision with root package name */
    private final double f47272d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47273e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47274f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f47269a = list;
        this.f47270b = c10;
        this.f47271c = d10;
        this.f47272d = d11;
        this.f47273e = str;
        this.f47274f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f47269a;
    }

    public double b() {
        return this.f47272d;
    }

    public int hashCode() {
        return c(this.f47270b, this.f47274f, this.f47273e);
    }
}
