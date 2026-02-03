package fj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private static b f24031a;

    private b() {
    }

    public static b b() {
        if (f24031a == null) {
            f24031a = new b();
        }
        return f24031a;
    }

    @Override // fj.a
    public long a() {
        return System.currentTimeMillis();
    }
}
