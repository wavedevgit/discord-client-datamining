package fj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private static b f25228a;

    private b() {
    }

    public static b b() {
        if (f25228a == null) {
            f25228a = new b();
        }
        return f25228a;
    }

    @Override // fj.a
    public long a() {
        return System.currentTimeMillis();
    }
}
