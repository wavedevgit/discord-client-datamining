package r5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f46151a;

    /* renamed from: b  reason: collision with root package name */
    private final char f46152b;

    /* renamed from: c  reason: collision with root package name */
    private final double f46153c;

    /* renamed from: d  reason: collision with root package name */
    private final double f46154d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46155e;

    /* renamed from: f  reason: collision with root package name */
    private final String f46156f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f46151a = list;
        this.f46152b = c10;
        this.f46153c = d10;
        this.f46154d = d11;
        this.f46155e = str;
        this.f46156f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f46151a;
    }

    public double b() {
        return this.f46154d;
    }

    public int hashCode() {
        return c(this.f46152b, this.f46156f, this.f46155e);
    }
}
