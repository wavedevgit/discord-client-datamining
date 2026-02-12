package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f46152a;

    /* renamed from: b  reason: collision with root package name */
    private final char f46153b;

    /* renamed from: c  reason: collision with root package name */
    private final double f46154c;

    /* renamed from: d  reason: collision with root package name */
    private final double f46155d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46156e;

    /* renamed from: f  reason: collision with root package name */
    private final String f46157f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f46152a = list;
        this.f46153b = c10;
        this.f46154c = d10;
        this.f46155d = d11;
        this.f46156e = str;
        this.f46157f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f46152a;
    }

    public double b() {
        return this.f46155d;
    }

    public int hashCode() {
        return c(this.f46153b, this.f46157f, this.f46156e);
    }
}
