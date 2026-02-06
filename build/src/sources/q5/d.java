package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f46531a;

    /* renamed from: b  reason: collision with root package name */
    private final char f46532b;

    /* renamed from: c  reason: collision with root package name */
    private final double f46533c;

    /* renamed from: d  reason: collision with root package name */
    private final double f46534d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46535e;

    /* renamed from: f  reason: collision with root package name */
    private final String f46536f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f46531a = list;
        this.f46532b = c10;
        this.f46533c = d10;
        this.f46534d = d11;
        this.f46535e = str;
        this.f46536f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f46531a;
    }

    public double b() {
        return this.f46534d;
    }

    public int hashCode() {
        return c(this.f46532b, this.f46536f, this.f46535e);
    }
}
