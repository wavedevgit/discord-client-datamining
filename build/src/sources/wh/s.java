package wh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {
    public static Object a(Object obj) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException("Cannot return null from a non-@Nullable @Provides method");
    }
}
