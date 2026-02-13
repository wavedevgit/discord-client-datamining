package mj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private static b f37090a;

    private b() {
    }

    public static b b() {
        if (f37090a == null) {
            f37090a = new b();
        }
        return f37090a;
    }

    @Override // mj.a
    public long a() {
        return System.currentTimeMillis();
    }
}
