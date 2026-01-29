package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f46998a;

    /* renamed from: b  reason: collision with root package name */
    private final char f46999b;

    /* renamed from: c  reason: collision with root package name */
    private final double f47000c;

    /* renamed from: d  reason: collision with root package name */
    private final double f47001d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47002e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47003f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f46998a = list;
        this.f46999b = c10;
        this.f47000c = d10;
        this.f47001d = d11;
        this.f47002e = str;
        this.f47003f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f46998a;
    }

    public double b() {
        return this.f47001d;
    }

    public int hashCode() {
        return c(this.f46999b, this.f47003f, this.f47002e);
    }
}
