package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f47483a;

    /* renamed from: b  reason: collision with root package name */
    private final char f47484b;

    /* renamed from: c  reason: collision with root package name */
    private final double f47485c;

    /* renamed from: d  reason: collision with root package name */
    private final double f47486d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47487e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47488f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f47483a = list;
        this.f47484b = c10;
        this.f47485c = d10;
        this.f47486d = d11;
        this.f47487e = str;
        this.f47488f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f47483a;
    }

    public double b() {
        return this.f47486d;
    }

    public int hashCode() {
        return c(this.f47484b, this.f47488f, this.f47487e);
    }
}
