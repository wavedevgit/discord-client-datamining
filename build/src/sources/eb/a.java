package eb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22706a = new a();

    private a() {
    }

    public static final int a(int i10, Object obj) {
        int i11;
        int i12 = i10 * 31;
        if (obj != null) {
            i11 = obj.hashCode();
        } else {
            i11 = 0;
        }
        return i12 + i11;
    }
}
