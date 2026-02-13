package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f46720a;

    /* renamed from: b  reason: collision with root package name */
    private final char f46721b;

    /* renamed from: c  reason: collision with root package name */
    private final double f46722c;

    /* renamed from: d  reason: collision with root package name */
    private final double f46723d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46724e;

    /* renamed from: f  reason: collision with root package name */
    private final String f46725f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f46720a = list;
        this.f46721b = c10;
        this.f46722c = d10;
        this.f46723d = d11;
        this.f46724e = str;
        this.f46725f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f46720a;
    }

    public double b() {
        return this.f46723d;
    }

    public int hashCode() {
        return c(this.f46721b, this.f46725f, this.f46724e);
    }
}
