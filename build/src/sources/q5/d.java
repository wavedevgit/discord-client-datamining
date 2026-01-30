package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f47014a;

    /* renamed from: b  reason: collision with root package name */
    private final char f47015b;

    /* renamed from: c  reason: collision with root package name */
    private final double f47016c;

    /* renamed from: d  reason: collision with root package name */
    private final double f47017d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47018e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47019f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f47014a = list;
        this.f47015b = c10;
        this.f47016c = d10;
        this.f47017d = d11;
        this.f47018e = str;
        this.f47019f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f47014a;
    }

    public double b() {
        return this.f47017d;
    }

    public int hashCode() {
        return c(this.f47015b, this.f47019f, this.f47018e);
    }
}
