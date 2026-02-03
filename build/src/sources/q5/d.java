package q5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f47419a;

    /* renamed from: b  reason: collision with root package name */
    private final char f47420b;

    /* renamed from: c  reason: collision with root package name */
    private final double f47421c;

    /* renamed from: d  reason: collision with root package name */
    private final double f47422d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47423e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47424f;

    public d(List list, char c10, double d10, double d11, String str, String str2) {
        this.f47419a = list;
        this.f47420b = c10;
        this.f47421c = d10;
        this.f47422d = d11;
        this.f47423e = str;
        this.f47424f = str2;
    }

    public static int c(char c10, String str, String str2) {
        return (((c10 * 31) + str.hashCode()) * 31) + str2.hashCode();
    }

    public List a() {
        return this.f47419a;
    }

    public double b() {
        return this.f47422d;
    }

    public int hashCode() {
        return c(this.f47420b, this.f47424f, this.f47423e);
    }
}
