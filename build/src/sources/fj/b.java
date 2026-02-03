package fj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private static b f24439a;

    private b() {
    }

    public static b b() {
        if (f24439a == null) {
            f24439a = new b();
        }
        return f24439a;
    }

    @Override // fj.a
    public long a() {
        return System.currentTimeMillis();
    }
}
